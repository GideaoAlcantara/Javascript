
function soma(){
    var kG = window.document.getElementById('peso')
    var h  = window.document.getElementById('altura')
    var R  = window.document.getElementById('resp')
    var FF = window.document.getElementById('foto')
    var img =window.document.getElementById('imagem')

    var KKG = Number(kG.value)
    var HH  = Number(h.value)

    var SS = (KKG / (HH*HH))

    R.innerText=`${SS.toFixed(1)}`

    if(SS < 18){
        //abaixo do peso
        img.style.backgroundColor='yellow'
        FF.src='https://th.bing.com/th/id/OIP.6xApH-5VCJEe6xDloMv7dgAAAA?pid=ImgDet&rs=1'

    }else{
           if(SS >= 18 && SS <=26){
            //peso normal
            img.style.backgroundColor='green'
            FF.src='https://th.bing.com/th/id/OIP.TfS2wddGbEVnliZl8_XNtgAAAA?pid=ImgDet&rs=1'
           }else{
            //acima do peso
            img.style.backgroundColor='red'
            FF.src="https://th.bing.com/th/id/OIP.GK0HUX014E2j1m7E2fwmegAAAA?pid=ImgDet&rs=1"
           }
    }
}