function conta(){
    var n1 = window.document.getElementById('num1')
    var n2 = window.document.getElementById('num2')
    var rpt = window.document.getElementById('resp')

    var p = Number(n1.value)
    var pp = Number(n2.value)

    do{
        document.write(`${p}  `)
        p--
    }while(p >= pp)

    rpt.innerHTML=`${rdd}`
}