"use strict";
n.d(t, {
    N9: () => g,
    Z1: () => E,
    dR: () => c,
    jJ: () => p,
    lD: () => u,
    p9: () => h,
    qO: () => _,
    tJ: () => m,
    uE: () => A,
    xD: () => f,
    xP: () => d,
});
var i = n(353640),
    r = n(873298),
    s = n(885386),
    a = n(287809);
let o = { nickname: void 0, dmsAllowed: !s.Zt.getSetting() };
function l(e) {
    let t = s._Z.getSetting();
    return t !== r.Qd.ACTIVITY_STATUS_ON && (t !== r.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS || null == e || !(e > 200));
}
let u = (0, i.v)((e) => ({
    nickname: o.nickname,
    dmsAllowed: o.dmsAllowed,
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
            showActivity: l(t),
            dmsAllowed: !s.Zt.getSetting(),
            touched: !1,
        })),
    reset: () =>
        e((e) => ({
            nickname: o.nickname,
            dmsAllowed: o.dmsAllowed,
            showActivity: l(e.guildSize),
            inviteCode: void 0,
            guildId: void 0,
            guildSize: e.guildSize,
            touched: !1,
        })),
}));
function c(e, t, n) {
    u.getState().initialize(e, t, n);
}
function d() {
    u.getState().reset();
}
function _() {
    let e = u.getState();
    return e.nickname !== o.nickname || e.dmsAllowed !== o.dmsAllowed || e.showActivity !== l(e.guildSize);
}
function h() {
    return u.getState().inviteCode;
}
function f() {
    return u.getState().guildId;
}
function p() {
    return u.getState().touched;
}
function E() {
    return u.getState().dmsAllowed;
}
function m() {
    return u.getState().nickname;
}
function g() {
    return u.getState().showActivity;
}
function A() {
    let { nickname: e } = u();
    if (null != e && "" !== e.trim()) return e;
    let t = a.default.getCurrentUser();
    return t?.globalName ?? t?.username ?? "";
}
