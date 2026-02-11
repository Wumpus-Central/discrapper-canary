"use strict";
n.d(t, { A: () => x });
var r = n(111956),
    i = n.n(r),
    a = n(73153),
    s = n(626584),
    o = n(400492),
    l = n(409826),
    u = n(698723),
    c = n(413339),
    d = n(347481),
    _ = n(734057),
    f = n(430452),
    h = n(383501),
    p = n(309010),
    g = n(287809),
    E = n(954571),
    A = n(650338),
    I = n(652215),
    T = n(257645),
    y = n(731854);
let S = new s.A("AudioActionCreators");
function v() {
    (0, o.Ak)("mention3", void 0, void 0, void 0, T.a.VOICE);
}
function C() {
    let e = f.Ay.getInputDevices()[f.Ay.getInputDeviceId()];
    return null != e ? e.name : "";
}
function b(e, t, n, r) {
    let { location: i, analyticsLocations: a } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    if (t === n) return;
    let s = p.A.getVoiceChannelId(),
        o = null != s ? _.A.getChannel(s) : null,
        l = e[t],
        u = e[n],
        c = f.Ay.getMediaEngine().getAudioSubsystem(),
        h = f.Ay.getMediaEngine().getAudioLayer();
    E.default.track(I.HAw.MEDIA_DEVICE_CHANGED, {
        device_from_name: d.A.getCertifiedDeviceName(t, null != l ? l.name : ""),
        device_to_name: d.A.getCertifiedDeviceName(n, null != u ? u.name : ""),
        device_type: r,
        device_is_certified: d.A.isCertified(n),
        location: i,
        location_stack: a,
        voice_channel_type: o?.type,
        audio_subsystem: c,
        audio_layer: h,
    });
}
let N = i()((e, t, n) => {
        E.default.track(I.HAw.USER_VOLUME_SETTING_UPDATED, {
            target_user_id: e,
            context: t,
            volume: n,
            media_session_id: h.A.getMediaSessionId(),
            rtc_connection_id: h.A.getRTCConnectionId(),
        });
    }, 300),
    R = {
        isNotSupported: () => !1,
        enable: (e) => Promise.resolve(!0),
        trackToggleSelfMute(e) {},
        trackToggleSelfDeaf(e) {},
    },
    { enable: O, isNotSupported: D, trackToggleSelfMute: L, trackToggleSelfDeaf: w } = (R = n(401124)),
    x = {
        enable: O,
        toggleSelfMute() {
            let {
                context: e = y.x.DEFAULT,
                syncRemote: t = !0,
                usedKeybind: n = !1,
                playSoundEffect: r = !0,
                location: i,
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return D()
                ? Promise.resolve()
                : (L({ usedKeybind: n, location: i }),
                    (r = r && !f.Ay.hasActiveCallKitCall()),
                    g.default.getCurrentUser()?.isStaff() && S.info("Toggling self mute"),
                    f.Ay.isEnabled())
                  ? a.h.dispatch({ type: "AUDIO_TOGGLE_SELF_MUTE", context: e, syncRemote: t, playSoundEffect: r })
                  : this.enable(!0);
        },
        setSelfMute(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
            D() ||
                ((n = n && !f.Ay.hasActiveCallKitCall()),
                g.default.getCurrentUser()?.isStaff() && S.info("Setting self mute", t),
                a.h.dispatch({ type: "AUDIO_SET_SELF_MUTE", context: e, mute: t, playSoundEffect: n }));
        },
        setTemporarySelfMute(e) {
            D() ||
                (g.default.getCurrentUser()?.isStaff() && S.info("Setting temporary self mute", e),
                a.h.dispatch({ type: "AUDIO_SET_TEMPORARY_SELF_MUTE", mute: e }));
        },
        toggleSelfDeaf() {
            let {
                context: e = y.x.DEFAULT,
                syncRemote: t = !0,
                usedKeybind: n = !1,
                location: r,
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            D() ||
                (w({ usedKeybind: n, location: r }),
                a.h.dispatch({ type: "AUDIO_TOGGLE_SELF_DEAF", context: e, syncRemote: t }));
        },
        toggleLocalMute(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y.x.DEFAULT;
            D() || a.h.dispatch({ type: "AUDIO_TOGGLE_LOCAL_MUTE", context: t, userId: e });
        },
        toggleLocalSoundboardMute(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y.x.DEFAULT;
            a.h.dispatch({ type: "AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE", context: t, userId: e });
        },
        setDisableLocalVideo(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : y.x.DEFAULT,
                r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            D() ||
                a.h.dispatch({
                    type: "AUDIO_SET_LOCAL_VIDEO_DISABLED",
                    context: n,
                    userId: e,
                    videoToggleState: t,
                    persist: r,
                    isAutomatic: i,
                });
        },
        setLocalVolume(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : y.x.DEFAULT,
                r = (0, l.z)(t, n);
            a.h.dispatch({ type: "AUDIO_SET_LOCAL_VOLUME", context: n, userId: e, volume: r }), N(e, n, r);
        },
        setLocalPan(e, t, n) {
            let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : y.x.DEFAULT;
            a.h.dispatch({ type: "AUDIO_SET_LOCAL_PAN", context: r, userId: e, left: t, right: n });
        },
        setMode(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : y.x.DEFAULT,
                { analyticsLocations: r } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            if (D()) return;
            let i = e !== f.Ay.getMode(),
                s = f.Ay.getModeOptions(n);
            if ((a.h.dispatch({ type: "AUDIO_SET_MODE", context: n, mode: e, options: { ...s, ...t } }), i)) {
                let t = f.Ay.getMediaEngine().getAudioSubsystem(),
                    n = f.Ay.getMediaEngine().getAudioLayer(),
                    i = p.A.getVoiceChannelId(),
                    a = null != i ? _.A.getChannel(i) : null,
                    s = C();
                E.default.track(I.HAw.VOICE_ACTIVATION_MODE_CHANGED, {
                    mode: e,
                    location_stack: r,
                    voice_channel_type: a?.type,
                    input_device_name: s,
                    audio_subsystem: t,
                    audio_layer: n,
                });
            } else if (e === I.TBI.VOICE_ACTIVITY && s !== t) {
                let e = f.Ay.getMediaEngine().getAudioSubsystem(),
                    n = f.Ay.getMediaEngine().getAudioLayer(),
                    i = p.A.getVoiceChannelId(),
                    a = null != i ? _.A.getChannel(i) : null,
                    o = C();
                E.default.track(I.HAw.VOICE_ACTIVITY_THRESHOLD_CHANGED, {
                    location_stack: r,
                    voice_channel_type: a?.type,
                    input_device_name: o,
                    audio_subsystem: e,
                    audio_layer: n,
                    old_threshold: s.threshold,
                    new_threshold: t.threshold,
                    old_auto_threshold: s.autoThreshold,
                    new_auto_threshold: t.autoThreshold,
                });
            }
        },
        setBypassSystemInputProcessing(e, t) {
            D() || a.h.dispatch({ type: "AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING", bypassEnabled: e, location: t });
        },
        setInputVolume(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (D()) return;
            a.h.dispatch({ type: "AUDIO_SET_INPUT_VOLUME", volume: e });
            let n = p.A.getVoiceChannelId(),
                r = null != n ? _.A.getChannel(n) : null;
            E.default.track(I.HAw.MEDIA_INPUT_VOLUME_CHANGED, {
                volume: e,
                location_stack: t,
                voice_channel_type: r?.type,
            });
        },
        setOutputVolume(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (D()) return;
            a.h.dispatch({ type: "AUDIO_SET_OUTPUT_VOLUME", volume: e });
            let n = p.A.getVoiceChannelId(),
                r = null != n ? _.A.getChannel(n) : null;
            E.default.track(I.HAw.MEDIA_OUTPUT_VOLUME_CHANGED, {
                volume: e,
                location_stack: t,
                voice_channel_type: r?.type,
            });
        },
        setInputDevice(e) {
            let { location: t, analyticsLocations: n } =
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (D()) return;
            let r = f.Ay.getInputDeviceId();
            (null != t || null != n) &&
                b(f.Ay.getInputDevices(), r, e, "Audio Input", { location: t, analyticsLocations: n }),
                a.h.dispatch({ type: "AUDIO_SET_INPUT_DEVICE", id: e, oldId: r }),
                v();
        },
        setOutputDevice(e) {
            let { location: t, analyticsLocations: n } =
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (D()) return;
            let r = f.Ay.getOutputDeviceId();
            (null != t || null != n) &&
                b(f.Ay.getOutputDevices(), r, e, "Audio Output", { location: t, analyticsLocations: n }),
                a.h.dispatch({ type: "AUDIO_SET_OUTPUT_DEVICE", id: e, oldId: r }),
                v();
        },
        setVideoDevice(e) {
            let { location: t, analyticsLocations: n } =
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (D()) return;
            let r = f.Ay.getVideoDeviceId();
            (null != t || null != n) &&
                b(f.Ay.getVideoDevices(), r, e, "Video", { location: t, analyticsLocations: n }),
                a.h.dispatch({ type: "MEDIA_ENGINE_SET_VIDEO_DEVICE", id: e, oldId: r });
        },
        setActiveInputProfile(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            D() ||
                ((0, u.A)("active_input_profile", e, f.Ay.getActiveInputProfile() ?? void 0, t),
                a.h.dispatch({ type: "AUDIO_SET_ACTIVE_INPUT_PROFILE", inputProfile: e }));
        },
        setEchoCancellation(e, t) {
            D() || a.h.dispatch({ type: "AUDIO_SET_ECHO_CANCELLATION", enabled: e, location: t });
        },
        setSidechainCompression(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            D() ||
                ((0, u.A)("stream_attenuation_enabled", e, f.Ay.getSidechainCompression(), t),
                a.h.dispatch({ type: "AUDIO_SET_SIDECHAIN_COMPRESSION", enabled: e }));
        },
        setSidechainCompressionStrength(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            D() ||
                ((0, u.A)("stream_attenuation_strength", e, f.Ay.getSidechainCompressionStrength(), t),
                a.h.dispatch({ type: "AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH", strength: e }));
        },
        setLoopback(e, t) {
            D() || a.h.dispatch({ type: "AUDIO_SET_LOOPBACK", loopbackReason: e, enabled: t });
        },
        setNoiseSuppression(e, t) {
            D() || a.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: e, location: t });
        },
        setNoiseCancellation(e, t) {
            D() ||
                (a.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION", enabled: e, location: t }),
                a.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !e, location: t }));
        },
        setAutomaticGainControl(e, t) {
            D() || a.h.dispatch({ type: "AUDIO_SET_AUTOMATIC_GAIN_CONTROL", enabled: e, location: t });
        },
        setAttenuation(e, t, n) {
            D() ||
                ((() => {
                    let r = f.Ay.getAttenuation(),
                        i = f.Ay.getAttenuateWhileSpeakingSelf(),
                        a = f.Ay.getAttenuateWhileSpeakingOthers();
                    return r !== e
                        ? (0, u.A)("global_attenuation_strength", e, r)
                        : i !== t
                          ? (0, u.A)("global_attenuation_for_self_speak_enabled", t, i)
                          : a !== n && (0, u.A)("global_attenuation_for_other_speak_enabled", n, a);
                })(),
                a.h.dispatch({
                    type: "AUDIO_SET_ATTENUATION",
                    attenuation: e,
                    attenuateWhileSpeakingSelf: t,
                    attenuateWhileSpeakingOthers: n,
                }));
        },
        setQoS(e) {
            D() ||
                ((0, u.A)("quality_of_service_packets_enabled", e, f.Ay.getQoS()),
                a.h.dispatch({ type: "AUDIO_SET_QOS", enabled: e }));
        },
        reset() {
            D() || a.h.dispatch({ type: "AUDIO_RESET" });
        },
        setSilenceWarning(e) {
            D() ||
                ((0, u.A)("silence_warning_enabled", e, f.Ay.getEnableSilenceWarning()),
                a.h.dispatch({ type: "AUDIO_SET_DISPLAY_SILENCE_WARNING", enabled: e }));
        },
        async setDebugLogging(e) {
            D() ||
                (await (0, u.A)("debug_logging_enabled", e, f.Ay.getDebugLogging()),
                a.h.dispatch({ type: "AUDIO_SET_DEBUG_LOGGING", enabled: e }));
        },
        setVideoHook(e) {
            D() ||
                ((0, u.A)("video_hook_enabled", e, f.Ay.getVideoHook()),
                a.h.dispatch({ type: "MEDIA_ENGINE_SET_VIDEO_HOOK", enabled: e }));
        },
        setExperimentalSoundshare(e) {
            D() ||
                ((0, u.A)("experimental_soundshare_enabled", e, f.Ay.getExperimentalSoundshare()),
                a.h.dispatch({ type: "MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE", enabled: e }));
        },
        setUseSystemScreensharePicker(e) {
            D() ||
                ((0, u.A)("system_screenshare_picker_enabled", e, f.Ay.getUseSystemScreensharePicker()),
                a.h.dispatch({ type: "MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER", enabled: e }));
        },
        async setAudioSubsystem(e) {
            D() ||
                (await (0, u.A)("audio_subsystem", e, f.Ay.getAudioSubsystem()),
                a.h.dispatch({ type: "AUDIO_SET_SUBSYSTEM", subsystem: e }));
        },
        setVideoEnabled(e) {
            (0, c.PX)(), a.h.dispatch({ type: "MEDIA_ENGINE_SET_VIDEO_ENABLED", enabled: e });
        },
        setGoLiveSource(e) {
            e?.qualityOptions != null &&
                (0, A.K2)(e.qualityOptions.preset, e.qualityOptions.resolution, e.qualityOptions.frameRate),
                a.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: e });
        },
        setAecDump(e) {
            D() ||
                ((0, u.A)("diagnostic_audio_recording_enabled", e, f.Ay.getAecDump()),
                a.h.dispatch({ type: "MEDIA_ENGINE_SET_AEC_DUMP", enabled: e }));
        },
        interact() {
            D() || a.h.dispatch({ type: "MEDIA_ENGINE_INTERACTION_REQUIRED", required: !1 });
        },
        setEnableHardwareMuteNotice(e) {
            D() || a.h.dispatch({ type: "MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE", enabled: e });
        },
        setKrispSuppressionLevel(e) {
            D() || a.h.dispatch({ type: "AUDIO_SET_KRISP_SUPPRESSION_LEVEL", level: e });
        },
        setKrispModelOverride(e) {
            !D() &&
                (a.h.dispatch({ type: "AUDIO_SET_KRISP_MODEL_OVERRIDE", model: e }),
                f.Ay.getNoiseCancellation() && (this.setNoiseCancellation(!1), this.setNoiseCancellation(!0)));
        },
        setNoiseCancellationEnableStats(e) {
            D() || a.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS", enabled: e });
        },
        resetMediaEngineSettings: (e) => a.h.dispatch({ type: "MEDIA_ENGINE_RESET_SETTINGS", overrides: e }),
    };
