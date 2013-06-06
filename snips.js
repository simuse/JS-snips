/*=============================================================
* Table of contents
*

* ARRAY functions
* ---------------
* - contains
* - grep
* - highest
* - lowest
* - removeItem
* - shuffle
* - unique

* STRING functions
* ----------------
* - escapeHTML
* - excerpt
* - isEmail
* - isURL
* - trim
* - truncateStr

* DOM functions
* ----------------
* - addClass
* - getText
* - hasClass
* - removeChildren
* - removeClass

* VARIOUS functions
* -----------------
* - randomRGBColor

==============================================================*/


/*=============================================================
* Array functions
==============================================================*/

 /** 
 * Checks if the array contains specified item
 * @param {array} arr | The array to work on
 * @param {string} item | The item to look for
 * @return {boolean}
 */
function contains(arr, item) {
    var i = arr.length;
    while (i--) {
        if (arr[i] === item) {
            return true;
        }
    }
    return false;
}

/** 
 * Perform string replacement to all elements in the array
 * @param {array} arr | The array to work on
 * @param {regExp} regex | The pattern to match
 * @param {string} substr | The replacement string
 * @return {array}
 */
function grep(arr, regex, substr) {
	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i].replace(regex, substr);
	}
	return arr;
}

 /** 
 * Returns the highest value in the array
 * @param {array} arr | The array to work on
 * @return {integer}
 */
function highest(arr) {
	var h = arr[0];
	for (var i = 1; i < arr.length; i++) {
		h = arr[i] > h ? arr[i] : h;
	}
	return h;  
}

 /** 
 * Returns the lowest value in the array
 * @param {array} arr | The array to work on
 * @return {integer}
 */
function lowest(arr) {
	var l = arr[0];
	for (var i = 1; i < arr.length; i++) {
		l = arr[i] < l ? arr[i] : l;
	}
	return l;  
}

/** 
 * Removes specified item from array
 * @param {array} arr | The array to work on
 * @param {string} item | The item to remove
 * @return {boolean}
 */
function removeItem(arr, item) {
    var i = 0;
    while (i < arr.length) {
        if (arr[i] == item) {
            arr.splice(i, 1);
        } else {
            i++;
        }
    }
}

/** 
 * Shuffles items in an array
 * @param {array} arr | The array to work on
 * @return {array}
 */
function shuffle(arr){
    for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i, 10), x = arr[--i], arr[i] = arr[j], arr[j] = x);
    return arr;
}

 /** 
 * Removes all duplicates from an array 
 * @param {array} arr | The array to work on
 * @return {array}
 */
function unique(arr) {
    var newArr = [],
        found;
    for (var x=0 ; x < arr.length ; x++) {  
        found = undefined;
        for ( var y=0 ; y < newArr.length ; y++ ) {
            if ( arr[x] === newArr[y] ) {
				found = true;
				break;
            }
        }
        if (!found) newArr.push( arr[x] );
    }
	return newArr;
}

/*=============================================================
* String functions
==============================================================*/

 /** 
 * Strips HTML tags from a string
 * @param {string} str
 * @return {string}
 */
function escapeHTML(str) {
	return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r?\n/g, '<br/>');
}

 /** 
 * Returns a truncated string with a defined number of words ended by an ellipsis
 * @param {string} str | The string to work on
 * @param {integer} nwords | The max number of words
 * @return {string}
 */
function excerpt(str, nwords) {
	var words = str.split(' ');
	words.splice(nwords, words.length-1);
	return words.join(' ') + (words.length !== str.split(' ').length ? '&hellip;' : '');
}

 /** 
 * Checks if the string provided is a valid e-mail
 * @param {string} email
 * @return {boolean}
 */
function isEmail(email) {
    var regex = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return regex.test(email);
}

 /** 
 * Checks if the string provided is a valid URL
 * @param {string} url
 * @return {boolean}
 */
function isURL(url) {
	var regex = new RegExp (/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[.\!\/\\w]*))?)/);
	return regex.test(url);
}

 /** 
 * Removes white space at beginning and end of string
 * @param {string} str | The string to work on
 * @return {string}
 */
function trim(str){
	return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}

/** 
 * Truncate a string to a given length
 * @param {string} str | The string to work on
 * @param {integer} len | The max number of caraters
 * @return {string}
 */
function truncate(str, len) {
    if (str.length > len) {
        str = str.substring(0, len);
    }
    return str;
}

/*=============================================================
* DOM functions
==============================================================*/

/** 
 * Add the specified class to the node (/!\ requires the hasClass function)
 * @param {node} node | The node to work on
 * @param {string} className | The class to add
 */
function addClass(node, className) {
    if (!hasClass(node, className)){
		node.className += " " + className;
    }
}

/** 
 * Get the text content of the specified node
 * @param {node} node | The node to work on
 * @return {string}
 */
function getText(node) {
    if (typeof node.textContent != "undefined") {
        return node.textContent;
    }
    return node.innerText;
}

/** 
 * Checks if node has the specified class
 * @param {node} node | The node to work on
 * @param {string} className | The class name to look for
 * @return {boolean}
 */
function hasClass(node, className) {
    if (node.className) {
        return node.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    } else {
        return false;
    }
}

/** 
 * Remove all the children of the specified node
 * @param {node} node | The node to work on
 */
function removeChildren(node) {
    if (node) {
        while (node.firstChild) {
            node.removeChild(node.firstChild);
        }
    }
}

/** 
 * Removes the specified class from the node (/!\ requires the hasClass function)
 * @param {node} node | The node to work on
 * @param {string} className | The class to remove
 */
function removeClass(node, className) {
    if (hasClass(node, className)) {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        node.className = node.className.replace(reg, ' ');
    }
}

/*=============================================================
* Various functions
==============================================================*/

 /** 
 * Returns a random RGB color
 * @return {string}
 */
function randomRGBColor() {
	function rdNum(max){
		var num = Math.floor(Math.random()*max);
		return num;
	}
	return 'rgb('+rdNum(255)+','+rdNum(255)+','+rdNum(255)+')';
}