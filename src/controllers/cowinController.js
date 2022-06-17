let axios = require('axios');
const { text } = require('body-parser');


let getdistrictsession = async function (req, res) {
  try {
    let district = req.query.district_id
    let date = req.query.date
    console.log(`query params are: ${district} ${date}`)
    var options = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`
    }
    let result = await axios(options)
    console.log(result.data)
    res.status(200).send({ msg: result.data })
  }
  catch (err) {
    console.log(err)
    res.status(500).send({ msg: err.message })
  }
}

let getwether = async function (req, res) {
  try {
    var options = {
      method: "get",
      url: ` http://api.openweathermap.org/data/2.5/weather?q=London&appid=831660eb9a8a3daf35b6b26e9a3e6e60`
    }
    let result = await axios(options)
    res.status(200).send({ msg: result.data })
  }
  catch (err) {
    console.log(err)
    res.status(500).send({ msg: err.message })
  }
}

let getSortedCity = async function (req, res) {
  try {

    let city = [
      "Bengaluru",
      "Mumbai",
      "Delhi",
      "Kolkata",
      "Chennai",
      "London",
      "Moscow",
    ];
    let cityTemp = [];
    for (let i = 0; i < city.length; i++) {
      let options = {
        method: "get",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city[i]}&appid=831660eb9a8a3daf35b6b26e9a3e6e60`,
      };
      let weather = await axios(options);
      let tempData = weather.data.main.temp

      cityTemp.push({ city: city[i], temp: tempData });
    }
    const result = cityTemp.sort((a, b) => a.temp - b.temp);

    res.status(200).send({ msg: result });
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
};

let memesHandaler = async function (req, res) {
  try {
    let memsid = req.query.memsid;
    let text0 = req.query.text0;
    let text1 = req.query.text1
let options = {
  method :"post",
  url : `https://api.imgflip.com/caption_image?template_id=${memsid}&text0=${text0}&text1=${text1}&username=chewie12345&password=meme@123`
}
let result = await axios(options)
res.send({data: result.data})
  }
  catch (err) {
    res.status(500).send({ msg: err.message });
  }
}


module.exports.getdistrictsession = getdistrictsession
module.exports.getwether = getwether
module.exports.getSortedCity = getSortedCity
module.exports.memesHandaler = memesHandaler