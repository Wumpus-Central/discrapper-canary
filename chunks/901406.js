"use strict";
n.d(t, {
    $J: () => L,
    IG: () => y,
    Ps: () => x,
    UR: () => N,
    W1: () => O,
    WU: () => R,
    _Q: () => U,
    b6: () => w,
    bg: () => C,
    pu: () => P,
    se: () => G,
    v0: () => D,
}),
    n(321073),
    n(323874),
    n(14289),
    n(35956),
    n(134528),
    n(947204);
var i,
    r = n(132500),
    a = n(323889),
    s = n(412703),
    l = n(228366),
    o = n(975807),
    d = n(274670),
    c = n(144779),
    u = n(968309),
    _ = n(780964),
    E = n(625494),
    A = n(723702),
    h = n(192444),
    I = n(104886),
    f = n(561844),
    p = n(651892),
    T = n(792620),
    m = n(190107),
    g = n(652215),
    S = n(375708);
function N(e) {
    let t = (0, T.t)({ quest: e }) || (0, T.fE)({ quest: e }) || (0, T.I6)(e),
        n = (0, T.uD)(e),
        i = [];
    return t && i.push(m.fO.DESKTOP), n && i.push(m.fO.CONSOLE), i;
}
function C(e) {
    let t = Object.keys(e.config.taskConfigV2.tasks),
        n = [];
    for (let e of t)
        switch (e) {
            case s.n.PLAY_ON_XBOX:
                n.push(g.fg2.XBOX);
                break;
            case s.n.PLAY_ON_PLAYSTATION:
                n.push(g.fg2.PLAYSTATION);
        }
    return n;
}
function O(e) {
    let t = (0, T.vv)(e),
        n = (0, T.vl)(e);
    return t || n;
}
var R = (((i = {}).DESKTOP = "desktop"), (i.XBOX = "xbox"), (i.PLAYSTATION = "playstation"), i);
function L(e) {
    return "xbox" === e.connected_account_type ? g.fg2.XBOX : g.fg2.PLAYSTATION;
}
function D(e, t) {
    let { platformType: n, quest: i } = e;
    (0, I.E5)(I.kI.STEP_2_CLICKED_INTERNAL, "open_authorization_connection_modal")
        ? (0, d.r)({
              type: c.F.CLICK_INTERNAL,
              adCreativeType: a.p.QUEST,
              adCreativeId: i.id,
              questContentCTA: t.ctaContent,
              surfaceId: t.content,
              sourceQuestContent: t.sourceQuestContent,
              impressionId: t.impressionId,
          })
        : (0, f.Y5)({
              questId: i.id,
              questContent: t.content,
              sourceQuestContent: t.sourceQuestContent,
              questContentCTA: t.ctaContent,
              impressionId: t.impressionId,
          }),
        (0, u.A)({ platformType: n, location: t.ctaContent });
}
function y(e) {
    return L(e) === g.fg2.XBOX ? S.t["mytEv+"] : S.t.iDiwby;
}
function v(e) {
    if (((0, A.isIOS)() || "ios" === (0, A.getOS)()) && e.ios?.iosAppId != null) {
        let t = e.ios.iosAppId.startsWith("id") ? e.ios.iosAppId : `id${e.ios.iosAppId}`;
        return `https://apps.apple.com/app/${t}`;
    }
    return ((0, A.isAndroid)() || "android" === (0, A.getOS)()) && e.android?.androidAppId != null
        ? `https://play.google.com/store/apps/details?id=${e.android.androidAppId}`
        : null;
}
function b(e) {
    if ((0, A.isAndroid)() && e.android?.androidAppId != null)
        return {
            url: `https://play.google.com/d?id=${e.android.androidAppId}`,
            os: "android",
            storeAppId: e.android.androidAppId,
            appId: null,
        };
    if ((0, A.isIOS)() && e.ios?.iosAppId != null) {
        let t = e.ios.iosAppId.startsWith("id") ? e.ios.iosAppId.slice(2) : e.ios.iosAppId;
        return { url: `https://apps.apple.com/app/id${t}`, os: "ios", storeAppId: t, appId: parseInt(t, 10) };
    }
    return null;
}
function M(e) {
    let { link: t, directLink: n, inlineStoreParams: i, trackOverlayEvent: r } = e;
    h.OO.getConfig({ location: "quest_open_game_link" }).enabled, (0, o.A)(t);
}
function P(e, t) {
    let n,
        i,
        s,
        l = (0, p.Jx)(e.config),
        o = null == (n = e.config.ctaConfig) ? null : v({ url: (0, p.Jx)(e.config), android: n.android, ios: n.ios });
    null != o && (l = o),
        (function (e) {
            try {
                return new URL(e).searchParams.has("dclid");
            } catch {
                return !1;
            }
        })(l) &&
            (l = (function (e, t) {
                try {
                    let n = new URL(e);
                    return n.searchParams.set("dclid", t), n.toString();
                } catch {
                    return e;
                }
            })(l, (s = (0, r.A)()))),
        (0, I.E5)(I.kI.STEP_3_CLICKED_EXTERNAL, "open_game_link_directly")
            ? (0, d.r)({
                  type: c.F.CLICK_EXTERNAL_ADVERTISER_CTA,
                  adCreativeType: a.p.QUEST,
                  adCreativeId: e.id,
                  questContentCTA: t.ctaContent,
                  surfaceId: t.content,
                  sourceQuestContent: t.sourceQuestContent,
                  questContentPosition: t.position,
                  impressionId: t.impressionId,
                  clickId: s,
              })
            : (0, f.Y5)({
                  questId: e.id,
                  questContent: t.content,
                  questContentCTA: t.ctaContent,
                  questContentPosition: t.position,
                  impressionId: t.impressionId,
                  sourceQuestContent: t.sourceQuestContent,
                  clickId: s,
              }),
        E._.dispatch(g.jej.QUEST_GAME_LINK_OPENED),
        M({
            link: l,
            directLink: o,
            inlineStoreParams:
                null == (i = e.config.ctaConfig)
                    ? null
                    : b({ url: (0, p.Jx)(e.config), android: i.android, ios: i.ios }),
            trackOverlayEvent: (n, i, r) => (0, f.eA)(e, t, i, n, r),
        });
}
function U(e, t) {
    let { adContentId: n, adCreativeType: i, cta: r } = e,
        a = r.url,
        s = v(r);
    null != s && (a = s),
        (0, I.E5)(I.kI.STEP_3_CLICKED_EXTERNAL, "open_ad_game_link_directly")
            ? (0, d.r)({
                  type: c.F.CLICK_EXTERNAL_ADVERTISER_CTA,
                  adCreativeType: i,
                  adCreativeId: n,
                  questContentCTA: t.ctaContent,
                  surfaceId: t.content,
                  sourceQuestContent: t.sourceQuestContent,
                  questContentPosition: t.position,
                  impressionId: t.impressionId,
              })
            : (0, f.vK)({
                  adContentId: n,
                  adCreativeType: i,
                  questContent: t.content,
                  questContentCTA: t.ctaContent,
                  questContentPosition: t.position,
                  impressionId: t.impressionId,
                  sourceQuestContent: t.sourceQuestContent,
              }),
        E._.dispatch(g.jej.QUEST_GAME_LINK_OPENED),
        M({
            link: a,
            directLink: s,
            inlineStoreParams: b(r),
            trackOverlayEvent: (e, r, a) => (0, f.YE)({ adContentId: n, adCreativeType: i }, t, r, e, a),
        });
}
function w(e, t) {
    let { quest: i } = e;
    (0, I.E5)(I.kI.STEP_2_CLICKED_INTERNAL, "open_console_connection_settings")
        ? (0, d.r)({
              type: c.F.CLICK_INTERNAL,
              adCreativeType: a.p.QUEST,
              adCreativeId: i.id,
              questContentCTA: t.ctaContent,
              surfaceId: t.content,
              sourceQuestContent: t.sourceQuestContent,
              impressionId: t.impressionId,
              questContentPosition: t.position,
          })
        : (0, f.Y5)({
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
                e(_.X.CONNECTIONS_CATEGORY);
            }
        })();
}
function G(e, t) {
    let { quest: n } = e;
    (0, I.E5)(I.kI.STEP_2_CLICKED_INTERNAL, "open_add_console_connection_modal")
        ? (0, d.r)({
              type: c.F.CLICK_INTERNAL,
              adCreativeType: a.p.QUEST,
              adCreativeId: n.id,
              questContentCTA: t.ctaContent,
              surfaceId: t.content,
              sourceQuestContent: t.sourceQuestContent,
              impressionId: t.impressionId,
              questContentPosition: t.position,
              questContentRowIndex: t.rowIndex,
          })
        : (0, f.Y5)({
              questId: n.id,
              questContent: t.content,
              questContentPosition: t.position,
              questContentRowIndex: t.rowIndex,
              questContentCTA: t.ctaContent,
              impressionId: t.impressionId,
              sourceQuestContent: t.sourceQuestContent,
          });
    let i = C(n);
    if (1 === i.length) return (0, u.A)({ platformType: i.at(0) });
    l.h.dispatch({
        type: "CONNECTIONS_GRID_MODAL_SHOW",
        onComplete: (e) => (0, u.A)({ platformType: e }),
        includedPlatformTypes: new Set(i),
        includeApplicationConnections: !1,
    });
}
function x(e, t, n) {
    let { quest: i } = e;
    return (
        (0, I.E5)(I.kI.STEP_2_CLICKED_INTERNAL, "open_single_console_connection_modal")
            ? (0, d.r)({
                  type: c.F.CLICK_INTERNAL,
                  adCreativeType: a.p.QUEST,
                  adCreativeId: i.id,
                  questContentCTA: t.ctaContent,
                  surfaceId: t.content,
                  sourceQuestContent: t.sourceQuestContent,
                  impressionId: t.impressionId,
                  questContentPosition: t.position,
                  questContentRowIndex: t.rowIndex,
              })
            : (0, f.Y5)({
                  questId: i.id,
                  questContent: t.content,
                  questContentPosition: t.position,
                  questContentRowIndex: t.rowIndex,
                  questContentCTA: t.ctaContent,
                  impressionId: t.impressionId,
                  sourceQuestContent: t.sourceQuestContent,
              }),
        (0, u.A)({ platformType: n })
    );
}
