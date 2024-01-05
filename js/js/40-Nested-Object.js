var user = {
    id: 101,
    email: "adananchouhan@gmail.com",
    personalInfo: {
        name: "Adnan-chouhan",
        address: {
            street: "5vRoad",
            city: "Jodhpur",
            country: "India",
        }

    }
};

console.log(user);
console.log(user.personalInfo);
console.log(user.personalInfo.address);
console.log(user.personalInfo.address.city);