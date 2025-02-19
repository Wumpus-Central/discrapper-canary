r.d(t, { B: () => l });
var A = r(200651);
r(192379);
var n = r(481060),
    o = r(120651),
    a = r(388032);
function l(e, t, r) {
    let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    (0, o.Z)({
        title: e,
        body:
            'string' == typeof t
                ? t
                : a.NW.format(
                      t,
                      (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var r = null != arguments[t] ? arguments[t] : {},
                                  A = Object.keys(r);
                              'function' == typeof Object.getOwnPropertySymbols &&
                                  (A = A.concat(
                                      Object.getOwnPropertySymbols(r).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                      })
                                  )),
                                  A.forEach(function (t) {
                                      var A;
                                      (A = r[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: A,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                })
                                              : (e[t] = A);
                                  });
                          }
                          return e;
                      })(
                          {
                              highlightHook: (e) =>
                                  (0, A.jsx)(n.Text, {
                                      variant: 'text-md/normal',
                                      color: 'text-normal',
                                      style: { display: 'inline' },
                                      children: e
                                  })
                          },
                          l
                      )
                  ),
        cta: a.NW.string(a.t['NX+WJC']),
        onConfirm: () => {},
        iconVariant: r
    });
}
