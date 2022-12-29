function setup(){
canvas=createCanvas(280,280);
canvas.center();
background("white");
canvas.mouseReleased(classifyCanvas);
 synth=window.speechSynthesis;
}
function clearcanvas(){
    background("white");
}
function preload(){
    classifier=ml5.imageClassifier('doodlenet');

}
function draw(){

strokeWeight(13);

stroke(0);

if(mouseIsPressed){
    line(pmouseX,pmouseY,pmouseX,pmouseY);
}
}

function classifyCanvas(){
    classifier.classify(canvas,gotResult);
}

function gotResult( error,results){
    if(error){
       console.error(error); 
    }
document.getElementById('label').innerHTML='label'+results[0].label;
document.getElementById('confidence').innerHTML='confidence:'+Math.round(results[0].confidence * 100)+'%';
Utterthis=new SpeechSynthesisUtterance(results[0].label);
Synth.speak(Uterrthis);
}