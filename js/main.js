var quote, image, current = 0;

// http://snippets.dzone.com/posts/show/849
function shuffle(o){
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), 
	  x = o[--i], o[i] = o[j], o[j] = x);
	
	return o;
};

function setQuote(){
	quote.innerHTML = quotes[current++].replace(/(\[[\w ]+\] )*([\w\W]+)/, function(str, m1, m2){
		m2 = '"' + m2 + '"';
		return m1 ? m1.slice(0,-1) + '<br>' + m2 : m2;
	});
	
	if (current == quotes.length)
		current = 0;
};

function setImage(){
	var src = image.getAttribute('src');
	var num = +src.match(/\d/)[0];
		
	num = num < 2 || num > 2 ? 2 : num + (Math.random() < 0.5 ? 1 : -1);
	
	image.setAttribute('src', src.replace(/\d/, num));
};

window.onload = function(){
	setTimeout(function(){ window.scrollTo(0, 1); }, 100);
	
	quote = document.getElementById('quote');
	image = document.getElementById('image');
	
	// shuffle the quotes
	shuffle(quotes);
	setQuote();
		
	for (var i = 1; i <= 4; i+=2)
		(new Image()).src = image.getAttribute('src').replace(/\d/, i);
};