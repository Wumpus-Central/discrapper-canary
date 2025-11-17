n.d(t, { default: () => I });
var l = n(54381),
    r = n(473749),
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
    p = n(979651),
    y = n(933409),
    Z = n(389052),
    P = n(158508),
    m = n(88966),
    j = n(712301),
    h = n(567711),
    v = n(358386),
    _ = n(37258),
    S = n(931617),
    M = n(981631),
    C = n(388032);
let I = (0, c.Z)(
    (0, u.Z)(
        function (e) {
            var t;
            let {
                    user: n,
                    guildId: u,
                    channelId: c,
                    context: M,
                    onSelect: I,
                    moderationAlertId: N,
                    analyticsLocation: A,
                    analyticsLocations: T,
                    onCloseContextMenu: D,
                    showTransferOwnershipItem: w,
                } = e,
                { analyticsLocations: x } = (0, f.ZP)(d.Z.CONTEXT_MENU),
                R = (0, s.O)(),
                U = null != (t = null == T ? void 0 : T[0]) ? t : x[0],
                k = (0, O.sE)(u, {
                    location: U,
                    targetUserId: n.id,
                }),
                L = (0, i.e7)([p.Z], () => {
                    var e;
                    return null != (e = p.Z.getUserVoiceChannelId(u, n.id)) ? e : void 0;
                }, [u, n.id]),
                G = r.useCallback(() => {
                    k(O.jQ.COPY_ID);
                }, [k]),
                q = (0, i.e7)([E.ZP], () => E.ZP.isMember(u, n.id), [u, n.id]),
                B = (0, _.Z)({
                    userId: n.id,
                    guildId: u,
                    sourceAnalyticsLocations: T,
                }),
                F = (0, m.Z)(n.id, M),
                V = (0, g.Z)({
                    guildId: u,
                    userId: n.id,
                    analyticsLocation: null != A ? A : R.location,
                    analyticsLocations: [U],
                    context: M,
                }),
                K = (0, Z.Z)({
                    user: n,
                    guildId: u,
                    location: U,
                    channelId: c,
                }),
                Y = (0, P.Z)({
                    user: n,
                    guildId: u,
                    location: U,
                    channelId: c,
                }),
                Q = (0, y.Z)(n, u, null != c ? c : L, U),
                H = (0, h.Z)(c, N),
                W = (0, v.Z)(n, u),
                X = (0, S.Z)(n.id, u, !1, U),
                z = (0, b.Z)({
                    id: n.id,
                    label: C.intl.string(C.t["/AXYnE"]),
                    onSuccess: G,
                }),
                J = (0, j.Z)(n, u),
                $ = !!(null == n ? void 0 : n.isNonUserBot());
            return (0, l.jsxs)(a.v2r, {
                navId: "user-context",
                onClose: () => {
                    (0, o.Zy)(), null == D || D();
                },
                "aria-label": C.intl.string(C.t.liqwPJ),
                onSelect: I,
                children: [
                    !$ &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)(a.kSQ, {
                                    children: [B, F],
                                }),
                                (0, l.jsxs)(a.kSQ, {
                                    children: [V, Y, K],
                                }),
                                q &&
                                    (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)(a.kSQ, { children: Q }),
                                            (0, l.jsxs)(a.kSQ, {
                                                children: [X, J],
                                            }),
                                        ],
                                    }),
                                null != N ? H : null,
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
