n.d(t, { Z: () => em }), n(301563), n(411104), n(653041), n(47120), n(26686);
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
    g = n(668781),
    m = n(846027),
    E = n(304680),
    v = n(547727),
    b = n(710845),
    y = n(75060),
    O = n(631053),
    S = n(148959),
    I = n(926951),
    T = n(166884),
    N = n(868616),
    A = n(307320),
    C = n(580930),
    R = n(615830),
    P = n(314897),
    D = n(592125),
    w = n(131951),
    L = n(19780),
    x = n(226961),
    M = n(936349),
    k = n(594174),
    j = n(626135),
    U = n(630388),
    G = n(931619),
    B = n(358085),
    V = n(591759),
    F = n(579806),
    Z = n(859401),
    H = n(437263),
    W = n(423343),
    Y = n(685756),
    K = n(655306),
    z = n(583794),
    q = n(36902),
    Q = n(824096),
    X = n(53114),
    J = n(174532),
    $ = n(895066),
    ee = n(798681),
    et = n(981631),
    en = n(65154);
function er(e, t, n) {
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
function ei(e) {
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
                er(e, t, n[t]);
            });
    }
    return e;
}
function eo(e, t) {
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
function ea(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eo(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let es = /^https/.test(((r = 'https:'), 'https:')) ? 'wss:' : 'ws:',
    el = 200,
    ec = 20,
    eu = 500,
    ed = 250,
    ef = 10,
    e_ = 5,
    ep = '1',
    eh = 0;
function eg(e) {
    return e;
}
class em extends f.Z {
    get quality() {
        let e = this.getLastPing();
        return this.state !== et.hes.RTC_CONNECTED || void 0 === e ? et.IE4.UNKNOWN : e > eu || (null != this._outboundLossRate && this._outboundLossRate > ef) ? et.IE4.BAD : e > ed || (null != this._outboundLossRate && this._outboundLossRate > e_) ? et.IE4.AVERAGE : et.IE4.FINE;
    }
    get endpoint() {
        return this._endpoint;
    }
    set endpoint(e) {
        if (null == e) (this._endpoint = null), (this.hostname = null);
        else {
            var t;
            e = ''.concat(es, '//').concat(e);
            let { hostname: n, port: r } = null !== (t = V.Z.toURLSafe(e)) && void 0 !== t ? t : {},
                i = null != r ? parseInt(r) : NaN;
            null != n && (80 === i || 443 === i) && (e = ''.concat(es, '//').concat(n)), (this._endpoint = e + '/'), (this.hostname = n);
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
            this.setState(et.hes.AWAITING_ENDPOINT);
            return;
        }
        let i = this._socket;
        null != i && this._cleanupSocket(), (i = this._socket = new Y.Z(this.endpoint, this.context)).on(Y.V.Connecting, this._handleConnecting.bind(this, i)), i.on(Y.V.Connect, this._handleConnect.bind(this, i)), i.on(Y.V.Disconnect, this._handleDisconnect.bind(this, i)), i.on(Y.V.Resuming, this._handleResuming.bind(this, i)), i.on(Y.V.Ready, this._handleReady.bind(this, i)), i.on(Y.V.Speaking, this._handleSpeaking.bind(this, i)), i.on(Y.V.Video, this._handleVideo.bind(this, i)), i.on(Y.V.Ping, this._handleControlPing.bind(this)), i.on(Y.V.ClientDisconnect, this._handleClientDisconnect.bind(this)), i.on(Y.V.ClientConnect, this._handleClientConnect.bind(this)), i.on(Y.V.Codecs, this._handleCodecs.bind(this)), i.on(Y.V.MediaSessionId, this._handleMediaSessionId.bind(this)), i.on(Y.V.MediaSinkWants, this._handleMediaSinkWants.bind(this)), i.on(Y.V.VoiceBackendVersion, this._handleCodeVersion.bind(this)), i.on(Y.V.KeyframeInterval, this._handleKeyframeInterval.bind(this)), i.on(Y.V.Flags, this.handleFlags.bind(this)), i.on(Y.V.Platform, this.handlePlatform.bind(this)), i.on(Y.V.BandwidthEstimationExperiment, this._handleBandwidthEstimationExperiment.bind(this)), i.on(Y.V.SecureFramesInit, this._handleSecureFramesInit.bind(this)), i.on(Y.V.SecureFramesPrepareTransition, this._handleSecureFramesPrepareTransition.bind(this)), i.on(Y.V.SecureFramesPrepareEpoch, this._handleSecureFramesPrepareEpoch.bind(this)), i.on(Y.V.SecureFramesExecuteTransition, this._handleSecureFramesExecuteTransition.bind(this)), i.on(Y.V.MLSExternalSenderPackage, this._handleMLSExternalSenderPackage.bind(this)), i.on(Y.V.MLSProposals, this._handleMLSProposals.bind(this, i)), i.on(Y.V.MLSPrepareCommitTransition, this._handleMLSPrepareCommitTransition.bind(this)), i.on(Y.V.MLSWelcome, this._handleMLSWelcome.bind(this)), (this._connectStartTime = (0, p.zO)()), this._connectCount++, (this._connecting = !0), null != i && this._socket === i && (this._trackVoiceConnectionConnecting(), (this._encountered_socket_failure = !1), i.connect());
    }
    destroy() {
        var e, t, n, r, i, o, a;
        if ((this.logger.info('Destroy RTCConnection'), G.Z.removeOnlineCallback(this._handleNetworkOnline), G.Z.removeOfflineCallback(this._handleNetworkOffline), (0, B.isDesktop)() && (null === (o = (a = this).powerMonitorListener) || void 0 === o || o.call(a)), ee.w.off(ee.e.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged), ee.w.off(ee.e.WindowVisibilityChanged, this.windowVisibilityChanged), this._backoff.cancel(), this._cleanupSocket(), null === (e = this._voiceQuality) || void 0 === e || e.stop(), (this._voiceQuality = null), clearInterval(this._voiceQualityPeriodicStatsInterval), (this._voiceQualityPeriodicStatsInterval = null), (this._voiceQualityPeriodicStatsSequenceId = 0), null === (t = this._systemResponsiveness) || void 0 === t || t.stop(), (this._systemResponsiveness = null), (this._noiseCancellationError = 0), null === (n = this._voiceDuration) || void 0 === n || n.stop(), (this._voiceDuration = null), null === (r = this._videoQuality) || void 0 === r || r.stop(), (this._videoQuality = null), (this._videoHealthManager = null), (this._secureFramesState = null), null === (i = this._localMediaSinkWantsManager) || void 0 === i || i.reset(), null != this._connection)) {
            let e = this._connection;
            (this._connection = null), e.destroy();
        }
        this.removeAllListeners(), (this._destroyed = !0);
    }
    shouldSendSpeaking(e, t) {
        if ((0, B.isWeb)()) return !0;
        let n = (0, U.yE)(e, en.Dg.PRIORITY),
            r = (0, U.yE)(this._lastSentSpeakingStatus, en.Dg.PRIORITY);
        return (this._lastSentSSRC !== t || n !== r) && (void 0 !== this._lastSentSSRC || e !== en.Dg.NONE) && (this._lastSentSSRC === t || e !== en.Dg.NONE) && ((this._lastSentSpeakingStatus = e), (this._lastSentSSRC = t), !0);
    }
    sendSpeaking(e, t) {
        let n = this._socket;
        if (null == n || !this.shouldSendSpeaking(e, t)) return;
        let r = w.Z.getPacketDelay();
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
        let e = this._pings.slice(0, Math.min(this._pings.length, ec));
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
    setState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.logger.info('RTC connection state: '.concat(this.state, ' => ').concat(e)),
            (this.state = e),
            this.stateHistory.update(this.state),
            this.emit(
                H.z.State,
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
        t === this.context && (t === en.Yn.DEFAULT ? null === (r = this._localMediaSinkWantsManager) || void 0 === r || r.setSimulcastDebugOverride(e, n) : null === (i = this._goLiveQualityManager) || void 0 === i || i.setSimulcastDebugOverride(n));
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
        if (this.context === en.Yn.DEFAULT) {
            let { voiceFiltersPreProcessMute: e } = C.Z.getCurrentConfig({ location: 'handleReady' }, { autoTrackExposure: !0 });
            e && t.push('voice_filters_pre_process_mute');
        }
        if ((w.Z.supports(en.AN.FIXED_KEYFRAME_INTERVAL) && t.push('fixed_keyframe_interval'), 0 !== this._supportedBandwidthEstimationExperiments.length)) {
            let e = T.Z.workerExperimentString();
            null != e && t.push(e);
        }
        this._selectedExperiments = t;
    }
    _handleConnecting(e) {
        if (null != this.endpoint) {
            let e = D.Z.getChannel(this.channelId),
                t = null == e ? void 0 : e.type;
            this.logger.info('Connecting to RTC server '.concat(this.endpoint, ', rtc-connection-id: ').concat(this.getRTCConnectionId(), ', channel: ').concat(this.channelId, '(').concat(t, ')'));
        }
        this.setState(et.hes.CONNECTING);
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
                maxDaveProtocolVersion: w.Z.getSupportedSecureFramesProtocolVersion(this.guildId),
                video: w.Z.supports(en.AN.VIDEO),
                streamParameters: w.Z.getVideoStreamParameters(this.context)
            }),
            this.setState(et.hes.AUTHENTICATING);
    }
    _handleDisconnect(e, t, n, r) {
        var i, o, a, s, l, c, u, d, f, _, p, h, g, m, E, v, b, y, S;
        this.logger.info('Disconnected from RTC server, clean: '.concat(t, ', code: ').concat(n, ', reason: ').concat(r, ', state: ').concat(this.state)),
            t ||
                !this._connecting ||
                this._encountered_socket_failure ||
                (j.default.track(
                    et.rMx.VOICE_CONNECTION_SOCKET_FAILURE,
                    ea(ei({}, this._getAnalyticsProperties()), {
                        hostname: this.hostname,
                        connect_count: this._connectCount,
                        code: n,
                        reason: r
                    })
                ),
                (this._encountered_socket_failure = !0)),
            L.Z.getRemoteDisconnectVoiceChannelId() === this.channelId && (null === (l = this._connection) || void 0 === l || l.wasRemoteDisconnected());
        let I = 'Force Close' !== r;
        if (I) {
            let e = this._backoff.fail(this.reconnect);
            this.logger.warn('Disconnect was not clean! reason='.concat(r, '. Reconnecting in ').concat((e / 1000).toFixed(2), ' seconds.'));
        }
        if (this.state !== et.hes.DISCONNECTED) {
            let e = this._videoQuality;
            null != e &&
                this.context === en.Yn.DEFAULT &&
                (e.stop(),
                this._sentVideo &&
                    e.getOutboundStats().forEach((t) => {
                        var n;
                        (null !== (n = t.num_frames) && void 0 !== n ? n : 0) > 0 &&
                            j.default.track(
                                et.rMx.VIDEO_STREAM_ENDED,
                                ea(
                                    ei(
                                        ea(ei({}, this._getAnalyticsProperties()), {
                                            media_session_id: this.getMediaSessionId(),
                                            sender_user_id: this.userId,
                                            reason: r,
                                            participant_type: 'sender',
                                            guild_region: M.Z.getRegion(this.hostname),
                                            hostname: this.hostname,
                                            hardware_enabled: w.Z.getHardwareEncoding()
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
                        j.default.track(
                            et.rMx.VIDEO_STREAM_ENDED,
                            ei(
                                ea(ei({}, this._getAnalyticsProperties()), {
                                    media_session_id: this.getMediaSessionId(),
                                    sender_user_id: t,
                                    reason: r,
                                    participant_type: 'receiver',
                                    guild_region: M.Z.getRegion(this.hostname),
                                    hostname: this.hostname,
                                    hardware_enabled: w.Z.getHardwareEncoding()
                                }),
                                i,
                                e.getNetworkStats(),
                                e.getCodecUsageStats('receiver', t)
                            )
                        );
                }));
            let t = M.Z.shouldIncludePreferredRegion() ? M.Z.getPreferredRegion() : null,
                n = w.Z.getSettings(),
                i = D.Z.getChannel(this.channelId);
            j.default.track(
                et.rMx.VOICE_DISCONNECT,
                ea(
                    ei(
                        ea(ei({}, this._getAnalyticsProperties()), {
                            hostname: this.hostname,
                            port: this.port,
                            protocol: this.protocol,
                            reconnect: I,
                            reason: r,
                            duration: this.getDuration()
                        }),
                        null === (c = this._voiceQuality) || void 0 === c ? void 0 : c.getMosStats(),
                        null === (u = this._voiceQuality) || void 0 === u ? void 0 : u.getPacketStats(),
                        null === (d = this._voiceQuality) || void 0 === d ? void 0 : d.getBytesStats(),
                        null === (f = this._voiceQuality) || void 0 === f ? void 0 : f.getBufferStats(),
                        null === (_ = this._voiceQuality) || void 0 === _ ? void 0 : _.getNetworkStats(),
                        null === (p = this._voiceQuality) || void 0 === p ? void 0 : p.getSystemResourceStats(),
                        null === (h = this._voiceQuality) || void 0 === h ? void 0 : h.getFrameOpStats(),
                        null === (g = this._voiceQuality) || void 0 === g ? void 0 : g.getDurationStats(),
                        null === (m = this._voiceQuality) || void 0 === m ? void 0 : m.getTransportStats(),
                        null === (E = this._voiceQuality) || void 0 === E ? void 0 : E.getE2EEStats(),
                        null === (v = this._voiceQuality) || void 0 === v ? void 0 : v.getAudioDeviceStats(),
                        null === (b = this._voiceDuration) || void 0 === b ? void 0 : b.getDurationStats(),
                        this.getAudioDeviceStates(),
                        null === (y = this._systemResponsiveness) || void 0 === y ? void 0 : y.getPttQueueLatencyStats()
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
                        no_input_detected_notice: w.Z.getNoInputDetectedNotice(),
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
                        num_fast_udp_reconnects: null != this._connection ? (null === (S = this._connection) || void 0 === S ? void 0 : S.getNumFastUdpReconnects()) : null,
                        parent_media_session_id: this.parentMediaSessionId,
                        audio_subsystem: w.Z.getMediaEngine().getAudioSubsystem(),
                        audio_layer: w.Z.getMediaEngine().getAudioLayer(),
                        automatic_audio_subsystem: n.automaticAudioSubsystem,
                        participant_type: this.getVoiceParticipantType()
                    }
                )
            );
            let o = this.getMediaSessionId();
            w.Z.getMediaEngine()
                .getCodecSurvey()
                .then((e) => {
                    let t = JSON.parse(e);
                    if (null == t || null == t.available_video_encoders || null == t.available_video_decoders) throw Error('codec survey is not available');
                    j.default.track(
                        et.rMx.VOICE_CODEC_DETECTED,
                        ea(ei({}, t), {
                            rtc_connection_id: this.getRTCConnectionId(),
                            media_session_id: o
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
        this.setState(et.hes.DISCONNECTED, { willReconnect: I });
    }
    _handleResuming(e) {
        var t, n;
        null === (t = this._connection) || void 0 === t || t.fastUdpReconnect(), null === (n = this._connection) || void 0 === n || n.clearAllSpeaking();
    }
    _handleReady(e, t, n, r, i, o, a) {
        var s;
        this.setState(et.hes.RTC_CONNECTING),
            (this.port = n),
            null != a && this._chooseExperiments(a),
            0 === o.length &&
                o.push({
                    type: en.Tr.VIDEO,
                    rid: '100',
                    ssrc: i + 1,
                    rtxSsrc: i + 2,
                    quality: 100,
                    active: !1
                });
        let l = w.Z.getMediaEngine(),
            c = R.Z.getPersistentCodesEnabled(),
            u = null !== (s = P.default.getStaticAuthSessionId()) && void 0 !== s ? s : void 0,
            d = l.connect(
                this.context,
                this.userId,
                ei(
                    {
                        ssrc: i,
                        address: t,
                        port: n,
                        modes: r,
                        experiments: this._selectedExperiments,
                        streamParameters: o,
                        qosEnabled: w.Z.getQoS(),
                        signingKeyId: c ? u : void 0
                    },
                    this._getExtraConnectionOptions()
                )
            );
        d.setUseElectronVideo(l.supports(en.AN.ELECTRON_VIDEO)), w.Z.supports(en.AN.IMAGE_QUALITY_MEASUREMENT) && d.setVideoQualityMeasurement('imageQualityWebrtcPsnrDb:5000,imageQualityVmaf_v061:5000,hwdec');
        let f = ['unk'];
        this.context === en.Yn.STREAM && (f.push('nvRelaxRc=250'), f.push('nvNewPresets')),
            d.setVideoEncoderExperiments(f.join(',')),
            d.on(_.Sh.Speaking, (e, t, n) => {
                this.userId === e && this.sendSpeaking(t, n), this.emit(H.z.Speaking, eg(e), t);
            }),
            d.on(_.Sh.ToggleMuteFromNative, () => {
                this.context === en.Yn.DEFAULT && m.Z.toggleSelfMute({ playSoundEffect: !1 });
            }),
            d.on(_.Sh.NativeMuteChanged, (e) => {
                this.context === en.Yn.DEFAULT && v.Z.nativeMuteChanged(e);
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
                                100 === t.quality && this.emit(H.z.VideoSourceQualityChanged, this.guildId, this.channelId, eg(e), t.maxResolution, t.maxFrameRate, this.context);
                            }));
            }),
            d.on(_.Sh.FirstFrame, (e, t, n) => {
                null != this._localMediaSinkWantsManager && (this._localMediaSinkWantsManager.setFirstFrameReceived(t), this.emit(H.z.Video, this.guildId, this.channelId, eg(e), n, this.rtcServerId)), null != this._goLiveQualityManager && (this._goLiveQualityManager.setFirstFrameReceived(t), this.emit(H.z.Video, this.guildId, this.channelId, eg(e), n, this.rtcServerId));
            }),
            d.on(_.Sh.Silence, (e) => {
                this._inputDetected = this._inputDetected || !e;
            }),
            d.on(_.Sh.Connected, (r, i) => {
                if ((this.logger.info('RTC connected to media server: '.concat(t, ':').concat(n)), e !== this._socket)) {
                    this.logger.warn('Socket mismatch, disconnecting');
                    return;
                }
                switch (((this._voiceQuality = new $.Z(d)), this._voiceQuality.start(), (this._voiceQualityPeriodicStatsSequenceId = 0), (this._voiceQualityPeriodicStatsInterval = setInterval(this._handleVoiceQualityPeriodicsStats, 300000)), (this._systemResponsiveness = new q.Z(d)), this._systemResponsiveness.start(), (this._noiseCancellationError = 0), (this._voiceDuration = new J.Z(this.userId, d)), this._voiceDuration.start(d.getSelfMute(), d.getVoiceFilterId()), (this.protocol = r), r)) {
                    case 'udp':
                        this.logger.info('Sending UDP info to RTC server.', i, this._selectedExperiments),
                            e.once(Y.V.Encryption, (e, t) => {
                                d === this._connection && (d.setEncryption(e, t), (this._encryptionMode = e));
                            }),
                            e.selectProtocol(r, this.getRTCConnectionId(), i, this._selectedExperiments);
                        break;
                    case 'webrtc':
                        this.logger.info('Sending local SDP to RTC server.'), e.once(Y.V.SDP, this._handleSDP.bind(this)), e.selectProtocol(r, this.getRTCConnectionId(), i);
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
                let n = M.Z.shouldIncludePreferredRegion() ? M.Z.getPreferredRegion() : null;
                this.logger.error('Error occurred while connecting to RTC server: '.concat(t)),
                    j.default.track(
                        et.rMx.VOICE_CONNECTION_FAILURE,
                        ea(ei({}, this._getAnalyticsProperties()), {
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
                    case en.$j.DISCONNECTED:
                        this.setState(et.hes.RTC_DISCONNECTED);
                        break;
                    case en.$j.CONNECTING:
                        this.setState(et.hes.RTC_CONNECTING);
                        break;
                    case en.$j.CONNECTED:
                        this.setState(et.hes.RTC_CONNECTED);
                        break;
                    case en.$j.NO_ROUTE:
                        this.setState(et.hes.NO_ROUTE);
                        break;
                    case en.$j.ICE_CHECKING:
                        this.setState(et.hes.ICE_CHECKING);
                        break;
                    case en.$j.DTLS_CONNECTING:
                        this.setState(et.hes.DTLS_CONNECTING);
                }
                if ((n === et.hes.RTC_CONNECTING && this.state === et.hes.RTC_DISCONNECTED ? this.reconnect() : this.state === et.hes.NO_ROUTE && (0 === this._backoff.fails && this._handleNoRoute(), this._backoff.fail(this.reconnect)), this.state === et.hes.RTC_CONNECTED)) {
                    var r, i;
                    let e = M.Z.shouldIncludePreferredRegion() ? M.Z.getPreferredRegion() : null;
                    if (this._connecting) {
                        let t = w.Z.getSettings();
                        j.default.track(
                            et.rMx.VOICE_CONNECTION_SUCCESS,
                            ei(
                                ea(ei({}, this._getAnalyticsProperties()), {
                                    hostname: this.hostname,
                                    port: this.port,
                                    protocol: this.protocol,
                                    cloudflare_best_region: e,
                                    connect_time: (0, p.zO)() - (this._connected ? this._connectStartTime : this._createdTime),
                                    connect_count: this._connectCount,
                                    audio_subsystem: w.Z.getMediaEngine().getAudioSubsystem(),
                                    audio_layer: w.Z.getMediaEngine().getAudioLayer(),
                                    automatic_audio_subsystem: t.automaticAudioSubsystem,
                                    media_session_id: this.getMediaSessionId(),
                                    participant_type: this.getVoiceParticipantType()
                                }),
                                this.stateHistory.getVoiceConnectionSuccessStats()
                            )
                        );
                    }
                    null === (r = this._localMediaSinkWantsManager) || void 0 === r || r.setConnection(d), null === (i = this._goLiveQualityManager) || void 0 === i || i.update(), (this._connectCompletedTime = (0, p.zO)()), (this._connected = !0), (this._connecting = !1), (this._encountered_socket_failure = !1);
                } else n === et.hes.RTC_CONNECTED && this.stateHistory.reset(this.state);
            }),
            d.on(_.Sh.SecureFramesUpdate, (e) => {
                (this._secureFramesState = e), this.emit(H.z.SecureFramesUpdate);
            }),
            d.on(_.Sh.Ping, this._handlePing.bind(this)),
            d.on(_.Sh.PingTimeout, this._handlePingTimeout.bind(this)),
            d.on(_.Sh.OutboundLossRate, this._handleOutboundLossRate.bind(this)),
            d.on(_.Sh.SoundshareTrace, this._handleSoundshareTrace.bind(this)),
            d.on(_.Sh.LocalVideoDisabled, this._handleLocalVideoDisabled.bind(this)),
            d.on(_.Sh.Stats, Z.Z.create()),
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
            r !== en.Dg.NONE &&
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
        this.emit(H.z.Flags, e, t);
    }
    handlePlatform(e, t) {
        this.emit(H.z.Platform, e, t, this.channelId);
    }
    getOrCreateVideoQuality() {
        if (null != this._connection && null == this._videoQuality) {
            (this._videoQuality = new X.S(this._connection)), this._videoQuality.start();
            let { featureEnabled: e, windowLength: t, allowedPoorFpsRatio: n, fpsThreshold: r, backoffTimeSec: i } = A.Z.getConfig(!0);
            if (e) {
                (this._videoHealthManager = new Q.y(t, n, r, i)), null != this._localMediaSinkWantsManager && (this._localMediaSinkWantsManager.videoHealthManager = this._videoHealthManager);
                let e = (e, t, n) => {
                    var r, i;
                    (null === (r = this._localMediaSinkWantsManager) || void 0 === r ? void 0 : r.shouldReceiveFromUser(e)) && (null === (i = this._videoHealthManager) || void 0 === i || i.updateFps(e, t, n));
                };
                this._videoQuality.on(X.d.FpsUpdate, e);
            }
        }
        return this._videoQuality;
    }
    _handleVideoStreamId(e) {
        var t, n, r, i;
        let { userId: o, streamId: a, videoSsrc: s, videoStreamParameters: l } = e;
        if (
            (this.emit(H.z.Video, this.guildId, this.channelId, o, a, this.rtcServerId),
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
        j.default.track(
            et.rMx.VOICE_CONNECTION_REMOTE_STREAMS_CREATED,
            ea(ei({}, this._getAnalyticsProperties()), {
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
                    type: en.Tr.VIDEO,
                    rid: e.rid,
                    ssrc: e.ssrc,
                    rtxSsrc: e.rtxSsrc,
                    quality: e.quality,
                    active: r > 0
                }));
                0 === e.length &&
                    e.push({
                        type: en.Tr.VIDEO,
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
                    100 === e.quality && this.emit(H.z.VideoSourceQualityChanged, this.guildId, this.channelId, t, e.maxResolution, e.maxFrameRate, this.context);
                });
        }
    }
    _handleControlPing(e) {
        w.Z.supports(en.AN.NATIVE_PING) || this._handlePing(e);
    }
    _handlePing(e) {
        if (void 0 !== e) {
            for (
                this._pings.push({
                    time: Date.now(),
                    value: e
                });
                this._pings.length >= el;

            )
                this._pings.shift();
            e > eu && this._pingBadCount++, this.emit(H.z.Ping, this._pings, this.quality);
        }
    }
    _handlePingTimeout(e, t) {
        this._pingTimeouts.push(e);
        let n = this._pingTimeouts.length;
        n >= 3 && this._pingTimeouts[n - 1] === this._pingTimeouts[n - 2] + 1 && this._pingTimeouts[n - 2] === this._pingTimeouts[n - 3] + 1 && this._handlePing(t);
    }
    _handleOutboundLossRate(e) {
        (this._outboundLossRate = e), this.emit(H.z.OutboundLossRate, e);
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
            this.emit(H.z.ClientConnect, e),
            null === (t = this._goLiveQualityManager) || void 0 === t || t.updateCallUserIds(this._userIds),
            null === (n = this._localMediaSinkWantsManager) || void 0 === n || n.updateCallUserIds(this._userIds);
    }
    _handleClientDisconnect(e) {
        var t, n, r, i, o;
        let a = this._videoQuality;
        if (null != a && this.context === en.Yn.DEFAULT) {
            let t = a.getInboundStats(e),
                n = null !== (i = null == t ? void 0 : t.num_frames) && void 0 !== i ? i : 0;
            null != t &&
                n > 0 &&
                (j.default.track(
                    et.rMx.VIDEO_STREAM_ENDED,
                    ei(
                        ea(ei({}, this._getAnalyticsProperties()), {
                            media_session_id: this.getMediaSessionId(),
                            sender_user_id: e,
                            reason: 'User disconnected',
                            participant_type: 'receiver',
                            guild_region: M.Z.getRegion(this.hostname),
                            hostname: this.hostname,
                            hardware_enabled: w.Z.getHardwareEncoding()
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
        null != s && s.destroyUser(e), null === (t = this._localMediaSinkWantsManager) || void 0 === t || t.destroyUser(e), this._userIds.delete(e), this.emit(H.z.ClientDisconnect, e), null === (n = this._goLiveQualityManager) || void 0 === n || n.updateCallUserIds(this._userIds), null === (r = this._localMediaSinkWantsManager) || void 0 === r || r.updateCallUserIds(this._userIds);
    }
    _handleCodecs(e, t) {
        let n = this._connection;
        null != n && null != this.protocol ? n.setCodecs(null != e && '' !== e ? e : en.ad.OPUS, null != t && '' !== t ? t : en.ad.H264, this.context) : this.logger.warn('Cannot set codecs on connection with protocol:', this.protocol);
    }
    _handleSDP(e) {
        let t = this._connection;
        null != t && null != this.protocol ? t.setSDP(e) : this.logger.warn('Cannot set SDP on connection with protocol:', this.protocol);
    }
    _handleMediaSessionId(e) {
        (this._mediaSessionId = e), this.logger.info('Setting media-session-id: '.concat(e, ' for rtc-connection-id: ').concat(this.getRTCConnectionId()));
        let t = y.Z.getRawThermalState();
        j.default.track(
            et.rMx.MEDIA_SESSION_JOINED,
            ea(ei({}, this._getAnalyticsProperties()), {
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
        let t = I.Z.getMediaEngineExperiments(e);
        if (null !== t && 0 !== t.length) {
            var n;
            null === (n = this._connection) || void 0 === n || n.setBandwidthEstimationExperiments(t);
        }
    }
    _trackSecureFrameTransition(e, t) {
        j.default.track(
            et.rMx.SECURE_FRAMES_TRANSITION,
            ea(ei({}, this._getAnalyticsProperties()), {
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
            ? (this.logger.info('DAVE protocol init with protocol version: '.concat(e)), null === (t = this._connection) || void 0 === t || t.prepareSecureFramesEpoch(ep, e, this.trueChannelId), this._sendMLSKeyPackage())
            : null === (n = this._connection) ||
              void 0 === n ||
              n.prepareSecureFramesTransition(eh, e, () => {
                  var t;
                  e > 0 && this._trackSecureFrameTransition(eh, e), null === (t = this._connection) || void 0 === t || t.executeSecureFramesTransition(eh);
              });
    }
    _handleSecureFramesRosterChange(e) {
        let t = [];
        Object.entries(e).forEach((e) => {
            let [n, r] = e;
            t.push(eg(n)), null == r || 0 === r.byteLength ? this._secureFramesRosterMap.delete(eg(n)) : this._secureFramesRosterMap.set(eg(n), r);
        }),
            this.emit(H.z.RosterMapUpdate, t);
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
        null === (n = this._connection) || void 0 === n || n.prepareSecureFramesEpoch(r, t, this.trueChannelId), r === ep && this._sendMLSKeyPackage();
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
        if (e !== eh) {
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
            j.default.track(
                et.rMx.MLS_FAILURES,
                ea(ei({}, this._getAnalyticsProperties()), {
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
        let n = k.default.getCurrentUser();
        ((null == n ? void 0 : n.isStaff()) || (null == n ? void 0 : n.isStaffPersonal())) &&
            g.Z.show({
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
        let t = w.Z.getInputDeviceId();
        return null === (e = w.Z.getInputDevices()[t]) || void 0 === e ? void 0 : e.name;
    }
    getOutputDeviceName() {
        var e;
        let t = w.Z.getOutputDeviceId();
        return null === (e = w.Z.getOutputDevices()[t]) || void 0 === e ? void 0 : e.name;
    }
    getVideoDeviceName() {
        var e;
        let t = w.Z.getVideoDeviceId();
        return null === (e = w.Z.getVideoDevices()[t]) || void 0 === e ? void 0 : e.name;
    }
    getGoLiveSource() {
        return w.Z.getGoLiveSource();
    }
    constructor({ userId: e, sessionId: t, guildId: n, channelId: r, context: i = en.Yn.DEFAULT, rtcServerId: o, parentMediaSessionId: a }) {
        var l, c;
        super(),
            er(this, 'context', void 0),
            er(this, 'userId', void 0),
            er(this, 'sessionId', void 0),
            er(this, 'guildId', void 0),
            er(this, 'parentMediaSessionId', void 0),
            er(this, 'hostname', void 0),
            er(this, 'state', void 0),
            er(this, '_videoQuality', void 0),
            er(this, '_soundshareStats', void 0),
            er(this, 'logger', void 0),
            er(this, 'rtcServerId', void 0),
            er(this, '_channelId', void 0),
            er(this, 'channelIds', void 0),
            er(this, '_endpoint', void 0),
            er(this, 'port', void 0),
            er(this, 'token', void 0),
            er(this, 'protocol', void 0),
            er(this, 'voiceVersion', void 0),
            er(this, 'rtcWorkerVersion', void 0),
            er(this, '_socket', void 0),
            er(this, '_backoff', void 0),
            er(this, '_destroyed', void 0),
            er(this, '_pings', void 0),
            er(this, '_pingBadCount', void 0),
            er(this, '_pingTimeouts', void 0),
            er(this, '_mediaSessionId', void 0),
            er(this, '_voiceQuality', void 0),
            er(this, '_voiceQualityPeriodicStatsInterval', void 0),
            er(this, '_voiceQualityPeriodicStatsSequenceId', void 0),
            er(this, '_systemResponsiveness', void 0),
            er(this, '_noiseCancellationError', void 0),
            er(this, '_voiceDuration', void 0),
            er(this, '_videoHealthManager', void 0),
            er(this, '_sentVideo', void 0),
            er(this, '_outboundLossRate', void 0),
            er(this, '_recordingEnabled', void 0),
            er(this, '_selectedExperiments', void 0),
            er(this, '_localMediaSinkWantsManager', void 0),
            er(this, '_goLiveQualityManager', void 0),
            er(this, '_remoteVideoSinkWants', void 0),
            er(this, '_connection', void 0),
            er(this, '_createdTime', void 0),
            er(this, '_connectStartTime', void 0),
            er(this, '_connectCompletedTime', void 0),
            er(this, '_rtcConnectionId', void 0),
            er(this, '_connectCount', void 0),
            er(this, '_connected', void 0),
            er(this, '_connecting', void 0),
            er(this, '_encountered_socket_failure', void 0),
            er(this, '_inputDetected', void 0),
            er(this, '_encryptionMode', void 0),
            er(this, 'stateHistory', void 0),
            er(this, '_supportedBandwidthEstimationExperiments', void 0),
            er(this, '_bandwidthEstimationExperiment', void 0),
            er(this, '_secureFramesState', void 0),
            er(this, '_userIds', void 0),
            er(this, '_secureFramesRosterMap', new Map()),
            er(this, '_mlsFailuresRecovered', void 0),
            er(this, '_mlsFailures', void 0),
            er(this, '_lastSentSpeakingStatus', void 0),
            er(this, '_lastSentSSRC', void 0),
            er(this, 'powerMonitorListener', void 0),
            er(this, 'reconnect', () => {
                let e = this._socket;
                null != e && (this._connected && (this._connectStartTime = (0, p.zO)()), this._connecting || (this._trackVoiceConnectionConnecting(), (this._connecting = !0), (this._encountered_socket_failure = !1)), this._connectCount++, e.close(), e.connect());
            }),
            er(this, '_alertMLSFailureDebouced', s()(this._alertMLSFailure, 100)),
            er(this, '_handleNetworkOnline', () => {
                this.expeditedHeartbeat(5000, 'network detected online.');
            }),
            er(this, '_handleNetworkOffline', () => {
                this.expeditedHeartbeat(15000, 'network detected offline.', !1);
            }),
            er(this, '_handleNoRoute', () => {
                var e;
                null === (e = this._socket) || void 0 === e || e.noRoute();
            }),
            er(this, '_handlePowerResume', () => {
                this.expeditedHeartbeat(5000, 'power monitor resumed');
            }),
            er(this, '_handleVoiceQualityPeriodicsStats', () => {
                if (null != this._voiceQuality) {
                    let e = this._voiceQuality.getPeriodicStats();
                    if (this.shouldReportPeriodicStats(e))
                        for (let t of e)
                            j.default.track(
                                et.rMx.VOICE_QUALITY_PERIODIC_STATS,
                                ea(ei({}, this._getAnalyticsProperties()), {
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
            er(this, 'getAudioDeviceStates', () => ({
                input_device: this.getInputDeviceName(),
                input_device_count: Object.keys(w.Z.getInputDevices()).length,
                output_device: this.getOutputDeviceName(),
                output_device_count: Object.keys(w.Z.getOutputDevices()).length
            })),
            er(this, 'getVideoDeviceStates', () => ({
                camera_device: this.getVideoDeviceName(),
                camera_device_count: Object.keys(w.Z.getVideoDevices()).length
            })),
            er(this, '_trackVoiceConnectionConnecting', () => {
                let e = D.Z.getChannel(this.channelId),
                    t = null == e ? void 0 : e.type;
                j.default.track(
                    et.rMx.VOICE_CONNECTION_CONNECTING,
                    ea(ei({}, this.getAudioDeviceStates(), this.getVideoDeviceStates()), {
                        guild_id: this.guildId,
                        channel_id: this.channelId,
                        rtc_connection_id: this.getRTCConnectionId(),
                        hostname: this.hostname,
                        connect_count: this._connectCount,
                        context: this.context,
                        channel_type: t,
                        participant_type: this.getVoiceParticipantType(),
                        is_muted: w.Z.isMute()
                    })
                );
            }),
            er(this, 'incomingVideoEnabledChanged', (e) => {
                var t, n;
                null === (t = this._goLiveQualityManager) || void 0 === t || t.onIncomingVideoEnabled(e), null === (n = this.getOrCreateVideoQuality()) || void 0 === n || n.setOcclusionIncomingVideoEnabled(e);
            }),
            er(this, 'windowVisibilityChanged', (e) => {
                var t;
                null === (t = this.getOrCreateVideoQuality()) || void 0 === t || t.setWindowOcclusionState(!e);
            }),
            (this.context = i),
            (this.logger = new b.Z('RTCConnection('.concat(null !== (l = null != o ? o : n) && void 0 !== l ? l : r, ', ').concat(this.context, ')'))),
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
            (this.state = et.hes.AWAITING_ENDPOINT),
            (this.stateHistory = new W.K(this.state)),
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
        let f = w.Z.supports(en.AN.FIRST_FRAME_CALLBACK) && w.Z.supports(en.AN.REMOTE_USER_MULTI_STREAM);
        if (i === en.Yn.DEFAULT) {
            let t = (null === (c = D.Z.getChannel(this.channelId)) || void 0 === c ? void 0 : c.type) === et.d4z.GUILD_STAGE_VOICE;
            (this._localMediaSinkWantsManager = new K.ZP(e, t, f)),
                this._localMediaSinkWantsManager.on(K.ai.Update, (e) => {
                    if (this.state === et.hes.RTC_CONNECTED && null != this._socket) {
                        var t;
                        this.logger.info('Media sink wants: '.concat(JSON.stringify(e))), this._socket.mediaSinkWants(e), null === (t = this._connection) || void 0 === t || t.setLocalVideoSinkWants(e);
                    }
                }),
                this._localMediaSinkWantsManager.on(K.ai.UserSSRCUpdate, (e, t, n) => {
                    var r;
                    null === (r = this._connection) || void 0 === r || r.createUser(e, t, n);
                });
        } else
            i === en.Yn.STREAM &&
                ((this._goLiveQualityManager = new S.Z(!0)),
                this._goLiveQualityManager.on(S.y.RequestedSSRCsUpdate, (e, t, n) => {
                    var r;
                    null === (r = this._connection) || void 0 === r || r.createUser(e, t, n);
                }),
                this._goLiveQualityManager.on(S.y.RequestedStreamsUpdate, (e) => {
                    if (this.state === et.hes.RTC_CONNECTED && null != this._socket) {
                        var t;
                        this.logger.info('Go Live Media sink wants: '.concat(JSON.stringify(e))), this._socket.mediaSinkWants(e), null === (t = this._connection) || void 0 === t || t.setLocalVideoSinkWants(e);
                    }
                }));
        (this._remoteVideoSinkWants = K.Yy),
            ee.w.on(ee.e.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged),
            ee.w.on(ee.e.WindowVisibilityChanged, this.windowVisibilityChanged),
            x.ZP.shouldRecordNextConnection() ? ((this._recordingEnabled = !0), E.TC(!1)) : (this._recordingEnabled = !1),
            (this._soundshareStats = new z.Z()),
            G.Z.addOnlineCallback(this._handleNetworkOnline),
            G.Z.addOfflineCallback(this._handleNetworkOffline),
            (0, B.isDesktop)() && (this.powerMonitorListener = F.Z.remotePowerMonitor.on('resume', this._handlePowerResume)),
            (this._supportedBandwidthEstimationExperiments = []),
            (this._bandwidthEstimationExperiment = null),
            w.Z.getMediaEngine().getSupportedBandwidthEstimationExperiments((e) => {
                this._supportedBandwidthEstimationExperiments = e;
            });
    }
}
