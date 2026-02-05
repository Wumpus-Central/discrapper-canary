i.d(t, { A: () => d }), i(393431), i(532706), i(42231), i(232424), i(949626), i(767709), i(65162);
var n = i(311907),
    a = i(149597),
    l = i(73153),
    r = i(661191);
let s = {};
class o extends n.Ay.PersistedStore {
    static displayName = "VerifiedKeyStore";
    static persistKey = "VerifiedKeyStore";
    initialize(e) {
        s = e?.users ?? {};
    }
    getState() {
        return { users: s };
    }
    getKeyTrustedAt(e, t) {
        let i = (0, a.uo)(t);
        return s[e]?.[i];
    }
    isKeyVerified(e, t) {
        return null != this.getKeyTrustedAt(e, t);
    }
    getUserIds() {
        return r.default.keys(s);
    }
    getUserVerifiedKeys(e) {
        return s[e];
    }
}
let d = new o(l.h, {
    SECURE_FRAMES_VERIFIED_KEY_CREATE: function (e) {
        let t,
            { userId: i, key: n } = e,
            l = ((t = s[i] ?? {}), (s[i] = t), t),
            r = new Uint8Array(n);
        l[(0, a.uo)(r)] = Date.now();
    },
    SECURE_FRAMES_VERIFIED_KEY_DELETE: function (e) {
        let { userId: t, serializedKey: i } = e,
            n = s[t];
        if (null == n) return !1;
        let a = delete n[i],
            l = !1;
        return 0 === Object.keys(n).length && (delete s[t], (l = !0)), a || l;
    },
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: function (e) {
        let { userId: t } = e;
        return null != s[t] && delete s[t];
    },
});
