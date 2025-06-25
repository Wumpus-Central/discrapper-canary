n.d(t, { Z: () => T }), n(388685), n(410992), n(227481), n(730884), n(20464), n(341884), n(364341), n(629680), n(505025), n(918970), n(121784), n(644351), n(146733);
var r,
    l,
    i,
    u = n(442837),
    s = n(46973),
    a = n(570140),
    o = n(569545),
    c = n(314897),
    d = n(19780),
    f = n(959457),
    E = n(630759),
    g = n(729303),
    _ = n(651941),
    y = n(981631);
let m = new Map(),
    S = new Map(),
    h = !1,
    p = null;
function b() {
    return f.Z.getAllActiveStreamKeys().reduce((e, t) => {
        let { ownerId: n } = (0, o.my)(t),
            r = !0 === m.get(n),
            l = S.get(t) !== r;
        return S.set(t, r), !!l || e;
    }, !1);
}
function R() {
    var e;
    let t = null != (e = d.Z.getUserIds()) ? e : new Set(),
        n = c.default.getId(),
        r = !0;
    for (let e of t)
        if (n !== e && !0 !== m.get(e)) {
            r = !1;
            break;
        }
    let l = r !== h;
    return (h = r), l;
}
function N(e) {
    let { userId: t } = e;
    if (c.default.getId() === t) return !1;
    let n = (function (e) {
            let t = d.Z.getSecureFramesRosterMapEntry(e);
            if (null == t) return !1;
            let n = new Uint8Array(t),
                r = _.Z.isKeyVerified(e, n) || g.Z.isKeyVerified(e, n),
                l = (0, E.UB)(e, [d.Z, f.Z]),
                i = r && !l,
                u = i !== m.get(e);
            return m.set(e, i), u;
        })(t),
        r = b(),
        l = R();
    return n || r || l;
}
function I() {
    m.clear(), S.clear(), (h = !1);
}
class v extends (r = u.ZP.Store) {
    initialize() {
        this.waitFor(g.Z, _.Z, d.Z, f.Z);
    }
    isCallVerified() {
        return h;
    }
    isStreamVerified(e) {
        return S.get(e);
    }
    isUserVerified(e) {
        return m.get(e);
    }
}
(i = 'SecureFramesVerifiedStore'),
    (l = 'displayName') in v
        ? Object.defineProperty(v, l, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (v[l] = i);
let T = new v(a.Z, {
    CONNECTION_OPEN: I,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (t === p) return !1;
        (p = t), I();
    },
    RTC_CONNECTION_STATE: function (e) {
        let { streamKey: t, state: n, context: r } = e;
        if (n !== y.hes.DISCONNECTED) return !1;
        switch (r) {
            case s.Yn.STREAM:
                if (null == t) return !1;
                return S.delete(t), R();
            case s.Yn.DEFAULT:
                I();
        }
    },
    RTC_CONNECTION_ROSTER_MAP_UPDATE: function (e) {
        let { userIds: t } = e,
            n = c.default.getId(),
            r = t.reduce((e, t) => (n === t ? e : !!N({ userId: t }) || e), !1),
            l = b(),
            i = R();
        return r || l || i;
    },
    SECURE_FRAMES_TRANSIENT_KEY_CREATE: N,
    SECURE_FRAMES_TRANSIENT_KEY_DELETE: N,
    SECURE_FRAMES_VERIFIED_KEY_CREATE: N,
    SECURE_FRAMES_VERIFIED_KEY_DELETE: N,
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: N
});
