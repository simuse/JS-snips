#JS-snips

A collection of vanilla-Javascript utility functions, no dependencies.  
Functions were collected accross the web or created by myself.  

##Table of contents

### Array functions
- **contains** : *checks if an array contains a specific item*  
```
contains([1,2,3,4], 3);
// returns true
```

- **grep** : *performs replacement to all elements in the array that satisfy a filter ; affects the original array*  
``` 
var reg = new RegExp(/[aeiou]/ig);
grep(['banana', 'tomato', 'orange'], reg, '');
// returns ['bnn', 'tmt', 'rng']
```

- **highest** : *returns the highest value of the array*  
```
highest([1, 2, 3, 4, 5]);
// returns 5
```

- **lowest** : *returns the lowest value of the array*  
```
highest([1, 2, 3, 4, 5]);
// returns 1
```

- **removeItem** : *removes the specified value from the array ; affects the original array*  
```
removeItem([1, 2, 3, 4, 5], 4);
// returns [1, 2, 3, 5]
```

- **shuffle** : *shuffles items in the array ; affects the original array*  
```
shuffle([1, 2, 3, 4, 5]);
// returns something like [2, 4, 3, 5, 1]
```

- **unique** : *returns a new array where all duplicates have been removed*  
```
unique([1, 1, 4, 5, 2, 3, 2, 4, 5]);
// returns [1, 4, 5, 2, 3]
```





### String functions
- **capitalise** : *capitalises the first letter of a string*
```
capitalise('word');
// returns 'Word'
```

- **escapeHTML** : *escapes html tags from a string*
```
escapeHTML('<script>alert("Escape")</script>');
// returns '&lt;script&gt;alert("Escape")&lt;/script&gt;'
```

- **excerpt** : *returns a truncated string with a defined number of words ended by an ellipsis*
```
excerpt('Souvent, pour s'amuser, les hommes d'équipage prennent des albatros, vastes oiseaux des mers', 5);
// returns 'Souvent, pour s'amuser, les hommes…'
```

- **isEmail** : *checks if the string is a valid email*
```
isEmail('example@email.com');
// returns true
```

- **isURL** : *checks if the string is a valid URL*
```
isURL('www.github.com');
// returns true
```

- **prefixURL** : *adds the 'http://' prefix to a URL if it's not there*
```
prefixURL('www.github.com');
// returns 'http://www.github.com'
```

- **trim** : *removes white space at beginning and end of a string*
```
trim('     white space      ');
// returns 'white space'
```

- **truncate** : *truncates a string to a given length*
```
truncate('www.github.com', 7);
// returns 'www.git'
```

- **urlify** : *wraps urls in a string with 'a' tags*
```
urlify('www.github.com is web-based hosting service for software development projects');
// returns '<a href="www.github.com">www.github.com</a> is web-based hosting service for software development projects'
```





### DOM functions
- **addClass** : *add a class to to a DOM element*
```
addClass(el, 'newClass');
```

- **getText** : *returns the text content of a DOM element*
```
getText(el);
```

- **hasClass** : *checks if a DOM element has a specific class*
```
hasClass(el, 'class');
```

- **removeChildren** : *removes all children of a DOM element*
```
removeChildren(el);
```

- **removeClass** : *removes a specific class from a DOM element*
```
removeClass(el, 'class');
```





### Various functions

- **formatDate** : *formats a Javascript timestamp to a more readable format*  
```
formatDate(1372450892589);
returns something like 22:21 Fri, 28 Jun 2013
```

- **getScrollTop** : *returns the scroll position of the window*  
```
getScrollTop();
returns an integer
```

- **getWindowSize** : *returns an array containing the sizes of the window*  
```
getWindowSize();
returns something like [1280, 720]
```

- **randomRGBColor** : *returns a random RGB color*  
```
randomRGBColor();
returns something like rgb(125,242,100)
```





### Cookie Functions

- **createCookie** : *save a cookie*  
```
createCookie(name, value, days);
```

- **readCookie** : *returns the value of a cookie or false if the cookie is not found*  
```
readCookie(name);
```

- **eraseCookie** : *delete a cookie*  
```
eraseCookie(name);
```