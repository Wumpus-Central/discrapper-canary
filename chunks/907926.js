"use strict";
n.d(t, { A: () => S });
var i = n(941426),
    r = n(459838),
    s = n(827343),
    a = n(439372),
    o = n(624694),
    l = n(929921),
    u = n(616356),
    c = n(71393),
    d = n(235058),
    _ = n(116956),
    f = n(287809),
    h = n(927813),
    p = n(258585),
    E = n(652896),
    m = n(837859),
    g = n(753070);
let A = new i.Vy("AutoQualityStreamingManager"),
    I = 0;
class T extends a.A {
    actions = { MEDIA_ENGINE_CONNECTION_STATS: this.handleStats, POST_CONNECTION_OPEN: this.handlePostConnectionOpen };
    handleStats() {
        if ((I += 1) % 10 != 0) return;
        let e = u.A.getCurrentUserActiveStream();
        if (null == e) return;
        let t = _.A.getRTCConnection((0, E._z)(e)),
            n = d.Ay.getGoLiveSource();
        if (null == t || null == n || !t.hasActiveRemoteWants()) return;
        let i = l.A.getState();
        if (i.preset !== g.jQ.PRESET_AUTO) return;
        if (u.A.getStreamerActiveStreamMetadata()?.id != null)
            return void A.info("Skipping auto quality checker for game stream.");
        let a = o.A.getAccumulatedPerformanceStats(t.getMediaEngineConnectionId(), e.ownerId, "long"),
            p = (t.analyticsContext.getDuration() ?? 30) >= 30 * h.A.Millis.SECOND ? 30 : 15;
        if (null == a || a.numDatapoints < p) return;
        let T = f.default.getCurrentUser(),
            S = c.A.getGuild(e.guildId),
            [N, y] = (0, m.Ay)(g.jQ.PRESET_DOCUMENTS, T, S?.premiumTier) ?? [g.on.RESOLUTION_SOURCE, g.kn.FPS_5],
            [C, v] = (0, m.Ay)(g.jQ.PRESET_VIDEO, T, S?.premiumTier) ?? [g.on.RESOLUTION_720, g.kn.FPS_30],
            O = null;
        if (
            (a.entropy < 10 && (i.resolution !== N || i.fps !== y)
                ? (A.info("Low entropy average, switching to screenshare preset."),
                  (O = {
                      qualityOptions: { preset: g.jQ.PRESET_AUTO, resolution: N, frameRate: y },
                      context: r.x.STREAM,
                  }))
                : a.entropy > 20 &&
                  (i.resolution !== C || i.fps !== v) &&
                  (A.info("High entropy average, switching to video preset."),
                  (O = {
                      qualityOptions: { preset: g.jQ.PRESET_AUTO, resolution: C, frameRate: v },
                      context: r.x.STREAM,
                  })),
            null != O)
        ) {
            if (null != n.desktopSource)
                O.desktopSettings = { sourceId: n.desktopSource.id, sound: i.soundshareEnabled };
            else {
                if (null == n.cameraSource) return;
                O.cameraSettings = {
                    videoDeviceGuid: n.cameraSource.videoDeviceGuid,
                    audioDeviceGuid: n.cameraSource.audioDeviceGuid,
                };
            }
            t.autoQualityChange(), s.A.setGoLiveSource(O);
        }
    }
    handlePostConnectionOpen() {
        (0, p.pn)();
    }
}
let S = new T();
