n.d(t, {
    A: () => N,
}),
    n(492834),
    n(65821),
    n(896048),
    n(122143);
var r = n(284009),
    i = n.n(r),
    a = n(214958),
    o = n.n(a),
    s = n(972347),
    l = n(738239),
    c = n.n(l),
    u = n(118356),
    d = n(904986),
    f = n(205693),
    p = n(70909),
    _ = n(782425),
    h = n(647457),
    m = n(672239),
    g = n(277738),
    E = n(339702),
    y = n(267411),
    b = n(126208),
    O = n(247872),
    v = n(351871),
    A = n(539541),
    I = n(731854),
    S = n(396574);

function T(e, t, n) {
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
let C = new u.Vy("MediaEngineWebRTC");
class N extends s.A {
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
            (S.Hz && null != window.AudioContext && null != window.RTCPeerConnection
                ? (n(528416), !0)
                : (C.info("WebRTC is not supported on", o().name, o().version), !1))
        );
    }
    supported() {
        return !0;
    }
    supports(e) {
        switch (e) {
            case I.O5.AUDIO_INPUT_DEVICE:
                return g.sq;
            case I.O5.AUDIO_OUTPUT_DEVICE:
                return g.gY;
            case I.O5.VIDEO:
                return S.g7;
            case I.O5.DESKTOP_CAPTURE:
                var t;
                return (null == (t = navigator.mediaDevices) ? void 0 : t.getDisplayMedia) != null;
            case I.O5.VOICE_PROCESSING:
                return "Chrome" === o().name;
            case I.O5.NATIVE_PING:
            case I.O5.DIAGNOSTICS:
                return S.fA;
            case I.O5.DESKTOP_CAPTURE_APPLICATIONS:
            case I.O5.LOOPBACK:
            case I.O5.NOISE_SUPPRESSION:
            case I.O5.AUTOMATIC_GAIN_CONTROL:
                return "Safari" !== o().name;
            case I.O5.NOISE_CANCELLATION:
                return c()();
            case I.O5.QOS:
            case I.O5.ATTENUATION:
            case I.O5.AUTOMATIC_VAD:
            case I.O5.LEGACY_AUDIO_SUBSYSTEM:
            case I.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM:
            case I.O5.AUTOMATIC_AUDIO_SUBSYSTEM:
            case I.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH:
            case I.O5.DEBUG_LOGGING:
            case I.O5.VOICE_PANNING:
            case I.O5.AUTO_ENABLE:
            case I.O5.DESKTOP_CAPTURE_FORMAT:
            case I.O5.VIDEO_HOOK:
            case I.O5.AEC_DUMP:
            case I.O5.DISABLE_VIDEO:
            case I.O5.CONNECTION_REPLAY:
            case I.O5.SIMULCAST:
            case I.O5.SCREEN_CAPTURE_KIT:
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
            u = (0, m.d)(c);
        return (
            (u.streamUserId = s),
            u.setOutputVolume(this.outputVolume),
            u.setSinkId(this.sinkId),
            u.once(d.y.Destroy, (e) => this.connections.delete(e)),
            u.on(d.y.Silence, (e) => this.emit(f.bg.Silence, e)),
            u.on(d.y.DesktopSourceEnd, this.handleDesktopSourceEnd),
            u.on(d.y.AudioPermission, this.handleAudioPermission),
            u.on(d.y.VideoPermission, this.handleVideoPermission),
            this.interacted && u.interact(),
            e === I.x.DEFAULT && (u.setAudioSource(this.sourceId), this.enabled && u.input.enableAudioInput()),
            this.connections.add(u),
            this.emit(f.bg.Connection, u),
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
        let e = new h.A(this.getAudioContext());
        e.on("permission", this.handleAudioPermission);
        try {
            var t;
            await e.enable(),
                "Firefox" === o().name && (await this.handleDeviceChange()),
                (this.enabled = !0),
                this.eachConnection((e) => e.input.enableAudioInput(), I.x.DEFAULT),
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
        return (0, g._e)();
    }
    setAudioInputDevice(e) {
        var t, n;
        let r = this.sourceId;
        (this.sourceId = e),
            this.eachConnection((t) => t.setAudioSource(e), I.x.DEFAULT),
            null == (t = this.voiceActivityInput) || t.setSource(e),
            null == (n = this.loopback) || n.setAudioSource(e),
            this.emit(f.bg.SelectedDeviceChange, I.oh.AUDIO_INPUT, r, e);
    }
    getAudioOutputDevices() {
        return (0, g.tS)();
    }
    setAudioOutputDevice(e) {
        var t;
        let n = this.sinkId;
        (this.sinkId = e),
            this.connections.forEach((t) => t.setSinkId(e)),
            null == (t = this.loopback) || t.setAudioSink(e),
            this.emit(f.bg.SelectedDeviceChange, I.oh.AUDIO_OUTPUT, n, e);
    }
    getVideoInputDevices() {
        return (0, g.DT)();
    }
    setVideoInputDevice(e) {
        (this.videoInputDeviceId = e), this.eachConnection((t) => t.setVideoSource(e), I.x.DEFAULT);
    }
    getVideoInputDeviceId() {
        return this.videoInputDeviceId;
    }
    setAsyncVideoInputDeviceInit(e) {}
    setAsyncClipsSourceDeinit(e) {}
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
    setClipsBufferSize(e) {}
    setClipsMLPipelineEnabled(e) {}
    setClipsMLPipelineTypeEnabled(e, t) {}
    setClipsMaxPendingTasks(e) {}
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
            i()(t === I.x.STREAM, "Go live context is not STREAM");
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
        return I.rB.STANDARD;
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
              (this.loopback = new b.A(this.getAudioContext(), this.sourceId, this.sinkId)),
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
            ? (0, y.o7)()
                ? (0, y.Hv)()
                    ? new Promise((e, t) => {
                          (0, y.zs)()
                              .then((t) => {
                                  (this.dave = t),
                                      (this.transientKeys = (0, y.Lc)()),
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
    constructor() {
        super(),
            T(this, "Video", A.A),
            T(this, "Camera", v.A),
            T(this, "_audioContext", null),
            T(this, "outputVolume", I.Hz),
            T(this, "sourceId", I.dx),
            T(this, "sinkId", I.dx),
            T(this, "videoInputDeviceId", I.qe),
            T(this, "enabled", !1),
            T(this, "connections", new Set()),
            T(this, "interacted", !1),
            T(this, "loopback", null),
            T(this, "voiceActivityInput", null),
            T(this, "desktopInputPool", new O.A()),
            T(this, "enablePromise", null),
            T(this, "dave", null),
            T(this, "transientKeys", null),
            T(this, "maxSupportedProtocolVersion", null),
            T(this, "handleActiveSinksChange", (e, t) => {
                this.connections.forEach((n) =>
                    n.setHasActiveVideoOutputSink(e, t, "MediaEngineWebRTC.handleActiveSinksChange"),
                );
            }),
            T(this, "handleNewListener", (e) => {
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
                            ((this.voiceActivityInput = new h.A(this.getAudioContext())),
                            this.voiceActivityInput.setSource(this.sourceId),
                            this.voiceActivityInput.on("voiceactivity", this.handleVoiceActivity),
                            this.enabled && this.voiceActivityInput.enable());
                }
            }),
            T(this, "handleRemoveListener", (e) => {
                switch (e) {
                    case f.bg.DeviceChange:
                        var t;
                        (null == (t = navigator.mediaDevices) ? void 0 : t.ondevicechange) != null &&
                            0 === this.listenerCount(f.bg.DeviceChange) &&
                            (navigator.mediaDevices.ondevicechange = null);
                        break;
                    case f.bg.VoiceActivity:
                        null != this.voiceActivityInput &&
                            0 === this.listenerCount(f.bg.VoiceActivity) &&
                            (this.voiceActivityInput.destroy(), (this.voiceActivityInput = null));
                }
            }),
            T(this, "handleDeviceChange", () =>
                (0, g.oG)().then((e) => {
                    let [t, n, r] = e;
                    return this.emit(f.bg.DeviceChange, t, n, r);
                }),
            ),
            T(this, "handleVoiceActivity", (e) => {
                this.emit(f.bg.VoiceActivity, e, 0);
            }),
            T(this, "handleDesktopSourceEnd", () => {
                this.emit(f.bg.DesktopSourceEnd);
            }),
            T(this, "handleAudioPermission", (e) => {
                this.emit(f.bg.AudioPermission, e);
            }),
            T(this, "handleVideoPermission", (e) => {
                this.emit(f.bg.VideoPermission, e);
            }),
            this.on("newListener", this.handleNewListener),
            this.on("removeListener", this.handleRemoveListener),
            (0, _.EV)(this.handleActiveSinksChange),
            (0, p.A)(this);
    }
}
