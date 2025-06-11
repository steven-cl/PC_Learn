import CPU from '@assets/CPU.png'; 
import Ram from '@assets/RAM.png'; 
import Memoria from '@assets/Memoria.jpg'; 
import Gpu from '@assets/Gpu.jpg'; 
import Mother from '@assets/Mother.png'; 
import Fuente from '@assets/Fuente.png'; 
import Ventilador from '@assets/Ventilador.png'; 
import Ranura from '@assets/Ranuras.png'; 

export default function PcComponents() {
  return (
    <div className="bg-white text-gray-800 text-center px-4 md:px-10">
      <h1 className="text-4xl font-bold text-blue-700 mb-10">
        Componentes Clave de una Computadora
      </h1>

    {/* CPU */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3 text-center">
          1. CPU (Unidad Central de Procesamiento)
        </h2>
        <img
          src={CPU}
          alt="CPU"
          className="mx-auto w-full md:w-2/3 rounded-lg shadow-md mb-4"
        />
        <div className="mx-4 md:mx-20 lg:mx-40">
            <p className="mb-2 text-justify">
            La <strong>CPU</strong>, o Unidad Central de Procesamiento, es el <strong>componente principal de procesamiento</strong> en una computadora. 
            A menudo se la denomina el <strong>"cerebro del sistema"</strong>, ya que se encarga de interpretar y ejecutar instrucciones provenientes tanto del hardware como del software.
          </p>

          <p className="mb-2 text-justify">
            El CPU realiza operaciones básicas como <strong>cálculos matemáticos, decisiones lógicas y control de flujo de datos</strong> en el sistema. 
            Su rendimiento afecta directamente la velocidad general y la capacidad de respuesta del equipo.
          </p>

          <p className="mb-2">
            <strong>Está compuesto por varias partes fundamentales:</strong>
            </p>
          <ul className="list-disc list-inside mb-4 text-justify">
            <li>
              <strong>Unidad de Control:</strong> Dirige todas las operaciones del sistema. Se encarga de leer las instrucciones de la memoria, decodificarlas y enviarlas a los componentes correspondientes.
            </li>
            <li>
              <strong>Unidad Aritmético-Lógica (ALU):</strong> Realiza todas las operaciones matemáticas (como suma, resta) y lógicas (como comparaciones).
            </li>
            <li>
              <strong>Registros:</strong> Pequeñas áreas de almacenamiento dentro del CPU que retienen datos temporalmente para ser usados rápidamente.
            </li>
            <li>
              <strong>Cache:</strong> Memoria ultra rápida dentro del procesador que almacena instrucciones y datos usados con frecuencia para evitar acceder a la RAM constantemente.
            </li>
          </ul>

          <p className="mb-2">
            <strong>Tipos de núcleos:</strong>
            </p>
          <ul className="list-disc list-inside mb-4 text-justify">
            <li>
              <strong>Single-core:</strong> Solo puede ejecutar una instrucción a la vez. Obsoleto hoy en día.
            </li>
            <li>
              <strong>Multi-core:</strong> Permite ejecutar múltiples procesos en paralelo. Por ejemplo, un CPU de 4 núcleos puede ejecutar 4 tareas al mismo tiempo.
            </li>
          </ul>

          <p className="mb-2">
            <strong>Tecnologías modernas que mejoran el rendimiento:</strong>
            </p>
          <ul className="list-disc list-inside mb-4 text-justify">
            <li><strong>Hyper-Threading (Intel) o SMT (AMD):</strong> Permiten que cada núcleo ejecute múltiples hilos simultáneamente.</li>
            <li><strong>Turbo Boost:</strong> Aumenta automáticamente la frecuencia del procesador cuando se necesita más potencia.</li>
            <li><strong>GPU integrada:</strong> Algunos CPUs ya incluyen capacidades gráficas básicas, lo que elimina la necesidad de una tarjeta de video dedicada para tareas simples.</li>
          </ul>

          <p className="mb-2">
            <strong>Principales fabricantes:</strong>
          </p>
          <ul className="list-disc list-inside mb-4 text-justify">
            <li>
              <strong>Intel:</strong> Ofrece procesadores populares como <strong>Core i3, i5, i7, i9</strong>. Son ampliamente usados en laptops, PCs de escritorio y servidores.
              <br />
              Ejemplo: Un <em>Intel Core i7 de 12ª generación</em> tiene 8 núcleos físicos y puede alcanzar velocidades de hasta 4.9 GHz.
            </li>
            <li>
              <strong>AMD:</strong> Su línea <strong>Ryzen</strong> ha ganado popularidad por su excelente rendimiento/precio.
              <br />
              Ejemplo: Un <em>AMD Ryzen 7 5800X</em> ofrece 8 núcleos y 16 hilos, ideal para gaming, edición de video y multitarea.
            </li>
          </ul>

          <p className="mb-2">
            <strong>Importancia en diferentes tipos de usuarios:</strong>
          </p>
          <ul className="list-disc list-inside mb-4 text-justify">
            <li><strong>Usuarios domésticos:</strong> Un procesador básico como un Intel Core i3 o AMD Ryzen 3 es suficiente para tareas como navegar por internet, ver videos o usar Office.</li>
            <li><strong>Gamers:</strong> Necesitan CPUs con múltiples núcleos e hilos, como un Ryzen 5/7 o Intel Core i5/i7, que puedan manejar juegos exigentes y procesos simultáneos.</li>
            <li><strong>Profesionales creativos:</strong> Para edición de video, renderizado 3D o programación, se recomiendan CPUs de gama alta como Ryzen 9 o Intel Core i9.</li>
          </ul>

          <p className="mb-2 text-justify">
            En resumen, el CPU es esencial para el funcionamiento eficiente de cualquier computadora. Su velocidad, cantidad de núcleos e integraciones modernas 
            determinan la capacidad del sistema para realizar tareas simples o complejas.
          </p>
        </div>
      </section>

      {/* RAM */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-600 mb-3 text-center">
          2. Memoria RAM (Memoria de Acceso Aleatorio)
        </h2>
        <img
          src={Ram}
          alt="RAM"
          className="mx-auto w-full md:w-2/3 rounded-lg shadow-md mb-4"
        />
        <div className="mx-4 md:mx-20 lg:mx-40">
            <p className="mb-2 text-justify">
            La <strong>RAM</strong> (Random Access Memory) es un tipo de memoria volátil que almacena temporalmente los datos y programas que la CPU necesita en tiempo real. 
            Cuanta más RAM tenga un sistema, mayor será su capacidad para realizar múltiples tareas sin perder velocidad.
          </p>

          <p className="mb-2">
            A diferencia del almacenamiento permanente (como un disco duro o SSD), la RAM <strong>pierde toda su información al apagar el equipo</strong>. 
            Su función principal es agilizar el acceso a la información que el sistema operativo y las aplicaciones utilizan con frecuencia.
          </p>

          <p className="mb-2">
            <strong>¿Cómo funciona?</strong></p>
          <ul className="list-disc list-inside mb-4 text-justify">
            <li>Cuando abres una aplicación (por ejemplo, un navegador), esta se carga desde el disco a la RAM para ejecutarse más rápidamente.</li>
            <li>Si no hay suficiente RAM disponible, el sistema puede volverse lento y usar el almacenamiento como memoria virtual, lo cual reduce el rendimiento.</li>
          </ul>

          <p className="mb-2">
            <strong>Tipos comunes de RAM:</strong></p>
          <ul className="list-disc list-inside mb-4 text-justify">
            <li><strong>DDR3:</strong> Tecnología más antigua, aún presente en equipos de generaciones pasadas. Ofrece velocidades entre 800 y 2133 MHz.</li>
            <li><strong>DDR4:</strong> Estándar actual, mejora el rendimiento y reduce el consumo energético respecto a DDR3. Velocidades comunes entre 2133 MHz y 3600+ MHz.</li>
            <li><strong>DDR5:</strong> Nueva generación con mayor velocidad, menor latencia y mejor eficiencia energética. Ideal para PCs gamer y estaciones de trabajo avanzadas.</li>
          </ul>

          <p className="mb-2">
            <strong>Capacidad recomendada según el uso:</strong></p>
          <ul className="list-disc list-inside mb-4 text-justify">
            <li><strong>4 GB:</strong> Mínimo para tareas básicas como navegación web y edición de documentos (ya no se recomienda).</li>
            <li><strong>8 GB:</strong> Recomendado para usuarios domésticos, estudiantes y tareas de oficina.</li>
            <li><strong>16 GB:</strong> Ideal para multitarea, diseño gráfico básico y videojuegos.</li>
            <li><strong>32 GB o más:</strong> Recomendado para edición de video, modelado 3D, máquinas virtuales o entornos de desarrollo exigentes.</li>
          </ul>

          <p className="mb-2 text-justify">
            En resumen, la RAM actúa como un espacio de trabajo temporal para el CPU. La cantidad y velocidad de la RAM influyen directamente en el rendimiento general del sistema.
          </p>
        </div>
      </section>


      {/* Discos */}
<section className="mb-10">
  <h2 className="text-2xl font-semibold text-blue-600 mb-3 text-center">
    3. Discos Duros (HDD) y Unidades de Estado Sólido (SSD)
  </h2>
  <img
    src={Memoria}
    alt="HDD y SSD"
    className="mx-auto w-full md:w-2/3 rounded-lg shadow-md mb-4"
  />
  <div className="mx-4 md:mx-20 lg:mx-40">
    <p className="mb-2 text-justify">
      Los dispositivos de almacenamiento son fundamentales para guardar de manera permanente todos los datos, programas y el sistema operativo en una computadora.
      Existen dos tipos principales: los <strong>Discos Duros Mecánicos (HDD)</strong> y las <strong>Unidades de Estado Sólido (SSD)</strong>.
    </p>

    <h3 className="text-xl font-semibold mb-2 text-center">Discos Duros (HDD)</h3>
    <p className="mb-2 text-justify">
      Un HDD está compuesto por varios discos magnéticos circulares que giran a alta velocidad mientras un cabezal lee y escribe datos. 
      Debido a sus partes mecánicas móviles, los HDD son más lentos comparados con las unidades modernas.
    </p>
    <ul className="list-disc list-inside mb-4 text-justify">
      <li><strong>Capacidad:</strong> Ofrecen grandes capacidades de almacenamiento a precios económicos, comúnmente de 1TB, 2TB o más.</li>
      <li><strong>Velocidad:</strong> La velocidad de lectura y escritura suele estar entre 80 y 160 MB/s, dependiendo de la velocidad de rotación (5400 a 7200 RPM).</li>
      <li><strong>Durabilidad:</strong> Son más susceptibles a daños físicos por golpes o movimientos bruscos.</li>
      <li><strong>Usos comunes:</strong> Almacenamiento masivo de archivos, copias de seguridad y archivos multimedia.</li>
    </ul>

    <h3 className="text-xl font-semibold mb-2 text-center">Unidades de Estado Sólido (SSD)</h3>
    <p className="mb-2 text-justify">
      Las SSD almacenan datos en chips de memoria flash, sin partes móviles. Esto permite velocidades mucho mayores y mayor resistencia física.
    </p>
    <ul className="list-disc list-inside mb-4 text-justify">
      <li><strong>Velocidad:</strong> La velocidad de lectura y escritura puede superar los 500 MB/s en modelos SATA, y llegar a varios GB/s en SSD NVMe.</li>
      <li><strong>Durabilidad:</strong> Al no tener partes móviles, son menos propensas a fallos por impactos o vibraciones.</li>
      <li><strong>Capacidad:</strong> Aunque suelen ser más caras por GB que los HDD, han aumentado su capacidad y ahora es común encontrar SSDs de 256GB, 512GB, 1TB o más.</li>
      <li><strong>Usos comunes:</strong> Instalación del sistema operativo, programas y juegos para acelerar el tiempo de carga y la respuesta general del sistema.</li>
    </ul>

    <p className="mb-2 text-justify">
      <strong>Configuraciones híbridas:</strong> Muchas computadoras modernas combinan ambos tipos de almacenamiento. 
      Un SSD se utiliza para instalar el sistema operativo y las aplicaciones más usadas, brindando rapidez, mientras que un HDD se destina a almacenar grandes cantidades de datos como videos, fotos o documentos.
    </p>

    <p className="mb-2 text-justify">
      Además, las SSD vienen en diferentes formatos y conexiones:
    </p>
    <ul className="list-disc list-inside mb-4 text-justify">
      <li><strong>SATA:</strong> Formato tradicional compatible con la mayoría de computadoras.</li>
      <li><strong>NVMe (PCIe):</strong> Más rápido que SATA, se conecta directamente a la placa base para mayor velocidad.</li>
      <li><strong>M.2:</strong> Factor de forma compacto usado para SSDs SATA y NVMe, ideal para laptops y PCs modernas.</li>
    </ul>

    <p className="text-justify">
      <strong>En resumen,</strong> elegir entre HDD, SSD o ambos dependerá del presupuesto y necesidades del usuario. 
      Para un rendimiento óptimo, especialmente en tareas que requieren rapidez, un SSD es fundamental, mientras que para almacenamiento económico y masivo, los HDD siguen siendo muy útiles.
    </p>
  </div>
</section>

{/* GPU */}
<section className="mb-10">
  <h2 className="text-2xl font-semibold text-blue-600 mb-3 text-center">
    4. GPU (Unidad de Procesamiento Gráfico)
  </h2>
  <img
    src={Gpu}
    alt="GPU"
    className="mx-auto w-full md:w-2/3 rounded-lg shadow-md mb-4"
  />
  <div className="mx-4 md:mx-20 lg:mx-40">
    <p className="mb-2 text-justify">
      La <strong>GPU</strong> o Unidad de Procesamiento Gráfico es un componente especializado en el procesamiento de imágenes, videos y gráficos en tres dimensiones. 
      Originalmente diseñada para acelerar el renderizado de gráficos en videojuegos, hoy en día su uso se ha expandido a otras áreas como la edición de video, diseño asistido por computadora (CAD), y computación de alto rendimiento en inteligencia artificial y aprendizaje automático.
    </p>

    <h3 className="text-xl font-semibold mb-2 text-center">¿Cómo funciona una GPU?</h3>
    <p className="mb-2 text-justify">
      A diferencia del CPU, que está optimizado para manejar una gran variedad de tareas secuenciales, la GPU está diseñada para ejecutar muchas operaciones en paralelo. 
      Esto permite procesar simultáneamente millones de píxeles y vértices, facilitando gráficos complejos y efectos visuales en tiempo real.
    </p>

    <h3 className="text-xl font-semibold mb-2 text-center">Tipos de GPU</h3>
    <ul className="list-disc list-inside mb-4 text-justify">
      <li>
        <strong>GPU Integrada:</strong> Está incorporada dentro del CPU o placa base. No cuenta con memoria propia y comparte la memoria RAM del sistema, por lo que ofrece un rendimiento limitado. Es suficiente para tareas básicas como navegación web, reproducción de video y software de oficina.
      </li>
      <li>
        <strong>GPU Dedicada o Discreta:</strong> Tarjetas gráficas independientes que cuentan con su propia memoria llamada VRAM (Video RAM) y un procesador gráfico dedicado. Proporcionan un rendimiento superior para videojuegos, edición profesional y cálculos científicos.
      </li>
    </ul>

    <h3 className="text-xl font-semibold mb-2 text-center">Principales fabricantes</h3>
    <ul className="list-disc list-inside mb-4 text-justify">
      <li>
        <strong>NVIDIA:</strong> Reconocida por sus líneas GeForce (para usuarios comunes y gamers) y Quadro (para profesionales que requieren precisión en diseño y renderizado).
        Sus tecnologías incluyen Ray Tracing, DLSS y CUDA, que mejoran el realismo visual y aceleran tareas de cómputo.
      </li>
      <li>
        <strong>AMD:</strong> Ofrece la serie Radeon RX para jugadores y Radeon Pro para profesionales. AMD destaca por su arquitectura RDNA y su soporte para tecnologías como FreeSync y FidelityFX.
      </li>
    </ul>

    <h3 className="text-xl font-semibold mb-2 text-center">VRAM y su importancia</h3>
    <p className="mb-2 text-justify">
      La memoria dedicada de una GPU, llamada <strong>VRAM</strong>, almacena texturas, mapas de bits y datos necesarios para renderizar imágenes rápidamente. 
      Más VRAM permite trabajar con resoluciones más altas y modelos 3D más complejos sin pérdida de rendimiento.
    </p>

    <p className="mb-2 text-justify">
      En resumen, la GPU es fundamental para:
    </p>
    <ul className="list-disc list-inside mb-2 text-justify">
      <li>Ejecutar videojuegos con gráficos de alta calidad.</li>
      <li>Procesar video y efectos visuales en edición profesional.</li>
      <li>Realizar cálculos paralelos en inteligencia artificial y minería de datos.</li>
    </ul>

    <p className="text-justify">
      Elegir la GPU adecuada depende del uso que se le dará: para tareas básicas, una GPU integrada puede ser suficiente, pero para trabajos gráficos o computación avanzada, es recomendable una GPU dedicada con suficiente VRAM.
    </p>
  </div>
</section>

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
  );
}