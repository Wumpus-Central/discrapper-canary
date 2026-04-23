r.d(t, { A: () => c }), r(393431), r(532706), r(42231), r(232424), r(949626), r(767709), r(65162);
var n = r(17928),
    l = r(149597),
    s = r(228366),
    u = r(935208);
let i = {};
class a extends n.Ay.PersistedStore {
    static displayName = "VerifiedKeyStore";
    static persistKey = "VerifiedKeyStore";
    initialize(e) {
        i = e?.users ?? {};
    }
    getState() {
        return { users: i };
    }
    getKeyTrustedAt(e, t) {
        let r = (0, l.uo)(t);
        return i[e]?.[r];
    }
    isKeyVerified(e, t) {
        return null != this.getKeyTrustedAt(e, t);
    }
    getUserIds() {
        return u.default.keys(i);
    }
    getUserVerifiedKeys(e) {
        return i[e];
    }
}
let c = new a(s.h, {
    SECURE_FRAMES_VERIFIED_KEY_CREATE: function (e) {
        let t,
            { userId: r, key: n } = e,
            s = ((t = i[r] ?? {}), (i[r] = t), t),
            u = new Uint8Array(n);
        s[(0, l.uo)(u)] = Date.now();
    },
    SECURE_FRAMES_VERIFIED_KEY_DELETE: function (e) {
        let { userId: t, serializedKey: r } = e,
            n = i[t];
        if (null == n) return !1;
        let l = delete n[r],
            s = !1;
        return 0 === Object.keys(n).length && (delete i[t], (s = !0)), l || s;
    },
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: function (e) {
        let { userId: t } = e;
        return null != i[t] && delete i[t];
    },
});
