# Scrapy.js
A Web Scraping library for JavaScript built using BeautifulSoup4.

# Overview of this library
First import the library using the script tag and then proceed to call the functions 

```js
<script src="https://sijey-praveen.github.io/scrapy.js/lib/scrapy.js"></script>
```

### A common JavaScript syntax for using the Scrapy object looks like this:

```js
var test = new Scrapy(url="https://example.com/", features="html.parser").findElement("*", attrs="*", get="*", callback=func())
```

# Get Basic

```js
new Scrapy() //creates an Scrapy object.
```

The `Scrapy()` object needs 2 necessary arguments to further 
next step.
 
- **url** > The source url.

- **features** > This may be the name of a specific parser ("lxml", "lxml-xml", "html.parser"). 

```js
new Scrapy(url="https://example.com/", features="html.parser")
```
## findElement()

- The `findElement()` method is used to scrap the specific element from the given source url.

- The `findElement()` method needs 3 necessary & 1 optional arguments to execute the program.

```js
.findElement("div", attrs="class=hello", get="text", callback=(data)=> console.log(data))
```

**element** > the element you need to scrap.

**attrs** > you can specify element class and id or tags, if you need to specify class and id at the same time use `;` to split it `attrs="class=hello;id=hello"` (optional).

**get** > the element value you need to return.

**callback** > A callback function is executed after the current effect is finished.


# Notice
😜 You can use python `print()` method to log stuffs in console once you imported Scrapy.js in your html.

# Example:
## Scraping a word meaning from https://www.dictionary.com/

```html
<!DOCTYPE html>
<meta charset="utf-8">
<html>
    <head>
        <script src="https://sijey-praveen.github.io/scrapy.js/lib/scrapy.js"></script>
    </head>
    <body>
        <script>
            var url = "https://www.dictionary.com/browse/hello"
            var meaning = new Scrapy(url=url, features="html.parser").findElement("div", attrs="class=css-10ul8x e1q3nk1v2", get="text", callback=(data)=> print(data))
        </script>                
    </body>
</html>
```

## Console Output:

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/b876d29bqe1og3ccbolv.png)
