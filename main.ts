import {Serie} from "./serie.js"
import {series} from "./data.js"

const coursesTbody: HTMLElement = document.getElementById('series')!;
const containerDiv: HTMLElement = document.getElementById("info")!;
renderCoursesInTable(series)

function renderCoursesInTable(series: Serie[]): void {
    let suma: number = 0;
    let total: number = 0;
    series.forEach(c => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${c.id}</td>
        <td><a href="#" id="${c.name}" onclick="showInfo()">${c.name}</a></td>
        <td>${c.channel}</td>
        <td>${c.seasons}</td>`;
        coursesTbody.appendChild(trElement);
    });
    series.forEach(c => {
        suma += c.seasons;
        total += 1;
    })
    let trElement = document.createElement("tr");
    trElement.innerHTML= `<td colspan="4">Seasons average: ${suma/total}</td>`;
    coursesTbody.appendChild(trElement);

}
series.forEach(serie => {
    let elem = document.getElementById(serie.name);
    if (elem != null){
        elem.onclick = (x) => {
            showInfo(x);
        }
    }
    
})

function showInfo(x:any){
    const name: string = x.path[0].id;
    let serieI: Serie = series.filter(x => {return x.name == name})[0];
    const image: string = serieI.image;
    const description: string = serieI.description;
    const link: string = serieI.link;
    
    let divcol = document.createElement("div")
    divcol.className = "col";
    divcol.id = "dataCard"

    let card = document.createElement("div");
    card.className = "card";
    card.setAttribute("style", "width: 30rem; background-color:#2C3034")

    divcol.appendChild(card);

    let img = document.createElement("img")
    img.className = "card-img-top"+
    console.log(image);
    img.src = image;
    
    card.appendChild(img);

    let cardB = document.createElement("div");
    cardB.className = "card-body";

    card.appendChild(cardB);

    let title = document.createElement("h5");
    title.className = "card-title"
    title.setAttribute("style","color: white");
    title.innerHTML = name;

    cardB.appendChild(title);

    let para = document.createElement("p");
    para.className = "card-text";
    para.setAttribute("style","color: white");
    para.innerHTML = description;

    cardB.appendChild(para);

    let cardB2 = document.createElement("div");
    cardB.className = "card-body";

    card.appendChild(cardB2);

    let lin = document.createElement("a");
    lin.href = link;
    lin.className = "card-link"
    lin.innerHTML = link;

    cardB2.appendChild(lin);


    
    containerDiv.replaceChild(divcol, document.getElementById("dataCard")!);
    



    

    

    


}

