$(document).ready(function(){
	if ($(window).scrollTop()==0) document.querySelector(".progress").style.height = 0;

	window.addEventListener("scroll", event => {
	    let scrollTop = $(window).scrollTop() + 10
	    
		let nodes = [
			{ 'id':'uns' , 'value' : 0 },
			{ 'id':'deuxs' , 'value' : $('#deux').offset().top },
			{ 'id':'troiss' , 'value' : $('#trois').offset().top },
			{ 'id':'quatres' , 'value' : $('#quatre').offset().top },
			{ 'id':'cinqs' , 'value' : $('#cinq').offset().top },
			{ 'id':'sixs' , 'value' : $('#six').offset().top },
			{ 'id':'septs' , 'value' : $('#sept').offset().top },
			{ 'id':'huits' , 'value' : $('#huit').offset().top },
			{ 'id':'neufs' , 'value' : $('#neuf').offset().top },
			{ 'id':'dixs' , 'value' : $('#dix').offset().top },
			{ 'id':'onzes' , 'value' : $('#onze').offset().top },
		]

		let points = nodes.map(function(e){
			return e.value
		})

		let nodes_length = nodes.length - 1

	    let Dnext = points.find(Dn => Dn > scrollTop)
	    let Nprev = points.findIndex(Dn => Dn > scrollTop) - 1
	    let Dprev = points[Nprev]


		let progress = (((scrollTop - Dprev)/(Dnext-Dprev) * (1/nodes_length)) + (Nprev/nodes_length)) * 100

		document.querySelector(".progress").style.height = progress + "%";
		document.querySelector(".eco-prog-circle").style.height = progress + "%";

		// set fill
		let bc_fill = {"border-color": "#88B337"}
		let b_fill = {"background": "#88B337"}

		// set empty fill
		let bc_empty = {"border-color": "rgb(122, 122, 122)"}
		let b_empty = {"background": "rgb(122, 122, 122)"}
		
		// loop on each dots and fill/empty
		$.each(nodes, function(index,value){
			
			if (value.value <= scrollTop) {
				$('#'+value.id +' div').css(bc_fill)
				$('#'+value.id +' div > div').css(b_fill)
			} else {
				$('#'+value.id +' div').css(bc_empty)
				$('#'+value.id +' div > div').css(b_empty)
			}
		})
	});
});