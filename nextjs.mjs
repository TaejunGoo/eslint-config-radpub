/**
 * eslint-config-radpub/nextjs
 *
 * Next.js 프로젝트 전용 ESLint 설정
 *
 * 주의: 이 설정은 Next.js가 설치된 프로젝트에서만 사용하세요
 *
 * @example
 * // eslint.config.mjs
 * import radpubNextjs from "eslint-config-radpub/nextjs";
 * export default radpubNextjs;
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
 * Next.js 프로젝트용 설정 (모든 규칙 포함)
 */
const nextjsConfig = [
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

export default nextjsConfig;
