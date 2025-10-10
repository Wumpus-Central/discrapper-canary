n.d(t, { Z: () => f });
var l,
    i,
    r = n(442837),
    a = n(570140),
    o = n(818083),
    s = n(314897);
let u = {},
    c = (0, o.B)({
        kind: "user",
        id: "2025-03_slayer_notif_supression_killswitch",
        label: "Disable suppressing notifications with slayer game active",
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: "Disable suppressing",
                config: { enabled: !0 },
            },
        ],
    });
class d extends (i = r.ZP.Store) {
    areSlayerNotificationsSuppressed() {
        if (c.getCurrentConfig({ location: "Store" }, { autoTrackExposure: !1 }).enabled) return !1;
        for (let e in u) if (u[e] === s.default.getId()) return !0;
        return !1;
    }
}
(l = "displayName") in d
    ? Object.defineProperty(d, l, {
          value: "RpcNotificationSettingsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (d[l] = "RpcNotificationSettingsStore");
let f = new d(a.Z, {
    RPC_APP_DISCONNECTED: function (e) {
        delete u[e.socketId];
    },
    SET_RPC_NOTIFICATION_SETTINGS: function (e) {
        delete u[e.socketId], e.suppressNotifications && (u[e.socketId] = e.targetUserId);
    },
});
