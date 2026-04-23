"use strict";
n.d(t, { KS: () => c, NW: () => l, Qi: () => u, _u: () => d, gk: () => _, jb: () => o });
var r = n(253932),
    i = n(661191),
    s = n(322387),
    a = n(381849);
let o = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return (0, a.Ay)({ since: e, getFormatter: t ? a.i : a._e });
    },
    l = (e, t) => e.acked || (t !== r.xM && i.default.compare(t, e.id) >= 0);
function u(e, t, n) {
    let r = i.default.fromTimestamp(new Date(t).getTime());
    return {
        acked: !1,
        forceUnacked: !0,
        other_user: e,
        kind: "notification-center-item",
        local_id: `incoming_friend_requests_${e.id}_${r}`,
        deeplink: `https://discord.com/users/${e.id}`,
        type: s.Uo.INCOMING_FRIEND_REQUESTS,
        id: r,
        applicationId: n,
    };
}
function c(e, t, n) {
    let r = i.default.fromTimestamp(new Date(t).getTime());
    return {
        acked: !1,
        forceUnacked: !0,
        other_user: e,
        kind: "notification-center-item",
        local_id: `incoming_game_friend_requests_${e.id}_${r}`,
        deeplink: `https://discord.com/users/${e.id}`,
        type: s.Uo.INCOMING_GAME_FRIEND_REQUESTS,
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
        local_id: `mobile_update_available_${e.build}`,
        type: s.Uo.MOBILE_NATIVE_UPDATE_AVAILABLE,
        deeplink: e.urls.install.toString(),
    };
}
let _ = (e) => e.type === s.hW.RECENT_MENTION || e.type === s.hW.REPLY_MENTION;
