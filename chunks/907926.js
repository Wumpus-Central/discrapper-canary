"use strict";
n.d(t, { A: () => S });
var i = n(118356),
    r = n(205693),
    s = n(827343),
    a = n(439372),
    o = n(624694),
    l = n(929921),
    d = n(616356),
    _ = n(71393),
    u = n(969341),
    c = n(116956),
    E = n(287809),
    h = n(927813),
    m = n(258585),
    f = n(652896),
    g = n(837859),
    p = n(753070);
let A = new i.Vy("AutoQualityStreamingManager"),
    I = 0;
class T extends a.A {
    actions = { MEDIA_ENGINE_CONNECTION_STATS: this.handleStats, POST_CONNECTION_OPEN: this.handlePostConnectionOpen };
    handleStats() {
        if ((I += 1) % 10 != 0) return;
        let e = d.A.getCurrentUserActiveStream();
        if (null == e) return;
        let t = c.A.getRTCConnection((0, f._z)(e)),
            n = u.Ay.getGoLiveSource();
        if (null == t || null == n || !t.hasActiveRemoteWants()) return;
        let i = l.A.getState();
        if (i.preset !== p.jQ.PRESET_AUTO) return;
        if (d.A.getStreamerActiveStreamMetadata()?.id != null)
            return void A.info("Skipping auto quality checker for game stream.");
        let a = o.A.getAccumulatedPerformanceStats(t.getMediaEngineConnectionId(), e.ownerId, "long"),
            m = (t.analyticsContext.getDuration() ?? 30) >= 30 * h.A.Millis.SECOND ? 30 : 15;
        if (null == a || a.numDatapoints < m) return;
        let T = E.default.getCurrentUser(),
            S = _.A.getGuild(e.guildId),
            [N, C] = (0, g.Ay)(p.jQ.PRESET_DOCUMENTS, T, S?.premiumTier) ?? [p.on.RESOLUTION_SOURCE, p.kn.FPS_5],
            [R, O] = (0, g.Ay)(p.jQ.PRESET_VIDEO, T, S?.premiumTier) ?? [p.on.RESOLUTION_720, p.kn.FPS_30],
            y = null;
        if (
            (a.entropy < 10 && (i.resolution !== N || i.fps !== C)
                ? (A.info("Low entropy average, switching to screenshare preset."),
                  (y = {
                      qualityOptions: { preset: p.jQ.PRESET_AUTO, resolution: N, frameRate: C },
                      context: r.x.STREAM,
                  }))
                : a.entropy > 20 &&
                  (i.resolution !== R || i.fps !== O) &&
                  (A.info("High entropy average, switching to video preset."),
                  (y = {
                      qualityOptions: { preset: p.jQ.PRESET_AUTO, resolution: R, frameRate: O },
                      context: r.x.STREAM,
                  })),
            null != y)
        ) {
            if (null != n.desktopSource)
                y.desktopSettings = { sourceId: n.desktopSource.id, sound: i.soundshareEnabled };
            else {
                if (null == n.cameraSource) return;
                y.cameraSettings = {
                    videoDeviceGuid: n.cameraSource.videoDeviceGuid,
                    audioDeviceGuid: n.cameraSource.audioDeviceGuid,
                };
            }
            t.autoQualityChange(), s.A.setGoLiveSource(y);
        }
    }
    handlePostConnectionOpen() {
        (0, m.pn)();
    }
}
let S = new T();
