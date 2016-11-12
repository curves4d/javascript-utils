function rel_pos() {
	var body = document.body,
    html = document.documentElement;

	var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
	var totalHeight = Math.max( body.scrollHeight, body.offsetHeight, 
	                       html.clientHeight, html.scrollHeight, html.offsetHeight );
	var viewHeihgt = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

	return (100.0*currentPosition/(totalHeight- viewHeihgt)).toFixed(2);
}

function create_el() {
	var disp = document.createElement('div');
	disp.style.position = "fixed";
	disp.style.right = "10px";
	disp.style.top = "10px";
	disp.style.border = "1px solid green";
	disp.style.color = "steelblue";
	disp.style['border-radius'] = "5px";
	disp.style.padding = "5px";
	disp.style['text-align'] = "center";
	disp.style.color = "steelblue";
	disp.style['box-shadow'] = "0 2px 5px 0 #ccc";
	return disp;
}


function add_status() {
	var el = create_el();
	el.textContent = rel_pos() + "% read";
	document.body.appendChild(el);
	document.addEventListener('scroll', function(){
		el.textContent = rel_pos() + "% read";
	}, false);
}

add_status();