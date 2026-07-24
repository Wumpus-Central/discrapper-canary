"use strict";
n.d(t, {
    N9: () => p,
    Z1: () => I,
    dR: () => c,
    jJ: () => h,
    lD: () => d,
    p9: () => E,
    qO: () => _,
    tJ: () => f,
    uE: () => T,
    xD: () => A,
    xP: () => u,
});
var i = n(353640),
    r = n(873298),
    a = n(885386),
    s = n(287809);
let l = { nickname: void 0, dmsAllowed: !a.Zt.getSetting() };
function o(e) {
    let t = a._Z.getSetting();
    return t !== r.Qd.ACTIVITY_STATUS_ON && (t !== r.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS || null == e || !(e > 200));
}
let d = (0, i.v)((e) => ({
    nickname: l.nickname,
    dmsAllowed: l.dmsAllowed,
    showActivity: !0,
    inviteCode: void 0,
    guildId: void 0,
    touched: !1,
    setNickname: (t) => e((e) => ({ ...e, nickname: t, touched: !0 })),
    setDmsAllowed: (t) => e((e) => ({ ...e, dmsAllowed: t, touched: !0 })),
    setShowActivity: (t) => e((e) => ({ ...e, showActivity: t, touched: !0 })),
    setInviteCode: (t) => e((e) => ({ ...e, inviteCode: t, touched: !0 })),
    setGuildId: (t) => e((e) => ({ ...e, guildId: t, touched: !0 })),
    initialize: (t, n, i) =>
        e((e) => ({
            ...e,
            guildSize: t,
            inviteCode: n,
            guildId: i,
            showActivity: o(t),
            dmsAllowed: !a.Zt.getSetting(),
            touched: !1,
        })),
    reset: () =>
        e((e) => ({
            nickname: l.nickname,
            dmsAllowed: l.dmsAllowed,
            showActivity: o(e.guildSize),
            inviteCode: void 0,
            guildId: void 0,
            guildSize: e.guildSize,
            touched: !1,
        })),
}));
function c(e, t, n) {
    d.getState().initialize(e, t, n);
}
function u() {
    d.getState().reset();
}
function _() {
    let e = d.getState();
    return e.nickname !== l.nickname || e.dmsAllowed !== l.dmsAllowed || e.showActivity !== o(e.guildSize);
}
function E() {
    return d.getState().inviteCode;
}
function A() {
    return d.getState().guildId;
}
function h() {
    return d.getState().touched;
}
function I() {
    return d.getState().dmsAllowed;
}
function f() {
    return d.getState().nickname;
}
function p() {
    return d.getState().showActivity;
}
function T() {
    let { nickname: e } = d();
    if (null != e && "" !== e.trim()) return e;
    let t = s.default.getCurrentUser();
    return t?.globalName ?? t?.username ?? "";
}
