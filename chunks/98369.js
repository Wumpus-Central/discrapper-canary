n(47120), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(724458);
var i,
    l,
    r,
    a,
    s = n(442837),
    o = n(46973),
    c = n(570140),
    u = n(569545),
    d = n(314897),
    m = n(19780),
    f = n(959457),
    p = n(630759),
    h = n(729303),
    g = n(651941),
    v = n(981631);
let S = new Map(),
    I = new Map(),
    x = !1,
    _ = null;
function C() {
    return f.Z.getAllActiveStreamKeys().reduce((e, t) => {
        let { ownerId: n } = (0, u.my)(t),
            i = !0 === S.get(n),
            l = I.get(t) !== i;
        return I.set(t, i), !!l || e;
    }, !1);
}
function b() {
    var e;
    let t = null !== (e = m.Z.getUserIds()) && void 0 !== e ? e : new Set(),
        n = d.default.getId(),
        i = !0;
    for (let e of t)
        if (n !== e && !0 !== S.get(e)) {
            i = !1;
            break;
        }
    let l = i !== x;
    return (x = i), l;
}
function E(e) {
    let { userId: t } = e;
    if (d.default.getId() === t) return !1;
    let n = (function (e) {
            let t = m.Z.getSecureFramesRosterMapEntry(e);
            if (null == t) return !1;
            let n = new Uint8Array(t),
                i = g.Z.isKeyVerified(e, n) || h.Z.isKeyVerified(e, n),
                l = (0, p.UB)(e, [m.Z, f.Z]),
                r = i && !l,
                a = r !== S.get(e);
            return S.set(e, r), a;
        })(t),
        i = C(),
        l = b();
    return n || i || l;
}
function y() {
    S.clear(), I.clear(), (x = !1);
}
class Z extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(h.Z, g.Z, m.Z, f.Z);
    }
    isCallVerified() {
        return x;
    }
    isStreamVerified(e) {
        return I.get(e);
    }
    isUserVerified(e) {
        return S.get(e);
    }
}
(a = 'SecureFramesVerifiedStore'),
    (r = 'displayName') in (l = Z)
        ? Object.defineProperty(l, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[r] = a),
    (t.Z = new Z(c.Z, {
        CONNECTION_OPEN: y,
        VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            if (t === _) return !1;
            (_ = t), y();
        },
        RTC_CONNECTION_STATE: function (e) {
            let { streamKey: t, state: n, context: i } = e;
            if (n !== v.hes.DISCONNECTED) return !1;
            switch (i) {
                case o.Yn.STREAM:
                    if (null == t) return !1;
                    return I.delete(t), b();
                case o.Yn.DEFAULT:
                    y();
            }
        },
        RTC_CONNECTION_ROSTER_MAP_UPDATE: function (e) {
            let { userIds: t } = e,
                n = d.default.getId(),
                i = t.reduce((e, t) => (n === t ? e : !!E({ userId: t }) || e), !1),
                l = C(),
                r = b();
            return i || l || r;
        },
        SECURE_FRAMES_TRANSIENT_KEY_CREATE: E,
        SECURE_FRAMES_TRANSIENT_KEY_DELETE: E,
        SECURE_FRAMES_VERIFIED_KEY_CREATE: E,
        SECURE_FRAMES_VERIFIED_KEY_DELETE: E,
        SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: E
    }));
