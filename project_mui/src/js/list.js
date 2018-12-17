mui.ajax('/api/get/train_tickets',{
	dataType: 'json',
	type: 'get',
	data: {
		date : '2018-12-12'
	},
	success: function(res){
		console.log(res);
		if(res.code == 1){
			render(res.data);
		}
	}
})

function render(data){
	var str = "";
	data.forEach((item)=>{
		str += `<div>
					<h3><span class="green">${item.start_time}</span><span>${item.end_time}</span></h3>
					<h4>北京南    上海虹桥</h4>
					<h5>${item.money}</h5>
				</div>`
	})
	
	document.querySelector('.con-list').innerHTML = str;
	
	
}
var conTitle = document.querySelector('.con-title');
	mui('.con-title').on('tap','span',function(){
		var spans = conTitle.querySelectorAll('span');
		for(var i = 0; i < spans.length; i++){
			spans[i].classList.remove('active')
		}
		this.classList.add('active');
	})