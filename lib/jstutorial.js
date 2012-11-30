var myCodeMirror = CodeMirror(document.body, {
  mode:  "javascript"
});

function editCodeBlock(evt){
	myCodeMirror.setValue(evt.target.nextSibling.innerHTML);
}

var codeblocks = Array.prototype.slice.call(document.querySelectorAll('.javascript'));
codeblocks.forEach(function(code){
	console.log('setting up code block');
	var button = document.createElement('button');
	button.innerHTML = 'edit';
	button.addEventListener('click', editCodeBlock, false);
	code.parentNode.insertBefore(button, code);
});