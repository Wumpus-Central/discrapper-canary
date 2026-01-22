n.d(t, {
    KS: () => u,
    NW: () => l,
    Qi: () => c,
    _u: () => d,
    gk: () => f,
    jb: () => o,
});
var r = n(253932),
    i = n(661191),
    a = n(322387),
    s = n(381849);
let o = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return (0, s.Ay)({
            since: e,
            getFormatter: t ? s.i : s._e,
        });
    },
    l = (e, t) => e.acked || (t !== r.xM && i.default.compare(t, e.id) >= 0);
function c(e, t, n) {
    let r = i.default.fromTimestamp(new Date(t).getTime());
    return {
        acked: !1,
        forceUnacked: !0,
        other_user: e,
        kind: "notification-center-item",
        local_id: "incoming_friend_requests_".concat(e.id, "_").concat(r),
        deeplink: "https://discord.com/users/".concat(e.id),
        type: a.Uo.INCOMING_FRIEND_REQUESTS,
        id: r,
        applicationId: n,
    };
}
function u(e, t, n) {
    let r = i.default.fromTimestamp(new Date(t).getTime());
    return {
        acked: !1,
        forceUnacked: !0,
        other_user: e,
        kind: "notification-center-item",
        local_id: "incoming_game_friend_requests_".concat(e.id, "_").concat(r),
        deeplink: "https://discord.com/users/".concat(e.id),
        type: a.Uo.INCOMING_GAME_FRIEND_REQUESTS,
        id: r,
        applicationId: n,
    };
}
function d(e) {
    return {
        acked: !1,
        enableBadge: !0,
        id: i.default.fromTimestamp(new Date().getTime()),
        kind: "notification-center-item",
        local_id: "mobile_update_available_".concat(e.build),
        type: a.Uo.MOBILE_NATIVE_UPDATE_AVAILABLE,
        deeplink: e.urls.install.toString(),
    };
}
let f = (e) => e.type === a.hW.RECENT_MENTION || e.type === a.hW.REPLY_MENTION;
