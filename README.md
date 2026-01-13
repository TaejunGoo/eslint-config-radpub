# eslint-config-radpub

퍼블리싱 팀을 위한 공용 ESLint 설정 패키지

## 🚀 빠른 시작

### 1️⃣ 설치

```bash
pnpm add -D eslint-config-radpub eslint
```

### 2️⃣ 설정 파일 생성

**Next.js 프로젝트**

```js
// eslint.config.mjs
import radpub from "eslint-config-radpub";

export default radpub({ tool: 'next' });
```

**React (Vite) 프로젝트**

```js
// eslint.config.mjs
import radpub from "eslint-config-radpub";

export default radpub({ tool: 'react' });
```

### 3️⃣ 완료!

이제 프로젝트에서 ESLint를 실행하면 보안, 접근성, 컴포넌트 품질 규칙이 자동으로 적용됩니다.

---

## 🛠 VS Code 자동 수정 설정 (권장)

저장 시 자동으로 코드를 교정하려면 프로젝트 루트에 `.vscode/settings.json` 파일을 생성하고 아래 설정을 추가하세요.

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "editor.formatOnSave": false,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}
```

---

## 특징

- ✅ **보안** - XSS 방지, 코드 인젝션 방지
- ✅ **접근성 (a11y)** - ARIA, 키보드 탐색, 시맨틱 HTML
- ✅ **코드 스타일** - 일관된 들여쓰기, 따옴표, 세미콜론
- ✅ **컴포넌트 품질** - key prop, self-closing, 중첩 컴포넌트 방지
- ✅ **Import 최적화** - 자동 정렬, 중복/순환 참조 방지

> **왜 React/Next.js 기본 규칙이 없나요?**
>
> Next.js는 이미 자체 ESLint 설정(`eslint-config-next`)을 제공하며, React 및 TypeScript 규칙도 포함되어 있습니다.
> `eslint-config-radpub`은 프레임워크 규칙과 독립적으로 작동하는 코어 규칙만 제공하여 플러그인 충돌을 방지합니다.

---

<details>
<summary><h2>📖 API 문서</h2></summary>

### radpub(options?)

ESLint 설정을 생성하는 팩토리 함수입니다.

**Options:**

| 옵션 | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| `tool` | `'next'` \| `'react'` | `'react'` | 프로젝트 타입. `'next'`는 Next.js용, `'react'`는 React (Vite/CRA 등)용 |
| `typescript` | `boolean` | `true` | TypeScript 규칙 포함 여부. `tool: 'react'`일 때만 적용 |

**Returns:** `Array<ESLintConfig>`

### 예제

```js
// Next.js + TypeScript
export default radpub({ tool: 'next' });

// React + TypeScript
export default radpub({ tool: 'react' });

// React + JavaScript (TypeScript 규칙 제외)
export default radpub({ tool: 'react', typescript: false });
```

</details>

<details>
<summary><h2>🧩 개별 모듈 사용</h2></summary>

필요한 규칙만 선택적으로 import하여 사용할 수 있습니다:

```js
import { base, typescript, security, accessibility } from "eslint-config-radpub";

export default [
  ...base,
  ...typescript,
  ...security,
  ...accessibility,
];
```

### 사용 가능한 모듈

| 모듈 | 설명 |
|------|------|
| `base` | JavaScript/TypeScript 기본 규칙 |
| `typescript` | TypeScript 엄격성 규칙 |
| `security` | 보안 규칙 (eval, XSS 방지 등) |
| `reactSecurity` | React 보안 및 컴포넌트 품질 규칙 |
| `accessibility` | 웹 접근성 규칙 (jsx-a11y) |
| `stylistic` | 코드 스타일 규칙 |
| `imports` | Import 정렬 및 최적화 |

</details>

<details>
<summary><h2>⚙️ 커스터마이징</h2></summary>

### 규칙 오버라이드

```js
import radpub from "eslint-config-radpub";

