n.d(t, {
    $m: () => x,
    Dc: () => M,
    EO: () => w,
    WM: () => R,
    jl: () => L,
    rI: () => C,
    rQ: () => P,
    s_: () => j,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(432022),
    l = n(110259),
    c = n(615300),
    u = n(789645),
    d = n(158954),
    f = n(862482),
    p = n(305866),
    _ = n(397927),
    h = n(989395),
    m = n(235986),
    g = n(231723),
    E = n(818348),
    b = n(985018),
    y = n(997168);
function O(e, t, n) {
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
function A(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = T(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
var C = (function (e) {
    return (e.SMALL = "small"), (e.MEDIUM = "medium"), (e.LARGE = "large"), (e.DYNAMIC = "dynamic"), e;
})({});
let N = Object.freeze({
    small: y.EX,
    medium: y.Y,
    large: y.as,
    dynamic: null,
});
var R = (function (e) {
    return (e.DEFAULT = "default"), (e.SUBTLE = "subtle"), e;
})({});
function w(e) {
    var t;
    let {
            transitionState: n,
            children: a,
            size: u = "small",
            role: f = "dialog",
            className: _,
            fullscreenOnMobile: m = !0,
            hideShadow: b = !1,
            onAnimationEnd: O = E.tE,
            returnRef: v,
            animation: T = "default",
            parentComponent: C,
        } = e,
        R = I(e, [
            "transitionState",
            "children",
            "size",
            "role",
            "className",
            "fullscreenOnMobile",
            "hideShadow",
            "onAnimationEnd",
            "returnRef",
            "animation",
            "parentComponent",
        ]),
        w = n === g.ip.ENTERING || n === g.ip.ENTERED;
    i.useContext(h.A)({
        type: l.ImpressionTypes.PAGE,
        name: l.ImpressionNames.MODAL_ROOT_LEGACY,
        properties: { variant: C },
    });
    let { reducedMotion: P } = i.useContext(d.CZY),
        D = (0, d.zhh)(
            {
                opacity: +!!w,
                transform: w || P.enabled || "subtle" === T ? "scale(1)" : "scale(0.7)",
                config: {
                    duration: 200,
                    easing: c.A.Easing.out(c.A.Easing.quad),
                    clamp: !0,
                },
                onRest: O,
            },
            "animate-always",
        ),
        x = i.useRef(null),
        L = null != R["aria-label"],
        j = null != R["aria-labelledby"],
        M = i.useId(),
        k = null != (t = R["aria-labelledby"]) ? t : M,
        U = i.useMemo(
            () => ({
                headerId: k,
                headerIdIsManaged: j,
            }),
            [k, j],
        );
    return (0, r.jsx)(g.CP.Provider, {
        value: U,
        children: (0, r.jsx)(
            p.l,
            S(
                A(
                    {
                        className: y.Gg,
                        role: f,
                        returnRef: v,
                        impressionType: l.ImpressionTypes.MODAL,
                        "aria-labelledby": L ? void 0 : U.headerId,
                    },
                    R,
                ),
                {
                    children: (0, r.jsx)(o.animated.div, {
                        className: s()(_, y.zr, N[u], {
                            [y.z]: m,
                            [y.vl]: !b,
                        }),
                        ref: x,
                        style: D,
                        children: (0, r.jsx)(d.xpW, {
                            containerRef: x,
                            children: a,
                        }),
                    }),
                },
            ),
        ),
    });
}
function P(e) {
    var t, n, a, o, l;
    let { headerId: c, headerIdIsManaged: u } = i.useContext(g.CP);
    return (0, r.jsx)(m.A, {
        grow: 0,
        shrink: 0,
        direction: null != (t = e.direction) ? t : m.A.Direction.HORIZONTAL,
        justify: null != (n = e.justify) ? n : m.A.Justify.START,
        align: null != (a = e.align) ? a : m.A.Align.CENTER,
        wrap: null != (o = e.wrap) ? o : m.A.Wrap.NO_WRAP,
        className: s()(y.wx, e.className, { [y.me]: null == (l = e.separator) || l }),
        id: u ? void 0 : c,
        children: e.children,
    });
}
function D(e) {
    switch (null != e ? e : "thin") {
        case "auto":
            return d.GtU;
        case "none":
            return d.zCo;
        default:
            return d.ChK;
    }
}
function x(e) {
    let { className: t, children: n, scrollerRef: i, scrollbarType: a } = e,
        o = I(e, ["className", "children", "scrollerRef", "scrollbarType"]),
        l = D(a);
    return (0, r.jsx)(
        l,
        S(
            A(
                {
                    "data-migration-pending": !0,
                    className: s()(y.Qs, t),
                    ref: i,
                },
                o,
            ),
            { children: (0, r.jsx)(_.Fmo, { children: n }) },
        ),
    );
}
function L(e) {
    var t, n, i, a, o;
    return (0, r.jsx)(m.A, {
        grow: 0,
        shrink: 0,
        direction: null != (t = e.direction) ? t : m.A.Direction.HORIZONTAL_REVERSE,
        justify: null != (n = e.justify) ? n : m.A.Justify.START,
        align: null != (i = e.align) ? i : m.A.Align.STRETCH,
        wrap: null != (a = e.wrap) ? a : m.A.Wrap.NO_WRAP,
        className: s()(y.qr, e.className, { [y.h0]: null == (o = e.separator) || o }),
        children: (0, r.jsx)(_.Fmo, { children: e.children }),
    });
}
function j(e) {
    return (0, r.jsx)(f.$n, {
        "data-migration-pending": !0,
        focusProps: e.focusProps,
        "aria-label": b.intl.string(b.t.cpT0Cq),
        look: f.$n.Looks.BLANK,
        size: f.$n.Sizes.NONE,
        onClick: e.onClick,
        innerClassName: s()(e.innerClassName, { [y.Xk]: e.withCircleBackground }),
        className: s()(e.className, {
            [y.zB]: e.hideOnFullscreen,
            [y.VN]: !e.withCircleBackground,
        }),
        children: (0, r.jsx)(u.P, {
            size: "md",
            color: "currentColor",
            className: s()(e.innerClassName, y.ut),
        }),
    });
}
function M(e) {
    let { className: t, scrollerRef: n } = e,
        i = I(e, ["className", "scrollerRef"]);
    return (0, r.jsx)(
        d.OZj,
        A(
            {
                className: t,
                ref: n,
            },
            i,
        ),
    );
}
