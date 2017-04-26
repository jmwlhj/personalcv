/**
 * Created by ijiajia on 2016/3/29.
 */
function getStyle(obj, name){
    return (obj.currentStyle || getComputedStyle(obj, false))[name];
}
function move(obj, json, option){
    var option=option || {};
    option.duration=option.duration || 800;
    option.easing=option.easing || 'ease-out';

    var start={};
    var dis={};
    var count=Math.round(option.duration/30);
    for(var name in json){
        start[name]=parseFloat(getStyle(obj, name));
        if(isNaN(start)){
            switch(name){
                case 'left':
                    start[name]=obj.offsetLeft;
                    break;
                case 'top':
                    start[name]=obj.offsetTop;
                    break;
            }
        }
        dis[name]=json[name]-start[name];
    }
    var n=0;
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        n++;

        for(var name in json){
            switch(option.easing){
                case 'linear':
                    var a=n/count;
                    var cur=start[name]+dis[name]*a;
                    break;
                case 'ease-out':
                    var a=1-n/count;
                    var cur=start[name]+dis[name]*(1-a*a*a);
                    break;
                case 'ease-in':
                    var a= n/count;
                    var cur=start[name]+dis[name]*a*a*a;
                    break;
            }
            if(name=='opacity'){
                obj.style.opacity=cur;
                obj.style.filter='alpha(opacity:'+cur*100+')';
            }else{
                obj.style[name]=cur+'px';
            }
        }

        if(n==count){
            clearInterval(obj.timer);
            option.complete && option.complete();
        }
    },30);
}