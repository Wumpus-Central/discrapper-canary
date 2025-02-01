n.d(t, { default: () => p });
var l = n(200651),
    a = n(192379),
    i = n(442837),
    r = n(481060),
    o = n(239091),
    u = n(883385),
    d = n(108843),
    s = n(2052),
    c = n(100527),
    _ = n(906732),
    E = n(299206),
    A = n(976192),
    M = n(910693),
    I = n(271383),
    O = n(979651),
    N = n(933409),
    f = n(389052),
    T = n(158508),
    S = n(88966),
    g = n(712301),
    U = n(567711),
    y = n(358386),
    D = n(37258),
    C = n(931617),
    L = n(981631),
    m = n(388032);
let p = (0, d.Z)(
    (0, u.Z)(
        function (e) {
            var t;
            let { user: n, guildId: u, channelId: d, context: L, onSelect: p, moderationAlertId: R, analyticsLocation: h, analyticsLocations: j, onCloseContextMenu: Z, showTransferOwnershipItem: b } = e,
                { analyticsLocations: x } = (0, _.ZP)(c.Z.CONTEXT_MENU),
                v = (0, s.O)(),
                P = null !== (t = null == j ? void 0 : j[0]) && void 0 !== t ? t : x[0],
                G = (0, M.sE)(u, {
                    location: P,
                    targetUserId: n.id
                }),
                w = (0, i.e7)(
                    [O.Z],
                    () => {
                        var e;
                        return null !== (e = O.Z.getUserVoiceChannelId(u, n.id)) && void 0 !== e ? e : void 0;
                    },
                    [u, n.id]
                ),
                k = a.useCallback(() => {
                    G(M.jQ.COPY_ID);
                }, [G]),
                W = (0, i.e7)([I.ZP], () => I.ZP.isMember(u, n.id), [u, n.id]),
                Y = (0, D.Z)({
                    userId: n.id,
                    guildId: u,
                    sourceAnalyticsLocations: j
                }),
                F = (0, S.Z)(n.id, L),
                K = (0, A.Z)({
                    guildId: u,
                    userId: n.id,
                    analyticsLocation: null != h ? h : v.location,
                    analyticsLocations: [P],
                    context: L
                }),
                B = (0, f.Z)({
                    user: n,
                    guildId: u,
                    location: P,
                    channelId: d
                }),
                q = (0, T.Z)({
                    user: n,
                    guildId: u,
                    location: P,
                    channelId: d
                }),
                V = (0, N.Z)(n, u, null != d ? d : w, P),
                H = (0, U.Z)(d, R),
                Q = (0, y.Z)(n, u),
                X = (0, C.Z)(n.id, u, !1, P),
                J = (0, E.Z)({
                    id: n.id,
                    label: m.intl.string(m.t['/AXYnJ']),
                    onSuccess: k
                }),
                z = (0, g.Z)(n, u),
                $ = !!(null == n ? void 0 : n.isNonUserBot());
            return (0, l.jsxs)(r.v2r, {
                navId: 'user-context',
                onClose: () => {
                    (0, o.Zy)(), null == Z || Z();
                },
                'aria-label': m.intl.string(m.t.liqwPD),
                onSelect: p,
                children: [
                    !$ &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)(r.kSQ, {
                                    children: [Y, F]
                                }),
                                (0, l.jsxs)(r.kSQ, {
                                    children: [K, q, B]
                                }),
                                W &&
                                    (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)(r.kSQ, { children: V }),
                                            (0, l.jsxs)(r.kSQ, {
                                                children: [X, z]
                                            })
                                        ]
                                    }),
                                null != R ? H : null,
                                b && null != Q ? (0, l.jsx)(r.kSQ, { children: Q }) : null
                            ]
                        }),
                    (0, l.jsx)(r.kSQ, { children: J })
                ]
            });
        },
        { object: L.qAy.CONTEXT_MENU }
    ),
    [c.Z.CONTEXT_MENU, c.Z.GUILD_MODERATION_USER_MENU]
);
