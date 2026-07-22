n.d(t, {
    N9: () => h,
    Z1: () => g,
    dR: () => s,
    jJ: () => _,
    lD: () => c,
    p9: () => f,
    qO: () => A,
    tJ: () => I,
    uE: () => S,
    xD: () => v,
    xP: () => a,
});
var i = n(353640),
    l = n(873298),
    u = n(885386),
    d = n(287809);
let o = { nickname: void 0, dmsAllowed: !u.Zt.getSetting() };
function r(e) {
    let t = u._Z.getSetting();
    return t !== l.Qd.ACTIVITY_STATUS_ON && (t !== l.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS || null == e || !(e > 200));
}
let c = (0, i.v)((e) => ({
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
            showActivity: r(t),
            dmsAllowed: !u.Zt.getSetting(),
            touched: !1,
        })),
    reset: () =>
        e((e) => ({
            nickname: o.nickname,
            dmsAllowed: o.dmsAllowed,
            showActivity: r(e.guildSize),
            inviteCode: void 0,
            guildId: void 0,
            guildSize: e.guildSize,
            touched: !1,
        })),
}));
function s(e, t, n) {
    c.getState().initialize(e, t, n);
}
function a() {
    c.getState().reset();
}
function A() {
    let e = c.getState();
    return e.nickname !== o.nickname || e.dmsAllowed !== o.dmsAllowed || e.showActivity !== r(e.guildSize);
}
function f() {
    return c.getState().inviteCode;
}
function v() {
    return c.getState().guildId;
}
function _() {
    return c.getState().touched;
}
function g() {
    return c.getState().dmsAllowed;
}
function I() {
    return c.getState().nickname;
}
function h() {
    return c.getState().showActivity;
}
function S() {
    let { nickname: e } = c();
    if (null != e && "" !== e.trim()) return e;
    let t = d.default.getCurrentUser();
    return t?.globalName ?? t?.username ?? "";
}
