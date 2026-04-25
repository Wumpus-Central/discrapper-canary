"use strict";
n.d(t, { A: () => P });
var i = n(111956),
    r = n.n(i),
    s = n(228366),
    a = n(626584),
    o = n(400492),
    l = n(409826),
    _ = n(698723),
    d = n(413339),
    u = n(347481),
    c = n(734057),
    E = n(969341),
    h = n(763827),
    m = n(309010),
    f = n(287809),
    g = n(954571),
    I = n(650338),
    A = n(652215),
    p = n(257645),
    T = n(731854);
let S = new a.A("AudioActionCreators");
function N() {
    (0, o.Ak)("mention3", void 0, void 0, void 0, p.a.VOICE);
}
function O() {
    let e = E.Ay.getInputDevices()[E.Ay.getInputDeviceId()];
    return null != e ? e.name : "";
}
function R(e, t, n, i) {
    let { location: r, analyticsLocations: s } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    if (t === n) return;
    let a = m.A.getVoiceChannelId(),
        o = null != a ? c.A.getChannel(a) : null,
        l = e[t],
        _ = e[n],
        d = E.Ay.getMediaEngine().getAudioSubsystem(),
        h = E.Ay.getMediaEngine().getAudioLayer();
    g.default.track(A.HAw.MEDIA_DEVICE_CHANGED, {
        device_from_name: u.A.getCertifiedDeviceName(t, null != l ? l.name : ""),
        device_to_name: u.A.getCertifiedDeviceName(n, null != _ ? _.name : ""),
        device_type: i,
        device_is_certified: u.A.isCertified(n),
        location: r,
        location_stack: s,
        voice_channel_type: o?.type,
        audio_subsystem: d,
        audio_layer: h,
    });
}
S.enableNativeLogger(!0);
let C = r()((e, t, n) => {
        g.default.track(A.HAw.USER_VOLUME_SETTING_UPDATED, {
            target_user_id: e,
            context: t,
            volume: n,
            media_session_id: h.A.getMediaSessionId(),
            rtc_connection_id: h.A.getRTCConnectionId(),
        });
    }, 300),
    y = {
        isNotSupported: () => !1,
        enable: (e) => Promise.resolve(!0),
        trackToggleSelfMute(e) {},
        trackToggleSelfDeaf(e) {},
    },
    { enable: D, isNotSupported: L, trackToggleSelfMute: v, trackToggleSelfDeaf: w } = (y = n(401124)),
    P = {
        enable: D,
        toggleSelfMute() {
            let {
                context: e = T.x.DEFAULT,
                syncRemote: t = !0,
                usedKeybind: n = !1,
                playSoundEffect: i = !0,
                location: r,
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return L()
                ? Promise.resolve()
                : (v({ usedKeybind: n, location: r }),
                    (i = i && !E.Ay.hasActiveCallKitCall()),
                    f.default.getCurrentUser()?.isStaff() && S.info("Toggling self mute"),
                    E.Ay.isEnabled())
                  ? s.h.dispatch({ type: "AUDIO_TOGGLE_SELF_MUTE", context: e, syncRemote: t, playSoundEffect: i })
                  : this.enable(!0);
        },
        setSelfMute(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
            L() ||
                ((n = n && !E.Ay.hasActiveCallKitCall()),
                f.default.getCurrentUser()?.isStaff() && S.info("Setting self mute", t),
                s.h.dispatch({ type: "AUDIO_SET_SELF_MUTE", context: e, mute: t, playSoundEffect: n }));
        },
        setTemporarySelfMute(e) {
            L() ||
                (f.default.getCurrentUser()?.isStaff() && S.info("Setting temporary self mute", e),
                s.h.dispatch({ type: "AUDIO_SET_TEMPORARY_SELF_MUTE", mute: e }));
        },
        toggleSelfDeaf() {
            let {
                context: e = T.x.DEFAULT,
                syncRemote: t = !0,
                usedKeybind: n = !1,
                location: i,
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            L() ||
                (w({ usedKeybind: n, location: i }),
                s.h.dispatch({ type: "AUDIO_TOGGLE_SELF_DEAF", context: e, syncRemote: t }));
        },
        toggleLocalMute(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T.x.DEFAULT;
            L() || s.h.dispatch({ type: "AUDIO_TOGGLE_LOCAL_MUTE", context: t, userId: e });
        },
        toggleLocalSoundboardMute(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T.x.DEFAULT;
            s.h.dispatch({ type: "AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE", context: t, userId: e });
        },
        setDisableLocalVideo(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T.x.DEFAULT,
                i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            L() ||
                s.h.dispatch({
                    type: "AUDIO_SET_LOCAL_VIDEO_DISABLED",
                    context: n,
                    userId: e,
                    videoToggleState: t,
                    persist: i,
                    isAutomatic: r,
                });
        },
        setLocalVolume(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T.x.DEFAULT,
                i = (0, l.z)(t, n);
            s.h.dispatch({ type: "AUDIO_SET_LOCAL_VOLUME", context: n, userId: e, volume: i }), C(e, n, i);
        },
        setLocalPan(e, t, n) {
            let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : T.x.DEFAULT;
            s.h.dispatch({ type: "AUDIO_SET_LOCAL_PAN", context: i, userId: e, left: t, right: n });
        },
        setMode(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T.x.DEFAULT,
                { analyticsLocations: i } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            if (L()) return;
            let r = e !== E.Ay.getMode(),
                a = E.Ay.getModeOptions(n);
            if ((s.h.dispatch({ type: "AUDIO_SET_MODE", context: n, mode: e, options: { ...a, ...t } }), r)) {
                let t = E.Ay.getMediaEngine().getAudioSubsystem(),
                    n = E.Ay.getMediaEngine().getAudioLayer(),
                    r = m.A.getVoiceChannelId(),
                    s = null != r ? c.A.getChannel(r) : null,
                    a = O();
                g.default.track(A.HAw.VOICE_ACTIVATION_MODE_CHANGED, {
                    mode: e,
                    location_stack: i,
                    voice_channel_type: s?.type,
                    input_device_name: a,
                    audio_subsystem: t,
                    audio_layer: n,
                });
            } else if (e === A.TBI.VOICE_ACTIVITY && a !== t) {
                let e = E.Ay.getMediaEngine().getAudioSubsystem(),
                    n = E.Ay.getMediaEngine().getAudioLayer(),
                    r = m.A.getVoiceChannelId(),
                    s = null != r ? c.A.getChannel(r) : null,
                    o = O();
                g.default.track(A.HAw.VOICE_ACTIVITY_THRESHOLD_CHANGED, {
                    location_stack: i,
                    voice_channel_type: s?.type,
                    input_device_name: o,
                    audio_subsystem: e,
                    audio_layer: n,
                    old_threshold: a.threshold,
                    new_threshold: t.threshold,
                    old_auto_threshold: a.autoThreshold,
                    new_auto_threshold: t.autoThreshold,
                });
            }
        },
        setBypassSystemInputProcessing(e, t) {
            L() || s.h.dispatch({ type: "AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING", bypassEnabled: e, location: t });
        },
        setInputVolume(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (L()) return;
            s.h.dispatch({ type: "AUDIO_SET_INPUT_VOLUME", volume: e });
            let n = m.A.getVoiceChannelId(),
                i = null != n ? c.A.getChannel(n) : null;
            g.default.track(A.HAw.MEDIA_INPUT_VOLUME_CHANGED, {
                volume: e,
                location_stack: t,
                voice_channel_type: i?.type,
            });
        },
        setOutputVolume(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (L()) return;
            s.h.dispatch({ type: "AUDIO_SET_OUTPUT_VOLUME", volume: e });
            let n = m.A.getVoiceChannelId(),
                i = null != n ? c.A.getChannel(n) : null;
            g.default.track(A.HAw.MEDIA_OUTPUT_VOLUME_CHANGED, {
                volume: e,
                location_stack: t,
                voice_channel_type: i?.type,
            });
        },
        setInputDevice(e) {
            let { location: t, analyticsLocations: n } =
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (L()) return;
            let i = E.Ay.getInputDeviceId();
            (null != t || null != n) &&
                R(E.Ay.getInputDevices(), i, e, "Audio Input", { location: t, analyticsLocations: n }),
                s.h.dispatch({ type: "AUDIO_SET_INPUT_DEVICE", id: e, oldId: i }),
                N();
        },
        setOutputDevice(e) {
            let { location: t, analyticsLocations: n } =
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (L()) return;
            let i = E.Ay.getOutputDeviceId();
            (null != t || null != n) &&
                R(E.Ay.getOutputDevices(), i, e, "Audio Output", { location: t, analyticsLocations: n }),
                s.h.dispatch({ type: "AUDIO_SET_OUTPUT_DEVICE", id: e, oldId: i }),
                N();
        },
        setVideoDevice(e) {
            let { location: t, analyticsLocations: n } =
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (L()) return;
            let i = E.Ay.getVideoDeviceId();
            (null != t || null != n) &&
                R(E.Ay.getVideoDevices(), i, e, "Video", { location: t, analyticsLocations: n }),
                s.h.dispatch({ type: "MEDIA_ENGINE_SET_VIDEO_DEVICE", id: e, oldId: i });
        },
        setActiveInputProfile(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            L() ||
                ((0, _.A)("active_input_profile", e, E.Ay.getActiveInputProfile() ?? void 0, t),
                s.h.dispatch({ type: "AUDIO_SET_ACTIVE_INPUT_PROFILE", inputProfile: e }));
        },
        setEchoCancellation(e, t) {
            L() || s.h.dispatch({ type: "AUDIO_SET_ECHO_CANCELLATION", enabled: e, location: t });
        },
        setSidechainCompression(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            L() ||
                ((0, _.A)("stream_attenuation_enabled", e, E.Ay.getSidechainCompression(), t),
                s.h.dispatch({ type: "AUDIO_SET_SIDECHAIN_COMPRESSION", enabled: e }));
        },
        setSidechainCompressionStrength(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            L() ||
                ((0, _.A)("stream_attenuation_strength", e, E.Ay.getSidechainCompressionStrength(), t),
                s.h.dispatch({ type: "AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH", strength: e }));
        },
        setLoopback(e, t) {
            L() || s.h.dispatch({ type: "AUDIO_SET_LOOPBACK", loopbackReason: e, enabled: t });
        },
        setNoiseSuppression(e, t) {
            L() || s.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: e, location: t });
        },
        setNoiseCancellation(e, t) {
            L() ||
                (s.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION", enabled: e, location: t }),
                s.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !e, location: t }));
        },
        setAutomaticGainControl(e, t) {
            L() || s.h.dispatch({ type: "AUDIO_SET_AUTOMATIC_GAIN_CONTROL", enabled: e, location: t });
        },
        setAttenuation(e, t, n) {
            if (!L()) {
                let i, r, a;
                (i = E.Ay.getAttenuation()),
                    (r = E.Ay.getAttenuateWhileSpeakingSelf()),
                    (a = E.Ay.getAttenuateWhileSpeakingOthers()),
                    i !== e
                        ? (0, _.A)("global_attenuation_strength", e, i)
                        : r !== t
                          ? (0, _.A)("global_attenuation_for_self_speak_enabled", t, r)
                          : a !== n && (0, _.A)("global_attenuation_for_other_speak_enabled", n, a),
                    s.h.dispatch({
                        type: "AUDIO_SET_ATTENUATION",
                        attenuation: e,
                        attenuateWhileSpeakingSelf: t,
                        attenuateWhileSpeakingOthers: n,
                    });
            }
        },
        setQoS(e) {
            L() ||
                ((0, _.A)("quality_of_service_packets_enabled", e, E.Ay.getQoS()),
                s.h.dispatch({ type: "AUDIO_SET_QOS", enabled: e }));
        },
        reset() {
            L() || s.h.dispatch({ type: "AUDIO_RESET" });
        },
        setSilenceWarning(e) {
            L() ||
                ((0, _.A)("silence_warning_enabled", e, E.Ay.getEnableSilenceWarning()),
                s.h.dispatch({ type: "AUDIO_SET_DISPLAY_SILENCE_WARNING", enabled: e }));
        },
        async setDebugLogging(e) {
            L() ||
                (await (0, _.A)("debug_logging_enabled", e, E.Ay.getDebugLogging()),
                s.h.dispatch({ type: "AUDIO_SET_DEBUG_LOGGING", enabled: e }));
        },
        setVideoHook(e) {
            L() ||
                ((0, _.A)("video_hook_enabled", e, E.Ay.getVideoHook()),
                s.h.dispatch({ type: "MEDIA_ENGINE_SET_VIDEO_HOOK", enabled: e }));
        },
        setExperimentalSoundshare(e) {
            L() ||
                ((0, _.A)("experimental_soundshare_enabled", e, E.Ay.getExperimentalSoundshare()),
                s.h.dispatch({ type: "MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE", enabled: e }));
        },
        setUseSystemScreensharePicker(e) {
            L() ||
                ((0, _.A)("system_screenshare_picker_enabled", e, E.Ay.getUseSystemScreensharePicker()),
                s.h.dispatch({ type: "MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER", enabled: e }));
        },
        async setAudioSubsystem(e) {
            L() ||
                (await (0, _.A)("audio_subsystem", e, E.Ay.getAudioSubsystem()),
                s.h.dispatch({ type: "AUDIO_SET_SUBSYSTEM", subsystem: e }));
        },
        setVideoEnabled(e) {
            (0, d.PX)(), s.h.dispatch({ type: "MEDIA_ENGINE_SET_VIDEO_ENABLED", enabled: e });
        },
        setGoLiveSource(e) {
            e?.qualityOptions != null &&
                (0, I.K2)(
                    e.qualityOptions.preset,
                    e.qualityOptions.resolution,
                    e.qualityOptions.frameRate,
                    e.desktopSettings?.sound,
                ),
                s.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: e });
        },
        setAecDump(e) {
            L() ||
                ((0, _.A)("diagnostic_audio_recording_enabled", e, E.Ay.getAecDump()),
                s.h.dispatch({ type: "MEDIA_ENGINE_SET_AEC_DUMP", enabled: e }));
        },
        interact() {
            L() || s.h.dispatch({ type: "MEDIA_ENGINE_INTERACTION_REQUIRED", required: !1 });
        },
        setEnableHardwareMuteNotice(e) {
            L() || s.h.dispatch({ type: "MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE", enabled: e });
        },
        setKrispSuppressionLevel(e) {
            L() || s.h.dispatch({ type: "AUDIO_SET_KRISP_SUPPRESSION_LEVEL", level: e });
        },
        setKrispModelOverride(e) {
            !L() &&
                (s.h.dispatch({ type: "AUDIO_SET_KRISP_MODEL_OVERRIDE", model: e }),
                E.Ay.getNoiseCancellation() && (this.setNoiseCancellation(!1), this.setNoiseCancellation(!0)));
        },
        setNoiseCancellationEnableStats(e) {
            L() || s.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS", enabled: e });
        },
        setOpenH264Enabled(e) {
            L() || s.h.dispatch({ type: "MEDIA_ENGINE_SET_OPENH264_ENABLED", enabled: e });
        },
        resetMediaEngineSettings: (e) => s.h.dispatch({ type: "MEDIA_ENGINE_RESET_SETTINGS", overrides: e }),
    };
