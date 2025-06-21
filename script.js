let buttons=document.querySelectorAll('.btn');
let full_screen= document.querySelector('.wrapper');

buttons.forEach(function(button){
   button.addEventListener('click', function(e){
    if(e.target.id==='pink'){
        full_screen.style.backgroundColor= e.target.id;
    }
    if(e.target.id==='purple'){
        full_screen.style.backgroundColor= e.target.id;
    }
    if(e.target.id==='orange'){
        full_screen.style.backgroundColor=e.target.id;
    }
     if(e.target.id==='lemonchiffon'){
        full_screen.style.backgroundColor=e.target.id;
    }
     if(e.target.id==='yellow'){
        full_screen.style.backgroundColor=e.target.id;
    }
     if(e.target.id==='green'){
        full_screen.style.backgroundColor=e.target.id;
    }

   })
});