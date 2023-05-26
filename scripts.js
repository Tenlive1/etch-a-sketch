
const sketch = document.querySelector('#sketch-container');

function creategrid(rows,cols){ //making the grid

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
creategrid(16,16); // default grid size


function colorwheel(){// this function return the user color that they wanted
    const usercolor = document.querySelector('#color-wheel');
    return usercolor.value;
}



function removegrid(){// removing the grid
    while (sketch.firstChild) {
    sketch.removeChild(sketch.firstChild);
    }
}




const amounts = document.querySelector('#amount');
const clear = document.querySelector('#clear');

clear.addEventListener('click',()=>{// this will hear if the user press the clear button
    removegrid();
    creategrid(amounts.value,amounts.value);
    draw();
})

amounts.addEventListener('input',()=>{// this is the slider and it will check the input so this way the grid change as well
    const text = document.querySelector('.text');
    text.textContent = amounts.value + "x" + amounts.value;
    removegrid();
    creategrid(amounts.value,amounts.value);
    draw();
});



function draw(){ // this will allow the user to draw on the etch-a sketch
    const cols = document.querySelectorAll('.col');
    const checkbox = document.querySelector('#Grid');
    let held = false
    cols.forEach((div) =>{
         
        checkbox.addEventListener('change',()=>{
            if(checkbox.checked == false){
                console.log("test");
                div.style.borderStyle = "none";// making the grid gridless
            }else{
                div.style.borderStyle = "solid";
            }
        })
        if(checkbox.checked == false){
            console.log("test");
            div.style.borderStyle = "none";// making the grid gridless
        }else{
            div.style.borderStyle = "solid";
        }

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
}

 

draw();

