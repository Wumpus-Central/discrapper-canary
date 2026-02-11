"use strict";
n.d(t, { p: () => p, z: () => g });
var r = n(77729),
    i = n(15285),
    a = n(41984),
    s = n(833551),
    o = n(243612),
    l = n(929921),
    u = n(430452),
    c = n(383501),
    d = n(157257),
    _ = n(954571),
    f = n(58149),
    h = n(652215);
function p() {
    let e,
        t,
        n,
        r,
        a,
        s = u.Ay.getGoLiveSource(),
        o = l.A.getState().preset;
    if (null != s && ((e = s.quality.resolution), (t = s.quality.frameRate), null != s.desktopSource)) {
        n = s.desktopSource.soundshareSession;
        let e = null != s.desktopSource.sourcePid ? i.Ay.getGameForPID(s.desktopSource.sourcePid) : null;
        (r = e?.name ?? null), (a = e?.id ?? null);
    }
    return {
        video_input_resolution: e,
        video_input_frame_rate: t,
        soundshare_session: n,
        share_game_name: r,
        share_game_id: a,
        quality_preset: o,
    };
}
async function g(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        l = __OVERLAY__ ? d.A.getGame() : (0, o.qv)(),
        u = i.Ay.getRunningGames().find((e) => e.name === l?.name),
        p = u?.pid != null ? s.default.getTrackedGameByPid(u?.pid) : null,
        g = p?.source ?? null,
        E = p?.overlayMethod ?? s.default.getRenderMethod(u?.pid) ?? null,
        A = {
            overlay_game_source: g,
            overlay_game_name: null != l ? l.name : "Unknown Game",
            overlay_app_id: null != l ? l.id : null,
            overlay_render_method: null != E ? a.Ue[E] : null,
            media_session_id: c.A.getMediaSessionId(),
            overlay_game_elevated: u?.elevated,
            input_service_initialized: i.Ay.isSystemServiceInitialized("input-service"),
            hardware_display_count: (await r.A?.hardware?.getDisplayCount?.()) ?? null,
        };
    switch ((__OVERLAY__ && (A.overlay_render_method = a.Ue[a.Ue.Hook]), (t = { ...A, ...t }), e)) {
        case h.HAw.VOICE_CHANNEL_SELECTED:
        case h.HAw.SETTINGS_PANE_VIEWED:
        case h.HAw.GUILD_VIEWED:
        case h.HAw.CHANNEL_OPENED:
            return (0, f.zV)(e, t, n);
        default:
            return _.default.track(e, t, { flush: n });
    }
}
