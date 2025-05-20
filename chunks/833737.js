n.d(t, { default: () => I });
var r = n(255367),
    l = n(73800),
    i = n(442837),
    a = n(481060),
    o = n(239091),
    u = n(883385),
    c = n(108843),
    s = n(2052),
    d = n(100527),
    f = n(906732),
    O = n(299206),
    E = n(976192),
    g = n(910693),
    b = n(271383),
    y = n(979651),
    _ = n(933409),
    p = n(389052),
    m = n(158508),
    j = n(88966),
    M = n(712301),
    P = n(567711),
    S = n(358386),
    A = n(37258),
    v = n(931617),
    N = n(981631),
    Z = n(388032);
let I = (0, c.Z)(
    (0, u.Z)(
        function (e) {
            var t;
            let { user: n, guildId: u, channelId: c, context: N, onSelect: I, moderationAlertId: h, analyticsLocation: T, analyticsLocations: C, onCloseContextMenu: D, showTransferOwnershipItem: U } = e,
                { analyticsLocations: R } = (0, f.ZP)(d.Z.CONTEXT_MENU),
                L = (0, s.O)(),
                w = null != (t = null == C ? void 0 : C[0]) ? t : R[0],
                x = (0, g.sE)(u, {
                    location: w,
                    targetUserId: n.id
                }),
                G = (0, i.e7)(
                    [y.Z],
                    () => {
                        var e;
                        return null != (e = y.Z.getUserVoiceChannelId(u, n.id)) ? e : void 0;
                    },
                    [u, n.id]
                ),
                k = l.useCallback(() => {
                    x(g.jQ.COPY_ID);
                }, [x]),
                B = (0, i.e7)([b.ZP], () => b.ZP.isMember(u, n.id), [u, n.id]),
                q = (0, A.Z)({
                    userId: n.id,
                    guildId: u,
                    sourceAnalyticsLocations: C
                }),
                F = (0, j.Z)(n.id, N),
                K = (0, E.Z)({
                    guildId: u,
                    userId: n.id,
                    analyticsLocation: null != T ? T : L.location,
                    analyticsLocations: [w],
                    context: N
                }),
                V = (0, p.Z)({
                    user: n,
                    guildId: u,
                    location: w,
                    channelId: c
                }),
                W = (0, m.Z)({
                    user: n,
                    guildId: u,
                    location: w,
                    channelId: c
                }),
                Y = (0, _.Z)(n, u, null != c ? c : G, w),
                H = (0, P.Z)(c, h),
                Q = (0, S.Z)(n, u),
                X = (0, v.Z)(n.id, u, !1, w),
                J = (0, O.Z)({
                    id: n.id,
                    label: Z.intl.string(Z.t['/AXYnJ']),
                    onSuccess: k
                }),
                z = (0, M.Z)(n, u),
                $ = !!(null == n ? void 0 : n.isNonUserBot());
            return (0, r.jsxs)(a.v2r, {
                navId: 'user-context',
                onClose: () => {
                    (0, o.Zy)(), null == D || D();
                },
                'aria-label': Z.intl.string(Z.t.liqwPD),
                onSelect: I,
                children: [
                    !$ &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)(a.kSQ, {
                                    children: [q, F]
                                }),
                                (0, r.jsxs)(a.kSQ, {
                                    children: [K, W, V]
                                }),
                                B &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(a.kSQ, { children: Y }),
                                            (0, r.jsxs)(a.kSQ, {
                                                children: [X, z]
                                            })
                                        ]
                                    }),
                                null != h ? H : null,
                                U && null != Q ? (0, r.jsx)(a.kSQ, { children: Q }) : null
                            ]
                        }),
                    (0, r.jsx)(a.kSQ, { children: J })
                ]
            });
        },
        { object: N.qAy.CONTEXT_MENU }
    ),
    [d.Z.CONTEXT_MENU, d.Z.GUILD_MODERATION_USER_MENU]
);
