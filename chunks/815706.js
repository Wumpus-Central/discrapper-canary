n.d(t, {
    p: () => g,
    z: () => E,
});
var r = n(77729),
    i = n(15285),
    a = n(41984),
    s = n(833551),
    o = n(243612),
    l = n(929921),
    c = n(430452),
    u = n(383501),
    d = n(157257),
    f = n(954571),
    p = n(58149),
    _ = n(652215);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function g() {
    let e,
        t,
        n,
        r,
        a,
        s = c.A.getGoLiveSource(),
        o = l.A.getState().preset;
    if (null != s && ((e = s.quality.resolution), (t = s.quality.frameRate), null != s.desktopSource)) {
        var u, d;
        n = s.desktopSource.soundshareSession;
        let e = null != s.desktopSource.sourcePid ? i.Ay.getGameForPID(s.desktopSource.sourcePid) : null;
        (r = null != (u = null == e ? void 0 : e.name) ? u : null),
            (a = null != (d = null == e ? void 0 : e.id) ? d : null);
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
async function E(e, t) {
    var n, l, c, h, g, E;
    let b = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        y = __OVERLAY__ ? d.A.getGame() : (0, o.qv)(),
        O = i.Ay.getRunningGames().find((e) => e.name === (null == y ? void 0 : y.name)),
        A = (null == O ? void 0 : O.pid) != null ? s.default.getTrackedGameByPid(null == O ? void 0 : O.pid) : null,
        v = null != (n = null == A ? void 0 : A.source) ? n : null,
        S =
            null !=
            (l =
                null != (c = null == A ? void 0 : A.overlayMethod)
                    ? c
                    : s.default.getRenderMethod(null == O ? void 0 : O.pid))
                ? l
                : null,
        I = {
            overlay_game_source: v,
            overlay_game_name: null != y ? y.name : "Unknown Game",
            overlay_app_id: null != y ? y.id : null,
            overlay_render_method: null != S ? a.Ue[S] : null,
            media_session_id: u.A.getMediaSessionId(),
            overlay_game_elevated: null == O ? void 0 : O.elevated,
            input_service_initialized: i.Ay.isSystemServiceInitialized("input-service"),
            hardware_display_count:
                null !=
                (h = await (null === r.A ||
                void 0 === r.A ||
                null == (E = r.A.hardware) ||
                null == (g = E.getDisplayCount)
                    ? void 0
                    : g.call(E)))
                    ? h
                    : null,
        };
    switch ((__OVERLAY__ && (I.overlay_render_method = a.Ue[a.Ue.Hook]), (t = m({}, I, t)), e)) {
        case _.HAw.VOICE_CHANNEL_SELECTED:
        case _.HAw.SETTINGS_PANE_VIEWED:
        case _.HAw.GUILD_VIEWED:
        case _.HAw.CHANNEL_OPENED:
            return (0, p.zV)(e, t, b);
        default:
            return f.default.track(e, t, { flush: b });
    }
}
