var obesidademorbida1 = 35;
var obesidademorbida2 = 40;
var obesidade = 30;
var sobrepeso = 25;
var normal = 18.5;
var baixo = 18;
function excluir() {
    var peso = document.querySelector('#peso');
    var altura = document.querySelector('#altura');
    var view = document.querySelector('#seg');
    if (peso != null && altura != null && view != null) {
        var div = parseFloat(peso.value) / (parseFloat(altura.value) * parseFloat(altura.value));
        var paragrafo = document.createElement('p');
        var texto = document.createTextNode(div.toString());
        paragrafo.append(texto);
        view.append(paragrafo);
        var paragrafo1 = document.querySelector('p');
        if (parseFloat(paragrafo1 === null || paragrafo1 === void 0 ? void 0 : paragrafo1.innerText) >= obesidademorbida1) {
            var paragrafo_1 = document.createElement('p');
            var texto_1 = document.createTextNode('Você tem Obesidade Morbida, ');
            var texto2 = document.createTextNode('Procure um médico');
            paragrafo_1.appendChild(texto_1);
            paragrafo_1.appendChild(texto2);
            view.appendChild(paragrafo_1);
        }
        else if (parseFloat(paragrafo1 === null || paragrafo1 === void 0 ? void 0 : paragrafo1.innerText) >= obesidademorbida2) {
            var paragrafo_2 = document.createElement('p');
            var texto_2 = document.createTextNode('Você tem Obesidade Morbida de nivel 2, ');
            var texto2 = document.createTextNode('Procure um médico urgente');
            paragrafo_2.appendChild(texto_2);
            paragrafo_2.appendChild(texto2);
            view.appendChild(paragrafo_2);
        }
        else if (parseFloat(paragrafo1 === null || paragrafo1 === void 0 ? void 0 : paragrafo1.innerText) >= obesidade) {
            var paragrafo_3 = document.createElement('p');
            var texto_3 = document.createTextNode('Você tem Obesidade, ');
            var texto2 = document.createTextNode('Se preucopar e passar no médico');
            paragrafo_3.appendChild(texto_3);
            paragrafo_3.appendChild(texto2);
            view.appendChild(paragrafo_3);
        }
        else if (parseFloat(paragrafo1 === null || paragrafo1 === void 0 ? void 0 : paragrafo1.innerText) >= sobrepeso) {
            var paragrafo_4 = document.createElement('p');
            var texto_4 = document.createTextNode('Você tem sobre-peso, ');
            var texto2 = document.createTextNode('Tomar cuidado');
            paragrafo_4.appendChild(texto_4);
            paragrafo_4.appendChild(texto2);
            view.appendChild(paragrafo_4);
        }
        else if (parseFloat(paragrafo1 === null || paragrafo1 === void 0 ? void 0 : paragrafo1.innerText) >= normal) {
            var paragrafo_5 = document.createElement('p');
            var texto_5 = document.createTextNode('Você esta normal, ');
            var texto2 = document.createTextNode('Fique tranquilo');
            paragrafo_5.appendChild(texto_5);
            paragrafo_5.appendChild(texto2);
            view.appendChild(paragrafo_5);
        }
        else if (parseFloat(paragrafo1 === null || paragrafo1 === void 0 ? void 0 : paragrafo1.innerText) >= baixo) {
            var paragrafo_6 = document.createElement('p');
            var texto_6 = document.createTextNode('Você esta a baixo, ');
            var texto2 = document.createTextNode('tomar cuidado para não ficar magro de mais');
            paragrafo_6.appendChild(texto_6);
            paragrafo_6.appendChild(texto2);
            view.appendChild(paragrafo_6);
        }
    }
}
