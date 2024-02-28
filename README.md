# To Do List

항해99 리액트 2차 과제

## 컴포넌트 구조

├── App.js
├── components
│   ├── common
│   │   ├── ActionButton.jsx
│   │   └── TextInput.jsx
│   ├── features
│   │   └── todo
│   │       ├── AddTodo
│   │       ├── RenderTodos
│   │       └── TodoCard
│   └── layout
│       ├── Header.jsx
│       ├── Layout.jsx
├── pages
│   ├── Home
│   └── TodoDetail
├── redux
│   ├── config
│   └── modules
│       ├── counter.js
│       └── todos.js
└── utils
    └── isNonEmptyText.js

1. App.js : react-router-dom 라이브러리를 사용해 각 페이지를 라우팅
2. components
   - common : 공통으로 쓰는 컴포넌트 ActionButton, TextInput
   - features : 프로젝트 내 기능 단위로 묶은 컴포넌트 (현재 todo가 있음)
   - layout : Header 등 레이아웃에 필요한 컴포넌트
3. pages : 페이지 단위의 컴포넌트
4. redux : 리덕스 modules가 포함
5. utils : 프로젝트에서 공통으로 사용되는 함수

## 질문

1. Action버튼의 type은 총 4개로 add, update, delete, cancel 입니다.
스타일이 거의 유사하고, click이벤트를 props로 받아 실행하는 컴포넌트입니다. 
다른 점은 호버했을 때의 스타일이 약간 다르다는 점 입니다.
재사용하기 위해서 여러 방법을 시도했습니다.
- props로 각각의 스타일 내려주기
- theme을 사용해 각각의 스타일 선언해서 사용하기
- 버튼 타입에 따라 컴포넌트를 만들고 (AddButton), 공통의 버튼 컴포넌트를 자식 컴포넌트로 사용하기(BaseButton)
그 결과 지금의 구조가 되었습니다. 어떻게 하면 컴포넌트 재사용을 잘 할 수 있을지 궁금합니다.

 2. 컴포넌트 안에서 로직과 렌더링 관련 코드를 분리하려고 합니다.
로직 관련 코드를 무작정 모두 분리해 커스텀 훅으로 만들어서 작성했는데,
더 좋은 방식이 있을 것 같아 찾아보았습니다.
그래서 나름 내린 결론은 해당 컴포넌트의 렌더링에 직접적인 영향을 주는 로직은 컴포넌트 내에 두고,
그렇지 않은 로직은 커스텀훅으로 만들어 함수만 받아 사용하도록 하는 것 이었습니다.
어떤 방식이 좋은 방식인지 궁금합니다.
