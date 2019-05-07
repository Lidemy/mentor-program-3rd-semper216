function capitalize(str) {
	if (97<=str[0].charCodeAt()<=122 ){
		first_word = str[0]
		turn_UpperCase = first_word.toUpperCase()
		new_string = str.replace(/^[a-z]/,turn_UpperCase)
		console.log(new_string)
    return new_stringi
    }
}

capitalize('hello')

console.log(capitalize('hello'));
