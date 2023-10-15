//TODO Fetch the value from html of table and row
let table = document.getElementById("customerTable")
let rows = Array.from(table.getElementsByTagName("tr"));
let sortValueOfTable = document.querySelector("button");
// console.log(sortValueOfTable);

rows.shift();

//define initial sort order 
let sortOrder = "asc";

//todo click the button to sort value according to user name
sortValueOfTable.addEventListener("click",()=>{
    rows.sort((a,b)=>{
        var nameA = a.getElementsByTagName("td")[0].textContent;
        var nameB = b.getElementsByTagName("td")[0].textContent;

        if(sortOrder === "asc"){
            return nameA.localeCompare(nameB);
        }else{
            return nameB.localeCompare(nameA);
        }
        
    })

    //todo update the table with sorted name
    rows.forEach((row)=>{
        table.appendChild(row);
    })

    sortOrder = sortOrder === "asc" ? "desc" : "asc";
})


//todo my method
//console.log(rows[0].children[0].textContent);
// let newArray = [];
// rows.forEach((item,idx)=>{ 
//     newArray.push(item.children[0].textContent);
// })
// newArray.sort();
// console.log(newArray);
// table.appendChild(newArray);


