n.d(t, {
    W: () => A,
}),
    n(321073),
    n(228524);
var r = n(627968),
    i = n(311907),
    a = n(793574),
    s = n(688810),
    o = n(522305),
    l = n(735991),
    c = n(361926),
    u = n(485724),
    d = n(572211),
    f = n(354287),
    p = n(574660),
    _ = n(734057),
    h = n(309010),
    m = n(486020),
    g = n(795816),
    E = n(933958),
    b = n(574152),
    y = n(782091),
    O = n(985018);

function A(e) {
    var t, n, A;
    let { application: v, customId: S, customLink: I, referrerId: T, message: C } = e,
        N = null == v || null == (t = v.bot) ? void 0 : t.id,
        R = (0, c.Vr)({
            context: {
                type: "contextless",
            },
            applicationId: v.id,
            botUserId: null == v || null == (n = v.bot) ? void 0 : n.id,
        }),
        w = null != v && (0, l.Ag)(v),
        P = null != N && w && R,
        { analyticsLocations: D } = (0, s.Ay)(a.A.ACTIVITY_CUSTOM_LINK),
        x = (0, i.bG)([h.A], () => h.A.getChannelId()),
        L = (0, y.et)(x),
        j = (0, i.bG)([E.Ay], () => {
            if (null == x) return;
            let e = E.Ay.getEmbeddedActivitiesForChannel(x).filter((e) => e.applicationId === v.id);
            return e.length > 0 ? e[0].compositeInstanceId : void 0;
        }),
        M = (0, i.bG)([E.Ay], () => E.Ay.getCurrentEmbeddedActivity()),
        k = (0, b.A)(),
        U = L === y.xy.CAN_LAUNCH,
        G = null != j && (null == M ? void 0 : M.compositeInstanceId) === j,
        V = null != S ? S : I.customId,
        F = [];
    U &&
        F.push({
            label: null == j ? O.intl.string(O.t.RscU7I) : G ? O.intl.string(O.t.DPfdsq) : O.intl.string(O.t.sqe0hj),
            trackingArea: f.kY.PLAY,
            onClick() {
                (0, g.su)({
                    channelId: null != x ? x : void 0,
                    applicationId: v.id,
                    isStart: null == j,
                    embeddedActivitiesManager: k,
                    customId: V,
                    referrerId: T,
                    analyticsLocations: D,
                });
            },
            disabled: G,
        }),
        P &&
            !U &&
            F.push({
                label: O.intl.string(O.t.JeK1Wg),
                trackingArea: f.kY.PLAY,
                onClick() {
                    (0, o.Q)({
                        appId: v.id,
                        botId: N,
                        analyticsLocations: D,
                        customId: V,
                        referrerId: T,
                    });
                },
            });
    let B = (0, p.F)(v);
    return (0, r.jsx)(d.h, {
        actions: F,
        onClickContent: B,
        header: v.name,
        iconSrc: m.Ay.getApplicationIconURL({
            id: v.id,
            icon: v.icon,
            bot: v.bot,
        }),
        info: (0, r.jsx)("div", {
            children: I.description,
        }),
        staticBannerSrc: I.getAssetURL(),
        title: I.title,
        trackingConfig: {
            id: v.id,
            linkType: u.J.CUSTOM_ACTIVITY_LINK,
            referrerId: T,
            activityCustomId: V,
            guildId: null == (A = _.A.getChannel(C.channel_id)) ? void 0 : A.guild_id,
            channelId: C.channel_id,
            messageId: C.id,
        },
    });
}
