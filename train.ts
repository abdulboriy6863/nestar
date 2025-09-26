console.log('Train ts file run sucessfully');

// TASK ZN:

function rotateArray(a: number[], b: number) {
	const index = a.indexOf(b);
	if (index === -1) return a;

	const part1 = a.slice(index + 1);
	const part2 = a.slice(0, index + 1);
	return [...part1, ...part2];
}

console.log(rotateArray([1, 2, 3, 4, 5, 6], 4));

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
