// Adds `reverse` to all strings.
String.prototype.reverse = function(){
	return Array.from(this).reverse('').join('')
}

function Phrase(content){
	this.content = content
	
	this.processor = (string) => {
		return this.content.toLowerCase();
	}	
	
	this.processedContent = function processedContent(){
		return this.processor(this.content);
	}
	
	this.palindrome = function palindrome(){
		return this.processedContent() == this.processedContent().reverse()
	}
}
