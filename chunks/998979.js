n.d(t, { A: () => o });
var r = n(17928),
    s = n(73153),
    i = n(280450);
let u = { users: {} };
class l extends r.Ay.DeviceSettingsStore {
    static displayName = "ConjureDevicePermissionStore";
    static persistKey = "ConjureDevicePermissionStore";
    initialize(e) {
        (this.waitFor(i.default), (u = { users: e?.users ?? {} }));
    }
    getDecision(e, t) {
        let n = i.default.getId();
        return null == n ? null : (u.users[n]?.[e]?.[t] ?? null);
    }
    getUserAgnosticState() {
        return u;
    }
}
let o = new l(s.h, {
    CONJURE_DEVICE_PERMISSIONS_DECIDE: function (e) {
        let { applicationId: t, permissions: n, allowed: r } = e,
            s = i.default.getId();
        if (null == s) return !1;
        let l = ((u.users[s] ??= {})[t] ??= {});
        for (let e of n) l[e] = r ? "granted" : "denied";
        u = { ...u };
    },
    CONJURE_DEVICE_PERMISSIONS_RESET: function (e) {
        let { applicationId: t, permissions: n } = e,
            r = i.default.getId(),
            s = null != r ? u.users[r]?.[t] : null;
        if (null == s || !n.some((e) => null != s[e])) return !1;
        for (let e of n) delete s[e];
        u = { ...u };
    },
});
