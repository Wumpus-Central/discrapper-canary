n(253932);
var i = n(811091),
    r = n(322387),
    a = n(381849);
n.d(
    t,
    {},
    {
        KS: function (e, t, n) {
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
        },
        Qi: function (e, t, n) {
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
        },
        _u: function (e) {
            return {
                acked: !1,
                enableBadge: !0,
                id: i.default.fromTimestamp(new Date().getTime()),
                kind: "notification-center-item",
                local_id: `mobile_update_available_${e.build}`,
                type: r.Uo.MOBILE_NATIVE_UPDATE_AVAILABLE,
                deeplink: e.urls.install.toString(),
            };
        },
        jb: function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            return (0, a.Ay)({ since: e, getFormatter: t ? a.i : a._e });
        },
    },
);
