n.d(t, { Z: () => a });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(624848);
function a(e) {
    let { text: t, icon: n, onClick: a, disabled: o, submitting: s } = e;
    return (0, r.jsx)(i.ua7, {
        text: t,
        children: (e) => {
            var t, c;
            return (0, r.jsx)(
                i.zxk,
                ((t = (function (e) {
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
                })({}, e)),
                (c = c =
                    {
                        grow: !1,
                        look: i.zxk.Looks.BLANK,
                        size: i.zxk.Sizes.ICON,
                        onClick: a,
                        disabled: o,
                        submitting: s,
                        className: l.button,
                        innerClassName: l.buttonInner,
                        children: (0, r.jsx)(n, {
                            size: 'custom',
                            width: 16,
                            height: 16
                        })
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(c))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(c)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(c, e));
                      }),
                t)
            );
        }
    });
}