export default [
  ...radpub({ tool: 'next' }),
  {
    rules: {
      // 프로젝트별 규칙 오버라이드
      "no-console": "off",
      "jsx-a11y/alt-text": "error", // warn → error로 강화
    },
  },
];
```

### ignores 패턴 추가

```js
import radpub from "eslint-config-radpub";

export default [
  ...radpub({ tool: 'next' }),
  {
    ignores: ["**/custom-ignore/**", "dist/"],
  },
];
```

</details>

<details>
<summary><h2>📋 포함된 규칙</h2></summary>

### 🔒 보안

- `no-console`: `console.log` 경고 (보안을 위해 warn)
- `no-debugger`: `debugger` 구문 금지
- `no-alert`: `alert/confirm/prompt` 경고 (보안 및 UX를 위해 warn)
- `no-eval`: `eval()` 사용 금지
- `react/no-danger`: `dangerouslySetInnerHTML` 사용 경고

### ♿ 접근성 (a11y)

- 이미지 `alt` 텍스트 필수
- ARIA 속성 검증
- 키보드 탐색 지원
- 시맨틱 HTML 강제
- 비인터랙티브 요소에 이벤트 핸들러 금지

### 🎨 컴포넌트 품질

- 배열 렌더링 시 key prop 필수 (Next.js/React 일관성 위해 error)
- 배열 인덱스를 key로 사용 금지 (warn)
- 자식이 없는 컴포넌트는 self-closing 태그 사용 (warn)
- Boolean props 명시적 작성 (warn)
- 컴포넌트 내부에 컴포넌트 정의 금지 (성능 error)

### 📐 코드 스타일

- **들여쓰기**: 스페이스 2칸
- **따옴표**: 큰따옴표 사용
- **세미콜론**: 필수
- **Trailing comma**: 멀티라인에서 필수
- **파일 끝 빈 줄**: 필수
- **콜백 함수**: 화살표 함수 권장

### 📦 Import 정렬 (tool: 'react'일 때)

자동으로 import를 다음 순서로 정렬:
1. Node.js 내장 모듈
2. React (최우선)
3. npm 패키지
4. 내부 경로 (`@/` 별칭)
5. 상대 경로

**추가 최적화:**
- `import/no-duplicates`: 동일한 모듈에서 여러 번 import 금지
- `import/no-cycle`: 순환 참조 방지

### 📘 TypeScript (tool: 'react'일 때)

- `@typescript-eslint/no-explicit-any`: `any` 타입 명시적 사용 금지 (error)
- `@typescript-eslint/consistent-type-imports`: 타입 import 분리 (`import type { ... }`) 및 인라인 타입 사용 금지
- `@typescript-eslint/no-unused-vars`: 미사용 변수 감지 (error, `_`로 시작하는 변수 제외)
- `@typescript-eslint/no-non-null-assertion`: non-null assertion 제한

</details>

<details>
<summary><h2>📦 포함된 플러그인</h2></summary>

이 패키지는 다음 플러그인들을 포함하고 있어 별도로 설치할 필요가 없습니다:

- `@stylistic/eslint-plugin` - 코드 스타일 규칙
- `eslint-plugin-jsx-a11y` - React 웹 접근성 규칙
- `eslint-plugin-react` - React 보안 및 컴포넌트 품질 규칙
- `eslint-plugin-import` - Import 정렬 및 최적화
- `typescript-eslint` - TypeScript 규칙

> **참고**: ESLint 및 TypeScript의 기본 권장 설정(`recommended`), React Hooks 규칙, 그리고 기본적인 파일 매칭, 언어 옵션(`globals`), 무시 패턴(`ignores`)은 프레임워크(Next.js, Vite 등)에서 기본적으로 제공하거나 프로젝트별로 다르므로, 중복 방지를 위해 이 패키지에서는 제외하고 커스텀 규칙만 제공합니다.

**필수 의존성:**
- `eslint` ^9.0.0

</details>

---

## 라이센스

MIT

## 기여

버그 리포트 및 기능 제안은 GitHub Issues에서 환영합니다.
