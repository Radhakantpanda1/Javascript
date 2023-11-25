let container= document.querySelector('.container');
let children= document.querySelectorAll('.child');
children.forEach(function (element) {
    element.addEventListener('click',function(k){
        if(k.target.id==='child1')
        container.style.backgroundColor='#DAE0E2';

        if(k.target.id==='child2')
        container.style.backgroundColor='#EA7773';

        if(k.target.id==='child3')
        container.style.backgroundColor='#AE1438';

        if(k.target.id==='child4')
        container.style.backgroundColor='#E83350';

        if(k.target.id==='child5')
        container.style.backgroundColor='#0A3D62';

    })
});