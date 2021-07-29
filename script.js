const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here
const search = document.getElementById('search')
const reset = document.getElementById('reset')
const text = document.getElementById('text')
const oldAuthorHTML = author.innerHTML
const oldTextHTML = text.innerHTML
const oldArr = text.innerHTML.split(" ")
const outputArr = text.innerHTML.split(" ")
let toggleStatus = false

btn_toggle.onclick = () => {
  // your code here
  if (!toggleStatus) {
    author.innerHTML = parseInt(oldAuthorHTML) + parseInt(length.value)
    btn_toggle.innerHTML = "Show Calculation"
    toggleStatus = true
  }
  else {
    author.innerHTML = oldAuthorHTML
    btn_toggle.innerHTML = "Show Author"
    toggleStatus = false
  }
}

// more codes for Search and Reset buttons here
search.onclick = () => {
  const inputText = text.innerText
  const arr = inputText.split(" ")
  console.log(oldArr)
  for (let x in oldArr){
    if(oldArr[x].length >= parseInt(length.value))
    outputArr[x] = "<span style = 'color: " + color.value + "'>" + oldArr[x] + "</span>"
  }
  text.innerHTML = outputArr.join(" ")
}

reset.onclick = () => {
  text.innerHTML = oldTextHTML
}