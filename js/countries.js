window.addEventListener('load', () => {
  searchByCountry();
});

const search = document.getElementById('search');
const show = document.getElementById('showAllCountriesData');

// Search by country name
const searchByCountry = async (searchText) => {
  const response = await fetch(
    'https://coronavirus-19-api.herokuapp.com/countries'
  );
  const data = await response.json();
  console.log(data);

  // get match to current text input
  let matches = data.filter((country) => {
    const regex = new RegExp(`^${searchText}`, 'gi');
    return country.country.match(regex);
  });

  if (searchText === undefined) {
    matches = data;
  }

  console.log(matches);
  renderDom(matches);
};

const renderDom = (matches) => {
  show.innerHTML = '';
  for (let i = 0; i < matches.length; i++) {
    const covidData = document.createElement('div');
    covidData.setAttribute('class', 'covidData');
    const countryName = document.createElement('h3');
    const casesData = document.createElement('p');
    const deathsData = document.createElement('p');
    const conditionData = document.createElement('p');

    countryName.innerHTML = matches[i].country;
    casesData.innerHTML = `Cases: ${matches[i].cases}  |  Today: ${matches[i].todayCases} | Active: ${matches[i].active}`;
    deathsData.innerHTML = `Deaths: ${matches[i].deaths}  |  Today: ${matches[i].todayDeaths}`;
    conditionData.innerHTML = `Recovered: ${matches[i].recovered}  |  Critical: ${matches[i].critical}`;
    covidData.append(countryName, casesData, deathsData, conditionData);
    show.appendChild(covidData);
  }
};

search.addEventListener('input', () => searchByCountry(search.value));
