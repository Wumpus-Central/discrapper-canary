i.d(t, { default: () => v });
var n = i(477900);
i(582128);
var a = i(613412),
    o = i(192308),
    l = i(930932),
    s = i(878234),
    r = i(382935),
    u = i(21217),
    d = i(559633),
    c = i(718197),
    _ = i(129230),
    m = i(652215),
    p = i(670455),
    g = i(792996),
    b = i(672779);
function v(e) {
    let { onClose: t, transitionState: v, analyticsData: f } = e,
        { surveyEmojiKind: O } = u.A.useConfig({ location: "VoiceCallFeedback" }),
        y = g.intl.string(g.t.Ss6tlb),
        A = g.intl.string(g.t.tLi4cR),
        E = {
            impressionName: a.ImpressionNames.VOICE_FEEDBACK_MODAL,
            impressionProperties: { rtc_connection_id: f.rtc_connection_id, media_session_id: f.media_session_id },
        },
        F = {
            value: p.Eq.CONNECTION,
            label: g.intl.string(b.default.FVhMw6),
            problemsHeader: g.intl.string(g.t.FJmoxF),
            problemOptions: (0, l.A_)(),
            freeformConfig: { value: p.bO.FREEFORM, label: g.intl.string(g.t.emlT91) },
        },
        C = {
            value: p.Eq.AUDIO,
            label: g.intl.string(b.default.PL2l6A),
            problemsHeader: g.intl.string(g.t.FJmoxF),
            problemOptions: (0, l.Op)({ isMobile: !1 }),
            freeformConfig: { value: p.X.FREEFORM, label: g.intl.string(g.t.emlT91) },
        },
        M = {
            value: p.Eq.VIDEO,
            label: g.intl.string(b.default["0WFzPh"]),
            problemsHeader: g.intl.string(g.t.FJmoxF),
            problemOptions: (0, l.de)(),
            freeformConfig: { value: p.AO.FREEFORM, label: g.intl.string(g.t.emlT91) },
        },
        h = {
            value: p.Eq.PEOPLE,
            label: g.intl.string(b.default.Moa3W9),
            problemsHeader: g.intl.string(g.t.FJmoxF),
            problemOptions: (0, l.TK)(),
            freeformConfig: { value: p.CW.FREEFORM, label: g.intl.string(g.t.emlT91) },
        };
    return (0, n.jsx)(r.A, {
        onMount: () => {
            _.default.track(m.HAw.OPEN_MODAL, { type: "voice", source: "Feedback Modal" });
        },
        onSubmit: function (e) {
            let { dontShowAgain: t, rating: a, feedback: r, category: u, problem: b } = e;
            (t && (0, l.n3)({ feedbackType: p.MW.VOICE, location: "VoiceCallFeedbackModal" }),
                null == a ||
                    (!(async function (e, t) {
                        let {
                                rating: i,
                                category: n,
                                reasonCode: a,
                                reasonDescription: o,
                                variant: l,
                                feedback: s,
                                analyticsData: r,
                            } = t,
                            u = c.Ay.getSettings(),
                            m = c.Ay.getInputDeviceId(),
                            p = c.Ay.getInputDevices()[m],
                            g = c.Ay.getOutputDeviceId(),
                            b = c.Ay.getOutputDevices()[g],
                            v = c.Ay.getVideoDeviceId(),
                            f = c.Ay.getVideoDevices()[v],
                            O = c.Ay.getNoiseCancellation(),
                            y = c.Ay.getMediaEngine().getAudioSubsystem(),
                            A = c.Ay.getMediaEngine().getAudioLayer(),
                            E = await d.A.getKrispModel(),
                            { output_audio_route_type: F, ...C } = r ?? {};
                        _.default.track(e, {
                            rating: i ?? "no response",
                            category: n,
                            reason_code: a,
                            reason_description: o,
                            reason_variant: l,
                            feedback: s,
                            audio_input_mode: u.mode,
                            automatic_audio_input_sensitivity_enabled: u.modeOptions.autoThreshold,
                            audio_input_sensitivity: u.modeOptions.threshold,
                            vad_use_advanced_voice_activity: u.modeOptions.vadUseKrisp,
                            echo_cancellation_enabled: u.echoCancellation,
                            noise_suppression_enabled: u.noiseSuppression,
                            automatic_gain_control_enabled: u.automaticGainControl,
                            voice_output_volume: u.outputVolume,
                            noise_cancellation_enabled: O,
                            input_device_name: p?.name,
                            output_device_name: b?.name,
                            video_device_name: f?.name,
                            audio_subsystem: y,
                            audio_layer: A,
                            automatic_audio_subsystem: u.automaticAudioSubsystem,
                            krisp_nc_model: E,
                            audio_output_mode: F,
                            ...C,
                        });
                    })(m.HAw.CALL_REPORT_PROBLEM, {
                        rating: a,
                        category: u,
                        reasonDescription: b?.value ?? null,
                        variant: b?.variant ?? null,
                        feedback: r,
                        analyticsData: f,
                    }),
                    null == b ||
                        (b.value === p.X.NO_AUDIO &&
                        b.variant === p.UV.SELF &&
                        (function (e) {
                            let { duration: t, duration_muted_ms: i } = e;
                            return null != t && null != i && 0 !== t && i / t >= 0.98 && c.Ay.isSelfMute();
                        })(f)
                            ? (0, o.mM)(async () => {
                                  let { default: e } = await Promise.all([i.e(103659), i.e(21226), i.e(141737)]).then(
                                      i.bind(i, 813923),
                                  );
                                  return (t) => (0, n.jsx)(e, { ...t });
                              })
                            : (0, s.r)(a, u, b)
                              ? (0, o.mM)(async () => {
                                    let { default: e } = await i.e(969791).then(i.bind(i, 72514));
                                    return (t) =>
                                        (0, n.jsx)(e, {
                                            ...t,
                                            mediaSessionId: f.media_session_id,
                                            rtcConnectionId: f.rtc_connection_id,
                                        });
                                })
                              : (0, o.mM)(async () => {
                                    let { default: e } = await i.e(137836).then(i.bind(i, 845671));
                                    return (t) => (0, n.jsx)(e, { body: g.intl.string(g.t["d9+vQ8"]), ...t });
                                }))));
        },
        onClose: t,
        ratingHeader: y,
        ratingEmojiKind: O,
        ratingBody: A,
        categoriesHeader: g.intl.string(b.default.tq8598),
        optionsTree: [F, C, M, h],
        impression: E,
        transitionState: v,
    });
}
