n.d(t, { A: () => M });
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
    p = A.u.NONE,
    m = r().cloneDeep(A.X),
    g = f.D1.UNKNOWN,
    T = new Set(),
    S = !1;
function N() {
    let e = l.w.get("MediaEngineStore"),
        t = e?.[f.x.DEFAULT];
    return (t?.audioMixerSettingsVersion ?? 0) < 3 ? {} : t?.audioMixerSettings?.enabled === !1 ? { enabled: !1 } : {};
}
function C() {
    return c.A.getConfig({ location: "SpatialAudioStore" });
}
function O() {
    return h.enabled ?? S;
}
function R(e) {
    return u.Ay.getMediaEngine().getSpatialAudioVersion() >= 1 ? e : "";
}
function L() {
    return m.isSpatial && g === f.D1.ACTIVE;
}
function y() {
    let e = L();
    (u.Ay.getMediaEngine().eachConnection((t) => t.setSpatialAudioActive(e), f.x.DEFAULT),
        _.A.getRTCConnection()?.setSpatialAudioActive(e));
}
function D() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (function () {
            let { enabled: e, positioningModel: t } = C(),
                n = r().merge(r().cloneDeep(A.X), { positioning: { model: R(t) } }, r().cloneDeep(I));
            return ((n.isSpatial = (I.isSpatial ?? (e && O())) && u.Ay.supports(f.O5.SPATIAL_AUDIO)), n);
        })();
    if (!e && r().isEqual(t, m)) return !1;
    let { isSpatial: n } = (m = t),
        i = u.Ay.getMediaEngine();
    return (
        i.setAudioMixerOptions(m),
        n || (g = f.D1.UNKNOWN),
        i.eachConnection((e) => e.setSpatialAudioEnabled(n), f.x.DEFAULT),
        _.A.getRTCConnection()?.setSpatialAudioEnabled(n),
        y(),
        !0
    );
}
function b() {
    let e = O();
    return ((S = C().defaultOn), D() || O() !== e);
}
function v(e) {
    return e !== g && ((g = e), y(), !0);
}
class P extends a.Ay.DeviceSettingsStore {
    static displayName = "SpatialAudioStore";
    static persistKey = "SpatialAudioStore";
    static migrations = [N];
    initialize(e) {
        ((h = { enabled: e?.enabled }), this.waitFor(d.A, u.Ay, _.A), this.syncWith([d.A], b));
        let t = u.Ay.getMediaEngine();
        (t.on(s.bg.Connection, (e) => {
            (e.setSpatialAudioEnabled(m.isSpatial), e.setSpatialAudioActive(L()));
        }),
            t.on(s.bg.SpatialAudioStatus, (e) => {
                v(e) &&
                    (!(function (e) {
                        if ((e !== f.D1.INIT_FAILED && e !== f.D1.HRTF_FAILED) || T.has(e)) return;
                        T.add(e);
                        let t = f.D1[e];
                        E.A.captureMessage(`Spatial audio failed: ${t}`, {
                            tags: { spatialAudioStatus: t },
                            fingerprint: ["spatial-audio-failed", t],
                            extra: {
                                spatialAudioVersion: u.Ay.getMediaEngine().getSpatialAudioVersion(),
                                positioningModel: m.positioning.model,
                            },
                        });
                    })(e),
                    1) &&
                    this.emitChange();
            }),
            (S = C().defaultOn),
            D(!0));
    }
    getUserAgnosticState() {
        return h;
    }
    isSpatialAudioEnabled() {
        return O();
    }
    isSpatialAudioActive() {
        return m.isSpatial;
    }
    getActiveSpatialAudioOptions() {
        return m;
    }
    getSpatialAudioOverrides() {
        return I;
    }
    getSpatialAudioOverrideSource() {
        return p;
    }
    getSpatialAudioStatus() {
        return g;
    }
    getExperimentPositioningModel(e) {
        return R(e);
    }
}
let M = new P(o.h, {
    POST_CONNECTION_OPEN: function () {
        return D();
    },
    AUDIO_SET_SPATIAL_AUDIO_ENABLED: function (e) {
        let { enabled: t } = e;
        ((h = { ...h, enabled: t }), D());
    },
    AUDIO_SET_SPATIAL_AUDIO_OVERRIDES: function (e) {
        ((I = e.overrides), (p = r().isEmpty(e.overrides) ? A.u.NONE : e.source), D());
    },
    VOICE_CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return null == t && v(f.D1.UNKNOWN);
    },
    LOGOUT: function () {
        ((I = {}), (p = A.u.NONE), D());
    },
});
