n.d(t, { Z: () => I }),
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
    c = n(569545),
    s = n(314897),
    u = n(19780),
    d = n(959457),
    f = n(630759),
    p = n(729303),
    m = n(651941),
    _ = n(981631);
let g = new Map(),
    v = new Map(),
    b = !1,
    E = null;
function h() {
    return d.Z.getAllActiveStreamKeys().reduce((e, t) => {
        let { ownerId: n } = (0, c.my)(t),
            r = !0 === g.get(n),
            i = v.get(t) !== r;
        return v.set(t, r), !!i || e;
    }, !1);
}
function y() {
    var e;
    let t = null != (e = u.Z.getUserIds()) ? e : new Set(),
        n = s.default.getId(),
        r = !0;
    for (let e of t)
        if (n !== e && !0 !== g.get(e)) {
            r = !1;
            break;
        }
    let i = r !== b;
    return (b = r), i;
}
function S(e) {
    let { userId: t } = e;
    if (s.default.getId() === t) return !1;
    let n = (function (e) {
            let t = u.Z.getSecureFramesRosterMapEntry(e);
            if (null == t) return !1;
            let n = new Uint8Array(t),
                r = m.Z.isKeyVerified(e, n) || p.Z.isKeyVerified(e, n),
                i = (0, f.UB)(e, [u.Z, d.Z]),
                l = r && !i,
                a = l !== g.get(e);
            return g.set(e, l), a;
        })(t),
        r = h(),
        i = y();
    return n || r || i;
}
function O() {
    g.clear(), v.clear(), (b = !1);
}
class C extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(s.default, u.Z, d.Z, p.Z, m.Z);
    }
    isCallVerified() {
        return b;
    }
    isStreamVerified(e) {
        return v.get(e);
    }
    isUserVerified(e) {
        return g.get(e);
    }
}
(i = "displayName") in C
    ? Object.defineProperty(C, i, {
          value: "SecureFramesVerifiedStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (C[i] = "SecureFramesVerifiedStore");
let I = new C(o.Z, {
    CONNECTION_OPEN: O,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (t === E) return !1;
        (E = t), O();
    },
    RTC_CONNECTION_STATE: function (e) {
        let { streamKey: t, state: n, context: r } = e;
        if (n !== _.hes.DISCONNECTED) return !1;
        switch (r) {
            case a.Yn.STREAM:
                if (null == t) return !1;
                return v.delete(t), y();
            case a.Yn.DEFAULT:
                O();
        }
    },
    RTC_CONNECTION_ROSTER_MAP_UPDATE: function (e) {
        let { userIds: t } = e,
            n = s.default.getId(),
            r = t.reduce((e, t) => (n === t ? e : !!S({ userId: t }) || e), !1),
            i = h(),
            l = y();
        return r || i || l;
    },
    SECURE_FRAMES_TRANSIENT_KEY_CREATE: S,
    SECURE_FRAMES_TRANSIENT_KEY_DELETE: S,
    SECURE_FRAMES_VERIFIED_KEY_CREATE: S,
    SECURE_FRAMES_VERIFIED_KEY_DELETE: S,
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: S,
});
