console.log('Train ts file run sucessfully');

// TASK ZQ:

// Shunday function yozing, bu function berilgan array parametr
// ichida ikki marotaba yoki undan ko'p takrorlangan sonlarni alohida
// array'da yagonadan qaytarsin qaytarsin.

function findDuplicates(a: number[]) {
	return a.filter((item, index) => a.indexOf(item) !== index);
}

console.log(findDuplicates([1, 2, 3, 4, 5, 4, 3]));

// MASALAN: findDuplicates([1,2,3,4,5,4,3,4]); return [3, 4];

// function areArraysEqual(arr1, arr2) {
// 	const unique1 = [...new Set(arr1)].sort();
// 	const unique2 = [...new Set(arr2)].sort();
// 	return JSON.stringify(unique1) === JSON.stringify(unique2);
// }

// console.log(areArraysEqual([1, 2, 3], [3, 1, 2])); // true
// console.log(areArraysEqual([1, 2, 3], [3, 1, 2])); // true
// console.log(areArraysEqual([1, 2, 3], [4, 1, 2])); // false

// TASK ZO:

// function areParenthesesBalanced(a: string) {
// 	let count = 0;
// 	const isValid = a.split('').every((char) => {
// 		if (char === '(') count++;
// 		else if (char === ')') {
// 			count--;
// 			if (count < 0) return false;
// 		}
// 		return true;
// 	});
// 	console.log(isValid && count === 0);
// }

// areParenthesesBalanced('string()ichida(qavslar)soni()balansda()');

// Shunday function yozing, u parametrdagi string ichidagi qavslar miqdori balansda ekanligini aniqlasin. Ya'ni ochish("(") va yopish(")") qavslar soni bir xil bolishi kerak.
// MASALAN: areParenthesesBalanced("string()ichida(qavslar)soni()balansda") return true

// TASK ZO:

// function areArraysEqual(a: number[], b: number[]) {
// 	const setA = new Set(a);
// 	const setB = new Set(b);

// 	if (setA.size !== setB.size) return false;

// 	for (let value of setA) {
// 		if (!setB.has(value)) return false;
// 	}

// 	return true;
// }

// console.log(areArraysEqual([1, 2, 3], [1, 2, 3, 3]));

// Shunday function yozing, u 2 ta array parametr qabul qilsin.
// Siz bu ikki arrayning qiymatlari o'xshash bo'lishini
// (ya'ni, ularning barcha elementlari bir xil bo'lishini) tekshirishingiz kerak.

// MASALAN:
// areArraysEqual([1, 2, 3], [3, 1, 2]) // true
// areArraysEqual([1, 2, 3], [3, 1, 2, 1]) // true
// areArraysEqual([1, 2, 3], [4, 1, 2]) // false

// TASK ZN:

// function rotateArray(a: number[], b: number) {
// 	const index = a.indexOf(b);
// 	if (index === -1) return a;

// 	const part1 = a.slice(index + 1);
// 	const part2 = a.slice(0, index + 1);
// 	return [...part1, ...part2];
// }

// console.log(rotateArray([1, 2, 3, 4, 5, 6], 4));

// Shunday function yozing, uni array va number parametri bo'lsin.
// Function'ning vazifasi ikkinchi parametr'da berilgan raqam, birinchi
// array parametr'ning indeksi bo'yicha hisoblanib, shu indeksgacha bo'lgan
// raqamlarni indeksdan tashqarida bo'lgan raqamlar bilan o'rnini
// almashtirib qaytarsin.

// MASALAN: rotateArray([1, 2, 3, 4, 5, 6], 3); return [5, 6, 1, 2, 3, 4];

// // TASK ZM:

// function reverseInteger(a: number) {
// 	const isNumber = a < 0;
// 	const result = Number(Math.abs(a).toString().split('').reverse().join(''));
// 	console.log(isNumber ? -result : result);
// }

// reverseInteger(-87);

// Shunday function yozing, va bu function parametr
// sifatida raqamlarni qabul qilsin. Bu function qabul qilingan
// raqamlarni orqasiga o'girib qaytarsin

// MASALAN: reverseInteger(123456789); return 987654321;

// Yuqoridagi misolda, function kiritilgan raqamlarni orqasiga
// o'girib (reverse) qilib qaytarmoqda.

// TASK ZK:

// function printNumbers() {
// 	let count = 1;
// 	console.log('Counting started');
// 	let interval = setInterval(() => {
// 		console.log(`${count}`);
// 		count++;
// 		if (count >= 6) {
// 			clearInterval(interval);
// 			console.log('Counting stoped');
// 		}
// 	}, 1000);
// }

// printNumbers();

// Shunday function yozing, bu function har bir soniyada bir marotaba
// console'ga 1'dan 5'gacha bo'lgan raqamlarni chop etsin va
// 5 soniyadan so'ng function o'z ishini to'xtatsin

// MASALAN: printNumbers();
