"use strict";
n.d(t, { p: () => p, z: () => E });
var i = n(77729),
    r = n(952818),
    s = n(41984),
    a = n(296027),
    o = n(243612),
    l = n(929921),
    u = n(235058),
    c = n(763827),
    d = n(157257),
    _ = n(174459),
    f = n(95561),
    h = n(652215);
function p() {
    let e,
        t,
        n,
        i,
        s,
        a = u.Ay.getGoLiveSource(),
        o = l.A.getState().preset;
    if (null != a && ((e = a.quality.resolution), (t = a.quality.frameRate), null != a.desktopSource)) {
        n = a.desktopSource.soundshareSession;
        let e = null != a.desktopSource.sourcePid ? r.Ay.getGameForPID(a.desktopSource.sourcePid) : null;
        (i = e?.name ?? null), (s = e?.id ?? null);
    }
    return {
        video_input_resolution: e,
        video_input_frame_rate: t,
        soundshare_session: n,
        share_game_name: i,
        share_game_id: s,
        quality_preset: o,
    };
}
async function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        l = __OVERLAY__ ? d.A.getGame() : (0, o.qv)(),
        u = r.Ay.getRunningGames().find((e) => e.name === l?.name),
        p = u?.pid != null ? a.default.getTrackedGameByPid(u?.pid) : null,
        E = p?.source ?? null,
        m = p?.overlayMethod ?? a.default.getRenderMethod(u?.pid) ?? null,
        g = {
            overlay_game_source: E,
            overlay_game_name: null != l ? l.name : "Unknown Game",
            overlay_app_id: null != l ? l.id : null,
            overlay_render_method: null != m ? s.Ue[m] : null,
            media_session_id: c.A.getMediaSessionId(),
            overlay_game_elevated: u?.elevated,
            input_service_initialized: r.Ay.isSystemServiceInitialized("input-service"),
            hardware_display_count: (await i.A?.hardware?.getDisplayCount?.()) ?? null,
        };
    switch ((__OVERLAY__ && (g.overlay_render_method = s.Ue[s.Ue.Hook]), (t = { ...g, ...t }), e)) {
        case h.HAw.VOICE_CHANNEL_SELECTED:
        case h.HAw.SETTINGS_PANE_VIEWED:
        case h.HAw.GUILD_VIEWED:
        case h.HAw.CHANNEL_OPENED:
            return (0, f.zV)(e, t, n);
        default:
            return _.default.track(e, t, { flush: n });
    }
}
