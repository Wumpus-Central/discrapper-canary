n.d(t, { default: () => I });
var r = n(200651),
    l = n(192379),
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
    N = n(88966),
    j = n(712301),
    M = n(567711),
    P = n(358386),
    S = n(37258),
    A = n(931617),
    v = n(981631),
    Z = n(388032);
let I = (0, c.Z)(
    (0, u.Z)(
        function (e) {
            var t;
            let { user: n, guildId: u, channelId: c, context: v, onSelect: I, moderationAlertId: h, analyticsLocation: T, analyticsLocations: D, onCloseContextMenu: C, showTransferOwnershipItem: U } = e,
                { analyticsLocations: R } = (0, f.ZP)(d.Z.CONTEXT_MENU),
                L = (0, s.O)(),
                w = null != (t = null == D ? void 0 : D[0]) ? t : R[0],
                x = (0, g.sE)(u, {
                    location: w,
                    targetUserId: n.id
                }),
                W = (0, i.e7)(
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
                G = (0, i.e7)([b.ZP], () => b.ZP.isMember(u, n.id), [u, n.id]),
                B = (0, S.Z)({
                    userId: n.id,
                    guildId: u,
                    sourceAnalyticsLocations: D
                }),
                q = (0, N.Z)(n.id, v),
                F = (0, E.Z)({
                    guildId: u,
                    userId: n.id,
                    analyticsLocation: null != T ? T : L.location,
                    analyticsLocations: [w],
                    context: v
                }),
                K = (0, p.Z)({
                    user: n,
                    guildId: u,
                    location: w,
                    channelId: c
                }),
                V = (0, m.Z)({
                    user: n,
                    guildId: u,
                    location: w,
                    channelId: c
                }),
                Y = (0, _.Z)(n, u, null != c ? c : W, w),
                H = (0, M.Z)(c, h),
                Q = (0, P.Z)(n, u),
                X = (0, A.Z)(n.id, u, !1, w),
                J = (0, O.Z)({
                    id: n.id,
                    label: Z.NW.string(Z.t['/AXYnJ']),
                    onSuccess: k
                }),
                z = (0, j.Z)(n, u),
                $ = !!(null == n ? void 0 : n.isNonUserBot());
            return (0, r.jsxs)(a.v2r, {
                navId: 'user-context',
                onClose: () => {
                    (0, o.Zy)(), null == C || C();
                },
                'aria-label': Z.NW.string(Z.t.liqwPD),
                onSelect: I,
                children: [
                    !$ &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)(a.kSQ, {
                                    children: [B, q]
                                }),
                                (0, r.jsxs)(a.kSQ, {
                                    children: [F, V, K]
                                }),
                                G &&
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
        { object: v.qAy.CONTEXT_MENU }
    ),
    [d.Z.CONTEXT_MENU, d.Z.GUILD_MODERATION_USER_MENU]
);
