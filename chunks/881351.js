n.d(t, { default: () => C });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(239091),
    o = n(883385),
    a = n(108843),
    s = n(947440),
    u = n(100527),
    d = n(299206),
    c = n(819403),
    f = n(777658),
    Z = n(858488),
    b = n(44652),
    g = n(185457),
    O = n(389052),
    v = n(24311),
    p = n(158508),
    N = n(710631),
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
            let { user: t, guildId: n, channelId: o, showMediaItems: a = !1, mediaEngineContext: u, onSelect: C, onInteraction: W, appContext: _ = S.IlC.APP } = e,
                I = (0, y.Z)({
                    userId: t.id,
                    guildId: n,
                    channelId: o
                }),
                U = (0, j.Z)(t.id, _),
                A = (0, v.Z)({ user: t }),
                D = (0, g.Z)({
                    user: t,
                    guildId: n,
                    channelId: o,
                    context: _
                }),
                k = (0, Z.Z)({ user: t }),
                L = (0, x.Z)(t.id),
                w = (0, P.Z)(t.id),
                T = (0, h.Z)(t.id, u),
                M = (0, N.Z)({ user: t }),
                V = (0, s.Z)(null, t),
                R = (0, f.Z)({ user: t }),
                B = (0, b.Z)({ user: t }),
                F = (0, m.Z)({ user: t }),
                G = (0, O.Z)({ user: t }),
                J = (0, p.Z)({ user: t }),
                H = (0, d.Z)({
                    id: t.id,
                    label: E.NW.string(E.t['/AXYnJ'])
                }),
                Q = (0, c.Z)(t),
                q = t.isNonUserBot();
            return (0, i.jsxs)(l.v2r, {
                navId: 'user-context',
                onClose: r.Zy,
                'aria-label': E.NW.string(E.t.liqwPD),
                onSelect: C,
                onInteraction: W,
                children: [
                    !q &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(l.kSQ, { children: Q }),
                                (0, i.jsxs)(l.kSQ, {
                                    children: [I, U, A, D, k, L]
                                }),
                                a && (0, i.jsx)(l.kSQ, { children: w }),
                                (0, i.jsx)(l.kSQ, { children: V }),
                                (0, i.jsxs)(l.kSQ, {
                                    children: [a && T, M, R, B, F, J, G]
                                })
                            ]
                        }),
                    (0, i.jsx)(l.kSQ, { children: H })
                ]
            });
        },
        { object: S.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.USER_GENERIC_MENU]
);
