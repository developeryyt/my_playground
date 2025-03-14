'use client';
/*
* RegExp 객체로 정규 표현식을 표현
* */

let exp = RegExp();
console.dir(exp);

let pattern = /s$/; //s로 끝나는 문자열
let pattern2 = new RegExp('s$');
let pattern3 = /s$/i; //대소문자 구분 없이
let pattern4 = /[abc]/ //a, b, c 중 하나
let pattern5 = /[^abc]/ //a, b, c 이외의 문자
let pattern6 = /[a-z]/ //알파벳 소문자
let pattern7 = /[a-zA-Z0-9]/ //알파벳 대소문자, 숫자 전체


let a = 'JavaScript'.search(pattern6); // 첫번째로 일치하는 부분 문자열의 위치 반환. 전역 검색 지원x
console.log(a)

