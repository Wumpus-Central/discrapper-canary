n.d(t, { A: () => x });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(417597),
    d = n(359778),
    o = n(97808),
    c = n(778712),
    u = n(834730),
    m = n(329177),
    N = n(686956),
    h = n(775602),
    I = n(569944),
    E = n(576622),
    g = n(71393),
    A = n(287809),
    S = n(562153),
    _ = n(427262),
    f = n(108660);
function x(e) {
    var t, n;
    let s,
        { guildId: x, welcomeMessage: T, className: D } = e,
        j = (0, a.bG)([g.A], () => g.A.getGuild(x)),
        p = (0, a.bG)([h.A], () => h.A.useReducedMotion),
        O = (0, a.bG)([A.default], () => A.default.getUser(T?.authorIds[0])),
        G = l.useMemo(() => (null != j && null != O && (0, I.c)(j, O) ? O : null), [j, O]),
        v = (0, a.bG)([A.default], () => A.default.getCurrentUser()),
        C = l.useMemo(() => T?.authorIds ?? [], [T]);
    l.useEffect(() => {
        N.A.requestMembersById(x, C);
    }, [x, C]),
        l.useEffect(() => {
            null != G && (0, E.A)(G.id, G.getAvatarURL(x, 48), { guildId: x });
        }, [G, x]);
    let L = S.Ay.useName(x, null, G),
        b = (0, _.tx)(v);
    if (null == G || null == v || null == T) return null;
    let R = null != j && j.ownerId === G.id;
    return (0, i.jsxs)(d.Z, {
        className: r()(f.fr, D),
        children: [
            (0, i.jsx)("div", { className: f.oJ }),
            p
                ? (0, i.jsx)(o.eu, {
                      src: G.getAvatarURL(x, 48),
                      size: c._3.SIZE_48,
                      className: f.my,
                      "aria-label": G.username,
                  })
                : (0, i.jsx)(o.Js, {
                      src: G.getAvatarURL(x, 48),
                      size: c._3.SIZE_48,
                      className: f.my,
                      "aria-label": G.username,
                  }),
            (0, i.jsx)("div", { className: f.uh }),
            (0, i.jsxs)("div", {
                className: f.H0,
                children: [
                    (0, i.jsxs)("div", {
                        className: f.HO,
                        children: [
                            (0, i.jsx)(u.E, { variant: "text-sm/semibold", color: "text-strong", children: L }),
                            R ? (0, i.jsx)(m.p, { size: "xxs", color: "currentColor", className: f.Dd }) : null,
                        ],
                    }),
                    (0, i.jsx)(u.E, {
                        variant: "text-md/medium",
                        children:
                            ((t = T?.message),
                            (n = b ?? v.username),
                            (s = t.split(/\[@username\]/g)),
                            (0, i.jsx)("span", {
                                children: s.map((e, t) =>
                                    (0, i.jsxs)(
                                        l.Fragment,
                                        {
                                            children: [
                                                e,
                                                t < s.length - 1
                                                    ? (0, i.jsx)(u.E, {
                                                          tag: "span",
                                                          variant: "text-md/semibold",
                                                          children: `@${n}`,
                                                      })
                                                    : null,
                                            ],
                                        },
                                        `username-${t}`,
                                    ),
                                ),
                            })),
                    }),
                ],
            }),
        ],
    });
}
