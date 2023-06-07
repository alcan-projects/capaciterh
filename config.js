const config = [
  {
    content: "Capacité RH",
    class: "._name",
    subs: "[name]"
  },
  {
    content: "(63) 9000-0000",
    class: "._phone",
    subs: "[phone]"
  },
  {
    content: "test@gmail.com",
    class: "._email",
    subs: "[email]"
  },
  {
    content: "Rua pedrin lote 23",
    class: "._address",
    subs: "[address]"
  }
]

config.forEach(item => {
  const element = document.querySelectorAll(item.class);
  element.forEach(ele => {
    ele.innerHTML = ele.innerHTML.replace(item.subs, item.content)
  })
})
