const screen=document.getElementById("screen")
const keys=document.querySelector(".keys")

keys.addEventListener("click",e=>{
  if(e.target.tagName!=="BUTTON") return
  const value=e.target.textContent

  if(value==="C"){
    screen.value=""
    return
  }

  if(value==="="){
    try{
      screen.value=Function("return "+screen.value)()
    }catch{
      screen.value="Error"
    }
    return
  }

  screen.value+=value
})
