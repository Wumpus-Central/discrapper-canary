n.d(t, {
    W: () => E,
}),
    n(321073),
    n(228524);
var r = n(627968),
    i = n(311907),
    l = n(793574),
    a = n(688810),
    s = n(522305),
    o = n(735991),
    c = n(361926),
    u = n(485724),
    d = n(572211),
    p = n(354287),
    m = n(574660),
    f = n(625180),
    g = n(207371),
    h = n(734057),
    _ = n(309010),
    b = n(486020),
    A = n(795816),
    y = n(933958),
    v = n(574152),
    x = n(782091),
    O = n(985018);

function E(e) {
    var t, n, E;
    let { application: j, customId: C, customLink: I, referrerId: S, message: T } = e,
        N = null == j || null == (t = j.bot) ? void 0 : t.id,
        P = (0, c.Vr)({
            context: {
                type: "contextless",
            },
            applicationId: j.id,
            botUserId: null == j || null == (n = j.bot) ? void 0 : n.id,
        }),
        w = null != j && (0, o.Ag)(j),
        R = null != N && w && P,
        { analyticsLocations: D } = (0, a.Ay)(l.A.ACTIVITY_CUSTOM_LINK),
        L = (0, i.bG)([_.A], () => _.A.getChannelId()),
        M = (0, x.et)(L),
        k = (0, i.bG)([y.Ay], () => {
            if (null == L) return;
            let e = y.Ay.getEmbeddedActivitiesForChannel(L).filter((e) => e.applicationId === j.id);
            return e.length > 0 ? e[0].compositeInstanceId : void 0;
        }),
        U = (0, i.bG)([y.Ay], () => y.Ay.getCurrentEmbeddedActivity()),
        G = (0, v.A)(),
        B = M === x.xy.CAN_LAUNCH,
        F = null != k && (null == U ? void 0 : U.compositeInstanceId) === k,
        H = null != C ? C : I.customId,
        V = (0, g.e)(j),
        z = [];
    V
        ? z.push({
              label: O.intl.string(O.t.RscU7I),
              trackingArea: p.kY.PLAY,
              onClick() {
                  f.A.launchFrame({
                      applicationId: j.id,
                  });
              },
          })
        : (B &&
              z.push({
                  label:
                      null == k ? O.intl.string(O.t.RscU7I) : F ? O.intl.string(O.t.DPfdsq) : O.intl.string(O.t.sqe0hj),
                  trackingArea: p.kY.PLAY,
                  onClick() {
                      (0, A.su)({
                          channelId: null != L ? L : void 0,
                          applicationId: j.id,
                          isStart: null == k,
                          embeddedActivitiesManager: G,
                          customId: H,
                          referrerId: S,
                          analyticsLocations: D,
                      });
                  },
                  disabled: F,
              }),
          R &&
              !B &&
              z.push({
                  label: O.intl.string(O.t.JeK1Wg),
                  trackingArea: p.kY.PLAY,
                  onClick() {
                      (0, s.Q)({
                          appId: j.id,
                          botId: N,
                          analyticsLocations: D,
                          customId: H,
                          referrerId: S,
                      });
                  },
              }));
    let W = (0, m.F)(j);
    return (0, r.jsx)(d.h, {
        actions: z,
        onClickContent: W,
        header: j.name,
        iconSrc: b.Ay.getApplicationIconURL({
            id: j.id,
            icon: j.icon,
            bot: j.bot,
        }),
        info: (0, r.jsx)("div", {
            children: I.description,
        }),
        staticBannerSrc: I.getAssetURL(),
        title: I.title,
        trackingConfig: {
            id: j.id,
            linkType: u.J.CUSTOM_ACTIVITY_LINK,
            referrerId: S,
            activityCustomId: H,
            guildId: null == (E = h.A.getChannel(T.channel_id)) ? void 0 : E.guild_id,
            channelId: T.channel_id,
            messageId: T.id,
        },
    });
}
