"use strict";
n.d(t, {
    $J: () => A,
    IG: () => T,
    UR: () => m,
    W1: () => E,
    b6: () => C,
    bg: () => g,
    pu: () => S,
    se: () => b,
    v0: () => I,
}),
    n(321073),
    n(134528),
    n(947204);
var r = n(412703),
    i = n(73153),
    a = n(975807),
    s = n(882997),
    o = n(780964),
    l = n(203982),
    u = n(723702),
    c = n(561844),
    d = n(651892),
    _ = n(792620),
    f = n(654487),
    p = n(652215),
    h = n(985018);
function m(e) {
    let t = (0, _.t)({ quest: e }) || (0, _.fE)({ quest: e }),
        n = (0, _.uD)(e),
        r = [];
    return t && r.push(f.fO.DESKTOP), n && r.push(f.fO.CONSOLE), r;
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
function E(e) {
    let t = (0, _.vv)(e),
        n = (0, _.vl)(e);
    return t || n;
}
function A(e) {
    return "xbox" === e.connected_account_type ? p.fg2.XBOX : p.fg2.PLAYSTATION;
}
function I(e, t) {
    let { platformType: n, quest: r } = e;
    (0, c.Y5)({
        questId: r.id,
        questContent: t.content,
        sourceQuestContent: t.sourceQuestContent,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
    }),
        (0, s.A)({ platformType: n, location: t.ctaContent });
}
function T(e) {
    return A(e) === p.fg2.XBOX ? h.t["mytEv+"] : h.t.iDiwby;
}
function y(e) {
    let t = e.config.ctaConfig;
    return null == t
        ? null
        : ((0, u.isIOS)() || "ios" === (0, u.getOS)()) && t.ios?.iosAppId != null
          ? `https://apps.apple.com/app/id${t.ios.iosAppId}`
          : ((0, u.isAndroid)() || "android" === (0, u.getOS)()) && t.android?.androidAppId != null
            ? `https://play.google.com/store/apps/details?id=${t.android.androidAppId}`
            : null;
}
function S(e, t) {
    let n = (0, d.Jx)(e.config),
        r = y(e);
    null != r && (n = r),
        (0, c.Y5)({
            questId: e.id,
            questContent: t.content,
            questContentCTA: t.ctaContent,
            questContentPosition: t.position,
            impressionId: t.impressionId,
            sourceQuestContent: t.sourceQuestContent,
        }),
        l._.dispatch(p.jej.QUEST_GAME_LINK_OPENED),
        (0, a.A)(n);
}
function v() {
    {
        let { openUserSettings: e } = n(840065);
        e(o.X.CONNECTIONS_PANEL, { section: p.nc_.CONNECTIONS });
    }
}
function C(e, t) {
    let { quest: n } = e;
    (0, c.Y5)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    }),
        v();
}
function b(e, t) {
    let { quest: n } = e;
    (0, c.Y5)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentRowIndex: t.rowIndex,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    });
    let r = g(n);
    if (1 === r.length) return (0, s.A)({ platformType: r.at(0) });
    i.h.dispatch({
        type: "CONNECTIONS_GRID_MODAL_SHOW",
        onComplete: (e) => (0, s.A)({ platformType: e }),
        includedPlatformTypes: new Set(r),
    });
}
