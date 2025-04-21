r.d(t, { B: () => o });
var n = r(200651);
r(192379);
var A = r(481060),
    a = r(120651),
    l = r(388032);
function o(e, t, r) {
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
                              var r = null != arguments[t] ? arguments[t] : {},
                                  n = Object.keys(r);
                              'function' == typeof Object.getOwnPropertySymbols &&
                                  (n = n.concat(
                                      Object.getOwnPropertySymbols(r).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                      })
                                  )),
                                  n.forEach(function (t) {
                                      var n;
                                      (n = r[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: n,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                })
                                              : (e[t] = n);
                                  });
                          }
                          return e;
                      })(
                          {
                              highlightHook: (e) =>
                                  (0, n.jsx)(A.Text, {
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
        iconVariant: r
    });
}
