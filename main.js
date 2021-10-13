function preload(){

}

function setup(){
canvas=createCanvas(300,250);
canvas.center();
video=createCapture(VIDEO);
video.hide();
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/MkIY_54Z3/model.json",modelLoaded);

}

function draw(){
image(video,0,0,300,250);
classifier.classify(video,gotResults);
}


function modelLoaded(){
    console.log("Model loaded successfully");
}


function gotResults(error,results){
    if(error)
    {
        console.error(error);
    }
    else{
    console.log(results);
    document.getElementById("member").innerHTML=results[0].label;
    document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}