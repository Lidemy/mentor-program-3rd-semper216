function reverse(str) {
	str_len = str.length
    new_order= []
    for(i=0;i<str_len;i++){
    	old_obj = str[i]
	    new_obj = str[str_len-1-i]
	    new_order.push(new_obj)
	    new_str= new_order.join('')
	}
console.log(new_str)
return new_str;
}

reverse('hello')