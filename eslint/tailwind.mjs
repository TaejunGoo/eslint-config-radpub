import betterTailwindcss from "eslint-plugin-better-tailwindcss";

/**
 * Tailwind CSS ESLint 설정
 *
 * Tailwind 클래스 구조화 및 최적화 규칙
 * - 일관된 클래스 순서 (자동 수정 가능)
 * - 중복 클래스 감지
 * - 단축 클래스 강제
 * - 더 이상 사용되지 않는 클래스 경고
 * - 충돌하는 클래스 감지
 *
 * eslint-plugin-better-tailwindcss를 사용한 Tailwind 최적화
 */
const tailwindConfig = [
  {
    plugins: {
      "better-tailwindcss": betterTailwindcss,
    },
    settings: {
      "better-tailwindcss": {
        // entryPoint는 프로젝트마다 다르므로 자동 감지 사용
        // 필요시 프로젝트의 eslint.config.mjs에서 오버라이드 가능
        // entryPoint: "./app/globals.css",
      },
    },
    rules: {
      // ============================================
      // 스타일 규칙 (자동 수정 가능)
      // ============================================

      // 줄 바꿈 강제 (Windows 호환성을 위해 비활성화)
      "better-tailwindcss/enforce-consistent-line-wrapping": [
        "off",
        { lineBreakStyle: "windows" },
      ],

      // 공식 Tailwind 클래스 순서 강제
      // 예: "flex items-center justify-center" (정해진 순서대로)
      "better-tailwindcss/enforce-consistent-class-order": "warn",

      // 일관된 변수 문법 강제
      // 예: theme(colors.blue.500) vs @apply text-blue-500
      "better-tailwindcss/enforce-consistent-variable-syntax": "warn",

      // ! (important) 위치 일관성 강제
      // 예: !p-4 vs p-4!
      "better-tailwindcss/enforce-consistent-important-position": "warn",

      // 단축 클래스 사용 강제
      // 예: px-4 (O) vs pl-4 pr-4 (X)
      "better-tailwindcss/enforce-shorthand-classes": "warn",

      // 중복 클래스 방지
      // 예: "p-4 p-4" (X)
      "better-tailwindcss/no-duplicate-classes": "error",

      // 더 이상 사용되지 않는 Tailwind 클래스 경고
      "better-tailwindcss/no-deprecated-classes": "warn",

      // 불필요한 공백 제거
      "better-tailwindcss/no-unnecessary-whitespace": "error",

      // ============================================
      // 정확성 규칙
      // ============================================

      // 충돌하는 클래스 방지
      // 예: "p-4 p-2" (서로 덮어씀) (X)
      "better-tailwindcss/no-conflicting-classes": "error",
    },
  },
];

export default tailwindConfig;
