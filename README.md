<h1>원티드 프리온보딩 코스 1.5주차 기업과제<br />
사진과 가구 정보 컴포넌트 🛋️</h1>

## 🚀 배포
🔗 **과제물**(netlify): https://hyo-choi-wanted-ggumim.netlify.app/  
🔗 **Storybook**: https://develop--61fbd18d695077004a3c55d8.chromatic.com/

<br>

## 🪄 프로젝트 실행 방법
1. git clone하여 프로젝트를 내려받습니다.
    ```bash
    git clone https://github.com/hyo-choi/wanted-ggumim.git
    ```
2. 아래 커맨드로 패키지를 설치합니다.
    ```bash
    yarn install
    ```
3. 아래 커맨드로 프로젝트를 실행합니다.
    ```bash
    yarn start
    ```
4. (선택) 아래 커맨드로 로컬 환경에서도 Storybook을 확인할 수 있습니다.
    ```bash
    yarn storybook
    ```

<br>

## 🧰 기술 스택 및 구현사항
[![Netlify Status](https://api.netlify.com/api/v1/badges/52ae0d9c-aff9-47c9-b40d-1977fb887069/deploy-status)](https://app.netlify.com/sites/hyo-choi-wanted-ggumim/deploys)


![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Styled-components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) 
![Storybook](https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)

### 📚 전체 구현사항

- 추가 구현사항
  - [x] 컴포넌트의 방 사진 부분이 반응형으로 조절되도록 구현

<br>

- [x] 방 사진 하단의 가구 리스트를 마우스로 스크롤할 수 있도록 구현
  - [x] 영역 너비 이상으로 오버 스크롤하는 경우 원래 위치로 돌아가도록 구현
- [x] 가구 정보가 있는 곳에 돋보기 모양의 버튼을 표시
- [x] 돋보기를 클릭하면 상품정보 tool tip 출력되면서 돋보기모양이 닫기 버튼으로 변경
- [x] 닫기 버튼을 클릭하면 tool tip을 없애고 돋보기 버튼으로 변경
- [x] tool tip은 하나만 노출. tool tip이 노출되고 있는 상태에서 다른 가구를 선택하면 노출되고 있 던 tool tip은 닫히고 새로 클릭한 가구 tool tip만 노출
- [x] 하단에 있는 상품목록에서 해당 가구가 선택되었으면 tool tip 출력
- [x] 선택된 가구는 선택되었으면 표시
- [x] 할인율이 존재하는 경우에는 상단에 할인율(discountRate) 표시
- 가구 정보
  - [x] 입점되어 있는 가구 관련 기능
  - [x] 입점되지 않는 가구 관련 기능

<br>

## 📂 디렉토리 구조

```bash
.
├── public
└── src
    ├── api             # api fetch 함수
    ├── components
    │   ├── ProductList     # 방 사진 아래 리스트용 컴포넌트
    │   ├── ProductTooltip  # 방 사진 위 툴팁 컴포넌트
    │   └── RoomInfo        # 방 사진+가구 정보 컴포넌트
    ├── constants       # 상수
    ├── hooks           # custom hook
    ├── types           # Typescript type & interface
    │   └── components # 컴포넌트에서 사용되는 type
    └── utils           # 의존성 없이 사용되는 함수
```
