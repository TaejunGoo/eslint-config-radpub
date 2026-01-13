# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-01-13

### 초기 릴리즈

퍼블리싱 팀을 위한 공용 ESLint 설정 패키지

#### ✨ 추가된 기능

- **팩토리 함수 패턴**: `radpub({ tool, typescript })` 함수로 유연한 설정 제공
- **Next.js 지원**: `tool: 'next'` 옵션으로 Next.js 프로젝트 지원
- **React 지원**: `tool: 'react'` 옵션으로 Vite/CRA 등 React 프로젝트 지원
- **TypeScript 옵션**: `typescript: false`로 JavaScript 프로젝트 지원
- **플러그인 충돌 방지**: Next.js의 기본 플러그인과 충돌하지 않도록 설계

#### 🔒 보안 규칙

- `eval()` 사용 금지
- XSS 방지 (`dangerouslySetInnerHTML` 경고)
- `console.log` 경고 (warn/error는 허용)
- `debugger` 구문 금지
- `alert/confirm/prompt` 경고

#### ♿ 접근성 규칙 (jsx-a11y)

- 이미지 `alt` 텍스트 필수
- ARIA 속성 검증
- 키보드 탐색 지원
- 시맨틱 HTML 강제
- 비인터랙티브 요소에 이벤트 핸들러 금지

#### 🎨 컴포넌트 품질 규칙

- 배열 렌더링 시 key prop 필수
- 배열 인덱스를 key로 사용 금지 (경고)
- 자식이 없는 컴포넌트는 self-closing 태그 사용
- Boolean props 명시적 작성
- 컴포넌트 내부에 컴포넌트 정의 금지 (성능)
- React 버전 자동 감지 설정

#### 📐 코드 스타일 규칙

- 들여쓰기: 스페이스 2칸
- 따옴표: 작은따옴표 사용
- 세미콜론: 필수
- Trailing comma: 멀티라인에서 필수
- 파일 끝 빈 줄 필수
- 콜백 함수는 화살표 함수 권장

#### 📦 Import 규칙 (tool: 'react' 및 'next')

- 자동 import 정렬 (Node 내장 → React → npm → 내부 → 상대 경로)
- 중복 import 방지 (`import/no-duplicates`)
- 순환 참조 방지 (`import/no-cycle`)

#### 📘 TypeScript 규칙 (tool: 'react'일 때)

- `any` 타입 명시적 사용 방지 (warn)
- 타입 import 분리 (`import type { ... }`)
- 미사용 변수 감지 (`_`로 시작하는 변수 제외)
- non-null assertion 제한

#### 📦 포함된 플러그인

- `@stylistic/eslint-plugin` - 코드 스타일 규칙
- `eslint-plugin-jsx-a11y` - React 웹 접근성 규칙
- `eslint-plugin-react` - React 보안 및 컴포넌트 품질 규칙
- `eslint-plugin-import` - Import 정렬 및 최적화
- `typescript-eslint` - TypeScript 규칙

> **참고**: React Hooks 규칙 및 ESLint/TypeScript 기본 권장 설정(`js.configs.recommended`, `tseslint.configs.recommended`), 그리고 기본적인 파일 매칭, 언어 옵션(`globals`), 무시 패턴(`ignores`)은 React와 Next.js 프로젝트에 기본적으로 포함되어 있어 중복 방지를 위해 이 패키지에서는 제외되었습니다.

#### 🧩 개별 모듈 Export

- `base` - JavaScript/TypeScript 기본 규칙
- `typescript` - TypeScript 엄격성 규칙
- `security` - 보안 규칙
- `reactSecurity` - React 보안 및 컴포넌트 품질 규칙
- `accessibility` - 웹 접근성 규칙
- `stylistic` - 코드 스타일 규칙
- `imports` - Import 정렬 및 최적화

#### 🌐 한글 주석

모든 규칙에 한글 주석이 포함되어 팀원들이 쉽게 이해할 수 있습니다.

#### 🛠️ 개발자 경험

- 옵션 유효성 검증으로 설정 오류 방지
- 명확한 에러 메시지 제공
- ESLint 9.x flat config 형식 지원

---

## 향후 계획

- [ ] ESLint 플러그인 버전 업데이트 자동화
- [ ] 추가 보안 규칙 검토
- [ ] 성능 최적화 규칙 추가
- [ ] 커뮤니티 피드백 기반 규칙 개선
