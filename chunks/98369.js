n.d(t, { Z: () => x }), n(388685), n(410992), n(227481), n(730884), n(20464), n(341884), n(364341), n(629680), n(505025), n(918970), n(121784), n(644351), n(146733);
var r,
    l,
    i,
    a = n(442837),
    o = n(46973),
    s = n(570140),
    u = n(569545),
    c = n(314897),
    d = n(19780),
    f = n(959457),
    m = n(630759),
    p = n(729303),
    g = n(651941),
    E = n(981631);
let h = new Map(),
    v = new Map(),
    b = !1,
    S = null;
function y() {
    return f.Z.getAllActiveStreamKeys().reduce((e, t) => {
        let { ownerId: n } = (0, u.my)(t),
            r = !0 === h.get(n),
            l = v.get(t) !== r;
        return v.set(t, r), !!l || e;
    }, !1);
}
function O() {
    var e;
    let t = null != (e = d.ZP.getUserIds()) ? e : new Set(),
        n = c.default.getId(),
        r = !0;
    for (let e of t)
        if (n !== e && !0 !== h.get(e)) {
            r = !1;
            break;
        }
    let l = r !== b;
    return (b = r), l;
}
function Z(e) {
    let { userId: t } = e;
    if (c.default.getId() === t) return !1;
    let n = (function (e) {
            let t = d.ZP.getSecureFramesRosterMapEntry(e);
            if (null == t) return !1;
            let n = new Uint8Array(t),
                r = g.Z.isKeyVerified(e, n) || p.Z.isKeyVerified(e, n),
                l = (0, m.UB)(e, [d.ZP, f.Z]),
                i = r && !l,
                a = i !== h.get(e);
            return h.set(e, i), a;
        })(t),
        r = y(),
        l = O();
    return n || r || l;
}
function I() {
    h.clear(), v.clear(), (b = !1);
}
class j extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, g.Z, d.ZP, f.Z);
    }
    isCallVerified() {
        return b;
    }
    isStreamVerified(e) {
        return v.get(e);
    }
    isUserVerified(e) {
        return h.get(e);
    }
}
(i = 'SecureFramesVerifiedStore'),
    (l = 'displayName') in j
        ? Object.defineProperty(j, l, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (j[l] = i);
let x = new j(s.Z, {
    CONNECTION_OPEN: I,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (t === S) return !1;
        (S = t), I();
    },
    RTC_CONNECTION_STATE: function (e) {
        let { streamKey: t, state: n, context: r } = e;
        if (n !== E.hes.DISCONNECTED) return !1;
        switch (r) {
            case o.Yn.STREAM:
                if (null == t) return !1;
                return v.delete(t), O();
            case o.Yn.DEFAULT:
                I();
        }
    },
    RTC_CONNECTION_ROSTER_MAP_UPDATE: function (e) {
        let { userIds: t } = e,
            n = c.default.getId(),
            r = t.reduce((e, t) => (n === t ? e : !!Z({ userId: t }) || e), !1),
            l = y(),
            i = O();
        return r || l || i;
    },
    SECURE_FRAMES_TRANSIENT_KEY_CREATE: Z,
    SECURE_FRAMES_TRANSIENT_KEY_DELETE: Z,
    SECURE_FRAMES_VERIFIED_KEY_CREATE: Z,
    SECURE_FRAMES_VERIFIED_KEY_DELETE: Z,
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: Z
});
