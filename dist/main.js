(()=>{const t=.0174532925,e=d3.scale.linear().range([0,330]).domain([0,11]),a=secondScale=d3.scale.linear().range([0,354]).domain([0,59]);let n=[{type:"hour",value:0,length:-25,scale:e},{type:"minute",value:0,length:-38,scale:a},{type:"second",value:0,length:-35,scale:secondScale,balance:10}];const r=d3.interpolate("#68c2d8","#021b2f");function l(){const t=new Date,e=Math.abs(t.getSeconds()-30)/30;console.log(e),d3.select("#body").transition().duration(500).style("background-color",r(e))}function c(){var t=new Date;n[0].value=t.getHours()%12+t.getMinutes()/60,n[1].value=t.getMinutes(),n[2].value=t.getSeconds()}!function(){c();var a=d3.select("#clock-face");a.selectAll(".hour-label").data(d3.range(1,13)).enter().append("text").attr("class","hour-label").attr("text-anchor","middle").attr("x",(function(a){return 45*Math.sin(e(a)*t)})).attr("y",(function(a){return-45*Math.cos(e(a)*t)+4})).text((function(t){return t}));var r=a.append("g").attr("id","clock-hands");a.append("g").attr("id","face-overlay").append("circle").attr("class","hands-cover").attr("x",0).attr("y",0).attr("r",2.75),r.selectAll("line").data(n).enter().append("line").attr("class",(function(t){return t.type+"-hand"})).attr("x1",0).attr("y1",(function(t){return t.balance?t.balance:0})).attr("x2",0).attr("y2",(function(t){return t.length})).attr("transform",(function(t){return"rotate("+t.scale(t.value)+")"}))}(),l(),setInterval((function(){c(),d3.select("#clock-hands").selectAll("line").data(n).transition().attr("transform",(function(t){return"rotate("+t.scale(t.value)+")"})),l()}),1e3),d3.select(self.frameElement).style("height","110px")})();