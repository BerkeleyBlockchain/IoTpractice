//declare photresistor pins
const int sensorPin1 = A0;
const int sensorPin2 = A1;
const int sensorPin3 = A2;

//declare photoresistor values
int sensor1 = 0;
int sensor2 = 0;
int sensor3 = 0;


void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600); //begin serial monitor
}

void loop() {
  // put your main code here, to run repeatedly:

  //read values from sensors
  sensor1 = analogRead(sensorPin1);
  sensor2 = analogRead(sensorPin2);
  sensor3 = analogRead(sensorPin3);

  //print values to serial monitor
//  Serial.print("Raw Sensor Values \t Sensor 1: ");
  Serial.print(sensor1);
  Serial.print(" ");
//  Serial.print(" \t Sensor 2: ");
  Serial.print(sensor2);
  Serial.print(" ");
//  Serial.print(" \t Sensor 3: ");
  Serial.println(sensor3);
  delay(1000);
}
