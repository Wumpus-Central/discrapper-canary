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
            let { user: t, guildId: n, channelId: o, showMediaItems: a = !1, mediaEngineContext: d, onSelect: S, onInteraction: C } = e,
                W = (0, y.Z)({
                    userId: t.id,
                    guildId: n,
                    channelId: o
                }),
                _ = (0, j.Z)(t.id),
                D = (0, v.Z)({ user: t }),
                I = (0, g.Z)({
                    user: t,
                    guildId: n,
                    channelId: o
                }),
                U = (0, Z.Z)({ user: t }),
                A = (0, x.Z)(t.id),
                k = (0, P.Z)(t.id),
                L = (0, h.Z)(t.id, d),
                w = (0, p.Z)({ user: t }),
                T = (0, s.Z)(null, t),
                M = (0, f.Z)({ user: t }),
                V = (0, b.Z)({ user: t }),
                R = (0, m.Z)({ user: t }),
                B = (0, O.Z)({ user: t }),
                F = (0, N.Z)({ user: t }),
                H = (0, u.Z)({
                    id: t.id,
                    label: E.NW.string(E.t['/AXYnJ'])
                }),
                G = (0, c.Z)(t),
                J = t.isNonUserBot();
            return (0, i.jsxs)(r.v2r, {
                navId: 'user-context',
                onClose: l.Zy,
                'aria-label': E.NW.string(E.t.liqwPD),
                onSelect: S,
                onInteraction: C,
                children: [
                    !J &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(r.kSQ, { children: G }),
                                (0, i.jsxs)(r.kSQ, {
                                    children: [W, _, D, I, U, A]
                                }),
                                a && (0, i.jsx)(r.kSQ, { children: k }),
                                (0, i.jsx)(r.kSQ, { children: T }),
                                (0, i.jsxs)(r.kSQ, {
                                    children: [a && L, w, M, V, R, F, B]
                                })
                            ]
                        }),
                    (0, i.jsx)(r.kSQ, { children: H })
                ]
            });
        },
        { object: S.qAy.CONTEXT_MENU }
    ),
    [d.Z.CONTEXT_MENU, d.Z.USER_GENERIC_MENU]
);
