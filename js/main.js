$(document).ready(function() {
    console.log("ready!");
    
    $('body').on('click', '#email', function(e) {
		var range = document.createRange();
		var sel = window.getSelection();
		range.setStartBefore(this.firstChild);
		range.setEndAfter(this.lastChild);
		sel.removeAllRanges();
		sel.addRange(range);
		try {  
			var successful = document.execCommand('copy');  
		} catch(err) {  
			console.log('Unable to copy'); 
        }
        alert("Copied to clipboard!");
	});
});