

for( var index=0; index<7;index++)

{


document.querySelectorAll(".drum")[index].addEventListener('click',function()

{
        
     var html= this.innerHTML;
     
     Click(html);
     buttonAnimation(html);

     
        
}
        
        );


}

document.addEventListener("keydown",function(event)

{

        Click(event.key);

        buttonAnimation(event.key);


})


function Click(key)

{

    

    switch(key)
    {

        case "w":
                var crash= new Audio("sounds/crash.mp3");
                crash.play();
                break;
        case "a":
                var kick= new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
        case "s":
                var tom1= new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;

        case "d":
                var tom2= new Audio("sounds/tom-2.mp3");
                tom2.play(); 
                break;   

        case "j":
                var tom3= new Audio("sounds/tom-3.mp3");
                tom3.play();      
                break;      
        case "k":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;

        case "l":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
    
        default:

    }


}

function buttonAnimation(currentkey){


var activeButton = document.querySelector("." + currentkey)
    activeButton.classList.toggle("pressed");


    setTimeout(function(){

        activeButton.classList.toggle("pressed")

    },100);

}
