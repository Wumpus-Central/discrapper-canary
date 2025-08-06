n.d(t, { default: () => C });
var l = n(255367),
    r = n(73800),
    i = n(442837),
    a = n(481060),
    o = n(239091),
    u = n(883385),
    c = n(108843),
    s = n(2052),
    d = n(100527),
    f = n(906732),
    b = n(299206),
    g = n(976192),
    O = n(910693),
    E = n(271383),
    Z = n(979651),
    P = n(933409),
    p = n(389052),
    y = n(158508),
    j = n(88966),
    m = n(712301),
    h = n(567711),
    v = n(358386),
    _ = n(37258),
    S = n(931617),
    M = n(981631),
    N = n(388032);
let C = (0, c.Z)(
    (0, u.Z)(
        function (e) {
            var t;
            let {
                    user: n,
                    guildId: u,
                    channelId: c,
                    context: M,
                    onSelect: C,
                    moderationAlertId: A,
                    analyticsLocation: I,
                    analyticsLocations: T,
                    onCloseContextMenu: D,
                    showTransferOwnershipItem: x,
                } = e,
                { analyticsLocations: w } = (0, f.ZP)(d.Z.CONTEXT_MENU),
                U = (0, s.O)(),
                R = null != (t = null == T ? void 0 : T[0]) ? t : w[0],
                k = (0, O.sE)(u, {
                    location: R,
                    targetUserId: n.id,
                }),
                L = (0, i.e7)([Z.Z], () => {
                    var e;
                    return null != (e = Z.Z.getUserVoiceChannelId(u, n.id)) ? e : void 0;
                }, [u, n.id]),
                q = r.useCallback(() => {
                    k(O.jQ.COPY_ID);
                }, [k]),
                B = (0, i.e7)([E.ZP], () => E.ZP.isMember(u, n.id), [u, n.id]),
                G = (0, _.Z)({
                    userId: n.id,
                    guildId: u,
                    sourceAnalyticsLocations: T,
                }),
                V = (0, j.Z)(n.id, M),
                F = (0, g.Z)({
                    guildId: u,
                    userId: n.id,
                    analyticsLocation: null != I ? I : U.location,
                    analyticsLocations: [R],
                    context: M,
                }),
                K = (0, p.Z)({
                    user: n,
                    guildId: u,
                    location: R,
                    channelId: c,
                }),
                Y = (0, y.Z)({
                    user: n,
                    guildId: u,
                    location: R,
                    channelId: c,
                }),
                Q = (0, P.Z)(n, u, null != c ? c : L, R),
                H = (0, h.Z)(c, A),
                W = (0, v.Z)(n, u),
                X = (0, S.Z)(n.id, u, !1, R),
                z = (0, b.Z)({
                    id: n.id,
                    label: N.intl.string(N.t["/AXYnJ"]),
                    onSuccess: q,
                }),
                J = (0, m.Z)(n, u),
                $ = !!(null == n ? void 0 : n.isNonUserBot());
            return (0, l.jsxs)(a.v2r, {
                navId: "user-context",
                onClose: () => {
                    (0, o.Zy)(), null == D || D();
                },
                "aria-label": N.intl.string(N.t.liqwPD),
                onSelect: C,
                children: [
                    !$ &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)(a.kSQ, {
                                    children: [G, V],
                                }),
                                (0, l.jsxs)(a.kSQ, {
                                    children: [F, Y, K],
                                }),
                                B &&
                                    (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)(a.kSQ, { children: Q }),
                                            (0, l.jsxs)(a.kSQ, {
                                                children: [X, J],
                                            }),
                                        ],
                                    }),
                                null != A ? H : null,
                                x && null != W ? (0, l.jsx)(a.kSQ, { children: W }) : null,
                            ],
                        }),
                    (0, l.jsx)(a.kSQ, { children: z }),
                ],
            });
        },
        { object: M.qAy.CONTEXT_MENU },
    ),
    [d.Z.CONTEXT_MENU, d.Z.GUILD_MODERATION_USER_MENU],
);
