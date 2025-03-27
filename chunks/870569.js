n.d(t, { Z: () => u });
var l = n(200651),
    r = n(192379),
    i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(686546),
    c = n(796171);
let u = r.forwardRef(function (e, t) {
    let { tooltipText: n, children: r, onContextMenu: i, onClick: u, disabled: d, icon: E, iconForeground: f, innerClassName: p, className: h, redGlow: C, tooltipClassName: _, onMouseEnter: O, onMouseLeave: g, 'aria-label': S, 'aria-checked': T, role: I, tooltipColor: N, tooltipForceOpen: b, tooltipContentClassName: v, plated: m } = e,
        A =
            'function' == typeof E
                ? (0, l.jsx)(E, {
                      width: 20,
                      height: 20,
                      size: 'custom',
                      colorClass: null != f ? f : '',
                      color: 'currentColor'
                  })
                : E;
    return (0, l.jsx)(a.ua7, {
        tooltipClassName: _,
        text: n,
        'aria-label': S,
        color: N,
        tooltipContentClassName: v,
        forceOpen: b,
        children: (e) => {
            var n,
                E,
                { onClick: f, onMouseEnter: _, onMouseLeave: S } = e,
                N = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        l,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                l,
                                r = {},
                                i = Object.keys(e);
                            for (l = 0; l < i.length; l++) (n = i[l]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (l = 0; l < i.length; l++) (n = i[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                    }
                    return r;
                })(e, ['onClick', 'onMouseEnter', 'onMouseLeave']);
            return (0, l.jsxs)(
                a.zxk,
                ((n = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            l = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (l = l.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            l.forEach(function (t) {
                                var l;
                                (l = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: l,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = l);
                            });
                    }
                    return e;
                })({}, N)),
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
                            [c.plated]: m,
                            [c.plateMuted]: C && m
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
                        role: I,
                        'aria-checked': T,
                        focusProps: {
                            offset: {
                                left: -1,
                                top: -1,
                                right: 1,
                                bottom: 1
                            }
                        },
                        children: [
                            null != r
                                ? (0, l.jsx)(s.ZP, {
                                      width: 20,
                                      height: 20,
                                      mask: s.ZP.Masks.PANEL_BUTTON,
                                      children: A
                                  })
                                : A,
                            r
                        ]
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(E))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var l = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, l);
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
