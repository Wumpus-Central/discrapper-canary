n.d(t, { A: () => a });
var l = n(17928),
    s = n(73153),
    r = n(280450);
let i = { users: {} };
class u extends l.Ay.DeviceSettingsStore {
    static displayName = "ConjureDevicePermissionStore";
    static persistKey = "ConjureDevicePermissionStore";
    initialize(e) {
        (this.waitFor(r.default), (i = { users: e?.users ?? {} }));
    }
    getDecision(e, t) {
        let n = r.default.getId();
        return null == n ? null : (i.users[n]?.[e]?.[t] ?? null);
    }
    getUserAgnosticState() {
        return i;
    }
}
let a = new u(s.h, {
    CONJURE_DEVICE_PERMISSIONS_DECIDE: function (e) {
        let { applicationId: t, permissions: n, allowed: l } = e,
            s = r.default.getId();
        if (null == s) return !1;
        let u = ((i.users[s] ??= {})[t] ??= {});
        for (let e of n) u[e] = l ? "granted" : "denied";
        i = { ...i };
    },
    CONJURE_DEVICE_PERMISSIONS_RESET: function (e) {
        let { applicationId: t, permissions: n } = e,
            l = r.default.getId(),
            s = null != l ? i.users[l]?.[t] : null;
        if (null == s || !n.some((e) => null != s[e])) return !1;
        for (let e of n) delete s[e];
        i = { ...i };
    },
});
