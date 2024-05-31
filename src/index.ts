// let fName: string = "Bilal";
// let age: number = 22;
// let isAdult: boolean = true;
// let isMarried: "yes" | "no" = "yes";

// const handleCal2 = (n: number, m: number): void => {
//   console.log(n * m);
//   return n + m;
// };

// const handleCal = (n: number, m: number): number | void => {
//   console.log(n * m);
//   //   return n + m;
// };

// const handleCal3 = (n: number, m: number): number | string => {
//   //   console.log(n * m);
//   //   return n + m;
// };

// const handleCal1 = (n: number, m: number): string | void => {
//   return Number(n + m);
// };

//using type syntax
//error
// type TypehandleCal1 = (n: string, m: string) => string;
// const handleCal1: TypehandleCal1 = (n, m) => {
//   return n * m;
// };

//error remove
// type TypehandleCal1 = (n: string, m: string) => string;
// const handleCal1: TypehandleCal1 = (n, m) => {
//   return n + m;
// };

//Array
// method 01
// let arr: string | number[] = ["Bilal", "test", 5];
// method 02
// let arr1: Array<boolean | number> = [true, 9];
// let arr3: Array<object> = [{ name: "Bilal" }, bilal];

//OBJECTS

interface OBJ {
  name: string;
  age?: number;
  gender: "male" | "female";
}
const obj: OBJ = {
  name: "Bilal",
  age: 22,
  gender: "male",
};

type FUNC = (n1: number, n2: 2, n3: number, n4: number, n5: number) => void;
interface OBJ2 extends OBJ {
  address: string;
  func: FUNC;
}

const obj2: OBJ2 = {
  name: "test",
  gender: "female",
  address: "test 123",
  func: (n1, n2, n3, n4, n5) => {
    console.log(n1, n2, n3);
  },
};

obj2.func(22, 33, 44, 55, 66);
