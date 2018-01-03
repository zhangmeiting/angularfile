var arrtwo=['red','orange',
'yellow','green','blue','purple','red',
'skyblue','limegreen'];
function two(val){
	var newarr=[];
	for(var i=val.length-1;i>=0;i--){
		if(newarr.indexOf(val[i])==-1){
			newarr.unshift(val[i]);
		}
	}
	return newarr;
}
console.log(two(arrtwo));