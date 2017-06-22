const webshot = require("webshot");

function getScreenImgData(url, callback) {
  /*const options = {
    shotSize: {
      height: "screen",
      width: "screen"
    }
  };
  const renderStream = webshot(url, options);
  const buffer = [];

  renderStream.on("data", function(data) {
    buffer.push(data);
  });

  renderStream.on("end", function() {
    const raw = Buffer.concat(buffer);
    callback(raw.toString("base64"));
  });*/
}

function getScreenImg(id, url, callback) {
  /*const options = {
    shotSize: {
      height: "screen",
      width: "screen"
    }
  };
  const path = "../../assets/" + id + ".png";
  webshot(url, path, options, function(err) {
    if (err) {
      console.log(err);
    }
    callback(path);
  });*/
}

module.exports = {
  getScreenImgData,
  getScreenImg
};
