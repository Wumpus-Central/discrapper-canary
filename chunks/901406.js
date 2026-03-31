"use strict";
n.d(t, {
    $J: () => I,
    IG: () => S,
    UR: () => E,
    W1: () => A,
    b6: () => C,
    bg: () => g,
    pu: () => v,
    se: () => R,
    v0: () => T,
}),
    n(321073),
    n(134528),
    n(947204);
var r = n(412703),
    i = n(73153),
    s = n(975807),
    a = n(882997),
    o = n(780964),
    l = n(203982),
    u = n(723702),
    c = n(245853),
    d = n(561844),
    _ = n(651892),
    f = n(792620),
    p = n(654487),
    h = n(652215),
    m = n(985018);
function E(e) {
    let t = (0, f.t)({ quest: e }) || (0, f.fE)({ quest: e }),
        n = (0, f.uD)(e),
        r = [];
    return t && r.push(p.fO.DESKTOP), n && r.push(p.fO.CONSOLE), r;
}
function g(e) {
    let t = Object.keys(e.config.taskConfigV2.tasks),
        n = [];
    for (let e of t)
        switch (e) {
            case r.n.PLAY_ON_XBOX:
                n.push(h.fg2.XBOX);
                break;
            case r.n.PLAY_ON_PLAYSTATION:
                n.push(h.fg2.PLAYSTATION);
        }
    return n;
}
function A(e) {
    let t = (0, f.vv)(e),
        n = (0, f.vl)(e);
    return t || n;
}
function I(e) {
    return "xbox" === e.connected_account_type ? h.fg2.XBOX : h.fg2.PLAYSTATION;
}
function T(e, t) {
    let { platformType: n, quest: r } = e;
    (0, d.Y5)({
        questId: r.id,
        questContent: t.content,
        sourceQuestContent: t.sourceQuestContent,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
    }),
        (0, a.A)({ platformType: n, location: t.ctaContent });
}
function S(e) {
    return I(e) === h.fg2.XBOX ? m.t["mytEv+"] : m.t.iDiwby;
}
function y(e) {
    let t = e.config.ctaConfig;
    if (null == t) return null;
    if (((0, u.isIOS)() || "ios" === (0, u.getOS)()) && t.ios?.iosAppId != null) {
        let e = t.ios.iosAppId.startsWith("id") ? t.ios.iosAppId : `id${t.ios.iosAppId}`;
        return `https://apps.apple.com/app/${e}`;
    }
    return ((0, u.isAndroid)() || "android" === (0, u.getOS)()) && t.android?.androidAppId != null
        ? `https://play.google.com/store/apps/details?id=${t.android.androidAppId}`
        : null;
}
function v(e, t) {
    let n = (0, _.Jx)(e.config),
        r = y(e);
    null != r && (n = r),
        (0, d.Y5)({
            questId: e.id,
            questContent: t.content,
            questContentCTA: t.ctaContent,
            questContentPosition: t.position,
            impressionId: t.impressionId,
            sourceQuestContent: t.sourceQuestContent,
        }),
        l._.dispatch(h.jej.QUEST_GAME_LINK_OPENED),
        c.YX.getConfig({ location: "quest_open_game_link" }).enabled,
        (0, s.A)(n);
}
function N() {
    {
        let { openUserSettings: e } = n(840065);
        e(o.X.CONNECTIONS_PANEL);
    }
}
function C(e, t) {
    let { quest: n } = e;
    (0, d.Y5)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    }),
        N();
}
function R(e, t) {
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
    let r = g(n);
    if (1 === r.length) return (0, a.A)({ platformType: r.at(0) });
    i.h.dispatch({
        type: "CONNECTIONS_GRID_MODAL_SHOW",
        onComplete: (e) => (0, a.A)({ platformType: e }),
        includedPlatformTypes: new Set(r),
    });
}
