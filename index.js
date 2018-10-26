module.exports = Phrase

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
		return this.letters().toLowerCase()
		//return this.processor(this.content);
	}
	
	this.letters = function letters(){
		//return Array.from(this.content).filter(c => c.match(/[a-zA-Z]/i)).join('')
	return (this.content.match(/[a-z]/gi) || []).join('')	
	}
	
	this.palindrome = function palindrome(){
		return this.processedContent() == this.processedContent().reverse()
	}
}
