"use strict";
n.d(t, { $m: () => R, Dc: () => L, EO: () => C, WM: () => v, jl: () => O, rI: () => y, rQ: () => b, s_: () => D });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(40153),
    l = n(110259),
    u = n(615300),
    c = n(789645),
    d = n(158954),
    _ = n(862482),
    f = n(305866),
    h = n(397927),
    p = n(989395),
    g = n(235986),
    E = n(231723),
    A = n(818348),
    I = n(985018),
    T = n(997168),
    y = (function (e) {
        return (e.SMALL = "small"), (e.MEDIUM = "medium"), (e.LARGE = "large"), (e.DYNAMIC = "dynamic"), e;
    })({});
let S = Object.freeze({ small: T.EX, medium: T.Y, large: T.as, dynamic: null });
var v = (function (e) {
    return (e.DEFAULT = "default"), (e.SUBTLE = "subtle"), e;
})({});
function C(e) {
    let {
            transitionState: t,
            children: n,
            size: a = "small",
            role: c = "dialog",
            className: _,
            fullscreenOnMobile: h = !0,
            hideShadow: g = !1,
            onAnimationEnd: I = A.tE,
            returnRef: y,
            animation: v = "default",
            parentComponent: C,
            ...b
        } = e,
        N = t === E.ip.ENTERING || t === E.ip.ENTERED;
    i.useContext(p.A)({
        type: l.ImpressionTypes.PAGE,
        name: l.ImpressionNames.MODAL_ROOT_LEGACY,
        properties: { variant: C },
    });
    let { reducedMotion: R } = i.useContext(d.CZY),
        O = (0, d.zhh)(
            {
                opacity: +!!N,
                transform: N || R.enabled || "subtle" === v ? "scale(1)" : "scale(0.7)",
                config: { duration: 200, easing: u.A.Easing.out(u.A.Easing.quad), clamp: !0 },
                onRest: I,
            },
            "animate-always",
        ),
        D = i.useRef(null),
        L = null != b["aria-label"],
        w = null != b["aria-labelledby"],
        x = i.useId(),
        P = b["aria-labelledby"] ?? x,
        M = i.useMemo(() => ({ headerId: P, headerIdIsManaged: w }), [P, w]);
    return (0, r.jsx)(E.CP.Provider, {
        value: M,
        children: (0, r.jsx)(f.l, {
            className: T.Gg,
            role: c,
            returnRef: y,
            impressionType: l.ImpressionTypes.MODAL,
            "aria-labelledby": L ? void 0 : M.headerId,
            ...b,
            children: (0, r.jsx)(o.animated.div, {
                className: s()(_, T.zr, S[a], { [T.z]: h, [T.vl]: !g }),
                ref: D,
                style: O,
                children: (0, r.jsx)(d.xpW, { containerRef: D, children: n }),
            }),
        }),
    });
}
function b(e) {
    let { headerId: t, headerIdIsManaged: n } = i.useContext(E.CP);
    return (0, r.jsx)(g.A, {
        grow: 0,
        shrink: 0,
        direction: e.direction ?? g.A.Direction.HORIZONTAL,
        justify: e.justify ?? g.A.Justify.START,
        align: e.align ?? g.A.Align.CENTER,
        wrap: e.wrap ?? g.A.Wrap.NO_WRAP,
        className: s()(T.wx, e.className, { [T.me]: e.separator ?? !0 }),
        id: n ? void 0 : t,
        children: e.children,
    });
}
function N(e) {
    switch (e ?? "thin") {
        case "auto":
            return d.GtU;
        case "none":
            return d.zCo;
        default:
            return d.ChK;
    }
}
function R(e) {
    let { className: t, children: n, scrollerRef: i, scrollbarType: a, ...o } = e,
        l = N(a);
    return (0, r.jsx)(l, {
        "data-migration-pending": !0,
        className: s()(T.Qs, t),
        ref: i,
        ...o,
        children: (0, r.jsx)(h.Fmo, { children: n }),
    });
}
function O(e) {
    return (0, r.jsx)(g.A, {
        grow: 0,
        shrink: 0,
        direction: e.direction ?? g.A.Direction.HORIZONTAL_REVERSE,
        justify: e.justify ?? g.A.Justify.START,
        align: e.align ?? g.A.Align.STRETCH,
        wrap: e.wrap ?? g.A.Wrap.NO_WRAP,
        className: s()(T.qr, e.className, { [T.h0]: e.separator ?? !0 }),
        children: (0, r.jsx)(h.Fmo, { children: e.children }),
    });
}
function D(e) {
    return (0, r.jsx)(_.$n, {
        "data-migration-pending": !0,
        focusProps: e.focusProps,
        "aria-label": I.intl.string(I.t.cpT0Cq),
        look: _.$n.Looks.BLANK,
        size: _.$n.Sizes.NONE,
        onClick: e.onClick,
        innerClassName: s()(e.innerClassName, { [T.Xk]: e.withCircleBackground }),
        className: s()(e.className, { [T.zB]: e.hideOnFullscreen, [T.VN]: !e.withCircleBackground }),
        children: (0, r.jsx)(c.P, { size: "md", color: "currentColor", className: s()(e.innerClassName, T.ut) }),
    });
}
function L(e) {
    let { className: t, scrollerRef: n, ...i } = e;
    return (0, r.jsx)(d.OZj, { className: t, ref: n, ...i });
}
