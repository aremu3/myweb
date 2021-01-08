
function $(id){
	return document.getElementById(id)

}

window.onload=()=>{
	setTimeout(()=>{
		var el=document.getElementsByClassName('tasking')
		for (var i = 0; i < el.length; i++) {
			el[i].innerHTML=`
			 <video id='d' width=${250} height=${250} style='border-radius:24px' controls>
					<source src="adsensevideo.mp4" type="video/mp4">
			 </video>

			`
		}
console.log($('d').prototype)
	},1000)


}
//https://javascripthome.000webhostapp.com/