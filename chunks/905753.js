let r, i, l;
n.d(t, { Z: () => h }), n(977457), n(47120);
var o,
    a = n(442837),
    s = n(570140),
    c = n(581364),
    d = n(399860);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let p = {},
    m = {},
    b = !1;
function g() {
    (r = void 0), (p = {}), (m = {}), (i = void 0), (l = void 0), (b = !1);
}
class f extends (o = a.ZP.Store) {
    getApplicationPermissions() {
        return p;
    }
    getCommands() {
        return m;
    }
    getCommand(e) {
        return null == m ? void 0 : m[e];
    }
    getEditedApplication() {
        return i;
    }
    getEditedCommand() {
        return l;
    }
    isUnavailable() {
        return b;
    }
    getApplicationId() {
        return r;
    }
}
u(f, 'displayName', 'IntegrationPermissionStore');
let h = new f(s.Z, {
    LOGOUT: g,
    INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE: function (e) {
        let { applicationId: t } = e;
        if (t !== r) return !1;
        b = !0;
    },
    INTEGRATION_PERMISSION_SETTINGS_CLEAR: g,
    INTEGRATION_PERMISSION_SETTINGS_INIT: function (e) {
        let { applicationId: t } = e;
        g(), (r = t);
    },
    INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE: function (e) {
        var t, n;
        let { applicationId: i, commandId: l, permissions: o } = e;
        if (i !== r) return !1;
        if (l === r) {
            p = (0, d.tk)(o);
            return;
        }
        let a = m[l];
        if (null == a) return !1;
        m[l] =
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            u(e, t, n[t]);
                        });
                }
                return e;
            })({}, a)),
            (n = n = { permissions: (0, d.tk)(o) }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t);
    },
    INTEGRATION_PERMISSION_SETTINGS_EDIT: function (e) {
        let { applicationId: t, commandId: n, permissions: o } = e;
        if (t !== r) return !1;
        n === r
            ? (i = o)
            : (l = {
                  commandId: n,
                  permissions: o
              });
    },
    INTEGRATION_PERMISSION_SETTINGS_RESET: function (e) {
        let { commandId: t } = e;
        null == t ? (i = void 0) : (l = void 0);
    },
    INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE: function (e) {
        let { applicationId: t } = e;
        if (t !== r) return !1;
        b = !0;
    },
    INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS: function (e) {
        let { applicationId: t, commands: n, permissions: i } = e;
        if (t !== r) return !1;
        let l = Object.fromEntries(i.map((e) => [e.id, e.permissions])),
            o = {};
        for (let e of n)
            if (e.application_id === r) {
                let t = (0, c.Z8)({
                        rootCommand: e,
                        command: e,
                        applicationId: e.application_id
                    }),
                    n = l[e.id];
                null != n && (t.permissions = (0, d.tk)(n)), (o[e.id] = t);
            }
        m = o;
    }
});
