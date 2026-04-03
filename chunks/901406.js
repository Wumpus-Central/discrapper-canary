"use strict";
n.d(t, {
    $J: () => T,
    IG: () => y,
    UR: () => g,
    W1: () => I,
    b6: () => b,
    bg: () => A,
    pu: () => R,
    se: () => D,
    v0: () => S,
}),
    n(321073),
    n(323874),
    n(14289),
    n(35956),
    n(134528),
    n(947204);
var r = n(835245),
    i = n(412703),
    s = n(73153),
    a = n(975807),
    o = n(882997),
    l = n(780964),
    u = n(203982),
    c = n(723702),
    d = n(245853),
    _ = n(561844),
    f = n(651892),
    p = n(792620),
    h = n(654487),
    m = n(652215),
    E = n(985018);
function g(e) {
    let t = (0, p.t)({ quest: e }) || (0, p.fE)({ quest: e }),
        n = (0, p.uD)(e),
        r = [];
    return t && r.push(h.fO.DESKTOP), n && r.push(h.fO.CONSOLE), r;
}
function A(e) {
    let t = Object.keys(e.config.taskConfigV2.tasks),
        n = [];
    for (let e of t)
        switch (e) {
            case i.n.PLAY_ON_XBOX:
                n.push(m.fg2.XBOX);
                break;
            case i.n.PLAY_ON_PLAYSTATION:
                n.push(m.fg2.PLAYSTATION);
        }
    return n;
}
function I(e) {
    let t = (0, p.vv)(e),
        n = (0, p.vl)(e);
    return t || n;
}
function T(e) {
    return "xbox" === e.connected_account_type ? m.fg2.XBOX : m.fg2.PLAYSTATION;
}
function S(e, t) {
    let { platformType: n, quest: r } = e;
    (0, _.Y5)({
        questId: r.id,
        questContent: t.content,
        sourceQuestContent: t.sourceQuestContent,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
    }),
        (0, o.A)({ platformType: n, location: t.ctaContent });
}
function y(e) {
    return T(e) === m.fg2.XBOX ? E.t["mytEv+"] : E.t.iDiwby;
}
function v(e) {
    let t = e.config.ctaConfig;
    if (null == t) return null;
    if (((0, c.isIOS)() || "ios" === (0, c.getOS)()) && t.ios?.iosAppId != null) {
        let e = t.ios.iosAppId.startsWith("id") ? t.ios.iosAppId : `id${t.ios.iosAppId}`;
        return `https://apps.apple.com/app/${e}`;
    }
    return ((0, c.isAndroid)() || "android" === (0, c.getOS)()) && t.android?.androidAppId != null
        ? `https://play.google.com/store/apps/details?id=${t.android.androidAppId}`
        : null;
}
function N(e) {
    try {
        return new URL(e).searchParams.has("dclid");
    } catch {
        return !1;
    }
}
function C(e, t) {
    try {
        let n = new URL(e);
        return n.searchParams.set("dclid", t), n.toString();
    } catch {
        return e;
    }
}
function R(e, t) {
    let n,
        i = (0, f.Jx)(e.config),
        s = v(e);
    null != s && (i = s),
        N(i) && (i = C(i, (n = (0, r.A)()))),
        (0, _.Y5)({
            questId: e.id,
            questContent: t.content,
            questContentCTA: t.ctaContent,
            questContentPosition: t.position,
            impressionId: t.impressionId,
            sourceQuestContent: t.sourceQuestContent,
            clickId: n,
        }),
        u._.dispatch(m.jej.QUEST_GAME_LINK_OPENED),
        d.YX.getConfig({ location: "quest_open_game_link" }).enabled,
        (0, a.A)(i);
}
function O() {
    {
        let { openUserSettings: e } = n(858897);
        e(l.X.CONNECTIONS_PANEL);
    }
}
function b(e, t) {
    let { quest: n } = e;
    (0, _.Y5)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent,
        impressionId: t.impressionId,
        sourceQuestContent: t.sourceQuestContent,
    }),
        O();
}
function D(e, t) {
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
    let r = A(n);
    if (1 === r.length) return (0, o.A)({ platformType: r.at(0) });
    s.h.dispatch({
        type: "CONNECTIONS_GRID_MODAL_SHOW",
        onComplete: (e) => (0, o.A)({ platformType: e }),
        includedPlatformTypes: new Set(r),
    });
}
