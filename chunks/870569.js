n.d(t, { Z: () => d });
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(481060),
    o = n(686546),
    c = n(168301);
let d = r.forwardRef(function (e, t) {
    let { tooltipText: n, children: r, onContextMenu: s, onClick: d, disabled: u, icon: m, iconForeground: p, innerClassName: g, className: h, redGlow: f, tooltipClassName: b, onMouseEnter: _, onMouseLeave: x, 'aria-label': E, 'aria-checked': j, role: C, tooltipColor: O, tooltipForceOpen: S, tooltipContentClassName: v, plated: T } = e,
        N =
            'function' == typeof m
                ? (0, i.jsx)(m, {
                      width: 20,
                      height: 20,
                      size: 'custom',
                      colorClass: null != p ? p : '',
                      color: 'currentColor'
                  })
                : m;
    return (0, i.jsx)(a.ua7, {
        tooltipClassName: b,
        text: n,
        'aria-label': E,
        color: O,
        tooltipContentClassName: v,
        forceOpen: S,
        children: (e) => {
            var n,
                m,
                { onClick: p, onMouseEnter: b, onMouseLeave: E } = e,
                O = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                i,
                                r = {},
                                s = Object.keys(e);
                            for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(e);
                        for (i = 0; i < s.length; i++) (n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                    }
                    return r;
                })(e, ['onClick', 'onMouseEnter', 'onMouseLeave']);
            return (0, i.jsxs)(
                a.zxk,
                ((n = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            i.forEach(function (t) {
                                var i;
                                (i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = i);
                            });
                    }
                    return e;
                })({}, O)),
                (m = m =
                    {
                        buttonRef: t,
                        look: a.zxk.Looks.BLANK,
                        size: a.zxk.Sizes.NONE,
                        disabled: u,
                        innerClassName: g,
                        wrapperClassName: l()(c.button, h),
                        className: l()(c.button, h, {
                            [c.redGlow]: f,
                            [c.disabled]: u,
                            [c.enabled]: !u,
                            [c.plated]: T,
                            [c.plateMuted]: f && T
                        }),
                        onClick: (e) => {
                            null != p && p(), null != d && d(e);
                        },
                        onMouseEnter: () => {
                            null == b || b(), null == _ || _();
                        },
                        onMouseLeave: () => {
                            null == E || E(), null == x || x();
                        },
                        onContextMenu: s,
                        role: C,
                        'aria-checked': j,
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
                                ? (0, i.jsx)(o.ZP, {
                                      width: 20,
                                      height: 20,
                                      mask: o.ZP.Masks.PANEL_BUTTON,
                                      children: N
                                  })
                                : N,
                            r
                        ]
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(m))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(m)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(m, e));
                      }),
                n)
            );
        }
    });
});
