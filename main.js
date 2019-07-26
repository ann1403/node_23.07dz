const path = require('path');
const fs = require('fs');
let peoples = {
    people1: [" name: Luke Skywalker", "height: 172", "mass: 77", "hair_color: blond",
        "homeworld: localhost:3000/people/1/"
    ],
    people2: [
        "name: C-3PO",
        "height: 167",
        "mass: 75",
        "hair_color: n/a",
        "homeworld: localhost:3000/people/2/"
    ],
    people3: [
        "name: R2-D2",
        "height: 96",
        "mass: 32",
        "hair_color: n/a",
        "homeworld: localhost:3000/people/3/"
    ],
    people4: [
        "name: Darth Vader ",
        "height: 202",
        "mass: 136",
        "hair_color: none ",
        "homeworld: localhost:3000/people/4/"
    ],
    people5: [
        "name: Leia Organa",
        " height: 150",
        " mass: 49",
        "hair_color: brown",
        "homeworld: localhost:3000/people/5/"
    ],
    people6: [
        "name: Owen Lars",
        "height: 178",
        "mass: 120",
        "hair_color: brown, grey",
        "homeworld: localhost:3000/people/6/"
    ],
    people7: [
        "name: Beru Whitesun lars",
        "height: 165",
        "mass: 75",
        "hair_color: brown",
        "homeworld: localhost:3000/people/7/"
    ],
    people8: ["name: R5-D4",
        "height: 97",
        "mass: 32",
        " hair_color: n/a",
        "homeworld: localhost:3000/people/8/"
    ],
    people9: [
        "name: Biggs Darklighter",
        "height: 183",
        "mass: 84",
        "hair_color: black",
        "homeworld: localhost:3000/people/9/"
    ]
};
// let peoples = [people1, people2, people3, people4, people5, people6, people7, people8, people9];
// let s_peopl = String(peoples);
// JSON.stringify(peoples)
const http = require('http');
let server = http.createServer(function(req, res) {
    fs.readFile(__dirname + '/people/', 'utf-8', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(JSON.stringify(peoples));
    });
    fs.readFile(__dirname + '/people/' + '1', 'utf-8', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(JSON.stringify(peoples.people1));
    });
    fs.readFile(__dirname + '/people/' + '2', 'utf-8', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(JSON.stringify(peoples.people2));
    });
    fs.readFile(__dirname + '/people/' + '3', 'utf-8', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(JSON.stringify(peoples.people3));
    })
});
server.listen(3000, '127.0.0.1')
    // fs.readFile(__dirname + '/public/' + req.url, 'utf-8', (err, data) => {
    //     res.end(data)

// })

console.log("Ми відслідковуємо Port 3000")


// fs.readFile(path.join(__dirname, 'text1.txt'), 'utf-8', function(err, data) {
//     if (err) throw err
//         // console.log(data);
//         //записуємо в новий файл(writeFile) все те що зчитали з іншого(readFile)
//     fs.writeFile(path.join(__dirname, 'index.txt'), data, (err) => {
//         if (err) throw err;
//         console.log('Good');
//     });
// });

// let readsSt = fs.createReadStream(shlah, 'utf-8'); //розбиває текст на різні частини аби зменшити нагрузку
// readsSt.on('data', (data) => {
//         console.log('!!!!!!!!!!!!!!')
//         console.log(data)
//     })
//     // on - слушатель собитий, коли починаєм читати 
// readsSt.on('open', () => {
//     console.log('START READ')
// })