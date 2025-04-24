n.d(t, { Z: () => h });
var l,
    r,
    i,
    a = n(442837),
    o = n(570140),
    s = n(818083),
    u = n(314897);
let c = {},
    d = (0, s.B)({
        kind: 'user',
        id: '2025-03_slayer_notif_supression_killswitch',
        label: 'Disable suppressing notifications with slayer game active',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Disable suppressing',
                config: { enabled: !0 }
            }
        ]
    });
class f extends (i = a.ZP.Store) {
    areSlayerNotificationsSuppressed() {
        if (d.getCurrentConfig({ location: 'Store' }, { autoTrackExposure: !1 }).enabled) return !1;
        for (let e in c) if (c[e] === u.default.getId()) return !0;
        return !1;
    }
}
(r = 'RpcNotificationSettingsStore'),
    (l = 'displayName') in f
        ? Object.defineProperty(f, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (f[l] = r);
let h = new f(o.Z, {
    RPC_APP_DISCONNECTED: function (e) {
        delete c[e.socketId];
    },
    SET_RPC_NOTIFICATION_SETTINGS: function (e) {
        delete c[e.socketId], e.suppressNotifications && (c[e.socketId] = e.targetUserId);
    }
});
