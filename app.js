const profileDataArgs = process.argv.slice(2, process.argv.length);
const fs = require('fs');
const [names, github] = profileDataArgs;
const generatePage = require('./src/page-template.js')



fs.writeFile('index.html', generatePage(names, github), err =>{
    if (err) throw err;

    console.log('Portfolio Complete! Check out index.html to see the output!')
})