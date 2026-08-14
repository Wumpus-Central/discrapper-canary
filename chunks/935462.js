"use strict";
n.d(t, { $m: () => M, Dc: () => w, EO: () => v, WM: () => y, jl: () => P, rI: () => L, rQ: () => b, s_: () => U });
var i,
    r,
    a = n(477900),
    s = n(582128),
    l = n(503698),
    o = n.n(l),
    d = n(53466),
    c = n(562708),
    u = n(615300),
    _ = n(789645),
    E = n(844222),
    A = n(717421),
    h = n(259678),
    I = n(689175),
    f = n(707554),
    p = n(475825),
    T = n(862482),
    m = n(305866),
    g = n(989395),
    S = n(235986),
    N = n(231723),
    C = n(818348),
    R = n(375708),
    O = n(156453),
    L = (((i = {}).SMALL = "small"), (i.MEDIUM = "medium"), (i.LARGE = "large"), (i.DYNAMIC = "dynamic"), i);
let D = Object.freeze({ small: O.EX, medium: O.Y, large: O.as, dynamic: null });
var y = (((r = {}).DEFAULT = "default"), (r.SUBTLE = "subtle"), r);
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
            animation: T = "default",
            parentComponent: S,
            ...R
        } = e,
        L = t === N.ip.ENTERING || t === N.ip.ENTERED;
    s.useContext(g.A)({
        type: c.ImpressionTypes.PAGE,
        name: c.ImpressionNames.MODAL_ROOT_LEGACY,
        properties: { variant: S },
    });
    let { reducedMotion: y } = s.useContext(E.C),
        v = (0, A.z)(
            {
                opacity: +!!L,
                transform: L || y.enabled || "subtle" === T ? "scale(1)" : "scale(0.7)",
                config: { duration: 200, easing: u.A.Easing.out(u.A.Easing.quad), clamp: !0 },
                onRest: f,
            },
            "animate-always",
        ),
        b = s.useRef(null),
        M = null != R["aria-label"],
        P = null != R["aria-labelledby"],
        U = s.useId(),
        w = R["aria-labelledby"] ?? U,
        G = s.useMemo(() => ({ headerId: w, headerIdIsManaged: P, transitionState: t }), [w, P, t]);
    return (0, a.jsx)(N.CP.Provider, {
        value: G,
        children: (0, a.jsx)(m.l, {
            className: O.Gg,
            role: r,
            returnRef: p,
            impressionType: c.ImpressionTypes.MODAL,
            "aria-labelledby": M ? void 0 : G.headerId,
            ...R,
            children: (0, a.jsx)(d.animated.div, {
                className: o()(l, O.zr, D[i], { [O.z]: _, [O.vl]: !I }),
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
        className: o()(O.wx, e.className, { [O.me]: e.separator ?? !0 }),
        id: n ? void 0 : t,
        children: e.children,
    });
}
function M(e) {
    let { className: t, children: n, scrollerRef: i, scrollbarType: r, scrollbarGutter: s, ...l } = e,
        d = (function (e) {
            switch (e ?? "thin") {
                case "auto":
                    return I.Gt;
                case "none":
                    return I.zC;
                default:
                    return I.Ch;
            }
        })(r),
        c = r ?? "thin",
        u = !1 === s || "none" === c ? void 0 : "auto" === c ? O.QX : O.h3;
    return (0, a.jsx)(d, {
        "data-migration-pending": !0,
        className: o()(O.Qs, u, t),
        scrollbarGutter: s,
        ref: i,
        ...l,
        children: (0, a.jsx)(f.F, { children: n }),
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
        className: o()(O.qr, e.className, { [O.h0]: e.separator ?? !0 }),
        children: (0, a.jsx)(f.F, { children: e.children }),
    });
}
function U(e) {
    return (0, a.jsx)(T.$n, {
        "data-migration-pending": !0,
        focusProps: e.focusProps,
        "aria-label": R.intl.string(R.t.cpT0Cq),
        look: T.$n.Looks.BLANK,
        size: T.$n.Sizes.NONE,
        onClick: e.onClick,
        innerClassName: o()(e.innerClassName, { [O.Xk]: e.withCircleBackground }),
        className: o()(e.className, { [O.zB]: e.hideOnFullscreen, [O.VN]: !e.withCircleBackground }),
        children: (0, a.jsx)(_.P, { size: "md", color: "currentColor", className: o()(e.innerClassName, O.ut) }),
    });
}
function w(e) {
    let { className: t, scrollerRef: n, ...i } = e;
    return (0, a.jsx)(p.OZ, { className: t, ref: n, ...i });
}
