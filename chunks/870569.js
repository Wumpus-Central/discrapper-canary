n.d(t, { Z: () => y });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(681715),
    s = n(755721),
    u = n(481060),
    c = n(686546),
    d = n(784569);
function f(e) {
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
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e, t) {
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
            (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let g = i.forwardRef(function (e, t) {
        let {
                children: n,
                onContextMenu: i,
                onClick: l,
                onMouseDown: o,
                disabled: u,
                icon: f,
                iconForeground: p,
                innerClassName: m,
                className: g,
                redGlow: y,
                onMouseEnter: b,
                onMouseLeave: h,
                "aria-label": v,
                "aria-checked": O,
                role: x,
                plated: j,
            } = e,
            P =
                "function" == typeof f
                    ? (0, r.jsx)(f, {
                          width: 20,
                          height: 20,
                          size: "custom",
                          colorClass: null != p ? p : "",
                          color: "currentColor",
                      })
                    : f;
        return (0, r.jsxs)(s.zx, {
            "data-migration-pending": !0,
            "aria-label": v,
            buttonRef: t,
            look: s.zx.Looks.BLANK,
            size: s.zx.Sizes.NONE,
            disabled: u,
            innerClassName: m,
            wrapperClassName: a()(d.button, g),
            className: a()(d.button, g, {
                [d.redGlow]: y,
                [d.disabled]: u,
                [d.enabled]: !u,
                [d.plated]: j,
                [d.plateMuted]: y && j,
            }),
            onClick: (e) => {
                null != l && l(e);
            },
            onMouseDown: o,
            onMouseEnter: b,
            onMouseLeave: h,
            onContextMenu: i,
            role: x,
            "aria-checked": O,
            focusProps: {
                offset: {
                    left: -1,
                    top: -1,
                    right: 1,
                    bottom: 1,
                },
            },
            children: [
                null != n
                    ? (0, r.jsx)(c.ZP, {
                          width: 20,
                          height: 20,
                          mask: c.ZP.Masks.PANEL_BUTTON,
                          children: P,
                      })
                    : P,
                n,
            ],
        });
    }),
    y = i.forwardRef(function (e, t) {
        if (null == e.tooltipType) {
            let { tooltipText: n, tooltipForceOpen: i, tooltipShouldShow: l, tooltipPositionKey: a } = e,
                s = m(e, ["tooltipText", "tooltipForceOpen", "tooltipShouldShow", "tooltipPositionKey"]);
            return (0, r.jsx)(o.u, {
                text: n,
                forceOpen: i,
                shouldShow: l,
                positionKey: a,
                children: (0, r.jsx)(g, p(f({}, s), { ref: t })),
            });
        }
        {
            let {
                    tooltipText: n,
                    tooltipForceOpen: i,
                    tooltipShouldShow: l,
                    tooltipPositionKey: a,
                    onClick: o,
                    onMouseEnter: s,
                    onMouseLeave: c,
                    onContextMenu: y,
                    onFocus: b,
                    onBlur: h,
                    "aria-label": v,
                } = e,
                O = m(e, [
                    "tooltipText",
                    "tooltipForceOpen",
                    "tooltipShouldShow",
                    "tooltipPositionKey",
                    "onClick",
                    "onMouseEnter",
                    "onMouseLeave",
                    "onContextMenu",
                    "onFocus",
                    "onBlur",
                    "aria-label",
                ]);
            return (0, r.jsx)(u.aML, {
                "data-migration-pending": !0,
                tooltipClassName: d.greenTooltip,
                tooltipContentClassName: d.greenTooltipContent,
                "aria-label": v,
                forceOpen: i,
                shouldShow: l,
                color: u.r6K.GREEN,
                positionKeyStemOverride: a,
                text: n,
                children: (e) => {
                    let {
                        onClick: n,
                        onMouseEnter: i,
                        onMouseLeave: l,
                        onContextMenu: a,
                        onFocus: u,
                        onBlur: d,
                        "aria-label": m,
                    } = e;
                    return (0, r.jsx)(
                        g,
                        p(
                            f(
                                {
                                    onClick: (e) => {
                                        null == n || n(), null == o || o(e);
                                    },
                                    onMouseEnter: () => {
                                        null == i || i(), null == s || s();
                                    },
                                    onMouseLeave: () => {
                                        null == l || l(), null == c || c();
                                    },
                                    onContextMenu: (e) => {
                                        null == a || a(), null == y || y(e);
                                    },
                                    onFocus: () => {
                                        null == u || u(), null == b || b();
                                    },
                                    onBlur: () => {
                                        null == d || d(), null == h || h();
                                    },
                                    "aria-label": m,
                                },
                                O,
                            ),
                            { ref: t },
                        ),
                    );
                },
            });
        }
    });
