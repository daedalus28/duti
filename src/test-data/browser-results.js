let passing = {
  browsers: {
    "4668268": {
      id: "4668268",
      fullName:
        "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E269 Safari/602.1",
      name: "Mobile Safari 10.0.0 (iOS 10.3.0)",
      state: 5,
      lastResult: {
        success: 121,
        failed: 0,
        skipped: 0,
        total: 121,
        totalTime: 10902,
        netTime: 5189,
        error: false,
        disconnected: false
      },
      disconnectsCount: 0
    },
    "9923021": {
      id: "9923021",
      fullName:
        "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.93 Safari/537.36",
      name: "Chrome 40.0.2214 (Windows 8.1 0.0.0)",
      state: 5,
      lastResult: {
        success: 121,
        failed: 0,
        skipped: 0,
        total: 121,
        totalTime: 3938,
        netTime: 702,
        error: false,
        disconnected: false
      },
      disconnectsCount: 0
    }
  },
  result: {
    "4668268": [
      {
        id: "",
        description: "map arrays",
        suite: ["Algebras"],
        success: true,
        skipped: false,
        time: 6,
        log: [],
        assertionErrors: [],
        startTime: 1509122390703,
        endTime: 1509122390711
      },
      {
        id: "",
        description: "map plain objects",
        suite: ["Algebras"],
        success: true,
        skipped: false,
        time: 3,
        log: [],
        assertionErrors: [],
        startTime: 1509122390711,
        endTime: 1509122390714
      },
      {
        id: "",
        description: "deepMap arrays",
        suite: ["Algebras"],
        success: true,
        skipped: false,
        time: 3,
        log: [],
        assertionErrors: [],
        startTime: 1509122390714,
        endTime: 1509122390717
      }
    ]
  },
  summary: {
    success: 0,
    failed: 0,
    error: false,
    disconnected: false,
    exitCode: 0
  }
};

