function getBy(selector) {
	if (!selector) { return;}
  var type = selector[0];
  debugger;
  var selector = selector.substring(1);
  switch (type) {
     case '.':
				return document.getElementsByClassName(selector)[0];
     case '#':
        return document.getElementById(selector);
     default:
        return document.querySelector(type + selector);
  }
}
