let hh=document.querySelector('h1')
document.querySelector('h1').style.paddingTop='50px';
document.querySelector('h1').innerHTML="BHAI TUMHARA DOM KA CHAMPION BANEGA";
document.querySelector('h1').style.color='salmon';

hh.addEventListener('click',function (){
    document.querySelector('body').style.backgroundColor='palegreen';
    hh.style.color="#000";
   
})
