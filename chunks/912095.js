n.d(t, {
    Z: () => g,
    p: () => m
}),
    n(47120),
    n(411104),
    n(177593);
var i = n(874141),
    r = n.n(i),
    a = n(565925),
    s = n.n(a),
    o = n(839548),
    l = n(46973),
    u = n(886848),
    c = n(961304),
    d = n(313232),
    f = n(450279),
    _ = n(65154),
    p = n(436620);
function h(e, t, n) {
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
var m = (function (e) {
    return (e[(e.AUDIO_BITRATE = 0)] = 'AUDIO_BITRATE'), (e[(e.VIDEO_RESOLUTION_SCALE = 1)] = 'VIDEO_RESOLUTION_SCALE'), (e[(e.VIDEO_BITRATE = 2)] = 'VIDEO_BITRATE'), (e[(e.VIDEO_FRAMERATE = 3)] = 'VIDEO_FRAMERATE'), e;
})({});
class g extends o.Z {
    interact() {
        for (let e of ((this.interacted = !0), Object.keys(this.outputs))) this.outputs[e].play();
        this.input.resumeAudio();
    }
    destroy() {
        for (let e of (super.destroy(), Object.keys(this.outputs))) this.destroyOutput(e);
        this.input.destroy();
    }
    async getStats() {
        if (!p.Fo) return null;
        let e = await this.getRawStats(),
            t = null !== this.input.getVideoStreamId();
        return (0, f.Z)(e, this.getUserIdBySsrc, this.remoteVideoSinkWants, this.localVideoSinkWants, t);
    }
    getSelfMute() {
        return this.selfMute;
    }
    setInputMode(e, t) {
        this.input.setAudioMode(e, {
            delay: t.pttReleaseDelay,
            threshold: t.vadThreshold
        });
    }
    setSelfDeaf(e) {
        for (let t of ((this.selfDeaf = e), Object.keys(this.outputs))) this.outputs[t].mute = e || this.localMutes[t];
    }
    setLocalMute(e, t) {
        (this.localMutes[e] = t), null != this.outputs[e] && (this.outputs[e].mute = this.selfDeaf || t), this.emit(l.Sh.LocalMute, e, t);
    }
    fastUdpReconnect() {}
    getNumFastUdpReconnects() {
        return null;
    }
    wasRemoteDisconnected() {}
    setRemoteVideoSinkWants(e) {
        (this.remoteVideoSinkWants = e), this.updateVideoQuality(_.XR);
    }
    setLocalVideoSinkWants(e) {
        this.localVideoSinkWants = e;
    }
    updateVideoQualityCore(e, t) {
        let n;
        if (!this.videoSupported) return;
        let i = this.input.getVideoStream();
        if (null == i) return;
        if (null != t.capture && null != t.capture.width && null != t.capture.height && null != e.remoteSinkWantsPixelCount && 0 !== e.remoteSinkWantsPixelCount && 0 !== t.capture.height) {
            let i = t.capture.width / t.capture.height,
                r = Math.sqrt(e.remoteSinkWantsPixelCount * i),
                a = t.capture.width / r;
            n = a < 1 ? void 0 : a;
        }
        this.logger.info('BaseWebRTCConnection.updateVideoQuality: resolutionScaleFactor: '.concat(n, ', ') + 'encodingVideoWidth: '.concat(e.encodingVideoWidth, ', remoteSinkWantsMaxFramerate: ').concat(e.remoteSinkWantsMaxFramerate, ', ') + 'encodingVideoMaxBitRate: '.concat(e.encodingVideoMaxBitRate, ', localWant: ').concat(this.getLocalWant())),
            this.setVideoEncoderParameters([
                {
                    parameter: 1,
                    value: n
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
        let r = e.encodingVideoWidth,
            a = e.encodingVideoHeight;
        for (let e of i.getTracks()) {
            var s, o;
            let t = e.getConstraints(),
                n = null === (s = t.width) || void 0 === s ? void 0 : s.max,
                i = null === (o = t.height) || void 0 === o ? void 0 : o.max;
            (n !== r || i !== a) && (this.logger.info('BaseWebRTCConnection.updateVideoQuality: old: '.concat(n, ' x ').concat(i, ', new: ').concat(r, ' x ').concat(a)), (t.width = { max: r }), (t.height = { max: a }), e.applyConstraints(t));
        }
    }
    setCanHavePriority(e, t) {
        let n = this.canHavePriority.size;
        t ? this.canHavePriority.add(e) : this.canHavePriority.delete(e), this.canHavePriority.size !== n && this.recalculatePrioritySpeakers();
    }
    setSpeakingFlags(e, t) {
        null != t && t !== _.Dg.NONE ? (this.localSpeakingFlags[e] = t) : delete this.localSpeakingFlags[e];
        let n = this.outputs[e];
        null != n && n.setSpeakingFlags(t);
        let i = this.wantsPriority.size,
            r = _.Dg.VOICE | _.Dg.PRIORITY;
        (t & r) === r ? this.wantsPriority.add(e) : this.wantsPriority.delete(e), this.wantsPriority.size !== i && this.recalculatePrioritySpeakers();
    }
    clearAllSpeaking() {
        for (let e in this.localSpeakingFlags) delete this.localSpeakingFlags[e], null != this.outputs[e] && this.outputs[e].setSpeakingFlags(_.Dg.NONE);
    }
    setOutputVolume(e) {
        for (let t of ((this.outputVolume = e), Object.keys(this.outputs))) this.outputs[t].volume = this.computeLocalVolume(t);
    }
    setSinkId(e) {
        for (let t of ((this.sinkId = e), Object.keys(this.outputs))) this.outputs[t].setSinkId(e);
    }
    setStreamParameters(e) {
        return new Promise((t, n) => {
            for (let t of this.videoStreamParameters) {
                let i = e.findIndex((e) => e.rid === t.rid);
                if (-1 === i) {
                    n(Error('Invalid rid'));
                    return;
                }
                s()(this.videoStreamParameters[i], e[i]) || (this.videoStreamParameters[i] = { ...e[i] });
            }
            t();
        });
    }
    recalculatePrioritySpeakers() {
        (this.prioritySpeakers = new Set(Array.from(this.wantsPriority).filter((e) => this.canHavePriority.has(e)))),
            r()(this.outputs, (e, t) => {
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
        return null == t && (t = this.context === _.Yn.DEFAULT ? _.Qx : _.Yh), null != t ? t : _.Qx;
    }
    computeLocalVolume(e) {
        let t = (this.outputVolume * this.getLocalVolume(e)) / _.Qx;
        return this.prioritySpeakers.size > 0 && !this.prioritySpeakers.has(e) ? t * _.jg : t;
    }
    hasDesktopSource() {
        var e;
        return null === (e = this.input) || void 0 === e ? void 0 : e.hasDesktopSource();
    }
    createOutput(e, t) {
        if (t.discordIsTearingDown) {
            this.logger.info('BaseWebRTCConnection.createOutput: ignoring track being torn down: '.concat(t.id));
            return;
        }
        let n = this.outputs[e];
        if (null == n) {
            var i;
            ((n = new c.Z(e, this.audioContext)).mute = this.selfDeaf || this.localMutes[e]),
                (n.volume = this.computeLocalVolume(e)),
                n.on(c.X.Speaking, (t) => this.emit(l.Sh.Speaking, e, t, this.audioSSRC)),
                n.on(c.X.Video, (t) => {
                    var n;
                    return this.emitUnsafe(l.Sh.Video, e, t, this.audioSSRC, this.videoStreamParameters[0].ssrc, null !== (n = this.videoStreamParameters[0].rtxSsrc) && void 0 !== n ? n : 0, this.videoStreamParameters);
                }),
                n.on(c.X.InteractionRequired, (e) => this.emit(l.Sh.InteractionRequired, e)),
                n.setSpeakingFlags(null !== (i = this.localSpeakingFlags[e]) && void 0 !== i ? i : _.Dg.NONE),
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
    setExperimentalEncoders(e) {}
    setHardwareH264(e) {}
    setSoftwareH264(e) {}
    setQoS(e) {}
    isAttenuating() {
        return !1;
    }
    setAttenuation(e, t, n) {}
    setEncryption(e, t) {}
    setMinimumJitterBufferLevel(e) {}
    setPostponeDecodeLevel(e) {}
    setReconnectInterval(e) {}
    setKeyframeInterval(e) {}
    startSamplesLocalPlayback(e, t, n, i) {}
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
    setVoiceFiltersEnabled(e) {}
    constructor(e, t, n, i) {
        var r;
        super(e, t),
            (r = this),
            h(this, 'input', void 0),
            h(this, 'silenced', !1),
            h(this, 'interacted', !1),
            h(this, 'outputVolume', _.Qx),
            h(this, 'sinkId', _.w5),
            h(this, 'lastPingTime', 0),
            h(this, 'outputs', {}),
            h(this, 'webrtcStats', new d.r()),
            h(this, 'silenceThreshold', -100),
            h(this, 'canHavePriority', new Set()),
            h(this, 'prioritySpeakers', new Set()),
            h(this, 'audioContext', void 0),
            h(this, 'setEchoCancellation', (e) => this.input.setEchoCancellation(e)),
            h(this, 'setNoiseSuppression', (e) => this.input.setNoiseSuppression(e)),
            h(this, 'setNoiseCancellation', (e) => this.input.setNoiseCancellation(e)),
            h(this, 'setAutomaticGainControl', (e) => this.input.setAutomaticGainControl(e)),
            h(this, 'setAudioSource', (e) => this.input.setAudioSource(e)),
            h(this, 'setVideoSource', (e) => this.input.setVideoSource(e)),
            h(this, 'setDesktopInput', (e) => this.input.setDesktop(e)),
            h(this, 'setForceAudioInput', function (e) {
                return arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r.input.setPTTActive(e);
            }),
            h(this, 'setSelfMute', (e) => {
                (this.selfMute = e), this.input.setMute(e), this.emit(l.Sh.Mute, e);
            }),
            h(this, 'handleAddVideoTrack', () => {
                this.updateVideoQuality();
            }),
            h(this, 'handleAudioPermission', (e) => this.emit(l.Sh.AudioPermission, e)),
            h(this, 'handleVideoPermission', (e) => this.emit(l.Sh.VideoPermission, e)),
            h(this, 'handleVideo', (e) => {
                var t;
                return this.emit(l.Sh.Video, this.userId, e, this.audioSSRC, this.videoStreamParameters[0].ssrc, null !== (t = this.videoStreamParameters[0].rtxSsrc) && void 0 !== t ? t : 0, this.videoStreamParameters);
            }),
            h(this, 'handleDesktopSourceEnd', () => this.emit(l.Sh.DesktopSourceEnd)),
            h(this, 'handleStream', (e) => this.setStream(e)),
            h(this, 'handleVoiceActivity', (e) => {
                let t = e <= this.silenceThreshold;
                this.silenced === t || this.input.mute() || ((this.silenced = t), this.emit(l.Sh.Silence, t));
            }),
            h(this, 'handleNewListener', (e) => {
                switch (e) {
                    case l.Sh.Video:
                        this.videoReady && setImmediate(() => this.handleVideo(this.input.getVideoStreamId()));
                        break;
                    case l.Sh.ConnectionStateChange:
                        this.emit(e, this.connectionState);
                        break;
                    case l.Sh.InteractionRequired:
                        this.interacted || 'suspended' !== this.input.getAudioState() || setImmediate(() => this.emit(e, !0));
                }
            }),
            h(this, 'handleInputSpeaking', (e) => {
                this.emit(l.Sh.Speaking, this.userId, e ? _.Dg.VOICE : _.Dg.NONE, this.audioSSRC);
            }),
            h(this, 'handleAudioContextStateChange', () => {
                this.interacted || 'running' !== this.input.getAudioState() || (this.interact(), this.emit(l.Sh.InteractionRequired, !1));
            }),
            h(this, 'handleStats', (e) => {
                if (this.connectionState === _.$j.DISCONNECTED) {
                    this.off(l.Sh.Stats, this.handleStats);
                    return;
                }
                null != e && (this.webrtcStats.update(e), (this.stats = e), Date.now() - this.lastPingTime >= _.$B && (this.emit(l.Sh.Ping, e.transport.ping), (this.lastPingTime = Date.now())));
            }),
            (this.input = new u.Z(n)),
            n.addEventListener('statechange', this.handleAudioContextStateChange),
            (this.audioContext = n),
            this.input.on(u.G.AudioPermission, this.handleAudioPermission),
            this.input.on(u.G.VideoPermission, this.handleVideoPermission),
            this.input.on(u.G.Video, this.handleVideo),
            this.input.on(u.G.Mute, (e) => this.emit(l.Sh.Mute, e)),
            this.input.on(u.G.Stream, this.handleStream),
            this.input.on(u.G.DesktopSourceEnd, this.handleDesktopSourceEnd),
            this.input.on(u.G.Speaking, this.handleInputSpeaking),
            this.input.on(u.G.AddVideoTrack, this.handleAddVideoTrack),
            this.input.on(u.G.Video, this.handleAddVideoTrack),
            this.on('newListener', this.handleNewListener),
            this.initializeStreamParameters(i);
    }
}
