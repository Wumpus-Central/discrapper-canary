"use strict";
n.d(t, { A: () => T });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(563495),
    l = n(311907),
    u = n(554146),
    c = n(459192),
    d = n(397927),
    _ = n(775602),
    f = n(379848),
    p = n(287809),
    h = n(927578),
    m = n(49999),
    g = n(985018),
    E = n(500320);
let A = { tension: 750, mass: 2.5, friction: 70 },
    I = 20;
function T(e) {
    let { checked: t, onClick: n, id: a = "burst-reaction-toggle-button" } = e,
        T = (0, l.bG)([_.A], () => _.A.useReducedMotion),
        y = p.default.getCurrentUser(),
        S = null == y || (0, h.TW)(y) ? [u.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP] : [],
        [v, C] = (0, f.kn)(S),
        [b, N] = i.useState(!1),
        [R, O] = (0, d.zhh)(() => ({})),
        D = (0, o.animated)(d.it9);
    function L() {
        O({ from: { rotate: t ? "360deg" : "0deg" }, to: { rotate: t ? "0deg" : "360deg" }, config: A }), n?.(), N(!1);
    }
    i.useEffect(() => {
        let e = v === u.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (C(m.i.DISMISS), setTimeout(() => N(e), 200));
    }, [v, C]);
    let w = b ? g.intl.string(g.t["Osi/uy"]) : t ? g.intl.string(g.t["5cRA/b"]) : g.intl.string(g.t.buV4av),
        x = b ? g.intl.string(g.t.ORK94p) : void 0;
    return (0, r.jsx)(c.u, {
        position: "top",
        title: x,
        body: w,
        asset: (0, r.jsx)(d.tvc, { size: "md", color: "currentColor" }),
        assetSize: 20,
        forceOpen: b,
        children: (0, r.jsxs)("div", {
            "aria-label": w,
            children: [
                (0, r.jsx)("input", { className: E.Qg, checked: t, onChange: L, id: a, type: "checkbox" }),
                (0, r.jsxs)("label", {
                    htmlFor: a,
                    className: s()(E.Pf, { [E.wM]: t }),
                    children: [
                        (0, r.jsx)(D, {
                            style: T ? void 0 : R,
                            size: "custom",
                            width: I,
                            height: I,
                            color: t ? "white" : "currentColor",
                            className: E.Kk,
                        }),
                        (0, r.jsx)("span", {
                            children: (0, r.jsx)(d.Text, {
                                className: E.Qg,
                                variant: "text-sm/semibold",
                                children: g.intl.string(g.t.buV4av),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
