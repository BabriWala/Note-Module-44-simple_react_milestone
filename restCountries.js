const URL = 'https://restcountries.com/v3.1/all';

const loadData = url =>{
    fetch(url)
    .then(response => response.json())
    .then(data => displayData(data))
}

const displayData = countries => {
    // console.log(countries);
    // const countriesHTML = countries.map( country => country.name.common )
    const countriesHTML = countries.map( country => displayInUi(country) )
    // console.log(countriesHTML);
    let countriesContainer = document.getElementById('countries');
    countriesContainer.innerHTML = countriesHTML.join(' ');
}   




const displayInUi = country => { 
    return (`
            <div class='country'>
                <img class="country-image" src="${country.flags.png}">
                <h4>Country Name: ${country.name.common}</h4>
            </div>
    `
    )
}

loadData(URL);