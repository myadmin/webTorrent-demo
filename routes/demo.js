var WebTorrent = require('../config/webTorrent');
var fs = require('fs');
let filePath = process.cwd() + '/public/img/logo.png';
let client = new WebTorrent();
require('events').EventEmitter.defaultMaxListeners = 1000;

// client.seed(filePath, (torrent) => {
//     console.log('torrentId (info hash):', torrent.infoHash)
//     console.log('torrentId (magnet link):', torrent.magnetURI)
// });


// '/Users/zhouwei/Downloads/books'
let file = process.cwd() + '/file/';
fs.readdir(file, (err, files) => {
    if (err) {
        console.error(err);
    } else {
        var length = files.length;
        console.log(length);
        console.log(Date.now())
        var iNow = 0;
        function recursion () {
            iNow++;
            if (iNow > 60) {
                console.log(Date.now());
                // process.exit();
            } else {
                client.seed(file + files[iNow], (torrent) => {
                    console.log('torrentId (info hash):', torrent.infoHash);
                    console.log('torrentId (current iNow):', iNow);
                    recursion();
                    // fs.writeFile(process.cwd() + '/file/' + iNow + '.txt', torrent.infoHash, (err) => {
                    //     recursion();
                    // });
                });

                client.on('error', function (err) {
                    if (err) console.error(err);
                })
            }
        }

        recursion();
    }
})
