t.r(n);
var i = t(200651);
t(192379);
var l = t(481060),
    r = t(239091),
    o = t(883385),
    a = t(108843),
    u = t(947440),
    d = t(100527),
    s = t(299206),
    c = t(819403),
    Z = t(777658),
    f = t(858488),
    m = t(44652),
    g = t(185457),
    x = t(389052),
    v = t(24311),
    h = t(158508),
    M = t(710631),
    b = t(88966),
    I = t(47091),
    C = t(991307),
    j = t(37258),
    p = t(700994),
    E = t(332031),
    L = t(981631),
    U = t(388032);
n.default = (0, a.Z)(
    (0, o.Z)(
        function (e) {
            let { user: n, guildId: t, channelId: o, showMediaItems: a = !1, mediaEngineContext: d, onSelect: L } = e,
                A = (0, j.Z)({
                    userId: n.id,
                    guildId: t,
                    channelId: o
                }),
                T = (0, b.Z)(n.id),
                _ = (0, v.Z)({ user: n }),
                k = (0, g.Z)({
                    user: n,
                    guildId: t,
                    channelId: o
                }),
                S = (0, f.Z)({ user: n }),
                N = (0, E.Z)(n.id),
                P = (0, p.Z)(n.id),
                O = (0, C.Z)(n.id, d),
                D = (0, M.Z)({ user: n }),
                F = (0, u.Z)(null, n),
                G = (0, Z.Z)(n),
                y = (0, m.Z)({ user: n }),
                R = (0, I.Z)({ user: n }),
                V = (0, x.Z)({ user: n }),
                w = (0, h.Z)({ user: n }),
                W = (0, s.Z)({
                    id: n.id,
                    label: U.intl.string(U.t['/AXYnJ'])
                }),
                B = (0, c.Z)(n),
                q = n.isNonUserBot();
            return (0, i.jsxs)(l.Menu, {
                navId: 'user-context',
                onClose: r.Zy,
                'aria-label': U.intl.string(U.t.liqwPD),
                onSelect: L,
                children: [
                    !q &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(l.MenuGroup, { children: B }),
                                (0, i.jsxs)(l.MenuGroup, {
                                    children: [A, T, _, k, S, N]
                                }),
                                a && (0, i.jsx)(l.MenuGroup, { children: P }),
                                (0, i.jsx)(l.MenuGroup, { children: F }),
                                (0, i.jsxs)(l.MenuGroup, {
                                    children: [a && O, D, G, y, R, w, V]
                                })
                            ]
                        }),
                    (0, i.jsx)(l.MenuGroup, { children: W })
                ]
            });
        },
        { object: L.qAy.CONTEXT_MENU }
    ),
    [d.Z.CONTEXT_MENU, d.Z.USER_GENERIC_MENU]
);
