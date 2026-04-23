n.d(t, { W: () => b }), n(321073);
var i = n(627968),
    l = n(311907),
    a = n(793574),
    s = n(688810),
    r = n(522305),
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
    C = n(933958),
    E = n(574152),
    I = n(782091),
    v = n(985018);
function b(e) {
    let { application: t, customId: n, customLink: b, referrerId: T, message: S } = e,
        y = t?.bot?.id,
        N = (0, d.Vr)({ context: { type: "contextless" }, applicationId: t.id, botUserId: t?.bot?.id }),
        j = null != t && (0, o.Ag)(t),
        L = null != y && j && N,
        { analyticsLocations: R } = (0, s.Ay)(a.A.ACTIVITY_CUSTOM_LINK),
        P = (0, l.bG)([A.A], () => A.A.getChannelId()),
        w = (0, I.et)(P),
        D = (0, l.bG)([C.Ay], () => {
            if (null == P) return;
            let e = C.Ay.getEmbeddedActivitiesForChannel(P).filter((e) => e.applicationId === t.id);
            return e.length > 0 ? e[0].compositeInstanceId : void 0;
        }),
        k = (0, l.bG)([C.Ay], () => C.Ay.getCurrentEmbeddedActivity()),
        O = (0, E.A)(),
        M = w === I.xy.CAN_LAUNCH,
        U = null != D && k?.compositeInstanceId === D,
        G = null != n ? n : b.customId,
        B = (0, p.e)(t),
        F = [];
    B
        ? F.push({
              label: v.intl.string(v.t.RscU7I),
              trackingArea: m.kY.PLAY,
              onClick() {
                  h.A.launchFrame({ applicationId: t.id });
              },
          })
        : (M &&
              F.push({
                  label:
                      null == D ? v.intl.string(v.t.RscU7I) : U ? v.intl.string(v.t.DPfdsq) : v.intl.string(v.t.sqe0hj),
                  trackingArea: m.kY.PLAY,
                  onClick() {
                      (0, x.su)({
                          channelId: P ?? void 0,
                          applicationId: t.id,
                          isStart: null == D,
                          embeddedActivitiesManager: O,
                          customId: G,
                          referrerId: T,
                          analyticsLocations: R,
                      });
                  },
                  disabled: U,
              }),
          L &&
              !M &&
              F.push({
                  label: v.intl.string(v.t.JeK1Wg),
                  trackingArea: m.kY.PLAY,
                  onClick() {
                      (0, r.Q)({ appId: t.id, botId: y, analyticsLocations: R, customId: G, referrerId: T });
                  },
              }));
    let H = (0, _.F)(t);
    return (0, i.jsx)(u.h, {
        actions: F,
        onClickContent: H,
        header: t.name,
        iconSrc: f.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: t.bot }),
        info: (0, i.jsx)("div", { children: b.description }),
        staticBannerSrc: b.getAssetURL(),
        title: b.title,
        trackingConfig: {
            id: t.id,
            linkType: c.J.CUSTOM_ACTIVITY_LINK,
            referrerId: T,
            activityCustomId: G,
            guildId: g.A.getChannel(S.channel_id)?.guild_id,
            channelId: S.channel_id,
            messageId: S.id,
        },
    });
}
