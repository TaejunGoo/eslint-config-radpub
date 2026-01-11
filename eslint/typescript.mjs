import tseslint from "typescript-eslint";

/**
 * TypeScript ESLint 설정
 *
 * TypeScript 엄격성 및 모범 사례 설정
 * - typescript-eslint의 권장 및 스타일 규칙
 * - 엄격한 타입 체크 및 import 관리
 * - 미사용 변수 감지
 * - 명시적 any 방지
 */
const typescriptConfig = [
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  {
    rules: {
      // ============================================
      // 타입 안정성
      // ============================================

      // any 타입 명시적 사용 방지 (점진적 적용을 위해 warn)
      "@typescript-eslint/no-explicit-any": "warn",

      // non-null assertion (!.) 사용 제한 (필요시 더 엄격하게 설정 가능)
      "@typescript-eslint/no-non-null-assertion": "warn",

      // ============================================
      // Import 관리
      // ============================================

      // 타입 import를 type-only import로 분리하여 일관성 유지
      // 예: import type { User } from './types'
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          prefer: "type-imports",
          fixStyle: "separate-type-imports",
        },
      ],

      // ============================================
      // 코드 품질
      // ============================================

      // 미사용 변수 감지 (_ 로 시작하는 변수는 무시)
      // 예: const _unusedVar = 1; (경고 없음)
      "@typescript-eslint/no-unused-vars": [
        "warn",
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
