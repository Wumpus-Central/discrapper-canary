l.d(t, {
    N9: () => h,
    Z1: () => m,
    dR: () => s,
    jJ: () => g,
    lD: () => a,
    p9: () => v,
    qO: () => A,
    tJ: () => _,
    uE: () => I,
    xD: () => f,
    xP: () => c,
});
var i = l(353640),
    n = l(873298),
    d = l(885386),
    u = l(287809);
let r = { nickname: void 0, dmsAllowed: !d.Zt.getSetting() };
function o(e) {
    let t = d._Z.getSetting();
    return t !== n.Qd.ACTIVITY_STATUS_ON && (t !== n.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS || null == e || !(e > 200));
}
let a = (0, i.v)((e) => ({
        nickname: r.nickname,
        dmsAllowed: r.dmsAllowed,
        showActivity: !0,
        inviteCode: void 0,
        guildId: void 0,
        touched: !1,
        setNickname: (t) => e((e) => ({ ...e, nickname: t, touched: !0 })),
        setDmsAllowed: (t) => e((e) => ({ ...e, dmsAllowed: t, touched: !0 })),
        setShowActivity: (t) => e((e) => ({ ...e, showActivity: t, touched: !0 })),
        setInviteCode: (t) => e((e) => ({ ...e, inviteCode: t, touched: !0 })),
        setGuildId: (t) => e((e) => ({ ...e, guildId: t, touched: !0 })),
        initialize: (t, l, i) =>
            e((e) => ({
                ...e,
                guildSize: t,
                inviteCode: l,
                guildId: i,
                showActivity: o(t),
                dmsAllowed: !d.Zt.getSetting(),
                touched: !1,
            })),
        reset: () =>
            e((e) => ({
                nickname: r.nickname,
                dmsAllowed: r.dmsAllowed,
                showActivity: o(e.guildSize),
                inviteCode: void 0,
                guildId: void 0,
                guildSize: e.guildSize,
                touched: !1,
            })),
    })),
    s = (e, t, l) => {
        a.getState().initialize(e, t, l);
    },
    c = () => {
        a.getState().reset();
    },
    A = () => {
        let e = a.getState();
        return e.nickname !== r.nickname || e.dmsAllowed !== r.dmsAllowed || e.showActivity !== o(e.guildSize);
    },
    v = () => a.getState().inviteCode,
    f = () => a.getState().guildId,
    g = () => a.getState().touched,
    m = () => a.getState().dmsAllowed,
    _ = () => a.getState().nickname,
    h = () => a.getState().showActivity,
    I = () => {
        let { nickname: e } = a();
        if (null != e && "" !== e.trim()) return e;
        let t = u.default.getCurrentUser();
        return t?.globalName ?? t?.username ?? "";
    };
