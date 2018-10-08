// grab data, create elements, add text, create css classes, check count of elements on page, odd get one class even another, append elements in proper order
qotd = () => {
  fetch('https://favqs.com/api/qotd').then(function(response) {
    return response.json()
  }).catch((error) => console.log(error)).then(function(jsonData) {
    let quoteData = jsonData['quote']['body']
    let authorData = jsonData['quote']['author']
    let node = document.createElement("div")
    let author = document.createElement("div")
    let quote = document.createElement("div")
    let authorText = document.createTextNode(authorData)
    let dash = document.createTextNode(" -")
    let quoteText = document.createTextNode(quoteData)
    if (document.querySelectorAll('#quotes .node').length % 2 == 0){
      node.className = "node rotate_left"
    } else {
      node.className = "node rotate_right"
    }
    author.className = "author"
    quote.className = "quote"
    node.appendChild(quote)
    node.appendChild(author)
    quote.appendChild(quoteText)
    author.appendChild(dash)
    author.appendChild(authorText)
    document.getElementById("quotes").appendChild(node)
  })
}
