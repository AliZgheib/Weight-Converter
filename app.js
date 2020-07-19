document.addEventListener('DOMContentLoaded',()=>{

const search=document.querySelector('#search');
const board =document.querySelector('.results');
const options =document.querySelectorAll('.choice');
const h2 =document.querySelector('.h2');
let operation="";
let input="";
let pounds;
let grams;
let kilograms;
let ounces;
board.addEventListener('click',(e)=>{

if(e.target.className.includes('choice')){


    const type =e.target.getAttribute('id');
    input=search.value;

    if(input==''){

        options[0].innerText="Pounds";
options[2].innerText="Grams";
options[1].innerText="Kilograms";
options[3].innerText="Ounces";
    }
console.log(input);
    operation=type;
    findresult();

       options.forEach((item,index)=>{

        if(item.className==e.target.className){
            search.style.display="block";
            e.target.style.opacity=0.3;
            
           h2.innerText=`Converting from ${type}`;

        }

    else{
    item.style.opacity=1;
      }
     });


    




}

});



search.addEventListener('input',findresult);

function findresult(){
input=search.value;
if(input!="" && operation!=""){

if(operation=="Pounds"){
kilograms=input/2.205;
grams=input*454;
ounces=input*16;

updatedivs(input,kilograms,grams,ounces)

}

else if(operation=='Grams')
{
pounds=input/454;
kilograms=input/1000;
ounces=input/28.35;
updatedivs(pounds,kilograms,input,ounces)

}

else if(operation=='Kilograms'){
pounds=input*2.205;
grams=input*1000;
ounces=input*35.274;
updatedivs(pounds,input,grams,ounces)


}
else if(operation=='Ounces'){
pounds=input/16;
kilograms=input/35.274;
grams=input*28.35;
updatedivs(pounds,kilograms,grams,input)

}

}
else{
    return;
}

}


function updatedivs(input,kilograms,grams,ounces){

options[0].innerText=+input +" pound";
options[2].innerText=kilograms+" kilograms";
options[1].innerText=grams+" gram";
options[3].innerText=ounces+" ounces";

}
});