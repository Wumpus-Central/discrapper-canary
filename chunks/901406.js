"use strict";
n.d(t, {
    $J: () => I,
    IG: () => S,
    UR: () => m,
    W1: () => A,
    _Q: () => C,
    b6: () => v,
    bg: () => g,
    pu: () => y,
    se: () => O,
    v0: () => T,
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
    o = n(773952),
    l = n(780964),
    u = n(625494),
    c = n(723702),
    d = n(561844),
    _ = n(651892),
    f = n(792620),
    h = n(190107),
    p = n(652215),
    E = n(375708);
function m(e) {
    let t = (0, f.t)({ quest: e }) || (0, f.fE)({ quest: e }),
        n = (0, f.uD)(e),
        i = [];
    return t && i.push(h.fO.DESKTOP), n && i.push(h.fO.CONSOLE), i;
}
function g(e) {
    let t = Object.keys(e.config.taskConfigV2.tasks),
        n = [];
    for (let e of t)
        switch (e) {
            case r.n.PLAY_ON_XBOX:
                n.push(p.fg2.XBOX);
                break;
            case r.n.PLAY_ON_PLAYSTATION:
                n.push(p.fg2.PLAYSTATION);
        }
    return n;
}
function A(e) {
    let t = (0, f.vv)(e),
        n = (0, f.vl)(e);
    return t || n;
}
function I(e) {
    return "xbox" === e.connected_account_type ? p.fg2.XBOX : p.fg2.PLAYSTATION;
}
function T(e, t) {
    let { platformType: n, quest: i } = e;
    (0, d.Y5)({
        questId: i.id,
        questContent: t.content,
        sourceQuestContent: t.sourceQuestContent,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
    }),
        (0, o.A)({ platformType: n, location: t.ctaContent });
}
function S(e) {
    return I(e) === p.fg2.XBOX ? E.t["mytEv+"] : E.t.iDiwby;
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
function y(e, t) {
    let n,
        r,
        s = (0, _.Jx)(e.config),
        o = null == (n = e.config.ctaConfig) ? null : N({ url: (0, _.Jx)(e.config), android: n.android, ios: n.ios });
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
        (0, d.Y5)({
            questId: e.id,
            questContent: t.content,
            questContentCTA: t.ctaContent,
            questContentPosition: t.position,
            impressionId: t.impressionId,
            sourceQuestContent: t.sourceQuestContent,
            clickId: r,
        }),
        u._.dispatch(p.jej.QUEST_GAME_LINK_OPENED),
        (0, a.A)(s);
}
function C(e, t) {
    let { adContentId: n, adCreativeType: i, cta: r } = e,
        s = r.url,
        o = N(r);
    null != o && (s = o),
        (0, d.vK)({
            adContentId: n,
            adCreativeType: i,
            questContent: t.content,
            questContentCTA: t.ctaContent,
            questContentPosition: t.position,
            impressionId: t.impressionId,
            sourceQuestContent: t.sourceQuestContent,
        }),
        u._.dispatch(p.jej.QUEST_GAME_LINK_OPENED),
        (0, a.A)(s);
}
function v(e, t) {
    let { quest: i } = e;
    (0, d.Y5)({
        questId: i.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    }),
        (function () {
            {
                let { openUserSettings: e } = n(858897);
                e(l.X.CONNECTIONS_PANEL);
            }
        })();
}
function O(e, t) {
    let { quest: n } = e;
    (0, d.Y5)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentRowIndex: t.rowIndex,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    });
    let i = g(n);
    if (1 === i.length) return (0, o.A)({ platformType: i.at(0) });
    s.h.dispatch({
        type: "CONNECTIONS_GRID_MODAL_SHOW",
        onComplete: (e) => (0, o.A)({ platformType: e }),
        includedPlatformTypes: new Set(i),
        includeApplicationConnections: !1,
    });
}
