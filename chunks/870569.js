n.d(t, { Z: () => E });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(755721),
    l = n(481060),
    c = n(686546),
    u = n(861526);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let g = 20,
    E = i.forwardRef(function (e, t) {
        let {
                tooltipText: n,
                children: i,
                onContextMenu: a,
                onClick: d,
                disabled: _,
                icon: m,
                iconForeground: E,
                innerClassName: b,
                className: y,
                redGlow: O,
                orangeGlow: v,
                tooltipClassName: I,
                onMouseEnter: T,
                onMouseLeave: S,
                "aria-label": A,
                "aria-checked": C,
                role: N,
                tooltipColor: R,
                tooltipForceOpen: P,
                tooltipContentClassName: w,
                plated: D,
            } = e,
            x =
                "function" == typeof m
                    ? (0, r.jsx)(m, {
                          width: g,
                          height: g,
                          size: "custom",
                          colorClass: null != E ? E : "",
                          color: "currentColor",
                      })
                    : m;
        return (0, r.jsx)(l.ua7, {
            tooltipClassName: I,
            text: n,
            "aria-label": A,
            color: R,
            tooltipContentClassName: w,
            forceOpen: P,
            children: (e) => {
                var { onClick: n, onMouseEnter: l, onMouseLeave: m } = e,
                    E = h(e, ["onClick", "onMouseEnter", "onMouseLeave"]);
                return (0, r.jsxs)(
                    s.zx,
                    p(f({}, E), {
                        buttonRef: t,
                        look: s.zx.Looks.BLANK,
                        size: s.zx.Sizes.NONE,
                        disabled: _,
                        innerClassName: b,
                        wrapperClassName: o()(u.button, y),
                        className: o()(u.button, y, {
                            [u.redGlow]: O,
                            [u.orangeGlow]: v,
                            [u.disabled]: _,
                            [u.enabled]: !_,
                            [u.plated]: D,
                            [u.plateMuted]: O && D,
                        }),
                        onClick: (e) => {
                            null != n && n(), null != d && d(e);
                        },
                        onMouseEnter: () => {
                            null == l || l(), null == T || T();
                        },
                        onMouseLeave: () => {
                            null == m || m(), null == S || S();
                        },
                        onContextMenu: a,
                        role: N,
                        "aria-checked": C,
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
                                      width: g,
                                      height: g,
                                      mask: c.ZP.Masks.PANEL_BUTTON,
                                      children: x,
                                  })
                                : x,
                            i,
                        ],
                    }),
                );
            },
        });
    });
