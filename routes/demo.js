let fs = require('fs');
let path = require('path');
let config = require('../config');
let WebTorrent = require('webtorrent');

let filePath = path.resolve(config.root + '/public/img/logo.png');

fs.readFile(filePath, 'utf-8', function (err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
        let client = new WebTorrent();

        client.seed(data, (torrent) => {
            console.log(torrent.magnetURI)
        });
    }
});
