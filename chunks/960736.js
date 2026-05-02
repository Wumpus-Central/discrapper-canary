"use strict";
n.d(t, {
    N9: () => g,
    Z1: () => E,
    dR: () => c,
    jJ: () => p,
    lD: () => u,
    p9: () => f,
    qO: () => _,
    tJ: () => m,
    uE: () => A,
    xD: () => h,
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
    })),
    c = (e, t, n) => {
        u.getState().initialize(e, t, n);
    },
    d = () => {
        u.getState().reset();
    },
    _ = () => {
        let e = u.getState();
        return e.nickname !== o.nickname || e.dmsAllowed !== o.dmsAllowed || e.showActivity !== l(e.guildSize);
    },
    f = () => u.getState().inviteCode,
    h = () => u.getState().guildId,
    p = () => u.getState().touched,
    E = () => u.getState().dmsAllowed,
    m = () => u.getState().nickname,
    g = () => u.getState().showActivity,
    A = () => {
        let { nickname: e } = u();
        if (null != e && "" !== e.trim()) return e;
        let t = a.default.getCurrentUser();
        return t?.globalName ?? t?.username ?? "";
    };
