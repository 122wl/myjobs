function getHtml(p){var n=[];n.push('<ul class="face-act" >');for(var t=0;t<faceJson.length;t++)n.push('<li class="" data-name="'+faceJson[t].text+'" style="background-position:left '+faceJson[t].position+';"></li>');n.push("</ul>"),$(p).append(n.join(""))}function getEmjo(p,n){var t=p.indexOf("["),s=p.indexOf("]");-1!=t&&(n.push(p.substring(t,s+1)),p=p.substring(s+1,p.length),getEmjo(p,n))}function replaceFace(p){var n=[];getEmjo(p,n);for(var t=0;t<n.length;t++)repalceJson[n[t]]&&(p=p.replace(n[t],"<img class='face-img' src = '/img/faces/"+repalceJson[n[t]]+"'/>"));return p}var faceJson=[{text:"[笑眼]",src:"1.png",position:"0px"},{text:"[吐舌]",src:"2.png",position:"-26px"},{text:"[啊]",src:"3.png",position:"-52px"},{text:"[酷]",src:"4.png",position:"-78px"},{text:"[怒]",src:"5.png",position:"-104px"},{text:"[汗]",src:"6.png",position:"-130px"},{text:"[泪]",src:"7.png",position:"-156px"},{text:"[黑线]",src:"8.png",position:"-182px"},{text:"[鄙视]",src:"9.png",position:"-208px"},{text:"[不高兴]",src:"10.png",position:"-234px"},{text:"[疑问]",src:"11.png",position:"-260px"},{text:"[阴脸]",src:"12.png",position:"-286px"},{text:"[吐]",src:"13.png",position:"-312px"},{text:"[咦]",src:"14.png",position:"-338px"},{text:"[委屈]",src:"15.png",position:"-364px"},{text:"[花心]",src:"16.png",position:"-390px"},{text:"[呼]",src:"17.png",position:"-416px"},{text:"[抓狂]",src:"18.png",position:"-442px"},{text:"[冷]",src:"19.png",position:"-468px"},{text:"[勉强]",src:"20.png",position:"-494px"},{text:"[狂汗]",src:"21.png",position:"-520px"},{text:"[乖]",src:"22.png",position:"-546px"},{text:"[睡觉]",src:"23.png",position:"-572px"},{text:"[惊哭]",src:"24.png",position:"-598px"},{text:"[惊讶]",src:"25.png",position:"-624px"},{text:"[钱]",src:"26.png",position:"-650px"},{text:"[开心]",src:"27.png",position:"-676px"},{text:"[耶]",src:"28.png",position:"-702px"},{text:"[胜利]",src:"29.png",position:"-728px"},{text:"[大拇指]",src:"30.png",position:"-754px"},{text:"[弱]",src:"31.png",position:"-780px"},{text:"[OK]",src:"32.png",position:"-806px"}],repalceJson={"[笑眼]":"1.png","[吐舌]":"2.png","[啊]":"3.png","[酷]":"4.png","[怒]":"5.png","[汗]":"6.png","[泪]":"7.png","[黑线]":"8.png","[鄙视]":"9.png","[不高兴]":"10.png","[疑问]":"11.png","[阴脸]":"12.png","[吐]":"13.png","[咦]":"14.png","[委屈]":"15.png","[花心]":"16.png","[呼]":"17.png","[抓狂]":"18.png","[冷]":"19.png","[勉强]":"20.png","[狂汗]":"21.png","[乖]":"22.png","[睡觉]":"23.png","[惊哭]":"24.png","[惊讶]":"25.png","[钱]":"26.png","[开心]":"27.png","[耶]":"28.png","[胜利]":"29.png","[大拇指]":"30.png","[弱]":"31.png","[OK]":"32.png"};getHtml(".face-box");