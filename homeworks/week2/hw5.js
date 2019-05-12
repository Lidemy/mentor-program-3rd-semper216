function join(arr, concatStr) {
	new_str=''
	if(arr.length===0){
		new_str=''
	}

	for(i=0;i<arr.length-1;i++){
		new_str = new_str+arr[i]+ concatStr
	}
	last_str=arr[arr.length-1]
	new_str=new_str+last_str
  return new_str;
}


var arr =['a','b','c']
join(arr,'!')




function repeat(str, times) {
	re_string= str
	for(i=1;i<=times;i++){
		re_string = re_string + str
	}
  return re_string;
}

repeat('a', 5);
