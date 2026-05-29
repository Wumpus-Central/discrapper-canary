"use strict";
n.d(t, {
    $J: () => T,
    IG: () => y,
    UR: () => g,
    W1: () => I,
    _Q: () => C,
    b6: () => R,
    bg: () => A,
    pu: () => v,
    se: () => O,
    v0: () => S,
}),
    n(321073),
    n(323874),
    n(14289),
    n(35956),
    n(134528),
    n(947204);
var i = n(835245),
    r = n(412703),
    s = n(228366),
    a = n(975807),
    o = n(968309),
    l = n(780964),
    u = n(625494),
    c = n(723702),
    d = n(192444),
    _ = n(561844),
    h = n(651892),
    f = n(792620),
    p = n(190107),
    E = n(652215),
    m = n(375708);
function g(e) {
    let t = (0, f.t)({ quest: e }) || (0, f.fE)({ quest: e }) || (0, f.I6)(e),
        n = (0, f.uD)(e),
        i = [];
    return t && i.push(p.fO.DESKTOP), n && i.push(p.fO.CONSOLE), i;
}
function A(e) {
    let t = Object.keys(e.config.taskConfigV2.tasks),
        n = [];
    for (let e of t)
        switch (e) {
            case r.n.PLAY_ON_XBOX:
                n.push(E.fg2.XBOX);
                break;
            case r.n.PLAY_ON_PLAYSTATION:
                n.push(E.fg2.PLAYSTATION);
        }
    return n;
}
function I(e) {
    let t = (0, f.vv)(e),
        n = (0, f.vl)(e);
    return t || n;
}
function T(e) {
    return "xbox" === e.connected_account_type ? E.fg2.XBOX : E.fg2.PLAYSTATION;
}
function S(e, t) {
    let { platformType: n, quest: i } = e;
    (0, _.Y5)({
        questId: i.id,
        questContent: t.content,
        sourceQuestContent: t.sourceQuestContent,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
    }),
        (0, o.A)({ platformType: n, location: t.ctaContent });
}
function y(e) {
    return T(e) === E.fg2.XBOX ? m.t["mytEv+"] : m.t.iDiwby;
}
function N(e) {
    if (((0, c.isIOS)() || "ios" === (0, c.getOS)()) && e.ios?.iosAppId != null) {
        let t = e.ios.iosAppId.startsWith("id") ? e.ios.iosAppId : `id${e.ios.iosAppId}`;
        return `https://apps.apple.com/app/${t}`;
    }
    return ((0, c.isAndroid)() || "android" === (0, c.getOS)()) && e.android?.androidAppId != null
        ? `https://play.google.com/store/apps/details?id=${e.android.androidAppId}`
        : null;
}
function v(e, t) {
    let n,
        r,
        s = (0, h.Jx)(e.config),
        o = null == (n = e.config.ctaConfig) ? null : N({ url: (0, h.Jx)(e.config), android: n.android, ios: n.ios });
    null != o && (s = o),
        (function (e) {
            try {
                return new URL(e).searchParams.has("dclid");
            } catch {
                return !1;
            }
        })(s) &&
            (s = (function (e, t) {
                try {
                    let n = new URL(e);
                    return n.searchParams.set("dclid", t), n.toString();
                } catch {
                    return e;
                }
            })(s, (r = (0, i.A)()))),
        (0, _.Y5)({
            questId: e.id,
            questContent: t.content,
            questContentCTA: t.ctaContent,
            questContentPosition: t.position,
            impressionId: t.impressionId,
            sourceQuestContent: t.sourceQuestContent,
            clickId: r,
        }),
        u._.dispatch(E.jej.QUEST_GAME_LINK_OPENED),
        d.OO.getConfig({ location: "quest_open_game_link" }).enabled,
        (0, a.A)(s);
}
function C(e, t) {
    let { adContentId: n, adCreativeType: i, cta: r } = e,
        s = r.url,
        o = N(r);
    null != o && (s = o),
        (0, _.vK)({
            adContentId: n,
            adCreativeType: i,
            questContent: t.content,
            questContentCTA: t.ctaContent,
            questContentPosition: t.position,
            impressionId: t.impressionId,
            sourceQuestContent: t.sourceQuestContent,
        }),
        u._.dispatch(E.jej.QUEST_GAME_LINK_OPENED),
        d.OO.getConfig({ location: "quest_open_game_link" }).enabled,
        (0, a.A)(s);
}
function R(e, t) {
    let { quest: i } = e;
    (0, _.Y5)({
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
                e(l.X.CONNECTIONS_PANEL);
            }
        })();
}
function O(e, t) {
    let { quest: n } = e;
    (0, _.Y5)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentRowIndex: t.rowIndex,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    });
    let i = A(n);
    if (1 === i.length) return (0, o.A)({ platformType: i.at(0) });
    s.h.dispatch({
        type: "CONNECTIONS_GRID_MODAL_SHOW",
        onComplete: (e) => (0, o.A)({ platformType: e }),
        includedPlatformTypes: new Set(i),
        includeApplicationConnections: !1,
    });
}
