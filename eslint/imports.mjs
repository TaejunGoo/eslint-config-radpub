import importPlugin from "eslint-plugin-import";

/**
 * Import ESLint 설정
 *
 * import 문 정렬 및 구조화
 * - 자동 import 정렬
 * - 그룹 분리 (builtin → external → internal → relative)
 * - React import 우선순위
 * - 그룹 내 알파벳 정렬
 * - TypeScript 경로 해석 (@/ 별칭 지원)
 *
 * eslint-plugin-import를 사용한 import 관리
 */
const importsConfig = [
  {
    plugins: {
      import: importPlugin,
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
    rules: {
      // ============================================
      // Import 정렬 규칙
      // ============================================

      // import 문을 다음 순서로 자동 정렬:
      // 1. Node.js 내장 모듈 (예: fs, path)
      // 2. React (최우선)
      // 3. 외부 패키지 (예: lodash, axios)
      // 4. 내부 경로 별칭 (예: @/components)
      // 5. 상대 경로 (예: ../, ./)
      // 6. index 파일
      // 7. 객체 import
      // 8. 타입 import
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",   // Node.js 내장 모듈
            "external",  // npm 패키지
            "internal",  // @/ 별칭 import
            ["parent", "sibling"], // ../ 와 ./
            "index",     // ./index
            "object",    // 객체 import
            "type",      // 타입 import
          ],
          pathGroups: [
            {
              // React를 가장 먼저 import
              pattern: "react",
              group: "external",
              position: "before",
            },
            {
              // @/로 시작하는 경로를 internal 그룹으로 분류
              pattern: "@/**",
              group: "internal",
            },
          ],
          pathGroupsExcludedImportTypes: ["react"],
          // 각 그룹 사이에 빈 줄 추가
          "newlines-between": "always",
          // 그룹 내에서 알파벳 순으로 정렬
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],

      // ============================================
      // Import 최적화
      // ============================================

      // 동일한 모듈에서 여러 번 import 금지
      // 예: import {a} from 'x'; import {b} from 'x'; (X)
      "import/no-duplicates": "error",

      // 순환 참조 방지 (성능 및 유지보수)
      // 예: A → B → A (X)
      "import/no-cycle": "warn",
    },
  },
];

export default importsConfig;
