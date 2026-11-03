import {cp,mkdir,rm} from 'node:fs/promises';
const files=['index.html','404.html','style.css','app.js','assets','malen-gipsen','tapezieren','spritzwerk','nachhaltigkeit','ueber-uns','kontakt','impressum','datenschutz','robots.txt','sitemap.xml'];
await rm('dist',{recursive:true,force:true});await mkdir('dist');
for(const file of files)await cp(file,`dist/${file}`,{recursive:true});
console.log('Statische Website in dist/ erstellt.');
