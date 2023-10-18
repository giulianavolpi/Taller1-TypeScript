import {Serie} from './Serie.js';
import {Data} from './Data.js';

var seriesbody: HTMLElement = document.getElementById('series')!;
var promedio: number = 0;



function elementosTabla(series: Serie[]): void{
  
    series.forEach((serie) => {
        let trElement = document.createElement('tr');

        trElement.innerHTML =  `<th>${serie.id}</th>
                                <td class="text-primary">${serie.nombre}</td>
                                <td>${serie.plataforma}</td>
                                <td>${serie.temporadas}</td>`;

        seriesbody.appendChild(trElement);
        promedio += serie.temporadas;
     
    });

    promedio /= series.length;

    document.getElementById("average")!.innerHTML = "Seasons Average " + promedio;

}