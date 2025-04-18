n.d(t, { Z: () => d });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(686546),
    c = n(730422);
let d = i.forwardRef(function (e, t) {
    let { tooltipText: n, children: i, onContextMenu: s, onClick: d, disabled: u, icon: m, iconForeground: g, innerClassName: p, className: h, redGlow: f, tooltipClassName: b, onMouseEnter: _, onMouseLeave: N, 'aria-label': x, 'aria-checked': E, role: j, tooltipColor: C, tooltipForceOpen: O, tooltipContentClassName: S, plated: v } = e,
        T =
            'function' == typeof m
                ? (0, r.jsx)(m, {
                      width: 20,
                      height: 20,
                      size: 'custom',
                      colorClass: null != g ? g : '',
                      color: 'currentColor'
                  })
                : m;
    return (0, r.jsx)(l.ua7, {
        tooltipClassName: b,
        text: n,
        'aria-label': x,
        color: C,
        tooltipContentClassName: S,
        forceOpen: O,
        children: (e) => {
            var n,
                m,
                { onClick: g, onMouseEnter: b, onMouseLeave: x } = e,
                C = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                i = {},
                                s = Object.keys(e);
                            for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    }
                    return i;
                })(e, ['onClick', 'onMouseEnter', 'onMouseLeave']);
            return (0, r.jsxs)(
                l.zxk,
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
                })({}, C)),
                (m = m =
                    {
                        buttonRef: t,
                        look: l.zxk.Looks.BLANK,
                        size: l.zxk.Sizes.NONE,
                        disabled: u,
                        innerClassName: p,
                        wrapperClassName: a()(c.button, h),
                        className: a()(c.button, h, {
                            [c.redGlow]: f,
                            [c.disabled]: u,
                            [c.enabled]: !u,
                            [c.plated]: v,
                            [c.plateMuted]: f && v
                        }),
                        onClick: (e) => {
                            null != g && g(), null != d && d(e);
                        },
                        onMouseEnter: () => {
                            null == b || b(), null == _ || _();
                        },
                        onMouseLeave: () => {
                            null == x || x(), null == N || N();
                        },
                        onContextMenu: s,
                        role: j,
                        'aria-checked': E,
                        focusProps: {
                            offset: {
                                left: -1,
                                top: -1,
                                right: 1,
                                bottom: 1
                            }
                        },
                        children: [
                            null != i
                                ? (0, r.jsx)(o.ZP, {
                                      width: 20,
                                      height: 20,
                                      mask: o.ZP.Masks.PANEL_BUTTON,
                                      children: T
                                  })
                                : T,
                            i
                        ]
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(m))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
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
