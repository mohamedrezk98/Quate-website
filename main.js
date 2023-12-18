
var content = [

    {
        txt: "Be yourself; everyone else is already taken",
        name: "Oscar Wilde"
    },
    {
        txt: "So many books, so little time.",
        name: " Albert Einstein",
    },

    {
        txt: "A room without books is like a body without a soul",
        name: "Mahatma Gandhi",
    },

]
function add() {


    var text = Math.round(Math.random() * (content.length))
    document.getElementById("demo").innerHTML =  `
    <p>${content[text].txt}</p>
    <span> ${content[text].name}</span>
    
    `;;
 



}
