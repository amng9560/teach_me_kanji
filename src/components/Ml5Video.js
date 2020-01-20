import React from 'react';
import Sketch from "react-p5";
import * as ml5 from "ml5";

let classifier;
let video;
let label = "";

function Ml5Video({ imageModelURL }){
  const preload = () => {
    classifier = ml5.imageClassifier(imageModelURL + 'model.json');
    console.log(classifier)
  }

  const setup = (p5) => {
    p5.createCanvas(340, 280);
    video = p5.createCapture('VIDEO');
    video.size(340, 240);
    video.hide();
    classifyVideo();
  }

  const draw = (p5) => {
    p5.background(0);
    p5.image(video, 0, 0);
    p5.fill(255);
    p5.textSize(20);
    p5.textAlign(p5.CENTER);
    p5.text(label, p5.width / 2, p5.height - 4);
  }

  const classifyVideo = () => {
    classifier.classify(video, gotResult);
  }

  const gotResult = (error, results) => {
    if (error) {
      console.error(error);
      return;
    }
    label = results[0].label;
    classifyVideo();
  }

  return (
    <div className="video">
      <Sketch preload={preload} setup={setup} draw={draw}/>
    </div>
  );
}

export default Ml5Video;
