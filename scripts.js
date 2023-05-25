
const sketch = document.querySelector('#sketch-container');

function creategrid(rows,cols){

    for(let x=0; x<rows; x++){
        let row = document.createElement('div');
        row.classList.add("row");
        row.id = x;

        for(let y = 0; y<cols; y++){
            let col = document.createElement('div');
            col.classList.add("col");
            col.id = y;
            col.style = " flex-basis:100%;";
            col.setAttribute('draggable',false);
            col.setAttribute('ondragstart',"return false;");
            col.setAttribute('ondrop',"return false;");
            row.appendChild(col);
        }
        row.style = "display: flex; ";
        row.setAttribute('draggable',false);
        sketch.appendChild(row);
    };

}
creategrid(16,16);


function colorwheel(){
    const usercolor = document.querySelector('#color-wheel');
    return usercolor.value;
}


const cols = document.querySelectorAll('.col');


let held = false
cols.forEach((div) =>{
    div.style = "border: 1px lightgray; border-style: solid; flex-basis:100%"; // making the grid
    div.addEventListener('mousedown',()=>{
        if(document.body.style.cursor != "move"){
            div.style.backgroundColor = colorwheel();
            
            held = true;
        }
        
    });
    document.body.addEventListener('mouseup',()=>{
        held = false;
    });
    div.addEventListener('mouseover',()=>{
        if(held){
            div.style.backgroundColor = colorwheel();
        }
    });

})

