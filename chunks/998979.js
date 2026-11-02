n.d(t, { A: () => o });
var i = n(17928),
    r = n(73153),
    a = n(280450);
let s = { users: {} };
class l extends i.Ay.DeviceSettingsStore {
    static displayName = "ConjureDevicePermissionStore";
    static persistKey = "ConjureDevicePermissionStore";
    initialize(e) {
        (this.waitFor(a.default), (s = { users: e?.users ?? {} }));
    }
    getDecision(e, t) {
        let n = a.default.getId();
        return null == n ? null : (s.users[n]?.[e]?.[t] ?? null);
    }
    getUserAgnosticState() {
        return s;
    }
}
let o = new l(r.h, {
    CONJURE_DEVICE_PERMISSIONS_DECIDE: function (e) {
        let { applicationId: t, permissions: n, allowed: i } = e,
            r = a.default.getId();
        if (null == r) return !1;
        let l = ((s.users[r] ??= {})[t] ??= {});
        for (let e of n) l[e] = i ? "granted" : "denied";
        s = { ...s };
    },
    CONJURE_DEVICE_PERMISSIONS_RESET: function (e) {
        let { applicationId: t, permissions: n } = e,
            i = a.default.getId(),
            r = null != i ? s.users[i]?.[t] : null;
        if (null == r || !n.some((e) => null != r[e])) return !1;
        for (let e of n) delete r[e];
        s = { ...s };
    },
});
