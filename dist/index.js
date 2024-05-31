"use strict";
// let fName: string = "Bilal";
// let age: number = 22;
// let isAdult: boolean = true;
// let isMarried: "yes" | "no" = "yes";
const obj = {
    name: "Bilal",
    age: 22,
    gender: "male",
};
const obj2 = {
    name: "test",
    gender: "female",
    address: "test 123",
    func: (n1, n2, n3, n4, n5) => {
        console.log(n1, n2, n3);
    },
};
obj2.func(22, 33, 44, 55, 66);
