let i, l, a;
n.d(t, { Z: () => b }), n(47120);
var r,
    s,
    o,
    d = n(442837),
    c = n(570140),
    u = n(581364),
    m = n(399860);
let h = {},
    x = {},
    g = !1;
function p() {
    (i = void 0), (h = {}), (x = {}), (l = void 0), (a = void 0), (g = !1);
}
class f extends (r = d.ZP.Store) {
    getApplicationPermissions() {
        return h;
    }
    getCommands() {
        return x;
    }
    getCommand(e) {
        return null == x ? void 0 : x[e];
    }
    getEditedApplication() {
        return l;
    }
    getEditedCommand() {
        return a;
    }
    isUnavailable() {
        return g;
    }
    getApplicationId() {
        return i;
    }
}
(o = 'IntegrationPermissionStore'),
    (s = 'displayName') in f
        ? Object.defineProperty(f, s, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (f[s] = o);
let b = new f(c.Z, {
    LOGOUT: p,
    INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE: function (e) {
        let { applicationId: t } = e;
        if (t !== i) return !1;
        g = !0;
    },
    INTEGRATION_PERMISSION_SETTINGS_CLEAR: p,
    INTEGRATION_PERMISSION_SETTINGS_INIT: function (e) {
        let { applicationId: t } = e;
        p(), (i = t);
    },
    INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE: function (e) {
        let { applicationId: t, commandId: n, permissions: l } = e;
        if (t !== i) return !1;
        if (n === i) {
            h = (0, m.tk)(l);
            return;
        }
        let a = x[n];
        if (null == a) return !1;
        x[n] = {
            ...a,
            permissions: (0, m.tk)(l)
        };
    },
    INTEGRATION_PERMISSION_SETTINGS_EDIT: function (e) {
        let { applicationId: t, commandId: n, permissions: r } = e;
        if (t !== i) return !1;
        n === i
            ? (l = r)
            : (a = {
                  commandId: n,
                  permissions: r
              });
    },
    INTEGRATION_PERMISSION_SETTINGS_RESET: function (e) {
        let { commandId: t } = e;
        null == t ? (l = void 0) : (a = void 0);
    },
    INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE: function (e) {
        let { applicationId: t } = e;
        if (t !== i) return !1;
        g = !0;
    },
    INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS: function (e) {
        let { applicationId: t, commands: n, permissions: l } = e;
        if (t !== i) return !1;
        let a = Object.fromEntries(l.map((e) => [e.id, e.permissions])),
            r = {};
        for (let e of n)
            if (e.application_id === i) {
                let t = (0, u.Z8)({
                        rootCommand: e,
                        command: e,
                        applicationId: e.application_id
                    }),
                    n = a[e.id];
                null != n && (t.permissions = (0, m.tk)(n)), (r[e.id] = t);
            }
        x = r;
    }
});
