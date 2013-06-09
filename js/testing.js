$(function(){
	
	var array1 = [1,2,3,4,5,6,7,8,9,5,6,7],
		array2 = ['banana', 'orange', 'tomato', 'peach', 'orange'],
		lgString = "Souvent, pour s'amuser, les hommes d'équipage prennent des albatros, vastes oiseaux des mers, Qui suivent, indolents compagnons de voyage, Le navire glissant sur les gouffres amers.";
	
	// Contains
	(function(){
		var div = document.getElementById('contains');
		if(contains(array1, 5)) {
			div.innerHTML = div.innerHTML + '<p><i class="icon-ok"></i> array1 contains <b>5</b></p>'
		}
		if(contains(array2, 'peach')) {
			div.innerHTML = div.innerHTML + '<p><i class="icon-ok"></i> array2 contains <b>"peach"</b></p>'
		}
		if(!contains(array2, 'cheese')) {
			div.innerHTML = div.innerHTML + '<p><i class="icon-remove"></i> array2 does not contain <b>"cheese"</b></p>'
		}
	})();
	
	// Grep
	(function(){
		var div = document.getElementById('grep'),
			reg = new RegExp(/[aeiou]/ig),
			noVowels = array2.slice(0);
			grep(noVowels, reg, '*');
		div.innerHTML = div.innerHTML + '<p>No more vowels: <b>[' + noVowels + ']</b></p>';
	})();

	// Highest
	(function(){
		var div = document.getElementById('highest'),
			h = highest(array1);
		div.innerHTML = div.innerHTML + '<p><b>' + h + '</b> is the highest number in array1</p>';
	})();
	
	// Lowest
	(function(){
		var div = document.getElementById('lowest'),
			h = lowest(array1);
		div.innerHTML = div.innerHTML + '<p><b>' + h + '</b> is the lowest number in array1</p>';
	})();
	
	// RemoveItem
	(function(){
		var div = document.getElementById('removeItem'),
			removed = array2.slice(0);
		removeItem(removed, 'orange');
		div.innerHTML = div.innerHTML + '<p>No more "orange": <b>[' + removed + ']</b></p>';
	})();

	// Shuffle
	(function(){
		var div = document.getElementById('shuffle'),
			shuffled = array1.slice(0);
		shuffle(shuffled);
		div.innerHTML = div.innerHTML + '<p>Shuffled: <b>[' + shuffled + ']</b></p>';
	})();

	// Unique
	(function(){
		var div = document.getElementById('unique'),
			unique1 = unique(array1),
			unique2 = unique(array2);
		div.innerHTML = div.innerHTML + '<p>No more duplicates: <b>[' + unique1 + ']</b></p>';
		div.innerHTML = div.innerHTML + '<p>No more duplicates: <b>[' + unique2 + ']</b></p>';
	})();
	
	// Excerpt
	(function(){
		var div = document.getElementById('excerpt'),
			e = excerpt(lgString, 5);
		div.innerHTML = div.innerHTML + '<p>' + e + '</p>';
	})();
	
	// isEmail
	(function(){
		var div = document.getElementById('isEmail'),
			email = 'simon.vreux@gmail.com',
			notEmail = 'www.simonvreux.be';
		if(isEmail(email)){
			div.innerHTML = div.innerHTML + '<p><i class="icon-ok"></i> <b>simon.vreux@gmail.com</b> is an email</p>';
		}
		if(!isEmail(notEmail)) {
			div.innerHTML = div.innerHTML + '<p><i class="icon-remove"></i> <b>www.simonvreux.be</b> is not an email</p>';
		}
	})();

	// isURL
	(function(){
		var div = document.getElementById('isURL'),
			url = 'www.simonvreux.be',
			notUrl = 'Flying-Potato';
		if(isURL(url)){
			div.innerHTML = div.innerHTML + '<p><i class="icon-ok"></i> <b>www.simonvreux.be</b> is a URL</p>';
		}
		if(!isURL(notUrl)) {
			div.innerHTML = div.innerHTML + '<p><i class="icon-remove"></i> <b>Flying-Potato</b> is not a URL</p>';
		}
	})();

	//prefixURL
	(function(){
		var div = document.getElementById('prefixURL'),
			url = 'www.simonvreux.be',
			prefixed = prefixURL(url);
		div.innerHTML = div.innerHTML + '<p><b>'+prefixed+'</b> has been prefixed</p>';
	})();
	
	// Trim
	(function(){
		var div = document.getElementById('trim'),
			string = '            Flying-Potato               ';
		div.innerHTML = div.innerHTML + '<p><b>'+ trim(string) +'</b> has been trimmed</p>';
	})();

	// Truncate
	(function(){
		var div = document.getElementById('truncate'),
			string = truncate(lgString, 40);
		div.innerHTML = div.innerHTML + '<p>'+ string +'</p>';
	})();

	// GetText
	(function(){
		var div = document.getElementById('getText'),
			otherDiv = document.getElementById('trim'),
			text = getText(otherDiv.getElementsByTagName('p')[0]);
		div.innerHTML = div.innerHTML + '<p><b>'+ text +'</b> is the text from another div</p>';
	})();

	// addClass
	(function(){
		var div = document.getElementById('addClass');
		addClass(div, 'red');
		div.innerHTML = div.innerHTML + '<p>A class of <b>red</b> has been added</p>';
	})();
	
	// hasClass
	(function(){
		var div = document.getElementById('hasClass'),
			otherDiv = document.getElementById('addClass');
		if(hasClass(otherDiv, 'red')) {
			div.innerHTML = div.innerHTML + '<p>AddClass has a class of <b>red</b></p>';
		}
	})();

	// removeClass
	(function(){
		var div = document.getElementById('removeClass');
		removeClass(div, 'red');
		div.innerHTML = div.innerHTML + '<p>The class of <b>red</b> has been removed from this div</p>';
	})();

	// removeChildren
	(function(){
		var div = document.getElementById('removeChildren');
		removeChildren(div);
		div.innerHTML = div.innerHTML + '<h5>removeChildren</h5><p>Children have been removed from this div (then added again)</p>';
	})();

	// randomRGBColor
	(function(){
		var div = document.getElementById('randomRGBColor');
		div.style.background = randomRGBColor();
		div.innerHTML = div.innerHTML + '<p>This div has a random background color</p>';
	})();

});