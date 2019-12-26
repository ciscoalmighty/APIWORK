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
      let li = document.createElement("li");
      li.innerHTML = "Company Name:" + data.profile.companyName;
      ul.appendChild(li);
      let li1 = document.createElement("li");
      li1.innerHTML = "Exchange:" + data.profile.exchange;
      ul.appendChild(li1);
      let li2 = document.createElement("li");
      li2.innerHTML = "Industry:" + data.profile.industry;
      ul.appendChild(li2);
      let li3 = document.createElement("li");
      li3.innerHTML = "Website:" + data.profile.website;
      ul.appendChild(li3);
      let li4 = document.createElement("li");
      li4.innerHTML = "Description:" + data.profile.description;
      ul.appendChild(li4);
      let li5 = document.createElement("li");
      li5.innerHTML = "CEO:" + data.profile.ceo;
      ul.appendChild(li5);
      let li6 = document.createElement("li");
      li6.innerHTML = "Sector:" + data.profile.sector;
      ul.appendChild(li6);
      let li7 = document.createElement("li");
      li7.innerHTML = "Price:" + data.profile.price;
      ul.appendChild(li7);
      let li8 = document.createElement("li");
      li8.innerHTML = "Beta:" + data.profile.beta;
      ul.appendChild(li8);
      let li9 = document.createElement("li");
      li9.innerHTML = "VolAvg:" + data.profile.volAvg;
      ul.appendChild(li9);
      let li10 = document.createElement("li");
      li10.innerHTML = "MKTCap:" + data.profile.mktCap;
      ul.appendChild(li10);
      let li11 = document.createElement("li");
      li11.innerHTML = "LastDiv:" + data.profile.lastDiv;
      ul.appendChild(li11);
      let li12 = document.createElement("li");
      li12.innerHTML = "Range:" + data.profile.range;
      ul.appendChild(li12);
      let li13 = document.createElement("li");
      li13.innerHTML = "Changes:" + data.profile.changes;
      ul.appendChild(li13);
      let li14 = document.createElement("li");
      li14.innerHTML = "Changes Percentage:" + data.profile.changesPercentage;
      ul.appendChild(li14);
      })
    }



