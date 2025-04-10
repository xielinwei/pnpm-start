import { sharedFun } from "shared";

sharedFun()

const a = [1, 2, 3, 4, 5, 2, 3]

// 数组去重
const unique = [...new Set(a)]
console.log(unique)
