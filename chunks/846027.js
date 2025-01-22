var i = r(570140),
    a = r(340332),
    s = r(569550),
    o = r(672339),
    l = r(463395),
    u = r(592125),
    c = r(131951),
    d = r(944486),
    f = r(626135),
    _ = r(557177),
    h = r(557457),
    p = r(981631),
    m = r(65154);
function g() {
    (0, _.GN)('mention3');
}
function E() {
    let e = c.Z.getInputDevices(),
        n = e[c.Z.getInputDeviceId()];
    return null != n ? n.name : '';
}
function v(e, n, r, i) {
    let { location: a, analyticsLocations: s } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    if (n === r) return;
    let o = d.Z.getVoiceChannelId(),
        _ = null != o ? u.Z.getChannel(o) : null,
        h = e[n],
        m = e[r],
        g = c.Z.getMediaEngine().getAudioSubsystem(),
        E = c.Z.getMediaEngine().getAudioLayer();
    f.default.track(p.rMx.MEDIA_DEVICE_CHANGED, {
        device_from_name: l.Z.getCertifiedDeviceName(n, null != h ? h.name : ''),
        device_to_name: l.Z.getCertifiedDeviceName(r, null != m ? m.name : ''),
        device_type: i,
        device_is_certified: l.Z.isCertified(r),
        location: a,
        location_stack: s,
        voice_channel_type: null == _ ? void 0 : _.type,
        audio_subsystem: g,
        audio_layer: E
    });
}
let I = {
        isNotSupported: () => !1,
        enable: (e) => Promise.resolve(!0),
        trackToggleSelfMute(e) {},
        trackToggleSelfDeaf(e) {}
    },
    { enable: T, isNotSupported: b, trackToggleSelfMute: y, trackToggleSelfDeaf: S } = (I = r(929782));
