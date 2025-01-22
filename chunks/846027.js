var i = r(570140),
    a = r(340332),
    o = r(569550),
    s = r(672339),
    l = r(463395),
    u = r(592125),
    c = r(131951),
    d = r(944486),
    f = r(626135),
    p = r(557177),
    h = r(557457),
    _ = r(981631),
    m = r(65154);
function g() {
    (0, p.GN)('mention3');
}
function E() {
    let e = c.Z.getInputDevices(),
        n = e[c.Z.getInputDeviceId()];
    return null != n ? n.name : '';
}
function v(e, n, r, i) {
    let { location: a, analyticsLocations: o } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    if (n === r) return;
    let s = d.Z.getVoiceChannelId(),
        p = null != s ? u.Z.getChannel(s) : null,
        h = e[n],
        m = e[r],
        g = c.Z.getMediaEngine().getAudioSubsystem(),
        E = c.Z.getMediaEngine().getAudioLayer();
    f.default.track(_.rMx.MEDIA_DEVICE_CHANGED, {
        device_from_name: l.Z.getCertifiedDeviceName(n, null != h ? h.name : ''),
        device_to_name: l.Z.getCertifiedDeviceName(r, null != m ? m.name : ''),
        device_type: i,
        device_is_certified: l.Z.isCertified(r),
        location: a,
        location_stack: o,
        voice_channel_type: null == p ? void 0 : p.type,
        audio_subsystem: g,
        audio_layer: E
    });
}
let y = {
        isNotSupported: () => !1,
        enable: (e) => Promise.resolve(!0),
        trackToggleSelfMute(e) {},
        trackToggleSelfDeaf(e) {}
    },
    { enable: b, isNotSupported: I, trackToggleSelfMute: T, trackToggleSelfDeaf: S } = (y = r(929782));
