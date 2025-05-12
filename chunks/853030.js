n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var l = n(120356),
    i = n.n(l),
    s = n(481060),
    o = n(812652),
    a = n(459933);
function c(e) {
    let { mainCTADisabled: t, mainCTAOnClick: n, align: l, ctaText: c, hideOptionsButton: d } = e;
    return (0, r.jsxs)('div', {
        className: a.root,
        children: [
            (0, r.jsx)(s.zxk, {
                size: s.zxk.Sizes.LARGE,
                className: i()(a.streamButton, { [a.withOptions]: !d }),
                disabled: t,
                onClick: n,
                children: c
            }),
            !d &&
                (0, r.jsx)(s.yRy, {
                    position: 'top',
                    align: l,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, r.jsx)(o.ZP, {
                            onClose: t,
                            onSelect: t
                        });
                    },
                    children: (e) => {
                        var t, n;
                        return (0, r.jsx)(
                            s.zxk,
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
                            })(
                                {
                                    size: s.zxk.Sizes.LARGE,
                                    className: a.optionsButton
                                },
                                e
                            )),
                            (n = n = { children: (0, r.jsx)(s.Huf, { color: 'currentColor' }) }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(n)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                  }),
                            t)
                        );
                    }
                })
        ]
    });
}
