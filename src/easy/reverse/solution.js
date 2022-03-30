const reverse = (string) => {
    const reversedString = [...string].reverse().join("");
    console.log(string, "=>", reversedString);
    return reversedString;
};

reverse("String");
reverse("123");
reverse("#!@");
