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
  console.log(arr)
  const newArr = arr.map((x) => {
    if (x.length >= parseInt(length.value)) {
      return "<span style = 'color: " + color.value + "'>" + x + "</span>"
    }
    else {
      return x
    }
  })
  console.log(newArr)
  text.innerHTML = newArr.join(" ")

  // const inputText = text.innerText
  // const arr = inputText.split(" ")
  // const newArr = arr.filter((x) => x.length >= parseInt(length.value))
  // console.log(newArr)
  // for (let x of newArr) {
  //   const re = new RegExp(x, "g")
  //   text.innerHTML = text.innerHTML.replace(re, "<span style = 'color: " + color.value + "'>" + x + "</span>")
  // }
}

reset.onclick = () => {
  text.innerHTML = oldTextHTML
}