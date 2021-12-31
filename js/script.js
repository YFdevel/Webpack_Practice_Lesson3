import {pictures} from "./pictures";
import {audioFiles} from "./audio";
import {videoFiles} from "./video";

const elementsArr=[...pictures,...audioFiles,...videoFiles];
console.log(elementsArr)
function loadGallery(callback,elements) {
    const element = document.createElement("div");
    element.className = "gallery";
    document.body.appendChild(element);
     element.onload = callback(elements);
}
function loadCards(elements) {
    elements.forEach((item)=>{
        const element = document.createElement("div");
        element.className = "card";
        if(item.image){
            element.innerHTML+=`<h3>${item.heading}</h3><img src=./gallery/images/${item.image}>`;
        }
        if(item.track){
            element.innerHTML+=`<h3>${item.heading}</h3><audio controls src=./gallery/audio/${item.track}></audio>`;
        }
        if(item.vid){
            element.innerHTML+=`<h3>${item.heading}</h3><video controls src=./gallery/video/${item.vid}></video>`;
        }
        document.querySelector(".gallery").appendChild(element);
    })

}
loadGallery(loadCards,elementsArr);