let  myImg=["shuvo.jpg","pic-1.png","pic-2.png","pic-3.png"];
let know=document.querySelector("img");

let count=0;

function nextEvent(){
    count++;
    if(count >= myImg.length){
        count=0;
        know.src=myImg[count];
    }
    else{
        know.src=myImg[count];
    }
}

function prevEvent(){
    count--;
    if(count < 0){
        count=myImg.length-1;
        know.src=myImg[count];
    }
    else{
        know.src=myImg[count];
    }
}