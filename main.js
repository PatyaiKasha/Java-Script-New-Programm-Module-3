/*Используя даную строку с полным алфавитом, программно составить массив keyboard содержащий 3 других массива с буквами алфавита, идентичные строкам на клавиатуре.

Массив keyboard будет иметь такую струтуру: [
    [первая строка клавиатуры],
    [вторая строка клавиатуры],
    [третья строка клавиатуры]
].

const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

>>> Тут должно было быть фото клавиатуры <<<

Используя готовый массив клавиатурных строк, обращаясь к элементам массива по индексам, записать в переменные слова и вывести их в консоль:

hello
javascript
trainer
*/

const key = [
    'qwertyuiop[]', //0
    'asdfghjkl;\'', //1
    'zxcvbnm,./' //2
];

let hello = key[1][5] + key[0][2] + key[1][8] + key[1][8] + key[0][8];

let javascript = key[1][6] + key[1][0] + key[2][3] + key[1][0] + key[1][1] + key[2][2] + key[0][3] + key[0][7] + key[0][9] + key[0][4];

let trainer = key[0][4] + key[0][3] + key[1][0] + key[0][7] + key[2][5] + key[0][2] + key[0][4];


console.log('hello - ', hello);
console.log('javascript - ', javascript);
console.log('trainer - ', trainer);