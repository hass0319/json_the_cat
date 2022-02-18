const request = require('request')
const breedName = process.argv.slice(2)[0];

const fetchBreedDescription = (breedName, callback) => {
  let url = `https://api.thecatapi.com/v/breeds/search?q=siberian`//${breedName}
  request (url, (error, response, body) => {
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    const data = JSON.parse(body);
    //console.log('body:', typeof data);
    if (error) {
      if (callback) callback(`Failed to request details: ${error}`,null);
    }
    if (!error === 200) {// Print the error if one occurred
      if (callback) callback(`error occured ${data}`);
    }
    const breed = data[0];
    if (!breed) {
      if (callback) callback(`failed to find breed ${breedName}`, null)
    }
    return data;
    //console.log(null, data);
  });
}
fetchBreedDescription(breedName);


module.exports = { fetchBreedDescription };