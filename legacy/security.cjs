/**
 * 보안 ESLint 설정 (ESLint 8)
 *
 * 일반적인 취약점을 방지하기 위한 보안 모범 사례
 * - XSS (Cross-Site Scripting) 방지
 * - 코드 인젝션 방지
 * - 위험한 패턴 감지
 * - 위험한 API 사용 경고
 *
 * ESLint 내장 보안 규칙 사용
 */
module.exports = {
  rules: {
    // ============================================
    // 코드 인젝션 방지
    // ============================================

    // eval() 사용 금지 (코드 인젝션 위험)
    'no-eval': 'error',

    // 암시적 eval 금지 (setTimeout/setInterval에 문자열 사용)
    // 예: setTimeout("alert('hello')", 1000) (X)
    'no-implied-eval': 'error',

    // Function 생성자 사용 금지 (eval과 유사한 위험)
    // 예: new Function("return 1 + 1") (X)
    'no-new-func': 'error',

    // ============================================
    // XSS (크로스 사이트 스크립팅) 방지
    // ============================================

    // javascript: URL 사용 금지 (XSS 위험)
    // 예: <a href="javascript:alert('xss')"> (X)
    'no-script-url': 'error',

    // ============================================
    // 개발 도구 및 디버깅
    // ============================================

    // console.log 사용 경고 (민감한 정보 노출 가능)
    // 프레임워크 기본값은 off이나, 보안을 위해 warn 유지
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],

    // debugger 구문 금지 (프로덕션 환경)
    'no-debugger': 'error',

    // ============================================
    // 사용자 경험 및 보안
    // ============================================

    // alert/confirm/prompt 사용 경고 (UX 저하, 피싱 가능성)
    // 프레임워크 기본값은 off이나, 보안을 위해 warn 유지
    'no-alert': 'warn',
  },
};
