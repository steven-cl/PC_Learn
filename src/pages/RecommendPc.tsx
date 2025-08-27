import { useState, useMemo, useEffect } from 'react';
import data from '../../data.json';

const CATEGORIAS = [
  "Informática / Programación / TI",
  "Redes y Telecomunicaciones",
  "Diseño y Artes Digitales",
  "Marketing / Negocios / Community Manager",
  "Finanzas / Contabilidad / Economía",
  "Arquitectura / Ingeniería / Modelado 3D",
  "Salud / Medicina",
  "Educación / Docencia",
  "Comunicación / Periodismo / Multimedia",
  "Derecho / Ciencias Jurídicas",
  "Ciencia / Investigación / Modelado científico",
  "Estudiantes / Hogar",
  "Gaming",
] as const;

type CategoriaClave = typeof CATEGORIAS[number];

interface EquipmentOption {
  Tipo: string;
  Modelo: string;
  CPU: string;
  RAM: string;
  Almacenamiento: string;
  GPU: string;
  Precio: string;
  Pantalla?: string;
}

type CareerCategory = Record<"1" | "2" | "3" | "4", EquipmentOption>;
type RootData = Partial<Record<CategoriaClave, CareerCategory>>;
const rootData = data as RootData;

const parsePrecio = (precio: string | undefined): number =>
  !precio ? 0 : (parseInt(precio.replace(/[^\d]/g, ''), 10) || 0);

const limpiarModelo = (m: string) => m.replace(/\+/g, ' ');

const cardBase =
  'rounded-2xl bg-white/80 backdrop-blur shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow';

const headingGrad =
  'bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent';

const chip =
  'inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium tracking-wide uppercase';

