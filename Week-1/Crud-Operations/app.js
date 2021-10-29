import {
  mkdirSync,
  writeFileSync,
  appendFileSync,
  readFileSync,
  unlinkSync,
  rmdirSync,
} from "fs";

//Create a folder for json file
mkdirSync("Odev", (err) => {
  if (err) {
    console.log(err);
  }
});

//create a file which name is employees.json, and write to the file our information
writeFileSync(
  "Odev/employees.json",
  '{"name": "Employee 1 Name", "salary": 2000}',
  "utf8",
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);

//Creating a function to read data from json file and assign data to the const
const readData = readFileSync("Odev/employees.json", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  }
});

console.log("Before updated : " + readData);

//Adding new information at the end of file
appendFileSync(
  "Odev/employees.json",
  '{"name": "Employee 2 Name", "salary": 1000}',
  "utf8",
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);

//Creating a function to read data from json file and assign data to the const
const readUpdatedData = readFileSync(
  "Odev/employees.json",
  "utf8",
  (err, data) => {
    if (err) {
      console.log(err);
    }
  }
);

//Print data from const
console.log("After Updated :" + readUpdatedData);

//Deleting json file from folder
unlinkSync("Odev/employees.json", (err) => {
  if (err) {
    console.log(err);
  }
});

//Deleting empty folder end of the program
rmdirSync("Odev", { recursive: true }, (err) => {
  if (err) {
    console.log(err);
  }
});
