/**
 * 웹 접근성 ESLint 설정
 *
 * 포괄적인 UX를 위한 웹 접근성(a11y) 규칙
 * - 시맨틱 HTML 강제
 * - ARIA 속성 검증
 * - 키보드 탐색 지원
 * - 스크린 리더 호환성
 * - 색상 대비 경고
 *
 * 참고: jsx-a11y 플러그인은 Next.js 설정에 이미 포함되어 있음
 * 이 설정은 Next.js 기본값 위에 추가 규칙만 적용
 */
const accessibilityConfig = [
  {
    rules: {
      // ============================================
      // 이미지 및 미디어 접근성
      // ============================================

      // 이미지에 alt 텍스트 필수
      // 예: <img src="..." alt="설명" />
      "jsx-a11y/alt-text": "warn",

      // <img>나 <area>에서 중복된 alt 텍스트 방지
      // 예: alt="image" (X), alt="프로필 사진" (O)
      "jsx-a11y/img-redundant-alt": "warn",

      // ============================================
      // ARIA 속성 검증
      // ============================================

      // ARIA 속성이 유효한지 확인
      // 예: aria-labelledby, aria-describedby 등
      "jsx-a11y/aria-props": "error",

      // ARIA 속성 값이 유효한지 확인
      "jsx-a11y/aria-proptypes": "error",

      // ARIA role이 유효한지 확인
      // 예: role="button", role="navigation" 등
      "jsx-a11y/aria-role": "error",

      // ARIA를 지원하지 않는 요소에 ARIA 사용 금지
      "jsx-a11y/aria-unsupported-elements": "error",

      // ============================================
      // 키보드 탐색 지원
      // ============================================

      // onClick이 있는 요소에 키보드 이벤트 핸들러 필수
      // 예: onClick + onKeyDown/onKeyPress
      "jsx-a11y/click-events-have-key-events": "warn",

      // onMouseOver/onMouseOut이 있으면 onFocus/onBlur도 필요
      "jsx-a11y/mouse-events-have-key-events": "warn",

      // 인터랙티브 핸들러가 있는 요소는 포커스 가능해야 함
      "jsx-a11y/interactive-supports-focus": "warn",

      // tabIndex는 0 이하여야 함 (양수 금지)
      "jsx-a11y/tabindex-no-positive": "warn",

      // ============================================
      // 시맨틱 HTML
      // ============================================

      // heading 요소(h1, h2 등)에 내용 필수
      "jsx-a11y/heading-has-content": "warn",

      // <html> 요소에 lang 속성 필수
      // 예: <html lang="ko">
      "jsx-a11y/html-has-lang": "warn",

      // label과 연결된 컨트롤 필수
      // 예: <label htmlFor="input-id">
      "jsx-a11y/label-has-associated-control": [
        "warn",
        {
          assert: "either",
        },
      ],

      // ============================================
      // 인터랙티브 요소 규칙
      // ============================================

      // 비인터랙티브 요소에 인터랙티브 핸들러 사용 금지
      // 예: <div onClick={...}> (X), <button onClick={...}> (O)
      "jsx-a11y/no-noninteractive-element-interactions": [
        "warn",
        {
          handlers: [
            "onClick",
            "onMouseDown",
            "onMouseUp",
            "onKeyPress",
            "onKeyDown",
            "onKeyUp",
          ],
        },
      ],

      // 정적 HTML 요소에 이벤트 핸들러 사용 금지
      "jsx-a11y/no-static-element-interactions": [
        "warn",
        {
          handlers: [
            "onClick",
            "onMouseDown",
            "onMouseUp",
            "onKeyPress",
            "onKeyDown",
            "onKeyUp",
          ],
        },
      ],

      // ============================================
      // 기타 접근성 규칙
      // ============================================

      // accessKey 속성 사용 금지 (키보드 단축키 충돌 가능)
      "jsx-a11y/no-access-key": "warn",
    },
  },
];

export default accessibilityConfig;
