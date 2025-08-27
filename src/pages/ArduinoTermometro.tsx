import { faThermometerHalf, faMicrochip, faCode, faList, faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SummaryCard from '@/components/ui/SummaryCard';
import colors from '@/styles';
import { CodeBlock, dracula } from "react-code-blocks";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

// Código completo del termómetro digital con LCD
const thermometerCode = `
#include <LiquidCrystal.h>

// Inicializar la librería con los pines de la interfaz
LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

// Pin analógico donde está conectado el LM35
const int sensorPin = A0;

void setup() {
  // Configurar LCD con 16 columnas y 2 filas
  lcd.begin(16, 2);
  
  // Inicializar comunicación serial para debug
  Serial.begin(9600);
  
  // Mensaje de inicio
  lcd.print("Termometro");
  lcd.setCursor(0, 1);
  lcd.print("Digital v1.0");
  delay(2000);
  lcd.clear();
}

void loop() {
  // Leer valor analógico del sensor LM35
  int sensorValue = analogRead(sensorPin);
  
  // Convertir lectura ADC a voltaje (0-5V en 1024 pasos)
  float voltage = sensorValue * (5.0 / 1023.0);
  
  // Convertir voltaje a temperatura en Celsius
  // LM35: 10mV por grado Celsius, offset de 0V a 0°C
  float temperatureC = voltage * 100.0;
  
  // Convertir a Fahrenheit
  float temperatureF = (temperatureC * 9.0 / 5.0) + 32.0;
  
  // Mostrar en LCD
  lcd.setCursor(0, 0);
  lcd.print("Temp: ");
  lcd.print(temperatureC, 1);
  lcd.print(" C");
  
  lcd.setCursor(0, 1);
  lcd.print("     ");
  lcd.print(temperatureF, 1);
  lcd.print(" F");
  
  // Enviar datos por serial para monitoreo
  Serial.print("Lectura ADC: ");
  Serial.print(sensorValue);
  Serial.print(" | Voltaje: ");
  Serial.print(voltage, 3);
  Serial.print("V | Temperatura: ");
  Serial.print(temperatureC, 1);
  Serial.println("°C");
  
  // Actualizar cada segundo
  delay(1000);
}`;

const componentsList = [
  "Arduino Uno R3",
  "Sensor de temperatura LM35",
  "Pantalla LCD 16x2",
  "Potenciómetro 10kΩ (para contraste)",
  "Resistencia 220Ω (para backlight)",
  "Protoboard",
  "Cables de conexión",
  "Fuente de alimentación (opcional)"
];

const connections = [
  "LM35 VCC → Arduino 5V",
  "LM35 GND → Arduino GND",
  "LM35 OUT → Arduino A0",
  "LCD VSS → GND",
  "LCD VDD → 5V",
  "LCD V0 → Potenciómetro (contraste)",
  "LCD RS → Pin digital 12",
  "LCD Enable → Pin digital 11",
  "LCD D4 → Pin digital 5",
  "LCD D5 → Pin digital 4",
  "LCD D6 → Pin digital 3",
  "LCD D7 → Pin digital 2"
];

const motionCard = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function ArduinoTermometro() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-12 md:py-20">
        <div className="mx-auto px-4 text-center max-w-4xl">
          <motion.div {...motionCard}>
            <FontAwesomeIcon icon={faThermometerHalf} className="text-6xl mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Termómetro Digital</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Proyecto Arduino - Medición de temperatura con sensor LM35 y display LCD
            </p>
          </motion.div>
        </div>
      </section>

      {/* Descripción del Proyecto */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div {...motionCard}>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                <FontAwesomeIcon icon={faThermometerHalf} className="mr-3 text-green-600" />
                Descripción del Proyecto
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Este proyecto implementa un termómetro digital usando Arduino, un sensor LM35 y una pantalla LCD 16x2. 
                El sistema mide la temperatura ambiente y la muestra en tiempo real tanto en grados Celsius como Fahrenheit.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                El sensor LM35 es un circuito integrado de precisión que proporciona una salida de voltaje 
                linealmente proporcional a la temperatura en grados Celsius, siendo ideal para proyectos de medición.
              </p>
            </motion.div>
            <motion.div {...motionCard} transition={{ delay: 0.2 }}>
              <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="font-bold text-xl mb-4 text-gray-800">Características:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Medición en tiempo real
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Display en °C y °F
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Precisión de ±0.5°C
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Rango: -55°C a +150°C
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diagrama del Circuito */}
      <section className="py-12 bg-gray-100">
        <div className="mx-auto px-4 max-w-6xl">
          <motion.div {...motionCard}>
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              <FontAwesomeIcon icon={faMicrochip} className="mr-3 text-blue-600" />
              Diagrama del Circuito
            </h2>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-center mb-6">
                <img 
                  src="https://www.electronicshub.org/wp-content/uploads/2015/07/Arduino-Temperature-Sensor-using-LM35-Circuit-Diagram.jpg" 
                  alt="Diagrama del circuito del termómetro digital con LM35 y LCD"
                  className="mx-auto rounded-lg shadow-md max-w-full h-auto"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-xl mb-4 text-gray-800">
                    <FontAwesomeIcon icon={faList} className="mr-2 text-green-600" />
                    Componentes Necesarios
                  </h3>
                  <ul className="space-y-2">
                    {componentsList.map((component, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        {component}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-4 text-gray-800">
                    <FontAwesomeIcon icon={faTools} className="mr-2 text-blue-600" />
                    Conexiones del Circuito
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {connections.map((connection, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        {connection}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Explicación del Funcionamiento */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4 max-w-6xl">
          <motion.div {...motionCard}>
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Funcionamiento del Circuito
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3 text-blue-800">1. Sensor LM35</h3>
                <p className="text-gray-700">
                  El LM35 genera un voltaje proporcional a la temperatura: 10mV por cada grado Celsius. 
                  A 25°C produce 250mV, a 0°C produce 0V.
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3 text-green-800">2. Conversión ADC</h3>
                <p className="text-gray-700">
                  Arduino lee el voltaje analógico y lo convierte a un valor digital (0-1023). 
                  Se calcula: Voltaje = (Lectura × 5V) / 1023
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3 text-purple-800">3. Display LCD</h3>
                <p className="text-gray-700">
                  La temperatura calculada se muestra en la pantalla LCD en formato legible, 
                  actualizándose cada segundo.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Código del Proyecto */}
      <section className="py-12 bg-gray-100">
        <div className="mx-auto px-4 max-w-6xl">
          <motion.div {...motionCard}>
            <div className="text-center mb-8">
              <SummaryCard
                icon={faCode}
                title="Código del Termómetro Digital"
                description="Código completo en C para Arduino con comentarios detallados. Incluye manejo del sensor LM35, conversión de temperatura y control del display LCD."
              />
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-800 text-white p-4">
                <h3 className="font-bold text-lg">Arduino C - Termómetro Digital</h3>
              </div>
              <Card className="border-0 rounded-none">
                <CardContent className="p-6">
                  <CodeBlock
                    text={thermometerCode}
                    language="cpp"
                    showLineNumbers
                    theme={dracula}
                  />
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instrucciones de Montaje */}
      <section className="py-12 bg-white">
        <div className="mx-auto px-4 max-w-6xl">
          <motion.div {...motionCard}>
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Instrucciones de Montaje
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-bold text-xl text-gray-800">Pasos de Montaje:</h3>
                <ol className="space-y-3">
                  <li className="flex">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">1</span>
                    <span className="text-gray-700">Conecta el sensor LM35 al pin A0 de Arduino y a la alimentación</span>
                  </li>
                  <li className="flex">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">2</span>
                    <span className="text-gray-700">Conecta la pantalla LCD siguiendo el esquema de pines</span>
                  </li>
                  <li className="flex">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">3</span>
                    <span className="text-gray-700">Instala la librería LiquidCrystal en el IDE de Arduino</span>
                  </li>
                  <li className="flex">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">4</span>
                    <span className="text-gray-700">Carga el código al Arduino y verifica el funcionamiento</span>
                  </li>
                </ol>
              </div>
              <div className="bg-yellow-50 rounded-lg p-6">
                <h3 className="font-bold text-xl text-yellow-800 mb-4">⚠️ Consejos Importantes:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Verifica las conexiones antes de energizar</li>
                  <li>• Ajusta el potenciómetro para el contraste del LCD</li>
                  <li>• El LM35 debe estar orientado correctamente</li>
                  <li>• Evita cortocircuitos en la protoboard</li>
                  <li>• Calibra el sensor si es necesario</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}