n.d(t, { Z: () => c });
var l = n(200651);
n(192379);
var r = n(120356),
    i = n.n(r),
    a = n(481060),
    o = n(686546),
    s = n(119536);
function c(e) {
    let { tooltipText: t, children: n, onContextMenu: r, onClick: c, disabled: u, icon: d, iconForeground: E, innerClassName: h, className: f, tooltipClassName: p, onMouseEnter: C, onMouseLeave: _, 'aria-label': g, 'aria-checked': I, role: T, tooltipColor: O, tooltipForceOpen: S, tooltipContentClassName: N } = e,
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
    return (0, l.jsx)(a.ua7, {
        tooltipClassName: p,
        text: t,
        'aria-label': g,
        color: O,
        tooltipContentClassName: N,
        forceOpen: S,
        children: (e) => {
            var t,
                d,
                { onClick: E, onMouseEnter: p, onMouseLeave: g } = e,
                O = (function (e, t) {
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
                })({}, O)),
                (d = d =
                    {
                        look: a.zxk.Looks.BLANK,
                        size: a.zxk.Sizes.NONE,
                        disabled: u,
                        innerClassName: h,
                        wrapperClassName: i()(s.button, f),
                        className: i()(s.button, f, {
                            [s.disabled]: u,
                            [s.enabled]: !u
                        }),
                        onClick: (e) => {
                            null != E && E(), null != c && c(e);
                        },
                        onMouseEnter: () => {
                            null == p || p(), null == C || C();
                        },
                        onMouseLeave: () => {
                            null == g || g(), null == _ || _();
                        },
                        onContextMenu: r,
                        role: T,
                        'aria-checked': I,
                        children: [
                            null != n
                                ? (0, l.jsx)(o.ZP, {
                                      width: 20,
                                      height: 20,
                                      mask: o.ZP.Masks.PANEL_BUTTON,
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
