"use strict";
n.d(t, {
    $J: () => R,
    IG: () => b,
    Ps: () => x,
    UR: () => N,
    W1: () => y,
    WU: () => v,
    _Q: () => P,
    b6: () => w,
    bg: () => C,
    pu: () => D,
    se: () => M,
    v0: () => O,
}),
    n(321073),
    n(323874),
    n(14289),
    n(35956),
    n(134528),
    n(947204);
var i,
    r = n(835245),
    s = n(323889),
    a = n(412703),
    o = n(228366),
    l = n(975807),
    u = n(274670),
    d = n(144779),
    c = n(968309),
    _ = n(780964),
    h = n(625494),
    f = n(723702),
    E = n(192444),
    p = n(104886),
    m = n(561844),
    g = n(651892),
    A = n(792620),
    I = n(190107),
    T = n(652215),
    S = n(375708);
function N(e) {
    let t = (0, A.t)({ quest: e }) || (0, A.fE)({ quest: e }) || (0, A.I6)(e),
        n = (0, A.uD)(e),
        i = [];
    return t && i.push(I.fO.DESKTOP), n && i.push(I.fO.CONSOLE), i;
}
function C(e) {
    let t = Object.keys(e.config.taskConfigV2.tasks),
        n = [];
    for (let e of t)
        switch (e) {
            case a.n.PLAY_ON_XBOX:
                n.push(T.fg2.XBOX);
                break;
            case a.n.PLAY_ON_PLAYSTATION:
                n.push(T.fg2.PLAYSTATION);
        }
    return n;
}
function y(e) {
    let t = (0, A.vv)(e),
        n = (0, A.vl)(e);
    return t || n;
}
var v = (((i = {}).DESKTOP = "desktop"), (i.XBOX = "xbox"), (i.PLAYSTATION = "playstation"), i);
function R(e) {
    return "xbox" === e.connected_account_type ? T.fg2.XBOX : T.fg2.PLAYSTATION;
}
function O(e, t) {
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
        : (0, m.Y5)({
              questId: i.id,
              questContent: t.content,
              sourceQuestContent: t.sourceQuestContent,
              questContentCTA: t.ctaContent,
              impressionId: t.impressionId,
          }),
        (0, c.A)({ platformType: n, location: t.ctaContent });
}
function b(e) {
    return R(e) === T.fg2.XBOX ? S.t["mytEv+"] : S.t.iDiwby;
}
function L(e) {
    if (((0, f.isIOS)() || "ios" === (0, f.getOS)()) && e.ios?.iosAppId != null) {
        let t = e.ios.iosAppId.startsWith("id") ? e.ios.iosAppId : `id${e.ios.iosAppId}`;
        return `https://apps.apple.com/app/${t}`;
    }
    return ((0, f.isAndroid)() || "android" === (0, f.getOS)()) && e.android?.androidAppId != null
        ? `https://play.google.com/store/apps/details?id=${e.android.androidAppId}`
        : null;
}
function D(e, t) {
    let n,
        i,
        a = (0, g.Jx)(e.config),
        o = null == (n = e.config.ctaConfig) ? null : L({ url: (0, g.Jx)(e.config), android: n.android, ios: n.ios });
    null != o && (a = o),
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
            })(a, (i = (0, r.A)()))),
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
                  clickId: i,
              })
            : (0, m.Y5)({
                  questId: e.id,
                  questContent: t.content,
                  questContentCTA: t.ctaContent,
                  questContentPosition: t.position,
                  impressionId: t.impressionId,
                  sourceQuestContent: t.sourceQuestContent,
                  clickId: i,
              }),
        h._.dispatch(T.jej.QUEST_GAME_LINK_OPENED),
        E.OO.getConfig({ location: "quest_open_game_link" }).enabled,
        (0, l.A)(a);
}
function P(e, t) {
    let { adContentId: n, adCreativeType: i, cta: r } = e,
        s = r.url,
        a = L(r);
    null != a && (s = a),
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
            : (0, m.vK)({
                  adContentId: n,
                  adCreativeType: i,
                  questContent: t.content,
                  questContentCTA: t.ctaContent,
                  questContentPosition: t.position,
                  impressionId: t.impressionId,
                  sourceQuestContent: t.sourceQuestContent,
              }),
        h._.dispatch(T.jej.QUEST_GAME_LINK_OPENED),
        E.OO.getConfig({ location: "quest_open_game_link" }).enabled,
        (0, l.A)(s);
}
function w(e, t) {
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
                e(_.X.CONNECTIONS_PANEL);
            }
        })();
}
function M(e, t) {
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
        : (0, m.Y5)({
              questId: n.id,
              questContent: t.content,
              questContentPosition: t.position,
              questContentRowIndex: t.rowIndex,
              questContentCTA: t.ctaContent,
              impressionId: t.impressionId,
              sourceQuestContent: t.sourceQuestContent,
          });
    let i = C(n);
    if (1 === i.length) return (0, c.A)({ platformType: i.at(0) });
    o.h.dispatch({
        type: "CONNECTIONS_GRID_MODAL_SHOW",
        onComplete: (e) => (0, c.A)({ platformType: e }),
        includedPlatformTypes: new Set(i),
        includeApplicationConnections: !1,
    });
}
function x(e, t, n) {
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
            : (0, m.Y5)({
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
