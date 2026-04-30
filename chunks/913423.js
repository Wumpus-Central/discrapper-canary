n.d(l, { A: () => b });
var s = n(627968),
    a = n(64700),
    t = n(503698),
    r = n.n(t),
    i = n(702841),
    c = n(359778),
    d = n(97808),
    u = n(778712),
    o = n(834730),
    m = n(329177),
    x = n(66834),
    h = n(775602),
    j = n(569944),
    A = n(903209),
    g = n(71393),
    N = n(287809),
    v = n(562153),
    f = n(427262),
    I = n(108660);
function b(e) {
    var l, n;
    let t,
        { guildId: b, welcomeMessage: p, className: C } = e,
        E = (0, i.bG)([g.A], () => g.A.getGuild(b)),
        G = (0, i.bG)([h.A], () => h.A.useReducedMotion),
        M = (0, i.bG)([N.default], () => N.default.getUser(p?.authorIds[0])),
        _ = a.useMemo(() => (null != E && null != M && (0, j.c)(E, M) ? M : null), [E, M]),
        L = (0, i.bG)([N.default], () => N.default.getCurrentUser()),
        k = a.useMemo(() => p?.authorIds ?? [], [p]);
    a.useEffect(() => {
        x.A.requestMembersById(b, k);
    }, [b, k]),
        a.useEffect(() => {
            null != _ && (0, A.A)(_.id, _.getAvatarURL(b, 48), { guildId: b });
        }, [_, b]);
    let y = v.Ay.useName(b, null, _),
        R = (0, f.tx)(L);
    if (null == _ || null == L || null == p) return null;
    let U = null != E && E.ownerId === _.id;
    return (0, s.jsxs)(c.Z, {
        className: r()(I.fr, C),
        children: [
            (0, s.jsx)("div", { className: I.oJ }),
            G
                ? (0, s.jsx)(d.eu, {
                      src: _.getAvatarURL(b, 48),
                      size: u._3.SIZE_48,
                      className: I.my,
                      "aria-label": _.username,
                  })
                : (0, s.jsx)(d.Js, {
                      src: _.getAvatarURL(b, 48),
                      size: u._3.SIZE_48,
                      className: I.my,
                      "aria-label": _.username,
                  }),
            (0, s.jsx)("div", { className: I.uh }),
            (0, s.jsxs)("div", {
                className: I.H0,
                children: [
                    (0, s.jsxs)("div", {
                        className: I.HO,
                        children: [
                            (0, s.jsx)(o.E, { variant: "text-sm/semibold", color: "text-strong", children: y }),
                            U ? (0, s.jsx)(m.p, { size: "xxs", color: "currentColor", className: I.Dd }) : null,
                        ],
                    }),
                    (0, s.jsx)(o.E, {
                        variant: "text-md/medium",
                        children:
                            ((l = p?.message),
                            (n = R ?? L.username),
                            (t = l.split(/\[@username\]/g)),
                            (0, s.jsx)("span", {
                                children: t.map((e, l) =>
                                    (0, s.jsxs)(
                                        a.Fragment,
                                        {
                                            children: [
                                                e,
                                                l < t.length - 1
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
