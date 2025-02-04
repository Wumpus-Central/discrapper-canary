n.d(t, { Z: () => S });
var i = n(570140),
    r = n(340332),
    a = n(569550),
    s = n(672339),
    o = n(463395),
    l = n(592125),
    u = n(131951),
    c = n(944486),
    d = n(626135),
    f = n(557177),
    _ = n(557457),
    p = n(981631),
    h = n(65154);
function m() {
    (0, f.GN)('mention3');
}
function g() {
    let e = u.Z.getInputDevices()[u.Z.getInputDeviceId()];
    return null != e ? e.name : '';
}
function E(e, t, n, i) {
    let { location: r, analyticsLocations: a } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    if (t === n) return;
    let s = c.Z.getVoiceChannelId(),
        f = null != s ? l.Z.getChannel(s) : null,
        _ = e[t],
        h = e[n],
        m = u.Z.getMediaEngine().getAudioSubsystem(),
        g = u.Z.getMediaEngine().getAudioLayer();
    d.default.track(p.rMx.MEDIA_DEVICE_CHANGED, {
        device_from_name: o.Z.getCertifiedDeviceName(t, null != _ ? _.name : ''),
        device_to_name: o.Z.getCertifiedDeviceName(n, null != h ? h.name : ''),
        device_type: i,
        device_is_certified: o.Z.isCertified(n),
        location: r,
        location_stack: a,
        voice_channel_type: null == f ? void 0 : f.type,
        audio_subsystem: m,
        audio_layer: g
    });
}
let v = {
        isNotSupported: () => !1,
        enable: (e) => Promise.resolve(!0),
        trackToggleSelfMute(e) {},
        trackToggleSelfDeaf(e) {}
    },
    { enable: y, isNotSupported: I, trackToggleSelfMute: b, trackToggleSelfDeaf: T } = (v = n(929782)),
    S = {
        enable: y,
        toggleSelfMute() {
            let { context: e = h.Yn.DEFAULT, syncRemote: t = !0, usedKeybind: n = !1, playSoundEffect: r = !0, location: a } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return I()
                ? Promise.resolve()
                : (b({
                        usedKeybind: n,
                        location: a
                    }),
                    u.Z.isEnabled())
                  ? i.Z.dispatch({
                        type: 'AUDIO_TOGGLE_SELF_MUTE',
                        context: e,
                        syncRemote: t,
                        skipMuteUnmuteSoundEffect: !r
                    })
                  : this.enable(!0);
        },
        setSelfMute(e, t) {
            I() ||
                i.Z.dispatch({
                    type: 'AUDIO_SET_SELF_MUTE',
                    context: e,
                    mute: t
                });
        },
        setTemporarySelfMute(e) {
            I() ||
                i.Z.dispatch({
                    type: 'AUDIO_SET_TEMPORARY_SELF_MUTE',
                    mute: e
                });
        },
        toggleSelfDeaf() {
            let { context: e = h.Yn.DEFAULT, syncRemote: t = !0, usedKeybind: n = !1, location: r } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            I() ||
                (T({
                    usedKeybind: n,
                    location: r
                }),
                i.Z.dispatch({
                    type: 'AUDIO_TOGGLE_SELF_DEAF',
                    context: e,
                    syncRemote: t
                }));
        },
        toggleLocalMute(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h.Yn.DEFAULT;
            I() ||
                i.Z.dispatch({
                    type: 'AUDIO_TOGGLE_LOCAL_MUTE',
                    context: t,
                    userId: e
                });
        },
        toggleLocalSoundboardMute(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h.Yn.DEFAULT;
            i.Z.dispatch({
                type: 'AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE',
                context: t,
                userId: e
            });
        },
        setDisableLocalVideo(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : h.Yn.DEFAULT,
                r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            I() ||
                i.Z.dispatch({
                    type: 'AUDIO_SET_LOCAL_VIDEO_DISABLED',
                    context: n,
                    userId: e,
                    videoToggleState: t,
                    persist: r,
                    isAutomatic: a
                });
        },
        setLocalVolume(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : h.Yn.DEFAULT;
            i.Z.dispatch({
                type: 'AUDIO_SET_LOCAL_VOLUME',
                context: n,
                userId: e,
                volume: (0, r.r)(t, n)
            });
        },
        setLocalPan(e, t, n) {
            let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : h.Yn.DEFAULT;
            i.Z.dispatch({
                type: 'AUDIO_SET_LOCAL_PAN',
                context: r,
                userId: e,
                left: t,
                right: n
            });
        },
        setMode(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : h.Yn.DEFAULT,
                { analyticsLocations: r } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            if (I()) return;
            let a = e !== u.Z.getMode(),
                s = u.Z.getModeOptions(n);
            if (
                (i.Z.dispatch({
                    type: 'AUDIO_SET_MODE',
                    context: n,
                    mode: e,
                    options: {
                        ...s,
                        ...t
                    }
                }),
                a)
            ) {
                let t = u.Z.getMediaEngine().getAudioSubsystem(),
                    n = u.Z.getMediaEngine().getAudioLayer(),
                    i = c.Z.getVoiceChannelId(),
                    a = null != i ? l.Z.getChannel(i) : null,
                    s = g();
                d.default.track(p.rMx.VOICE_ACTIVATION_MODE_CHANGED, {
                    mode: e,
                    location_stack: r,
                    voice_channel_type: null == a ? void 0 : a.type,
                    input_device_name: s,
                    audio_subsystem: t,
                    audio_layer: n
                });
            } else if (e === p.pM4.VOICE_ACTIVITY && s !== t) {
                let e = u.Z.getMediaEngine().getAudioSubsystem(),
                    n = u.Z.getMediaEngine().getAudioLayer(),
                    i = c.Z.getVoiceChannelId(),
                    a = null != i ? l.Z.getChannel(i) : null,
                    o = g();
                d.default.track(p.rMx.VOICE_ACTIVITY_THRESHOLD_CHANGED, {
                    location_stack: r,
                    voice_channel_type: null == a ? void 0 : a.type,
                    input_device_name: o,
                    audio_subsystem: e,
                    audio_layer: n,
                    old_threshold: s.threshold,
                    new_threshold: t.threshold,
                    old_auto_threshold: s.autoThreshold,
                    new_auto_threshold: t.autoThreshold
                });
            }
        },
        setInputVolume(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (I()) return;
            i.Z.dispatch({
                type: 'AUDIO_SET_INPUT_VOLUME',
                volume: e
            });
            let n = c.Z.getVoiceChannelId(),
                r = null != n ? l.Z.getChannel(n) : null;
            d.default.track(p.rMx.MEDIA_INPUT_VOLUME_CHANGED, {
                volume: e,
                location_stack: t,
                voice_channel_type: null == r ? void 0 : r.type
            });
        },
        setOutputVolume(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (I()) return;
            i.Z.dispatch({
                type: 'AUDIO_SET_OUTPUT_VOLUME',
                volume: e
            });
            let n = c.Z.getVoiceChannelId(),
                r = null != n ? l.Z.getChannel(n) : null;
            d.default.track(p.rMx.MEDIA_OUTPUT_VOLUME_CHANGED, {
                volume: e,
                location_stack: t,
                voice_channel_type: null == r ? void 0 : r.type
            });
        },
        setInputDevice(e) {
            let { location: t, analyticsLocations: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            !I() &&
                ((null != t || null != n) &&
                    E(u.Z.getInputDevices(), u.Z.getInputDeviceId(), e, 'Audio Input', {
                        location: t,
                        analyticsLocations: n
                    }),
                i.Z.dispatch({
                    type: 'AUDIO_SET_INPUT_DEVICE',
                    id: e
                }),
                m());
        },
        setOutputDevice(e) {
            let { location: t, analyticsLocations: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            !I() &&
                ((null != t || null != n) &&
                    E(u.Z.getOutputDevices(), u.Z.getOutputDeviceId(), e, 'Audio Output', {
                        location: t,
                        analyticsLocations: n
                    }),
                i.Z.dispatch({
                    type: 'AUDIO_SET_OUTPUT_DEVICE',
                    id: e
                }),
                m());
        },
        setVideoDevice(e) {
            let { location: t, analyticsLocations: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            !I() &&
                ((null != t || null != n) &&
                    E(u.Z.getVideoDevices(), u.Z.getVideoDeviceId(), e, 'Video', {
                        location: t,
                        analyticsLocations: n
                    }),
                i.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_VIDEO_DEVICE',
                    id: e
                }));
        },
        setEchoCancellation(e, t) {
            I() ||
                i.Z.dispatch({
                    type: 'AUDIO_SET_ECHO_CANCELLATION',
                    enabled: e,
                    location: t
                });
        },
        setSidechainCompression(e) {
            I() ||
                ((0, a.Z)('stream_attenuation_enabled', e, u.Z.getSidechainCompression()),
                i.Z.dispatch({
                    type: 'AUDIO_SET_SIDECHAIN_COMPRESSION',
                    enabled: e
                }));
        },
        setSidechainCompressionStrength(e) {
            I() ||
                ((0, a.Z)('stream_attenuation_strength', e, u.Z.getSidechainCompressionStrength()),
                i.Z.dispatch({
                    type: 'AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH',
                    strength: e
                }));
        },
        setLoopback(e) {
            I() ||
                i.Z.dispatch({
                    type: 'AUDIO_SET_LOOPBACK',
                    enabled: e
                });
        },
        setNoiseSuppression(e, t) {
            I() ||
                i.Z.dispatch({
                    type: 'AUDIO_SET_NOISE_SUPPRESSION',
                    enabled: e,
                    location: t
                });
        },
        setNoiseCancellation(e, t) {
            I() ||
                (i.Z.dispatch({
                    type: 'AUDIO_SET_NOISE_CANCELLATION',
                    enabled: e,
                    location: t
                }),
                i.Z.dispatch({
                    type: 'AUDIO_SET_NOISE_SUPPRESSION',
                    enabled: !e,
                    location: t
                }));
        },
        setAutomaticGainControl(e, t) {
            I() ||
                i.Z.dispatch({
                    type: 'AUDIO_SET_AUTOMATIC_GAIN_CONTROL',
                    enabled: e,
                    location: t
                });
        },
        setExperimentalEncoders(e) {
            I() ||
                ((0, a.Z)('experimental_encoders_enabled', e, u.Z.getExperimentalEncoders()),
                i.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS',
                    enabled: e
                }));
        },
        setHardwareEncoding(e) {
            I() ||
                ((0, a.Z)('hardware_acceleration_enabled', e, u.Z.getHardwareEncoding()),
                i.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_HARDWARE_ENCODING',
                    enabled: e
                }));
        },
        setAttenuation(e, t, n) {
            I() ||
                ((() => {
                    let i = u.Z.getAttenuation(),
                        r = u.Z.getAttenuateWhileSpeakingSelf(),
                        s = u.Z.getAttenuateWhileSpeakingOthers();
                    return i !== e ? (0, a.Z)('global_attenuation_strength', e, i) : r !== t ? (0, a.Z)('global_attenuation_for_self_speak_enabled', t, r) : s !== n ? (0, a.Z)('global_attenuation_for_other_speak_enabled', n, s) : void 0;
                })(),
                i.Z.dispatch({
                    type: 'AUDIO_SET_ATTENUATION',
                    attenuation: e,
                    attenuateWhileSpeakingSelf: t,
                    attenuateWhileSpeakingOthers: n
                }));
        },
        setQoS(e) {
            I() ||
                ((0, a.Z)('quality_of_service_packets_enabled', e, u.Z.getQoS()),
                i.Z.dispatch({
                    type: 'AUDIO_SET_QOS',
                    enabled: e
                }));
        },
        reset() {
            I() || i.Z.dispatch({ type: 'AUDIO_RESET' });
        },
        setSilenceWarning(e) {
            I() ||
                ((0, a.Z)('silence_warning_enabled', e, u.Z.getEnableSilenceWarning()),
                i.Z.dispatch({
                    type: 'AUDIO_SET_DISPLAY_SILENCE_WARNING',
                    enabled: e
                }));
        },
        async setDebugLogging(e) {
            I() ||
                (await (0, a.Z)('debug_logging_enabled', e, u.Z.getDebugLogging()),
                i.Z.dispatch({
                    type: 'AUDIO_SET_DEBUG_LOGGING',
                    enabled: e
                }));
        },
        setVideoHook(e) {
            I() ||
                ((0, a.Z)('video_hook_enabled', e, u.Z.getVideoHook()),
                i.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_VIDEO_HOOK',
                    enabled: e
                }));
        },
        setExperimentalSoundshare(e) {
            I() ||
                ((0, a.Z)('experimental_soundshare_enabled', e, u.Z.getExperimentalSoundshare()),
                i.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE',
                    enabled: e
                }));
        },
        setUseSystemScreensharePicker(e) {
            I() ||
                ((0, a.Z)('system_screenshare_picker_enabled', e, u.Z.getUseSystemScreensharePicker()),
                i.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER',
                    enabled: e
                }));
        },
        async setAudioSubsystem(e) {
            I() ||
                (await (0, a.Z)('audio_subsystem', e, u.Z.getAudioSubsystem()),
                i.Z.dispatch({
                    type: 'AUDIO_SET_SUBSYSTEM',
                    subsystem: e
                }));
        },
        setVideoEnabled(e) {
            (0, s.eH)(),
                i.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_VIDEO_ENABLED',
                    enabled: e
                });
        },
        setGoLiveSource(e) {
            (null == e ? void 0 : e.qualityOptions) != null && (0, _.Ye)(e.qualityOptions.preset, e.qualityOptions.resolution, e.qualityOptions.frameRate),
                i.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                    settings: e
                });
        },
        setOpenH264(e) {
            I() ||
                ((0, a.Z)('open_h264_enabled', e, u.Z.getOpenH264()),
                i.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_OPEN_H264',
                    enabled: e
                }));
        },
        setAecDump(e) {
            I() ||
                ((0, a.Z)('diagnostic_audio_recording_enabled', e, u.Z.getAecDump()),
                i.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_AEC_DUMP',
                    enabled: e
                }));
        },
        interact() {
            I() ||
                i.Z.dispatch({
                    type: 'MEDIA_ENGINE_INTERACTION_REQUIRED',
                    required: !1
                });
        },
        setEnableHardwareMuteNotice(e) {
            I() ||
                i.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE',
                    enabled: e
                });
        }
    };
