r.d(n, {
    Z: function () {
        return L;
    }
});
var i = r(773603);
var a = r(411104);
var o = r(47120);
r(600040);
var s = r(512722),
    l = r.n(s),
    u = r(264344),
    c = r.n(u),
    d = r(259443),
    f = r(47770),
    p = r(174498),
    h = r.n(p),
    _ = r(839548),
    m = r(46973),
    g = r(734298),
    E = r(970838),
    v = r(68721),
    y = r(997653),
    b = r(384136),
    I = r(740197),
    T = r(548820),
    S = r(579237),
    A = r(582168),
    C = r(825040),
    N = r(65154),
    R = r(436620);
function O(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let D = new d.Yd('MediaEngineWebRTC');
class L extends f.Z {
    destroy() {
        null != this.voiceActivityInput && (this.voiceActivityInput.destroy(), (this.voiceActivityInput = null)), this.eachConnection((e) => e.destroy()), this.emit(m.aB.Destroy), this.removeAllListeners();
    }
    interact() {
        !this.interacted && (document.createElement('audio').play(), (this.interacted = !0)), this.eachConnection((e) => e.interact());
    }
    static supported() {
        return !__OVERLAY__ && (R.fi && null != window.AudioContext && null != window.RTCPeerConnection ? (r(250678), !0) : (D.info('WebRTC is not supported on', c().name, c().version), !1));
    }
    supported() {
        return !0;
    }
    supports(e) {
        switch (e) {
            case N.AN.AUDIO_INPUT_DEVICE:
                return I.S5;
            case N.AN.AUDIO_OUTPUT_DEVICE:
                return I.ZA;
            case N.AN.VIDEO:
                return R.U8;
            case N.AN.DESKTOP_CAPTURE:
                var n;
                return (null === (n = navigator.mediaDevices) || void 0 === n ? void 0 : n.getDisplayMedia) != null;
            case N.AN.VOICE_PROCESSING:
                return 'Chrome' === c().name;
            case N.AN.NATIVE_PING:
            case N.AN.DIAGNOSTICS:
                return R.Fo;
            case N.AN.DESKTOP_CAPTURE_APPLICATIONS:
            case N.AN.LOOPBACK:
            case N.AN.NOISE_SUPPRESSION:
            case N.AN.AUTOMATIC_GAIN_CONTROL:
                return 'Safari' !== c().name;
            case N.AN.NOISE_CANCELLATION:
                return h()();
            case N.AN.QOS:
            case N.AN.ATTENUATION:
            case N.AN.AUTOMATIC_VAD:
            case N.AN.LEGACY_AUDIO_SUBSYSTEM:
            case N.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM:
            case N.AN.AUTOMATIC_AUDIO_SUBSYSTEM:
            case N.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH:
            case N.AN.DEBUG_LOGGING:
            case N.AN.VOICE_PANNING:
            case N.AN.AUTO_ENABLE:
            case N.AN.DESKTOP_CAPTURE_FORMAT:
            case N.AN.VIDEO_HOOK:
            case N.AN.OPEN_H264:
            case N.AN.AEC_DUMP:
            case N.AN.DISABLE_VIDEO:
            case N.AN.CONNECTION_REPLAY:
            case N.AN.SIMULCAST:
            case N.AN.SCREEN_CAPTURE_KIT:
            default:
                return !1;
        }
    }
    getAudioContext() {
        return null == this._audioContext && (this._audioContext = new AudioContext()), this._audioContext;
    }
    connect(e, n, r) {
        let { ssrc: i, address: a, port: o, modes: s, streamUserId: l, streamParameters: u } = r,
            c = (0, y.Q)(e, n, this.getAudioContext(), u);
        return (c.streamUserId = l), c.setOutputVolume(this.outputVolume), c.setSinkId(this.sinkId), c.once(_.S.Destroy, (e) => this.connections.delete(e)), c.on(_.S.Silence, (e) => this.emit(m.aB.Silence, e)), c.on(_.S.DesktopSourceEnd, this.handleDesktopSourceEnd), c.on(_.S.AudioPermission, this.handleAudioPermission), c.on(_.S.VideoPermission, this.handleVideoPermission), this.interacted && c.interact(), e === N.Yn.DEFAULT && (c.setAudioSource(this.sourceId), this.enabled && c.input.enableAudioInput()), this.connections.add(c), this.emit(m.aB.Connection, c), c;
    }
    findConnection(e) {
        return Array.from(this.connections).find((n) => null == e || n.context === e);
    }
    eachConnection(e, n) {
        this.connections.forEach((r) => {
            (null == n || r.context === n) && e(r);
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
        await this.getAudioContext().audioWorklet.addModule(T);
        let e = new v.Z(this.getAudioContext());
        e.on('permission', this.handleAudioPermission);
        try {
            var n;
            await e.enable(), 'Firefox' === c().name && (await this.handleDeviceChange()), (this.enabled = !0), this.eachConnection((e) => e.input.enableAudioInput(), N.Yn.DEFAULT), null === (n = this.voiceActivityInput) || void 0 === n || n.enable();
        } finally {
            e.destroy();
        }
    }
    setInputVolume(e) {}
    setOutputVolume(e) {
        (this.outputVolume = e), this.connections.forEach((n) => n.setOutputVolume(e));
    }
    getAudioInputDevices() {
        return (0, I.Hg)();
    }
    setAudioInputDevice(e) {
        var n, r;
        (this.sourceId = e), this.eachConnection((n) => n.setAudioSource(e), N.Yn.DEFAULT), null === (n = this.voiceActivityInput) || void 0 === n || n.setSource(e), null === (r = this.loopback) || void 0 === r || r.setAudioSource(e);
    }
    getAudioOutputDevices() {
        return (0, I.HS)();
    }
    setAudioOutputDevice(e) {
        var n;
        (this.sinkId = e), this.connections.forEach((n) => n.setSinkId(e)), null === (n = this.loopback) || void 0 === n || n.setAudioSink(e);
    }
    getVideoInputDevices() {
        return (0, I.l0)();
    }
    setVideoInputDevice(e) {
        this.eachConnection((n) => n.setVideoSource(e), N.Yn.DEFAULT);
    }
    getSupportedVideoCodecs(e) {
        e([]);
    }
    getCodecCapabilities(e) {
        e('');
    }
    async getDesktopSource(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = await b.Z.get(e, n);
        return (this.pendingDesktopInputs[r.id] = r), r.id;
    }
    getScreenPreviews(e, n) {
        return Promise.reject(Error('UNSUPPORTED'));
    }
    getWindowPreviews(e, n) {
        return Promise.reject(Error('UNSUPPORTED'));
    }
    setClipBufferLength(e) {}
    saveClip(e, n) {
        return Promise.reject(Error('UNSUPPORTED'));
    }
    saveClipForUser(e, n, r) {
        return Promise.reject(Error('UNSUPPORTED'));
    }
    updateClipMetadata(e, n) {
        return Promise.reject(Error('UNSUPPORTED'));
    }
    exportClip(e, n) {
        return Promise.reject(Error('UNSUPPORTED'));
    }
    setGoLiveSource(e, n) {
        if (null == e) this.eachConnection((e) => e.setDesktopInput(null), n);
        else if (null != e.desktopDescription && null != this.findConnection(n)) {
            l()(n === N.Yn.STREAM, 'Go live context is not STREAM');
            let r = !1,
                i = this.pendingDesktopInputs[e.desktopDescription.id];
            null != i &&
                this.eachConnection((e) => {
                    e.streamUserId === e.userId && ((r = !0), e.setDesktopInput(i));
                }, n),
                r && delete this.pendingDesktopInputs[e.desktopDescription.id];
        }
    }
    setClipsSource(e) {}
    setClipsQualitySettings(e, n, r) {
        return !1;
    }
    setSoundshareSource(e, n, r) {}
    setAudioSubsystem(e) {}
    queueAudioSubsystem(e) {}
    getAudioSubsystem() {
        return N.iA.STANDARD;
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
    setLoopback(e, n) {
        e && null == this.loopback ? (this.enable(), (this.loopback = new S.Z(this.getAudioContext(), this.sourceId, this.sinkId)), this.loopback.setNoiseCancellation(n.noiseCancellation)) : !e && null != this.loopback && (this.loopback.stop(), (this.loopback = null));
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
    createReplayConnection(e, n) {
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
    getMLSSigningKey(e, n) {
        return Promise.reject(Error('getMLSSigningKey is not supported.'));
    }
    setSidechainCompression(e) {}
    setSidechainCompressionStrength(e) {}
    setNativeDesktopVideoSourcePickerActive(e) {}
    presentNativeScreenSharePicker(e) {}
    releaseNativeDesktopVideoSourcePickerStream() {}
    constructor() {
        super(),
            O(this, 'Video', C.Z),
            O(this, 'Camera', A.Z),
            O(this, '_audioContext', null),
            O(this, 'outputVolume', N.Qx),
            O(this, 'sourceId', N.w5),
            O(this, 'sinkId', N.w5),
            O(this, 'enabled', !1),
            O(this, 'connections', new Set()),
            O(this, 'interacted', !1),
            O(this, 'loopback', null),
            O(this, 'voiceActivityInput', null),
            O(this, 'pendingDesktopInputs', {}),
            O(this, 'enablePromise', null),
            O(this, 'handleActiveSinksChange', (e, n) => {
                this.connections.forEach((r) => r.setHasActiveVideoOutputSink(e, n, 'MediaEngineWebRTC.handleActiveSinksChange'));
            }),
            O(this, 'handleNewListener', (e) => {
                switch (e) {
                    case m.aB.DeviceChange:
                        null != navigator.mediaDevices &&
                            null == navigator.mediaDevices.ondevicechange &&
                            ((navigator.mediaDevices.ondevicechange = () => {
                                this.handleDeviceChange();
                            }),
                            this.handleDeviceChange());
                        break;
                    case m.aB.VoiceActivity:
                        null == this.voiceActivityInput && ((this.voiceActivityInput = new v.Z(this.getAudioContext())), this.voiceActivityInput.setSource(this.sourceId), this.voiceActivityInput.on('voiceactivity', this.handleVoiceActivity), this.enabled && this.voiceActivityInput.enable());
                }
            }),
            O(this, 'handleRemoveListener', (e) => {
                switch (e) {
                    case m.aB.DeviceChange:
                        var n;
                        (null === (n = navigator.mediaDevices) || void 0 === n ? void 0 : n.ondevicechange) != null && 0 === this.listenerCount(m.aB.DeviceChange) && (navigator.mediaDevices.ondevicechange = null);
                        break;
                    case m.aB.VoiceActivity:
                        null != this.voiceActivityInput && 0 === this.listenerCount(m.aB.VoiceActivity) && (this.voiceActivityInput.destroy(), (this.voiceActivityInput = null));
                }
            }),
            O(this, 'handleDeviceChange', () =>
                (0, I.PW)().then((e) => {
                    let [n, r, i] = e;
                    return this.emit(m.aB.DeviceChange, n, r, i);
                })
            ),
            O(this, 'handleVoiceActivity', (e) => {
                this.emit(m.aB.VoiceActivity, e, 0);
            }),
            O(this, 'handleDesktopSourceEnd', () => {
                this.emit(m.aB.DesktopSourceEnd);
            }),
            O(this, 'handleAudioPermission', (e) => {
                this.emit(m.aB.AudioPermission, e);
            }),
            O(this, 'handleVideoPermission', (e) => {
                this.emit(m.aB.VideoPermission, e);
            }),
            this.on('newListener', this.handleNewListener),
            this.on('removeListener', this.handleRemoveListener),
            (0, E.px)(this.handleActiveSinksChange),
            (0, g.Z)(this);
    }
}
