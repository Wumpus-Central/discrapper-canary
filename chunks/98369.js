n(47120), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(724458);
var i,
    l,
    a,
    r,
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
    _ = !1,
    x = null;
function E() {
    return f.Z.getAllActiveStreamKeys().reduce((e, t) => {
        let { ownerId: n } = (0, u.my)(t),
            i = !0 === S.get(n),
            l = I.get(t) !== i;
        return I.set(t, i), !!l || e;
    }, !1);
}
function C() {
    var e;
    let t = null !== (e = m.Z.getUserIds()) && void 0 !== e ? e : new Set(),
        n = d.default.getId(),
        i = !0;
    for (let e of t)
        if (n !== e && !0 !== S.get(e)) {
            i = !1;
            break;
        }
    let l = i !== _;
    return (_ = i), l;
}
function y(e) {
    let { userId: t } = e;
    if (d.default.getId() === t) return !1;
    let n = (function (e) {
            let t = m.Z.getSecureFramesRosterMapEntry(e);
            if (null == t) return !1;
            let n = new Uint8Array(t),
                i = g.Z.isKeyVerified(e, n) || h.Z.isKeyVerified(e, n),
                l = (0, p.UB)(e, [m.Z, f.Z]),
                a = i && !l,
                r = a !== S.get(e);
            return S.set(e, a), r;
        })(t),
        i = E(),
        l = C();
    return n || i || l;
}
function b() {
    S.clear(), I.clear(), (_ = !1);
}
class Z extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(h.Z, g.Z, m.Z, f.Z);
    }
    isCallVerified() {
        return _;
    }
    isStreamVerified(e) {
        return I.get(e);
    }
    isUserVerified(e) {
        return S.get(e);
    }
}
(r = 'SecureFramesVerifiedStore'),
    (a = 'displayName') in (l = Z)
        ? Object.defineProperty(l, a, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[a] = r),
    (t.Z = new Z(c.Z, {
        CONNECTION_OPEN: b,
        VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            if (t === x) return !1;
            (x = t), b();
        },
        RTC_CONNECTION_STATE: function (e) {
            let { streamKey: t, state: n, context: i } = e;
            if (n !== v.hes.DISCONNECTED) return !1;
            switch (i) {
                case o.Yn.STREAM:
                    if (null == t) return !1;
                    return I.delete(t), C();
                case o.Yn.DEFAULT:
                    b();
            }
        },
        RTC_CONNECTION_ROSTER_MAP_UPDATE: function (e) {
            let { userIds: t } = e,
                n = d.default.getId(),
                i = t.reduce((e, t) => (n === t ? e : !!y({ userId: t }) || e), !1),
                l = E(),
                a = C();
            return i || l || a;
        },
        SECURE_FRAMES_TRANSIENT_KEY_CREATE: y,
        SECURE_FRAMES_TRANSIENT_KEY_DELETE: y,
        SECURE_FRAMES_VERIFIED_KEY_CREATE: y,
        SECURE_FRAMES_VERIFIED_KEY_DELETE: y,
        SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: y
    }));
