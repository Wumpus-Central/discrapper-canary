"use strict";
n.d(t, { A: () => d }), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var i = n(17928),
    r = n(277515),
    a = n(228366),
    s = n(935208);
let l = {};
class o extends i.Ay.PersistedStore {
    static displayName = "VerifiedKeyStore";
    static persistKey = "VerifiedKeyStore";
    initialize(e) {
        l = e?.users ?? {};
    }
    getState() {
        return { users: l };
    }
    getKeyTrustedAt(e, t) {
        let n = (0, r.uo)(t);
        return l[e]?.[n];
    }
    isKeyVerified(e, t) {
        return null != this.getKeyTrustedAt(e, t);
    }
    getUserIds() {
        return s.default.keys(l);
    }
    getUserVerifiedKeys(e) {
        return l[e];
    }
}
let d = new o(a.h, {
    SECURE_FRAMES_VERIFIED_KEY_CREATE: function (e) {
        let t,
            { userId: n, key: i } = e,
            a = ((t = l[n] ?? {}), (l[n] = t), t),
            s = new Uint8Array(i);
        a[(0, r.uo)(s)] = Date.now();
    },
    SECURE_FRAMES_VERIFIED_KEY_DELETE: function (e) {
        let { userId: t, serializedKey: n } = e,
            i = l[t];
        if (null == i) return !1;
        let r = delete i[n],
            a = !1;
        return 0 === Object.keys(i).length && (delete l[t], (a = !0)), r || a;
    },
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: function (e) {
        let { userId: t } = e;
        return null != l[t] && delete l[t];
    },
});
