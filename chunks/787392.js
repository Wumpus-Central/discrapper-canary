n.d(t, { A: () => h }),
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
    a = n(149597),
    s = n(73153),
    o = n(661191);
function l(e, t, n) {
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
function u(e) {
    var t;
    let n = null != (t = c[e]) ? t : {};
    return (c[e] = n), n;
}
function d(e) {
    let { userId: t, key: n } = e,
        r = u(t),
        i = new Uint8Array(n);
    r[(0, a.uo)(i)] = Date.now();
}
function f(e) {
    let { userId: t, serializedKey: n } = e,
        r = c[t];
    if (null == r) return !1;
    let i = delete r[n],
        a = !1;
    return 0 === Object.keys(r).length && (delete c[t], (a = !0)), i || a;
}
function p(e) {
    let { userId: t } = e;
    return null != c[t] && delete c[t];
}
class _ extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        var t;
        c = null != (t = null == e ? void 0 : e.users) ? t : {};
    }
    getState() {
        return { users: c };
    }
    getKeyTrustedAt(e, t) {
        var n;
        let r = (0, a.uo)(t);
        return null == (n = c[e]) ? void 0 : n[r];
    }
    isKeyVerified(e, t) {
        return null != this.getKeyTrustedAt(e, t);
    }
    getUserIds() {
        return o.default.keys(c);
    }
    getUserVerifiedKeys(e) {
        return c[e];
    }
}
l(_, "displayName", "VerifiedKeyStore"), l(_, "persistKey", "VerifiedKeyStore");
let h = new _(s.h, {
    SECURE_FRAMES_VERIFIED_KEY_CREATE: d,
    SECURE_FRAMES_VERIFIED_KEY_DELETE: f,
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: p,
});
