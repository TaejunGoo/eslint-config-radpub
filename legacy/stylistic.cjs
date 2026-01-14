/**
 * 스타일 ESLint 설정 (ESLint 8)
 *
 * 코드 포맷팅 및 스타일 일관성 규칙
 * - 들여쓰기 (스페이스 2칸)
 * - 따옴표 스타일 (작은따옴표)
 * - 세미콜론 (필수)
 * - 공백 및 괄호
 * - 줄 바꿈 및 빈 줄
 *
 * @stylistic/eslint-plugin을 사용한 포맷팅 규칙
 */
module.exports = {
  plugins: ['@stylistic'],
  rules: {
    // ============================================
    // 들여쓰기 및 따옴표
    // ============================================

    // 들여쓰기는 스페이스 2칸
    '@stylistic/indent': ['error', 2],

    // 문자열은 작은따옴표 사용
    // 예: 'hello' (O), "hello" (X)
    '@stylistic/quotes': ['error', 'single'],

    // 세미콜론 필수
    // 예: const x = 1; (O), const x = 1 (X)
    '@stylistic/semi': ['error', 'always'],

    // JSX 속성값은 작은따옴표 사용
    // 예: <div className='container'> (O)
    '@stylistic/jsx-quotes': ['error', 'prefer-single'],

    // ============================================
    // 공백 및 괄호
    // ============================================

    // 객체 중괄호 내부에 공백 필수
    // 예: { a: 1 } (O), {a: 1} (X)
    '@stylistic/object-curly-spacing': ['error', 'always'],

    // 배열 대괄호 내부에 공백 없음
    // 예: [1, 2, 3] (O), [ 1, 2, 3 ] (X)
    '@stylistic/array-bracket-spacing': ['error', 'never'],

    // 쉼표 앞에는 공백 없음, 뒤에는 공백 필수
    // 예: const arr = [1, 2, 3]; (O)
    '@stylistic/comma-spacing': ['error', { before: false, after: true }],

    // 화살표 함수 파라미터는 항상 괄호로 감싸기
    // 예: (x) => x + 1 (O), x => x + 1 (X)
    '@stylistic/arrow-parens': ['error', 'always'],

    // ============================================
    // 줄 바꿈 및 빈 줄
    // ============================================

    // 여러 줄일 때는 trailing comma 필수
    // 예: { a: 1, b: 2, } (O)
    '@stylistic/comma-dangle': ['error', 'always-multiline'],

    // 파일 끝에 빈 줄 필수
    '@stylistic/eol-last': ['error', 'always'],

    // 연속된 빈 줄은 최대 1개까지만 허용
    '@stylistic/no-multiple-empty-lines': ['error', { max: 1 }],
  },
};
