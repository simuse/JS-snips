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
    return arr;
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
 * Capitalise the first letter of a string
 * @param {string} string
 * @return {string}
 */
function capitalise(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

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
 * Adds http:// to a provided url
 * @param {string} url
 * @return {string}
 */
function prefixURL(url) {
    var prefixed = url;
    if (!/^https?:\/\//i.test(url)) {
        prefixed = 'http://' + url;
    }
    return prefixed;
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

/** 
 * Wraps urls in a string with 'a' tags
 * @param {string} text
 * @return {stri}
 */
function urlify(text){
    var regExp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return text.replace(regExp,"<a href='$1' target='_blank'>$1</a>");
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

/** 
 * Toggle element visibility
 * @param {node} node | The node to work on
 */
function toggle(node) {
    if ( node.style.display != 'none' ) {
       node.style.display = 'none';
    }
    else {
        node.style.display = '';
    }
}

/*=============================================================
* Various functions
==============================================================*/

 /** 
 * Formats a Javascript timestamp to a more readable format
 * @return {string}
 */
function formatDate(timestamp) {
    var d = new Date(timestamp),
        days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        day = days[d.getDay()],
        date = d.getDate(),
        month = months[d.getMonth()],
        year = d.getFullYear(),
        hour = d.getHours() > 10 ? d.getHours() : '0' + d.getHours(),
        minutes = d.getMinutes() > 10 ? d.getMinutes() : '0' + d.getMinutes(),
        formated = hour + ':' + minutes + ' ' + day + ', ' + date + ' ' + month + ' ' + year;
    return formated;
}

 /** 
 * Returns the scroll top position
 * @return {integer}
 */
function getScrollTop() {
    var scrollTop = 0;
    if( typeof( window.pageYOffset ) == 'number' ) {
        //Netscape compliant
        scrollTop = window.pageYOffset;
    } else if( document.body && document.body.scrollTop ) {
        //DOM compliant
        scrollTop = document.body.scrollTop;
    } else if( document.documentElement && document.documentElement.scrollTop ) {
        //IE6 in 'standards compliant mode'
        scrollTop = document.documentElement.scrollTop;
    }
    return scrollTop;
}

/** 
 * Returns the current size of the browser window
 * @return {array}
 */
function getWindowSize() {
    var w = 0, h = 0;
     if( typeof( window.innerWidth ) == 'number' ) {
        w = window.innerWidth;
        h = window.innerHeight;
    } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
        w = document.documentElement.clientWidth;
        h = document.documentElement.clientHeight;
    }
    return [w, h];
}

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

/*=============================================================
* Cookie functions
==============================================================*/

/** 
 * Save a cookie in the browser
 * @param {string} name
 * @param {string} value
 * @param {integer} days
 */
function createCookie(name,value,days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        expires = '; expires='+date.toGMTString();
    }
    else expires = '';
    document.cookie = name+'='+value+expires+'; path=/';
}

/** 
 * Returns the value of a cookie
 * @param {string} name
 * @return {string | boolean}
 */
function readCookie(name) {
    var n = name + '=';
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(n) === 0) return c.substring(n.length,c.length);
    }
    return false;
}

/** 
 * Deletes a cookie
 * @param {string} name
 */
function eraseCookie(name) {
    createCookie(name,'',-1);
}