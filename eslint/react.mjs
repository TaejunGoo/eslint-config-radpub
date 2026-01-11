/**
 * React ESLint 설정
 *
 * React 전용 규칙 및 모범 사례
 * - React 버전 자동 감지
 * - 화살표 함수 컴포넌트 일관성 유지
 * - React 17+ JSX 변환 (React import 불필요)
 * - 컴포넌트 정의 표준
 *
 * 참고: React Hooks 규칙은 Next.js 설정에 포함되어 있음
 */
const reactConfig = [
  {
    settings: {
      react: {
        // React 버전 자동 감지
        version: "detect",
      },
    },
    rules: {
      // ============================================
      // JSX 및 컴포넌트 정의
      // ============================================

      // React 17+ 에서는 JSX 사용 시 React import 불필요
      "react/react-in-jsx-scope": "off",

      // 컴포넌트를 화살표 함수로 통일하여 일관성 유지
      // 예: const MyComponent = () => { ... }
      "react/function-component-definition": [
        "warn",
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],

      // children이 없는 컴포넌트는 self-closing 태그 사용 강제
      // 예: <Component /> (O), <Component></Component> (X)
      "react/self-closing-comp": [
        "warn",
        {
          component: true,
          html: true,
        },
      ],

      // ============================================
      // Props 검증
      // ============================================

      // prop-types 사용 안 함 (TypeScript로 타입 검증)
      "react/prop-types": "off",
    },
  },
];

export default reactConfig;
