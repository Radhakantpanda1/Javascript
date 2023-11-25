let cl=document.querySelector('.iimm');
let kl=document.querySelector('i');
let statusof=0;

cl.addEventListener('dblclick',function(){
    if(statusof==0){
        kl.style.color='red';
        kl.style.transform='translate(-50% , -50%) scale(2)';
         kl.style.opacity='0.8';
         setTimeout(function(){
             kl.style.opacity='0';
         },1500)
         statusof=1;
    }
    else{
        kl.style.color='white';
   kl.style.transform='translate(-50% , -50%) scale(2)';
    kl.style.opacity='0.8';
    setTimeout(function(){
        kl.style.opacity='0';
    },1500)
    statusof=0;
    }
   
})