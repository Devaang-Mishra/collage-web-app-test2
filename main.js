var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){

        document.getElementById("textbox").innerHTML="";
        recognition.start()
}
        recognition.onresult=function(event){
        console.log(event);
        var Content=event.results[0][0].transcript;
        console.log(Content);
        if(Content=="take selfie"){
            console.log("taking selfie");
            speak();
        }
    
        document.getElementById("textbox").innerHTML=Content;
        
    }



function take_snapshot(){
    console.log(img_id);
    Webcam.snap(function(data_uri) {
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML='<img id="selfie1" src="'+data_uri+'"/>';
        }

        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML='<img id="selfie2" src="'+data_uri+'"/>';
        }

        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTM='<img id="selfie3" src="'+data_uri+'"/>';
        }
    });
}

Webcam.set({
    width:500,
    height:400,
    image_format:'jpeg',
    jpeg_format:90
});

setTimeout(function()
{
    img_id="selfie1";
    take_snapshot();
    speak_data="taking your next Selfie in 10 seconds";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
}, 5000);


function speak(){
  
    var synth = window.speechSynthesis;
    speak_data ="Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);
    setTimeout(function() {
     take_snapshot()
     save();
    }, 5000);
}


 function save(){
    var link=document.getElementById("link");
    var image=document.getElementById("selfie_image").scr;
    link.href=image;
    link.click()

 }

