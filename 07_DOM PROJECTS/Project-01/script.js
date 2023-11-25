let friendstatus=0;
let kl=document.querySelector('#add');
kl.addEventListener('click',function(){
    if(friendstatus==0){
        document.querySelector('h3').innerHTML='Friends';
    document.querySelector('h3').style.color='green';
    document.querySelector('#add').style.backgroundColor='#808080';
    document.querySelector('#add').style.color='#000';
    kl.innerHTML='Remove friend';
    document.getElementById("iimmgg").src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHx8MHx8fDA%3D";
    friendstatus=1;
    }
    else{
        document.querySelector('h3').innerHTML='Stranger';
    document.querySelector('h3').style.color='Red';
    document.querySelector('#add').style.backgroundColor='cadetblue';
    document.querySelector('#add').style.color='#fff';
    document.getElementById("iimmgg").src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHx8MHx8fDA%3D";
    

    kl.innerHTML='Add Friend';
    friendstatus=0;
    }
})
