n.d(t, { A: () => L });
var r = n(111956),
    i = n.n(r),
    a = n(73153),
    s = n(626584),
    o = n(400492),
    l = n(409826),
    c = n(698723),
    u = n(413339),
    d = n(347481),
    f = n(734057),
    p = n(430452),
    _ = n(383501),
    h = n(309010),
    m = n(287809),
    g = n(954571),
    E = n(650338),
    b = n(652215),
    y = n(257645),
    O = n(731854);
function A(e, t, n) {
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
function v(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
let S = new s.A("AudioActionCreators");
function I() {
    (0, o.Ak)("mention3", void 0, void 0, void 0, y.a.VOICE);
}
function T() {
    let e = p.A.getInputDevices()[p.A.getInputDeviceId()];
    return null != e ? e.name : "";
}
function C(e, t, n, r) {
    let { location: i, analyticsLocations: a } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    if (t === n) return;
    let s = h.A.getVoiceChannelId(),
        o = null != s ? f.A.getChannel(s) : null,
        l = e[t],
        c = e[n],
        u = p.A.getMediaEngine().getAudioSubsystem(),
        _ = p.A.getMediaEngine().getAudioLayer();
    g.default.track(b.HAw.MEDIA_DEVICE_CHANGED, {
        device_from_name: d.A.getCertifiedDeviceName(t, null != l ? l.name : ""),
        device_to_name: d.A.getCertifiedDeviceName(n, null != c ? c.name : ""),
        device_type: r,
        device_is_certified: d.A.isCertified(n),
        location: i,
        location_stack: a,
        voice_channel_type: null == o ? void 0 : o.type,
        audio_subsystem: u,
        audio_layer: _,
    });
}
let N = i()((e, t, n) => {
        g.default.track(b.HAw.USER_VOLUME_SETTING_UPDATED, {
            target_user_id: e,
            context: t,
            volume: n,
            media_session_id: _.A.getMediaSessionId(),
            rtc_connection_id: _.A.getRTCConnectionId(),
        });
    }, 300),
    R = {
        isNotSupported: () => !1,
        enable: (e) => Promise.resolve(!0),
        trackToggleSelfMute(e) {},
        trackToggleSelfDeaf(e) {},
    },
    { enable: w, isNotSupported: P, trackToggleSelfMute: D, trackToggleSelfDeaf: x } = (R = n(401124)),
    L = {
        enable: w,
        toggleSelfMute() {
            var e;
            let {
                context: t = O.x.DEFAULT,
                syncRemote: n = !0,
                usedKeybind: r = !1,
                playSoundEffect: i = !0,
                location: s,
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return P()
                ? Promise.resolve()
                : (D({
                        usedKeybind: r,
                        location: s,
                    }),
                    (i = i && !p.A.hasActiveCallKitCall()),
                    (null == (e = m.default.getCurrentUser()) ? void 0 : e.isStaff()) && S.info("Toggling self mute"),
                    p.A.isEnabled())
                  ? a.h.dispatch({
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
            P() ||
                ((r = r && !p.A.hasActiveCallKitCall()),
                (null == (n = m.default.getCurrentUser()) ? void 0 : n.isStaff()) && S.info("Setting self mute", t),
                a.h.dispatch({
                    type: "AUDIO_SET_SELF_MUTE",
                    context: e,
                    mute: t,
                    playSoundEffect: r,
                }));
        },
        setTemporarySelfMute(e) {
            var t;
            P() ||
                ((null == (t = m.default.getCurrentUser()) ? void 0 : t.isStaff()) &&
                    S.info("Setting temporary self mute", e),
                a.h.dispatch({
                    type: "AUDIO_SET_TEMPORARY_SELF_MUTE",
                    mute: e,
                }));
        },
        toggleSelfDeaf() {
            let {
                context: e = O.x.DEFAULT,
                syncRemote: t = !0,
                usedKeybind: n = !1,
                location: r,
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            P() ||
                (x({
                    usedKeybind: n,
                    location: r,
                }),
                a.h.dispatch({
                    type: "AUDIO_TOGGLE_SELF_DEAF",
                    context: e,
                    syncRemote: t,
                }));
        },
        toggleLocalMute(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O.x.DEFAULT;
            P() ||
                a.h.dispatch({
                    type: "AUDIO_TOGGLE_LOCAL_MUTE",
                    context: t,
                    userId: e,
                });
        },
        toggleLocalSoundboardMute(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O.x.DEFAULT;
            a.h.dispatch({
                type: "AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE",
                context: t,
                userId: e,
            });
        },
        setDisableLocalVideo(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : O.x.DEFAULT,
                r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            P() ||
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
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : O.x.DEFAULT,
                r = (0, l.z)(t, n);
            a.h.dispatch({
                type: "AUDIO_SET_LOCAL_VOLUME",
                context: n,
                userId: e,
                volume: r,
            }),
                N(e, n, r);
        },
        setLocalPan(e, t, n) {
            let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : O.x.DEFAULT;
            a.h.dispatch({
                type: "AUDIO_SET_LOCAL_PAN",
                context: r,
                userId: e,
                left: t,
                right: n,
            });
        },
        setMode(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : O.x.DEFAULT,
                { analyticsLocations: r } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            if (P()) return;
            let i = e !== p.A.getMode(),
                s = p.A.getModeOptions(n);
            if (
                (a.h.dispatch({
                    type: "AUDIO_SET_MODE",
                    context: n,
                    mode: e,
                    options: v({}, s, t),
                }),
                i)
            ) {
                let t = p.A.getMediaEngine().getAudioSubsystem(),
                    n = p.A.getMediaEngine().getAudioLayer(),
                    i = h.A.getVoiceChannelId(),
                    a = null != i ? f.A.getChannel(i) : null,
                    s = T();
                g.default.track(b.HAw.VOICE_ACTIVATION_MODE_CHANGED, {
                    mode: e,
                    location_stack: r,
                    voice_channel_type: null == a ? void 0 : a.type,
                    input_device_name: s,
                    audio_subsystem: t,
                    audio_layer: n,
                });
            } else if (e === b.TBI.VOICE_ACTIVITY && s !== t) {
                let e = p.A.getMediaEngine().getAudioSubsystem(),
                    n = p.A.getMediaEngine().getAudioLayer(),
                    i = h.A.getVoiceChannelId(),
                    a = null != i ? f.A.getChannel(i) : null,
                    o = T();
                g.default.track(b.HAw.VOICE_ACTIVITY_THRESHOLD_CHANGED, {
                    location_stack: r,
                    voice_channel_type: null == a ? void 0 : a.type,
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
            P() ||
                a.h.dispatch({
                    type: "AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING",
                    bypassEnabled: e,
                    location: t,
                });
        },
        setInputVolume(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (P()) return;
            a.h.dispatch({
                type: "AUDIO_SET_INPUT_VOLUME",
                volume: e,
            });
            let n = h.A.getVoiceChannelId(),
                r = null != n ? f.A.getChannel(n) : null;
            g.default.track(b.HAw.MEDIA_INPUT_VOLUME_CHANGED, {
                volume: e,
                location_stack: t,
                voice_channel_type: null == r ? void 0 : r.type,
            });
        },
        setOutputVolume(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (P()) return;
            a.h.dispatch({
                type: "AUDIO_SET_OUTPUT_VOLUME",
                volume: e,
            });
            let n = h.A.getVoiceChannelId(),
                r = null != n ? f.A.getChannel(n) : null;
            g.default.track(b.HAw.MEDIA_OUTPUT_VOLUME_CHANGED, {
                volume: e,
                location_stack: t,
                voice_channel_type: null == r ? void 0 : r.type,
            });
        },
        setInputDevice(e) {
            let { location: t, analyticsLocations: n } =
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (P()) return;
            let r = p.A.getInputDeviceId();
            (null != t || null != n) &&
                C(p.A.getInputDevices(), r, e, "Audio Input", {
                    location: t,
                    analyticsLocations: n,
                }),
                a.h.dispatch({
                    type: "AUDIO_SET_INPUT_DEVICE",
                    id: e,
                    oldId: r,
                }),
                I();
        },
        setOutputDevice(e) {
            let { location: t, analyticsLocations: n } =
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (P()) return;
            let r = p.A.getOutputDeviceId();
            (null != t || null != n) &&
                C(p.A.getOutputDevices(), r, e, "Audio Output", {
                    location: t,
                    analyticsLocations: n,
                }),
                a.h.dispatch({
                    type: "AUDIO_SET_OUTPUT_DEVICE",
                    id: e,
                    oldId: r,
                }),
                I();
        },
        setVideoDevice(e) {
            let { location: t, analyticsLocations: n } =
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (P()) return;
            let r = p.A.getVideoDeviceId();
            (null != t || null != n) &&
                C(p.A.getVideoDevices(), r, e, "Video", {
                    location: t,
                    analyticsLocations: n,
                }),
                a.h.dispatch({
                    type: "MEDIA_ENGINE_SET_VIDEO_DEVICE",
                    id: e,
                    oldId: r,
                });
        },
        setActiveInputProfile(e) {
            var t;
            let { analyticsLocations: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            P() ||
                ((0, c.A)("active_input_profile", e, null != (t = p.A.getActiveInputProfile()) ? t : void 0, n),
                a.h.dispatch({
                    type: "AUDIO_SET_ACTIVE_INPUT_PROFILE",
                    inputProfile: e,
                }));
        },
        setEchoCancellation(e, t) {
            P() ||
                a.h.dispatch({
                    type: "AUDIO_SET_ECHO_CANCELLATION",
                    enabled: e,
                    location: t,
                });
        },
        setSidechainCompression(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            P() ||
                ((0, c.A)("stream_attenuation_enabled", e, p.A.getSidechainCompression(), t),
                a.h.dispatch({
                    type: "AUDIO_SET_SIDECHAIN_COMPRESSION",
                    enabled: e,
                }));
        },
        setSidechainCompressionStrength(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            P() ||
                ((0, c.A)("stream_attenuation_strength", e, p.A.getSidechainCompressionStrength(), t),
                a.h.dispatch({
                    type: "AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH",
                    strength: e,
                }));
        },
        setLoopback(e, t) {
            P() ||
                a.h.dispatch({
                    type: "AUDIO_SET_LOOPBACK",
                    loopbackReason: e,
                    enabled: t,
                });
        },
        setNoiseSuppression(e, t) {
            P() ||
                a.h.dispatch({
                    type: "AUDIO_SET_NOISE_SUPPRESSION",
                    enabled: e,
                    location: t,
                });
        },
        setNoiseCancellation(e, t) {
            P() ||
                (a.h.dispatch({
                    type: "AUDIO_SET_NOISE_CANCELLATION",
                    enabled: e,
                    location: t,
                }),
                a.h.dispatch({
                    type: "AUDIO_SET_NOISE_SUPPRESSION",
                    enabled: !e,
                    location: t,
                }));
        },
        setAutomaticGainControl(e, t) {
            P() ||
                a.h.dispatch({
                    type: "AUDIO_SET_AUTOMATIC_GAIN_CONTROL",
                    enabled: e,
                    location: t,
                });
        },
        setAttenuation(e, t, n) {
            P() ||
                ((() => {
                    let r = p.A.getAttenuation(),
                        i = p.A.getAttenuateWhileSpeakingSelf(),
                        a = p.A.getAttenuateWhileSpeakingOthers();
                    return r !== e
                        ? (0, c.A)("global_attenuation_strength", e, r)
                        : i !== t
                          ? (0, c.A)("global_attenuation_for_self_speak_enabled", t, i)
                          : a !== n && (0, c.A)("global_attenuation_for_other_speak_enabled", n, a);
                })(),
                a.h.dispatch({
                    type: "AUDIO_SET_ATTENUATION",
                    attenuation: e,
                    attenuateWhileSpeakingSelf: t,
                    attenuateWhileSpeakingOthers: n,
                }));
        },
        setQoS(e) {
            P() ||
                ((0, c.A)("quality_of_service_packets_enabled", e, p.A.getQoS()),
                a.h.dispatch({
                    type: "AUDIO_SET_QOS",
                    enabled: e,
                }));
        },
        reset() {
            P() || a.h.dispatch({ type: "AUDIO_RESET" });
        },
        setSilenceWarning(e) {
            P() ||
                ((0, c.A)("silence_warning_enabled", e, p.A.getEnableSilenceWarning()),
                a.h.dispatch({
                    type: "AUDIO_SET_DISPLAY_SILENCE_WARNING",
                    enabled: e,
                }));
        },
        async setDebugLogging(e) {
            P() ||
                (await (0, c.A)("debug_logging_enabled", e, p.A.getDebugLogging()),
                a.h.dispatch({
                    type: "AUDIO_SET_DEBUG_LOGGING",
                    enabled: e,
                }));
        },
        setVideoHook(e) {
            P() ||
                ((0, c.A)("video_hook_enabled", e, p.A.getVideoHook()),
                a.h.dispatch({
                    type: "MEDIA_ENGINE_SET_VIDEO_HOOK",
                    enabled: e,
                }));
        },
        setExperimentalSoundshare(e) {
            P() ||
                ((0, c.A)("experimental_soundshare_enabled", e, p.A.getExperimentalSoundshare()),
                a.h.dispatch({
                    type: "MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE",
                    enabled: e,
                }));
        },
        setUseSystemScreensharePicker(e) {
            P() ||
                ((0, c.A)("system_screenshare_picker_enabled", e, p.A.getUseSystemScreensharePicker()),
                a.h.dispatch({
                    type: "MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER",
                    enabled: e,
                }));
        },
        async setAudioSubsystem(e) {
            P() ||
                (await (0, c.A)("audio_subsystem", e, p.A.getAudioSubsystem()),
                a.h.dispatch({
                    type: "AUDIO_SET_SUBSYSTEM",
                    subsystem: e,
                }));
        },
        setVideoEnabled(e) {
            (0, u.PX)(),
                a.h.dispatch({
                    type: "MEDIA_ENGINE_SET_VIDEO_ENABLED",
                    enabled: e,
                });
        },
        setGoLiveSource(e) {
            (null == e ? void 0 : e.qualityOptions) != null &&
                (0, E.K2)(e.qualityOptions.preset, e.qualityOptions.resolution, e.qualityOptions.frameRate),
                a.h.dispatch({
                    type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                    settings: e,
                });
        },
        setAecDump(e) {
            P() ||
                ((0, c.A)("diagnostic_audio_recording_enabled", e, p.A.getAecDump()),
                a.h.dispatch({
                    type: "MEDIA_ENGINE_SET_AEC_DUMP",
                    enabled: e,
                }));
        },
        interact() {
            P() ||
                a.h.dispatch({
                    type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
                    required: !1,
                });
        },
        setEnableHardwareMuteNotice(e) {
            P() ||
                a.h.dispatch({
                    type: "MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE",
                    enabled: e,
                });
        },
        setKrispSuppressionLevel(e) {
            P() ||
                a.h.dispatch({
                    type: "AUDIO_SET_KRISP_SUPPRESSION_LEVEL",
                    level: e,
                });
        },
        setKrispModelOverride(e) {
            !P() &&
                (a.h.dispatch({
                    type: "AUDIO_SET_KRISP_MODEL_OVERRIDE",
                    model: e,
                }),
                p.A.getNoiseCancellation() && (this.setNoiseCancellation(!1), this.setNoiseCancellation(!0)));
        },
        setNoiseCancellationEnableStats(e) {
            P() ||
                a.h.dispatch({
                    type: "AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS",
                    enabled: e,
                });
        },
        resetMediaEngineSettings: (e) =>
            a.h.dispatch({
                type: "MEDIA_ENGINE_RESET_SETTINGS",
                overrides: e,
            }),
    };
