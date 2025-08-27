import { faRobot, faCogs, faMicrochip, faCode } from '@fortawesome/free-solid-svg-icons';
import SummaryCard from '@/components/ui/SummaryCard';
import colors from '@/styles';
import { CodeBlock, dracula } from "react-code-blocks";
import { Card, CardContent } from "@/components/ui/card";

const motorControlCode = `
// Control de Motor DC con Driver L298N
// Pines de conexión
const int motorPin1 = 2;  // Pin IN1 del L298N
const int motorPin2 = 3;  // Pin IN2 del L298N
const int enablePin = 9;  // Pin ENA del L298N (PWM)
const int potPin = A0;    // Pin del potenciómetro

void setup() {
  // Configurar pines como salidas
  pinMode(motorPin1, OUTPUT);
  pinMode(motorPin2, OUTPUT);
  pinMode(enablePin, OUTPUT);
  
  // Inicializar comunicación serial
  Serial.begin(9600);
  Serial.println("Sistema de Control de Motor Iniciado");
}

void loop() {
  // Leer valor del potenciómetro (0-1023)
  int potValue = analogRead(potPin);
  
  // Convertir a rango de velocidad PWM (0-255)
  int motorSpeed = map(potValue, 0, 1023, 0, 255);
  
  // Establecer velocidad del motor
  analogWrite(enablePin, motorSpeed);
  
  // Determinar dirección del motor
  if (motorSpeed > 20) {  // Zona muerta para evitar ruido
    // Girar en sentido horario
    digitalWrite(motorPin1, HIGH);
    digitalWrite(motorPin2, LOW);
    
    Serial.print("Motor girando - Velocidad: ");
    Serial.println(motorSpeed);
  } else {
    // Detener motor
    digitalWrite(motorPin1, LOW);
    digitalWrite(motorPin2, LOW);
    
    Serial.println("Motor detenido");
  }
  
  delay(100);  // Pequeña pausa para estabilidad
}
`;

const reversibleMotorCode = `
// Control Bidireccional de Motor con Botones
const int motorPin1 = 2;     // Pin IN1 del L298N
const int motorPin2 = 3;     // Pin IN2 del L298N
const int enablePin = 9;     // Pin ENA del L298N (PWM)
const int buttonForward = 4; // Botón avanzar
const int buttonReverse = 5; // Botón retroceder
const int buttonStop = 6;    // Botón parar

void setup() {
  // Configurar pines del motor como salidas
  pinMode(motorPin1, OUTPUT);
  pinMode(motorPin2, OUTPUT);
  pinMode(enablePin, OUTPUT);
  
  // Configurar botones como entradas con pull-up
  pinMode(buttonForward, INPUT_PULLUP);
  pinMode(buttonReverse, INPUT_PULLUP);
  pinMode(buttonStop, INPUT_PULLUP);
  
  Serial.begin(9600);
  Serial.println("Control Bidireccional de Motor Iniciado");
}

void loop() {
  // Leer estado de los botones
  bool forwardPressed = !digitalRead(buttonForward);
  bool reversePressed = !digitalRead(buttonReverse);
  bool stopPressed = !digitalRead(buttonStop);
  
  // Establecer velocidad máxima
  analogWrite(enablePin, 200);
  
  if (stopPressed || (!forwardPressed && !reversePressed)) {
    // Detener motor
    digitalWrite(motorPin1, LOW);
    digitalWrite(motorPin2, LOW);
    Serial.println("Motor detenido");
    
  } else if (forwardPressed && !reversePressed) {
    // Girar hacia adelante
    digitalWrite(motorPin1, HIGH);
    digitalWrite(motorPin2, LOW);
    Serial.println("Motor girando hacia adelante");
    
  } else if (reversePressed && !forwardPressed) {
    // Girar hacia atrás
    digitalWrite(motorPin1, LOW);
    digitalWrite(motorPin2, HIGH);
    Serial.println("Motor girando hacia atrás");
  }
  
  delay(50);  // Debounce de botones
}
`;

