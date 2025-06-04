n.d(t, { B: () => o });
var r = n(255367);
n(73800);
var A = n(481060),
    a = n(120651),
    l = n(388032);
function o(e, t, n) {
    let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    (0, a.Z)({
        title: e,
        body:
            'string' == typeof t
                ? t
                : l.intl.format(
                      t,
                      (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                  r = Object.keys(n);
                              'function' == typeof Object.getOwnPropertySymbols &&
                                  (r = r.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                      })
                                  )),
                                  r.forEach(function (t) {
                                      var r;
                                      (r = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: r,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                })
                                              : (e[t] = r);
                                  });
                          }
                          return e;
                      })(
                          {
                              highlightHook: (e) =>
                                  (0, r.jsx)(A.Text, {
                                      variant: 'text-md/normal',
                                      color: 'text-normal',
                                      style: { display: 'inline' },
                                      children: e
                                  })
                          },
                          o
                      )
                  ),
        cta: l.intl.string(l.t['NX+WJC']),
        onConfirm: () => {},
        iconVariant: n
    });
}
