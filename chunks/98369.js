n.d(t, { Z: () => b }), n(47120), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(724458);
var i,
    l,
    a,
    r = n(442837),
    s = n(46973),
    o = n(570140),
    c = n(569545),
    u = n(314897),
    d = n(19780),
    m = n(959457),
    f = n(630759),
    p = n(729303),
    h = n(651941),
    g = n(981631);
let v = new Map(),
    _ = new Map(),
    S = !1,
    I = null;
function x() {
    return m.Z.getAllActiveStreamKeys().reduce((e, t) => {
        let { ownerId: n } = (0, c.my)(t),
            i = !0 === v.get(n),
            l = _.get(t) !== i;
        return _.set(t, i), !!l || e;
    }, !1);
}
function E() {
    var e;
    let t = null !== (e = d.Z.getUserIds()) && void 0 !== e ? e : new Set(),
        n = u.default.getId(),
        i = !0;
    for (let e of t)
        if (n !== e && !0 !== v.get(e)) {
            i = !1;
            break;
        }
    let l = i !== S;
    return (S = i), l;
}
function C(e) {
    let { userId: t } = e;
    if (u.default.getId() === t) return !1;
    let n = (function (e) {
            let t = d.Z.getSecureFramesRosterMapEntry(e);
            if (null == t) return !1;
            let n = new Uint8Array(t),
                i = h.Z.isKeyVerified(e, n) || p.Z.isKeyVerified(e, n),
                l = (0, f.UB)(e, [d.Z, m.Z]),
                a = i && !l,
                r = a !== v.get(e);
            return v.set(e, a), r;
        })(t),
        i = x(),
        l = E();
    return n || i || l;
}
function Z() {
    v.clear(), _.clear(), (S = !1);
}
class y extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, h.Z, d.Z, m.Z);
    }
    isCallVerified() {
        return S;
    }
    isStreamVerified(e) {
        return _.get(e);
    }
    isUserVerified(e) {
        return v.get(e);
    }
}
(a = 'SecureFramesVerifiedStore'),
    (l = 'displayName') in y
        ? Object.defineProperty(y, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (y[l] = a);
let b = new y(o.Z, {
    CONNECTION_OPEN: Z,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (t === I) return !1;
        (I = t), Z();
    },
    RTC_CONNECTION_STATE: function (e) {
        let { streamKey: t, state: n, context: i } = e;
        if (n !== g.hes.DISCONNECTED) return !1;
        switch (i) {
            case s.Yn.STREAM:
                if (null == t) return !1;
                return _.delete(t), E();
            case s.Yn.DEFAULT:
                Z();
        }
    },
    RTC_CONNECTION_ROSTER_MAP_UPDATE: function (e) {
        let { userIds: t } = e,
            n = u.default.getId(),
            i = t.reduce((e, t) => (n === t ? e : !!C({ userId: t }) || e), !1),
            l = x(),
            a = E();
        return i || l || a;
    },
    SECURE_FRAMES_TRANSIENT_KEY_CREATE: C,
    SECURE_FRAMES_TRANSIENT_KEY_DELETE: C,
    SECURE_FRAMES_VERIFIED_KEY_CREATE: C,
    SECURE_FRAMES_VERIFIED_KEY_DELETE: C,
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: C
});
