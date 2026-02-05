"use strict";
n.d(t, { A: () => C });
var r = n(118356),
    i = n(205693),
    a = n(827343),
    s = n(439372),
    o = n(624694),
    l = n(929921),
    u = n(616356),
    c = n(71393),
    d = n(430452),
    _ = n(162605),
    f = n(287809),
    p = n(927813),
    h = n(258585),
    m = n(652896),
    g = n(476697),
    E = n(753070);
let A = 10,
    I = 20,
    T = 10,
    y = new r.Vy("AutoQualityStreamingManager"),
    S = 0;
class v extends s.A {
    actions = { MEDIA_ENGINE_CONNECTION_STATS: this.handleStats, POST_CONNECTION_OPEN: this.handlePostConnectionOpen };
    handleStats() {
        if ((S += 1) % T != 0) return;
        let e = u.A.getCurrentUserActiveStream();
        if (null == e) return;
        let t = _.A.getRTCConnection((0, m._z)(e)),
            n = d.A.getGoLiveSource();
        if (null == t || null == n || !t.hasActiveRemoteWants()) return;
        let r = l.A.getState();
        if (r.preset !== E.jQ.PRESET_AUTO) return;
        if (u.A.getStreamerActiveStreamMetadata()?.id != null)
            return void y.info("Skipping auto quality checker for game stream.");
        let s = o.A.getAccumulatedPerformanceStats(t.getMediaEngineConnectionId(), e.ownerId, "long"),
            h = (t.analyticsContext.getDuration() ?? 30) >= 30 * p.A.Millis.SECOND ? 30 : 15;
        if (null == s || s.numDatapoints < h) return;
        let v = f.default.getCurrentUser(),
            C = c.A.getGuild(e.guildId),
            [b, N] = (0, g.A)(E.jQ.PRESET_DOCUMENTS, v, C?.premiumTier) ?? [E.on.RESOLUTION_SOURCE, E.kn.FPS_5],
            [R, O] = (0, g.A)(E.jQ.PRESET_VIDEO, v, C?.premiumTier) ?? [E.on.RESOLUTION_720, E.kn.FPS_30],
            D = null;
        if (
            (s.entropy < A && (r.resolution !== b || r.fps !== N)
                ? (y.info("Low entropy average, switching to screenshare preset."),
                  (D = {
                      qualityOptions: { preset: E.jQ.PRESET_AUTO, resolution: b, frameRate: N },
                      context: i.x.STREAM,
                  }))
                : s.entropy > I &&
                  (r.resolution !== R || r.fps !== O) &&
                  (y.info("High entropy average, switching to video preset."),
                  (D = {
                      qualityOptions: { preset: E.jQ.PRESET_AUTO, resolution: R, frameRate: O },
                      context: i.x.STREAM,
                  })),
            null != D)
        ) {
            if (null != n.desktopSource)
                D.desktopSettings = { sourceId: n.desktopSource.id, sound: r.soundshareEnabled };
            else {
                if (null == n.cameraSource) return;
                D.cameraSettings = {
                    videoDeviceGuid: n.cameraSource.videoDeviceGuid,
                    audioDeviceGuid: n.cameraSource.audioDeviceGuid,
                };
            }
            t.autoQualityChange(), a.A.setGoLiveSource(D);
        }
    }
    handlePostConnectionOpen() {
        (0, h.pn)();
    }
}
let C = new v();
