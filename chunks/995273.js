n.d(t, { KS: () => E, NW: () => l, Qi: () => o, _u: () => d, gk: () => c, jb: () => _ });
var i = n(253932),
    r = n(935208),
    a = n(322387),
    s = n(381849);
let _ = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return (0, s.Ay)({ since: e, getFormatter: t ? s.i : s._e });
    },
    l = (e, t) => e.acked || (t !== i.xM && r.default.compare(t, e.id) >= 0);
function o(e, t, n) {
    let i = r.default.fromTimestamp(new Date(t).getTime());
    return {
        acked: !1,
        forceUnacked: !0,
        other_user: e,
        kind: "notification-center-item",
        local_id: `incoming_friend_requests_${e.id}_${i}`,
        deeplink: `https://discord.com/users/${e.id}`,
        type: a.Uo.INCOMING_FRIEND_REQUESTS,
        id: i,
        applicationId: n,
    };
}
function E(e, t, n) {
    let i = r.default.fromTimestamp(new Date(t).getTime());
    return {
        acked: !1,
        forceUnacked: !0,
        other_user: e,
        kind: "notification-center-item",
        local_id: `incoming_game_friend_requests_${e.id}_${i}`,
        deeplink: `https://discord.com/users/${e.id}`,
        type: a.Uo.INCOMING_GAME_FRIEND_REQUESTS,
        id: i,
        applicationId: n,
    };
}
function d(e) {
    return {
        acked: !1,
        enableBadge: !0,
        id: r.default.fromTimestamp(new Date().getTime()),
        kind: "notification-center-item",
        local_id: `mobile_update_available_${e.build}`,
        type: a.Uo.MOBILE_NATIVE_UPDATE_AVAILABLE,
        deeplink: e.urls.install.toString(),
    };
}
let c = (e) => e.type === a.hW.RECENT_MENTION || e.type === a.hW.REPLY_MENTION;
