import { faCode, faThermometerHalf, faMicrochip, faLightbulb, faBolt, faTemperatureLow, faRobot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InfoListCard from '@/components/ui/InfoListCard';
import SummaryCard from '@/components/ui/SummaryCard';
import colors from '@/styles';
import { CodeBlock, dracula } from "react-code-blocks";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const arduinoBasicCode = `
void setup() {
  pinMode(13, OUTPUT); // Configura el pin 13 como salida
}

void loop() {
  digitalWrite(13, HIGH); // Enciende el LED
  delay(1000);            // Espera 1 segundo
  digitalWrite(13, LOW);  // Apaga el LED
  delay(1000);            // Espera 1 segundo
}`;

const temperatureSensorCode = `
const int sensorPin = A0;

void setup() {
    Serial.begin(9600);
}

void loop() {
    int sensorValue = analogRead(sensorPin);
    float voltage = sensorValue * (5.0 / 1023.0);
    float temperatureC = (voltage - 0.5) * 100;

    Serial.print("Temperatura: ");
    Serial.print(temperatureC);
    Serial.println(" °C");

    delay(1000);
}`;

const functionsCode = `
void parpadearLED(int pin, int tiempo) {
    digitalWrite(pin, HIGH);
    delay(tiempo);
    digitalWrite(pin, LOW);
    delay(tiempo);
}

float leerTemperatura(int pin) {
    int valor = analogRead(pin);
    float voltaje = valor * (5.0 / 1023.0);
    return (voltaje - 0.5) * 100;
}`;

const motionCard = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

export default function ArduinoCoding() {
    return (
        <div className="h-max bg-white justify-items-center pb-10 text-center">

            {/* Banner */}
            <section className="bg-gradient-to-r from-blue-400 to-blue-900 text-white py-12 md:py-20 w-full">
                <div className="mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Codificando con Arduino</h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto">Fundamentos esenciales de codificación en Arduino</p>
                </div>
            </section>

            <div className="flex flex-col items-center gap-10 p-10 w-full">

                {/* Summary Cards + Code Blocks */}
                <div className="flex flex-col gap-6 items-stretch mb-6 py-16 w-full">
                    <div className="w-full max-w-4xl mx-auto">
                        <SummaryCard
                            icon={faCode}
                            title="¿Cómo se programa Arduino?"
                            description="Arduino se programa con C/C++ usando el IDE de Arduino.\n Las funciones principales son setup() y loop().\n setup() se ejecuta una vez y loop() continuamente."
                        />
                    </div>
                    <div className="w-full max-w-4xl mx-auto">
                        <Card className="module-card overflow-hidden w-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-gradient-to-br from-gray-50 to-gray-100">
                            <CardContent className="p-4 sm:p-6 lg:p-8">
                                <div className="rounded-lg overflow-hidden border border-gray-200 shadow-inner">
                                    <CodeBlock
                                        text={arduinoBasicCode}
                                        language="cpp"
                                        showLineNumbers
                                        theme={dracula}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className="flex flex-col gap-6 items-stretch mb-6 py-16 w-full">
                    <div className="w-full max-w-4xl mx-auto">
                        <SummaryCard
                            icon={faThermometerHalf}
                            title="Proyecto: Sensor de Temperatura"
                            description="Usando el sensor LM35, puedes medir temperatura ambiente y mostrarla por el monitor serial.\n Usa analogRead() y convierte el valor a grados."
                        />
                    </div>
                    <div className="w-full max-w-4xl mx-auto">
                        <Card className="module-card overflow-hidden w-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-gradient-to-br from-gray-50 to-gray-100">
                            <CardContent className="p-4 sm:p-6 lg:p-8">
                                <div className="rounded-lg overflow-hidden border border-gray-200 shadow-inner">
                                    <CodeBlock
                                        text={temperatureSensorCode}
                                        language="cpp"
                                        showLineNumbers
                                        theme={dracula}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className="flex flex-col gap-6 items-stretch mb-6 py-16 w-full">
                    <div className="w-full max-w-4xl mx-auto">
                        <SummaryCard
                            icon={faMicrochip}
                            title="Funciones personalizadas"
                            description="Puedes encapsular comportamientos repetitivos en funciones como parpadearLED(pin, tiempo)\n o leerTemperatura(pin), para reutilizar código fácilmente."
                        />
                    </div>
                    <div className="w-full max-w-4xl mx-auto flex flex-col gap-6">
                        <Card className="module-card overflow-hidden w-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-gradient-to-br from-gray-50 to-gray-100">
                            <CardContent className="p-4 sm:p-6 lg:p-8">
                                <div className="rounded-lg overflow-hidden border border-gray-200 shadow-inner">
                                    <CodeBlock
                                        text={functionsCode}
                                        language="cpp"
                                        showLineNumbers
                                        theme={dracula}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                {/* Proyectos de Ejemplo */}
                <section className="py-12 bg-gray-100 w-full">
                    <div className="mx-auto px-4 max-w-6xl">
                        <h2 className="text-2xl font-bold text-center mb-8 text-blue-600">
                            <FontAwesomeIcon icon={faLightbulb} className="mr-2" />
                            Proyectos de Ejemplo
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <InfoListCard
                                Color="bg-orange-500"
                                IconColor={colors.projectOrange}
                                Icon={faLightbulb}
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
                                Icon={faTemperatureLow}
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
                                Icon={faRobot}
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
        </div>
    );
}
