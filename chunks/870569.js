n.d(t, { Z: () => d });
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    o = n(755721),
    s = n(481060),
    c = n(686546),
    u = n(861526);
let d = l.forwardRef(function (e, t) {
    let {
            tooltipText: n,
            children: l,
            onContextMenu: i,
            onClick: d,
            disabled: p,
            icon: f,
            iconForeground: m,
            innerClassName: b,
            className: O,
            redGlow: y,
            orangeGlow: v,
            tooltipClassName: g,
            onMouseEnter: h,
            onMouseLeave: j,
            "aria-label": N,
            "aria-checked": x,
            role: S,
            tooltipColor: E,
            tooltipForceOpen: P,
            tooltipContentClassName: C,
            tooltipPositionKeyStemOverride: I,
            tooltipShouldShow: T,
            plated: Z,
        } = e,
        w =
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
        positionKeyStemOverride: I,
        children: (e) => {
            var n,
                s,
                { onClick: f, onMouseEnter: m, onMouseLeave: g } = e,
                N = (function (e, t) {
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
                        for (r = 0; r < i.length; r++)
                            (n = i[r]),
                                !(t.indexOf(n) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                    (l[n] = e[n]);
                    }
                    return l;
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
                })({ "data-migration-pending": !0 }, N)),
                (s = s =
                    {
                        buttonRef: t,
                        look: o.zx.Looks.BLANK,
                        size: o.zx.Sizes.NONE,
                        disabled: p,
                        innerClassName: b,
                        wrapperClassName: a()(u.button, O),
                        className: a()(u.button, O, {
                            [u.redGlow]: y,
                            [u.orangeGlow]: v,
                            [u.disabled]: p,
                            [u.enabled]: !p,
                            [u.plated]: Z,
                            [u.plateMuted]: y && Z,
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
                        onContextMenu: i,
                        role: S,
                        "aria-checked": x,
                        focusProps: {
                            offset: {
                                left: -1,
                                top: -1,
                                right: 1,
                                bottom: 1,
                            },
                        },
                        children: [
                            null != l
                                ? (0, r.jsx)(c.ZP, {
                                      width: 20,
                                      height: 20,
                                      mask: c.ZP.Masks.PANEL_BUTTON,
                                      children: w,
                                  })
                                : w,
                            l,
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
