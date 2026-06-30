"use strict";
n.d(t, { KS: () => l, Qi: () => o, _u: () => u, jb: () => a }), n(885386);
var i = n(935208),
    r = n(322387),
    s = n(381849);
function a(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (0, s.Ay)({ since: e, getFormatter: t ? s.i : s._e });
}
function o(e, t, n) {
    let s = i.default.fromTimestamp(new Date(t).getTime());
    return {
        acked: !1,
        forceUnacked: !0,
        other_user: e,
        kind: "notification-center-item",
        local_id: `incoming_friend_requests_${e.id}_${s}`,
        deeplink: `https://discord.com/users/${e.id}`,
        type: r.Uo.INCOMING_FRIEND_REQUESTS,
        id: s,
        applicationId: n,
    };
}
function l(e, t, n) {
    let s = i.default.fromTimestamp(new Date(t).getTime());
    return {
        acked: !1,
        forceUnacked: !0,
        other_user: e,
        kind: "notification-center-item",
        local_id: `incoming_game_friend_requests_${e.id}_${s}`,
        deeplink: `https://discord.com/users/${e.id}`,
        type: r.Uo.INCOMING_GAME_FRIEND_REQUESTS,
        id: s,
        applicationId: n,
    };
}
function u(e) {
    return {
        acked: !1,
        enableBadge: !0,
        id: i.default.fromTimestamp(new Date().getTime()),
        kind: "notification-center-item",
        local_id: `mobile_update_available_${e.build}`,
        type: r.Uo.MOBILE_NATIVE_UPDATE_AVAILABLE,
        deeplink: e.urls.install.toString(),
    };
}
