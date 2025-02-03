n.d(t, { Z: () => x }), n(312677), n(47120), n(411104), n(653041);
var i = n(595182),
    r = n.n(i),
    a = n(117806),
    s = n.n(a),
    o = n(565925),
    l = n.n(o),
    u = n(971793),
    c = n.n(u),
    d = n(420994),
    f = n(259443),
    _ = n(839548),
    p = n(198274),
    h = n(701597),
    m = n(46973),
    g = n(829839),
    E = n(916057),
    v = n(992774),
    y = n(158466),
    I = n(650886),
    b = n(65154),
    T = n(149396);
function S(e, t, n) {
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
let A = 50,
    N = 0.9,
    C = 0.1,
    R = 0;
function O(e) {
    return (null != e ? e : T.Qx) / T.Qx;
}
function D(e) {
    return null != e && 0 !== e ? e + 1 : 0;
}
class x extends _.Z {
    static create(e, t, n) {
        let i = new x(e, t, !0);
        return i.initialize(n), i;
    }
    static createReplay(e, t) {
        let n = new x(e, '0', !0),
            i = (0, v.zS)();
        n.initializeStreamParameters([
            {
                type: b.Tr.VIDEO,
                rid: '100',
                ssrc: 0,
                rtxSsrc: 0,
                quality: 100,
                active: !1
            }
        ]);
        let r = (t, r) => {
                let a = null != i.getCodecCapabilities ? i.getCodecCapabilities : i.getSupportedVideoCodecs;
                n.on(m.Sh.Stats, n.handleStats),
                    n.conn.setOnVideoCallback(n.handleVideo),
                    a((t) => {
                        let i = (0, g.DY)(n.experimentFlags);
                        (n.codecs = [
                            {
                                type: 'audio',
                                name: T.ad.OPUS,
                                priority: 1,
                                payloadType: 120
                            },
                            ...(0, g.yQ)(t, i).map((e, t) => {
                                let n = t + 1,
                                    i = 101 + 2 * t;
                                return {
                                    type: 'video',
                                    name: e.name,
                                    priority: n,
                                    payloadType: i,
                                    rtxPayloadType: i + 1,
                                    encode: e.encode,
                                    decode: e.decode
                                };
                            })
                        ]),
                            n.setCodecs(T.ad.OPUS, T.ad.H264, e),
                            n.conn.startReplay();
                    });
            },
            a = i.createReplayConnection('default', r, t);
        return null == a ? null : ((n.conn = a), n);
    }
    initialize(e) {
        let t;
        this.logger.info('Creating connection to '.concat(e.address, ':').concat(e.port, ' with audio ssrc: ').concat(e.ssrc)),
            (this.audioSSRC = e.ssrc),
            (this.streamUserId = e.streamUserId),
            this.initializeStreamParameters(e.streamParameters),
            (e.streamParameters = [
                {
                    type: b.Tr.AUDIO,
                    ssrc: this.audioSSRC,
                    rid: '',
                    maxBitrate: 64000,
                    soundshare: this.context === T.Yn.STREAM
                },
                ...this.videoStreamParameters
            ]),
            (e.context = this.context);
        let n = (0, v.zS)(),
            i = null != n.getCodecCapabilities ? n.getCodecCapabilities : n.getSupportedVideoCodecs,
            r = (r, a) => {
                if (this.destroyed) return;
                if (null != r && '' !== r) {
                    this.setConnectionState(T.$j.NO_ROUTE), this.emit(m.Sh.Error, r);
                    return;
                }
                if (null == a) throw Error('Invalid transport info');
                let { protocol: s, address: o, port: l } = a;
                this.logger.info('Connected with local address '.concat(o, ':').concat(l, ' and protocol: ').concat(s)),
                    i((i) => {
                        this.logger.info('Available codecs: '.concat(JSON.stringify(i)));
                        let r = (0, g.DY)(this.experimentFlags);
                        this.logger.info('Experimental codecs: '.concat(JSON.stringify(r))),
                            (this.codecs = [
                                {
                                    type: 'audio',
                                    name: T.ad.OPUS,
                                    priority: 1,
                                    payloadType: 120
                                },
                                ...(0, g.yQ)(i, r).map((e, t) => {
                                    let n = t + 1,
                                        i = 101 + 2 * t;
                                    return {
                                        type: 'video',
                                        name: e.name,
                                        priority: n,
                                        payloadType: i,
                                        rtxPayloadType: i + 1,
                                        encode: e.encode,
                                        decode: e.decode
                                    };
                                })
                            ]),
                            this.logger.info('Audio codecs: '.concat(this.codecs.filter((e) => 'audio' === e.type).map((e) => e.name))),
                            this.logger.info('Video codecs: '.concat(this.codecs.filter((e) => 'video' === e.type).map((e) => e.name + '[encode: ' + e.encode + ', decode: ' + e.decode + ']'))),
                            t.getEncryptionModes((i) => {
                                var r, a, u, c, d, f, _, p, h, g, E, v, y;
                                this.logger.info('Encryption modes: '.concat(i)),
                                    t.setTransportOptions(this.getConnectionTransportOptions()),
                                    t.setSelfMute(this.selfMute || this.context === T.Yn.STREAM),
                                    t.setSelfDeafen(this.selfDeaf),
                                    t.setOnSpeakingCallback(this.handleSpeakingNative),
                                    null === (r = t.setOnNativeMuteToggleCallback) || void 0 === r || r.call(t, this.handleNativeMuteToggled),
                                    null === (a = t.setOnNativeMuteChangedCallback) || void 0 === a || a.call(t, this.handleNativeMuteChanged),
                                    null === (u = t.setOnSpeakingWhileMutedCallback) || void 0 === u || u.call(t, this.handleSpeakingWhileMuted),
                                    null === (c = t.setPingInterval) || void 0 === c || c.call(t, T.$B),
                                    t.setPingCallback(this.handlePing),
                                    null === (d = t.setPingTimeoutCallback) || void 0 === d || d.call(t, this.handlePingTimeout),
                                    null === (f = t.setOnVideoEncoderFallbackCallback) || void 0 === f || f.call(t, this.handleVideoEncoderFallback),
                                    null === (_ = t.setOnRtcpMessageCallback) || void 0 === _ || _.call(t, this.handleRTCPMessage),
                                    n.setTransportOptions({
                                        builtInEchoCancellation: !0,
                                        echoCancellation: this.echoCancellation,
                                        noiseSuppression: this.noiseSuppression,
                                        automaticGainControl: this.automaticGainControl,
                                        noiseCancellation: this.noiseCancellation,
                                        voiceFilters: this.voiceFilters
                                    }),
                                    n.setNoInputThreshold(-100),
                                    n.setNoInputCallback(this.handleNoInput),
                                    this.videoSupported && (t.setOnVideoCallback(this.handleVideo), null === (h = t.setOnFirstFrameCallback) || void 0 === h || h.call(t, this.handleFirstFrame), null === (g = t.setOnDesktopSourceEnded) || void 0 === g || g.call(t, this.handleDesktopSourceEnded), null === (E = t.setOnSoundshare) || void 0 === E || E.call(t, this.handleSoundshare), null === (v = t.setOnSoundshareEnded) || void 0 === v || v.call(t, this.handleSoundshareEnded), null === (y = t.setOnSoundshareFailed) || void 0 === y || y.call(t, this.handleSoundshareFailed)),
                                    null === (p = t.setOnMLSFailureCallback) || void 0 === p || p.call(t, this.handleMLSFailure),
                                    this.setConnectionState(T.$j.CONNECTED),
                                    this.emit(m.Sh.Connected, s, {
                                        address: o,
                                        port: l,
                                        mode: this.chooseEncryptionMode(e.modes, i),
                                        codecs: this.codecs
                                    }),
                                    this.on(m.Sh.Stats, this.handleStats);
                                let I = this.getUserOptions();
                                for (let e of (I.forEach((e) => {
                                    var t, n;
                                    return this.logger.info(
                                        'Creating user: '
                                            .concat(e.id, ' with audio SSRC: ')
                                            .concat(e.ssrc, ' and video SSRCs: ')
                                            .concat(null !== (n = null === (t = e.videoSsrcs) || void 0 === t ? void 0 : t.join(',')) && void 0 !== n ? n : 0)
                                    );
                                }),
                                t.mergeUsers(I),
                                this.emit(m.Sh.RemoteStreamsReady, I.length),
                                Object.keys(this.localSpeakingFlags)))
                                    e !== this.userId && this.setSpeakingFlags(e, this.localSpeakingFlags[e]);
                            });
                    });
            };
        if (null != n.createOwnStreamConnectionWithOptions) o = this.context === T.Yn.STREAM && this.streamUserId === this.userId ? n.createOwnStreamConnectionWithOptions : n.createVoiceConnectionWithOptions;
        else if (null != n.createOwnStreamConnection) {
            var a,
                s,
                o,
                l = this.context === T.Yn.STREAM && this.streamUserId === this.userId ? n.createOwnStreamConnection : n.createVoiceConnection;
            o = (e, t, n) => l(t.ssrc, this.userId, t.address, t.port, n, t.experiments, t.streamParameters);
        } else o = (e, t, i) => new n.VoiceConnection(t.ssrc, e, t.address, t.port, i, t.experiments, t.streamParameters);
        null === (a = (t = this.conn = o(this.userId, e, r)).setSecureFramesStateUpdateCallback) ||
            void 0 === a ||
            a.call(t, (e) => {
                this.logger.info('DAVE protocol state update: '.concat(JSON.stringify(e))), this.emit(m.Sh.SecureFramesUpdate, e);
            }),
            null === (s = t.setDesktopSourceStatusCallback) ||
                void 0 === s ||
                s.call(t, (e) => {
                    if ('videohook_start' === e.type) this.emit(m.Sh.VideoHookStart);
                    else if ('videohook_stop' === e.type) this.emit(m.Sh.VideoHookStop);
                    else if ('videohook_initialize' === e.type) this.emit(m.Sh.VideoHookInitialize, e.backend, e.format, e.framebufferFormat, e.sampleCount, e.success, e.reinitialization);
                    else if ('screenshare_finish' === e.type) {
                        var t;
                        this.emit(m.Sh.ScreenshareFinish, e.screenshareFrames, e.videohookFrames, e.hybridDxgiFrames, e.hybridGdiFrames, e.hybridVideohookFrames, e.hybridGraphicsCaptureFrames, e.hybridCaptureMethodSwitches, e.hybridGdiBitBltFrames, e.hybridGdiPrintWindowFrames, e.quartzFrames, null !== (t = e.desktopCapturerType) && void 0 !== t ? t : e.desktop_capturer_type, e.screens, e.windows, e.activity, e.goLiveCameraFrames, e.screenCaptureKitFrames);
                    } else 'video_state' === e.type ? this.emit(m.Sh.VideoState, e.state) : e.type.startsWith('soundshare_') && this.emit(m.Sh.SoundshareTrace, e);
                }),
            this.on('newListener', this.handleNewListenerNative);
    }
    destroy() {
        this.conn.destroy(),
            Object.keys(this.localSpeakingFlags)
                .filter((e) => e !== this.userId)
                .forEach((e) => this.emit(m.Sh.Speaking, e, T.Dg.NONE, this.remoteAudioSSRCs[e])),
            this.setConnectionState(T.$j.DISCONNECTED),
            super.destroy();
    }
    setCodecs(e, t, n) {
        this.conn.setTransportOptions(this.getCodecOptions(e, t, n)), this.videoEncoderFallbackPending && (this.videoEncoderFallbackPending = !1);
    }
    getStats() {
        return this.connectionState === T.$j.DISCONNECTED
            ? Promise.resolve(null)
            : (0, d.timeout)(
                  new Promise((e) => {
                      null != this.conn.getFilteredStats ? this.conn.getFilteredStats(b.QP.ALL, (t) => e((0, y.Z)(this.mediaEngineConnectionId, t, this.remoteVideoSinkWants, this.localVideoSinkWants))) : null != this.conn.getStats ? this.conn.getStats((t) => e((0, y.Z)(this.mediaEngineConnectionId, t, this.remoteVideoSinkWants, this.localVideoSinkWants))) : (0, v.zS)().getStats((t) => e((0, y.Z)(this.mediaEngineConnectionId, t, this.remoteVideoSinkWants, this.localVideoSinkWants)));
                  }),
                  p.T
              ).catch((e) => {
                  if (!(e instanceof d.TimeoutError)) throw e;
              });
    }
    createUser(e, t, n) {
        let i = this.remoteAudioSSRCs[e],
            r = this.remoteVideoSSRCs[e];
        if (null != i && 0 === t) {
            this.logger.info('Ignoring attempt to recreate user '.concat(e, ' with 0 audio SSRC'));
            return;
        }
        (r = void 0 !== r ? [...r].sort() : []), (n = void 0 === n ? (null != r ? r : []) : [...n].sort());
        let a = i !== t,
            s = !l()(r, n);
        if (((this.remoteAudioSSRCs[e] = t), (this.remoteVideoSSRCs[e] = null != n ? n : []), this.userId !== e && (a || s))) {
            let i = void 0 !== n && n.length > 0 ? n[0] : 0,
                r = {
                    id: e,
                    ssrc: t,
                    videoSsrc: i,
                    videoSsrcs: n,
                    rtxSsrc: D(i),
                    mute: this.getLocalMute(e),
                    volume: this.getLocalVolume(e)
                };
            if (this.connectionState === T.$j.CONNECTED) {
                var o;
                this.logger.info(
                    'Creating user: '
                        .concat(e, ' with audio SSRC: ')
                        .concat(t, ' and video SSRCs: ')
                        .concat(null !== (o = null == n ? void 0 : n.join(',')) && void 0 !== o ? o : 0)
                ),
                    this.conn.mergeUsers([r]);
            }
            let a = this.localPans[e];
            null != a && this.setLocalPan(e, a.left, a.right);
            let s = this.localSpeakingFlags[e];
            null != s && s !== T.Dg.NONE && this.setSpeakingFlags(e, s);
        }
    }
    destroyUser(e) {
        null != this.remoteAudioSSRCs[e] && (this.conn.destroyUser(e), delete this.remoteAudioSSRCs[e], delete this.remoteVideoSSRCs[e]);
    }
    setSelfMute(e) {
        (this.selfMute = e), this.conn.setSelfMute(e), this.emit(m.Sh.Mute, e);
    }
    getSelfMute() {
        return this.selfMute;
    }
    setSelfDeaf(e) {
        (this.selfDeaf = e), this.conn.setSelfDeafen(e);
    }
    setSoundshareSource(e, t) {
        if ((this.soundshareId === e && this.soundshareSentSpeakingEvent) || this.context !== T.Yn.STREAM) return;
        (this.soundshareId = e), (this.soundshareSentSpeakingEvent = !1);
        let n = e;
        null === n && (n = 0),
            this.conn.setTransportOptions({
                soundsharePid: n,
                soundshareEventDriven: !0,
                soundshareLoopback: t
            });
    }
    setLocalMute(e, t) {
        (this.localMutes[e] = t), this.conn.setLocalMute(e, t), this.emit(m.Sh.LocalMute, e, t);
    }
    fastUdpReconnect() {
        null != this.conn.fastUdpReconnect && ((this.numFastUdpReconnects += 1), this.conn.fastUdpReconnect());
    }
    getNumFastUdpReconnects() {
        return null != this.conn.fastUdpReconnect ? this.numFastUdpReconnects : null;
    }
    wasRemoteDisconnected() {
        var e, t;
        null === (e = (t = this.conn).wasRemoteDisconnected) || void 0 === e || e.call(t);
    }
    setLocalVideoDisabled(e, t) {
        (this.disabledLocalVideos[e] = t), this.emit(m.Sh.LocalVideoDisabled, e, t);
    }
    setMinimumJitterBufferLevel(e) {
        this.minimumJitterBufferLevel = e;
    }
    setPostponeDecodeLevel(e) {
        this.postponeDecodeLevel = e;
    }
    setClipRecordUser(e, t, n) {
        if (!this.destroyed) {
            var i, r;
            null === (i = (r = this.conn).setClipRecordUser) || void 0 === i || i.call(r, e, (this.context === T.Yn.STREAM ? 'application' : 'user').concat('audio' === t ? 'Audio' : 'Video'), n);
        }
    }
    setClipsKeyFrameInterval(e) {
        this.context === T.Yn.STREAM &&
            ((this.clipsKeyFrameInterval = e),
            this.conn.setTransportOptions({
                keyframeInterval: this.getKeyFrameInterval(),
                alwaysSendVideo: this.keyframeInterval > 0
            }));
    }
    setViewerSideClip(e) {
        this.context === T.Yn.STREAM && this.conn.setTransportOptions({ enableViewerSideClip: e });
    }
    setRemoteAudioHistory(e) {
        this.conn.setTransportOptions({ remoteAudioHistoryMs: e });
    }
    setQualityDecoupling(e) {
        this.context === T.Yn.STREAM && this.conn.setTransportOptions({ enableQualityDecoupling: e });
    }
    getLocalVolume(e) {
        let t = this.localVolumes[e];
        return null == t && (t = this.context === T.Yn.DEFAULT ? T.Qx : T.Yh), O(t);
    }
    setLocalVolume(e, t) {
        this.localVolumes[e] = t;
        try {
            this.conn.setLocalVolume(e, this.getLocalVolume(e));
        } catch {
            this.logger.warn('Failed to set volume for user: '.concat(e, ': ').concat(t));
        }
    }
    setLocalPan(e, t, n) {
        (this.localPans[e] = {
            left: t,
            right: n
        }),
            this.conn.setLocalPan(e, t, n);
    }
    isAttenuating() {
        return this.attenuationFactor < 1;
    }
    setAttenuation(e, t, n) {
        (this.attenuationFactor = (100 - e) / 100), (this.attenuateWhileSpeakingSelf = t), (this.attenuateWhileSpeakingOthers = n), this.conn.setTransportOptions(this.getAttenuationOptions());
    }
    setCanHavePriority(e, t) {
        var n, i;
        null === (n = (i = this.conn).setRemoteUserCanHavePriority) || void 0 === n || n.call(i, e, t);
    }
    setBitRate(e) {
        this.setVoiceBitRate(e);
    }
    setVoiceBitRate(e) {
        if (this.voiceBitrate === e) return;
        this.voiceBitrate = e;
        let t = this.voiceBitrate;
        this.soundshareActive && (t = Math.max(T.ed, t)), this.conn.setTransportOptions({ encodingVoiceBitRate: t });
    }
    setCameraBitRate(e, t, n) {
        null != n || null != t
            ? this.videoQualityManager.setQualityOverwrite({
                  bitrateMin: null != n && n > 0 ? n : t,
                  bitrateMax: t
              })
            : this.videoQualityManager.setQualityOverwrite({}),
            this.hasDesktopSource() ||
                this.conn.setTransportOptions({
                    encodingVideoBitRate: e,
                    encodingVideoMinBitRate: n,
                    encodingVideoMaxBitRate: t
                });
    }
    setEchoCancellation(e) {
        (this.echoCancellation = e), (0, v.zS)().setTransportOptions({ echoCancellation: this.echoCancellation });
    }
    setNoiseSuppression(e) {
        (this.noiseSuppression = e), (0, v.zS)().setTransportOptions({ noiseSuppression: this.noiseSuppression });
    }
    setAutomaticGainControl(e) {
        (this.automaticGainControl = e), (0, v.zS)().setTransportOptions({ automaticGainControl: this.automaticGainControl });
    }
    setNoiseCancellation(e) {
        (this.noiseCancellation = e), (0, v.zS)().setTransportOptions({ noiseCancellation: this.noiseCancellation });
    }
    setVoiceFiltersEnabled(e) {
        (this.voiceFilters = e), (0, v.zS)().setTransportOptions({ voiceFilters: this.voiceFilters });
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
    setInputMode(e, t) {
        switch (((this.inputMode = e), e)) {
            case T.pM.PUSH_TO_TALK:
                this.pttReleaseDelay = t.pttReleaseDelay;
                break;
            case T.pM.VOICE_ACTIVITY:
                (this.vadThreshold = t.vadThreshold), (this.vadAutoThreshold = t.vadAutoThreshold), (this.vadUseKrisp = t.vadUseKrisp), (this.vadLeading = t.vadLeading), (this.vadTrailing = t.vadTrailing);
                break;
            default:
                throw Error('Unknown Input Mode: '.concat(e));
        }
        this.conn.setTransportOptions({
            inputMode: T.GO[this.inputMode],
            inputModeOptions: this.createInputModeOptions()
        });
    }
    setSilenceThreshold(e) {
        (0, v.zS)().setNoInputThreshold(e);
    }
    setForceAudioInput(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        t ? (this.forceAudioPriority = e) : (this.forceAudioNormal = e), this.conn.setPTTActive(this.forceAudioPriority || this.forceAudioNormal, this.forceAudioPriority);
    }
    setSpeakingFlags(e, t) {
        null != this.conn.setRemoteUserSpeakingStatus ? this.conn.setRemoteUserSpeakingStatus(e, t) : null != this.conn.setRemoteUserSpeaking && this.conn.setRemoteUserSpeaking(e, (t & T.Dg.VOICE) === T.Dg.VOICE), this.handleSpeakingFlags(e, t);
    }
    clearAllSpeaking() {}
    setEncryption(e, t) {
        this.logger.info('Selected encryption mode: '.concat(e)),
            this.conn.setTransportOptions({
                encryptionSettings: {
                    mode: e,
                    secretKey: t
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
        this.selfVideo !== e && ((this.selfVideo = e), this.applyVideoTransportOptions());
    }
    setGoLiveSource(e) {
        let { resolution: t, frameRate: n } = e.quality,
            i = t <= 480 ? (t / 3) * 4 : (t / 9) * 16,
            r = t,
            a = null;
        if ((null != e.desktopDescription ? (a = e.desktopDescription.id) : null != e.cameraDescription && (a = ''.concat(e.cameraDescription.videoDeviceGuid, ':').concat(e.cameraDescription.audioDeviceGuid)), this.goLiveSourceIdentifier === a)) {
            if ((this.setDesktopEncodingOptions(i, r, n), null != e.desktopDescription)) {
                let { soundshareId: t, useLoopback: n } = e.desktopDescription;
                this.soundshareId !== t && this.setSoundshareSource(t, n);
            }
            return;
        }
        if (((this.goLiveSourceIdentifier = a), null != this.conn.setDesktopSource)) {
            if (null != e.desktopDescription) {
                let { id: t, soundshareId: n, useLoopback: i, useVideoHook: r, useGraphicsCapture: a, useQuartzCapturer: s, allowScreenCaptureKit: o, videoHookStaleFrameTimeoutMs: l, graphicsCaptureStaleFrameTimeoutMs: u, hdrCaptureMode: c } = e.desktopDescription;
                this.setSoundshareSource(n, i);
                let [d, f] = null != t ? t.split(':') : ['', ''];
                null != t
                    ? this.logger.info(
                          'capturing desktop (type: '
                              .concat(d, ', handle: ')
                              .concat(f, ', use-video-hook: ')
                              .concat(r.toString(), ', use-graphics-capture: ')
                              .concat(null == a ? void 0 : a.toString(), ').')
                      )
                    : this.logger.info('capturing desktop (type: <stop>).'),
                    null != this.conn.setDesktopSourceWithOptions
                        ? null != t
                            ? this.conn.setDesktopSourceWithOptions({
                                  type: d,
                                  sourceId: f,
                                  useVideoHook: r,
                                  useGraphicsCapture: a,
                                  useQuartzCapturer: s,
                                  allowScreenCaptureKit: o,
                                  videoHookStaleFrameTimeoutMs: l,
                                  graphicsCaptureStaleFrameTimeoutMs: u,
                                  hdrCaptureMode: c
                              })
                            : this.conn.clearDesktopSource()
                        : this.conn.setDesktopSource('wumpus-'.concat(f), r, d);
            } else if (null != e.cameraDescription) {
                let { videoDeviceGuid: t, audioDeviceGuid: n } = e.cameraDescription;
                this.conn.setGoLiveDevices({
                    videoInputDeviceId: t,
                    audioInputDeviceId: n
                });
            }
            this.setDesktopEncodingOptions(i, r, n);
        }
    }
    clearGoLiveDevices() {
        null != this.goLiveSourceIdentifier && this.setDesktopEncodingOptions(1280, 720, 30), null != this.conn.clearGoLiveDevices && this.conn.clearGoLiveDevices();
    }
    clearDesktopSource() {
        null != this.goLiveSourceIdentifier && this.setDesktopEncodingOptions(1280, 720, 30), (this.goLiveSourceIdentifier = null), null != this.conn.clearDesktopSource ? this.conn.clearDesktopSource() : this.conn.setDesktopSource('', !1, '');
    }
    setDesktopSourceStatusCallback(e) {
        var t, n;
        null === (t = (n = this.conn).setDesktopSourceStatusCallback) || void 0 === t || t.call(n, e);
    }
    hasDesktopSource() {
        return null != this.goLiveSourceIdentifier;
    }
    setDesktopEncodingOptions(e, t, n) {
        if (this.destroyed) return;
        let i = (0 === t && n >= 10) || t > 720 || n > 30 ? b.yf : b.YE,
            r = {
                width: e,
                height: t,
                framerate: n
            },
            a = this.videoQualityManager.getQuality(),
            s = !h.SF.equals(r, a.capture) || a.bitrateMax !== i,
            o = this.videoStreamParameters.findIndex((e) => e.quality === b.y7);
        -1 === o && (o = 0),
            s &&
                (this.videoQualityManager.setGoliveQuality({
                    capture: r,
                    encode: r,
                    bitrateMax: i
                }),
                this.videoStreamParameters.length > o &&
                    ((this.videoStreamParameters[o].maxResolution = {
                        type: 0 === e && 0 === t ? T.uA.SOURCE : T.uA.FIXED,
                        width: e,
                        height: t
                    }),
                    (this.videoStreamParameters[o].maxFrameRate = n),
                    (this.videoStreamParameters[o].maxBitrate = i)));
        let l = this.videoStreamParameters.findIndex((e) => e.quality === b.LD),
            u = -1 !== l && this.videoStreamParameters.length > l,
            c = this.videoQualityManager.shouldEnableGoliveSimulcastForHqQuality(r),
            d = u && this.videoStreamParameters[l].active !== c;
        u && ((this.videoStreamParameters[l].active = c), (this.simulcastLQDisabledSsrc = c ? void 0 : this.videoStreamParameters[l].ssrc)), (s || d) && (this.emit(m.Sh.Video, this.userId, null, this.audioSSRC, this.videoStreamParameters[o].ssrc, D(this.videoStreamParameters[o].ssrc), this.videoStreamParameters), this.conn.setTransportOptions(this.applyQualityConstraints().constraints));
    }
    setSDP(e) {}
    setRemoteVideoSinkWants(e) {
        (this.remoteVideoSinkWants = e), this.updateVideoQuality(b.XR);
    }
    setLocalVideoSinkWants(e) {
        let t = this.localVideoSinkWants,
            n = e;
        for (let [e, o] of Object.entries(this.remoteVideoSSRCs)) {
            var i, r, a, s;
            let l = 0,
                u = 0;
            for (let e of o) (l += null == t ? void 0 : t[e]), (u += null == n ? void 0 : n[e]);
            0 === l && 0 !== u && (null === (i = (r = this.conn).setDisableLocalVideo) || void 0 === i || i.call(r, e, !1)), 0 !== l && 0 === u && (null === (a = (s = this.conn).setDisableLocalVideo) || void 0 === a || a.call(s, e, !0));
        }
        this.localVideoSinkWants = e;
    }
    startSamplesLocalPlayback(e, t, n, i) {
        if (t.numberOfChannels > 2) {
            i(1, 'Too many channels');
            return;
        }
        for (var r = [], a = 0; a < t.numberOfChannels; a++) {
            var s = t.getChannelData(a);
            r.push(s);
        }
        this.conn.startSamplesLocalPlayback(
            e,
            {
                sampleRate: t.sampleRate,
                volume: n
            },
            r,
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
    updateVideoQualityCore(e, t) {
        this.videoSupported && !this.destroyed && this.conn.setTransportOptions(e);
    }
    setStreamParameters(e) {
        return new Promise((t, n) => {
            for (let t of this.videoStreamParameters) {
                let i = e.findIndex((e) => e.rid === t.rid);
                if (-1 === i) {
                    n(Error('Invalid rid'));
                    return;
                }
                let r = [];
                l()(this.videoStreamParameters[i], e[i]) || ((this.videoStreamParameters[i] = { ...e[i] }), r.push({ ...e[i] })), this.conn.setTransportOptions({ streamParameters: r });
            }
            t();
        });
    }
    applyVideoTransportOptions() {
        if (!this.videoSupported) return;
        let e = !1;
        if (this.hasDesktopSource() && this.videoStreamParameters.length > 0) {
            var t;
            e = (null === (t = this.videoStreamParameters[0].maxResolution) || void 0 === t ? void 0 : t.type) === T.uA.SOURCE;
        }
        this.conn.setTransportOptions(this.applyQualityConstraints({ encodingVideoDegradationPreference: this.hasDesktopSource() ? (e ? this.sourceDesktopDegradationPreference : this.desktopDegradationPreference) : this.videoDegradationPreference }).constraints), this.conn.setVideoBroadcast(this.selfVideo);
    }
    chooseEncryptionMode(e, t) {
        for (let n of t) for (let t of e) if (n === t) return n;
        return 'xsalsa20_poly1305';
    }
    getUserOptions() {
        return Object.keys(this.remoteAudioSSRCs).map((e) => {
            let t = void 0 !== this.remoteVideoSSRCs[e] && this.remoteVideoSSRCs[e].length > 0 ? this.remoteVideoSSRCs[e][0] : 0;
            return {
                id: e,
                ssrc: this.remoteAudioSSRCs[e],
                videoSsrc: t,
                videoSsrcs: this.remoteVideoSSRCs[e],
                rtxSsrc: D(t),
                mute: this.getLocalMute(e),
                volume: this.getLocalVolume(e)
            };
        });
    }
    createInputModeOptions() {
        switch (this.inputMode) {
            case T.pM.VOICE_ACTIVITY:
                return {
                    vadThreshold: this.vadThreshold,
                    vadAutoThreshold: this.vadAutoThreshold ? E.a.VERY_AGGRESSIVE : E.a.DISABLED,
                    vadUseKrisp: this.vadUseKrisp,
                    vadLeading: this.vadLeading,
                    vadTrailing: this.vadTrailing
                };
            case T.pM.PUSH_TO_TALK:
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
    getCodecParams(e, t) {
        if (e !== T.ad.H264) return {};
        if (t)
            return {
                'level-asymmetry-allowed': '1',
                'packetization-mode': '1',
                'profile-level-id': '42e034'
            };
        {
            let e = '4d0033',
                t = '42e01f';
            return {
                'level-asymmetry-allowed': '1',
                'packetization-mode': '1',
                'profile-level-id': 'android' === (0, v.zS)().platform ? t : e,
                'software-h264': this.softwareH264 ? '1' : '0'
            };
        }
    }
    getCodecOptions(e, t, n) {
        var i, r, a, s;
        let o;
        let l = {
                type: null !== (i = null == (o = this.codecs.find((t) => t.name === e)) ? void 0 : o.payloadType) && void 0 !== i ? i : 0,
                name: e,
                freq: 48000,
                pacsize: 960,
                channels: 1,
                rate: 64000
            },
            u = [
                {
                    type: null !== (r = null == o ? void 0 : o.payloadType) && void 0 !== r ? r : 0,
                    name: e,
                    freq: 48000,
                    channels: 2,
                    params: { stereo: '1' }
                }
            ];
        n === T.Yn.STREAM && (l.channels = 2);
        let c = [],
            d = {
                name: '',
                type: 0,
                rtxType: 0,
                params: {}
            };
        for (o of this.codecs) {
            if (o.name === e) continue;
            let n = {
                name: (0, g.AQ)(o.name),
                type: null !== (a = null == o ? void 0 : o.payloadType) && void 0 !== a ? a : 0,
                rtxType: null !== (s = null == o ? void 0 : o.rtxPayloadType) && void 0 !== s ? s : 0,
                params: this.getCodecParams(o.name, !0)
            };
            this.experimentFlags.has(b.V8.RESET_DECODER_ON_ERRORS) && (n.params['reset-on-errors'] = '1'), this.experimentFlags.has(b.V8.SOFTWARE_FALLBACK_ON_ERRORS) && (n.params['fallback-after-errors'] = '3'), this.experimentFlags.has(b.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS) && (n.params['fallback-on-consecutive-errors'] = '1'), this.experimentFlags.has(b.V8.SIGNAL_AV1_HARDWARE_DECODE) && (n.params['hardware-av1-decode'] = '1');
            let i = this.hardwareH264 && this.useElectronVideo && I.Z.useDirectVideo ? '1' : '0';
            (n.params['hardware-h264'] = i),
                c.push(n),
                o.name === t &&
                    ((d = {
                        ...n,
                        params: this.getCodecParams(o.name, !1)
                    }),
                    this.experimentFlags.has(b.V8.VIDEOTOOLBOX_RATE_CONTROL) && (d.params['fixed-rate-presentation-timestamps'] = '1'),
                    (d.params['hardware-h264'] = i));
        }
        return {
            videoEncoder: d,
            videoDecoders: c,
            audioEncoder: l,
            audioDecoders: u
        };
    }
    getKeyFrameInterval() {
        return this.keyframeInterval > 0 && this.clipsKeyFrameInterval > 0 ? Math.min(this.keyframeInterval, this.clipsKeyFrameInterval) : Math.max(this.keyframeInterval, this.clipsKeyFrameInterval);
    }
    getConnectionTransportOptions() {
        let e = {
            selfMute: this.selfMute,
            inputMode: T.GO[this.inputMode],
            inputModeOptions: this.createInputModeOptions(),
            minimumJitterBufferLevel: this.minimumJitterBufferLevel,
            postponeDecodeLevel: this.postponeDecodeLevel,
            ...this.getAttenuationOptions(),
            fec: !0,
            packetLossRate: 0.3,
            qos: this.qos,
            prioritySpeakerDucking: T.jg,
            encodingVoiceBitRate: this.voiceBitrate,
            callBitRate: T.$A,
            callMinBitRate: T.mN,
            callMaxBitRate: T.mC,
            encodingVideoDegradationPreference: this.videoDegradationPreference,
            experimentalEncoders: this.experimentalEncoders,
            hardwareH264: this.hardwareH264,
            softwareH264: this.softwareH264,
            reconnectInterval: this.reconnectInterval
        };
        return (0, v.eJ)(T.eR.VIDEO_EFFECTS) && this.context === T.Yn.STREAM && (e.enableVideoEffects = !0), this.experimentFlags.has(b.V8.MUTE_BEFORE_PROCESSING) && (e.muteBeforeProcessing = !0), this.experimentFlags.has(b.V8.PTT_BEFORE_PROCESSING) && (e.pttBeforeProcessing = !0), this.experimentFlags.has(b.V8.SKIP_ENCODE) && (e.skipEncode = !0), e;
    }
    setStream(e) {
        throw Error('Method not implemented.');
    }
    getUserIdBySsrc(e) {}
    prepareSecureFramesTransition(e, t, n) {
        var i, r;
        null === (i = (r = this.conn).prepareSecureFramesTransition) || void 0 === i || i.call(r, e, t, n);
    }
    prepareSecureFramesEpoch(e, t, n) {
        var i, r;
        null === (i = (r = this.conn).prepareSecureFramesEpoch) || void 0 === i || i.call(r, e, t, n);
    }
    executeSecureFramesTransition(e) {
        var t, n;
        null === (t = (n = this.conn).executeSecureFramesTransition) || void 0 === t || t.call(n, e);
    }
    getMLSKeyPackage(e) {
        var t, n;
        null === (t = (n = this.conn).getMLSKeyPackage) || void 0 === t || t.call(n, e);
    }
    updateMLSExternalSender(e) {
        var t, n;
        null === (t = (n = this.conn).updateMLSExternalSender) || void 0 === t || t.call(n, e);
    }
    processMLSProposals(e, t) {
        var n, i;
        null === (n = (i = this.conn).processMLSProposals) || void 0 === n || n.call(i, e, t);
    }
    prepareMLSCommitTransition(e, t, n) {
        var i, r;
        null === (i = (r = this.conn).prepareMLSCommitTransition) || void 0 === i || i.call(r, e, t, n);
    }
    processMLSWelcome(e, t, n) {
        var i, r;
        null === (i = (r = this.conn).processMLSWelcome) || void 0 === i || i.call(r, e, t, n);
    }
    getMLSPairwiseFingerprint(e, t, n) {
        var i, r;
        null === (i = (r = this.conn).getMLSPairwiseFingerprint) || void 0 === i || i.call(r, e, t, n);
    }
    presentDesktopSourcePicker(e) {
        var t, n;
        null === (t = (n = this.conn).presentDesktopSourcePicker) || void 0 === t || t.call(n, e);
    }
    constructor(e, t, n) {
        super(e, t),
            S(this, 'mediaEngineConnectionId', 'Native-'.concat(R++)),
            S(this, 'goLiveSourceIdentifier', void 0),
            S(this, 'selfVideo', !1),
            S(this, 'forceAudioNormal', !1),
            S(this, 'forceAudioPriority', !1),
            S(this, 'codecs', []),
            S(this, 'videoEncoderFallbackPending', !1),
            S(this, 'desktopDegradationPreference', (0, v.zS)().DegradationPreference.MAINTAIN_FRAMERATE),
            S(this, 'sourceDesktopDegradationPreference', (0, v.zS)().DegradationPreference.DISABLED),
            S(this, 'videoDegradationPreference', (0, v.zS)().DegradationPreference.BALANCED),
            S(this, 'localPans', {}),
            S(this, 'remoteAudioSSRCs', {}),
            S(this, 'remoteVideoSSRCs', {}),
            S(this, 'inputMode', T.pM.VOICE_ACTIVITY),
            S(this, 'vadThreshold', -40),
            S(this, 'vadAutoThreshold', !0),
            S(this, 'vadUseKrisp', !0),
            S(this, 'vadLeading', 5),
            S(this, 'vadTrailing', 25),
            S(this, 'pttReleaseDelay', 20),
            S(this, 'soundshareActive', !1),
            S(this, 'soundshareId', null),
            S(this, 'soundshareSentSpeakingEvent', !1),
            S(this, 'echoCancellation', !0),
            S(this, 'noiseSuppression', !0),
            S(this, 'automaticGainControl', !0),
            S(this, 'noiseCancellation', !1),
            S(this, 'voiceFilters', !1),
            S(this, 'experimentalEncoders', !1),
            S(this, 'hardwareH264', !0),
            S(this, 'softwareH264', !0),
            S(this, 'attenuationFactor', 0.5),
            S(this, 'attenuateWhileSpeakingSelf', !1),
            S(this, 'attenuateWhileSpeakingOthers', !0),
            S(this, 'qos', !0),
            S(this, 'conn', void 0),
            S(this, 'minimumJitterBufferLevel', 0),
            S(this, 'postponeDecodeLevel', 100),
            S(this, 'reconnectInterval', 60000),
            S(this, 'keyframeInterval', 0),
            S(this, 'clipsKeyFrameInterval', 0),
            S(this, 'videoQualityMeasurement', ''),
            S(this, 'videoEncoderExperiments', ''),
            S(this, 'numFastUdpReconnects', 0),
            S(this, 'simulcastLQDisabledSsrc', void 0),
            S(this, 'logger', void 0),
            S(this, 'handleSpeakingNative', (e, t) => {
                let n = T.Dg.NONE;
                (n = 'boolean' == typeof t ? (t ? T.Dg.VOICE : T.Dg.NONE) : t), this.handleSpeakingFlags(e, n);
            }),
            S(this, 'handleNativeMuteToggled', () => {
                this.emit(m.Sh.ToggleMuteFromNative);
            }),
            S(this, 'handleNativeMuteChanged', (e) => {
                this.emit(m.Sh.NativeMuteChanged, e);
            }),
            S(this, 'handleSpeakingFlags', (e, t) => {
                this.localSpeakingFlags[e] = t;
                let n = e === this.userId ? this.audioSSRC : this.remoteAudioSSRCs[e];
                this.emit(m.Sh.Speaking, e, t, n), (t & T.Dg.SOUNDSHARE) != 0 && !1 === this.soundshareSentSpeakingEvent && (this.emit(m.Sh.SoundshareSpeaking), (this.soundshareSentSpeakingEvent = !0));
            }),
            S(this, 'handleSpeakingWhileMuted', () => {
                this.emit(m.Sh.SpeakingWhileMuted);
            }),
            S(this, 'handlePing', (e, t, n) => {
                this.emit(m.Sh.Ping, e);
            }),
            S(this, 'handlePingTimeout', (e, t, n, i) => {
                this.emit(m.Sh.PingTimeout, n, i > 0 ? i : 4000);
            }),
            S(this, 'handleVideoEncoderFallback', (e) => {
                !this.videoEncoderFallbackPending && (this.logger.info('Falling back from current video encoder: '.concat(e)), (this.codecs = this.codecs.map((t) => ((e === t.name || ('AV1' === t.name && 'AV1X' === e)) && (t.encode = !1), t)).filter((e) => !('video' === e.type && !1 === e.encode && !1 === e.decode))), this.emit(m.Sh.VideoEncoderFallback, this.codecs), (this.videoEncoderFallbackPending = !0));
            }),
            S(this, 'handleRTCPMessage', (e, t) => {
                if (e === b.ym.REMB && this.context === T.Yn.STREAM) {
                    let e = JSON.parse(t);
                    e.ssrcs.forEach((t) => {
                        var n, i, a, s;
                        let o = this.videoStreamParameters.find((e) => e.ssrc === t);
                        if (void 0 !== o && (null !== (n = o.quality) && void 0 !== n ? n : 0) < 100 && 'video' === o.type) {
                            let n = Math.floor(e.bitrate * N);
                            n = r()(n, null !== (i = o.minBitrate) && void 0 !== i ? i : 0, null !== (a = o.maxBitrate) && void 0 !== a ? a : n);
                            let l = null !== (s = o.targetBitrate) && void 0 !== s ? s : 0;
                            (Math.abs(n - l) / ((n + l) / 2) > C || void 0 === o.targetBitrate) && (this.logger.info('Updating target bitrate for SSRC '.concat(t, ' from ').concat(o.targetBitrate, ' to ').concat(n)), this.videoQualityManager.setGoLiveSimulcastLQTargetBitrate(n), this.updateVideoQuality());
                        }
                    });
                }
            }),
            S(this, 'handleVideo', (e, t, n, i) => {
                let r = s()(this.videoStreamParameters);
                e === this.userId
                    ? null != i && Array.isArray(i) && i.length > 0
                        ? i.forEach((e) => {
                              r.forEach((t, n) => {
                                  if (t.rid === e.rid) {
                                      let i = this.simulcastLQDisabledSsrc !== e.ssrc && e.active;
                                      r[n] = {
                                          ...t,
                                          ssrc: e.ssrc,
                                          rtxSsrc: e.rtxSsrc,
                                          active: i
                                      };
                                  }
                              });
                          })
                        : t > 0
                          ? ((r[0].active = !0), (r[0].ssrc = t), (r[0].rtxSsrc = D(t)))
                          : (r[0].active = !1)
                    : t > 0 && (void 0 !== this.remoteVideoSSRCs[e] ? this.remoteVideoSSRCs[e].includes(t) || (this.remoteVideoSSRCs[e] = [...this.remoteVideoSSRCs[e], t]) : (this.remoteVideoSSRCs[e] = [t])),
                    (this.videoStreamParameters = r),
                    this.emit(m.Sh.Video, e, null != n && '' !== n ? n : null, e === this.userId ? this.audioSSRC : this.remoteAudioSSRCs[e], t, D(t), this.videoStreamParameters);
            }),
            S(this, 'handleFirstFrame', (e, t, n) => {
                this.emit(m.Sh.FirstFrame, e, t, n);
            }),
            S(this, 'handleNoInput', (e) => {
                this.emit(m.Sh.Silence, !e);
            }),
            S(this, 'handleDesktopSourceEnded', () => {
                this.emit(m.Sh.DesktopSourceEnd);
            }),
            S(this, 'handleSoundshare', (e) => {
                e && ((this.soundshareActive = !0), this.conn.setTransportOptions({ encodingVoiceBitRate: Math.max(T.ed, this.voiceBitrate) }), this.emit(m.Sh.SoundshareAttached));
            }),
            S(this, 'handleSoundshareFailed', (e, t, n) => {
                this.emit(m.Sh.SoundshareFailed, {
                    failureCode: e,
                    failureReason: t,
                    willRetry: n
                });
            }),
            S(this, 'handleSoundshareEnded', () => {
                (this.soundshareActive = !1), this.destroyed || this.conn.setTransportOptions({ encodingVoiceBitRate: this.voiceBitrate });
            }),
            S(this, 'handleNewListenerNative', (e) => {
                e === m.Sh.ConnectionStateChange && this.emit(e, this.connectionState);
            }),
            S(this, 'handleStats', (e) => {
                if (this.connectionState === T.$j.DISCONNECTED) {
                    this.off(m.Sh.Stats, this.handleStats);
                    return;
                }
                if (null != e) {
                    if (null != this.stats) {
                        let t = c()(
                                e.rtp.outbound,
                                (e, t) => {
                                    var n, i;
                                    return (e.lost += null !== (n = t.packetsLost) && void 0 !== n ? n : 0), (e.sent += null !== (i = t.packetsSent) && void 0 !== i ? i : 0), e;
                                },
                                {
                                    lost: 0,
                                    sent: 0
                                }
                            ),
                            n = c()(
                                this.stats.rtp.outbound,
                                (e, t) => {
                                    var n, i;
                                    return (e.lost += null !== (n = t.packetsLost) && void 0 !== n ? n : 0), (e.sent += null !== (i = t.packetsSent) && void 0 !== i ? i : 0), e;
                                },
                                {
                                    lost: 0,
                                    sent: 0
                                }
                            ),
                            i = t.sent - n.sent,
                            a = t.lost - n.lost;
                        if (0 === i) this.emit(m.Sh.OutboundLossRate, 0);
                        else if (i > 0 && a >= 0) {
                            let e = r()(a / (i + a), 0, 1);
                            this.emit(m.Sh.OutboundLossRate, 100 * e);
                        }
                        let s = e.rtp.outbound.filter((e) => 'audio' === e.type)[0],
                            o = this.stats.rtp.outbound.filter((e) => 'audio' === e.type)[0];
                        if (null != s && null != o && null != s.framesCaptured && null != o.framesCaptured) {
                            let e = s.framesCaptured - o.framesCaptured,
                                t = null != s.noiseCancellerFrames ? (null != o.noiseCancellerFrames ? s.noiseCancellerFrames - o.noiseCancellerFrames : 0) : e;
                            if (this.noiseCancellation && t > A && null != s.noiseCancellerProcessTime && null != o.noiseCancellerProcessTime) {
                                let e = s.noiseCancellerProcessTime - o.noiseCancellerProcessTime;
                                e / t > 8 ? this.emit(m.Sh.NoiseCancellationError, T.H3.CPU_OVERUSE) : 0 === e && this.emit(m.Sh.NoiseCancellationError, T.H3.FAILED);
                            }
                            this.inputMode === T.pM.VOICE_ACTIVITY && this.vadAutoThreshold && this.vadUseKrisp && e > A && null != s.voiceActivityDetectorProcessTime && null != o.voiceActivityDetectorProcessTime && (s.voiceActivityDetectorProcessTime - o.voiceActivityDetectorProcessTime) / e > 4 && this.emit(m.Sh.VoiceActivityDetectorError, T.H3.VAD_CPU_OVERUSE);
                        }
                    }
                    this.stats = e;
                }
            }),
            S(this, 'handleMLSFailure', (e, t) => {
                this.emit(m.Sh.MLSFailure, e, t);
            }),
            (this.videoSupported = n),
            (this.logger = new f.Yd('Connection('.concat(e, ')'))),
            this.logger.enableNativeLogger(!0);
    }
}
