n(47120), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(724458);
var r,
    l,
    i,
    u,
    s = n(442837),
    o = n(46973),
    a = n(570140),
    c = n(569545),
    d = n(314897),
    f = n(19780),
    E = n(959457),
    S = n(630759),
    _ = n(729303),
    g = n(651941),
    m = n(981631);
let h = new Map(),
    R = new Map(),
    I = !1,
    C = null;
function N() {
    return E.Z.getAllActiveStreamKeys().reduce((e, t) => {
        let { ownerId: n } = (0, c.my)(t),
            r = !0 === h.get(n),
            l = R.get(t) !== r;
        return R.set(t, r), !!l || e;
    }, !1);
}
function T() {
    var e;
    let t = null !== (e = f.Z.getUserIds()) && void 0 !== e ? e : new Set(),
        n = d.default.getId(),
        r = !0;
    for (let e of t)
        if (n !== e && !0 !== h.get(e)) {
            r = !1;
            break;
        }
    let l = r !== I;
    return (I = r), l;
}
function v(e) {
    let { userId: t } = e;
    if (d.default.getId() === t) return !1;
    let n = (function (e) {
            let t = f.Z.getSecureFramesRosterMapEntry(e);
            if (null == t) return !1;
            let n = new Uint8Array(t),
                r = g.Z.isKeyVerified(e, n) || _.Z.isKeyVerified(e, n),
                l = (0, S.UB)(e, [f.Z, E.Z]),
                i = r && !l,
                u = i !== h.get(e);
            return h.set(e, i), u;
        })(t),
        r = N(),
        l = T();
    return n || r || l;
}
function y() {
    h.clear(), R.clear(), (I = !1);
}
class Z extends (r = s.ZP.Store) {
    initialize() {
        this.waitFor(_.Z, g.Z, f.Z, E.Z);
    }
    isCallVerified() {
        return I;
    }
    isStreamVerified(e) {
        return R.get(e);
    }
    isUserVerified(e) {
        return h.get(e);
    }
}
(u = 'SecureFramesVerifiedStore'),
    (i = 'displayName') in (l = Z)
        ? Object.defineProperty(l, i, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[i] = u),
    (t.Z = new Z(a.Z, {
        CONNECTION_OPEN: y,
        VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            if (t === C) return !1;
            (C = t), y();
        },
        RTC_CONNECTION_STATE: function (e) {
            let { streamKey: t, state: n, context: r } = e;
            if (n !== m.hes.DISCONNECTED) return !1;
            switch (r) {
                case o.Yn.STREAM:
                    if (null == t) return !1;
                    return R.delete(t), T();
                case o.Yn.DEFAULT:
                    y();
            }
        },
        RTC_CONNECTION_ROSTER_MAP_UPDATE: function (e) {
            let { userIds: t } = e,
                n = d.default.getId(),
                r = t.reduce((e, t) => (n === t ? e : !!v({ userId: t }) || e), !1),
                l = N(),
                i = T();
            return r || l || i;
        },
        SECURE_FRAMES_TRANSIENT_KEY_CREATE: v,
        SECURE_FRAMES_TRANSIENT_KEY_DELETE: v,
        SECURE_FRAMES_VERIFIED_KEY_CREATE: v,
        SECURE_FRAMES_VERIFIED_KEY_DELETE: v,
        SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: v
    }));
