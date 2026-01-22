n.d(t, {
    A: () => p,
}),
    n(747238);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(417597),
    o = n(397927),
    c = n(686956),
    d = n(775602),
    u = n(569944),
    m = n(576622),
    g = n(71393),
    f = n(287809),
    h = n(562153),
    N = n(427262),
    I = n(680235);

function p(e) {
    var t, n;
    let i,
        { guildId: p, welcomeMessage: O, className: S } = e,
        E = (0, a.bG)([g.A], () => g.A.getGuild(p)),
        A = (0, a.bG)([d.A], () => d.A.useReducedMotion),
        x = (0, a.bG)([f.default], () => f.default.getUser(null == O ? void 0 : O.authorIds[0])),
        _ = r.useMemo(() => (null != E && null != x && (0, u.c)(E, x) ? x : null), [E, x]),
        j = (0, a.bG)([f.default], () => f.default.getCurrentUser()),
        T = r.useMemo(() => {
            var e;
            return null != (e = null == O ? void 0 : O.authorIds) ? e : [];
        }, [O]);
    r.useEffect(() => {
        c.A.requestMembersById(p, T);
    }, [p, T]),
        r.useEffect(() => {
            null != _ &&
                (0, m.A)(_.id, _.getAvatarURL(p, 48), {
                    guildId: p,
                });
        }, [_, p]);
    let b = h.Ay.useName(p, null, _),
        v = (0, N.tx)(j);
    if (null == _ || null == j || null == O) return null;
    let D = null != E && E.ownerId === _.id;
    return (0, l.jsxs)(o.ZpM, {
        className: s()(I.fr, S),
        children: [
            (0, l.jsx)("div", {
                className: I.oJ,
            }),
            A
                ? (0, l.jsx)(o.euF, {
                      src: _.getAvatarURL(p, 48),
                      size: o._3J.SIZE_48,
                      className: I.my,
                      "aria-label": _.username,
                  })
                : (0, l.jsx)(o.JsQ, {
                      src: _.getAvatarURL(p, 48),
                      size: o._3J.SIZE_48,
                      className: I.my,
                      "aria-label": _.username,
                  }),
            (0, l.jsx)("div", {
                className: I.uh,
            }),
            (0, l.jsxs)("div", {
                className: I.H0,
                children: [
                    (0, l.jsxs)("div", {
                        className: I.HO,
                        children: [
                            (0, l.jsx)(o.Text, {
                                variant: "text-sm/semibold",
                                color: "text-strong",
                                children: b,
                            }),
                            D
                                ? (0, l.jsx)(o.pw5, {
                                      size: "xxs",
                                      color: "currentColor",
                                      className: I.Dd,
                                  })
                                : null,
                        ],
                    }),
                    (0, l.jsx)(o.Text, {
                        variant: "text-md/medium",
                        children:
                            ((t = null == O ? void 0 : O.message),
                            (n = null != v ? v : j.username),
                            (i = t.split(/\[@username\]/g)),
                            (0, l.jsx)("span", {
                                children: i.map((e, t) =>
                                    (0, l.jsxs)(
                                        r.Fragment,
                                        {
                                            children: [
                                                e,
                                                t < i.length - 1
                                                    ? (0, l.jsx)(o.Text, {
                                                          tag: "span",
                                                          variant: "text-md/semibold",
                                                          children: "@".concat(n),
                                                      })
                                                    : null,
                                            ],
                                        },
                                        "username-".concat(t),
                                    ),
                                ),
                            })),
                    }),
                ],
            }),
        ],
    });
}
