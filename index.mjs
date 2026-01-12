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
 * 기본 설정 (Next.js/React 프로젝트용)
 *
 * Next.js와 충돌을 피하기 위해 TypeScript와 imports 모듈 제외
 * Next.js는 이미 @typescript-eslint와 eslint-plugin-import를 포함합니다
 *
 * 포함된 규칙:
 * - 보안 규칙
 * - 웹 접근성
 * - 코드 스타일 일관성
 *
 * Tailwind CSS는 선택적으로 추가하세요 (아래 with-tailwind export 참고)
 */
const radpubConfig = [
  ...base,
  // ...typescript,  // Next.js가 이미 제공 (충돌 방지)
  ...accessibility,
  ...security,
  ...stylistic,
  // ...imports,     // Next.js가 이미 제공 (충돌 방지)
  // ...tailwind,    // 선택 사항
  ...ignores,
];

/**
 * Tailwind CSS 포함 설정 (Next.js + Tailwind 프로젝트용)
 */
const withTailwindConfig = [
  ...base,
  // ...typescript,
  ...accessibility,
  ...security,
  ...stylistic,
  // ...imports,
  ...tailwind,
  ...ignores,
];

/**
 * Standalone 설정 (비Next.js 프로젝트용)
 *
 * TypeScript, imports 포함한 모든 규칙
 * Vite, CRA 등 Next.js 외의 프로젝트에서 사용
 */
const standaloneConfig = [
  ...base,
  ...typescript,
  ...accessibility,
  ...security,
  ...stylistic,
  ...imports,
  // ...tailwind,  // 선택 사항
  ...ignores,
];

/**
 * Standalone + Tailwind 설정
 */
const standaloneWithTailwindConfig = [
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

// 개별 모듈 및 프리셋 export
export {
  accessibility,
  base,
  ignores,
  imports,
  security,
  standaloneConfig as standalone,
  standaloneWithTailwindConfig as standaloneWithTailwind,
  stylistic,
  tailwind,
  typescript,
  withTailwindConfig as withTailwind,
};
