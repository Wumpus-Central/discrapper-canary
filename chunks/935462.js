"use strict";
n.d(t, { $m: () => R, Dc: () => D, EO: () => v, WM: () => y, jl: () => O, rI: () => T, rQ: () => N, s_: () => b });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(4208),
    l = n(110259),
    u = n(615300),
    c = n(789645),
    d = n(158954),
    _ = n(862482),
    f = n(305866),
    p = n(397927),
    h = n(989395),
    m = n(235986),
    E = n(231723),
    g = n(818348),
    A = n(985018),
    I = n(640269),
    T = (function (e) {
        return (e.SMALL = "small"), (e.MEDIUM = "medium"), (e.LARGE = "large"), (e.DYNAMIC = "dynamic"), e;
    })({});
let S = Object.freeze({ small: I.EX, medium: I.Y, large: I.as, dynamic: null });
var y = (function (e) {
    return (e.DEFAULT = "default"), (e.SUBTLE = "subtle"), e;
})({});
function v(e) {
    let {
            transitionState: t,
            children: n,
            size: s = "small",
            role: c = "dialog",
            className: _,
            fullscreenOnMobile: p = !0,
            hideShadow: m = !1,
            onAnimationEnd: A = g.tE,
            returnRef: T,
            animation: y = "default",
            parentComponent: v,
            ...N
        } = e,
        C = t === E.ip.ENTERING || t === E.ip.ENTERED;
    i.useContext(h.A)({
        type: l.ImpressionTypes.PAGE,
        name: l.ImpressionNames.MODAL_ROOT_LEGACY,
        properties: { variant: v },
    });
    let { reducedMotion: R } = i.useContext(d.CZY),
        O = (0, d.zhh)(
            {
                opacity: +!!C,
                transform: C || R.enabled || "subtle" === y ? "scale(1)" : "scale(0.7)",
                config: { duration: 200, easing: u.A.Easing.out(u.A.Easing.quad), clamp: !0 },
                onRest: A,
            },
            "animate-always",
        ),
        b = i.useRef(null),
        D = null != N["aria-label"],
        L = null != N["aria-labelledby"],
        w = i.useId(),
        M = N["aria-labelledby"] ?? w,
        x = i.useMemo(() => ({ headerId: M, headerIdIsManaged: L }), [M, L]);
    return (0, r.jsx)(E.CP.Provider, {
        value: x,
        children: (0, r.jsx)(f.l, {
            className: I.Gg,
            role: c,
            returnRef: T,
            impressionType: l.ImpressionTypes.MODAL,
            "aria-labelledby": D ? void 0 : x.headerId,
            ...N,
            children: (0, r.jsx)(o.animated.div, {
                className: a()(_, I.zr, S[s], { [I.z]: p, [I.vl]: !m }),
                ref: b,
                style: O,
                children: (0, r.jsx)(d.xpW, { containerRef: b, children: n }),
            }),
        }),
    });
}
function N(e) {
    let { headerId: t, headerIdIsManaged: n } = i.useContext(E.CP);
    return (0, r.jsx)(m.A, {
        grow: 0,
        shrink: 0,
        direction: e.direction ?? m.A.Direction.HORIZONTAL,
        justify: e.justify ?? m.A.Justify.START,
        align: e.align ?? m.A.Align.CENTER,
        wrap: e.wrap ?? m.A.Wrap.NO_WRAP,
        className: a()(I.wx, e.className, { [I.me]: e.separator ?? !0 }),
        id: n ? void 0 : t,
        children: e.children,
    });
}
function C(e) {
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
    let { className: t, children: n, scrollerRef: i, scrollbarType: s, ...o } = e,
        l = C(s);
    return (0, r.jsx)(l, {
        "data-migration-pending": !0,
        className: a()(I.Qs, t),
        ref: i,
        ...o,
        children: (0, r.jsx)(p.Fmo, { children: n }),
    });
}
function O(e) {
    return (0, r.jsx)(m.A, {
        grow: 0,
        shrink: 0,
        direction: e.direction ?? m.A.Direction.HORIZONTAL_REVERSE,
        justify: e.justify ?? m.A.Justify.START,
        align: e.align ?? m.A.Align.STRETCH,
        wrap: e.wrap ?? m.A.Wrap.NO_WRAP,
        className: a()(I.qr, e.className, { [I.h0]: e.separator ?? !0 }),
        children: (0, r.jsx)(p.Fmo, { children: e.children }),
    });
}
function b(e) {
    return (0, r.jsx)(_.$n, {
        "data-migration-pending": !0,
        focusProps: e.focusProps,
        "aria-label": A.intl.string(A.t.cpT0Cq),
        look: _.$n.Looks.BLANK,
        size: _.$n.Sizes.NONE,
        onClick: e.onClick,
        innerClassName: a()(e.innerClassName, { [I.Xk]: e.withCircleBackground }),
        className: a()(e.className, { [I.zB]: e.hideOnFullscreen, [I.VN]: !e.withCircleBackground }),
        children: (0, r.jsx)(c.P, { size: "md", color: "currentColor", className: a()(e.innerClassName, I.ut) }),
    });
}
function D(e) {
    let { className: t, scrollerRef: n, ...i } = e;
    return (0, r.jsx)(d.OZj, { className: t, ref: n, ...i });
}
