n.d(t, { default: () => y });
var l = n(200651),
    i = n(192379),
    a = n(442837),
    r = n(481060),
    o = n(239091),
    d = n(883385),
    u = n(108843),
    s = n(2052),
    c = n(100527),
    E = n(906732),
    _ = n(299206),
    g = n(976192),
    M = n(910693),
    f = n(271383),
    A = n(979651),
    O = n(933409),
    N = n(389052),
    I = n(158508),
    S = n(88966),
    Z = n(712301),
    m = n(567711),
    T = n(358386),
    C = n(37258),
    h = n(931617),
    v = n(981631),
    U = n(388032);
let y = (0, u.Z)(
    (0, d.Z)(
        function (e) {
            var t;
            let { user: n, guildId: d, channelId: u, context: v, onSelect: y, moderationAlertId: R, analyticsLocation: D, analyticsLocations: L, onCloseContextMenu: p, showTransferOwnershipItem: P } = e,
                { analyticsLocations: j } = (0, E.ZP)(c.Z.CONTEXT_MENU),
                b = (0, s.O)(),
                x = null !== (t = null == L ? void 0 : L[0]) && void 0 !== t ? t : j[0],
                G = (0, M.sE)(d, {
                    location: x,
                    targetUserId: n.id
                }),
                k = (0, a.e7)(
                    [A.Z],
                    () => {
                        var e;
                        return null !== (e = A.Z.getUserVoiceChannelId(d, n.id)) && void 0 !== e ? e : void 0;
                    },
                    [d, n.id]
                ),
                w = i.useCallback(() => {
                    G(M.jQ.COPY_ID);
                }, [G]),
                B = (0, a.e7)([f.ZP], () => f.ZP.isMember(d, n.id), [d, n.id]),
                q = (0, C.Z)({
                    userId: n.id,
                    guildId: d,
                    sourceAnalyticsLocations: L
                }),
                F = (0, S.Z)(n.id, v),
                V = (0, g.Z)({
                    guildId: d,
                    userId: n.id,
                    analyticsLocation: null != D ? D : b.location,
                    analyticsLocations: [x],
                    context: v
                }),
                K = (0, N.Z)({
                    user: n,
                    guildId: d,
                    location: x,
                    channelId: u
                }),
                W = (0, I.Z)({
                    user: n,
                    guildId: d,
                    location: x,
                    channelId: u
                }),
                Y = (0, O.Z)(n, d, null != u ? u : k, x),
                H = (0, m.Z)(u, R),
                Q = (0, T.Z)(n, d),
                X = (0, h.Z)(n.id, d, !1, x),
                J = (0, _.Z)({
                    id: n.id,
                    label: U.intl.string(U.t['/AXYnJ']),
                    onSuccess: w
                }),
                z = (0, Z.Z)(n, d),
                $ = !!(null == n ? void 0 : n.isNonUserBot());
            return (0, l.jsxs)(r.v2r, {
                navId: 'user-context',
                onClose: () => {
                    (0, o.Zy)(), null == p || p();
                },
                'aria-label': U.intl.string(U.t.liqwPD),
                onSelect: y,
                children: [
                    !$ &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)(r.kSQ, {
                                    children: [q, F]
                                }),
                                (0, l.jsxs)(r.kSQ, {
                                    children: [V, W, K]
                                }),
                                B &&
                                    (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)(r.kSQ, { children: Y }),
                                            (0, l.jsxs)(r.kSQ, {
                                                children: [X, z]
                                            })
                                        ]
                                    }),
                                null != R ? H : null,
                                P && null != Q ? (0, l.jsx)(r.kSQ, { children: Q }) : null
                            ]
                        }),
                    (0, l.jsx)(r.kSQ, { children: J })
                ]
            });
        },
        { object: v.qAy.CONTEXT_MENU }
    ),
    [c.Z.CONTEXT_MENU, c.Z.GUILD_MODERATION_USER_MENU]
);