n.Z = {
    enable: T,
    toggleSelfMute() {
        let { context: e = m.Yn.DEFAULT, syncRemote: n = !0, usedKeybind: r = !1, playSoundEffect: a = !0, location: s } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return b()
            ? Promise.resolve()
            : (y({
                    usedKeybind: r,
                    location: s
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
        !b() &&
            i.Z.dispatch({
                type: 'AUDIO_SET_SELF_MUTE',
                context: e,
                mute: n
            });
    },
    setTemporarySelfMute(e) {
        !b() &&
            i.Z.dispatch({
                type: 'AUDIO_SET_TEMPORARY_SELF_MUTE',
                mute: e
            });
    },
    toggleSelfDeaf() {
        let { context: e = m.Yn.DEFAULT, syncRemote: n = !0, usedKeybind: r = !1, location: a } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        !b() &&
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
        !b() &&
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
            s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        !b() &&
            i.Z.dispatch({
                type: 'AUDIO_SET_LOCAL_VIDEO_DISABLED',
                context: r,
                userId: e,
                videoToggleState: n,
                persist: a,
                isAutomatic: s
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
        if (b()) return;
        let s = e !== c.Z.getMode(),
            o = c.Z.getModeOptions(r);
        if (
            (i.Z.dispatch({
                type: 'AUDIO_SET_MODE',
                context: r,
                mode: e,
                options: {
                    ...o,
                    ...n
                }
            }),
            s)
        ) {
            let n = c.Z.getMediaEngine().getAudioSubsystem(),
                r = c.Z.getMediaEngine().getAudioLayer(),
                i = d.Z.getVoiceChannelId(),
                s = null != i ? u.Z.getChannel(i) : null,
                o = E();
            f.default.track(p.rMx.VOICE_ACTIVATION_MODE_CHANGED, {
                mode: e,
                location_stack: a,
                voice_channel_type: null == s ? void 0 : s.type,
                input_device_name: o,
                audio_subsystem: n,
                audio_layer: r
            });
        } else if (e === p.pM4.VOICE_ACTIVITY && o !== n) {
            let e = c.Z.getMediaEngine().getAudioSubsystem(),
                r = c.Z.getMediaEngine().getAudioLayer(),
                i = d.Z.getVoiceChannelId(),
                s = null != i ? u.Z.getChannel(i) : null,
                l = E();
            f.default.track(p.rMx.VOICE_ACTIVITY_THRESHOLD_CHANGED, {
                location_stack: a,
                voice_channel_type: null == s ? void 0 : s.type,
                input_device_name: l,
                audio_subsystem: e,
                audio_layer: r,
                old_threshold: o.threshold,
                new_threshold: n.threshold,
                old_auto_threshold: o.autoThreshold,
                new_auto_threshold: n.autoThreshold
            });
        }
    },
    setInputVolume(e) {
        let { analyticsLocations: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (b()) return;
        i.Z.dispatch({
            type: 'AUDIO_SET_INPUT_VOLUME',
            volume: e
        });
        let r = d.Z.getVoiceChannelId(),
            a = null != r ? u.Z.getChannel(r) : null;
        f.default.track(p.rMx.MEDIA_INPUT_VOLUME_CHANGED, {
            volume: e,
            location_stack: n,
            voice_channel_type: null == a ? void 0 : a.type
        });
    },
    setOutputVolume(e) {
        let { analyticsLocations: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (b()) return;
        i.Z.dispatch({
            type: 'AUDIO_SET_OUTPUT_VOLUME',
            volume: e
        });
        let r = d.Z.getVoiceChannelId(),
            a = null != r ? u.Z.getChannel(r) : null;
        f.default.track(p.rMx.MEDIA_OUTPUT_VOLUME_CHANGED, {
            volume: e,
            location_stack: n,
            voice_channel_type: null == a ? void 0 : a.type
        });
    },
    setInputDevice(e) {
        let { location: n, analyticsLocations: r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!b()) {
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
        if (!b()) {
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
        if (!b()) {
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
        !b() &&
            i.Z.dispatch({
                type: 'AUDIO_SET_ECHO_CANCELLATION',
                enabled: e,
                location: n
            });
    },
    setSidechainCompression(e) {
        !b() &&
            ((0, s.Z)('stream_attenuation_enabled', e, c.Z.getSidechainCompression()),
            i.Z.dispatch({
                type: 'AUDIO_SET_SIDECHAIN_COMPRESSION',
                enabled: e
            }));
    },
    setSidechainCompressionStrength(e) {
        !b() &&
            ((0, s.Z)('stream_attenuation_strength', e, c.Z.getSidechainCompressionStrength()),
            i.Z.dispatch({
                type: 'AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH',
                strength: e
            }));
    },
    setLoopback(e) {
        !b() &&
            i.Z.dispatch({
                type: 'AUDIO_SET_LOOPBACK',
                enabled: e
            });
    },
    setNoiseSuppression(e, n) {
        !b() &&
            i.Z.dispatch({
                type: 'AUDIO_SET_NOISE_SUPPRESSION',
                enabled: e,
                location: n
            });
    },
    setNoiseCancellation(e, n) {
        !b() &&
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
        !b() &&
            i.Z.dispatch({
                type: 'AUDIO_SET_AUTOMATIC_GAIN_CONTROL',
                enabled: e,
                location: n
            });
    },
    setExperimentalEncoders(e) {
        !b() &&
            ((0, s.Z)('experimental_encoders_enabled', e, c.Z.getExperimentalEncoders()),
            i.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS',
                enabled: e
            }));
    },
    setHardwareEncoding(e) {
        !b() &&
            ((0, s.Z)('hardware_acceleration_enabled', e, c.Z.getHardwareEncoding()),
            i.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_HARDWARE_ENCODING',
                enabled: e
            }));
    },
    setAttenuation(e, n, r) {
        !b() &&
            ((() => {
                let i = c.Z.getAttenuation(),
                    a = c.Z.getAttenuateWhileSpeakingSelf(),
                    o = c.Z.getAttenuateWhileSpeakingOthers();
                return i !== e ? (0, s.Z)('global_attenuation_strength', e, i) : a !== n ? (0, s.Z)('global_attenuation_for_self_speak_enabled', n, a) : o !== r ? (0, s.Z)('global_attenuation_for_other_speak_enabled', r, o) : void 0;
            })(),
            i.Z.dispatch({
                type: 'AUDIO_SET_ATTENUATION',
                attenuation: e,
                attenuateWhileSpeakingSelf: n,
                attenuateWhileSpeakingOthers: r
            }));
    },
    setQoS(e) {
        !b() &&
            ((0, s.Z)('quality_of_service_packets_enabled', e, c.Z.getQoS()),
            i.Z.dispatch({
                type: 'AUDIO_SET_QOS',
                enabled: e
            }));
    },
    reset() {
        !b() && i.Z.dispatch({ type: 'AUDIO_RESET' });
    },
    setSilenceWarning(e) {
        !b() &&
            ((0, s.Z)('silence_warning_enabled', e, c.Z.getEnableSilenceWarning()),
            i.Z.dispatch({
                type: 'AUDIO_SET_DISPLAY_SILENCE_WARNING',
                enabled: e
            }));
    },
    async setDebugLogging(e) {
        !b() &&
            (await (0, s.Z)('debug_logging_enabled', e, c.Z.getDebugLogging()),
            i.Z.dispatch({
                type: 'AUDIO_SET_DEBUG_LOGGING',
                enabled: e
            }));
    },
    setVideoHook(e) {
        !b() &&
            ((0, s.Z)('video_hook_enabled', e, c.Z.getVideoHook()),
            i.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_VIDEO_HOOK',
                enabled: e
            }));
    },
    setExperimentalSoundshare(e) {
        !b() &&
            ((0, s.Z)('experimental_soundshare_enabled', e, c.Z.getExperimentalSoundshare()),
            i.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE',
                enabled: e
            }));
    },
    setUseSystemScreensharePicker(e) {
        !b() &&
            ((0, s.Z)('system_screenshare_picker_enabled', e, c.Z.getUseSystemScreensharePicker()),
            i.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER',
                enabled: e
            }));
    },
    async setAudioSubsystem(e) {
        !b() &&
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
        (null == e ? void 0 : e.qualityOptions) != null && (0, h.Ye)(e.qualityOptions.preset, e.qualityOptions.resolution, e.qualityOptions.frameRate),
            i.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                settings: e
            });
    },
    setOpenH264(e) {
        !b() &&
            ((0, s.Z)('open_h264_enabled', e, c.Z.getOpenH264()),
            i.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_OPEN_H264',
                enabled: e
            }));
    },
    setAecDump(e) {
        !b() &&
            ((0, s.Z)('diagnostic_audio_recording_enabled', e, c.Z.getAecDump()),
            i.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_AEC_DUMP',
                enabled: e
            }));
    },
    interact() {
        !b() &&
            i.Z.dispatch({
                type: 'MEDIA_ENGINE_INTERACTION_REQUIRED',
                required: !1
            });
    },
    setEnableHardwareMuteNotice(e) {
        !b() &&
            i.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE',
                enabled: e
            });
    }
};
