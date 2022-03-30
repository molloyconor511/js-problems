const doubleString = (string) => {
    let newString = "";

    for (let i = 0; i < string.length; i++) {
        newString += string[i] + string[i];
    }
    console.log(string, "=>", newString);
    return newString;
}

doubleString("String");
doubleString("Hello World!");
doubleString("1234!_");