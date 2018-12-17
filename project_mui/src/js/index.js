var conTitle = document.querySelector('.con-title');
mui('.con-title').on('tap','span',function(){
	var spans = conTitle.querySelectorAll('span');
	for(var i = 0; i < spans.length; i++){
		spans[i].classList.remove('active')
	}
	this.classList.add('active');
})
var btnList= document.querySelector('.btn-list');
btnList.addEventListener('tap',function(){
	location.href = '../list.html';
})