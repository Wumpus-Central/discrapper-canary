r.d(t, { A: () => _ }), r(393431), r(532706), r(42231), r(232424), r(949626), r(767709), r(65162);
var E = r(17928),
    n = r(149597),
    i = r(228366),
    l = r(935208);
let u = {};
class s extends E.Ay.PersistedStore {
    static displayName = "VerifiedKeyStore";
    static persistKey = "VerifiedKeyStore";
    initialize(e) {
        u = e?.users ?? {};
    }
    getState() {
        return { users: u };
    }
    getKeyTrustedAt(e, t) {
        let r = (0, n.uo)(t);
        return u[e]?.[r];
    }
    isKeyVerified(e, t) {
        return null != this.getKeyTrustedAt(e, t);
    }
    getUserIds() {
        return l.default.keys(u);
    }
    getUserVerifiedKeys(e) {
        return u[e];
    }
}
let _ = new s(i.h, {
    SECURE_FRAMES_VERIFIED_KEY_CREATE: function (e) {
        let t,
            { userId: r, key: E } = e,
            i = ((t = u[r] ?? {}), (u[r] = t), t),
            l = new Uint8Array(E);
        i[(0, n.uo)(l)] = Date.now();
    },
    SECURE_FRAMES_VERIFIED_KEY_DELETE: function (e) {
        let { userId: t, serializedKey: r } = e,
            E = u[t];
        if (null == E) return !1;
        let n = delete E[r],
            i = !1;
        return 0 === Object.keys(E).length && (delete u[t], (i = !0)), n || i;
    },
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: function (e) {
        let { userId: t } = e;
        return null != u[t] && delete u[t];
    },
});
