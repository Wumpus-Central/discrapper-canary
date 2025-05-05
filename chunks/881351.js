n.d(t, { default: () => I });
var i = n(255367);
n(73800);
var l = n(481060),
    r = n(239091),
    o = n(883385),
    a = n(108843),
    s = n(947440),
    u = n(100527),
    d = n(299206),
    c = n(819403),
    f = n(777658),
    b = n(858488),
    Z = n(44652),
    g = n(185457),
    O = n(389052),
    v = n(24311),
    p = n(158508),
    j = n(710631),
    m = n(88966),
    h = n(47091),
    y = n(991307),
    P = n(37258),
    x = n(700994),
    S = n(332031),
    E = n(981631),
    C = n(388032);
let I = (0, a.Z)(
    (0, o.Z)(
        function (e) {
            let { user: t, guildId: n, channelId: o, showMediaItems: a = !1, mediaEngineContext: u, onSelect: I, onInteraction: _, appContext: D = E.IlC.APP } = e,
                U = (0, P.Z)({
                    userId: t.id,
                    guildId: n,
                    channelId: o
                }),
                A = (0, m.Z)(t.id, D),
                k = (0, v.Z)({ user: t }),
                L = (0, g.Z)({
                    user: t,
                    guildId: n,
                    channelId: o,
                    context: D
                }),
                N = (0, b.Z)({ user: t }),
                w = (0, S.Z)(t.id),
                T = (0, x.Z)(t.id),
                M = (0, y.Z)(t.id, u),
                V = (0, j.Z)({ user: t }),
                R = (0, s.Z)(null, t),
                B = (0, f.Z)({ user: t }),
                F = (0, Z.Z)({ user: t }),
                G = (0, h.Z)({ user: t }),
                H = (0, O.Z)({ user: t }),
                J = (0, p.Z)({ user: t }),
                W = (0, d.Z)({
                    id: t.id,
                    label: C.intl.string(C.t['/AXYnJ'])
                }),
                Q = (0, c.Z)(t),
                Y = t.isNonUserBot();
            return (0, i.jsxs)(l.v2r, {
                navId: 'user-context',
                onClose: r.Zy,
                'aria-label': C.intl.string(C.t.liqwPD),
                onSelect: I,
                onInteraction: _,
                children: [
                    !Y &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(l.kSQ, { children: Q }),
                                (0, i.jsxs)(l.kSQ, {
                                    children: [U, A, k, L, N, w]
                                }),
                                a && (0, i.jsx)(l.kSQ, { children: T }),
                                (0, i.jsx)(l.kSQ, { children: R }),
                                (0, i.jsxs)(l.kSQ, {
                                    children: [a && M, V, B, F, G, J, H]
                                })
                            ]
                        }),
                    (0, i.jsx)(l.kSQ, { children: W })
                ]
            });
        },
        { object: E.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.USER_GENERIC_MENU]
);
