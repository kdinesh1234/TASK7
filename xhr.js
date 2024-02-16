const xMLHTTPRequest = require('xhr2');
//create a connection object to xMLHTTPRequest

 const xhr = new xMLHTTPRequest();

 // open the connection
 xhr.open('GET', 'https://restcountries.com/v3.1/all');

 // get response on onload
 xhr.onload = function (){
      let response = JSON.parse(xhr.response);

    console.log(response);


    // get allthe countries with a population less than 2lakhs

    let filteredcountries =countries.filter(country => country.
        population <200000);

        console.log(filteredcountries.length, countries.length);


        filteredcountries.forEach(country=> {
            console.log(country.name.common);
        })

        //get all countries whose currencies are US Dollors USD

        console.log(countries.filter(country=> {
            let currencies;
            if (country.currencies){
                currencies = object.keys(country.currencies);
                return currencies.includes ('USD');
            }

        }))
 }
