import CardBasics from '@/components/ui/CardBasics';
import * as FA from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function BasicsArchitecture() {
    return (
        <div className="bg-gray-200">
            <section className="bg-gradient-to-r from-blue-400 to-blue-900 text-white py-12 md:py-20">
                <div className="mx-auto h-6 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Arquitecturas Básicas</h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto">
                        Fundamentos esenciales de la arquitectura de computadoras
                    </p>
                </div>
            </section>

            <section className="py-12">
                <div className="mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-6">
                                <div className="bg-[var(--tech-blue)] p-4">
                                    <h3 className="text-white text-xl font-bold">Contenido del Módulo</h3>
                                </div>
                                <div className="p-4">
                                    <ul className="space-y-2">
                                        <li>
                                            <a href="#von-neumann" className="flex items-center text-[var(--tech-blue)] hover:text-blue-700 p-2 rounded hover:bg-blue-50">
                                                <FontAwesomeIcon icon={FA.faArrowRight} className="mr-2 text-1xl" />
                                                Von Neumann vs. Harvard
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#modelos-memoria" className="flex items-center text-[var(--tech-blue)] hover:text-blue-700 p-2 rounded hover:bg-blue-50">
                                                <FontAwesomeIcon icon={FA.faArrowRight} className="mr-2 text-sm" />
                                                Modelos de memoria
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#ciclo-instruccion" className="flex items-center text-[var(--tech-blue)] hover:text-blue-700 p-2 rounded hover:bg-blue-50">
                                                <FontAwesomeIcon icon={FA.faArrowRight} className="mr-2 text-sm" />
                                                Ciclo de instrucción
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#componentes-cpu" className="flex items-center text-[var(--tech-blue)] hover:text-blue-700 p-2 rounded hover:bg-blue-50">
                                                <FontAwesomeIcon icon={FA.faArrowRight} className="mr-2 text-sm" />
                                                Componentes CPU
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-2">
                            <div id="von-neumann" className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                                <div className="bg-[var(--tech-blue)] p-6">
                                    <h2 className="text-white text-2xl font-bold">Von Neumann vs. Harvard</h2>
                                </div>
                                <div className="p-6">
                                    <div className="flex flex-col md:flex-row gap-6 mb-6">
                                        <CardBasics
                                            Icon={FA.faExchangeAlt}
                                             
                                            Title='Von Neumann'
                                            ListItems={[
                                                'Buses compartidos para datos e instrucciones',
                                                'Arquitectura más simple y económica',
                                                'Riesgo de cuello de botella',
                                            ]}
                                        />
                                        <CardBasics 
                                            Icon={FA.faRoad}
                                             
                                            Title='Harvard'
                                            ListItems={[
                                                'Buses separados para datos e instrucciones',
                                                'Mayor velocidad de ejecución',
                                                'Mayor complejidad y costo',
                                            ]}
                                        />
                                    </div>
                                    <div className="bg-gray-200 rounded-lg p-4 mb-6">
                                        <h4 className="font-bold text-[var(--tech-blue)] mb-3 flex items-center">
                                            <FontAwesomeIcon icon={FA.faQuestionCircle} className="mr-2" /> ¿Cuál elegir?
                                        </h4>
                                        <p className="text-[var(--neutral-gray)]">
                                            La arquitectura Von Neumann es típica en computadoras de propósito general, mientras que Harvard es común en microcontroladores y sistemas embebidos donde el rendimiento es crítico.
                                        </p>
                                    </div>
                                    <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden mb-6">
                                        <div className="w-full h-full flex items-center justify-center text-gray-600">
                                            <FontAwesomeIcon icon={FA.faProjectDiagram} className="text-5xl" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="modelos-memoria" className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                                <div className="bg-[var(--tech-blue)] p-6">
                                    <h2 className="text-white text-2xl font-bold">Modelos de memoria</h2>
                                </div>
                                <div className="p-6">
                                    <div className="flex flex-col md:flex-row gap-6 mb-6">
                                        <CardBasics 
                                            Icon={FA.faMemory}
                                             
                                            Title='Memoria de la CPU'
                                            ListItems={[
                                                'RAM (volátil)',
                                                'Acceso rápido pero limitada capacidad',
                                                'Almacena datos e instrucciones en ejecución',
                                            ]}
                                        />
                                        <CardBasics 
                                            Icon={FA.faHdd}
                                             
                                            Title='Memoria Secundaria'
                                            ListItems={[
                                                'Discos duros, SSDs (no volátil)',
                                                'Mayor capacidad pero más lenta',
                                                'Almacenamiento permanente',
                                            ]}
                                        />
                                    </div>
                                    <div className="bg-gray-200 rounded-lg p-4">
                                        <h4 className="font-bold text-[var(--tech-blue)] mb-3 flex items-center">
                                            <FontAwesomeIcon icon={FA.faLayerGroup} className="mr-2" />Jerarquía de memoria
                                        </h4>
                                        <div className="flex flex-col items-center">
                                            <div className="w-full max-w-md">
                                                <div className="flex items-center justify-between py-2 px-4 bg-[var(--tech-blue)] text-white rounded-t-lg">
                                                    <span>Registros CPU</span>
                                                    <span className="text-xs">Más rápido</span>
                                                </div>
                                                <div className="flex items-center justify-between py-2 px-4 bg-blue-600 text-white">
                                                    <span>Caché Nivel 1</span>
                                                </div>
                                                <div className="flex items-center justify-between py-2 px-4 bg-blue-500 text-white">
                                                    <span>Caché Nivel 2</span>
                                                </div>
                                                <div className="flex items-center justify-between py-2 px-4 bg-blue-400 text-white">
                                                    <span>Memoria Principal (DRAM)</span>
                                                </div>
                                                <div className="flex items-center justify-between py-2 px-4 bg-blue-300 text-white">
                                                    <span>Memoria Secundaria(Discos Duros)</span>
                                                </div>
                                                <div className="flex items-center justify-between py-2 px-4 bg-blue-200 text-black rounded-b-lg">
                                                    <span>Almacenamiento Terciario{'\n'}(Sistemas de almacenamiento distribuidos) </span>
                                                    <span className="text-xs">Más lento</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="ciclo-instruccion" className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                                <div className="bg-[var(--tech-blue)] p-6">
                                    <h2 className="text-white text-2xl font-bold">Ciclo de instrucción</h2>
                                </div>
                                <div className="p-6">
                                    <div className="mb-6">
                                        <p className="text-[var(--neutral-gray)] mb-4">
                                            El ciclo de instrucción es el proceso que sigue la CPU para ejecutar cada instrucción de un programa. Consta de varias etapas fundamentales:
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                                            <div className="bg-blue-100 rounded-lg p-4 text-center">
                                                <div className="bg-[var(--tech-blue)] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                                                    <span>1</span>
                                                </div>
                                                <h4 className="font-bold text-[var(--tech-blue)]">Fetch</h4>
                                                <p className="text-sm text-[var(--neutral-gray)]">Obtener la instrucción de memoria</p>
                                            </div>
                                            <div className="bg-blue-100 rounded-lg p-4 text-center">
                                                <div className="bg-[var(--tech-blue)] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                                                    <span>2</span>
                                                </div>
                                                <h4 className="font-bold text-[var(--tech-blue)]">Decode</h4>
                                                <p className="text-sm text-[var(--neutral-gray)]">Decodificar la instrucción</p>
                                            </div>
                                            <div className="bg-blue-100 rounded-lg p-4 text-center">
                                                <div className="bg-[var(--tech-blue)] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                                                    <span>3</span>
                                                </div>
                                                <h4 className="font-bold text-[var(--tech-blue)]">Execute</h4>
                                                <p className="text-sm text-[var(--neutral-gray)]">Ejecutar la operación</p>
                                            </div>
                                            <div className="bg-blue-100 rounded-lg p-4 text-center">
                                                <div className="bg-[var(--tech-blue)] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                                                    <span>4</span>
                                                </div>
                                                <h4 className="font-bold text-[var(--tech-blue)]">Writeback</h4>
                                                <p className="text-sm text-[var(--neutral-gray)]">Escribir los resultados</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-100 rounded-lg p-4">
                                        <h4 className="font-bold text-[var(--tech-blue)] mb-3 flex items-center">
                                            <FontAwesomeIcon icon={FA.faLightbulb} className="mr-2" /> Pipeline
                                        </h4>
                                        <p className="text-[var(--neutral-gray)] mb-4">
                                            Las CPUs modernas implementan pipelining para procesar múltiples instrucciones simultáneamente en diferentes etapas:
                                        </p>
                                        <div className="p-1">
                                            <table className="min-w-full bg-white border border-gray-500 border-collapse">
                                                <thead>
                                                    <tr className="bg-[var(--tech-blue)] text-white ">
                                                        <th className="py-2 px-4 border-b">Ciclo</th>
                                                        <th className="py-2 px-4 border-b">Instrucción 1</th>
                                                        <th className="py-2 px-4 border-b">Instrucción 2</th>
                                                        <th className="py-2 px-4 border-b">Instrucción 3</th>
                                                        <th className="py-2 px-4 border-b">Instrucción 4</th>
                                                    </tr>
                                                </thead>
                                                <tbody className='text-[var(--neutral-gray)] text-black'>
                                                    <tr>
                                                        <td className="py-2 px-4 border-b text-center">1</td>
                                                        <td className="py-2 px-4 border-b text-center">Fetch</td>
                                                        <td className="py-2 px-4 border-b text-center">-</td>
                                                        <td className="py-2 px-4 border-b text-center">-</td>
                                                        <td className="py-2 px-4 border-b text-center">-</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-2 px-4 border-b text-center">2</td>
                                                        <td className="py-2 px-4 border-b text-center">Decode</td>
                                                        <td className="py-2 px-4 border-b text-center">Fetch</td>
                                                        <td className="py-2 px-4 border-b text-center">-</td>
                                                        <td className="py-2 px-4 border-b text-center">-</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-2 px-4 border-b text-center">3</td>
                                                        <td className="py-2 px-4 border-b text-center">Execute</td>
                                                        <td className="py-2 px-4 border-b text-center">Decode</td>
                                                        <td className="py-2 px-4 border-b text-center">Fetch</td>
                                                        <td className="py-2 px-4 border-b text-center">-</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-2 px-4 border-b text-center">4</td>
                                                        <td className="py-2 px-4 border-b text-center">Writeback</td>
                                                        <td className="py-2 px-4 border-b text-center">Execute</td>
                                                        <td className="py-2 px-4 border-b text-center">Decode</td>
                                                        <td className="py-2 px-4 border-b text-center">Fetch</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="componentes-cpu" className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                                <div className="bg-[var(--tech-blue)] p-6">
                                    <h2 className="text-white text-2xl font-bold">Componentes principales de la CPU</h2>
                                </div>
                                <div className="p-6">
                                    <div className="mb-6">
                                        <p className="text-[var(--neutral-gray)] mb-4">
                                            La Unidad Central de Procesamiento (CPU) es el cerebro de la computadora, compuesto por varios componentes clave que trabajan en conjunto para ejecutar instrucciones.
                                        </p>
                                        
                                        <div className="bg-blue-50 rounded-lg p-6 mb-6 border border-blue-200">
                                            <div className="flex flex-col items-center">
                                                <div className="relative w-full max-w-2xl">
                                                    <div className="bg-gray-800 rounded-lg p-4 text-white mb-4 text-center">
                                                        <h4 className="font-bold mb-2">CPU</h4>
                                                        <div className="grid grid-cols-3 gap-4">
                                                            <div className="bg-blue-600 rounded p-3">
                                                                <div className="flex items-center justify-center mb-1">
                                                                    <FontAwesomeIcon icon={FA.faMicrochip} size="lg" />
                                                                </div>
                                                                <p className="text-xs font-semibold">Unidad de Control</p>
                                                            </div>
                                                            
                                                            <div className="bg-red-600 rounded p-3">
                                                                <div className="flex items-center justify-center mb-1">
                                                                    <FontAwesomeIcon icon={FA.faCalculator} size="lg" />
                                                                </div>
                                                                <p className="text-xs font-semibold">ALU</p>
                                                            </div>
                                                            
                                                            <div className="bg-green-600 rounded p-3">
                                                                <div className="flex items-center justify-center mb-1">
                                                                    <FontAwesomeIcon icon={FA.faMemory} size="lg" />
                                                                </div>
                                                                <p className="text-xs font-semibold">Registros</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="flex justify-between px-8 mb-4">
                                                        <div className="text-center">
                                                            <FontAwesomeIcon icon={FA.faArrowDown} className="text-blue-500" />
                                                            <p className="text-xs mt-1 text-[var(--neutral-gray)]">Bus de datos</p>
                                                        </div>
                                                        <div className="text-center">
                                                            <FontAwesomeIcon icon={FA.faExchangeAlt} className="text-blue-500" />
                                                            <p className="text-xs mt-1 text-[var(--neutral-gray)]">Bus de control</p>
                                                        </div>
                                                        <div className="text-center">
                                                            <FontAwesomeIcon icon={FA.faArrowUp} className="text-blue-500" />
                                                            <p className="text-xs mt-1 text-[var(--neutral-gray)]">Bus de direcciones</p>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="bg-gray-700 rounded-lg p-3 text-white text-center">
                                                        <h4 className="font-bold mb-1">Memoria Principal</h4>
                                                        <p className="text-xs">RAM</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div > 
                                            <div className="flex flex-col md:flex-row gap-6 mb-6">
                                                <CardBasics 
                                                Icon={FA.faMicrochip}
                                                 
                                                Title='Unidad de Control (UC)'
                                                ListItems={[
                                                    'Coordina todas las operaciones del procesador',
                                                    'Interpreta las instrucciones del programa',
                                                    'Genera señales de control para otros componentes',
                                                ]}
                                                />
                                                <CardBasics 
                                                    Icon={FA.faCalculator}
                                                     
                                                    Title='Unidad Aritmético-Lógica (ALU)'
                                                    ListItems={[
                                                        'Realiza operaciones aritméticas (suma, resta, etc.)',
                                                        'Ejecuta operaciones lógicas (AND, OR, NOT)',
                                                        'Opera con datos binarios',
                                                    ]}
                                                />
                                            </div>
                                            <div className="flex flex-col md:flex-row gap-6 mb-6">
                                                <CardBasics 
                                                Icon={FA.faMemory}
                                                 
                                                Title='Registros'
                                                ListItems={[
                                                    'Pequeñas memorias de alta velocidad en la CPU',
                                                    'Almacenan datos temporalmente durante el procesamiento',
                                                    'Incluyen el contador de programa (PC) y registro de instrucción (IR)',
                                                ]}
                                                />
                                                <CardBasics 
                                                Icon={FA.faBus}
                                                Title='Buses de comunicación'
                                                ListItems={[
                                                    'Bus de datos: Transporta información entre componentes',
                                                    'Bus de direcciones: Especifica ubicaciones de memoria',
                                                    'Bus de control: Transporta señales de sincronización',
                                                ]}
                                                />
                                            </div>
                                        </div>

                                        
                                        <div className="bg-gray-200 rounded-lg p-6">
                                            <h3 className="font-bold text-[var(--tech-blue)] mb-4 text-center text-xl">
                                                <FontAwesomeIcon icon={FA.faCogs} className="mr-2" /> Flujo de ejecución en la CPU
                                            </h3>
                                            <div className="flex flex-col items-center">
                                                <div className="relative w-full max-w-lg">
                                                    <div className="flex flex-col space-y-8">
                                                        {/* Paso 1 */}
                                                        <div className="flex items-start">
                                                            <div className="bg-[var(--tech-blue)] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                                                                1
                                                            </div>
                                                            <div>
                                                                <h4 className="font-bold text-[var(--tech-blue)]">Fetch</h4>
                                                                <p className="text-[var(--neutral-gray)]">
                                                                    La UC obtiene la instrucción de memoria usando el PC y la almacena en el IR
                                                                </p>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="flex items-start">
                                                            <div className="bg-[var(--tech-blue)] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                                                                2
                                                            </div>
                                                            <div>
                                                                <h4 className="font-bold text-[var(--tech-blue)]">Decode</h4>
                                                                <p className="text-[var(--neutral-gray)]">
                                                                    La UC decodifica la instrucción y prepara los operandos necesarios
                                                                </p>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="flex items-start">
                                                            <div className="bg-[var(--tech-blue)] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                                                                3
                                                            </div>
                                                            <div>
                                                                <h4 className="font-bold text-[var(--tech-blue)]">Execute</h4>
                                                                <p className="text-[var(--neutral-gray)]">
                                                                    La ALU realiza la operación requerida (cálculo, comparación, etc.)
                                                                </p>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="flex items-start">
                                                            <div className="bg-[var(--tech-blue)] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                                                                4
                                                            </div>
                                                            <div>
                                                                <h4 className="font-bold text-[var(--tech-blue)]">Writeback</h4>
                                                                <p className="text-[var(--neutral-gray)]">
                                                                    Los resultados se almacenan en registros o memoria
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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
    )
}