let failing = {
  browsers: {
    "27865577": {
      id: "27865577",
      fullName:
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36",
      name: "Chrome 61.0.3163 (Mac OS X 10.12.6)",
      state: 1,
      lastResult: {
        success: 120,
        failed: 1,
        skipped: 0,
        total: 121,
        totalTime: 709,
        netTime: 613,
        error: false,
        disconnected: false
      },
      disconnectsCount: 0
    }
  },
  result: {
    "27865577": [
      {
        id: "",
        description: "map arrays",
        suite: ["Algebras"],
        success: true,
        skipped: false,
        time: 1,
        log: [],
        assertionErrors: [],
        startTime: 1509125228146,
        endTime: 1509125228149
      },
      {
        id: "",
        description: "map plain objects",
        suite: ["Algebras"],
        success: false,
        skipped: false,
        time: 3,
        log: [
          "AssertionError: expected { a: 1, b: 4, c: 9 } to deeply equal { a: 1, b: 3, c: 9 }\n    at Proxy.assertEqual (base/test/algebras.spec.js?aa80575e24613a5810f5a296e206cb945c94ceb4:7288:19)\n    at Proxy.methodWrapper (base/test/algebras.spec.js?aa80575e24613a5810f5a296e206cb945c94ceb4:5547:25)\n    at Context.<anonymous> (base/test/algebras.spec.js?aa80575e24613a5810f5a296e206cb945c94ceb4:13417:39)"
        ],
        assertionErrors: [
          {
            name: "AssertionError",
            message:
              "expected { a: 1, b: 4, c: 9 } to deeply equal { a: 1, b: 3, c: 9 }",
            showDiff: true,
            actual: '{\n  "a": 1\n  "b": 4\n  "c": 9\n}',
            expected: '{\n  "a": 1\n  "b": 3\n  "c": 9\n}'
          }
        ],
        startTime: 1509125228149,
        endTime: 1509125228157
      },
      {
        id: "",
        description: "deepMap arrays",
        suite: ["Algebras"],
        success: true,
        skipped: false,
        time: 1,
        log: [],
        assertionErrors: [],
        startTime: 1509125228158,
        endTime: 1509125228159
      },
      {
        id: "",
        description: "deepMap plain objects",
        suite: ["Algebras"],
        success: true,
        skipped: false,
        time: 1,
        log: [],
        assertionErrors: [],
        startTime: 1509125228159,
        endTime: 1509125228160
      },
      {
        id: "",
        description: "deepMap plain objects with arrays with objects",
        suite: ["Algebras"],
        success: true,
        skipped: false,
        time: 2,
        log: [],
        assertionErrors: [],
        startTime: 1509125228160,
        endTime: 1509125228162
      },
      {
        id: "",
        description: "compactJoin",
        suite: ["Array Functions"],
        success: true,
        skipped: false,
        time: 1,
        log: [],
        assertionErrors: [],
        startTime: 1509125228162,
        endTime: 1509125228163
      },
      {
        id: "",
        description: "dotJoin",
        suite: ["Array Functions"],
        success: true,
        skipped: false,
        time: 0,
        log: [],
        assertionErrors: [],
        startTime: 1509125228163,
        endTime: 1509125228163
      },
      {
        id: "",
        description: "repeated",
        suite: ["Array Functions"],
        success: true,
        skipped: false,
        time: 1,
        log: [],
        assertionErrors: [],
        startTime: 1509125228164,
        endTime: 1509125228165
      },
      {
        id: "",
        description: "mergeRanges",
        suite: ["Array Functions"],
        success: true,
        skipped: false,
        time: 2,
        log: [],
        assertionErrors: [],
        startTime: 1509125228165,
        endTime: 1509125228167
      },
      {
        id: "",
        description: "cycle",
        suite: ["Array Functions"],
        success: true,
        skipped: false,
        time: 0,
        log: [],
        assertionErrors: [],
        startTime: 1509125228167,
        endTime: 1509125228167
      },
      {
        id: "",
        description: "arrayToObject",
        suite: ["Array Functions"],
        success: true,
        skipped: false,
        time: 1,
        log: [],
        assertionErrors: [],
        startTime: 1509125228167,
        endTime: 1509125228168
      },
      {
        id: "",
        description: "pushIn",
        suite: ["Array Functions"],
        success: true,
        skipped: false,
        time: 0,
        log: [],
        assertionErrors: [],
        startTime: 1509125228168,
        endTime: 1509125228168
      },
      {
        id: "",
        description: "pushOn",
        suite: ["Array Functions"],
        success: true,
        skipped: false,
        time: 0,
        log: [],
        assertionErrors: [],
        startTime: 1509125228168,
        endTime: 1509125228168
      },
      {
        id: "",
        description: "should combine aspect states",
        suite: ["Aspect Functions"],
        success: true,
        skipped: false,
        time: 4,
        log: [],
        assertionErrors: [],
        startTime: 1509125228168,
        endTime: 1509125228172
      },
      {
        id: "",
        description: "should support .after calls (`logs` aspect)",
        suite: ["Aspect Functions"],
        success: true,
        skipped: false,
        time: 3,
        log: [],
        assertionErrors: [],
        startTime: 1509125228174,
        endTime: 1509125228178
      }
    ],
    "4668268": [
      {
        id: "",
        description: "map arrays",
        suite: ["Algebras"],
        success: true,
        skipped: false,
        time: 6,
        log: [],
        assertionErrors: [],
        startTime: 1509122390703,
        endTime: 1509122390711
      },
      {
        id: "",
        description: "map plain objects",
        suite: ["Algebras"],
        success: true,
        skipped: false,
        time: 3,
        log: [],
        assertionErrors: [],
        startTime: 1509122390711,
        endTime: 1509122390714
      },
      {
        id: "",
        description: "deepMap arrays",
        suite: ["Algebras"],
        success: true,
        skipped: false,
        time: 3,
        log: [],
        assertionErrors: [],
        startTime: 1509122390714,
        endTime: 1509122390717
      }
    ],
    "99657775": [
      {
        id: "",
        description: "pushIn",
        suite: ["Array Functions"],
        success: true,
        skipped: false,
        time: 0,
        log: [],
        assertionErrors: [],
        startTime: 1509129226496,
        endTime: 1509129226496
      },
      {
        id: "",
        description: "pushOn",
        suite: ["Array Functions"],
        success: true,
        skipped: false,
        time: 0,
        log: [],
        assertionErrors: [],
        startTime: 1509129226496,
        endTime: 1509129226496
      },
      {
        id: "",
        description: "should combine aspect states",
        suite: ["Aspect Functions"],
        success: false,
        skipped: false,
        time: 8,
        log: [
          "AssertionError: expected null to equal 1\n    at _callee$ (base/test/aspect.spec.js?c323422afadc24b9b1117dcd6826bfe3e8ca300a:13870:39)\n    at tryCatch (base/node_modules/babel-polyfill/dist/polyfill.js?a53df70d879dcf83b4f9965f1f6bd9d3006f895d:6900:40)\n    at Generator.invoke [as _invoke] (base/node_modules/babel-polyfill/dist/polyfill.js?a53df70d879dcf83b4f9965f1f6bd9d3006f895d:7138:22)\n    at Generator.prototype.(anonymous function) [as next] (base/node_modules/babel-polyfill/dist/polyfill.js?a53df70d879dcf83b4f9965f1f6bd9d3006f895d:6952:21)\n    at step (base/test/aspect.spec.js?c323422afadc24b9b1117dcd6826bfe3e8ca300a:13850:202)\n    at base/test/aspect.spec.js?c323422afadc24b9b1117dcd6826bfe3e8ca300a:13850:459\n    at Context.<anonymous> (base/test/aspect.spec.js?c323422afadc24b9b1117dcd6826bfe3e8ca300a:13850:99)"
        ],
        assertionErrors: [
          {
            name: "AssertionError",
            message: "expected null to equal 1",
            showDiff: true,
            actual: "[null]",
            expected: "1"
          }
        ],
        startTime: 1509129226496,
        endTime: 1509129226505
      },
      {
        id: "",
        description: "should support .after calls (`logs` aspect)",
        suite: ["Aspect Functions"],
        success: true,
        skipped: false,
        time: 5,
        log: [],
        assertionErrors: [],
        startTime: 1509129226506,
        endTime: 1509129226511
      }
    ]
  },
  summary: {
    success: 120,
    failed: 2,
    error: false,
    disconnected: false,
    exitCode: 1
  }
};

module.exports = {
  passing,
  failing
};
