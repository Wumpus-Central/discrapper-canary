var s = n(477900),
    a = n(582128),
    t = n(503698),
    i = n.n(t),
    r = n(164636),
    c = n(993077),
    o = n(97808),
    d = n(778712),
    u = n(834730),
    m = n(329177),
    h = n(778858),
    x = n(775602),
    g = n(569944),
    j = n(917445),
    A = n(71393),
    b = n(287809),
    I = n(562153),
    N = n(427262),
    f = n(914589);
n.d(
    l,
    {},
    {
        A: function (e) {
            var l, n;
            let t,
                { guildId: v, welcomeMessage: C, className: p } = e,
                E = (0, r.bG)([A.A], () => A.A.getGuild(v)),
                y = (0, r.bG)([x.Ay], () => x.Ay.useReducedMotion),
                G = (0, r.bG)([b.default], () => b.default.getUser(C?.authorIds[0])),
                k = a.useMemo(() => (null != E && null != G && (0, g.c)(E, G) ? G : null), [E, G]),
                M = (0, r.bG)([b.default], () => b.default.getCurrentUser()),
                L = a.useMemo(() => C?.authorIds ?? [], [C]);
            (a.useEffect(() => {
                h.A.requestMembersById(v, L);
            }, [v, L]),
                a.useEffect(() => {
                    null != k && (0, j.A)(k.id, k.getAvatarURL(v, 48), { guildId: v });
                }, [k, v]));
            let _ = I.Ay.useName(v, null, k),
                U = (0, N.tx)(M);
            if (null == k || null == M || null == C) return null;
            let R = null != E && E.ownerId === k.id;
            return (0, s.jsxs)(c.Z, {
                className: i()(f.fr, p),
                children: [
                    (0, s.jsx)("div", { className: f.oJ }),
                    y
                        ? (0, s.jsx)(o.eu, {
                              src: k.getAvatarURL(v, 48),
                              size: d._3.SIZE_48,
                              className: f.my,
                              "aria-label": k.username,
                          })
                        : (0, s.jsx)(o.Js, {
                              src: k.getAvatarURL(v, 48),
                              size: d._3.SIZE_48,
                              className: f.my,
                              "aria-label": k.username,
                          }),
                    (0, s.jsx)("div", { className: f.uh }),
                    (0, s.jsxs)("div", {
                        className: f.H0,
                        children: [
                            (0, s.jsxs)("div", {
                                className: f.HO,
                                children: [
                                    (0, s.jsx)(u.E, { variant: "body-sm/semibold", color: "text-strong", children: _ }),
                                    R
                                        ? (0, s.jsx)(m.CrownIcon, {
                                              size: "xxs",
                                              color: "currentColor",
                                              className: f.Dd,
                                          })
                                        : null,
                                ],
                            }),
                            (0, s.jsx)(u.E, {
                                variant: "body-md/medium",
                                children:
                                    ((l = C?.message),
                                    (n = U ?? M.username),
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
