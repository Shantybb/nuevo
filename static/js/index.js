//https://www.eclipse.org/paho/clients/js/

function Encender_LED() {
	//alert("led on");
	message = new Paho.MQTT.Message("Encendido");
    	message.destinationName = "sdarmas.fie@unach.edu.ec/test1";
    	client.send(message);
	console.log("led Prendido");
  
}
function Apagar_LED(){	

	message = new Paho.MQTT.Message("Apagado");
    	message.destinationName = "sdarmas.fie@unach.edu.ec/test1";
    	client.send(message);
	console.log("led Apagado");
}






// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "sdarmas.fie@unach.edu.ec",
    password: "jacque1234",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("sdarmas.fie@unach.edu.ec/test");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "sdarmas.fie@unach.edu.ec/test1";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    text=(message.payloadString);
    if(text=="Muy Alto"){
	    document.getElementById("sensor").innerHTML = text;
    }
    if(text=="Muy Bajo"){
	    document.getElementById("sensor").innerHTML = text;
    }
  }
  
