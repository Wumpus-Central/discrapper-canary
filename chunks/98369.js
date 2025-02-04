n.d(t, { Z: () => Z }), n(47120), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(724458);
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
    _ = n(729303),
    S = n(651941),
    g = n(981631);
let h = new Map(),
    m = new Map(),
    R = !1,
    N = null;
function I() {
    return f.Z.getAllActiveStreamKeys().reduce((e, t) => {
        let { ownerId: n } = (0, o.my)(t),
            r = !0 === h.get(n),
            l = m.get(t) !== r;
        return m.set(t, r), !!l || e;
    }, !1);
}
function T() {
    var e;
    let t = null !== (e = d.Z.getUserIds()) && void 0 !== e ? e : new Set(),
        n = c.default.getId(),
        r = !0;
    for (let e of t)
        if (n !== e && !0 !== h.get(e)) {
            r = !1;
            break;
        }
    let l = r !== R;
    return (R = r), l;
}
function v(e) {
    let { userId: t } = e;
    if (c.default.getId() === t) return !1;
    let n = (function (e) {
            let t = d.Z.getSecureFramesRosterMapEntry(e);
            if (null == t) return !1;
            let n = new Uint8Array(t),
                r = S.Z.isKeyVerified(e, n) || _.Z.isKeyVerified(e, n),
                l = (0, E.UB)(e, [d.Z, f.Z]),
                i = r && !l,
                u = i !== h.get(e);
            return h.set(e, i), u;
        })(t),
        r = I(),
        l = T();
    return n || r || l;
}
function y() {
    h.clear(), m.clear(), (R = !1);
}
class C extends (r = u.ZP.Store) {
    initialize() {
        this.waitFor(_.Z, S.Z, d.Z, f.Z);
    }
    isCallVerified() {
        return R;
    }
    isStreamVerified(e) {
        return m.get(e);
    }
    isUserVerified(e) {
        return h.get(e);
    }
}
(i = 'SecureFramesVerifiedStore'),
    (l = 'displayName') in C
        ? Object.defineProperty(C, l, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (C[l] = i);
let Z = new C(a.Z, {
    CONNECTION_OPEN: y,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (t === N) return !1;
        (N = t), y();
    },
    RTC_CONNECTION_STATE: function (e) {
        let { streamKey: t, state: n, context: r } = e;
        if (n !== g.hes.DISCONNECTED) return !1;
        switch (r) {
            case s.Yn.STREAM:
                if (null == t) return !1;
                return m.delete(t), T();
            case s.Yn.DEFAULT:
                y();
        }
    },
    RTC_CONNECTION_ROSTER_MAP_UPDATE: function (e) {
        let { userIds: t } = e,
            n = c.default.getId(),
            r = t.reduce((e, t) => (n === t ? e : !!v({ userId: t }) || e), !1),
            l = I(),
            i = T();
        return r || l || i;
    },
    SECURE_FRAMES_TRANSIENT_KEY_CREATE: v,
    SECURE_FRAMES_TRANSIENT_KEY_DELETE: v,
    SECURE_FRAMES_VERIFIED_KEY_CREATE: v,
    SECURE_FRAMES_VERIFIED_KEY_DELETE: v,
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: v
});
