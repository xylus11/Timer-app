const allTimer  = document.querySelector(".all-timers");


    const startButton = document.getElementById("start");

    startButton.addEventListener("click", function() {
        
        
        const hoursInput = document.getElementById("H");
        const minutesInput = document.getElementById("M");
        const secondsInput = document.getElementById("S");

        let hours = parseInt(hoursInput.value) || 0;
        let minutes = parseInt(minutesInput.value) || 0;
        let seconds = parseInt(secondsInput.value) || 0;

        if(!hours && !minutes && !seconds ) {
            alert("please enter a valid time");
            return;
        }
      
      
        const total_time_in_seconds = hours *3600 + minutes * 60 +seconds;

         

        //creating new div 
       createTimer(total_time_in_seconds);
       


        // You can use these values as needed.
    });



function createTimer(total_time_in_seconds){
    const newdiv = document.createElement('div');
        const innerELe = document.createElement('span');
 
  
    
    const timerInterval = setInterval(() =>{
        total_time_in_seconds--;
        const display_hours = Math.floor(total_time_in_seconds / 3600);
    const display_minutes = Math.floor((total_time_in_seconds % 3600) / 60);
    const display_seconds = Math.floor(total_time_in_seconds % 60);
  
    innerELe.textContent = `Time Left: ${display_hours}:${display_minutes}:${display_seconds}`;
    if(total_time_in_seconds<=0)
    {
        clearInterval(timerInterval);
        innerELe.textContent="Times up !!";
        playAudio();
      
    
    }
   
    },1000)
  
    const btn = document.createElement('button');
    btn.textContent ="Delete";
    btn.addEventListener("click",()=>{
        clearInterval(timerInterval);
        newdiv.remove();
    })
   
    const btn_2 = document.createElement('button');
    btn_2.textContent ="Stop";
    btn_2.addEventListener("click",()=>{
        clearInterval(timerInterval);
    })
    
    const newdiv_2 = document.createElement('div');
    newdiv_2.className="button_div"


    
    allTimer.appendChild(newdiv);
    newdiv.className="container-2";
    newdiv.appendChild(innerELe);
    newdiv.appendChild(newdiv_2);
    newdiv_2.appendChild(btn);
    newdiv_2.appendChild(btn_2);
   


   

    

}
function playAudio(){
    const audio = new Audio("pain.mp3");
audio.play();}
