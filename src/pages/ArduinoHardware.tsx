import * as FA from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import colors from '../styles.js';

import CardBasics from '@/components/ui/CardBasics';
import InfoListCard from '@components/ui/InfoListCard';


export default function ArduinoHardware() {
    return (
        <div className="bg-gray-200">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-400 to-blue-900 text-white py-12 md:py-20">
                <div className="mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Arduino Hardware</h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto">
                        Plataforma de prototipado electrónico de código abierto
                    </p>
                </div>
            </section>

            {/* Tipos de Arduino */}
            <section className="py-12 bg-white">
                <div className="mx-auto px-4 max-w-6xl">
                    <h2 className="text-2xl font-bold text-center mb-8 text-blue-600">
                        <FontAwesomeIcon icon={FA.faMicrochip} className="mr-2" />
                        Modelos de Arduino
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <InfoListCard
                            Color="bg-blue-600"
                            IconColor={colors.techBlue}
                            Icon={FA.faMicrochip}
                            Title="Arduino Uno"
                            ListItems={[
                                'Microcontrolador: ATmega328P',
                                'Voltaje: 5V',
                                'Entradas digitales: 14',
                                'Memoria Flash: 32KB'
                            ]}
                            ButtonText="Ver especificaciones"
                            ButtonLink="https://docs.arduino.cc/hardware/uno-rev3/"
                            ExtraInfo="Básico"
                        />

                        <InfoListCard
                            Color="bg-green-600"
                            IconColor={colors.interactiveGreen}
                            Icon={FA.faNetworkWired}
                            Title="Arduino Mega"
                            ListItems={[
                                'Microcontrolador: ATmega2560',
                                'Entradas digitales: 54',
                                'PWM: 15',
                                'Memoria Flash: 256KB'
                            ]}
                            ButtonText="Ver especificaciones"
                            ButtonLink="https://docs.arduino.cc/hardware/mega-2560/"
                            ExtraInfo="Intermedio"
                        />

                        <InfoListCard
                            Color="bg-purple-600"
                            IconColor={colors.purpleTech}
                            Icon={FA.faWifi}
                            Title="Arduino Nano 33 IoT"
                            ListItems={[
                                'Microcontrolador: SAMD21',
                                'Conectividad WiFi/BT',
                                'Tensión: 3.3V',
                                'Interfaces: I2C, SPI, UART'
                            ]}
                            ButtonText="Ver especificaciones"
                            ButtonLink="https://docs.arduino.cc/hardware/nano-33-iot/"
                            ExtraInfo="Avanzado"
                        />
                    </div>
                </div>
            </section>

            {/* Componentes Hardware */}
            <section className="py-12 bg-gray-100">
                <div className="mx-auto px-4 max-w-6xl">
                    <h2 className="text-2xl font-bold text-center mb-8 text-blue-600">
                        <FontAwesomeIcon icon={FA.faCogs} className="mr-2" />
                        Componentes Principales
                    </h2>

                    <div className="flex flex-col md:flex-row gap-6">
                        <CardBasics
                            Icon={FA.faMicrochip}
                            Title="Microcontrolador"
                            ListItems={[
                                'Cerebro del Arduino (ej: ATmega328P)',
                                'Procesa las instrucciones del programa',
                                'Contiene CPU, memoria y periféricos',
                                'Opera a frecuencias de 8-16MHz'
                            ]}
                        />
                        <CardBasics
                            Icon={FA.faPlug}
                            Title="Puertos de Entrada/Salida"
                            ListItems={[
                                'Pines digitales (0/1) y analógicos',
                                'PWM para control de intensidad',
                                'Protocolos: I2C, SPI, UART',
                                'Voltajes: 3.3V o 5V según modelo'
                            ]}
                        />
                            <CardBasics
                            Icon={FA.faBolt}
                            Title="Fuente de Alimentación"
                            ListItems={[
                                'USB (5V) o fuente externa (7-12V)',
                                'Regulador de voltaje integrado',
                                'Consumo típico: 50-200mA',
                                'Opciones de bajo consumo'
                            ]}
                            />

                            <CardBasics
                                Icon={FA.faMemory}
                                Title="Memoria"
                                ListItems={[
                                    'Flash (almacena el programa)',
                                    'SRAM (datos temporales)',
                                    'EEPROM (almacenamiento persistente)',
                                    'Tamaños: 2KB a 256KB según modelo'
                                ]}
                            />
                    </div>
                </div>
            </section>

            {/* Arquitectura Interna */}
            <section className="py-12 bg-white">
                <div className="mx-auto px-4 max-w-6xl">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="bg-blue-600 p-6">
                            <h2 className="text-white text-2xl font-bold flex items-center">
                                <FontAwesomeIcon icon={FA.faProjectDiagram} className="mr-2" />
                                Funcionamiento a Nivel Hardware
                            </h2>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div >
                                    <h3 className="font-bold text-lg mb-4 text-blue-600">Flujo de Señales</h3>
                                    <ol className="space-y-4">
                                        <li className="flex items-start text-gray-700">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">1</span>
                                            <span>Entrada de señales por pines digitales/analógicos</span>
                                        </li>
                                        <li className="flex items-start text-gray-700">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">2</span>
                                            <span>Conversión ADC para entradas analógicas</span>
                                        </li>
                                        <li className="flex items-start text-gray-700">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">3</span>
                                            <span>Procesamiento por el microcontrolador</span>
                                        </li>
                                        <li className="flex items-start text-gray-700">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">4</span>
                                            <span>Salida por pines digitales/PWM</span>
                                        </li>
                                    </ol>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-4 text-blue-600">Identificación de Componentes</h3>
                                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                                        <div className="flex flex-col items-center">
                                            <img 
                                            src="https://www.globalwellpcba.com/wp-content/uploads/2025/05/Labeled-diagram-of-Arduino-board-functions-and-pins-640x380.webp" 
                                            alt="Diagrama de placa Arduino con funciones y pines"
                                            className="w-full h-auto rounded-lg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Protocolos de Comunicación */}
            <section className="py-12 bg-gray-100">
                <div className="mx-auto px-4 max-w-6xl">
                    <h2 className="text-2xl font-bold text-center mb-8 text-blue-600">
                        <FontAwesomeIcon icon={FA.faWifi} className="mr-2" />
                        Protocolos de Comunicación
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <CardBasics
                            Icon={FA.faExchangeAlt}
                            Title="I2C (Inter-Integrated Circuit)"
                            ListItems={[
                                'Bus de 2 cables: SDA (datos) y SCL (reloj)',
                                'Comunicación maestro-esclavo múltiple',
                                'Velocidad: 100kHz estándar, 400kHz rápido',
                                'Ideal para sensores y displays'
                            ]}
                        />
                        
                        <CardBasics
                            Icon={FA.faArrowsAltH}
                            Title="SPI (Serial Peripheral Interface)"
                            ListItems={[
                                '4 cables: MOSI, MISO, SCK, SS',
                                'Comunicación full-duplex más rápida',
                                'Un maestro, múltiples esclavos',
                                'Usado en SD cards, displays TFT'
                            ]}
                        />
                        
                        <CardBasics
                            Icon={FA.faTerminal}
                            Title="UART (Universal Asynchronous)"
                            ListItems={[
                                '2 cables: TX (transmisión) y RX (recepción)',
                                'Comunicación asíncrona punto a punto',
                                'Baudrate configurable (9600, 115200...)',
                                'Para comunicación serial y módulos'
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Gestión de Energía */}
            <section className="py-12 bg-white">
                <div className="mx-auto px-4 max-w-6xl">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="bg-green-600 p-6">
                            <h2 className="text-white text-2xl font-bold flex items-center">
                                <FontAwesomeIcon icon={FA.faBatteryHalf} className="mr-2" />
                                Gestión de Energía y Consumo
                            </h2>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="font-bold text-lg mb-4 text-green-600">Fuentes de Alimentación</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start text-gray-700">
                                            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">•</span>
                                            <span><strong>USB:</strong> 5V DC, máximo 500mA (USB 2.0) o 900mA (USB 3.0)</span>
                                        </li>
                                        <li className="flex items-start text-gray-700">
                                            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">•</span>
                                            <span><strong>Jack DC:</strong> 7-12V recomendado (6-20V límite)</span>
                                        </li>
                                        <li className="flex items-start text-gray-700">
                                            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">•</span>
                                            <span><strong>Pin VIN:</strong> Alimentación externa directa sin regulador</span>
                                        </li>
                                        <li className="flex items-start text-gray-700">
                                            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">•</span>
                                            <span><strong>Batería:</strong> Ideal para proyectos portátiles</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-4 text-green-600">Optimización de Consumo</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start text-gray-700">
                                            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">•</span>
                                            <span><strong>Modo Sleep:</strong> Reduce consumo de 200mA a 15mA</span>
                                        </li>
                                        <li className="flex items-start text-gray-700">
                                            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">•</span>
                                            <span><strong>PWM:</strong> Control eficiente de motores y LEDs</span>
                                        </li>
                                        <li className="flex items-start text-gray-700">
                                            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">•</span>
                                            <span><strong>Frecuencia:</strong> Reducir clock para menor consumo</span>
                                        </li>
                                        <li className="flex items-start text-gray-700">
                                            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">•</span>
                                            <span><strong>Periféricos:</strong> Desactivar cuando no se usen</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Procesamiento de Señales */}
            <section className="py-12 bg-gray-100">
                <div className="mx-auto px-4 max-w-6xl">
                    <h2 className="text-2xl font-bold text-center mb-8 text-blue-600">
                        <FontAwesomeIcon icon={FA.faWaveSquare} className="mr-2" />
                        Procesamiento de Señales Digitales y Analógicas
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="bg-blue-600 p-4">
                                <h3 className="text-white text-xl font-bold flex items-center">
                                    <FontAwesomeIcon icon={FA.faSquare} className="mr-2" />
                                    Señales Digitales
                                </h3>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-3">
                                    <li className="flex items-start text-gray-700">
                                        <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">•</span>
                                        <span><strong>Estados:</strong> HIGH (5V/3.3V) y LOW (0V)</span>
                                    </li>
                                    <li className="flex items-start text-gray-700">
                                        <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">•</span>
                                        <span><strong>Lectura:</strong> digitalRead() devuelve 1 o 0</span>
                                    </li>
                                    <li className="flex items-start text-gray-700">
                                        <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">•</span>
                                        <span><strong>Escritura:</strong> digitalWrite() envía HIGH/LOW</span>
                                    </li>
                                    <li className="flex items-start text-gray-700">
                                        <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">•</span>
                                        <span><strong>Aplicaciones:</strong> Botones, LEDs, relés</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="bg-purple-600 p-4">
                                <h3 className="text-white text-xl font-bold flex items-center">
                                    <FontAwesomeIcon icon={FA.faWaveSquare} className="mr-2" />
                                    Señales Analógicas
                                </h3>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-3">
                                    <li className="flex items-start text-gray-700">
                                        <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">•</span>
                                        <span><strong>Rango:</strong> 0V a 5V (o 3.3V según modelo)</span>
                                    </li>
                                    <li className="flex items-start text-gray-700">
                                        <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">•</span>
                                        <span><strong>ADC:</strong> Convertidor de 10 bits (0-1023)</span>
                                    </li>
                                    <li className="flex items-start text-gray-700">
                                        <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">•</span>
                                        <span><strong>Lectura:</strong> analogRead() devuelve 0-1023</span>
                                    </li>
                                    <li className="flex items-start text-gray-700">
                                        <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">•</span>
                                        <span><strong>Aplicaciones:</strong> Sensores, potenciómetros</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="bg-orange-500 p-4">
                            <h3 className="text-white text-xl font-bold flex items-center">
                                <FontAwesomeIcon icon={FA.faCog} className="mr-2" />
                                PWM (Modulación por Ancho de Pulso)
                            </h3>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-bold text-orange-500 mb-3">¿Qué es PWM?</h4>
                                    <p className="text-gray-700 mb-4">
                                        PWM simula una señal analógica variando el tiempo que una señal digital está en HIGH vs LOW. 
                                        El duty cycle (ciclo de trabajo) determina el valor efectivo de 0 a 255.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-orange-500 mb-3">Aplicaciones Prácticas</h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-center text-gray-700">
                                            <FontAwesomeIcon icon={FA.faCheckCircle} className="text-green-500 mr-2" />
                                            Control de intensidad de LEDs
                                        </li>
                                        <li className="flex items-center text-gray-700">
                                            <FontAwesomeIcon icon={FA.faCheckCircle} className="text-green-500 mr-2" />
                                            Velocidad de motores DC
                                        </li>
                                        <li className="flex items-center text-gray-700">
                                            <FontAwesomeIcon icon={FA.faCheckCircle} className="text-green-500 mr-2" />
                                            Posición de servomotores
                                        </li>
                                        <li className="flex items-center text-gray-700">
                                            <FontAwesomeIcon icon={FA.faCheckCircle} className="text-green-500 mr-2" />
                                            Generación de tonos de audio
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Arquitectura del Microcontrolador */}
            <section className="py-12 bg-white">
                <div className="mx-auto px-4 max-w-6xl">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="bg-indigo-600 p-6">
                            <h2 className="text-white text-2xl font-bold flex items-center">
                                <FontAwesomeIcon icon={FA.faMicrochip} className="mr-2" />
                                Arquitectura Interna del Microcontrolador
                            </h2>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <CardBasics
                                    Icon={FA.faBrain}
                                    Title="CPU (Unidad Central)"
                                    ListItems={[
                                        'Ejecuta instrucciones del programa',
                                        'Procesador RISC de 8 bits',
                                        'Frecuencia: 16MHz (Uno) / 84MHz (Due)',
                                        'Pipeline de ejecución optimizado'
                                    ]}
                                />
                                
                                <CardBasics
                                    Icon={FA.faMemory}
                                    Title="Gestión de Memoria"
                                    ListItems={[
                                        'Flash: Programa principal (32KB)',
                                        'SRAM: Variables dinámicas (2KB)',
                                        'EEPROM: Datos persistentes (1KB)',
                                        'Registros: Almacenamiento rápido'
                                    ]}
                                />
                                
                                <CardBasics
                                    Icon={FA.faClock}
                                    Title="Sistema de Reloj"
                                    ListItems={[
                                        'Cristal de cuarzo externo 16MHz',
                                        'Oscilador interno RC 8MHz',
                                        'Prescaler para dividir frecuencia',
                                        'Watchdog timer para seguridad'
                                    ]}
                                />
                            </div>
                            
                            <div className="bg-gray-100 rounded-lg p-6">
                                <h3 className="font-bold text-indigo-600 mb-4 text-center">Ciclo de Ejecución de Instrucciones</h3>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                    <div className="text-center">
                                        <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">1</div>
                                        <h4 className="font-bold text-indigo-600">Fetch</h4>
                                        <p className="text-sm text-gray-600">Buscar instrucción en memoria Flash</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">2</div>
                                        <h4 className="font-bold text-indigo-600">Decode</h4>
                                        <p className="text-sm text-gray-600">Decodificar la instrucción</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">3</div>
                                        <h4 className="font-bold text-indigo-600">Execute</h4>
                                        <p className="text-sm text-gray-600">Ejecutar operación en ALU</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">4</div>
                                        <h4 className="font-bold text-indigo-600">Store</h4>
                                        <p className="text-sm text-gray-600">Almacenar resultado</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Proyectos Básicos */}
            <section className="py-12 bg-gray-100">
                <div className="mx-auto px-4 max-w-6xl">
                    <h2 className="text-2xl font-bold text-center mb-8 text-blue-600">
                        <FontAwesomeIcon icon={FA.faLightbulb} className="mr-2" />
                        Proyectos de Ejemplo
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <InfoListCard
                            Color="bg-orange-500"
                            IconColor={colors.projectOrange}
                            Icon={FA.faLightbulb}
                            Title="LED Intermitente"
                            ListItems={[
                                'Componentes: LED, resistencia',
                                'Conceptos: Salida digital, timing',
                                'Dificultad: Básico',
                                'Tiempo estimado: 15 min'
                            ]}
                            ButtonText="Ver proyecto"
                            ButtonLink="/arduinoLedProject"
                            ExtraInfo="Básico"
                        />

                        <InfoListCard
                            Color="bg-green-600"
                            IconColor={colors.interactiveGreen}
                            Icon={FA.faTemperatureLow}
                            Title="Termómetro Digital"
                            ListItems={[
                                'Componentes: Sensor LM35, display',
                                'Conceptos: Entrada analógica, ADC',
                                'Dificultad: Intermedio',
                                'Tiempo estimado: 45 min'
                            ]}
                            ButtonText="Ver proyecto"
                            ButtonLink="/arduinoTermometro"
                            ExtraInfo="Intermedio"
                        />

                        <InfoListCard
                            Color="bg-purple-600"
                            IconColor={colors.purpleTech}
                            Icon={FA.faRobot}
                            Title="Control de Motor"
                            ListItems={[
                                'Componentes: Motor DC, driver L298N',
                                'Conceptos: PWM, control de potencia',
                                'Dificultad: Avanzado',
                                'Tiempo estimado: 90 min'
                            ]}
                            ButtonText="Ver proyecto"
                            ButtonLink="/motorControlProject"
                            ExtraInfo="Avanzado"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}