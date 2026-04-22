"use strict";
n.d(t, { A: () => S });
var r = n(118356),
    i = n(205693),
    s = n(827343),
    a = n(439372),
    o = n(624694),
    l = n(929921),
    u = n(616356),
    d = n(71393),
    c = n(430452),
    _ = n(162605),
    f = n(287809),
    E = n(927813),
    h = n(258585),
    p = n(652896),
    m = n(476697),
    g = n(753070);
let A = new r.Vy("AutoQualityStreamingManager"),
    I = 0;
class T extends a.A {
    actions = { MEDIA_ENGINE_CONNECTION_STATS: this.handleStats, POST_CONNECTION_OPEN: this.handlePostConnectionOpen };
    handleStats() {
        if ((I += 1) % 10 != 0) return;
        let e = u.A.getCurrentUserActiveStream();
        if (null == e) return;
        let t = _.A.getRTCConnection((0, p._z)(e)),
            n = c.Ay.getGoLiveSource();
        if (null == t || null == n || !t.hasActiveRemoteWants()) return;
        let r = l.A.getState();
        if (r.preset !== g.jQ.PRESET_AUTO) return;
        if (u.A.getStreamerActiveStreamMetadata()?.id != null)
            return void A.info("Skipping auto quality checker for game stream.");
        let a = o.A.getAccumulatedPerformanceStats(t.getMediaEngineConnectionId(), e.ownerId, "long"),
            h = (t.analyticsContext.getDuration() ?? 30) >= 30 * E.A.Millis.SECOND ? 30 : 15;
        if (null == a || a.numDatapoints < h) return;
        let T = f.default.getCurrentUser(),
            S = d.A.getGuild(e.guildId),
            [y, N] = (0, m.A)(g.jQ.PRESET_DOCUMENTS, T, S?.premiumTier) ?? [g.on.RESOLUTION_SOURCE, g.kn.FPS_5],
            [O, R] = (0, m.A)(g.jQ.PRESET_VIDEO, T, S?.premiumTier) ?? [g.on.RESOLUTION_720, g.kn.FPS_30],
            v = null;
        if (
            (a.entropy < 10 && (r.resolution !== y || r.fps !== N)
                ? (A.info("Low entropy average, switching to screenshare preset."),
                  (v = {
                      qualityOptions: { preset: g.jQ.PRESET_AUTO, resolution: y, frameRate: N },
                      context: i.x.STREAM,
                  }))
                : a.entropy > 20 &&
                  (r.resolution !== O || r.fps !== R) &&
                  (A.info("High entropy average, switching to video preset."),
                  (v = {
                      qualityOptions: { preset: g.jQ.PRESET_AUTO, resolution: O, frameRate: R },
                      context: i.x.STREAM,
                  })),
            null != v)
        ) {
            if (null != n.desktopSource)
                v.desktopSettings = { sourceId: n.desktopSource.id, sound: r.soundshareEnabled };
            else {
                if (null == n.cameraSource) return;
                v.cameraSettings = {
                    videoDeviceGuid: n.cameraSource.videoDeviceGuid,
                    audioDeviceGuid: n.cameraSource.audioDeviceGuid,
                };
            }
            t.autoQualityChange(), s.A.setGoLiveSource(v);
        }
    }
    handlePostConnectionOpen() {
        (0, h.pn)();
    }
}
let S = new T();
