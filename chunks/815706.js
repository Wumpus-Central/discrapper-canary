"use strict";
n.d(t, { p: () => h, z: () => E });
var r = n(77729),
    i = n(15285),
    s = n(41984),
    a = n(833551),
    o = n(243612),
    l = n(929921),
    u = n(430452),
    c = n(383501),
    d = n(157257),
    _ = n(954571),
    f = n(58149),
    p = n(652215);
function h() {
    let e,
        t,
        n,
        r,
        s,
        a = u.Ay.getGoLiveSource(),
        o = l.A.getState().preset;
    if (null != a && ((e = a.quality.resolution), (t = a.quality.frameRate), null != a.desktopSource)) {
        n = a.desktopSource.soundshareSession;
        let e = null != a.desktopSource.sourcePid ? i.Ay.getGameForPID(a.desktopSource.sourcePid) : null;
        (r = e?.name ?? null), (s = e?.id ?? null);
    }
    return {
        video_input_resolution: e,
        video_input_frame_rate: t,
        soundshare_session: n,
        share_game_name: r,
        share_game_id: s,
        quality_preset: o,
    };
}
async function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        l = __OVERLAY__ ? d.A.getGame() : (0, o.qv)(),
        u = i.Ay.getRunningGames().find((e) => e.name === l?.name),
        h = u?.pid != null ? a.default.getTrackedGameByPid(u?.pid) : null,
        E = h?.source ?? null,
        m = h?.overlayMethod ?? a.default.getRenderMethod(u?.pid) ?? null,
        g = {
            overlay_game_source: E,
            overlay_game_name: null != l ? l.name : "Unknown Game",
            overlay_app_id: null != l ? l.id : null,
            overlay_render_method: null != m ? s.Ue[m] : null,
            media_session_id: c.A.getMediaSessionId(),
            overlay_game_elevated: u?.elevated,
            input_service_initialized: i.Ay.isSystemServiceInitialized("input-service"),
            hardware_display_count: (await r.A?.hardware?.getDisplayCount?.()) ?? null,
        };
    switch ((__OVERLAY__ && (g.overlay_render_method = s.Ue[s.Ue.Hook]), (t = { ...g, ...t }), e)) {
        case p.HAw.VOICE_CHANNEL_SELECTED:
        case p.HAw.SETTINGS_PANE_VIEWED:
        case p.HAw.GUILD_VIEWED:
        case p.HAw.CHANNEL_OPENED:
            return (0, f.zV)(e, t, n);
        default:
            return _.default.track(e, t, { flush: n });
    }
}
