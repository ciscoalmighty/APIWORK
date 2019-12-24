document.getElementById("myBtn").addEventListener("click", fetchAPI);

function fetchAPI(event) {
  event.preventDefault();
  let result = document.getElementById("stock").value;
  result = "https://financialmodelingprep.com/api/v3/company/profile/" + result;
  fetch(result)
    .then((response) => response.json())
    .then(function(data) {
      console.log(data);
      let profile = [];
      profile = data;
      let ul = document.getElementById("ul");
      profile.forEach((profile) =>{
        let li = document.createElement("li");
        li.innerHTML = profile.price;
        ul.appendChild(li);

      })
    });
}


