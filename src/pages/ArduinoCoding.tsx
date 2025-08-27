import { faCode, faThermometerHalf, faMicrochip, faLightbulb, faBolt } from '@fortawesome/free-solid-svg-icons';
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
                    <div className="w-full max-w-3xl mx-auto">
                        <SummaryCard
                            icon={faCode}
                            title="¿Cómo se programa Arduino?"
                            description="Arduino se programa con C/C++ usando el IDE de Arduino.\n Las funciones principales son setup() y loop().\n setup() se ejecuta una vez y loop() continuamente."
                        />
                    </div>
                    <div className="w-full max-w-3xl mx-auto">
                        <Card className="module-card overflow-auto w-full text-lg sm:text-xl max-w-3xl mx-auto mb-6 h-full">
                            <CardContent className="p-6 text-start">
                                <CodeBlock
                                    text={arduinoBasicCode}
                                    language="cpp"
                                    showLineNumbers
                                    theme={dracula}
                                />
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className="flex flex-col gap-6 items-stretch mb-6 py-16 w-full">
                    <div className="w-full max-w-3xl mx-auto">
                        <SummaryCard
                            icon={faLightbulb}
                            title="Proyecto: LED Intermitente"
                            description="El proyecto perfecto para comenzar con Arduino. Aprende los conceptos básicos de salidas digitales y temporización.\n Controla un LED para que parpadee cada segundo."
                        />
                    </div>
                    <div className="w-full max-w-3xl mx-auto">
                        <InfoListCard
                            Color="bg-orange-500"
                            Icon={faLightbulb}
                            IconColor={colors.projectOrange}
                            Title="LED Intermitente - Proyecto Completo"
                            ListItems={[
                                "Diagrama de circuito paso a paso",
                                "Código Arduino comentado en detalle",
                                "Explicación de conceptos fundamentales",
                                "Nivel: Principiante - 15 minutos"
                            ]}
                            ButtonText="Ver proyecto completo"
                            ButtonLink="/arduinoLedProject"
                            ExtraInfo="Proyecto básico"
                            className="flex text-lg p-6 mx-auto"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-6 items-stretch mb-6 py-16 w-full">
                    <div className="w-full max-w-3xl mx-auto">
                        <SummaryCard
                            icon={faThermometerHalf}
                            title="Proyecto: Sensor de Temperatura"
                            description="Usando el sensor LM35, puedes medir temperatura ambiente y mostrarla por el monitor serial.\n Usa analogRead() y convierte el valor a grados."
                        />
                    </div>
                    <div className="w-full max-w-3xl mx-auto">
                        <Card className="module-card overflow-auto w-full text-lg sm:text-xl max-w-3xl mx-auto mb-6 h-full">
                            <CardContent className="p-6 text-start">
                                <CodeBlock
                                    text={temperatureSensorCode}
                                    language="cpp"
                                    showLineNumbers
                                    theme={dracula}
                                />
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className="flex flex-col gap-6 items-stretch mb-6 py-16 w-full">
                    <div className="w-full max-w-3xl mx-auto">
                        <SummaryCard
                            icon={faMicrochip}
                            title="Funciones personalizadas"
                            description="Puedes encapsular comportamientos repetitivos en funciones como parpadearLED(pin, tiempo)\n o leerTemperatura(pin), para reutilizar código fácilmente."
                        />
                    </div>
                    <div className="w-full max-w-3xl mx-auto flex flex-col gap-6">
                        <Card className="module-card overflow-auto w-full text-lg sm:text-xl max-w-3xl mx-auto mb-6 h-full">
                            <CardContent className="p-6 text-start">
                                <CodeBlock
                                    text={functionsCode}
                                    language="cpp"
                                    showLineNumbers
                                    theme={dracula}
                                />
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className="flex flex-col gap-6 items-stretch mb-6 py-16 w-full" id='xd'>
                    <div className="w-full max-w-3xl mx-auto">
                        <InfoListCard
                            Color="bg-[var(--project-orange)]"
                            Icon={faLightbulb}
                            IconColor={colors.projectOrange}
                            Title="Proyectos recomendados"
                            ListItems={[
                                "Control de LED con botón (entrada digital)",
                                "Semáforo con LEDs (temporización)",
                                "Medición de distancia con HC-SR04",
                            ]}
                            ButtonText="Ver más"
                            ButtonLink="/proyectos"
                            ExtraInfo="Nivel: Principiante"
                            className="flex text-lg p-6 mx-auto"
                        />
                    </div>
                    <div className="w-full max-w-3xl mx-auto">
                        <InfoListCard
                            Color="bg-[var(--interactive-green)]"
                            Icon={faBolt}
                            IconColor={colors.interactiveGreen}
                            Title="Consejos de codificación"
                            ListItems={[
                                "Comienza con ejemplos básicos",
                                "Prueba en simuladores como Tinkercad",
                                "Comenta tu código para entenderlo mejor",
                                "Consulta la documentación oficial",
                                "Usa funciones para organizar tu lógica",
                            ]}
                            ButtonText="Guía completa"
                            ButtonLink="/guia"
                            ExtraInfo="Recomendado"
                            className="flex text-lg p-6 mx-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
