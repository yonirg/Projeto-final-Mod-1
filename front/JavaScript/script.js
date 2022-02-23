var DivPrincesa1 = document.getElementsByClassName('princesa')[0];
var imgPrincesa1 = document.getElementById('princesa1');
var descricaoPrincesa1 = document.getElementById('descricao1')

function ocultaPrincesa1() {
    DivPrincesa1.removeChild(imgPrincesa1);
    DivPrincesa1.style.height = '458px';      
    DivPrincesa1.style.width = '505.33px';
    descricaoPrincesa1.style.display='block';
};

function mostraPrincesa1(){
    DivPrincesa1.appendChild(imgPrincesa1);
   descricaoPrincesa1.style.display='none'; 
};

function mostrarDescricao() {  
    DivPrincesa1.addEventListener('mouseover', ocultaPrincesa1);
    DivPrincesa1.addEventListener('mouseleave',mostraPrincesa1);   
};