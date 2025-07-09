n.d(t, { Z: () => o });
var r = n(255367);
n(73800);
var i = n(755721),
    l = n(481060),
    a = n(624848);
function o(e) {
    let { text: t, icon: n, onClick: o, disabled: s, submitting: c } = e;
    return (0, r.jsx)(l.ua7, {
        text: null != t ? t : void 0,
        children: (e) => {
            var t, l;
            return (0, r.jsx)(
                i.zx,
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                ((r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r));
                            }));
                    }
                    return e;
                })({}, e)),
                (l = l =
                    {
                        grow: !1,
                        look: i.zx.Looks.BLANK,
                        size: i.zx.Sizes.ICON,
                        onClick: o,
                        disabled: s,
                        submitting: c,
                        className: a.button,
                        innerClassName: a.buttonInner,
                        children: (0, r.jsx)(n, {
                            size: 'custom',
                            width: 16,
                            height: 16
                        })
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(l)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e));
                      }),
                t)
            );
        }
    });
}
