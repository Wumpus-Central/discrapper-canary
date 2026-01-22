n.d(t, {
    A: () => T,
}),
    n(896048);
var r = n(118356),
    i = n(205693),
    a = n(827343),
    s = n(439372),
    o = n(624694),
    l = n(929921),
    c = n(616356),
    u = n(71393),
    d = n(430452),
    f = n(162605),
    p = n(287809),
    _ = n(927813),
    h = n(258585),
    m = n(652896),
    g = n(476697),
    E = n(753070);

function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let y = 10,
    O = 20,
    A = 10,
    v = new r.Vy("AutoQualityStreamingManager"),
    S = 0;
class I extends s.A {
    handleStats() {
        var e, t, n, r;
        if ((S += 1) % A != 0) return;
        let s = c.A.getCurrentUserActiveStream();
        if (null == s) return;
        let h = f.A.getRTCConnection((0, m._z)(s)),
            b = d.A.getGoLiveSource();
        if (null == h || null == b || !h.hasActiveRemoteWants()) return;
        let I = l.A.getState();
        if (I.preset !== E.jQ.PRESET_AUTO) return;
        if ((null == (r = c.A.getStreamerActiveStreamMetadata()) ? void 0 : r.id) != null)
            return void v.info("Skipping auto quality checker for game stream.");
        let T = o.A.getAccumulatedPerformanceStats(h.getMediaEngineConnectionId(), s.ownerId, "long"),
            C = (null != (e = h.analyticsContext.getDuration()) ? e : 30) >= 30 * _.A.Millis.SECOND ? 30 : 15;
        if (null == T || T.numDatapoints < C) return;
        let N = p.default.getCurrentUser(),
            R = u.A.getGuild(s.guildId),
            [w, P] =
                null != (t = (0, g.A)(E.jQ.PRESET_DOCUMENTS, N, null == R ? void 0 : R.premiumTier))
                    ? t
                    : [E.on.RESOLUTION_SOURCE, E.kn.FPS_5],
            [D, x] =
                null != (n = (0, g.A)(E.jQ.PRESET_VIDEO, N, null == R ? void 0 : R.premiumTier))
                    ? n
                    : [E.on.RESOLUTION_720, E.kn.FPS_30],
            L = null;
        if (
            (T.entropy < y && (I.resolution !== w || I.fps !== P)
                ? (v.info("Low entropy average, switching to screenshare preset."),
                  (L = {
                      qualityOptions: {
                          preset: E.jQ.PRESET_AUTO,
                          resolution: w,
                          frameRate: P,
                      },
                      context: i.x.STREAM,
                  }))
                : T.entropy > O &&
                  (I.resolution !== D || I.fps !== x) &&
                  (v.info("High entropy average, switching to video preset."),
                  (L = {
                      qualityOptions: {
                          preset: E.jQ.PRESET_AUTO,
                          resolution: D,
                          frameRate: x,
                      },
                      context: i.x.STREAM,
                  })),
            null != L)
        ) {
            if (null != b.desktopSource)
                L.desktopSettings = {
                    sourceId: b.desktopSource.id,
                    sound: I.soundshareEnabled,
                };
            else {
                if (null == b.cameraSource) return;
                L.cameraSettings = {
                    videoDeviceGuid: b.cameraSource.videoDeviceGuid,
                    audioDeviceGuid: b.cameraSource.audioDeviceGuid,
                };
            }
            h.autoQualityChange(), a.A.setGoLiveSource(L);
        }
    }
    handlePostConnectionOpen() {
        (0, h.pn)();
    }
    constructor(...e) {
        super(...e),
            b(this, "actions", {
                MEDIA_ENGINE_CONNECTION_STATS: this.handleStats,
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
            });
    }
}
let T = new I();