export default function MotorControlProject() {
    return (
        <div className="h-max bg-white justify-items-center pb-10 text-center">

            {/* Banner */}
            <section className="bg-gradient-to-r from-purple-600 to-purple-900 text-white py-12 md:py-20 w-full">
                <div className="mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Control de Motor DC</h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto">Aprende a controlar motores DC con Arduino usando el driver L298N</p>
                </div>
            </section>

            <div className="flex flex-col items-center gap-10 p-10 w-full">

                {/* Descripción del Proyecto */}
                <div className="flex flex-col gap-6 items-stretch mb-6 py-16 w-full">
                    <div className="w-full max-w-3xl mx-auto">
                        <SummaryCard
                            icon={faRobot}
                            title="¿Qué es el Control de Motor?"
                            description="El control de motores DC permite variar la velocidad y dirección de rotación usando técnicas como PWM (Modulación por Ancho de Pulso) y drivers como el L298N que pueden manejar corrientes altas de forma segura."
                        />
                    </div>
                </div>

                {/* Diagrama del Circuito */}
                <div className="flex flex-col gap-6 items-stretch mb-6 py-16 w-full">
                    <div className="w-full max-w-3xl mx-auto">
                        <SummaryCard
                            icon={faMicrochip}
                            title="Diagrama del Circuito"
                            description="Conecta el motor DC al driver L298N, y este al Arduino. El potenciómetro controla la velocidad del motor mediante señales PWM."
                        />
                    </div>
                    
                    {/* Circuit Diagram */}
                    <div className="w-full max-w-3xl mx-auto">
                        <Card className="module-card overflow-auto w-full text-lg sm:text-xl max-w-3xl mx-auto mb-6 h-full">
                            <CardContent className="p-6">
                                <h3 className="font-bold text-lg mb-4 text-purple-600">Conexiones del Circuito</h3>
                                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                                        <div>
                                            <h4 className="font-semibold mb-2 text-purple-600">Arduino a L298N:</h4>
                                            <ul className="space-y-1 text-sm">
                                                <li>• Pin 2 → IN1</li>
                                                <li>• Pin 3 → IN2</li>
                                                <li>• Pin 9 (PWM) → ENA</li>
                                                <li>• GND → GND</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-2 text-purple-600">L298N a Motor:</h4>
                                            <ul className="space-y-1 text-sm">
                                                <li>• OUT1 → Terminal Motor (+)</li>
                                                <li>• OUT2 → Terminal Motor (-)</li>
                                                <li>• +12V → Fuente externa</li>
                                                <li>• GND → GND común</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h4 className="font-semibold mb-2 text-purple-600">Control (Opcional):</h4>
                                        <p className="text-sm">• Pin A0 → Terminal central del potenciómetro (10kΩ)</p>
                                        <p className="text-sm">• Extremos del potenciómetro → +5V y GND</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Explicación del Funcionamiento */}
                <div className="flex flex-col gap-6 items-stretch mb-6 py-16 w-full">
                    <div className="w-full max-w-3xl mx-auto">
                        <SummaryCard
                            icon={faCogs}
                            title="¿Cómo Funciona?"
                            description="El L298N es un driver dual que permite controlar motores DC de hasta 2A. Utiliza transistores internos para conmutar la corriente del motor, mientras el Arduino solo envía señales de control de bajo voltaje."
                        />
                    </div>
                    
                    <div className="w-full max-w-3xl mx-auto">
                        <Card className="module-card overflow-auto w-full text-lg sm:text-xl max-w-3xl mx-auto mb-6 h-full">
                            <CardContent className="p-6 text-left">
                                <h3 className="font-bold text-lg mb-4 text-purple-600">Principio de Funcionamiento</h3>
                                <ol className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">1</span>
                                        <span><strong>Control de Dirección:</strong> Los pines IN1 e IN2 determinan la dirección del motor. HIGH/LOW = horario, LOW/HIGH = antihorario</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">2</span>
                                        <span><strong>Control de Velocidad:</strong> El pin ENA con señal PWM controla la velocidad variando el voltaje efectivo</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">3</span>
                                        <span><strong>Protección:</strong> El L298N incluye diodos de protección contra picos de voltaje del motor</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">4</span>
                                        <span><strong>Alimentación:</strong> Requiere fuente externa para el motor (6-12V) y 5V del Arduino para la lógica</span>
                                    </li>
                                </ol>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Código Básico */}
                <div className="flex flex-col gap-6 items-stretch mb-6 py-16 w-full">
                    <div className="w-full max-w-3xl mx-auto">
                        <SummaryCard
                            icon={faCode}
                            title="Código: Control con Potenciómetro"
                            description="Este código permite controlar la velocidad del motor usando un potenciómetro. El motor gira más rápido cuando giras el potenciómetro."
                        />
                    </div>
                    <div className="w-full max-w-3xl mx-auto">
                        <Card className="module-card overflow-auto w-full text-lg sm:text-xl max-w-3xl mx-auto mb-6 h-full">
                            <CardContent className="p-6 text-start">
                                <CodeBlock
                                    text={motorControlCode}
                                    language="cpp"
                                    showLineNumbers
                                    theme={dracula}
                                />
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Código Avanzado */}
                <div className="flex flex-col gap-6 items-stretch mb-6 py-16 w-full">
                    <div className="w-full max-w-3xl mx-auto">
                        <SummaryCard
                            icon={faCode}
                            title="Código: Control Bidireccional"
                            description="Versión avanzada que permite controlar la dirección del motor usando botones. Incluye funciones para avanzar, retroceder y parar."
                        />
                    </div>
                    <div className="w-full max-w-3xl mx-auto">
                        <Card className="module-card overflow-auto w-full text-lg sm:text-xl max-w-3xl mx-auto mb-6 h-full">
                            <CardContent className="p-6 text-start">
                                <CodeBlock
                                    text={reversibleMotorCode}
                                    language="cpp"
                                    showLineNumbers
                                    theme={dracula}
                                />
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Consejos y Consideraciones */}
                <div className="flex flex-col gap-6 items-stretch mb-6 py-16 w-full">
                    <div className="w-full max-w-3xl mx-auto">
                        <Card className="module-card overflow-auto w-full text-lg sm:text-xl max-w-3xl mx-auto mb-6 h-full">
                            <CardContent className="p-6 text-left">
                                <h3 className="font-bold text-lg mb-4 text-purple-600">Consejos Importantes</h3>
                                <div className="space-y-4">
                                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                        <h4 className="font-semibold text-yellow-800">⚠️ Alimentación</h4>
                                        <p className="text-yellow-700">Usa una fuente externa para el motor. Nunca alimentes motores grandes directamente desde Arduino.</p>
                                    </div>
                                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                        <h4 className="font-semibold text-blue-800">💡 PWM</h4>
                                        <p className="text-blue-700">Los pines PWM en Arduino son: 3, 5, 6, 9, 10, 11. Usa analogWrite() para controlar velocidad.</p>
                                    </div>
                                    <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                        <h4 className="font-semibold text-green-800">🔧 Debugging</h4>
                                        <p className="text-green-700">Usa Serial.println() para monitorear los valores y verificar que el código funciona correctamente.</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

            </div>
        </div>
    );
}