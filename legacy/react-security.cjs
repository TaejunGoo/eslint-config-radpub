/**
 * React 보안 및 품질 ESLint 설정 (ESLint 8)
 *
 * React 특화 보안 및 컴포넌트 품질 규칙
 * - XSS 방지 (dangerouslySetInnerHTML)
 * - target="_blank" 보안
 * - 컴포넌트 품질 (key, self-closing 등)
 *
 * eslint-plugin-react 사용
 */
module.exports = {
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect', // 자동으로 React 버전 감지
    },
  },
  rules: {
    // ============================================
    // XSS (크로스 사이트 스크립팅) 방지
    // ============================================

    // dangerouslySetInnerHTML 사용 시 경고 (XSS 위험)
    'react/no-danger': 'warn',

    // dangerouslySetInnerHTML과 children을 함께 사용 금지
    'react/no-danger-with-children': 'error',

    // target="_blank" 사용 시 rel="noopener noreferrer" 필수 (보안 및 성능)
    // 예: <a target="_blank" rel="noopener noreferrer"> (O)
    'react/jsx-no-target-blank': [
      'warn',
      {
        enforceDynamicLinks: 'always',
      },
    ],

    // ============================================
    // 컴포넌트 품질
    // ============================================

    // 배열 렌더링 시 key prop 필수
    // React 기본값은 off, Next.js는 error이나 일관성을 위해 error 유지
    'react/jsx-key': ['error', {
      checkFragmentShorthand: true,
      checkKeyMustBeforeSpread: true,
    }],

    // 배열 인덱스를 key로 사용하지 않기 (재렌더링 문제)
    // 프레임워크 기본값은 off이나 품질을 위해 warn 유지
    'react/no-array-index-key': 'warn',

    // 자식이 없는 컴포넌트는 self-closing 태그 사용
    // 프레임워크 기본값은 off이나 품질을 위해 warn 유지 (선호에 따라 변경 가능)
    'react/self-closing-comp': ['warn', {
      component: true,
      html: true,
    }],

    // boolean props는 명시적으로 작성
    // 프레임워크 기본값은 off이나 명확성을 위해 warn 유지
    'react/jsx-boolean-value': ['warn', 'always'],

    // 컴포넌트 내부에 컴포넌트 정의 금지 (성능 문제)
    // 예: 함수 컴포넌트 내부에서 다른 함수 컴포넌트 정의 (X)
    'react/no-unstable-nested-components': 'error',
  },
};
