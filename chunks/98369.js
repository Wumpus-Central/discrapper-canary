(n.d(t, { Z: () => I }), n(388685), n(410992), n(227481), n(730884), n(20464), n(341884), n(364341), n(629680), n(505025), n(918970), n(121784), n(644351), n(146733));
var r,
    l,
    i,
    a = n(442837),
    o = n(46973),
    u = n(570140),
    s = n(569545),
    c = n(314897),
    d = n(19780),
    f = n(959457),
    p = n(630759),
    m = n(729303),
    E = n(651941),
    g = n(981631);
let v = new Map(),
    h = new Map(),
    S = !1,
    b = null;
function O() {
    return f.Z.getAllActiveStreamKeys().reduce((e, t) => {
        let { ownerId: n } = (0, s.my)(t),
            r = !0 === v.get(n),
            l = h.get(t) !== r;
        return (h.set(t, r), !!l || e);
    }, !1);
}
function y() {
    var e;
    let t = null != (e = d.Z.getUserIds()) ? e : new Set(),
        n = c.default.getId(),
        r = !0;
    for (let e of t)
        if (n !== e && !0 !== v.get(e)) {
            r = !1;
            break;
        }
    let l = r !== S;
    return ((S = r), l);
}
function _(e) {
    let { userId: t } = e;
    if (c.default.getId() === t) return !1;
    let n = (function (e) {
            let t = d.Z.getSecureFramesRosterMapEntry(e);
            if (null == t) return !1;
            let n = new Uint8Array(t),
                r = E.Z.isKeyVerified(e, n) || m.Z.isKeyVerified(e, n),
                l = (0, p.UB)(e, [d.Z, f.Z]),
                i = r && !l,
                a = i !== v.get(e);
            return (v.set(e, i), a);
        })(t),
        r = O(),
        l = y();
    return n || r || l;
}
function Z() {
    (v.clear(), h.clear(), (S = !1));
}
class j extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(m.Z, E.Z, d.Z, f.Z);
    }
    isCallVerified() {
        return S;
    }
    isStreamVerified(e) {
        return h.get(e);
    }
    isUserVerified(e) {
        return v.get(e);
    }
}
((i = 'SecureFramesVerifiedStore'),
    (l = 'displayName') in j
        ? Object.defineProperty(j, l, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (j[l] = i));
let I = new j(u.Z, {
    CONNECTION_OPEN: Z,
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (t === b) return !1;
        ((b = t), Z());
    },
    RTC_CONNECTION_STATE: function (e) {
        let { streamKey: t, state: n, context: r } = e;
        if (n !== g.hes.DISCONNECTED) return !1;
        switch (r) {
            case o.Yn.STREAM:
                if (null == t) return !1;
                return (h.delete(t), y());
            case o.Yn.DEFAULT:
                Z();
        }
    },
    RTC_CONNECTION_ROSTER_MAP_UPDATE: function (e) {
        let { userIds: t } = e,
            n = c.default.getId(),
            r = t.reduce((e, t) => (n === t ? e : !!_({ userId: t }) || e), !1),
            l = O(),
            i = y();
        return r || l || i;
    },
    SECURE_FRAMES_TRANSIENT_KEY_CREATE: _,
    SECURE_FRAMES_TRANSIENT_KEY_DELETE: _,
    SECURE_FRAMES_VERIFIED_KEY_CREATE: _,
    SECURE_FRAMES_VERIFIED_KEY_DELETE: _,
    SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: _
});
