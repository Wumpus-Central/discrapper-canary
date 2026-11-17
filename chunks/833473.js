var i = n(435558),
    r = n.n(i),
    a = n(855986),
    s = n(205693),
    l = n(506774),
    o = n(73153),
    d = n(340344),
    c = n(738566),
    u = n(988468),
    _ = n(495867),
    E = n(856383),
    A = n(829997),
    f = n(731854);
let h = {},
    I = {},
    p = r().cloneDeep(A.X),
    m = f.D1.UNKNOWN,
    g = new Set(),
    T = !1;
function S() {
    let e = l.w.get("MediaEngineStore"),
        t = e?.[f.x.DEFAULT];
    return (t?.audioMixerSettingsVersion ?? 0) < 3 ? {} : t?.audioMixerSettings?.enabled === !1 ? { enabled: !1 } : {};
}
function N() {
    return c.A.getConfig({ location: "SpatialAudioStore" });
}
function C() {
    return h.enabled ?? T;
}
function O(e) {
    return u.Ay.getMediaEngine().getSpatialAudioVersion() >= 1 ? e : "";
}
function R() {
    return p.isSpatial && m === f.D1.ACTIVE;
}
function L() {
    let e = R();
    (u.Ay.getMediaEngine().eachConnection((t) => t.setSpatialAudioActive(e), f.x.DEFAULT),
        _.A.getRTCConnection()?.setSpatialAudioActive(e));
}
function y() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (function () {
            let { enabled: e, positioningModel: t } = N(),
                n = r().merge(r().cloneDeep(A.X), { positioning: { model: O(t) } }, r().cloneDeep(I));
            return ((n.isSpatial = (I.isSpatial ?? (e && C())) && u.Ay.supports(f.O5.SPATIAL_AUDIO)), n);
        })();
    if (!e && r().isEqual(t, p)) return !1;
    let { isSpatial: n } = (p = t),
        i = u.Ay.getMediaEngine();
    return (
        i.setAudioMixerOptions(p),
        n || (m = f.D1.UNKNOWN),
        i.eachConnection((e) => e.setSpatialAudioEnabled(n), f.x.DEFAULT),
        _.A.getRTCConnection()?.setSpatialAudioEnabled(n),
        L(),
        !0
    );
}
function D() {
    let e = C();
    return ((T = N().defaultOn), y() || C() !== e);
}
function b(e) {
    return e !== m && ((m = e), L(), !0);
}
class v extends a.Ay.DeviceSettingsStore {
    static displayName = "SpatialAudioStore";
    static persistKey = "SpatialAudioStore";
    static migrations = [S];
    initialize(e) {
        ((h = { enabled: e?.enabled }), this.waitFor(d.A, u.Ay, _.A), this.syncWith([d.A], D));
        let t = u.Ay.getMediaEngine();
        (t.on(s.bg.Connection, (e) => {
            (e.setSpatialAudioEnabled(p.isSpatial), e.setSpatialAudioActive(R()));
        }),
            t.on(s.bg.SpatialAudioStatus, (e) => {
                b(e) &&
                    (!(function (e) {
                        if ((e !== f.D1.INIT_FAILED && e !== f.D1.HRTF_FAILED) || g.has(e)) return;
                        g.add(e);
                        let t = f.D1[e];
                        E.A.captureMessage(`Spatial audio failed: ${t}`, {
                            tags: { spatialAudioStatus: t },
                            fingerprint: ["spatial-audio-failed", t],
                            extra: {
                                spatialAudioVersion: u.Ay.getMediaEngine().getSpatialAudioVersion(),
                                positioningModel: p.positioning.model,
                            },
                        });
                    })(e),
                    1) &&
                    this.emitChange();
            }),
            (T = N().defaultOn),
            y(!0));
    }
    getUserAgnosticState() {
        return h;
    }
    isSpatialAudioEnabled() {
        return C();
    }
    isSpatialAudioActive() {
        return p.isSpatial;
    }
    getActiveSpatialAudioOptions() {
        return p;
    }
    getSpatialAudioOverrides() {
        return I;
    }
    getSpatialAudioStatus() {
        return m;
    }
    getExperimentPositioningModel(e) {
        return O(e);
    }
}
let P = new v(o.h, {
    POST_CONNECTION_OPEN: function () {
        return y();
    },
    AUDIO_SET_SPATIAL_AUDIO_ENABLED: function (e) {
        let { enabled: t } = e;
        ((h = { ...h, enabled: t }), y());
    },
    AUDIO_SET_SPATIAL_AUDIO_OVERRIDES: function (e) {
        ((I = e.overrides), y());
    },
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return null == t && b(f.D1.UNKNOWN);
    },
    LOGOUT: function () {
        ((I = {}), y());
    },
});
n.d(t, {}, { A: P });
