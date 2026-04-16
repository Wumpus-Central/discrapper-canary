n.d(t, { A: () => E });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(417597),
    d = n(397927),
    o = n(686956),
    c = n(775602),
    u = n(569944),
    m = n(576622),
    N = n(71393),
    h = n(287809),
    I = n(562153),
    g = n(427262),
    A = n(108660);
function E(e) {
    var t, n;
    let s,
        { guildId: E, welcomeMessage: S, className: x } = e,
        _ = (0, a.bG)([N.A], () => N.A.getGuild(E)),
        T = (0, a.bG)([c.A], () => c.A.useReducedMotion),
        f = (0, a.bG)([h.default], () => h.default.getUser(S?.authorIds[0])),
        p = l.useMemo(() => (null != _ && null != f && (0, u.c)(_, f) ? f : null), [_, f]),
        D = (0, a.bG)([h.default], () => h.default.getCurrentUser()),
        O = l.useMemo(() => S?.authorIds ?? [], [S]);
    l.useEffect(() => {
        o.A.requestMembersById(E, O);
    }, [E, O]),
        l.useEffect(() => {
            null != p && (0, m.A)(p.id, p.getAvatarURL(E, 48), { guildId: E });
        }, [p, E]);
    let G = I.Ay.useName(E, null, p),
        j = (0, g.tx)(D);
    if (null == p || null == D || null == S) return null;
    let v = null != _ && _.ownerId === p.id;
    return (0, i.jsxs)(d.ZpM, {
        className: r()(A.fr, x),
        children: [
            (0, i.jsx)("div", { className: A.oJ }),
            T
                ? (0, i.jsx)(d.euF, {
                      src: p.getAvatarURL(E, 48),
                      size: d._3J.SIZE_48,
                      className: A.my,
                      "aria-label": p.username,
                  })
                : (0, i.jsx)(d.JsQ, {
                      src: p.getAvatarURL(E, 48),
                      size: d._3J.SIZE_48,
                      className: A.my,
                      "aria-label": p.username,
                  }),
            (0, i.jsx)("div", { className: A.uh }),
            (0, i.jsxs)("div", {
                className: A.H0,
                children: [
                    (0, i.jsxs)("div", {
                        className: A.HO,
                        children: [
                            (0, i.jsx)(d.Text, { variant: "text-sm/semibold", color: "text-strong", children: G }),
                            v ? (0, i.jsx)(d.pw5, { size: "xxs", color: "currentColor", className: A.Dd }) : null,
                        ],
                    }),
                    (0, i.jsx)(d.Text, {
                        variant: "text-md/medium",
                        children:
                            ((t = S?.message),
                            (n = j ?? D.username),
                            (s = t.split(/\[@username\]/g)),
                            (0, i.jsx)("span", {
                                children: s.map((e, t) =>
                                    (0, i.jsxs)(
                                        l.Fragment,
                                        {
                                            children: [
                                                e,
                                                t < s.length - 1
                                                    ? (0, i.jsx)(d.Text, {
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
