"use strict";
n.d(t, { A: () => y });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(419354),
    l = n(311907),
    u = n(554146),
    c = n(459192),
    d = n(717421),
    _ = n(343032),
    f = n(403581),
    p = n(939249),
    h = n(775602),
    E = n(932001),
    m = n(287809),
    g = n(927578),
    A = n(49999),
    I = n(985018),
    T = n(337889);
let S = { tension: 750, mass: 2.5, friction: 70 };
function y(e) {
    let { checked: t, onClick: n } = e,
        s = (0, l.bG)([h.A], () => h.A.useReducedMotion),
        y = m.default.getCurrentUser(),
        N = null == y || (0, g.TW)(y) ? [u.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP] : [],
        [v, C] = (0, E.kn)(N),
        [O, R] = i.useState(!1),
        [b, D] = (0, d.z)(() => ({})),
        L = (0, o.animated)(_.i);
    i.useEffect(() => {
        let e = v === u.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (C(A.i.DISMISS), setTimeout(() => R(e), 200));
    }, [v, C]);
    let w = O ? I.intl.string(I.t["Osi/uy"]) : t ? I.intl.string(I.t["5cRA/b"]) : I.intl.string(I.t.buV4av),
        M = O ? I.intl.string(I.t.ORK94p) : void 0;
    return (0, r.jsx)(c.u, {
        position: "top",
        title: M,
        body: w,
        asset: (0, r.jsx)(f.t, { size: "md", color: "currentColor" }),
        assetSize: 20,
        forceOpen: O,
        children: (0, r.jsx)(p.D, {
            "aria-label": w,
            "aria-pressed": t,
            onClick: function () {
                D({ from: { rotate: t ? "360deg" : "0deg" }, to: { rotate: t ? "0deg" : "360deg" }, config: S }),
                    n?.(),
                    R(!1);
            },
            focusProps: { enabled: !1 },
            className: a()(T.Pf, { [T.wM]: t }),
            children: (0, r.jsx)(L, {
                style: s ? void 0 : b,
                size: "custom",
                width: 20,
                height: 20,
                color: t ? "white" : "currentColor",
                className: T.Kk,
            }),
        }),
    });
}
