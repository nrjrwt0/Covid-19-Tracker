window.addEventListener('load', () => {
  fetchAllData();
});

var fetchAllData = async () => {
  let response = await fetch('https://coronavirus-19-api.herokuapp.com/all');
  let data = await response.json();

  showAllData(data);
};

var showAllData = (data) => {
  // console.log(data);
  const cases = document.querySelector('.cases');
  const deaths = document.querySelector('.deaths');
  const recovered = document.querySelector('.recovered');

  let p1 = document.createElement('p');
  let p2 = document.createElement('p');
  let p3 = document.createElement('p');

  p1.innerHTML = data.cases;
  p2.innerHTML = data.deaths;
  p3.innerHTML = data.recovered;

  p1.setAttribute('class', 'fetchNumbers');
  p2.setAttribute('class', 'fetchNumbers');
  p3.setAttribute('class', 'fetchNumbers');

  cases.appendChild(p1);
  deaths.appendChild(p2);
  recovered.appendChild(p3);
};
