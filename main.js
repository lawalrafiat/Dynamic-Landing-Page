const time = document.querySelector('#time');

const heading = document.querySelector('#heading');

const quote = document.querySelector('#quote');

// document.body.style.backgroundImage = "url('image/flower1.jpg')";


function myTime (){
    let setTime = new Date(),
     hour = setTime.getHours(),
     minutes = setTime.getMinutes();

     //am/pm
     const amPm = hour >= 12 ? 'PM' : 'AM';
    
     time.innerHTML = `${hour}<span>:</span>${zero(minutes)} ${amPm}`;

     setTimeout(myTime, 60000);
}

function zero(n){
    return (parseInt(n,10) < 10 ? '0' : '') + n;
}



//BACKGROUND IMAGE
function bgImage(){

    let setTime = new Date(),
    min = setTime.getMinutes();

    if(min < 10){
        document.body.style.backgroundImage = "url('image/flower2.jpg')"
        quote.textContent = '"If you are not willing to risk the usual you will have to settle for the ordinary".';
    } else if(min < 20 ){
        document.body.style.backgroundImage = "url('image/flower3.jpg')"
        quote.textContent = '"If you want to achieve greatnes, stop asking for permission".';
    } else if(min < 30){
        document.body.style.backgroundImage = "url('image/flower4.jpg')"
        quote.textContent = '"Trust because you are willing to accept the risk, not because it is certain or safe".';
    } else if(min < 40){
        document.body.style.backgroundImage = "url('image/flower1.jpg')"
        quote.textContent = '"Just when the caterpillar thought the world was ending, he turned into a butterfly".';
    } else if(min < 50){
        document.body.style.backgroundImage = "url('image/flower6.jpg')"
        quote.textContent = '"To live a creative life, we must lose our fear of being wrong".';
    } else {
        document.body.style.backgroundImage = "url('image/flower7.jpg')"
        quote.textContent = '"If you are not willing to risk the usual you will have to settle for the ordinary"';
    }

    setTimeout(bgImage, 60000);

}


//run
myTime();
bgImage();

