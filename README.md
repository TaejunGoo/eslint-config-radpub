# eslint-config-radpub

TypeScript + React + Next.js 프로젝트를 위한 핵심 ESLint 설정 패키지

## 특징

이 패키지는 **React/Next.js 자체 규칙을 제외**하고, 다음 핵심 규칙만 제공합니다:

- ✅ **TypeScript** - 엄격한 타입 체크 및 모범 사례
- ✅ **보안** - XSS 방지, 코드 인젝션 방지
- ✅ **접근성 (a11y)** - ARIA, 키보드 탐색, 시맨틱 HTML
- ✅ **코드 스타일** - 일관된 들여쓰기, 따옴표, 세미콜론
- ✅ **Import 정렬** - 자동 정렬 및 그룹화
- ✅ **Tailwind CSS** - 클래스 순서, 중복 감지, 단축 클래스

> **왜 React/Next.js 규칙이 없나요?**
> React와 Next.js는 이미 자체 ESLint 설정(`eslint-config-next`)을 제공합니다.
> `eslint-config-radpub`은 프레임워크 규칙과 독립적으로 작동하는 코어 규칙만 제공하여 충돌을 방지합니다.

## 설치

```bash
pnpm add -D eslint-config-radpub eslint
```

## 사용 방법

### Next.js 프로젝트

Next.js 기본 설정과 함께 사용:

`eslint.config.mjs`:

```js
import next from "eslint-config-next/core-web-vitals";
import radpub from "eslint-config-radpub";

export default [
  ...next,
  ...radpub,
];
```

### React 프로젝트 (Vite, CRA 등)

React 기본 설정과 함께 사용:

`eslint.config.mjs`:

```js
import react from "eslint-plugin-react/configs/recommended.js";
import radpub from "eslint-config-radpub";

export default [
  react,
  ...radpub,
];
```

### TypeScript 전용 프로젝트

React 없이 TypeScript만 사용하는 경우:

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
import security from "eslint-config-radpub/security";

export default [
  ...base,
  ...typescript,
  ...security,
];
```

### 사용 가능한 모듈

- `eslint-config-radpub/base` - JavaScript/TypeScript 기본 규칙
- `eslint-config-radpub/typescript` - TypeScript 엄격성 규칙
- `eslint-config-radpub/security` - 보안 규칙
- `eslint-config-radpub/accessibility` - 웹 접근성 규칙
- `eslint-config-radpub/stylistic` - 코드 스타일 규칙
- `eslint-config-radpub/imports` - Import 정렬 규칙
- `eslint-config-radpub/tailwind` - Tailwind CSS 규칙
- `eslint-config-radpub/ignores` - 무시 패턴

### 커스터마이징

기본 설정을 확장하여 프로젝트별 규칙을 추가할 수 있습니다:

```js
import next from "eslint-config-next/core-web-vitals";
import radpub from "eslint-config-radpub";

export default [
  ...next,
  ...radpub,
  {
    rules: {
      // 프로젝트별 규칙 오버라이드
      "no-console": "off",
      "@typescript-eslint/no-explicit-any": "error", // warn → error로 강화
    },
  },
];
```

## 필수 의존성

- `eslint` ^9.0.0

## 포함된 플러그인

- `@eslint/js`
- `@stylistic/eslint-plugin`
- `typescript-eslint`
- `eslint-plugin-import`
- `eslint-plugin-better-tailwindcss`

## 규칙 상세 설명

모든 규칙에는 한글 주석이 포함되어 있어 이해하기 쉽습니다.

### TypeScript

- any 타입 명시적 사용 방지 (warn)
- 타입 import 분리 (`import type { ... }`)
- 미사용 변수 감지 (\_로 시작하는 변수 제외)

### 보안

- eval() 사용 금지
- XSS 방지 (dangerouslySetInnerHTML 경고)
- console.log 경고 (warn, error는 허용)
- debugger 구문 금지

### 접근성 (a11y)

- 이미지 alt 텍스트 필수
- ARIA 속성 검증
- 키보드 탐색 지원
- 시맨틱 HTML 강제

### Tailwind CSS

- 공식 클래스 순서 강제
- 중복 클래스 감지
- 단축 클래스 사용 (예: px-4 vs pl-4 pr-4)
- 충돌하는 클래스 감지

### Import 정렬

자동으로 import를 다음 순서로 정렬:
1. Node.js 내장 모듈
2. React (최우선)
3. npm 패키지
4. 내부 경로 (@/ 별칭)
5. 상대 경로

## gyeol 프로젝트에서 사용하기

원본 gyeol 프로젝트의 `eslint.config.mjs`:

```js
import next from "eslint-config-next/core-web-vitals";
import radpub from "eslint-config-radpub";

export default [
  ...next,
  ...radpub,
];
```

## 라이센스

MIT

## 기여

버그 리포트 및 기능 제안은 [GitHub Issues](https://github.com/your-username/eslint-config-radpub/issues)에서 환영합니다.
