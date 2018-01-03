var arrone=[1,2,3,4,3,1,5,8];
function one(val){
	var newarr=[];
	for(var i=0;i<val.length;i++){
		if(newarr.indexOf(val[i])==-1){
			newarr.push(val[i]);
		}
	}
	return newarr;
}
console.log(one(arrone));