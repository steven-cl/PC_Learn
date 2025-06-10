import * as FA from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import colors from '@/styles';

export default function Home() {
    return (
        <div className="bg-white mx-auto pt-0">
          <section className="bg-gradient-to-r from-blue-400 to-blue-900 text-white py-15 md:py-24">
            <div className="mx-auto px-4 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Domina la Arquitectura de Máquinas
                </h1>
                <p class="text-xl mb-6 max-w-xl">
                  Aprende los fundamentos de la arquitectura de computadoras, microcontroladores y programación en bajo nivel con proyectos prácticos.
                </p>
                <div class="flex flex-wrap gap-3">
                  <button class="bg-green-400 hover:bg-green-600 px-6 py-3 rounded-md font-medium transition">
                        Comenzar Ahora
                    </button>
                    <button class="bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition">
                        Ver Proyectos
                    </button>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative">
                  <div className="bg-blue-500 rounded-full w-64 h-64 flex items-center justify-center">
                    <FontAwesomeIcon className="pt-10" icon={FA.faLaptopCode} size='8x' color={colors.miAzul}/>
                  </div>
                  <div className="absolute top-10 -left-10 bg-white text-blue-400 p-4 rounded-lg shadow-xl transform rotate-3">
                    <FontAwesomeIcon className="mb-2" icon={FA.faArrowsAltH} size='2x' color={colors.techBlue}/>
                    <p>Von Neumann vs Harvard</p>
                  </div>  
                  <div className="absolute bottom-10 -right-10 bg-white text-blue-400 p-4 rounded-lg shadow-xl transform -rotate-3">
                    <FontAwesomeIcon className="mb-2" icon={FA.faMicrochip} size='2x' color={colors.techBlue}/>
                    <p>Microcontroladores PIC</p>
                  </div> 
                </div> 
              </div>
            </div>
          </section>

          <section id="modulos" className="py-16 bg-gray-100">
            <div className="cantainer mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-4 text-blue-600">
                Módulos Educativos
              </h2>
              <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
                Programa estructurado en 5 módulos con contenido teórico-práctico para dominar la arquitectura de máquinas
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden module-card">
                  <div className="bg-blue-600 p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
                        <FontAwesomeIcon className="text-xl" icon={FA.faServer} size='2x' color={colors.techBlue}/>
                      </div>
                      <h3 className="text-white text-xl font-bold">Arquitecturas Básicas</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="mb-4 text-gray-600 pl-0">
                      <li className="flex items-start mb-2">
                        <FontAwesomeIcon className="text-green-600 mt-1 mr-2" icon={FA.faCheckCircle} />
                        Von Neumann vs. Harvard
                      </li>
                      <li className="flex items-start mb-2">
                        <FontAwesomeIcon className="text-green-600 mt-1 mr-2" icon={FA.faCheckCircle} />
                        Modelos de memoria
                      </li>
                      <li className="flex items-start mb-2">
                        <FontAwesomeIcon className="text-green-600 mt-1 mr-2" icon={FA.faCheckCircle} />
                        Ciclo de instrucción
                      </li>
                      <li className="flex items-start mb-2">
                        <FontAwesomeIcon className="text-green-600 mt-1 mr-2" icon={FA.faCheckCircle} />
                        Componentes CPU
                      </li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <button className="bg-white text-blue-700 hover:text-blue-700 font-medium flex items-center">
                        Ver contenido
                        <FontAwesomeIcon className="ml-2 text-sm" icon={FA.faArrowRight} />
                      </button>
                      <div className="bg-blue-200 text-blue-900 px-3 py-1 rounded-full text-sm">
                        Básico
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden module-card">
                  <div className="bg-orange-400 p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
                        <FontAwesomeIcon className="text-xl" icon={FA.faMicrochip} size='2x' color={colors.projectOrange}/>
                      </div>
                      <h3 className="text-white text-xl font-bold">Microcontroladores PIC</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="mb-6 text-gray-500 pl-0">
                      <li className="flex items-start mb-2">
                        <FontAwesomeIcon className="text-green-600 mt-1 mr-2" icon={FA.faCheckCircle} />
                        Arquitectura interna
                      </li>
                      <li className="flex items-start mb-2">
                        <FontAwesomeIcon className="text-green-600 mt-1 mr-2" icon={FA.faCheckCircle} />
                        Periféricos
                      </li>
                      <li className="flex items-start mb-2">
                        <FontAwesomeIcon className="text-green-600 mt-1 mr-2" icon={FA.faCheckCircle} />
                        Modos de direccionamiento
                      </li>
                      <li className="flex items-start mb-2">
                        <FontAwesomeIcon className="text-green-600 mt-1 mr-2" icon={FA.faCheckCircle} />
                        Registros clave
                      </li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <button className="bg-white text-blue-700 hover:text-orange-700 font-medium flex items-center">
                        Ver contenido
                        <FontAwesomeIcon className="ml-2 text-sm" icon={FA.faArrowRight} />
                      </button>
                      <div className="bg-orange-200 text-orange-400 px-3 py-1 rounded-full text-sm">
                        Intermedio
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden module-card">
                  <div className="bg-blue-600 p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
                        <FontAwesomeIcon className="text-xl" icon={FA.faCode} size='2x' color={colors.interactiveGreen}/>
                      </div>
                      <h3 className="text-white text-xl font-bold">Microcontroladores PIC</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="mb-4 text-gray-600 pl-0">
                      <li className="flex items-start mb-2">
                        <FontAwesomeIcon className="text-green-600 mt-1 mr-2" icon={FA.faCheckCircle} />
                        Arquitectura interna
                      </li>
                      <li className="flex items-start mb-2">
                        <FontAwesomeIcon className="text-green-600 mt-1 mr-2" icon={FA.faCheckCircle} />
                        Periféricos
                      </li>
                      <li className="flex items-start mb-2">
                        <FontAwesomeIcon className="text-green-600 mt-1 mr-2" icon={FA.faCheckCircle} />
                        Modos de direccionamiento
                      </li>
                      <li className="flex items-start mb-2">
                        <FontAwesomeIcon className="text-green-600 mt-1 mr-2" icon={FA.faCheckCircle} />
                        Registros clave
                      </li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <button className="bg-white text-blue-700 hover:text-blue-700 font-medium flex items-center">
                        Ver contenido
                        <FontAwesomeIcon className="ml-2 text-sm" icon={FA.faArrowRight} />
                      </button>
                      <div className="bg-green-200 text-green-900 px-3 py-1 rounded-full text-sm">
                        Avanzado
                      </div>
                    </div>
                  </div>
                </div>

                 <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex">
                        <div className="w-1/3 bg-[var(--neutral-gray)] flex items-center justify-center">
                            <FontAwesomeIcon icon={FA.faExchange} className="text-white" size="3x"/>
                        </div>
                        <div className="w-2/3 p-6">
                            <h3 className="font-bold text-lg text-[var(--neutral-gray)] mb-2">Comunicación y Periféricos</h3>
                            <p className="text-gray-500 text-sm mb-4">Puertos paralelos, comunicación serial, temporizadores, PWM</p>
                            <button className="bg-white text-[var(--tech-blue)] text-sm hover:text-blue-700 font-medium flex items-center">
                                Explorar módulo
                                <FontAwesomeIcon icon={FA.faArrowRight} className="ml-2 text-xs"/>
                            </button>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex">
                        <div className="w-1/3 bg-[var(--project-orange)] flex items-center justify-center">
                            <FontAwesomeIcon icon={FA.faLightbulb} className="text-white" size="3x"/>
                        </div>
                        <div className="w-2/3 p-6">
                            <h3 className="font-bold text-lg text-[var(--neutral-gray)] mb-2">Proyectos Integradores</h3>
                            <p className="text-gray-500 text-sm mb-4">Semáforo inteligente, termostato digital, terminal serial</p>
                            <button className="bg-white text-[var(--tech-blue)] text-sm hover:text-blue-700 font-medium flex items-center">
                                Explorar módulo
                                <FontAwesomeIcon icon={FA.faArrowRight} className="ml-2 text-xs"/>
                            </button>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </section>

          <section id="proyectos" className="py-16 bg-gradient-to-br from-blue-200 to-gray-100">
            <div className="mx-auto px-4">
              <div className="text-center mb-12">
                <span className="inline-block bg-[var(--project-orange)] text-white text-sm px-4 py-1 rounded-full mb-3">Aprende Haciendo</span>
                  <h2 className="text-3xl font-bold text-[var(--tech-blue)]">Proyectos Integradores</h2>
                  <p className="text-[var(--neutral-gray)] text-2xl max-w-2xl mx-auto mt-3">
                    Aplica tus conocimientos en proyectos prácticos que simulan desafíos del mundo real
                  </p>
              </div>
            
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white h-140 rounded-1xl shadow-lg overflow-hidden">
                    <div className="relative h-64">
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--tech-blue)] to-blue-600 flex items-center justify-center">
                            <div className="relative">
                                <div className="absolute top-0 right-0 bg-[var(--project-orange)] text-white text-xl font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">
                                    Destacado
                                </div>
                                <FontAwesomeIcon className="text-white text-7xl opacity-30" icon={FA.faTrafficLight} size='5x'/>
                            </div>
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-2xl font-bold text-[var(--tech-blue)] mb-2">Semáforo Inteligente</h3>
                        <p className="text-[var(--neutral-gray)] mb-4">
                            Implementación de un sistema de semáforo con sensores y temporización adaptativa usando microcontroladores PIC
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-5">
                            <span className="bg-blue-100 text-[var(--tech-blue)] px-3 py-1 rounded-full text-sm">
                                <FontAwesomeIcon className="mr-1" icon={FA.faMicrochip} />PIC16F877A
                            </span>
                            <span className="bg-blue-100 text-[var(--tech-blue)] px-3 py-1 rounded-full text-sm">
                                 <FontAwesomeIcon className="mr-1" icon={FA.faBolt} />GPIO
                            </span>
                            <span className="bg-blue-100 text-[var(--tech-blue)] px-3 py-1 rounded-full text-sm">
                                <FontAwesomeIcon className="mr-1" icon={FA.faClock} />Timers
                            </span>
                            <span className="bg-blue-100 text-[var(--tech-blue)] px-3 py-1 rounded-full text-sm">
                                <FontAwesomeIcon className="ml-1" icon={FA.faFileCode} />Ensamblador
                            </span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                            <button className="bg-[var(--tech-blue)] hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium flex items-center">
                                <FontAwesomeIcon icon={FA.faBookOpen} className="mr-2" />Ver Tutorial
                            </button>
                            <div className=" flex space-x-3">
                                <button className="bg-white  hover:text-[var(--tech-blue)]">
                                  <FontAwesomeIcon icon={FA.faDownload} color={colors.neutralGray} />
                                </button>
                                <button className="bg-white hover:text-[var(--tech-blue)]">
                                    <FontAwesomeIcon icon={FA.faShareAlt} color={colors.neutralGray} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div >
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
                        <div className="pt-0 px-5 pb-4">
                            <div className="flex justify-between">
                                <h3 className="text-xl font-bold text-[var(--tech-blue)] flex items-center ">
                                  <FontAwesomeIcon icon={FA.faThermometerHalf} className="text-[var(--project-orange)] mr-3" />
                                  Termostato Digital
                                </h3>
                            </div>
                            <p className="text-[var(--neutral-gray)] my-1 ml-1 mb-3 ">
                                Sistema de control de temperatura con sensor LM35, ADC y PWM para control de ventilador
                            </p>
                            <button className="bg-white text-[var(--tech-blue)] hover:text-blue-700 text-sm font-medium flex items-center">
                                Ver detalles del proyecto
                                <FontAwesomeIcon icon={FA.faChevronRight} className=" ml-2 text-xs" />
                            </button>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
                        <div className="pt-0 px-5 pb-4">
                            <div className="flex justify-between">
                                <h3 className="text-xl font-bold text-[var(--tech-blue)] flex items-center">
                                  <FontAwesomeIcon icon={FA.faTerminal} className="text-[var(--project-orange)] mr-3" />
                                  Terminal Serial
                                </h3>
                            </div>
                            <p className="text-[var(--neutral-gray)] my-1 ml-1 mb-6 ">
                                Comunicación I2C con sensor de temperatura + transmisión serial UART a PC
                            </p>
                            <button className="bg-white text-[var(--tech-blue)] hover:text-blue-700 text-sm font-medium flex items-center">
                                Ver detalles del proyecto
                                <FontAwesomeIcon icon={FA.faChevronRight} className=" ml-2 text-xs" />
                            </button>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
                        <div className="pt-0 px-5 pb-4">
                            <div className="flex justify-between">
                                <h3 className="text-xl font-bold text-[var(--tech-blue)] flex items-center">
                                  <FontAwesomeIcon icon={FA.faSortNumericDownAlt} className="text-[var(--project-orange)] mr-3" />
                                  Contador Binario
                                </h3>
                            </div>
                            <p className="text-[var(--neutral-gray)] my-1 ml-1 mb-6 ">
                                Contador de 8 bits controlado por botones con visualización en LEDs y display 7 segmentos
                            </p>
                            <button className="bg-white text-[var(--tech-blue)] hover:text-blue-700 text-sm font-medium flex items-center">
                                Ver detalles del proyecto
                                <FontAwesomeIcon icon={FA.faChevronRight} className=" ml-2 text-xs" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> 
        </div>
    )
}