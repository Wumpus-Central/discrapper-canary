n.d(t, { A: () => O }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(432022),
    l = n(311907),
    c = n(554146),
    u = n(459192),
    d = n(397927),
    f = n(775602),
    p = n(379848),
    _ = n(287809),
    h = n(927578),
    m = n(49999),
    g = n(985018),
    E = n(500320);
let b = {
        tension: 750,
        mass: 2.5,
        friction: 70,
    },
    y = 20;
function O(e) {
    let { checked: t, onClick: n, id: a = "burst-reaction-toggle-button" } = e,
        O = (0, l.bG)([f.A], () => f.A.useReducedMotion),
        A = _.default.getCurrentUser(),
        v = null == A || (0, h.TW)(A) ? [c.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP] : [],
        [S, I] = (0, p.kn)(v),
        [T, C] = i.useState(!1),
        [N, R] = (0, d.zhh)(() => ({})),
        w = (0, o.animated)(d.it9);
    function P() {
        R({
            from: { rotate: t ? "360deg" : "0deg" },
            to: { rotate: t ? "0deg" : "360deg" },
            config: b,
        }),
            null == n || n(),
            C(!1);
    }
    i.useEffect(() => {
        let e = S === c.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (I(m.i.DISMISS), setTimeout(() => C(e), 200));
    }, [S, I]);
    let D = T ? g.intl.string(g.t["Osi/uy"]) : t ? g.intl.string(g.t["5cRA/b"]) : g.intl.string(g.t.buV4av),
        x = T ? g.intl.string(g.t.ORK94p) : void 0;
    return (0, r.jsx)(u.u, {
        position: "top",
        title: x,
        body: D,
        asset: (0, r.jsx)(d.tvc, {
            size: "md",
            color: "currentColor",
        }),
        assetSize: 20,
        forceOpen: T,
        children: (0, r.jsxs)("div", {
            "aria-label": D,
            children: [
                (0, r.jsx)("input", {
                    className: E.Qg,
                    checked: t,
                    onChange: P,
                    id: a,
                    type: "checkbox",
                }),
                (0, r.jsxs)("label", {
                    htmlFor: a,
                    className: s()(E.Pf, { [E.wM]: t }),
                    children: [
                        (0, r.jsx)(w, {
                            style: O ? void 0 : N,
                            size: "custom",
                            width: y,
                            height: y,
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
