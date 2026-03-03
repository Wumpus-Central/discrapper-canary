"use strict";
n.d(t, { A: () => R }), n(122143);
var r = n(284009),
    i = n.n(r),
    s = n(214958),
    a = n.n(s),
    o = n(972347),
    l = n(738239),
    u = n.n(l),
    c = n(118356),
    d = n(904986),
    _ = n(205693),
    f = n(70909),
    p = n(782425),
    h = n(647457),
    m = n(672239),
    E = n(277738),
    g = n(339702),
    A = n(267411),
    I = n(126208),
    T = n(247872),
    S = n(351871),
    y = n(539541),
    v = n(731854),
    N = n(396574);
let C = new c.Vy("MediaEngineWebRTC");
class R extends o.A {
    Video = y.A;
    Camera = S.A;
    _audioContext = null;
    outputVolume = v.Hz;
    sourceId = v.dx;
    sinkId = v.dx;
    videoInputDeviceId = v.qe;
    enabled = !1;
    connections = new Set();
    interacted = !1;
    loopback = null;
    voiceActivityInput = null;
    desktopInputPool = new T.A();
    enablePromise = null;
    dave = null;
    transientKeys = null;
    maxSupportedProtocolVersion = null;
    constructor() {
        super(),
            this.on("newListener", this.handleNewListener),
            this.on("removeListener", this.handleRemoveListener),
            (0, p.EV)(this.handleActiveSinksChange),
            (0, f.A)(this);
    }
    destroy() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        null != this.voiceActivityInput && (this.voiceActivityInput.destroy(), (this.voiceActivityInput = null)),
            this.eachConnection((t) => t.destroy(e)),
            this.emit(_.bg.Destroy),
            this.removeAllListeners();
    }
    interact() {
        this.interacted || (document.createElement("audio").play(), (this.interacted = !0)),
            this.eachConnection((e) => e.interact());
    }
    static supported() {
        return (
            !__OVERLAY__ &&
            (N.Hz && null != window.AudioContext && null != window.RTCPeerConnection
                ? (n(528416), !0)
                : (C.info("WebRTC is not supported on", a().name, a().version), !1))
        );
    }
    supported() {
        return !0;
    }
    supports(e) {
        switch (e) {
            case v.O5.AUDIO_INPUT_DEVICE:
                return E.sq;
            case v.O5.AUDIO_OUTPUT_DEVICE:
                return E.gY;
            case v.O5.VIDEO:
                return N.g7;
            case v.O5.DESKTOP_CAPTURE:
                return navigator.mediaDevices?.getDisplayMedia != null;
            case v.O5.VOICE_PROCESSING:
                return "Chrome" === a().name;
            case v.O5.NATIVE_PING:
            case v.O5.DIAGNOSTICS:
                return N.fA;
            case v.O5.DESKTOP_CAPTURE_APPLICATIONS:
            case v.O5.LOOPBACK:
            case v.O5.NOISE_SUPPRESSION:
            case v.O5.AUTOMATIC_GAIN_CONTROL:
                return "Safari" !== a().name;
            case v.O5.NOISE_CANCELLATION:
                return u()();
            case v.O5.QOS:
            case v.O5.ATTENUATION:
            case v.O5.AUTOMATIC_VAD:
            case v.O5.LEGACY_AUDIO_SUBSYSTEM:
            case v.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM:
            case v.O5.AUTOMATIC_AUDIO_SUBSYSTEM:
            case v.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH:
            case v.O5.DEBUG_LOGGING:
            case v.O5.VOICE_PANNING:
            case v.O5.AUTO_ENABLE:
            case v.O5.DESKTOP_CAPTURE_FORMAT:
            case v.O5.VIDEO_HOOK:
            case v.O5.AEC_DUMP:
            case v.O5.DISABLE_VIDEO:
            case v.O5.CONNECTION_REPLAY:
            case v.O5.SIMULCAST:
            case v.O5.SCREEN_CAPTURE_KIT:
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
            c = (0, m.d)(u);
        return (
            (c.streamUserId = o),
            c.setOutputVolume(this.outputVolume),
            c.setSinkId(this.sinkId),
            c.once(d.y.Destroy, (e) => this.connections.delete(e)),
            c.on(d.y.Silence, (e) => this.emit(_.bg.Silence, e)),
            c.on(d.y.DesktopSourceEnd, this.handleDesktopSourceEnd),
            c.on(d.y.AudioPermission, this.handleAudioPermission),
            c.on(d.y.VideoPermission, this.handleVideoPermission),
            this.interacted && c.interact(),
            e === v.x.DEFAULT && (c.setAudioSource(this.sourceId), this.enabled && c.input.enableAudioInput()),
            this.connections.add(c),
            this.emit(_.bg.Connection, c),
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
        await this.getAudioContext().audioWorklet.addModule(g);
        let e = new h.A(this.getAudioContext());
        e.on("permission", this.handleAudioPermission);
        try {
            await e.enable(),
                "Firefox" === a().name && (await this.handleDeviceChange()),
                (this.enabled = !0),
                this.eachConnection((e) => e.input.enableAudioInput(), v.x.DEFAULT),
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
        return (0, E._e)();
    }
    setAudioInputDevice(e) {
        let t = this.sourceId;
        (this.sourceId = e),
            this.eachConnection((t) => t.setAudioSource(e), v.x.DEFAULT),
            this.voiceActivityInput?.setSource(e),
            this.loopback?.setAudioSource(e),
            this.emit(_.bg.SelectedDeviceChange, v.oh.AUDIO_INPUT, t, e);
    }
    getAudioOutputDevices() {
        return (0, E.tS)();
    }
    setAudioOutputDevice(e) {
        let t = this.sinkId;
        (this.sinkId = e),
            this.connections.forEach((t) => t.setSinkId(e)),
            this.loopback?.setAudioSink(e),
            this.emit(_.bg.SelectedDeviceChange, v.oh.AUDIO_OUTPUT, t, e);
    }
    getVideoInputDevices() {
        return (0, E.DT)();
    }
    setVideoInputDevice(e) {
        (this.videoInputDeviceId = e), this.eachConnection((t) => t.setVideoSource(e), v.x.DEFAULT);
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
            i()(t === v.x.STREAM, "Go live context is not STREAM");
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
    getAudioSubsystem() {
        return v.rB.STANDARD;
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
              (this.loopback = new I.A(this.getAudioContext(), this.sourceId, this.sinkId)),
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
            ? (0, A.o7)()
                ? (0, A.Hv)()
                    ? new Promise((e, t) => {
                          (0, A.zs)()
                              .then((t) => {
                                  (this.dave = t),
                                      (this.transientKeys = (0, A.Lc)()),
                                      (this.maxSupportedProtocolVersion = t.MaxSupportedProtocolVersion()),
                                      C.info(
                                          "Successfully initialized DAVE, version:",
                                          this.maxSupportedProtocolVersion,
                                      ),
                                      e();
                              })
                              .catch((e) => {
                                  (this.maxSupportedProtocolVersion = 0), C.error("Failed to initialize DAVE", e), t(e);
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
    handleActiveSinksChange = (e, t) => {
        this.connections.forEach((n) =>
            n.setHasActiveVideoOutputSink(e, t, "MediaEngineWebRTC.handleActiveSinksChange"),
        );
    };
    handleNewListener = (e) => {
        switch (e) {
            case _.bg.DeviceChange:
                null != navigator.mediaDevices &&
                    null == navigator.mediaDevices.ondevicechange &&
                    ((navigator.mediaDevices.ondevicechange = () => {
                        this.handleDeviceChange();
                    }),
                    this.handleDeviceChange());
                break;
            case _.bg.VoiceActivity:
                null == this.voiceActivityInput &&
                    ((this.voiceActivityInput = new h.A(this.getAudioContext())),
                    this.voiceActivityInput.setSource(this.sourceId),
                    this.voiceActivityInput.on("voiceactivity", this.handleVoiceActivity),
                    this.enabled && this.voiceActivityInput.enable());
        }
    };
    handleRemoveListener = (e) => {
        switch (e) {
            case _.bg.DeviceChange:
                navigator.mediaDevices?.ondevicechange != null &&
                    0 === this.listenerCount(_.bg.DeviceChange) &&
                    (navigator.mediaDevices.ondevicechange = null);
                break;
            case _.bg.VoiceActivity:
                null != this.voiceActivityInput &&
                    0 === this.listenerCount(_.bg.VoiceActivity) &&
                    (this.voiceActivityInput.destroy(), (this.voiceActivityInput = null));
        }
    };
    handleDeviceChange = () =>
        (0, E.oG)().then((e) => {
            let [t, n, r] = e;
            return this.emit(_.bg.DeviceChange, t, n, r);
        });
    handleVoiceActivity = (e) => {
        this.emit(_.bg.VoiceActivity, e, 0);
    };
    handleDesktopSourceEnd = () => {
        this.emit(_.bg.DesktopSourceEnd);
    };
    handleAudioPermission = (e) => {
        this.emit(_.bg.AudioPermission, e);
    };
    handleVideoPermission = (e) => {
        this.emit(_.bg.VideoPermission, e);
    };
}
