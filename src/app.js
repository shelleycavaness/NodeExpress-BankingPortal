const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();
const PORT = 3000;
const accountData = `src/json/accounts.json`


app.set(`views`, path.join(__dirname, `views`));
app.set(`view engine`, `ejs`);

app.use(express.static(path.join(__dirname,'public')));


//app.get('/', (req, res) => res.send('heloooooo') )
fs.readFileSync(accountData, 'utf8')
app.get('/', (req, res) => res.render('index', {title: 'Index'}))

//const accounts = json.parse(accountData) 

app.listen(PORT, () => console.log(`PS Project Running on port 3000`))