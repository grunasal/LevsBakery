import { chromium } from '@playwright/test';
const browser=await chromium.launch();
const results=[];
for (const [name,width,height] of [['desktop',1440,1000],['tablet',768,1024],['mobile',390,844]]) {
 const page=await browser.newPage({viewport:{width,height}}); const errors=[];
 page.on('pageerror', e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:5173/',{waitUntil:'networkidle'});
 await page.evaluate(async()=>{await document.fonts.ready;for(const img of document.images){img.loading='eager';}await Promise.all(Array.from(document.images).map(i=>i.decode().catch(()=>{})));});
 const audit=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth,brokenImages:Array.from(document.images).filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src),invalidAnchors:Array.from(document.querySelectorAll('a[href^="#"]')).map(a=>a.getAttribute('href')).filter(h=>h!=='#'&&!document.querySelector(h)),phones:Array.from(document.querySelectorAll('a[href^="tel:"]')).map(a=>a.getAttribute('href')),links:[...new Set(Array.from(document.querySelectorAll('a')).map(a=>a.href))]}));
 await page.screenshot({path:`qa/${name}.png`,fullPage:true});
 if(name==='mobile'){await page.getByRole('button',{name:'Open menu',exact:true}).click();await page.getByRole('navigation',{name:'Main navigation'}).getByRole('link',{name:'Our Story',exact:true}).click();if(await page.getByRole('button',{name:'Close menu',exact:true}).count())errors.push('Mobile menu did not close');}
 await page.locator('.gallery-item').first().click();await page.locator('dialog').waitFor({state:'visible'});await page.keyboard.press('ArrowRight');await page.keyboard.press('Escape');if(await page.locator('dialog').isVisible())errors.push('Lightbox did not close');
 results.push({name,...audit,errors});await page.close();
}
console.log(JSON.stringify(results,null,2));await browser.close();
