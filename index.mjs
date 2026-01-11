/**
 * eslint-config-radpub
 *
 * Next.js + TypeScript + React를 위한 공유 ESLint 설정
 *
 * @example
 * // eslint.config.mjs
 * import radpub from "eslint-config-radpub";
 * export default radpub;
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
import next from "./eslint/next.mjs";
import react from "./eslint/react.mjs";
import security from "./eslint/security.mjs";
import stylistic from "./eslint/stylistic.mjs";
import tailwind from "./eslint/tailwind.mjs";
import typescript from "./eslint/typescript.mjs";

/**
 * 기본 설정 (모든 규칙 포함)
 */
const radpubConfig = [
  ...base,
  ...typescript,
  ...react,
  ...next,
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
  next,
  react,
  security,
  stylistic,
  tailwind,
  typescript,
};
