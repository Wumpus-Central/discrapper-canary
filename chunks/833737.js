n.d(t, { default: () => y });
var l = n(200651),
    i = n(192379),
    r = n(442837),
    a = n(481060),
    o = n(239091),
    u = n(883385),
    d = n(108843),
    s = n(2052),
    c = n(100527),
    E = n(906732),
    _ = n(299206),
    g = n(976192),
    f = n(910693),
    M = n(271383),
    A = n(979651),
    Z = n(933409),
    N = n(389052),
    O = n(158508),
    I = n(88966),
    m = n(712301),
    S = n(567711),
    v = n(358386),
    T = n(37258),
    C = n(931617),
    U = n(981631),
    h = n(388032);
let y = (0, d.Z)(
    (0, u.Z)(
        function (e) {
            var t;
            let { user: n, guildId: u, channelId: d, context: U, onSelect: y, moderationAlertId: D, analyticsLocation: P, analyticsLocations: R, onCloseContextMenu: L, showTransferOwnershipItem: b } = e,
                { analyticsLocations: p } = (0, E.ZP)(c.Z.CONTEXT_MENU),
                j = (0, s.O)(),
                x = null !== (t = null == R ? void 0 : R[0]) && void 0 !== t ? t : p[0],
                G = (0, f.sE)(u, {
                    location: x,
                    targetUserId: n.id
                }),
                B = (0, r.e7)(
                    [A.Z],
                    () => {
                        var e;
                        return null !== (e = A.Z.getUserVoiceChannelId(u, n.id)) && void 0 !== e ? e : void 0;
                    },
                    [u, n.id]
                ),
                k = i.useCallback(() => {
                    G(f.jQ.COPY_ID);
                }, [G]),
                w = (0, r.e7)([M.ZP], () => M.ZP.isMember(u, n.id), [u, n.id]),
                q = (0, T.Z)({
                    userId: n.id,
                    guildId: u,
                    sourceAnalyticsLocations: R
                }),
                F = (0, I.Z)(n.id, U),
                K = (0, g.Z)({
                    guildId: u,
                    userId: n.id,
                    analyticsLocation: null != P ? P : j.location,
                    analyticsLocations: [x],
                    context: U
                }),
                V = (0, N.Z)({
                    user: n,
                    guildId: u,
                    location: x,
                    channelId: d
                }),
                W = (0, O.Z)({
                    user: n,
                    guildId: u,
                    location: x,
                    channelId: d
                }),
                Y = (0, Z.Z)(n, u, null != d ? d : B, x),
                H = (0, S.Z)(d, D),
                Q = (0, v.Z)(n, u),
                X = (0, C.Z)(n.id, u, !1, x),
                J = (0, _.Z)({
                    id: n.id,
                    label: h.intl.string(h.t['/AXYnJ']),
                    onSuccess: k
                }),
                z = (0, m.Z)(n, u),
                $ = !!(null == n ? void 0 : n.isNonUserBot());
            return (0, l.jsxs)(a.v2r, {
                navId: 'user-context',
                onClose: () => {
                    (0, o.Zy)(), null == L || L();
                },
                'aria-label': h.intl.string(h.t.liqwPD),
                onSelect: y,
                children: [
                    !$ &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)(a.kSQ, {
                                    children: [q, F]
                                }),
                                (0, l.jsxs)(a.kSQ, {
                                    children: [K, W, V]
                                }),
                                w &&
                                    (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)(a.kSQ, { children: Y }),
                                            (0, l.jsxs)(a.kSQ, {
                                                children: [X, z]
                                            })
                                        ]
                                    }),
                                null != D ? H : null,
                                b && null != Q ? (0, l.jsx)(a.kSQ, { children: Q }) : null
                            ]
                        }),
                    (0, l.jsx)(a.kSQ, { children: J })
                ]
            });
        },
        { object: U.qAy.CONTEXT_MENU }
    ),
    [c.Z.CONTEXT_MENU, c.Z.GUILD_MODERATION_USER_MENU]
);
