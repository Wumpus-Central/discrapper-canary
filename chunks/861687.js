n.d(t, { Z: () => eE }), n(301563), n(411104), n(653041), n(47120), n(26686);
var r,
    i = n(654861),
    o = n.n(i),
    a = n(954955),
    s = n.n(a),
    l = n(108131),
    c = n.n(l),
    u = n(772848),
    d = n(261470),
    f = n(47770),
    _ = n(46973),
    p = n(379649),
    h = n(570140),
    m = n(668781),
    g = n(846027),
    E = n(304680),
    b = n(547727),
    v = n(710845),
    y = n(75060),
    O = n(631053),
    I = n(148959),
    S = n(815644),
    T = n(926951),
    A = n(166884),
    N = n(868616),
    C = n(450109),
    R = n(307320),
    P = n(615830),
    w = n(314897),
    D = n(592125),
    L = n(131951),
    x = n(19780),
    M = n(226961),
    k = n(936349),
    j = n(594174),
    U = n(626135),
    G = n(630388),
    B = n(931619),
    F = n(358085),
    V = n(591759),
    Z = n(579806),
    H = n(859401),
    W = n(437263),
    Y = n(423343),
    K = n(685756),
    z = n(655306),
    q = n(583794),
    Q = n(36902),
    X = n(824096),
    J = n(53114),
    $ = n(174532),
    ee = n(895066),
    et = n(798681),
    en = n(981631),
    er = n(65154);
