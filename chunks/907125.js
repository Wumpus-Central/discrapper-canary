n.d(t, { x: () => m });
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
    M = n(977997),
    h = n(147036);
let m = function (e, t) {
    let m = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        L = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        { lockVoiceStateForResume: D = !1, bypassIdleUpdate: y = !1 } =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        f = I.A.getChannel(e),
        U = M.A.getCurrentClientVoiceChannelId(t ?? null) === e,
        P = null != f ? R.A.getCheck(f.guild_id) : null;
    if (!(null != t && (0, s.V)(t)) && (null == P || P.canChat || (0, E.pC)(f))) {
        if (null != f && !U) {
            let e = (0, h.Pd)(f, M.A, p.A);
            if (e && f.isGuildStageVoice() && (0, _.xn)(f.id))
                return void (0, r.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("48486"),
                        n.e("75903"),
                        n.e("24199"),
                        n.e("43039"),
                        n.e("88077"),
                        n.e("13681"),
                        n.e("21690"),
                        n.e("32551"),
                        n.e("52367"),
                        n.e("77998"),
                        n.e("66900"),
                        n.e("44695"),
                        n.e("55314"),
                        n.e("29177"),
                        n.e("1177"),
                        n.e("32817"),
                        n.e("89094"),
                        n.e("5501"),
                        n.e("77245"),
                        n.e("1555"),
                        n.e("34472"),
                        n.e("45723"),
                        n.e("38835"),
                        n.e("78777"),
                        n.e("19452"),
                        n.e("43568"),
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
        m && (0, o.PX)(),
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
                        video: m,
                        stream: L,
                        lockVoiceStateForResume: D,
                        joinVoiceId: n,
                        bypassIdleUpdate: y,
                    });
                },
                e,
                m,
            );
    }
};
