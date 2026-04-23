n.d(t, { x: () => M });
var i = n(132500),
    r = n(192308),
    a = n(228366),
    l = n(890615),
    s = n(51758),
    o = n(776781),
    u = n(96566),
    _ = n(413339),
    E = n(58149),
    A = n(329551),
    c = n(912630),
    d = n(965162),
    I = n(734057),
    T = n(969341),
    N = n(763827),
    S = n(309010),
    p = n(287809),
    O = n(34135),
    C = n(71393),
    g = n(834942),
    R = n(576705),
    m = n(977997),
    h = n(147036);
let M = function (e, t) {
    let M = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        f = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        { lockVoiceStateForResume: L = !1, bypassIdleUpdate: y = !1 } =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        D = I.A.getChannel(e),
        U = m.A.getCurrentClientVoiceChannelId(t ?? null) === e,
        P = null != D ? g.A.getCheck(D.guild_id) : null;
    if (!(null != t && (0, s.V)(t)) && (null == P || P.canChat || (0, o.pC)(D))) {
        if (null != D && !U) {
            let e = (0, h.Pd)(D, m.A, C.A);
            if (e && D.isGuildStageVoice() && (0, u.xn)(D.id))
                return void (0, r.openModalLazy)(async () => {
                    let { default: e } = await n.e("43568").then(n.bind(n, 717523));
                    return (t) => e({ channel: D, ...t });
                });
            if (e)
                return void (0, r.openModalLazy)(async () => {
                    let { default: e } = await n.e("54207").then(n.bind(n, 361698));
                    return (t) => e(t);
                });
            if (!(0, l.A)(D, R.A)) return;
        }
        M && (0, _.PX)(),
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
                                ...(0, E.JK)(N.A.getGuildId(), N.A.getChannelId(), n),
                                duration_muted_ms: i?.duration_muted_ms ?? null,
                                output_audio_route_type: O.A.getCurrentRouteType(),
                            });
                    if ((e(), c.A.hasUsedBackgroundInCall)) {
                        let e,
                            t = {
                                ...l,
                                ...((e = (0, A.i)(p.default.getCurrentUser())),
                                {
                                    video_device_name: T.Ay.getVideoDevices()[T.Ay.getVideoDeviceId()]?.name,
                                    video_hardware_scaling_enabled: T.Ay.getHardwareEncoding(),
                                    video_effect_type: (0, d.wC)(e),
                                    video_effect_detail: (0, d._V)(e),
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
                        stream: f,
                        lockVoiceStateForResume: L,
                        joinVoiceId: n,
                        bypassIdleUpdate: y,
                    });
                },
                e,
                M,
            );
    }
};
