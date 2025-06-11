import { Card, CardContent } from "@/components/ui/card";
import { CodeBlock, dracula } from "react-code-blocks";
import { motion } from "framer-motion";

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

const motionCard = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

export default function ArduinoCoding() {
    return (
        <div className="p-6 space-y-8">
            <motion.div {...motionCard}>
                <h1 className="text-3xl font-bold">Cómo se programa Arduino en C</h1>
                <p className="text-base">
                    Arduino se programa en un lenguaje muy similar a C/C++, usando el entorno de desarrollo Arduino IDE.
                    Cada programa de Arduino contiene al menos dos funciones principales: <code>setup()</code> y <code>loop()</code>.
                    <code>setup()</code> se ejecuta una sola vez al iniciar el programa, y <code>loop()</code> se repite indefinidamente.
                </p>
            </motion.div>

            <motion.div {...motionCard}>
                <h2 className="text-2xl font-semibold">Ejemplo básico: Parpadeo de LED</h2>
                <Card>
                    <CardContent className="p-4">
                        <CodeBlock
                            text={arduinoBasicCode}
                            language="cpp"
                            showLineNumbers
                            theme={dracula}
                        />
                    </CardContent>
                </Card>
                <p className="text-base mt-2">
                    Este código enciende y apaga un LED conectado al pin 13 de Arduino cada segundo.
                </p>
            </motion.div>

            <motion.div {...motionCard}>
                <h2 className="text-2xl font-semibold">Proyecto pequeño: Sensor de temperatura</h2>
                <p className="text-base">
                    Utiliza un sensor LM35 conectado al pin A0 para leer la temperatura y mostrarla por el puerto serial.
                </p>
                <Card>
                    <CardContent className="p-4">
                        <CodeBlock
                            text={temperatureSensorCode}
                            language="cpp"
                            showLineNumbers
                            theme={dracula}
                        />
                    </CardContent>
                </Card>
                <p className="text-base mt-2">
                    <strong>Componentes físicos:</strong> Arduino Uno, sensor LM35, cables, computadora con Arduino IDE.
                </p>
            </motion.div>

            <motion.div {...motionCard}>
                <h2 className="text-2xl font-semibold">Otros proyectos relacionados (desde arduinoHardware)</h2>
                <ul className="list-disc list-inside text-base">
                    <li><strong>Control de LED con botón:</strong> botón conectado al pin 2, LED al pin 13.</li>
                    <li><strong>Sensor ultrasónico HC-SR04:</strong> mide distancias y enciende un buzzer si es menor a 10 cm.</li>
                    <li><strong>Semáforo con LEDs:</strong> rojo, amarillo y verde conectados a pines 11, 10 y 9.</li>
                </ul>
            </motion.div>
        </div>
    );
}