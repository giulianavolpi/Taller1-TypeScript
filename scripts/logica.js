import  {Data} from './Data.js';	
var seriesbody = document.getElementById('series');
var promedio = 0;

elementosTabla(Data)
function elementosTabla(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement('tr');
        trElement.innerHTML = "<th>".concat(serie.id, "</th>\n                                <td class=\"text-primary\">").concat(serie.nombre, "</td>\n                                <td>").concat(serie.plataforma, "</td>\n                                <td>").concat(serie.temporadas, "</td>");
        seriesbody.appendChild(trElement);
        promedio += serie.temporadas;
    });
    promedio /= series.length;
    document.getElementById("average").innerHTML = "Seasons Average: " + promedio;
}
export {};
