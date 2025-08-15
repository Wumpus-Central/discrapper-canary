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
    l,
    i = n(442837),
    a = n(46973),
    o = n(570140),
    u = n(569545),
    s = n(314897),
    c = n(19780),
    d = n(959457),
    f = n(630759),
    p = n(729303),
    m = n(651941),
    E = n(981631);
let g = new Map(),
    S = new Map(),
    v = !1,
    h = null;
function b() {
    return d.Z.getAllActiveStreamKeys().reduce((e, t) => {
        let { ownerId: n } = (0, u.my)(t),
            r = !0 === g.get(n),
            l = S.get(t) !== r;
        return S.set(t, r), !!l || e;
    }, !1);
}
function O() {
    var e;
    let t = null != (e = c.Z.getUserIds()) ? e : new Set(),
        n = s.default.getId(),
        r = !0;
    for (let e of t)
        if (n !== e && !0 !== g.get(e)) {
            r = !1;
            break;
        }
    let l = r !== v;
    return (v = r), l;
}
function y(e) {
    let { userId: t } = e;
    if (s.default.getId() === t) return !1;
    let n = (function (e) {
            let t = c.Z.getSecureFramesRosterMapEntry(e);
            if (null == t) return !1;
            let n = new Uint8Array(t),
                r = m.Z.isKeyVerified(e, n) || p.Z.isKeyVerified(e, n),
                l = (0, f.UB)(e, [c.Z, d.Z]),
                i = r && !l,
                a = i !== g.get(e);
            return g.set(e, i), a;
        })(t),
        r = b(),
        l = O();
    return n || r || l;
}
function _() {
    g.clear(), S.clear(), (v = !1);
}
class Z extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, m.Z, c.Z, d.Z);
    }
    isCallVerified() {
        return v;
    }
    isStreamVerified(e) {
        return S.get(e);
    }
    isUserVerified(e) {
        return g.get(e);
    }
}
(l = "displayName") in Z
    ? Object.defineProperty(Z, l, {
          value: "SecureFramesVerifiedStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (Z[l] = "SecureFramesVerifiedStore");
let j = new Z(o.Z, {
    CONNECTION_OPEN: _,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (t === h) return !1;
        (h = t), _();
    },
    RTC_CONNECTION_STATE: function (e) {
        let { streamKey: t, state: n, context: r } = e;
        if (n !== E.hes.DISCONNECTED) return !1;
        switch (r) {
            case a.Yn.STREAM:
                if (null == t) return !1;
                return S.delete(t), O();
            case a.Yn.DEFAULT:
                _();
        }
    },
    RTC_CONNECTION_ROSTER_MAP_UPDATE: function (e) {
        let { userIds: t } = e,
            n = s.default.getId(),
            r = t.reduce((e, t) => (n === t ? e : !!y({ userId: t }) || e), !1),
            l = b(),
            i = O();
        return r || l || i;
    },
    SECURE_FRAMES_TRANSIENT_KEY_CREATE: y,
    SECURE_FRAMES_TRANSIENT_KEY_DELETE: y,
    SECURE_FRAMES_VERIFIED_KEY_CREATE: y,
    SECURE_FRAMES_VERIFIED_KEY_DELETE: y,
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: y,
});
