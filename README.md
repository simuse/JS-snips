#JS-snips

A collection of Javascript utility functions. 
The functions were collected accross the web or created by myself.  
Author: [Simon Vreux](www.simonvreux.be)

##Table of contents

####Array functions
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
// returns [1, 2, 3, 5];
```

- **shuffle** : *shuffles items in the array ; affects the original array*  
```
shuffle([1, 2, 3, 4, 5]);
// returns [2, 4, 3, 5, 1];
```

- **unique** : *returns a new array where all duplicates have been removed*  
```
unique([1, 1, 4, 5, 2, 3, 2, 4, 5]);
// returns [1, 4, 5, 2, 3];
```

####String functions
- escapeHTML
- excerpt
- isEmail
- isURL
- prefixURL
- trim
- truncate

####DOM functions
- addClass
- getText
- hasClass
- removeChildren
- removeClass

####Various functions
- randomRGBColor