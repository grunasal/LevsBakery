# Lev’s Bakery of Tecumseh

A custom informational React + TypeScript + Vite demo, built in this workspace. No checkout, customer accounts, online ordering, invented prices or email addresses, delivery claims, invented reviews, or unverified social accounts.

## Run

```sh
npm install
npm run dev
npm run build
npm run preview
```

Business information, phone links, Facebook, directions, menu categories and image references are centralized in `src/data.ts`. Components are in `src/main.tsx`; responsive styles are in `src/styles.css`. Production files are emitted to `dist/`.

## Design and behavior

The current design explores a circa-1955 neighborhood bakery: cobalt blue drawn from the supplied logo, buttercream paper tones, Lobster script headlines, Oswald sign lettering and Libre Franklin body text. Fonts are served locally as WOFF2, with SIL Open Font License files in `public/fonts/`. An editorial photo hero, a single bakery menu, a Saturday pretzel feature, the original gallery and family story, a concise public-review note, and an easy visit section keep the presentation focused. Sticky navigation, accessible mobile menu, native modal gallery with arrow keys and Escape, reduced-motion support, responsive WebP images, mobile call/directions/Facebook bar, local SEO metadata and Bakery JSON-LD.

The user-supplied `public/images/levs/Levs_new_logo.png` is used unchanged in the navigation and footer. Its path is centralized in `src/data.ts`. The supplied logo also appears in the history section and as the browser favicon.

## Sources and authenticity

Researched October 6, 2026. Public sources are evidence, not a guarantee of current daily availability.

- Official Facebook, supplied by the client: https://www.facebook.com/LevsBakeryofTecumseh
  - Public HTML and profile image were accessible; current official hours and the photo feed were not confidently readable. Use Facebook for current hours and updates.
- Visit Lenawee: https://www.visitlenawee.com/listing/levs-bakery-shop/5329/
  - Confirms address, phone, cakes, pies, breads, dinner rolls, cookies, breakfast rolls, Saturday morning soft German pretzels and encouragement to order ahead.
- The Daily Telegram’s September 1, 2022 report, syndicated on Yahoo: https://www.yahoo.com/news/owners-lev-son-bakery-tecumseh-080018300.html
  - Corroborates historical context supplied in the brief. The website links to the verified syndicated URL rather than guessing the original newspaper permalink.
- Restaurantji: https://www.restaurantji.com/mi/tecumseh/levs-bakery-shop-/
  - Public reviews support recent mentions of maple Long Johns, cherry-filled donuts, sprinkles, snickerdoodles and oatmeal chocolate chip cookies.
- Actual Lev’s photo gallery: https://www.restaurantji.com/mi/tecumseh/levs-bakery-shop-/gallery/
  - Local files include donut trays, a mixed donut box, Long Johns, decorated cookies, breakfast pastries, fruit pie, storefront, interior, archival bakery team and original branded bakery bag.
- Tripadvisor reviews: https://www.tripadvisor.com/Restaurant_Review-g42748-d4984239-Reviews-or60-Lev_s_Bakery_Shop-Tecumseh_Michigan.html
- Tripadvisor reviews: https://www.tripadvisor.com/Restaurant_Review-g42748-d4984239-Reviews-or30-Lev_s_Bakery_Shop-Tecumseh_Michigan.html
  - Review section uses clearly labeled summaries, with no fabricated names, quotes or displayed numerical ratings.
- Historical slogan corroboration: https://tecumsehlibrary.org/wp-content/uploads/1993.pdf

Downloaded gallery imagery is stored in `public/images/levs/`. Exact original image URLs and provenance are recorded in `public/images/levs/asset-sources.json`. Food photographs are genuine public Lev’s listing photographs; none is generated or generic stock. Nearby-business recommendations and unrelated images found elsewhere in directory HTML were inspected and excluded.

Public accessibility does not establish commercial reuse permission. This is a local demo; original photographers retain their rights. Confirm reuse permission or replace with business-provided originals before public commercial launch.

## Information and assets still needed

- Confirmed current official weekly hours. Conflicting directory hours were deliberately omitted.
- An authentic, authorized German pretzel photograph. The Saturday feature currently uses a clearly labeled vector illustration, not a product photograph.
- Business-approved original photography and photo reuse permissions for a public launch.
- Final production domain. Set an absolute Open Graph image URL and canonical URL for that domain before launch; current social-image path is deployment-relative.
- No confidently verified official Instagram account was found; none is included.
- Specific daily products, decorated-cake services and availability should be confirmed with the bakery. Category copy does not promise daily availability.

## QA

`qa/check.mjs` checks desktop (1440px), tablet (768px) and mobile (390px), saves full-page screenshots and exercises menu, gallery keyboard navigation and Escape dismissal. Run it with the dev server running:

```sh
node qa/check.mjs
```

`qa/results.json` records no missing images, invalid section anchors, browser errors or horizontal page overflow at those sizes. Additional viewport checks covered 320, 375, 560 and 1024px. Production build passes with no warnings. All phone targets use `tel:5174232948`. Directions use Google Maps’ supported directions URL with the complete encoded address. External targets were researched and checked; Tripadvisor and some publisher endpoints restrict automated requests, so those restrictions are not represented as verified unrestricted browser access.

## Compact gallery update

The gallery now shows ten smaller tiles, including additional fruit pie, decorated cookies and breakfast pastries from the authentic Lev’s photos already stored in the project. The official Facebook public profile donut photo is now displayed too, with a local responsive WebP copy. Facebook’s photo feed did not expose additional public photographs in this session; no third-party photo is represented as sourced from Facebook. Additional Facebook photos can be added to `public/images/levs/` and `src/data.ts` when the original files are supplied. All tiles retain the full-size lightbox, keyboard navigation, and the requested clockwise 270-degree rotation of the bakery-box photo.

The gallery now contains twelve tiles. The user-supplied heart-shaped sprinkle-donut photo and donut display-case photo were added; the other four photos in the same request (interior cookie case, fruit pie, iced Long Johns, and iced cookie tray) were already present and retained without duplicate tiles.

## Saturday offers

The client supplied the current Saturday offer: pretzels and donuts are 50% off from 3 p.m. to close. The frozen-pretzel offer is transcribed from the supplied `public/images/levs/pretzel_special.jpeg`: ask about the $5-per-dozen frozen pretzel special. Both are centralized in `business.pretzelOffers` in `src/data.ts`. No exact closing time is implied.

The client-supplied contact email `levsbakeryoftecumseh@gmail.com` is centralized in `src/data.ts`, shown as a mailto link in Visit and the footer, and included in Bakery structured data.

Yelp review links are included beside the customer-review information and in the footer, paired with the red Yelp logo. The business URL was confirmed through the Roadtrippers listing: https://maps.roadtrippers.com/us/tecumseh-mi/food-drink/levs-bakery-of-tecumseh . Yelp icon source: https://cdn.jsdelivr.net/npm/simple-icons@15.0.0/icons/yelp.svg . The client subsequently supplied visit details: Apple Pay, contactless payments, wheelchair accessibility, street parking and credit cards. These are displayed with adjacent matching icons in Visit. The pet-friendly item is omitted as requested.

Apple Pay logo source: https://cdn.jsdelivr.net/npm/simple-icons@15.0.0/icons/applepay.svg . The other visit icons use the existing Lucide icon library.
