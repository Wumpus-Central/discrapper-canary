n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    o = n(481060),
    a = n(686546),
    s = n(796171);
function c(e) {
    let { tooltipText: t, children: n, onContextMenu: l, onClick: c, disabled: u, icon: d, iconForeground: E, innerClassName: f, className: p, redGlow: h, tooltipClassName: C, onMouseEnter: _, onMouseLeave: O, 'aria-label': g, 'aria-checked': T, role: I, tooltipColor: S, tooltipForceOpen: N, tooltipContentClassName: b, plated: A } = e,
        v =
            'function' == typeof d
                ? (0, r.jsx)(d, {
                      width: 20,
                      height: 20,
                      size: 'custom',
                      colorClass: null != E ? E : '',
                      color: 'currentColor'
                  })
                : d;
    return (0, r.jsx)(o.ua7, {
        tooltipClassName: C,
        text: t,
        'aria-label': g,
        color: S,
        tooltipContentClassName: b,
        forceOpen: N,
        children: (e) => {
            var t,
                d,
                { onClick: E, onMouseEnter: C, onMouseLeave: g } = e,
                S = (function (e, t) {
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
                })({}, S)),
                (d = d =
                    {
                        look: o.zxk.Looks.BLANK,
                        size: o.zxk.Sizes.NONE,
                        disabled: u,
                        innerClassName: f,
                        wrapperClassName: i()(s.button, p),
                        className: i()(s.button, p, {
                            [s.redGlow]: h,
                            [s.disabled]: u,
                            [s.enabled]: !u,
                            [s.plated]: A,
                            [s.plateMuted]: h && A
                        }),
                        onClick: (e) => {
                            null != E && E(), null != c && c(e);
                        },
                        onMouseEnter: () => {
                            null == C || C(), null == _ || _();
                        },
                        onMouseLeave: () => {
                            null == g || g(), null == O || O();
                        },
                        onContextMenu: l,
                        role: I,
                        'aria-checked': T,
                        children: [
                            null != n
                                ? (0, r.jsx)(a.ZP, {
                                      width: 20,
                                      height: 20,
                                      mask: a.ZP.Masks.PANEL_BUTTON,
                                      children: v
                                  })
                                : v,
                            n
                        ]
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(d))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(d)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(d, e));
                      }),
                t)
            );
        }
    });
}
