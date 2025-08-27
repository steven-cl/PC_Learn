import { faLightbulb, faDiagramProject, faCode, faCog, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import colors from '../styles.js';
import SummaryCard from '@/components/ui/SummaryCard';
import { Card, CardContent } from "@/components/ui/card";
import { CodeBlock, dracula } from "react-code-blocks";

// Código Arduino para LED intermitente con comentarios detallados
const ledIntermitenteCode = `/*
 * Proyecto: LED Intermitente
 * Descripción: Control básico de un LED que parpadea cada segundo
 * Componentes: Arduino Uno, LED, Resistencia 220Ω
 * Autor: PC Learn
 */

// Definición de constantes
const int LED_PIN = 13;        // Pin digital donde conectamos el LED
const int DELAY_TIME = 1000;   // Tiempo de espera en milisegundos (1 segundo)

/*
 * Función setup()
 * Se ejecuta una sola vez al iniciar el programa
 * Aquí configuramos los pines y inicializamos componentes
 */
void setup() {
  // Configurar el pin 13 como salida digital
  pinMode(LED_PIN, OUTPUT);
  
  // Inicializar comunicación serial para debugging (opcional)
  Serial.begin(9600);
  Serial.println("LED Intermitente iniciado");
}

/*
 * Función loop()
 * Se ejecuta continuamente después de setup()
 * Contiene la lógica principal del programa
 */
void loop() {
  // Encender el LED (voltaje HIGH = 5V)
  digitalWrite(LED_PIN, HIGH);
  Serial.println("LED encendido");
  
  // Mantener el LED encendido por 1 segundo
  delay(DELAY_TIME);
  
  // Apagar el LED (voltaje LOW = 0V)
  digitalWrite(LED_PIN, LOW);
  Serial.println("LED apagado");
  
  // Mantener el LED apagado por 1 segundo
  delay(DELAY_TIME);
}`;

export default function ArduinoLedProject() {
    return (
        <div className="h-max bg-white justify-items-center pb-10 text-center">
            {/* Banner */}
            <section className="bg-gradient-to-r from-orange-400 to-orange-600 text-white py-12 md:py-20 w-full">
                <div className="mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        <FontAwesomeIcon icon={faLightbulb} className="mr-3" />
                        Proyecto Arduino: LED Intermitente
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto">
                        Aprende los fundamentos de la programación Arduino con este proyecto básico que controla un LED
                    </p>
                </div>
            </section>

            <div className="flex flex-col items-center gap-10 p-10 w-full">

                {/* Información del Proyecto */}
                <div className="flex flex-col gap-6 items-stretch mb-6 py-8 w-full">
                    <div className="w-full max-w-4xl mx-auto">
                        <SummaryCard
                            icon={faLightbulb}
                            title="¿Qué aprenderás?"
                            description="Este proyecto te enseña los conceptos fundamentales de Arduino: configuración de pines, control de salidas digitales, uso de delays y estructura básica de programas. Es el primer paso para dominar la electrónica con microcontroladores."
                        />
                    </div>
                </div>

                {/* Diagrama de Circuito */}
                <section className="py-8 w-full max-w-6xl">
                    <h2 className="text-2xl font-bold text-center mb-8 text-orange-600">
                        <FontAwesomeIcon icon={faDiagramProject} className="mr-2" />
                        Diagrama del Circuito
                    </h2>
                    
                    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                        <div className="flex flex-col items-center">
                            <div className="bg-gray-100 rounded-lg p-8 mb-4 w-full max-w-2xl">
                                <h3 className="font-bold text-lg mb-4 text-gray-700">Esquema del Circuito</h3>
                                <div className="bg-white rounded-lg border-2 border-gray-300 p-6">
                                    <pre className="text-sm text-gray-600 font-mono whitespace-pre">
{`
    Arduino Uno
    ┌─────────────┐
    │             │
    │         D13 ├──┬── 220Ω ──┬── LED(+) ──┬── LED(-) ──┬── GND
    │             │  │          │           │           │
    │         GND ├──┼──────────┼───────────┼───────────┘
    │             │  │          │           │
    └─────────────┘  │          │           │
                     │          │           │
    Resistencia:     └──────────┘           │
    220Ω (Rojo-Rojo-Marrón)                 │
                                            │
    LED: Ánodo(+) lado largo                │
         Cátodo(-) lado corto ──────────────┘
`}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Explicación del Circuito */}
                <section className="py-8 w-full max-w-6xl">
                    <h2 className="text-2xl font-bold text-center mb-8 text-orange-600">
                        <FontAwesomeIcon icon={faCog} className="mr-2" />
                        Explicación del Circuito
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="bg-blue-50">
                            <CardContent className="p-6">
                                <h3 className="font-bold text-lg mb-4 text-blue-600">Componentes Necesarios</h3>
                                <ul className="text-left space-y-2">
                                    <li>• <strong>Arduino Uno:</strong> Microcontrolador principal</li>
                                    <li>• <strong>LED:</strong> Diodo emisor de luz (cualquier color)</li>
                                    <li>• <strong>Resistencia 220Ω:</strong> Limita la corriente del LED</li>
                                    <li>• <strong>Cables:</strong> Para las conexiones</li>
                                    <li>• <strong>Protoboard:</strong> Para hacer las conexiones (opcional)</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-green-50">
                            <CardContent className="p-6">
                                <h3 className="font-bold text-lg mb-4 text-green-600">Funcionamiento</h3>
                                <ul className="text-left space-y-2">
                                    <li>• <strong>Pin 13:</strong> Salida digital que controla el LED</li>
                                    <li>• <strong>Resistencia:</strong> Protege el LED limitando la corriente a ~20mA</li>
                                    <li>• <strong>HIGH (5V):</strong> Enciende el LED</li>
                                    <li>• <strong>LOW (0V):</strong> Apaga el LED</li>
                                    <li>• <strong>delay():</strong> Pausa la ejecución por el tiempo especificado</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    <Card className="mt-6 bg-yellow-50">
                        <CardContent className="p-6">
                            <h3 className="font-bold text-lg mb-4 text-yellow-600">Pasos de Conexión</h3>
                            <ol className="text-left space-y-2">
                                <li><strong>1.</strong> Conecta el ánodo del LED (pata larga) a un extremo de la resistencia</li>
                                <li><strong>2.</strong> Conecta el otro extremo de la resistencia al pin digital 13 de Arduino</li>
                                <li><strong>3.</strong> Conecta el cátodo del LED (pata corta) al pin GND de Arduino</li>
                                <li><strong>4.</strong> Verifica que todas las conexiones estén firmes</li>
                                <li><strong>5.</strong> Conecta Arduino a la computadora y carga el código</li>
                            </ol>
                        </CardContent>
                    </Card>
                </section>

                {/* Código Arduino */}
                <section className="py-8 w-full max-w-6xl">
                    <h2 className="text-2xl font-bold text-center mb-8 text-orange-600">
                        <FontAwesomeIcon icon={faCode} className="mr-2" />
                        Código Arduino
                    </h2>
                    
                    <Card className="module-card overflow-auto w-full text-lg max-w-4xl mx-auto mb-6">
                        <CardContent className="p-6 text-start">
                            <CodeBlock
                                text={ledIntermitenteCode}
                                language="cpp"
                                showLineNumbers
                                theme={dracula}
                            />
                        </CardContent>
                    </Card>
                </section>

                {/* Conceptos Aprendidos */}
                <section className="py-8 w-full max-w-6xl">
                    <h2 className="text-2xl font-bold text-center mb-8 text-orange-600">
                        <FontAwesomeIcon icon={faPlay} className="mr-2" />
                        Conceptos Fundamentales
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="bg-purple-50">
                            <CardContent className="p-6">
                                <h3 className="font-bold text-lg mb-4 text-purple-600">Estructura del Programa</h3>
                                <ul className="text-left space-y-2 text-sm">
                                    <li>• <strong>setup():</strong> Configuración inicial</li>
                                    <li>• <strong>loop():</strong> Código repetitivo</li>
                                    <li>• <strong>pinMode():</strong> Configura pines</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-indigo-50">
                            <CardContent className="p-6">
                                <h3 className="font-bold text-lg mb-4 text-indigo-600">Control Digital</h3>
                                <ul className="text-left space-y-2 text-sm">
                                    <li>• <strong>digitalWrite():</strong> Controla salidas</li>
                                    <li>• <strong>HIGH:</strong> Voltaje alto (5V)</li>
                                    <li>• <strong>LOW:</strong> Voltaje bajo (0V)</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-teal-50">
                            <CardContent className="p-6">
                                <h3 className="font-bold text-lg mb-4 text-teal-600">Temporización</h3>
                                <ul className="text-left space-y-2 text-sm">
                                    <li>• <strong>delay():</strong> Pausa en milisegundos</li>
                                    <li>• <strong>1000ms:</strong> Equivale a 1 segundo</li>
                                    <li>• <strong>Timing:</strong> Control de secuencias</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Siguientes Pasos */}
                <section className="py-8 w-full max-w-6xl">
                    <div className="w-full max-w-3xl mx-auto">
                        <SummaryCard
                            icon={faLightbulb}
                            title="¿Qué sigue?"
                            description="Una vez que domines este proyecto, puedes experimentar con múltiples LEDs, diferentes tiempos de parpadeo, efectos de secuencia, o agregar botones para controlar el LED. ¡Las posibilidades son infinitas!"
                        />
                    </div>
                </section>

            </div>
        </div>
    );
}