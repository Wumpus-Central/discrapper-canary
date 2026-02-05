i.d(t, {
    N9: () => _,
    Z1: () => I,
    dR: () => a,
    jJ: () => A,
    lD: () => u,
    p9: () => h,
    qO: () => f,
    tJ: () => v,
    uE: () => S,
    xD: () => g,
    xP: () => c,
});
var l = i(353640),
    n = i(873298),
    r = i(253932),
    s = i(287809);
let d = { nickname: void 0, dmsAllowed: !r.Zt.getSetting() };
function o(e) {
    let t = r._Z.getSetting();
    return t !== n.Qd.ACTIVITY_STATUS_ON && (t !== n.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS || null == e || !(e > 200));
}
let u = (0, l.v)((e) => ({
        nickname: d.nickname,
        dmsAllowed: d.dmsAllowed,
        showActivity: !0,
        inviteCode: void 0,
        guildId: void 0,
        touched: !1,
        setNickname: (t) => e((e) => ({ ...e, nickname: t, touched: !0 })),
        setDmsAllowed: (t) => e((e) => ({ ...e, dmsAllowed: t, touched: !0 })),
        setShowActivity: (t) => e((e) => ({ ...e, showActivity: t, touched: !0 })),
        setInviteCode: (t) => e((e) => ({ ...e, inviteCode: t, touched: !0 })),
        setGuildId: (t) => e((e) => ({ ...e, guildId: t, touched: !0 })),
        initialize: (t, i, l) =>
            e((e) => ({
                ...e,
                guildSize: t,
                inviteCode: i,
                guildId: l,
                showActivity: o(t),
                dmsAllowed: !r.Zt.getSetting(),
                touched: !1,
            })),
        reset: () =>
            e((e) => ({
                nickname: d.nickname,
                dmsAllowed: d.dmsAllowed,
                showActivity: o(e.guildSize),
                inviteCode: void 0,
                guildId: void 0,
                guildSize: e.guildSize,
                touched: !1,
            })),
    })),
    a = (e, t, i) => {
        u.getState().initialize(e, t, i);
    },
    c = () => {
        u.getState().reset();
    },
    f = () => {
        let e = u.getState();
        return e.nickname !== d.nickname || e.dmsAllowed !== d.dmsAllowed || e.showActivity !== o(e.guildSize);
    },
    h = () => u.getState().inviteCode,
    g = () => u.getState().guildId,
    A = () => u.getState().touched,
    I = () => u.getState().dmsAllowed,
    v = () => u.getState().nickname,
    _ = () => u.getState().showActivity,
    S = () => {
        let { nickname: e } = u();
        if (null != e && "" !== e.trim()) return e;
        let t = s.default.getCurrentUser();
        return t?.globalName ?? t?.username ?? "";
    };
