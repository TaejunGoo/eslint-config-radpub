import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

/**
 * Next.js ESLint 설정
 *
 * Next.js 전용 규칙 및 최적화
 * - Core Web Vitals 체크 (페이지 성능 지표)
 * - Next.js용 TypeScript 지원
 * - React Hooks 규칙 (core-web-vitals에 포함)
 * - Image 최적화 경고
 * - Link 컴포넌트 사용 규칙
 */
const nextConfig = [
  // Next.js Core Web Vitals 설정 (LCP, FID, CLS 등 성능 지표 체크)
  ...nextVitals,

  // Next.js TypeScript 지원
  ...nextTs,
];

export default nextConfig;
