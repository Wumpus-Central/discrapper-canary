n.d(t, {
    A: () => E,
    k: () => g,
}),
    n(896048),
    n(65821),
    n(142703);
var r = n(473318),
    i = n.n(r),
    a = n(128080),
    s = n.n(a),
    o = n(904986),
    l = n(205693),
    c = n(405163),
    u = n(228272),
    d = n(46263),
    f = n(83774),
    p = n(731854),
    _ = n(396574);
function h(e, t, n) {
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
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
var g = (function (e) {
    return (
        (e[(e.AUDIO_BITRATE = 0)] = "AUDIO_BITRATE"),
        (e[(e.VIDEO_RESOLUTION_SCALE = 1)] = "VIDEO_RESOLUTION_SCALE"),
        (e[(e.VIDEO_BITRATE = 2)] = "VIDEO_BITRATE"),
        (e[(e.VIDEO_FRAMERATE = 3)] = "VIDEO_FRAMERATE"),
        e
    );
})({});
class E extends o.A {
    interact() {
        for (let e of ((this.interacted = !0), Object.keys(this.outputs))) this.outputs[e].play();
        this.input.resumeAudio();
    }
    destroy() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (let e of (super.destroy(), Object.keys(this.outputs))) this.destroyOutput(e);
        this.input.destroy(e);
    }
    async getStats() {
        if (!_.fA) return null;
        let e = await this.getRawStats(),
            t = null !== this.input.getVideoStreamId();
        return (0, f.A)(e, this.getUserIdBySsrc, this.remoteVideoSinkWants, this.localVideoSinkWants, t);
    }
    setNoiseCancellationDuringProcessing(e) {}
    setNoiseCancellationAfterProcessing(e) {}
    setVADAfterWebrtc(e) {}
    getSelfMute() {
        return this.selfMute;
    }
    setInputMode(e, t) {
        this.input.setAudioMode(e, {
            delay: t.pttReleaseDelay,
            threshold: t.vadThreshold,
        });
    }
    setSelfDeaf(e) {
        for (let t of ((this.selfDeaf = e), Object.keys(this.outputs))) this.outputs[t].mute = e || this.localMutes[t];
        this.emit(l.yq.Deafen, e);
    }
    getSelfDeaf() {
        return this.selfDeaf;
    }
    setLocalMute(e, t) {
        (this.localMutes[e] = t),
            null != this.outputs[e] && (this.outputs[e].mute = this.selfDeaf || t),
            this.emit(l.yq.LocalMute, e, t);
    }
    fastUdpReconnect() {}
    getNumFastUdpReconnects() {
        return null;
    }
    wasRemoteDisconnected() {}
    setRemoteVideoSinkWants(e) {
        (this.remoteVideoSinkWants = e), this.updateVideoQuality(p.nJ);
    }
    setLocalVideoSinkWants(e) {
        this.localVideoSinkWants = e;
    }
    updateVideoQualityCore(e, t) {
        let n;
        if (!this.videoSupported) return;
        let r = this.input.getVideoStream();
        if (null == r) return;
        if (
            null != t.capture &&
            null != t.capture.width &&
            null != t.capture.height &&
            null != e.remoteSinkWantsPixelCount &&
            0 !== e.remoteSinkWantsPixelCount &&
            0 !== t.capture.height
        ) {
            let r = t.capture.width / t.capture.height,
                i = Math.sqrt(e.remoteSinkWantsPixelCount * r),
                a = t.capture.width / i;
            n = a < 1 ? void 0 : a;
        }
        this.logger.verbose(
            "BaseWebRTCConnection.updateVideoQuality: resolutionScaleFactor: ".concat(n, ", ") +
                "encodingVideoWidth: "
                    .concat(e.encodingVideoWidth, ", remoteSinkWantsMaxFramerate: ")
                    .concat(e.remoteSinkWantsMaxFramerate, ", ") +
                "encodingVideoMaxBitRate: "
                    .concat(e.encodingVideoMaxBitRate, ", localWant: ")
                    .concat(this.getLocalWant()),
        ),
            this.setVideoEncoderParameters([
                {
                    parameter: 1,
                    value: n,
                },
                {
                    parameter: 2,
                    value: e.encodingVideoMaxBitRate,
                },
                {
                    parameter: 3,
                    value: e.remoteSinkWantsMaxFramerate,
                },
            ]);
        let i = e.encodingVideoWidth,
            a = e.encodingVideoHeight;
        if (null != i && null != a)
            for (let e of r.getTracks()) {
                var s, o;
                let t = e.getConstraints(),
                    n = null == (s = t.width) ? void 0 : s.max,
                    r = null == (o = t.height) ? void 0 : o.max;
                (n !== i || r !== a) &&
                    (this.logger.info(
                        "BaseWebRTCConnection.updateVideoQuality: old: "
                            .concat(n, " x ")
                            .concat(r, ", new: ")
                            .concat(i, " x ")
                            .concat(a),
                    ),
                    (t.width = { max: i }),
                    (t.height = { max: a }),
                    e.applyConstraints(t));
            }
    }
    setCanHavePriority(e, t) {
        let n = this.canHavePriority.size;
        t ? this.canHavePriority.add(e) : this.canHavePriority.delete(e),
            this.canHavePriority.size !== n && this.recalculatePrioritySpeakers();
    }
    setSpeakingFlags(e, t) {
        null != t && t !== p.ME.NONE ? (this.localSpeakingFlags[e] = t) : delete this.localSpeakingFlags[e];
        let n = this.outputs[e];
        null != n && n.setSpeakingFlags(t);
        let r = this.wantsPriority.size,
            i = p.ME.VOICE | p.ME.PRIORITY;
        (t & i) === i ? this.wantsPriority.add(e) : this.wantsPriority.delete(e),
            this.wantsPriority.size !== r && this.recalculatePrioritySpeakers();
    }
    clearAllSpeaking() {
        for (let e in this.localSpeakingFlags)
            delete this.localSpeakingFlags[e], null != this.outputs[e] && this.outputs[e].setSpeakingFlags(p.ME.NONE);
    }
    setOutputVolume(e) {
        for (let t of ((this.outputVolume = e), Object.keys(this.outputs)))
            this.outputs[t].volume = this.computeLocalVolume(t);
    }
    setSinkId(e) {
        for (let t of ((this.sinkId = e), Object.keys(this.outputs))) this.outputs[t].setSinkId(e);
    }
    setStreamParameters(e) {
        return new Promise((t, n) => {
            for (let t of this.videoStreamParameters) {
                let r = e.findIndex((e) => e.rid === t.rid);
                if (-1 === r) return void n(Error("Invalid rid"));
                s()(this.videoStreamParameters[r], e[r]) || (this.videoStreamParameters[r] = m({}, e[r]));
            }
            t();
        });
    }
    recalculatePrioritySpeakers() {
        (this.prioritySpeakers = new Set(Array.from(this.wantsPriority).filter((e) => this.canHavePriority.has(e)))),
            i()(this.outputs, (e, t) => {
                e.volume = this.computeLocalVolume(t);
            });
    }
    setBitRate(e) {
        this.voiceBitrate = e;
    }
    setLocalVolume(e, t) {
        (this.localVolumes[e] = t), null != this.outputs[e] && (this.outputs[e].volume = this.computeLocalVolume(e));
    }
    getLocalVolume(e) {
        let t = this.localVolumes[e];
        return null == t && (t = this.context === p.x.DEFAULT ? p.Hz : p.Cn), null != t ? t : p.Hz;
    }
    computeLocalVolume(e) {
        let t = (this.outputVolume * this.getLocalVolume(e)) / p.Hz;
        return this.prioritySpeakers.size > 0 && !this.prioritySpeakers.has(e) ? t * p.zt : t;
    }
    hasDesktopSource() {
        var e;
        return null == (e = this.input) ? void 0 : e.hasDesktopSource();
    }
    createOutput(e, t) {
        if (t.discordIsTearingDown)
            return void this.logger.info(
                "BaseWebRTCConnection.createOutput: ignoring track being torn down: ".concat(t.id),
            );
        let n = this.outputs[e];
        if (null == n) {
            var r;
            ((n = new u.A(e, this.audioContext)).mute = this.selfDeaf || this.localMutes[e]),
                (n.volume = this.computeLocalVolume(e)),
                n.on(u.i.Speaking, (t) => this.emit(l.yq.Speaking, e, t, this.audioSSRC)),
                n.on(u.i.Video, (t) => {
                    var n;
                    return this.emitUnsafe(
                        l.yq.Video,
                        e,
                        t,
                        this.audioSSRC,
                        this.videoStreamParameters[0].ssrc,
                        null != (n = this.videoStreamParameters[0].rtxSsrc) ? n : 0,
                        this.videoStreamParameters,
                    );
                }),
                n.on(u.i.InteractionRequired, (e) => this.emit(l.yq.InteractionRequired, e)),
                n.setSpeakingFlags(null != (r = this.localSpeakingFlags[e]) ? r : p.ME.NONE),
                n.setSinkId(this.sinkId),
                (this.outputs[e] = n);
        }
        n.addTrack(t);
    }
    destroyOutput(e, t) {
        let n = this.outputs[e];
        null != n && (null == t || 0 === n.removeTrack(t)) && (n.destroy(), delete this.outputs[e]);
    }
    setSilenceThreshold(e) {
        this.silenceThreshold = e;
    }
    setLocalPan(e, t, n) {}
    setQoS(e) {}
    setSoundshareDiscardRearChannels(e) {}
    isAttenuating() {
        return !1;
    }
    setAttenuation(e, t, n) {}
    setEncryption(e, t) {}
    setMinimumJitterBufferLevel(e) {}
    setPostponeDecodeLevel(e) {}
    setReconnectInterval(e) {}
    setKeyframeInterval(e) {}
    startSamplesLocalPlayback(e, t, n, r) {}
    stopSamplesLocalPlayback(e) {}
    stopAllSamplesLocalPlayback() {}
    setVideoQualityMeasurement(e) {}
    setVideoEncoderExperiments(e) {}
    setBandwidthEstimationExperiments(e) {}
    prepareSecureFramesTransition(e, t, n) {}
    prepareSecureFramesEpoch(e, t, n) {}
    executeSecureFramesTransition(e) {}
    getMLSKeyPackage(e) {}
    updateMLSExternalSender(e) {}
    processMLSProposals(e, t) {}
    prepareMLSCommitTransition(e, t, n) {}
    processMLSWelcome(e, t, n) {}
    getMLSPairwiseFingerprint(e, t, n) {}
    getVoiceFilterId() {
        return null;
    }
    setVoiceFilterId(e) {}
    constructor(e) {
        var t;
        super(e.context, e.userId),
            (t = this),
            h(this, "input", void 0),
            h(this, "silenced", !1),
            h(this, "interacted", !1),
            h(this, "outputVolume", p.Hz),
            h(this, "sinkId", p.dx),
            h(this, "lastPingTime", 0),
            h(this, "outputs", {}),
            h(this, "webrtcStats", new d.J()),
            h(this, "silenceThreshold", -100),
            h(this, "canHavePriority", new Set()),
            h(this, "prioritySpeakers", new Set()),
            h(this, "audioContext", void 0),
            h(this, "setEchoCancellation", (e) => this.input.setEchoCancellation(e)),
            h(this, "setNoiseSuppression", (e) => this.input.setNoiseSuppression(e)),
            h(this, "setNoiseCancellation", (e) => this.input.setNoiseCancellation(e)),
            h(this, "getNoiseCancellation", () => this.input.getNoiseCancellation()),
            h(this, "setAutomaticGainControl", (e) => this.input.setAutomaticGainControl(e)),
            h(this, "setAudioSource", (e) => this.input.setAudioSource(e)),
            h(this, "setVideoSource", (e) => this.input.setVideoSource(e)),
            h(this, "setDesktopInput", (e) => {
                if (null != e) {
                    var t, n, r, i, a, s, o;
                    let l = e.stream.getVideoTracks()[0].getConstraints(),
                        c = {
                            width:
                                "number" == typeof l.width
                                    ? l.width
                                    : null != (t = null == (i = l.width) ? void 0 : i.ideal)
                                      ? t
                                      : null == (a = l.width)
                                        ? void 0
                                        : a.max,
                            height:
                                "number" == typeof l.height
                                    ? l.height
                                    : null != (n = null == (s = l.height) ? void 0 : s.ideal)
                                      ? n
                                      : null == (o = l.height)
                                        ? void 0
                                        : o.max,
                        },
                        u = (null != (r = null == c ? void 0 : c.height) ? r : 0) > 720 ? p.oL : p.lo;
                    this.videoQualityManager.setGoliveQuality({
                        encode: c,
                        capture: c,
                        bitrateMax: u,
                    });
                }
                this.input.setDesktop(e);
            }),
            h(this, "setForceAudioInput", function (e) {
                return (
                    arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    t.input.setPTTActive(e)
                );
            }),
            h(this, "setSelfMute", (e) => {
                (this.selfMute = e), this.input.setMute(e), this.emit(l.yq.Mute, e);
            }),
            h(this, "handleAddVideoTrack", () => {
                this.updateVideoQuality();
            }),
            h(this, "handleAudioPermission", (e) => this.emit(l.yq.AudioPermission, e)),
            h(this, "handleVideoPermission", (e) => this.emit(l.yq.VideoPermission, e)),
            h(this, "handleVideo", (e) => {
                var t;
                return this.emit(
                    l.yq.Video,
                    this.userId,
                    e,
                    this.audioSSRC,
                    this.videoStreamParameters[0].ssrc,
                    null != (t = this.videoStreamParameters[0].rtxSsrc) ? t : 0,
                    this.videoStreamParameters,
                );
            }),
            h(this, "handleDesktopSourceEnd", () => this.emit(l.yq.DesktopSourceEnd)),
            h(this, "handleStream", (e) => this.setStream(e)),
            h(this, "handleVoiceActivity", (e) => {
                let t = e <= this.silenceThreshold;
                this.silenced === t || this.input.mute() || ((this.silenced = t), this.emit(l.yq.Silence, t));
            }),
            h(this, "handleNewListener", (e) => {
                switch (e) {
                    case l.yq.Video:
                        this.videoReady && setImmediate(() => this.handleVideo(this.input.getVideoStreamId()));
                        break;
                    case l.yq.ConnectionStateChange:
                        this.emit(e, this.connectionState);
                        break;
                    case l.yq.InteractionRequired:
                        this.interacted ||
                            "suspended" !== this.input.getAudioState() ||
                            setImmediate(() => this.emit(e, !0));
                }
            }),
            h(this, "handleInputSpeaking", (e) => {
                this.emit(l.yq.Speaking, this.userId, e ? p.ME.VOICE : p.ME.NONE, this.audioSSRC);
            }),
            h(this, "handleAudioContextStateChange", () => {
                this.interacted ||
                    "running" !== this.input.getAudioState() ||
                    (this.interact(), this.emit(l.yq.InteractionRequired, !1));
            }),
            h(this, "handleStats", (e) => {
                this.connectionState === p.$I.DISCONNECTED
                    ? this.off(l.yq.Stats, this.handleStats)
                    : null != e &&
                      (this.webrtcStats.update(e),
                      (this.stats = e),
                      Date.now() - this.lastPingTime >= p.n8 &&
                          (this.emit(l.yq.Ping, e.transport.ping), (this.lastPingTime = Date.now())));
            }),
            (this.input = new c.A(e.audioContext)),
            e.audioContext.addEventListener("statechange", this.handleAudioContextStateChange),
            (this.audioContext = e.audioContext),
            this.input.on(c.T.AudioPermission, this.handleAudioPermission),
            this.input.on(c.T.VideoPermission, this.handleVideoPermission),
            this.input.on(c.T.Video, this.handleVideo),
            this.input.on(c.T.Mute, (e) => this.emit(l.yq.Mute, e)),
            this.input.on(c.T.Stream, this.handleStream),
            this.input.on(c.T.DesktopSourceEnd, this.handleDesktopSourceEnd),
            this.input.on(c.T.Speaking, this.handleInputSpeaking),
            this.input.on(c.T.AddVideoTrack, this.handleAddVideoTrack),
            this.input.on(c.T.Video, this.handleAddVideoTrack),
            this.on("newListener", this.handleNewListener),
            this.initializeStreamParameters(e.streamParameters);
    }
}
