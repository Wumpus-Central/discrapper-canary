n.d(e, { Z: () => f });
var i,
    l,
    a = n(442837),
    r = n(570140),
    o = n(818083),
    u = n(314897);
let s = {},
    d = (0, o.B)({
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
class c extends (l = a.ZP.Store) {
    areSlayerNotificationsSuppressed() {
        if (d.getCurrentConfig({ location: "Store" }, { autoTrackExposure: !1 }).enabled) return !1;
        for (let t in s) if (s[t] === u.default.getId()) return !0;
        return !1;
    }
}
(i = "displayName") in c
    ? Object.defineProperty(c, i, {
          value: "RpcNotificationSettingsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (c[i] = "RpcNotificationSettingsStore");
let f = new c(r.Z, {
    RPC_APP_DISCONNECTED: function (t) {
        delete s[t.socketId];
    },
    SET_RPC_NOTIFICATION_SETTINGS: function (t) {
        delete s[t.socketId], t.suppressNotifications && (s[t.socketId] = t.targetUserId);
    },
});
