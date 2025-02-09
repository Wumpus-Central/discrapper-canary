n.d(t, { Z: () => A });
var i = n(570140),
    r = n(460181),
    a = n(340332),
    s = n(569550),
    o = n(672339),
    l = n(463395),
    u = n(592125),
    c = n(131951),
    d = n(944486),
    f = n(626135),
    _ = n(557457),
    p = n(981631),
    h = n(509571),
    m = n(65154);
function g() {
    (0, r.GN)('mention3', void 0, void 0, void 0, h.w.VOICE);
}
function E() {
    let e = c.Z.getInputDevices()[c.Z.getInputDeviceId()];
    return null != e ? e.name : '';
}
function v(e, t, n, i) {
    let { location: r, analyticsLocations: a } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    if (t === n) return;
    let s = d.Z.getVoiceChannelId(),
        o = null != s ? u.Z.getChannel(s) : null,
        _ = e[t],
        h = e[n],
        m = c.Z.getMediaEngine().getAudioSubsystem(),
        g = c.Z.getMediaEngine().getAudioLayer();
    f.default.track(p.rMx.MEDIA_DEVICE_CHANGED, {
        device_from_name: l.Z.getCertifiedDeviceName(t, null != _ ? _.name : ''),
        device_to_name: l.Z.getCertifiedDeviceName(n, null != h ? h.name : ''),
        device_type: i,
        device_is_certified: l.Z.isCertified(n),
        location: r,
        location_stack: a,
        voice_channel_type: null == o ? void 0 : o.type,
        audio_subsystem: m,
        audio_layer: g
    });
}
let y = {
        isNotSupported: () => !1,
        enable: (e) => Promise.resolve(!0),
        trackToggleSelfMute(e) {},
        trackToggleSelfDeaf(e) {}
    },
    { enable: I, isNotSupported: T, trackToggleSelfMute: b, trackToggleSelfDeaf: S } = (y = n(929782)),
    A = {
        enable: I,
        toggleSelfMute() {
            let { context: e = m.Yn.DEFAULT, syncRemote: t = !0, usedKeybind: n = !1, playSoundEffect: r = !0, location: a } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return T()
                ? Promise.resolve()
                : (b({
                        usedKeybind: n,
                        location: a
                    }),
                    c.Z.isEnabled())
                  ? i.Z.dispatch({
                        type: 'AUDIO_TOGGLE_SELF_MUTE',
                        context: e,
                        syncRemote: t,
                        skipMuteUnmuteSoundEffect: !r
                    })
                  : this.enable(!0);
        },
        setSelfMute(e, t) {
            T() ||
                i.Z.dispatch({
                    type: 'AUDIO_SET_SELF_MUTE',
                    context: e,
                    mute: t
                });
        },
        setTemporarySelfMute(e) {
            T() ||
                i.Z.dispatch({
                    type: 'AUDIO_SET_TEMPORARY_SELF_MUTE',
                    mute: e
                });
        },
        toggleSelfDeaf() {
            let { context: e = m.Yn.DEFAULT, syncRemote: t = !0, usedKeybind: n = !1, location: r } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            T() ||
                (S({
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
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m.Yn.DEFAULT;
            T() ||
                i.Z.dispatch({
                    type: 'AUDIO_TOGGLE_LOCAL_MUTE',
                    context: t,
                    userId: e
                });
        },
        toggleLocalSoundboardMute(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m.Yn.DEFAULT;
            i.Z.dispatch({
                type: 'AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE',
                context: t,
                userId: e
            });
        },
        setDisableLocalVideo(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : m.Yn.DEFAULT,
                r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            T() ||
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
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : m.Yn.DEFAULT;
            i.Z.dispatch({
                type: 'AUDIO_SET_LOCAL_VOLUME',
                context: n,
                userId: e,
                volume: (0, a.r)(t, n)
            });
        },
        setLocalPan(e, t, n) {
            let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : m.Yn.DEFAULT;
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
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : m.Yn.DEFAULT,
                { analyticsLocations: r } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            if (T()) return;
            let a = e !== c.Z.getMode(),
                s = c.Z.getModeOptions(n);
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
                let t = c.Z.getMediaEngine().getAudioSubsystem(),
                    n = c.Z.getMediaEngine().getAudioLayer(),
                    i = d.Z.getVoiceChannelId(),
                    a = null != i ? u.Z.getChannel(i) : null,
                    s = E();
                f.default.track(p.rMx.VOICE_ACTIVATION_MODE_CHANGED, {
                    mode: e,
                    location_stack: r,
                    voice_channel_type: null == a ? void 0 : a.type,
                    input_device_name: s,
                    audio_subsystem: t,
                    audio_layer: n
                });
            } else if (e === p.pM4.VOICE_ACTIVITY && s !== t) {
                let e = c.Z.getMediaEngine().getAudioSubsystem(),
                    n = c.Z.getMediaEngine().getAudioLayer(),
                    i = d.Z.getVoiceChannelId(),
                    a = null != i ? u.Z.getChannel(i) : null,
                    o = E();
                f.default.track(p.rMx.VOICE_ACTIVITY_THRESHOLD_CHANGED, {
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
            if (T()) return;
            i.Z.dispatch({
                type: 'AUDIO_SET_INPUT_VOLUME',
                volume: e
            });
            let n = d.Z.getVoiceChannelId(),
                r = null != n ? u.Z.getChannel(n) : null;
            f.default.track(p.rMx.MEDIA_INPUT_VOLUME_CHANGED, {
                volume: e,
                location_stack: t,
                voice_channel_type: null == r ? void 0 : r.type
            });
        },
        setOutputVolume(e) {
            let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (T()) return;
            i.Z.dispatch({
                type: 'AUDIO_SET_OUTPUT_VOLUME',
                volume: e
            });
            let n = d.Z.getVoiceChannelId(),
                r = null != n ? u.Z.getChannel(n) : null;
            f.default.track(p.rMx.MEDIA_OUTPUT_VOLUME_CHANGED, {
                volume: e,
                location_stack: t,
                voice_channel_type: null == r ? void 0 : r.type
            });
        },
        setInputDevice(e) {
            let { location: t, analyticsLocations: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            !T() &&
                ((null != t || null != n) &&
                    v(c.Z.getInputDevices(), c.Z.getInputDeviceId(), e, 'Audio Input', {
                        location: t,
                        analyticsLocations: n
                    }),
                i.Z.dispatch({
                    type: 'AUDIO_SET_INPUT_DEVICE',
                    id: e
                }),
                g());
        },
        setOutputDevice(e) {
            let { location: t, analyticsLocations: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            !T() &&
                ((null != t || null != n) &&
                    v(c.Z.getOutputDevices(), c.Z.getOutputDeviceId(), e, 'Audio Output', {
                        location: t,
                        analyticsLocations: n
                    }),
                i.Z.dispatch({
                    type: 'AUDIO_SET_OUTPUT_DEVICE',
                    id: e
                }),
                g());
        },
        setVideoDevice(e) {
            let { location: t, analyticsLocations: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            !T() &&
                ((null != t || null != n) &&
                    v(c.Z.getVideoDevices(), c.Z.getVideoDeviceId(), e, 'Video', {
                        location: t,
                        analyticsLocations: n
                    }),
                i.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_VIDEO_DEVICE',
                    id: e
                }));
        },
        setEchoCancellation(e, t) {
            T() ||
                i.Z.dispatch({
                    type: 'AUDIO_SET_ECHO_CANCELLATION',
                    enabled: e,
                    location: t
                });
        },
        setSidechainCompression(e) {
            T() ||
                ((0, s.Z)('stream_attenuation_enabled', e, c.Z.getSidechainCompression()),
                i.Z.dispatch({
                    type: 'AUDIO_SET_SIDECHAIN_COMPRESSION',
                    enabled: e
                }));
        },
        setSidechainCompressionStrength(e) {
            T() ||
                ((0, s.Z)('stream_attenuation_strength', e, c.Z.getSidechainCompressionStrength()),
                i.Z.dispatch({
                    type: 'AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH',
                    strength: e
                }));
        },
        setLoopback(e) {
            T() ||
                i.Z.dispatch({
                    type: 'AUDIO_SET_LOOPBACK',
                    enabled: e
                });
        },
        setNoiseSuppression(e, t) {
            T() ||
                i.Z.dispatch({
                    type: 'AUDIO_SET_NOISE_SUPPRESSION',
                    enabled: e,
                    location: t
                });
        },
        setNoiseCancellation(e, t) {
            T() ||
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
            T() ||
                i.Z.dispatch({
                    type: 'AUDIO_SET_AUTOMATIC_GAIN_CONTROL',
                    enabled: e,
                    location: t
                });
        },
        setExperimentalEncoders(e) {
            T() ||
                ((0, s.Z)('experimental_encoders_enabled', e, c.Z.getExperimentalEncoders()),
                i.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS',
                    enabled: e
                }));
        },
        setHardwareEncoding(e) {
            T() ||
                ((0, s.Z)('hardware_acceleration_enabled', e, c.Z.getHardwareEncoding()),
                i.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_HARDWARE_ENCODING',
                    enabled: e
                }));
        },
        setAttenuation(e, t, n) {
            T() ||
                ((() => {
                    let i = c.Z.getAttenuation(),
                        r = c.Z.getAttenuateWhileSpeakingSelf(),
                        a = c.Z.getAttenuateWhileSpeakingOthers();
                    return i !== e ? (0, s.Z)('global_attenuation_strength', e, i) : r !== t ? (0, s.Z)('global_attenuation_for_self_speak_enabled', t, r) : a !== n ? (0, s.Z)('global_attenuation_for_other_speak_enabled', n, a) : void 0;
                })(),
                i.Z.dispatch({
                    type: 'AUDIO_SET_ATTENUATION',
                    attenuation: e,
                    attenuateWhileSpeakingSelf: t,
                    attenuateWhileSpeakingOthers: n
                }));
        },
        setQoS(e) {
            T() ||
                ((0, s.Z)('quality_of_service_packets_enabled', e, c.Z.getQoS()),
                i.Z.dispatch({
                    type: 'AUDIO_SET_QOS',
                    enabled: e
                }));
        },
        reset() {
            T() || i.Z.dispatch({ type: 'AUDIO_RESET' });
        },
        setSilenceWarning(e) {
            T() ||
                ((0, s.Z)('silence_warning_enabled', e, c.Z.getEnableSilenceWarning()),
                i.Z.dispatch({
                    type: 'AUDIO_SET_DISPLAY_SILENCE_WARNING',
                    enabled: e
                }));
        },
        async setDebugLogging(e) {
            T() ||
                (await (0, s.Z)('debug_logging_enabled', e, c.Z.getDebugLogging()),
                i.Z.dispatch({
                    type: 'AUDIO_SET_DEBUG_LOGGING',
                    enabled: e
                }));
        },
        setVideoHook(e) {
            T() ||
                ((0, s.Z)('video_hook_enabled', e, c.Z.getVideoHook()),
                i.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_VIDEO_HOOK',
                    enabled: e
                }));
        },
        setExperimentalSoundshare(e) {
            T() ||
                ((0, s.Z)('experimental_soundshare_enabled', e, c.Z.getExperimentalSoundshare()),
                i.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE',
                    enabled: e
                }));
        },
        setUseSystemScreensharePicker(e) {
            T() ||
                ((0, s.Z)('system_screenshare_picker_enabled', e, c.Z.getUseSystemScreensharePicker()),
                i.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER',
                    enabled: e
                }));
        },
        async setAudioSubsystem(e) {
            T() ||
                (await (0, s.Z)('audio_subsystem', e, c.Z.getAudioSubsystem()),
                i.Z.dispatch({
                    type: 'AUDIO_SET_SUBSYSTEM',
                    subsystem: e
                }));
        },
        setVideoEnabled(e) {
            (0, o.eH)(),
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
            T() ||
                ((0, s.Z)('open_h264_enabled', e, c.Z.getOpenH264()),
                i.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_OPEN_H264',
                    enabled: e
                }));
        },
        setAecDump(e) {
            T() ||
                ((0, s.Z)('diagnostic_audio_recording_enabled', e, c.Z.getAecDump()),
                i.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_AEC_DUMP',
                    enabled: e
                }));
        },
        interact() {
            T() ||
                i.Z.dispatch({
                    type: 'MEDIA_ENGINE_INTERACTION_REQUIRED',
                    required: !1
                });
        },
        setEnableHardwareMuteNotice(e) {
            T() ||
                i.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE',
                    enabled: e
                });
        }
    };
