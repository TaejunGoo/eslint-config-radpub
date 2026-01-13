/**
 * eslint-config-radpub
 *
 * TypeScript + React + Next.js 프로젝트를 위한 핵심 ESLint 설정
 *
 * @example
 * // Next.js 프로젝트 (기본값)
 * import radpub from "eslint-config-radpub";
 *
 * export default radpub();
 *
 * @example
 * // React (Vite) 프로젝트
 * import radpub from "eslint-config-radpub";
 *
 * export default radpub({
 *   tool: 'react', // TypeScript 및 Import 규칙 포함
 * });
 */

import accessibility from "./eslint/accessibility.mjs";
import base from "./eslint/base.mjs";
import reactSecurity from "./eslint/react-security.mjs";
import security from "./eslint/security.mjs";
import stylistic from "./eslint/stylistic.mjs";
import typescript from "./eslint/typescript.mjs";
import importsConfig from "./eslint/imports.mjs";

/**
 * @typedef {Object} ConfigOptions
 * @property {'next' | 'react'} [tool] - 프로젝트 타입. 'next'는 Next.js가 처리하는 규칙 제외, 'react'는 전체 포함.
 * @property {boolean} [typescript] - TypeScript 규칙 포함 여부 (기본값: true). tool이 'react'일 때만 적용.
 */

/**
 * RadPub ESLint 설정 생성
 * @param {ConfigOptions} [options]
 * @returns {Array} ESLint 설정 배열
 */
const radpub = (options = {}) => {
  const { tool = 'react', typescript: useTypescript = true } = options;

  // 옵션 유효성 검증
  if (!['next', 'react'].includes(tool)) {
    throw new Error(`[eslint-config-radpub] Invalid tool option: "${tool}". Must be "next" or "react".`);
  }

  const config = [
    ...base,
    ...security,
    ...stylistic,
  ];

  // React(Vite 등) 환경: 플러그인 포함 전체 설정
  if (tool === 'react') {
    config.push(...accessibility);
    config.push(...reactSecurity);
    if (useTypescript) {
      config.push(...typescript);
    }
    config.push(...importsConfig);
  } 
  // Next.js 환경: 플러그인 충돌 방지를 위해 규칙만 추가
  else if (tool === 'next') {
    // Next.js가 이미 jsx-a11y, react, react-hooks 플러그인을 활성화했으므로 규칙만 추가
    config.push({
      rules: {
        ...accessibility[0].rules,
        ...reactSecurity[0].rules,
      }
    });
    
    // Import 규칙 및 설정 추가 (Next.js에 이미 포함된 import 플러그인 재정의 방지)
    config.push({
      settings: importsConfig[0].settings,
      rules: importsConfig[0].rules,
    });
  }

  return config;
};

export default radpub;

// 개별 모듈 Export
export {
  accessibility,
  base,
  security,
  reactSecurity,
  stylistic,
  typescript,
  importsConfig as imports,
};
