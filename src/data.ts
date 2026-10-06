export const business = {
 name: "Lev's Bakery of Tecumseh", email: 'levsbakeryoftecumseh@gmail.com', phone: '(517) 423-2948', tel: 'tel:5174232948',
 address: '124 E Chicago Blvd #1', city: 'Tecumseh, MI 49286',
 facebook: 'https://www.facebook.com/LevsBakeryofTecumseh',
 directions: 'https://www.google.com/maps/dir/?api=1&destination=124+E+Chicago+Blvd+%231+Tecumseh+MI+49286',
 logo: '/images/levs/Levs_new_logo.png',
 pretzelOffers: {
  saturday: 'Pretzels & donuts are 50% off from 3 p.m. to close on Saturdays.',
  frozen: 'Ask about our frozen pretzel special — $5 per dozen.',
 },
 hours: "Hours may vary — check Facebook for today's hours.",
};
export const photo = (name: string) => `/images/levs/${name}.webp`;
export const favorites = [
 {title:'Donuts',number:'01',image:'donut-box',alt:'A box of Lev’s assorted frosted, filled and sprinkled donuts',text:'Glazed, sugar-dusted, cream-filled, fruit-filled. Meet your morning favorites.',items:'Glazed raised · Filled donuts · Maple Long Johns · Sprinkled favorites'},
 {title:'Cookies',number:'02',image:'decorated-cookies',alt:'Trays of colorful decorated cookies at Lev’s',text:'A little nostalgia, a little icing. Something sweet for every season.',items:'Iced sugar cookies · Snickerdoodles · Oatmeal chocolate chip'},
 {title:'Breads & rolls',number:'03',image:'breakfast-pastries',alt:'Breakfast pastries in Lev’s bakery display',text:'From the breakfast table to the dinner table, a reason to bring something home.',items:'Fresh breads · Dinner rolls · Breakfast rolls'},
 {title:'Pies & cakes',number:'04',image:'fruit-pie',alt:'A fruit pie from Lev’s with a slice removed',text:'For a family gathering, a celebration, or just because it’s a good day for pie.',items:'Fruit pies · Bakery cakes · Seasonal selections'},
];
export const gallery = [
 {image:'donut-case',alt:'Trays of sugar-dusted and iced donuts at Lev’s',caption:'The hardest part? Choosing.'},
 {image:'iced-long-johns',alt:'Rows of iced Long Johns at Lev’s',caption:'A longtime favorite.'},
 {image:'seasonal-cookies',alt:'Colorful seasonal decorated cookies from Lev’s',caption:'A little seasonal sweetness.'},
 {image:'donut-box',alt:'An assortment of donuts in a Lev’s bakery box',caption:'Good things come in bakery boxes.'},
 {image:'bakery-interior',alt:'The interior and glass display cases at Lev’s Bakery',caption:'Pull up to the bakery case.'},
 {image:'storefront',alt:'Lev’s Bakery storefront on East Chicago Boulevard',caption:'Right here on Chicago Boulevard.'},
 {image:'fruit-pie',alt:'Lev’s fruit pie with a slice removed',caption:'Bring a little sweetness to the table.'},
 {image:'decorated-cookies',alt:'Trays of iced and decorated cookies at Lev’s Bakery',caption:'Something sweet for every season.'},
 {image:'breakfast-pastries',alt:'Golden breakfast pastries in the Lev’s bakery case',caption:'A closer look at the breakfast case.'},
 {image:'facebook-profile-donuts',alt:'Three assorted donuts pictured on Lev’s official Facebook page',caption:'From Lev’s official Facebook page.'},
 {image:'heart-shaped-sprinkle-donuts',alt:'Heart-shaped donuts covered in orange, yellow, brown and white sprinkles',caption:'A little extra heart. A lot of sprinkles.'},
 {image:'full-bakery-case',alt:'Lev’s bakery display filled with glazed, chocolate-frosted, sprinkled and filled donuts',caption:'A case full of favorites.'},
];
export const sources = {
 tourism:'https://www.visitlenawee.com/listing/levs-bakery-shop/5329/',
 history:'https://www.yahoo.com/news/owners-lev-son-bakery-tecumseh-080018300.html',
 reviews:'https://www.restaurantji.com/mi/tecumseh/levs-bakery-shop-/',
 photos:'https://www.restaurantji.com/mi/tecumseh/levs-bakery-shop-/gallery/',
};
