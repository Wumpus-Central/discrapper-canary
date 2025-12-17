n.d(t, { default: () => _ });
var i = n(54381);
n(473749);
var l = n(481060),
    r = n(239091),
    o = n(883385),
    a = n(108843),
    u = n(947440),
    d = n(100527),
    s = n(299206),
    c = n(482798),
    f = n(819403),
    g = n(777658),
    Z = n(858488),
    b = n(44652),
    p = n(185457),
    v = n(389052),
    m = n(24311),
    O = n(158508),
    h = n(710631),
    j = n(426040),
    y = n(88966),
    P = n(47091),
    x = n(991307),
    S = n(37258),
    E = n(700994),
    I = n(332031),
    C = n(981631),
    A = n(388032);
let _ = (0, a.Z)(
    (0, o.Z)(
        function (e) {
            let {
                    user: t,
                    guildId: n,
                    channelId: o,
                    showMediaItems: a = !1,
                    mediaEngineContext: d,
                    onSelect: _,
                    onInteraction: U,
                    appContext: N = C.IlC.APP,
                    friendGroupId: D,
                } = e,
                { enableTopNavButton: k } = (0, c.Cq)({ location: "user-context-menu" }),
                w = (0, S.Z)({
                    userId: t.id,
                    guildId: n,
                    channelId: o,
                }),
                L = (0, y.Z)(t.id, N),
                T = (0, m.Z)({ user: t }),
                M = (0, p.Z)({
                    user: t,
                    guildId: n,
                    channelId: o,
                    context: N,
                }),
                V = (0, Z.Z)({ user: t }),
                G = (0, j.Z)({
                    user: t,
                    groupId: D,
                }),
                F = (0, I.Z)(t.id),
                R = (0, E.Z)(t.id),
                B = (0, x.Z)(t.id, d),
                W = (0, h.Z)({ user: t }),
                H = (0, u.Z)(null, t),
                Q = (0, g.Z)({ user: t }),
                q = (0, b.Z)({ user: t }),
                Y = (0, P.Z)({ user: t }),
                J = (0, v.Z)({ user: t }),
                K = (0, O.Z)({ user: t }),
                X = (0, s.Z)({
                    id: t.id,
                    label: A.intl.string(A.t["/AXYnE"]),
                }),
                z = (0, f.Z)(t),
                $ = t.isNonUserBot();
            return (0, i.jsxs)(l.v2r, {
                navId: "user-context",
                onClose: r.Zy,
                "aria-label": A.intl.string(A.t.liqwPJ),
                onSelect: _,
                onInteraction: U,
                children: [
                    !$ &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(l.kSQ, { children: z }),
                                (0, i.jsxs)(l.kSQ, {
                                    children: [w, L, T, M, V, k ? G : null, F],
                                }),
                                a && (0, i.jsx)(l.kSQ, { children: R }),
                                (0, i.jsx)(l.kSQ, { children: H }),
                                (0, i.jsxs)(l.kSQ, {
                                    children: [a && B, W, Q, q, Y, K, J],
                                }),
                            ],
                        }),
                    (0, i.jsx)(l.kSQ, { children: X }),
                ],
            });
        },
        { object: C.qAy.CONTEXT_MENU },
    ),
    [d.Z.CONTEXT_MENU, d.Z.USER_GENERIC_MENU],
);
