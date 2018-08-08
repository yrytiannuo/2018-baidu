
window.onload = function(){
	let sourceData = [{
	    product: "手机",
	    region: "华东",
	    sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
	}, {
	    product: "手机",
	    region: "华北",
	    sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]
	}, {
	    product: "手机",
	    region: "华南",
	    sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
	}, {
	    product: "笔记本",
	    region: "华东",
	    sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]
	}, {
	    product: "笔记本",
	    region: "华北",
	    sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
	}, {
	    product: "笔记本",
	    region: "华南",
	    sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]
	}, {
	    product: "智能音箱",
	    region: "华东",
	    sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
	}, {
	    product: "智能音箱",
	    region: "华北",
	    sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]
	}, {
	    product: "智能音箱",
	    region: "华南",
	    sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
	}]
	var region_select = document.getElementById('region-select');
	var table = document.getElementById("table-wrapper");
	var goods = document.getElementsByClassName('input');
	var label = document.getElementsByTagName('label');
	region_select.onchange = function() {
		create_data();
	}

	function create_data(){
		var region = select_option();
		var good = select_radio();
		var newdata = [];
		var j=0;
		for(var i in sourceData){
			if(sourceData[i].region == region&&sourceData[i].product == good){
				newdata[j++] = sourceData[i];
			}
		}
	    render_form(newdata);
	}
	function select_option() {
		console.log(region_select.value);
	    return region_select.value;
	}
	function select_radio(){
		var good;
		for(var i in goods){
			if(goods[i].checked){
				good = label[i].innerHTML;
			}
		}
		console.log(good);
		return good;
	}
	function render_form(data) {
		table.innerHTML = null;
		var tr = [];
	    tr[0] = "<tr><th>商品</th><th>地区</th><th>一月</th><th>二月</th><th>三月</th><th>四月</th><th>五月</th><th>六月</th><th>七月</th><th>八月</th><th>九月</th><th>十月</th><th>十一月</th><th>十二月</th></tr>";
	    for(var i in data){
	        tr[i+1] = "<tr><td>"+ data[i].product +"</td><td>"+ data[i].region +"</td><td>"+ data[i].sale[0] +"</td><td>"+ data[i].sale[1] +"</td><td>"+ data[i].sale[2] +"</td><td>"+ data[i].sale[3] +"</td><td>"+ data[i].sale[4] +"</td><td>"+ data[i].sale[5] +"</td><td>"+ data[i].sale[6] +"</td><td>"+ data[i].sale[7] +"</td><td>"+ data[i].sale[8] +"</td><td>"+ data[i].sale[9] +"</td><td>"+ data[i].sale[10] +"</td><td>"+ data[i].sale[11] +"</td></tr>";
	    }
	    for(var i in tr){
	    	table.innerHTML += tr[i];
	    }
	}
}
