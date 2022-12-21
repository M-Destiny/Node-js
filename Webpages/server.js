const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
    var pageName = './404.html'
    switch (req.url) {
        case '/':
            pageName = './home.html'
            break;
        case '/aboutus':
            pageName = './about.html'
            break;
        case '/contactus':
            pageName = './contact.html'
            break;
        default: pageName = pageName;
    }
    fs.readFile(pageName, 'utf-8', (err, data) => {
        if (err) throw err;
        res.write(data);
        res.end();
    })
}).listen(6969, () => {
    console.log('Server is running');
});
