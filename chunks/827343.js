"use strict";
n.d(t, { A: () => w });
var r = n(111956),
    i = n.n(r),
    s = n(73153),
    a = n(626584),
    o = n(400492),
    l = n(409826),
    u = n(698723),
    c = n(413339),
    d = n(347481),
    _ = n(734057),
    f = n(430452),
    p = n(383501),
    h = n(309010),
    m = n(287809),
    E = n(954571),
    g = n(650338),
    A = n(652215),
    I = n(257645),
    T = n(731854);
let S = new a.A("AudioActionCreators");
function y() {
    (0, o.Ak)("mention3", void 0, void 0, void 0, I.a.VOICE);
}
function v() {
    let e = f.Ay.getInputDevices()[f.Ay.getInputDeviceId()];
    return null != e ? e.name : "";
}
function N(e, t, n, r) {
    let { location: i, analyticsLocations: s } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    if (t === n) return;
    let a = h.A.getVoiceChannelId(),
        o = null != a ? _.A.getChannel(a) : null,
        l = e[t],
        u = e[n],
        c = f.Ay.getMediaEngine().getAudioSubsystem(),
        p = f.Ay.getMediaEngine().getAudioLayer();
    E.default.track(A.HAw.MEDIA_DEVICE_CHANGED, {
        device_from_name: d.A.getCertifiedDeviceName(t, null != l ? l.name : ""),
        device_to_name: d.A.getCertifiedDeviceName(n, null != u ? u.name : ""),
        device_type: r,
        device_is_certified: d.A.isCertified(n),
        location: i,
        location_stack: s,
        voice_channel_type: o?.type,
        audio_subsystem: c,
        audio_layer: p,
    });
}
S.enableNativeLogger(!0);
let C = i()((e, t, n) => {
        E.default.track(A.HAw.USER_VOLUME_SETTING_UPDATED, {
            target_user_id: e,
            context: t,
            volume: n,
            media_session_id: p.A.getMediaSessionId(),
            rtc_connection_id: p.A.getRTCConnectionId(),
        });
    }, 300),
    b = {
        isNotSupported: () => !1,
        enable: (e) => Promise.resolve(!0),
        trackToggleSelfMute(e) {},
        trackToggleSelfDeaf(e) {},
    },
    { enable: R, isNotSupported: O, trackToggleSelfMute: D, trackToggleSelfDeaf: L } = (b = n(401124)),
    w = {
        enable: R,
        toggleSelfMute() {
            let {
                context: e = T.x.DEFAULT,
                syncRemote: t = !0,
                usedKeybind: n = !1,
                playSoundEffect: r = !0,
                location: i,
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return O()
                ? Promise.resolve()
                : (D({ usedKeybind: n, location: i }),
                    (r = r && !f.Ay.hasActiveCallKitCall()),
                    m.default.getCurrentUser()?.isStaff() && S.info("Toggling self mute"),
                    f.Ay.isEnabled())
                  ? s.h.dispatch({ type: "AUDIO_TOGGLE_SELF_MUTE", context: e, syncRemote: t, playSoundEffect: r })
                  : this.enable(!0);
        },
        setSelfMute(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
            O() ||
                ((n = n && !f.Ay.hasActiveCallKitCall()),
                m.default.getCurrentUser()?.isStaff() && S.info("Setting self mute", t),
                s.h.dispatch({ type: "AUDIO_SET_SELF_MUTE", context: e, mute: t, playSoundEffect: n }));
        },
        setTemporarySelfMute(e) {
            O() ||
                (m.default.getCurrentUser()?.isStaff() && S.info("Setting temporary self mute", e),
                s.h.dispatch({ type: "AUDIO_SET_TEMPORARY_SELF_MUTE", mute: e }));
        },
        toggleSelfDeaf() {
            let {
                context: e = T.x.DEFAULT,
                syncRemote: t = !0,
                usedKeybind: n = !1,
                location: r,
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            O() ||
                (L({ usedKeybind: n, location: r }),
                s.h.dispatch({ type: "AUDIO_TOGGLE_SELF_DEAF", context: e, syncRemote: t }));
        },
        toggleLocalMute(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T.x.DEFAULT;
            O() || s.h.dispatch({ type: "AUDIO_TOGGLE_LOCAL_MUTE", context: t, userId: e });
        },
        toggleLocalSoundboardMute(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T.x.DEFAULT;
            s.h.dispatch({ type: "AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE", context: t, userId: e });
        },
        setDisableLocalVideo(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T.x.DEFAULT,
                r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            O() ||
                s.h.dispatch({
                    type: "AUDIO_SET_LOCAL_VIDEO_DISABLED",
                    context: n,
                    userId: e,
                    videoToggleState: t,
                    persist: r,
                    isAutomatic: i,
                });
        },
        setLocalVolume(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T.x.DEFAULT,
                r = (0, l.z)(t, n);
            s.h.dispatch({ type: "AUDIO_SET_LOCAL_VOLUME", context: n, userId: e, volume: r }), C(e, n, r);
        },
        setLocalPan(e, t, n) {
            let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : T.x.DEFAULT;
            s.h.dispatch({ type: "AUDIO_SET_LOCAL_PAN", context: r, userId: e, left: t, right: n });
        },
        setMode(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T.x.DEFAULT,
                { analyticsLocations: r } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            if (O()) return;
            let i = e !== f.Ay.getMode(),
                a = f.Ay.getModeOptions(n);
            if ((s.h.dispatch({ type: "AUDIO_SET_MODE", context: n, mode: e, options: { ...a, ...t } }), i)) {
                let t = f.Ay.getMediaEngine().getAudioSubsystem(),
                    n = f.Ay.getMediaEngine().getAudioLayer(),
                    i = h.A.getVoiceChannelId(),
                    s = null != i ? _.A.getChannel(i) : null,
                    a = v();
                E.default.track(A.HAw.VOICE_ACTIVATION_MODE_CHANGED, {
                    mode: e,
                    location_stack: r,
                    voice_channel_type: s?.type,
                    input_device_name: a,
                    audio_subsystem: t,
                    audio_layer: n,
                });
            } else if (e === A.TBI.VOICE_ACTIVITY && a !== t) {
                let e = f.Ay.getMediaEngine().getAudioSubsystem(),
                    n = f.Ay.getMediaEngine().getAudioLayer(),
                    i = h.A.getVoiceChannelId(),
                    s = null != i ? _.A.getChannel(i) : null,
                    o = v();
                E.default.track(A.HAw.VOICE_ACTIVITY_THRESHOLD_CHANGED, {
                    location_stack: r,
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
            O() || s.h.dispatch({ type: "AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING", bypassEnabled: e, location: t });
        },
        setInputVolume(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (O()) return;
            s.h.dispatch({ type: "AUDIO_SET_INPUT_VOLUME", volume: e });
            let n = h.A.getVoiceChannelId(),
                r = null != n ? _.A.getChannel(n) : null;
            E.default.track(A.HAw.MEDIA_INPUT_VOLUME_CHANGED, {
                volume: e,
                location_stack: t,
                voice_channel_type: r?.type,
            });
        },
        setOutputVolume(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (O()) return;
            s.h.dispatch({ type: "AUDIO_SET_OUTPUT_VOLUME", volume: e });
            let n = h.A.getVoiceChannelId(),
                r = null != n ? _.A.getChannel(n) : null;
            E.default.track(A.HAw.MEDIA_OUTPUT_VOLUME_CHANGED, {
                volume: e,
                location_stack: t,
                voice_channel_type: r?.type,
            });
        },
        setInputDevice(e) {
            let { location: t, analyticsLocations: n } =
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (O()) return;
            let r = f.Ay.getInputDeviceId();
            (null != t || null != n) &&
                N(f.Ay.getInputDevices(), r, e, "Audio Input", { location: t, analyticsLocations: n }),
                s.h.dispatch({ type: "AUDIO_SET_INPUT_DEVICE", id: e, oldId: r }),
                y();
        },
        setOutputDevice(e) {
            let { location: t, analyticsLocations: n } =
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (O()) return;
            let r = f.Ay.getOutputDeviceId();
            (null != t || null != n) &&
                N(f.Ay.getOutputDevices(), r, e, "Audio Output", { location: t, analyticsLocations: n }),
                s.h.dispatch({ type: "AUDIO_SET_OUTPUT_DEVICE", id: e, oldId: r }),
                y();
        },
        setVideoDevice(e) {
            let { location: t, analyticsLocations: n } =
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (O()) return;
            let r = f.Ay.getVideoDeviceId();
            (null != t || null != n) &&
                N(f.Ay.getVideoDevices(), r, e, "Video", { location: t, analyticsLocations: n }),
                s.h.dispatch({ type: "MEDIA_ENGINE_SET_VIDEO_DEVICE", id: e, oldId: r });
        },
        setActiveInputProfile(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            O() ||
                ((0, u.A)("active_input_profile", e, f.Ay.getActiveInputProfile() ?? void 0, t),
                s.h.dispatch({ type: "AUDIO_SET_ACTIVE_INPUT_PROFILE", inputProfile: e }));
        },
        setEchoCancellation(e, t) {
            O() || s.h.dispatch({ type: "AUDIO_SET_ECHO_CANCELLATION", enabled: e, location: t });
        },
        setSidechainCompression(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            O() ||
                ((0, u.A)("stream_attenuation_enabled", e, f.Ay.getSidechainCompression(), t),
                s.h.dispatch({ type: "AUDIO_SET_SIDECHAIN_COMPRESSION", enabled: e }));
        },
        setSidechainCompressionStrength(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            O() ||
                ((0, u.A)("stream_attenuation_strength", e, f.Ay.getSidechainCompressionStrength(), t),
                s.h.dispatch({ type: "AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH", strength: e }));
        },
        setLoopback(e, t) {
            O() || s.h.dispatch({ type: "AUDIO_SET_LOOPBACK", loopbackReason: e, enabled: t });
        },
        setNoiseSuppression(e, t) {
            O() || s.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: e, location: t });
        },
        setNoiseCancellation(e, t) {
            O() ||
                (s.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION", enabled: e, location: t }),
                s.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !e, location: t }));
        },
        setAutomaticGainControl(e, t) {
            O() || s.h.dispatch({ type: "AUDIO_SET_AUTOMATIC_GAIN_CONTROL", enabled: e, location: t });
        },
        setAttenuation(e, t, n) {
            O() ||
                ((() => {
                    let r = f.Ay.getAttenuation(),
                        i = f.Ay.getAttenuateWhileSpeakingSelf(),
                        s = f.Ay.getAttenuateWhileSpeakingOthers();
                    return r !== e
                        ? (0, u.A)("global_attenuation_strength", e, r)
                        : i !== t
                          ? (0, u.A)("global_attenuation_for_self_speak_enabled", t, i)
                          : s !== n && (0, u.A)("global_attenuation_for_other_speak_enabled", n, s);
                })(),
                s.h.dispatch({
                    type: "AUDIO_SET_ATTENUATION",
                    attenuation: e,
                    attenuateWhileSpeakingSelf: t,
                    attenuateWhileSpeakingOthers: n,
                }));
        },
        setQoS(e) {
            O() ||
                ((0, u.A)("quality_of_service_packets_enabled", e, f.Ay.getQoS()),
                s.h.dispatch({ type: "AUDIO_SET_QOS", enabled: e }));
        },
        reset() {
            O() || s.h.dispatch({ type: "AUDIO_RESET" });
        },
        setSilenceWarning(e) {
            O() ||
                ((0, u.A)("silence_warning_enabled", e, f.Ay.getEnableSilenceWarning()),
                s.h.dispatch({ type: "AUDIO_SET_DISPLAY_SILENCE_WARNING", enabled: e }));
        },
        async setDebugLogging(e) {
            O() ||
                (await (0, u.A)("debug_logging_enabled", e, f.Ay.getDebugLogging()),
                s.h.dispatch({ type: "AUDIO_SET_DEBUG_LOGGING", enabled: e }));
        },
        setVideoHook(e) {
            O() ||
                ((0, u.A)("video_hook_enabled", e, f.Ay.getVideoHook()),
                s.h.dispatch({ type: "MEDIA_ENGINE_SET_VIDEO_HOOK", enabled: e }));
        },
        setExperimentalSoundshare(e) {
            O() ||
                ((0, u.A)("experimental_soundshare_enabled", e, f.Ay.getExperimentalSoundshare()),
                s.h.dispatch({ type: "MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE", enabled: e }));
        },
        setUseSystemScreensharePicker(e) {
            O() ||
                ((0, u.A)("system_screenshare_picker_enabled", e, f.Ay.getUseSystemScreensharePicker()),
                s.h.dispatch({ type: "MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER", enabled: e }));
        },
        async setAudioSubsystem(e) {
            O() ||
                (await (0, u.A)("audio_subsystem", e, f.Ay.getAudioSubsystem()),
                s.h.dispatch({ type: "AUDIO_SET_SUBSYSTEM", subsystem: e }));
        },
        setVideoEnabled(e) {
            (0, c.PX)(), s.h.dispatch({ type: "MEDIA_ENGINE_SET_VIDEO_ENABLED", enabled: e });
        },
        setGoLiveSource(e) {
            e?.qualityOptions != null &&
                (0, g.K2)(e.qualityOptions.preset, e.qualityOptions.resolution, e.qualityOptions.frameRate),
                s.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: e });
        },
        setAecDump(e) {
            O() ||
                ((0, u.A)("diagnostic_audio_recording_enabled", e, f.Ay.getAecDump()),
                s.h.dispatch({ type: "MEDIA_ENGINE_SET_AEC_DUMP", enabled: e }));
        },
        interact() {
            O() || s.h.dispatch({ type: "MEDIA_ENGINE_INTERACTION_REQUIRED", required: !1 });
        },
        setEnableHardwareMuteNotice(e) {
            O() || s.h.dispatch({ type: "MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE", enabled: e });
        },
        setKrispSuppressionLevel(e) {
            O() || s.h.dispatch({ type: "AUDIO_SET_KRISP_SUPPRESSION_LEVEL", level: e });
        },
        setKrispModelOverride(e) {
            !O() &&
                (s.h.dispatch({ type: "AUDIO_SET_KRISP_MODEL_OVERRIDE", model: e }),
                f.Ay.getNoiseCancellation() && (this.setNoiseCancellation(!1), this.setNoiseCancellation(!0)));
        },
        setNoiseCancellationEnableStats(e) {
            O() || s.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS", enabled: e });
        },
        resetMediaEngineSettings: (e) => s.h.dispatch({ type: "MEDIA_ENGINE_RESET_SETTINGS", overrides: e }),
    };
