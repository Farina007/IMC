let obesidademorbida1 : number = 35;
let obesidademorbida2 : number = 40;
let obesidade : number = 30;
let sobrepeso : number = 25;
let normal : number = 18.5;
let baixo : number = 18;

function excluir(){

let peso : HTMLInputElement | null = 
document.querySelector('#peso');
let altura : HTMLInputElement | null = 
document.querySelector('#altura');

let view: HTMLDivElement | null =
document.querySelector('#seg')



if(peso != null && altura != null && view != null){
 
    let div = parseFloat(peso.value) / (parseFloat(altura.value)*parseFloat(altura.value)) ;
    let paragrafo = document.createElement('p');
    let texto = document.createTextNode(div.toString());
    paragrafo.append(texto);
    view.append(paragrafo);

    let paragrafo1 : HTMLParagraphElement | null =
    document.querySelector('p')!;

    if(parseFloat(paragrafo1?.innerText) >= obesidademorbida1){

        let paragrafo = document.createElement('p');
        let texto = document.createTextNode('Você tem Obesidade Morbida, ');
        let texto2 = document.createTextNode('Procure um médico')

        paragrafo.appendChild(texto);
        paragrafo.appendChild(texto2);
        view.appendChild(paragrafo);
    }
    else if(parseFloat(paragrafo1?.innerText) >= obesidademorbida2){

        let paragrafo = document.createElement('p');
        let texto = document.createTextNode('Você tem Obesidade Morbida de nivel 2, ');
        let texto2 = document.createTextNode('Procure um médico urgente');

        paragrafo.appendChild(texto);
        paragrafo.appendChild(texto2);
        view.appendChild(paragrafo);
    }

    else if(parseFloat(paragrafo1?.innerText) >= obesidade){

        let paragrafo = document.createElement('p');
        let texto = document.createTextNode('Você tem Obesidade, ');
        let texto2 = document.createTextNode('Se preucopar e passar no médico');
        

        paragrafo.appendChild(texto);
        paragrafo.appendChild(texto2);
        view.appendChild(paragrafo);
    }

    else if(parseFloat(paragrafo1?.innerText) >= sobrepeso){

        let paragrafo = document.createElement('p');
        let texto = document.createTextNode('Você tem sobre-peso, ');
        let texto2 = document.createTextNode('Tomar cuidado');

        paragrafo.appendChild(texto);
        paragrafo.appendChild(texto2);
        view.appendChild(paragrafo);
    }

    else if(parseFloat(paragrafo1?.innerText) >= normal){

        let paragrafo = document.createElement('p');
        let texto = document.createTextNode('Você esta normal, ');
        let texto2 = document.createTextNode('Fique tranquilo')

        paragrafo.appendChild(texto);
        paragrafo.appendChild(texto2)
        view.appendChild(paragrafo);
    }

    else if(parseFloat(paragrafo1?.innerText) >= baixo){

        let paragrafo = document.createElement('p');
        let texto = document.createTextNode('Você esta a baixo, ');
        let texto2 = document.createTextNode('tomar cuidado para não ficar magro de mais');

        paragrafo.appendChild(texto);
        paragrafo.appendChild(texto2);
        view.appendChild(paragrafo);  
    }
}
}