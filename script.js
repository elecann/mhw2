const immagini = document.querySelectorAll('.cisiamo');

let uno;
let due;
let tre;
let u_no;
let d_ue;
let t_re;
function seleziona(event){
    let image = event.currentTarget.querySelector('.checkbox');
    image.src= "checked.png";
    event.currentTarget.classList.add('seselezionassi');
   

        if(event.currentTarget.dataset.questionId==='one'){
            uno=event.currentTarget.dataset.choiceId;
        }else if(event.currentTarget.dataset.questionId==='two'){
            due=event.currentTarget.dataset.choiceId;
        }else  tre=event.currentTarget.dataset.choiceId;
        
        for(const ok of immagini){

       
        

        if(event.currentTarget.dataset.questionId === ok.dataset.questionId){
            if(event.currentTarget.dataset.choiceId !== ok.dataset.choiceId){
                let image = ok.querySelector('.checkbox');
                image.src = 'unchecked.png';
                ok.classList.add('overlay');
            }
            else{
                ok.classList.remove('overlay');
            }
        }
        

    }
      
        if(uno!==undefined && due!==undefined && tre!==undefined){
            for(const bo of immagini){
            bo.removeEventListener('click', seleziona);
            }
            verifica(uno, due, tre);
            uno=undefined;
            due=undefined;
            tre=undefined;
            const final=document.querySelector('.finale');
            final.classList.remove('invisible');
            final.classList.add('visible');
         }
}


function verifica(){
    let titolo = document.querySelector('#risultato');
    let sottotitolo = document.querySelector('#pensiero');
    let paragrafo = document.querySelector('.broken');

    if(due === tre ){

        titolo.textContent = RESULTS_MAP[due]['title'];
        sottotitolo.textContent = RESULTS_MAP[due]['sottotitolo'];
        paragrafo.textContent = RESULTS_MAP[tre]['contents'];

    }

    else{

        titolo.textContent = RESULTS_MAP[uno]['title'];
        sottotitolo.textContent = RESULTS_MAP[uno]['sottotitolo'];
        paragrafo.textContent = RESULTS_MAP[uno]['contents'];

    }

} 
function reset(event){

    const button = event.currentTarget;

    for(const risp of immagini){

        risp.classList.remove('overlay');
        risp.classList.remove('seselezionassi');
        risp.addEventListener('click', seleziona);
        let image = risp.querySelector('.checkbox');
        image.src = 'unchecked.png';

    }

   

    const ris = document.querySelector('.finale');
    ris.classList.remove('visible');
    ris.classList.add('invisible');

    window.scroll(0,0);

}

const button = document.querySelector('button');
button.addEventListener('click', reset);
   
    



for (let cisiamo of immagini) {  
    cisiamo.addEventListener('click', seleziona);
}
