#### Currently under alpha testing

# scrapy.js
A Web Scraping library for JavaScript built using BeautifulSoup4.

```js
<script src="https://cdn.jsdelivr.net/gh/sijey-praveen/scrapy.js@Sijey/lib/scrapy.js"></script>
```

```js
function callback(object) {
    print(object)
}
var test = new Scrapy(url="https://stackoverflow.com/questions/22947905/flask-example-with-post", features="html.parser").findElement("link", attrs="rel=apple-touch-icon", get="href", callback=callback)

```
