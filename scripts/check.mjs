import {readFile,access} from 'node:fs/promises';
const paths=['index.html','malen-gipsen/index.html','tapezieren/index.html','spritzwerk/index.html','nachhaltigkeit/index.html','leistungen/index.html','kontakt/index.html','impressum/index.html','datenschutz/index.html','404.html'];
let checked=0;
for(const path of paths){
 const html=await readFile(path,'utf8');
 for(const [name,ok] of [['one H1',(html.match(/<h1[ >]/g)||[]).length===1],['title',/<title>.+<\/title>/.test(html)],['description',html.includes('name="description"')],['German language',html.includes('lang="de-CH"')]])if(!ok)throw Error(`${path}: ${name}`);
 for(const match of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)){
 const target=match[1].split('#')[0];if(!target)continue;
 await access('.'+(target.endsWith('/')?target+'index.html':target));checked++;
 }
 const schema=html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s);JSON.parse(schema[1]);
}
console.log(`${paths.length} pages checked; ${checked} local links/assets exist; metadata and JSON-LD valid.`);
