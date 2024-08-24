var todoArray=[]
function add(){
    var container=document.getElementById("con-2")

    const data=document.getElementById("h-input").value
    todoArray.push(data)
    todoArray.map((x)=>{
         const div=document.createElement("div")
         const pr=div.classList
         pr.add("p")
         const p=document.createElement("p")
         p.innerText=x
         div.appendChild(p)
         container.appendChild(div)
         todoArray=[]
    })
    console.log(todoArray)

}