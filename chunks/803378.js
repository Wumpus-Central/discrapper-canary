let i, l, s, a, r;
var o = n(855986),
    c = n(73153),
    d = n(168186),
    u = n(200662);
let m = !1;
function g() {
    ((i = void 0), (l = void 0), (s = void 0), (a = void 0), (r = void 0), (m = !1));
}
class h extends o.Ay.Store {
    static displayName = "IntegrationPermissionStore";
    getApplicationPermissions() {
        return l;
    }
    getCommands() {
        return s;
    }
    getCommand(e) {
        return s?.[e];
    }
    getEditedApplication() {
        return a;
    }
    getEditedCommand() {
        return r;
    }
    isUnavailable() {
        return m;
    }
    getApplicationId() {
        return i;
    }
}
let x = new h(c.h, {
    LOGOUT: g,
    INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE: function (e) {
        let { applicationId: t } = e;
        if (t !== i) return !1;
        m = !0;
    },
    INTEGRATION_PERMISSION_SETTINGS_CLEAR: g,
    INTEGRATION_PERMISSION_SETTINGS_INIT: function (e) {
        let { applicationId: t } = e;
        (g(), (i = t));
    },
    INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE: function (e) {
        let { applicationId: t, commandId: n, permissions: a } = e;
        if (t !== i) return !1;
        if (n === i) {
            l = (0, u.UZ)(a);
            return;
        }
        let r = s?.[n];
        if (null == s || null == r) return !1;
        s[n] = { ...r, permissions: (0, u.UZ)(a) };
    },
    INTEGRATION_PERMISSION_SETTINGS_EDIT: function (e) {
        let { applicationId: t, commandId: n, permissions: l } = e;
        if (t !== i) return !1;
        n === i ? (a = l) : (r = { commandId: n, permissions: l });
    },
    INTEGRATION_PERMISSION_SETTINGS_RESET: function (e) {
        let { commandId: t } = e;
        null == t ? (a = void 0) : (r = void 0);
    },
    INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE: function (e) {
        let { applicationId: t } = e;
        if (t !== i) return !1;
        m = !0;
    },
    INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS: function (e) {
        let { applicationId: t, commands: n, permissions: l } = e;
        if (t !== i) return !1;
        let a = Object.fromEntries(l.map((e) => [e.id, e.permissions])),
            r = {};
        for (let e of n)
            if (e.application_id === i) {
                let t = (0, d.Oe)({ rootCommand: e, command: e, applicationId: e.application_id }),
                    n = a[e.id];
                (null != n && (t.permissions = (0, u.UZ)(n)), (r[e.id] = t));
            }
        s = r;
    },
});
n.d(t, {}, { A: x });
