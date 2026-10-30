(n.r(t), n.d(t, { default: () => P }));
var i = n(649852),
    r = n.n(i),
    a = n(73153),
    s = n(626584),
    l = n(400492),
    o = n(833473),
    d = n(386723),
    c = n(855302),
    u = n(312987),
    _ = n(347481),
    E = n(734057),
    A = n(999926),
    h = n(763827),
    f = n(309010),
    I = n(287809),
    p = n(174459),
    T = n(650338),
    m = n(652215),
    g = n(257645),
    S = n(731854);
let N = new s.A("AudioActionCreators");
function C() {
    (0, l.Ak)("mention3", void 0, void 0, void 0, { outputChannel: g.a.VOICE });
}
function O() {
    let e = A.Ay.getInputDevices()[A.Ay.getInputDeviceId()];
    return null != e ? e.name : "";
}
function R(e, t, n, i) {
    let { location: r, analyticsLocations: a } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    if (t === n) return;
    let s = f.Ay.getVoiceChannelId(),
        l = null != s ? E.A.getChannel(s) : null,
        o = e[t],
        d = e[n],
        c = A.Ay.getMediaEngine().getAudioSubsystem(),
        u = A.Ay.getMediaEngine().getAudioLayer();
    p.default.track(m.HAw.MEDIA_DEVICE_CHANGED, {
        device_from_name: _.A.getCertifiedDeviceName(t, null != o ? o.name : ""),
        device_to_name: _.A.getCertifiedDeviceName(n, null != d ? d.name : ""),
        device_type: i,
        device_is_certified: _.A.isCertified(n),
        location: r,
        location_stack: a,
        voice_channel_type: l?.type,
        audio_subsystem: c,
        audio_layer: u,
    });
}
N.enableNativeLogger(!0);
let L = r()((e, t, n) => {
        p.default.track(m.HAw.USER_VOLUME_SETTING_UPDATED, {
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
    { enable: D, isNotSupported: v, trackToggleSelfMute: b, trackToggleSelfDeaf: M } = (y = n(401124)),
    P = {
        enable: D,
        toggleSelfMute() {
            let {
                context: e = S.x.DEFAULT,
                syncRemote: t = !0,
                usedKeybind: n = !1,
                playSoundEffect: i = !0,
                location: r,
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return v()
                ? Promise.resolve()
                : (b({ usedKeybind: n, location: r }),
                    (i = i && !A.Ay.hasActiveSystemTelecomCall()),
                    I.default.getCurrentUser()?.isStaff() && N.info("Toggling self mute"),
                    A.Ay.isEnabled())
                  ? a.h.dispatch({ type: "AUDIO_TOGGLE_SELF_MUTE", context: e, syncRemote: t, playSoundEffect: i })
                  : this.enable(!0);
        },
        setSelfMute(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
            v() ||
                ((n = n && !A.Ay.hasActiveSystemTelecomCall()),
                I.default.getCurrentUser()?.isStaff() && N.info("Setting self mute", t),
                a.h.dispatch({ type: "AUDIO_SET_SELF_MUTE", context: e, mute: t, playSoundEffect: n }));
        },
        setTemporarySelfMute(e) {
            v() ||
                (I.default.getCurrentUser()?.isStaff() && N.info("Setting temporary self mute", e),
                a.h.dispatch({ type: "AUDIO_SET_TEMPORARY_SELF_MUTE", mute: e }));
        },
        toggleSelfDeaf() {
            let {
                context: e = S.x.DEFAULT,
                syncRemote: t = !0,
                usedKeybind: n = !1,
                location: i,
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            v() ||
                (M({ usedKeybind: n, location: i }),
                a.h.dispatch({ type: "AUDIO_TOGGLE_SELF_DEAF", context: e, syncRemote: t }));
        },
        toggleLocalMute(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S.x.DEFAULT;
            v() || a.h.dispatch({ type: "AUDIO_TOGGLE_LOCAL_MUTE", context: t, userId: e });
        },
        toggleLocalSoundboardMute(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S.x.DEFAULT;
            a.h.dispatch({ type: "AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE", context: t, userId: e });
        },
        setDisableLocalVideo(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : S.x.DEFAULT,
                i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            v() ||
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
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : S.x.DEFAULT,
                i = (0, d.z)(t, n);
            (a.h.dispatch({ type: "AUDIO_SET_LOCAL_VOLUME", context: n, userId: e, volume: i }), L(e, n, i));
        },
        setSpatialAudioOverrides(e) {
            a.h.dispatch({ type: "AUDIO_SET_SPATIAL_AUDIO_OVERRIDES", overrides: e });
        },
        setSpatialAudioEnabled(e) {
            a.h.dispatch({ type: "AUDIO_SET_SPATIAL_AUDIO_ENABLED", enabled: e });
        },
        setSpatialAudio(e, t) {
            if (v()) return;
            let n = o.A.isSpatialAudioEnabled();
            ((0, c.A)("spatial_audio_enabled", e, n, t), this.setSpatialAudioEnabled(e));
        },
        setLocalPan(e, t, n) {
            let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : S.x.DEFAULT;
            a.h.dispatch({ type: "AUDIO_SET_LOCAL_PAN", context: i, userId: e, left: t, right: n });
        },
        setMode(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : S.x.DEFAULT,
                { analyticsLocations: i } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            if (v()) return;
            let r = e !== A.Ay.getMode(),
                s = A.Ay.getModeOptions(n);
            if ((a.h.dispatch({ type: "AUDIO_SET_MODE", context: n, mode: e, options: { ...s, ...t } }), r)) {
                let t = A.Ay.getMediaEngine().getAudioSubsystem(),
                    n = A.Ay.getMediaEngine().getAudioLayer(),
                    r = f.Ay.getVoiceChannelId(),
                    a = null != r ? E.A.getChannel(r) : null,
                    s = O();
                p.default.track(m.HAw.VOICE_ACTIVATION_MODE_CHANGED, {
                    mode: e,
                    location_stack: i,
                    voice_channel_type: a?.type,
                    input_device_name: s,
                    audio_subsystem: t,
                    audio_layer: n,
                });
            } else if (e === m.TBI.VOICE_ACTIVITY && s !== t) {
                let e = A.Ay.getMediaEngine().getAudioSubsystem(),
                    n = A.Ay.getMediaEngine().getAudioLayer(),
                    r = f.Ay.getVoiceChannelId(),
                    a = null != r ? E.A.getChannel(r) : null,
                    l = O();
                p.default.track(m.HAw.VOICE_ACTIVITY_THRESHOLD_CHANGED, {
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
            v() || a.h.dispatch({ type: "AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING", bypassEnabled: e, location: t });
        },
        setInputVolume(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (v()) return;
            a.h.dispatch({ type: "AUDIO_SET_INPUT_VOLUME", volume: e });
            let n = f.Ay.getVoiceChannelId(),
                i = null != n ? E.A.getChannel(n) : null;
            p.default.track(m.HAw.MEDIA_INPUT_VOLUME_CHANGED, {
                volume: e,
                location_stack: t,
                voice_channel_type: i?.type,
            });
        },
        setOutputVolume(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (v()) return;
            a.h.dispatch({ type: "AUDIO_SET_OUTPUT_VOLUME", volume: e });
            let n = f.Ay.getVoiceChannelId(),
                i = null != n ? E.A.getChannel(n) : null;
            p.default.track(m.HAw.MEDIA_OUTPUT_VOLUME_CHANGED, {
                volume: e,
                location_stack: t,
                voice_channel_type: i?.type,
            });
        },
        setInputDevice(e) {
            let { location: t, analyticsLocations: n } =
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (v()) return;
            let i = A.Ay.getInputDeviceId();
            ((null != t || null != n) &&
                R(A.Ay.getInputDevices(), i, e, "Audio Input", { location: t, analyticsLocations: n }),
                a.h.dispatch({ type: "AUDIO_SET_INPUT_DEVICE", id: e, oldId: i }),
                C());
        },
        setOutputDevice(e) {
            let { location: t, analyticsLocations: n } =
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (v()) return;
            let i = A.Ay.getOutputDeviceId();
            ((null != t || null != n) &&
                R(A.Ay.getOutputDevices(), i, e, "Audio Output", { location: t, analyticsLocations: n }),
                a.h.dispatch({ type: "AUDIO_SET_OUTPUT_DEVICE", id: e, oldId: i }),
                C());
        },
        setVideoDevice(e) {
            let { location: t, analyticsLocations: n } =
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (v()) return;
            let i = A.Ay.getVideoDeviceId();
            ((null != t || null != n) &&
                R(A.Ay.getVideoDevices(), i, e, "Video", { location: t, analyticsLocations: n }),
                a.h.dispatch({ type: "MEDIA_ENGINE_SET_VIDEO_DEVICE", id: e, oldId: i }));
        },
        setActiveInputProfile(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            v() ||
                ((0, c.A)("active_input_profile", e, A.Ay.getActiveInputProfile() ?? void 0, t),
                a.h.dispatch({ type: "AUDIO_SET_ACTIVE_INPUT_PROFILE", inputProfile: e }));
        },
        setEchoCancellation(e, t) {
            v() || a.h.dispatch({ type: "AUDIO_SET_ECHO_CANCELLATION", enabled: e, location: t });
        },
        setSidechainCompression(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            v() ||
                ((0, c.A)("stream_attenuation_enabled", e, A.Ay.getSidechainCompression(), t),
                a.h.dispatch({ type: "AUDIO_SET_SIDECHAIN_COMPRESSION", enabled: e }));
        },
        setSidechainCompressionStrength(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            v() ||
                ((0, c.A)("stream_attenuation_strength", e, A.Ay.getSidechainCompressionStrength(), t),
                a.h.dispatch({ type: "AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH", strength: e }));
        },
        setLoopback(e, t) {
            v() || a.h.dispatch({ type: "AUDIO_SET_LOOPBACK", loopbackReason: e, enabled: t });
        },
        setNoiseSuppression(e, t) {
            v() || a.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: e, location: t });
        },
        setNoiseCancellation(e, t) {
            v() ||
                (a.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION", enabled: e, location: t }),
                a.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !e, location: t }));
        },
        setAutomaticGainControl(e, t) {
            v() || a.h.dispatch({ type: "AUDIO_SET_AUTOMATIC_GAIN_CONTROL", enabled: e, location: t });
        },
        setAttenuation(e, t, n) {
            if (!v()) {
                let i, r, s;
                ((i = A.Ay.getAttenuation()),
                    (r = A.Ay.getAttenuateWhileSpeakingSelf()),
                    (s = A.Ay.getAttenuateWhileSpeakingOthers()),
                    i !== e
                        ? (0, c.A)("global_attenuation_strength", e, i)
                        : r !== t
                          ? (0, c.A)("global_attenuation_for_self_speak_enabled", t, r)
                          : s !== n && (0, c.A)("global_attenuation_for_other_speak_enabled", n, s),
                    a.h.dispatch({
                        type: "AUDIO_SET_ATTENUATION",
                        attenuation: e,
                        attenuateWhileSpeakingSelf: t,
                        attenuateWhileSpeakingOthers: n,
                    }));
            }
        },
        setQoS(e) {
            v() ||
                ((0, c.A)("quality_of_service_packets_enabled", e, A.Ay.getQoS()),
                a.h.dispatch({ type: "AUDIO_SET_QOS", enabled: e }));
        },
        reset() {
            v() || a.h.dispatch({ type: "AUDIO_RESET" });
        },
        setSilenceWarning(e) {
            v() ||
                ((0, c.A)("silence_warning_enabled", e, A.Ay.getEnableSilenceWarning()),
                a.h.dispatch({ type: "AUDIO_SET_DISPLAY_SILENCE_WARNING", enabled: e }));
        },
        async setDebugLogging(e) {
            v() ||
                (await (0, c.A)("debug_logging_enabled", e, A.Ay.getDebugLogging()),
                a.h.dispatch({ type: "AUDIO_SET_DEBUG_LOGGING", enabled: e }));
        },
        setVideoHook(e) {
            v() ||
                ((0, c.A)("video_hook_enabled", e, A.Ay.getVideoHook()),
                a.h.dispatch({ type: "MEDIA_ENGINE_SET_VIDEO_HOOK", enabled: e }));
        },
        setExperimentalSoundshare(e) {
            v() ||
                ((0, c.A)("experimental_soundshare_enabled", e, A.Ay.getExperimentalSoundshare()),
                a.h.dispatch({ type: "MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE", enabled: e }));
        },
        setUseSystemScreensharePicker(e) {
            v() ||
                ((0, c.A)("system_screenshare_picker_enabled", e, A.Ay.getUseSystemScreensharePicker()),
                a.h.dispatch({ type: "MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER", enabled: e }));
        },
        async setAudioSubsystem(e) {
            v() ||
                (await (0, c.A)("audio_subsystem", e, A.Ay.getAudioSubsystem()),
                a.h.dispatch({ type: "AUDIO_SET_SUBSYSTEM", subsystem: e }));
        },
        setVideoEnabled(e) {
            (e && (0, u.PX)(), a.h.dispatch({ type: "MEDIA_ENGINE_SET_VIDEO_ENABLED", enabled: e }));
        },
        setGoLiveSource(e) {
            (e?.qualityOptions != null &&
                (0, T.K2)(
                    e.qualityOptions.preset,
                    e.qualityOptions.resolution,
                    e.qualityOptions.frameRate,
                    e.desktopSettings?.sound,
                ),
                a.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: e }));
        },
        setAecDump(e) {
            v() ||
                ((0, c.A)("diagnostic_audio_recording_enabled", e, A.Ay.getAecDump()),
                a.h.dispatch({ type: "MEDIA_ENGINE_SET_AEC_DUMP", enabled: e }));
        },
        interact() {
            v() || a.h.dispatch({ type: "MEDIA_ENGINE_INTERACTION_REQUIRED", required: !1 });
        },
        setEnableHardwareMuteNotice(e) {
            v() || a.h.dispatch({ type: "MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE", enabled: e });
        },
        setKrispSuppressionLevel(e) {
            v() || a.h.dispatch({ type: "AUDIO_SET_KRISP_SUPPRESSION_LEVEL", level: e });
        },
        setKrispModelOverride(e) {
            !v() &&
                (a.h.dispatch({ type: "AUDIO_SET_KRISP_MODEL_OVERRIDE", model: e }),
                A.Ay.getNoiseCancellation() && (this.setNoiseCancellation(!1), this.setNoiseCancellation(!0)));
        },
        setNoiseCancellationEnableStats(e) {
            v() || a.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS", enabled: e });
        },
        setOpenH264Enabled(e) {
            v() || a.h.dispatch({ type: "MEDIA_ENGINE_SET_OPENH264_ENABLED", enabled: e });
        },
        resetMediaEngineSettings: (e) => a.h.dispatch({ type: "MEDIA_ENGINE_RESET_SETTINGS", overrides: e }),
    };
