const request = require('request')
const breed = process.argv.slice(2);

const breedFetcher = (breed, callback) => {
  let url = `https://api.thecatapi.com/v/breeds/search?q=${breed}`
  request (url, (error, response, body) => {
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    if (!error === 200) {// Print the error if one occurred
      callback(`error occured ${data}`);
    }
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      console.log('breed name not found')
    }
    console.log('body:', typeof data);
    console.log(data);
  });
}
breedFetcher(breed);


module.exports = { breedFetcher };