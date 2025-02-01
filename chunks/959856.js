n.d(t, { Z: () => C }), n(773603), n(411104), n(47120), n(600040);
var i = n(512722),
    r = n.n(i),
    a = n(264344),
    s = n.n(a),
    o = n(259443),
    l = n(47770),
    u = n(174498),
    c = n.n(u),
    d = n(839548),
    f = n(46973),
    _ = n(734298),
    p = n(970838),
    h = n(68721),
    m = n(997653),
    g = n(384136),
    E = n(740197),
    v = n(548820),
    y = n(579237),
    I = n(582168),
    T = n(825040),
    b = n(65154),
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
let N = new o.Yd('MediaEngineWebRTC');
class C extends l.Z {
    destroy() {
        null != this.voiceActivityInput && (this.voiceActivityInput.destroy(), (this.voiceActivityInput = null)), this.eachConnection((e) => e.destroy()), this.emit(f.aB.Destroy), this.removeAllListeners();
    }
    interact() {
        this.interacted || (document.createElement('audio').play(), (this.interacted = !0)), this.eachConnection((e) => e.interact());
    }
    static supported() {
        return !__OVERLAY__ && (S.fi && null != window.AudioContext && null != window.RTCPeerConnection ? (n(250678), !0) : (N.info('WebRTC is not supported on', s().name, s().version), !1));
    }
    supported() {
        return !0;
    }
    supports(e) {
        switch (e) {
            case b.AN.AUDIO_INPUT_DEVICE:
                return E.S5;
            case b.AN.AUDIO_OUTPUT_DEVICE:
                return E.ZA;
            case b.AN.VIDEO:
                return S.U8;
            case b.AN.DESKTOP_CAPTURE:
                var t;
                return (null === (t = navigator.mediaDevices) || void 0 === t ? void 0 : t.getDisplayMedia) != null;
            case b.AN.VOICE_PROCESSING:
                return 'Chrome' === s().name;
            case b.AN.NATIVE_PING:
            case b.AN.DIAGNOSTICS:
                return S.Fo;
            case b.AN.DESKTOP_CAPTURE_APPLICATIONS:
            case b.AN.LOOPBACK:
            case b.AN.NOISE_SUPPRESSION:
            case b.AN.AUTOMATIC_GAIN_CONTROL:
                return 'Safari' !== s().name;
            case b.AN.NOISE_CANCELLATION:
                return c()();
            case b.AN.QOS:
            case b.AN.ATTENUATION:
            case b.AN.AUTOMATIC_VAD:
            case b.AN.LEGACY_AUDIO_SUBSYSTEM:
            case b.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM:
            case b.AN.AUTOMATIC_AUDIO_SUBSYSTEM:
            case b.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH:
            case b.AN.DEBUG_LOGGING:
            case b.AN.VOICE_PANNING:
            case b.AN.AUTO_ENABLE:
            case b.AN.DESKTOP_CAPTURE_FORMAT:
            case b.AN.VIDEO_HOOK:
            case b.AN.OPEN_H264:
            case b.AN.AEC_DUMP:
            case b.AN.DISABLE_VIDEO:
            case b.AN.CONNECTION_REPLAY:
            case b.AN.SIMULCAST:
            case b.AN.SCREEN_CAPTURE_KIT:
            default:
                return !1;
        }
    }
    getAudioContext() {
        return null == this._audioContext && (this._audioContext = new AudioContext()), this._audioContext;
    }
    connect(e, t, n) {
        let { ssrc: i, address: r, port: a, modes: s, streamUserId: o, streamParameters: l } = n,
            u = (0, m.Q)(e, t, this.getAudioContext(), l);
        return (u.streamUserId = o), u.setOutputVolume(this.outputVolume), u.setSinkId(this.sinkId), u.once(d.S.Destroy, (e) => this.connections.delete(e)), u.on(d.S.Silence, (e) => this.emit(f.aB.Silence, e)), u.on(d.S.DesktopSourceEnd, this.handleDesktopSourceEnd), u.on(d.S.AudioPermission, this.handleAudioPermission), u.on(d.S.VideoPermission, this.handleVideoPermission), this.interacted && u.interact(), e === b.Yn.DEFAULT && (u.setAudioSource(this.sourceId), this.enabled && u.input.enableAudioInput()), this.connections.add(u), this.emit(f.aB.Connection, u), u;
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
        await this.getAudioContext().audioWorklet.addModule(v);
        let e = new h.Z(this.getAudioContext());
        e.on('permission', this.handleAudioPermission);
        try {
            var t;
            await e.enable(), 'Firefox' === s().name && (await this.handleDeviceChange()), (this.enabled = !0), this.eachConnection((e) => e.input.enableAudioInput(), b.Yn.DEFAULT), null === (t = this.voiceActivityInput) || void 0 === t || t.enable();
        } finally {
            e.destroy();
        }
    }
    setInputVolume(e) {}
    setOutputVolume(e) {
        (this.outputVolume = e), this.connections.forEach((t) => t.setOutputVolume(e));
    }
    getAudioInputDevices() {
        return (0, E.Hg)();
    }
    setAudioInputDevice(e) {
        var t, n;
        (this.sourceId = e), this.eachConnection((t) => t.setAudioSource(e), b.Yn.DEFAULT), null === (t = this.voiceActivityInput) || void 0 === t || t.setSource(e), null === (n = this.loopback) || void 0 === n || n.setAudioSource(e);
    }
    getAudioOutputDevices() {
        return (0, E.HS)();
    }
    setAudioOutputDevice(e) {
        var t;
        (this.sinkId = e), this.connections.forEach((t) => t.setSinkId(e)), null === (t = this.loopback) || void 0 === t || t.setAudioSink(e);
    }
    getVideoInputDevices() {
        return (0, E.l0)();
    }
    setVideoInputDevice(e) {
        this.eachConnection((t) => t.setVideoSource(e), b.Yn.DEFAULT);
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
        return (this.pendingDesktopInputs[n.id] = n), n.id;
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
            r()(t === b.Yn.STREAM, 'Go live context is not STREAM');
            let n = !1,
                i = this.pendingDesktopInputs[e.desktopDescription.id];
            null != i &&
                this.eachConnection((e) => {
                    e.streamUserId === e.userId && ((n = !0), e.setDesktopInput(i));
                }, t),
                n && delete this.pendingDesktopInputs[e.desktopDescription.id];
        }
    }
    setClipsSource(e) {}
    setClipsQualitySettings(e, t, n) {
        return !1;
    }
    setSoundshareSource(e, t, n) {}
    setAudioSubsystem(e) {}
    queueAudioSubsystem(e) {}
    getAudioSubsystem() {
        return b.iA.STANDARD;
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
    setExperimentalAdm(e) {}
    setLoopback(e, t) {
        e && null == this.loopback ? (this.enable(), (this.loopback = new y.Z(this.getAudioContext(), this.sourceId, this.sinkId)), this.loopback.setNoiseCancellation(t.noiseCancellation)) : e || null == this.loopback || (this.loopback.stop(), (this.loopback = null));
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
    createReplayConnection(e, t) {
        throw Error('Connection replay is not supported.');
    }
    setUseDirectVideo(e) {}
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
        return 0;
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
    constructor() {
        super(),
            A(this, 'Video', T.Z),
            A(this, 'Camera', I.Z),
            A(this, '_audioContext', null),
            A(this, 'outputVolume', b.Qx),
            A(this, 'sourceId', b.w5),
            A(this, 'sinkId', b.w5),
            A(this, 'enabled', !1),
            A(this, 'connections', new Set()),
            A(this, 'interacted', !1),
            A(this, 'loopback', null),
            A(this, 'voiceActivityInput', null),
            A(this, 'pendingDesktopInputs', {}),
            A(this, 'enablePromise', null),
            A(this, 'handleActiveSinksChange', (e, t) => {
                this.connections.forEach((n) => n.setHasActiveVideoOutputSink(e, t, 'MediaEngineWebRTC.handleActiveSinksChange'));
            }),
            A(this, 'handleNewListener', (e) => {
                switch (e) {
                    case f.aB.DeviceChange:
                        null != navigator.mediaDevices &&
                            null == navigator.mediaDevices.ondevicechange &&
                            ((navigator.mediaDevices.ondevicechange = () => {
                                this.handleDeviceChange();
                            }),
                            this.handleDeviceChange());
                        break;
                    case f.aB.VoiceActivity:
                        null == this.voiceActivityInput && ((this.voiceActivityInput = new h.Z(this.getAudioContext())), this.voiceActivityInput.setSource(this.sourceId), this.voiceActivityInput.on('voiceactivity', this.handleVoiceActivity), this.enabled && this.voiceActivityInput.enable());
                }
            }),
            A(this, 'handleRemoveListener', (e) => {
                switch (e) {
                    case f.aB.DeviceChange:
                        var t;
                        (null === (t = navigator.mediaDevices) || void 0 === t ? void 0 : t.ondevicechange) != null && 0 === this.listenerCount(f.aB.DeviceChange) && (navigator.mediaDevices.ondevicechange = null);
                        break;
                    case f.aB.VoiceActivity:
                        null != this.voiceActivityInput && 0 === this.listenerCount(f.aB.VoiceActivity) && (this.voiceActivityInput.destroy(), (this.voiceActivityInput = null));
                }
            }),
            A(this, 'handleDeviceChange', () =>
                (0, E.PW)().then((e) => {
                    let [t, n, i] = e;
                    return this.emit(f.aB.DeviceChange, t, n, i);
                })
            ),
            A(this, 'handleVoiceActivity', (e) => {
                this.emit(f.aB.VoiceActivity, e, 0);
            }),
            A(this, 'handleDesktopSourceEnd', () => {
                this.emit(f.aB.DesktopSourceEnd);
            }),
            A(this, 'handleAudioPermission', (e) => {
                this.emit(f.aB.AudioPermission, e);
            }),
            A(this, 'handleVideoPermission', (e) => {
                this.emit(f.aB.VideoPermission, e);
            }),
            this.on('newListener', this.handleNewListener),
            this.on('removeListener', this.handleRemoveListener),
            (0, p.px)(this.handleActiveSinksChange),
            (0, _.Z)(this);
    }
}
