document.write(`<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" type="text/javascript"></script>`)

function print(chars) {
    console.log(chars)
}
 
class Scrapy {
    
    constructor(url, features="html.parser") {
        this.url = url
        this.features = features
        this._return = null
        this.element = null
        this.attrs = null
    }

    findElement(element, attrs="None", get, callback=Function) {

        var options = {
            "url" : this.url,
            "find" : element,
            "options" : attrs,
            "get" : get,
            "features" : this.features
        }

        $.post("https://api.sijey.repl.co/beautifulsoup4", options,
            function(data) {
                callback(data)
            }
        )
    }

}
 