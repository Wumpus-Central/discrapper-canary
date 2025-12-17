n.d(t, { Z: () => N }), n(457542), n(415506), n(388685), n(600040);
var r = n(512722),
    i = n.n(r),
    a = n(264344),
    o = n.n(a),
    s = n(47770),
    l = n(174498),
    c = n.n(l),
    u = n(579092),
    d = n(839548),
    f = n(46973),
    p = n(734298),
    _ = n(970838),
    m = n(68721),
    h = n(997653),
    g = n(740197),
    E = n(340217),
    b = n(586021),
    y = n(579237),
    O = n(867985),
    v = n(582168),
    S = n(825040),
    I = n(65154),
    T = n(436620);
function C(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let A = new u.Yd("MediaEngineWebRTC");
class N extends s.Z {
    destroy() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        null != this.voiceActivityInput && (this.voiceActivityInput.destroy(), (this.voiceActivityInput = null)),
            this.eachConnection((t) => t.destroy(e)),
            this.emit(f.aB.Destroy),
            this.removeAllListeners();
    }
    interact() {
        this.interacted || (document.createElement("audio").play(), (this.interacted = !0)),
            this.eachConnection((e) => e.interact());
    }
    static supported() {
        return (
            !__OVERLAY__ &&
            (T.fi && null != window.AudioContext && null != window.RTCPeerConnection
                ? (n(266370), !0)
                : (A.info("WebRTC is not supported on", o().name, o().version), !1))
        );
    }
    supported() {
        return !0;
    }
    supports(e) {
        switch (e) {
            case I.AN.AUDIO_INPUT_DEVICE:
                return g.S5;
            case I.AN.AUDIO_OUTPUT_DEVICE:
                return g.ZA;
            case I.AN.VIDEO:
                return T.U8;
            case I.AN.DESKTOP_CAPTURE:
                var t;
                return (null == (t = navigator.mediaDevices) ? void 0 : t.getDisplayMedia) != null;
            case I.AN.VOICE_PROCESSING:
                return "Chrome" === o().name;
            case I.AN.NATIVE_PING:
            case I.AN.DIAGNOSTICS:
                return T.Fo;
            case I.AN.DESKTOP_CAPTURE_APPLICATIONS:
            case I.AN.LOOPBACK:
            case I.AN.NOISE_SUPPRESSION:
            case I.AN.AUTOMATIC_GAIN_CONTROL:
                return "Safari" !== o().name;
            case I.AN.NOISE_CANCELLATION:
                return c()();
            case I.AN.QOS:
            case I.AN.ATTENUATION:
            case I.AN.AUTOMATIC_VAD:
            case I.AN.LEGACY_AUDIO_SUBSYSTEM:
            case I.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM:
            case I.AN.AUTOMATIC_AUDIO_SUBSYSTEM:
            case I.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH:
            case I.AN.DEBUG_LOGGING:
            case I.AN.VOICE_PANNING:
            case I.AN.AUTO_ENABLE:
            case I.AN.DESKTOP_CAPTURE_FORMAT:
            case I.AN.VIDEO_HOOK:
            case I.AN.AEC_DUMP:
            case I.AN.DISABLE_VIDEO:
            case I.AN.CONNECTION_REPLAY:
            case I.AN.SIMULCAST:
            case I.AN.SCREEN_CAPTURE_KIT:
            default:
                return !1;
        }
    }
    getAudioContext() {
        return null == this._audioContext && (this._audioContext = new AudioContext()), this._audioContext;
    }
    connect(e, t, n) {
        let { ssrc: r, address: i, port: a, modes: o, streamUserId: s, streamParameters: l } = n,
            c = {
                context: e,
                userId: t,
                audioContext: this.getAudioContext(),
                streamParameters: l,
                dave: this.dave,
                transientKeys: this.transientKeys,
            },
            u = (0, h.Q)(c);
        return (
            (u.streamUserId = s),
            u.setOutputVolume(this.outputVolume),
            u.setSinkId(this.sinkId),
            u.once(d.S.Destroy, (e) => this.connections.delete(e)),
            u.on(d.S.Silence, (e) => this.emit(f.aB.Silence, e)),
            u.on(d.S.DesktopSourceEnd, this.handleDesktopSourceEnd),
            u.on(d.S.AudioPermission, this.handleAudioPermission),
            u.on(d.S.VideoPermission, this.handleVideoPermission),
            this.interacted && u.interact(),
            e === I.Yn.DEFAULT && (u.setAudioSource(this.sourceId), this.enabled && u.input.enableAudioInput()),
            this.connections.add(u),
            this.emit(f.aB.Connection, u),
            u
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
        await this.getAudioContext().audioWorklet.addModule(E);
        let e = new m.Z(this.getAudioContext());
        e.on("permission", this.handleAudioPermission);
        try {
            var t;
            await e.enable(),
                "Firefox" === o().name && (await this.handleDeviceChange()),
                (this.enabled = !0),
                this.eachConnection((e) => e.input.enableAudioInput(), I.Yn.DEFAULT),
                null == (t = this.voiceActivityInput) || t.enable();
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
        return (0, g.Hg)();
    }
    setAudioInputDevice(e) {
        var t, n;
        let r = this.sourceId;
        (this.sourceId = e),
            this.eachConnection((t) => t.setAudioSource(e), I.Yn.DEFAULT),
            null == (t = this.voiceActivityInput) || t.setSource(e),
            null == (n = this.loopback) || n.setAudioSource(e),
            this.emit(f.aB.SelectedDeviceChange, I.h7.AUDIO_INPUT, r, e);
    }
    getAudioOutputDevices() {
        return (0, g.HS)();
    }
    setAudioOutputDevice(e) {
        var t;
        let n = this.sinkId;
        (this.sinkId = e),
            this.connections.forEach((t) => t.setSinkId(e)),
            null == (t = this.loopback) || t.setAudioSink(e),
            this.emit(f.aB.SelectedDeviceChange, I.h7.AUDIO_OUTPUT, n, e);
    }
    getVideoInputDevices() {
        return (0, g.l0)();
    }
    setVideoInputDevice(e) {
        (this.videoInputDeviceId = e), this.eachConnection((t) => t.setVideoSource(e), I.Yn.DEFAULT);
    }
    getVideoInputDeviceId() {
        return this.videoInputDeviceId;
    }
    setAsyncVideoInputDeviceInit(e) {}
    setAsyncClipsSourceDeinit(e) {}
    getSupportedVideoCodecs(e) {
        e([]);
    }
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
            i()(t === I.Yn.STREAM, "Go live context is not STREAM");
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
        return I.iA.STANDARD;
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
              (this.loopback = new y.Z(this.getAudioContext(), this.sourceId, this.sinkId)),
              this.loopback.setNoiseCancellation(t.noiseCancellation))
            : e || null == this.loopback || (this.loopback.stop(), (this.loopback = null));
    }
    getLoopback() {
        return null != this.loopback;
    }
    setH264Enabled(e) {}
    setAv1Enabled(e) {}
    setH265Enabled(e) {}
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
            ? (0, b.IT)()
                ? (0, b.Ft)()
                    ? new Promise((e, t) => {
                          (0, b.D5)()
                              .then((t) => {
                                  (this.dave = t),
                                      (this.transientKeys = (0, b.Yk)()),
                                      (this.maxSupportedProtocolVersion = t.MaxSupportedProtocolVersion()),
                                      A.info(
                                          "Successfully initialized DAVE, version:",
                                          this.maxSupportedProtocolVersion,
                                      ),
                                      e();
                              })
                              .catch((e) => {
                                  (this.maxSupportedProtocolVersion = 0), A.error("Failed to initialize DAVE", e), t(e);
                              });
                      })
                    : ((this.maxSupportedProtocolVersion = 0),
                      Promise.reject(Error("WebAssembly is not supported on this platform.")))
                : ((this.maxSupportedProtocolVersion = 0),
                  Promise.reject(Error("Encoded transforms are not supported on this platform.")))
            : ((this.maxSupportedProtocolVersion = 0), Promise.resolve());
    }
    constructor() {
        super(),
            C(this, "Video", S.Z),
            C(this, "Camera", v.Z),
            C(this, "_audioContext", null),
            C(this, "outputVolume", I.Qx),
            C(this, "sourceId", I.w5),
            C(this, "sinkId", I.w5),
            C(this, "videoInputDeviceId", I.Av),
            C(this, "enabled", !1),
            C(this, "connections", new Set()),
            C(this, "interacted", !1),
            C(this, "loopback", null),
            C(this, "voiceActivityInput", null),
            C(this, "desktopInputPool", new O.Z()),
            C(this, "enablePromise", null),
            C(this, "dave", null),
            C(this, "transientKeys", null),
            C(this, "maxSupportedProtocolVersion", null),
            C(this, "handleActiveSinksChange", (e, t) => {
                this.connections.forEach((n) =>
                    n.setHasActiveVideoOutputSink(e, t, "MediaEngineWebRTC.handleActiveSinksChange"),
                );
            }),
            C(this, "handleNewListener", (e) => {
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
                        null == this.voiceActivityInput &&
                            ((this.voiceActivityInput = new m.Z(this.getAudioContext())),
                            this.voiceActivityInput.setSource(this.sourceId),
                            this.voiceActivityInput.on("voiceactivity", this.handleVoiceActivity),
                            this.enabled && this.voiceActivityInput.enable());
                }
            }),
            C(this, "handleRemoveListener", (e) => {
                switch (e) {
                    case f.aB.DeviceChange:
                        var t;
                        (null == (t = navigator.mediaDevices) ? void 0 : t.ondevicechange) != null &&
                            0 === this.listenerCount(f.aB.DeviceChange) &&
                            (navigator.mediaDevices.ondevicechange = null);
                        break;
                    case f.aB.VoiceActivity:
                        null != this.voiceActivityInput &&
                            0 === this.listenerCount(f.aB.VoiceActivity) &&
                            (this.voiceActivityInput.destroy(), (this.voiceActivityInput = null));
                }
            }),
            C(this, "handleDeviceChange", () =>
                (0, g.PW)().then((e) => {
                    let [t, n, r] = e;
                    return this.emit(f.aB.DeviceChange, t, n, r);
                }),
            ),
            C(this, "handleVoiceActivity", (e) => {
                this.emit(f.aB.VoiceActivity, e, 0);
            }),
            C(this, "handleDesktopSourceEnd", () => {
                this.emit(f.aB.DesktopSourceEnd);
            }),
            C(this, "handleAudioPermission", (e) => {
                this.emit(f.aB.AudioPermission, e);
            }),
            C(this, "handleVideoPermission", (e) => {
                this.emit(f.aB.VideoPermission, e);
            }),
            this.on("newListener", this.handleNewListener),
            this.on("removeListener", this.handleRemoveListener),
            (0, _.px)(this.handleActiveSinksChange),
            (0, p.Z)(this);
    }
}
