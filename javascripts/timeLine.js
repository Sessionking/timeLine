/**
 * Created by Session on 15/12/28.
 */
window.onload=init;
function init(){
    var containerContent=document.getElementsByClassName('container-content');
    for(var i=0;i<containerContent.length;i++){
        containerContent[i].setAttribute('class','container-content sanjiao');
    }
}