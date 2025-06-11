import { useState, useEffect } from 'react';

const ComputerRecommender = () => {
  const [presupuesto, setPresupuesto] = useState('');
  const [usoSeleccionado, setUsoSeleccionado] = useState('gaming');
  const [movilidadSeleccionada, setMovilidadSeleccionada] = useState('no');
  const [mostrarComponentes, setMostrarComponentes] = useState(false);
  const [seleccionComponentes, setSeleccionComponentes] = useState({});
  const [resultado, setResultado] = useState('');

  const catalogo = {
    "Intel Core i5 10400F": 130,
    "Intel Core i7 11700K": 320,
    "AMD Ryzen 5 5600X": 160,
    "AMD Ryzen 7 5800X": 300,
    "NVIDIA RTX 3060": 300,
    "NVIDIA RTX 3070": 500,
    "AMD Radeon RX 6600": 250,
    "AMD Radeon RX 6700 XT": 480,
    "16GB RAM DDR4": 60,
    "32GB RAM DDR4": 110,
    "64GB RAM DDR4": 200,
    "512GB SSD": 50,
    "1TB SSD": 90,
    "2TB SSD": 160,
    "Fuente 600W": 50,
    "Fuente 750W": 70,
    "Gabinete con ventilación": 70,
    "Gabinete premium": 120,
    "Monitor 24 pulgadas": 120,
    "Monitor 27 pulgadas": 200,
    "Batería portátil": 40,
    "Refrigeración líquida": 90
  };

  const categorias = {
    cpu: ["Intel Core i5 10400F", "Intel Core i7 11700K", "AMD Ryzen 5 5600X", "AMD Ryzen 7 5800X"],
    gpu: ["NVIDIA RTX 3060", "NVIDIA RTX 3070", "AMD Radeon RX 6600", "AMD Radeon RX 6700 XT"],
    ram: ["16GB RAM DDR4", "32GB RAM DDR4", "64GB RAM DDR4"],
    almacenamiento: ["512GB SSD", "1TB SSD", "2TB SSD"],
    fuente: ["Fuente 600W", "Fuente 750W"],
    gabinete: ["Gabinete con ventilación", "Gabinete premium"],
    monitor: ["Monitor 24 pulgadas", "Monitor 27 pulgadas"],
    bateria: ["Batería portátil"],
    refrigeracion: ["Refrigeración líquida"]
  };

  const obligatorios = ["cpu", "ram", "almacenamiento"];

  const perfiles = {
    gaming: {
      cpu: "AMD Ryzen 7 5800X",
      gpu: "NVIDIA RTX 3070",
      ram: "32GB RAM DDR4",
      almacenamiento: "1TB SSD",
      fuente: "Fuente 750W",
      gabinete: "Gabinete premium",
      monitor: "Monitor 27 pulgadas",
      bateria: "Batería portátil",
      refrigeracion: "Refrigeración líquida"
    },
    oficina: {
      cpu: "Intel Core i5 10400F",
      gpu: null,
      ram: "16GB RAM DDR4",
      almacenamiento: "512GB SSD",
      fuente: "Fuente 600W",
      gabinete: "Gabinete con ventilación",
      monitor: "Monitor 24 pulgadas",
      bateria: "Batería portátil",
      refrigeracion: null
    },
    edicion: {
      cpu: "AMD Ryzen 7 5800X",
      gpu: "AMD Radeon RX 6700 XT",
      ram: "64GB RAM DDR4",
      almacenamiento: "2TB SSD",
      fuente: "Fuente 750W",
      gabinete: "Gabinete premium",
      monitor: "Monitor 27 pulgadas",
      bateria: "Batería portátil",
      refrigeracion: "Refrigeración líquida"
    },
    programacion: {
      cpu: "AMD Ryzen 5 5600X",
      gpu: null,
      ram: "32GB RAM DDR4",
      almacenamiento: "1TB SSD",
      fuente: "Fuente 600W",
      gabinete: "Gabinete con ventilación",
      monitor: "Monitor 24 pulgadas",
      bateria: "Batería portátil",
      refrigeracion: null
    },
    renderizacion: {
      cpu: "Intel Core i7 11700K",
      gpu: "NVIDIA RTX 3070",
      ram: "64GB RAM DDR4",
      almacenamiento: "2TB SSD",
      fuente: "Fuente 750W",
      gabinete: "Gabinete premium",
      monitor: "Monitor 27 pulgadas",
      bateria: "Batería portátil",
      refrigeracion: "Refrigeración líquida"
    }
  };

  useEffect(() => {
    actualizarComponentes();
  }, [usoSeleccionado, movilidadSeleccionada]);

  const actualizarComponentes = () => {
    const nuevosComponentes = {};
    const categoriasExcluirLaptop = ["fuente", "gabinete", "monitor", "bateria", "refrigeracion"];

    for (const categoria in categorias) {
      if (movilidadSeleccionada === "si" && categoriasExcluirLaptop.includes(categoria)) continue;

      const componentePredefinido = perfiles[usoSeleccionado][categoria];
      if (componentePredefinido) {
        nuevosComponentes[componentePredefinido] = true;
      }
    }

    setSeleccionComponentes(nuevosComponentes);
  };

  const handleComponenteChange = (componente, categoria, isChecked) => {
    setSeleccionComponentes(prev => {
      const nuevosComponentes = { ...prev };

      if (obligatorios.includes(categoria)) {
        // Para componentes obligatorios (radio buttons), primero eliminamos todos los de esa categoría
        Object.keys(nuevosComponentes).forEach(comp => {
          if (categorias[categoria].includes(comp)) {
            delete nuevosComponentes[comp];
          }
        });
      }

      if (isChecked) {
        nuevosComponentes[componente] = true;
      } else {
        delete nuevosComponentes[componente];
      }

      return nuevosComponentes;
    });
  };

  const calcularCosto = () => {
    const presupuestoNum = parseInt(presupuesto, 10);

    if (!presupuesto || isNaN(presupuestoNum)) {
      setResultado("⚠️ Ingresa un presupuesto válido (número entero positivo).");
      return;
    }

    const seleccionKeys = Object.keys(seleccionComponentes);
    if (seleccionKeys.length === 0) {
      setResultado("⚠️ Por favor selecciona al menos un componente.");
      return;
    }

    let total = 0;
    let lista = "<ul>";
    seleccionKeys.forEach(comp => {
      total += catalogo[comp];
      lista += `<li>${comp}: $${catalogo[comp]}</li>`;
    });
    lista += "</ul>";

    let resultadoHTML = `<strong>Total:</strong> $${total} de $${presupuesto}<br>`;
    resultadoHTML += total <= presupuestoNum
      ? "<span style='color:green;'>✅ Dentro del presupuesto</span>"
      : "<span style='color:red;'>❌ Sobrepasa el presupuesto</span>";
    resultadoHTML += lista;

    let busqueda = movilidadSeleccionada === "si" ? "laptop+" : "computadora+de+escritorio+";
    busqueda += seleccionKeys.join(" ").replace(/\s+/g, "+");
    const urlAmazon = `https://www.amazon.com/s?k=${busqueda}`;
    resultadoHTML += `<br><br><a href="${urlAmazon}" target="_blank" style="color:#2563eb; font-weight:600;">Buscar en Amazon 🔗</a>`;

    setResultado(resultadoHTML);
  };

  return (
    <div className="bg-gray-400 text-black">
        <div className=" font-sans">
      <section className="bg-gradient-to-r from-blue-500 to-blue-900 text-white py-12 px-4 text-center">
        <h1 className="text-4xl font-extrabold">Recomendador de Computadoras</h1>
        <p className="text-lg max-w-2xl mx-auto my-4">
          Ingresa tu presupuesto y selecciona tus necesidades para obtener una recomendación personalizada
        </p>
      </section>

      <div className="max-w-4xl mx-auto my-8 px-4">
        <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <label htmlFor="presupuesto" className="block mb-2">Presupuesto ($):</label>
          <input
            type="number"
            id="presupuesto"
            min="0"
            step="1"
            value={presupuesto}
            onChange={(e) => setPresupuesto(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-4">¿Para qué se usará la computadora?</h2>
          {['gaming', 'oficina', 'edicion', 'programacion', 'renderizacion'].map((uso) => (
            <label key={uso} className="flex items-center gap-2 mt-2">
              <input
                type="radio"
                name="uso"
                value={uso}
                checked={usoSeleccionado === uso}
                onChange={() => setUsoSeleccionado(uso)}
                className="mr-2"
              />
              {uso.charAt(0).toUpperCase() + uso.slice(1)}
            </label>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-4">¿La computadora debe poder movilizarse?</h2>
          <label className="flex items-center gap-2 mt-2">
            <input
              type="radio"
              name="movilidad"
              value="si"
              checked={movilidadSeleccionada === 'si'}
              onChange={() => setMovilidadSeleccionada('si')}
              className="mr-2"
            />
            Sí
          </label>
          <label className="flex items-center gap-2 mt-2">
            <input
              type="radio"
              name="movilidad"
              value="no"
              checked={movilidadSeleccionada === 'no'}
              onChange={() => setMovilidadSeleccionada('no')}
              className="mr-2"
            />
            No
          </label>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-4">Selecciona los componentes:</h2>
          <button
            onClick={() => setMostrarComponentes(!mostrarComponentes)}
            className="bg-white text-blue-600 font-semibold cursor-pointer mt-4 inline-block"
          >
            Opciones avanzadas
          </button>
          
          {mostrarComponentes && (
            <div id="componentesSugeridos" className="mt-4">
              {Object.entries(categorias).map(([categoria, componentes]) => {
                if (movilidadSeleccionada === "si" && ["fuente", "gabinete", "monitor", "bateria", "refrigeracion"].includes(categoria)) {
                  return null;
                }

                return (
                  <div key={categoria} className="mb-4">
                    <strong className="block mb-2 text-lg text-gray-700">
                      {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                    </strong>
                    {componentes.map((componente) => (
                      <label key={componente} className="flex items-center gap-2 mt-2">
                        <input
                          type={obligatorios.includes(categoria) ? "radio" : "checkbox"}
                          name={obligatorios.includes(categoria) ? `radio_${categoria}` : `check_${categoria}`}
                          value={componente}
                          checked={!!seleccionComponentes[componente]}
                          onChange={(e) => handleComponenteChange(componente, categoria, e.target.checked)}
                          className="mr-2"
                        />
                        {componente} (${catalogo[componente]})
                      </label>
                    ))}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="text-center">
          <button
            onClick={calcularCosto}
            className="bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors mt-4"
          >
            Recomendar
          </button>
        </div>

        {resultado && (
          <div
            className="mt-8 p-4 rounded-lg bg-gray-200"
            dangerouslySetInnerHTML={{ __html: resultado }}
          />
        )}
      </div>
    </div>
    </div>
  );
};

export default ComputerRecommender;