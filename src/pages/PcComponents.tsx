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

              {/* Storage Section */}
              <div id="storage" className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                <div className="bg-[var(--tech-blue)] p-6">
                  <h2 className="text-white text-2xl font-bold flex items-center">
                    <FontAwesomeIcon icon={FA.faHdd} className="mr-3" />
                    Almacenamiento (HDD y SSD)
                  </h2>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <img
                      src={Memoria}
                      alt="HDD y SSD"
                      className="mx-auto w-full md:w-2/3 rounded-lg shadow-md mb-4"
                    />
                  </div>

                  <div className="mb-6">
                    <p className="text-justify text-[var(--neutral-gray)] mb-4">
                      Los dispositivos de almacenamiento son fundamentales para guardar de manera permanente todos los datos, programas y el sistema operativo en una computadora.
                      Existen dos tipos principales: los <strong>Discos Duros Mecánicos (HDD)</strong> y las <strong>Unidades de Estado Sólido (SSD)</strong>.
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <CardBasics
                      Icon={FA.faHdd}
                      Title='Discos Duros (HDD)'
                      ListItems={[
                        'Capacidad: Grandes cantidades a precios económicos',
                        'Velocidad: 80-160 MB/s según RPM (5400-7200)',
                        'Durabilidad: Susceptibles a golpes por partes móviles',
                        'Uso: Almacenamiento masivo y copias de seguridad'
                      ]}
                    />
                    <CardBasics
                      Icon={FA.faMicrochip}
                      Title='Unidades SSD'
                      ListItems={[
                        'Velocidad: 500+ MB/s SATA, varios GB/s NVMe',
                        'Durabilidad: Sin partes móviles, más resistentes',
                        'Capacidad: 256GB, 512GB, 1TB+ disponibles',
                        'Uso: Sistema operativo y aplicaciones principales'
                      ]}
                    />
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <CardBasics
                      Icon={FA.faPlug}
                      Title='Tipos de Conexión'
                      ListItems={[
                        'SATA: Formato tradicional, ampliamente compatible',
                        'NVMe (PCIe): Conexión directa, máxima velocidad',
                        'M.2: Factor compacto, ideal para laptops',
                        'USB: Almacenamiento externo y portátil'
                      ]}
                    />
                    <CardBasics
                      Icon={FA.faLayerGroup}
                      Title='Configuraciones Recomendadas'
                      ListItems={[
                        'Solo SSD: Mejor rendimiento, mayor costo',
                        'Híbrida: SSD para OS + HDD para datos',
                        'Solo HDD: Más económico, menor rendimiento',
                        'Múltiples SSD: Para profesionales y servidores'
                      ]}
                    />
                  </div>

                  <div className="bg-gray-100 rounded-lg p-6">
                    <h4 className="font-bold text-[var(--tech-blue)] mb-3 flex items-center">
                      <FontAwesomeIcon icon={FA.faLightbulb} className="mr-2" /> 
                      Recomendación
                    </h4>
                    <p className="text-[var(--neutral-gray)]">
                      Para un rendimiento óptimo, usa un SSD para el sistema operativo y aplicaciones frecuentes, y un HDD para almacenamiento masivo de datos. 
                      Esta configuración híbrida ofrece la mejor relación velocidad-capacidad-precio.
                    </p>
                  </div>
                </div>
              </div>

              {/* GPU Section */}
              <div id="gpu" className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                <div className="bg-[var(--tech-blue)] p-6">
                  <h2 className="text-white text-2xl font-bold flex items-center">
                    <FontAwesomeIcon icon={FA.faDesktop} className="mr-3" />
                    GPU (Unidad de Procesamiento Gráfico)
                  </h2>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <img
                      src={Gpu}
                      alt="GPU"
                      className="mx-auto w-full md:w-2/3 rounded-lg shadow-md mb-4"
                    />
                  </div>

                  <div className="mb-6">
                    <p className="text-justify text-[var(--neutral-gray)] mb-4">
                      La <strong>GPU</strong> o Unidad de Procesamiento Gráfico es un componente especializado en el procesamiento de imágenes, videos y gráficos en tres dimensiones. 
                      Originalmente diseñada para videojuegos, hoy se usa en edición de video, diseño CAD, inteligencia artificial y aprendizaje automático.
                    </p>
                    <p className="text-justify text-[var(--neutral-gray)] mb-4">
                      A diferencia del CPU, la GPU está optimizada para procesar operaciones en paralelo, permitiendo manejar millones de píxeles y vértices simultáneamente 
                      para crear gráficos complejos y efectos visuales en tiempo real.
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <CardBasics
                      Icon={FA.faMicrochip}
                      Title='Tipos de GPU'
                      ListItems={[
                        'Integrada: Dentro del CPU, comparte RAM del sistema',
                        'Dedicada: Tarjeta independiente con VRAM propia',
                        'Rendimiento básico vs. superior',
                        'Costo económico vs. mayor inversión'
                      ]}
                    />
                    <CardBasics
                      Icon={FA.faIndustry}
                      Title='Principales Fabricantes'
                      ListItems={[
                        'NVIDIA: GeForce, Quadro, RTX con Ray Tracing',
                        'AMD: Radeon RX, Radeon Pro, arquitectura RDNA',
                        'Intel: Arc, soluciones integradas Iris',
                        'Apple: Chips M1/M2 con GPU integrada'
                      ]}
                    />
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <CardBasics
                      Icon={FA.faMemory}
                      Title='VRAM (Memoria Gráfica)'
                      ListItems={[
                        '4-6 GB: Gaming 1080p y tareas básicas',
                        '8-12 GB: Gaming 1440p y edición moderada',
                        '16+ GB: Gaming 4K y trabajo profesional',
                        'Más VRAM = mejor rendimiento en altas resoluciones'
                      ]}
                    />
                    <CardBasics
                      Icon={FA.faGamepad}
                      Title='Casos de Uso'
                      ListItems={[
                        'Gaming: Gráficos de alta calidad en tiempo real',
                        'Edición: Video, efectos visuales y renderizado',
                        'IA/ML: Cálculos paralelos y entrenamiento',
                        'Mining: Criptomonedas y blockchain'
                      ]}
                    />
                  </div>

                  <div className="bg-gray-100 rounded-lg p-6">
                    <h4 className="font-bold text-[var(--tech-blue)] mb-3 flex items-center">
                      <FontAwesomeIcon icon={FA.faChartLine} className="mr-2" /> 
                      Elección Según Uso
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[var(--neutral-gray)]">
                      <div>
                        <p className="mb-2"><strong>Básico:</strong> GPU integrada para oficina y multimedia.</p>
                      </div>
                      <div>
                        <p className="mb-2"><strong>Gaming:</strong> GPU dedicada media-alta gama según resolución.</p>
                      </div>
                      <div>
                        <p><strong>Profesional:</strong> GPU workstation para CAD, renderizado y IA.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Motherboard Section */}
              <div id="motherboard" className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                <div className="bg-[var(--tech-blue)] p-6">
                  <h2 className="text-white text-2xl font-bold flex items-center">
                    <FontAwesomeIcon icon={FA.faMicrochip} className="mr-3" />
                    Placa Base (Motherboard)
                  </h2>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <img
                      src={Mother}
                      alt="Placa base"
                      className="mx-auto w-full md:w-2/3 rounded-lg shadow-md mb-4"
                    />
                  </div>

                  <div className="mb-6">
                    <p className="text-justify text-[var(--neutral-gray)] mb-4">
                      La <strong>placa base</strong> o <em>motherboard</em> es el componente central que conecta todos los elementos del sistema. 
                      Actúa como plataforma donde se integran CPU, RAM, almacenamiento, GPU y periféricos, permitiendo su coordinación.
                    </p>
                    <p className="text-justify text-[var(--neutral-gray)] mb-4">
                      Contiene el <strong>chipset</strong>, que administra la comunicación entre componentes y determina las capacidades 
                      como compatibilidad con procesadores, cantidad máxima de RAM y líneas PCIe disponibles.
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <CardBasics
                      Icon={FA.faCogs}
                      Title='Funciones Principales'
                      ListItems={[
                        'Conexiones físicas y eléctricas entre componentes',
                        'Suministro de energía regulada (VRMs)',
                        'Comunicación via buses de datos',
                        'Gestión de entrada/salida (USB, HDMI, etc.)'
                      ]}
                    />
                    <CardBasics
                      Icon={FA.faRuler}
                      Title='Factores de Forma'
                      ListItems={[
                        'ATX: Estándar completo, 7 ranuras expansión',
                        'microATX: Compacto, 4 ranuras expansión',
                        'Mini-ITX: Pequeño, 1 ranura PCIe',
                        'E-ATX: Extra grande para workstations'
                      ]}
                    />
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <CardBasics
                      Icon={FA.faPlug}
                      Title='Conectores Importantes'
                      ListItems={[
                        'Socket CPU: AM4, AM5, LGA 1200, LGA 1700',
                        'Ranuras RAM: DDR4/DDR5, 2-4 slots típico',
                        'PCIe: x16 para GPU, x1 para expansiones',
                        'SATA/M.2: Para almacenamiento SSD/HDD'
                      ]}
                    />
                    <CardBasics
                      Icon={FA.faCheckCircle}
                      Title='Criterios de Selección'
                      ListItems={[
                        'Compatibilidad con CPU (socket y chipset)',
                        'Cantidad de RAM soportada (32GB, 64GB+)',
                        'Número de ranuras PCIe y M.2',
                        'Calidad VRM para overclocking'
                      ]}
                    />
                  </div>

                  <div className="bg-gray-100 rounded-lg p-6">
                    <h4 className="font-bold text-[var(--tech-blue)] mb-3 flex items-center">
                      <FontAwesomeIcon icon={FA.faExclamationTriangle} className="mr-2" /> 
                      Punto Crítico
                    </h4>
                    <p className="text-[var(--neutral-gray)]">
                      La placa base determina las posibilidades de crecimiento y actualización futura. Es crucial verificar compatibilidad 
                      con el procesador deseado y considerar necesidades futuras de expansión antes de la compra.
                    </p>
                  </div>
                </div>
              </div>

              {/* PSU Section */}
              <div id="psu" className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                <div className="bg-[var(--tech-blue)] p-6">
                  <h2 className="text-white text-2xl font-bold flex items-center">
                    <FontAwesomeIcon icon={FA.faBolt} className="mr-3" />
                    Fuente de Poder (PSU)
                  </h2>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <img
                      src={Fuente}
                      alt="Fuente de poder"
                      className="mx-auto w-full md:w-2/3 rounded-lg shadow-md mb-4"
                    />
                  </div>

                  <div className="mb-6">
                    <p className="text-justify text-[var(--neutral-gray)] mb-4">
                      La <strong>fuente de poder</strong> o <em>PSU (Power Supply Unit)</em> convierte la corriente alterna (AC) de la pared 
                      en corriente continua (DC) que utilizan los componentes internos. Además regula la tensión y distribuye diferentes voltajes.
                    </p>
                    <p className="text-justify text-[var(--neutral-gray)] mb-4">
                      Es fundamental para la estabilidad y seguridad del sistema, protegiendo contra sobrecargas, picos de voltaje y cortocircuitos 
                      mediante circuitos internos de protección.
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <CardBasics
                      Icon={FA.faPlug}
                      Title='Capacidad de Potencia'
                      ListItems={[
                        '300-400W: PC básica/oficina',
                        '500-650W: Gaming medio/alto',
                        '750-850W: Gaming extremo/workstation',
                        '1000W+: Sistemas multi-GPU profesionales'
                      ]}
                    />
                    <CardBasics
                      Icon={FA.faTools}
                      Title='Tipos de Fuentes'
                      ListItems={[
                        'No modular: Cables fijos, dificulta organización',
                        'Semi-modular: Cables principales fijos + extras',
                        'Modular: Solo cables necesarios, mejor flujo aire',
                        'Digital: Monitoreo y control por software'
                      ]}
                    />
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <CardBasics
                      Icon={FA.faMedal}
                      Title='Certificaciones 80 PLUS'
                      ListItems={[
                        'White: 80% eficiencia mínima',
                        'Bronze: 82-85% eficiencia',
                        'Gold: 87-90% eficiencia',
                        'Platinum/Titanium: 89-94% máxima eficiencia'
                      ]}
                    />
                    <CardBasics
                      Icon={FA.faShieldAlt}
                      Title='Protecciones'
                      ListItems={[
                        'OVP: Protección sobre-voltaje',
                        'UVP: Protección bajo-voltaje',
                        'OCP: Protección sobre-corriente',
                        'SCP: Protección cortocircuito'
                      ]}
                    />
                  </div>

                  <div className="bg-gray-100 rounded-lg p-6">
                    <h4 className="font-bold text-[var(--tech-blue)] mb-3 flex items-center">
                      <FontAwesomeIcon icon={FA.faCalculator} className="mr-2" /> 
                      Cálculo de Potencia
                    </h4>
                    <p className="text-[var(--neutral-gray)]">
                      Suma el consumo de CPU + GPU + resto de componentes, luego añade 20-30% de margen. 
                      Es mejor una fuente de calidad con menor potencia que una genérica de alta potencia.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cooling Section */}
              <div id="cooling" className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                <div className="bg-[var(--tech-blue)] p-6">
                  <h2 className="text-white text-2xl font-bold flex items-center">
                    <FontAwesomeIcon icon={FA.faFan} className="mr-3" />
                    Refrigeración y Ventiladores
                  </h2>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <img
                      src={Ventilador}
                      alt="Ventiladores"
                      className="mx-auto w-full md:w-2/3 rounded-lg shadow-md mb-4"
                    />
                  </div>

                  <div className="mb-6">
                    <p className="text-justify text-[var(--neutral-gray)] mb-4">
                      Los sistemas de refrigeración mantienen temperaturas adecuadas y evitan el sobrecalentamiento que afecta 
                      negativamente el rendimiento y vida útil de los componentes electrónicos.
                    </p>
                    <p className="text-justify text-[var(--neutral-gray)] mb-4">
                      Un buen flujo de aire y gestión térmica es esencial para estabilidad del sistema, evitar <em>thermal throttling</em> 
                      y prolongar la vida útil de los componentes.
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <CardBasics
                      Icon={FA.faWind}
                      Title='Tipos de Refrigeración'
                      ListItems={[
                        'Aire: Ventiladores + disipadores, económico',
                        'Líquida AIO: All-in-One, mejor rendimiento',
                        'Líquida custom: Máximo rendimiento, compleja',
                        'Pasiva: Sin ventiladores, silenciosa limitada'
                      ]}
                    />
                    <CardBasics
                      Icon={FA.faThermometerHalf}
                      Title='Componentes Térmicos'
                      ListItems={[
                        'Disipadores CPU: Torres, low-profile, stock',
                        'Pasta térmica: Conductividad térmica crítica',
                        'Ventiladores case: Intake (entrada) y exhaust',
                        'Thermal pads: Para VRM, RAM, SSD M.2'
                      ]}
                    />
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <CardBasics
                      Icon={FA.faVolumeDown}
                      Title='Consideraciones'
                      ListItems={[
                        'Compatibilidad socket CPU (AM4, LGA, etc.)',
                        'Clearance RAM: Altura para módulos altos',
                        'Tamaño gabinete: Radiadores y ventiladores',
                        'Nivel ruido: dB, PWM, perfiles silenciosos'
                      ]}
                    />
                    <CardBasics
                      Icon={FA.faArrowsAlt}
                      Title='Flujo de Aire'
                      ListItems={[
                        'Presión positiva: Más intake que exhaust',
                        'Gestión cables: Rutas limpias, menos obstrucción',
                        'Temperatura ambiente: Afecta eficiencia total',
                        'Curvas fan: RPM según temperatura'
                      ]}
                    />
                  </div>

                  <div className="bg-gray-100 rounded-lg p-6">
                    <h4 className="font-bold text-[var(--tech-blue)] mb-3 flex items-center">
                      <FontAwesomeIcon icon={FA.faSnowflake} className="mr-2" /> 
                      Temperaturas Objetivo
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[var(--neutral-gray)]">
                      <div>
                        <p className="mb-2"><strong>CPU:</strong> &lt;80°C bajo carga, &lt;40°C idle</p>
                      </div>
                      <div>
                        <p className="mb-2"><strong>GPU:</strong> &lt;85°C bajo carga, &lt;45°C idle</p>
                      </div>
                      <div>
                        <p><strong>SSD M.2:</strong> &lt;70°C, &lt;50°C sostenido</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* PCI/Expansion Section */}
              <div id="expansion" className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                <div className="bg-[var(--tech-blue)] p-6">
                  <h2 className="text-white text-2xl font-bold flex items-center">
                    <FontAwesomeIcon icon={FA.faPlug} className="mr-3" />
                    Ranuras PCI / PCI Express
                  </h2>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <img
                      src={Ranura}
                      alt="Ranuras PCI"
                      className="mx-auto w-full md:w-2/3 rounded-lg shadow-md mb-4"
                    />
                  </div>

                  <div className="mb-6">
                    <p className="text-justify text-[var(--neutral-gray)] mb-4">
                      Las ranuras <strong>PCI Express (PCIe)</strong> permiten la conexión de tarjetas de expansión que amplían 
                      las funcionalidades del sistema según necesidades específicas como gaming, diseño, redes o almacenamiento.
                    </p>
                    <p className="text-justify text-[var(--neutral-gray)] mb-4">
                      PCIe ha reemplazado al PCI convencional ofreciendo mayor velocidad, escalabilidad y eficiencia energética, 
                      con compatibilidad retroactiva entre versiones.
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <CardBasics
                      Icon={FA.faRuler}
                      Title='Tamaños de Ranuras'
                      ListItems={[
                        'PCIe x16: GPU principales, máximo ancho banda',
                        'PCIe x8: GPU secundarias, tarjetas RAID',
                        'PCIe x4: SSDs NVMe, controladoras',
                        'PCIe x1: Tarjetas red, sonido, USB, serie'
                      ]}
                    />
                    <CardBasics
                      Icon={FA.faRocket}
                      Title='Versiones PCIe'
                      ListItems={[
                        'PCIe 3.0: 8 GT/s por carril, ampliamente usado',
                        'PCIe 4.0: 16 GT/s por carril, doble velocidad',
                        'PCIe 5.0: 32 GT/s por carril, última generación',
                        'PCIe 6.0: 64 GT/s por carril, futuro estándar'
                      ]}
                    />
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <CardBasics
                      Icon={FA.faPlus}
                      Title='Tarjetas de Expansión'
                      ListItems={[
                        'GPU: Tarjetas gráficas dedicadas',
                        'Red: Wi-Fi, Ethernet 10Gb, Bluetooth',
                        'Sonido: DACs profesionales, interfaces audio',
                        'Almacenamiento: Controladoras RAID, SSDs'
                      ]}
                    />
                    <CardBasics
                      Icon={FA.faLayerGroup}
                      Title='Distribución Típica'
                      ListItems={[
                        'Slot 1: CPU directo (GPU principal)',
                        'Slot 2-3: Chipset (x8 o x4)',
                        'Slots pequeños: x1 para expansiones menores',
                        'M.2: SSDs NVMe, usan carriles PCIe'
                      ]}
                    />
                  </div>

                  <div className="bg-gray-100 rounded-lg p-6">
                    <h4 className="font-bold text-[var(--tech-blue)] mb-3 flex items-center">
                      <FontAwesomeIcon icon={FA.faInfo} className="mr-2" /> 
                      Compatibilidad
                    </h4>
                    <p className="text-[var(--neutral-gray)]">
                      Las tarjetas PCIe son retrocompatibles: una tarjeta 3.0 funciona en ranura 4.0, pero a velocidad de la versión menor. 
                      Verifica que tu placa base tenga suficientes ranuras para futuras expansiones.
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