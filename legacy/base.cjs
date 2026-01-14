/**
 * 기본 ESLint 설정 (ESLint 8)
 *
 * JavaScript/TypeScript 기본 규칙 설정
 */
module.exports = {
  rules: {
    // ============================================
    // 함수 표현식 규칙
    // ============================================

    // 콜백 함수는 화살표 함수 사용 권장
    // 예: array.map((item) => item.id) (O)
    'prefer-arrow-callback': 'warn',
  },
};
