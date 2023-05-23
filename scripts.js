
const container = document.querySelector('#container');
function creategrid(rows,cols){

    for(let x=0; x<rows; x++){
        let row = document.createElement('div');
        row.classList.add("row");
        row.id = x;

        for(let y = 0; y<cols; y++){
            let col = document.createElement('div');
            col.classList.add("col");
            col.id = y;
            col.style = "width: 30px; height: 30px; border: 1px lightgray; border-style: solid; box-sizing: border-box";
            row.appendChild(col);
        }
        row.style = "display: flex;";
        container.appendChild(row);
    };

}
creategrid(16,16);


const cols = document.querySelectorAll('.col');

cols.forEach((div) =>{
    let held =false;
    div.addEventListener('mousedown',()=>{
        held =true;
        div.style.backgroundColor = "black";
        cols.forEach((test) => {
            if(held){
                test.addEventListener('mouseover',()=>{
                    test.style.backgroundColor = "black";
                });
            }
        });
    });
    div.addEventListener('mouseup',()=>{
        held = false;
        console.log(held);
    });
})

