A.d(t, { B: () => o });
var n = A(255367);
A(73800);
var r = A(481060),
    l = A(120651),
    a = A(388032);
function o(e, t, A) {
    let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    (0, l.Z)({
        title: e,
        body:
            'string' == typeof t
                ? t
                : a.intl.format(
                      t,
                      (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var A = null != arguments[t] ? arguments[t] : {},
                                  n = Object.keys(A);
                              ('function' == typeof Object.getOwnPropertySymbols &&
                                  (n = n.concat(
                                      Object.getOwnPropertySymbols(A).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(A, e).enumerable;
                                      })
                                  )),
                                  n.forEach(function (t) {
                                      var n;
                                      ((n = A[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: n,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                })
                                              : (e[t] = n));
                                  }));
                          }
                          return e;
                      })(
                          {
                              highlightHook: (e) =>
                                  (0, n.jsx)(r.Text, {
                                      variant: 'text-md/normal',
                                      color: 'text-default',
                                      style: { display: 'inline' },
                                      children: e
                                  })
                          },
                          o
                      )
                  ),
        cta: a.intl.string(a.t['NX+WJC']),
        onConfirm: () => {},
        iconVariant: A
    });
}
