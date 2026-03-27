"use strict";
n.d(t, { A: () => O });
var r = n(627968);
n(122143), n(64700);
var i = n(284009),
    s = n.n(i),
    a = n(214958),
    o = n.n(a),
    l = n(972347),
    u = n(738239),
    c = n.n(u),
    d = n(118356),
    _ = n(904986),
    f = n(205693),
    p = n(70909),
    h = n(782425),
    m = n(647457),
    E = n(672239),
    g = n(277738),
    A = n(339702),
    I = n(267411),
    T = n(126208),
    S = n(247872),
    y = n(351871),
    v = n(539541),
    N = n(731854),
    C = n(396574);
let R = new d.Vy("MediaEngineWebRTC");
class O extends l.A {
    Video = v.A;
    Camera = (e) => (0, r.jsx)(y.A, { ...e, onDeviceChange: this.handleDeviceChange });
    _audioContext = null;
    outputVolume = N.Hz;
    sourceId = N.dx;
    sinkId = N.dx;
    videoInputDeviceId = N.qe;
    enabled = !1;
    connections = new Set();
    interacted = !1;
    loopback = null;
    voiceActivityInput = null;
    desktopInputPool = new S.A();
    enablePromise = null;
    dave = null;
    transientKeys = null;
    maxSupportedProtocolVersion = null;
    constructor() {
        super(),
            this.on("newListener", this.handleNewListener),
            this.on("removeListener", this.handleRemoveListener),
            (0, h.EV)(this.handleActiveSinksChange),
            (0, p.A)(this);
    }
    destroy() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        null != this.voiceActivityInput && (this.voiceActivityInput.destroy(), (this.voiceActivityInput = null)),
            this.eachConnection((t) => t.destroy(e)),
            this.emit(f.bg.Destroy),
            this.removeAllListeners();
    }
    interact() {
        this.interacted || (document.createElement("audio").play(), (this.interacted = !0)),
            this.eachConnection((e) => e.interact());
    }
    static supported() {
        return (
            !__OVERLAY__ &&
            (C.Hz && null != window.AudioContext && null != window.RTCPeerConnection
                ? (n(528416), !0)
                : (R.info("WebRTC is not supported on", o().name, o().version), !1))
        );
    }
    supported() {
        return !0;
    }
    supports(e) {
        switch (e) {
            case N.O5.AUDIO_INPUT_DEVICE:
                return g.sq;
            case N.O5.AUDIO_OUTPUT_DEVICE:
                return g.gY;
            case N.O5.VIDEO:
                return C.g7;
            case N.O5.DESKTOP_CAPTURE:
                return navigator.mediaDevices?.getDisplayMedia != null;
            case N.O5.VOICE_PROCESSING:
                return "Chrome" === o().name;
            case N.O5.NATIVE_PING:
            case N.O5.DIAGNOSTICS:
                return C.fA;
            case N.O5.DESKTOP_CAPTURE_APPLICATIONS:
            case N.O5.LOOPBACK:
            case N.O5.NOISE_SUPPRESSION:
            case N.O5.AUTOMATIC_GAIN_CONTROL:
                return "Safari" !== o().name;
            case N.O5.NOISE_CANCELLATION:
                return c()();
            case N.O5.QOS:
            case N.O5.ATTENUATION:
            case N.O5.AUTOMATIC_VAD:
            case N.O5.LEGACY_AUDIO_SUBSYSTEM:
            case N.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM:
            case N.O5.AUTOMATIC_AUDIO_SUBSYSTEM:
            case N.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH:
            case N.O5.DEBUG_LOGGING:
            case N.O5.VOICE_PANNING:
            case N.O5.AUTO_ENABLE:
            case N.O5.DESKTOP_CAPTURE_FORMAT:
            case N.O5.VIDEO_HOOK:
            case N.O5.AEC_DUMP:
            case N.O5.DISABLE_VIDEO:
            case N.O5.CONNECTION_REPLAY:
            case N.O5.SIMULCAST:
            case N.O5.SCREEN_CAPTURE_KIT:
            default:
                return !1;
        }
    }
    getAudioContext() {
        return null == this._audioContext && (this._audioContext = new AudioContext()), this._audioContext;
    }
    connect(e, t, n) {
        let { ssrc: r, address: i, port: s, modes: a, streamUserId: o, streamParameters: l } = n,
            u = {
                context: e,
                userId: t,
                audioContext: this.getAudioContext(),
                streamParameters: l,
                dave: this.dave,
                transientKeys: this.transientKeys,
            },
            c = (0, E.d)(u);
        return (
            (c.streamUserId = o),
            c.setOutputVolume(this.outputVolume),
            c.setSinkId(this.sinkId),
            c.once(_.y.Destroy, (e) => this.connections.delete(e)),
            c.on(_.y.Silence, (e) => this.emit(f.bg.Silence, e)),
            c.on(_.y.DesktopSourceEnd, this.handleDesktopSourceEnd),
            c.on(_.y.AudioPermission, this.handleAudioPermission),
            c.on(_.y.VideoPermission, this.handleVideoPermission),
            this.interacted && c.interact(),
            e === N.x.DEFAULT && (c.setAudioSource(this.sourceId), this.enabled && c.input.enableAudioInput()),
            this.connections.add(c),
            this.emit(f.bg.Connection, c),
            c
        );
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
        await this.getAudioContext().audioWorklet.addModule(A);
        let e = new m.A(this.getAudioContext());
        e.on("permission", this.handleAudioPermission);
        try {
            await e.enable(),
                "Firefox" === o().name && (await this.handleDeviceChange()),
                (this.enabled = !0),
                this.eachConnection((e) => e.input.enableAudioInput(), N.x.DEFAULT),
                this.voiceActivityInput?.enable();
        } finally {
            e.destroy();
        }
    }
    setInputVolume(e) {}
    setOutputVolume(e) {
        (this.outputVolume = e), this.connections.forEach((t) => t.setOutputVolume(e));
    }
    getNoiseCancellationStats() {
        return Promise.reject(Error("getNoiseCancellationStats is not supported on browsers."));
    }
    setNoiseCancellationEnableStats(e) {}
    setNoiseCancellationDuringProcessing(e) {}
    setNoiseCancellationAfterProcessing(e) {}
    setVADAfterWebrtc(e) {}
    getAudioInputDevices() {
        return (0, g._e)();
    }
    setAudioInputDevice(e) {
        let t = this.sourceId;
        (this.sourceId = e),
            this.eachConnection((t) => t.setAudioSource(e), N.x.DEFAULT),
            this.voiceActivityInput?.setSource(e),
            this.loopback?.setAudioSource(e),
            this.emit(f.bg.SelectedDeviceChange, N.oh.AUDIO_INPUT, t, e);
    }
    getAudioOutputDevices() {
        return (0, g.tS)();
    }
    setAudioOutputDevice(e) {
        let t = this.sinkId;
        (this.sinkId = e),
            this.connections.forEach((t) => t.setSinkId(e)),
            this.loopback?.setAudioSink(e),
            this.emit(f.bg.SelectedDeviceChange, N.oh.AUDIO_OUTPUT, t, e);
    }
    getVideoInputDevices() {
        return (0, g.DT)();
    }
    setVideoInputDevice(e) {
        (this.videoInputDeviceId = e), this.eachConnection((t) => t.setVideoSource(e), N.x.DEFAULT);
    }
    getVideoInputDeviceId() {
        return this.videoInputDeviceId;
    }
    setAsyncVideoInputDeviceInit(e) {}
    getCodecCapabilities(e) {
        e("");
    }
    async getDesktopSource(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (await this.desktopInputPool.acquire(e, t)).id;
    }
    getScreenPreviews(e, t) {
        return Promise.reject(Error("UNSUPPORTED"));
    }
    getWindowPreviews(e, t) {
        return Promise.reject(Error("UNSUPPORTED"));
    }
    getSingleWindowPreview(e, t, n) {
        return Promise.reject(Error("UNSUPPORTED"));
    }
    setClipsModulePath(e) {}
    setClipsDataPath(e) {}
    setClipBufferLength(e) {}
    setClipsMLPipelineEnabled(e) {}
    setClipsMLPipelineTypeEnabled(e, t) {}
    saveClip(e, t) {
        return Promise.reject(Error("UNSUPPORTED"));
    }
    saveClipForUser(e, t, n) {
        return Promise.reject(Error("UNSUPPORTED"));
    }
    updateClipMetadata(e, t) {
        return Promise.reject(Error("UNSUPPORTED"));
    }
    exportClip(e, t) {
        return Promise.reject(Error("UNSUPPORTED"));
    }
    saveScreenshot(e, t, n, r, i) {
        return Promise.reject(Error("UNSUPPORTED"));
    }
    setGoLiveSource(e, t) {
        if (null == e) this.eachConnection((e) => e.setDesktopInput(null), t);
        else if (null != e.desktopDescription && null != this.findConnection(t)) {
            s()(t === N.x.STREAM, "Go live context is not STREAM");
            let n = !1,
                r = this.desktopInputPool.get(e.desktopDescription.id);
            if (null == r) return;
            this.eachConnection((e) => {
                e.streamUserId === e.userId && ((n = !0), e.setDesktopInput(r));
            }, t),
                n || this.desktopInputPool.release(r);
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
    updateFieldTrial(e, t) {}
    getAudioSubsystem() {
        return N.rB.STANDARD;
    }
    getAudioLayer() {
        return "";
    }
    getDebugLogging() {
        return !1;
    }
    setDebugLogging(e) {}
    writeAudioDebugState() {
        return Promise.reject(Error("Audio debug state is not supported."));
    }
    setAudioInputBypassSystemProcessing(e) {}
    setLoopback(e, t) {
        e && null == this.loopback
            ? (this.enable(),
              (this.loopback = new T.A(this.getAudioContext(), this.sourceId, this.sinkId)),
              this.loopback.setNoiseCancellation(t.noiseCancellation))
            : e || null == this.loopback || (this.loopback.stop(), (this.loopback = null));
    }
    getLoopback() {
        return null != this.loopback;
    }
    getCodecSurvey() {
        return Promise.reject(Error("getCodecSurvey is not implemented on MediaEngine of browsers."));
    }
    startAecDump() {}
    stopAecDump() {}
    setAecDump(e) {}
    startRecordingRawSamples(e) {
        throw Error("startRecordingRawSamples is not supported on browsers.");
    }
    stopRecordingRawSamples() {
        throw Error("stopRecordingRawSamples is not supported on browsers.");
    }
    createReplayConnection(e, t) {
        throw Error("Connection replay is not supported.");
    }
    setOnVideoContainerResized(e) {}
    setMaxSyncDelayOverride(e) {}
    rankRtcRegions(e) {
        return Promise.reject(Error("RTC region latency test is not supported."));
    }
    applyMediaFilterSettings(e) {
        return Promise.resolve();
    }
    startLocalAudioRecording() {
        return Promise.reject(Error("startLocalAudioRecording is not supported."));
    }
    stopLocalAudioRecording(e) {}
    setHasFullbandPerformance(e) {}
    getSupportedSecureFramesProtocolVersion() {
        if (null == this.maxSupportedProtocolVersion)
            throw Error("getSupportedSecureFramesProtocolVersion called before DAVE was initialized");
        return this.maxSupportedProtocolVersion;
    }
    getSupportedBandwidthEstimationExperiments(e) {
        e([]);
    }
    getMLSSigningKey(e, t) {
        return Promise.reject(Error("getMLSSigningKey is not supported."));
    }
    setSidechainCompression(e) {}
    setSidechainCompressionStrength(e) {}
    setNativeDesktopVideoSourcePickerActive(e) {}
    presentNativeScreenSharePicker(e) {}
    releaseNativeDesktopVideoSourcePickerStream() {}
    setMaybePreprocessMute(e) {}
    getSystemMicrophoneMode() {
        return Promise.resolve("");
    }
    showSystemCaptureConfigurationUI(e) {}
    fetchAsyncResources(e) {
        return e.fetchDave
            ? (0, I.o7)()
                ? (0, I.Hv)()
                    ? new Promise((e, t) => {
                          (0, I.zs)()
                              .then((t) => {
                                  (this.dave = t),
                                      (this.transientKeys = (0, I.Lc)()),
                                      (this.maxSupportedProtocolVersion = t.MaxSupportedProtocolVersion()),
                                      R.info(
                                          "Successfully initialized DAVE, version:",
                                          this.maxSupportedProtocolVersion,
                                      ),
                                      e();
                              })
                              .catch((e) => {
                                  (this.maxSupportedProtocolVersion = 0), R.error("Failed to initialize DAVE", e), t(e);
                              });
                      })
                    : ((this.maxSupportedProtocolVersion = 0),
                      Promise.reject(Error("WebAssembly is not supported on this platform.")))
                : ((this.maxSupportedProtocolVersion = 0),
                  Promise.reject(Error("Encoded transforms are not supported on this platform.")))
            : ((this.maxSupportedProtocolVersion = 0), Promise.resolve());
    }
    getDeviceOSVolume(e) {
        return Promise.resolve(void 0);
    }
    getDeviceOSMuted(e) {
        return Promise.resolve(void 0);
    }
    getDeviceAudioEffects(e) {
        return Promise.reject(Error("Device audio effect querying not supported on browsers."));
    }
    handleActiveSinksChange = (e, t) => {
        this.connections.forEach((n) =>
            n.setHasActiveVideoOutputSink(e, t, "MediaEngineWebRTC.handleActiveSinksChange"),
        );
    };
    handleNewListener = (e) => {
        switch (e) {
            case f.bg.DeviceChange:
                null != navigator.mediaDevices &&
                    null == navigator.mediaDevices.ondevicechange &&
                    ((navigator.mediaDevices.ondevicechange = () => {
                        this.handleDeviceChange();
                    }),
                    this.handleDeviceChange());
                break;
            case f.bg.VoiceActivity:
                null == this.voiceActivityInput &&
                    ((this.voiceActivityInput = new m.A(this.getAudioContext())),
                    this.voiceActivityInput.setSource(this.sourceId),
                    this.voiceActivityInput.on("voiceactivity", this.handleVoiceActivity),
                    this.enabled && this.voiceActivityInput.enable());
        }
    };
    handleRemoveListener = (e) => {
        switch (e) {
            case f.bg.DeviceChange:
                navigator.mediaDevices?.ondevicechange != null &&
                    0 === this.listenerCount(f.bg.DeviceChange) &&
                    (navigator.mediaDevices.ondevicechange = null);
                break;
            case f.bg.VoiceActivity:
                null != this.voiceActivityInput &&
                    0 === this.listenerCount(f.bg.VoiceActivity) &&
                    (this.voiceActivityInput.destroy(), (this.voiceActivityInput = null));
        }
    };
    handleDeviceChange = async () => {
        let [e, t, n] = await (0, g.oG)();
        this.emit(f.bg.DeviceChange, e, t, n);
    };
    handleVoiceActivity = (e) => {
        this.emit(f.bg.VoiceActivity, e, 0);
    };
    handleDesktopSourceEnd = () => {
        this.emit(f.bg.DesktopSourceEnd);
    };
    handleAudioPermission = (e) => {
        this.emit(f.bg.AudioPermission, e), this.handleDeviceChange();
    };
    handleVideoPermission = (e) => {
        this.emit(f.bg.VideoPermission, e), this.handleDeviceChange();
    };
}
