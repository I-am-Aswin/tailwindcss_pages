const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use( express.static('public') );

app.get("/", async (_, res) => {
    let html = "<center><h2>HTML Files</h2><br>";
    fs.readdir( path.join(__dirname, "./src/"), (err, files) => {
        if( err ) throw err;
        files.forEach( file => {
            html = html + `<a href="/${file}">${file}</a><br>`
        })
        html += "</center>";
        res.send(html);
    });
})

fs.readdir( "./src/", ( err, files) => {
    if( err ) console.log(err);

    for( let file of files ) {
        app.get(`/${file}`, ( _, res ) => {
            res.sendFile(path.join( __dirname, `/src/${file}`));
        });
    }
})


app.listen(3001, () => { console.log("Server Started listening on Port 3001")});
