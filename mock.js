/* jshint node: true, lastsemic: true, -W033*/
var fs = require('fs'),
  urlParse = require('url').parse,
  path = require('path');


var mock = {}
mock.used = {};
mock.window = new function() {
  var window = {}
  window.document = {}
  window.document.childNodes = []
  window.document.createElement = function(tag) {
    return {
      style: {},
      childNodes: [],
      nodeName: tag.toUpperCase(),
      appendChild: window.document.appendChild,
      removeChild: window.document.removeChild,
      replaceChild: window.document.replaceChild,
      insertBefore: function(node, reference) {
        node.parentNode = this
        var referenceIndex = this.childNodes.indexOf(reference)
        if (referenceIndex < 0) this.childNodes.push(node)
        else {
          var index = this.childNodes.indexOf(node)
          this.childNodes.splice(referenceIndex, index < 0 ? 0 : 1, node)
        }
      },
      insertAdjacentHTML: function(position, html) {

        //todo: accept markup
        if (position == "beforebegin") {
          this.parentNode.insertBefore(window.document.createTextNode(html), this)
        }
        else if (position == "beforeend") {
          this.appendChild(window.document.createTextNode(html))
        }
      },
      setAttribute: function(name, value) {
        this[name] = value.toString()
        if (name == 'href') {
          var url = urlParse(value);
          this.pathname = url.pathname;
          if (url.search) this.search = url.search;
        }
      },
      setAttributeNS: function(namespace, name, value) {
        this.namespaceURI = namespace
        this[name] = value.toString()
      },
      getAttribute: function(name, value) {
        return this[name]
      },
      addEventListener: window.document.addEventListener,
      removeEventListener: window.document.removeEventListener
    }
  }
  window.document.createElementNS = function(namespace, tag) {
    var element = window.document.createElement(tag)
    element.namespaceURI = namespace
    return element
  }
  window.document.createTextNode = function(text) {
    return {nodeValue: text.toString()}
  }
  window.document.documentElement = window.document.createElement("html")
  window.document.replaceChild = function(newChild, oldChild) {
    var index = this.childNodes.indexOf(oldChild)
    if (index > -1) this.childNodes.splice(index, 1, newChild)
    else this.childNodes.push(newChild)
    newChild.parentNode = this
    oldChild.parentNode = null
  }
  window.document.appendChild = function(child) {
    var index = this.childNodes.indexOf(child)
    if (index > -1) this.childNodes.splice(index, 1)
    this.childNodes.push(child)
    child.parentNode = this
  }
  window.document.removeChild = function(child) {
    var index = this.childNodes.indexOf(child)
    this.childNodes.splice(index, 1)
    child.parentNode = null
  }
  window.document.addEventListener = function () {
  };
  window.document.removeEventListener = function () {
  };
  window.performance = {
    now: function() {
      var hrt = process.hrtime();
      return hrt[0] * 1000 + hrt[1] / 1e6;
    }
  }
  window.cancelAnimationFrame = function() {}
  window.requestAnimationFrame = function(callback) {
    process.nextTick(callback);
  }
  window.XMLHttpRequest = new function() {
    var request = function() {
      this.$headers = {}
      this.setRequestHeader = function(key, value) {
        this.$headers[key] = value
      }

      this.open = function(method, url) {
        this.method = method
        this.url = url
      }
      this.send = function() {
        var xhr = this;
        var r = '';
        xhr.readyState = 4
        xhr.status = 200

        request.$instances.push(this);
        fs.createReadStream(path.resolve(window.location.pathname, this.url), {encoding:'utf8'}).on('data', function (chunk) {
          r += chunk;
        }).on('end', function () {
          xhr.responseText = r;
          xhr.onreadystatechange();
//          xhr.onload({
//            type: 'load',
//            target: xhr
//          });
        });
      }
    }
    request.$instances = []
    return request
  }
  window.location = {search: "?/", pathname: "/", hash: ""};
  window.history = {};
  window.history.pushState = function(data, title, url) {
    window.location.pathname = window.location.search = window.location.hash = url
  };
  window.history.replaceState = function(data, title, url) {
    window.location.pathname = window.location.search = window.location.hash = url
  };
  var _body = window.document.createElement('body');
  window.document.appendChild(_body);
  window.document.body = _body;

  return window
}
module.exports = mock;
