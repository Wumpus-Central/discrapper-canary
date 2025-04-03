n.d(t, { Z: () => u });
var r = n(200651),
    l = n(192379),
    i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(686546),
    c = n(168301);
let u = l.forwardRef(function (e, t) {
    let { tooltipText: n, children: l, onContextMenu: i, onClick: u, disabled: d, icon: E, iconForeground: f, innerClassName: p, className: h, redGlow: C, tooltipClassName: _, onMouseEnter: O, onMouseLeave: g, 'aria-label': S, 'aria-checked': I, role: T, tooltipColor: b, tooltipForceOpen: N, tooltipContentClassName: m, plated: A } = e,
        v =
            'function' == typeof E
                ? (0, r.jsx)(E, {
                      width: 20,
                      height: 20,
                      size: 'custom',
                      colorClass: null != f ? f : '',
                      color: 'currentColor'
                  })
                : E;
    return (0, r.jsx)(a.ua7, {
        tooltipClassName: _,
        text: n,
        'aria-label': S,
        color: b,
        tooltipContentClassName: m,
        forceOpen: N,
        children: (e) => {
            var n,
                E,
                { onClick: f, onMouseEnter: _, onMouseLeave: S } = e,
                b = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                l = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                            return l;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    }
                    return l;
                })(e, ['onClick', 'onMouseEnter', 'onMouseLeave']);
            return (0, r.jsxs)(
                a.zxk,
                ((n = (function (e) {
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
                })({}, b)),
                (E = E =
                    {
                        buttonRef: t,
                        look: a.zxk.Looks.BLANK,
                        size: a.zxk.Sizes.NONE,
                        disabled: d,
                        innerClassName: p,
                        wrapperClassName: o()(c.button, h),
                        className: o()(c.button, h, {
                            [c.redGlow]: C,
                            [c.disabled]: d,
                            [c.enabled]: !d,
                            [c.plated]: A,
                            [c.plateMuted]: C && A
                        }),
                        onClick: (e) => {
                            null != f && f(), null != u && u(e);
                        },
                        onMouseEnter: () => {
                            null == _ || _(), null == O || O();
                        },
                        onMouseLeave: () => {
                            null == S || S(), null == g || g();
                        },
                        onContextMenu: i,
                        role: T,
                        'aria-checked': I,
                        focusProps: {
                            offset: {
                                left: -1,
                                top: -1,
                                right: 1,
                                bottom: 1
                            }
                        },
                        children: [
                            null != l
                                ? (0, r.jsx)(s.ZP, {
                                      width: 20,
                                      height: 20,
                                      mask: s.ZP.Masks.PANEL_BUTTON,
                                      children: v
                                  })
                                : v,
                            l
                        ]
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(E))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(E)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(E, e));
                      }),
                n)
            );
        }
    });
});
