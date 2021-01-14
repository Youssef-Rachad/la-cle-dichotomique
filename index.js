//====VARIABLES====//
var fenetre = document.getElementById("modal");
var nom = document.getElementById("nom");
var desc = document.getElementById("desc");
var lien = document.getElementById("lien");
var image = document.getElementById("image");

var titre = document.getElementById("titre");
var contenu = document.getElementById("contenu");
var image = document.getElementById("image");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btns = Array.from(document.getElementsByClassName("btn"));
var retour = document.getElementById("retour");
var precedente = 1;
function display(object){
    titre.innerText = object.id;
    contenu.innerText = object.q;
    btn1.innerText = object.a;
    btn2.innerText = object.b;

}
function wikiColeo(coleoptere){
    nom.innerText = coleoptere.nom;
    lien.innerText =`Apprenez davantage sur le coléoptère: ${coleoptere.nom}`;
    lien.href = coleoptere.lien;
    image.src = `./photos/${coleoptere.nom}.jpg`;
}

//-----PREMIERE PAGE-----\\
window.onload = display(questions[0]);

//-----NAVIGATION-----\\
btns.forEach((btn)=>{
    btn.addEventListener("click", (e) =>{
        var numero = e.target.innerText;
        if(Number.isInteger(parseInt(numero))){
            titre.classList.add("titre-question");
            display(questions[numero - 1]);
        }else{
            fenetre.style.display = "block";
            //titre.classList.remove("titre-question");
            //btn1.display = "none";
            //btn2.display = "none";
            wikiColeo(coleopteres.find(coleo => coleo.nom ==numero));
        }
    })
});

//-----BOUTON RETOUR-----\\
retour.addEventListener("click",()=>{
    let index = questions[titre.innerText-1].p;
    display(questions[index-1]);
});
//-----FENETRE COLEOPTERE-----\\
document.getElementById("close").addEventListener("click", ()=>fenetre.style.display = "none");
window.addEventListener("click", (e)=>{
    if(e.target == fenetre){
        fenetre.style.display = "none";
    }
})
