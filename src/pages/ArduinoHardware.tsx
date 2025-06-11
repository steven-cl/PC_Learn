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
                            ButtonLink="https://arduino.microlog.es/luz-intermitente/"
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
                            ButtonLink="https://jorgesanz.es/termometro-arduino-con-pantalla-lcd/"
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
                            ButtonLink="https://www.bricolabs.cc/wiki/guias/control_de_motores"
                            ExtraInfo="Avanzado"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}