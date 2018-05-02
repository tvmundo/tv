var persistclose=1 // Se colocar o número 0 a janela abrirá novamente. O número 1significa que depois que a barra for fechada, permanecerá fechada
var startX = 2 // Tamanho horizontal
var startY = 2 // Tamanho vertical
var verticalpos="fromtop" // "fromtop" o "frombottom" define se vai em cima ou embaixo
function iecompattest(){
return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}
if (window.addEventListener)
window.addEventListener("load", staticbar, false)
else if (window.attachEvent)
window.attachEvent("onload", staticbar)
else if (document.getElementById)
window.onload=staticbar
</script>
