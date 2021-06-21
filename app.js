const express = require('express'),
    path = require('path');
    
const app = express();
const views = path.join(__dirname, 'views');
app.set('port', 3000);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(views, "index.html"))
})

app.listen(app.get('port'), (req, res) => {
    console.log(`Servidor funcionando en http://127.0.0.1:${app.get('port')}`);
})