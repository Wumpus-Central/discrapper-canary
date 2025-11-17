A.d(t, { B: () => l });
var n = A(54381);
A(473749);
var r = A(481060),
    a = A(120651),
    i = A(388032);
function l(e, t) {
    let A = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    (0, a.Z)({
        title: e,
        body:
            "string" == typeof t
                ? t
                : i.intl.format(
                      t,
                      (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var A = null != arguments[t] ? arguments[t] : {},
                                  n = Object.keys(A);
                              "function" == typeof Object.getOwnPropertySymbols &&
                                  (n = n.concat(
                                      Object.getOwnPropertySymbols(A).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(A, e).enumerable;
                                      }),
                                  )),
                                  n.forEach(function (t) {
                                      var n;
                                      (n = A[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: n,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0,
                                                })
                                              : (e[t] = n);
                                  });
                          }
                          return e;
                      })(
                          {
                              highlightHook: (e) =>
                                  (0, n.jsx)(r.Text, {
                                      variant: "text-md/normal",
                                      color: "text-default",
                                      style: { display: "inline" },
                                      children: e,
                                  }),
                          },
                          A,
                      ),
                  ),
        cta: i.intl.string(i.t["NX+WJN"]),
        onConfirm: () => {},
    });
}
