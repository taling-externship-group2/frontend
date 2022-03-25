# taling-externship-team-mission Part. frontend


## 탈잉 익스턴십 팀미션 개요
- 탈잉 익스턴십 팀미션은 Home, Detail, search 3가지페이지를 구현하는 것입니다. <br />
- 탈잉에는 학생이 수강할 수 있는 웹툰, 음악, 영상, 부동산 등 다양한 클래스가 존재합니다. <br />
- 탈잉과 튜터가 Home, search 페이지에서 등록한 클래스를 학생은 수강 할 수 있습니다. <br />
- 당장 클래스를 구매하지 않더라도 '찜' 하기 버튼을 누르거나 리뷰를 참고하여 수강 선택에 도움얻을 수 있습니다. <br />
- 녹화된 클래스 영상 뿐만 아니라 실시간 LIVE 수업이 있으며 search 페이지에서 학생의 일정에 맞는 클래스를 찾을 수 있습니다.

## 팀 : 그룹2 (Frontend)
 
| **김호균**                                                                                                                                                            | **고영진**                                                                                                                                                            | **이태성**                                                                                                                                                          |                                                                                                                                                         
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://avatars.githubusercontent.com/u/16056892?v=4" alt="@hogyun3709" size="80" height="80" width="80" data-view-component="true" class="avatar circle"> | <img src="https://avatars.githubusercontent.com/u/70947883?v=4" alt="@eovhdnjawm1" size="80" height="80" width="80" data-view-component="true" class="avatar circle"> | <img src="https://avatars.githubusercontent.com/u/66891085?v=4" alt="@2taesung" size="80" height="80" width="80" data-view-component="true" class="avatar circle"> |
| [Github](https://github.com/hogyun3709)                                                                                                                              | [Github](https://github.com/eovhdnjawm1)                                                                                                                              | [Github](https://github.com/2taesung)                                                                                                                              |

### 프로젝트 목표

- [탈잉](https://taling.me/)의 홈페이지, 클래스 상세페이지, 검색페이지에 대한 clone 코딩을 진행합니다.

### Developement Environments

- FrontEnd Framework: Vue ≥ 3.2
- State management library: Vuex ≥ 4.0
- Router: Vue router ≥ 4.0
- CSS Framework: Taliwindcss ≥ 3.0
- Testing Tools: Vue Test utils ≥ 2.0 / Jest ≥ 27.0
- Linter Tool: Eslint airbnb

### Project Management Tool

- [Notion](https://www.notion.so/taesungportfolio/2-3e914bec62d54e88ba0efbf5003addde)

### 개발일정

2022.03.16 ~ 2022. 03.25

## 역할 분담

### 김호균

- Home 페이지 / Header Component(main) / RollingBanner / Class List Component / Readme
- 사용 API
  - 홈페이지/탈잉BEST 목록 가져오기

### 고영진
 - Detail 페이지 / FooterComponent / Readme
 - 사용 API
   - 상세항목에 대한 ID값 부여

### 이태성
 - Search 페이지 / Header Component(Search, Detail)
 - 사용 API
   - 홈페이지/카테고리에 따른 클래스 목록 가져오기

## UI
![image](https://user-images.githubusercontent.com/70947883/160116106-367df657-bcad-483a-aa2e-f5b98b5f6d48.png)

## 개발하며 고민한 부분 및 해결 방법
# 김호균
 - 설계시 욕심을 부리지 말것
 - 마크업 구현 능력 연습을 꾸준히 진행
 - 프론트에서 자주사용하는 component element들을 외부 라이브러리 없이 구현하는 연습

#고영진
 - etail page API 내용 전달 커뮤니케이션이 원활하지 않아 Data를 적용하지 못하였음
    - 자체적으로 json 파일을 만들어 더미 API 사용 연습
 - css 를 활용하여 버튼 기능을 변경 하도록 연습

#이태성
 - 예상치 못하게 axios에서 cors 문제
 - 생각지 못했던 menu list 동적 ui가 시간을 많이 소모 했습니다.


## Project setup
```
yarn install || npm install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
