"use strict";
n.d(t, { KS: () => o, Qi: () => l, _u: () => d, jb: () => s }), n(885386);
var i = n(935208),
    r = n(322387),
    a = n(381849);
function s(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (0, a.Ay)({ since: e, getFormatter: t ? a.i : a._e });
}
function l(e, t, n) {
    let a = i.default.fromTimestamp(new Date(t).getTime());
    return {
        acked: !1,
        forceUnacked: !0,
        other_user: e,
        kind: "notification-center-item",
        local_id: `incoming_friend_requests_${e.id}_${a}`,
        deeplink: `https://discord.com/users/${e.id}`,
        type: r.Uo.INCOMING_FRIEND_REQUESTS,
        id: a,
        applicationId: n,
    };
}
function o(e, t, n) {
    let a = i.default.fromTimestamp(new Date(t).getTime());
    return {
        acked: !1,
        forceUnacked: !0,
        other_user: e,
        kind: "notification-center-item",
        local_id: `incoming_game_friend_requests_${e.id}_${a}`,
        deeplink: `https://discord.com/users/${e.id}`,
        type: r.Uo.INCOMING_GAME_FRIEND_REQUESTS,
        id: a,
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
        type: r.Uo.MOBILE_NATIVE_UPDATE_AVAILABLE,
        deeplink: e.urls.install.toString(),
    };
}
