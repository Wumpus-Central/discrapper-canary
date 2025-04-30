n.d(t, { Z: () => P });
var r = n(570140),
    i = n(710845),
    o = n(460181),
    a = n(340332),
    s = n(569550),
    l = n(672339),
    c = n(463395),
    u = n(592125),
    d = n(131951),
    f = n(944486),
    _ = n(594174),
    p = n(626135),
    h = n(557457),
    m = n(981631),
    g = n(509571),
    E = n(65154);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
let O = new i.Z('AudioActionCreators');
function v() {
    (0, o.GN)('mention3', void 0, void 0, void 0, g.w.VOICE);
}
function I() {
    let e = d.Z.getInputDevices()[d.Z.getInputDeviceId()];
    return null != e ? e.name : '';
}
function S(e, t, n, r) {
    let { location: i, analyticsLocations: o } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    if (t === n) return;
    let a = f.Z.getVoiceChannelId(),
        s = null != a ? u.Z.getChannel(a) : null,
        l = e[t],
        _ = e[n],
        h = d.Z.getMediaEngine().getAudioSubsystem(),
        g = d.Z.getMediaEngine().getAudioLayer();
    p.default.track(m.rMx.MEDIA_DEVICE_CHANGED, {
        device_from_name: c.Z.getCertifiedDeviceName(t, null != l ? l.name : ''),
        device_to_name: c.Z.getCertifiedDeviceName(n, null != _ ? _.name : ''),
        device_type: r,
        device_is_certified: c.Z.isCertified(n),
        location: i,
        location_stack: o,
        voice_channel_type: null == s ? void 0 : s.type,
        audio_subsystem: h,
        audio_layer: g
    });
}
let T = {
        isNotSupported: () => !1,
        enable: (e) => Promise.resolve(!0),
        trackToggleSelfMute(e) {},
        trackToggleSelfDeaf(e) {}
    },
    { enable: A, isNotSupported: N, trackToggleSelfMute: C, trackToggleSelfDeaf: R } = (T = n(929782)),
    P = {
        enable: A,
        toggleSelfMute() {
            var e;
            let { context: t = E.Yn.DEFAULT, syncRemote: n = !0, usedKeybind: i = !1, playSoundEffect: o = !0, location: a } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return N()
                ? Promise.resolve()
                : (C({
                        usedKeybind: i,
                        location: a
                    }),
                    (o = o && !d.Z.hasActiveCallKitCall()),
                    (null == (e = _.default.getCurrentUser()) ? void 0 : e.isStaff()) && O.info('Toggling self mute'),
                    d.Z.isEnabled())
                  ? r.Z.dispatch({
                        type: 'AUDIO_TOGGLE_SELF_MUTE',
                        context: t,
                        syncRemote: n,
                        playSoundEffect: o
                    })
                  : this.enable(!0);
        },
        setSelfMute(e, t) {
            var n;
            let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
            N() ||
                ((i = i && !d.Z.hasActiveCallKitCall()),
                (null == (n = _.default.getCurrentUser()) ? void 0 : n.isStaff()) && O.info('Setting self mute', t),
                r.Z.dispatch({
                    type: 'AUDIO_SET_SELF_MUTE',
                    context: e,
                    mute: t,
                    playSoundEffect: i
                }));
        },
        setTemporarySelfMute(e) {
            var t;
            N() ||
                ((null == (t = _.default.getCurrentUser()) ? void 0 : t.isStaff()) && O.info('Setting temporary self mute', e),
                r.Z.dispatch({
                    type: 'AUDIO_SET_TEMPORARY_SELF_MUTE',
                    mute: e
                }));
        },
        toggleSelfDeaf() {
            let { context: e = E.Yn.DEFAULT, syncRemote: t = !0, usedKeybind: n = !1, location: i } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            N() ||
                (R({
                    usedKeybind: n,
                    location: i
                }),
                r.Z.dispatch({
                    type: 'AUDIO_TOGGLE_SELF_DEAF',
                    context: e,
                    syncRemote: t
                }));
        },
        toggleLocalMute(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E.Yn.DEFAULT;
            N() ||
                r.Z.dispatch({
                    type: 'AUDIO_TOGGLE_LOCAL_MUTE',
                    context: t,
                    userId: e
                });
        },
        toggleLocalSoundboardMute(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E.Yn.DEFAULT;
            r.Z.dispatch({
                type: 'AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE',
                context: t,
                userId: e
            });
        },
        setDisableLocalVideo(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.Yn.DEFAULT,
                i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            N() ||
                r.Z.dispatch({
                    type: 'AUDIO_SET_LOCAL_VIDEO_DISABLED',
                    context: n,
                    userId: e,
                    videoToggleState: t,
                    persist: i,
                    isAutomatic: o
                });
        },
        setLocalVolume(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.Yn.DEFAULT;
            r.Z.dispatch({
                type: 'AUDIO_SET_LOCAL_VOLUME',
                context: n,
                userId: e,
                volume: (0, a.r)(t, n)
            });
        },
        setLocalPan(e, t, n) {
            let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : E.Yn.DEFAULT;
            r.Z.dispatch({
                type: 'AUDIO_SET_LOCAL_PAN',
                context: i,
                userId: e,
                left: t,
                right: n
            });
        },
        setMode(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.Yn.DEFAULT,
                { analyticsLocations: i } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            if (N()) return;
            let o = e !== d.Z.getMode(),
                a = d.Z.getModeOptions(n);
            if (
                (r.Z.dispatch({
                    type: 'AUDIO_SET_MODE',
                    context: n,
                    mode: e,
                    options: y({}, a, t)
                }),
                o)
            ) {
                let t = d.Z.getMediaEngine().getAudioSubsystem(),
                    n = d.Z.getMediaEngine().getAudioLayer(),
                    r = f.Z.getVoiceChannelId(),
                    o = null != r ? u.Z.getChannel(r) : null,
                    a = I();
                p.default.track(m.rMx.VOICE_ACTIVATION_MODE_CHANGED, {
                    mode: e,
                    location_stack: i,
                    voice_channel_type: null == o ? void 0 : o.type,
                    input_device_name: a,
                    audio_subsystem: t,
                    audio_layer: n
                });
            } else if (e === m.pM4.VOICE_ACTIVITY && a !== t) {
                let e = d.Z.getMediaEngine().getAudioSubsystem(),
                    n = d.Z.getMediaEngine().getAudioLayer(),
                    r = f.Z.getVoiceChannelId(),
                    o = null != r ? u.Z.getChannel(r) : null,
                    s = I();
                p.default.track(m.rMx.VOICE_ACTIVITY_THRESHOLD_CHANGED, {
                    location_stack: i,
                    voice_channel_type: null == o ? void 0 : o.type,
                    input_device_name: s,
                    audio_subsystem: e,
                    audio_layer: n,
                    old_threshold: a.threshold,
                    new_threshold: t.threshold,
                    old_auto_threshold: a.autoThreshold,
                    new_auto_threshold: t.autoThreshold
                });
            }
        },
        setInputVolume(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (N()) return;
            r.Z.dispatch({
                type: 'AUDIO_SET_INPUT_VOLUME',
                volume: e
            });
            let n = f.Z.getVoiceChannelId(),
                i = null != n ? u.Z.getChannel(n) : null;
            p.default.track(m.rMx.MEDIA_INPUT_VOLUME_CHANGED, {
                volume: e,
                location_stack: t,
                voice_channel_type: null == i ? void 0 : i.type
            });
        },
        setOutputVolume(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (N()) return;
            r.Z.dispatch({
                type: 'AUDIO_SET_OUTPUT_VOLUME',
                volume: e
            });
            let n = f.Z.getVoiceChannelId(),
                i = null != n ? u.Z.getChannel(n) : null;
            p.default.track(m.rMx.MEDIA_OUTPUT_VOLUME_CHANGED, {
                volume: e,
                location_stack: t,
                voice_channel_type: null == i ? void 0 : i.type
            });
        },
        setInputDevice(e) {
            let { location: t, analyticsLocations: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            N() ||
                ((null != t || null != n) &&
                    S(d.Z.getInputDevices(), d.Z.getInputDeviceId(), e, 'Audio Input', {
                        location: t,
                        analyticsLocations: n
                    }),
                r.Z.dispatch({
                    type: 'AUDIO_SET_INPUT_DEVICE',
                    id: e
                }),
                v());
        },
        setOutputDevice(e) {
            let { location: t, analyticsLocations: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            N() ||
                ((null != t || null != n) &&
                    S(d.Z.getOutputDevices(), d.Z.getOutputDeviceId(), e, 'Audio Output', {
                        location: t,
                        analyticsLocations: n
                    }),
                r.Z.dispatch({
                    type: 'AUDIO_SET_OUTPUT_DEVICE',
                    id: e
                }),
                v());
        },
        setVideoDevice(e) {
            let { location: t, analyticsLocations: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            N() ||
                ((null != t || null != n) &&
                    S(d.Z.getVideoDevices(), d.Z.getVideoDeviceId(), e, 'Video', {
                        location: t,
                        analyticsLocations: n
                    }),
                r.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_VIDEO_DEVICE',
                    id: e
                }));
        },
        setEchoCancellation(e, t) {
            N() ||
                r.Z.dispatch({
                    type: 'AUDIO_SET_ECHO_CANCELLATION',
                    enabled: e,
                    location: t
                });
        },
        setSidechainCompression(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            N() ||
                ((0, s.Z)('stream_attenuation_enabled', e, d.Z.getSidechainCompression(), t),
                r.Z.dispatch({
                    type: 'AUDIO_SET_SIDECHAIN_COMPRESSION',
                    enabled: e
                }));
        },
        setSidechainCompressionStrength(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            N() ||
                ((0, s.Z)('stream_attenuation_strength', e, d.Z.getSidechainCompressionStrength(), t),
                r.Z.dispatch({
                    type: 'AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH',
                    strength: e
                }));
        },
        setLoopback(e, t) {
            N() ||
                r.Z.dispatch({
                    type: 'AUDIO_SET_LOOPBACK',
                    loopbackReason: e,
                    enabled: t
                });
        },
        setNoiseSuppression(e, t) {
            N() ||
                r.Z.dispatch({
                    type: 'AUDIO_SET_NOISE_SUPPRESSION',
                    enabled: e,
                    location: t
                });
        },
        setNoiseCancellation(e, t) {
            N() ||
                (r.Z.dispatch({
                    type: 'AUDIO_SET_NOISE_CANCELLATION',
                    enabled: e,
                    location: t
                }),
                r.Z.dispatch({
                    type: 'AUDIO_SET_NOISE_SUPPRESSION',
                    enabled: !e,
                    location: t
                }));
        },
        setAutomaticGainControl(e, t) {
            N() ||
                r.Z.dispatch({
                    type: 'AUDIO_SET_AUTOMATIC_GAIN_CONTROL',
                    enabled: e,
                    location: t
                });
        },
        setExperimentalEncoders(e) {
            N() ||
                ((0, s.Z)('experimental_encoders_enabled', e, d.Z.getExperimentalEncoders()),
                r.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS',
                    enabled: e
                }));
        },
        setHardwareEncoding(e) {
            N() ||
                ((0, s.Z)('hardware_acceleration_enabled', e, d.Z.getHardwareEncoding()),
                r.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_HARDWARE_ENCODING',
                    enabled: e
                }));
        },
        setAttenuation(e, t, n) {
            N() ||
                ((() => {
                    let r = d.Z.getAttenuation(),
                        i = d.Z.getAttenuateWhileSpeakingSelf(),
                        o = d.Z.getAttenuateWhileSpeakingOthers();
                    return r !== e ? (0, s.Z)('global_attenuation_strength', e, r) : i !== t ? (0, s.Z)('global_attenuation_for_self_speak_enabled', t, i) : o !== n && (0, s.Z)('global_attenuation_for_other_speak_enabled', n, o);
                })(),
                r.Z.dispatch({
                    type: 'AUDIO_SET_ATTENUATION',
                    attenuation: e,
                    attenuateWhileSpeakingSelf: t,
                    attenuateWhileSpeakingOthers: n
                }));
        },
        setQoS(e) {
            N() ||
                ((0, s.Z)('quality_of_service_packets_enabled', e, d.Z.getQoS()),
                r.Z.dispatch({
                    type: 'AUDIO_SET_QOS',
                    enabled: e
                }));
        },
        reset() {
            N() || r.Z.dispatch({ type: 'AUDIO_RESET' });
        },
        setSilenceWarning(e) {
            N() ||
                ((0, s.Z)('silence_warning_enabled', e, d.Z.getEnableSilenceWarning()),
                r.Z.dispatch({
                    type: 'AUDIO_SET_DISPLAY_SILENCE_WARNING',
                    enabled: e
                }));
        },
        async setDebugLogging(e) {
            N() ||
                (await (0, s.Z)('debug_logging_enabled', e, d.Z.getDebugLogging()),
                r.Z.dispatch({
                    type: 'AUDIO_SET_DEBUG_LOGGING',
                    enabled: e
                }));
        },
        setVideoHook(e) {
            N() ||
                ((0, s.Z)('video_hook_enabled', e, d.Z.getVideoHook()),
                r.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_VIDEO_HOOK',
                    enabled: e
                }));
        },
        setExperimentalSoundshare(e) {
            N() ||
                ((0, s.Z)('experimental_soundshare_enabled', e, d.Z.getExperimentalSoundshare()),
                r.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE',
                    enabled: e
                }));
        },
        setUseSystemScreensharePicker(e) {
            N() ||
                ((0, s.Z)('system_screenshare_picker_enabled', e, d.Z.getUseSystemScreensharePicker()),
                r.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER',
                    enabled: e
                }));
        },
        async setAudioSubsystem(e) {
            N() ||
                (await (0, s.Z)('audio_subsystem', e, d.Z.getAudioSubsystem()),
                r.Z.dispatch({
                    type: 'AUDIO_SET_SUBSYSTEM',
                    subsystem: e
                }));
        },
        setVideoEnabled(e) {
            (0, l.eH)(),
                r.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_VIDEO_ENABLED',
                    enabled: e
                });
        },
        setGoLiveSource(e) {
            (null == e ? void 0 : e.qualityOptions) != null && (0, h.Ye)(e.qualityOptions.preset, e.qualityOptions.resolution, e.qualityOptions.frameRate),
                r.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                    settings: e
                });
        },
        setOpenH264(e) {
            N() ||
                ((0, s.Z)('open_h264_enabled', e, d.Z.getOpenH264()),
                r.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_OPEN_H264',
                    enabled: e
                }));
        },
        setAecDump(e) {
            N() ||
                ((0, s.Z)('diagnostic_audio_recording_enabled', e, d.Z.getAecDump()),
                r.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_AEC_DUMP',
                    enabled: e
                }));
        },
        interact() {
            N() ||
                r.Z.dispatch({
                    type: 'MEDIA_ENGINE_INTERACTION_REQUIRED',
                    required: !1
                });
        },
        setEnableHardwareMuteNotice(e) {
            N() ||
                r.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE',
                    enabled: e
                });
        }
    };
