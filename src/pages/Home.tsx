import * as FA from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import colors from '@/styles';
import InfoListCard from '@components/ui/InfoListCard'
import SimpleModuleCard from '@components/ui/SimpleModuleCard'
import FeaturedCard from '@components/ui/FeaturedCard'
import SummaryCard from '@components/ui/SummaryCard'

export default function Home() {
  return (
    <div className="bg-white mx-auto pt-0">
      <section className="bg-gradient-to-r from-blue-400 to-blue-900 text-white py-15 md:py-24">
        <div className="mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Domina la Arquitectura de Máquinas
            </h1>
            <p className="text-xl mb-6 max-w-xl">
              Aprende los fundamentos de la arquitectura de computadoras, microcontroladores y programación en bajo nivel con proyectos prácticos.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="bg-green-400 hover:bg-green-600 px-6 py-3 rounded-md font-medium transition">
                Comenzar Ahora
              </button>
              <button className="bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition">
                Ver Proyectos
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="bg-blue-500 rounded-full w-64 h-64 flex items-center justify-center">
                <FontAwesomeIcon className="pt-10" icon={FA.faLaptopCode} size='8x' color={colors.miAzul} />
              </div>
              <div className="absolute top-10 -left-10 bg-white text-blue-400 p-4 rounded-lg shadow-xl transform rotate-3">
                <FontAwesomeIcon className="mb-2" icon={FA.faArrowsAltH} size='2x' color={colors.techBlue} />
                <p>Von Neumann vs Harvard</p>
              </div>
              <div className="absolute bottom-10 -right-10 bg-white text-blue-400 p-4 rounded-lg shadow-xl transform -rotate-3">
                <FontAwesomeIcon className="mb-2" icon={FA.faMicrochip} size='2x' color={colors.techBlue} />
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
            <InfoListCard
              Color="bg-blue-600"
              Icon={FA.faServer}
              IconColor={colors.techBlue}
              Title="Arquitecturas Básicas"
              ListItems={[
                'Von Neumann vs. Harvard',
                'Modelos de memoria',
                'Ciclo de instrucción',
                'Componentes CPU'
              ]}
              ButtonText="Ver contenido"
              ButtonLink="/modulo/arquitectura"
              ExtraInfo="Básico"
            />

            <InfoListCard
              Color="bg-orange-400"
              Icon={FA.faMicrochip}
              IconColor={colors.projectOrange}
              Title="Microcontroladores PIC"
              ListItems={[
                'Arquitectura interna',
                'Periféricos',
                'Modos de direccionamiento',
                'Registros clave'
              ]}
              ButtonText="Ver contenido"
              ButtonLink="/modulo/pic-intermedio"
              ExtraInfo="Intermedio"
            />

            <InfoListCard
              Color="bg-blue-600"
              Icon={FA.faCode}
              IconColor={colors.interactiveGreen}
              Title="Microcontroladores PIC"
              ListItems={[
                'Arquitectura interna',
                'Periféricos',
                'Modos de direccionamiento',
                'Registros clave'
              ]}
              ButtonText="Ver contenido"
              ButtonLink="/modulo/pic-avanzado"
              ExtraInfo="Avanzado"
            />

            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <SimpleModuleCard
                icon={FA.faExchange}
                iconBackgroundColor="bg-[var(--neutral-gray)]"
                title="Comunicación y Periféricos"
                description="Puertos paralelos, comunicación serial, temporizadores, PWM"
                buttonText="Explorar módulo"
              />

              <SimpleModuleCard
                icon={FA.faLightbulb}
                iconBackgroundColor="bg-[var(--project-orange)]"
                title="Proyectos Integradores"
                description="Semáforo inteligente, termostato digital, terminal serial"
                buttonText="Explorar módulo"
              />

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
            <FeaturedCard
              icon={FA.faTrafficLight}
              title="Semáforo Inteligente"
              description="Implementación de un sistema de semáforo con sensores y temporización adaptativa usando microcontroladores PIC"
              tags={[
                { label: 'PIC16F877A', icon: FA.faMicrochip },
                { label: 'GPIO', icon: FA.faBolt },
                { label: 'Timers', icon: FA.faClock },
                { label: 'Ensamblador', icon: FA.faFileCode },
              ]}
              onTutorialClick={() => console.log('Ver tutorial')}
              onDownloadClick={() => console.log('Descargar')}
              onShareClick={() => console.log('Compartir')}
            />


            <div >
              <SummaryCard
                icon={FA.faThermometerHalf}
                title="Termostato Digital"
                description="Sistema de control de temperatura con sensor LM35, ADC y PWM para control de ventilador"
                onClick={() => console.log('Termostato Digital')}
              />

              <SummaryCard
                icon={FA.faTerminal}
                title="Terminal Serial"
                description="Comunicación I2C con sensor de temperatura + transmisión serial UART a PC"
                onClick={() => console.log('Terminal Serial')}
              />

              <SummaryCard
                icon={FA.faSortNumericDownAlt}
                title="Contador Binario"
                description="Contador de 8 bits controlado por botones con visualización en LEDs y display 7 segmentos"
                onClick={() => console.log('Contador Binario')}
              />

            </div>
          </div>
        </div>
      </section >
    </div >
  )
}