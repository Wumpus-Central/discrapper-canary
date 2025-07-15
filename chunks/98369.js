(r.d(t, { Z: () => R }), r(388685), r(410992), r(227481), r(730884), r(20464), r(341884), r(364341), r(629680), r(505025), r(918970), r(121784), r(644351), r(146733));
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
    y = r(729303),
    g = r(651941),
    p = r(981631);
let b = new Map(),
    m = new Map(),
    _ = !1,
    S = null;
function h() {
    return f.Z.getAllActiveStreamKeys().reduce((e, t) => {
        let { ownerId: r } = (0, o.my)(t),
            n = !0 === b.get(r),
            l = m.get(t) !== n;
        return (m.set(t, n), !!l || e);
    }, !1);
}
function O() {
    var e;
    let t = null != (e = d.Z.getUserIds()) ? e : new Set(),
        r = c.default.getId(),
        n = !0;
    for (let e of t)
        if (r !== e && !0 !== b.get(e)) {
            n = !1;
            break;
        }
    let l = n !== _;
    return ((_ = n), l);
}
function v(e) {
    let { userId: t } = e;
    if (c.default.getId() === t) return !1;
    let r = (function (e) {
            let t = d.Z.getSecureFramesRosterMapEntry(e);
            if (null == t) return !1;
            let r = new Uint8Array(t),
                n = g.Z.isKeyVerified(e, r) || y.Z.isKeyVerified(e, r),
                l = (0, E.UB)(e, [d.Z, f.Z]),
                i = n && !l,
                u = i !== b.get(e);
            return (b.set(e, i), u);
        })(t),
        n = h(),
        l = O();
    return r || n || l;
}
function j() {
    (b.clear(), m.clear(), (_ = !1));
}
class N extends (n = u.ZP.Store) {
    initialize() {
        this.waitFor(y.Z, g.Z, d.Z, f.Z);
    }
    isCallVerified() {
        return _;
    }
    isStreamVerified(e) {
        return m.get(e);
    }
    isUserVerified(e) {
        return b.get(e);
    }
}
((i = 'SecureFramesVerifiedStore'),
    (l = 'displayName') in N
        ? Object.defineProperty(N, l, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (N[l] = i));
let R = new N(a.Z, {
    CONNECTION_OPEN: j,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (t === S) return !1;
        ((S = t), j());
    },
    RTC_CONNECTION_STATE: function (e) {
        let { streamKey: t, state: r, context: n } = e;
        if (r !== p.hes.DISCONNECTED) return !1;
        switch (n) {
            case s.Yn.STREAM:
                if (null == t) return !1;
                return (m.delete(t), O());
            case s.Yn.DEFAULT:
                j();
        }
    },
    RTC_CONNECTION_ROSTER_MAP_UPDATE: function (e) {
        let { userIds: t } = e,
            r = c.default.getId(),
            n = t.reduce((e, t) => (r === t ? e : !!v({ userId: t }) || e), !1),
            l = h(),
            i = O();
        return n || l || i;
    },
    SECURE_FRAMES_TRANSIENT_KEY_CREATE: v,
    SECURE_FRAMES_TRANSIENT_KEY_DELETE: v,
    SECURE_FRAMES_VERIFIED_KEY_CREATE: v,
    SECURE_FRAMES_VERIFIED_KEY_DELETE: v,
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: v
});
