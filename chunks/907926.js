"use strict";
n.d(t, { A: () => b });
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
    h = n(927813),
    p = n(258585),
    g = n(652896),
    E = n(476697),
    A = n(753070);
let I = 10,
    T = 20,
    y = 10,
    S = new r.Vy("AutoQualityStreamingManager"),
    v = 0;
class C extends s.A {
    actions = { MEDIA_ENGINE_CONNECTION_STATS: this.handleStats, POST_CONNECTION_OPEN: this.handlePostConnectionOpen };
    handleStats() {
        if ((v += 1) % y != 0) return;
        let e = u.A.getCurrentUserActiveStream();
        if (null == e) return;
        let t = _.A.getRTCConnection((0, g._z)(e)),
            n = d.Ay.getGoLiveSource();
        if (null == t || null == n || !t.hasActiveRemoteWants()) return;
        let r = l.A.getState();
        if (r.preset !== A.jQ.PRESET_AUTO) return;
        if (u.A.getStreamerActiveStreamMetadata()?.id != null)
            return void S.info("Skipping auto quality checker for game stream.");
        let s = o.A.getAccumulatedPerformanceStats(t.getMediaEngineConnectionId(), e.ownerId, "long"),
            p = (t.analyticsContext.getDuration() ?? 30) >= 30 * h.A.Millis.SECOND ? 30 : 15;
        if (null == s || s.numDatapoints < p) return;
        let C = f.default.getCurrentUser(),
            b = c.A.getGuild(e.guildId),
            [N, R] = (0, E.A)(A.jQ.PRESET_DOCUMENTS, C, b?.premiumTier) ?? [A.on.RESOLUTION_SOURCE, A.kn.FPS_5],
            [O, D] = (0, E.A)(A.jQ.PRESET_VIDEO, C, b?.premiumTier) ?? [A.on.RESOLUTION_720, A.kn.FPS_30],
            L = null;
        if (
            (s.entropy < I && (r.resolution !== N || r.fps !== R)
                ? (S.info("Low entropy average, switching to screenshare preset."),
                  (L = {
                      qualityOptions: { preset: A.jQ.PRESET_AUTO, resolution: N, frameRate: R },
                      context: i.x.STREAM,
                  }))
                : s.entropy > T &&
                  (r.resolution !== O || r.fps !== D) &&
                  (S.info("High entropy average, switching to video preset."),
                  (L = {
                      qualityOptions: { preset: A.jQ.PRESET_AUTO, resolution: O, frameRate: D },
                      context: i.x.STREAM,
                  })),
            null != L)
        ) {
            if (null != n.desktopSource)
                L.desktopSettings = { sourceId: n.desktopSource.id, sound: r.soundshareEnabled };
            else {
                if (null == n.cameraSource) return;
                L.cameraSettings = {
                    videoDeviceGuid: n.cameraSource.videoDeviceGuid,
                    audioDeviceGuid: n.cameraSource.audioDeviceGuid,
                };
            }
            t.autoQualityChange(), a.A.setGoLiveSource(L);
        }
    }
    handlePostConnectionOpen() {
        (0, p.pn)();
    }
}
let b = new C();
