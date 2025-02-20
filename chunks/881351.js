n.d(t, { default: () => C });
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(239091),
    o = n(883385),
    a = n(108843),
    s = n(947440),
    d = n(100527),
    u = n(299206),
    c = n(819403),
    f = n(777658),
    Z = n(858488),
    b = n(44652),
    g = n(185457),
    O = n(389052),
    v = n(24311),
    N = n(158508),
    p = n(710631),
    j = n(88966),
    m = n(47091),
    h = n(991307),
    y = n(37258),
    P = n(700994),
    x = n(332031),
    S = n(981631),
    E = n(388032);
let C = (0, a.Z)(
    (0, o.Z)(
        function (e) {
            let { user: t, guildId: n, channelId: o, showMediaItems: a = !1, mediaEngineContext: d, onSelect: S } = e,
                C = (0, y.Z)({
                    userId: t.id,
                    guildId: n,
                    channelId: o
                }),
                W = (0, j.Z)(t.id),
                _ = (0, v.Z)({ user: t }),
                D = (0, g.Z)({
                    user: t,
                    guildId: n,
                    channelId: o
                }),
                U = (0, Z.Z)({ user: t }),
                A = (0, x.Z)(t.id),
                I = (0, P.Z)(t.id),
                k = (0, h.Z)(t.id, d),
                L = (0, p.Z)({ user: t }),
                w = (0, s.Z)(null, t),
                T = (0, f.Z)({ user: t }),
                M = (0, b.Z)({ user: t }),
                V = (0, m.Z)({ user: t }),
                R = (0, O.Z)({ user: t }),
                B = (0, N.Z)({ user: t }),
                F = (0, u.Z)({
                    id: t.id,
                    label: E.NW.string(E.t['/AXYnJ'])
                }),
                H = (0, c.Z)(t),
                G = t.isNonUserBot();
            return (0, i.jsxs)(r.v2r, {
                navId: 'user-context',
                onClose: l.Zy,
                'aria-label': E.NW.string(E.t.liqwPD),
                onSelect: S,
                children: [
                    !G &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(r.kSQ, { children: H }),
                                (0, i.jsxs)(r.kSQ, {
                                    children: [C, W, _, D, U, A]
                                }),
                                a && (0, i.jsx)(r.kSQ, { children: I }),
                                (0, i.jsx)(r.kSQ, { children: w }),
                                (0, i.jsxs)(r.kSQ, {
                                    children: [a && k, L, T, M, V, B, R]
                                })
                            ]
                        }),
                    (0, i.jsx)(r.kSQ, { children: F })
                ]
            });
        },
        { object: S.qAy.CONTEXT_MENU }
    ),
    [d.Z.CONTEXT_MENU, d.Z.USER_GENERIC_MENU]
);
