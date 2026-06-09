"use strict";
n.d(t, {
    $J: () => y,
    IG: () => v,
    Ps: () => L,
    UR: () => A,
    W1: () => T,
    WU: () => S,
    _Q: () => O,
    b6: () => b,
    bg: () => I,
    pu: () => R,
    se: () => D,
    v0: () => N,
}),
    n(321073),
    n(323874),
    n(14289),
    n(35956),
    n(134528),
    n(947204);
var i,
    r = n(835245),
    s = n(412703),
    a = n(228366),
    o = n(975807),
    l = n(968309),
    u = n(780964),
    c = n(625494),
    d = n(723702),
    _ = n(192444),
    h = n(561844),
    f = n(651892),
    p = n(792620),
    E = n(190107),
    m = n(652215),
    g = n(375708);
function A(e) {
    let t = (0, p.t)({ quest: e }) || (0, p.fE)({ quest: e }) || (0, p.I6)(e),
        n = (0, p.uD)(e),
        i = [];
    return t && i.push(E.fO.DESKTOP), n && i.push(E.fO.CONSOLE), i;
}
function I(e) {
    let t = Object.keys(e.config.taskConfigV2.tasks),
        n = [];
    for (let e of t)
        switch (e) {
            case s.n.PLAY_ON_XBOX:
                n.push(m.fg2.XBOX);
                break;
            case s.n.PLAY_ON_PLAYSTATION:
                n.push(m.fg2.PLAYSTATION);
        }
    return n;
}
function T(e) {
    let t = (0, p.vv)(e),
        n = (0, p.vl)(e);
    return t || n;
}
var S = (((i = {}).DESKTOP = "desktop"), (i.XBOX = "xbox"), (i.PLAYSTATION = "playstation"), i);
function y(e) {
    return "xbox" === e.connected_account_type ? m.fg2.XBOX : m.fg2.PLAYSTATION;
}
function N(e, t) {
    let { platformType: n, quest: i } = e;
    (0, h.Y5)({
        questId: i.id,
        questContent: t.content,
        sourceQuestContent: t.sourceQuestContent,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
    }),
        (0, l.A)({ platformType: n, location: t.ctaContent });
}
function v(e) {
    return y(e) === m.fg2.XBOX ? g.t["mytEv+"] : g.t.iDiwby;
}
function C(e) {
    if (((0, d.isIOS)() || "ios" === (0, d.getOS)()) && e.ios?.iosAppId != null) {
        let t = e.ios.iosAppId.startsWith("id") ? e.ios.iosAppId : `id${e.ios.iosAppId}`;
        return `https://apps.apple.com/app/${t}`;
    }
    return ((0, d.isAndroid)() || "android" === (0, d.getOS)()) && e.android?.androidAppId != null
        ? `https://play.google.com/store/apps/details?id=${e.android.androidAppId}`
        : null;
}
function R(e, t) {
    let n,
        i,
        s = (0, f.Jx)(e.config),
        a = null == (n = e.config.ctaConfig) ? null : C({ url: (0, f.Jx)(e.config), android: n.android, ios: n.ios });
    null != a && (s = a),
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
            })(s, (i = (0, r.A)()))),
        (0, h.Y5)({
            questId: e.id,
            questContent: t.content,
            questContentCTA: t.ctaContent,
            questContentPosition: t.position,
            impressionId: t.impressionId,
            sourceQuestContent: t.sourceQuestContent,
            clickId: i,
        }),
        c._.dispatch(m.jej.QUEST_GAME_LINK_OPENED),
        _.OO.getConfig({ location: "quest_open_game_link" }).enabled,
        (0, o.A)(s);
}
function O(e, t) {
    let { adContentId: n, adCreativeType: i, cta: r } = e,
        s = r.url,
        a = C(r);
    null != a && (s = a),
        (0, h.vK)({
            adContentId: n,
            adCreativeType: i,
            questContent: t.content,
            questContentCTA: t.ctaContent,
            questContentPosition: t.position,
            impressionId: t.impressionId,
            sourceQuestContent: t.sourceQuestContent,
        }),
        c._.dispatch(m.jej.QUEST_GAME_LINK_OPENED),
        _.OO.getConfig({ location: "quest_open_game_link" }).enabled,
        (0, o.A)(s);
}
function b(e, t) {
    let { quest: i } = e;
    (0, h.Y5)({
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
                e(u.X.CONNECTIONS_PANEL);
            }
        })();
}
function D(e, t) {
    let { quest: n } = e;
    (0, h.Y5)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentRowIndex: t.rowIndex,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    });
    let i = I(n);
    if (1 === i.length) return (0, l.A)({ platformType: i.at(0) });
    a.h.dispatch({
        type: "CONNECTIONS_GRID_MODAL_SHOW",
        onComplete: (e) => (0, l.A)({ platformType: e }),
        includedPlatformTypes: new Set(i),
        includeApplicationConnections: !1,
    });
}
function L(e, t, n) {
    let { quest: i } = e;
    return (
        (0, h.Y5)({
            questId: i.id,
            questContent: t.content,
            questContentPosition: t.position,
            questContentRowIndex: t.rowIndex,
            questContentCTA: t.ctaContent,
            impressionId: t.impressionId,
            sourceQuestContent: t.sourceQuestContent,
        }),
        (0, l.A)({ platformType: n })
    );
}
