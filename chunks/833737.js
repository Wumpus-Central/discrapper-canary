n.d(t, { default: () => N });
var l = n(951288),
    r = n(647438),
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
    y = n(979651),
    p = n(933409),
    Z = n(389052),
    P = n(158508),
    m = n(88966),
    j = n(712301),
    v = n(567711),
    h = n(358386),
    _ = n(37258),
    S = n(931617),
    M = n(981631),
    C = n(388032);
let N = (0, c.Z)(
    (0, u.Z)(
        function (e) {
            var t;
            let {
                    user: n,
                    guildId: u,
                    channelId: c,
                    context: M,
                    onSelect: N,
                    moderationAlertId: I,
                    analyticsLocation: A,
                    analyticsLocations: T,
                    onCloseContextMenu: D,
                    showTransferOwnershipItem: w,
                } = e,
                { analyticsLocations: x } = (0, f.ZP)(d.Z.CONTEXT_MENU),
                U = (0, s.O)(),
                R = null != (t = null == T ? void 0 : T[0]) ? t : x[0],
                k = (0, O.sE)(u, {
                    location: R,
                    targetUserId: n.id,
                }),
                L = (0, i.e7)([y.Z], () => {
                    var e;
                    return null != (e = y.Z.getUserVoiceChannelId(u, n.id)) ? e : void 0;
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
                V = (0, m.Z)(n.id, M),
                F = (0, g.Z)({
                    guildId: u,
                    userId: n.id,
                    analyticsLocation: null != A ? A : U.location,
                    analyticsLocations: [R],
                    context: M,
                }),
                Y = (0, Z.Z)({
                    user: n,
                    guildId: u,
                    location: R,
                    channelId: c,
                }),
                K = (0, P.Z)({
                    user: n,
                    guildId: u,
                    location: R,
                    channelId: c,
                }),
                Q = (0, p.Z)(n, u, null != c ? c : L, R),
                H = (0, v.Z)(c, I),
                W = (0, h.Z)(n, u),
                X = (0, S.Z)(n.id, u, !1, R),
                z = (0, b.Z)({
                    id: n.id,
                    label: C.intl.string(C.t["/AXYnJ"]),
                    onSuccess: q,
                }),
                J = (0, j.Z)(n, u),
                $ = !!(null == n ? void 0 : n.isNonUserBot());
            return (0, l.jsxs)(a.v2r, {
                navId: "user-context",
                onClose: () => {
                    (0, o.Zy)(), null == D || D();
                },
                "aria-label": C.intl.string(C.t.liqwPD),
                onSelect: N,
                children: [
                    !$ &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)(a.kSQ, {
                                    children: [G, V],
                                }),
                                (0, l.jsxs)(a.kSQ, {
                                    children: [F, K, Y],
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
                                null != I ? H : null,
                                w && null != W ? (0, l.jsx)(a.kSQ, { children: W }) : null,
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
