const URL = 'https://restcountries.com/v3.1/all';

const loadData = url =>{
    fetch(url)
    .then(response => response.json())
    .then(data => displayData(data))
}

const displayData = countries => {
    // console.l0og(countries);
    // const countriesHTML = countries.map( country => country.name.common )
    const countriesHTML = countries.map( country => displayInUi(country) )
    // console.log(countriesHTML);
    let countriesContainer = document.getElementById('countries');
    countriesContainer.innerHTML = countriesHTML.join(' ');
}   


// option Three
const displayInUi = ({name, flags}) => { 
    console.log(flags);
    return (`
            <div class='country'>
                <img class="country-image" src="${flags.png}">
                <h4>Country Name: ${name.common}</h4>
            </div>
    `
    )
}



// // option Two
// const displayInUi = country => { 
//     const {name, flags} = country;
//     // console.log(name, flags);
//     return (`
//             <div class='country'>
//                 <img class="country-image" src="${flags.png}">
//                 <h4>Country Name: ${name.common}</h4>
//             </div>
//     `
//     )
// }



// option one (original)
// const displayInUi = country => { 
//     return (`
//             <div class='country'>
//                 <img class="country-image" src="${country.flags.png}">
//                 <h4>Country Name: ${country.name.common}</h4>
//             </div>
//     `
//     )
// }

loadData(URL);