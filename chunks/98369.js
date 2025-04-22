n.d(t, { Z: () => _ }), n(388685), n(410992), n(227481), n(730884), n(20464), n(341884), n(364341), n(629680), n(505025), n(918970), n(121784), n(644351), n(146733);
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
    E = n(651941),
    g = n(981631);
let v = new Map(),
    h = new Map(),
    S = !1,
    b = null;
function y() {
    return f.Z.getAllActiveStreamKeys().reduce((e, t) => {
        let { ownerId: n } = (0, u.my)(t),
            r = !0 === v.get(n),
            l = h.get(t) !== r;
        return h.set(t, r), !!l || e;
    }, !1);
}
function O() {
    var e;
    let t = null != (e = d.Z.getUserIds()) ? e : new Set(),
        n = c.default.getId(),
        r = !0;
    for (let e of t)
        if (n !== e && !0 !== v.get(e)) {
            r = !1;
            break;
        }
    let l = r !== S;
    return (S = r), l;
}
function Z(e) {
    let { userId: t } = e;
    if (c.default.getId() === t) return !1;
    let n = (function (e) {
            let t = d.Z.getSecureFramesRosterMapEntry(e);
            if (null == t) return !1;
            let n = new Uint8Array(t),
                r = E.Z.isKeyVerified(e, n) || p.Z.isKeyVerified(e, n),
                l = (0, m.UB)(e, [d.Z, f.Z]),
                i = r && !l,
                a = i !== v.get(e);
            return v.set(e, i), a;
        })(t),
        r = y(),
        l = O();
    return n || r || l;
}
function j() {
    v.clear(), h.clear(), (S = !1);
}
class I extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, E.Z, d.Z, f.Z);
    }
    isCallVerified() {
        return S;
    }
    isStreamVerified(e) {
        return h.get(e);
    }
    isUserVerified(e) {
        return v.get(e);
    }
}
(i = 'SecureFramesVerifiedStore'),
    (l = 'displayName') in I
        ? Object.defineProperty(I, l, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (I[l] = i);
let _ = new I(s.Z, {
    CONNECTION_OPEN: j,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (t === b) return !1;
        (b = t), j();
    },
    RTC_CONNECTION_STATE: function (e) {
        let { streamKey: t, state: n, context: r } = e;
        if (n !== g.hes.DISCONNECTED) return !1;
        switch (r) {
            case o.Yn.STREAM:
                if (null == t) return !1;
                return h.delete(t), O();
            case o.Yn.DEFAULT:
                j();
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
