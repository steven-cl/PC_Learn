import CPU from '@assets/CPU.png'; 
import Ram from '@assets/RAM.png'; 
import Memoria from '@assets/Memoria.jpg'; 
import Gpu from '@assets/Gpu.jpg'; 
import Mother from '@assets/Mother.png'; 
import Fuente from '@assets/Fuente.png'; 
import Ventilador from '@assets/Ventilador.png'; 
import Ranura from '@assets/Ranuras.png'; 
import CardBasics from '@/components/ui/CardBasics';
import * as FA from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PcComponents() {
  return (
    <div className="bg-gray-200">
      <section className="bg-gradient-to-r from-blue-400 to-blue-900 text-white py-12 md:py-20">
        <div className="mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Componentes Clave de una Computadora</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Conoce los componentes esenciales que hacen funcionar tu PC
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-50">
                <div className="bg-[var(--tech-blue)] p-4">
                  <h3 className="text-white text-xl font-bold">Componentes del PC</h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-2">
                    <li>
                      <a href="#cpu" className="flex items-center text-[var(--tech-blue)] hover:text-blue-700 p-2 rounded hover:bg-blue-50">
                        <FontAwesomeIcon icon={FA.faMicrochip} className="mr-2 text-sm" />
                        CPU
                      </a>
                    </li>
                    <li>
                      <a href="#ram" className="flex items-center text-[var(--tech-blue)] hover:text-blue-700 p-2 rounded hover:bg-blue-50">
                        <FontAwesomeIcon icon={FA.faMemory} className="mr-2 text-sm" />
                        Memoria RAM
                      </a>
                    </li>
                    <li>
                      <a href="#storage" className="flex items-center text-[var(--tech-blue)] hover:text-blue-700 p-2 rounded hover:bg-blue-50">
                        <FontAwesomeIcon icon={FA.faHdd} className="mr-2 text-sm" />
                        Almacenamiento
                      </a>
                    </li>
                    <li>
                      <a href="#gpu" className="flex items-center text-[var(--tech-blue)] hover:text-blue-700 p-2 rounded hover:bg-blue-50">
                        <FontAwesomeIcon icon={FA.faDesktop} className="mr-2 text-sm" />
                        GPU
                      </a>
                    </li>
                    <li>
                      <a href="#motherboard" className="flex items-center text-[var(--tech-blue)] hover:text-blue-700 p-2 rounded hover:bg-blue-50">
                        <FontAwesomeIcon icon={FA.faMicrochip} className="mr-2 text-sm" />
                        Placa Base
                      </a>
                    </li>
                    <li>
                      <a href="#psu" className="flex items-center text-[var(--tech-blue)] hover:text-blue-700 p-2 rounded hover:bg-blue-50">
                        <FontAwesomeIcon icon={FA.faBolt} className="mr-2 text-sm" />
                        Fuente de Poder
                      </a>
                    </li>
                    <li>
                      <a href="#cooling" className="flex items-center text-[var(--tech-blue)] hover:text-blue-700 p-2 rounded hover:bg-blue-50">
                        <FontAwesomeIcon icon={FA.faFan} className="mr-2 text-sm" />
                        Refrigeración
                      </a>
                    </li>
                    <li>
                      <a href="#expansion" className="flex items-center text-[var(--tech-blue)] hover:text-blue-700 p-2 rounded hover:bg-blue-50">
                        <FontAwesomeIcon icon={FA.faPlug} className="mr-2 text-sm" />
                        Ranuras PCI
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              {/* CPU Section */}
              <div id="cpu" className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                <div className="bg-[var(--tech-blue)] p-6">
                  <h2 className="text-white text-2xl font-bold flex items-center">
                    <FontAwesomeIcon icon={FA.faMicrochip} className="mr-3" />
                    CPU (Unidad Central de Procesamiento)
                  </h2>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <img
                      src={CPU}
                      alt="CPU"
                      className="mx-auto w-full md:w-2/3 rounded-lg shadow-md mb-4"
                    />
                  </div>

                  <div className="mb-6">
                    <p className="text-justify text-[var(--neutral-gray)] mb-4">
                      La <strong>CPU</strong>, o Unidad Central de Procesamiento, es el <strong>componente principal de procesamiento</strong> en una computadora. 
                      A menudo se la denomina el <strong>"cerebro del sistema"</strong>, ya que se encarga de interpretar y ejecutar instrucciones provenientes tanto del hardware como del software.
                    </p>
                    <p className="text-justify text-[var(--neutral-gray)] mb-4">
                      El CPU realiza operaciones básicas como <strong>cálculos matemáticos, decisiones lógicas y control de flujo de datos</strong> en el sistema. 
                      Su rendimiento afecta directamente la velocidad general y la capacidad de respuesta del equipo.
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <CardBasics
                      Icon={FA.faCogs}
                      Title='Componentes del CPU'
                      ListItems={[
                        'Unidad de Control: Dirige todas las operaciones del sistema',
                        'ALU: Realiza operaciones matemáticas y lógicas',
                        'Registros: Almacenamiento temporal de alta velocidad',
                        'Cache: Memoria ultra rápida para datos frecuentes'
                      ]}
                    />
                    <CardBasics
                      Icon={FA.faLayerGroup}
                      Title='Tipos de Núcleos'
                      ListItems={[
                        'Single-core: Una instrucción a la vez (obsoleto)',
                        'Multi-core: Múltiples procesos en paralelo',
                        'Hyper-Threading: Múltiples hilos por núcleo',
                        'Turbo Boost: Frecuencia dinámica según demanda'
                      ]}
                    />
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <CardBasics
                      Icon={FA.faIndustry}
                      Title='Principales Fabricantes'
                      ListItems={[
                        'Intel: Core i3, i5, i7, i9 - Ampliamente utilizados',
                        'AMD: Ryzen - Excelente rendimiento/precio',
                        'Apple: M1, M2 - Chips ARM para Mac',
                        'Qualcomm: Snapdragon - Procesadores móviles'
                      ]}
                    />
                    <CardBasics
                      Icon={FA.faUsers}
                      Title='Según Tipo de Usuario'
                      ListItems={[
                        'Doméstico: i3/Ryzen 3 para tareas básicas',
                        'Gaming: i5-i7/Ryzen 5-7 para juegos exigentes',
                        'Profesional: i9/Ryzen 9 para renderizado y edición',
                        'Servidores: Xeon/EPYC para cargas empresariales'
                      ]}
                    />
                  </div>

                  <div className="bg-gray-100 rounded-lg p-6">
                    <h4 className="font-bold text-[var(--tech-blue)] mb-3 flex items-center">
                      <FontAwesomeIcon icon={FA.faLightbulb} className="mr-2" /> 
                      Punto Clave
                    </h4>
                    <p className="text-[var(--neutral-gray)]">
                      El CPU es esencial para el funcionamiento eficiente de cualquier computadora. Su velocidad, cantidad de núcleos e integraciones modernas 
                      determinan la capacidad del sistema para realizar tareas simples o complejas. La elección correcta depende del uso previsto y presupuesto disponible.
                    </p>
                  </div>
                </div>
              </div>

              {/* RAM Section */}
              <div id="ram" className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                <div className="bg-[var(--tech-blue)] p-6">
                  <h2 className="text-white text-2xl font-bold flex items-center">
                    <FontAwesomeIcon icon={FA.faMemory} className="mr-3" />
                    Memoria RAM (Memoria de Acceso Aleatorio)
                  </h2>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <img
                      src={Ram}
                      alt="RAM"
                      className="mx-auto w-full md:w-2/3 rounded-lg shadow-md mb-4"
                    />
                  </div>

                  <div className="mb-6">
                    <p className="text-justify text-[var(--neutral-gray)] mb-4">
                      La <strong>RAM</strong> (Random Access Memory) es un tipo de memoria volátil que almacena temporalmente los datos y programas que la CPU necesita en tiempo real. 
                      Cuanta más RAM tenga un sistema, mayor será su capacidad para realizar múltiples tareas sin perder velocidad.
                    </p>
                    <p className="text-justify text-[var(--neutral-gray)] mb-4">
                      A diferencia del almacenamiento permanente (como un disco duro o SSD), la RAM <strong>pierde toda su información al apagar el equipo</strong>. 
                      Su función principal es agilizar el acceso a la información que el sistema operativo y las aplicaciones utilizan con frecuencia.
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <CardBasics
                      Icon={FA.faClock}
                      Title='Tipos de RAM'
                      ListItems={[
                        'DDR3: Tecnología antigua, 800-2133 MHz',
                        'DDR4: Estándar actual, 2133-3600+ MHz',
                        'DDR5: Nueva generación, mayor velocidad',
                        'LPDDR: Versión de bajo consumo para móviles'
                      ]}
                    />
                    <CardBasics
                      Icon={FA.faChartBar}
                      Title='Capacidad Recomendada'
                      ListItems={[
                        '8 GB: Mínimo para usuarios domésticos',
                        '16 GB: Ideal para gaming y multitarea',
                        '32 GB: Edición de video y diseño profesional',
                        '64 GB+: Estaciones de trabajo especializadas'
                      ]}
                    />
                  </div>

                  <div className="bg-gray-100 rounded-lg p-6">
                    <h4 className="font-bold text-[var(--tech-blue)] mb-3 flex items-center">
                      <FontAwesomeIcon icon={FA.faRocket} className="mr-2" /> 
                      ¿Cómo Funciona?
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[var(--neutral-gray)]">
                      <div>
                        <p className="mb-2"><strong>Carga de aplicaciones:</strong> Cuando abres una aplicación, se carga desde el disco a la RAM para ejecutarse más rápidamente.</p>
                      </div>
                      <div>
                        <p><strong>Memoria insuficiente:</strong> Si no hay suficiente RAM, el sistema usa el almacenamiento como memoria virtual, reduciendo el rendimiento.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}