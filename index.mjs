/**
 * eslint-config-radpub
 *
 * TypeScript + React를 위한 공유 ESLint 설정
 *
 * @example
 * // eslint.config.mjs (기본 - Next.js 제외)
 * import radpub from "eslint-config-radpub";
 * export default radpub;
 *
 * @example
 * // Next.js 프로젝트
 * import radpubNextjs from "eslint-config-radpub/nextjs";
 * export default radpubNextjs;
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
import react from "./eslint/react.mjs";
import security from "./eslint/security.mjs";
import stylistic from "./eslint/stylistic.mjs";
import tailwind from "./eslint/tailwind.mjs";
import typescript from "./eslint/typescript.mjs";

/**
 * 기본 설정 (Next.js 제외 - 모든 React/TypeScript 프로젝트에서 사용 가능)
 */
const radpubConfig = [
  ...base,
  ...typescript,
  ...react,
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
  react,
  security,
  stylistic,
  tailwind,
  typescript,
};
