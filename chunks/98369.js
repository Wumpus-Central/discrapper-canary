n.d(t, { Z: () => I }), n(388685), n(410992), n(227481), n(730884), n(20464), n(341884), n(364341), n(629680), n(505025), n(918970), n(121784), n(644351), n(146733);
var r,
    l,
    i,
    a = n(442837),
    o = n(46973),
    u = n(570140),
    s = n(569545),
    c = n(314897),
    d = n(19780),
    f = n(959457),
    p = n(630759),
    m = n(729303),
    g = n(651941),
    E = n(981631);
let h = new Map(),
    v = new Map(),
    S = !1,
    b = null;
function O() {
    return f.Z.getAllActiveStreamKeys().reduce((e, t) => {
        let { ownerId: n } = (0, s.my)(t),
            r = !0 === h.get(n),
            l = v.get(t) !== r;
        return v.set(t, r), !!l || e;
    }, !1);
}
function y() {
    var e;
    let t = null != (e = d.Z.getUserIds()) ? e : new Set(),
        n = c.default.getId(),
        r = !0;
    for (let e of t)
        if (n !== e && !0 !== h.get(e)) {
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
                r = g.Z.isKeyVerified(e, n) || m.Z.isKeyVerified(e, n),
                l = (0, p.UB)(e, [d.Z, f.Z]),
                i = r && !l,
                a = i !== h.get(e);
            return h.set(e, i), a;
        })(t),
        r = O(),
        l = y();
    return n || r || l;
}
function j() {
    h.clear(), v.clear(), (S = !1);
}
class _ extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(m.Z, g.Z, d.Z, f.Z);
    }
    isCallVerified() {
        return S;
    }
    isStreamVerified(e) {
        return v.get(e);
    }
    isUserVerified(e) {
        return h.get(e);
    }
}
(i = 'SecureFramesVerifiedStore'),
    (l = 'displayName') in _
        ? Object.defineProperty(_, l, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (_[l] = i);
let I = new _(u.Z, {
    CONNECTION_OPEN: j,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (t === b) return !1;
        (b = t), j();
    },
    RTC_CONNECTION_STATE: function (e) {
        let { streamKey: t, state: n, context: r } = e;
        if (n !== E.hes.DISCONNECTED) return !1;
        switch (r) {
            case o.Yn.STREAM:
                if (null == t) return !1;
                return v.delete(t), y();
            case o.Yn.DEFAULT:
                j();
        }
    },
    RTC_CONNECTION_ROSTER_MAP_UPDATE: function (e) {
        let { userIds: t } = e,
            n = c.default.getId(),
            r = t.reduce((e, t) => (n === t ? e : !!Z({ userId: t }) || e), !1),
            l = O(),
            i = y();
        return r || l || i;
    },
    SECURE_FRAMES_TRANSIENT_KEY_CREATE: Z,
    SECURE_FRAMES_TRANSIENT_KEY_DELETE: Z,
    SECURE_FRAMES_VERIFIED_KEY_CREATE: Z,
    SECURE_FRAMES_VERIFIED_KEY_DELETE: Z,
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: Z
});
