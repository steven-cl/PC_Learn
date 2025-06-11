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
            <section className="bg-gradient-to-r from-blue-400 to-blue-900 text-white py-12 md:py-20 w-full">
                <div className="mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Codificando con arduino</h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto">
                        Fundamentos esenciales de codificacion en arduino
                    </p>
                </div>
            </section>

            <motion.div
                {...motionCard}
                className="max-w-3xl mx-auto py-12 px-4 md:px-8 text-left"
            >
                <h1 className="text-3xl font-bold text-[var(--tech-blue)] mb-4">
                    ¿Cómo se programa Arduino en C?
                </h1>
                <p className="text-base mt-2 text-gray-500">
                    Arduino se programa en un lenguaje muy similar a C/C++, y se utiliza principalmente el entorno de desarrollo Arduino IDE.
                    Cada programa contiene dos funciones principales:
                </p>
                <ul className="list-disc list-inside text-base ml-6 text-gray-500 mt-2">
                    <li>
                        <code>setup()</code>: Se ejecuta una vez al iniciar el programa. Es ideal para configurar pines, iniciar comunicación serial, etc.
                    </li>
                    <li>
                        <code>loop()</code>: Se repite continuamente mientras Arduino esté encendido. Aquí se coloca la lógica del programa.
                    </li>
                </ul>
                <p className="text-base mt-2 text-gray-500">
                    Además, se pueden usar funciones como <code>pinMode()</code>, <code>digitalWrite()</code>, <code>analogRead()</code>, y muchas otras para interactuar con componentes electrónicos.
                </p>
            </motion.div>

            <motion.div
                {...motionCard}
                className="max-w-3xl mx-auto py-12 px-4 md:px-8 text-left"
            >
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                    Ejemplo básico: Parpadeo de LED
                </h2>
                <Card className="module-card overflow-auto w-full text-sm sm:text-base max-w-2xl mx-auto mb-2">
                    <CardContent className="p-4 text-start">
                        <CodeBlock
                            text={arduinoBasicCode}
                            language="cpp"
                            showLineNumbers
                            theme={dracula}
                        />
                    </CardContent>
                </Card>
                <p className="text-base mt-2 text-gray-500">
                    Este es uno de los primeros programas que se enseña al comenzar con Arduino. Enciende y apaga un LED conectado al pin 13 cada segundo, creando un parpadeo.
                </p>
            </motion.div>

            <motion.div
                {...motionCard}
                className="max-w-3xl mx-auto py-12 px-4 md:px-8 text-left"
            >
                <h2 className="text-2xl font-semibold text-[var(--tech-blue)] mb-2">
                    Proyecto pequeño: Sensor de temperatura
                </h2>
                <p className="text-base text-gray-500 mb-2">
                    Este proyecto utiliza un sensor LM35 para medir la temperatura ambiente y mostrarla por el puerto serial.
                </p>
                <Card className="module-card overflow-auto w-full text-sm sm:text-base max-w-2xl mx-auto mb-2">
                    <CardContent className="p-4">
                        <CodeBlock
                            text={temperatureSensorCode}
                            language="cpp"
                            showLineNumbers
                            theme={dracula}
                        />
                    </CardContent>
                </Card>
                <p className="text-base mt-2 text-gray-500">
                    <strong>Componentes físicos:</strong> Arduino Uno, sensor LM35, cables de conexión, computadora con Arduino IDE.
                </p>
                <p className="text-base mt-2 text-gray-500">
                    El sensor entrega una señal analógica proporcional a la temperatura. El valor leído se convierte a voltaje, y luego a grados Celsius.
                </p>
            </motion.div>

            <motion.div
                {...motionCard}
                className="max-w-3xl mx-auto py-12 px-4 md:px-8 text-left"
            >
                <h2 className="text-2xl font-semibold text-[var(--tech-blue)] mb-2">
                    Creando funciones reutilizables
                </h2>
                <p className="text-base text-gray-500 mb-2">
                    Podemos encapsular lógica en funciones personalizadas para reutilizar código. Por ejemplo:
                </p>
                <Card className="module-card overflow-auto w-full text-sm sm:text-base max-w-2xl mx-auto mb-2">
                    <CardContent className="p-4">
                        <CodeBlock
                            text={functionsCode}
                            language="cpp"
                            showLineNumbers
                            theme={dracula}
                        />
                    </CardContent>
                </Card>
                <p className="text-base mt-2 text-gray-500">
                    Estas funciones permiten hacer que el código sea más claro y fácil de mantener. Podemos llamar <code>parpadearLED(13, 1000)</code> o <code>leerTemperatura(A0)</code> en cualquier parte del loop.
                </p>
            </motion.div>

            <motion.div
                {...motionCard}
                className="max-w-3xl mx-auto py-12 px-4 md:px-8 text-left"
            >
                <h2 className="text-2xl font-semibold text-[var(--tech-blue)] mb-2">
                    Otros proyectos relacionados (referencia de arduinoHardware)
                </h2>
                <ul className="list-disc list-inside text-base text-gray-500 ml-6 mt-2">
                    <li>
                        <strong>Control de LED con botón:</strong> Conecta un botón al pin 2 y un LED al pin 13. Cuando el botón se presiona, el LED se enciende.
                    </li>
                    <li>
                        <strong>Sensor ultrasónico HC-SR04:</strong> Mide distancias y activa un buzzer si detecta un objeto a menos de 10 cm.
                    </li>
                    <li>
                        <strong>Semáforo con LEDs:</strong> Simula un semáforo con LEDs rojo, amarillo y verde conectados a los pines 11, 10 y 9, con temporización programada.
                    </li>
                </ul>
                <p className="text-base mt-2 text-gray-500">
                    Estos proyectos son ideales para principiantes ya que combinan conceptos como entradas digitales, salidas, uso de condicionales y temporizadores.
                </p>
            </motion.div>

            <motion.div
                {...motionCard}
                className="max-w-3xl mx-auto py-12 px-4 md:px-8 text-left"
            >
                <h2 className="text-2xl font-semibold text-[var(--tech-blue)] mb-2">
                    Consejos para aprender a programar con Arduino
                </h2>
                <ul className="list-disc list-inside text-base ml-6 text-gray-500 mt-2">
                    <li>Comienza con proyectos simples antes de intentar proyectos complejos.</li>
                    <li>Utiliza siempre resistencias adecuadas para proteger componentes como LEDs.</li>
                    <li>Documenta tu código con comentarios para facilitar su comprensión.</li>
                    <li>Prueba el código en simuladores como Tinkercad si no tienes el hardware disponible.</li>
                    <li>Consulta la documentación oficial de Arduino y su foro para resolver dudas.</li>
                </ul>
            </motion.div>
        </div>
    );
}