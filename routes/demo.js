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
        // console.log(length);
        // console.log(Date.now())
        // var iNow = -1;
        // function recursion () {
        //     iNow++;
        //     if (iNow > length) {
        //         console.log(Date.now());
        //         return false;
        //     } else {
        //         client.seed(file + files[iNow], (torrent) => {
        //             console.log('torrentId (info hash):', torrent.infoHash);
        //             console.log('torrentId (current iNow):', iNow);
        //             recursion();
        //         });
        //     }
        // }
        //
        // recursion();
        //
        for (var i = 0; i < length; i++) {
            (function (index) {
                client.seed(file + files[index], (torrent) => {
                    console.log('torrentId (info hash):', torrent.infoHash);
                    console.log('torrentId (current iNow):', index);
                });
            })(i);
        }
    }
})
