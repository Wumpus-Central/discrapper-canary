"use strict";
n.d(t, { A: () => y });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(40153),
    l = n(311907),
    u = n(554146),
    c = n(459192),
    d = n(397927),
    _ = n(775602),
    f = n(379848),
    h = n(287809),
    p = n(927578),
    g = n(49999),
    E = n(985018),
    A = n(500320);
let I = { tension: 750, mass: 2.5, friction: 70 },
    T = 20;
function y(e) {
    let { checked: t, onClick: n, id: a = "burst-reaction-toggle-button" } = e,
        y = (0, l.bG)([_.A], () => _.A.useReducedMotion),
        S = h.default.getCurrentUser(),
        v = null == S || (0, p.TW)(S) ? [u.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP] : [],
        [C, b] = (0, f.kn)(v),
        [N, R] = i.useState(!1),
        [O, D] = (0, d.zhh)(() => ({})),
        L = (0, o.animated)(d.it9);
    function w() {
        D({ from: { rotate: t ? "360deg" : "0deg" }, to: { rotate: t ? "0deg" : "360deg" }, config: I }), n?.(), R(!1);
    }
    i.useEffect(() => {
        let e = C === u.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (b(g.i.DISMISS), setTimeout(() => R(e), 200));
    }, [C, b]);
    let x = N ? E.intl.string(E.t["Osi/uy"]) : t ? E.intl.string(E.t["5cRA/b"]) : E.intl.string(E.t.buV4av),
        P = N ? E.intl.string(E.t.ORK94p) : void 0;
    return (0, r.jsx)(c.u, {
        position: "top",
        title: P,
        body: x,
        asset: (0, r.jsx)(d.tvc, { size: "md", color: "currentColor" }),
        assetSize: 20,
        forceOpen: N,
        children: (0, r.jsxs)("div", {
            "aria-label": x,
            children: [
                (0, r.jsx)("input", { className: A.Qg, checked: t, onChange: w, id: a, type: "checkbox" }),
                (0, r.jsxs)("label", {
                    htmlFor: a,
                    className: s()(A.Pf, { [A.wM]: t }),
                    children: [
                        (0, r.jsx)(L, {
                            style: y ? void 0 : O,
                            size: "custom",
                            width: T,
                            height: T,
                            color: t ? "white" : "currentColor",
                            className: A.Kk,
                        }),
                        (0, r.jsx)("span", {
                            children: (0, r.jsx)(d.Text, {
                                className: A.Qg,
                                variant: "text-sm/semibold",
                                children: E.intl.string(E.t.buV4av),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
