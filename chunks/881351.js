n.d(t, { default: () => N });
var i = n(200651);
n(192379);
var l = n(481060),
    d = n(239091),
    a = n(883385),
    s = n(108843),
    r = n(947440),
    o = n(100527),
    u = n(299206),
    c = n(819403),
    Z = n(777658),
    g = n(858488),
    f = n(44652),
    v = n(185457),
    h = n(389052),
    b = n(24311),
    m = n(158508),
    x = n(710631),
    C = n(88966),
    _ = n(47091),
    E = n(991307),
    U = n(37258),
    S = n(700994),
    j = n(332031),
    A = n(981631),
    I = n(388032);
let N = (0, s.Z)(
    (0, a.Z)(
        function (e) {
            let { user: t, guildId: n, channelId: a, showMediaItems: s = !1, mediaEngineContext: o, onSelect: A } = e,
                N = (0, U.Z)({
                    userId: t.id,
                    guildId: n,
                    channelId: a
                }),
                L = (0, C.Z)(t.id),
                D = (0, b.Z)({ user: t }),
                k = (0, v.Z)({
                    user: t,
                    guildId: n,
                    channelId: a
                }),
                O = (0, g.Z)({ user: t }),
                P = (0, j.Z)(t.id),
                T = (0, S.Z)(t.id),
                p = (0, E.Z)(t.id, o),
                M = (0, x.Z)({ user: t }),
                y = (0, r.Z)(null, t),
                V = (0, Z.Z)({ user: t }),
                w = (0, f.Z)({ user: t }),
                R = (0, _.Z)({ user: t }),
                B = (0, h.Z)({ user: t }),
                F = (0, m.Z)({ user: t }),
                G = (0, u.Z)({
                    id: t.id,
                    label: I.intl.string(I.t['/AXYnJ'])
                }),
                H = (0, c.Z)(t),
                J = t.isNonUserBot();
            return (0, i.jsxs)(l.v2r, {
                navId: 'user-context',
                onClose: d.Zy,
                'aria-label': I.intl.string(I.t.liqwPD),
                onSelect: A,
                children: [
                    !J &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(l.kSQ, { children: H }),
                                (0, i.jsxs)(l.kSQ, {
                                    children: [N, L, D, k, O, P]
                                }),
                                s && (0, i.jsx)(l.kSQ, { children: T }),
                                (0, i.jsx)(l.kSQ, { children: y }),
                                (0, i.jsxs)(l.kSQ, {
                                    children: [s && p, M, V, w, R, F, B]
                                })
                            ]
                        }),
                    (0, i.jsx)(l.kSQ, { children: G })
                ]
            });
        },
        { object: A.qAy.CONTEXT_MENU }
    ),
    [o.Z.CONTEXT_MENU, o.Z.USER_GENERIC_MENU]
);
