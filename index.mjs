/**
 * eslint-config-radpub
 *
 * TypeScript + React + Next.js 프로젝트를 위한 핵심 ESLint 설정
 *
 * 이 설정은 React/Next.js 자체 규칙은 포함하지 않습니다.
 * React나 Next.js 프로젝트에서는 해당 프레임워크의 기본 설정과 함께 사용하세요.
 *
 * @example
 * // Next.js 프로젝트 (eslint.config.mjs)
 * import next from "eslint-config-next/core-web-vitals";
 * import radpub from "eslint-config-radpub";
 *
 * export default [
 *   ...next,
 *   ...radpub,
 * ];
 *
 * @example
 * // 개별 모듈 사용
 * import base from "eslint-config-radpub/base";
 * import typescript from "eslint-config-radpub/typescript";
 * export default [...base, ...typescript];
 */

import accessibility from "./eslint/accessibility.mjs";
import base from "./eslint/base.mjs";
import ignores from "./eslint/ignores.mjs";
import imports from "./eslint/imports.mjs";
import security from "./eslint/security.mjs";
import stylistic from "./eslint/stylistic.mjs";
import tailwind from "./eslint/tailwind.mjs";
import typescript from "./eslint/typescript.mjs";

/**
 * 핵심 설정
 * - TypeScript 엄격성 및 모범 사례
 * - 보안 규칙
 * - 웹 접근성
 * - 코드 스타일 일관성
 * - Import 정렬
 * - Tailwind CSS 최적화
 */
const radpubConfig = [
  ...base,
  ...typescript,
  ...accessibility,
  ...security,
  ...stylistic,
  ...imports,
  ...tailwind,
  ...ignores,
];

export default radpubConfig;

// 개별 모듈 export
export {
  accessibility,
  base,
  ignores,
  imports,
  security,
  stylistic,
  tailwind,
  typescript,
};
