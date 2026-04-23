let i, l, s;
n.d(t, { A: () => x });
var a = n(17928),
    r = n(228366),
    o = n(168186),
    d = n(200662);
let c = {},
    u = {},
    m = !1;
function g() {
    (i = void 0), (c = {}), (u = {}), (l = void 0), (s = void 0), (m = !1);
}
class h extends a.Ay.Store {
    static displayName = "IntegrationPermissionStore";
    getApplicationPermissions() {
        return c;
    }
    getCommands() {
        return u;
    }
    getCommand(e) {
        return u?.[e];
    }
    getEditedApplication() {
        return l;
    }
    getEditedCommand() {
        return s;
    }
    isUnavailable() {
        return m;
    }
    getApplicationId() {
        return i;
    }
}
let x = new h(r.h, {
    LOGOUT: g,
    INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE: function (e) {
        let { applicationId: t } = e;
        if (t !== i) return !1;
        m = !0;
    },
    INTEGRATION_PERMISSION_SETTINGS_CLEAR: g,
    INTEGRATION_PERMISSION_SETTINGS_INIT: function (e) {
        let { applicationId: t } = e;
        g(), (i = t);
    },
    INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE: function (e) {
        let { applicationId: t, commandId: n, permissions: l } = e;
        if (t !== i) return !1;
        if (n === i) {
            c = (0, d.UZ)(l);
            return;
        }
        let s = u[n];
        if (null == s) return !1;
        u[n] = { ...s, permissions: (0, d.UZ)(l) };
    },
    INTEGRATION_PERMISSION_SETTINGS_EDIT: function (e) {
        let { applicationId: t, commandId: n, permissions: a } = e;
        if (t !== i) return !1;
        n === i ? (l = a) : (s = { commandId: n, permissions: a });
    },
    INTEGRATION_PERMISSION_SETTINGS_RESET: function (e) {
        let { commandId: t } = e;
        null == t ? (l = void 0) : (s = void 0);
    },
    INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE: function (e) {
        let { applicationId: t } = e;
        if (t !== i) return !1;
        m = !0;
    },
    INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS: function (e) {
        let { applicationId: t, commands: n, permissions: l } = e;
        if (t !== i) return !1;
        let s = Object.fromEntries(l.map((e) => [e.id, e.permissions])),
            a = {};
        for (let e of n)
            if (e.application_id === i) {
                let t = (0, o.Oe)({ rootCommand: e, command: e, applicationId: e.application_id }),
                    n = s[e.id];
                null != n && (t.permissions = (0, d.UZ)(n)), (a[e.id] = t);
            }
        u = a;
    },
});
