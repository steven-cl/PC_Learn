import CPU from '@assets/CPU.png'; 
import Ram from '@assets/RAM.png'; 
import Memoria from '@assets/Memoria.jpg'; 
import Gpu from '@assets/Gpu.jpg'; 
import Mother from '@assets/Mother.png'; 
import Fuente from '@assets/Fuente.png'; 
import Ventilador from '@assets/Ventilador.png'; 
import Ranura from '@assets/Ranuras.png'; 
import * as FA from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PcComponents() {
  return (
    <div className="bg-gray-200">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-400 to-blue-900 text-white py-12 md:py-20">
        <div className="mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Componentes Clave de una Computadora
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Guía completa de los componentes fundamentales que conforman una PC moderna
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-50">
                <div className="bg-[var(--tech-blue)] p-4">
                  <h3 className="text-white text-xl font-bold">Componentes</h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-2">
                    <li>
                      <a href="#cpu" className="flex items-center text-[var(--tech-blue)] hover:text-blue-700 p-2 rounded hover:bg-blue-50">
                        <FontAwesomeIcon icon={FA.faMicrochip} className="mr-2 text-sm" />
                        CPU (Procesador)
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
                        <FontAwesomeIcon icon={FA.faDisplay} className="mr-2 text-sm" />
                        GPU (Tarjeta Gráfica)
                      </a>
                    </li>
                    <li>
                      <a href="#motherboard" className="flex items-center text-[var(--tech-blue)] hover:text-blue-700 p-2 rounded hover:bg-blue-50">
                        <FontAwesomeIcon icon={FA.faCircuitBoard} className="mr-2 text-sm" />
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

            {/* Content Area */}
            <div className="lg:col-span-2">

              {/* CPU Section */}
              <div id="cpu" className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                <div className="bg-[var(--tech-blue)] p-6">
                  <h2 className="text-white text-2xl font-bold flex items-center">
                    <FontAwesomeIcon icon={FA.faMicrochip} className="mr-3" />
                    1. CPU (Unidad Central de Procesamiento)
                  </h2>
                </div>
                <div className="p-6">
                  <img
                    src={CPU}
                    alt="CPU"
                    className="mx-auto w-full md:w-2/3 rounded-lg shadow-md mb-6"
                  />
                  
                  <div className="space-y-4">
                    <p className="text-justify text-[var(--neutral-gray)]">
                      La <strong>CPU</strong>, o Unidad Central de Procesamiento, es el <strong>componente principal de procesamiento</strong> en una computadora. 
                      A menudo se la denomina el <strong>"cerebro del sistema"</strong>, ya que se encarga de interpretar y ejecutar instrucciones provenientes tanto del hardware como del software.
                    </p>

                    <p className="text-justify text-[var(--neutral-gray)]">
                      El CPU realiza operaciones básicas como <strong>cálculos matemáticos, decisiones lógicas y control de flujo de datos</strong> en el sistema. 
                      Su rendimiento afecta directamente la velocidad general y la capacidad de respuesta del equipo.
                    </p>

                    <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-[var(--tech-blue)]">
                      <h3 className="text-xl font-semibold mb-3 text-[var(--tech-blue)]">Componentes Fundamentales</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <FontAwesomeIcon icon={FA.faCheckCircle} className="text-[var(--interactive-green)] mt-1 mr-2" />
                          <div><strong>Unidad de Control:</strong> Dirige todas las operaciones del sistema. Se encarga de leer las instrucciones de la memoria, decodificarlas y enviarlas a los componentes correspondientes.</div>
                        </li>
                        <li className="flex items-start">
                          <FontAwesomeIcon icon={FA.faCheckCircle} className="text-[var(--interactive-green)] mt-1 mr-2" />
                          <div><strong>Unidad Aritmético-Lógica (ALU):</strong> Realiza todas las operaciones matemáticas (como suma, resta) y lógicas (como comparaciones).</div>
                        </li>
                        <li className="flex items-start">
                          <FontAwesomeIcon icon={FA.faCheckCircle} className="text-[var(--interactive-green)] mt-1 mr-2" />
                          <div><strong>Registros:</strong> Pequeñas áreas de almacenamiento dentro del CPU que retienen datos temporalmente para ser usados rápidamente.</div>
                        </li>
                        <li className="flex items-start">
                          <FontAwesomeIcon icon={FA.faCheckCircle} className="text-[var(--interactive-green)] mt-1 mr-2" />
                          <div><strong>Cache:</strong> Memoria ultra rápida dentro del procesador que almacena instrucciones y datos usados con frecuencia para evitar acceder a la RAM constantemente.</div>
                        </li>
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-[var(--tech-blue)] mb-2 flex items-center">
                          <FontAwesomeIcon icon={FA.faCogs} className="mr-2" />
                          Tipos de Núcleos
                        </h4>
                        <ul className="space-y-1 text-sm text-[var(--neutral-gray)]">
                          <li>• <strong>Single-core:</strong> Solo puede ejecutar una instrucción a la vez. Obsoleto hoy en día.</li>
                          <li>• <strong>Multi-core:</strong> Permite ejecutar múltiples procesos en paralelo. Por ejemplo, un CPU de 4 núcleos puede ejecutar 4 tareas al mismo tiempo.</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-[var(--tech-blue)] mb-2 flex items-center">
                          <FontAwesomeIcon icon={FA.faRocket} className="mr-2" />
                          Tecnologías Modernas
                        </h4>
                        <ul className="space-y-1 text-sm text-[var(--neutral-gray)]">
                          <li>• <strong>Hyper-Threading (Intel) o SMT (AMD):</strong> Múltiples hilos por núcleo</li>
                          <li>• <strong>Turbo Boost:</strong> Aumenta automáticamente la frecuencia</li>
                          <li>• <strong>GPU integrada:</strong> Gráficos básicos incluidos</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-[var(--project-orange)]">
                      <h3 className="text-xl font-semibold mb-3 text-[var(--project-orange)]">Principales Fabricantes</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-[var(--tech-blue)] mb-2">Intel</h4>
                          <p className="text-sm text-[var(--neutral-gray)]">
                            Ofrece procesadores populares como <strong>Core i3, i5, i7, i9</strong>. Son ampliamente usados en laptops, PCs de escritorio y servidores.
                            <br /><em>Ejemplo: Intel Core i7 de 12ª generación - 8 núcleos físicos, hasta 4.9 GHz.</em>
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[var(--tech-blue)] mb-2">AMD</h4>
                          <p className="text-sm text-[var(--neutral-gray)]">
                            Su línea <strong>Ryzen</strong> ha ganado popularidad por su excelente rendimiento/precio.
                            <br /><em>Ejemplo: AMD Ryzen 7 5800X - 8 núcleos y 16 hilos, ideal para gaming y multitarea.</em>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 rounded-lg p-4 border-l-4 border-[var(--interactive-green)]">
                      <h3 className="text-xl font-semibold mb-3 text-[var(--interactive-green)]">Recomendaciones por Uso</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start">
                          <FontAwesomeIcon icon={FA.faHome} className="text-[var(--interactive-green)] mt-1 mr-2" />
                          <div><strong>Usuarios domésticos:</strong> Intel Core i3 o AMD Ryzen 3 para navegación, videos y Office.</div>
                        </div>
                        <div className="flex items-start">
                          <FontAwesomeIcon icon={FA.faGamepad} className="text-[var(--interactive-green)] mt-1 mr-2" />
                          <div><strong>Gamers:</strong> Ryzen 5/7 o Intel Core i5/i7 para juegos exigentes y multitarea.</div>
                        </div>
                        <div className="flex items-start">
                          <FontAwesomeIcon icon={FA.faPalette} className="text-[var(--interactive-green)] mt-1 mr-2" />
                          <div><strong>Profesionales creativos:</strong> Ryzen 9 o Intel Core i9 para edición de video y renderizado 3D.</div>
                        </div>
                      </div>
                    </div>

                    <p className="text-justify text-[var(--neutral-gray)] bg-gray-100 p-4 rounded-lg border-l-4 border-gray-400">
                      <strong>En resumen:</strong> El CPU es esencial para el funcionamiento eficiente de cualquier computadora. Su velocidad, cantidad de núcleos e integraciones modernas 
                      determinan la capacidad del sistema para realizar tareas simples o complejas.
                    </p>
                  </div>
                </div>
              </div>

              {/* RAM Section */}
              <div id="ram" className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                <div className="bg-[var(--tech-blue)] p-6">
                  <h2 className="text-white text-2xl font-bold flex items-center">
                    <FontAwesomeIcon icon={FA.faMemory} className="mr-3" />
                    2. Memoria RAM (Memoria de Acceso Aleatorio)
                  </h2>
                </div>
                <div className="p-6">
                  <img
                    src={Ram}
                    alt="RAM"
                    className="mx-auto w-full md:w-2/3 rounded-lg shadow-md mb-6"
                  />
                  
                  <div className="space-y-4">
                    <p className="text-justify text-[var(--neutral-gray)]">
                      La <strong>RAM</strong> (Random Access Memory) es un tipo de memoria volátil que almacena temporalmente los datos y programas que la CPU necesita en tiempo real. 
                      Cuanta más RAM tenga un sistema, mayor será su capacidad para realizar múltiples tareas sin perder velocidad.
                    </p>

                    <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                      <p className="text-[var(--neutral-gray)]">
                        A diferencia del almacenamiento permanente (como un disco duro o SSD), la RAM <strong>pierde toda su información al apagar el equipo</strong>. 
                        Su función principal es agilizar el acceso a la información que el sistema operativo y las aplicaciones utilizan con frecuencia.
                      </p>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-[var(--tech-blue)]">
                      <h3 className="text-xl font-semibold mb-3 text-[var(--tech-blue)]">¿Cómo funciona?</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <FontAwesomeIcon icon={FA.faArrowRight} className="text-[var(--tech-blue)] mt-1 mr-2" />
                          <div>Cuando abres una aplicación (por ejemplo, un navegador), esta se carga desde el disco a la RAM para ejecutarse más rápidamente.</div>
                        </li>
                        <li className="flex items-start">
                          <FontAwesomeIcon icon={FA.faArrowRight} className="text-[var(--tech-blue)] mt-1 mr-2" />
                          <div>Si no hay suficiente RAM disponible, el sistema puede volverse lento y usar el almacenamiento como memoria virtual, lo cual reduce el rendimiento.</div>
                        </li>
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4 text-center">
                        <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                          <span className="font-bold">DDR3</span>
                        </div>
                        <h4 className="font-semibold text-[var(--tech-blue)] mb-2">DDR3</h4>
                        <p className="text-sm text-[var(--neutral-gray)]">Tecnología más antigua, 800-2133 MHz</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4 text-center">
                        <div className="bg-[var(--tech-blue)] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                          <span className="font-bold">DDR4</span>
                        </div>
                        <h4 className="font-semibold text-[var(--tech-blue)] mb-2">DDR4</h4>
                        <p className="text-sm text-[var(--neutral-gray)]">Estándar actual, 2133-3600+ MHz</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4 text-center">
                        <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                          <span className="font-bold">DDR5</span>
                        </div>
                        <h4 className="font-semibold text-[var(--tech-blue)] mb-2">DDR5</h4>
                        <p className="text-sm text-[var(--neutral-gray)]">Nueva generación, mayor velocidad</p>
                      </div>
                    </div>

                    <div className="bg-green-50 rounded-lg p-4 border-l-4 border-[var(--interactive-green)]">
                      <h3 className="text-xl font-semibold mb-3 text-[var(--interactive-green)]">Capacidad Recomendada</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="bg-red-500 w-3 h-3 rounded-full mr-2"></div>
                            <span className="text-sm"><strong>4 GB:</strong> Mínimo básico (no recomendado)</span>
                          </div>
                          <div className="flex items-center">
                            <div className="bg-yellow-500 w-3 h-3 rounded-full mr-2"></div>
                            <span className="text-sm"><strong>8 GB:</strong> Usuarios domésticos y oficina</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="bg-[var(--interactive-green)] w-3 h-3 rounded-full mr-2"></div>
                            <span className="text-sm"><strong>16 GB:</strong> Gaming y diseño básico</span>
                          </div>
                          <div className="flex items-center">
                            <div className="bg-blue-500 w-3 h-3 rounded-full mr-2"></div>
                            <span className="text-sm"><strong>32+ GB:</strong> Edición profesional</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-justify text-[var(--neutral-gray)] bg-gray-100 p-4 rounded-lg border-l-4 border-gray-400">
                      <strong>En resumen:</strong> La RAM actúa como un espacio de trabajo temporal para el CPU. La cantidad y velocidad de la RAM influyen directamente en el rendimiento general del sistema.
                    </p>
                  </div>
                </div>
              </div>


              {/* Storage Section */}
              <div id="storage" className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                <div className="bg-[var(--tech-blue)] p-6">
                  <h2 className="text-white text-2xl font-bold flex items-center">
                    <FontAwesomeIcon icon={FA.faHdd} className="mr-3" />
                    3. Discos Duros (HDD) y Unidades de Estado Sólido (SSD)
                  </h2>
                </div>
                <div className="p-6">
                  <img
                    src={Memoria}
                    alt="HDD y SSD"
                    className="mx-auto w-full md:w-2/3 rounded-lg shadow-md mb-6"
                  />
                  
                  <div className="space-y-4">
                    <p className="text-justify text-[var(--neutral-gray)]">
                      Los dispositivos de almacenamiento son fundamentales para guardar de manera permanente todos los datos, programas y el sistema operativo en una computadora.
                      Existen dos tipos principales: los <strong>Discos Duros Mecánicos (HDD)</strong> y las <strong>Unidades de Estado Sólido (SSD)</strong>.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* HDD Section */}
                      <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-[var(--project-orange)]">
                        <h3 className="text-xl font-semibold mb-3 text-[var(--project-orange)] flex items-center">
                          <FontAwesomeIcon icon={FA.faHdd} className="mr-2" />
                          Discos Duros (HDD)
                        </h3>
                        <p className="text-sm text-[var(--neutral-gray)] mb-3">
                          Un HDD está compuesto por varios discos magnéticos circulares que giran a alta velocidad mientras un cabezal lee y escribe datos. 
                          Debido a sus partes mecánicas móviles, los HDD son más lentos comparados con las unidades modernas.
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <FontAwesomeIcon icon={FA.faCheckCircle} className="text-[var(--project-orange)] mt-1 mr-2" />
                            <div><strong>Capacidad:</strong> Grandes capacidades a precios económicos (1TB, 2TB+)</div>
                          </li>
                          <li className="flex items-start">
                            <FontAwesomeIcon icon={FA.faCheckCircle} className="text-[var(--project-orange)] mt-1 mr-2" />
                            <div><strong>Velocidad:</strong> 80-160 MB/s (5400-7200 RPM)</div>
                          </li>
                          <li className="flex items-start">
                            <FontAwesomeIcon icon={FA.faCheckCircle} className="text-[var(--project-orange)] mt-1 mr-2" />
                            <div><strong>Durabilidad:</strong> Susceptibles a daños físicos</div>
                          </li>
                          <li className="flex items-start">
                            <FontAwesomeIcon icon={FA.faCheckCircle} className="text-[var(--project-orange)] mt-1 mr-2" />
                            <div><strong>Uso:</strong> Almacenamiento masivo y copias de seguridad</div>
                          </li>
                        </ul>
                      </div>

                      {/* SSD Section */}
                      <div className="bg-green-50 rounded-lg p-4 border-l-4 border-[var(--interactive-green)]">
                        <h3 className="text-xl font-semibold mb-3 text-[var(--interactive-green)] flex items-center">
                          <FontAwesomeIcon icon={FA.faCaretSquareRight} className="mr-2" />
                          Unidades SSD
                        </h3>
                        <p className="text-sm text-[var(--neutral-gray)] mb-3">
                          Las SSD almacenan datos en chips de memoria flash, sin partes móviles. Esto permite velocidades mucho mayores y mayor resistencia física.
                        </p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <FontAwesomeIcon icon={FA.faCheckCircle} className="text-[var(--interactive-green)] mt-1 mr-2" />
                            <div><strong>Velocidad:</strong> 500+ MB/s (SATA), varios GB/s (NVMe)</div>
                          </li>
                          <li className="flex items-start">
                            <FontAwesomeIcon icon={FA.faCheckCircle} className="text-[var(--interactive-green)] mt-1 mr-2" />
                            <div><strong>Durabilidad:</strong> Sin partes móviles, más resistentes</div>
                          </li>
                          <li className="flex items-start">
                            <FontAwesomeIcon icon={FA.faCheckCircle} className="text-[var(--interactive-green)] mt-1 mr-2" />
                            <div><strong>Capacidad:</strong> 256GB, 512GB, 1TB+ (más caras por GB)</div>
                          </li>
                          <li className="flex items-start">
                            <FontAwesomeIcon icon={FA.faCheckCircle} className="text-[var(--interactive-green)] mt-1 mr-2" />
                            <div><strong>Uso:</strong> Sistema operativo y aplicaciones principales</div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-[var(--tech-blue)]">
                      <h3 className="text-lg font-semibold mb-3 text-[var(--tech-blue)] flex items-center">
                        <FontAwesomeIcon icon={FA.faLayerGroup} className="mr-2" />
                        Configuraciones Híbridas
                      </h3>
                      <p className="text-sm text-[var(--neutral-gray)]">
                        Muchas computadoras modernas combinan ambos tipos de almacenamiento. 
                        Un SSD se utiliza para instalar el sistema operativo y las aplicaciones más usadas, brindando rapidez, mientras que un HDD se destina a almacenar grandes cantidades de datos como videos, fotos o documentos.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4 text-center">
                        <FontAwesomeIcon icon={FA.faPlug} className="text-2xl text-[var(--tech-blue)] mb-2" />
                        <h4 className="font-semibold text-[var(--tech-blue)] mb-1">SATA</h4>
                        <p className="text-xs text-[var(--neutral-gray)]">Formato tradicional compatible</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4 text-center">
                        <FontAwesomeIcon icon={FA.faRocket} className="text-2xl text-[var(--interactive-green)] mb-2" />
                        <h4 className="font-semibold text-[var(--tech-blue)] mb-1">NVMe (PCIe)</h4>
                        <p className="text-xs text-[var(--neutral-gray)]">Más rápido que SATA</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4 text-center">
                        <FontAwesomeIcon icon={FA.faMicrochip} className="text-2xl text-[var(--project-orange)] mb-2" />
                        <h4 className="font-semibold text-[var(--tech-blue)] mb-1">M.2</h4>
                        <p className="text-xs text-[var(--neutral-gray)]">Factor de forma compacto</p>
                      </div>
                    </div>

                    <p className="text-justify text-[var(--neutral-gray)] bg-gray-100 p-4 rounded-lg border-l-4 border-gray-400">
                      <strong>En resumen:</strong> Elegir entre HDD, SSD o ambos dependerá del presupuesto y necesidades del usuario. 
                      Para un rendimiento óptimo, especialmente en tareas que requieren rapidez, un SSD es fundamental, mientras que para almacenamiento económico y masivo, los HDD siguen siendo muy útiles.
                    </p>
                  </div>
                </div>
              </div>

              {/* GPU Section */}
              <div id="gpu" className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                <div className="bg-[var(--tech-blue)] p-6">
                  <h2 className="text-white text-2xl font-bold flex items-center">
                    <FontAwesomeIcon icon={FA.faDisplay} className="mr-3" />
                    4. GPU (Unidad de Procesamiento Gráfico)
                  </h2>
                </div>
                <div className="p-6">
                  <img
                    src={Gpu}
                    alt="GPU"
                    className="mx-auto w-full md:w-2/3 rounded-lg shadow-md mb-6"
                  />
                  
                  <div className="space-y-4">
                    <p className="text-justify text-[var(--neutral-gray)]">
                      La <strong>GPU</strong> o Unidad de Procesamiento Gráfico es un componente especializado en el procesamiento de imágenes, videos y gráficos en tres dimensiones. 
                      Originalmente diseñada para acelerar el renderizado de gráficos en videojuegos, hoy en día su uso se ha expandido a otras áreas como la edición de video, diseño asistido por computadora (CAD), y computación de alto rendimiento en inteligencia artificial y aprendizaje automático.
                    </p>

                    <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-[var(--tech-blue)]">
                      <h3 className="text-xl font-semibold mb-3 text-[var(--tech-blue)]">¿Cómo funciona una GPU?</h3>
                      <p className="text-[var(--neutral-gray)]">
                        A diferencia del CPU, que está optimizado para manejar una gran variedad de tareas secuenciales, la GPU está diseñada para ejecutar muchas operaciones en paralelo. 
                        Esto permite procesar simultáneamente millones de píxeles y vértices, facilitando gráficos complejos y efectos visuales en tiempo real.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-400">
                        <h4 className="font-semibold text-yellow-600 mb-2 flex items-center">
                          <FontAwesomeIcon icon={FA.faMicrochip} className="mr-2" />
                          GPU Integrada
                        </h4>
                        <p className="text-sm text-[var(--neutral-gray)]">
                          Está incorporada dentro del CPU o placa base. No cuenta con memoria propia y comparte la memoria RAM del sistema, por lo que ofrece un rendimiento limitado. Es suficiente para tareas básicas como navegación web, reproducción de video y software de oficina.
                        </p>
                      </div>

                      <div className="bg-green-50 rounded-lg p-4 border-l-4 border-[var(--interactive-green)]">
                        <h4 className="font-semibold text-[var(--interactive-green)] mb-2 flex items-center">
                          <FontAwesomeIcon icon={FA.faRocket} className="mr-2" />
                          GPU Dedicada
                        </h4>
                        <p className="text-sm text-[var(--neutral-gray)]">
                          Tarjetas gráficas independientes que cuentan con su propia memoria llamada VRAM (Video RAM) y un procesador gráfico dedicado. Proporcionan un rendimiento superior para videojuegos, edición profesional y cálculos científicos.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-green-100 rounded-lg p-4">
                        <h4 className="font-semibold text-[var(--interactive-green)] mb-3 flex items-center">
                          <FontAwesomeIcon icon={FA.faCheckCircle} className="mr-2" />
                          NVIDIA
                        </h4>
                        <ul className="text-sm text-[var(--neutral-gray)] space-y-1">
                          <li>• Líneas GeForce (usuarios/gamers) y Quadro (profesionales)</li>
                          <li>• Tecnologías: Ray Tracing, DLSS, CUDA</li>
                          <li>• Mejoran realismo visual y aceleren tareas de cómputo</li>
                        </ul>
                      </div>

                      <div className="bg-red-100 rounded-lg p-4">
                        <h4 className="font-semibold text-red-600 mb-3 flex items-center">
                          <FontAwesomeIcon icon={FA.faCheckCircle} className="mr-2" />
                          AMD
                        </h4>
                        <ul className="text-sm text-[var(--neutral-gray)] space-y-1">
                          <li>• Serie Radeon RX (jugadores) y Radeon Pro (profesionales)</li>
                          <li>• Arquitectura RDNA</li>
                          <li>• Tecnologías: FreeSync y FidelityFX</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-[var(--project-orange)]">
                      <h3 className="text-xl font-semibold mb-3 text-[var(--project-orange)]">VRAM y su importancia</h3>
                      <p className="text-[var(--neutral-gray)]">
                        La memoria dedicada de una GPU, llamada <strong>VRAM</strong>, almacena texturas, mapas de bits y datos necesarios para renderizar imágenes rápidamente. 
                        Más VRAM permite trabajar con resoluciones más altas y modelos 3D más complejos sin pérdida de rendimiento.
                      </p>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-3 text-[var(--tech-blue)]">La GPU es fundamental para:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center">
                          <FontAwesomeIcon icon={FA.faGamepad} className="text-[var(--interactive-green)] mr-2" />
                          <span className="text-sm">Ejecutar videojuegos con gráficos de alta calidad</span>
                        </div>
                        <div className="flex items-center">
                          <FontAwesomeIcon icon={FA.faVideo} className="text-[var(--project-orange)] mr-2" />
                          <span className="text-sm">Procesar video y efectos visuales</span>
                        </div>
                        <div className="flex items-center">
                          <FontAwesomeIcon icon={FA.faBrain} className="text-[var(--tech-blue)] mr-2" />
                          <span className="text-sm">Cálculos paralelos en IA</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-justify text-[var(--neutral-gray)] bg-gray-100 p-4 rounded-lg border-l-4 border-gray-400">
                      <strong>Elegir la GPU adecuada</strong> depende del uso que se le dará: para tareas básicas, una GPU integrada puede ser suficiente, pero para trabajos gráficos o computación avanzada, es recomendable una GPU dedicada con suficiente VRAM.
                    </p>
                  </div>
                </div>
              </div>

              {/* Motherboard Section */}
              <div id="motherboard" className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                <div className="bg-[var(--tech-blue)] p-6">
                  <h2 className="text-white text-2xl font-bold flex items-center">
                    <FontAwesomeIcon icon={FA.faCircuitBoard} className="mr-3" />
                    5. Placa Base (Motherboard)
                  </h2>
                </div>
                <div className="p-6">
                  <img
                    src={Mother}
                    alt="Placa base"
                    className="mx-auto w-full md:w-2/3 rounded-lg shadow-md mb-6"
                  />
                  
                  <div className="space-y-4">
                    <p className="text-justify text-[var(--neutral-gray)]">
                      La <strong>placa base</strong>, también conocida como <em>motherboard</em>, es el componente central de una computadora. Su función es conectar todos los elementos del sistema, permitiendo que trabajen de forma coordinada. 
                      Actúa como una plataforma sobre la cual se integran el procesador (CPU), la memoria RAM, los dispositivos de almacenamiento, la tarjeta gráfica (GPU), así como otros periféricos internos y externos.
                    </p>

                    <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-[var(--tech-blue)]">
                      <p className="text-[var(--neutral-gray)]">
                        Además, la placa base contiene el <strong>chipset</strong>, un conjunto de circuitos que administra la comunicación entre el CPU, la memoria y los dispositivos periféricos. Este chipset determina muchas de las capacidades y características de la placa base, como compatibilidad con procesadores, cantidad máxima de memoria RAM soportada y número de líneas PCIe disponibles.
                      </p>
                    </div>

                    <div className="bg-green-50 rounded-lg p-4 border-l-4 border-[var(--interactive-green)]">
                      <h3 className="text-xl font-semibold mb-3 text-[var(--interactive-green)]">Funciones Principales</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <FontAwesomeIcon icon={FA.faCheckCircle} className="text-[var(--interactive-green)] mt-1 mr-2" />
                          <div>Proveer conexiones físicas y eléctricas entre todos los componentes del sistema</div>
                        </li>
                        <li className="flex items-start">
                          <FontAwesomeIcon icon={FA.faCheckCircle} className="text-[var(--interactive-green)] mt-1 mr-2" />
                          <div>Suministrar energía regulada a través de VRMs (módulos reguladores de voltaje)</div>
                        </li>
                        <li className="flex items-start">
                          <FontAwesomeIcon icon={FA.faCheckCircle} className="text-[var(--interactive-green)] mt-1 mr-2" />
                          <div>Permitir la comunicación entre el CPU, la RAM, y otros dispositivos mediante buses de datos</div>
                        </li>
                        <li className="flex items-start">
                          <FontAwesomeIcon icon={FA.faCheckCircle} className="text-[var(--interactive-green)] mt-1 mr-2" />
                          <div>Administrar la entrada/salida a través de puertos integrados como USB, HDMI, Ethernet</div>
                        </li>
                        <li className="flex items-start">
                          <FontAwesomeIcon icon={FA.faCheckCircle} className="text-[var(--interactive-green)] mt-1 mr-2" />
                          <div>Soportar opciones de expansión mediante ranuras PCI Express y puertos M.2</div>
                        </li>
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-blue-100 rounded-lg p-4 text-center">
                        <div className="bg-[var(--tech-blue)] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                          <FontAwesomeIcon icon={FA.faExpand} />
                        </div>
                        <h4 className="font-semibold text-[var(--tech-blue)] mb-2">ATX</h4>
                        <p className="text-sm text-[var(--neutral-gray)]">Estándar completo, hasta 7 ranuras de expansión</p>
                      </div>
                      <div className="bg-orange-100 rounded-lg p-4 text-center">
                        <div className="bg-[var(--project-orange)] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                          <FontAwesomeIcon icon={FA.faCompress} />
                        </div>
                        <h4 className="font-semibold text-[var(--tech-blue)] mb-2">microATX</h4>
                        <p className="text-sm text-[var(--neutral-gray)]">Tamaño compacto, 4 ranuras de expansión</p>
                      </div>
                      <div className="bg-green-100 rounded-lg p-4 text-center">
                        <div className="bg-[var(--interactive-green)] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                          <FontAwesomeIcon icon={FA.faSquare} />
                        </div>
                        <h4 className="font-semibold text-[var(--tech-blue)] mb-2">Mini-ITX</h4>
                        <p className="text-sm text-[var(--neutral-gray)]">Formato pequeño para sistemas compactos</p>
                      </div>
                    </div>

                    <p className="text-justify text-[var(--neutral-gray)] bg-gray-100 p-4 rounded-lg border-l-4 border-gray-400">
                      <strong>En resumen:</strong> La placa base no solo conecta el hardware, sino que también determina las posibilidades de crecimiento, estabilidad y rendimiento de una computadora. Elegir una placa adecuada es esencial para asegurar el éxito de cualquier proyecto de armado o actualización de PC.
                    </p>
                  </div>
                </div>
              </div>

   {/* Placa base */}
<section className="mb-10">
  <h2 className="text-2xl font-semibold text-blue-600 mb-3 text-center">
    5. Placa Base (Motherboard)
  </h2>
  <img
    src={Mother}
    alt="Placa base"
    className="mx-auto w-full md:w-2/3 rounded-lg shadow-md mb-4"
  />

  <div className="mx-4 md:mx-20 lg:mx-40">
    <p className="mb-2 text-justify">
      La <strong>placa base</strong>, también conocida como <em>motherboard</em>, es el componente central de una computadora. Su función es conectar todos los elementos del sistema, permitiendo que trabajen de forma coordinada. 
      Actúa como una plataforma sobre la cual se integran el procesador (CPU), la memoria RAM, los dispositivos de almacenamiento, la tarjeta gráfica (GPU), así como otros periféricos internos y externos.
    </p>
    <p className="mb-2 text-justify">
      Además, la placa base contiene el <strong>chipset</strong>, un conjunto de circuitos que administra la comunicación entre el CPU, la memoria y los dispositivos periféricos. Este chipset determina muchas de las capacidades y características de la placa base, como compatibilidad con procesadores, cantidad máxima de memoria RAM soportada y número de líneas PCIe disponibles.
    </p>

    <h3 className="text-xl font-semibold mb-2 text-center">Funciones principales</h3>
    <ul className="list-disc list-inside mb-4 text-justify">
      <li>Proveer conexiones físicas y eléctricas entre todos los componentes del sistema.</li>
      <li>Suministrar energía regulada a través de VRMs (módulos reguladores de voltaje).</li>
      <li>Permitir la comunicación entre el CPU, la RAM, y otros dispositivos mediante buses de datos.</li>
      <li>Administrar la entrada/salida a través de puertos integrados como USB, HDMI, Ethernet, etc.</li>
      <li>Soportar opciones de expansión mediante ranuras PCI Express y puertos M.2.</li>
    </ul>

    <h3 className="text-xl font-semibold mb-2 text-center">Factores de forma comunes</h3>
    <p className="mb-2 text-justify">
      Existen diferentes tamaños de placas base que se adaptan a distintos tipos de gabinetes y necesidades de hardware:
    </p>
    <ul className="list-disc list-inside mb-4 text-justify">
      <li><strong>ATX:</strong> Estándar completo, incluye hasta 7 ranuras de expansión, múltiples conectores SATA, y soporte para overclocking. Ideal para usuarios avanzados y gamers.</li>
      <li><strong>microATX:</strong> Tamaño más compacto, generalmente con 4 ranuras de expansión, mantiene buena compatibilidad sin sacrificar demasiadas funciones.</li>
      <li><strong>Mini-ITX:</strong> Formato pequeño para sistemas compactos o minimalistas. Generalmente cuenta con una sola ranura PCIe y menos conectores, pero suficiente para uso básico o HTPC.</li>
    </ul>

    <h3 className="text-xl font-semibold mb-2 text-center">Compatibilidad con el procesador</h3>
    <p className="mb-2 text-justify">
      Cada placa base está diseñada para ser compatible con una determinada familia de procesadores, lo cual depende del <strong>socket</strong> y el <strong>chipset</strong>. Algunos ejemplos:
    </p>
    <ul className="list-disc list-inside mb-4 text-justify">
      <li><strong>Socket AM4:</strong> Soporta la mayoría de procesadores AMD Ryzen desde la primera hasta la quinta generación.</li>
      <li><strong>Socket AM5:</strong> Introducido para Ryzen 7000, soporta DDR5 y PCIe 5.0.</li>
      <li><strong>Socket LGA 1200:</strong> Compatible con Intel de décima y undécima generación (Core i3, i5, i7, i9).</li>
      <li><strong>Socket LGA 1700:</strong> Usado en procesadores Intel Alder Lake y Raptor Lake de 12ª y 13ª generación.</li>
    </ul>
    <p className="text-justify">
      Es crucial verificar la compatibilidad entre procesador, placa base y tipo de memoria RAM antes de realizar una compra o actualización.
    </p>

    <h3 className="text-xl font-semibold mb-2 text-center">Otros componentes y puertos importantes</h3>
    <ul className="list-disc list-inside mb-4 text-justify">
      <li><strong>Ranuras de memoria RAM:</strong> Permiten instalar módulos DDR4 o DDR5, dependiendo de la compatibilidad.</li>
      <li><strong>Ranuras PCIe:</strong> Usadas para instalar tarjetas gráficas, de red, de sonido u otras expansiones.</li>
      <li><strong>Conectores SATA y M.2:</strong> Permiten conectar discos duros, SSDs y unidades NVMe de alta velocidad.</li>
      <li><strong>Puertos traseros:</strong> Incluyen USB 2.0, 3.0, 3.2, HDMI, DisplayPort, Ethernet LAN, conectores de audio y a veces puertos PS/2.</li>
      <li><strong>Conectores internos:</strong> Para ventiladores (fan headers), RGB, panel frontal, audio HD, y más.</li>
    </ul>

    <h3 className="text-xl font-semibold mb-2 text-center">Consejos para elegir una buena placa base</h3>
    <ul className="list-disc list-inside mb-4 text-justify">
      <li>Verifica que sea compatible con el procesador que planeas usar (socket y chipset).</li>
      <li>Elige una placa con buena disipación si harás overclock o usarás componentes de alto rendimiento.</li>
      <li>Considera la cantidad de puertos USB, ranuras RAM y opciones de expansión según tus necesidades.</li>
      <li>Prefiere marcas reconocidas como ASUS, MSI, Gigabyte o ASRock por su fiabilidad y soporte.</li>
    </ul>

    <p className="text-justify">
      En resumen, la placa base no solo conecta el hardware, sino que también determina las posibilidades de crecimiento, estabilidad y rendimiento de una computadora. Elegir una placa adecuada es esencial para asegurar el éxito de cualquier proyecto de armado o actualización de PC.
    </p>
  </div>
</section>



{/* Fuente de poder */}
<section className="mb-10">
  <h2 className="text-2xl font-semibold text-blue-600 mb-3 text-center">
    6. Fuente de Poder (PSU)
  </h2>
  <img
    src={Fuente}
    alt="Fuente de poder"
    className="mx-auto w-full md:w-2/3 rounded-lg shadow-md mb-4"
  />

  <div className="mx-4 md:mx-20 lg:mx-40">
    <p className="mb-2 text-justify">
      La <strong>fuente de poder</strong>, también conocida como <em>PSU (Power Supply Unit)</em>, es el componente encargado de convertir la corriente alterna (AC) que proviene del enchufe de la pared en corriente continua (DC), que utilizan todos los componentes internos de la computadora.
    </p>
    <p className="mb-2 text-justify">
      Además de transformar la energía, la fuente de poder regula la tensión y proporciona múltiples líneas de voltaje con diferentes niveles (rails), lo que garantiza que cada componente reciba la energía adecuada según sus requerimientos.
    </p>

    <h3 className="text-xl font-semibold mb-2 text-center">Funciones principales</h3>
    <ul className="list-disc list-inside mb-4 text-justify">
      <li>Proveer energía estable y segura para evitar daños en los componentes electrónicos.</li>
      <li>Distribuir diferentes voltajes (por ejemplo, 12V, 5V, 3.3V) según las necesidades de cada dispositivo conectado.</li>
      <li>Proteger contra sobrecargas eléctricas, picos de voltaje y cortocircuitos mediante circuitos internos de protección.</li>
      <li>Facilitar el encendido y apagado controlado del sistema mediante señales como el <em>Power Good</em> y <em>Standby</em>.</li>
    </ul>

    <h3 className="text-xl font-semibold mb-2 text-center">Capacidad y potencia</h3>
    <p className="mb-2 text-justify">
      La potencia de una fuente se mide en vatios (W) y debe elegirse según el consumo total de los componentes del sistema.
      Una PC básica puede funcionar con una fuente de 300-400W, mientras que una PC de alto rendimiento puede requerir 650W o más.
    </p>
    <p className="mb-2 text-justify">
      Es recomendable calcular el consumo aproximado de energía sumando el uso de CPU, GPU, discos duros, ventiladores y otros periféricos, dejando un margen adicional del 20-30% para asegurar estabilidad y futuras expansiones.
    </p>
    <p className="mb-4 text-justify">
      Usar una fuente con potencia insuficiente puede provocar inestabilidad, reinicios o daños en el hardware, además de un bajo rendimiento general del sistema.
    </p>

    <h3 className="text-xl font-semibold mb-2 text-center">Tipos de fuentes</h3>
    <ul className="list-disc list-inside mb-4 text-justify">
      <li><strong>Fuentes no modulares:</strong> Todos los cables están fijos, lo que puede dificultar la organización interna.</li>
      <li><strong>Fuentes modulares:</strong> Permiten conectar solo los cables necesarios, mejorando la estética y el flujo de aire.</li>
      <li><strong>Fuentes semi-modulares:</strong> Combinan cables fijos y desmontables, siendo una opción intermedia en funcionalidad y costo.</li>
    </ul>

    <h3 className="text-xl font-semibold mb-2 text-center">Eficiencia energética</h3>
    <p className="mb-2 text-justify">
      Las certificaciones <em>80 PLUS</em> garantizan un alto nivel de eficiencia energética, lo que reduce el consumo eléctrico y el calor generado, aumentando la vida útil de la fuente.
    </p>
    <p className="text-justify">
      Estas certificaciones van desde <strong>80 PLUS White</strong> hasta <strong>80 PLUS Titanium</strong>, siendo esta última la más eficiente. Cuanto mayor la eficiencia, menor es la pérdida de energía en forma de calor y mayor es la estabilidad eléctrica.
    </p>

    <p className="mt-4 text-justify">
      En resumen, elegir una fuente de poder adecuada es clave para garantizar estabilidad, seguridad y durabilidad en el funcionamiento de tu computadora. No solo se trata de la cantidad de vatios, sino también de la calidad de la fuente, su eficiencia y sus protecciones integradas.
    </p>
  </div>
</section>

{/* Ventiladores */}
<section className="mb-10">
  <h2 className="text-2xl font-semibold text-blue-600 mb-3 text-center">
    7. Ventiladores y Sistemas de Refrigeración
  </h2>
  <img
    src={Ventilador}
    alt="Ventiladores"
    className="mx-auto w-full md:w-2/3 rounded-lg shadow-md mb-4"
  />

  <div className="mx-4 md:mx-20 lg:mx-40">
    <p className="mb-2 text-justify">
      El calor generado por los componentes electrónicos puede afectar negativamente el rendimiento y la vida útil del equipo. Por ello, los sistemas de refrigeración son esenciales para mantener temperaturas adecuadas y evitar el sobrecalentamiento.
    </p>
    <p className="mb-2 text-justify">
      Los <strong>ventiladores</strong> son el método más común y económico para mover aire dentro del gabinete. Hay ventiladores de entrada (<em>intake</em>) que introducen aire fresco, y ventiladores de salida (<em>exhaust</em>) que expulsan el aire caliente, creando un flujo de aire constante.
    </p>
    <p className="mb-2 text-justify">
      También se utilizan <strong>disipadores de calor</strong> (heatsinks), que aumentan la superficie para la disipación térmica. Muchos incorporan tubos de calor (<em>heatpipes</em>) para distribuir el calor de forma más eficiente desde el procesador hasta las aletas metálicas.
    </p>
    <p className="mb-2 text-justify">
      En sistemas de alto rendimiento o para tareas exigentes como videojuegos, edición de video o renderizado 3D, es común emplear <strong>refrigeración líquida</strong>. Este sistema ofrece una disipación más eficiente mediante líquidos refrigerantes, bombas, bloques de agua y radiadores. Es más silenciosa, más estética y capaz de mantener temperaturas más bajas, aunque es más costosa y compleja de instalar.
    </p>
    <p className="mb-4 text-justify">
      También existen soluciones híbridas, como los <strong>sistemas AIO (All-In-One)</strong>, que combinan la facilidad de instalación de un disipador por aire con la eficiencia de la refrigeración líquida, siendo una excelente opción para quienes buscan rendimiento sin complicaciones.
    </p>

    <h3 className="text-xl font-semibold mb-2 text-center">Importancia del flujo de aire</h3>
    <p className="mb-2 text-justify">
      Mantener un buen <strong>flujo de aire</strong> es esencial. Una correcta disposición de ventiladores, sin obstrucciones, permite un enfriamiento óptimo de todos los componentes, incluyendo la tarjeta gráfica, los discos duros y la placa base.
    </p>
    <p className="mb-2 text-justify">
      La <strong>gestión adecuada de cables</strong> también es clave. Usar rutas de cableado limpias y sujetadores ayuda a mejorar el flujo de aire dentro del gabinete y facilita futuras actualizaciones o mantenimiento.
    </p>

    <ul className="list-disc list-inside mb-4 text-justify">
      <li>Mejora la estabilidad del sistema.</li>
      <li>Evita el <em>thermal throttling</em>, donde los componentes reducen su rendimiento por exceso de calor.</li>
      <li>Prolonga la vida útil de los componentes.</li>
      <li>Reduce el nivel de ruido, ya que los ventiladores no necesitan girar a máxima velocidad constantemente.</li>
      <li>Permite mantener una temperatura ambiente interior más equilibrada.</li>
    </ul>

    <h3 className="text-xl font-semibold mb-2 text-center">Consideraciones al elegir un sistema de refrigeración</h3>
    <ul className="list-disc list-inside mb-4 text-justify">
      <li>Verifica la compatibilidad del disipador o sistema líquido con el socket de tu procesador.</li>
      <li>Asegúrate de tener espacio suficiente en el gabinete para instalar radiadores o ventiladores adicionales.</li>
      <li>Evalúa el nivel de ruido y el tipo de ventilador (PWM, ARGB, silencioso, de alto flujo, etc.).</li>
      <li>Si planeas hacer <em>overclocking</em>, considera sistemas de refrigeración avanzados.</li>
    </ul>

    <p className="text-justify">
      Un sistema de refrigeración eficiente garantiza un desempeño confiable a largo plazo, protege tu inversión en hardware y permite mantener tu PC en óptimas condiciones tanto para uso cotidiano como para tareas exigentes.
    </p>
  </div>
</section>


{/* Ranuras PCI */}
<section className="mb-10">
  <h2 className="text-2xl font-semibold text-blue-600 mb-3 text-center">
    8. Ranuras PCI / PCI Express
  </h2>
  <img
    src={Ranura}
    alt="Ranuras PCI"
    className="mx-auto w-full md:w-2/3 rounded-lg shadow-md mb-4"
  />
  <div className="mx-4 md:mx-20 lg:mx-40">
    <p className="mb-2 text-justify">
      Las <strong>ranuras PCI (Peripheral Component Interconnect)</strong> y <strong>PCI Express (PCIe)</strong> son interfaces ubicadas en la placa base que permiten la conexión de tarjetas de expansión. Estas tarjetas amplían las funcionalidades del sistema de acuerdo a las necesidades específicas del usuario, como mejorar el rendimiento gráfico, aumentar las capacidades de red o añadir almacenamiento adicional.
    </p>
    <p className="mb-2 text-justify">
      Aunque las ranuras PCI convencionales fueron ampliamente utilizadas en el pasado, hoy en día están casi en desuso y han sido reemplazadas por el estándar <strong>PCI Express</strong>, que ofrece mayor velocidad, escalabilidad y eficiencia energética.
    </p>
    <p className="mb-2 text-justify">
      Las tarjetas de expansión compatibles incluyen tarjetas gráficas (<em>GPU</em>), tarjetas de sonido, controladoras de almacenamiento, adaptadores de red, tarjetas de captura de video, SSDs NVMe, y más. Gracias a estas ranuras, es posible personalizar y potenciar equipos según el propósito: gaming, diseño, servidores o tareas específicas.
    </p>

    <ul className="list-disc list-inside mb-4 text-justify">
      <li>
        <strong>PCIe x16:</strong> Utilizada principalmente por tarjetas gráficas modernas que requieren gran ancho de banda para tareas exigentes como videojuegos, edición 4K, modelado 3D o inteligencia artificial.
      </li>
      <li>
        <strong>PCIe x1:</strong> Ideal para tarjetas que requieren poco ancho de banda, como tarjetas de red Wi-Fi, capturadoras o tarjetas de sonido externas. Su tamaño compacto permite instalar varias a la vez.
      </li>
      <li>
        <strong>PCIe x4 y x8:</strong> Son tamaños intermedios usados en tarjetas RAID, adaptadores SSD NVMe de alto rendimiento, controladoras de almacenamiento y tarjetas de expansión profesional.
      </li>
    </ul>

    <p className="mb-2 text-justify">
      Cada ranura PCIe contiene una cantidad de <strong>carriles (lanes)</strong>, que son canales de comunicación independientes. A mayor número de carriles, mayor será la velocidad de transferencia. Por ejemplo, PCIe 4.0 x16 alcanza hasta <strong>32 GB/s</strong>, mientras que PCIe 5.0 duplica esa cifra, llegando a <strong>64 GB/s</strong>.
    </p>

    <p className="mb-2 text-justify">
      Las versiones más recientes, como <strong>PCIe 5.0</strong> y <strong>PCIe 6.0</strong>, mejoran la velocidad, la eficiencia de codificación de datos y reducen la latencia. Esto es especialmente importante en aplicaciones como servidores, centros de datos y estaciones de trabajo de alto rendimiento.
    </p>

    <p className="mb-2 text-justify">
      Además, la tecnología PCIe es retrocompatible, lo que significa que una tarjeta PCIe 3.0 funcionará en una ranura PCIe 4.0, aunque con las limitaciones de su versión de origen. Esto permite una transición gradual en la actualización de hardware.
    </p>

    <p className="text-justify">
      En resumen, las ranuras PCI y especialmente PCIe representan una vía rápida, flexible y escalable para mejorar las capacidades de cualquier computadora moderna. Su diseño modular permite adaptarse a todo tipo de usuario, desde el entusiasta hasta el profesional.
    </p>
  </div>
</section>


            </div>
          </div>
        </div>
      </section>
    </div>
  );
}