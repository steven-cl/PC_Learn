import { faCode, faThermometerHalf, faMicrochip, faLightbulb, faBolt, faTemperatureLow, faRobot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InfoListCard from '@/components/ui/InfoListCard';
import SummaryCard from '@/components/ui/SummaryCard';
import colors from '@/styles';
import { CodeBlock, dracula } from "react-code-blocks";
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
                    <div className="w-full max-w-3xl mx-auto">
                        <InfoListCard
                            Color="bg-green-600"
                            Icon={faThermometerHalf}
                            IconColor={colors.interactiveGreen}
                            Title="Termómetro Digital Completo"
                            ListItems={[
                                "Sensor LM35 + Display LCD",
                                "Código completo con comentarios",
                                "Diagrama de circuito detallado",
                                "Instrucciones de montaje"
                            ]}
                            ButtonText="Ver proyecto"
                            ButtonLink="/arduinoTermometro"
                            ExtraInfo="Proyecto Completo"
                            className="flex text-lg p-6 mx-auto"
                        />
                    </div>
                    <div className="w-full max-w-3xl mx-auto">
                        <InfoListCard
                            Color="bg-purple-600"
                            Icon={faRobot}
                            IconColor={colors.purpleTech}
                            Title="Control de Motor DC"
                            ListItems={[
                                "Aprende a controlar motores con L298N",
                                "Programación con PWM y control de dirección",
                                "Código comentado paso a paso",
                                "Diagramas de circuito detallados"
                            ]}
                            ButtonText="Ver proyecto"
                            ButtonLink="/motorControlProject"
                            ExtraInfo="Nivel: Avanzado"
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
                
                {/* Conceptos de Programación */}
                <div className="flex flex-col gap-6 items-stretch mb-6 py-16 w-full">
                    <div className="w-full max-w-6xl mx-auto">
                        <h2 className="text-2xl font-bold text-center mb-8 text-blue-600">
                            <FontAwesomeIcon icon={faCode} className="mr-2" />
                            Conceptos Fundamentales de Programación
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <div className="bg-blue-600 p-4">
                                    <h3 className="text-white text-xl font-bold flex items-center">
                                        <FontAwesomeIcon icon={faMicrochip} className="mr-2" />
                                        Tipos de Datos
                                    </h3>
                                </div>
                                <div className="p-6">
                                    <ul className="space-y-3">
                                        <li className="flex items-start text-gray-700">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">•</span>
                                            <span><strong>int:</strong> Números enteros (-32,768 a 32,767)</span>
                                        </li>
                                        <li className="flex items-start text-gray-700">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">•</span>
                                            <span><strong>float:</strong> Números decimales (±3.4028235E+38)</span>
                                        </li>
                                        <li className="flex items-start text-gray-700">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">•</span>
                                            <span><strong>bool:</strong> Valores verdadero/falso (true/false)</span>
                                        </li>
                                        <li className="flex items-start text-gray-700">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">•</span>
                                            <span><strong>char:</strong> Caracteres individuales ('A', '5', etc.)</span>
                                        </li>
                                        <li className="flex items-start text-gray-700">
                                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">•</span>
                                            <span><strong>String:</strong> Cadenas de texto ("Hola mundo")</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <div className="bg-green-600 p-4">
                                    <h3 className="text-white text-xl font-bold flex items-center">
                                        <FontAwesomeIcon icon={faBolt} className="mr-2" />
                                        Variables y Constantes
                                    </h3>
                                </div>
                                <div className="p-6">
                                    <ul className="space-y-3">
                                        <li className="flex items-start text-gray-700">
                                            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">•</span>
                                            <span><strong>Variables:</strong> Valores que pueden cambiar</span>
                                        </li>
                                        <li className="flex items-start text-gray-700">
                                            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">•</span>
                                            <span><strong>const:</strong> Valores que no cambian</span>
                                        </li>
                                        <li className="flex items-start text-gray-700">
                                            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">•</span>
                                            <span><strong>Ámbito global:</strong> Accesibles en todo el programa</span>
                                        </li>
                                        <li className="flex items-start text-gray-700">
                                            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">•</span>
                                            <span><strong>Ámbito local:</strong> Solo dentro de funciones</span>
                                        </li>
                                        <li className="flex items-start text-gray-700">
                                            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">•</span>
                                            <span><strong>Inicialización:</strong> Asignar valor inicial</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Estructuras de Control */}
                <div className="flex flex-col gap-6 items-stretch mb-6 py-16 w-full">
                    <div className="w-full max-w-4xl mx-auto">
                        <SummaryCard
                            icon={faBolt}
                            title="Estructuras de Control"
                            description="Las estructuras de control permiten tomar decisiones y repetir acciones en el código.\n Incluyen condicionales (if/else) y bucles (for/while) esenciales para la lógica del programa."
                        />
                    </div>
                    
                    <div className="w-full max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Card className="module-card overflow-hidden w-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-gradient-to-br from-gray-50 to-gray-100">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center">
                                        <FontAwesomeIcon icon={faCode} className="mr-2" />
                                        Condicionales (if/else)
                                    </h3>
                                    <div className="rounded-lg overflow-hidden border border-gray-200 shadow-inner">
                                        <CodeBlock
                                            text={`// Estructura condicional básica
int sensorValue = analogRead(A0);

if (sensorValue > 500) {
    digitalWrite(13, HIGH);  // Enciende LED
    Serial.println("Sensor activado");
} else if (sensorValue > 200) {
    digitalWrite(13, LOW);   // Apaga LED
    Serial.println("Sensor en rango medio");
} else {
    Serial.println("Sensor inactivo");
}`}
                                            language="cpp"
                                            showLineNumbers
                                            theme={dracula}
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                            
                            <Card className="module-card overflow-hidden w-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-gradient-to-br from-gray-50 to-gray-100">
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-purple-600 mb-4 flex items-center">
                                        <FontAwesomeIcon icon={faRobot} className="mr-2" />
                                        Bucles (for/while)
                                    </h3>
                                    <div className="rounded-lg overflow-hidden border border-gray-200 shadow-inner">
                                        <CodeBlock
                                            text={`// Bucle for - número específico de repeticiones
for (int i = 0; i < 10; i++) {
    digitalWrite(13, HIGH);
    delay(100);
    digitalWrite(13, LOW);
    delay(100);
}

// Bucle while - mientras se cumpla condición
while (digitalRead(2) == HIGH) {
    Serial.println("Botón presionado");
    delay(100);
}`}
                                            language="cpp"
                                            showLineNumbers
                                            theme={dracula}
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* Funciones y Organización del Código */}
                <div className="flex flex-col gap-6 items-stretch mb-6 py-16 w-full">
                    <div className="w-full max-w-4xl mx-auto">
                        <SummaryCard
                            icon={faMicrochip}
                            title="Funciones y Modularización"
                            description="Las funciones permiten organizar el código en bloques reutilizables.\n Facilitan el mantenimiento, lectura y depuración del programa."
                        />
                    </div>
                    
                    <div className="w-full max-w-4xl mx-auto">
                        <Card className="module-card overflow-hidden w-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-gradient-to-br from-gray-50 to-gray-100">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold text-orange-500 mb-4 flex items-center">
                                    <FontAwesomeIcon icon={faLightbulb} className="mr-2" />
                                    Ejemplo de Función Completa
                                </h3>
                                <div className="rounded-lg overflow-hidden border border-gray-200 shadow-inner">
                                    <CodeBlock
                                        text={`// Función que lee un sensor y actúa según el valor
void procesarSensor(int pinSensor, int pinLed, int umbral) {
    int valor = analogRead(pinSensor);
    
    if (valor > umbral) {
        digitalWrite(pinLed, HIGH);
        Serial.print("Sensor activado: ");
        Serial.println(valor);
    } else {
        digitalWrite(pinLed, LOW);
    }
}

// Función que devuelve un valor calculado
float convertirTemperatura(int valorADC) {
    float voltaje = valorADC * (5.0 / 1023.0);
    float temperatura = (voltaje - 0.5) * 100;
    return temperatura;
}

void setup() {
    Serial.begin(9600);
    pinMode(13, OUTPUT);
    pinMode(A0, INPUT);
}

void loop() {
    procesarSensor(A0, 13, 512);  // Usar función personalizada
    
    float temp = convertirTemperatura(analogRead(A1));
    Serial.print("Temperatura: ");
    Serial.println(temp);
    
    delay(1000);
}`}
                                        language="cpp"
                                        showLineNumbers
                                        theme={dracula}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Librerías y Recursos Avanzados */}
                <div className="flex flex-col gap-6 items-stretch mb-6 py-16 w-full">
                    <div className="w-full max-w-6xl mx-auto">
                        <h2 className="text-2xl font-bold text-center mb-8 text-blue-600">
                            <FontAwesomeIcon icon={faThermometerHalf} className="mr-2" />
                            Librerías y Recursos Avanzados
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <div className="bg-indigo-600 p-4">
                                    <h3 className="text-white text-xl font-bold flex items-center">
                                        <FontAwesomeIcon icon={faThermometerHalf} className="mr-2" />
                                        Librerías Comunes
                                    </h3>
                                </div>
                                <div className="p-6">
                                    <ul className="space-y-3">
                                        <li className="flex items-start text-gray-700">
                                            <span className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">•</span>
                                            <span><strong>Servo.h:</strong> Control de servomotores</span>
                                        </li>
                                        <li className="flex items-start text-gray-700">
                                            <span className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">•</span>
                                            <span><strong>LiquidCrystal.h:</strong> Pantallas LCD</span>
                                        </li>
                                        <li className="flex items-start text-gray-700">
                                            <span className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">•</span>
                                            <span><strong>SoftwareSerial.h:</strong> Puerto serie adicional</span>
                                        </li>
                                        <li className="flex items-start text-gray-700">
                                            <span className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">•</span>
                                            <span><strong>WiFi.h:</strong> Conectividad inalámbrica</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <div className="bg-red-600 p-4">
                                    <h3 className="text-white text-xl font-bold flex items-center">
                                        <FontAwesomeIcon icon={faBolt} className="mr-2" />
                                        Técnicas de Debug
                                    </h3>
                                </div>
                                <div className="p-6">
                                    <ul className="space-y-3">
                                        <li className="flex items-start text-gray-700">
                                            <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">•</span>
                                            <span><strong>Serial.print():</strong> Mostrar valores y estados</span>
                                        </li>
                                        <li className="flex items-start text-gray-700">
                                            <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">•</span>
                                            <span><strong>LED indicador:</strong> Señales visuales de estado</span>
                                        </li>
                                        <li className="flex items-start text-gray-700">
                                            <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">•</span>
                                            <span><strong>Comentarios:</strong> Documentar el código</span>
                                        </li>
                                        <li className="flex items-start text-gray-700">
                                            <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">•</span>
                                            <span><strong>Pruebas graduales:</strong> Validar por partes</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <div className="bg-green-600 p-4">
                                    <h3 className="text-white text-xl font-bold flex items-center">
                                        <FontAwesomeIcon icon={faCode} className="mr-2" />
                                        Buenas Prácticas
                                    </h3>
                                </div>
                                <div className="p-6">
                                    <ul className="space-y-3">
                                        <li className="flex items-start text-gray-700">
                                            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">•</span>
                                            <span><strong>Nombres descriptivos:</strong> Variables claras</span>
                                        </li>
                                        <li className="flex items-start text-gray-700">
                                            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">•</span>
                                            <span><strong>Constantes:</strong> Evitar números mágicos</span>
                                        </li>
                                        <li className="flex items-start text-gray-700">
                                            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">•</span>
                                            <span><strong>Funciones pequeñas:</strong> Una tarea por función</span>
                                        </li>
                                        <li className="flex items-start text-gray-700">
                                            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm">•</span>
                                            <span><strong>Indentación:</strong> Código bien formateado</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
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