"use strict";
n.d(t, { p: () => m, z: () => f });
var i = n(77729),
    r = n(328153),
    s = n(41984),
    a = n(833551),
    o = n(243612),
    l = n(929921),
    d = n(969341),
    _ = n(763827),
    u = n(157257),
    c = n(954571),
    E = n(58149),
    h = n(652215);
function m() {
    let e,
        t,
        n,
        i,
        s,
        a = d.Ay.getGoLiveSource(),
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
async function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        l = __OVERLAY__ ? u.A.getGame() : (0, o.qv)(),
        d = r.Ay.getRunningGames().find((e) => e.name === l?.name),
        m = d?.pid != null ? a.default.getTrackedGameByPid(d?.pid) : null,
        f = m?.source ?? null,
        g = m?.overlayMethod ?? a.default.getRenderMethod(d?.pid) ?? null,
        p = {
            overlay_game_source: f,
            overlay_game_name: null != l ? l.name : "Unknown Game",
            overlay_app_id: null != l ? l.id : null,
            overlay_render_method: null != g ? s.Ue[g] : null,
            media_session_id: _.A.getMediaSessionId(),
            overlay_game_elevated: d?.elevated,
            input_service_initialized: r.Ay.isSystemServiceInitialized("input-service"),
            hardware_display_count: (await i.A?.hardware?.getDisplayCount?.()) ?? null,
        };
    switch ((__OVERLAY__ && (p.overlay_render_method = s.Ue[s.Ue.Hook]), (t = { ...p, ...t }), e)) {
        case h.HAw.VOICE_CHANNEL_SELECTED:
        case h.HAw.SETTINGS_PANE_VIEWED:
        case h.HAw.GUILD_VIEWED:
        case h.HAw.CHANNEL_OPENED:
            return (0, E.zV)(e, t, n);
        default:
            return c.default.track(e, t, { flush: n });
    }
}
