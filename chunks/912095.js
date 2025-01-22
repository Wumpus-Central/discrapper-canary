r.d(n, {
    Z: function () {
        return b;
    },
    p: function () {
        return i;
    }
});
var i,
    a = r(47120);
var o = r(411104);
var s = r(177593);
var l = r(874141),
    u = r.n(l),
    c = r(565925),
    d = r.n(c),
    f = r(839548),
    p = r(46973),
    h = r(886848),
    _ = r(961304),
    m = r(313232),
    g = r(450279),
    E = r(65154),
    v = r(436620);
function y(e, n, r) {
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
!(function (e) {
    (e[(e.AUDIO_BITRATE = 0)] = 'AUDIO_BITRATE'), (e[(e.VIDEO_RESOLUTION_SCALE = 1)] = 'VIDEO_RESOLUTION_SCALE'), (e[(e.VIDEO_BITRATE = 2)] = 'VIDEO_BITRATE'), (e[(e.VIDEO_FRAMERATE = 3)] = 'VIDEO_FRAMERATE');
})(i || (i = {}));
class b extends f.Z {
    interact() {
        for (let e of ((this.interacted = !0), Object.keys(this.outputs))) this.outputs[e].play();
        this.input.resumeAudio();
    }
    destroy() {
        for (let e of (super.destroy(), Object.keys(this.outputs))) this.destroyOutput(e);
        this.input.destroy();
    }
    async getStats() {
        if (!v.Fo) return null;
        let e = await this.getRawStats(),
            n = null !== this.input.getVideoStreamId();
        return (0, g.Z)(e, this.getUserIdBySsrc, this.remoteVideoSinkWants, this.localVideoSinkWants, n);
    }
    getSelfMute() {
        return this.selfMute;
    }
    setInputMode(e, n) {
        this.input.setAudioMode(e, {
            delay: n.pttReleaseDelay,
            threshold: n.vadThreshold
        });
    }
    setSelfDeaf(e) {
        for (let n of ((this.selfDeaf = e), Object.keys(this.outputs))) this.outputs[n].mute = e || this.localMutes[n];
    }
    setLocalMute(e, n) {
        (this.localMutes[e] = n), null != this.outputs[e] && (this.outputs[e].mute = this.selfDeaf || n), this.emit(p.Sh.LocalMute, e, n);
    }
    fastUdpReconnect() {}
    getNumFastUdpReconnects() {
        return null;
    }
    wasRemoteDisconnected() {}
    setRemoteVideoSinkWants(e) {
        (this.remoteVideoSinkWants = e), this.updateVideoQuality(E.XR);
    }
    setLocalVideoSinkWants(e) {
        this.localVideoSinkWants = e;
    }
    updateVideoQualityCore(e, n) {
        let r;
        if (!this.videoSupported) return;
        let i = this.input.getVideoStream();
        if (null == i) return;
        if (null != n.capture && null != n.capture.width && null != n.capture.height && null != e.remoteSinkWantsPixelCount && 0 !== e.remoteSinkWantsPixelCount && 0 !== n.capture.height) {
            let i = n.capture.width / n.capture.height,
                a = Math.sqrt(e.remoteSinkWantsPixelCount * i),
                o = n.capture.width / a;
            r = o < 1 ? void 0 : o;
        }
        this.logger.info('BaseWebRTCConnection.updateVideoQuality: resolutionScaleFactor: '.concat(r, ', ') + 'encodingVideoWidth: '.concat(e.encodingVideoWidth, ', remoteSinkWantsMaxFramerate: ').concat(e.remoteSinkWantsMaxFramerate, ', ') + 'encodingVideoMaxBitRate: '.concat(e.encodingVideoMaxBitRate, ', localWant: ').concat(this.getLocalWant())),
            this.setVideoEncoderParameters([
                {
                    parameter: 1,
                    value: r
                },
                {
                    parameter: 2,
                    value: e.encodingVideoMaxBitRate
                },
                {
                    parameter: 3,
                    value: e.remoteSinkWantsMaxFramerate
                }
            ]);
        let a = e.encodingVideoWidth,
            o = e.encodingVideoHeight;
        for (let e of i.getTracks()) {
            var s, l;
            let n = e.getConstraints(),
                r = null === (s = n.width) || void 0 === s ? void 0 : s.max,
                i = null === (l = n.height) || void 0 === l ? void 0 : l.max;
            (r !== a || i !== o) && (this.logger.info('BaseWebRTCConnection.updateVideoQuality: old: '.concat(r, ' x ').concat(i, ', new: ').concat(a, ' x ').concat(o)), (n.width = { max: a }), (n.height = { max: o }), e.applyConstraints(n));
        }
    }
    setCanHavePriority(e, n) {
        let r = this.canHavePriority.size;
        n ? this.canHavePriority.add(e) : this.canHavePriority.delete(e), this.canHavePriority.size !== r && this.recalculatePrioritySpeakers();
    }
    setSpeakingFlags(e, n) {
        null != n && n !== E.Dg.NONE ? (this.localSpeakingFlags[e] = n) : delete this.localSpeakingFlags[e];
        let r = this.outputs[e];
        null != r && r.setSpeakingFlags(n);
        let i = this.wantsPriority.size,
            a = E.Dg.VOICE | E.Dg.PRIORITY;
        (n & a) === a ? this.wantsPriority.add(e) : this.wantsPriority.delete(e), this.wantsPriority.size !== i && this.recalculatePrioritySpeakers();
    }
    clearAllSpeaking() {
        for (let e in this.localSpeakingFlags) delete this.localSpeakingFlags[e], null != this.outputs[e] && this.outputs[e].setSpeakingFlags(E.Dg.NONE);
    }
    setOutputVolume(e) {
        for (let n of ((this.outputVolume = e), Object.keys(this.outputs))) this.outputs[n].volume = this.computeLocalVolume(n);
    }
    setSinkId(e) {
        for (let n of ((this.sinkId = e), Object.keys(this.outputs))) this.outputs[n].setSinkId(e);
    }
    setStreamParameters(e) {
        return new Promise((n, r) => {
            for (let n of this.videoStreamParameters) {
                let i = e.findIndex((e) => e.rid === n.rid);
                if (-1 === i) {
                    r(Error('Invalid rid'));
                    return;
                }
                !d()(this.videoStreamParameters[i], e[i]) && (this.videoStreamParameters[i] = { ...e[i] });
            }
            n();
        });
    }
    recalculatePrioritySpeakers() {
        (this.prioritySpeakers = new Set(Array.from(this.wantsPriority).filter((e) => this.canHavePriority.has(e)))),
            u()(this.outputs, (e, n) => {
                e.volume = this.computeLocalVolume(n);
            });
    }
    setBitRate(e) {
        this.voiceBitrate = e;
    }
    setLocalVolume(e, n) {
        (this.localVolumes[e] = n), null != this.outputs[e] && (this.outputs[e].volume = this.computeLocalVolume(e));
    }
    getLocalVolume(e) {
        let n = this.localVolumes[e];
        return null == n && (n = this.context === E.Yn.DEFAULT ? E.Qx : E.Yh), null != n ? n : E.Qx;
    }
    computeLocalVolume(e) {
        let n = (this.outputVolume * this.getLocalVolume(e)) / E.Qx;
        return this.prioritySpeakers.size > 0 && !this.prioritySpeakers.has(e) ? n * E.jg : n;
    }
    hasDesktopSource() {
        var e;
        return null === (e = this.input) || void 0 === e ? void 0 : e.hasDesktopSource();
    }
    createOutput(e, n) {
        if (n.discordIsTearingDown) {
            this.logger.info('BaseWebRTCConnection.createOutput: ignoring track being torn down: '.concat(n.id));
            return;
        }
        let r = this.outputs[e];
        if (null == r) {
            var i;
            ((r = new _.Z(e, this.audioContext)).mute = this.selfDeaf || this.localMutes[e]),
                (r.volume = this.computeLocalVolume(e)),
                r.on(_.X.Speaking, (n) => this.emit(p.Sh.Speaking, e, n, this.audioSSRC)),
                r.on(_.X.Video, (n) => {
                    var r;
                    return this.emitUnsafe(p.Sh.Video, e, n, this.audioSSRC, this.videoStreamParameters[0].ssrc, null !== (r = this.videoStreamParameters[0].rtxSsrc) && void 0 !== r ? r : 0, this.videoStreamParameters);
                }),
                r.on(_.X.InteractionRequired, (e) => this.emit(p.Sh.InteractionRequired, e)),
                r.setSpeakingFlags(null !== (i = this.localSpeakingFlags[e]) && void 0 !== i ? i : E.Dg.NONE),
                r.setSinkId(this.sinkId),
                (this.outputs[e] = r);
        }
        r.addTrack(n);
    }
    destroyOutput(e, n) {
        let r = this.outputs[e];
        null != r && (null == n || 0 === r.removeTrack(n)) && (r.destroy(), delete this.outputs[e]);
    }
    setSilenceThreshold(e) {
        this.silenceThreshold = e;
    }
    setLocalPan(e, n, r) {}
    setExperimentalEncoders(e) {}
    setHardwareH264(e) {}
    setSoftwareH264(e) {}
    setQoS(e) {}
    isAttenuating() {
        return !1;
    }
    setAttenuation(e, n, r) {}
    setEncryption(e, n) {}
    setMinimumJitterBufferLevel(e) {}
    setPostponeDecodeLevel(e) {}
    setReconnectInterval(e) {}
    setKeyframeInterval(e) {}
    startSamplesLocalPlayback(e, n, r, i) {}
    stopSamplesLocalPlayback(e) {}
    stopAllSamplesLocalPlayback() {}
    setVideoQualityMeasurement(e) {}
    setVideoEncoderExperiments(e) {}
    setBandwidthEstimationExperiments(e) {}
    prepareSecureFramesTransition(e, n, r) {}
    prepareSecureFramesEpoch(e, n, r) {}
    executeSecureFramesTransition(e) {}
    getMLSKeyPackage(e) {}
    updateMLSExternalSender(e) {}
    processMLSProposals(e, n) {}
    prepareMLSCommitTransition(e, n, r) {}
    processMLSWelcome(e, n, r) {}
    getMLSPairwiseFingerprint(e, n, r) {}
    constructor(e, n, r, i) {
        var a;
        super(e, n),
            (a = this),
            y(this, 'input', void 0),
            y(this, 'silenced', !1),
            y(this, 'interacted', !1),
            y(this, 'outputVolume', E.Qx),
            y(this, 'sinkId', E.w5),
            y(this, 'lastPingTime', 0),
            y(this, 'outputs', {}),
            y(this, 'webrtcStats', new m.r()),
            y(this, 'silenceThreshold', -100),
            y(this, 'canHavePriority', new Set()),
            y(this, 'prioritySpeakers', new Set()),
            y(this, 'audioContext', void 0),
            y(this, 'setEchoCancellation', (e) => this.input.setEchoCancellation(e)),
            y(this, 'setNoiseSuppression', (e) => this.input.setNoiseSuppression(e)),
            y(this, 'setNoiseCancellation', (e) => this.input.setNoiseCancellation(e)),
            y(this, 'setAutomaticGainControl', (e) => this.input.setAutomaticGainControl(e)),
            y(this, 'setAudioSource', (e) => this.input.setAudioSource(e)),
            y(this, 'setVideoSource', (e) => this.input.setVideoSource(e)),
            y(this, 'setDesktopInput', (e) => this.input.setDesktop(e)),
            y(this, 'setForceAudioInput', function (e) {
                return arguments.length > 1 && void 0 !== arguments[1] && arguments[1], a.input.setPTTActive(e);
            }),
            y(this, 'setSelfMute', (e) => {
                (this.selfMute = e), this.input.setMute(e), this.emit(p.Sh.Mute, e);
            }),
            y(this, 'handleAddVideoTrack', () => {
                this.updateVideoQuality();
            }),
            y(this, 'handleAudioPermission', (e) => this.emit(p.Sh.AudioPermission, e)),
            y(this, 'handleVideoPermission', (e) => this.emit(p.Sh.VideoPermission, e)),
            y(this, 'handleVideo', (e) => {
                var n;
                return this.emit(p.Sh.Video, this.userId, e, this.audioSSRC, this.videoStreamParameters[0].ssrc, null !== (n = this.videoStreamParameters[0].rtxSsrc) && void 0 !== n ? n : 0, this.videoStreamParameters);
            }),
            y(this, 'handleDesktopSourceEnd', () => this.emit(p.Sh.DesktopSourceEnd)),
            y(this, 'handleStream', (e) => this.setStream(e)),
            y(this, 'handleVoiceActivity', (e) => {
                let n = e <= this.silenceThreshold;
                this.silenced !== n && !this.input.mute() && ((this.silenced = n), this.emit(p.Sh.Silence, n));
            }),
            y(this, 'handleNewListener', (e) => {
                switch (e) {
                    case p.Sh.Video:
                        this.videoReady && setImmediate(() => this.handleVideo(this.input.getVideoStreamId()));
                        break;
                    case p.Sh.ConnectionStateChange:
                        this.emit(e, this.connectionState);
                        break;
                    case p.Sh.InteractionRequired:
                        !this.interacted && 'suspended' === this.input.getAudioState() && setImmediate(() => this.emit(e, !0));
                }
            }),
            y(this, 'handleInputSpeaking', (e) => {
                this.emit(p.Sh.Speaking, this.userId, e ? E.Dg.VOICE : E.Dg.NONE, this.audioSSRC);
            }),
            y(this, 'handleAudioContextStateChange', () => {
                !this.interacted && 'running' === this.input.getAudioState() && (this.interact(), this.emit(p.Sh.InteractionRequired, !1));
            }),
            y(this, 'handleStats', (e) => {
                if (this.connectionState === E.$j.DISCONNECTED) {
                    this.off(p.Sh.Stats, this.handleStats);
                    return;
                }
                null != e && (this.webrtcStats.update(e), (this.stats = e), Date.now() - this.lastPingTime >= E.$B && (this.emit(p.Sh.Ping, e.transport.ping), (this.lastPingTime = Date.now())));
            }),
            (this.input = new h.Z(r)),
            r.addEventListener('statechange', this.handleAudioContextStateChange),
            (this.audioContext = r),
            this.input.on(h.G.AudioPermission, this.handleAudioPermission),
            this.input.on(h.G.VideoPermission, this.handleVideoPermission),
            this.input.on(h.G.Video, this.handleVideo),
            this.input.on(h.G.Mute, (e) => this.emit(p.Sh.Mute, e)),
            this.input.on(h.G.Stream, this.handleStream),
            this.input.on(h.G.DesktopSourceEnd, this.handleDesktopSourceEnd),
            this.input.on(h.G.Speaking, this.handleInputSpeaking),
            this.input.on(h.G.AddVideoTrack, this.handleAddVideoTrack),
            this.input.on(h.G.Video, this.handleAddVideoTrack),
            this.on('newListener', this.handleNewListener),
            this.initializeStreamParameters(i);
    }
}
