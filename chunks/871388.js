A.d(t, { B: () => i });
var r = A(951288);
A(647438);
var n = A(481060),
    a = A(120651),
    l = A(388032);
function i(e, t) {
    let A = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    (0, a.Z)({
        title: e,
        body:
            "string" == typeof t
                ? t
                : l.intl.format(
                      t,
                      (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var A = null != arguments[t] ? arguments[t] : {},
                                  r = Object.keys(A);
                              "function" == typeof Object.getOwnPropertySymbols &&
                                  (r = r.concat(
                                      Object.getOwnPropertySymbols(A).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(A, e).enumerable;
                                      }),
                                  )),
                                  r.forEach(function (t) {
                                      var r;
                                      (r = A[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: r,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0,
                                                })
                                              : (e[t] = r);
                                  });
                          }
                          return e;
                      })(
                          {
                              highlightHook: (e) =>
                                  (0, r.jsx)(n.Text, {
                                      variant: "text-md/normal",
                                      color: "text-default",
                                      style: { display: "inline" },
                                      children: e,
                                  }),
                          },
                          A,
                      ),
                  ),
        cta: l.intl.string(l.t["NX+WJC"]),
        onConfirm: () => {},
    });
}
