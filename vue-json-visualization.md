Kuidas Vue’s json-failist infot lugeda ja andmeid HTML-is kuvada?

Töötab Vue CLI 4.3.1-ga.

```javascript
// @ is an alias to /src
import json from ‘@/filePath/fileName.json’

export default {
    name: ‘...’
    data() {
        return {
            myJson: json  
        }
    }
}
```

Kõigepealt tuleb siis importida oma json-fail ning “anda sellele nimi”, hetkel andsime talle nimeks myJson.
Ütleme, et meie json-fail on umbes selline:

```json
[
 {
  "name": "Product1",
  "price": 20,
  "description": [“Weight: 2”, “Brand: X”, “Color: red”],
  "image": "image1.png"
 },
 {
  "name": "Product2",
  "price": 45,
  "description": [“Weight: 4”, “Brand: Y”, “Color: yellow”],
  "image": "image2.png"
 },
 {
  "name": "Product3",
  "price": 20,
  "description": [“Weight: 2”, “Brand: X”, “Color: red”],
  "image": "image3.png"
 },
 {
  "name": "Product4",
  "price": 45,
  "description": [“Weight: 4”, “Brand: Y”, “Color: yellow”],
  "image": "image4.png"
 }

]
```

Ja me tahame kõik need json failis olevad produktid kuvada järjest kujul:

```
Name: Product1
Price: 20€

Weight: 2
Brand: X
Color: red
[PILT]

...
```

Siis seda saab teha kasutades `v-for`-i, mis on tsükli osa - käib läbi json array elemendid:
```html
<div v-for=”product in myJson” :key=”product.id”>
    Name:
    <a> {{product.name}}</a><br>
    Price:
    <a> {{product.price}}€</a><br><br>
    <div v-for=”detail in product.description” :key=”detail.id”>
        {{detail}}<br>
    </div>
    <img v-bind:src=”product.image”>
</div>
```

Juhul, kui tahta, et json-failis oleks tahetud andmed kohe listis:

```json
{
 "products": [
 {
  "name": "Product1",
  "price": 20,
  "description": [“Weight: 2”, “Brand: X”, “Color: red”],
  "image": "image1.png"
 },
 {
  "name": "Product2",
  "price": 45,
  "description": [“Weight: 4”, “Brand: Y”, “Color: yellow”],
  "image": "image2.png"
 },
 {
  "name": "Product3",
  "price": 20,
  "description": [“Weight: 2”, “Brand: X”, “Color: red”],
  "image": "image3.png"
 },
 {
  "name": "Product4",
  "price": 45,
  "description": [“Weight: 4”, “Brand: Y”, “Color: yellow”],
  "image": "image4.png"
 }
]
}
```
… et saaks näiteks järjekorranumbri/indeksiga midagi teha (kuhugi edasi anda vm), siis käiks see nii, et skripti osa jääb samaks ning HTML-i osa oleks selline:

```html
<div v-for=”i in myJson.products.length” :key=”i”>
    Name:
    <a> {{myJson.products[i - 1].name}}</a><br>
    Price:
    <a> {{myJson.products[i - 1].price}}€</a><br><br>
    <div v-for=”detail in myJson.products[i - 1].description” :key=”detail.id”>
        {{detail}}<br>
    </div>
    <img v-bind:src=”myJson.products[i - 1].image”>
</div>
```

Indeksiks on `[i - 1]`, sest Vue’s algab itereerimine 1-st, mitte 0-st (nagu tavaliselt).
