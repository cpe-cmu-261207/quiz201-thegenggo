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
const oldTextHTML = author.innerHTML
let toggleStatus = false

btn_toggle.onclick = () => {
  // your code here
  if (!toggleStatus) {
    author.innerHTML = parseInt(oldAuthorHTML) + parseInt(length.value)
    toggleStatus = true
  }
  else {
    author.innerHTML = oldAuthorHTML
    console.log(oldAuthorHTML)
    toggleStatus = false
  }
}

// more codes for Search and Reset buttons here
search.onclick = () => {
  const inputText = text.innerText
  const arr = inputText.split(" ")
  const newArr = arr.map((x) => {
    if (x >= parseInt(length.value)) {
      return "<span style = 'color: " + color.value + "'></span>"
    }
    else {
      return x
    }
  })
  console.log(newArr)
}

reset.onclick = () => {

}