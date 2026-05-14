"use strict";
n.d(t, { A: () => w });
var i = n(111956),
    r = n.n(i),
    s = n(228366),
    a = n(626584),
    o = n(400492),
    l = n(409826),
    u = n(698723),
    c = n(413339),
    d = n(347481),
    _ = n(734057),
    f = n(235058),
    h = n(763827),
    p = n(309010),
    E = n(287809),
    m = n(174459),
    g = n(650338),
    A = n(652215),
    I = n(257645),
    T = n(731854);
let S = new a.A("AudioActionCreators");
function N() {
    (0, o.Ak)("mention3", void 0, void 0, void 0, I.a.VOICE);
}
function y() {
    let e = f.Ay.getInputDevices()[f.Ay.getInputDeviceId()];
    return null != e ? e.name : "";
}
function C(e, t, n, i) {
    let { location: r, analyticsLocations: s } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    if (t === n) return;
    let a = p.A.getVoiceChannelId(),
        o = null != a ? _.A.getChannel(a) : null,
        l = e[t],
        u = e[n],
        c = f.Ay.getMediaEngine().getAudioSubsystem(),
        h = f.Ay.getMediaEngine().getAudioLayer();
    m.default.track(A.HAw.MEDIA_DEVICE_CHANGED, {
        device_from_name: d.A.getCertifiedDeviceName(t, null != l ? l.name : ""),
        device_to_name: d.A.getCertifiedDeviceName(n, null != u ? u.name : ""),
        device_type: i,
        device_is_certified: d.A.isCertified(n),
        location: r,
        location_stack: s,
        voice_channel_type: o?.type,
        audio_subsystem: c,
        audio_layer: h,
    });
}
S.enableNativeLogger(!0);
let v = r()((e, t, n) => {
        m.default.track(A.HAw.USER_VOLUME_SETTING_UPDATED, {
            target_user_id: e,
            context: t,
            volume: n,
            media_session_id: h.A.getMediaSessionId(),
            rtc_connection_id: h.A.getRTCConnectionId(),
        });
    }, 300),
    O = {
        isNotSupported: () => !1,
        enable: (e) => Promise.resolve(!0),
        trackToggleSelfMute(e) {},
        trackToggleSelfDeaf(e) {},
    },
    { enable: R, isNotSupported: b, trackToggleSelfMute: D, trackToggleSelfDeaf: L } = (O = n(401124)),
    w = {
        enable: R,
        toggleSelfMute() {
            let {
                context: e = T.x.DEFAULT,
                syncRemote: t = !0,
                usedKeybind: n = !1,
                playSoundEffect: i = !0,
                location: r,
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return b()
                ? Promise.resolve()
                : (D({ usedKeybind: n, location: r }),
                    (i = i && !f.Ay.hasActiveCallKitCall()),
                    E.default.getCurrentUser()?.isStaff() && S.info("Toggling self mute"),
                    f.Ay.isEnabled())
                  ? s.h.dispatch({ type: "AUDIO_TOGGLE_SELF_MUTE", context: e, syncRemote: t, playSoundEffect: i })
                  : this.enable(!0);
        },
        setSelfMute(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
            b() ||
                ((n = n && !f.Ay.hasActiveCallKitCall()),
                E.default.getCurrentUser()?.isStaff() && S.info("Setting self mute", t),
                s.h.dispatch({ type: "AUDIO_SET_SELF_MUTE", context: e, mute: t, playSoundEffect: n }));
        },
        setTemporarySelfMute(e) {
            b() ||
                (E.default.getCurrentUser()?.isStaff() && S.info("Setting temporary self mute", e),
                s.h.dispatch({ type: "AUDIO_SET_TEMPORARY_SELF_MUTE", mute: e }));
        },
        toggleSelfDeaf() {
            let {
                context: e = T.x.DEFAULT,
                syncRemote: t = !0,
                usedKeybind: n = !1,
                location: i,
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            b() ||
                (L({ usedKeybind: n, location: i }),
                s.h.dispatch({ type: "AUDIO_TOGGLE_SELF_DEAF", context: e, syncRemote: t }));
        },
        toggleLocalMute(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T.x.DEFAULT;
            b() || s.h.dispatch({ type: "AUDIO_TOGGLE_LOCAL_MUTE", context: t, userId: e });
        },
        toggleLocalSoundboardMute(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T.x.DEFAULT;
            s.h.dispatch({ type: "AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE", context: t, userId: e });
        },
        setDisableLocalVideo(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T.x.DEFAULT,
                i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            b() ||
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
            s.h.dispatch({ type: "AUDIO_SET_LOCAL_VOLUME", context: n, userId: e, volume: i }), v(e, n, i);
        },
        setAudioMixerSettings(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T.x.DEFAULT;
            s.h.dispatch({ type: "AUDIO_SET_AUDIO_MIXER_SETTINGS", context: t, settings: e });
        },
        setLocalPan(e, t, n) {
            let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : T.x.DEFAULT;
            s.h.dispatch({ type: "AUDIO_SET_LOCAL_PAN", context: i, userId: e, left: t, right: n });
        },
        setMode(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T.x.DEFAULT,
                { analyticsLocations: i } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            if (b()) return;
            let r = e !== f.Ay.getMode(),
                a = f.Ay.getModeOptions(n);
            if ((s.h.dispatch({ type: "AUDIO_SET_MODE", context: n, mode: e, options: { ...a, ...t } }), r)) {
                let t = f.Ay.getMediaEngine().getAudioSubsystem(),
                    n = f.Ay.getMediaEngine().getAudioLayer(),
                    r = p.A.getVoiceChannelId(),
                    s = null != r ? _.A.getChannel(r) : null,
                    a = y();
                m.default.track(A.HAw.VOICE_ACTIVATION_MODE_CHANGED, {
                    mode: e,
                    location_stack: i,
                    voice_channel_type: s?.type,
                    input_device_name: a,
                    audio_subsystem: t,
                    audio_layer: n,
                });
            } else if (e === A.TBI.VOICE_ACTIVITY && a !== t) {
                let e = f.Ay.getMediaEngine().getAudioSubsystem(),
                    n = f.Ay.getMediaEngine().getAudioLayer(),
                    r = p.A.getVoiceChannelId(),
                    s = null != r ? _.A.getChannel(r) : null,
                    o = y();
                m.default.track(A.HAw.VOICE_ACTIVITY_THRESHOLD_CHANGED, {
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
            b() || s.h.dispatch({ type: "AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING", bypassEnabled: e, location: t });
        },
        setInputVolume(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (b()) return;
            s.h.dispatch({ type: "AUDIO_SET_INPUT_VOLUME", volume: e });
            let n = p.A.getVoiceChannelId(),
                i = null != n ? _.A.getChannel(n) : null;
            m.default.track(A.HAw.MEDIA_INPUT_VOLUME_CHANGED, {
                volume: e,
                location_stack: t,
                voice_channel_type: i?.type,
            });
        },
        setOutputVolume(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (b()) return;
            s.h.dispatch({ type: "AUDIO_SET_OUTPUT_VOLUME", volume: e });
            let n = p.A.getVoiceChannelId(),
                i = null != n ? _.A.getChannel(n) : null;
            m.default.track(A.HAw.MEDIA_OUTPUT_VOLUME_CHANGED, {
                volume: e,
                location_stack: t,
                voice_channel_type: i?.type,
            });
        },
        setInputDevice(e) {
            let { location: t, analyticsLocations: n } =
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (b()) return;
            let i = f.Ay.getInputDeviceId();
            (null != t || null != n) &&
                C(f.Ay.getInputDevices(), i, e, "Audio Input", { location: t, analyticsLocations: n }),
                s.h.dispatch({ type: "AUDIO_SET_INPUT_DEVICE", id: e, oldId: i }),
                N();
        },
        setOutputDevice(e) {
            let { location: t, analyticsLocations: n } =
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (b()) return;
            let i = f.Ay.getOutputDeviceId();
            (null != t || null != n) &&
                C(f.Ay.getOutputDevices(), i, e, "Audio Output", { location: t, analyticsLocations: n }),
                s.h.dispatch({ type: "AUDIO_SET_OUTPUT_DEVICE", id: e, oldId: i }),
                N();
        },
        setVideoDevice(e) {
            let { location: t, analyticsLocations: n } =
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (b()) return;
            let i = f.Ay.getVideoDeviceId();
            (null != t || null != n) &&
                C(f.Ay.getVideoDevices(), i, e, "Video", { location: t, analyticsLocations: n }),
                s.h.dispatch({ type: "MEDIA_ENGINE_SET_VIDEO_DEVICE", id: e, oldId: i });
        },
        setActiveInputProfile(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            b() ||
                ((0, u.A)("active_input_profile", e, f.Ay.getActiveInputProfile() ?? void 0, t),
                s.h.dispatch({ type: "AUDIO_SET_ACTIVE_INPUT_PROFILE", inputProfile: e }));
        },
        setEchoCancellation(e, t) {
            b() || s.h.dispatch({ type: "AUDIO_SET_ECHO_CANCELLATION", enabled: e, location: t });
        },
        setSidechainCompression(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            b() ||
                ((0, u.A)("stream_attenuation_enabled", e, f.Ay.getSidechainCompression(), t),
                s.h.dispatch({ type: "AUDIO_SET_SIDECHAIN_COMPRESSION", enabled: e }));
        },
        setSidechainCompressionStrength(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            b() ||
                ((0, u.A)("stream_attenuation_strength", e, f.Ay.getSidechainCompressionStrength(), t),
                s.h.dispatch({ type: "AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH", strength: e }));
        },
        setLoopback(e, t) {
            b() || s.h.dispatch({ type: "AUDIO_SET_LOOPBACK", loopbackReason: e, enabled: t });
        },
        setNoiseSuppression(e, t) {
            b() || s.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: e, location: t });
        },
        setNoiseCancellation(e, t) {
            b() ||
                (s.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION", enabled: e, location: t }),
                s.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !e, location: t }));
        },
        setAutomaticGainControl(e, t) {
            b() || s.h.dispatch({ type: "AUDIO_SET_AUTOMATIC_GAIN_CONTROL", enabled: e, location: t });
        },
        setAttenuation(e, t, n) {
            if (!b()) {
                let i, r, a;
                (i = f.Ay.getAttenuation()),
                    (r = f.Ay.getAttenuateWhileSpeakingSelf()),
                    (a = f.Ay.getAttenuateWhileSpeakingOthers()),
                    i !== e
                        ? (0, u.A)("global_attenuation_strength", e, i)
                        : r !== t
                          ? (0, u.A)("global_attenuation_for_self_speak_enabled", t, r)
                          : a !== n && (0, u.A)("global_attenuation_for_other_speak_enabled", n, a),
                    s.h.dispatch({
                        type: "AUDIO_SET_ATTENUATION",
                        attenuation: e,
                        attenuateWhileSpeakingSelf: t,
                        attenuateWhileSpeakingOthers: n,
                    });
            }
        },
        setQoS(e) {
            b() ||
                ((0, u.A)("quality_of_service_packets_enabled", e, f.Ay.getQoS()),
                s.h.dispatch({ type: "AUDIO_SET_QOS", enabled: e }));
        },
        reset() {
            b() || s.h.dispatch({ type: "AUDIO_RESET" });
        },
        setSilenceWarning(e) {
            b() ||
                ((0, u.A)("silence_warning_enabled", e, f.Ay.getEnableSilenceWarning()),
                s.h.dispatch({ type: "AUDIO_SET_DISPLAY_SILENCE_WARNING", enabled: e }));
        },
        async setDebugLogging(e) {
            b() ||
                (await (0, u.A)("debug_logging_enabled", e, f.Ay.getDebugLogging()),
                s.h.dispatch({ type: "AUDIO_SET_DEBUG_LOGGING", enabled: e }));
        },
        setVideoHook(e) {
            b() ||
                ((0, u.A)("video_hook_enabled", e, f.Ay.getVideoHook()),
                s.h.dispatch({ type: "MEDIA_ENGINE_SET_VIDEO_HOOK", enabled: e }));
        },
        setExperimentalSoundshare(e) {
            b() ||
                ((0, u.A)("experimental_soundshare_enabled", e, f.Ay.getExperimentalSoundshare()),
                s.h.dispatch({ type: "MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE", enabled: e }));
        },
        setUseSystemScreensharePicker(e) {
            b() ||
                ((0, u.A)("system_screenshare_picker_enabled", e, f.Ay.getUseSystemScreensharePicker()),
                s.h.dispatch({ type: "MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER", enabled: e }));
        },
        async setAudioSubsystem(e) {
            b() ||
                (await (0, u.A)("audio_subsystem", e, f.Ay.getAudioSubsystem()),
                s.h.dispatch({ type: "AUDIO_SET_SUBSYSTEM", subsystem: e }));
        },
        setVideoEnabled(e) {
            (0, c.PX)(), s.h.dispatch({ type: "MEDIA_ENGINE_SET_VIDEO_ENABLED", enabled: e });
        },
        setGoLiveSource(e) {
            e?.qualityOptions != null &&
                (0, g.K2)(
                    e.qualityOptions.preset,
                    e.qualityOptions.resolution,
                    e.qualityOptions.frameRate,
                    e.desktopSettings?.sound,
                ),
                s.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: e });
        },
        setAecDump(e) {
            b() ||
                ((0, u.A)("diagnostic_audio_recording_enabled", e, f.Ay.getAecDump()),
                s.h.dispatch({ type: "MEDIA_ENGINE_SET_AEC_DUMP", enabled: e }));
        },
        interact() {
            b() || s.h.dispatch({ type: "MEDIA_ENGINE_INTERACTION_REQUIRED", required: !1 });
        },
        setEnableHardwareMuteNotice(e) {
            b() || s.h.dispatch({ type: "MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE", enabled: e });
        },
        setKrispSuppressionLevel(e) {
            b() || s.h.dispatch({ type: "AUDIO_SET_KRISP_SUPPRESSION_LEVEL", level: e });
        },
        setKrispModelOverride(e) {
            !b() &&
                (s.h.dispatch({ type: "AUDIO_SET_KRISP_MODEL_OVERRIDE", model: e }),
                f.Ay.getNoiseCancellation() && (this.setNoiseCancellation(!1), this.setNoiseCancellation(!0)));
        },
        setNoiseCancellationEnableStats(e) {
            b() || s.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS", enabled: e });
        },
        setOpenH264Enabled(e) {
            b() || s.h.dispatch({ type: "MEDIA_ENGINE_SET_OPENH264_ENABLED", enabled: e });
        },
        resetMediaEngineSettings: (e) => s.h.dispatch({ type: "MEDIA_ENGINE_RESET_SETTINGS", overrides: e }),
    };
