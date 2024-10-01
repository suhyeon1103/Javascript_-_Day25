// ### 1. **JSON 직렬화와 `undefined` 처리** `JSON.stringify()` 메서드는 객체 내에서 `undefined` 속성을 어떻게 처리할까요?

// A : 무시된다. 해당 속성은 문자열 결과에 포함되지 않는다.

// ### 2. **배열 내의 `undefined` 값 처리** 배열의 요소 중 `undefined` 값이 포함된 경우, `JSON.stringify()`는 이를 어떻게 처리할까요?

// A : 배열의 undefined의 값은 null로 변환된다.

// ### 3. **`Date` 객체의 직렬화 결과** `JSON.stringify()`로 직렬화할 때 `Date` 객체는 어떤 형식으로 변환됩니까?

// A : 문자열

// ### 4. **`Date` 객체의 복원** `JSON.parse(JSON.stringify(new Date()))`의 실행 결과는 무엇입니까?

// A : "2024-09-30T04:30:20.420Z"

// ### 5. **JSON에서 지원하지 않는 데이터 타입** JSON 표준(ECMA-404)에서 지원하지 않는 데이터 타입을 두 가지 이상 나열하세요.

// A : undefined, symbol, function 등

// ### 6. **얕은 복사와 깊은 복사의 차이점** 얕은 복사와 깊은 복사의 차이를 간단하게 설명하세요.

// A : 얕은 복사는 1차원 요소들만 복사하고, 깊은 복사는 배열 내의 중첩 배열이나 객체까지 복사한다.

// ### 7. **`JSON.parse(JSON.stringify())`와 깊은 복사** `JSON.parse(JSON.stringify())` 방식이 깊은 복사를 수행하지 못하는 경우를 설명하세요.

// A : Undefined, Date 객체, Function, Symbol

// ### 8. **얕은 복사 방법** 얕은 복사를 수행할 수 있는 자바스크립트의 방법을 3가지 이상 나열하세요.

// A : spead 연산자(ES6), Array.prototype.slice(), Object.assign()

// ### 9. **깊은 복사의 필요성** 깊은 복사가 필요한 상황을 예시로 설명하세요.

// A : 복사본을 독립적으로 사용해야할 때 깊은복사가 필요하다.

// ### 10. **깊은 복사 구현 방법** `JSON.parse(JSON.stringify())` 외에 깊은 복사를 수행할 수 있는 방법을 제시하세요.

// A : 1) 재귀를 통한 깊은 복사
//     2) 깊은 복사 라이브러리 사용(lodash와 같은 라이브러리에서 제공하는 cloneDeep() 함수 사용)

// ### 11. **`Object.assign()`의 한계** `Object.assign()` 메서드를 사용한 얕은 복사의 한계를 설명하세요.

// A : 중첩된 객체에 대해서도 복사하기 때문에 원본에도 영향이 간다.

// ### 12. **배열 복사 시의 spread 연산자** 다음 코드에서 `originalArray`와 `copiedArray`는 서로 독립적인 배열일까요?

//     const originalArray = [1, 2, { a: 3 }];
//     const copiedArray = [...originalArray];

//     copiedArray[2].a = 4;

// A : 동일한 객체를 참조하기 때문에 독립적인 배열이 아니다.

// ### 13. **재귀를 통한 깊은 복사** 깊은 복사를 수행하기 위한 재귀 복사 함수의 기본적인 원리를 설명하세요.

// A : 원시값은 그대로 복사하고 객체나 배열은 새로운 메모리공간에 저장하는 원리

// ### 14. **`JSON.stringify()`의 함수 처리** 객체 내에 함수가 포함된 경우 `JSON.stringify()`로 직렬화하면 어떻게 처리할까요?

// A : 무시된다.

// ### 15. **얕은 복사 후 객체 수정** 다음 코드에서 얕은 복사가 완료된 후, `copy.b.c` 값을 수정해도 `original.b.c` 값이 변경되지 않도록 하려면 어떻게 해야 할까요?

//     const original = { a: 1, b: { c: 2 } };
//     const copy = Object.assign({}, original);

//     copy.b.c = 3;

// A : JSON.parse(JSON.stringify())와 같은 깊은복사를 한다.

// ### 16. **`slice()`와 얕은 복사** 배열에서 `slice()` 메서드로 얕은 복사를 수행할 때, 중첩 배열이 있는 경우 그 동작을 설명하세요.

// A : 중첩 배열은 참조 값만 복사되어 수정 시 원본 배열에도 영향을 미친다.

// ### 17. **`JSON.parse()`의 반환 값** `JSON.parse('{"a":1, "b":true, "c":"hello"}')`는 어떤 값을 반환할까요?

// A : {a:1, b:true, c:"hello"}

// ### 18. **깊은 복사 후 참조 확인** 깊은 복사된 배열과 원본 배열이 참조적으로 독립적인지 확인하려면 어떻게 해야 할까요?

// A : 깊은 복사를 하면 독립적인 배열이 된다.

// ### 19. **`Symbol` 타입의 직렬화** `Symbol` 타입이 객체 속성으로 포함된 경우, `JSON.stringify()`는 어떻게 처리할까요?

// A : 무시된다.

// ### 20. **`JSON.stringify()`의 순환 참조 문제** 객체가 순환 참조(자기 자신을 참조)하는 경우 `JSON.stringify()`는 어떻게 동작할까요?

// A : JSON.parse()를 그만둔다.(에러발생)
