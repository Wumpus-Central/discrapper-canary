n.d(t, { A: () => a });
var l = n(17928),
    r = n(73153),
    s = n(280450);
let i = { users: {} };
class u extends l.Ay.DeviceSettingsStore {
    static displayName = "ConjureDevicePermissionStore";
    static persistKey = "ConjureDevicePermissionStore";
    initialize(e) {
        (this.waitFor(s.default), (i = { users: e?.users ?? {} }));
    }
    getDecision(e, t) {
        let n = s.default.getId();
        return null == n ? null : (i.users[n]?.[e]?.[t] ?? null);
    }
    getUserAgnosticState() {
        return i;
    }
}
let a = new u(r.h, {
    CONJURE_DEVICE_PERMISSIONS_DECIDE: function (e) {
        let { applicationId: t, permissions: n, allowed: l } = e,
            r = s.default.getId();
        if (null == r) return !1;
        let u = ((i.users[r] ??= {})[t] ??= {});
        for (let e of n) u[e] = l ? "granted" : "denied";
        i = { ...i };
    },
    CONJURE_DEVICE_PERMISSIONS_RESET: function (e) {
        let { applicationId: t, permissions: n } = e,
            l = s.default.getId(),
            r = null != l ? i.users[l]?.[t] : null;
        if (null == r || !n.some((e) => null != r[e])) return !1;
        for (let e of n) delete r[e];
        i = { ...i };
    },
});
