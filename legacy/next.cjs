/**
 * eslint-config-radpub for Next.js (ESLint 8 Legacy)
 *
 * Next.js 프로젝트용 설정
 * Next.js는 이미 jsx-a11y, react, import 플러그인을 포함하므로 규칙만 제공
 *
 * ⚠️ 중요: Next.js 설정보다 뒤에 추가해야 합니다
 *
 * @example
 * // .eslintrc.js
 * module.exports = {
 *   extends: [
 *     'next/core-web-vitals',
 *     'next/typescript',
 *     'eslint-config-radpub/legacy/next'  // ← 반드시 마지막에!
 *   ]
 * }
 */

// 다른 설정 파일에서 규칙 가져오기 (중복 제거)
const accessibilityConfig = require('./accessibility.cjs');
const reactSecurityConfig = require('./react-security.cjs');
const importsConfig = require('./imports.cjs');
const typescriptConfig = require('./typescript.cjs');

module.exports = {
  extends: [
    './base.cjs',
    './security.cjs',
    './stylistic.cjs',
  ],
  settings: {
    // import resolver 설정 (imports.cjs에서 가져오기)
    ...importsConfig.settings,
  },
  rules: {
    // ============================================
    // 접근성 규칙 (accessibility.cjs에서 가져오기)
    // jsx-a11y 플러그인은 Next.js가 이미 등록
    // ============================================
    ...accessibilityConfig.rules,

    // ============================================
    // React 보안 및 품질 규칙 (react-security.cjs에서 가져오기)
    // react 플러그인은 Next.js가 이미 등록
    // ============================================
    ...reactSecurityConfig.rules,

    // ============================================
    // Import 규칙 (imports.cjs에서 가져오기)
    // import 플러그인은 Next.js가 이미 등록
    // ============================================
    ...importsConfig.rules,
  },
  overrides: [
    {
      // TypeScript 규칙 (typescript.cjs에서 가져오기)
      // Next.js가 이미 parser를 설정했으므로 규칙만 추가
      files: ['*.ts', '*.tsx'],
      rules: {
        ...typescriptConfig.overrides[0].rules,
      },
    },
  ],
};
