n.d(t, { Z: () => j }),
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
    i,
    l = n(442837),
    a = n(46973),
    o = n(570140),
    s = n(569545),
    c = n(314897),
    u = n(19780),
    d = n(959457),
    p = n(630759),
    f = n(729303),
    h = n(651941),
    m = n(981631);
let g = new Map(),
    b = new Map(),
    _ = !1,
    y = null;
function C() {
    return d.Z.getAllActiveStreamKeys().reduce((e, t) => {
        let { ownerId: n } = (0, s.my)(t),
            r = !0 === g.get(n),
            i = b.get(t) !== r;
        return b.set(t, r), !!i || e;
    }, !1);
}
function v() {
    var e;
    let t = null != (e = u.Z.getUserIds()) ? e : new Set(),
        n = c.default.getId(),
        r = !0;
    for (let e of t)
        if (n !== e && !0 !== g.get(e)) {
            r = !1;
            break;
        }
    let i = r !== _;
    return (_ = r), i;
}
function O(e) {
    let { userId: t } = e;
    if (c.default.getId() === t) return !1;
    let n = (function (e) {
            let t = u.Z.getSecureFramesRosterMapEntry(e);
            if (null == t) return !1;
            let n = new Uint8Array(t),
                r = h.Z.isKeyVerified(e, n) || f.Z.isKeyVerified(e, n),
                i = (0, p.UB)(e, [u.Z, d.Z]),
                l = r && !i,
                a = l !== g.get(e);
            return g.set(e, l), a;
        })(t),
        r = C(),
        i = v();
    return n || r || i;
}
function x() {
    g.clear(), b.clear(), (_ = !1);
}
class E extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(c.default, u.Z, d.Z, f.Z, h.Z);
    }
    isCallVerified() {
        return _;
    }
    isStreamVerified(e) {
        return b.get(e);
    }
    isUserVerified(e) {
        return g.get(e);
    }
}
(i = "displayName") in E
    ? Object.defineProperty(E, i, {
          value: "SecureFramesVerifiedStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (E[i] = "SecureFramesVerifiedStore");
let j = new E(o.Z, {
    CONNECTION_OPEN: x,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (t === y) return !1;
        (y = t), x();
    },
    RTC_CONNECTION_STATE: function (e) {
        let { streamKey: t, state: n, context: r } = e;
        if (n !== m.hes.DISCONNECTED) return !1;
        switch (r) {
            case a.Yn.STREAM:
                if (null == t) return !1;
                return b.delete(t), v();
            case a.Yn.DEFAULT:
                x();
        }
    },
    RTC_CONNECTION_ROSTER_MAP_UPDATE: function (e) {
        let { userIds: t } = e,
            n = c.default.getId(),
            r = t.reduce((e, t) => (n === t ? e : !!O({ userId: t }) || e), !1),
            i = C(),
            l = v();
        return r || i || l;
    },
    SECURE_FRAMES_TRANSIENT_KEY_CREATE: O,
    SECURE_FRAMES_TRANSIENT_KEY_DELETE: O,
    SECURE_FRAMES_VERIFIED_KEY_CREATE: O,
    SECURE_FRAMES_VERIFIED_KEY_DELETE: O,
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: O,
});
