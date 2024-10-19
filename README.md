## 게임 Flow

- [x] 게임 시작 문구를 출력한다
- [x] 숫자 입력값을 받는다
- [x] 결과를 출력한다

## 숫자 입력값 유효성 검사

- [x] 빈 입력
- [x] 오른쪽 끝에 숫자가 아닌 다른 문자가 입력되었을 경우
- [x] //과 \n 사이에(커스텀 구분자) 아무 문자도 없을 경우
- [x] //과 \n 사이에(커스텀 구분자) 숫자가 들어갈 경우
- [x] 입력이 숫자 혹은 //로 시작하지 않을 경우
- [x] 음수가 입력된 경우
- [x] 입력 값이 Infinity 또는 -Infinity인 경우
- [x] 구분자 없이 숫자만 입력되었을 경우
- [x] 커스텀 구분자가 '.'일 경우에 소수점을 입력했을 때
- [x] 입력된 값이 소수점일 경우
- [x] 0이 입력된 경우
- [x] 커스텀 구분자 지정 이후 숫자가 입력되지 않았을 경우
- [x] 커스텀 구분자를 지정하는 '//'이나 '\n'이 잘못 입력되었을 경우

## 게임 문구 출력

- [x] 덧셈할 문자열을 입력해 주세요.
- [x] 결과 : number

## 에러 메세지

- [x] ERROR로 시작
- [x] 아무 값도 입력되지 않았습니다.
- [x] 제대로된 형식으로 다시 입력해주세요.
- [x] 커스텀 구분자에 아무 입력도 없습니다.
- [x] 커스텀 구분자에 숫자는 들어갈 수 없습니다.
- [x] 숫자 혹은 커스텀 구분자를 지정할 문자로 시작해주세요.
- [x] 음수는 입력할 수 없습니다.
- [x] 무한대는 허용되지 않습니다.
- [x] 구분자를 입력해주세요.
- [x] 소수점은 입력할 수 없습니다.
- [x] 0은 입력할 수 없습니다.
- [x] 커스텀 구분자 지정 이후에는 숫자를 입력해주세요.
- [x] 커스텀 구분자 형식이 올바르지 않습니다. "//[구분자]\\n[숫자]" 형식을 사용해주세요.,

## 학습 목표

Git, GitHub, IDE 등 실제 개발을 위한 환경에 익숙해진다.

교육 분야에 맞는 프로그래밍 언어를 사용하여 간단한 문제를 해결한다.

## 문자열 덧셈 계산기

### 기능 요구 사항

입력한 문자열에서 숫자를 추출하여 더하는 계산기를 구현한다.

쉼표(,) 또는 콜론(:)을 구분자로 가지는 문자열을 전달하는 경우 구분자를 기준으로 분리한 각 숫자의 합을 반환한다.

예: "" => 0, "1,2" => 3, "1,2,3" => 6, "1,2:3" => 6

앞의 기본 구분자(쉼표, 콜론) 외에 커스텀 구분자를 지정할 수 있다.
커스텀 구분자는 문자열 앞부분의 "//"와 "\n" 사이에 위치하는 문자를 커스텀 구분자로 사용한다.

예를 들어 "//;\n1;2;3"과 같이 값을 입력할 경우 커스텀 구분자는 세미콜론(;)이며, 결과 값은 6이 반환되어야 한다.

사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.

#### 입출력 요구 사항

입력

```js
구분자와 양수로 구성된 문자열
출력
덧셈 결과
결과 : 6

실행 결과 예시
덧셈할 문자열을 입력해 주세요.
1,2:3
결과 : 6
```

#### 프로그래밍 요구 사항

Node.js 20.17.0 버전에서 실행 가능해야 한다.

프로그램 실행의 시작점은 App.js의 run()이다.

package.json 파일은 변경할 수 없으며, 제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않는다.

프로그램 종료 시 process.exit()를 호출하지 않는다.

프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다.

자바스크립트 코드 컨벤션을 지키면서 프로그래밍한다.

기본적으로 JavaScript Style Guide를 원칙으로 한다.

#### 라이브러리

@woowacourse/mission-utils에서 제공하는 Console API를 사용하여 구현해야 한다.

사용자의 값을 입력 및 출력하려면 Console.readLineAsync()와 Console.print()를 활용한다.
