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
    d = n(890063),
    _ = n(116956),
    h = n(287809),
    f = n(927813),
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
            p = (t.analyticsContext.getDuration() ?? 30) >= 30 * f.A.Millis.SECOND ? 30 : 15;
        if (null == a || a.numDatapoints < p) return;
        let T = h.default.getCurrentUser(),
            S = c.A.getGuild(e.guildId),
            [y, N] = (0, m.Ay)(g.jQ.PRESET_DOCUMENTS, T, S?.premiumTier) ?? [g.on.RESOLUTION_SOURCE, g.kn.FPS_5],
            [v, C] = (0, m.Ay)(g.jQ.PRESET_VIDEO, T, S?.premiumTier) ?? [g.on.RESOLUTION_720, g.kn.FPS_30],
            R = null;
        if (
            (a.entropy < 10 && (i.resolution !== y || i.fps !== N)
                ? (A.info("Low entropy average, switching to screenshare preset."),
                  (R = {
                      qualityOptions: { preset: g.jQ.PRESET_AUTO, resolution: y, frameRate: N },
                      context: r.x.STREAM,
                  }))
                : a.entropy > 20 &&
                  (i.resolution !== v || i.fps !== C) &&
                  (A.info("High entropy average, switching to video preset."),
                  (R = {
                      qualityOptions: { preset: g.jQ.PRESET_AUTO, resolution: v, frameRate: C },
                      context: r.x.STREAM,
                  })),
            null != R)
        ) {
            if (null != n.desktopSource)
                R.desktopSettings = { sourceId: n.desktopSource.id, sound: i.soundshareEnabled };
            else {
                if (null == n.cameraSource) return;
                R.cameraSettings = {
                    videoDeviceGuid: n.cameraSource.videoDeviceGuid,
                    audioDeviceGuid: n.cameraSource.audioDeviceGuid,
                    sound: i.soundshareEnabled,
                };
            }
            t.autoQualityChange(), s.A.setGoLiveSource(R);
        }
    }
    handlePostConnectionOpen() {
        (0, p.pn)();
    }
}
let S = new T();
