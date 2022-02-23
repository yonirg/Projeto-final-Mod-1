var DivPrincesa1 = document.getElementsByClassName('princesa')[0];
var imgPrincesa1 = document.getElementById('princesa1');
var descricaoPrincesa1 = document.getElementById('descricao1');

var DivPrincesa2 = document.getElementsByClassName('princesa')[1];
var imgPrincesa2 = document.getElementById('princesa2');
var descricaoPrincesa2 = document.getElementById('descricao2');

var DivPrincesa3 = document.getElementsByClassName('princesa')[2];
var imgPrincesa3 = document.getElementById('princesa3');
var descricaoPrincesa3 = document.getElementById('descricao3');

function ocultaPrincesa1() {
    DivPrincesa1.removeChild(imgPrincesa1);
    DivPrincesa1.style.height = '458px';      
    DivPrincesa1.style.width = '505.33px';
    descricaoPrincesa1.style.display='block';
};

function ocultaPrincesa2() {
    DivPrincesa2.removeChild(imgPrincesa2);
    DivPrincesa2.style.height = '458px';      
    DivPrincesa2.style.width = '272px';
    descricaoPrincesa2.style.display='block';
};

function ocultaPrincesa3() {
    DivPrincesa3.removeChild(imgPrincesa3);
    DivPrincesa3.style.height = '458px';      
    DivPrincesa3.style.width = '505.33px';
    descricaoPrincesa3.style.display='block';
};

function mostraPrincesa1(){
    DivPrincesa1.appendChild(imgPrincesa1);
    descricaoPrincesa1.style.display='none'; 
};

function mostraPrincesa2(){
    DivPrincesa2.appendChild(imgPrincesa2);
    descricaoPrincesa2.style.display='none'; 
};

function mostraPrincesa3(){
    DivPrincesa3.appendChild(imgPrincesa3);
    descricaoPrincesa3.style.display='none'; 
};

function mostrarDescricao() {  
    DivPrincesa1.addEventListener('mouseover', ocultaPrincesa1);
    DivPrincesa1.addEventListener('mouseleave',mostraPrincesa1); 
    DivPrincesa2.addEventListener('mouseover', ocultaPrincesa2);
    DivPrincesa2.addEventListener('mouseleave',mostraPrincesa2);
    DivPrincesa3.addEventListener('mouseover', ocultaPrincesa3);
    DivPrincesa3.addEventListener('mouseleave',mostraPrincesa3);  
};

mostrarDescricao();