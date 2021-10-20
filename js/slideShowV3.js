let count = 1;
 const src = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_"

 const MIN = 1;
 const MAX = 19;
 let url;
 const mainElement = document.querySelector("div.main>img");
 const thumbnailsElement = document.querySelector("div.thumbnails")
 function left(){
   count--;
   if(count < MIN){
     count = MAX;
     thumbnailsElement.children[0].classList.remove("selected")
   }else {
     thumbnailsElement.children[count].classList.remove("selected")
   }
   if(count < 10){
     url = src + "0" + count + ".jpg";
   }else{
     url = src + count +".jpg";
   }
   mainElement.setAttribute('src', url);
   thumbnailsElement.children[count-1].classList.add("selected")
 }

  function right() {
    count++;
    if(count > MAX){
      count = MIN;
      thumbnailsElement.children[MAX-1].classList.remove("selected");
    }else {
      thumbnailsElement.children[count-2].classList.remove("selected");
    }
    if(count < 10){
      url = src + "0" + count + ".jpg";
    }else {
      url = src + count +".jpg";
    }
    mainElement.setAttribute('src', url);
    thumbnailsElement.children[count-1].classList.add("selected")
  }

  let nowplaying = false;
  let timer;

  function play(){
    if(nowplaying == false){

    nowplaying = true;
    autoplay();
  }
  }

  function autoplay(){
    right();
    timer = setTimeout(function (){
      autoplay()} , 1000);
  }

  function stop(){
    clearTimeout(timer);
    nowplaying = false;
  }

  function reset(){
    stop();
    thumbnailsElement.children[count-1].classList.remove("selected");
    url = src + "01.jpg";
    mainElement.setAttribute('src', url);
    thumbnailsElement.children[MIN-1].classList.add("selected")

  }
