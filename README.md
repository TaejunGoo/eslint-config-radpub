# eslint-config-radpub

Next.js + TypeScript + React를 위한 공유 ESLint 설정 패키지

## 특징

- ✅ **TypeScript** - 엄격한 타입 체크 및 모범 사례
- ✅ **React 19** - 화살표 함수 컴포넌트, self-closing 태그
- ✅ **Next.js 15** - Core Web Vitals, Image/Link 최적화
- ✅ **Tailwind CSS** - 클래스 순서, 중복 감지, 단축 클래스
- ✅ **접근성 (a11y)** - ARIA, 키보드 탐색, 시맨틱 HTML
- ✅ **보안** - XSS 방지, 코드 인젝션 방지
- ✅ **Import 정렬** - 자동 정렬 및 그룹화
- ✅ **코드 스타일** - 일관된 들여쓰기, 따옴표, 세미콜론

## 설치

```bash
pnpm add -D eslint-config-radpub
```

## 사용 방법

### 기본 사용 (모든 규칙 포함)

`eslint.config.mjs`:

```js
import radpub from "eslint-config-radpub";

export default radpub;
```

### 개별 모듈 사용

필요한 규칙만 선택적으로 사용할 수 있습니다:

```js
import base from "eslint-config-radpub/base";
import typescript from "eslint-config-radpub/typescript";
import react from "eslint-config-radpub/react";
import next from "eslint-config-radpub/next";

export default [
  ...base,
  ...typescript,
  ...react,
  ...next,
];
```

### 사용 가능한 모듈

- `eslint-config-radpub/base` - JavaScript/TypeScript 기본 규칙
- `eslint-config-radpub/typescript` - TypeScript 엄격성 규칙
- `eslint-config-radpub/react` - React 전용 규칙
- `eslint-config-radpub/next` - Next.js 최적화 규칙
- `eslint-config-radpub/security` - 보안 규칙
- `eslint-config-radpub/accessibility` - 웹 접근성 규칙
- `eslint-config-radpub/stylistic` - 코드 스타일 규칙
- `eslint-config-radpub/imports` - Import 정렬 규칙
- `eslint-config-radpub/tailwind` - Tailwind CSS 규칙
- `eslint-config-radpub/ignores` - 무시 패턴

### 커스터마이징

기본 설정을 확장하여 프로젝트별 규칙을 추가할 수 있습니다:

```js
import radpub from "eslint-config-radpub";

export default [
  ...radpub,
  {
    rules: {
      // 프로젝트별 규칙 오버라이드
      "no-console": "off",
    },
  },
];
```

## 필수 의존성

이 패키지는 다음 패키지들을 peer dependency로 사용합니다:

- `eslint` ^9.0.0

## 포함된 플러그인

- `@eslint/js`
- `@stylistic/eslint-plugin`
- `typescript-eslint`
- `eslint-config-next`
- `eslint-plugin-import`
- `eslint-plugin-better-tailwindcss`

## 규칙 상세 설명

모든 규칙에는 한글 주석이 포함되어 있어 이해하기 쉽습니다.

### TypeScript

- any 타입 명시적 사용 방지
- 타입 import 분리
- 미사용 변수 감지 (\_로 시작하는 변수 제외)

### React

- 화살표 함수 컴포넌트 강제
- self-closing 태그 사용
- React 17+ JSX 변환 지원

### Tailwind CSS

- 공식 클래스 순서 강제
- 중복 클래스 감지
- 단축 클래스 사용 (예: px-4 vs pl-4 pr-4)
- 충돌하는 클래스 감지

### 보안

- eval() 사용 금지
- XSS 방지 (dangerouslySetInnerHTML 경고)
- console.log 경고 (warn, error는 허용)
- debugger 구문 금지

## 라이센스

MIT

## 기여

버그 리포트 및 기능 제안은 [GitHub Issues](https://github.com/your-username/eslint-config-radpub/issues)에서 환영합니다.
