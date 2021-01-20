//MIRAS
//var areas = document.querySelectorAll('.area');
//
//areas.forEach(function(a){
//	a.insertBefore(document.createElement('span'), a.firstChild).classList.add('mira', 'sup', 'esq');
//	a.insertBefore(document.createElement('span'), a.firstChild).classList.add('mira', 'sup', 'dta');
//	a.insertBefore(document.createElement('span'), a.firstChild).classList.add('mira', 'inf', 'esq');
//	a.insertBefore(document.createElement('span'), a.firstChild).classList.add('mira', 'inf', 'dta');
//});

//RECENTRAR LINKS
var larguraInstagram = document.getElementById('link-instagram').offsetWidth;
var links = document.querySelectorAll('#links a');

links.forEach(function(l){
	l.style.width = larguraInstagram + 'px';
});

//ABRIR FECHAR
function abrirFechar(e) {
	var v = document.getElementById(e);
	if(v.style.display == 'none') {
		v.style.display = 'block';
		v.style.height = '50px';
	} else {
		v.style.display = 'none';
		v.style.height = 0;
	}
};

//CURSOR ANDAIME
//document.onmousemove = function(e){
//	var x = e.clientX;
//	var y = e.clientY;
//	
//	document.getElementById('andaime').style.clipPath = 'circle(50px at ' + x + 'px ' + y + 'px)';
//};