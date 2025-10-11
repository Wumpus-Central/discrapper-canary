n.d(t, { Z: () => d });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(755721),
    s = n(481060),
    c = n(686546),
    u = n(861526);
let d = i.forwardRef(function (e, t) {
    let {
            tooltipText: n,
            children: i,
            onContextMenu: l,
            onClick: d,
            disabled: p,
            icon: f,
            iconForeground: m,
            innerClassName: b,
            className: y,
            redGlow: O,
            orangeGlow: v,
            tooltipClassName: g,
            onMouseEnter: h,
            onMouseLeave: j,
            "aria-label": N,
            "aria-checked": S,
            role: x,
            tooltipColor: E,
            tooltipForceOpen: P,
            tooltipContentClassName: C,
            tooltipPositionKeyStemOverride: w,
            tooltipShouldShow: T,
            plated: Z,
        } = e,
        I =
            "function" == typeof f
                ? (0, r.jsx)(f, {
                      width: 20,
                      height: 20,
                      size: "custom",
                      colorClass: null != m ? m : "",
                      color: "currentColor",
                  })
                : f;
    return (0, r.jsx)(s.aML, {
        "data-migration-pending": !0,
        tooltipClassName: g,
        text: n,
        "aria-label": N,
        color: E,
        tooltipContentClassName: C,
        forceOpen: P,
        shouldShow: T,
        positionKeyStemOverride: w,
        children: (e) => {
            var n,
                s,
                { onClick: f, onMouseEnter: m, onMouseLeave: g } = e,
                N = (function (e, t) {
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
                a.zx,
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
                })({}, N)),
                (s = s =
                    {
                        buttonRef: t,
                        look: a.zx.Looks.BLANK,
                        size: a.zx.Sizes.NONE,
                        disabled: p,
                        innerClassName: b,
                        wrapperClassName: o()(u.button, y),
                        className: o()(u.button, y, {
                            [u.redGlow]: O,
                            [u.orangeGlow]: v,
                            [u.disabled]: p,
                            [u.enabled]: !p,
                            [u.plated]: Z,
                            [u.plateMuted]: O && Z,
                        }),
                        onClick: (e) => {
                            null != f && f(), null != d && d(e);
                        },
                        onMouseEnter: () => {
                            null == m || m(), null == h || h();
                        },
                        onMouseLeave: () => {
                            null == g || g(), null == j || j();
                        },
                        onContextMenu: l,
                        role: x,
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
                                ? (0, r.jsx)(c.ZP, {
                                      width: 20,
                                      height: 20,
                                      mask: c.ZP.Masks.PANEL_BUTTON,
                                      children: I,
                                  })
                                : I,
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
