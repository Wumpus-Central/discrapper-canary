"use strict";
n.d(t, { A: () => T });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(880013),
    l = n(311907),
    u = n(554146),
    c = n(459192),
    d = n(397927),
    _ = n(775602),
    f = n(932001),
    p = n(287809),
    h = n(927578),
    m = n(49999),
    E = n(985018),
    g = n(606850);
let A = { tension: 750, mass: 2.5, friction: 70 },
    I = 20;
function T(e) {
    let { checked: t, onClick: n } = e,
        s = (0, l.bG)([_.A], () => _.A.useReducedMotion),
        T = p.default.getCurrentUser(),
        S = null == T || (0, h.TW)(T) ? [u.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP] : [],
        [y, v] = (0, f.kn)(S),
        [N, C] = i.useState(!1),
        [R, O] = (0, d.zhh)(() => ({})),
        b = (0, o.animated)(d.it9);
    function D() {
        O({ from: { rotate: t ? "360deg" : "0deg" }, to: { rotate: t ? "0deg" : "360deg" }, config: A }), n?.(), C(!1);
    }
    i.useEffect(() => {
        let e = y === u.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (v(m.i.DISMISS), setTimeout(() => C(e), 200));
    }, [y, v]);
    let L = N ? E.intl.string(E.t["Osi/uy"]) : t ? E.intl.string(E.t["5cRA/b"]) : E.intl.string(E.t.buV4av),
        w = N ? E.intl.string(E.t.ORK94p) : void 0;
    return (0, r.jsx)(c.u, {
        position: "top",
        title: w,
        body: L,
        asset: (0, r.jsx)(d.tvc, { size: "md", color: "currentColor" }),
        assetSize: 20,
        forceOpen: N,
        children: (0, r.jsx)(d.DUT, {
            "aria-label": L,
            "aria-pressed": t,
            onClick: D,
            focusProps: { enabled: !1 },
            className: a()(g.Pf, { [g.wM]: t }),
            children: (0, r.jsx)(b, {
                style: s ? void 0 : R,
                size: "custom",
                width: I,
                height: I,
                color: t ? "white" : "currentColor",
                className: g.Kk,
            }),
        }),
    });
}
