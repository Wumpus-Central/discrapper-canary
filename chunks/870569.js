n.d(t, { Z: () => d });
var r = n(54381),
    i = n(473749),
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
            onMouseDown: p,
            disabled: f,
            icon: m,
            iconForeground: b,
            innerClassName: y,
            className: O,
            redGlow: v,
            orangeGlow: g,
            tooltipClassName: h,
            onMouseEnter: j,
            onMouseLeave: x,
            "aria-label": N,
            "aria-checked": S,
            role: P,
            tooltipColor: C,
            tooltipForceOpen: w,
            tooltipContentClassName: E,
            tooltipPositionKeyStemOverride: T,
            tooltipShouldShow: Z,
            plated: M,
        } = e,
        I =
            "function" == typeof m
                ? (0, r.jsx)(m, {
                      width: 20,
                      height: 20,
                      size: "custom",
                      colorClass: null != b ? b : "",
                      color: "currentColor",
                  })
                : m;
    return (0, r.jsx)(s.aML, {
        "data-migration-pending": !0,
        tooltipClassName: h,
        text: n,
        "aria-label": N,
        color: C,
        tooltipContentClassName: E,
        forceOpen: w,
        shouldShow: Z,
        positionKeyStemOverride: T,
        children: (e) => {
            var n,
                s,
                { onClick: m, onMouseEnter: b, onMouseLeave: h } = e,
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
                })({ "data-migration-pending": !0 }, N)),
                (s = s =
                    {
                        buttonRef: t,
                        look: a.zx.Looks.BLANK,
                        size: a.zx.Sizes.NONE,
                        disabled: f,
                        innerClassName: y,
                        wrapperClassName: o()(u.button, O),
                        className: o()(u.button, O, {
                            [u.redGlow]: v,
                            [u.orangeGlow]: g,
                            [u.disabled]: f,
                            [u.enabled]: !f,
                            [u.plated]: M,
                            [u.plateMuted]: v && M,
                        }),
                        onClick: (e) => {
                            null != m && m(), null != d && d(e);
                        },
                        onMouseDown: p,
                        onMouseEnter: () => {
                            null == b || b(), null == j || j();
                        },
                        onMouseLeave: () => {
                            null == h || h(), null == x || x();
                        },
                        onContextMenu: l,
                        role: P,
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
