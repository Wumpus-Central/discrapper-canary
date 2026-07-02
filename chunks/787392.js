r.d(t, { A: () => a }), r(393431), r(532706), r(42231), r(232424), r(949626), r(767709), r(65162);
var n = r(17928),
    E = r(277515),
    i = r(228366),
    u = r(935208);
let l = {};
class s extends n.Ay.PersistedStore {
    static displayName = "VerifiedKeyStore";
    static persistKey = "VerifiedKeyStore";
    initialize(e) {
        l = e?.users ?? {};
    }
    getState() {
        return { users: l };
    }
    getKeyTrustedAt(e, t) {
        let r = (0, E.uo)(t);
        return l[e]?.[r];
    }
    isKeyVerified(e, t) {
        return null != this.getKeyTrustedAt(e, t);
    }
    getUserIds() {
        return u.default.keys(l);
    }
    getUserVerifiedKeys(e) {
        return l[e];
    }
}
let a = new s(i.h, {
    SECURE_FRAMES_VERIFIED_KEY_CREATE: function (e) {
        let t,
            { userId: r, key: n } = e,
            i = ((t = l[r] ?? {}), (l[r] = t), t),
            u = new Uint8Array(n);
        i[(0, E.uo)(u)] = Date.now();
    },
    SECURE_FRAMES_VERIFIED_KEY_DELETE: function (e) {
        let { userId: t, serializedKey: r } = e,
            n = l[t];
        if (null == n) return !1;
        let E = delete n[r],
            i = !1;
        return 0 === Object.keys(n).length && (delete l[t], (i = !0)), E || i;
    },
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: function (e) {
        let { userId: t } = e;
        return null != l[t] && delete l[t];
    },
});
