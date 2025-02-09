n.d(t, { default: () => L });
var i = n(200651);
n(192379);
var l = n(481060),
    d = n(239091),
    a = n(883385),
    s = n(108843),
    o = n(947440),
    r = n(100527),
    u = n(299206),
    c = n(819403),
    Z = n(777658),
    g = n(858488),
    f = n(44652),
    v = n(185457),
    h = n(389052),
    b = n(24311),
    x = n(158508),
    m = n(710631),
    C = n(88966),
    E = n(47091),
    _ = n(991307),
    U = n(37258),
    S = n(700994),
    j = n(332031),
    A = n(981631),
    I = n(388032);
let L = (0, s.Z)(
    (0, a.Z)(
        function (e) {
            let { user: t, guildId: n, channelId: a, showMediaItems: s = !1, mediaEngineContext: r, onSelect: A } = e,
                L = (0, U.Z)({
                    userId: t.id,
                    guildId: n,
                    channelId: a
                }),
                N = (0, C.Z)(t.id),
                D = (0, b.Z)({ user: t }),
                O = (0, v.Z)({
                    user: t,
                    guildId: n,
                    channelId: a
                }),
                k = (0, g.Z)({ user: t }),
                P = (0, j.Z)(t.id),
                T = (0, S.Z)(t.id),
                p = (0, _.Z)(t.id, r),
                M = (0, m.Z)({ user: t }),
                V = (0, o.Z)(null, t),
                y = (0, Z.Z)({ user: t }),
                w = (0, f.Z)({ user: t }),
                R = (0, E.Z)({ user: t }),
                B = (0, h.Z)({ user: t }),
                F = (0, x.Z)({ user: t }),
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
                                    children: [L, N, D, O, k, P]
                                }),
                                s && (0, i.jsx)(l.kSQ, { children: T }),
                                (0, i.jsx)(l.kSQ, { children: V }),
                                (0, i.jsxs)(l.kSQ, {
                                    children: [s && p, M, y, w, R, F, B]
                                })
                            ]
                        }),
                    (0, i.jsx)(l.kSQ, { children: G })
                ]
            });
        },
        { object: A.qAy.CONTEXT_MENU }
    ),
    [r.Z.CONTEXT_MENU, r.Z.USER_GENERIC_MENU]
);
