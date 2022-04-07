import { series } from "./data.js";
var coursesTbody = document.getElementById('series');
var containerDiv = document.getElementById("info");
renderCoursesInTable(series);
function renderCoursesInTable(series) {
    var suma = 0;
    var total = 0;
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.id, "</td>\n        <td><a href=\"#\" id=\"").concat(c.name, "\" onclick=\"showInfo()\">").concat(c.name, "</a></td>\n        <td>").concat(c.channel, "</td>\n        <td>").concat(c.seasons, "</td>");
        coursesTbody.appendChild(trElement);
    });
    series.forEach(function (c) {
        suma += c.seasons;
        total += 1;
    });
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td colspan=\"4\">Seasons average: ".concat(suma / total, "</td>");
    coursesTbody.appendChild(trElement);
}
series.forEach(function (serie) {
    var elem = document.getElementById(serie.name);
    if (elem != null) {
        elem.onclick = function (x) {
            showInfo(x);
        };
    }
});
function showInfo(x) {
    var name = x.path[0].id;
    var serieI = series.filter(function (x) { return x.name == name; })[0];
    var image = serieI.image;
    var description = serieI.description;
    var link = serieI.link;
    var divcol = document.createElement("div");
    divcol.className = "col";
    divcol.id = "dataCard";
    var card = document.createElement("div");
    card.className = "card";
    card.setAttribute("style", "width: 30rem; background-color:#2C3034");
    divcol.appendChild(card);
    var img = document.createElement("img");
    img.className = "card-img-top" +
        console.log(image);
    img.src = image;
    card.appendChild(img);
    var cardB = document.createElement("div");
    cardB.className = "card-body";
    card.appendChild(cardB);
    var title = document.createElement("h5");
    title.className = "card-title";
    title.setAttribute("style", "color: white");
    title.innerHTML = name;
    cardB.appendChild(title);
    var para = document.createElement("p");
    para.className = "card-text";
    para.setAttribute("style", "color: white");
    para.innerHTML = description;
    cardB.appendChild(para);
    var cardB2 = document.createElement("div");
    cardB.className = "card-body";
    card.appendChild(cardB2);
    var lin = document.createElement("a");
    lin.href = link;
    lin.className = "card-link";
    lin.innerHTML = link;
    cardB2.appendChild(lin);
    if (document.getElementById("dataCard") == null) {
        containerDiv.appendChild(divcol);
    }
    else {
        containerDiv.replaceChild(divcol, document.getElementById("dataCard"));
    }
}
