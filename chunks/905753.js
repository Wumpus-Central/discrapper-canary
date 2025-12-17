let i, r, l;
n.d(t, { Z: () => h }), n(467055), n(388685);
var a,
    o = n(442837),
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let m = {},
    b = {},
    p = !1;
function g() {
    (i = void 0), (m = {}), (b = {}), (r = void 0), (l = void 0), (p = !1);
}
class f extends (a = o.ZP.Store) {
    getApplicationPermissions() {
        return m;
    }
    getCommands() {
        return b;
    }
    getCommand(e) {
        return null == b ? void 0 : b[e];
    }
    getEditedApplication() {
        return r;
    }
    getEditedCommand() {
        return l;
    }
    isUnavailable() {
        return p;
    }
    getApplicationId() {
        return i;
    }
}
u(f, "displayName", "IntegrationPermissionStore");
let h = new f(s.Z, {
    LOGOUT: g,
    INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE: function (e) {
        let { applicationId: t } = e;
        if (t !== i) return !1;
        p = !0;
    },
    INTEGRATION_PERMISSION_SETTINGS_CLEAR: g,
    INTEGRATION_PERMISSION_SETTINGS_INIT: function (e) {
        let { applicationId: t } = e;
        g(), (i = t);
    },
    INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE: function (e) {
        var t, n;
        let { applicationId: r, commandId: l, permissions: a } = e;
        if (r !== i) return !1;
        if (l === i) {
            m = (0, d.tk)(a);
            return;
        }
        let o = b[l];
        if (null == o) return !1;
        b[l] =
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        i.forEach(function (t) {
                            u(e, t, n[t]);
                        });
                }
                return e;
            })({}, o)),
            (n = n = { permissions: (0, d.tk)(a) }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, i);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t);
    },
    INTEGRATION_PERMISSION_SETTINGS_EDIT: function (e) {
        let { applicationId: t, commandId: n, permissions: a } = e;
        if (t !== i) return !1;
        n === i
            ? (r = a)
            : (l = {
                  commandId: n,
                  permissions: a,
              });
    },
    INTEGRATION_PERMISSION_SETTINGS_RESET: function (e) {
        let { commandId: t } = e;
        null == t ? (r = void 0) : (l = void 0);
    },
    INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE: function (e) {
        let { applicationId: t } = e;
        if (t !== i) return !1;
        p = !0;
    },
    INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS: function (e) {
        let { applicationId: t, commands: n, permissions: r } = e;
        if (t !== i) return !1;
        let l = Object.fromEntries(r.map((e) => [e.id, e.permissions])),
            a = {};
        for (let e of n)
            if (e.application_id === i) {
                let t = (0, c.Z8)({
                        rootCommand: e,
                        command: e,
                        applicationId: e.application_id,
                    }),
                    n = l[e.id];
                null != n && (t.permissions = (0, d.tk)(n)), (a[e.id] = t);
            }
        b = a;
    },
});
