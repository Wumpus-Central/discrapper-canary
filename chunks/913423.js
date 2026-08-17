n.d(l, { A: () => b });
var s = n(477900),
    t = n(582128),
    a = n(503698),
    i = n.n(a),
    r = n(702841),
    c = n(993077),
    d = n(97808),
    u = n(778712),
    o = n(834730),
    m = n(329177),
    x = n(66834),
    h = n(775602),
    g = n(569944),
    j = n(903209),
    A = n(71393),
    N = n(287809),
    f = n(562153),
    v = n(427262),
    I = n(186444);
function b(e) {
    var l, n;
    let a,
        { guildId: b, welcomeMessage: C, className: p } = e,
        E = (0, r.bG)([A.A], () => A.A.getGuild(b)),
        G = (0, r.bG)([h.Ay], () => h.Ay.useReducedMotion),
        M = (0, r.bG)([N.default], () => N.default.getUser(C?.authorIds[0])),
        y = t.useMemo(() => (null != E && null != M && (0, g.c)(E, M) ? M : null), [E, M]),
        L = (0, r.bG)([N.default], () => N.default.getCurrentUser()),
        _ = t.useMemo(() => C?.authorIds ?? [], [C]);
    t.useEffect(() => {
        x.A.requestMembersById(b, _);
    }, [b, _]),
        t.useEffect(() => {
            null != y && (0, j.A)(y.id, y.getAvatarURL(b, 48), { guildId: b });
        }, [y, b]);
    let k = f.Ay.useName(b, null, y),
        U = (0, v.tx)(L);
    if (null == y || null == L || null == C) return null;
    let R = null != E && E.ownerId === y.id;
    return (0, s.jsxs)(c.Z, {
        className: i()(I.fr, p),
        children: [
            (0, s.jsx)("div", { className: I.oJ }),
            G
                ? (0, s.jsx)(d.eu, {
                      src: y.getAvatarURL(b, 48),
                      size: u._3.SIZE_48,
                      className: I.my,
                      "aria-label": y.username,
                  })
                : (0, s.jsx)(d.Js, {
                      src: y.getAvatarURL(b, 48),
                      size: u._3.SIZE_48,
                      className: I.my,
                      "aria-label": y.username,
                  }),
            (0, s.jsx)("div", { className: I.uh }),
            (0, s.jsxs)("div", {
                className: I.H0,
                children: [
                    (0, s.jsxs)("div", {
                        className: I.HO,
                        children: [
                            (0, s.jsx)(o.E, { variant: "text-sm/semibold", color: "text-strong", children: k }),
                            R ? (0, s.jsx)(m.CrownIcon, { size: "xxs", color: "currentColor", className: I.Dd }) : null,
                        ],
                    }),
                    (0, s.jsx)(o.E, {
                        variant: "text-md/medium",
                        children:
                            ((l = C?.message),
                            (n = U ?? L.username),
                            (a = l.split(/\[@username\]/g)),
                            (0, s.jsx)("span", {
                                children: a.map((e, l) =>
                                    (0, s.jsxs)(
                                        t.Fragment,
                                        {
                                            children: [
                                                e,
                                                l < a.length - 1
                                                    ? (0, s.jsx)(o.E, {
                                                          tag: "span",
                                                          variant: "text-md/semibold",
                                                          children: `@${n}`,
                                                      })
                                                    : null,
                                            ],
                                        },
                                        `username-${l}`,
                                    ),
                                ),
                            })),
                    }),
                ],
            }),
        ],
    });
}
