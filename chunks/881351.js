n.d(t, { default: () => _ });
var i = n(255367);
n(73800);
var l = n(481060),
    r = n(239091),
    o = n(883385),
    a = n(108843),
    s = n(947440),
    d = n(100527),
    u = n(299206),
    c = n(819403),
    f = n(777658),
    b = n(858488),
    g = n(44652),
    Z = n(185457),
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
    C = n(981631),
    E = n(388032);
let _ = (0, a.Z)(
    (0, o.Z)(
        function (e) {
            let { user: t, guildId: n, channelId: o, showMediaItems: a = !1, mediaEngineContext: d, onSelect: _, onInteraction: I, appContext: D = C.IlC.APP } = e,
                U = (0, P.Z)({
                    userId: t.id,
                    guildId: n,
                    channelId: o
                }),
                A = (0, m.Z)(t.id, D),
                k = (0, v.Z)({ user: t }),
                w = (0, Z.Z)({
                    user: t,
                    guildId: n,
                    channelId: o,
                    context: D
                }),
                L = (0, b.Z)({ user: t }),
                N = (0, S.Z)(t.id),
                T = (0, x.Z)(t.id),
                M = (0, y.Z)(t.id, d),
                V = (0, j.Z)({ user: t }),
                R = (0, s.Z)(null, t),
                B = (0, f.Z)({ user: t }),
                F = (0, g.Z)({ user: t }),
                G = (0, h.Z)({ user: t }),
                H = (0, O.Z)({ user: t }),
                J = (0, p.Z)({ user: t }),
                W = (0, u.Z)({
                    id: t.id,
                    label: E.intl.string(E.t['/AXYnJ'])
                }),
                Q = (0, c.Z)(t),
                Y = t.isNonUserBot();
            return (0, i.jsxs)(l.v2r, {
                navId: 'user-context',
                onClose: r.Zy,
                'aria-label': E.intl.string(E.t.liqwPD),
                onSelect: _,
                onInteraction: I,
                children: [
                    !Y &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(l.kSQ, { children: Q }),
                                (0, i.jsxs)(l.kSQ, {
                                    children: [U, A, k, w, L, N]
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
        { object: C.qAy.CONTEXT_MENU }
    ),
    [d.Z.CONTEXT_MENU, d.Z.USER_GENERIC_MENU]
);
