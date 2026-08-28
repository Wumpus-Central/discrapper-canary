n.d(t, {
    $J: () => P,
    IG: () => L,
    Ps: () => U,
    UR: () => g,
    W1: () => O,
    WU: () => b,
    _Q: () => R,
    b6: () => k,
    bg: () => v,
    pu: () => Q,
    se: () => q,
    v0: () => y,
}),
    n(321073),
    n(323874),
    n(14289),
    n(35956),
    n(134528),
    n(947204);
var i,
    r = n(132500),
    s = n(323889),
    o = n(412703),
    a = n(228366),
    l = n(975807),
    u = n(274670),
    d = n(144779),
    c = n(968309),
    C = n(780964),
    f = n(625494),
    E = n(723702),
    m = n(192444),
    p = n(104886),
    T = n(561844),
    A = n(651892),
    h = n(792620),
    I = n(190107),
    S = n(652215),
    _ = n(375708);
function g(e) {
    let t = (0, h.t)({ quest: e }) || (0, h.fE)({ quest: e }) || (0, h.I6)(e),
        n = (0, h.uD)(e),
        i = [];
    return t && i.push(I.fO.DESKTOP), n && i.push(I.fO.CONSOLE), i;
}
function v(e) {
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
function O(e) {
    let t = (0, h.vv)(e),
        n = (0, h.vl)(e);
    return t || n;
}
var b = (((i = {}).DESKTOP = "desktop"), (i.XBOX = "xbox"), (i.PLAYSTATION = "playstation"), i);
function P(e) {
    return "xbox" === e.connected_account_type ? S.fg2.XBOX : S.fg2.PLAYSTATION;
}
function y(e, t) {
    let { platformType: n, quest: i } = e;
    (0, p.E5)(p.kI.STEP_2_CLICKED_INTERNAL, "open_authorization_connection_modal")
        ? (0, u.r)({
              type: d.F.CLICK_INTERNAL,
              adCreativeType: s.p.QUEST,
              adCreativeId: i.id,
              questContentCTA: t.ctaContent,
              surfaceId: t.content,
              sourceQuestContent: t.sourceQuestContent,
              impressionId: t.impressionId,
          })
        : (0, T.Y5)({
              questId: i.id,
              questContent: t.content,
              sourceQuestContent: t.sourceQuestContent,
              questContentCTA: t.ctaContent,
              impressionId: t.impressionId,
          }),
        (0, c.A)({ platformType: n, location: t.ctaContent });
}
function L(e) {
    return P(e) === S.fg2.XBOX ? _.t["mytEv+"] : _.t.iDiwby;
}
function w(e) {
    if (((0, E.isIOS)() || "ios" === (0, E.getOS)()) && e.ios?.iosAppId != null) {
        let t = e.ios.iosAppId.startsWith("id") ? e.ios.iosAppId : `id${e.ios.iosAppId}`;
        return `https://apps.apple.com/app/${t}`;
    }
    return ((0, E.isAndroid)() || "android" === (0, E.getOS)()) && e.android?.androidAppId != null
        ? `https://play.google.com/store/apps/details?id=${e.android.androidAppId}`
        : null;
}
function N(e) {
    if ((0, E.isAndroid)() && e.android?.androidAppId != null)
        return {
            url: `https://play.google.com/d?id=${e.android.androidAppId}`,
            os: "android",
            storeAppId: e.android.androidAppId,
            appId: null,
        };
    if ((0, E.isIOS)() && e.ios?.iosAppId != null) {
        let t = e.ios.iosAppId.startsWith("id") ? e.ios.iosAppId.slice(2) : e.ios.iosAppId;
        return { url: `https://apps.apple.com/app/id${t}`, os: "ios", storeAppId: t, appId: parseInt(t, 10) };
    }
    return null;
}
function M(e) {
    let { link: t, directLink: n, inlineStoreParams: i, trackOverlayEvent: r } = e;
    m.OO.getConfig({ location: "quest_open_game_link" }).enabled, (0, l.A)(t);
}
function Q(e, t) {
    let n,
        i,
        o,
        a = (0, A.Jx)(e.config),
        l = null == (n = e.config.ctaConfig) ? null : w({ url: (0, A.Jx)(e.config), android: n.android, ios: n.ios });
    null != l && (a = l),
        (function (e) {
            try {
                return new URL(e).searchParams.has("dclid");
            } catch {
                return !1;
            }
        })(a) &&
            (a = (function (e, t) {
                try {
                    let n = new URL(e);
                    return n.searchParams.set("dclid", t), n.toString();
                } catch {
                    return e;
                }
            })(a, (o = (0, r.A)()))),
        (0, p.E5)(p.kI.STEP_3_CLICKED_EXTERNAL, "open_game_link_directly")
            ? (0, u.r)({
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
            : (0, T.Y5)({
                  questId: e.id,
                  questContent: t.content,
                  questContentCTA: t.ctaContent,
                  questContentPosition: t.position,
                  impressionId: t.impressionId,
                  sourceQuestContent: t.sourceQuestContent,
                  clickId: o,
              }),
        f._.dispatch(S.jej.QUEST_GAME_LINK_OPENED),
        M({
            link: a,
            directLink: l,
            inlineStoreParams:
                null == (i = e.config.ctaConfig)
                    ? null
                    : N({ url: (0, A.Jx)(e.config), android: i.android, ios: i.ios }),
            trackOverlayEvent: (n, i, r, s, o) =>
                (0, T.eA)({
                    quest: e,
                    trackingCtx: t,
                    inlineStoreAppId: i,
                    overlayVariant: r,
                    event: n,
                    timeSpentMs: s,
                    overlaySurface: o,
                }),
        });
}
function R(e, t) {
    let { adContentId: n, adCreativeType: i, cta: r } = e,
        s = r.url,
        o = w(r);
    null != o && (s = o),
        (0, p.E5)(p.kI.STEP_3_CLICKED_EXTERNAL, "open_ad_game_link_directly")
            ? (0, u.r)({
                  type: d.F.CLICK_EXTERNAL_ADVERTISER_CTA,
                  adCreativeType: i,
                  adCreativeId: n,
                  questContentCTA: t.ctaContent,
                  surfaceId: t.content,
                  sourceQuestContent: t.sourceQuestContent,
                  questContentPosition: t.position,
                  impressionId: t.impressionId,
              })
            : (0, T.vK)({
                  adContentId: n,
                  adCreativeType: i,
                  questContent: t.content,
                  questContentCTA: t.ctaContent,
                  questContentPosition: t.position,
                  impressionId: t.impressionId,
                  sourceQuestContent: t.sourceQuestContent,
              }),
        f._.dispatch(S.jej.QUEST_GAME_LINK_OPENED),
        M({
            link: s,
            directLink: o,
            inlineStoreParams: N(r),
            trackOverlayEvent: (e, r, s, o, a) =>
                (0, T.YE)({
                    adContentId: n,
                    adCreativeType: i,
                    trackingCtx: t,
                    inlineStoreAppId: r,
                    overlayVariant: s,
                    event: e,
                    timeSpentMs: o,
                    overlaySurface: a,
                }),
        });
}
function k(e, t) {
    let { quest: i } = e;
    (0, p.E5)(p.kI.STEP_2_CLICKED_INTERNAL, "open_console_connection_settings")
        ? (0, u.r)({
              type: d.F.CLICK_INTERNAL,
              adCreativeType: s.p.QUEST,
              adCreativeId: i.id,
              questContentCTA: t.ctaContent,
              surfaceId: t.content,
              sourceQuestContent: t.sourceQuestContent,
              impressionId: t.impressionId,
              questContentPosition: t.position,
          })
        : (0, T.Y5)({
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
                e(C.X.CONNECTIONS_CATEGORY);
            }
        })();
}
function q(e, t) {
    let { quest: n } = e;
    (0, p.E5)(p.kI.STEP_2_CLICKED_INTERNAL, "open_add_console_connection_modal")
        ? (0, u.r)({
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
        : (0, T.Y5)({
              questId: n.id,
              questContent: t.content,
              questContentPosition: t.position,
              questContentRowIndex: t.rowIndex,
              questContentCTA: t.ctaContent,
              impressionId: t.impressionId,
              sourceQuestContent: t.sourceQuestContent,
          });
    let i = v(n);
    if (1 === i.length) return (0, c.A)({ platformType: i.at(0) });
    a.h.dispatch({
        type: "CONNECTIONS_GRID_MODAL_SHOW",
        onComplete: (e) => (0, c.A)({ platformType: e }),
        includedPlatformTypes: new Set(i),
        includeApplicationConnections: !1,
    });
}
function U(e, t, n) {
    let { quest: i } = e;
    return (
        (0, p.E5)(p.kI.STEP_2_CLICKED_INTERNAL, "open_single_console_connection_modal")
            ? (0, u.r)({
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
            : (0, T.Y5)({
                  questId: i.id,
                  questContent: t.content,
                  questContentPosition: t.position,
                  questContentRowIndex: t.rowIndex,
                  questContentCTA: t.ctaContent,
                  impressionId: t.impressionId,
                  sourceQuestContent: t.sourceQuestContent,
              }),
        (0, c.A)({ platformType: n })
    );
}
