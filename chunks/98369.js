n.d(t, { Z: () => R }), n(47120), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(724458);
var l,
    i,
    r,
    a = n(442837),
    s = n(46973),
    o = n(570140),
    u = n(569545),
    c = n(314897),
    d = n(19780),
    m = n(959457),
    f = n(630759),
    h = n(729303),
    p = n(651941),
    v = n(981631);
let g = new Map(),
    E = new Map(),
    x = !1,
    Z = null;
function S() {
    return m.Z.getAllActiveStreamKeys().reduce((e, t) => {
        let { ownerId: n } = (0, u.my)(t),
            l = !0 === g.get(n),
            i = E.get(t) !== l;
        return E.set(t, l), !!i || e;
    }, !1);
}
function C() {
    var e;
    let t = null !== (e = d.Z.getUserIds()) && void 0 !== e ? e : new Set(),
        n = c.default.getId(),
        l = !0;
    for (let e of t)
        if (n !== e && !0 !== g.get(e)) {
            l = !1;
            break;
        }
    let i = l !== x;
    return (x = l), i;
}
function b(e) {
    let { userId: t } = e;
    if (c.default.getId() === t) return !1;
    let n = (function (e) {
            let t = d.Z.getSecureFramesRosterMapEntry(e);
            if (null == t) return !1;
            let n = new Uint8Array(t),
                l = p.Z.isKeyVerified(e, n) || h.Z.isKeyVerified(e, n),
                i = (0, f.UB)(e, [d.Z, m.Z]),
                r = l && !i,
                a = r !== g.get(e);
            return g.set(e, r), a;
        })(t),
        l = S(),
        i = C();
    return n || l || i;
}
function I() {
    g.clear(), E.clear(), (x = !1);
}
class _ extends (l = a.ZP.Store) {
    initialize() {
        this.waitFor(h.Z, p.Z, d.Z, m.Z);
    }
    isCallVerified() {
        return x;
    }
    isStreamVerified(e) {
        return E.get(e);
    }
    isUserVerified(e) {
        return g.get(e);
    }
}
(r = 'SecureFramesVerifiedStore'),
    (i = 'displayName') in _
        ? Object.defineProperty(_, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (_[i] = r);
let R = new _(o.Z, {
    CONNECTION_OPEN: I,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (t === Z) return !1;
        (Z = t), I();
    },
    RTC_CONNECTION_STATE: function (e) {
        let { streamKey: t, state: n, context: l } = e;
        if (n !== v.hes.DISCONNECTED) return !1;
        switch (l) {
            case s.Yn.STREAM:
                if (null == t) return !1;
                return E.delete(t), C();
            case s.Yn.DEFAULT:
                I();
        }
    },
    RTC_CONNECTION_ROSTER_MAP_UPDATE: function (e) {
        let { userIds: t } = e,
            n = c.default.getId(),
            l = t.reduce((e, t) => (n === t ? e : !!b({ userId: t }) || e), !1),
            i = S(),
            r = C();
        return l || i || r;
    },
    SECURE_FRAMES_TRANSIENT_KEY_CREATE: b,
    SECURE_FRAMES_TRANSIENT_KEY_DELETE: b,
    SECURE_FRAMES_VERIFIED_KEY_CREATE: b,
    SECURE_FRAMES_VERIFIED_KEY_DELETE: b,
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: b
});
