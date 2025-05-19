n.d(t, { Z: () => d });
var r = n(255367),
    l = n(73800),
    i = n(120356),
    s = n.n(i),
    o = n(481060),
    a = n(812652),
    c = n(112881);
function d(e) {
    let { mainCTADisabled: t, mainCTAOnClick: n, align: i, ctaText: d, hideOptionsButton: u } = e,
        f = l.useRef(null);
    return (0, r.jsxs)('div', {
        className: c.root,
        children: [
            (0, r.jsx)(o.zxk, {
                size: o.zxk.Sizes.LARGE,
                className: s()(c.streamButton, { [c.withOptions]: !u }),
                disabled: t,
                onClick: n,
                children: d
            }),
            !u &&
                (0, r.jsx)(o.yRy, {
                    targetElementRef: f,
                    position: 'top',
                    align: i,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, r.jsx)(a.ZP, {
                            onClose: t,
                            onSelect: t
                        });
                    },
                    children: (e) => {
                        var t, n;
                        return (0, r.jsx)(
                            o.zxk,
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
                                    size: o.zxk.Sizes.LARGE,
                                    className: c.optionsButton,
                                    buttonRef: f
                                },
                                e
                            )),
                            (n = n = { children: (0, r.jsx)(o.Huf, { color: 'currentColor' }) }),
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
