"use strict";
n.d(t, { p: () => h, z: () => I });
var i = n(77729),
    r = n(952818),
    a = n(41984),
    s = n(296027),
    l = n(243612),
    o = n(929921),
    d = n(453028),
    c = n(763827),
    u = n(157257),
    _ = n(174459),
    E = n(95561),
    A = n(652215);
function h() {
    let e,
        t,
        n,
        i,
        a,
        s = d.Ay.getGoLiveSource(),
        l = o.A.getState().preset;
    if (null != s && ((e = s.quality.resolution), (t = s.quality.frameRate), null != s.desktopSource)) {
        n = s.desktopSource.soundshareSession;
        let e = null != s.desktopSource.sourcePid ? r.Ay.getGameForPID(s.desktopSource.sourcePid) : null;
        (i = e?.name ?? null), (a = e?.id ?? null);
    }
    return {
        video_input_resolution: e,
        video_input_frame_rate: t,
        soundshare_session: n,
        share_game_name: i,
        share_game_id: a,
        quality_preset: l,
    };
}
async function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        o = __OVERLAY__ ? u.A.getGame() : (0, l.qv)(),
        d = r.Ay.getRunningGames().find((e) => e.name === o?.name),
        h = d?.pid != null ? s.default.getTrackedGameByPid(d?.pid) : null,
        I = h?.source ?? null,
        f = h?.overlayMethod ?? s.default.getRenderMethod(d?.pid) ?? null,
        p = {
            overlay_game_source: I,
            overlay_game_name: null != o ? o.name : "Unknown Game",
            overlay_app_id: null != o ? o.id : null,
            overlay_render_method: null != f ? a.Ue[f] : null,
            media_session_id: c.A.getMediaSessionId(),
            overlay_game_elevated: d?.elevated,
            input_service_initialized: r.Ay.isSystemServiceInitialized("input-service"),
            hardware_display_count: (await i.A?.hardware?.getDisplayCount?.()) ?? null,
        };
    switch ((__OVERLAY__ && (p.overlay_render_method = a.Ue[a.Ue.Hook]), (t = { ...p, ...t }), e)) {
        case A.HAw.VOICE_CHANNEL_SELECTED:
        case A.HAw.SETTINGS_PANE_VIEWED:
        case A.HAw.GUILD_VIEWED:
        case A.HAw.CHANNEL_OPENED:
            return (0, E.zV)(e, t, n);
        default:
            return _.default.track(e, t, { flush: n });
    }
}
