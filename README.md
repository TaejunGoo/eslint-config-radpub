# eslint-config-radpub

TypeScript + React + Next.js 프로젝트를 위한 핵심 ESLint 설정 패키지

## 특징

이 패키지는 **React/Next.js 자체 규칙을 제외**하고, 다음 핵심 규칙만 제공합니다:

- ✅ **보안** - XSS 방지, 코드 인젝션 방지
- ✅ **접근성 (a11y)** - ARIA, 키보드 탐색, 시맨틱 HTML
- ✅ **코드 스타일** - 일관된 들여쓰기, 따옴표, 세미콜론
- ✅ **Tailwind CSS** - 선택 사항 (별도 export)

> **왜 React/Next.js/TypeScript 규칙이 없나요?**
>
> React와 Next.js는 이미 자체 ESLint 설정(`eslint-config-next`)을 제공하며, TypeScript 규칙도 포함되어 있습니다.
> `eslint-config-radpub`은 프레임워크 규칙과 독립적으로 작동하는 코어 규칙만 제공하여 플러그인 충돌을 방지합니다.

## 설치

```bash
pnpm add -D eslint-config-radpub eslint
```

## 사용 방법

### Next.js 프로젝트 (Tailwind 없음)

`eslint.config.mjs`:

```js
import next from "eslint-config-next/core-web-vitals";
import radpub from "eslint-config-radpub";

export default [
  ...next,
  ...radpub,
];
```

### Next.js + Tailwind 프로젝트

`eslint.config.mjs`:

```js
import next from "eslint-config-next/core-web-vitals";
import { withTailwind } from "eslint-config-radpub";

export default [
  ...next,
  ...withTailwind,
];
```

**필수:** Tailwind 사용 시 플러그인 설치 필요

```bash
pnpm add -D eslint-plugin-better-tailwindcss
```

### Vite/CRA 등 비Next.js 프로젝트

`eslint.config.mjs`:

```js
import { standalone } from "eslint-config-radpub";

export default standalone;
```

### Vite/CRA + Tailwind 프로젝트

`eslint.config.mjs`:

```js
import { standaloneWithTailwind } from "eslint-config-radpub";

export default standaloneWithTailwind;
```

## 사용 가능한 Exports

### 프리셋

| Export | 설명 | 포함된 모듈 |
|--------|------|-------------|
| `default` | Next.js 프로젝트용 기본 설정 | base, accessibility, security, stylistic |
| `withTailwind` | Next.js + Tailwind | 기본 + tailwind |
| `standalone` | 비Next.js 프로젝트용 | base, typescript, accessibility, security, stylistic, imports |
| `standaloneWithTailwind` | 비Next.js + Tailwind | standalone + tailwind |

### 개별 모듈

필요한 규칙만 선택적으로 사용:

```js
import base from "eslint-config-radpub/base";
import typescript from "eslint-config-radpub/typescript";
import security from "eslint-config-radpub/security";
import tailwind from "eslint-config-radpub/tailwind";

export default [
  ...base,
  ...typescript,
  ...security,
  ...tailwind,
];
```

사용 가능한 모듈:
- `base` - JavaScript/TypeScript 기본 규칙
- `typescript` - TypeScript 엄격성 규칙
- `security` - 보안 규칙
- `accessibility` - 웹 접근성 규칙
- `stylistic` - 코드 스타일 규칙
- `imports` - Import 정렬 규칙
- `tailwind` - Tailwind CSS 규칙
- `ignores` - 무시 패턴

## 커스터마이징

### Tailwind entryPoint 오버라이드

프로젝트별로 Tailwind CSS 진입점 지정:

```js
import next from "eslint-config-next/core-web-vitals";
import { withTailwind } from "eslint-config-radpub";

export default [
  ...next,
  ...withTailwind,
  {
    settings: {
      "better-tailwindcss": {
        entryPoint: "./app/globals.css",
      },
    },
  },
];
```

### 규칙 오버라이드

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
      "jsx-a11y/alt-text": "error", // warn → error로 강화
    },
  },
];
```

## 필수 의존성

- `eslint` ^9.0.0

## 선택 의존성

- `eslint-plugin-better-tailwindcss` >=3.0.0 (Tailwind 사용 시)

## 포함된 플러그인

- `@eslint/js` - ESLint 기본 규칙
- `@stylistic/eslint-plugin` - 코드 스타일 규칙
- `eslint-plugin-import` - Import 정렬 (standalone에서만)
- `typescript-eslint` - TypeScript 규칙 (standalone에서만)

## 규칙 상세 설명

모든 규칙에는 한글 주석이 포함되어 있어 이해하기 쉽습니다.

### 보안

- `eval()` 사용 금지
- XSS 방지 (`dangerouslySetInnerHTML` 경고)
- `console.log` 경고 (warn, error는 허용)
- `debugger` 구문 금지
- `alert/confirm/prompt` 경고

### 접근성 (a11y)

- 이미지 `alt` 텍스트 필수
- ARIA 속성 검증
- 키보드 탐색 지원
- 시맨틱 HTML 강제
- 비인터랙티브 요소에 이벤트 핸들러 금지

### 코드 스타일

- 들여쓰기: 스페이스 2칸
- 따옴표: 큰따옴표 사용
- 세미콜론: 필수
- trailing comma: 멀티라인에서 필수
- 파일 끝 빈 줄 필수

### Tailwind CSS (선택)

- 공식 클래스 순서 강제
- 중복 클래스 감지
- 단축 클래스 사용 (예: `px-4` vs `pl-4 pr-4`)
- 충돌하는 클래스 감지

### Import 정렬 (standalone에서만)

자동으로 import를 다음 순서로 정렬:
1. Node.js 내장 모듈
2. React (최우선)
3. npm 패키지
4. 내부 경로 (`@/` 별칭)
5. 상대 경로

### TypeScript (standalone에서만)

- `any` 타입 명시적 사용 방지 (warn)
- 타입 import 분리 (`import type { ... }`)
- 미사용 변수 감지 (`_`로 시작하는 변수 제외)
- non-null assertion 제한

## gyeol 프로젝트에서 사용하기

원본 gyeol 프로젝트는 기존 모듈 구조를 유지하고, 다른 프로젝트에서 이 패키지를 사용합니다.

```js
// 다른 Next.js + Tailwind 프로젝트
import next from "eslint-config-next/core-web-vitals";
import { withTailwind } from "eslint-config-radpub";

export default [
  ...next,
  ...withTailwind,
];
```

## 라이센스

MIT

## 기여

버그 리포트 및 기능 제안은 [GitHub Issues](https://github.com/your-username/eslint-config-radpub/issues)에서 환영합니다.
