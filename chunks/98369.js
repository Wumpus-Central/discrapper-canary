r.d(t, { Z: () => T }), r(47120), r(518263), r(970173), r(520712), r(268111), r(941497), r(32026), r(480839), r(744285), r(492257), r(873817), r(610885), r(126298);
var n,
    l,
    i,
    u = r(442837),
    s = r(46973),
    a = r(570140),
    o = r(569545),
    c = r(314897),
    d = r(19780),
    f = r(959457),
    E = r(630759),
    g = r(729303),
    _ = r(651941),
    y = r(981631);
let S = new Map(),
    m = new Map(),
    h = !1,
    N = null;
function v() {
    return f.Z.getAllActiveStreamKeys().reduce((e, t) => {
        let { ownerId: r } = (0, o.my)(t),
            n = !0 === S.get(r),
            l = m.get(t) !== n;
        return m.set(t, n), !!l || e;
    }, !1);
}
function p() {
    var e;
    let t = null !== (e = d.Z.getUserIds()) && void 0 !== e ? e : new Set(),
        r = c.default.getId(),
        n = !0;
    for (let e of t)
        if (r !== e && !0 !== S.get(e)) {
            n = !1;
            break;
        }
    let l = n !== h;
    return (h = n), l;
}
function b(e) {
    let { userId: t } = e;
    if (c.default.getId() === t) return !1;
    let r = (function (e) {
            let t = d.Z.getSecureFramesRosterMapEntry(e);
            if (null == t) return !1;
            let r = new Uint8Array(t),
                n = _.Z.isKeyVerified(e, r) || g.Z.isKeyVerified(e, r),
                l = (0, E.UB)(e, [d.Z, f.Z]),
                i = n && !l,
                u = i !== S.get(e);
            return S.set(e, i), u;
        })(t),
        n = v(),
        l = p();
    return r || n || l;
}
function R() {
    S.clear(), m.clear(), (h = !1);
}
class I extends (n = u.ZP.Store) {
    initialize() {
        this.waitFor(g.Z, _.Z, d.Z, f.Z);
    }
    isCallVerified() {
        return h;
    }
    isStreamVerified(e) {
        return m.get(e);
    }
    isUserVerified(e) {
        return S.get(e);
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
let T = new I(a.Z, {
    CONNECTION_OPEN: R,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (t === N) return !1;
        (N = t), R();
    },
    RTC_CONNECTION_STATE: function (e) {
        let { streamKey: t, state: r, context: n } = e;
        if (r !== y.hes.DISCONNECTED) return !1;
        switch (n) {
            case s.Yn.STREAM:
                if (null == t) return !1;
                return m.delete(t), p();
            case s.Yn.DEFAULT:
                R();
        }
    },
    RTC_CONNECTION_ROSTER_MAP_UPDATE: function (e) {
        let { userIds: t } = e,
            r = c.default.getId(),
            n = t.reduce((e, t) => (r === t ? e : !!b({ userId: t }) || e), !1),
            l = v(),
            i = p();
        return n || l || i;
    },
    SECURE_FRAMES_TRANSIENT_KEY_CREATE: b,
    SECURE_FRAMES_TRANSIENT_KEY_DELETE: b,
    SECURE_FRAMES_VERIFIED_KEY_CREATE: b,
    SECURE_FRAMES_VERIFIED_KEY_DELETE: b,
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: b
});
