function Speak(){
    let text=document.getElementById("Speak").value;
    let speak=new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(speak);
}