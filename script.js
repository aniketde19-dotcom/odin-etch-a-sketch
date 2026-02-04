const container=document.querySelector("#container");
function addGrid(n){
    container.innerHTML="";
    const h=(560/n) + "px"
    for(let i=1; i<=Math.pow(n,2);i++){
        const box=document.createElement('div');
        box.classList.add('box-noHover');
        box.style.height=h;
        box.style.width=h;
        container.append(box);

        
    }
}
function handleHover(e){
    if(set==true){
    let target=e.target;
    if(target.classList.contains('box-noHover')){
        target.style.backgroundColor=randomRGB();
    }
    
    }
    
}
// addGrid(16);
container.addEventListener('mouseover',handleHover);
const clear=document.querySelector("#clr");

let dim=null;
let set=false;
const makeGrid=document.querySelector("#ip");
makeGrid.addEventListener('click',()=>{
    dim=Number(prompt("Enter grid side-length"));
    if(!Number.isInteger(dim)){
        alert("Enter valid dimensions");
    }else{
        if(dim<1 || dim>100){
            alert("Enter side-length between 0 and 100");
        }else{
        set=true;
        addGrid(dim);
        }
    }
})
clear.addEventListener('click', () => {
    if(dim==null){
        alert("First generate grid");
    }else{
        if(set)
    addGrid(dim);
    }
})
function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
