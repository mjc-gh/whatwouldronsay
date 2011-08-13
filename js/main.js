var quote, image, current;
var setQuote = function(){
	var index;
	
	do {
		index = Math.floor(Math.random() * quotes.length);
	} while (index == current);
		
	current = index;
	quote.innerHTML = quotes[index].replace(/(\[[\w ]+\] )*([\w\W]+)/, function(str, m1, m2){
		m2 = '"' + m2 + '"';
		return m1 ? m1.slice(0,-1) + '<br>' + m2 : m2;
	});
};
	
var setImage = function(){
	var src = image.getAttribute('src');
	var num = +src.match(/\d/)[0];
		
	num = num < 2 || num > 2 ? 2 : num + (Math.random() < 0.5 ? 1 : -1);
	
	image.setAttribute('src', src.replace(/\d/, num));
};
	
window.onload = function(){
	setTimeout(function(){ window.scrollTo(0, 1); }, 100);
		
	quote = document.getElementById('quote');
	image = document.getElementById('image');
		
	setQuote();
		
	for (var i = 1; i <= 4; i+=2){
		(new Image()).src = image.getAttribute('src').replace(/\d/, i);
	}
};