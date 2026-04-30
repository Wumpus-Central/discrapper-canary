n.d(t, { KS: () => c, NW: () => o, Qi: () => d, _u: () => _, gk: () => E, jb: () => l });
var i = n(253932),
    a = n(935208),
    r = n(322387),
    s = n(381849);
let l = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return (0, s.Ay)({ since: e, getFormatter: t ? s.i : s._e });
    },
    o = (e, t) => e.acked || (t !== i.xM && a.default.compare(t, e.id) >= 0);
function d(e, t, n) {
    let i = a.default.fromTimestamp(new Date(t).getTime());
    return {
        acked: !1,
        forceUnacked: !0,
        other_user: e,
        kind: "notification-center-item",
        local_id: `incoming_friend_requests_${e.id}_${i}`,
        deeplink: `https://discord.com/users/${e.id}`,
        type: r.Uo.INCOMING_FRIEND_REQUESTS,
        id: i,
        applicationId: n,
    };
}
function c(e, t, n) {
    let i = a.default.fromTimestamp(new Date(t).getTime());
    return {
        acked: !1,
        forceUnacked: !0,
        other_user: e,
        kind: "notification-center-item",
        local_id: `incoming_game_friend_requests_${e.id}_${i}`,
        deeplink: `https://discord.com/users/${e.id}`,
        type: r.Uo.INCOMING_GAME_FRIEND_REQUESTS,
        id: i,
        applicationId: n,
    };
}
function _(e) {
    return {
        acked: !1,
        enableBadge: !0,
        id: a.default.fromTimestamp(new Date().getTime()),
        kind: "notification-center-item",
        local_id: `mobile_update_available_${e.build}`,
        type: r.Uo.MOBILE_NATIVE_UPDATE_AVAILABLE,
        deeplink: e.urls.install.toString(),
    };
}
let E = (e) => e.type === r.hW.RECENT_MENTION || e.type === r.hW.REPLY_MENTION;
