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

              {/* PSU Section */}
              <div id="psu" className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                <div className="bg-[var(--tech-blue)] p-6">
                  <h2 className="text-white text-2xl font-bold flex items-center">
                    <FontAwesomeIcon icon={FA.faBolt} className="mr-3" />
                    6. Fuente de Poder (PSU)
                  </h2>
                </div>
                <div className="p-6">
                  <img
                    src={Fuente}
                    alt="Fuente de poder"
                    className="mx-auto w-full md:w-2/3 rounded-lg shadow-md mb-6"
                  />
                  
                  <div className="space-y-4">
                    <p className="text-justify text-[var(--neutral-gray)]">
                      La <strong>fuente de poder</strong>, también conocida como <em>PSU (Power Supply Unit)</em>, es el componente encargado de convertir la corriente alterna (AC) que proviene del enchufe de la pared en corriente continua (DC), que utilizan todos los componentes internos de la computadora.
                    </p>

                    <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-[var(--tech-blue)]">
                      <p className="text-[var(--neutral-gray)]">
                        Además de transformar la energía, la fuente de poder regula la tensión y proporciona múltiples líneas de voltaje con diferentes niveles (rails), lo que garantiza que cada componente reciba la energía adecuada según sus requerimientos.
                      </p>
                    </div>

                    <div className="bg-green-50 rounded-lg p-4 border-l-4 border-[var(--interactive-green)]">
                      <h3 className="text-xl font-semibold mb-3 text-[var(--interactive-green)]">Funciones Principales</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <FontAwesomeIcon icon={FA.faCheckCircle} className="text-[var(--interactive-green)] mt-1 mr-2" />
                          <div>Proveer energía estable y segura para evitar daños en los componentes electrónicos</div>
                        </li>
                        <li className="flex items-start">
                          <FontAwesomeIcon icon={FA.faCheckCircle} className="text-[var(--interactive-green)] mt-1 mr-2" />
                          <div>Distribuir diferentes voltajes (12V, 5V, 3.3V) según las necesidades de cada dispositivo</div>
                        </li>
                        <li className="flex items-start">
                          <FontAwesomeIcon icon={FA.faCheckCircle} className="text-[var(--interactive-green)] mt-1 mr-2" />
                          <div>Proteger contra sobrecargas eléctricas, picos de voltaje y cortocircuitos</div>
                        </li>
                        <li className="flex items-start">
                          <FontAwesomeIcon icon={FA.faCheckCircle} className="text-[var(--interactive-green)] mt-1 mr-2" />
                          <div>Facilitar el encendido y apagado controlado del sistema</div>
                        </li>
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-[var(--project-orange)]">
                        <h4 className="font-semibold text-[var(--project-orange)] mb-3 flex items-center">
                          <FontAwesomeIcon icon={FA.faCalculator} className="mr-2" />
                          Capacidad y Potencia
                        </h4>
                        <div className="space-y-2 text-sm text-[var(--neutral-gray)]">
                          <p>• PC básica: 300-400W</p>
                          <p>• PC de alto rendimiento: 650W+</p>
                          <p>• Margen recomendado: 20-30% adicional</p>
                        </div>
                      </div>

                      <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-[var(--tech-blue)]">
                        <h4 className="font-semibold text-[var(--tech-blue)] mb-3 flex items-center">
                          <FontAwesomeIcon icon={FA.faPlug} className="mr-2" />
                          Tipos de Fuentes
                        </h4>
                        <div className="space-y-1 text-sm text-[var(--neutral-gray)]">
                          <p>• <strong>No modulares:</strong> Cables fijos</p>
                          <p>• <strong>Modulares:</strong> Cables desmontables</p>
                          <p>• <strong>Semi-modulares:</strong> Híbridas</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-400">
                      <h3 className="text-xl font-semibold mb-3 text-yellow-600">Certificación 80 PLUS</h3>
                      <p className="text-[var(--neutral-gray)] mb-3">
                        Las certificaciones <em>80 PLUS</em> garantizan un alto nivel de eficiencia energética, lo que reduce el consumo eléctrico y el calor generado.
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                        <div className="text-center p-2 bg-gray-200 rounded">80 PLUS White</div>
                        <div className="text-center p-2 bg-yellow-200 rounded">80 PLUS Bronze</div>
                        <div className="text-center p-2 bg-gray-300 rounded">80 PLUS Silver</div>
                        <div className="text-center p-2 bg-yellow-300 rounded">80 PLUS Gold</div>
                      </div>
                    </div>

                    <p className="text-justify text-[var(--neutral-gray)] bg-gray-100 p-4 rounded-lg border-l-4 border-gray-400">
                      <strong>En resumen:</strong> Elegir una fuente de poder adecuada es clave para garantizar estabilidad, seguridad y durabilidad en el funcionamiento de tu computadora. No solo se trata de la cantidad de vatios, sino también de la calidad de la fuente, su eficiencia y sus protecciones integradas.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cooling Section */}
              <div id="cooling" className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                <div className="bg-[var(--tech-blue)] p-6">
                  <h2 className="text-white text-2xl font-bold flex items-center">
                    <FontAwesomeIcon icon={FA.faFan} className="mr-3" />
                    7. Ventiladores y Sistemas de Refrigeración
                  </h2>
                </div>
                <div className="p-6">
                  <img
                    src={Ventilador}
                    alt="Ventiladores"
                    className="mx-auto w-full md:w-2/3 rounded-lg shadow-md mb-6"
                  />
                  
                  <div className="space-y-4">
                    <p className="text-justify text-[var(--neutral-gray)]">
                      El calor generado por los componentes electrónicos puede afectar negativamente el rendimiento y la vida útil del equipo. Por ello, los sistemas de refrigeración son esenciales para mantener temperaturas adecuadas y evitar el sobrecalentamiento.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-blue-100 rounded-lg p-4 text-center">
                        <FontAwesomeIcon icon={FA.faFan} className="text-2xl text-[var(--tech-blue)] mb-2" />
                        <h4 className="font-semibold text-[var(--tech-blue)] mb-2">Ventiladores</h4>
                        <p className="text-sm text-[var(--neutral-gray)]">Método más común y económico</p>
                      </div>
                      <div className="bg-green-100 rounded-lg p-4 text-center">
                        <FontAwesomeIcon icon={FA.faThermometerHalf} className="text-2xl text-[var(--interactive-green)] mb-2" />
                        <h4 className="font-semibold text-[var(--tech-blue)] mb-2">Disipadores</h4>
                        <p className="text-sm text-[var(--neutral-gray)]">Aumentan superficie de disipación</p>
                      </div>
                      <div className="bg-purple-100 rounded-lg p-4 text-center">
                        <FontAwesomeIcon icon={FA.faTint} className="text-2xl text-purple-600 mb-2" />
                        <h4 className="font-semibold text-[var(--tech-blue)] mb-2">Líquida</h4>
                        <p className="text-sm text-[var(--neutral-gray)]">Para alto rendimiento</p>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-[var(--tech-blue)]">
                      <h3 className="text-xl font-semibold mb-3 text-[var(--tech-blue)]">Sistemas AIO (All-In-One)</h3>
                      <p className="text-[var(--neutral-gray)]">
                        También existen soluciones híbridas, como los <strong>sistemas AIO</strong>, que combinan la facilidad de instalación de un disipador por aire con la eficiencia de la refrigeración líquida, siendo una excelente opción para quienes buscan rendimiento sin complicaciones.
                      </p>
                    </div>

                    <div className="bg-green-50 rounded-lg p-4 border-l-4 border-[var(--interactive-green)]">
                      <h3 className="text-xl font-semibold mb-3 text-[var(--interactive-green)]">Beneficios del Buen Enfriamiento</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <FontAwesomeIcon icon={FA.faCheckCircle} className="text-[var(--interactive-green)] mt-1 mr-2" />
                          <div>Mejora la estabilidad del sistema</div>
                        </li>
                        <li className="flex items-start">
                          <FontAwesomeIcon icon={FA.faCheckCircle} className="text-[var(--interactive-green)] mt-1 mr-2" />
                          <div>Evita el <em>thermal throttling</em></div>
                        </li>
                        <li className="flex items-start">
                          <FontAwesomeIcon icon={FA.faCheckCircle} className="text-[var(--interactive-green)] mt-1 mr-2" />
                          <div>Prolonga la vida útil de los componentes</div>
                        </li>
                        <li className="flex items-start">
                          <FontAwesomeIcon icon={FA.faCheckCircle} className="text-[var(--interactive-green)] mt-1 mr-2" />
                          <div>Reduce el nivel de ruido</div>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-[var(--project-orange)]">
                      <h3 className="text-xl font-semibold mb-3 text-[var(--project-orange)]">Consideraciones al Elegir</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <FontAwesomeIcon icon={FA.faArrowRight} className="text-[var(--project-orange)] mt-1 mr-2" />
                          <div>Verifica compatibilidad con el socket de tu procesador</div>
                        </li>
                        <li className="flex items-start">
                          <FontAwesomeIcon icon={FA.faArrowRight} className="text-[var(--project-orange)] mt-1 mr-2" />
                          <div>Asegúrate de tener espacio suficiente en el gabinete</div>
                        </li>
                        <li className="flex items-start">
                          <FontAwesomeIcon icon={FA.faArrowRight} className="text-[var(--project-orange)] mt-1 mr-2" />
                          <div>Evalúa el nivel de ruido y tipo de ventilador</div>
                        </li>
                        <li className="flex items-start">
                          <FontAwesomeIcon icon={FA.faArrowRight} className="text-[var(--project-orange)] mt-1 mr-2" />
                          <div>Para <em>overclocking</em>, considera sistemas avanzados</div>
                        </li>
                      </ul>
                    </div>

                    <p className="text-justify text-[var(--neutral-gray)] bg-gray-100 p-4 rounded-lg border-l-4 border-gray-400">
                      <strong>Un sistema de refrigeración eficiente</strong> garantiza un desempeño confiable a largo plazo, protege tu inversión en hardware y permite mantener tu PC en óptimas condiciones tanto para uso cotidiano como para tareas exigentes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Expansion Slots Section */}
              <div id="expansion" className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                <div className="bg-[var(--tech-blue)] p-6">
                  <h2 className="text-white text-2xl font-bold flex items-center">
                    <FontAwesomeIcon icon={FA.faPlug} className="mr-3" />
                    8. Ranuras PCI / PCI Express
                  </h2>
                </div>
                <div className="p-6">
                  <img
                    src={Ranura}
                    alt="Ranuras PCI"
                    className="mx-auto w-full md:w-2/3 rounded-lg shadow-md mb-6"
                  />
                  
                  <div className="space-y-4">
                    <p className="text-justify text-[var(--neutral-gray)]">
                      Las <strong>ranuras PCI (Peripheral Component Interconnect)</strong> y <strong>PCI Express (PCIe)</strong> son interfaces ubicadas en la placa base que permiten la conexión de tarjetas de expansión. Estas tarjetas amplían las funcionalidades del sistema de acuerdo a las necesidades específicas del usuario.
                    </p>

                    <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-[var(--tech-blue)]">
                      <p className="text-[var(--neutral-gray)]">
                        Aunque las ranuras PCI convencionales fueron ampliamente utilizadas en el pasado, hoy en día están casi en desuso y han sido reemplazadas por el estándar <strong>PCI Express</strong>, que ofrece mayor velocidad, escalabilidad y eficiencia energética.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-green-100 rounded-lg p-4 text-center">
                        <div className="bg-[var(--interactive-green)] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                          <span className="font-bold">x16</span>
                        </div>
                        <h4 className="font-semibold text-[var(--tech-blue)] mb-2">PCIe x16</h4>
                        <p className="text-sm text-[var(--neutral-gray)]">Para tarjetas gráficas modernas</p>
                      </div>
                      <div className="bg-orange-100 rounded-lg p-4 text-center">
                        <div className="bg-[var(--project-orange)] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                          <span className="font-bold">x4</span>
                        </div>
                        <h4 className="font-semibold text-[var(--tech-blue)] mb-2">PCIe x4/x8</h4>
                        <p className="text-sm text-[var(--neutral-gray)]">Tamaños intermedios</p>
                      </div>
                      <div className="bg-blue-100 rounded-lg p-4 text-center">
                        <div className="bg-[var(--tech-blue)] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                          <span className="font-bold">x1</span>
                        </div>
                        <h4 className="font-semibold text-[var(--tech-blue)] mb-2">PCIe x1</h4>
                        <p className="text-sm text-[var(--neutral-gray)]">Para tarjetas compactas</p>
                      </div>
                    </div>

                    <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-400">
                      <h3 className="text-xl font-semibold mb-3 text-yellow-600">Velocidades PCIe</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-semibold text-[var(--tech-blue)]">PCIe 4.0 x16:</p>
                          <p className="text-[var(--neutral-gray)]">Hasta 32 GB/s</p>
                        </div>
                        <div>
                          <p className="font-semibold text-[var(--tech-blue)]">PCIe 5.0 x16:</p>
                          <p className="text-[var(--neutral-gray)]">Hasta 64 GB/s</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 rounded-lg p-4 border-l-4 border-[var(--interactive-green)]">
                      <h3 className="text-xl font-semibold mb-3 text-[var(--interactive-green)]">Retrocompatibilidad</h3>
                      <p className="text-[var(--neutral-gray)]">
                        La tecnología PCIe es retrocompatible, lo que significa que una tarjeta PCIe 3.0 funcionará en una ranura PCIe 4.0, aunque con las limitaciones de su versión de origen. Esto permite una transición gradual en la actualización de hardware.
                      </p>
                    </div>

                    <p className="text-justify text-[var(--neutral-gray)] bg-gray-100 p-4 rounded-lg border-l-4 border-gray-400">
                      <strong>En resumen:</strong> Las ranuras PCI y especialmente PCIe representan una vía rápida, flexible y escalable para mejorar las capacidades de cualquier computadora moderna. Su diseño modular permite adaptarse a todo tipo de usuario, desde el entusiasta hasta el profesional.
                    </p>
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