## Scaffolding

```
├── public
├── src
│   ├── app // app 폴더 하위에는 라우팅 관련 페이지가 들어가며 폴더를 생성하는 기준으로 라우팅합니다.
│   │   ├── layout.tsx // root layout
│   │   ├── page.tsx
│   │   └── test // app 폴더 하위의 폴더(ex.test)는 네이밍 기준으로 구조화가 가능합니다.
│   │       ├── _components // private folders: _ (언더바) - 라우팅과 관련이 없다고 명시해주는 기능입니다.
│   │       │   └── Input.tsx
│   │       ├── _queries
│   │       ├── page.tsx
│   └── shared // 여러 페이지에 공통으로 쓰이는 요소들이 들어갑니다.
│       ├── assets
│       │   ├── Svg.tsx
│       │   ├── icons
│       │   └── logos
│       ├── components // 여러 페이지에 공통으로 쓰이는 컴포넌트들이 들어갑니다.
│       ├── hooks // custom hooks 들이 들어갑니다. (쿼리 훅과 혼동 X)
│       ├── http-client // axios API 요청 기본 설정들이 들어갑니다.
│       │   ├── api.ts
│       │   └── exceptions
│       ├── providers // tanstack-query, 전역 상태 관리 등 provider 가 들어갑니다.
│       ├── queries // tanstack-query hooks 들이 들어갑니다.
│       ├── styles // 글로벌 CSS 설정들이 들어갑니다.
│       │   ├── fonts
│       ├── types
│       └── utils
```
