
const container = document.querySelector('#container');
function creategrid(rows,cols){

    for(let x=0; x<rows; x++){
        let row = document.createElement('div');
        row.classList.add("row");

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

const buttons = document.querySelectorAll('.col');

buttons.forEach((div) =>{
    div.addEventListener('click',() =>{
        alert(div.id);
    })
})

