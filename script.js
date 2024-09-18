let item = document.querySelector("#item")
let toDoBox = document.querySelector("#to-do-box")
item.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        addtodo(this.value);
        this.value = ""
    }
})

const addtodo = (item) => {
    console.log(item);
    const listItem = document.createElement("li");
    listItem.innerHTML = `${item}
    <i class="fa-sharp fa-solid fa-xmark"></i>`
    listItem.addEventListener('click', function () {
        this.classList.toggle('done');
    })

    listItem.querySelector("i").addEventListener("click", function () {
        listItem.remove();
    })
    toDoBox.appendChild(listItem)
}
// let item=document.querySelector("#item");
// let toDoBox=document.querySelector("#to-do-box");
// item.addEventListener("keyup",function(event){
//    if(event.key=="Enter"){
//     addtodo(this.value);
//     this.value=""
//    }
// })
// const addtodo=(item)=>{
//     const listItem=document.createElement("li");
//   listItem.innerHTML=`${item}
//   <i class="fa-sharp fa-solid fa-xmark"></i> `
//   listItem.addEventListener('click',function(){
//   this.classList.toggle("done")
//   })
//   listItem.querySelector("i").addEventListener("click",function(){
//     listItem.remove();
//   })
//   toDoBox.appendChild(listItem)
// }