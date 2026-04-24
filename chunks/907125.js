n.d(t, { x: () => M });
var i = n(132500),
    r = n(192308),
    a = n(228366),
    l = n(890615),
    s = n(51758),
    E = n(776781),
    _ = n(96566),
    o = n(413339),
    u = n(58149),
    A = n(329551),
    d = n(912630),
    c = n(965162),
    I = n(734057),
    T = n(969341),
    N = n(763827),
    S = n(309010),
    O = n(287809),
    C = n(34135),
    p = n(71393),
    R = n(834942),
    g = n(576705),
    h = n(977997),
    m = n(147036);
let M = function (e, t) {
    let M = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        L = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        { lockVoiceStateForResume: D = !1, bypassIdleUpdate: y = !1 } =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        f = I.A.getChannel(e),
        U = h.A.getCurrentClientVoiceChannelId(t ?? null) === e,
        P = null != f ? R.A.getCheck(f.guild_id) : null;
    if (!(null != t && (0, s.V)(t)) && (null == P || P.canChat || (0, E.pC)(f))) {
        if (null != f && !U) {
            let e = (0, m.Pd)(f, h.A, p.A);
            if (e && f.isGuildStageVoice() && (0, _.xn)(f.id))
                return void (0, r.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("24199"),
                        n.e("58710"),
                        n.e("45723"),
                        n.e("68551"),
                    ]).then(n.bind(n, 717523));
                    return (t) => e({ channel: f, ...t });
                });
            if (e)
                return void (0, r.openModalLazy)(async () => {
                    let { default: e } = await n.e("54207").then(n.bind(n, 361698));
                    return (t) => e(t);
                });
            if (!(0, l.A)(f, g.A)) return;
        }
        M && (0, o.PX)(),
            (function (e, t, n) {
                let i = S.A.getVoiceChannelId(),
                    r = I.A.getChannel(i);
                if (null == t && null != i && null != r) {
                    let t,
                        i,
                        l =
                            ((t = N.A.getRTCConnection()),
                            (i = t?.getVoiceDurationStats()),
                            {
                                channel_id: r.id,
                                channel_type: r.type,
                                guild_id: r.getGuildId(),
                                rtc_connection_id: N.A.getRTCConnectionId(),
                                duration: N.A.getDuration(),
                                media_session_id: N.A.getMediaSessionId(),
                                ...(0, u.JK)(N.A.getGuildId(), N.A.getChannelId(), n),
                                duration_muted_ms: i?.duration_muted_ms ?? null,
                                output_audio_route_type: C.A.getCurrentRouteType(),
                            });
                    if ((e(), d.A.hasUsedBackgroundInCall)) {
                        let e,
                            t = {
                                ...l,
                                ...((e = (0, A.i)(O.default.getCurrentUser())),
                                {
                                    video_device_name: T.Ay.getVideoDevices()[T.Ay.getVideoDeviceId()]?.name,
                                    video_hardware_scaling_enabled: T.Ay.getHardwareEncoding(),
                                    video_effect_type: (0, c.wC)(e),
                                    video_effect_detail: (0, c._V)(e),
                                }),
                            };
                        a.h.dispatch({ type: "VIDEO_BACKGROUND_SHOW_FEEDBACK", analyticsData: t });
                    } else a.h.dispatch({ type: "VOICE_CHANNEL_SHOW_FEEDBACK", analyticsData: l });
                } else e();
            })(
                function () {
                    let n = (0, i.A)();
                    a.h.dispatch({
                        type: "VOICE_CHANNEL_SELECT",
                        guildId: t,
                        channelId: e,
                        currentVoiceChannelId: S.A.getVoiceChannelId(),
                        video: M,
                        stream: L,
                        lockVoiceStateForResume: D,
                        joinVoiceId: n,
                        bypassIdleUpdate: y,
                    });
                },
                e,
                M,
            );
    }
};
