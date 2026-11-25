var i = n(477900),
    s = n(582128),
    l = n(503698),
    r = n.n(l),
    a = n(156150),
    o = n(855986),
    c = n(554146),
    u = n(717421),
    d = n(343032),
    m = n(683063),
    f = n(403581),
    E = n(939249),
    I = n(775602),
    h = n(263775),
    g = n(287809),
    A = n(448645),
    p = n(49999),
    _ = n(792996),
    N = n(748798);
let C = { tension: 750, mass: 2.5, friction: 70 };
n.d(
    t,
    {},
    {
        A: function (e) {
            let { checked: t, onClick: n, buttonRef: l } = e,
                y = (0, o.bG)([I.Ay], () => I.Ay.useReducedMotion),
                x = g.default.getCurrentUser(),
                j = null != x && !(0, A.TW)(x),
                O = j ? [] : [c.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP],
                [S, T] = (0, h.kn)(O),
                [b, R] = s.useState(!1),
                [v, P] = (0, u.z)(() => ({})),
                L = (0, a.animated)(d.SuperReactionIcon);
            s.useEffect(() => {
                let e = S === c.M.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
                e && (T(p.i.DISMISS), setTimeout(() => R(e), 200));
            }, [S, T]);
            let M = b
                    ? _.intl.string(_.t["Osi/uy"])
                    : t && !j
                      ? _.intl.string(_.t["5cRA/b"])
                      : _.intl.string(_.t.buV4av),
                D = b ? _.intl.string(_.t.ORK94p) : void 0;
            return (0, i.jsx)(m.u, {
                position: "top",
                title: D,
                body: M,
                asset: (0, i.jsx)(f.NitroWheelIcon, { size: "md", color: "currentColor" }),
                assetSize: 20,
                forceOpen: b,
                children: (0, i.jsx)(E.D, {
                    innerRef: l,
                    "aria-label": M,
                    "aria-pressed": t,
                    onClick: function () {
                        (P({
                            from: { rotate: t ? "360deg" : "0deg" },
                            to: { rotate: t ? "0deg" : "360deg" },
                            config: C,
                        }),
                            n?.(),
                            R(!1));
                    },
                    focusProps: { enabled: !1 },
                    className: r()(N.Pf, { [N.wM]: t }),
                    children: (0, i.jsx)(L, {
                        style: y ? void 0 : v,
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: t ? "white" : "currentColor",
                        className: N.Kk,
                    }),
                }),
            });
        },
    },
);
