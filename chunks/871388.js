r.d(t, { B: () => l });
var n = r(200651);
r(192379);
var A = r(481060),
    a = r(120651),
    o = r(388032);
function l(e, t, r) {
    let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    (0, a.Z)({
        title: e,
        body:
            'string' == typeof t
                ? t
                : o.NW.format(
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
                          l
                      )
                  ),
        cta: o.NW.string(o.t['NX+WJC']),
        onConfirm: () => {},
        iconVariant: r
    });
}
