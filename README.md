## 프로젝트 소개

## 프로젝트 기간 : 2020.12.28 ~ 2021.01.08

### Front-End 기술 스택

- HTML
- ES6
- JavaScript
- React(CRA)
- Sass
- Redux
- styled-component

### Back-End 기술 스택

- Python
- Django
- MySQL
- AWS (EC2, RDS)
- Docker
- JWT
- Bcrypt
- Git & Github
- Aquerytool

### 협업 도구

- GitHub : Git rebase 사용하여 flow 진행
- Slack : 비대면 소통
- Trello : 일정관리 및 작업 현황 공유
- Notion : 팀 내 개발 자료, 규칙, 안건등 기록

## 프로젝트 참가자 GitHub 주소링크

### Front-End

- 최용석 (PM) [https://github.com/zoo0190](https://github.com/zoo0190)
- [임대호](https://github.com/ingdaeho)
- 김찬영  [https://github.com/Yoooong-Chan](https://github.com/Yoooong-Chan)
- 강경오  [https://github.com/kangko05](https://github.com/kangko05)

### Back-End

- 문승희 [https://github.com/Muntari29](https://github.com/Muntari29)
- 최선우

# 구현한 기능 🔥

# Front-End  🤞

## 로그인(소셜 로그인), 회원가입 🙆‍♂️

- 아이디, 비밀번호 유효성 검사 기능 구현
- fetch API 통신을 이용한 아이디 중복 확인 기능 구현
- fetch API 통신으로 서버 유저 데이터 등록 기능 구현
- API를이용해 사용자의 아이디, 비밀번호 정보를 백엔드와 통신
- 로그인, 회원가입 버튼 기능 구현
- 카카오 소셜 로그인 기능 구현
- 간략한 유저 정보를 가져와 보여주는 모달창 구현
- 로그아웃 버튼 기능 구현
- 약관페이지 전체선택, 전체 해제, 개별 해제시 전체선택 해제되는 기능 구현
- styled-component와 sass를 이용한 페이지 스타일링

## 메인  🙋‍♂️

- state를 props로 활용하여 예매 Bar 동적 레이아웃 구현
- react-date와 moment를 활용한 날짜 선택 가능한 달력
- Redux를 통한 상태 관리

## 항공권 예매 ✈

- 함수형 컴포넌트, React hooks를 사용하여 state관리
- useEffect, setTimeout, keyframes로 로딩스피너 구현
- 백엔드에서 fetch 함수로 받아온 데이터를 화면 UI에 맞게 가공
- 협업 과정에서 나타날 수 있는 Git comflict 해결, Git squash, rebase 사용요령 습득
- styled-component의 theme, GlobalStyles 관리 및 props 사용을 통한 UI 변화

## 탑승자 정보 🤦‍♂️

- Booking Header이 공통적으로 사용되어 Contents만 구간별로 페이지이동시 컴포넌트 변경
- 탑승자정보페이지 Accordion MenuTap 구현 및 백엔드에서 회원가입정보 Get하여 mapping
- Accordion Menu에서 탑승자 정보 입력시, 입력한 총합된 Data를 결제페이지로 최종적으로 전달
- Accordion Menu 안에 있는 국적검색 버튼 클릭시 모달창기능 모달창안에 검색기능
- Seleted 생년월일에서 moment.js 사용하여 년도,월,일,월 자동적으로 계산 세팅
- 휴대전화 입력시 정규식표현 이용하여 자동으로 하이픈 추가기능
- 이전단계, 다음단계 이동시 사용자가 현재 무슨 페이지인지 알수있도록 UX 표시 및 제거기능
- checkbox 전체선택 ,부분선택 기능
- 예매클릭시 나만의 예메 리스트 페이지 구현

# Back-End 🤞

## 초기세팅 & 모델링 (ERD)

![](https://www.notion.so/3cc92e017f3d4b53afb7cd4d211435ed#fcfe6b9161194ea68336d1ded52957e1)


## 회원가입 & 로그인 API

## 항공권 예매 API

- 예매에서 선택한 출발지, 도착지, 성인, 유아를 FILTERING 구현
- 선택된 예매 정보에 해당하는 항공권의 각 노선 DATA를 Restful API 구현
- 

## User 🙆‍♂️

## 회원가입/ 로그인/ 소셜로그인(kakao)

- 아이디, 비밀번호 유효성 검사 기능 구현
- bcrypt를 이용한 비밀번호 암호화
- jwt 만료기간을 설정한 인증/인가 구현
- 카카오 소셜로그인 Request/Response 기능 구현
- 회원가입 중복 체크 API 구현
- 회원가입/로그인/소셜 로그인 프론트/백엔드 API 연결
- Unit Test 구현

## Flight  🙆‍♂️

## 

- 아이디, 비밀번호 유효성 검사 기능 구현
- bcrypt를 이용한 비밀번호 암호화
- jwt 만료기간을 설정한 인증/인가 구현
- 카카오 소셜로그인 Request/Response 기능 구현
- 회원가입 중복 체크 API 구현
- 회원가입/로그인/소셜 로그인 프론트/백엔드 API 연결
- Unit Test 구현

## 공통사항

[standing meeting](https://www.notion.so/e20a375a8fc24044b31bec315740a33a)

### Trello

[https://trello.com/invite/b/e1Zg32hl/e92494087b735ed19248012ac0175b0d/tangway](https://trello.com/invite/b/e1Zg32hl/e92494087b735ed19248012ac0175b0d/tangway)
