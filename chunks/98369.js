n.d(t, { Z: () => A }), n(388685), n(410992), n(227481), n(730884), n(20464), n(341884), n(364341), n(629680), n(505025), n(918970), n(121784), n(644351), n(146733);
var r,
    l,
    i,
    a = n(442837),
    u = n(46973),
    o = n(570140),
    s = n(569545),
    c = n(314897),
    d = n(19780),
    f = n(959457),
    m = n(630759),
    p = n(729303),
    E = n(651941),
    g = n(981631);
let h = new Map(),
    S = new Map(),
    O = !1,
    v = null;
function b() {
    return f.Z.getAllActiveStreamKeys().reduce((e, t) => {
        let { ownerId: n } = (0, s.my)(t),
            r = !0 === h.get(n),
            l = S.get(t) !== r;
        return S.set(t, r), !!l || e;
    }, !1);
}
function I() {
    var e;
    let t = null != (e = d.Z.getUserIds()) ? e : new Set(),
        n = c.default.getId(),
        r = !0;
    for (let e of t)
        if (n !== e && !0 !== h.get(e)) {
            r = !1;
            break;
        }
    let l = r !== O;
    return (O = r), l;
}
function _(e) {
    let { userId: t } = e;
    if (c.default.getId() === t) return !1;
    let n = (function (e) {
            let t = d.Z.getSecureFramesRosterMapEntry(e);
            if (null == t) return !1;
            let n = new Uint8Array(t),
                r = E.Z.isKeyVerified(e, n) || p.Z.isKeyVerified(e, n),
                l = (0, m.UB)(e, [d.Z, f.Z]),
                i = r && !l,
                a = i !== h.get(e);
            return h.set(e, i), a;
        })(t),
        r = b(),
        l = I();
    return n || r || l;
}
function y() {
    h.clear(), S.clear(), (O = !1);
}
class Z extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, E.Z, d.Z, f.Z);
    }
    isCallVerified() {
        return O;
    }
    isStreamVerified(e) {
        return S.get(e);
    }
    isUserVerified(e) {
        return h.get(e);
    }
}
(i = 'SecureFramesVerifiedStore'),
    (l = 'displayName') in Z
        ? Object.defineProperty(Z, l, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (Z[l] = i);
let A = new Z(o.Z, {
    CONNECTION_OPEN: y,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (t === v) return !1;
        (v = t), y();
    },
    RTC_CONNECTION_STATE: function (e) {
        let { streamKey: t, state: n, context: r } = e;
        if (n !== g.hes.DISCONNECTED) return !1;
        switch (r) {
            case u.Yn.STREAM:
                if (null == t) return !1;
                return S.delete(t), I();
            case u.Yn.DEFAULT:
                y();
        }
    },
    RTC_CONNECTION_ROSTER_MAP_UPDATE: function (e) {
        let { userIds: t } = e,
            n = c.default.getId(),
            r = t.reduce((e, t) => (n === t ? e : !!_({ userId: t }) || e), !1),
            l = b(),
            i = I();
        return r || l || i;
    },
    SECURE_FRAMES_TRANSIENT_KEY_CREATE: _,
    SECURE_FRAMES_TRANSIENT_KEY_DELETE: _,
    SECURE_FRAMES_VERIFIED_KEY_CREATE: _,
    SECURE_FRAMES_VERIFIED_KEY_DELETE: _,
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: _
});
