(n.d(t, { Z: () => C }), n(457542), n(415506), n(388685), n(600040));
var r = n(512722),
    i = n.n(r),
    a = n(264344),
    o = n.n(a),
    s = n(47770),
    l = n(174498),
    c = n.n(l),
    u = n(579092),
    d = n(839548),
    _ = n(46973),
    f = n(734298),
    p = n(970838),
    h = n(68721),
    m = n(997653),
    g = n(384136),
    E = n(740197),
    b = n(548820),
    y = n(586021),
    O = n(579237),
    v = n(582168),
    I = n(825040),
    T = n(65154),
    S = n(436620);
function A(e, t, n) {
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
let N = new u.Yd('MediaEngineWebRTC');
class C extends s.Z {
    destroy() {
        (null != this.voiceActivityInput && (this.voiceActivityInput.destroy(), (this.voiceActivityInput = null)), this.eachConnection((e) => e.destroy()), this.emit(_.aB.Destroy), this.removeAllListeners());
    }
    interact() {
        (this.interacted || (document.createElement('audio').play(), (this.interacted = !0)), this.eachConnection((e) => e.interact()));
    }
    static supported() {
        return !__OVERLAY__ && (S.fi && null != window.AudioContext && null != window.RTCPeerConnection ? (n(266370), !0) : (N.info('WebRTC is not supported on', o().name, o().version), !1));
    }
    supported() {
        return !0;
    }
    supports(e) {
        switch (e) {
            case T.AN.AUDIO_INPUT_DEVICE:
                return E.S5;
            case T.AN.AUDIO_OUTPUT_DEVICE:
                return E.ZA;
            case T.AN.VIDEO:
                return S.U8;
            case T.AN.DESKTOP_CAPTURE:
                var t;
                return (null == (t = navigator.mediaDevices) ? void 0 : t.getDisplayMedia) != null;
            case T.AN.VOICE_PROCESSING:
                return 'Chrome' === o().name;
            case T.AN.NATIVE_PING:
            case T.AN.DIAGNOSTICS:
                return S.Fo;
            case T.AN.DESKTOP_CAPTURE_APPLICATIONS:
            case T.AN.LOOPBACK:
            case T.AN.NOISE_SUPPRESSION:
            case T.AN.AUTOMATIC_GAIN_CONTROL:
                return 'Safari' !== o().name;
            case T.AN.NOISE_CANCELLATION:
                return c()();
            case T.AN.QOS:
            case T.AN.ATTENUATION:
            case T.AN.AUTOMATIC_VAD:
            case T.AN.LEGACY_AUDIO_SUBSYSTEM:
            case T.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM:
            case T.AN.AUTOMATIC_AUDIO_SUBSYSTEM:
            case T.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH:
            case T.AN.DEBUG_LOGGING:
            case T.AN.VOICE_PANNING:
            case T.AN.AUTO_ENABLE:
            case T.AN.DESKTOP_CAPTURE_FORMAT:
            case T.AN.VIDEO_HOOK:
            case T.AN.OPEN_H264:
            case T.AN.AEC_DUMP:
            case T.AN.DISABLE_VIDEO:
            case T.AN.CONNECTION_REPLAY:
            case T.AN.SIMULCAST:
            case T.AN.SCREEN_CAPTURE_KIT:
            default:
                return !1;
        }
    }
    getAudioContext() {
        return (null == this._audioContext && (this._audioContext = new AudioContext()), this._audioContext);
    }
    connect(e, t, n) {
        let { ssrc: r, address: i, port: a, modes: o, streamUserId: s, streamParameters: l } = n,
            c = {
                context: e,
                userId: t,
                audioContext: this.getAudioContext(),
                streamParameters: l,
                dave: this.dave,
                transientKeys: this.transientKeys
            },
            u = (0, m.Q)(c);
        return ((u.streamUserId = s), u.setOutputVolume(this.outputVolume), u.setSinkId(this.sinkId), u.once(d.S.Destroy, (e) => this.connections.delete(e)), u.on(d.S.Silence, (e) => this.emit(_.aB.Silence, e)), u.on(d.S.DesktopSourceEnd, this.handleDesktopSourceEnd), u.on(d.S.AudioPermission, this.handleAudioPermission), u.on(d.S.VideoPermission, this.handleVideoPermission), this.interacted && u.interact(), e === T.Yn.DEFAULT && (u.setAudioSource(this.sourceId), this.enabled && u.input.enableAudioInput()), this.connections.add(u), this.emit(_.aB.Connection, u), u);
    }
    findConnection(e) {
        return Array.from(this.connections).find((t) => null == e || t.context === e);
    }
    eachConnection(e, t) {
        this.connections.forEach((n) => {
            (null == t || n.context === t) && e(n);
        });
    }
    enable() {
        return (
            null == this.enablePromise &&
                (this.enablePromise = this._enable().finally(() => {
                    this.enablePromise = null;
                })),
            this.enablePromise
        );
    }
    async _enable() {
        if (this.enabled) return;
        await this.getAudioContext().audioWorklet.addModule(b);
        let e = new h.Z(this.getAudioContext());
        e.on('permission', this.handleAudioPermission);
        try {
            var t;
            (await e.enable(), 'Firefox' === o().name && (await this.handleDeviceChange()), (this.enabled = !0), this.eachConnection((e) => e.input.enableAudioInput(), T.Yn.DEFAULT), null == (t = this.voiceActivityInput) || t.enable());
        } finally {
            e.destroy();
        }
    }
    setInputVolume(e) {}
    setOutputVolume(e) {
        ((this.outputVolume = e), this.connections.forEach((t) => t.setOutputVolume(e)));
    }
    getNoiseCancellationStats() {
        return Promise.reject(Error('getNoiseCancellationStats is not supported on browsers.'));
    }
    setNoiseCancellationEnableStats(e) {}
    getAudioInputDevices() {
        return (0, E.Hg)();
    }
    setAudioInputDevice(e) {
        var t, n;
        ((this.sourceId = e), this.eachConnection((t) => t.setAudioSource(e), T.Yn.DEFAULT), null == (t = this.voiceActivityInput) || t.setSource(e), null == (n = this.loopback) || n.setAudioSource(e));
    }
    getAudioOutputDevices() {
        return (0, E.HS)();
    }
    setAudioOutputDevice(e) {
        var t;
        ((this.sinkId = e), this.connections.forEach((t) => t.setSinkId(e)), null == (t = this.loopback) || t.setAudioSink(e));
    }
    getVideoInputDevices() {
        return (0, E.l0)();
    }
    setVideoInputDevice(e) {
        this.eachConnection((t) => t.setVideoSource(e), T.Yn.DEFAULT);
    }
    getSupportedVideoCodecs(e) {
        e([]);
    }
    getCodecCapabilities(e) {
        e('');
    }
    async getDesktopSource(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = await g.Z.get(e, t);
        return ((this.pendingDesktopInputs[n.id] = n), n.id);
    }
    getScreenPreviews(e, t) {
        return Promise.reject(Error('UNSUPPORTED'));
    }
    getWindowPreviews(e, t) {
        return Promise.reject(Error('UNSUPPORTED'));
    }
    setClipBufferLength(e) {}
    saveClip(e, t) {
        return Promise.reject(Error('UNSUPPORTED'));
    }
    saveClipForUser(e, t, n) {
        return Promise.reject(Error('UNSUPPORTED'));
    }
    updateClipMetadata(e, t) {
        return Promise.reject(Error('UNSUPPORTED'));
    }
    exportClip(e, t) {
        return Promise.reject(Error('UNSUPPORTED'));
    }
    setGoLiveSource(e, t) {
        if (null == e) this.eachConnection((e) => e.setDesktopInput(null), t);
        else if (null != e.desktopDescription && null != this.findConnection(t)) {
            i()(t === T.Yn.STREAM, 'Go live context is not STREAM');
            let n = !1,
                r = this.pendingDesktopInputs[e.desktopDescription.id];
            (null != r &&
                this.eachConnection((e) => {
                    e.streamUserId === e.userId && ((n = !0), e.setDesktopInput(r));
                }, t),
                n && delete this.pendingDesktopInputs[e.desktopDescription.id]);
        }
    }
    setClipsSource(e) {}
    setClipsQualitySettings(e, t, n) {
        return !1;
    }
    setSoundshareSource(e, t, n) {}
    setAudioSubsystem(e) {}
    queueAudioSubsystem(e) {}
    setOffloadAdmControls(e) {}
    getAudioSubsystem() {
        return T.iA.STANDARD;
    }
    getAudioLayer() {
        return '';
    }
    getDebugLogging() {
        return !1;
    }
    setDebugLogging(e) {}
    writeAudioDebugState() {
        return Promise.reject(Error('Audio debug state is not supported.'));
    }
    setAudioInputBypassSystemProcessing(e) {}
    setLoopback(e, t) {
        e && null == this.loopback ? (this.enable(), (this.loopback = new O.Z(this.getAudioContext(), this.sourceId, this.sinkId)), this.loopback.setNoiseCancellation(t.noiseCancellation)) : e || null == this.loopback || (this.loopback.stop(), (this.loopback = null));
    }
    getLoopback() {
        return null != this.loopback;
    }
    setH264Enabled(e) {}
    setAv1Enabled(e) {}
    setH265Enabled(e) {}
    getCodecSurvey() {
        return Promise.reject(Error('getCodecSurvey is not implemented on MediaEngine of browsers.'));
    }
    startAecDump() {}
    stopAecDump() {}
    setAecDump(e) {}
    startRecordingRawSamples(e) {
        throw Error('startRecordingRawSamples is not supported on browsers.');
    }
    stopRecordingRawSamples() {
        throw Error('stopRecordingRawSamples is not supported on browsers.');
    }
    createReplayConnection(e, t) {
        throw Error('Connection replay is not supported.');
    }
    setOnVideoContainerResized(e) {}
    setMaxSyncDelayOverride(e) {}
    rankRtcRegions(e) {
        return Promise.reject(Error('RTC region latency test is not supported.'));
    }
    applyMediaFilterSettings(e) {
        return Promise.resolve();
    }
    startLocalAudioRecording() {
        return Promise.reject(Error('startLocalAudioRecording is not supported.'));
    }
    stopLocalAudioRecording(e) {}
    setHasFullbandPerformance(e) {}
    getSupportedSecureFramesProtocolVersion() {
        if (null == this.maxSupportedProtocolVersion) throw Error('getSupportedSecureFramesProtocolVersion called before DAVE was initialized');
        return this.maxSupportedProtocolVersion;
    }
    getSupportedBandwidthEstimationExperiments(e) {
        e([]);
    }
    getMLSSigningKey(e, t) {
        return Promise.reject(Error('getMLSSigningKey is not supported.'));
    }
    setSidechainCompression(e) {}
    setSidechainCompressionStrength(e) {}
    setNativeDesktopVideoSourcePickerActive(e) {}
    presentNativeScreenSharePicker(e) {}
    releaseNativeDesktopVideoSourcePickerStream() {}
    setMaybePreprocessMute(e) {}
    fetchAsyncResources(e) {
        return e.fetchDave
            ? (0, y.IT)()
                ? (0, y.Ft)()
                    ? new Promise((e, t) => {
                          (0, y.D5)()
                              .then((t) => {
                                  ((this.dave = t), (this.transientKeys = (0, y.Yk)()), (this.maxSupportedProtocolVersion = t.MaxSupportedProtocolVersion()), N.info('Successfully initialized DAVE, version:', this.maxSupportedProtocolVersion), e());
                              })
                              .catch((e) => {
                                  ((this.maxSupportedProtocolVersion = 0), N.error('Failed to initialize DAVE', e), t(e));
                              });
                      })
                    : ((this.maxSupportedProtocolVersion = 0), Promise.reject(Error('WebAssembly is not supported on this platform.')))
                : ((this.maxSupportedProtocolVersion = 0), Promise.reject(Error('Encoded transforms are not supported on this platform.')))
            : ((this.maxSupportedProtocolVersion = 0), Promise.resolve());
    }
    constructor() {
        (super(),
            A(this, 'Video', I.Z),
            A(this, 'Camera', v.Z),
            A(this, '_audioContext', null),
            A(this, 'outputVolume', T.Qx),
            A(this, 'sourceId', T.w5),
            A(this, 'sinkId', T.w5),
            A(this, 'enabled', !1),
            A(this, 'connections', new Set()),
            A(this, 'interacted', !1),
            A(this, 'loopback', null),
            A(this, 'voiceActivityInput', null),
            A(this, 'pendingDesktopInputs', {}),
            A(this, 'enablePromise', null),
            A(this, 'dave', null),
            A(this, 'transientKeys', null),
            A(this, 'maxSupportedProtocolVersion', null),
            A(this, 'handleActiveSinksChange', (e, t) => {
                this.connections.forEach((n) => n.setHasActiveVideoOutputSink(e, t, 'MediaEngineWebRTC.handleActiveSinksChange'));
            }),
            A(this, 'handleNewListener', (e) => {
                switch (e) {
                    case _.aB.DeviceChange:
                        null != navigator.mediaDevices &&
                            null == navigator.mediaDevices.ondevicechange &&
                            ((navigator.mediaDevices.ondevicechange = () => {
                                this.handleDeviceChange();
                            }),
                            this.handleDeviceChange());
                        break;
                    case _.aB.VoiceActivity:
                        null == this.voiceActivityInput && ((this.voiceActivityInput = new h.Z(this.getAudioContext())), this.voiceActivityInput.setSource(this.sourceId), this.voiceActivityInput.on('voiceactivity', this.handleVoiceActivity), this.enabled && this.voiceActivityInput.enable());
                }
            }),
            A(this, 'handleRemoveListener', (e) => {
                switch (e) {
                    case _.aB.DeviceChange:
                        var t;
                        (null == (t = navigator.mediaDevices) ? void 0 : t.ondevicechange) != null && 0 === this.listenerCount(_.aB.DeviceChange) && (navigator.mediaDevices.ondevicechange = null);
                        break;
                    case _.aB.VoiceActivity:
                        null != this.voiceActivityInput && 0 === this.listenerCount(_.aB.VoiceActivity) && (this.voiceActivityInput.destroy(), (this.voiceActivityInput = null));
                }
            }),
            A(this, 'handleDeviceChange', () =>
                (0, E.PW)().then((e) => {
                    let [t, n, r] = e;
                    return this.emit(_.aB.DeviceChange, t, n, r);
                })
            ),
            A(this, 'handleVoiceActivity', (e) => {
                this.emit(_.aB.VoiceActivity, e, 0);
            }),
            A(this, 'handleDesktopSourceEnd', () => {
                this.emit(_.aB.DesktopSourceEnd);
            }),
            A(this, 'handleAudioPermission', (e) => {
                this.emit(_.aB.AudioPermission, e);
            }),
            A(this, 'handleVideoPermission', (e) => {
                this.emit(_.aB.VideoPermission, e);
            }),
            this.on('newListener', this.handleNewListener),
            this.on('removeListener', this.handleRemoveListener),
            (0, p.px)(this.handleActiveSinksChange),
            (0, f.Z)(this));
    }
}
