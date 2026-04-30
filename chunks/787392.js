"use strict";
n.d(t, { A: () => u }), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var i = n(17928),
    r = n(277515),
    s = n(228366),
    a = n(935208);
let o = {};
class l extends i.Ay.PersistedStore {
    static displayName = "VerifiedKeyStore";
    static persistKey = "VerifiedKeyStore";
    initialize(e) {
        o = e?.users ?? {};
    }
    getState() {
        return { users: o };
    }
    getKeyTrustedAt(e, t) {
        let n = (0, r.uo)(t);
        return o[e]?.[n];
    }
    isKeyVerified(e, t) {
        return null != this.getKeyTrustedAt(e, t);
    }
    getUserIds() {
        return a.default.keys(o);
    }
    getUserVerifiedKeys(e) {
        return o[e];
    }
}
let u = new l(s.h, {
    SECURE_FRAMES_VERIFIED_KEY_CREATE: function (e) {
        let t,
            { userId: n, key: i } = e,
            s = ((t = o[n] ?? {}), (o[n] = t), t),
            a = new Uint8Array(i);
        s[(0, r.uo)(a)] = Date.now();
    },
    SECURE_FRAMES_VERIFIED_KEY_DELETE: function (e) {
        let { userId: t, serializedKey: n } = e,
            i = o[t];
        if (null == i) return !1;
        let r = delete i[n],
            s = !1;
        return 0 === Object.keys(i).length && (delete o[t], (s = !0)), r || s;
    },
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: function (e) {
        let { userId: t } = e;
        return null != o[t] && delete o[t];
    },
});