n.Z = {
    enable: b,
    toggleSelfMute() {
        let { context: e = m.Yn.DEFAULT, syncRemote: n = !0, usedKeybind: r = !1, playSoundEffect: a = !0, location: o } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return I()
            ? Promise.resolve()
            : (T({
                    usedKeybind: r,
                    location: o
                }),
                c.Z.isEnabled())
              ? i.Z.dispatch({
                    type: 'AUDIO_TOGGLE_SELF_MUTE',
                    context: e,
                    syncRemote: n,
                    skipMuteUnmuteSoundEffect: !a
                })
              : this.enable(!0);
    },
    setSelfMute(e, n) {
        !I() &&
            i.Z.dispatch({
                type: 'AUDIO_SET_SELF_MUTE',
                context: e,
                mute: n
            });
    },
    setTemporarySelfMute(e) {
        !I() &&
            i.Z.dispatch({
                type: 'AUDIO_SET_TEMPORARY_SELF_MUTE',
                mute: e
            });
    },
    toggleSelfDeaf() {
        let { context: e = m.Yn.DEFAULT, syncRemote: n = !0, usedKeybind: r = !1, location: a } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        !I() &&
            (S({
                usedKeybind: r,
                location: a
            }),
            i.Z.dispatch({
                type: 'AUDIO_TOGGLE_SELF_DEAF',
                context: e,
                syncRemote: n
            }));
    },
    toggleLocalMute(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m.Yn.DEFAULT;
        !I() &&
            i.Z.dispatch({
                type: 'AUDIO_TOGGLE_LOCAL_MUTE',
                context: n,
                userId: e
            });
    },
    toggleLocalSoundboardMute(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m.Yn.DEFAULT;
        i.Z.dispatch({
            type: 'AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE',
            context: n,
            userId: e
        });
    },
    setDisableLocalVideo(e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : m.Yn.DEFAULT,
            a = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
            o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        !I() &&
            i.Z.dispatch({
                type: 'AUDIO_SET_LOCAL_VIDEO_DISABLED',
                context: r,
                userId: e,
                videoToggleState: n,
                persist: a,
                isAutomatic: o
            });
    },
    setLocalVolume(e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : m.Yn.DEFAULT;
        i.Z.dispatch({
            type: 'AUDIO_SET_LOCAL_VOLUME',
            context: r,
            userId: e,
            volume: (0, a.r)(n, r)
        });
    },
    setLocalPan(e, n, r) {
        let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : m.Yn.DEFAULT;
        i.Z.dispatch({
            type: 'AUDIO_SET_LOCAL_PAN',
            context: a,
            userId: e,
            left: n,
            right: r
        });
    },
    setMode(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : m.Yn.DEFAULT,
            { analyticsLocations: a } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (I()) return;
        let o = e !== c.Z.getMode(),
            s = c.Z.getModeOptions(r);
        if (
            (i.Z.dispatch({
                type: 'AUDIO_SET_MODE',
                context: r,
                mode: e,
                options: {
                    ...s,
                    ...n
                }
            }),
            o)
        ) {
            let n = c.Z.getMediaEngine().getAudioSubsystem(),
                r = c.Z.getMediaEngine().getAudioLayer(),
                i = d.Z.getVoiceChannelId(),
                o = null != i ? u.Z.getChannel(i) : null,
                s = E();
            f.default.track(_.rMx.VOICE_ACTIVATION_MODE_CHANGED, {
                mode: e,
                location_stack: a,
                voice_channel_type: null == o ? void 0 : o.type,
                input_device_name: s,
                audio_subsystem: n,
                audio_layer: r
            });
        } else if (e === _.pM4.VOICE_ACTIVITY && s !== n) {
            let e = c.Z.getMediaEngine().getAudioSubsystem(),
                r = c.Z.getMediaEngine().getAudioLayer(),
                i = d.Z.getVoiceChannelId(),
                o = null != i ? u.Z.getChannel(i) : null,
                l = E();
            f.default.track(_.rMx.VOICE_ACTIVITY_THRESHOLD_CHANGED, {
                location_stack: a,
                voice_channel_type: null == o ? void 0 : o.type,
                input_device_name: l,
                audio_subsystem: e,
                audio_layer: r,
                old_threshold: s.threshold,
                new_threshold: n.threshold,
                old_auto_threshold: s.autoThreshold,
                new_auto_threshold: n.autoThreshold
            });
        }
    },
    setInputVolume(e) {
        let { analyticsLocations: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (I()) return;
        i.Z.dispatch({
            type: 'AUDIO_SET_INPUT_VOLUME',
            volume: e
        });
        let r = d.Z.getVoiceChannelId(),
            a = null != r ? u.Z.getChannel(r) : null;
        f.default.track(_.rMx.MEDIA_INPUT_VOLUME_CHANGED, {
            volume: e,
            location_stack: n,
            voice_channel_type: null == a ? void 0 : a.type
        });
    },
    setOutputVolume(e) {
        let { analyticsLocations: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (I()) return;
        i.Z.dispatch({
            type: 'AUDIO_SET_OUTPUT_VOLUME',
            volume: e
        });
        let r = d.Z.getVoiceChannelId(),
            a = null != r ? u.Z.getChannel(r) : null;
        f.default.track(_.rMx.MEDIA_OUTPUT_VOLUME_CHANGED, {
            volume: e,
            location_stack: n,
            voice_channel_type: null == a ? void 0 : a.type
        });
    },
    setInputDevice(e) {
        let { location: n, analyticsLocations: r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!I()) {
            if (null != n || null != r) {
                let i = c.Z.getInputDevices();
                v(i, c.Z.getInputDeviceId(), e, 'Audio Input', {
                    location: n,
                    analyticsLocations: r
                });
            }
            i.Z.dispatch({
                type: 'AUDIO_SET_INPUT_DEVICE',
                id: e
            }),
                g();
        }
    },
    setOutputDevice(e) {
        let { location: n, analyticsLocations: r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!I()) {
            if (null != n || null != r) {
                let i = c.Z.getOutputDevices();
                v(i, c.Z.getOutputDeviceId(), e, 'Audio Output', {
                    location: n,
                    analyticsLocations: r
                });
            }
            i.Z.dispatch({
                type: 'AUDIO_SET_OUTPUT_DEVICE',
                id: e
            }),
                g();
        }
    },
    setVideoDevice(e) {
        let { location: n, analyticsLocations: r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!I()) {
            if (null != n || null != r) {
                let i = c.Z.getVideoDevices();
                v(i, c.Z.getVideoDeviceId(), e, 'Video', {
                    location: n,
                    analyticsLocations: r
                });
            }
            i.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_VIDEO_DEVICE',
                id: e
            });
        }
    },
    setEchoCancellation(e, n) {
        !I() &&
            i.Z.dispatch({
                type: 'AUDIO_SET_ECHO_CANCELLATION',
                enabled: e,
                location: n
            });
    },
    setSidechainCompression(e) {
        !I() &&
            ((0, o.Z)('stream_attenuation_enabled', e, c.Z.getSidechainCompression()),
            i.Z.dispatch({
                type: 'AUDIO_SET_SIDECHAIN_COMPRESSION',
                enabled: e
            }));
    },
    setSidechainCompressionStrength(e) {
        !I() &&
            ((0, o.Z)('stream_attenuation_strength', e, c.Z.getSidechainCompressionStrength()),
            i.Z.dispatch({
                type: 'AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH',
                strength: e
            }));
    },
    setLoopback(e) {
        !I() &&
            i.Z.dispatch({
                type: 'AUDIO_SET_LOOPBACK',
                enabled: e
            });
    },
    setNoiseSuppression(e, n) {
        !I() &&
            i.Z.dispatch({
                type: 'AUDIO_SET_NOISE_SUPPRESSION',
                enabled: e,
                location: n
            });
    },
    setNoiseCancellation(e, n) {
        !I() &&
            (i.Z.dispatch({
                type: 'AUDIO_SET_NOISE_CANCELLATION',
                enabled: e,
                location: n
            }),
            i.Z.dispatch({
                type: 'AUDIO_SET_NOISE_SUPPRESSION',
                enabled: !e,
                location: n
            }));
    },
    setAutomaticGainControl(e, n) {
        !I() &&
            i.Z.dispatch({
                type: 'AUDIO_SET_AUTOMATIC_GAIN_CONTROL',
                enabled: e,
                location: n
            });
    },
    setExperimentalEncoders(e) {
        !I() &&
            ((0, o.Z)('experimental_encoders_enabled', e, c.Z.getExperimentalEncoders()),
            i.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS',
                enabled: e
            }));
    },
    setHardwareEncoding(e) {
        !I() &&
            ((0, o.Z)('hardware_acceleration_enabled', e, c.Z.getHardwareEncoding()),
            i.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_HARDWARE_ENCODING',
                enabled: e
            }));
    },
    setAttenuation(e, n, r) {
        !I() &&
            ((() => {
                let i = c.Z.getAttenuation(),
                    a = c.Z.getAttenuateWhileSpeakingSelf(),
                    s = c.Z.getAttenuateWhileSpeakingOthers();
                return i !== e ? (0, o.Z)('global_attenuation_strength', e, i) : a !== n ? (0, o.Z)('global_attenuation_for_self_speak_enabled', n, a) : s !== r ? (0, o.Z)('global_attenuation_for_other_speak_enabled', r, s) : void 0;
            })(),
            i.Z.dispatch({
                type: 'AUDIO_SET_ATTENUATION',
                attenuation: e,
                attenuateWhileSpeakingSelf: n,
                attenuateWhileSpeakingOthers: r
            }));
    },
    setQoS(e) {
        !I() &&
            ((0, o.Z)('quality_of_service_packets_enabled', e, c.Z.getQoS()),
            i.Z.dispatch({
                type: 'AUDIO_SET_QOS',
                enabled: e
            }));
    },
    reset() {
        !I() && i.Z.dispatch({ type: 'AUDIO_RESET' });
    },
    setSilenceWarning(e) {
        !I() &&
            ((0, o.Z)('silence_warning_enabled', e, c.Z.getEnableSilenceWarning()),
            i.Z.dispatch({
                type: 'AUDIO_SET_DISPLAY_SILENCE_WARNING',
                enabled: e
            }));
    },
    async setDebugLogging(e) {
        !I() &&
            (await (0, o.Z)('debug_logging_enabled', e, c.Z.getDebugLogging()),
            i.Z.dispatch({
                type: 'AUDIO_SET_DEBUG_LOGGING',
                enabled: e
            }));
    },
    setVideoHook(e) {
        !I() &&
            ((0, o.Z)('video_hook_enabled', e, c.Z.getVideoHook()),
            i.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_VIDEO_HOOK',
                enabled: e
            }));
    },
    setExperimentalSoundshare(e) {
        !I() &&
            ((0, o.Z)('experimental_soundshare_enabled', e, c.Z.getExperimentalSoundshare()),
            i.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE',
                enabled: e
            }));
    },
    setUseSystemScreensharePicker(e) {
        !I() &&
            ((0, o.Z)('system_screenshare_picker_enabled', e, c.Z.getUseSystemScreensharePicker()),
            i.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER',
                enabled: e
            }));
    },
    async setAudioSubsystem(e) {
        !I() &&
            (await (0, o.Z)('audio_subsystem', e, c.Z.getAudioSubsystem()),
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
        (null == e ? void 0 : e.qualityOptions) != null && (0, h.Ye)(e.qualityOptions.preset, e.qualityOptions.resolution, e.qualityOptions.frameRate),
            i.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                settings: e
            });
    },
    setOpenH264(e) {
        !I() &&
            ((0, o.Z)('open_h264_enabled', e, c.Z.getOpenH264()),
            i.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_OPEN_H264',
                enabled: e
            }));
    },
    setAecDump(e) {
        !I() &&
            ((0, o.Z)('diagnostic_audio_recording_enabled', e, c.Z.getAecDump()),
            i.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_AEC_DUMP',
                enabled: e
            }));
    },
    interact() {
        !I() &&
            i.Z.dispatch({
                type: 'MEDIA_ENGINE_INTERACTION_REQUIRED',
                required: !1
            });
    },
    setEnableHardwareMuteNotice(e) {
        !I() &&
            i.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE',
                enabled: e
            });
    }
};
