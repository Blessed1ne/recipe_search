let url = ""

let inputNode = document.querySelector("input").addEventListener("keydown", function(event){
  if (event.keyCode === 13) {
    console.log(event.target.value);
     url = "http://recipepuppyproxy.herokuapp.com/api/?i=" + event.target.value

    gitfood (url)
  }
})

let ulNode = document.querySelector(".thumbnail")
console.log(ulNode);




function gitfood (url){



fetch(url)
.then(function(response) {
  return response.json()

.then(function(json){
  console.log(json)
   let result = ""
  for (var i = 0; i < json.results.length; i++) {
    result += `<img src =${json.results[i].thumbnail}> ${json.results[i].title}> ${json.results[i].href}`
  }

  ulNode.innerHTML = result


  console.log(result);

})

})
}
