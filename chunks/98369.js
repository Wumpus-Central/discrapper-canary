n.d(t, { Z: () => R }),
    n(388685),
    n(410992),
    n(227481),
    n(730884),
    n(20464),
    n(341884),
    n(364341),
    n(629680),
    n(505025),
    n(918970),
    n(121784),
    n(644351),
    n(146733);
var r,
    i = n(442837),
    o = n(46973),
    a = n(570140),
    s = n(569545),
    l = n(314897),
    c = n(19780),
    u = n(959457),
    d = n(630759),
    f = n(729303),
    _ = n(651941),
    p = n(981631);
function h(e, t, n) {
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
let m = new Map(),
    g = new Map(),
    E = !1,
    b = null;
function y(e) {
    let t = c.Z.getSecureFramesRosterMapEntry(e);
    if (null == t) return !1;
    let n = new Uint8Array(t),
        r = _.Z.isKeyVerified(e, n) || f.Z.isKeyVerified(e, n),
        i = (0, d.UB)(e, [c.Z, u.Z]),
        o = r && !i,
        a = o !== m.get(e);
    return m.set(e, o), a;
}
function O() {
    return u.Z.getAllActiveStreamKeys().reduce((e, t) => {
        let { ownerId: n } = (0, s.my)(t),
            r = !0 === m.get(n),
            i = g.get(t) !== r;
        return g.set(t, r), !!i || e;
    }, !1);
}
function v() {
    var e;
    let t = null != (e = c.Z.getUserIds()) ? e : new Set(),
        n = l.default.getId(),
        r = !0;
    for (let e of t)
        if (n !== e && !0 !== m.get(e)) {
            r = !1;
            break;
        }
    let i = r !== E;
    return (E = r), i;
}
function I(e) {
    let { userId: t } = e;
    if (l.default.getId() === t) return !1;
    let n = y(t),
        r = O(),
        i = v();
    return n || r || i;
}
function T(e) {
    let { userIds: t } = e,
        n = l.default.getId(),
        r = t.reduce((e, t) => (n === t ? e : !!I({ userId: t }) || e), !1),
        i = O(),
        o = v();
    return r || i || o;
}
function S() {
    m.clear(), g.clear(), (E = !1);
}
function A(e) {
    let { channelId: t } = e;
    if (t === b) return !1;
    (b = t), S();
}
function N(e) {
    let { streamKey: t, state: n, context: r } = e;
    if (n !== p.hes.DISCONNECTED) return !1;
    switch (r) {
        case o.Yn.STREAM:
            if (null == t) return !1;
            return g.delete(t), v();
        case o.Yn.DEFAULT:
            S();
    }
}
class C extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, _.Z, c.Z, u.Z);
    }
    isCallVerified() {
        return E;
    }
    isStreamVerified(e) {
        return g.get(e);
    }
    isUserVerified(e) {
        return m.get(e);
    }
}
h(C, "displayName", "SecureFramesVerifiedStore");
let R = new C(a.Z, {
    CONNECTION_OPEN: S,
    VOICE_CHANNEL_SELECT: A,
    RTC_CONNECTION_STATE: N,
    RTC_CONNECTION_ROSTER_MAP_UPDATE: T,
    SECURE_FRAMES_TRANSIENT_KEY_CREATE: I,
    SECURE_FRAMES_TRANSIENT_KEY_DELETE: I,
    SECURE_FRAMES_VERIFIED_KEY_CREATE: I,
    SECURE_FRAMES_VERIFIED_KEY_DELETE: I,
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: I,
});
