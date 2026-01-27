n.d(t, {
    A: () => d,
}),
    n(927092),
    n(212978),
    n(201528),
    n(393431),
    n(752391),
    n(532706),
    n(42231),
    n(232424),
    n(757074),
    n(949626),
    n(767709),
    n(65162),
    n(896048);
var r,
    i = n(311907),
    l = n(149597),
    a = n(73153),
    s = n(661191);

function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let c = {};
class u extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        var t;
        c = null != (t = null == e ? void 0 : e.users) ? t : {};
    }
    getState() {
        return {
            users: c,
        };
    }
    getKeyTrustedAt(e, t) {
        var n;
        let r = (0, l.uo)(t);
        return null == (n = c[e]) ? void 0 : n[r];
    }
    isKeyVerified(e, t) {
        return null != this.getKeyTrustedAt(e, t);
    }
    getUserIds() {
        return s.default.keys(c);
    }
    getUserVerifiedKeys(e) {
        return c[e];
    }
}
o(u, "displayName", "VerifiedKeyStore"), o(u, "persistKey", "VerifiedKeyStore");
let d = new u(a.h, {
    SECURE_FRAMES_VERIFIED_KEY_CREATE: function (e) {
        var t;
        let n,
            { userId: r, key: i } = e,
            a = ((n = null != (t = c[r]) ? t : {}), (c[r] = n), n),
            s = new Uint8Array(i);
        a[(0, l.uo)(s)] = Date.now();
    },
    SECURE_FRAMES_VERIFIED_KEY_DELETE: function (e) {
        let { userId: t, serializedKey: n } = e,
            r = c[t];
        if (null == r) return !1;
        let i = delete r[n],
            l = !1;
        return 0 === Object.keys(r).length && (delete c[t], (l = !0)), i || l;
    },
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: function (e) {
        let { userId: t } = e;
        return null != c[t] && delete c[t];
    },
});
