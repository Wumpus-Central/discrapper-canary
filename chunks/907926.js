"use strict";
n.d(t, { A: () => S });
var i = n(941426),
    r = n(459838),
    a = n(827343),
    s = n(439372),
    l = n(624694),
    o = n(929921),
    d = n(616356),
    c = n(71393),
    u = n(453028),
    _ = n(116956),
    E = n(287809),
    A = n(927813),
    h = n(258585),
    I = n(652896),
    f = n(837859),
    p = n(753070);
let T = new i.Vy("AutoQualityStreamingManager"),
    m = 0;
class g extends s.A {
    actions = { MEDIA_ENGINE_CONNECTION_STATS: this.handleStats, POST_CONNECTION_OPEN: this.handlePostConnectionOpen };
    handleStats() {
        if ((m += 1) % 10 != 0) return;
        let e = d.A.getCurrentUserActiveStream();
        if (null == e) return;
        let t = _.A.getRTCConnection((0, I._z)(e)),
            n = u.Ay.getGoLiveSource();
        if (null == t || null == n || !t.hasActiveRemoteWants()) return;
        let i = o.A.getState();
        if (i.preset !== p.jQ.PRESET_AUTO) return;
        if (d.A.getStreamerActiveStreamMetadata()?.id != null)
            return void T.info("Skipping auto quality checker for game stream.");
        let s = l.A.getAccumulatedPerformanceStats(t.getMediaEngineConnectionId(), e.ownerId, "long"),
            h = (t.analyticsContext.getDuration() ?? 30) >= 30 * A.A.Millis.SECOND ? 30 : 15;
        if (null == s || s.numDatapoints < h) return;
        let g = E.default.getCurrentUser(),
            S = c.A.getGuild(e.guildId),
            [N, C] = (0, f.Ay)(p.jQ.PRESET_DOCUMENTS, g, S?.premiumTier) ?? [p.on.RESOLUTION_SOURCE, p.kn.FPS_5],
            [R, O] = (0, f.Ay)(p.jQ.PRESET_VIDEO, g, S?.premiumTier) ?? [p.on.RESOLUTION_720, p.kn.FPS_30],
            L = null;
        if (
            (s.entropy < 10 && (i.resolution !== N || i.fps !== C)
                ? (T.info("Low entropy average, switching to screenshare preset."),
                  (L = {
                      qualityOptions: { preset: p.jQ.PRESET_AUTO, resolution: N, frameRate: C },
                      context: r.x.STREAM,
                  }))
                : s.entropy > 20 &&
                  (i.resolution !== R || i.fps !== O) &&
                  (T.info("High entropy average, switching to video preset."),
                  (L = {
                      qualityOptions: { preset: p.jQ.PRESET_AUTO, resolution: R, frameRate: O },
                      context: r.x.STREAM,
                  })),
            null != L)
        ) {
            if (null != n.desktopSource)
                L.desktopSettings = { sourceId: n.desktopSource.id, sound: i.soundshareEnabled };
            else {
                if (null == n.cameraSource) return;
                L.cameraSettings = {
                    videoDeviceGuid: n.cameraSource.videoDeviceGuid,
                    audioDeviceGuid: n.cameraSource.audioDeviceGuid,
                    sound: i.soundshareEnabled,
                };
            }
            t.autoQualityChange(), a.A.setGoLiveSource(L);
        }
    }
    handlePostConnectionOpen() {
        (0, h.pn)();
    }
}
let S = new g();
