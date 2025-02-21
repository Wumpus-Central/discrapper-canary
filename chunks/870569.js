n.d(t, { Z: () => c });
var l = n(200651);
n(192379);
var r = n(120356),
    i = n.n(r),
    o = n(481060),
    a = n(686546),
    s = n(119536);
function c(e) {
    let { tooltipText: t, children: n, onContextMenu: r, onClick: c, disabled: u, icon: d, iconForeground: E, innerClassName: f, className: h, redGlow: C, tooltipClassName: _, onMouseEnter: p, onMouseLeave: g, 'aria-label': O, 'aria-checked': T, role: I, tooltipColor: N, tooltipForceOpen: S, tooltipContentClassName: A } = e,
        m =
            'function' == typeof d
                ? (0, l.jsx)(d, {
                      width: 20,
                      height: 20,
                      size: 'custom',
                      colorClass: null != E ? E : '',
                      color: 'currentColor'
                  })
                : d;
    return (0, l.jsx)(o.ua7, {
        tooltipClassName: _,
        text: t,
        'aria-label': O,
        color: N,
        tooltipContentClassName: A,
        forceOpen: S,
        children: (e) => {
            var t,
                d,
                { onClick: E, onMouseEnter: _, onMouseLeave: O } = e,
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
                o.zxk,
                ((t = (function (e) {
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
                (d = d =
                    {
                        look: o.zxk.Looks.BLANK,
                        size: o.zxk.Sizes.NONE,
                        disabled: u,
                        innerClassName: f,
                        wrapperClassName: i()(s.button, h),
                        className: i()(s.button, h, {
                            [s.redGlow]: C,
                            [s.disabled]: u,
                            [s.enabled]: !u
                        }),
                        onClick: (e) => {
                            null != E && E(), null != c && c(e);
                        },
                        onMouseEnter: () => {
                            null == _ || _(), null == p || p();
                        },
                        onMouseLeave: () => {
                            null == O || O(), null == g || g();
                        },
                        onContextMenu: r,
                        role: I,
                        'aria-checked': T,
                        children: [
                            null != n
                                ? (0, l.jsx)(a.ZP, {
                                      width: 20,
                                      height: 20,
                                      mask: a.ZP.Masks.PANEL_BUTTON,
                                      children: m
                                  })
                                : m,
                            n
                        ]
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(d))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var l = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, l);
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
