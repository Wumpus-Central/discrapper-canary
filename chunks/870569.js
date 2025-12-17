n.d(t, { Z: () => d });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(755721),
    s = n(481060),
    u = n(686546),
    c = n(784569);
let d = i.forwardRef(function (e, t) {
    let {
            tooltipText: n,
            children: i,
            onContextMenu: l,
            onClick: d,
            onMouseDown: f,
            disabled: m,
            icon: p,
            iconForeground: g,
            innerClassName: y,
            className: b,
            redGlow: v,
            orangeGlow: O,
            tooltipClassName: h,
            onMouseEnter: x,
            onMouseLeave: j,
            "aria-label": P,
            "aria-checked": S,
            role: N,
            tooltipColor: E,
            tooltipForceOpen: C,
            tooltipContentClassName: T,
            tooltipPositionKeyStemOverride: Z,
            tooltipShouldShow: I,
            plated: w,
        } = e,
        k =
            "function" == typeof p
                ? (0, r.jsx)(p, {
                      width: 20,
                      height: 20,
                      size: "custom",
                      colorClass: null != g ? g : "",
                      color: "currentColor",
                  })
                : p;
    return (0, r.jsx)(s.aML, {
        "data-migration-pending": !0,
        tooltipClassName: h,
        text: n,
        "aria-label": P,
        color: E,
        tooltipContentClassName: T,
        forceOpen: C,
        shouldShow: I,
        positionKeyStemOverride: Z,
        children: (e) => {
            var n,
                s,
                { onClick: p, onMouseEnter: g, onMouseLeave: h } = e,
                P = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                i = {},
                                l = Object.keys(e);
                            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var l = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < l.length; r++)
                            (n = l[r]),
                                !(t.indexOf(n) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                    (i[n] = e[n]);
                    }
                    return i;
                })(e, ["onClick", "onMouseEnter", "onMouseLeave"]);
            return (0, r.jsxs)(
                o.zx,
                ((n = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({ "data-migration-pending": !0 }, P)),
                (s = s =
                    {
                        buttonRef: t,
                        look: o.zx.Looks.BLANK,
                        size: o.zx.Sizes.NONE,
                        disabled: m,
                        innerClassName: y,
                        wrapperClassName: a()(c.button, b),
                        className: a()(c.button, b, {
                            [c.redGlow]: v,
                            [c.orangeGlow]: O,
                            [c.disabled]: m,
                            [c.enabled]: !m,
                            [c.plated]: w,
                            [c.plateMuted]: v && w,
                        }),
                        onClick: (e) => {
                            null != p && p(), null != d && d(e);
                        },
                        onMouseDown: f,
                        onMouseEnter: () => {
                            null == g || g(), null == x || x();
                        },
                        onMouseLeave: () => {
                            null == h || h(), null == j || j();
                        },
                        onContextMenu: l,
                        role: N,
                        "aria-checked": S,
                        focusProps: {
                            offset: {
                                left: -1,
                                top: -1,
                                right: 1,
                                bottom: 1,
                            },
                        },
                        children: [
                            null != i
                                ? (0, r.jsx)(u.ZP, {
                                      width: 20,
                                      height: 20,
                                      mask: u.ZP.Masks.PANEL_BUTTON,
                                      children: k,
                                  })
                                : k,
                            i,
                        ],
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(s)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(s, e));
                      }),
                n),
            );
        },
    });
});
