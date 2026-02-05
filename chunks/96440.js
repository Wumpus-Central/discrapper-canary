n.d(t, { W: () => v }), n(321073);
var i = n(627968),
    l = n(311907),
    a = n(793574),
    r = n(688810),
    s = n(522305),
    o = n(735991),
    d = n(361926),
    c = n(485724),
    u = n(572211),
    m = n(354287),
    _ = n(574660),
    h = n(625180),
    p = n(207371),
    g = n(734057),
    A = n(309010),
    f = n(486020),
    x = n(795816),
    E = n(933958),
    C = n(574152),
    I = n(782091),
    T = n(985018);
function v(e) {
    let { application: t, customId: n, customLink: v, referrerId: N, message: S } = e,
        b = t?.bot?.id,
        y = (0, d.Vr)({ context: { type: "contextless" }, applicationId: t.id, botUserId: t?.bot?.id }),
        j = null != t && (0, o.Ag)(t),
        R = null != b && j && y,
        { analyticsLocations: L } = (0, r.Ay)(a.A.ACTIVITY_CUSTOM_LINK),
        M = (0, l.bG)([A.A], () => A.A.getChannelId()),
        O = (0, I.et)(M),
        P = (0, l.bG)([E.Ay], () => {
            if (null == M) return;
            let e = E.Ay.getEmbeddedActivitiesForChannel(M).filter((e) => e.applicationId === t.id);
            return e.length > 0 ? e[0].compositeInstanceId : void 0;
        }),
        D = (0, l.bG)([E.Ay], () => E.Ay.getCurrentEmbeddedActivity()),
        k = (0, C.A)(),
        U = O === I.xy.CAN_LAUNCH,
        w = null != P && D?.compositeInstanceId === P,
        G = null != n ? n : v.customId,
        B = (0, p.e)(t),
        F = [];
    B
        ? F.push({
              label: T.intl.string(T.t.RscU7I),
              trackingArea: m.kY.PLAY,
              onClick() {
                  h.A.launchFrame({ applicationId: t.id });
              },
          })
        : (U &&
              F.push({
                  label:
                      null == P ? T.intl.string(T.t.RscU7I) : w ? T.intl.string(T.t.DPfdsq) : T.intl.string(T.t.sqe0hj),
                  trackingArea: m.kY.PLAY,
                  onClick() {
                      (0, x.su)({
                          channelId: M ?? void 0,
                          applicationId: t.id,
                          isStart: null == P,
                          embeddedActivitiesManager: k,
                          customId: G,
                          referrerId: N,
                          analyticsLocations: L,
                      });
                  },
                  disabled: w,
              }),
          R &&
              !U &&
              F.push({
                  label: T.intl.string(T.t.JeK1Wg),
                  trackingArea: m.kY.PLAY,
                  onClick() {
                      (0, s.Q)({ appId: t.id, botId: b, analyticsLocations: L, customId: G, referrerId: N });
                  },
              }));
    let H = (0, _.F)(t);
    return (0, i.jsx)(u.h, {
        actions: F,
        onClickContent: H,
        header: t.name,
        iconSrc: f.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: t.bot }),
        info: (0, i.jsx)("div", { children: v.description }),
        staticBannerSrc: v.getAssetURL(),
        title: v.title,
        trackingConfig: {
            id: t.id,
            linkType: c.J.CUSTOM_ACTIVITY_LINK,
            referrerId: N,
            activityCustomId: G,
            guildId: g.A.getChannel(S.channel_id)?.guild_id,
            channelId: S.channel_id,
            messageId: S.id,
        },
    });
}
