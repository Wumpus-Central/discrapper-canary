n.d(t, { A: () => a });
var l = n(17928),
    r = n(73153),
    i = n(280450);
let s = { users: {} };
class u extends l.Ay.DeviceSettingsStore {
    static displayName = "ConjureDevicePermissionStore";
    static persistKey = "ConjureDevicePermissionStore";
    initialize(e) {
        (this.waitFor(i.default), (s = { users: e?.users ?? {} }));
    }
    getDecision(e, t) {
        let n = i.default.getId();
        return null == n ? null : (s.users[n]?.[e]?.[t] ?? null);
    }
    getUserAgnosticState() {
        return s;
    }
}
let a = new u(r.h, {
    CONJURE_DEVICE_PERMISSIONS_DECIDE: function (e) {
        let { applicationId: t, permissions: n, allowed: l } = e,
            r = i.default.getId();
        if (null == r) return !1;
        let u = ((s.users[r] ??= {})[t] ??= {});
        for (let e of n) u[e] = l ? "granted" : "denied";
        s = { ...s };
    },
    CONJURE_DEVICE_PERMISSIONS_RESET: function (e) {
        let { applicationId: t, permissions: n } = e,
            l = i.default.getId(),
            r = null != l ? s.users[l]?.[t] : null;
        if (null == r || !n.some((e) => null != r[e])) return !1;
        for (let e of n) delete r[e];
        s = { ...s };
    },
});