function ei(e, t, n) {
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
function eo(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                ei(e, t, n[t]);
            });
    }
    return e;
}
function ea(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function es(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ea(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let el = /^https/.test(((r = 'https:'), 'https:')) ? 'wss:' : 'ws:',
    ec = 200,
    eu = 20,
    ed = 500,
    ef = 250,
    e_ = 10,
    ep = 5,
    eh = '1',
    em = 0;
function eg(e) {
    return e;
}
class eE extends f.Z {
    get quality() {
        let e = this.getLastPing();
        return this.state !== en.hes.RTC_CONNECTED || void 0 === e ? en.IE4.UNKNOWN : e > ed || (null != this._outboundLossRate && this._outboundLossRate > e_) ? en.IE4.BAD : e > ef || (null != this._outboundLossRate && this._outboundLossRate > ep) ? en.IE4.AVERAGE : en.IE4.FINE;
    }
    get endpoint() {
        return this._endpoint;
    }
    set endpoint(e) {
        if (null == e) (this._endpoint = null), (this.hostname = null);
        else {
            var t;
            e = ''.concat(el, '//').concat(e);
            let { hostname: n, port: r } = null !== (t = V.Z.toURLSafe(e)) && void 0 !== t ? t : {},
                i = null != r ? parseInt(r) : NaN;
            null != n && (80 === i || 443 === i) && (e = ''.concat(el, '//').concat(n)), (this._endpoint = e + '/'), (this.hostname = n);
        }
    }
    connect(e, t) {
        if (this._destroyed) throw Error('RTCConnection.connect(...): Attempting to connect on destroyed instance.');
        this._backoff.cancel();
        let { endpoint: n, token: r } = this;
        if (
            ((this.endpoint = e),
            (this.token = t),
            (n !== this.endpoint || r !== t) &&
                (this._cleanupSocket(),
                (this._mediaSessionId = null),
                null != n &&
                    ((this._rtcConnectionId = (0, u.Z)()),
                    h.Z.dispatch({
                        type: 'RTC_CONNECTION_UPDATE_ID',
                        connection: this
                    }))),
            null == this.endpoint)
        ) {
            this.setState(en.hes.AWAITING_ENDPOINT);
            return;
        }
        let i = this._socket;
        null != i && this._cleanupSocket(), (i = this._socket = new K.Z(this.endpoint, this.context)).on(K.V.Connecting, this._handleConnecting.bind(this, i)), i.on(K.V.Connect, this._handleConnect.bind(this, i)), i.on(K.V.Disconnect, this._handleDisconnect.bind(this, i)), i.on(K.V.Resuming, this._handleResuming.bind(this, i)), i.on(K.V.Ready, this._handleReady.bind(this, i)), i.on(K.V.Speaking, this._handleSpeaking.bind(this, i)), i.on(K.V.Video, this._handleVideo.bind(this, i)), i.on(K.V.Ping, this._handleControlPing.bind(this)), i.on(K.V.ClientDisconnect, this._handleClientDisconnect.bind(this)), i.on(K.V.ClientConnect, this._handleClientConnect.bind(this)), i.on(K.V.Codecs, this._handleCodecs.bind(this)), i.on(K.V.MediaSessionId, this._handleMediaSessionId.bind(this)), i.on(K.V.MediaSinkWants, this._handleMediaSinkWants.bind(this)), i.on(K.V.VoiceBackendVersion, this._handleCodeVersion.bind(this)), i.on(K.V.KeyframeInterval, this._handleKeyframeInterval.bind(this)), i.on(K.V.Flags, this.handleFlags.bind(this)), i.on(K.V.Platform, this.handlePlatform.bind(this)), i.on(K.V.BandwidthEstimationExperiment, this._handleBandwidthEstimationExperiment.bind(this)), i.on(K.V.SecureFramesInit, this._handleSecureFramesInit.bind(this)), i.on(K.V.SecureFramesPrepareTransition, this._handleSecureFramesPrepareTransition.bind(this)), i.on(K.V.SecureFramesPrepareEpoch, this._handleSecureFramesPrepareEpoch.bind(this)), i.on(K.V.SecureFramesExecuteTransition, this._handleSecureFramesExecuteTransition.bind(this)), i.on(K.V.MLSExternalSenderPackage, this._handleMLSExternalSenderPackage.bind(this)), i.on(K.V.MLSProposals, this._handleMLSProposals.bind(this, i)), i.on(K.V.MLSPrepareCommitTransition, this._handleMLSPrepareCommitTransition.bind(this)), i.on(K.V.MLSWelcome, this._handleMLSWelcome.bind(this)), (this._connectStartTime = (0, p.zO)()), this._connectCount++, (this._connecting = !0), null != i && this._socket === i && (this._trackVoiceConnectionConnecting(), (this._encountered_socket_failure = !1), i.connect());
    }
    destroy() {
        var e, t, n, r, i, o, a;
        if ((this.logger.info('Destroy RTCConnection'), B.Z.removeOnlineCallback(this._handleNetworkOnline), B.Z.removeOfflineCallback(this._handleNetworkOffline), (0, F.isDesktop)() && (null === (o = (a = this).powerMonitorListener) || void 0 === o || o.call(a)), et.w.off(et.e.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged), et.w.off(et.e.WindowVisibilityChanged, this.windowVisibilityChanged), this._backoff.cancel(), this._cleanupSocket(), null === (e = this._voiceQuality) || void 0 === e || e.stop(), (this._voiceQuality = null), clearInterval(this._voiceQualityPeriodicStatsInterval), (this._voiceQualityPeriodicStatsInterval = null), (this._voiceQualityPeriodicStatsSequenceId = 0), null === (t = this._systemResponsiveness) || void 0 === t || t.stop(), (this._systemResponsiveness = null), (this._noiseCancellationError = 0), null === (n = this._voiceDuration) || void 0 === n || n.stop(), (this._voiceDuration = null), null === (r = this._videoQuality) || void 0 === r || r.stop(), (this._videoQuality = null), (this._videoHealthManager = null), (this._secureFramesState = null), null === (i = this._localMediaSinkWantsManager) || void 0 === i || i.reset(), null != this._connection)) {
            let e = this._connection;
            (this._connection = null), e.destroy();
        }
        this.removeAllListeners(), (this._destroyed = !0);
    }
    shouldSendSpeaking(e, t) {
        if ((0, F.isWeb)()) return !0;
        let n = (0, G.yE)(e, er.Dg.PRIORITY),
            r = (0, G.yE)(this._lastSentSpeakingStatus, er.Dg.PRIORITY);
        return (this._lastSentSSRC !== t || n !== r) && (void 0 !== this._lastSentSSRC || e !== er.Dg.NONE) && (this._lastSentSSRC === t || e !== er.Dg.NONE) && ((this._lastSentSpeakingStatus = e), (this._lastSentSSRC = t), !0);
    }
    sendSpeaking(e, t) {
        let n = this._socket;
        if (null == n || !this.shouldSendSpeaking(e, t)) return;
        let r = L.Z.getPacketDelay();
        n.speaking(e, r, t);
    }
    sendVideo(e, t, n, r) {
        let i = this._socket;
        null != i && (0 !== t && (this._sentVideo = !0), this._sentVideo && i.video(e, t, n, r));
    }
    getPings() {
        return this._pings;
    }
    getAveragePing() {
        let e = this._pings.slice(0, Math.min(this._pings.length, eu));
        return 0 === e.length || null == this._socket ? 0 : e.reduce((e, t) => e + t.value, 0) / e.length;
    }
    getLastPing() {
        var e;
        return null === (e = this._pings[this._pings.length - 1]) || void 0 === e ? void 0 : e.value;
    }
    getOutboundLossRate() {
        return this._outboundLossRate;
    }
    getMediaSessionId() {
        return this._mediaSessionId;
    }
    getVoiceParticipantType() {}
    getRTCConnectionId() {
        return this._rtcConnectionId;
    }
    getVoiceVersion() {
        return this.voiceVersion;
    }
    getRtcWorkerVersion() {
        return this.rtcWorkerVersion;
    }
    getDuration() {
        let e = this._connectCompletedTime > 0 ? (0, p.zO)() - this._connectCompletedTime : 0;
        return e > 0 ? e : 0;
    }
    getDurationSeconds() {
        return this.getDuration() / 1000;
    }
    getVoiceFilterSpeakingDurationMs() {
        return null == this._voiceDuration ? null : this._voiceDuration.getVoiceFilterSpeakingDurationMs();
    }
    getPacketStats() {
        var e;
        return null === (e = this._voiceQuality) || void 0 === e ? void 0 : e.getPacketStats();
    }
    getCreatedTime() {
        return this._createdTime;
    }
    getSecureFramesState() {
        return this._secureFramesState;
    }
    getSecureFramesRosterMap() {
        return this._secureFramesRosterMap;
    }
    getUserIds() {
        return this._userIds;
    }
    getIsUserConnected(e) {
        return this._userIds.has(e);
    }
    getVideoHealthManager() {
        return this._videoHealthManager;
    }
    getBandwidthEstimationExperiment() {
        return this._bandwidthEstimationExperiment;
    }
    pauseStatsCollectionForUser(e, t) {
        let n = this.getOrCreateVideoQuality();
        if (null == n) {
            this.logger.error('pauseStatsCollectionForUser: Unable to create videoQuality.');
            return;
        }
        t ? n.addUserToStatsCollectionPausedSet(e) : n.removeUserFromStatsCollectionPausedSet(e);
    }
    getOutboundStats() {
        let e = this.getOrCreateVideoQuality();
        return null != e ? e.getOutboundStats() : null;
    }
    getInboundStats(e) {
        let t = this.getOrCreateVideoQuality();
        return null != t ? t.getInboundStats(e) : null;
    }
    setState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.logger.info('RTC connection state: '.concat(this.state, ' => ').concat(e)),
            (this.state = e),
            this.stateHistory.update(this.state),
            this.emit(
                W.z.State,
                e,
                {
                    hostname: this.hostname,
                    channelId: this.trueChannelId,
                    context: this.context
                },
                t
            );
    }
    expeditedHeartbeat(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            r = this._socket;
        null != r && r.expeditedHeartbeat(e, t, n) && this._backoff.cancel();
    }
    resetBackoff() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
            t = this._socket;
        null != t && t.resetBackoff(e) && this._backoff.cancel();
    }
    setSelectedParticipant(e) {
        var t;
        null === (t = this._localMediaSinkWantsManager) || void 0 === t || t.setSelectedParticipant(e);
    }
    setPipOpen(e) {
        var t;
        null === (t = this._localMediaSinkWantsManager) || void 0 === t || t.setPipOpen(e);
    }
    setClipRecordUser(e, t, n) {
        var r, i;
        null === (i = this._connection) || void 0 === i || null === (r = i.setClipRecordUser) || void 0 === r || r.call(i, e, t, n);
    }
    setSimulcastDebugOverride(e, t, n) {
        var r, i;
        t === this.context && (t === er.Yn.DEFAULT ? null === (r = this._localMediaSinkWantsManager) || void 0 === r || r.setSimulcastDebugOverride(e, n) : null === (i = this._goLiveQualityManager) || void 0 === i || i.setSimulcastDebugOverride(n));
    }
    setVideoSize(e, t, n) {
        var r, i;
        null === (r = this._localMediaSinkWantsManager) || void 0 === r || r.setVideoSize(e, t * n), null === (i = this._goLiveQualityManager) || void 0 === i || i.setVideoSize(e, t, n);
    }
    set channelId(e) {
        let t = D.Z.getChannel(this.channelId),
            n = null == t ? void 0 : t.type;
        this.logger.info('Updating channel: '.concat(e, '(').concat(n, ')')), (this._channelId = e), this.channelIds.add(e);
    }
    get channelId() {
        return this._channelId;
    }
    get trueChannelId() {
        return null != this.rtcServerId ? o()(this.rtcServerId).prev().toString() : this.channelId;
    }
    _cleanupSocket() {
        let e = this._socket;
        null != e && (e.close(), e.removeAllListeners(), (this._socket = null));
    }
    _chooseExperiments(e) {
        let t = [];
        if ((this._recordingEnabled && t.push('connection_log'), null != this.guildId)) {
            let { shouldOverrideKrisp: e, overrideKrispSetting: n } = N.Z.getCurrentConfig(
                {
                    guildId: this.guildId,
                    location: 'handleReady'
                },
                { autoTrackExposure: !0 }
            );
            e && (n ? t.push('force_krisp_enabled') : t.push('force_krisp_disabled'));
        }
        if ((L.Z.supports(er.AN.FIXED_KEYFRAME_INTERVAL) && t.push('fixed_keyframe_interval'), 0 !== this._supportedBandwidthEstimationExperiments.length)) {
            let e = A.Z.workerExperimentString();
            null != e && t.push(e);
        }
        (0, S.f)('RtcConnection').enabled && t.push('audio_transport_cc'), (this._selectedExperiments = t);
    }
    _handleConnecting(e) {
        if (null != this.endpoint) {
            let e = D.Z.getChannel(this.channelId),
                t = null == e ? void 0 : e.type;
            this.logger.info('Connecting to RTC server '.concat(this.endpoint, ', rtc-connection-id: ').concat(this.getRTCConnectionId(), ', channel: ').concat(this.channelId, '(').concat(t, ')'));
        }
        this.setState(en.hes.CONNECTING);
    }
    _handleConnect(e) {
        var t, n;
        let r = this.token;
        if (null == r) throw Error('RTCConnection._handleConnect(...): Token is missing.');
        this.logger.info('Connected to RTC server.'),
            e.identify({
                serverId: null !== (n = null !== (t = this.rtcServerId) && void 0 !== t ? t : this.guildId) && void 0 !== n ? n : this.channelId,
                userId: this.userId,
                sessionId: this.sessionId,
                token: r,
                maxDaveProtocolVersion: L.Z.getSupportedSecureFramesProtocolVersion(this.guildId),
                video: L.Z.supports(er.AN.VIDEO),
                streamParameters: L.Z.getVideoStreamParameters(this.context)
            }),
            this.setState(en.hes.AUTHENTICATING);
    }
    _handleDisconnect(e, t, n, r) {
        var i, o, a, s, l, c, u, d, f, _, p, h, m, g, E, b, v, y, I, S, T;
        this.logger.info('Disconnected from RTC server, clean: '.concat(t, ', code: ').concat(n, ', reason: ').concat(r, ', state: ').concat(this.state)),
            t ||
                !this._connecting ||
                this._encountered_socket_failure ||
                (U.default.track(
                    en.rMx.VOICE_CONNECTION_SOCKET_FAILURE,
                    es(eo({}, this._getAnalyticsProperties()), {
                        hostname: this.hostname,
                        connect_count: this._connectCount,
                        code: n,
                        reason: r
                    })
                ),
                (this._encountered_socket_failure = !0)),
            x.Z.getRemoteDisconnectVoiceChannelId() === this.channelId && (null === (l = this._connection) || void 0 === l || l.wasRemoteDisconnected());
        let A = 'Force Close' !== r;
        if (A) {
            let e = this._backoff.fail(this.reconnect);
            this.logger.warn('Disconnect was not clean! reason='.concat(r, '. Reconnecting in ').concat((e / 1000).toFixed(2), ' seconds.'));
        }
        if (this.state !== en.hes.DISCONNECTED) {
            let e = this._videoQuality;
            null != e &&
                this.context === er.Yn.DEFAULT &&
                (e.stop(),
                this._sentVideo &&
                    e.getOutboundStats().forEach((t) => {
                        var n;
                        (null !== (n = t.num_frames) && void 0 !== n ? n : 0) > 0 &&
                            U.default.track(
                                en.rMx.VIDEO_STREAM_ENDED,
                                es(
                                    eo(
                                        es(eo({}, this._getAnalyticsProperties()), {
                                            media_session_id: this.getMediaSessionId(),
                                            sender_user_id: this.userId,
                                            reason: r,
                                            participant_type: 'sender',
                                            guild_region: k.Z.getRegion(this.hostname),
                                            hostname: this.hostname,
                                            hardware_enabled: L.Z.getHardwareEncoding()
                                        }),
                                        t,
                                        e.getNetworkStats(),
                                        e.getCodecUsageStats('sender', this.userId),
                                        this._soundshareStats.getStats()
                                    ),
                                    { device_performance_class: (0, O.Z)() }
                                )
                            );
                    }),
                e.getInboundParticipants().forEach((t) => {
                    var n;
                    let i = e.getInboundStats(t);
                    (null !== (n = null == i ? void 0 : i.num_frames) && void 0 !== n ? n : 0) > 0 &&
                        U.default.track(
                            en.rMx.VIDEO_STREAM_ENDED,
                            eo(
                                es(eo({}, this._getAnalyticsProperties()), {
                                    media_session_id: this.getMediaSessionId(),
                                    sender_user_id: t,
                                    reason: r,
                                    participant_type: 'receiver',
                                    guild_region: k.Z.getRegion(this.hostname),
                                    hostname: this.hostname,
                                    hardware_enabled: L.Z.getHardwareEncoding()
                                }),
                                i,
                                e.getNetworkStats(),
                                e.getCodecUsageStats('receiver', t)
                            )
                        );
                }));
            let t = k.Z.shouldIncludePreferredRegion() ? k.Z.getPreferredRegion() : null,
                n = L.Z.getSettings(),
                i = D.Z.getChannel(this.channelId),
                o = null === (u = C.Z.getConnectionStats().find((e) => e.connection.context === er.Yn.DEFAULT)) || void 0 === u ? void 0 : null === (c = u.stats.rtp.outbound.find((e) => 'audio' === e.type)) || void 0 === c ? void 0 : c.sampleRateMismatchPercent;
            U.default.track(
                en.rMx.VOICE_DISCONNECT,
                es(
                    eo(
                        es(eo({}, this._getAnalyticsProperties()), {
                            hostname: this.hostname,
                            port: this.port,
                            protocol: this.protocol,
                            reconnect: A,
                            reason: r,
                            duration: this.getDuration()
                        }),
                        null === (d = this._voiceQuality) || void 0 === d ? void 0 : d.getMosStats(),
                        null === (f = this._voiceQuality) || void 0 === f ? void 0 : f.getPacketStats(),
                        null === (_ = this._voiceQuality) || void 0 === _ ? void 0 : _.getBytesStats(),
                        null === (p = this._voiceQuality) || void 0 === p ? void 0 : p.getBufferStats(),
                        null === (h = this._voiceQuality) || void 0 === h ? void 0 : h.getNetworkStats(),
                        null === (m = this._voiceQuality) || void 0 === m ? void 0 : m.getSystemResourceStats(),
                        null === (g = this._voiceQuality) || void 0 === g ? void 0 : g.getFrameOpStats(),
                        null === (E = this._voiceQuality) || void 0 === E ? void 0 : E.getDurationStats(),
                        null === (b = this._voiceQuality) || void 0 === b ? void 0 : b.getTransportStats(),
                        null === (v = this._voiceQuality) || void 0 === v ? void 0 : v.getE2EEStats(),
                        null === (y = this._voiceQuality) || void 0 === y ? void 0 : y.getAudioDeviceStats(),
                        null === (I = this._voiceDuration) || void 0 === I ? void 0 : I.getDurationStats(),
                        this.getAudioDeviceStates(),
                        null === (S = this._systemResponsiveness) || void 0 === S ? void 0 : S.getPttQueueLatencyStats()
                    ),
                    {
                        media_session_id: this.getMediaSessionId(),
                        channel_bitrate: null != i ? i.bitrate : null,
                        cloudflare_best_region: t,
                        connect_count: this._connectCount,
                        ping_average: Math.round(this.getAveragePing()),
                        ping_bad_count: this._pingBadCount,
                        ping_timeout: this._pingTimeouts.length,
                        input_detected: this._inputDetected,
                        no_input_detected_notice: L.Z.getNoInputDetectedNotice(),
                        audio_input_mode: n.mode,
                        automatic_audio_input_sensitivity_enabled: n.modeOptions.autoThreshold,
                        audio_input_sensitivity: n.modeOptions.threshold,
                        echo_cancellation_enabled: n.echoCancellation,
                        sidechain_compression_enabled: n.sidechainCompression,
                        noise_suppression_enabled: n.noiseSuppression,
                        noise_cancellation_enabled: n.noiseCancellation,
                        noise_canceller_error: this._noiseCancellationError,
                        automatic_gain_control_enabled: n.automaticGainControl,
                        voice_output_volume: n.outputVolume,
                        encryption_mode: this._encryptionMode,
                        channel_count: this.channelIds.size,
                        device_performance_class: (0, O.Z)(),
                        num_fast_udp_reconnects: null != this._connection ? (null === (T = this._connection) || void 0 === T ? void 0 : T.getNumFastUdpReconnects()) : null,
                        parent_media_session_id: this.parentMediaSessionId,
                        audio_subsystem: L.Z.getMediaEngine().getAudioSubsystem(),
                        audio_layer: L.Z.getMediaEngine().getAudioLayer(),
                        automatic_audio_subsystem: n.automaticAudioSubsystem,
                        participant_type: this.getVoiceParticipantType(),
                        audio_capture_sample_rate_mismatch_percent: o
                    }
                )
            );
            let a = this.getMediaSessionId();
            L.Z.getMediaEngine()
                .getCodecSurvey()
                .then((e) => {
                    let t = JSON.parse(e);
                    if (null == t || null == t.available_video_encoders || null == t.available_video_decoders) throw Error('codec survey is not available');
                    U.default.track(
                        en.rMx.VOICE_CODEC_DETECTED,
                        es(eo({}, t), {
                            rtc_connection_id: this.getRTCConnectionId(),
                            media_session_id: a
                        })
                    );
                })
                .catch((e) => {
                    this.logger.warn(e);
                }),
                this._trackMLSFailures();
        }
        if (((this._pingTimeouts = []), (this._pings = []), (this._connectCompletedTime = 0), (this._pingBadCount = 0), (this._inputDetected = !1), (this._mediaSessionId = null), null === (i = this._voiceQuality) || void 0 === i || i.stop(), (this._voiceQuality = null), clearInterval(this._voiceQualityPeriodicStatsInterval), (this._voiceQualityPeriodicStatsInterval = null), (this._voiceQualityPeriodicStatsSequenceId = 0), (this._noiseCancellationError = 0), null === (o = this._voiceDuration) || void 0 === o || o.stop(), (this._voiceDuration = null), null === (a = this._videoQuality) || void 0 === a || a.stop(), (this._videoQuality = null), (this._videoHealthManager = null), null === (s = this._localMediaSinkWantsManager) || void 0 === s || s.reset(), (this._secureFramesState = null), (this._userIds = new Set([this.userId])), this._secureFramesRosterMap.clear(), null != this._connection)) {
            let e = this._connection;
            (this._connection = null), e.destroy();
        }
        this.setState(en.hes.DISCONNECTED, { willReconnect: A });
    }
    _handleResuming(e) {
        var t, n;
        null === (t = this._connection) || void 0 === t || t.fastUdpReconnect(), null === (n = this._connection) || void 0 === n || n.clearAllSpeaking();
    }
    _handleReady(e, t, n, r, i, o, a) {
        var s;
        this.setState(en.hes.RTC_CONNECTING),
            (this.port = n),
            null != a && this._chooseExperiments(a),
            0 === o.length &&
                o.push({
                    type: er.Tr.VIDEO,
                    rid: '100',
                    ssrc: i + 1,
                    rtxSsrc: i + 2,
                    quality: 100,
                    active: !1
                });
        let l = L.Z.getMediaEngine(),
            c = P.Z.getPersistentCodesEnabled(),
            u = null !== (s = w.default.getStaticAuthSessionId()) && void 0 !== s ? s : void 0,
            d = l.connect(
                this.context,
                this.userId,
                eo(
                    {
                        ssrc: i,
                        address: t,
                        port: n,
                        modes: r,
                        experiments: this._selectedExperiments,
                        streamParameters: o,
                        qosEnabled: L.Z.getQoS(),
                        signingKeyId: c ? u : void 0
                    },
                    this._getExtraConnectionOptions()
                )
            );
        d.setUseElectronVideo(l.supports(er.AN.ELECTRON_VIDEO)), L.Z.supports(er.AN.IMAGE_QUALITY_MEASUREMENT) && d.setVideoQualityMeasurement('imageQualityWebrtcPsnrDb:5000,imageQualityVmaf_v061:5000,hwdec');
        let f = ['unk'];
        this.context === er.Yn.STREAM && (f.push('nvRelaxRc=250'), f.push('nvNewPresets')),
            d.setVideoEncoderExperiments(f.join(',')),
            d.on(_.Sh.Speaking, (e, t, n) => {
                this.userId === e && this.sendSpeaking(t, n), this.emit(W.z.Speaking, eg(e), t);
            }),
            d.on(_.Sh.ToggleMuteFromNative, () => {
                this.context === er.Yn.DEFAULT && g.Z.toggleSelfMute({ playSoundEffect: !1 });
            }),
            d.on(_.Sh.NativeMuteChanged, (e) => {
                this.context === er.Yn.DEFAULT && b.Z.nativeMuteChanged(e);
            }),
            d.on(_.Sh.Video, (e, t, n, r, i, o) => {
                this._handleVideoStreamId({
                    userId: eg(e),
                    streamId: t,
                    audioSsrc: n,
                    videoSsrc: null != r ? r : 0,
                    rtxSsrc: i,
                    videoStreamParameters: o
                }),
                    this.userId === e &&
                        (this.sendVideo(null != n ? n : 0, null != r ? r : 0, null != i ? i : 0, o),
                        null == o ||
                            o.forEach((t) => {
                                100 === t.quality && this.emit(W.z.VideoSourceQualityChanged, this.guildId, this.channelId, eg(e), t.maxResolution, t.maxFrameRate, this.context);
                            }));
            }),
            d.on(_.Sh.FirstFrame, (e, t, n) => {
                null != this._localMediaSinkWantsManager && (this._localMediaSinkWantsManager.setFirstFrameReceived(t), this.emit(W.z.Video, this.guildId, this.channelId, eg(e), n, this.rtcServerId)), null != this._goLiveQualityManager && (this._goLiveQualityManager.setFirstFrameReceived(t), this.emit(W.z.Video, this.guildId, this.channelId, eg(e), n, this.rtcServerId));
            }),
            d.on(_.Sh.Silence, (e) => {
                this._inputDetected = this._inputDetected || !e;
            }),
            d.on(_.Sh.Connected, (r, i) => {
                if ((this.logger.info('RTC connected to media server: '.concat(t, ':').concat(n)), e !== this._socket)) {
                    this.logger.warn('Socket mismatch, disconnecting');
                    return;
                }
                switch (((this._voiceQuality = new ee.Z(d)), this._voiceQuality.start(), (this._voiceQualityPeriodicStatsSequenceId = 0), (this._voiceQualityPeriodicStatsInterval = setInterval(this._handleVoiceQualityPeriodicsStats, 300000)), (this._systemResponsiveness = new Q.Z(d)), this._systemResponsiveness.start(), (this._noiseCancellationError = 0), (this._voiceDuration = new $.Z(this.userId, d)), this._voiceDuration.start(d.getSelfMute(), d.getVoiceFilterId()), (this.protocol = r), r)) {
                    case 'udp':
                        this.logger.info('Sending UDP info to RTC server.', i, this._selectedExperiments),
                            e.once(K.V.Encryption, (e, t) => {
                                d === this._connection && (d.setEncryption(e, t), (this._encryptionMode = e));
                            }),
                            e.selectProtocol(r, this.getRTCConnectionId(), i, this._selectedExperiments);
                        break;
                    case 'webrtc':
                        this.logger.info('Sending local SDP to RTC server.'), e.once(K.V.SDP, this._handleSDP.bind(this)), e.selectProtocol(r, this.getRTCConnectionId(), i);
                        break;
                    default:
                        this.logger.error('Unable to determine protocol.');
                        return;
                }
                this._backoff.succeed();
            }),
            d.on(_.Sh.VideoEncoderFallback, (t) => {
                let n = t
                    .filter((e) => 'video' === e.type)
                    .map((e) => e.name)
                    .join(',');
                this.logger.info('The originally selected video encoder is not working, fallback to the other available encoders: '.concat(n)), e.updateSession({ codecs: t });
            }),
            d.on(_.Sh.Error, (t) => {
                if (e !== this._socket) return;
                let n = k.Z.shouldIncludePreferredRegion() ? k.Z.getPreferredRegion() : null;
                this.logger.error('Error occurred while connecting to RTC server: '.concat(t)),
                    U.default.track(
                        en.rMx.VOICE_CONNECTION_FAILURE,
                        es(eo({}, this._getAnalyticsProperties()), {
                            hostname: this.hostname,
                            port: this.port,
                            protocol: this.protocol,
                            error: t,
                            cloudflare_best_region: n,
                            connect_count: this._connectCount
                        })
                    );
            }),
            d.on(_.Sh.ConnectionStateChange, (t) => {
                if ((this.logger.info('RTC media connection state change: '.concat(this.state, ' => ').concat(t)), e !== this._socket)) return;
                let n = this.state;
                switch (t) {
                    case er.$j.DISCONNECTED:
                        this.setState(en.hes.RTC_DISCONNECTED);
                        break;
                    case er.$j.CONNECTING:
                        this.setState(en.hes.RTC_CONNECTING);
                        break;
                    case er.$j.CONNECTED:
                        this.setState(en.hes.RTC_CONNECTED);
                        break;
                    case er.$j.NO_ROUTE:
                        this.setState(en.hes.NO_ROUTE);
                        break;
                    case er.$j.ICE_CHECKING:
                        this.setState(en.hes.ICE_CHECKING);
                        break;
                    case er.$j.DTLS_CONNECTING:
                        this.setState(en.hes.DTLS_CONNECTING);
                }
                if ((n === en.hes.RTC_CONNECTING && this.state === en.hes.RTC_DISCONNECTED ? this.reconnect() : this.state === en.hes.NO_ROUTE && (0 === this._backoff.fails && this._handleNoRoute(), this._backoff.fail(this.reconnect)), this.state === en.hes.RTC_CONNECTED)) {
                    var r, i;
                    let e = k.Z.shouldIncludePreferredRegion() ? k.Z.getPreferredRegion() : null;
                    if (this._connecting) {
                        let t = L.Z.getSettings();
                        U.default.track(
                            en.rMx.VOICE_CONNECTION_SUCCESS,
                            eo(
                                es(eo({}, this._getAnalyticsProperties()), {
                                    hostname: this.hostname,
                                    port: this.port,
                                    protocol: this.protocol,
                                    cloudflare_best_region: e,
                                    connect_time: (0, p.zO)() - (this._connected ? this._connectStartTime : this._createdTime),
                                    connect_count: this._connectCount,
                                    audio_subsystem: L.Z.getMediaEngine().getAudioSubsystem(),
                                    audio_layer: L.Z.getMediaEngine().getAudioLayer(),
                                    automatic_audio_subsystem: t.automaticAudioSubsystem,
                                    media_session_id: this.getMediaSessionId(),
                                    participant_type: this.getVoiceParticipantType()
                                }),
                                this.stateHistory.getVoiceConnectionSuccessStats()
                            )
                        );
                    }
                    null === (r = this._localMediaSinkWantsManager) || void 0 === r || r.setConnection(d), null === (i = this._goLiveQualityManager) || void 0 === i || i.update(), (this._connectCompletedTime = (0, p.zO)()), (this._connected = !0), (this._connecting = !1), (this._encountered_socket_failure = !1);
                } else n === en.hes.RTC_CONNECTED && this.stateHistory.reset(this.state);
            }),
            d.on(_.Sh.SecureFramesUpdate, (e) => {
                (this._secureFramesState = e), this.emit(W.z.SecureFramesUpdate);
            }),
            d.on(_.Sh.Ping, this._handlePing.bind(this)),
            d.on(_.Sh.PingTimeout, this._handlePingTimeout.bind(this)),
            d.on(_.Sh.OutboundLossRate, this._handleOutboundLossRate.bind(this)),
            d.on(_.Sh.SoundshareTrace, this._handleSoundshareTrace.bind(this)),
            d.on(_.Sh.LocalVideoDisabled, this._handleLocalVideoDisabled.bind(this)),
            d.on(_.Sh.Stats, H.Z.create()),
            d.on(_.Sh.RemoteStreamsReady, this._handleRemoteStreamsReady.bind(this)),
            d.on(_.Sh.NoiseCancellationError, (e) => {
                this._noiseCancellationError = e;
            }),
            d.on(_.Sh.MLSFailure, this._handleMLSFailure.bind(this)),
            d.setRemoteVideoSinkWants(this._remoteVideoSinkWants),
            (this._connection = d);
    }
    _handleSpeaking(e, t, n, r) {
        let i = this._connection;
        if (null != i && this.userId !== t) {
            var o;
            r !== er.Dg.NONE &&
                (i.createUser(t, n),
                h.Z.dispatch({
                    type: 'RTC_CONNECTION_USER_CREATE',
                    userId: t,
                    context: this.context
                })),
                null === (o = this._localMediaSinkWantsManager) || void 0 === o || o.setAudioSSRC(t, n);
        }
    }
    handleFlags(e, t) {
        this.emit(W.z.Flags, e, t);
    }
    handlePlatform(e, t) {
        this.emit(W.z.Platform, e, t, this.channelId);
    }
    getOrCreateVideoQuality() {
        if (null != this._connection && null == this._videoQuality) {
            (this._videoQuality = new J.S(this._connection)), this._videoQuality.start();
            let { featureEnabled: e, windowLength: t, allowedPoorFpsRatio: n, fpsThreshold: r, backoffTimeSec: i } = R.Z.getConfig(!0);
            if (e) {
                (this._videoHealthManager = new X.y(t, n, r, i)), null != this._localMediaSinkWantsManager && (this._localMediaSinkWantsManager.videoHealthManager = this._videoHealthManager);
                let e = (e, t, n) => {
                    var r, i;
                    (null === (r = this._localMediaSinkWantsManager) || void 0 === r ? void 0 : r.shouldReceiveFromUser(e)) && (null === (i = this._videoHealthManager) || void 0 === i || i.updateFps(e, t, n));
                };
                this._videoQuality.on(J.d.FpsUpdate, e);
            }
        }
        return this._videoQuality;
    }
    _handleVideoStreamId(e) {
        var t, n, r, i;
        let { userId: o, streamId: a, videoSsrc: s, videoStreamParameters: l } = e;
        if (
            (this.emit(W.z.Video, this.guildId, this.channelId, o, a, this.rtcServerId),
            null != a && null == this.getOrCreateVideoQuality() && this.logger.error('_handleVideoStreamId: Unable to create videoQuality.'),
            null != this._videoQuality &&
                this.userId === o &&
                l.forEach((e) => {
                    var t, n;
                    let r = null !== (t = e.ssrc) && void 0 !== t ? t : 0;
                    r > 0 && !0 === e.active && (null === (n = this._videoQuality) || void 0 === n || n.setOutboundSsrc(r));
                }),
            this.userId !== o)
        ) {
            let e = 0 === s && null === a;
            (!e || (e && (null === (t = this._videoQuality) || void 0 === t ? void 0 : t.getInboundParticipants().includes(o)))) && (null === (n = this._videoQuality) || void 0 === n || n.setInboundUser(o, s), null === (r = this._videoHealthManager) || void 0 === r || r.createUser(o));
        }
        null != this._connection && this.userId !== o && (null != this._localMediaSinkWantsManager ? this._localMediaSinkWantsManager.setStreamId(o, a) : null != this._goLiveQualityManager && this._goLiveQualityManager.getUserID() === o && (null === (i = this._goLiveQualityManager) || void 0 === i || i.setStreamId(a)));
    }
    _handleLocalVideoDisabled(e, t) {
        if (this.userId !== e) {
            let n = this.getOrCreateVideoQuality();
            if (null == n) {
                this.logger.error('_handleLocalVideoDisabled: Unable to create videoQuality.');
                return;
            }
            n.setUserVideoDisabled(eg(e), t);
        }
    }
    _handleRemoteStreamsReady(e) {
        let t = (0, p.zO)() - this._connectStartTime;
        U.default.track(
            en.rMx.VOICE_CONNECTION_REMOTE_STREAMS_CREATED,
            es(eo({}, this._getAnalyticsProperties()), {
                number_of_users: e,
                duration_ms: t
            })
        );
    }
    _handleVideo(e, t, n, r, i) {
        if (null != this._connection && this.userId !== t) {
            if (null != this._localMediaSinkWantsManager) {
                this._localMediaSinkWantsManager.setAudioSSRC(t, n);
                let e = i.map((e) => ({
                    type: er.Tr.VIDEO,
                    rid: e.rid,
                    ssrc: e.ssrc,
                    rtxSsrc: e.rtxSsrc,
                    quality: e.quality,
                    active: r > 0
                }));
                0 === e.length &&
                    e.push({
                        type: er.Tr.VIDEO,
                        rid: '100',
                        ssrc: r,
                        rtxSsrc: r + 1,
                        quality: 100,
                        active: r > 0
                    }),
                    this._localMediaSinkWantsManager.setVideoSSRCs(t, e);
            } else {
                var o, a, s;
                let e = [];
                for (let t of i)
                    null != t.ssrc &&
                        null != t.quality &&
                        e.push({
                            ssrc: t.ssrc,
                            quality: t.quality,
                            active: null === (s = t.active) || void 0 === s || s
                        });
                null === (o = this._goLiveQualityManager) || void 0 === o || o.setUserID(t), null === (a = this._goLiveQualityManager) || void 0 === a || a.updateAudioAndVideoStreamInfo(n, e);
            }
            null == i ||
                i.forEach((e) => {
                    100 === e.quality && this.emit(W.z.VideoSourceQualityChanged, this.guildId, this.channelId, t, e.maxResolution, e.maxFrameRate, this.context);
                });
        }
    }
    _handleControlPing(e) {
        L.Z.supports(er.AN.NATIVE_PING) || this._handlePing(e);
    }
    _handlePing(e) {
        if (void 0 !== e) {
            for (
                this._pings.push({
                    time: Date.now(),
                    value: e
                });
                this._pings.length >= ec;

            )
                this._pings.shift();
            e > ed && this._pingBadCount++, this.emit(W.z.Ping, this._pings, this.quality);
        }
    }
    _handlePingTimeout(e, t) {
        this._pingTimeouts.push(e);
        let n = this._pingTimeouts.length;
        n >= 3 && this._pingTimeouts[n - 1] === this._pingTimeouts[n - 2] + 1 && this._pingTimeouts[n - 2] === this._pingTimeouts[n - 3] + 1 && this._handlePing(t);
    }
    _handleOutboundLossRate(e) {
        (this._outboundLossRate = e), this.emit(W.z.OutboundLossRate, e);
    }
    _handleSoundshareTrace(e) {
        this._soundshareStats.traceEvent(void 0, e);
    }
    _getAnalyticsProperties() {
        let e = D.Z.getChannel(this.channelId),
            t = null == e ? void 0 : e.type;
        return {
            guild_id: this.guildId,
            channel_id: this.channelId,
            channel_type: t,
            rtc_connection_id: this.getRTCConnectionId(),
            context: this.context,
            voice_backend_version: this.voiceVersion,
            rtc_worker_backend_version: this.rtcWorkerVersion
        };
    }
    _handleClientConnect(e) {
        var t, n;
        e.forEach((e) => {
            var t;
            this._userIds.add(e), null === (t = this._connection) || void 0 === t || t.createUser(e, 0);
        }),
            this.emit(W.z.ClientConnect, e),
            null === (t = this._goLiveQualityManager) || void 0 === t || t.updateCallUserIds(this._userIds),
            null === (n = this._localMediaSinkWantsManager) || void 0 === n || n.updateCallUserIds(this._userIds);
    }
    _handleClientDisconnect(e) {
        var t, n, r, i, o;
        let a = this._videoQuality;
        if (null != a && this.context === er.Yn.DEFAULT) {
            let t = a.getInboundStats(e),
                n = null !== (i = null == t ? void 0 : t.num_frames) && void 0 !== i ? i : 0;
            null != t &&
                n > 0 &&
                (U.default.track(
                    en.rMx.VIDEO_STREAM_ENDED,
                    eo(
                        es(eo({}, this._getAnalyticsProperties()), {
                            media_session_id: this.getMediaSessionId(),
                            sender_user_id: e,
                            reason: 'User disconnected',
                            participant_type: 'receiver',
                            guild_region: k.Z.getRegion(this.hostname),
                            hostname: this.hostname,
                            hardware_enabled: L.Z.getHardwareEncoding()
                        }),
                        t,
                        a.getNetworkStats(),
                        a.getCodecUsageStats('receiver', e)
                    )
                ),
                a.destroyUser(e),
                null === (o = this._videoHealthManager) || void 0 === o || o.deleteUser(e));
        }
        let s = this._connection;
        null != s && s.destroyUser(e), null === (t = this._localMediaSinkWantsManager) || void 0 === t || t.destroyUser(e), this._userIds.delete(e), this.emit(W.z.ClientDisconnect, e), null === (n = this._goLiveQualityManager) || void 0 === n || n.updateCallUserIds(this._userIds), null === (r = this._localMediaSinkWantsManager) || void 0 === r || r.updateCallUserIds(this._userIds);
    }
    _handleCodecs(e, t) {
        let n = this._connection;
        null != n && null != this.protocol ? n.setCodecs(null != e && '' !== e ? e : er.ad.OPUS, null != t && '' !== t ? t : er.ad.H264, this.context) : this.logger.warn('Cannot set codecs on connection with protocol:', this.protocol);
    }
    _handleSDP(e) {
        let t = this._connection;
        null != t && null != this.protocol ? t.setSDP(e) : this.logger.warn('Cannot set SDP on connection with protocol:', this.protocol);
    }
    _handleMediaSessionId(e) {
        (this._mediaSessionId = e), this.logger.info('Setting media-session-id: '.concat(e, ' for rtc-connection-id: ').concat(this.getRTCConnectionId()));
        let t = y.Z.getRawThermalState();
        U.default.track(
            en.rMx.MEDIA_SESSION_JOINED,
            es(eo({}, this._getAnalyticsProperties()), {
                media_session_id: this.getMediaSessionId(),
                parent_media_session_id: this.parentMediaSessionId,
                raw_thermal_state: t
            })
        ),
            h.Z.dispatch({
                type: 'MEDIA_SESSION_JOINED',
                mediaSessionId: this.getMediaSessionId(),
                context: this.context
            });
    }
    _handleMediaSinkWants(e) {
        let t = this._connection;
        this.logger.info('Remote media sink wants: '.concat(JSON.stringify(e))), (this._remoteVideoSinkWants = e), null == t || t.setRemoteVideoSinkWants(e);
    }
    _handleCodeVersion(e, t) {
        (this.voiceVersion = e), (this.rtcWorkerVersion = t);
    }
    _handleKeyframeInterval(e) {
        let t = this._connection;
        null != t && null != this.protocol ? t.setKeyframeInterval(e) : this.logger.warn('Cannot set keyframe interval on connection with protocol:', this.protocol);
    }
    _handleBandwidthEstimationExperiment(e) {
        this._bandwidthEstimationExperiment = e;
        let t = T.Z.getMediaEngineExperiments(e);
        if (null !== t && 0 !== t.length) {
            var n;
            null === (n = this._connection) || void 0 === n || n.setBandwidthEstimationExperiments(t);
        }
    }
    _trackSecureFrameTransition(e, t) {
        U.default.track(
            en.rMx.SECURE_FRAMES_TRANSITION,
            es(eo({}, this._getAnalyticsProperties()), {
                media_session_id: this.getMediaSessionId(),
                parent_media_session_id: this.parentMediaSessionId,
                sender_user_id: this.userId,
                transition_id: e,
                protocol_version: t
            })
        );
    }
    _handleSecureFramesInit(e) {
        var t, n;
        e > 0
            ? (this.logger.info('DAVE protocol init with protocol version: '.concat(e)), null === (t = this._connection) || void 0 === t || t.prepareSecureFramesEpoch(eh, e, this.trueChannelId), this._sendMLSKeyPackage())
            : null === (n = this._connection) ||
              void 0 === n ||
              n.prepareSecureFramesTransition(em, e, () => {
                  var t;
                  e > 0 && this._trackSecureFrameTransition(em, e), null === (t = this._connection) || void 0 === t || t.executeSecureFramesTransition(em);
              });
    }
    _handleSecureFramesRosterChange(e) {
        let t = [];
        Object.entries(e).forEach((e) => {
            let [n, r] = e;
            t.push(eg(n)), null == r || 0 === r.byteLength ? this._secureFramesRosterMap.delete(eg(n)) : this._secureFramesRosterMap.set(eg(n), r);
        }),
            this.emit(W.z.RosterMapUpdate, t);
    }
    _handleSecureFramesPrepareTransition(e, t) {
        var n;
        this.logger.info('Preparing DAVE protocol transition: '.concat(e, ', protocol version: ').concat(t)),
            null === (n = this._connection) ||
                void 0 === n ||
                n.prepareSecureFramesTransition(e, t, () => {
                    this._maybeSendSecureFramesTransitionReady(e), this._trackSecureFrameTransition(e, t);
                });
    }
    _handleSecureFramesPrepareEpoch(e, t) {
        var n;
        this.logger.info('Preparing DAVE protocol epoch: '.concat(e, ', protocol version: ').concat(t));
        let r = e.toString();
        null === (n = this._connection) || void 0 === n || n.prepareSecureFramesEpoch(r, t, this.trueChannelId), r === eh && this._sendMLSKeyPackage();
    }
    _sendMLSKeyPackage() {
        var e;
        null === (e = this._connection) ||
            void 0 === e ||
            e.getMLSKeyPackage((e) => {
                var t;
                this.logger.info('Got MLS key package, sending to RTC server'), null === (t = this._socket) || void 0 === t || t.sendMLSKeyPackage(e);
            });
    }
    _maybeSendSecureFramesTransitionReady(e) {
        if (e !== em) {
            var t;
            this.logger.info('Sending DAVE protocol ready for transition ID '.concat(e)), null === (t = this._socket) || void 0 === t || t.secureFramesReadyForTransition(e);
        }
    }
    _handleSecureFramesExecuteTransition(e) {
        var t;
        this.logger.info('Executing DAVE protocol transition: '.concat(e)), null === (t = this._connection) || void 0 === t || t.executeSecureFramesTransition(e);
    }
    _handleMLSExternalSenderPackage(e) {
        var t;
        this.logger.info('Received MLS external sender package'), null === (t = this._connection) || void 0 === t || t.updateMLSExternalSender(e);
    }
    _handleMLSProposals(e, t) {
        var n;
        this.logger.info('Received MLS proposals'),
            null === (n = this._connection) ||
                void 0 === n ||
                n.processMLSProposals(t, (t) => {
                    this.logger.info('Sending MLS commit welcome message'), e.sendMLSCommitWelcome(t);
                });
    }
    _handleMLSPrepareCommitTransition(e, t) {
        var n;
        this.logger.info('Received MLS commit for transition ID '.concat(e)),
            null === (n = this._connection) ||
                void 0 === n ||
                n.prepareMLSCommitTransition(e, t, (t, n, r) => {
                    t ? (this._handleSecureFramesRosterChange(r), this._maybeSendSecureFramesTransitionReady(e), this._trackSecureFrameTransition(e, n), this._recoverMLSFailures()) : (this.logger.warn('Failed to process MLS commit for transition ID '.concat(e)), this._flagMLSInvalidCommitWelcome(e), this._handleSecureFramesInit(n));
                });
    }
    _handleMLSWelcome(e, t) {
        var n;
        this.logger.info('Received MLS welcome for transition ID '.concat(e)),
            null === (n = this._connection) ||
                void 0 === n ||
                n.processMLSWelcome(e, t, (t, n, r) => {
                    t ? (this._handleSecureFramesRosterChange(r), this._maybeSendSecureFramesTransitionReady(e), this._trackSecureFrameTransition(e, n), this._recoverMLSFailures()) : (this._flagMLSInvalidCommitWelcome(e), this._sendMLSKeyPackage());
                });
    }
    getMLSPairwiseFingerprint(e, t, n) {
        var r;
        null === (r = this._connection) || void 0 === r || r.getMLSPairwiseFingerprint(e, t, n);
    }
    _flagMLSInvalidCommitWelcome(e) {
        var t;
        this.logger.info('Flagging invalid MLS commit/welcome for transition ID '.concat(e)), null === (t = this._socket) || void 0 === t || t.flagMLSInvalidCommitWelcome(e);
    }
    _handleMLSFailure(e, t) {
        let n = ''.concat(e, ':').concat(t),
            r = n in this._mlsFailures ? this._mlsFailures[n][2] : 0;
        (this._mlsFailures[n] = [e, t, r + 1]), this._alertMLSFailureDebouced(e, t);
    }
    _recoverMLSFailures() {
        for (let [e, [t, n, r]] of Object.entries(this._mlsFailures)) {
            let i = e in this._mlsFailuresRecovered ? this._mlsFailuresRecovered[e][2] : 0;
            this._mlsFailuresRecovered[e] = [t, n, i + r];
        }
    }
    _trackMLSFailures() {
        let e = [
                ...Object.values(this._mlsFailuresRecovered).map((e) => {
                    let [t, n, r] = e;
                    return [t, n, r, !0];
                }),
                ...Object.values(this._mlsFailures).map((e) => {
                    let [t, n, r] = e;
                    return [t, n, r, !1];
                })
            ],
            t = this.getMediaSessionId();
        for (let [n, r, i, o] of e)
            U.default.track(
                en.rMx.MLS_FAILURES,
                es(eo({}, this._getAnalyticsProperties()), {
                    media_session_id: t,
                    parent_media_session_id: this.parentMediaSessionId,
                    failure_source: n,
                    failure_reason: r,
                    failure_count: i,
                    failure_was_recovered: o
                })
            );
    }
    _alertMLSFailure(e, t) {
        let n = j.default.getCurrentUser();
        ((null == n ? void 0 : n.isStaff()) || (null == n ? void 0 : n.isStaffPersonal())) &&
            m.Z.show({
                title: 'MLS Error in '.concat(e),
                body: 'Error: '.concat(t, '! Please upload your logs in A/V settings and ask everyone in the call to do the same, and ping us in #av-e2ee in Core Tech!')
            });
    }
    _getExtraConnectionOptions() {
        return {};
    }
    shouldReportPeriodicStats(e) {
        if (e.length > 10) return !1;
        let t = this.getMediaSessionId();
        return null != t && c().v3(t) % 100 <= 5;
    }
    getInputDeviceName() {
        var e;
        let t = L.Z.getInputDeviceId();
        return null === (e = L.Z.getInputDevices()[t]) || void 0 === e ? void 0 : e.name;
    }
    getOutputDeviceName() {
        var e;
        let t = L.Z.getOutputDeviceId();
        return null === (e = L.Z.getOutputDevices()[t]) || void 0 === e ? void 0 : e.name;
    }
    getVideoDeviceName() {
        var e;
        let t = L.Z.getVideoDeviceId();
        return null === (e = L.Z.getVideoDevices()[t]) || void 0 === e ? void 0 : e.name;
    }
    getGoLiveSource() {
        return L.Z.getGoLiveSource();
    }
    constructor({ userId: e, sessionId: t, guildId: n, channelId: r, context: i = er.Yn.DEFAULT, rtcServerId: o, parentMediaSessionId: a }) {
        var l, c;
        super(),
            ei(this, 'context', void 0),
            ei(this, 'userId', void 0),
            ei(this, 'sessionId', void 0),
            ei(this, 'guildId', void 0),
            ei(this, 'parentMediaSessionId', void 0),
            ei(this, 'hostname', void 0),
            ei(this, 'state', void 0),
            ei(this, '_videoQuality', void 0),
            ei(this, '_soundshareStats', void 0),
            ei(this, 'logger', void 0),
            ei(this, 'rtcServerId', void 0),
            ei(this, '_channelId', void 0),
            ei(this, 'channelIds', void 0),
            ei(this, '_endpoint', void 0),
            ei(this, 'port', void 0),
            ei(this, 'token', void 0),
            ei(this, 'protocol', void 0),
            ei(this, 'voiceVersion', void 0),
            ei(this, 'rtcWorkerVersion', void 0),
            ei(this, '_socket', void 0),
            ei(this, '_backoff', void 0),
            ei(this, '_destroyed', void 0),
            ei(this, '_pings', void 0),
            ei(this, '_pingBadCount', void 0),
            ei(this, '_pingTimeouts', void 0),
            ei(this, '_mediaSessionId', void 0),
            ei(this, '_voiceQuality', void 0),
            ei(this, '_voiceQualityPeriodicStatsInterval', void 0),
            ei(this, '_voiceQualityPeriodicStatsSequenceId', void 0),
            ei(this, '_systemResponsiveness', void 0),
            ei(this, '_noiseCancellationError', void 0),
            ei(this, '_voiceDuration', void 0),
            ei(this, '_videoHealthManager', void 0),
            ei(this, '_sentVideo', void 0),
            ei(this, '_outboundLossRate', void 0),
            ei(this, '_recordingEnabled', void 0),
            ei(this, '_selectedExperiments', void 0),
            ei(this, '_localMediaSinkWantsManager', void 0),
            ei(this, '_goLiveQualityManager', void 0),
            ei(this, '_remoteVideoSinkWants', void 0),
            ei(this, '_connection', void 0),
            ei(this, '_createdTime', void 0),
            ei(this, '_connectStartTime', void 0),
            ei(this, '_connectCompletedTime', void 0),
            ei(this, '_rtcConnectionId', void 0),
            ei(this, '_connectCount', void 0),
            ei(this, '_connected', void 0),
            ei(this, '_connecting', void 0),
            ei(this, '_encountered_socket_failure', void 0),
            ei(this, '_inputDetected', void 0),
            ei(this, '_encryptionMode', void 0),
            ei(this, 'stateHistory', void 0),
            ei(this, '_supportedBandwidthEstimationExperiments', void 0),
            ei(this, '_bandwidthEstimationExperiment', void 0),
            ei(this, '_secureFramesState', void 0),
            ei(this, '_userIds', void 0),
            ei(this, '_secureFramesRosterMap', new Map()),
            ei(this, '_mlsFailuresRecovered', void 0),
            ei(this, '_mlsFailures', void 0),
            ei(this, '_lastSentSpeakingStatus', void 0),
            ei(this, '_lastSentSSRC', void 0),
            ei(this, 'powerMonitorListener', void 0),
            ei(this, 'reconnect', () => {
                let e = this._socket;
                null != e && (this._connected && (this._connectStartTime = (0, p.zO)()), this._connecting || (this._trackVoiceConnectionConnecting(), (this._connecting = !0), (this._encountered_socket_failure = !1)), this._connectCount++, e.close(), e.connect());
            }),
            ei(this, '_alertMLSFailureDebouced', s()(this._alertMLSFailure, 100)),
            ei(this, '_handleNetworkOnline', () => {
                this.expeditedHeartbeat(5000, 'network detected online.');
            }),
            ei(this, '_handleNetworkOffline', () => {
                this.expeditedHeartbeat(15000, 'network detected offline.', !1);
            }),
            ei(this, '_handleNoRoute', () => {
                var e;
                null === (e = this._socket) || void 0 === e || e.noRoute();
            }),
            ei(this, '_handlePowerResume', () => {
                this.expeditedHeartbeat(5000, 'power monitor resumed');
            }),
            ei(this, '_handleVoiceQualityPeriodicsStats', () => {
                if (null != this._voiceQuality) {
                    let e = this._voiceQuality.getPeriodicStats();
                    if (this.shouldReportPeriodicStats(e))
                        for (let t of e)
                            U.default.track(
                                en.rMx.VOICE_QUALITY_PERIODIC_STATS,
                                es(eo({}, this._getAnalyticsProperties()), {
                                    media_session_id: this.getMediaSessionId(),
                                    sender_user_id: t.userId,
                                    hostname: this.hostname,
                                    frame_op_silent: t.silent,
                                    frame_op_normal: t.normal,
                                    frame_op_merged: t.merged,
                                    frame_op_expanded: t.expanded,
                                    frame_op_accelerated: t.accelerated,
                                    frame_op_preemptive_expanded: t.preemptiveExpanded,
                                    frame_op_cng: t.cng,
                                    accelerate_rate: t.accelerateRate,
                                    expand_rate: t.expandRate,
                                    preemptive_expand_rate: t.preemptiveExpandRate,
                                    speech_expand_rate: t.speechExpandRate,
                                    duration_ms: t.durationMs,
                                    sequence_id: this._voiceQualityPeriodicStatsSequenceId,
                                    input_device: this.getInputDeviceName(),
                                    output_device: this.getOutputDeviceName(),
                                    ping_average: Math.round(this.getAveragePing()),
                                    ping_bad_count: this._pingBadCount,
                                    parent_media_session_id: this.parentMediaSessionId
                                })
                            );
                    this._voiceQualityPeriodicStatsSequenceId++;
                }
            }),
            ei(this, 'getAudioDeviceStates', () => ({
                input_device: this.getInputDeviceName(),
                input_device_count: Object.keys(L.Z.getInputDevices()).length,
                output_device: this.getOutputDeviceName(),
                output_device_count: Object.keys(L.Z.getOutputDevices()).length
            })),
            ei(this, 'getVideoDeviceStates', () => ({
                camera_device: this.getVideoDeviceName(),
                camera_device_count: Object.keys(L.Z.getVideoDevices()).length
            })),
            ei(this, '_trackVoiceConnectionConnecting', () => {
                let e = D.Z.getChannel(this.channelId),
                    t = null == e ? void 0 : e.type;
                U.default.track(
                    en.rMx.VOICE_CONNECTION_CONNECTING,
                    es(eo({}, this.getAudioDeviceStates(), this.getVideoDeviceStates()), {
                        guild_id: this.guildId,
                        channel_id: this.channelId,
                        rtc_connection_id: this.getRTCConnectionId(),
                        hostname: this.hostname,
                        connect_count: this._connectCount,
                        context: this.context,
                        channel_type: t,
                        participant_type: this.getVoiceParticipantType(),
                        is_muted: L.Z.isMute()
                    })
                );
            }),
            ei(this, 'incomingVideoEnabledChanged', (e) => {
                var t, n;
                null === (t = this._goLiveQualityManager) || void 0 === t || t.onIncomingVideoEnabled(e), null === (n = this._videoQuality) || void 0 === n || n.setOcclusionIncomingVideoEnabled(e);
            }),
            ei(this, 'windowVisibilityChanged', (e) => {
                var t;
                null === (t = this._videoQuality) || void 0 === t || t.setWindowOcclusionState(!e);
            }),
            (this.context = i),
            (this.logger = new v.Z('RTCConnection('.concat(null !== (l = null != o ? o : n) && void 0 !== l ? l : r, ', ').concat(this.context, ')'))),
            this.logger.enableNativeLogger(!0),
            (this.userId = e),
            (this.sessionId = t),
            (this.guildId = n),
            (this._channelId = r),
            (this.channelIds = new Set([r])),
            (this.rtcServerId = o),
            (this.parentMediaSessionId = a),
            (this._endpoint = null),
            (this.hostname = null),
            (this.port = null),
            (this.token = null),
            (this.voiceVersion = null),
            (this.rtcWorkerVersion = null),
            (this.state = en.hes.AWAITING_ENDPOINT),
            (this.stateHistory = new Y.K(this.state)),
            (this._socket = null),
            (this._backoff = new d.Z(1000, 10000)),
            (this._destroyed = !1),
            (this._pings = []),
            (this._pingBadCount = 0),
            (this._pingTimeouts = []),
            (this._mediaSessionId = null),
            (this._voiceQuality = null),
            (this._voiceQualityPeriodicStatsInterval = null),
            (this._voiceQualityPeriodicStatsSequenceId = 0),
            (this._systemResponsiveness = null),
            (this._noiseCancellationError = 0),
            (this._voiceDuration = null),
            (this._videoQuality = null),
            (this._videoHealthManager = null),
            (this._sentVideo = !1),
            (this._outboundLossRate = null),
            (this._createdTime = (0, p.zO)()),
            (this._connectStartTime = 0),
            (this._connectCompletedTime = 0),
            (this._rtcConnectionId = (0, u.Z)()),
            (this._connectCount = 0),
            (this._connected = !1),
            (this._connecting = !1),
            (this._encountered_socket_failure = !1),
            (this._inputDetected = !1),
            (this._selectedExperiments = []),
            (this._secureFramesState = null),
            (this._userIds = new Set([e])),
            this._secureFramesRosterMap.clear(),
            (this._mlsFailuresRecovered = {}),
            (this._mlsFailures = {}),
            (this._lastSentSpeakingStatus = 0),
            (this._lastSentSSRC = void 0);
        let f = L.Z.supports(er.AN.FIRST_FRAME_CALLBACK) && L.Z.supports(er.AN.REMOTE_USER_MULTI_STREAM);
        if (i === er.Yn.DEFAULT) {
            let t = (null === (c = D.Z.getChannel(this.channelId)) || void 0 === c ? void 0 : c.type) === en.d4z.GUILD_STAGE_VOICE;
            (this._localMediaSinkWantsManager = new z.ZP(e, t, f)),
                this._localMediaSinkWantsManager.on(z.ai.Update, (e) => {
                    if (this.state === en.hes.RTC_CONNECTED && null != this._socket) {
                        var t;
                        this.logger.info('Media sink wants: '.concat(JSON.stringify(e))), this._socket.mediaSinkWants(e), null === (t = this._connection) || void 0 === t || t.setLocalVideoSinkWants(e);
                    }
                }),
                this._localMediaSinkWantsManager.on(z.ai.UserSSRCUpdate, (e, t, n) => {
                    var r;
                    null === (r = this._connection) || void 0 === r || r.createUser(e, t, n);
                });
        } else
            i === er.Yn.STREAM &&
                ((this._goLiveQualityManager = new I.Z(!0)),
                this._goLiveQualityManager.on(I.y.RequestedSSRCsUpdate, (e, t, n) => {
                    var r;
                    null === (r = this._connection) || void 0 === r || r.createUser(e, t, n);
                }),
                this._goLiveQualityManager.on(I.y.RequestedStreamsUpdate, (e) => {
                    if (this.state === en.hes.RTC_CONNECTED && null != this._socket) {
                        var t;
                        this.logger.info('Go Live Media sink wants: '.concat(JSON.stringify(e))), this._socket.mediaSinkWants(e), null === (t = this._connection) || void 0 === t || t.setLocalVideoSinkWants(e);
                    }
                }));
        (this._remoteVideoSinkWants = z.Yy),
            et.w.on(et.e.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged),
            et.w.on(et.e.WindowVisibilityChanged, this.windowVisibilityChanged),
            M.ZP.shouldRecordNextConnection() ? ((this._recordingEnabled = !0), E.TC(!1)) : (this._recordingEnabled = !1),
            (this._soundshareStats = new q.Z()),
            B.Z.addOnlineCallback(this._handleNetworkOnline),
            B.Z.addOfflineCallback(this._handleNetworkOffline),
            (0, F.isDesktop)() && (this.powerMonitorListener = Z.Z.remotePowerMonitor.on('resume', this._handlePowerResume)),
            (this._supportedBandwidthEstimationExperiments = []),
            (this._bandwidthEstimationExperiment = null),
            L.Z.getMediaEngine().getSupportedBandwidthEstimationExperiments((e) => {
                this._supportedBandwidthEstimationExperiments = e;
            });
    }
}
