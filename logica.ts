import {Serie} from './serie.js';
import {Data} from './data.js';

const laseries: HTMLElement = document.getElementById('series')!;
let promedio: number = 0;

elementosTabla(Data)

function elementosTabla(series: Serie[]): void{
  
    series.forEach((serie) => {
        let elemento = document.createElement('elemento');

        elemento.innerHTML =  `<th>${serie.id}</th>
                                <td class="text-primary">${serie.nombre}</td>
                                <td>${serie.plataforma}</td>
                                <td>${serie.temporadas}</td>`;

        laseries.appendChild(elemento);
        promedio += serie.temporadas;
     
    });

    promedio /= series.length;

    document.getElementById("average")!.innerHTML = "Seasons Average: " + promedio;

}