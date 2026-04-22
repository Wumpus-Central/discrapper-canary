"use strict";
n.d(t, { A: () => v });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(517738),
    o = n(311907),
    c = n(554146),
    u = n(459192),
    d = n(717421),
    h = n(343032),
    m = n(403581),
    p = n(939249),
    f = n(775602),
    g = n(932001),
    _ = n(287809),
    x = n(927578),
    A = n(49999),
    C = n(985018),
    E = n(337889);
let I = { tension: 750, mass: 2.5, friction: 70 };
function v(e) {
    let { checked: t, onClick: n } = e,
        s = (0, o.bG)([f.A], () => f.A.useReducedMotion),
        v = _.default.getCurrentUser(),
        y = null == v || (0, x.TW)(v) ? [c.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP] : [],
        [S, b] = (0, g.kn)(y),
        [N, T] = l.useState(!1),
        [j, R] = (0, d.z)(() => ({})),
        w = (0, a.animated)(h.i);
    l.useEffect(() => {
        let e = S === c.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (b(A.i.DISMISS), setTimeout(() => T(e), 200));
    }, [S, b]);
    let L = N ? C.intl.string(C.t["Osi/uy"]) : t ? C.intl.string(C.t["5cRA/b"]) : C.intl.string(C.t.buV4av),
        M = N ? C.intl.string(C.t.ORK94p) : void 0;
    return (0, i.jsx)(u.u, {
        position: "top",
        title: M,
        body: L,
        asset: (0, i.jsx)(m.t, { size: "md", color: "currentColor" }),
        assetSize: 20,
        forceOpen: N,
        children: (0, i.jsx)(p.D, {
            "aria-label": L,
            "aria-pressed": t,
            onClick: function () {
                R({ from: { rotate: t ? "360deg" : "0deg" }, to: { rotate: t ? "0deg" : "360deg" }, config: I }),
                    n?.(),
                    T(!1);
            },
            focusProps: { enabled: !1 },
            className: r()(E.Pf, { [E.wM]: t }),
            children: (0, i.jsx)(w, {
                style: s ? void 0 : j,
                size: "custom",
                width: 20,
                height: 20,
                color: t ? "white" : "currentColor",
                className: E.Kk,
            }),
        }),
    });
}
