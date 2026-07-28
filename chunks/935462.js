"use strict";
n.d(t, { $m: () => M, Dc: () => w, EO: () => v, WM: () => D, jl: () => P, rI: () => L, rQ: () => b, s_: () => U });
var i,
    r,
    a = n(477900),
    s = n(582128),
    l = n(503698),
    o = n.n(l),
    d = n(461376),
    c = n(562708),
    u = n(615300),
    _ = n(789645),
    E = n(844222),
    A = n(717421),
    h = n(259678),
    I = n(689175),
    f = n(475825),
    p = n(862482),
    T = n(305866),
    m = n(707554),
    g = n(989395),
    S = n(235986),
    N = n(231723),
    C = n(818348),
    O = n(375708),
    R = n(156453),
    L = (((i = {}).SMALL = "small"), (i.MEDIUM = "medium"), (i.LARGE = "large"), (i.DYNAMIC = "dynamic"), i);
let y = Object.freeze({ small: R.EX, medium: R.Y, large: R.as, dynamic: null });
var D = (((r = {}).DEFAULT = "default"), (r.SUBTLE = "subtle"), r);
function v(e) {
    let {
            transitionState: t,
            children: n,
            size: i = "small",
            role: r = "dialog",
            className: l,
            fullscreenOnMobile: _ = !0,
            hideShadow: I = !1,
            onAnimationEnd: f = C.tE,
            returnRef: p,
            animation: m = "default",
            parentComponent: S,
            ...O
        } = e,
        L = t === N.ip.ENTERING || t === N.ip.ENTERED;
    s.useContext(g.A)({
        type: c.ImpressionTypes.PAGE,
        name: c.ImpressionNames.MODAL_ROOT_LEGACY,
        properties: { variant: S },
    });
    let { reducedMotion: D } = s.useContext(E.C),
        v = (0, A.z)(
            {
                opacity: +!!L,
                transform: L || D.enabled || "subtle" === m ? "scale(1)" : "scale(0.7)",
                config: { duration: 200, easing: u.A.Easing.out(u.A.Easing.quad), clamp: !0 },
                onRest: f,
            },
            "animate-always",
        ),
        b = s.useRef(null),
        M = null != O["aria-label"],
        P = null != O["aria-labelledby"],
        U = s.useId(),
        w = O["aria-labelledby"] ?? U,
        G = s.useMemo(() => ({ headerId: w, headerIdIsManaged: P }), [w, P]);
    return (0, a.jsx)(N.CP.Provider, {
        value: G,
        children: (0, a.jsx)(T.l, {
            className: R.Gg,
            role: r,
            returnRef: p,
            impressionType: c.ImpressionTypes.MODAL,
            "aria-labelledby": M ? void 0 : G.headerId,
            ...O,
            children: (0, a.jsx)(d.animated.div, {
                className: o()(l, R.zr, y[i], { [R.z]: _, [R.vl]: !I }),
                ref: b,
                style: v,
                children: (0, a.jsx)(h.xp, { containerRef: b, children: n }),
            }),
        }),
    });
}
function b(e) {
    let { headerId: t, headerIdIsManaged: n } = s.useContext(N.CP);
    return (0, a.jsx)(S.A, {
        grow: 0,
        shrink: 0,
        direction: e.direction ?? S.A.Direction.HORIZONTAL,
        justify: e.justify ?? S.A.Justify.START,
        align: e.align ?? S.A.Align.CENTER,
        wrap: e.wrap ?? S.A.Wrap.NO_WRAP,
        className: o()(R.wx, e.className, { [R.me]: e.separator ?? !0 }),
        id: n ? void 0 : t,
        children: e.children,
    });
}
function M(e) {
    let { className: t, children: n, scrollerRef: i, scrollbarType: r, ...s } = e,
        l = (function (e) {
            switch (e ?? "thin") {
                case "auto":
                    return I.Gt;
                case "none":
                    return I.zC;
                default:
                    return I.Ch;
            }
        })(r);
    return (0, a.jsx)(l, {
        "data-migration-pending": !0,
        className: o()(R.Qs, t),
        ref: i,
        ...s,
        children: (0, a.jsx)(m.F, { children: n }),
    });
}
function P(e) {
    return (0, a.jsx)(S.A, {
        grow: 0,
        shrink: 0,
        direction: e.direction ?? S.A.Direction.HORIZONTAL_REVERSE,
        justify: e.justify ?? S.A.Justify.START,
        align: e.align ?? S.A.Align.STRETCH,
        wrap: e.wrap ?? S.A.Wrap.NO_WRAP,
        className: o()(R.qr, e.className, { [R.h0]: e.separator ?? !0 }),
        children: (0, a.jsx)(m.F, { children: e.children }),
    });
}
function U(e) {
    return (0, a.jsx)(p.$n, {
        "data-migration-pending": !0,
        focusProps: e.focusProps,
        "aria-label": O.intl.string(O.t.cpT0Cq),
        look: p.$n.Looks.BLANK,
        size: p.$n.Sizes.NONE,
        onClick: e.onClick,
        innerClassName: o()(e.innerClassName, { [R.Xk]: e.withCircleBackground }),
        className: o()(e.className, { [R.zB]: e.hideOnFullscreen, [R.VN]: !e.withCircleBackground }),
        children: (0, a.jsx)(_.P, { size: "md", color: "currentColor", className: o()(e.innerClassName, R.ut) }),
    });
}
function w(e) {
    let { className: t, scrollerRef: n, ...i } = e;
    return (0, a.jsx)(f.OZ, { className: t, ref: n, ...i });
}
