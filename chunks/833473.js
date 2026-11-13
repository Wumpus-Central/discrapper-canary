var i = n(435558),
    r = n.n(i),
    a = n(855986),
    s = n(205693),
    l = n(506774),
    o = n(73153),
    d = n(340344),
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
function g() {
    let e = l.w.get("MediaEngineStore"),
        t = e?.[A.x.DEFAULT];
    return (t?.audioMixerSettingsVersion ?? 0) < 3 ? {} : t?.audioMixerSettings?.enabled === !1 ? { enabled: !1 } : {};
}
function T() {
    return c.A.getConfig({ location: "SpatialAudioStore" });
}
function S() {
    return f.enabled ?? m;
}
function N(e) {
    return u.Ay.getMediaEngine().getSpatialAudioVersion() >= 1 ? e : "";
}
function C() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (function () {
            let { enabled: e, positioningModel: t } = T(),
                n = r().merge(r().cloneDeep(E.X), { positioning: { model: N(t) } }, r().cloneDeep(h));
            return ((n.isSpatial = (h.isSpatial ?? (e && S())) && u.Ay.supports(A.O5.SPATIAL_AUDIO)), n);
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
function O() {
    let e = S();
    return ((m = T().defaultOn), C() || S() !== e);
}
class R extends a.Ay.DeviceSettingsStore {
    static displayName = "SpatialAudioStore";
    static persistKey = "SpatialAudioStore";
    static migrations = [g];
    initialize(e) {
        ((f = { enabled: e?.enabled }), this.waitFor(d.A, u.Ay, _.A), this.syncWith([d.A], O));
        let t = u.Ay.getMediaEngine();
        (t.on(s.bg.Connection, (e) => e.setSpatialAudioEnabled(I.isSpatial)),
            t.on(s.bg.SpatialAudioStatus, (e) => {
                e !== p && ((p = e), 1) && this.emitChange();
            }),
            (m = T().defaultOn),
            C(!0));
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
    getExperimentPositioningModel(e) {
        return N(e);
    }
}
let L = new R(o.h, {
    POST_CONNECTION_OPEN: function () {
        return C();
    },
    AUDIO_SET_SPATIAL_AUDIO_ENABLED: function (e) {
        let { enabled: t } = e;
        ((f = { ...f, enabled: t }), C());
    },
    AUDIO_SET_SPATIAL_AUDIO_OVERRIDES: function (e) {
        ((h = e.overrides), C());
    },
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        if (null != t || p === A.D1.UNKNOWN) return !1;
        p = A.D1.UNKNOWN;
    },
    LOGOUT: function () {
        ((h = {}), C());
    },
});
n.d(t, {}, { A: L });
