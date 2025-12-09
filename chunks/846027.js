n.d(t, { Z: () => L });
var r = n(954955),
    i = n.n(r),
    a = n(570140),
    o = n(710845),
    s = n(460181),
    l = n(340332),
    c = n(569550),
    u = n(672339),
    d = n(463395),
    f = n(592125),
    p = n(131951),
    _ = n(19780),
    m = n(944486),
    h = n(594174),
    g = n(626135),
    E = n(557457),
    b = n(981631),
    y = n(509571),
    O = n(65154);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                v(e, t, n[t]);
            });
    }
    return e;
}
let I = new o.Z("AudioActionCreators");
function T() {
    (0, s.GN)("mention3", void 0, void 0, void 0, y.w.VOICE);
}
function A() {
    let e = p.Z.getInputDevices()[p.Z.getInputDeviceId()];
    return null != e ? e.name : "";
}
function C(e, t, n, r) {
    let { location: i, analyticsLocations: a } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    if (t === n) return;
    let o = m.Z.getVoiceChannelId(),
        s = null != o ? f.Z.getChannel(o) : null,
        l = e[t],
        c = e[n],
        u = p.Z.getMediaEngine().getAudioSubsystem(),
        _ = p.Z.getMediaEngine().getAudioLayer();
    g.default.track(b.rMx.MEDIA_DEVICE_CHANGED, {
        device_from_name: d.Z.getCertifiedDeviceName(t, null != l ? l.name : ""),
        device_to_name: d.Z.getCertifiedDeviceName(n, null != c ? c.name : ""),
        device_type: r,
        device_is_certified: d.Z.isCertified(n),
        location: i,
        location_stack: a,
        voice_channel_type: null == s ? void 0 : s.type,
        audio_subsystem: u,
        audio_layer: _,
    });
}
let N = i()((e, t, n) => {
        g.default.track(b.rMx.USER_VOLUME_SETTING_UPDATED, {
            target_user_id: e,
            context: t,
            volume: n,
            media_session_id: _.Z.getMediaSessionId(),
            rtc_connection_id: _.Z.getRTCConnectionId(),
        });
    }, 300),
    P = {
        isNotSupported: () => !1,
        enable: (e) => Promise.resolve(!0),
        trackToggleSelfMute(e) {},
        trackToggleSelfDeaf(e) {},
    },
    { enable: R, isNotSupported: D, trackToggleSelfMute: w, trackToggleSelfDeaf: x } = (P = n(929782)),
    L = {
        enable: R,
        toggleSelfMute() {
            var e;
            let {
                context: t = O.Yn.DEFAULT,
                syncRemote: n = !0,
                usedKeybind: r = !1,
                playSoundEffect: i = !0,
                location: o,
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return D()
                ? Promise.resolve()
                : (w({
                        usedKeybind: r,
                        location: o,
                    }),
                    (i = i && !p.Z.hasActiveCallKitCall()),
                    (null == (e = h.default.getCurrentUser()) ? void 0 : e.isStaff()) && I.info("Toggling self mute"),
                    p.Z.isEnabled())
                  ? a.Z.dispatch({
                        type: "AUDIO_TOGGLE_SELF_MUTE",
                        context: t,
                        syncRemote: n,
                        playSoundEffect: i,
                    })
                  : this.enable(!0);
        },
        setSelfMute(e, t) {
            var n;
            let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
            D() ||
                ((r = r && !p.Z.hasActiveCallKitCall()),
                (null == (n = h.default.getCurrentUser()) ? void 0 : n.isStaff()) && I.info("Setting self mute", t),
                a.Z.dispatch({
                    type: "AUDIO_SET_SELF_MUTE",
                    context: e,
                    mute: t,
                    playSoundEffect: r,
                }));
        },
        setTemporarySelfMute(e) {
            var t;
            D() ||
                ((null == (t = h.default.getCurrentUser()) ? void 0 : t.isStaff()) &&
                    I.info("Setting temporary self mute", e),
                a.Z.dispatch({
                    type: "AUDIO_SET_TEMPORARY_SELF_MUTE",
                    mute: e,
                }));
        },
        toggleSelfDeaf() {
            let {
                context: e = O.Yn.DEFAULT,
                syncRemote: t = !0,
                usedKeybind: n = !1,
                location: r,
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            D() ||
                (x({
                    usedKeybind: n,
                    location: r,
                }),
                a.Z.dispatch({
                    type: "AUDIO_TOGGLE_SELF_DEAF",
                    context: e,
                    syncRemote: t,
                }));
        },
        toggleLocalMute(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O.Yn.DEFAULT;
            D() ||
                a.Z.dispatch({
                    type: "AUDIO_TOGGLE_LOCAL_MUTE",
                    context: t,
                    userId: e,
                });
        },
        toggleLocalSoundboardMute(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O.Yn.DEFAULT;
            a.Z.dispatch({
                type: "AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE",
                context: t,
                userId: e,
            });
        },
        setDisableLocalVideo(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : O.Yn.DEFAULT,
                r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            D() ||
                a.Z.dispatch({
                    type: "AUDIO_SET_LOCAL_VIDEO_DISABLED",
                    context: n,
                    userId: e,
                    videoToggleState: t,
                    persist: r,
                    isAutomatic: i,
                });
        },
        setLocalVolume(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : O.Yn.DEFAULT,
                r = (0, l.r)(t, n);
            a.Z.dispatch({
                type: "AUDIO_SET_LOCAL_VOLUME",
                context: n,
                userId: e,
                volume: r,
            }),
                N(e, n, r);
        },
        setLocalPan(e, t, n) {
            let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : O.Yn.DEFAULT;
            a.Z.dispatch({
                type: "AUDIO_SET_LOCAL_PAN",
                context: r,
                userId: e,
                left: t,
                right: n,
            });
        },
        setMode(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : O.Yn.DEFAULT,
                { analyticsLocations: r } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            if (D()) return;
            let i = e !== p.Z.getMode(),
                o = p.Z.getModeOptions(n);
            if (
                (a.Z.dispatch({
                    type: "AUDIO_SET_MODE",
                    context: n,
                    mode: e,
                    options: S({}, o, t),
                }),
                i)
            ) {
                let t = p.Z.getMediaEngine().getAudioSubsystem(),
                    n = p.Z.getMediaEngine().getAudioLayer(),
                    i = m.Z.getVoiceChannelId(),
                    a = null != i ? f.Z.getChannel(i) : null,
                    o = A();
                g.default.track(b.rMx.VOICE_ACTIVATION_MODE_CHANGED, {
                    mode: e,
                    location_stack: r,
                    voice_channel_type: null == a ? void 0 : a.type,
                    input_device_name: o,
                    audio_subsystem: t,
                    audio_layer: n,
                });
            } else if (e === b.pM4.VOICE_ACTIVITY && o !== t) {
                let e = p.Z.getMediaEngine().getAudioSubsystem(),
                    n = p.Z.getMediaEngine().getAudioLayer(),
                    i = m.Z.getVoiceChannelId(),
                    a = null != i ? f.Z.getChannel(i) : null,
                    s = A();
                g.default.track(b.rMx.VOICE_ACTIVITY_THRESHOLD_CHANGED, {
                    location_stack: r,
                    voice_channel_type: null == a ? void 0 : a.type,
                    input_device_name: s,
                    audio_subsystem: e,
                    audio_layer: n,
                    old_threshold: o.threshold,
                    new_threshold: t.threshold,
                    old_auto_threshold: o.autoThreshold,
                    new_auto_threshold: t.autoThreshold,
                });
            }
        },
        setBypassSystemInputProcessing(e, t) {
            D() ||
                a.Z.dispatch({
                    type: "AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING",
                    bypassEnabled: e,
                    location: t,
                });
        },
        setInputVolume(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (D()) return;
            a.Z.dispatch({
                type: "AUDIO_SET_INPUT_VOLUME",
                volume: e,
            });
            let n = m.Z.getVoiceChannelId(),
                r = null != n ? f.Z.getChannel(n) : null;
            g.default.track(b.rMx.MEDIA_INPUT_VOLUME_CHANGED, {
                volume: e,
                location_stack: t,
                voice_channel_type: null == r ? void 0 : r.type,
            });
        },
        setOutputVolume(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (D()) return;
            a.Z.dispatch({
                type: "AUDIO_SET_OUTPUT_VOLUME",
                volume: e,
            });
            let n = m.Z.getVoiceChannelId(),
                r = null != n ? f.Z.getChannel(n) : null;
            g.default.track(b.rMx.MEDIA_OUTPUT_VOLUME_CHANGED, {
                volume: e,
                location_stack: t,
                voice_channel_type: null == r ? void 0 : r.type,
            });
        },
        setInputDevice(e) {
            let { location: t, analyticsLocations: n } =
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (D()) return;
            let r = p.Z.getInputDeviceId();
            (null != t || null != n) &&
                C(p.Z.getInputDevices(), r, e, "Audio Input", {
                    location: t,
                    analyticsLocations: n,
                }),
                a.Z.dispatch({
                    type: "AUDIO_SET_INPUT_DEVICE",
                    id: e,
                    oldId: r,
                }),
                T();
        },
        setOutputDevice(e) {
            let { location: t, analyticsLocations: n } =
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (D()) return;
            let r = p.Z.getOutputDeviceId();
            (null != t || null != n) &&
                C(p.Z.getOutputDevices(), r, e, "Audio Output", {
                    location: t,
                    analyticsLocations: n,
                }),
                a.Z.dispatch({
                    type: "AUDIO_SET_OUTPUT_DEVICE",
                    id: e,
                    oldId: r,
                }),
                T();
        },
        setVideoDevice(e) {
            let { location: t, analyticsLocations: n } =
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (D()) return;
            let r = p.Z.getVideoDeviceId();
            (null != t || null != n) &&
                C(p.Z.getVideoDevices(), r, e, "Video", {
                    location: t,
                    analyticsLocations: n,
                }),
                a.Z.dispatch({
                    type: "MEDIA_ENGINE_SET_VIDEO_DEVICE",
                    id: e,
                    oldId: r,
                });
        },
        setActiveInputProfile(e) {
            var t;
            let { analyticsLocations: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            D() ||
                ((0, c.Z)("active_input_profile", e, null != (t = p.Z.getActiveInputProfile()) ? t : void 0, n),
                a.Z.dispatch({
                    type: "AUDIO_SET_ACTIVE_INPUT_PROFILE",
                    inputProfile: e,
                }));
        },
        setEchoCancellation(e, t) {
            D() ||
                a.Z.dispatch({
                    type: "AUDIO_SET_ECHO_CANCELLATION",
                    enabled: e,
                    location: t,
                });
        },
        setSidechainCompression(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            D() ||
                ((0, c.Z)("stream_attenuation_enabled", e, p.Z.getSidechainCompression(), t),
                a.Z.dispatch({
                    type: "AUDIO_SET_SIDECHAIN_COMPRESSION",
                    enabled: e,
                }));
        },
        setSidechainCompressionStrength(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            D() ||
                ((0, c.Z)("stream_attenuation_strength", e, p.Z.getSidechainCompressionStrength(), t),
                a.Z.dispatch({
                    type: "AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH",
                    strength: e,
                }));
        },
        setLoopback(e, t) {
            D() ||
                a.Z.dispatch({
                    type: "AUDIO_SET_LOOPBACK",
                    loopbackReason: e,
                    enabled: t,
                });
        },
        setNoiseSuppression(e, t) {
            D() ||
                a.Z.dispatch({
                    type: "AUDIO_SET_NOISE_SUPPRESSION",
                    enabled: e,
                    location: t,
                });
        },
        setNoiseCancellation(e, t) {
            D() ||
                (a.Z.dispatch({
                    type: "AUDIO_SET_NOISE_CANCELLATION",
                    enabled: e,
                    location: t,
                }),
                a.Z.dispatch({
                    type: "AUDIO_SET_NOISE_SUPPRESSION",
                    enabled: !e,
                    location: t,
                }));
        },
        setAutomaticGainControl(e, t) {
            D() ||
                a.Z.dispatch({
                    type: "AUDIO_SET_AUTOMATIC_GAIN_CONTROL",
                    enabled: e,
                    location: t,
                });
        },
        setAttenuation(e, t, n) {
            D() ||
                ((() => {
                    let r = p.Z.getAttenuation(),
                        i = p.Z.getAttenuateWhileSpeakingSelf(),
                        a = p.Z.getAttenuateWhileSpeakingOthers();
                    return r !== e
                        ? (0, c.Z)("global_attenuation_strength", e, r)
                        : i !== t
                          ? (0, c.Z)("global_attenuation_for_self_speak_enabled", t, i)
                          : a !== n && (0, c.Z)("global_attenuation_for_other_speak_enabled", n, a);
                })(),
                a.Z.dispatch({
                    type: "AUDIO_SET_ATTENUATION",
                    attenuation: e,
                    attenuateWhileSpeakingSelf: t,
                    attenuateWhileSpeakingOthers: n,
                }));
        },
        setQoS(e) {
            D() ||
                ((0, c.Z)("quality_of_service_packets_enabled", e, p.Z.getQoS()),
                a.Z.dispatch({
                    type: "AUDIO_SET_QOS",
                    enabled: e,
                }));
        },
        reset() {
            D() || a.Z.dispatch({ type: "AUDIO_RESET" });
        },
        setSilenceWarning(e) {
            D() ||
                ((0, c.Z)("silence_warning_enabled", e, p.Z.getEnableSilenceWarning()),
                a.Z.dispatch({
                    type: "AUDIO_SET_DISPLAY_SILENCE_WARNING",
                    enabled: e,
                }));
        },
        async setDebugLogging(e) {
            D() ||
                (await (0, c.Z)("debug_logging_enabled", e, p.Z.getDebugLogging()),
                a.Z.dispatch({
                    type: "AUDIO_SET_DEBUG_LOGGING",
                    enabled: e,
                }));
        },
        setVideoHook(e) {
            D() ||
                ((0, c.Z)("video_hook_enabled", e, p.Z.getVideoHook()),
                a.Z.dispatch({
                    type: "MEDIA_ENGINE_SET_VIDEO_HOOK",
                    enabled: e,
                }));
        },
        setExperimentalSoundshare(e) {
            D() ||
                ((0, c.Z)("experimental_soundshare_enabled", e, p.Z.getExperimentalSoundshare()),
                a.Z.dispatch({
                    type: "MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE",
                    enabled: e,
                }));
        },
        setUseSystemScreensharePicker(e) {
            D() ||
                ((0, c.Z)("system_screenshare_picker_enabled", e, p.Z.getUseSystemScreensharePicker()),
                a.Z.dispatch({
                    type: "MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER",
                    enabled: e,
                }));
        },
        async setAudioSubsystem(e) {
            D() ||
                (await (0, c.Z)("audio_subsystem", e, p.Z.getAudioSubsystem()),
                a.Z.dispatch({
                    type: "AUDIO_SET_SUBSYSTEM",
                    subsystem: e,
                }));
        },
        setVideoEnabled(e) {
            (0, u.eH)(),
                a.Z.dispatch({
                    type: "MEDIA_ENGINE_SET_VIDEO_ENABLED",
                    enabled: e,
                });
        },
        setGoLiveSource(e) {
            (null == e ? void 0 : e.qualityOptions) != null &&
                (0, E.Ye)(e.qualityOptions.preset, e.qualityOptions.resolution, e.qualityOptions.frameRate),
                a.Z.dispatch({
                    type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                    settings: e,
                });
        },
        setAecDump(e) {
            D() ||
                ((0, c.Z)("diagnostic_audio_recording_enabled", e, p.Z.getAecDump()),
                a.Z.dispatch({
                    type: "MEDIA_ENGINE_SET_AEC_DUMP",
                    enabled: e,
                }));
        },
        interact() {
            D() ||
                a.Z.dispatch({
                    type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
                    required: !1,
                });
        },
        setEnableHardwareMuteNotice(e) {
            D() ||
                a.Z.dispatch({
                    type: "MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE",
                    enabled: e,
                });
        },
        setKrispSuppressionLevel(e) {
            D() ||
                a.Z.dispatch({
                    type: "AUDIO_SET_KRISP_SUPPRESSION_LEVEL",
                    level: e,
                });
        },
        setKrispModelOverride(e) {
            !D() &&
                (a.Z.dispatch({
                    type: "AUDIO_SET_KRISP_MODEL_OVERRIDE",
                    model: e,
                }),
                p.Z.getNoiseCancellation() && (this.setNoiseCancellation(!1), this.setNoiseCancellation(!0)));
        },
        setNoiseCancellationEnableStats(e) {
            D() ||
                a.Z.dispatch({
                    type: "AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS",
                    enabled: e,
                });
        },
        resetMediaEngineSettings: (e) =>
            a.Z.dispatch({
                type: "MEDIA_ENGINE_RESET_SETTINGS",
                overrides: e,
            }),
    };
