'use client';

/*
* 1. 순서가 없음
* 2. 인덱스가 없음
* 3. 중복 허용 X
* 4. Iterable 이므로 for/of 루프로 요소 열거 가능
* 5. 항상 요소가 삽입된 순서를 기억하고 있으며, 세트를 순회할 때 항상 이순서대로 순회
* */
let setA = new Set([1, 'kim', 1, 2, 3, 3]);

console.dir(setA, {
    showHidden: true,
    colors: false,
    depth: null
})

setA.add(true);
console.log(setA.size);
console.log(setA);
let sum = 0;
for(let i of setA) {
    sum += i;
}

console.log(sum)

/*
* 1. 인자값은 [key, value] 배열을 전달하는 이터러블 객체여야함
* 2. get() -> 주어진 키와 연결된 값을 검색
* 3. set() -> 키-값 쌍을 추가, 이미 존재하는 키라면 값만 갱신
* 4. set과 같이 has, delete, clear 메서드를 가지고 있음
* */

let obj = {
    one: 1,
    two: 2,
}

let mapA = new Map(Object.entries(obj));

console.log(mapA)

mapA.set('three', 3);
console.log(mapA.size);
console.log(mapA.get('one'))

console.log([...mapA.values()])
console.log([...mapA.keys()])

console.log(mapA.values())
