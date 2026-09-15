(n.d(t, {
    $J: () => w,
    IG: () => R,
    Ps: () => G,
    UR: () => v,
    W1: () => y,
    WU: () => P,
    _Q: () => D,
    b6: () => q,
    bg: () => N,
    pu: () => M,
    se: () => U,
    v0: () => b,
}),
    n(321073),
    n(323874),
    n(14289),
    n(35956),
    n(134528),
    n(947204));
var i,
    r = n(132500),
    s = n(323889),
    o = n(412703),
    u = n(228366),
    a = n(975807),
    l = n(274670),
    d = n(144779),
    c = n(7588),
    C = n(657375),
    f = n(968309),
    A = n(780964),
    E = n(625494),
    p = n(723702),
    I = n(192444),
    T = n(104886),
    m = n(561844),
    h = n(651892),
    _ = n(792620),
    g = n(190107),
    S = n(652215),
    O = n(375708);
function v(e) {
    let t = (0, _.t)({ quest: e }) || (0, _.fE)({ quest: e }) || (0, _.I6)(e),
        n = (0, _.uD)(e),
        i = [];
    return (t && i.push(g.fO.DESKTOP), n && i.push(g.fO.CONSOLE), i);
}
function N(e) {
    let t = Object.keys(e.config.taskConfigV2.tasks),
        n = [];
    for (let e of t)
        switch (e) {
            case o.n.PLAY_ON_XBOX:
                n.push(S.fg2.XBOX);
                break;
            case o.n.PLAY_ON_PLAYSTATION:
                n.push(S.fg2.PLAYSTATION);
        }
    return n;
}
function y(e) {
    let t = (0, _.vv)(e),
        n = (0, _.vl)(e);
    return t || n;
}
var P = (((i = {}).DESKTOP = "desktop"), (i.XBOX = "xbox"), (i.PLAYSTATION = "playstation"), i);
function w(e) {
    return "xbox" === e.connected_account_type ? S.fg2.XBOX : S.fg2.PLAYSTATION;
}
function b(e, t) {
    let { platformType: n, quest: i } = e;
    ((0, T.E5)(T.kI.STEP_2_CLICKED_INTERNAL, "open_authorization_connection_modal")
        ? (0, l.r)({
              type: d.F.CLICK_INTERNAL,
              adCreativeType: s.p.QUEST,
              adCreativeId: i.id,
              questContentCTA: t.ctaContent,
              surfaceId: t.content,
              sourceQuestContent: t.sourceQuestContent,
              impressionId: t.impressionId,
          })
        : (0, m.Y5)({
              questId: i.id,
              questContent: t.content,
              sourceQuestContent: t.sourceQuestContent,
              questContentCTA: t.ctaContent,
              impressionId: t.impressionId,
          }),
        (0, f.A)({ platformType: n, location: t.ctaContent }));
}
function R(e) {
    return w(e) === S.fg2.XBOX ? O.t["mytEv+"] : O.t.iDiwby;
}
function L(e) {
    if (((0, p.isIOS)() || "ios" === (0, p.getOS)()) && e.ios?.iosAppId != null) {
        let t = e.ios.iosAppId.startsWith("id") ? e.ios.iosAppId : `id${e.ios.iosAppId}`;
        return `https://apps.apple.com/app/${t}`;
    }
    return ((0, p.isAndroid)() || "android" === (0, p.getOS)()) && e.android?.androidAppId != null
        ? `https://play.google.com/store/apps/details?id=${e.android.androidAppId}`
        : null;
}
function Q(e) {
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
        inlineStoreParams: i,
        trackOverlayEvent: r,
        trackOverlaySurfaceClick: s,
        getIosAttribution: o,
        allowExternalOpen: u = !0,
    } = e;
    return (I.OO.getConfig({ location: "quest_open_game_link" }).enabled, u && (0, a.A)(t), Promise.resolve(!1));
}
function M(e, t) {
    let n,
        i,
        o,
        u = (0, h.Jx)(e.config),
        a = null == (n = e.config.ctaConfig) ? null : L({ url: (0, h.Jx)(e.config), android: n.android, ios: n.ios });
    (null != a && (u = a),
        (function (e) {
            try {
                return new URL(e).searchParams.has("dclid");
            } catch {
                return !1;
            }
        })(u) &&
            (u = (function (e, t) {
                try {
                    let n = new URL(e);
                    return (n.searchParams.set("dclid", t), n.toString());
                } catch {
                    return e;
                }
            })(u, (o = (0, r.A)()))),
        (0, T.E5)(T.kI.STEP_3_CLICKED_EXTERNAL, "open_game_link_directly")
            ? (0, l.r)({
                  type: d.F.CLICK_EXTERNAL_ADVERTISER_CTA,
                  adCreativeType: s.p.QUEST,
                  adCreativeId: e.id,
                  questContentCTA: t.ctaContent,
                  surfaceId: t.content,
                  sourceQuestContent: t.sourceQuestContent,
                  questContentPosition: t.position,
                  impressionId: t.impressionId,
                  clickId: o,
              })
            : (0, m.Y5)({
                  questId: e.id,
                  questContent: t.content,
                  questContentCTA: t.ctaContent,
                  questContentPosition: t.position,
                  impressionId: t.impressionId,
                  sourceQuestContent: t.sourceQuestContent,
                  clickId: o,
              }));
    let { impressionId: f } = t,
        A = null != f ? (0, c.vV)(e.config.ctaConfig?.ios?.iosAppId != null, t.sourceQuestContent, e.id) : null;
    (E._.dispatch(S.jej.QUEST_GAME_LINK_OPENED),
        k({
            link: u,
            directLink: a,
            inlineStoreParams:
                null == (i = e.config.ctaConfig)
                    ? null
                    : Q({ url: (0, h.Jx)(e.config), android: i.android, ios: i.ios }),
            trackOverlayEvent: (n, i, r, s, o) =>
                (0, m.eA)({
                    quest: e,
                    trackingCtx: t,
                    inlineStoreAppId: i,
                    overlayVariant: r,
                    event: n,
                    timeSpentMs: s,
                    overlaySurface: o,
                }),
            trackOverlaySurfaceClick: (n) => (0, m.hR)({ questId: e.id, trackingCtx: t, overlaySurface: n }),
            getIosAttribution: null != A && null != f ? () => (0, C.FW)({ impressionId: f }) : void 0,
        }));
}
function D(e, t) {
    let { adContentId: n, adCreativeType: i, cta: r } = e;
    !(function (e, t, n) {
        let { adContentId: i, adCreativeType: r, cta: s } = e,
            { preferExternalAppStore: o } = n,
            u = s.url,
            f = L(s);
        (null != f && (u = f),
            (0, T.E5)(T.kI.STEP_3_CLICKED_EXTERNAL, "open_ad_game_link_directly")
                ? (0, l.r)({
                      type: d.F.CLICK_EXTERNAL_ADVERTISER_CTA,
                      adCreativeType: r,
                      adCreativeId: i,
                      questContentCTA: t.ctaContent,
                      surfaceId: t.content,
                      sourceQuestContent: t.sourceQuestContent,
                      questContentPosition: t.position,
                      impressionId: t.impressionId,
                  })
                : (0, m.vK)({
                      adContentId: i,
                      adCreativeType: r,
                      questContent: t.content,
                      questContentCTA: t.ctaContent,
                      questContentPosition: t.position,
                      impressionId: t.impressionId,
                      sourceQuestContent: t.sourceQuestContent,
                  }),
            E._.dispatch(S.jej.QUEST_GAME_LINK_OPENED));
        let { impressionId: A } = t,
            p = null != A ? (0, c.vV)(s.ios?.iosAppId != null, t.sourceQuestContent, i) : null,
            I = Q(s),
            h = null != p && null != A ? () => (0, C.FW)({ impressionId: A }) : void 0;
        o && null == h
            ? (0, a.A)(u)
            : k({
                  link: u,
                  directLink: f,
                  inlineStoreParams: I,
                  trackOverlayEvent: (e, n, s, o, u) =>
                      (0, m.YE)({
                          adContentId: i,
                          adCreativeType: r,
                          trackingCtx: t,
                          inlineStoreAppId: n,
                          overlayVariant: s,
                          event: e,
                          timeSpentMs: o,
                          overlaySurface: u,
                      }),
                  trackOverlaySurfaceClick: (e) =>
                      (0, m.jk)({ adContentId: i, adCreativeType: r, trackingCtx: t, overlaySurface: e }),
                  getIosAttribution: h,
              });
    })({ adContentId: n, adCreativeType: i, cta: r }, t, { preferExternalAppStore: !1 });
}
function q(e, t) {
    let { quest: i } = e;
    ((0, T.E5)(T.kI.STEP_2_CLICKED_INTERNAL, "open_console_connection_settings")
        ? (0, l.r)({
              type: d.F.CLICK_INTERNAL,
              adCreativeType: s.p.QUEST,
              adCreativeId: i.id,
              questContentCTA: t.ctaContent,
              surfaceId: t.content,
              sourceQuestContent: t.sourceQuestContent,
              impressionId: t.impressionId,
              questContentPosition: t.position,
          })
        : (0, m.Y5)({
              questId: i.id,
              questContent: t.content,
              questContentPosition: t.position,
              questContentCTA: t.ctaContent,
              impressionId: t.impressionId,
              sourceQuestContent: t.sourceQuestContent,
          }),
        (function () {
            {
                let { openUserSettings: e } = n(766075);
                e(A.X.CONNECTIONS_CATEGORY);
            }
        })());
}
function U(e, t) {
    let { quest: n } = e;
    (0, T.E5)(T.kI.STEP_2_CLICKED_INTERNAL, "open_add_console_connection_modal")
        ? (0, l.r)({
              type: d.F.CLICK_INTERNAL,
              adCreativeType: s.p.QUEST,
              adCreativeId: n.id,
              questContentCTA: t.ctaContent,
              surfaceId: t.content,
              sourceQuestContent: t.sourceQuestContent,
              impressionId: t.impressionId,
              questContentPosition: t.position,
              questContentRowIndex: t.rowIndex,
          })
        : (0, m.Y5)({
              questId: n.id,
              questContent: t.content,
              questContentPosition: t.position,
              questContentRowIndex: t.rowIndex,
              questContentCTA: t.ctaContent,
              impressionId: t.impressionId,
              sourceQuestContent: t.sourceQuestContent,
          });
    let i = N(n);
    if (1 === i.length) return (0, f.A)({ platformType: i.at(0) });
    u.h.dispatch({
        type: "CONNECTIONS_GRID_MODAL_SHOW",
        onComplete: (e) => (0, f.A)({ platformType: e }),
        includedPlatformTypes: new Set(i),
        includeApplicationConnections: !1,
    });
}
function G(e, t, n) {
    let { quest: i } = e;
    return (
        (0, T.E5)(T.kI.STEP_2_CLICKED_INTERNAL, "open_single_console_connection_modal")
            ? (0, l.r)({
                  type: d.F.CLICK_INTERNAL,
                  adCreativeType: s.p.QUEST,
                  adCreativeId: i.id,
                  questContentCTA: t.ctaContent,
                  surfaceId: t.content,
                  sourceQuestContent: t.sourceQuestContent,
                  impressionId: t.impressionId,
                  questContentPosition: t.position,
                  questContentRowIndex: t.rowIndex,
              })
            : (0, m.Y5)({
                  questId: i.id,
                  questContent: t.content,
                  questContentPosition: t.position,
                  questContentRowIndex: t.rowIndex,
                  questContentCTA: t.ctaContent,
                  impressionId: t.impressionId,
                  sourceQuestContent: t.sourceQuestContent,
              }),
        (0, f.A)({ platformType: n })
    );
}
