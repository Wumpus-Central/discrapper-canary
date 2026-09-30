(n.d(t, {
    $J: () => L,
    IG: () => w,
    Ps: () => G,
    UR: () => N,
    W1: () => P,
    WU: () => b,
    _Q: () => U,
    b6: () => Q,
    bg: () => v,
    pu: () => D,
    se: () => q,
    v0: () => R,
}),
    n(321073),
    n(323874),
    n(14289),
    n(35956),
    n(134528),
    n(947204));
var r,
    u = n(132500),
    l = n(323889),
    i = n(412703),
    o = n(228366),
    s = n(975807),
    a = n(274670),
    c = n(144779),
    d = n(7588),
    f = n(657375),
    A = n(968309),
    E = n(780964),
    _ = n(625494),
    p = n(723702),
    C = n(192444),
    I = n(104886),
    T = n(561844),
    m = n(651892),
    S = n(792620),
    O = n(190107),
    g = n(652215),
    h = n(375708);
function N(e) {
    let t = (0, S.t)({ quest: e }) || (0, S.fE)({ quest: e }) || (0, S.I6)(e),
        n = (0, S.uD)(e),
        r = [];
    return (t && r.push(O.fO.DESKTOP), n && r.push(O.fO.CONSOLE), r);
}
function v(e) {
    let t = Object.keys(e.config.taskConfigV2.tasks),
        n = [];
    for (let e of t)
        switch (e) {
            case i.n.PLAY_ON_XBOX:
                n.push(g.fg2.XBOX);
                break;
            case i.n.PLAY_ON_PLAYSTATION:
                n.push(g.fg2.PLAYSTATION);
        }
    return n;
}
function P(e) {
    let t = (0, S.vv)(e),
        n = (0, S.vl)(e);
    return t || n;
}
var b = (((r = {}).DESKTOP = "desktop"), (r.XBOX = "xbox"), (r.PLAYSTATION = "playstation"), r);
function L(e) {
    return "xbox" === e.connected_account_type ? g.fg2.XBOX : g.fg2.PLAYSTATION;
}
function R(e, t) {
    let { platformType: n, quest: r } = e;
    ((0, I.E5)(I.kI.STEP_2_CLICKED_INTERNAL, "open_authorization_connection_modal")
        ? (0, a.r)({
              type: c.F.CLICK_INTERNAL,
              adCreativeType: l.p.QUEST,
              adCreativeId: r.id,
              questContentCTA: t.ctaContent,
              surfaceId: t.content,
              sourceQuestContent: t.sourceQuestContent,
              impressionId: t.impressionId,
          })
        : (0, T.Y5)({
              questId: r.id,
              questContent: t.content,
              sourceQuestContent: t.sourceQuestContent,
              questContentCTA: t.ctaContent,
              impressionId: t.impressionId,
          }),
        (0, A.A)({ platformType: n, location: t.ctaContent }));
}
function w(e) {
    return L(e) === g.fg2.XBOX ? h.t["mytEv+"] : h.t.iDiwby;
}
function y(e) {
    if (((0, p.isIOS)() || "ios" === (0, p.getOS)()) && e.ios?.iosAppId != null) {
        let t = e.ios.iosAppId.startsWith("id") ? e.ios.iosAppId : `id${e.ios.iosAppId}`;
        return `https://apps.apple.com/app/${t}`;
    }
    return ((0, p.isAndroid)() || "android" === (0, p.getOS)()) && e.android?.androidAppId != null
        ? `https://play.google.com/store/apps/details?id=${e.android.androidAppId}`
        : null;
}
function M(e) {
    if ((0, p.isAndroid)() && e.android?.androidAppId != null)
        return {
            url: `https://play.google.com/d?id=${e.android.androidAppId}`,
            os: "android",
            storeAppId: e.android.androidAppId,
            appId: null,
        };
    if ((0, p.isIOS)() && e.ios?.iosAppId != null) {
        let t = e.ios.iosAppId.startsWith("id") ? e.ios.iosAppId.slice(2) : e.ios.iosAppId;
        return { url: `https://apps.apple.com/app/id${t}`, os: "ios", storeAppId: t, appId: parseInt(t, 10) };
    }
    return null;
}
function k(e) {
    let {
        link: t,
        directLink: n,
        inlineStoreParams: r,
        trackOverlayEvent: u,
        trackOverlaySurfaceClick: l,
        appStoreOverlayCarouselScrollContext: i,
        getIosAttribution: o,
        allowExternalOpen: a = !0,
    } = e;
    return (C.OO.getConfig({ location: "quest_open_game_link" }).enabled, a && (0, s.A)(t), Promise.resolve(!1));
}
function D(e, t) {
    let n,
        r,
        i,
        o = (0, m.Jx)(e.config),
        s = null == (n = e.config.ctaConfig) ? null : y({ url: (0, m.Jx)(e.config), android: n.android, ios: n.ios });
    (null != s && (o = s),
        (function (e) {
            try {
                return new URL(e).searchParams.has("dclid");
            } catch {
                return !1;
            }
        })(o) &&
            (o = (function (e, t) {
                try {
                    let n = new URL(e);
                    return (n.searchParams.set("dclid", t), n.toString());
                } catch {
                    return e;
                }
            })(o, (i = (0, u.A)()))),
        (0, I.E5)(I.kI.STEP_3_CLICKED_EXTERNAL, "open_game_link_directly")
            ? (0, a.r)({
                  type: c.F.CLICK_EXTERNAL_ADVERTISER_CTA,
                  adCreativeType: l.p.QUEST,
                  adCreativeId: e.id,
                  questContentCTA: t.ctaContent,
                  surfaceId: t.content,
                  sourceQuestContent: t.sourceQuestContent,
                  questContentPosition: t.position,
                  impressionId: t.impressionId,
                  clickId: i,
              })
            : (0, T.Y5)({
                  questId: e.id,
                  questContent: t.content,
                  questContentCTA: t.ctaContent,
                  questContentPosition: t.position,
                  impressionId: t.impressionId,
                  sourceQuestContent: t.sourceQuestContent,
                  clickId: i,
              }));
    let { impressionId: A } = t,
        E = null != A ? (0, d.vV)(e.config.ctaConfig?.ios?.iosAppId != null, t.sourceQuestContent, e.id) : null;
    (_._.dispatch(g.jej.QUEST_GAME_LINK_OPENED),
        k({
            link: o,
            directLink: s,
            inlineStoreParams:
                null == (r = e.config.ctaConfig)
                    ? null
                    : M({ url: (0, m.Jx)(e.config), android: r.android, ios: r.ios }),
            trackOverlayEvent: (n, r, u, l, i) =>
                (0, T.eA)({
                    quest: e,
                    trackingCtx: t,
                    inlineStoreAppId: r,
                    overlayVariant: u,
                    event: n,
                    timeSpentMs: l,
                    overlaySurface: i,
                }),
            trackOverlaySurfaceClick: (n) => (0, T.hR)({ questId: e.id, trackingCtx: t, overlaySurface: n }),
            appStoreOverlayCarouselScrollContext: { questId: e.id },
            getIosAttribution: null != E && null != A ? () => (0, f.FW)({ impressionId: A }) : void 0,
        }));
}
function U(e, t) {
    let { adContentId: n, adCreativeType: r, cta: u } = e;
    !(function (e, t, n) {
        let { adContentId: r, adCreativeType: u, cta: l } = e,
            { preferExternalAppStore: i } = n,
            o = l.url,
            A = y(l);
        (null != A && (o = A),
            (0, I.E5)(I.kI.STEP_3_CLICKED_EXTERNAL, "open_ad_game_link_directly")
                ? (0, a.r)({
                      type: c.F.CLICK_EXTERNAL_ADVERTISER_CTA,
                      adCreativeType: u,
                      adCreativeId: r,
                      questContentCTA: t.ctaContent,
                      surfaceId: t.content,
                      sourceQuestContent: t.sourceQuestContent,
                      questContentPosition: t.position,
                      impressionId: t.impressionId,
                  })
                : (0, T.vK)({
                      adContentId: r,
                      adCreativeType: u,
                      questContent: t.content,
                      questContentCTA: t.ctaContent,
                      questContentPosition: t.position,
                      impressionId: t.impressionId,
                      sourceQuestContent: t.sourceQuestContent,
                  }),
            _._.dispatch(g.jej.QUEST_GAME_LINK_OPENED));
        let { impressionId: E } = t,
            p = null != E ? (0, d.vV)(l.ios?.iosAppId != null, t.sourceQuestContent, r) : null,
            C = M(l),
            m = null != p && null != E ? () => (0, f.FW)({ impressionId: E }) : void 0;
        i && null == m
            ? (0, s.A)(o)
            : k({
                  link: o,
                  directLink: A,
                  inlineStoreParams: C,
                  trackOverlayEvent: (e, n, l, i, o) =>
                      (0, T.YE)({
                          adContentId: r,
                          adCreativeType: u,
                          trackingCtx: t,
                          inlineStoreAppId: n,
                          overlayVariant: l,
                          event: e,
                          timeSpentMs: i,
                          overlaySurface: o,
                      }),
                  trackOverlaySurfaceClick: (e) =>
                      (0, T.jk)({ adContentId: r, adCreativeType: u, trackingCtx: t, overlaySurface: e }),
                  appStoreOverlayCarouselScrollContext: { adContentId: r },
                  getIosAttribution: m,
              });
    })({ adContentId: n, adCreativeType: r, cta: u }, t, { preferExternalAppStore: !1 });
}
function Q(e, t) {
    let { quest: r } = e;
    ((0, I.E5)(I.kI.STEP_2_CLICKED_INTERNAL, "open_console_connection_settings")
        ? (0, a.r)({
              type: c.F.CLICK_INTERNAL,
              adCreativeType: l.p.QUEST,
              adCreativeId: r.id,
              questContentCTA: t.ctaContent,
              surfaceId: t.content,
              sourceQuestContent: t.sourceQuestContent,
              impressionId: t.impressionId,
              questContentPosition: t.position,
          })
        : (0, T.Y5)({
              questId: r.id,
              questContent: t.content,
              questContentPosition: t.position,
              questContentCTA: t.ctaContent,
              impressionId: t.impressionId,
              sourceQuestContent: t.sourceQuestContent,
          }),
        (function () {
            {
                let { openUserSettings: e } = n(766075);
                e(E.X.CONNECTIONS_CATEGORY);
            }
        })());
}
function q(e, t) {
    let { quest: n } = e;
    (0, I.E5)(I.kI.STEP_2_CLICKED_INTERNAL, "open_add_console_connection_modal")
        ? (0, a.r)({
              type: c.F.CLICK_INTERNAL,
              adCreativeType: l.p.QUEST,
              adCreativeId: n.id,
              questContentCTA: t.ctaContent,
              surfaceId: t.content,
              sourceQuestContent: t.sourceQuestContent,
              impressionId: t.impressionId,
              questContentPosition: t.position,
              questContentRowIndex: t.rowIndex,
          })
        : (0, T.Y5)({
              questId: n.id,
              questContent: t.content,
              questContentPosition: t.position,
              questContentRowIndex: t.rowIndex,
              questContentCTA: t.ctaContent,
              impressionId: t.impressionId,
              sourceQuestContent: t.sourceQuestContent,
          });
    let r = v(n);
    if (1 === r.length) return (0, A.A)({ platformType: r.at(0) });
    o.h.dispatch({
        type: "CONNECTIONS_GRID_MODAL_SHOW",
        onComplete: (e) => (0, A.A)({ platformType: e }),
        includedPlatformTypes: new Set(r),
        includeApplicationConnections: !1,
    });
}
function G(e, t, n) {
    let { quest: r } = e;
    return (
        (0, I.E5)(I.kI.STEP_2_CLICKED_INTERNAL, "open_single_console_connection_modal")
            ? (0, a.r)({
                  type: c.F.CLICK_INTERNAL,
                  adCreativeType: l.p.QUEST,
                  adCreativeId: r.id,
                  questContentCTA: t.ctaContent,
                  surfaceId: t.content,
                  sourceQuestContent: t.sourceQuestContent,
                  impressionId: t.impressionId,
                  questContentPosition: t.position,
                  questContentRowIndex: t.rowIndex,
              })
            : (0, T.Y5)({
                  questId: r.id,
                  questContent: t.content,
                  questContentPosition: t.position,
                  questContentRowIndex: t.rowIndex,
                  questContentCTA: t.ctaContent,
                  impressionId: t.impressionId,
                  sourceQuestContent: t.sourceQuestContent,
              }),
        (0, A.A)({ platformType: n })
    );
}
