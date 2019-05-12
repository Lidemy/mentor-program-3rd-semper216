function capitalize(str) {
	if (97<=str[0].charCodeAt()<=122 ){
		first_word = str[0]
		turn_UpperCase = first_word.toUpperCase()
		new_string = str.replace(/^[a-z]/,turn_UpperCase)
    return new_stringi
    }
}

capitalize('hello')