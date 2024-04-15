
const btn = document.getElementsByClassName('btn')[0]
const modal = document.getElementsByClassName('modal')[0]
const cross = document.getElementsByClassName('cross')[0]
const body = document.body

btn.addEventListener('click',function(){       //when clicking on button class hide is removed from modal
    console.log('Clicked')
    modal.classList.remove('hide')
    body.classList.add('overlay')
})

cross.addEventListener('click',function(){       
    modal.classList.add('hide')
    body.classList.remove('overlay')
})


document.addEventListener('keydown', function(e){     //when i press esc button also it works same  as cross 
    if(e.keyCode==27){                             //keycode of esc button in keyboard is 27
    modal.classList.add('hide')  
    body.classList.remove('overlay')
    }
})