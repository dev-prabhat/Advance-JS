const debounceContainer = document.getElementById("debounce")
const inputField = document.getElementById("input-field")

const getDate = () => {
    debounceContainer.innerHTML = inputField.value
}

const DebounceFunc = (cb,delay) => {
   let timer
   return function(){
    clearTimeout(timer)
    timer =  setTimeout(()=>{
      cb()
    },delay)
   }
}

inputField.addEventListener("input",DebounceFunc(getDate,1000))