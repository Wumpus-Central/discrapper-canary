var s = n(477900),
    a = n(582128),
    t = n(503698),
    i = n.n(t),
    r = n(164636),
    c = n(993077),
    d = n(97808),
    o = n(778712),
    u = n(834730),
    m = n(329177),
    h = n(778858),
    x = n(775602),
    g = n(569944),
    j = n(917445),
    A = n(71393),
    b = n(287809),
    N = n(562153),
    f = n(427262),
    v = n(914589);
n.d(
    l,
    {},
    {
        A: function (e) {
            var l, n;
            let t,
                { guildId: I, welcomeMessage: C, className: p } = e,
                E = (0, r.bG)([A.A], () => A.A.getGuild(I)),
                y = (0, r.bG)([x.Ay], () => x.Ay.useReducedMotion),
                G = (0, r.bG)([b.default], () => b.default.getUser(C?.authorIds[0])),
                M = a.useMemo(() => (null != E && null != G && (0, g.c)(E, G) ? G : null), [E, G]),
                L = (0, r.bG)([b.default], () => b.default.getCurrentUser()),
                _ = a.useMemo(() => C?.authorIds ?? [], [C]);
            (a.useEffect(() => {
                h.A.requestMembersById(I, _);
            }, [I, _]),
                a.useEffect(() => {
                    null != M && (0, j.A)(M.id, M.getAvatarURL(I, 48), { guildId: I });
                }, [M, I]));
            let k = N.Ay.useName(I, null, M),
                U = (0, f.tx)(L);
            if (null == M || null == L || null == C) return null;
            let R = null != E && E.ownerId === M.id;
            return (0, s.jsxs)(c.Z, {
                className: i()(v.fr, p),
                children: [
                    (0, s.jsx)("div", { className: v.oJ }),
                    y
                        ? (0, s.jsx)(d.eu, {
                              src: M.getAvatarURL(I, 48),
                              size: o._3.SIZE_48,
                              className: v.my,
                              "aria-label": M.username,
                          })
                        : (0, s.jsx)(d.Js, {
                              src: M.getAvatarURL(I, 48),
                              size: o._3.SIZE_48,
                              className: v.my,
                              "aria-label": M.username,
                          }),
                    (0, s.jsx)("div", { className: v.uh }),
                    (0, s.jsxs)("div", {
                        className: v.H0,
                        children: [
                            (0, s.jsxs)("div", {
                                className: v.HO,
                                children: [
                                    (0, s.jsx)(u.E, { variant: "body-sm/semibold", color: "text-strong", children: k }),
                                    R
                                        ? (0, s.jsx)(m.CrownIcon, {
                                              size: "xxs",
                                              color: "currentColor",
                                              className: v.Dd,
                                          })
                                        : null,
                                ],
                            }),
                            (0, s.jsx)(u.E, {
                                variant: "body-md/medium",
                                children:
                                    ((l = C?.message),
                                    (n = U ?? L.username),
                                    (t = l.split(/\[@username\]/g)),
                                    (0, s.jsx)("span", {
                                        children: t.map((e, l) =>
                                            (0, s.jsxs)(
                                                a.Fragment,
                                                {
                                                    children: [
                                                        e,
                                                        l < t.length - 1
                                                            ? (0, s.jsx)(u.E, {
                                                                  tag: "span",
                                                                  variant: "body-md/semibold",
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
        },
    },
);
