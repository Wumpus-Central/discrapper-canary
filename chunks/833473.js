var i = n(435558),
    r = n.n(i),
    a = n(855986),
    s = n(205693),
    l = n(506774),
    o = n(73153),
    d = n(50258),
    c = n(738566),
    u = n(754712),
    _ = n(495867),
    E = n(829997),
    A = n(731854);
let f = {},
    h = {},
    I = r().cloneDeep(E.X),
    p = A.D1.UNKNOWN,
    m = !1;
function T() {
    let e = l.w.get("MediaEngineStore"),
        t = e?.[A.x.DEFAULT];
    return (t?.audioMixerSettingsVersion ?? 0) < 3 ? {} : t?.audioMixerSettings?.enabled === !1 ? { enabled: !1 } : {};
}
function g() {
    return c.A.getConfig({ location: "SpatialAudioStore" });
}
function S() {
    return f.enabled ?? m;
}
function N() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (function () {
            let e = r().merge(r().cloneDeep(E.X), r().cloneDeep(h)),
                { enabled: t } = g();
            return ((e.isSpatial = (h.isSpatial ?? (t && S())) && u.Ay.supports(A.O5.SPATIAL_AUDIO)), e);
        })();
    if (!e && r().isEqual(t, I)) return !1;
    let { isSpatial: n } = (I = t),
        i = u.Ay.getMediaEngine();
    return (
        i.setAudioMixerOptions(I),
        n || (p = A.D1.UNKNOWN),
        i.eachConnection((e) => e.setSpatialAudioEnabled(n), A.x.DEFAULT),
        _.A.getRTCConnection()?.setSpatialAudioEnabled(n),
        !0
    );
}
function C() {
    let e = S();
    return ((m = g().defaultOn), N() || S() !== e);
}
class O extends a.Ay.DeviceSettingsStore {
    static displayName = "SpatialAudioStore";
    static persistKey = "SpatialAudioStore";
    static migrations = [T];
    initialize(e) {
        ((f = { enabled: e?.enabled }), this.waitFor(d.A, u.Ay, _.A), this.syncWith([d.A], C));
        let t = u.Ay.getMediaEngine();
        (t.on(s.bg.Connection, (e) => e.setSpatialAudioEnabled(I.isSpatial)),
            t.on(s.bg.SpatialAudioStatus, (e) => {
                e !== p && ((p = e), 1) && this.emitChange();
            }),
            (m = g().defaultOn),
            N(!0));
    }
    getUserAgnosticState() {
        return f;
    }
    isSpatialAudioEnabled() {
        return S();
    }
    isSpatialAudioActive() {
        return I.isSpatial;
    }
    getActiveSpatialAudioOptions() {
        return I;
    }
    getSpatialAudioOverrides() {
        return h;
    }
    getSpatialAudioStatus() {
        return p;
    }
}
let R = new O(o.h, {
    POST_CONNECTION_OPEN: function () {
        return N();
    },
    AUDIO_SET_SPATIAL_AUDIO_ENABLED: function (e) {
        let { enabled: t } = e;
        ((f = { ...f, enabled: t }), N());
    },
    AUDIO_SET_SPATIAL_AUDIO_OVERRIDES: function (e) {
        ((h = e.overrides), N());
    },
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (null != t || p === A.D1.UNKNOWN) return !1;
        p = A.D1.UNKNOWN;
    },
    LOGOUT: function () {
        ((h = {}), N());
    },
});
n.d(t, {}, { A: R });
