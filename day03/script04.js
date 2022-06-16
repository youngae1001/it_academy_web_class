
class Element {
  constructor(text) {
    this.text = text
  }
}

class Heading extends Element {
  createElement = () =>  {
    const h1 = document.createElement("h1")
    h1.textContent = this.text
    document.querySelector("body").appendChild(h1)
  }
}

class Paragraph extends Element {
  createElement = () => {
    const p = document.createElement("p")
    p.textContent = this.text
    document.querySelector("body").appendChild(p)
  }
}

class Divider extends Element {
  createElement = () => {
    const div = document.createElement("div")
    div.textContent = this.text
    document.querySelector("body").appendChild(div)
  }
}

// 클릭할 당시에 input에 적혀있는 글을 읽어와야되는 것이므로 click 안에 있어야 함!
// const text = document.getElementById("text").value
// const head = new Heading(text)

// document.getElementById("h1").addEventListener("click", () => {
//   const text = document.getElementById("text").value
//   const head = new Heading(text)
//   head.createElement()
// })

document.getElementById("h1").addEventListener("click", () => {
  const value = document.getElementById("text").value
  document.getElementById("text").value = ""
  new Heading(value).createElement()
})

document.getElementById("p").addEventListener("click", () => {
  const value = document.getElementById("text").value
  document.getElementById("text").value = ""
  new Paragraph(value).createElement()
})

document.getElementById("div").addEventListener("click", () => {
  const value = document.getElementById("text").value
  document.getElementById("text").value = ""
  new Divider(value).createElement()
})