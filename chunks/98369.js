n.d(t, { Z: () => C }),
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
    _ = n(651941),
    m = n(981631);
let g = new Map(),
    E = new Map(),
    b = !1,
    v = null;
function h() {
    return d.Z.getAllActiveStreamKeys().reduce((e, t) => {
        let { ownerId: n } = (0, c.my)(t),
            r = !0 === g.get(n),
            i = E.get(t) !== r;
        return E.set(t, r), !!i || e;
    }, !1);
}
function S() {
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
function y(e) {
    let { userId: t } = e;
    if (s.default.getId() === t) return !1;
    let n = (function (e) {
            let t = u.Z.getSecureFramesRosterMapEntry(e);
            if (null == t) return !1;
            let n = new Uint8Array(t),
                r = _.Z.isKeyVerified(e, n) || p.Z.isKeyVerified(e, n),
                i = (0, f.UB)(e, [u.Z, d.Z]),
                l = r && !i,
                a = l !== g.get(e);
            return g.set(e, l), a;
        })(t),
        r = h(),
        i = S();
    return n || r || i;
}
function O() {
    g.clear(), E.clear(), (b = !1);
}
class I extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, _.Z, u.Z, d.Z);
    }
    isCallVerified() {
        return b;
    }
    isStreamVerified(e) {
        return E.get(e);
    }
    isUserVerified(e) {
        return g.get(e);
    }
}
(i = "displayName") in I
    ? Object.defineProperty(I, i, {
          value: "SecureFramesVerifiedStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (I[i] = "SecureFramesVerifiedStore");
let C = new I(o.Z, {
    CONNECTION_OPEN: O,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (t === v) return !1;
        (v = t), O();
    },
    RTC_CONNECTION_STATE: function (e) {
        let { streamKey: t, state: n, context: r } = e;
        if (n !== m.hes.DISCONNECTED) return !1;
        switch (r) {
            case a.Yn.STREAM:
                if (null == t) return !1;
                return E.delete(t), S();
            case a.Yn.DEFAULT:
                O();
        }
    },
    RTC_CONNECTION_ROSTER_MAP_UPDATE: function (e) {
        let { userIds: t } = e,
            n = s.default.getId(),
            r = t.reduce((e, t) => (n === t ? e : !!y({ userId: t }) || e), !1),
            i = h(),
            l = S();
        return r || i || l;
    },
    SECURE_FRAMES_TRANSIENT_KEY_CREATE: y,
    SECURE_FRAMES_TRANSIENT_KEY_DELETE: y,
    SECURE_FRAMES_VERIFIED_KEY_CREATE: y,
    SECURE_FRAMES_VERIFIED_KEY_DELETE: y,
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: y,
});
