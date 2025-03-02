'use client';
/*
* (Typed Array)은 C나 자바의 저수준 배열과 꽤 비슷함
* 형식화 배열은 브라우저가 WebGL 그래픽을 지원하기 시작하면서 클라이언트 사이드 자바스크립트에 처음 도입
* 엄밀히 말하면 배열이 아님, Array.isArray()로 확인하면 false가 나옴
*
* 요소는 모두 숫자, 생성할 때 반드시 길이를 지정 (절대 못바꿈), 항상 0으로 초기화
* */

let bytes = new Uint8Array(1024); //1024바이트
let matrix = new Float64Array(9);

let white = Uint8ClampedArray.of(255, 255, 255, 0);
let units = Uint32Array.from(white);

console.log(white)
console.log(units)
console.log(bytes)
console.log(matrix)