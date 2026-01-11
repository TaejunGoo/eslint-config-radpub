import js from "@eslint/js";
import globals from "globals";

/**
 * 기본 ESLint 설정
 *
 * JavaScript/TypeScript 기본 규칙 및 언어 옵션 설정
 * - @eslint/js의 권장 규칙 적용
 * - 브라우저 전역 객체 설정
 * - JS/TS/JSX/TSX 파일 패턴 매칭
 */
const baseConfig = [
  // ESLint 권장 규칙 적용
  js.configs.recommended,

  // 언어 옵션 및 파일 패턴 설정
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    languageOptions: {
      // 브라우저 전역 객체 (window, document 등) 사용 가능하도록 설정
      globals: globals.browser,
    },
  },
];

export default baseConfig;
