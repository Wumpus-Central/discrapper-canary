n.d(t, {
    A: () => O,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(92674),
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
let y = {
        tension: 750,
        mass: 2.5,
        friction: 70,
    },
    b = 20;

function O(e) {
    let { checked: t, onClick: n, id: a = "burst-reaction-toggle-button" } = e,
        O = (0, l.bG)([f.A], () => f.A.useReducedMotion),
        v = _.default.getCurrentUser(),
        A = null == v || (0, h.TW)(v) ? [c.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP] : [],
        [I, S] = (0, p.kn)(A),
        [T, C] = i.useState(!1),
        [N, w] = (0, d.zhh)(() => ({})),
        R = (0, s.animated)(d.it9);

    function P() {
        w({
            from: {
                rotate: t ? "360deg" : "0deg",
            },
            to: {
                rotate: t ? "0deg" : "360deg",
            },
            config: y,
        }),
            null == n || n(),
            C(!1);
    }
    i.useEffect(() => {
        let e = I === c.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
        e && (S(m.i.DISMISS), setTimeout(() => C(e), 200));
    }, [I, S]);
    let D = T ? g.intl.string(g.t["Osi/uy"]) : t ? g.intl.string(g.t["5cRA/b"]) : g.intl.string(g.t.buV4av),
        L = T ? g.intl.string(g.t.ORK94p) : void 0;
    return (0, r.jsx)(u.u, {
        position: "top",
        title: L,
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
                    className: o()(E.Pf, {
                        [E.wM]: t,
                    }),
                    children: [
                        (0, r.jsx)(R, {
                            style: O ? void 0 : N,
                            size: "custom",
                            width: b,
                            height: b,
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
