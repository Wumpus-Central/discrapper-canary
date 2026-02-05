"use strict";
n.d(t, { $m: () => N, Dc: () => D, EO: () => v, WM: () => S, jl: () => R, rI: () => T, rQ: () => C, s_: () => O });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(92674),
    l = n(110259),
    u = n(615300),
    c = n(789645),
    d = n(158954),
    _ = n(862482),
    f = n(305866),
    p = n(397927),
    h = n(989395),
    m = n(235986),
    g = n(231723),
    E = n(818348),
    A = n(985018),
    I = n(997168),
    T = (function (e) {
        return (e.SMALL = "small"), (e.MEDIUM = "medium"), (e.LARGE = "large"), (e.DYNAMIC = "dynamic"), e;
    })({});
let y = Object.freeze({ small: I.EX, medium: I.Y, large: I.as, dynamic: null });
var S = (function (e) {
    return (e.DEFAULT = "default"), (e.SUBTLE = "subtle"), e;
})({});
function v(e) {
    let {
            transitionState: t,
            children: n,
            size: a = "small",
            role: c = "dialog",
            className: _,
            fullscreenOnMobile: p = !0,
            hideShadow: m = !1,
            onAnimationEnd: A = E.tE,
            returnRef: T,
            animation: S = "default",
            parentComponent: v,
            ...C
        } = e,
        b = t === g.ip.ENTERING || t === g.ip.ENTERED;
    i.useContext(h.A)({
        type: l.ImpressionTypes.PAGE,
        name: l.ImpressionNames.MODAL_ROOT_LEGACY,
        properties: { variant: v },
    });
    let { reducedMotion: N } = i.useContext(d.CZY),
        R = (0, d.zhh)(
            {
                opacity: +!!b,
                transform: b || N.enabled || "subtle" === S ? "scale(1)" : "scale(0.7)",
                config: { duration: 200, easing: u.A.Easing.out(u.A.Easing.quad), clamp: !0 },
                onRest: A,
            },
            "animate-always",
        ),
        O = i.useRef(null),
        D = null != C["aria-label"],
        L = null != C["aria-labelledby"],
        w = i.useId(),
        x = C["aria-labelledby"] ?? w,
        P = i.useMemo(() => ({ headerId: x, headerIdIsManaged: L }), [x, L]);
    return (0, r.jsx)(g.CP.Provider, {
        value: P,
        children: (0, r.jsx)(f.l, {
            className: I.Gg,
            role: c,
            returnRef: T,
            impressionType: l.ImpressionTypes.MODAL,
            "aria-labelledby": D ? void 0 : P.headerId,
            ...C,
            children: (0, r.jsx)(o.animated.div, {
                className: s()(_, I.zr, y[a], { [I.z]: p, [I.vl]: !m }),
                ref: O,
                style: R,
                children: (0, r.jsx)(d.xpW, { containerRef: O, children: n }),
            }),
        }),
    });
}
function C(e) {
    let { headerId: t, headerIdIsManaged: n } = i.useContext(g.CP);
    return (0, r.jsx)(m.A, {
        grow: 0,
        shrink: 0,
        direction: e.direction ?? m.A.Direction.HORIZONTAL,
        justify: e.justify ?? m.A.Justify.START,
        align: e.align ?? m.A.Align.CENTER,
        wrap: e.wrap ?? m.A.Wrap.NO_WRAP,
        className: s()(I.wx, e.className, { [I.me]: e.separator ?? !0 }),
        id: n ? void 0 : t,
        children: e.children,
    });
}
function b(e) {
    switch (e ?? "thin") {
        case "auto":
            return d.GtU;
        case "none":
            return d.zCo;
        default:
            return d.ChK;
    }
}
function N(e) {
    let { className: t, children: n, scrollerRef: i, scrollbarType: a, ...o } = e,
        l = b(a);
    return (0, r.jsx)(l, {
        "data-migration-pending": !0,
        className: s()(I.Qs, t),
        ref: i,
        ...o,
        children: (0, r.jsx)(p.Fmo, { children: n }),
    });
}
function R(e) {
    return (0, r.jsx)(m.A, {
        grow: 0,
        shrink: 0,
        direction: e.direction ?? m.A.Direction.HORIZONTAL_REVERSE,
        justify: e.justify ?? m.A.Justify.START,
        align: e.align ?? m.A.Align.STRETCH,
        wrap: e.wrap ?? m.A.Wrap.NO_WRAP,
        className: s()(I.qr, e.className, { [I.h0]: e.separator ?? !0 }),
        children: (0, r.jsx)(p.Fmo, { children: e.children }),
    });
}
function O(e) {
    return (0, r.jsx)(_.$n, {
        "data-migration-pending": !0,
        focusProps: e.focusProps,
        "aria-label": A.intl.string(A.t.cpT0Cq),
        look: _.$n.Looks.BLANK,
        size: _.$n.Sizes.NONE,
        onClick: e.onClick,
        innerClassName: s()(e.innerClassName, { [I.Xk]: e.withCircleBackground }),
        className: s()(e.className, { [I.zB]: e.hideOnFullscreen, [I.VN]: !e.withCircleBackground }),
        children: (0, r.jsx)(c.P, { size: "md", color: "currentColor", className: s()(e.innerClassName, I.ut) }),
    });
}
function D(e) {
    let { className: t, scrollerRef: n, ...i } = e;
    return (0, r.jsx)(d.OZj, { className: t, ref: n, ...i });
}
