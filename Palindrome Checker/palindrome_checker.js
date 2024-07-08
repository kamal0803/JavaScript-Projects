const input = document.getElementById("input")

const check_if_palindrome = () => {
    
    const string_to_check = input.value
    let length = string_to_check.length;
    let isPalindrome = true


    for(let i = 0; i < length; i++){
        
        start_of_string = i
        end_of_string = length - 1 - i

        if (string_to_check[start_of_string] != string_to_check[end_of_string]){

            isPalindrome = false
            break
        }
    }

    input.value = ""

    if(isPalindrome) alert(string_to_check + " is a palindrome")
    else alert(string_to_check +" is not a palindrome")

}
