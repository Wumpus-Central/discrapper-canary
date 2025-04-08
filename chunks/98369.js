r.d(t, { Z: () => T }), r(388685), r(410992), r(227481), r(730884), r(20464), r(341884), r(364341), r(629680), r(505025), r(918970), r(121784), r(644351), r(146733);
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
let m = new Map(),
    S = new Map(),
    h = !1,
    N = null;
function p() {
    return f.Z.getAllActiveStreamKeys().reduce((e, t) => {
        let { ownerId: r } = (0, o.my)(t),
            n = !0 === m.get(r),
            l = S.get(t) !== n;
        return S.set(t, n), !!l || e;
    }, !1);
}
function b() {
    var e;
    let t = null != (e = d.ZP.getUserIds()) ? e : new Set(),
        r = c.default.getId(),
        n = !0;
    for (let e of t)
        if (r !== e && !0 !== m.get(e)) {
            n = !1;
            break;
        }
    let l = n !== h;
    return (h = n), l;
}
function R(e) {
    let { userId: t } = e;
    if (c.default.getId() === t) return !1;
    let r = (function (e) {
            let t = d.ZP.getSecureFramesRosterMapEntry(e);
            if (null == t) return !1;
            let r = new Uint8Array(t),
                n = _.Z.isKeyVerified(e, r) || g.Z.isKeyVerified(e, r),
                l = (0, E.UB)(e, [d.ZP, f.Z]),
                i = n && !l,
                u = i !== m.get(e);
            return m.set(e, i), u;
        })(t),
        n = p(),
        l = b();
    return r || n || l;
}
function I() {
    m.clear(), S.clear(), (h = !1);
}
class v extends (n = u.ZP.Store) {
    initialize() {
        this.waitFor(g.Z, _.Z, d.ZP, f.Z);
    }
    isCallVerified() {
        return h;
    }
    isStreamVerified(e) {
        return S.get(e);
    }
    isUserVerified(e) {
        return m.get(e);
    }
}
(i = 'SecureFramesVerifiedStore'),
    (l = 'displayName') in v
        ? Object.defineProperty(v, l, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (v[l] = i);
let T = new v(a.Z, {
    CONNECTION_OPEN: I,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (t === N) return !1;
        (N = t), I();
    },
    RTC_CONNECTION_STATE: function (e) {
        let { streamKey: t, state: r, context: n } = e;
        if (r !== y.hes.DISCONNECTED) return !1;
        switch (n) {
            case s.Yn.STREAM:
                if (null == t) return !1;
                return S.delete(t), b();
            case s.Yn.DEFAULT:
                I();
        }
    },
    RTC_CONNECTION_ROSTER_MAP_UPDATE: function (e) {
        let { userIds: t } = e,
            r = c.default.getId(),
            n = t.reduce((e, t) => (r === t ? e : !!R({ userId: t }) || e), !1),
            l = p(),
            i = b();
        return n || l || i;
    },
    SECURE_FRAMES_TRANSIENT_KEY_CREATE: R,
    SECURE_FRAMES_TRANSIENT_KEY_DELETE: R,
    SECURE_FRAMES_VERIFIED_KEY_CREATE: R,
    SECURE_FRAMES_VERIFIED_KEY_DELETE: R,
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: R
});
