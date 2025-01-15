let i, l, r;
n(47120);
var a,
    o,
    s,
    d,
    c = n(442837),
    u = n(570140),
    m = n(581364),
    h = n(399860);
let p = {},
    g = {},
    x = !1;
function f() {
    (i = void 0), (p = {}), (g = {}), (l = void 0), (r = void 0), (x = !1);
}
class b extends (a = c.ZP.Store) {
    getApplicationPermissions() {
        return p;
    }
    getCommands() {
        return g;
    }
    getCommand(e) {
        return null == g ? void 0 : g[e];
    }
    getEditedApplication() {
        return l;
    }
    getEditedCommand() {
        return r;
    }
    isUnavailable() {
        return x;
    }
    getApplicationId() {
        return i;
    }
}
(d = 'IntegrationPermissionStore'),
    (s = 'displayName') in (o = b)
        ? Object.defineProperty(o, s, {
              value: d,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (o[s] = d),
    (t.Z = new b(u.Z, {
        LOGOUT: f,
        INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE: function (e) {
            let { applicationId: t } = e;
            if (t !== i) return !1;
            x = !0;
        },
        INTEGRATION_PERMISSION_SETTINGS_CLEAR: f,
        INTEGRATION_PERMISSION_SETTINGS_INIT: function (e) {
            let { applicationId: t } = e;
            f(), (i = t);
        },
        INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE: function (e) {
            let { applicationId: t, commandId: n, permissions: l } = e;
            if (t !== i) return !1;
            if (n === i) {
                p = (0, h.tk)(l);
                return;
            }
            let r = g[n];
            if (null == r) return !1;
            g[n] = {
                ...r,
                permissions: (0, h.tk)(l)
            };
        },
        INTEGRATION_PERMISSION_SETTINGS_EDIT: function (e) {
            let { applicationId: t, commandId: n, permissions: a } = e;
            if (t !== i) return !1;
            n === i
                ? (l = a)
                : (r = {
                      commandId: n,
                      permissions: a
                  });
        },
        INTEGRATION_PERMISSION_SETTINGS_RESET: function (e) {
            let { commandId: t } = e;
            null == t ? (l = void 0) : (r = void 0);
        },
        INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE: function (e) {
            let { applicationId: t } = e;
            if (t !== i) return !1;
            x = !0;
        },
        INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS: function (e) {
            let { applicationId: t, commands: n, permissions: l } = e;
            if (t !== i) return !1;
            let r = Object.fromEntries(l.map((e) => [e.id, e.permissions])),
                a = {};
            for (let e of n)
                if (e.application_id === i) {
                    let t = (0, m.Z8)({
                            rootCommand: e,
                            command: e,
                            applicationId: e.application_id
                        }),
                        n = r[e.id];
                    null != n && (t.permissions = (0, h.tk)(n)), (a[e.id] = t);
                }
            g = a;
        }
    }));
