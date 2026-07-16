"use strict";
n.d(t, { A: () => M });
var i = n(649852),
    r = n.n(i),
    a = n(228366),
    s = n(626584),
    l = n(400492),
    o = n(386723),
    d = n(855302),
    c = n(413339),
    u = n(347481),
    _ = n(734057),
    E = n(186295),
    A = n(763827),
    h = n(309010),
    I = n(287809),
    f = n(174459),
    p = n(650338),
    T = n(652215),
    m = n(257645),
    g = n(731854);
let S = new s.A("AudioActionCreators");
function N() {
    (0, l.Ak)("mention3", void 0, void 0, void 0, { outputChannel: m.a.VOICE });
}
function C() {
    let e = E.Ay.getInputDevices()[E.Ay.getInputDeviceId()];
    return null != e ? e.name : "";
}
function R(e, t, n, i) {
    let { location: r, analyticsLocations: a } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    if (t === n) return;
    let s = h.Ay.getVoiceChannelId(),
        l = null != s ? _.A.getChannel(s) : null,
        o = e[t],
        d = e[n],
        c = E.Ay.getMediaEngine().getAudioSubsystem(),
        A = E.Ay.getMediaEngine().getAudioLayer();
    f.default.track(T.HAw.MEDIA_DEVICE_CHANGED, {
        device_from_name: u.A.getCertifiedDeviceName(t, null != o ? o.name : ""),
        device_to_name: u.A.getCertifiedDeviceName(n, null != d ? d.name : ""),
        device_type: i,
        device_is_certified: u.A.isCertified(n),
        location: r,
        location_stack: a,
        voice_channel_type: l?.type,
        audio_subsystem: c,
        audio_layer: A,
    });
}
S.enableNativeLogger(!0);
let O = r()((e, t, n) => {
        f.default.track(T.HAw.USER_VOLUME_SETTING_UPDATED, {
            target_user_id: e,
            context: t,
            volume: n,
            media_session_id: A.A.getMediaSessionId(),
            rtc_connection_id: A.A.getRTCConnectionId(),
        });
    }, 300),
    L = {
        isNotSupported: () => !1,
        enable: (e) => Promise.resolve(!0),
        trackToggleSelfMute(e) {},
        trackToggleSelfDeaf(e) {},
    },
    { enable: y, isNotSupported: D, trackToggleSelfMute: v, trackToggleSelfDeaf: b } = (L = n(401124)),
    M = {
        enable: y,
        toggleSelfMute() {
            let {
                context: e = g.x.DEFAULT,
                syncRemote: t = !0,
                usedKeybind: n = !1,
                playSoundEffect: i = !0,
                location: r,
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return D()
                ? Promise.resolve()
                : (v({ usedKeybind: n, location: r }),
                    (i = i && !E.Ay.hasActiveCallKitCall()),
                    I.default.getCurrentUser()?.isStaff() && S.info("Toggling self mute"),
                    E.Ay.isEnabled())
                  ? a.h.dispatch({ type: "AUDIO_TOGGLE_SELF_MUTE", context: e, syncRemote: t, playSoundEffect: i })
                  : this.enable(!0);
        },
        setSelfMute(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
            D() ||
                ((n = n && !E.Ay.hasActiveCallKitCall()),
                I.default.getCurrentUser()?.isStaff() && S.info("Setting self mute", t),
                a.h.dispatch({ type: "AUDIO_SET_SELF_MUTE", context: e, mute: t, playSoundEffect: n }));
        },
        setTemporarySelfMute(e) {
            D() ||
                (I.default.getCurrentUser()?.isStaff() && S.info("Setting temporary self mute", e),
                a.h.dispatch({ type: "AUDIO_SET_TEMPORARY_SELF_MUTE", mute: e }));
        },
        toggleSelfDeaf() {
            let {
                context: e = g.x.DEFAULT,
                syncRemote: t = !0,
                usedKeybind: n = !1,
                location: i,
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            D() ||
                (b({ usedKeybind: n, location: i }),
                a.h.dispatch({ type: "AUDIO_TOGGLE_SELF_DEAF", context: e, syncRemote: t }));
        },
        toggleLocalMute(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.x.DEFAULT;
            D() || a.h.dispatch({ type: "AUDIO_TOGGLE_LOCAL_MUTE", context: t, userId: e });
        },
        toggleLocalSoundboardMute(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.x.DEFAULT;
            a.h.dispatch({ type: "AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE", context: t, userId: e });
        },
        setDisableLocalVideo(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g.x.DEFAULT,
                i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            D() ||
                a.h.dispatch({
                    type: "AUDIO_SET_LOCAL_VIDEO_DISABLED",
                    context: n,
                    userId: e,
                    videoToggleState: t,
                    persist: i,
                    isAutomatic: r,
                });
        },
        setLocalVolume(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g.x.DEFAULT,
                i = (0, o.z)(t, n);
            a.h.dispatch({ type: "AUDIO_SET_LOCAL_VOLUME", context: n, userId: e, volume: i }), O(e, n, i);
        },
        setAudioMixerSettings(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g.x.DEFAULT;
            a.h.dispatch({ type: "AUDIO_SET_AUDIO_MIXER_SETTINGS", context: t, settings: e });
        },
        setLocalPan(e, t, n) {
            let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : g.x.DEFAULT;
            a.h.dispatch({ type: "AUDIO_SET_LOCAL_PAN", context: i, userId: e, left: t, right: n });
        },
        setMode(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g.x.DEFAULT,
                { analyticsLocations: i } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            if (D()) return;
            let r = e !== E.Ay.getMode(),
                s = E.Ay.getModeOptions(n);
            if ((a.h.dispatch({ type: "AUDIO_SET_MODE", context: n, mode: e, options: { ...s, ...t } }), r)) {
                let t = E.Ay.getMediaEngine().getAudioSubsystem(),
                    n = E.Ay.getMediaEngine().getAudioLayer(),
                    r = h.Ay.getVoiceChannelId(),
                    a = null != r ? _.A.getChannel(r) : null,
                    s = C();
                f.default.track(T.HAw.VOICE_ACTIVATION_MODE_CHANGED, {
                    mode: e,
                    location_stack: i,
                    voice_channel_type: a?.type,
                    input_device_name: s,
                    audio_subsystem: t,
                    audio_layer: n,
                });
            } else if (e === T.TBI.VOICE_ACTIVITY && s !== t) {
                let e = E.Ay.getMediaEngine().getAudioSubsystem(),
                    n = E.Ay.getMediaEngine().getAudioLayer(),
                    r = h.Ay.getVoiceChannelId(),
                    a = null != r ? _.A.getChannel(r) : null,
                    l = C();
                f.default.track(T.HAw.VOICE_ACTIVITY_THRESHOLD_CHANGED, {
                    location_stack: i,
                    voice_channel_type: a?.type,
                    input_device_name: l,
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
            let n = h.Ay.getVoiceChannelId(),
                i = null != n ? _.A.getChannel(n) : null;
            f.default.track(T.HAw.MEDIA_INPUT_VOLUME_CHANGED, {
                volume: e,
                location_stack: t,
                voice_channel_type: i?.type,
            });
        },
        setOutputVolume(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (D()) return;
            a.h.dispatch({ type: "AUDIO_SET_OUTPUT_VOLUME", volume: e });
            let n = h.Ay.getVoiceChannelId(),
                i = null != n ? _.A.getChannel(n) : null;
            f.default.track(T.HAw.MEDIA_OUTPUT_VOLUME_CHANGED, {
                volume: e,
                location_stack: t,
                voice_channel_type: i?.type,
            });
        },
        setInputDevice(e) {
            let { location: t, analyticsLocations: n } =
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (D()) return;
            let i = E.Ay.getInputDeviceId();
            (null != t || null != n) &&
                R(E.Ay.getInputDevices(), i, e, "Audio Input", { location: t, analyticsLocations: n }),
                a.h.dispatch({ type: "AUDIO_SET_INPUT_DEVICE", id: e, oldId: i }),
                N();
        },
        setOutputDevice(e) {
            let { location: t, analyticsLocations: n } =
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (D()) return;
            let i = E.Ay.getOutputDeviceId();
            (null != t || null != n) &&
                R(E.Ay.getOutputDevices(), i, e, "Audio Output", { location: t, analyticsLocations: n }),
                a.h.dispatch({ type: "AUDIO_SET_OUTPUT_DEVICE", id: e, oldId: i }),
                N();
        },
        setVideoDevice(e) {
            let { location: t, analyticsLocations: n } =
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (D()) return;
            let i = E.Ay.getVideoDeviceId();
            (null != t || null != n) &&
                R(E.Ay.getVideoDevices(), i, e, "Video", { location: t, analyticsLocations: n }),
                a.h.dispatch({ type: "MEDIA_ENGINE_SET_VIDEO_DEVICE", id: e, oldId: i });
        },
        setActiveInputProfile(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            D() ||
                ((0, d.A)("active_input_profile", e, E.Ay.getActiveInputProfile() ?? void 0, t),
                a.h.dispatch({ type: "AUDIO_SET_ACTIVE_INPUT_PROFILE", inputProfile: e }));
        },
        setEchoCancellation(e, t) {
            D() || a.h.dispatch({ type: "AUDIO_SET_ECHO_CANCELLATION", enabled: e, location: t });
        },
        setSidechainCompression(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            D() ||
                ((0, d.A)("stream_attenuation_enabled", e, E.Ay.getSidechainCompression(), t),
                a.h.dispatch({ type: "AUDIO_SET_SIDECHAIN_COMPRESSION", enabled: e }));
        },
        setSidechainCompressionStrength(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            D() ||
                ((0, d.A)("stream_attenuation_strength", e, E.Ay.getSidechainCompressionStrength(), t),
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
            if (!D()) {
                let i, r, s;
                (i = E.Ay.getAttenuation()),
                    (r = E.Ay.getAttenuateWhileSpeakingSelf()),
                    (s = E.Ay.getAttenuateWhileSpeakingOthers()),
                    i !== e
                        ? (0, d.A)("global_attenuation_strength", e, i)
                        : r !== t
                          ? (0, d.A)("global_attenuation_for_self_speak_enabled", t, r)
                          : s !== n && (0, d.A)("global_attenuation_for_other_speak_enabled", n, s),
                    a.h.dispatch({
                        type: "AUDIO_SET_ATTENUATION",
                        attenuation: e,
                        attenuateWhileSpeakingSelf: t,
                        attenuateWhileSpeakingOthers: n,
                    });
            }
        },
        setQoS(e) {
            D() ||
                ((0, d.A)("quality_of_service_packets_enabled", e, E.Ay.getQoS()),
                a.h.dispatch({ type: "AUDIO_SET_QOS", enabled: e }));
        },
        reset() {
            D() || a.h.dispatch({ type: "AUDIO_RESET" });
        },
        setSilenceWarning(e) {
            D() ||
                ((0, d.A)("silence_warning_enabled", e, E.Ay.getEnableSilenceWarning()),
                a.h.dispatch({ type: "AUDIO_SET_DISPLAY_SILENCE_WARNING", enabled: e }));
        },
        async setDebugLogging(e) {
            D() ||
                (await (0, d.A)("debug_logging_enabled", e, E.Ay.getDebugLogging()),
                a.h.dispatch({ type: "AUDIO_SET_DEBUG_LOGGING", enabled: e }));
        },
        setVideoHook(e) {
            D() ||
                ((0, d.A)("video_hook_enabled", e, E.Ay.getVideoHook()),
                a.h.dispatch({ type: "MEDIA_ENGINE_SET_VIDEO_HOOK", enabled: e }));
        },
        setExperimentalSoundshare(e) {
            D() ||
                ((0, d.A)("experimental_soundshare_enabled", e, E.Ay.getExperimentalSoundshare()),
                a.h.dispatch({ type: "MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE", enabled: e }));
        },
        setUseSystemScreensharePicker(e) {
            D() ||
                ((0, d.A)("system_screenshare_picker_enabled", e, E.Ay.getUseSystemScreensharePicker()),
                a.h.dispatch({ type: "MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER", enabled: e }));
        },
        async setAudioSubsystem(e) {
            D() ||
                (await (0, d.A)("audio_subsystem", e, E.Ay.getAudioSubsystem()),
                a.h.dispatch({ type: "AUDIO_SET_SUBSYSTEM", subsystem: e }));
        },
        setVideoEnabled(e) {
            (0, c.PX)(), a.h.dispatch({ type: "MEDIA_ENGINE_SET_VIDEO_ENABLED", enabled: e });
        },
        setGoLiveSource(e) {
            e?.qualityOptions != null &&
                (0, p.K2)(
                    e.qualityOptions.preset,
                    e.qualityOptions.resolution,
                    e.qualityOptions.frameRate,
                    e.desktopSettings?.sound,
                ),
                a.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: e });
        },
        setAecDump(e) {
            D() ||
                ((0, d.A)("diagnostic_audio_recording_enabled", e, E.Ay.getAecDump()),
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
                E.Ay.getNoiseCancellation() && (this.setNoiseCancellation(!1), this.setNoiseCancellation(!0)));
        },
        setNoiseCancellationEnableStats(e) {
            D() || a.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS", enabled: e });
        },
        setOpenH264Enabled(e) {
            D() || a.h.dispatch({ type: "MEDIA_ENGINE_SET_OPENH264_ENABLED", enabled: e });
        },
        resetMediaEngineSettings: (e) => a.h.dispatch({ type: "MEDIA_ENGINE_RESET_SETTINGS", overrides: e }),
    };
