r.d(n, {
    Z: function () {
        return k;
    }
});
var i = r(312677);
var a = r(47120);
var o = r(411104);
var s = r(653041);
var l = r(595182),
    u = r.n(l),
    c = r(117806),
    d = r.n(c),
    f = r(565925),
    p = r.n(f),
    h = r(971793),
    _ = r.n(h),
    m = r(420994),
    g = r(259443),
    E = r(839548),
    v = r(198274),
    y = r(701597),
    b = r(46973),
    I = r(829839),
    T = r(916057),
    S = r(992774),
    A = r(158466),
    C = r(650886),
    N = r(65154),
    R = r(149396);
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
let D = 50,
    L = 0.9,
    x = 0.1,
    w = 0;
function P(e) {
    return (null != e ? e : R.Qx) / R.Qx;
}
function M(e) {
    return null != e && 0 !== e ? e + 1 : 0;
}
class k extends E.Z {
    static create(e, n, r) {
        let i = new k(e, n, !0);
        return i.initialize(r), i;
    }
    static createReplay(e, n) {
        let r = new k(e, '0', !0),
            i = (0, S.zS)();
        r.initializeStreamParameters([
            {
                type: N.Tr.VIDEO,
                rid: '100',
                ssrc: 0,
                rtxSsrc: 0,
                quality: 100,
                active: !1
            }
        ]);
        let a = (n, a) => {
                let o = null != i.getCodecCapabilities ? i.getCodecCapabilities : i.getSupportedVideoCodecs;
                r.on(b.Sh.Stats, r.handleStats),
                    r.conn.setOnVideoCallback(r.handleVideo),
                    o((n) => {
                        let i = (0, I.DY)(r.experimentFlags);
                        (r.codecs = [
                            {
                                type: 'audio',
                                name: R.ad.OPUS,
                                priority: 1,
                                payloadType: 120
                            },
                            ...(0, I.yQ)(n, i).map((e, n) => {
                                let r = n + 1,
                                    i = 101 + 2 * n;
                                return {
                                    type: 'video',
                                    name: e.name,
                                    priority: r,
                                    payloadType: i,
                                    rtxPayloadType: i + 1,
                                    encode: e.encode,
                                    decode: e.decode
                                };
                            })
                        ]),
                            r.setCodecs(R.ad.OPUS, R.ad.H264, e),
                            r.conn.startReplay();
                    });
            },
            o = i.createReplayConnection('default', a, n);
        return null == o ? null : ((r.conn = o), r);
    }
    initialize(e) {
        let n;
        this.logger.info('Creating connection to '.concat(e.address, ':').concat(e.port, ' with audio ssrc: ').concat(e.ssrc)),
            (this.audioSSRC = e.ssrc),
            (this.streamUserId = e.streamUserId),
            this.initializeStreamParameters(e.streamParameters),
            (e.streamParameters = [
                {
                    type: N.Tr.AUDIO,
                    ssrc: this.audioSSRC,
                    rid: '',
                    maxBitrate: 64000,
                    soundshare: this.context === R.Yn.STREAM
                },
                ...this.videoStreamParameters
            ]),
            (e.context = this.context);
        let r = (0, S.zS)(),
            i = null != r.getCodecCapabilities ? r.getCodecCapabilities : r.getSupportedVideoCodecs,
            a = (a, o) => {
                if (this.destroyed) return;
                if (null != a && '' !== a) {
                    this.setConnectionState(R.$j.NO_ROUTE), this.emit(b.Sh.Error, a);
                    return;
                }
                if (null == o) throw Error('Invalid transport info');
                let { protocol: s, address: l, port: u } = o;
                this.logger.info('Connected with local address '.concat(l, ':').concat(u, ' and protocol: ').concat(s)),
                    i((i) => {
                        this.logger.info('Available codecs: '.concat(JSON.stringify(i)));
                        let a = (0, I.DY)(this.experimentFlags);
                        this.logger.info('Experimental codecs: '.concat(JSON.stringify(a))),
                            (this.codecs = [
                                {
                                    type: 'audio',
                                    name: R.ad.OPUS,
                                    priority: 1,
                                    payloadType: 120
                                },
                                ...(0, I.yQ)(i, a).map((e, n) => {
                                    let r = n + 1,
                                        i = 101 + 2 * n;
                                    return {
                                        type: 'video',
                                        name: e.name,
                                        priority: r,
                                        payloadType: i,
                                        rtxPayloadType: i + 1,
                                        encode: e.encode,
                                        decode: e.decode
                                    };
                                })
                            ]),
                            this.logger.info('Audio codecs: '.concat(this.codecs.filter((e) => 'audio' === e.type).map((e) => e.name))),
                            this.logger.info('Video codecs: '.concat(this.codecs.filter((e) => 'video' === e.type).map((e) => e.name + '[encode: ' + e.encode + ', decode: ' + e.decode + ']'))),
                            n.getEncryptionModes((i) => {
                                var a, o, c, d, f, p, h, _, m, g, E, v, y;
                                this.logger.info('Encryption modes: '.concat(i)),
                                    n.setTransportOptions(this.getConnectionTransportOptions()),
                                    n.setSelfMute(this.selfMute || this.context === R.Yn.STREAM),
                                    n.setSelfDeafen(this.selfDeaf),
                                    n.setOnSpeakingCallback(this.handleSpeakingNative),
                                    null === (a = n.setOnNativeMuteToggleCallback) || void 0 === a || a.call(n, this.handleNativeMuteToggled),
                                    null === (o = n.setOnNativeMuteChangedCallback) || void 0 === o || o.call(n, this.handleNativeMuteChanged),
                                    null === (c = n.setOnSpeakingWhileMutedCallback) || void 0 === c || c.call(n, this.handleSpeakingWhileMuted),
                                    null === (d = n.setPingInterval) || void 0 === d || d.call(n, R.$B),
                                    n.setPingCallback(this.handlePing),
                                    null === (f = n.setPingTimeoutCallback) || void 0 === f || f.call(n, this.handlePingTimeout),
                                    null === (p = n.setOnVideoEncoderFallbackCallback) || void 0 === p || p.call(n, this.handleVideoEncoderFallback),
                                    null === (h = n.setOnRtcpMessageCallback) || void 0 === h || h.call(n, this.handleRTCPMessage),
                                    r.setTransportOptions({
                                        builtInEchoCancellation: !0,
                                        echoCancellation: this.echoCancellation,
                                        noiseSuppression: this.noiseSuppression,
                                        automaticGainControl: this.automaticGainControl,
                                        noiseCancellation: this.noiseCancellation
                                    }),
                                    r.setNoInputThreshold(-100),
                                    r.setNoInputCallback(this.handleNoInput),
                                    this.videoSupported && (n.setOnVideoCallback(this.handleVideo), null === (m = n.setOnFirstFrameCallback) || void 0 === m || m.call(n, this.handleFirstFrame), null === (g = n.setOnDesktopSourceEnded) || void 0 === g || g.call(n, this.handleDesktopSourceEnded), null === (E = n.setOnSoundshare) || void 0 === E || E.call(n, this.handleSoundshare), null === (v = n.setOnSoundshareEnded) || void 0 === v || v.call(n, this.handleSoundshareEnded), null === (y = n.setOnSoundshareFailed) || void 0 === y || y.call(n, this.handleSoundshareFailed)),
                                    null === (_ = n.setOnMLSFailureCallback) || void 0 === _ || _.call(n, this.handleMLSFailure),
                                    this.setConnectionState(R.$j.CONNECTED),
                                    this.emit(b.Sh.Connected, s, {
                                        address: l,
                                        port: u,
                                        mode: this.chooseEncryptionMode(e.modes, i),
                                        codecs: this.codecs
                                    }),
                                    this.on(b.Sh.Stats, this.handleStats);
                                let I = this.getUserOptions();
                                for (let e of (I.forEach((e) => {
                                    var n, r;
                                    return this.logger.info(
                                        'Creating user: '
                                            .concat(e.id, ' with audio SSRC: ')
                                            .concat(e.ssrc, ' and video SSRCs: ')
                                            .concat(null !== (r = null === (n = e.videoSsrcs) || void 0 === n ? void 0 : n.join(',')) && void 0 !== r ? r : 0)
                                    );
                                }),
                                n.mergeUsers(I),
                                this.emit(b.Sh.RemoteStreamsReady, I.length),
                                Object.keys(this.localSpeakingFlags)))
                                    e !== this.userId && this.setSpeakingFlags(e, this.localSpeakingFlags[e]);
                            });
                    });
            };
        if (null != r.createOwnStreamConnectionWithOptions) l = this.context === R.Yn.STREAM && this.streamUserId === this.userId ? r.createOwnStreamConnectionWithOptions : r.createVoiceConnectionWithOptions;
        else if (null != r.createOwnStreamConnection) {
            var o,
                s,
                l,
                u = this.context === R.Yn.STREAM && this.streamUserId === this.userId ? r.createOwnStreamConnection : r.createVoiceConnection;
            l = (e, n, r) => u(n.ssrc, this.userId, n.address, n.port, r, n.experiments, n.streamParameters);
        } else l = (e, n, i) => new r.VoiceConnection(n.ssrc, e, n.address, n.port, i, n.experiments, n.streamParameters);
        null === (o = (n = this.conn = l(this.userId, e, a)).setSecureFramesStateUpdateCallback) ||
            void 0 === o ||
            o.call(n, (e) => {
                this.logger.info('DAVE protocol state update: '.concat(JSON.stringify(e))), this.emit(b.Sh.SecureFramesUpdate, e);
            }),
            null === (s = n.setDesktopSourceStatusCallback) ||
                void 0 === s ||
                s.call(n, (e) => {
                    if ('videohook_start' === e.type) this.emit(b.Sh.VideoHookStart);
                    else if ('videohook_stop' === e.type) this.emit(b.Sh.VideoHookStop);
                    else if ('videohook_initialize' === e.type) this.emit(b.Sh.VideoHookInitialize, e.backend, e.format, e.framebufferFormat, e.sampleCount, e.success, e.reinitialization);
                    else if ('screenshare_finish' === e.type) {
                        var n;
                        this.emit(b.Sh.ScreenshareFinish, e.screenshareFrames, e.videohookFrames, e.hybridDxgiFrames, e.hybridGdiFrames, e.hybridVideohookFrames, e.hybridGraphicsCaptureFrames, e.hybridCaptureMethodSwitches, e.hybridGdiBitBltFrames, e.hybridGdiPrintWindowFrames, e.quartzFrames, null !== (n = e.desktopCapturerType) && void 0 !== n ? n : e.desktop_capturer_type, e.screens, e.windows, e.activity, e.goLiveCameraFrames, e.screenCaptureKitFrames);
                    } else 'video_state' === e.type ? this.emit(b.Sh.VideoState, e.state) : e.type.startsWith('soundshare_') && this.emit(b.Sh.SoundshareTrace, e);
                }),
            this.on('newListener', this.handleNewListenerNative);
    }
    destroy() {
        this.conn.destroy(),
            Object.keys(this.localSpeakingFlags)
                .filter((e) => e !== this.userId)
                .forEach((e) => this.emit(b.Sh.Speaking, e, R.Dg.NONE, this.remoteAudioSSRCs[e])),
            this.setConnectionState(R.$j.DISCONNECTED),
            super.destroy();
    }
    setCodecs(e, n, r) {
        this.conn.setTransportOptions(this.getCodecOptions(e, n, r)), this.videoEncoderFallbackPending && (this.videoEncoderFallbackPending = !1);
    }
    getStats() {
        return this.connectionState === R.$j.DISCONNECTED
            ? Promise.resolve(null)
            : (0, m.timeout)(
                  new Promise((e) => {
                      null != this.conn.getFilteredStats ? this.conn.getFilteredStats(N.QP.ALL, (n) => e((0, A.Z)(this.mediaEngineConnectionId, n, this.remoteVideoSinkWants, this.localVideoSinkWants))) : null != this.conn.getStats ? this.conn.getStats((n) => e((0, A.Z)(this.mediaEngineConnectionId, n, this.remoteVideoSinkWants, this.localVideoSinkWants))) : (0, S.zS)().getStats((n) => e((0, A.Z)(this.mediaEngineConnectionId, n, this.remoteVideoSinkWants, this.localVideoSinkWants)));
                  }),
                  v.T
              ).catch((e) => {
                  if (!(e instanceof m.TimeoutError)) throw e;
              });
    }
    createUser(e, n, r) {
        let i = this.remoteAudioSSRCs[e],
            a = this.remoteVideoSSRCs[e];
        if (null != i && 0 === n) {
            this.logger.info('Ignoring attempt to recreate user '.concat(e, ' with 0 audio SSRC'));
            return;
        }
        (a = void 0 !== a ? [...a].sort() : []), (r = void 0 === r ? (null != a ? a : []) : [...r].sort());
        let o = i !== n,
            s = !p()(a, r);
        if (((this.remoteAudioSSRCs[e] = n), (this.remoteVideoSSRCs[e] = null != r ? r : []), this.userId !== e && (o || s))) {
            let i = void 0 !== r && r.length > 0 ? r[0] : 0,
                a = {
                    id: e,
                    ssrc: n,
                    videoSsrc: i,
                    videoSsrcs: r,
                    rtxSsrc: M(i),
                    mute: this.getLocalMute(e),
                    volume: this.getLocalVolume(e)
                };
            if (this.connectionState === R.$j.CONNECTED) {
                var l;
                this.logger.info(
                    'Creating user: '
                        .concat(e, ' with audio SSRC: ')
                        .concat(n, ' and video SSRCs: ')
                        .concat(null !== (l = null == r ? void 0 : r.join(',')) && void 0 !== l ? l : 0)
                ),
                    this.conn.mergeUsers([a]);
            }
            let o = this.localPans[e];
            null != o && this.setLocalPan(e, o.left, o.right);
            let s = this.localSpeakingFlags[e];
            null != s && s !== R.Dg.NONE && this.setSpeakingFlags(e, s);
        }
    }
    destroyUser(e) {
        null != this.remoteAudioSSRCs[e] && (this.conn.destroyUser(e), delete this.remoteAudioSSRCs[e], delete this.remoteVideoSSRCs[e]);
    }
    setSelfMute(e) {
        (this.selfMute = e), this.conn.setSelfMute(e), this.emit(b.Sh.Mute, e);
    }
    getSelfMute() {
        return this.selfMute;
    }
    setSelfDeaf(e) {
        (this.selfDeaf = e), this.conn.setSelfDeafen(e);
    }
    setSoundshareSource(e, n) {
        if ((this.soundshareId === e && this.soundshareSentSpeakingEvent) || this.context !== R.Yn.STREAM) return;
        (this.soundshareId = e), (this.soundshareSentSpeakingEvent = !1);
        let r = e;
        null === r && (r = 0),
            this.conn.setTransportOptions({
                soundsharePid: r,
                soundshareEventDriven: !0,
                soundshareLoopback: n
            });
    }
    setLocalMute(e, n) {
        (this.localMutes[e] = n), this.conn.setLocalMute(e, n), this.emit(b.Sh.LocalMute, e, n);
    }
    fastUdpReconnect() {
        null != this.conn.fastUdpReconnect && ((this.numFastUdpReconnects += 1), this.conn.fastUdpReconnect());
    }
    getNumFastUdpReconnects() {
        return null != this.conn.fastUdpReconnect ? this.numFastUdpReconnects : null;
    }
    wasRemoteDisconnected() {
        var e, n;
        null === (e = (n = this.conn).wasRemoteDisconnected) || void 0 === e || e.call(n);
    }
    setLocalVideoDisabled(e, n) {
        (this.disabledLocalVideos[e] = n), this.emit(b.Sh.LocalVideoDisabled, e, n);
    }
    setMinimumJitterBufferLevel(e) {
        this.minimumJitterBufferLevel = e;
    }
    setPostponeDecodeLevel(e) {
        this.postponeDecodeLevel = e;
    }
    setClipRecordUser(e, n, r) {
        if (!this.destroyed) {
            var i, a;
            null === (i = (a = this.conn).setClipRecordUser) || void 0 === i || i.call(a, e, (this.context === R.Yn.STREAM ? 'application' : 'user').concat('audio' === n ? 'Audio' : 'Video'), r);
        }
    }
    setClipsKeyFrameInterval(e) {
        this.context === R.Yn.STREAM &&
            ((this.clipsKeyFrameInterval = e),
            this.conn.setTransportOptions({
                keyframeInterval: this.getKeyFrameInterval(),
                alwaysSendVideo: this.keyframeInterval > 0
            }));
    }
    setViewerSideClip(e) {
        this.context === R.Yn.STREAM && this.conn.setTransportOptions({ enableViewerSideClip: e });
    }
    setRemoteAudioHistory(e) {
        this.conn.setTransportOptions({ remoteAudioHistoryMs: e });
    }
    setQualityDecoupling(e) {
        this.context === R.Yn.STREAM && this.conn.setTransportOptions({ enableQualityDecoupling: e });
    }
    getLocalVolume(e) {
        let n = this.localVolumes[e];
        return null == n && (n = this.context === R.Yn.DEFAULT ? R.Qx : R.Yh), P(n);
    }
    setLocalVolume(e, n) {
        this.localVolumes[e] = n;
        try {
            this.conn.setLocalVolume(e, this.getLocalVolume(e));
        } catch {
            this.logger.warn('Failed to set volume for user: '.concat(e, ': ').concat(n));
        }
    }
    setLocalPan(e, n, r) {
        (this.localPans[e] = {
            left: n,
            right: r
        }),
            this.conn.setLocalPan(e, n, r);
    }
    isAttenuating() {
        return this.attenuationFactor < 1;
    }
    setAttenuation(e, n, r) {
        (this.attenuationFactor = (100 - e) / 100), (this.attenuateWhileSpeakingSelf = n), (this.attenuateWhileSpeakingOthers = r), this.conn.setTransportOptions(this.getAttenuationOptions());
    }
    setCanHavePriority(e, n) {
        var r, i;
        null === (r = (i = this.conn).setRemoteUserCanHavePriority) || void 0 === r || r.call(i, e, n);
    }
    setBitRate(e) {
        this.setVoiceBitRate(e);
    }
    setVoiceBitRate(e) {
        if (this.voiceBitrate === e) return;
        this.voiceBitrate = e;
        let n = this.voiceBitrate;
        this.soundshareActive && (n = Math.max(R.ed, n)), this.conn.setTransportOptions({ encodingVoiceBitRate: n });
    }
    setCameraBitRate(e, n, r) {
        null != r || null != n
            ? this.videoQualityManager.setQualityOverwrite({
                  bitrateMin: null != r && r > 0 ? r : n,
                  bitrateMax: n
              })
            : this.videoQualityManager.setQualityOverwrite({}),
            !this.hasDesktopSource() &&
                this.conn.setTransportOptions({
                    encodingVideoBitRate: e,
                    encodingVideoMinBitRate: r,
                    encodingVideoMaxBitRate: n
                });
    }
    setEchoCancellation(e) {
        (this.echoCancellation = e), (0, S.zS)().setTransportOptions({ echoCancellation: this.echoCancellation });
    }
    setNoiseSuppression(e) {
        (this.noiseSuppression = e), (0, S.zS)().setTransportOptions({ noiseSuppression: this.noiseSuppression });
    }
    setAutomaticGainControl(e) {
        (this.automaticGainControl = e), (0, S.zS)().setTransportOptions({ automaticGainControl: this.automaticGainControl });
    }
    setNoiseCancellation(e) {
        (this.noiseCancellation = e), (0, S.zS)().setTransportOptions({ noiseCancellation: this.noiseCancellation });
    }
    setExperimentalEncoders(e) {
        (this.experimentalEncoders = e), this.conn.setTransportOptions({ experimentalEncoders: this.experimentalEncoders });
    }
    setHardwareH264(e) {
        (this.hardwareH264 = e), this.conn.setTransportOptions({ hardwareH264: this.hardwareH264 });
    }
    setSoftwareH264(e) {
        (this.softwareH264 = e), this.conn.setTransportOptions({ softwareH264: this.softwareH264 });
    }
    setQoS(e) {
        (this.qos = e), this.conn.setTransportOptions({ qos: this.qos });
    }
    setInputMode(e, n) {
        switch (((this.inputMode = e), e)) {
            case R.pM.PUSH_TO_TALK:
                this.pttReleaseDelay = n.pttReleaseDelay;
                break;
            case R.pM.VOICE_ACTIVITY:
                (this.vadThreshold = n.vadThreshold), (this.vadAutoThreshold = n.vadAutoThreshold), (this.vadUseKrisp = n.vadUseKrisp), (this.vadLeading = n.vadLeading), (this.vadTrailing = n.vadTrailing);
                break;
            default:
                throw Error('Unknown Input Mode: '.concat(e));
        }
        this.conn.setTransportOptions({
            inputMode: R.GO[this.inputMode],
            inputModeOptions: this.createInputModeOptions()
        });
    }
    setSilenceThreshold(e) {
        (0, S.zS)().setNoInputThreshold(e);
    }
    setForceAudioInput(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        n ? (this.forceAudioPriority = e) : (this.forceAudioNormal = e), this.conn.setPTTActive(this.forceAudioPriority || this.forceAudioNormal, this.forceAudioPriority);
    }
    setSpeakingFlags(e, n) {
        null != this.conn.setRemoteUserSpeakingStatus ? this.conn.setRemoteUserSpeakingStatus(e, n) : null != this.conn.setRemoteUserSpeaking && this.conn.setRemoteUserSpeaking(e, (n & R.Dg.VOICE) === R.Dg.VOICE), this.handleSpeakingFlags(e, n);
    }
    clearAllSpeaking() {}
    setEncryption(e, n) {
        this.logger.info('Selected encryption mode: '.concat(e)),
            this.conn.setTransportOptions({
                encryptionSettings: {
                    mode: e,
                    secretKey: n
                }
            });
    }
    setReconnectInterval(e) {
        (this.reconnectInterval = e), this.conn.setTransportOptions({ reconnectInterval: this.reconnectInterval });
    }
    setKeyframeInterval(e) {
        (this.keyframeInterval = e),
            this.conn.setTransportOptions({
                keyframeInterval: this.getKeyFrameInterval(),
                alwaysSendVideo: this.keyframeInterval > 0
            });
    }
    setVideoQualityMeasurement(e) {
        (this.videoQualityMeasurement = e), this.conn.setTransportOptions({ videoQualityMeasurement: this.videoQualityMeasurement });
    }
    setVideoEncoderExperiments(e) {
        (this.videoEncoderExperiments = e), this.conn.setTransportOptions({ videoEncoderExperiments: this.videoEncoderExperiments });
    }
    setVideoBroadcast(e) {
        if (this.selfVideo !== e) (this.selfVideo = e), this.applyVideoTransportOptions();
    }
    setGoLiveSource(e) {
        let { resolution: n, frameRate: r } = e.quality,
            i = n <= 480 ? (n / 3) * 4 : (n / 9) * 16,
            a = n,
            o = null;
        if ((null != e.desktopDescription ? (o = e.desktopDescription.id) : null != e.cameraDescription && (o = ''.concat(e.cameraDescription.videoDeviceGuid, ':').concat(e.cameraDescription.audioDeviceGuid)), this.goLiveSourceIdentifier === o)) {
            if ((this.setDesktopEncodingOptions(i, a, r), null != e.desktopDescription)) {
                let { soundshareId: n, useLoopback: r } = e.desktopDescription;
                this.soundshareId !== n && this.setSoundshareSource(n, r);
            }
            return;
        }
        if (((this.goLiveSourceIdentifier = o), null != this.conn.setDesktopSource)) {
            if (null != e.desktopDescription) {
                let { id: n, soundshareId: r, useLoopback: i, useVideoHook: a, useGraphicsCapture: o, useQuartzCapturer: s, allowScreenCaptureKit: l, videoHookStaleFrameTimeoutMs: u, graphicsCaptureStaleFrameTimeoutMs: c, hdrCaptureMode: d } = e.desktopDescription;
                this.setSoundshareSource(r, i);
                let [f, p] = null != n ? n.split(':') : ['', ''];
                null != n
                    ? this.logger.info(
                          'capturing desktop (type: '
                              .concat(f, ', handle: ')
                              .concat(p, ', use-video-hook: ')
                              .concat(a.toString(), ', use-graphics-capture: ')
                              .concat(null == o ? void 0 : o.toString(), ').')
                      )
                    : this.logger.info('capturing desktop (type: <stop>).'),
                    null != this.conn.setDesktopSourceWithOptions
                        ? null != n
                            ? this.conn.setDesktopSourceWithOptions({
                                  type: f,
                                  sourceId: p,
                                  useVideoHook: a,
                                  useGraphicsCapture: o,
                                  useQuartzCapturer: s,
                                  allowScreenCaptureKit: l,
                                  videoHookStaleFrameTimeoutMs: u,
                                  graphicsCaptureStaleFrameTimeoutMs: c,
                                  hdrCaptureMode: d
                              })
                            : this.conn.clearDesktopSource()
                        : this.conn.setDesktopSource('wumpus-'.concat(p), a, f);
            } else if (null != e.cameraDescription) {
                let { videoDeviceGuid: n, audioDeviceGuid: r } = e.cameraDescription;
                this.conn.setGoLiveDevices({
                    videoInputDeviceId: n,
                    audioInputDeviceId: r
                });
            }
            this.setDesktopEncodingOptions(i, a, r);
        }
    }
    clearGoLiveDevices() {
        null != this.goLiveSourceIdentifier && this.setDesktopEncodingOptions(1280, 720, 30), null != this.conn.clearGoLiveDevices && this.conn.clearGoLiveDevices();
    }
    clearDesktopSource() {
        null != this.goLiveSourceIdentifier && this.setDesktopEncodingOptions(1280, 720, 30), (this.goLiveSourceIdentifier = null), null != this.conn.clearDesktopSource ? this.conn.clearDesktopSource() : this.conn.setDesktopSource('', !1, '');
    }
    setDesktopSourceStatusCallback(e) {
        var n, r;
        null === (n = (r = this.conn).setDesktopSourceStatusCallback) || void 0 === n || n.call(r, e);
    }
    hasDesktopSource() {
        return null != this.goLiveSourceIdentifier;
    }
    setDesktopEncodingOptions(e, n, r) {
        if (this.destroyed) return;
        let i = (0 === n && r >= 10) || n > 720 || r > 30 ? N.yf : N.YE,
            a = {
                width: e,
                height: n,
                framerate: r
            },
            o = this.videoQualityManager.getQuality(),
            s = !y.SF.equals(a, o.capture) || o.bitrateMax !== i,
            l = this.videoStreamParameters.findIndex((e) => e.quality === N.y7);
        -1 === l && (l = 0),
            s &&
                (this.videoQualityManager.setGoliveQuality({
                    capture: a,
                    encode: a,
                    bitrateMax: i
                }),
                this.videoStreamParameters.length > l &&
                    ((this.videoStreamParameters[l].maxResolution = {
                        type: 0 === e && 0 === n ? R.uA.SOURCE : R.uA.FIXED,
                        width: e,
                        height: n
                    }),
                    (this.videoStreamParameters[l].maxFrameRate = r),
                    (this.videoStreamParameters[l].maxBitrate = i)));
        let u = this.videoStreamParameters.findIndex((e) => e.quality === N.LD),
            c = -1 !== u && this.videoStreamParameters.length > u,
            d = this.videoQualityManager.shouldEnableGoliveSimulcastForHqQuality(a),
            f = c && this.videoStreamParameters[u].active !== d;
        c && ((this.videoStreamParameters[u].active = d), (this.simulcastLQDisabledSsrc = d ? void 0 : this.videoStreamParameters[u].ssrc)), (s || f) && (this.emit(b.Sh.Video, this.userId, null, this.audioSSRC, this.videoStreamParameters[l].ssrc, M(this.videoStreamParameters[l].ssrc), this.videoStreamParameters), this.conn.setTransportOptions(this.applyQualityConstraints().constraints));
    }
    setSDP(e) {}
    setRemoteVideoSinkWants(e) {
        (this.remoteVideoSinkWants = e), this.updateVideoQuality(N.XR);
    }
    setLocalVideoSinkWants(e) {
        let n = this.localVideoSinkWants,
            r = e;
        for (let [e, l] of Object.entries(this.remoteVideoSSRCs)) {
            var i, a, o, s;
            let u = 0,
                c = 0;
            for (let e of l) (u += null == n ? void 0 : n[e]), (c += null == r ? void 0 : r[e]);
            0 === u && 0 !== c && (null === (i = (a = this.conn).setDisableLocalVideo) || void 0 === i || i.call(a, e, !1)), 0 !== u && 0 === c && (null === (o = (s = this.conn).setDisableLocalVideo) || void 0 === o || o.call(s, e, !0));
        }
        this.localVideoSinkWants = e;
    }
    startSamplesLocalPlayback(e, n, r, i) {
        if (n.numberOfChannels > 2) {
            i(1, 'Too many channels');
            return;
        }
        for (var a = [], o = 0; o < n.numberOfChannels; o++) {
            var s = n.getChannelData(o);
            a.push(s);
        }
        this.conn.startSamplesLocalPlayback(
            e,
            {
                sampleRate: n.sampleRate,
                volume: r
            },
            a,
            i
        );
    }
    stopAllSamplesLocalPlayback() {
        this.conn.stopAllSamplesLocalPlayback();
    }
    stopSamplesLocalPlayback(e) {
        this.conn.stopSamplesLocalPlayback(e);
    }
    setBandwidthEstimationExperiments(e) {
        this.conn.setTransportOptions({ bandwidthEstimationExperiments: e });
    }
    updateVideoQualityCore(e, n) {
        this.videoSupported && !this.destroyed && this.conn.setTransportOptions(e);
    }
    setStreamParameters(e) {
        return new Promise((n, r) => {
            for (let n of this.videoStreamParameters) {
                let i = e.findIndex((e) => e.rid === n.rid);
                if (-1 === i) {
                    r(Error('Invalid rid'));
                    return;
                }
                let a = [];
                !p()(this.videoStreamParameters[i], e[i]) && ((this.videoStreamParameters[i] = { ...e[i] }), a.push({ ...e[i] })), this.conn.setTransportOptions({ streamParameters: a });
            }
            n();
        });
    }
    applyVideoTransportOptions() {
        if (!this.videoSupported) return;
        let e = !1;
        if (this.hasDesktopSource() && this.videoStreamParameters.length > 0) {
            var n;
            e = (null === (n = this.videoStreamParameters[0].maxResolution) || void 0 === n ? void 0 : n.type) === R.uA.SOURCE;
        }
        this.conn.setTransportOptions(this.applyQualityConstraints({ encodingVideoDegradationPreference: this.hasDesktopSource() ? (e ? this.sourceDesktopDegradationPreference : this.desktopDegradationPreference) : this.videoDegradationPreference }).constraints), this.conn.setVideoBroadcast(this.selfVideo);
    }
    chooseEncryptionMode(e, n) {
        for (let r of n) for (let n of e) if (r === n) return r;
        return 'xsalsa20_poly1305';
    }
    getUserOptions() {
        return Object.keys(this.remoteAudioSSRCs).map((e) => {
            let n = void 0 !== this.remoteVideoSSRCs[e] && this.remoteVideoSSRCs[e].length > 0 ? this.remoteVideoSSRCs[e][0] : 0;
            return {
                id: e,
                ssrc: this.remoteAudioSSRCs[e],
                videoSsrc: n,
                videoSsrcs: this.remoteVideoSSRCs[e],
                rtxSsrc: M(n),
                mute: this.getLocalMute(e),
                volume: this.getLocalVolume(e)
            };
        });
    }
    createInputModeOptions() {
        switch (this.inputMode) {
            case R.pM.VOICE_ACTIVITY:
                return {
                    vadThreshold: this.vadThreshold,
                    vadAutoThreshold: this.vadAutoThreshold ? T.a.VERY_AGGRESSIVE : T.a.DISABLED,
                    vadUseKrisp: this.vadUseKrisp,
                    vadLeading: this.vadLeading,
                    vadTrailing: this.vadTrailing
                };
            case R.pM.PUSH_TO_TALK:
                return { pttReleaseDelay: this.pttReleaseDelay };
            default:
                throw Error('Unknown Input Mode: '.concat(this.inputMode));
        }
    }
    getAttenuationOptions() {
        return {
            attenuation: this.isAttenuating(),
            attenuationFactor: this.attenuationFactor,
            attenuateWhileSpeakingSelf: this.attenuateWhileSpeakingSelf,
            attenuateWhileSpeakingOthers: this.attenuateWhileSpeakingOthers
        };
    }
    getCodecParams(e, n) {
        if (e !== R.ad.H264) return {};
        if (n)
            return {
                'level-asymmetry-allowed': '1',
                'packetization-mode': '1',
                'profile-level-id': '42e034'
            };
        {
            let e = '4d0033',
                n = '42e01f';
            return {
                'level-asymmetry-allowed': '1',
                'packetization-mode': '1',
                'profile-level-id': 'android' === (0, S.zS)().platform ? n : e,
                'software-h264': this.softwareH264 ? '1' : '0'
            };
        }
    }
    getCodecOptions(e, n, r) {
        var i, a, o, s;
        let l;
        let u = {
                type: null !== (i = null == (l = this.codecs.find((n) => n.name === e)) ? void 0 : l.payloadType) && void 0 !== i ? i : 0,
                name: e,
                freq: 48000,
                pacsize: 960,
                channels: 1,
                rate: 64000
            },
            c = [
                {
                    type: null !== (a = null == l ? void 0 : l.payloadType) && void 0 !== a ? a : 0,
                    name: e,
                    freq: 48000,
                    channels: 2,
                    params: { stereo: '1' }
                }
            ];
        r === R.Yn.STREAM && (u.channels = 2);
        let d = [],
            f = {
                name: '',
                type: 0,
                rtxType: 0,
                params: {}
            };
        for (l of this.codecs) {
            if (l.name === e) continue;
            let r = {
                name: (0, I.AQ)(l.name),
                type: null !== (o = null == l ? void 0 : l.payloadType) && void 0 !== o ? o : 0,
                rtxType: null !== (s = null == l ? void 0 : l.rtxPayloadType) && void 0 !== s ? s : 0,
                params: this.getCodecParams(l.name, !0)
            };
            this.experimentFlags.has(N.V8.RESET_DECODER_ON_ERRORS) && (r.params['reset-on-errors'] = '1'), this.experimentFlags.has(N.V8.SOFTWARE_FALLBACK_ON_ERRORS) && (r.params['fallback-after-errors'] = '3'), this.experimentFlags.has(N.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS) && (r.params['fallback-on-consecutive-errors'] = '1'), this.experimentFlags.has(N.V8.SIGNAL_AV1_HARDWARE_DECODE) && (r.params['hardware-av1-decode'] = '1');
            let i = this.hardwareH264 && this.useElectronVideo && C.Z.useDirectVideo ? '1' : '0';
            (r.params['hardware-h264'] = i),
                d.push(r),
                l.name === n &&
                    ((f = {
                        ...r,
                        params: this.getCodecParams(l.name, !1)
                    }),
                    this.experimentFlags.has(N.V8.VIDEOTOOLBOX_RATE_CONTROL) && (f.params['fixed-rate-presentation-timestamps'] = '1'),
                    (f.params['hardware-h264'] = i));
        }
        return {
            videoEncoder: f,
            videoDecoders: d,
            audioEncoder: u,
            audioDecoders: c
        };
    }
    getKeyFrameInterval() {
        return this.keyframeInterval > 0 && this.clipsKeyFrameInterval > 0 ? Math.min(this.keyframeInterval, this.clipsKeyFrameInterval) : Math.max(this.keyframeInterval, this.clipsKeyFrameInterval);
    }
    getConnectionTransportOptions() {
        let e = {
            selfMute: this.selfMute,
            inputMode: R.GO[this.inputMode],
            inputModeOptions: this.createInputModeOptions(),
            minimumJitterBufferLevel: this.minimumJitterBufferLevel,
            postponeDecodeLevel: this.postponeDecodeLevel,
            ...this.getAttenuationOptions(),
            fec: !0,
            packetLossRate: 0.3,
            qos: this.qos,
            prioritySpeakerDucking: R.jg,
            encodingVoiceBitRate: this.voiceBitrate,
            callBitRate: R.$A,
            callMinBitRate: R.mN,
            callMaxBitRate: R.mC,
            encodingVideoDegradationPreference: this.videoDegradationPreference,
            experimentalEncoders: this.experimentalEncoders,
            hardwareH264: this.hardwareH264,
            softwareH264: this.softwareH264,
            reconnectInterval: this.reconnectInterval
        };
        return (0, S.eJ)(R.eR.VIDEO_EFFECTS) && this.context === R.Yn.STREAM && (e.enableVideoEffects = !0), this.experimentFlags.has(N.V8.MUTE_BEFORE_PROCESSING) && (e.muteBeforeProcessing = !0), this.experimentFlags.has(N.V8.PTT_BEFORE_PROCESSING) && (e.pttBeforeProcessing = !0), this.experimentFlags.has(N.V8.SKIP_ENCODE) && (e.skipEncode = !0), e;
    }
    setStream(e) {
        throw Error('Method not implemented.');
    }
    getUserIdBySsrc(e) {}
    prepareSecureFramesTransition(e, n, r) {
        var i, a;
        null === (i = (a = this.conn).prepareSecureFramesTransition) || void 0 === i || i.call(a, e, n, r);
    }
    prepareSecureFramesEpoch(e, n, r) {
        var i, a;
        null === (i = (a = this.conn).prepareSecureFramesEpoch) || void 0 === i || i.call(a, e, n, r);
    }
    executeSecureFramesTransition(e) {
        var n, r;
        null === (n = (r = this.conn).executeSecureFramesTransition) || void 0 === n || n.call(r, e);
    }
    getMLSKeyPackage(e) {
        var n, r;
        null === (n = (r = this.conn).getMLSKeyPackage) || void 0 === n || n.call(r, e);
    }
    updateMLSExternalSender(e) {
        var n, r;
        null === (n = (r = this.conn).updateMLSExternalSender) || void 0 === n || n.call(r, e);
    }
    processMLSProposals(e, n) {
        var r, i;
        null === (r = (i = this.conn).processMLSProposals) || void 0 === r || r.call(i, e, n);
    }
    prepareMLSCommitTransition(e, n, r) {
        var i, a;
        null === (i = (a = this.conn).prepareMLSCommitTransition) || void 0 === i || i.call(a, e, n, r);
    }
    processMLSWelcome(e, n, r) {
        var i, a;
        null === (i = (a = this.conn).processMLSWelcome) || void 0 === i || i.call(a, e, n, r);
    }
    getMLSPairwiseFingerprint(e, n, r) {
        var i, a;
        null === (i = (a = this.conn).getMLSPairwiseFingerprint) || void 0 === i || i.call(a, e, n, r);
    }
    presentDesktopSourcePicker(e) {
        var n, r;
        null === (n = (r = this.conn).presentDesktopSourcePicker) || void 0 === n || n.call(r, e);
    }
    constructor(e, n, r) {
        super(e, n),
            O(this, 'mediaEngineConnectionId', 'Native-'.concat(w++)),
            O(this, 'goLiveSourceIdentifier', void 0),
            O(this, 'selfVideo', !1),
            O(this, 'forceAudioNormal', !1),
            O(this, 'forceAudioPriority', !1),
            O(this, 'codecs', []),
            O(this, 'videoEncoderFallbackPending', !1),
            O(this, 'desktopDegradationPreference', (0, S.zS)().DegradationPreference.MAINTAIN_FRAMERATE),
            O(this, 'sourceDesktopDegradationPreference', (0, S.zS)().DegradationPreference.DISABLED),
            O(this, 'videoDegradationPreference', (0, S.zS)().DegradationPreference.BALANCED),
            O(this, 'localPans', {}),
            O(this, 'remoteAudioSSRCs', {}),
            O(this, 'remoteVideoSSRCs', {}),
            O(this, 'inputMode', R.pM.VOICE_ACTIVITY),
            O(this, 'vadThreshold', -40),
            O(this, 'vadAutoThreshold', !0),
            O(this, 'vadUseKrisp', !0),
            O(this, 'vadLeading', 5),
            O(this, 'vadTrailing', 25),
            O(this, 'pttReleaseDelay', 20),
            O(this, 'soundshareActive', !1),
            O(this, 'soundshareId', null),
            O(this, 'soundshareSentSpeakingEvent', !1),
            O(this, 'echoCancellation', !0),
            O(this, 'noiseSuppression', !0),
            O(this, 'automaticGainControl', !0),
            O(this, 'noiseCancellation', !1),
            O(this, 'experimentalEncoders', !1),
            O(this, 'hardwareH264', !0),
            O(this, 'softwareH264', !0),
            O(this, 'attenuationFactor', 0.5),
            O(this, 'attenuateWhileSpeakingSelf', !1),
            O(this, 'attenuateWhileSpeakingOthers', !0),
            O(this, 'qos', !0),
            O(this, 'conn', void 0),
            O(this, 'minimumJitterBufferLevel', 0),
            O(this, 'postponeDecodeLevel', 100),
            O(this, 'reconnectInterval', 60000),
            O(this, 'keyframeInterval', 0),
            O(this, 'clipsKeyFrameInterval', 0),
            O(this, 'videoQualityMeasurement', ''),
            O(this, 'videoEncoderExperiments', ''),
            O(this, 'numFastUdpReconnects', 0),
            O(this, 'simulcastLQDisabledSsrc', void 0),
            O(this, 'logger', void 0),
            O(this, 'handleSpeakingNative', (e, n) => {
                let r = R.Dg.NONE;
                (r = 'boolean' == typeof n ? (n ? R.Dg.VOICE : R.Dg.NONE) : n), this.handleSpeakingFlags(e, r);
            }),
            O(this, 'handleNativeMuteToggled', () => {
                this.emit(b.Sh.ToggleMuteFromNative);
            }),
            O(this, 'handleNativeMuteChanged', (e) => {
                this.emit(b.Sh.NativeMuteChanged, e);
            }),
            O(this, 'handleSpeakingFlags', (e, n) => {
                this.localSpeakingFlags[e] = n;
                let r = e === this.userId ? this.audioSSRC : this.remoteAudioSSRCs[e];
                this.emit(b.Sh.Speaking, e, n, r), (n & R.Dg.SOUNDSHARE) != 0 && !1 === this.soundshareSentSpeakingEvent && (this.emit(b.Sh.SoundshareSpeaking), (this.soundshareSentSpeakingEvent = !0));
            }),
            O(this, 'handleSpeakingWhileMuted', () => {
                this.emit(b.Sh.SpeakingWhileMuted);
            }),
            O(this, 'handlePing', (e, n, r) => {
                this.emit(b.Sh.Ping, e);
            }),
            O(this, 'handlePingTimeout', (e, n, r, i) => {
                this.emit(b.Sh.PingTimeout, r, i > 0 ? i : 4000);
            }),
            O(this, 'handleVideoEncoderFallback', (e) => {
                if (!this.videoEncoderFallbackPending) this.logger.info('Falling back from current video encoder: '.concat(e)), (this.codecs = this.codecs.map((n) => ((e === n.name || ('AV1' === n.name && 'AV1X' === e)) && (n.encode = !1), n)).filter((e) => !('video' === e.type && !1 === e.encode && !1 === e.decode))), this.emit(b.Sh.VideoEncoderFallback, this.codecs), (this.videoEncoderFallbackPending = !0);
            }),
            O(this, 'handleRTCPMessage', (e, n) => {
                if (e === N.ym.REMB && this.context === R.Yn.STREAM) {
                    let e = JSON.parse(n);
                    e.ssrcs.forEach((n) => {
                        var r, i, a, o;
                        let s = this.videoStreamParameters.find((e) => e.ssrc === n);
                        if (void 0 !== s && (null !== (r = s.quality) && void 0 !== r ? r : 0) < 100 && 'video' === s.type) {
                            let r = Math.floor(e.bitrate * L);
                            r = u()(r, null !== (i = s.minBitrate) && void 0 !== i ? i : 0, null !== (a = s.maxBitrate) && void 0 !== a ? a : r);
                            let l = null !== (o = s.targetBitrate) && void 0 !== o ? o : 0;
                            (Math.abs(r - l) / ((r + l) / 2) > x || void 0 === s.targetBitrate) && (this.logger.info('Updating target bitrate for SSRC '.concat(n, ' from ').concat(s.targetBitrate, ' to ').concat(r)), this.videoQualityManager.setGoLiveSimulcastLQTargetBitrate(r), this.updateVideoQuality());
                        }
                    });
                }
            }),
            O(this, 'handleVideo', (e, n, r, i) => {
                let a = d()(this.videoStreamParameters);
                e === this.userId
                    ? null != i && Array.isArray(i) && i.length > 0
                        ? i.forEach((e) => {
                              a.forEach((n, r) => {
                                  if (n.rid === e.rid) {
                                      let i = this.simulcastLQDisabledSsrc !== e.ssrc && e.active;
                                      a[r] = {
                                          ...n,
                                          ssrc: e.ssrc,
                                          rtxSsrc: e.rtxSsrc,
                                          active: i
                                      };
                                  }
                              });
                          })
                        : n > 0
                          ? ((a[0].active = !0), (a[0].ssrc = n), (a[0].rtxSsrc = M(n)))
                          : (a[0].active = !1)
                    : n > 0 && (void 0 !== this.remoteVideoSSRCs[e] ? !this.remoteVideoSSRCs[e].includes(n) && (this.remoteVideoSSRCs[e] = [...this.remoteVideoSSRCs[e], n]) : (this.remoteVideoSSRCs[e] = [n])),
                    (this.videoStreamParameters = a),
                    this.emit(b.Sh.Video, e, null != r && '' !== r ? r : null, e === this.userId ? this.audioSSRC : this.remoteAudioSSRCs[e], n, M(n), this.videoStreamParameters);
            }),
            O(this, 'handleFirstFrame', (e, n, r) => {
                this.emit(b.Sh.FirstFrame, e, n, r);
            }),
            O(this, 'handleNoInput', (e) => {
                this.emit(b.Sh.Silence, !e);
            }),
            O(this, 'handleDesktopSourceEnded', () => {
                this.emit(b.Sh.DesktopSourceEnd);
            }),
            O(this, 'handleSoundshare', (e) => {
                e && ((this.soundshareActive = !0), this.conn.setTransportOptions({ encodingVoiceBitRate: Math.max(R.ed, this.voiceBitrate) }), this.emit(b.Sh.SoundshareAttached));
            }),
            O(this, 'handleSoundshareFailed', (e, n, r) => {
                this.emit(b.Sh.SoundshareFailed, {
                    failureCode: e,
                    failureReason: n,
                    willRetry: r
                });
            }),
            O(this, 'handleSoundshareEnded', () => {
                (this.soundshareActive = !1), !this.destroyed && this.conn.setTransportOptions({ encodingVoiceBitRate: this.voiceBitrate });
            }),
            O(this, 'handleNewListenerNative', (e) => {
                if (e === b.Sh.ConnectionStateChange) this.emit(e, this.connectionState);
            }),
            O(this, 'handleStats', (e) => {
                if (this.connectionState === R.$j.DISCONNECTED) {
                    this.off(b.Sh.Stats, this.handleStats);
                    return;
                }
                if (null != e) {
                    if (null != this.stats) {
                        let n = _()(
                                e.rtp.outbound,
                                (e, n) => {
                                    var r, i;
                                    return (e.lost += null !== (r = n.packetsLost) && void 0 !== r ? r : 0), (e.sent += null !== (i = n.packetsSent) && void 0 !== i ? i : 0), e;
                                },
                                {
                                    lost: 0,
                                    sent: 0
                                }
                            ),
                            r = _()(
                                this.stats.rtp.outbound,
                                (e, n) => {
                                    var r, i;
                                    return (e.lost += null !== (r = n.packetsLost) && void 0 !== r ? r : 0), (e.sent += null !== (i = n.packetsSent) && void 0 !== i ? i : 0), e;
                                },
                                {
                                    lost: 0,
                                    sent: 0
                                }
                            ),
                            i = n.sent - r.sent,
                            a = n.lost - r.lost;
                        if (0 === i) this.emit(b.Sh.OutboundLossRate, 0);
                        else if (i > 0 && a >= 0) {
                            let e = u()(a / (i + a), 0, 1);
                            this.emit(b.Sh.OutboundLossRate, 100 * e);
                        }
                        let o = e.rtp.outbound.filter((e) => 'audio' === e.type)[0],
                            s = this.stats.rtp.outbound.filter((e) => 'audio' === e.type)[0];
                        if (null != o && null != s && null != o.framesCaptured && null != s.framesCaptured) {
                            let e = o.framesCaptured - s.framesCaptured,
                                n = null != o.noiseCancellerFrames ? (null != s.noiseCancellerFrames ? o.noiseCancellerFrames - s.noiseCancellerFrames : 0) : e;
                            if (this.noiseCancellation && n > D && null != o.noiseCancellerProcessTime && null != s.noiseCancellerProcessTime) {
                                let e = o.noiseCancellerProcessTime - s.noiseCancellerProcessTime;
                                e / n > 8 ? this.emit(b.Sh.NoiseCancellationError, R.H3.CPU_OVERUSE) : 0 === e && this.emit(b.Sh.NoiseCancellationError, R.H3.FAILED);
                            }
                            this.inputMode === R.pM.VOICE_ACTIVITY && this.vadAutoThreshold && this.vadUseKrisp && e > D && null != o.voiceActivityDetectorProcessTime && null != s.voiceActivityDetectorProcessTime && (o.voiceActivityDetectorProcessTime - s.voiceActivityDetectorProcessTime) / e > 4 && this.emit(b.Sh.VoiceActivityDetectorError, R.H3.VAD_CPU_OVERUSE);
                        }
                    }
                    this.stats = e;
                }
            }),
            O(this, 'handleMLSFailure', (e, n) => {
                this.emit(b.Sh.MLSFailure, e, n);
            }),
            (this.videoSupported = r),
            (this.logger = new g.Yd('Connection('.concat(e, ')'))),
            this.logger.enableNativeLogger(!0);
    }
}
