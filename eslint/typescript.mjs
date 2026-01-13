/**
 * TypeScript ESLint 설정
 *
 * TypeScript 엄격성 및 모범 사례 설정
 * - 엄격한 타입 체크 및 import 관리
 * - 미사용 변수 감지
 * - 명시적 any 방지
 */
const typescriptConfig = [
  {
    // TypeScript 관련 규칙은 오직 TS 파일에만 적용되도록 제한하여 파서 에러 방지
    files: ["**/*.{ts,tsx}"],
    rules: {
      // ============================================
      // 타입 안정성
      // ============================================

      // any 타입 명시적 사용 금지 (프레임워크 기본값에 맞춰 error로 설정)
      "@typescript-eslint/no-explicit-any": "error",

      // non-null assertion (!.) 사용 제한 (필요시 더 엄격하게 설정 가능)
      "@typescript-eslint/no-non-null-assertion": "warn",

      // ============================================
      // Import 관리
      // ============================================

      // 타입 import를 type-only import로 분리하여 일관성 유지
      // 예: import type { User } from './types'
      // 프레임워크 기본값은 off이나, 타입 안정성을 위해 warn 유지
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          prefer: "type-imports",
          fixStyle: "separate-type-imports",
          disallowInlineImports: true,
        },
      ],

      // ============================================
      // 코드 품질
      // ============================================

      // 미사용 변수 금지 (React 기본값에 맞춰 error로 설정)
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
  },
];

export default typescriptConfig;
