/**
 * eslint-config-radpub (ESLint 8 Legacy)
 *
 * React (Vite) 프로젝트를 위한 핵심 ESLint 설정
 *
 * @example
 * // .eslintrc.js
 * module.exports = {
 *   extends: ['eslint-config-radpub/legacy']
 * }
 *
 * @example
 * // 개별 모듈 사용
 * module.exports = {
 *   extends: [
 *     'eslint-config-radpub/legacy/base',
 *     'eslint-config-radpub/legacy/security',
 *     // 필요한 것만 선택
 *   ]
 * }
 */
module.exports = {
  extends: [
    './base.cjs',
    './security.cjs',
    './stylistic.cjs',
    './accessibility.cjs',
    './react-security.cjs',
    './typescript.cjs',
    './imports.cjs',
  ],
};
