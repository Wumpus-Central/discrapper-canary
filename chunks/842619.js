n.d(t, { Z: () => g });
var i,
    l,
    a,
    r = n(442837),
    u = n(570140),
    o = n(818083),
    s = n(314897);
let d = {},
    c = (0, o.B)({
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
class f extends (a = r.ZP.Store) {
    areSlayerNotificationsSuppressed() {
        if (c.getCurrentConfig({ location: 'Store' }, { autoTrackExposure: !1 }).enabled) return !1;
        for (let e in d) if (d[e] === s.default.getId()) return !0;
        return !1;
    }
}
(l = 'RpcNotificationSettingsStore'),
    (i = 'displayName') in f
        ? Object.defineProperty(f, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (f[i] = l);
let g = new f(u.Z, {
    RPC_APP_DISCONNECTED: function (e) {
        delete d[e.socketId];
    },
    SET_RPC_NOTIFICATION_SETTINGS: function (e) {
        delete d[e.socketId], e.suppressNotifications && (d[e.socketId] = e.targetUserId);
    }
});