const ComputerRecommender = () => {
  // Inicialmente ninguna categoría seleccionada
  const [categoria, setCategoria] = useState<CategoriaClave | null>(null);
  const [presupuesto, setPresupuesto] = useState<string>('');
  const [presupuestoError, setPresupuestoError] = useState<string>('');
  const [selecciones, setSelecciones] = useState<EquipmentOption[]>([]);
  const [mensaje, setMensaje] = useState<string>('');

  const handlePresupuestoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value.trim();
    setPresupuesto(v);
    if (v && !/^\d+$/.test(v)) {
      setPresupuestoError('Ingrese solo números (sin espacios, puntos ni letras).');
    } else {
      setPresupuestoError('');
    }
  };

  const recomendar = () => {
    if (!categoria) {
      setSelecciones([]);
      setMensaje('');
      return;
    }

    if (presupuestoError) {
      setMensaje('Corrige el presupuesto antes de continuar.');
      setSelecciones([]);
      return;
    }

    setMensaje('');
    setSelecciones([]);
    const grupo = rootData[categoria];
    if (!grupo) {
      setMensaje('No hay datos para esta categoría.');
      return;
    }

    const opciones = ["1","2","3","4"].map(k => grupo[k as keyof CareerCategory]).filter(Boolean) as EquipmentOption[];
    if (!opciones.length) {
      setMensaje('No hay configuraciones disponibles.');
      return;
    }

    const presupuestoNum = parseInt(presupuesto.replace(/[^\d]/g, ''), 10);
    if (!presupuesto || isNaN(presupuestoNum) || presupuestoNum <= 0) {
      const medio = opciones[Math.min(1, opciones.length - 1)];
      setSelecciones([medio]);
      setMensaje('Ingresa un presupuesto para afinar la recomendación.');
      return;
    }

    const pc = ["1","2"].map(k => grupo[k as "1"|"2"]).filter(Boolean) as EquipmentOption[];
    const lap = ["3","4"].map(k => grupo[k as "3"|"4"]).filter(Boolean) as EquipmentOption[];

    const mejorDentro = (arr: EquipmentOption[]) =>
      arr.filter(o => parsePrecio(o.Precio) <= presupuestoNum)
         .sort((a,b) => parsePrecio(b.Precio)-parsePrecio(a.Precio))[0];

    const pcSel = mejorDentro(pc);
    const lapSel = mejorDentro(lap);

    if (pcSel || lapSel) {
      const todasCab = opciones.every(o => parsePrecio(o.Precio) <= presupuestoNum);
      if (todasCab && opciones.length === 4) {
        setSelecciones(opciones);
        setMensaje('Tu presupuesto cubre todas las opciones.');
        return;
      }
      setSelecciones([...(pcSel? [pcSel]: []), ...(lapSel? [lapSel]: [])]);
      setMensaje('Opciones dentro del presupuesto (una por tipo).');
      return;
    }

    const orden = [...opciones].sort((a,b)=>parsePrecio(a.Precio)-parsePrecio(b.Precio));
    const masBarata = orden[0];
    const masBarataLaptop = orden.find(o => /laptop/i.test(o.Tipo));
    const lista: EquipmentOption[] = [];
    if (masBarata) lista.push(masBarata);
    if (masBarataLaptop && masBarataLaptop !== masBarata) lista.push(masBarataLaptop);
    setSelecciones(lista);
    setMensaje('Presupuesto insuficiente. Mostrando las más económicas.');
  };

  useEffect(() => {
    recomendar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoria, presupuesto, presupuestoError]);

  const presupuestoNum = useMemo(
    () => parseInt(presupuesto.replace(/[^\d]/g, ''), 10) || 0,
    [presupuesto]
  );

  const grupoActual = categoria ? rootData[categoria] : undefined;

  const baseOptionsToShow = useMemo(() => {
    if (!grupoActual) return [];
    const { ["1"]: op1, ["2"]: op2, ["3"]: op3, ["4"]: op4 } = grupoActual;
    const mostrar: EquipmentOption[] = [];
    if (op1) mostrar.push(op1);
    if (op3 && op3 !== op1) mostrar.push(op3);

    const tolera = (o?: EquipmentOption) => {
      if (!o || !presupuestoNum) return false;
      const precio = parsePrecio(o.Precio);
      if (!precio) return false;
      const diff = precio - presupuestoNum;
      const tolerancia = precio >= 1000 ? 100 : 50;
      return diff <= tolerancia;
    };
    if (op2 && tolera(op2)) mostrar.push(op2);
    if (op4 && tolera(op4)) mostrar.push(op4);
    return mostrar;
  }, [grupoActual, presupuestoNum]);

  const estadoPresupuesto = (opt: EquipmentOption) => {
    if (!presupuestoNum) return null;
    const precio = parsePrecio(opt.Precio);
    if (!precio) return null;
    const diff = precio - presupuestoNum;
    if (diff > 0) {
      return <span className="text-xs font-medium text-red-600">Faltan ${diff.toLocaleString()}</span>;
    }
    return <span className="text-xs font-medium text-emerald-600">Dentro del presupuesto</span>;
  };

  const tipoBadgeColor = (tipo: string) => {
    if (/laptop/i.test(tipo)) return 'bg-cyan-600/10 text-cyan-700 ring-cyan-600/20';
    if (/pc/i.test(tipo)) return 'bg-emerald-600/10 text-emerald-700 ring-emerald-600/20';
    return 'bg-gray-500/10 text-gray-700 ring-gray-500/20';
  };

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-100 text-gray-800">
      <section className="bg-gradient-to-r from-blue-400 to-blue-900 text-white py-12 md:py-20">
        <div className="mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Recomendador de computadora</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Selecciona el uso principal e ingresa tu presupuesto para ver configuraciones sugeridas.
          </p>
        </div>
      </section>
      <div className="mx-auto max-w-6xl px-4 py-10">

        <div className="grid gap-8 lg:grid-cols-3">
          <aside className="space-y-8 lg:col-span-1">
            <section className={cardBase + ' p-5'}>
              <h2 className="text-sm font-semibold text-gray-700 mb-3">Categoría de uso</h2>
              <div className="max-h-[420px] overflow-y-auto pr-1 custom-scroll thin-scroll">
                <fieldset className="space-y-2">
                  {CATEGORIAS.map(cat => (
                    <label
                      key={cat}
                      className={`flex cursor-pointer items-start gap-2 rounded-lg p-2 transition
                      hover:bg-emerald-50/70 ${
                        categoria === cat ? 'bg-[#d7dfff] ring-1 ring-[#2863eb]' : 'bg-white'
                      }`}
                    >
                      <input
                        type="radio"
                        name="categoria"
                        value={cat}
                        checked={categoria === cat}
                        onChange={() => setCategoria(cat)}
                        className="mt-0.5 accent-[#2863eb]"
                      />
                      <span className="text-xs leading-tight">{cat}</span>
                    </label>
                  ))}
                </fieldset>
              </div>
            </section>

            <section className={cardBase + ' p-5'}>
              <h2 className="text-sm font-semibold text-gray-700 mb-3">Presupuesto (USD)</h2>
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Ej: 1200"
                  value={presupuesto}
                  onChange={handlePresupuestoChange}
                  disabled={!categoria}
                  className={`w-75 rounded-lg border bg-white px-3 py-2 text-sm outline-none focus:ring-2
                    ${presupuestoError
                      ? 'border-red-400 focus:border-red-500 focus:ring-red-200'
                      : 'border-gray-300 focus:border-[#2863eb] focus:ring-[#d7dfff]'} text-gray-800 disabled:bg-gray-100 disabled:cursor-not-allowed`}
                />
                {presupuestoError && (
                  <p className="text-[11px] font-medium text-red-600">{presupuestoError}</p>
                )}
                {!presupuestoError && (
                  <p className="text-[11px] text-gray-500">
                    {categoria ? 'Opcional. Si se omite, se mostrará una sugerencia estándar.' : 'Primero selecciona una categoría.'}
                  </p>
                )}
              </div>
              {mensaje && categoria && (
                <p className={`mt-4 rounded-md px-3 py-2 text-[11px] font-medium ${
                  presupuestoError ? 'bg-red-50 text-red-700' : 'bg-emerald-50 text-emerald-700'
                }`}>
                  {mensaje}
                </p>
              )}
            </section>
          </aside>

          <main className="lg:col-span-2 space-y-8">
            {!categoria && (
              <div className={cardBase + ' p-10 text-center text-sm text-gray-600'}>
                Selecciona una categoría para ver recomendaciones.
              </div>
            )}

            {categoria && selecciones.length > 0 && (
              <div className="space-y-6">
                {selecciones.map((sel, idx) => {
                  const precio = parsePrecio(sel.Precio);
                  return (
                    <div key={idx} className={cardBase + ' p-6'}>
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-semibold tracking-tight">
                            {limpiarModelo(sel.Modelo)}
                          </h3>
                          <div className="mt-1 flex flex-wrap gap-2">
                            <span className={`${chip} ring ${tipoBadgeColor(sel.Tipo)}`}>
                              {sel.Tipo}
                            </span>
                            {precio > 0 && (
                              <span className="inline-flex items-center rounded-md bg-gray-900/90 px-2 py-0.5 text-[11px] font-medium text-white">
                                ${precio.toLocaleString()}
                              </span>
                            )}
                            {estadoPresupuesto(sel)}
                          </div>
                        </div>
                        <a
                          href={`https://www.amazon.com/s?k=${encodeURIComponent(
                          `${limpiarModelo(sel.Modelo)} ${sel.CPU} ${sel.GPU}`
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 rounded-lg bg-[#28633b] px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#21522f] focus:outline-none focus:ring-2 focus:ring-[#28633b] no-underline"
                          style={{ textDecoration: 'none' }}
                        >
                          Buscar en Amazon
                          <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h4m0 0v4m0-4l-8 8" />
                          </svg>
                        </a>
                      </div>
                      <div className="mt-5 grid gap-3 sm:grid-cols-2 text-[13px]">
                        <div className="space-y-1">
                          <p><span className="font-semibold text-gray-700">CPU: </span>{sel.CPU}</p>
                          <p><span className="font-semibold text-gray-700">RAM: </span>{sel.RAM}</p>
                          <p><span className="font-semibold text-gray-700">Almacenamiento: </span>{sel.Almacenamiento}</p>
                        </div>
                        <div className="space-y-1">
                          <p><span className="font-semibold text-gray-700">GPU: </span>{sel.GPU}</p>
                          {sel.Pantalla && (
                            <p><span className="font-semibold text-gray-700">Pantalla: </span>{sel.Pantalla}</p>
                          )}
                          {precio > 0 && presupuestoNum > 0 && precio < presupuestoNum && (
                            <p className="text-[11px] text-gray-500">
                              Te sobran ${ (presupuestoNum - precio).toLocaleString() }.
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {categoria && selecciones.length === 0 && baseOptionsToShow.length > 0 && (
              <div className="space-y-6">
                {baseOptionsToShow.map((opt, i) => {
                  const precio = parsePrecio(opt.Precio);
                  return (
                    <div key={i} className={cardBase + ' p-5'}>
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3 className="text-sm font-semibold">
                          {limpiarModelo(opt.Modelo)}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className={`${chip} ring ${tipoBadgeColor(opt.Tipo)}`}>{opt.Tipo}</span>
                          {precio > 0 && (
                            <span className="text-xs font-semibold text-gray-700">
                              ${precio.toLocaleString()}
                            </span>
                          )}
                          {estadoPresupuesto(opt)}
                        </div>
                      </div>
                      <ul className="mt-3 grid gap-1 text-[11px] text-gray-600 sm:grid-cols-2">
                        <li><span className="font-medium text-gray-700">CPU:</span> {opt.CPU}</li>
                        <li><span className="font-medium text-gray-700">RAM:</span> {opt.RAM}</li>
                        <li><span className="font-medium text-gray-700">Alm.:</span> {opt.Almacenamiento}</li>
                        <li><span className="font-medium text-gray-700">GPU:</span> {opt.GPU}</li>
                        {opt.Pantalla && <li className="sm:col-span-2"><span className="font-medium text-gray-700">Pantalla:</span> {opt.Pantalla}</li>}
                      </ul>
                    </div>
                  );
                })}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ComputerRecommender;
