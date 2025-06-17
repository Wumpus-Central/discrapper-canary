n.d(t, { Z: () => ev }), n(35282), n(415506), n(539854), n(388685), n(49124);
var r = n(654861),
    i = n.n(r),
    a = n(954955),
    o = n.n(a),
    s = n(108131),
    l = n.n(s),
    c = n(772848),
    u = n(261470),
    d = n(47770),
    f = n(46973),
    _ = n(379649),
    p = n(570140),
    h = n(668781),
    m = n(846027),
    g = n(304680),
    E = n(547727),
    b = n(710845),
    y = n(75060),
    O = n(631053),
    v = n(148959),
    I = n(815644),
    T = n(926951),
    S = n(166884),
    A = n(52923),
    N = n(868616),
    C = n(450109),
    R = n(118445),
    P = n(311473),
    w = n(615830),
    D = n(314897),
    L = n(592125),
    x = n(131951),
    k = n(19780),
    M = n(226961),
    j = n(936349),
    U = n(594174),
    G = n(626135),
    B = n(12647),
    V = n(630388),
    F = n(931619),
    Z = n(358085),
    H = n(960048),
    Y = n(591759),
    W = n(579806),
    K = n(859401),
    z = n(437263),
    q = n(423343),
    X = n(685756),
    Q = n(655306),
    J = n(583794),
    $ = n(179654),
    ee = n(36902),
    et = n(824096),
    en = n(53114),
    er = n(174532),
    ei = n(895066),
    ea = n(798681),
    eo = n(981631),
    es = n(65154);
function el(e, t, n) {
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
function ec(e) {
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
                el(e, t, n[t]);
            });
    }
    return e;
}
function eu(e, t) {
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
function ed(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eu(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ef = /^https/.test('https:') ? 'wss:' : 'ws:',
    e_ = 200,
    ep = 20,
    eh = 500,
    em = 250,
    eg = 10,
    eE = 5,
    eb = '1',
    ey = 0;
function eO(e) {
    return e;
}
class ev extends d.Z {
    get quality() {
        let e = this.getLastPing();
        return this.state !== eo.hes.RTC_CONNECTED || void 0 === e ? eo.IE4.UNKNOWN : e > eh || (null != this._outboundLossRate && this._outboundLossRate > eg) ? eo.IE4.BAD : e > em || (null != this._outboundLossRate && this._outboundLossRate > eE) ? eo.IE4.AVERAGE : eo.IE4.FINE;
    }
    get endpoint() {
        return this._endpoint;
    }
    set endpoint(e) {
        if (null == e) (this._endpoint = null), (this.hostname = null);
        else {
            var t;
            e = ''.concat(ef, '//').concat(e);
            let { hostname: n, port: r } = null != (t = Y.Z.toURLSafe(e)) ? t : {},
                i = null != r ? parseInt(r) : NaN;
            null != n && (80 === i || 443 === i) && (e = ''.concat(ef, '//').concat(n)), (this._endpoint = e + '/'), (this.hostname = n);
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
                    ((this._rtcConnectionId = (0, c.Z)()),
                    p.Z.dispatch({
                        type: 'RTC_CONNECTION_UPDATE_ID',
                        connection: this
                    }))),
            null == this.endpoint)
        )
            return void this.setState(eo.hes.AWAITING_ENDPOINT);
        let i = this._socket;
        null != i && this._cleanupSocket(), (i = this._socket = new X.Z(this.endpoint, this.context)).on(X.V.Connecting, this._handleConnecting.bind(this, i)), i.on(X.V.Connect, this._handleConnect.bind(this, i)), i.on(X.V.Disconnect, this._handleDisconnect.bind(this, i)), i.on(X.V.Resuming, this._handleResuming.bind(this, i)), i.on(X.V.Ready, this._handleReady.bind(this, i)), i.on(X.V.Speaking, this._handleSpeaking.bind(this, i)), i.on(X.V.Video, this._handleVideo.bind(this, i)), i.on(X.V.Ping, this._handleControlPing.bind(this)), i.on(X.V.ClientDisconnect, this._handleClientDisconnect.bind(this)), i.on(X.V.ClientConnect, this._handleClientConnect.bind(this)), i.on(X.V.Codecs, this._handleCodecs.bind(this)), i.on(X.V.MediaSessionId, this._handleMediaSessionId.bind(this)), i.on(X.V.MediaSinkWants, this._handleMediaSinkWants.bind(this)), i.on(X.V.VoiceBackendVersion, this._handleCodeVersion.bind(this)), i.on(X.V.KeyframeInterval, this._handleKeyframeInterval.bind(this)), i.on(X.V.Flags, this.handleFlags.bind(this)), i.on(X.V.Platform, this.handlePlatform.bind(this)), i.on(X.V.BandwidthEstimationExperiment, this._handleBandwidthEstimationExperiment.bind(this)), i.on(X.V.SecureFramesInit, this._handleSecureFramesInit.bind(this)), i.on(X.V.SecureFramesPrepareTransition, this._handleSecureFramesPrepareTransition.bind(this)), i.on(X.V.SecureFramesPrepareEpoch, this._handleSecureFramesPrepareEpoch.bind(this)), i.on(X.V.SecureFramesExecuteTransition, this._handleSecureFramesExecuteTransition.bind(this)), i.on(X.V.MLSExternalSenderPackage, this._handleMLSExternalSenderPackage.bind(this)), i.on(X.V.MLSProposals, this._handleMLSProposals.bind(this, i)), i.on(X.V.MLSPrepareCommitTransition, this._handleMLSPrepareCommitTransition.bind(this)), i.on(X.V.MLSWelcome, this._handleMLSWelcome.bind(this)), (this._connectStartTime = (0, _.zO)()), this._connectCount++, (this._connecting = !0), null != i && this._socket === i && (this._trackVoiceConnectionConnecting(), (this._encountered_socket_failure = !1), i.connect());
    }
    destroy() {
        var e, t, n, r, i, a, o;
        if ((this.logger.info('Destroy RTCConnection'), F.Z.removeOnlineCallback(this._handleNetworkOnline), F.Z.removeOfflineCallback(this._handleNetworkOffline), (0, Z.isDesktop)() && (null == (a = (o = this).powerMonitorListener) || a.call(o)), ea.w.off(ea.e.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged), ea.w.off(ea.e.WindowVisibilityChanged, this.windowVisibilityChanged), this._backoff.cancel(), this._cleanupSocket(), null == (e = this._voiceQuality) || e.stop(), (this._voiceQuality = null), clearInterval(this._voiceQualityPeriodicStatsInterval), (this._voiceQualityPeriodicStatsInterval = null), (this._voiceQualityPeriodicStatsSequenceId = 0), null == (t = this._systemResponsiveness) || t.stop(), (this._systemResponsiveness = null), (this._noiseCancellationError = 0), null == (n = this._voiceDuration) || n.stop(), (this._voiceDuration = null), null == (r = this._videoQuality) || r.stop(), (this._videoQuality = null), (this._videoHealthManager = null), (this._secureFramesState = null), null == (i = this._localMediaSinkWantsManager) || i.reset(), null != this._connection)) {
            let e = this._connection;
            (this._connection = null), e.destroy();
        }
        this.removeAllListeners(), (this._destroyed = !0);
    }
    shouldSendSpeaking(e, t) {
        if ((0, Z.isWeb)()) return !0;
        let n = (0, V.yE)(e, es.Dg.PRIORITY),
            r = (0, V.yE)(this._lastSentSpeakingStatus, es.Dg.PRIORITY);
        return (this._lastSentSSRC !== t || n !== r) && (void 0 !== this._lastSentSSRC || e !== es.Dg.NONE) && (this._lastSentSSRC === t || e !== es.Dg.NONE) && ((this._lastSentSpeakingStatus = e), (this._lastSentSSRC = t), !0);
    }
    sendSpeaking(e, t) {
        let n = this._socket;
        if (null == n || !this.shouldSendSpeaking(e, t)) return;
        let r = x.Z.getPacketDelay();
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
        let e = this._pings.slice(0, Math.min(this._pings.length, ep));
        return 0 === e.length || null == this._socket ? 0 : e.reduce((e, t) => e + t.value, 0) / e.length;
    }
    getLastPing() {
        var e;
        return null == (e = this._pings[this._pings.length - 1]) ? void 0 : e.value;
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
    getMediaEngineConnectionId() {
        return this._mediaEngineConnectionId;
    }
    getVoiceVersion() {
        return this.voiceVersion;
    }
    getRtcWorkerVersion() {
        return this.rtcWorkerVersion;
    }
    getDuration() {
        let e = this._connectCompletedTime > 0 ? (0, _.zO)() - this._connectCompletedTime : 0;
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
        return null == (e = this._voiceQuality) ? void 0 : e.getPacketStats();
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
        if (null == n) return void this.logger.error('pauseStatsCollectionForUser: Unable to create videoQuality.');
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
                z.z.State,
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
        null == (t = this._localMediaSinkWantsManager) || t.setSelectedParticipant(e);
    }
    setPipOpen(e) {
        var t;
        null == (t = this._localMediaSinkWantsManager) || t.setPipOpen(e);
    }
    setClipRecordUser(e, t, n) {
        var r, i;
        null == (i = this._connection) || null == (r = i.setClipRecordUser) || r.call(i, e, t, n);
    }
    setNoiseCancellationEnabled(e) {
        var t;
        this._numNoiseCancellationChanges++, null == (t = this._voiceDuration) || t.setNoiseCancellationEnabled(e);
    }
    setSimulcastDebugOverride(e, t, n) {
        var r, i;
        t === this.context && (t === es.Yn.DEFAULT ? null == (r = this._localMediaSinkWantsManager) || r.setSimulcastDebugOverride(e, n) : null == (i = this._goLiveQualityManager) || i.setSimulcastDebugOverride(n));
    }
    setVideoSize(e, t, n) {
        var r, i;
        null == (r = this._localMediaSinkWantsManager) || r.setVideoSize(e, t * n), null == (i = this._goLiveQualityManager) || i.setVideoSize(e, t, n);
    }
    set channelId(e) {
        let t = L.Z.getChannel(this.channelId),
            n = null == t ? void 0 : t.type;
        this.logger.info('Updating channel: '.concat(e, '(').concat(n, ')')), (this._channelId = e), this.channelIds.add(e);
    }
    get channelId() {
        return this._channelId;
    }
    get trueChannelId() {
        return null != this.rtcServerId ? i()(this.rtcServerId).prev().toString() : this.channelId;
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
        if ((x.Z.supports(es.AN.FIXED_KEYFRAME_INTERVAL) && t.push('fixed_keyframe_interval'), 0 !== this._supportedBandwidthEstimationExperiments.length)) {
            let e = S.Z.workerExperimentString();
            null != e && t.push(e);
        }
        this.context === es.Yn.DEFAULT && (0, I.f)('RtcConnection').enabled && t.push('audio_transport_cc'), A.Z.getCurrentConfig({ location: '_chooseExperiments' }, { autoTrackExposure: !0 }).enabled && t.push('keyframe_on_join'), R.Z.getCurrentConfig({ location: '_chooseExperiments' }, { autoTrackExposure: !0 }).enabled && t.push('network_aware_socket'), (this._selectedExperiments = t);
    }
    _handleConnecting(e) {
        if (null != this.endpoint) {
            let e = L.Z.getChannel(this.channelId),
                t = null == e ? void 0 : e.type;
            this.logger.info('Connecting to RTC server '.concat(this.endpoint, ', rtc-connection-id: ').concat(this.getRTCConnectionId(), ', channel: ').concat(this.channelId, '(').concat(t, ')'));
        }
        this.setState(eo.hes.CONNECTING);
    }
    _handleConnect(e) {
        var t, n;
        let r = this.token;
        if (null == r) throw Error('RTCConnection._handleConnect(...): Token is missing.');
        this.logger.info('Connected to RTC server.'),
            e.identify({
                serverId: null != (n = null != (t = this.rtcServerId) ? t : this.guildId) ? n : this.channelId,
                userId: this.userId,
                sessionId: this.sessionId,
                token: r,
                maxDaveProtocolVersion: x.Z.getSupportedSecureFramesProtocolVersion(),
                video: x.Z.supports(es.AN.VIDEO),
                streamParameters: x.Z.getVideoStreamParameters(this.context)
            }),
            this.setState(eo.hes.AUTHENTICATING);
    }
    _handleDisconnect(e, t, n, r) {
        var i, a, o, s, l, c, u, d, f, _, p, h, m, g, E, b, y, v, I, T, S;
        this.logger.info('Disconnected from RTC server, clean: '.concat(t, ', code: ').concat(n, ', reason: ').concat(r, ', state: ').concat(this.state)),
            t ||
                !this._connecting ||
                this._encountered_socket_failure ||
                (G.default.track(
                    eo.rMx.VOICE_CONNECTION_SOCKET_FAILURE,
                    ed(ec({}, this._getAnalyticsProperties()), {
                        hostname: this.hostname,
                        connect_count: this._connectCount,
                        code: n,
                        reason: r
                    })
                ),
                (this._encountered_socket_failure = !0)),
            k.Z.getRemoteDisconnectVoiceChannelId() === this.channelId && (null == (l = this._connection) || l.wasRemoteDisconnected());
        let A = 'Force Close' !== r;
        if (A) {
            let e = this._backoff.fail(this.reconnect);
            this.logger.warn('Disconnect was not clean! reason='.concat(r, '. Reconnecting in ').concat((e / 1000).toFixed(2), ' seconds.'));
        }
        if (this.state !== eo.hes.DISCONNECTED) {
            let e = this._videoQuality;
            if (null != e && this.context === es.Yn.DEFAULT) {
                if ((e.stop(), this._sentVideo)) {
                    e.getOutboundStats().forEach((t) => {
                        var n;
                        (null != (n = t.num_frames) ? n : 0) > 0 &&
                            G.default.track(
                                eo.rMx.VIDEO_STREAM_ENDED,
                                ed(
                                    ec(
                                        ed(ec({}, this._getAnalyticsProperties()), {
                                            app_hardware_acceleration_enabled: B.Z.getAppHardwareAccelerationEnabled(),
                                            media_session_id: this.getMediaSessionId(),
                                            sender_user_id: this.userId,
                                            reason: r,
                                            participant_type: 'sender',
                                            guild_region: j.Z.getRegion(this.hostname),
                                            hostname: this.hostname,
                                            hardware_enabled: x.Z.getHardwareEncoding()
                                        }),
                                        t,
                                        e.getNetworkStats(),
                                        e.getCodecUsageStats('sender', this.userId),
                                        this._soundshareStats.getStats()
                                    ),
                                    { device_performance_class: (0, O.Z)() }
                                )
                            );
                    });
                    let t = e.getCameraDurationStats();
                    null != t && t.camera_enabled_duration > 0 && G.default.track(eo.rMx.VIDEO_CALL_ENDED, ed(ec({}, t), { media_session_id: this.getMediaSessionId() }));
                }
                e.getInboundParticipants().forEach((t) => {
                    var n;
                    let i = e.getInboundStats(t);
                    (null != (n = null == i ? void 0 : i.num_frames) ? n : 0) > 0 &&
                        G.default.track(
                            eo.rMx.VIDEO_STREAM_ENDED,
                            ec(
                                ed(ec({}, this._getAnalyticsProperties()), {
                                    app_hardware_acceleration_enabled: B.Z.getAppHardwareAccelerationEnabled(),
                                    media_session_id: this.getMediaSessionId(),
                                    sender_user_id: t,
                                    reason: r,
                                    participant_type: 'receiver',
                                    guild_region: j.Z.getRegion(this.hostname),
                                    hostname: this.hostname,
                                    hardware_enabled: x.Z.getHardwareEncoding()
                                }),
                                i,
                                e.getNetworkStats(),
                                e.getCodecUsageStats('receiver', t)
                            )
                        );
                });
            }
            let t = this.getMediaSessionId();
            x.Z.getMediaEngine()
                .getCodecSurvey()
                .then((e) => {
                    let n = JSON.parse(e);
                    if (null == n || null == n.available_video_encoders || null == n.available_video_decoders) throw Error('codec survey is not available');
                    G.default.track(
                        eo.rMx.VOICE_CODEC_DETECTED,
                        ed(ec({}, n), {
                            rtc_connection_id: this.getRTCConnectionId(),
                            media_session_id: t
                        })
                    );
                })
                .catch((e) => {
                    this.logger.warn(e);
                }),
                this._trackMLSFailures();
            let n = j.Z.shouldIncludePreferredRegion() ? j.Z.getPreferredRegion() : null,
                i = x.Z.getSettings(),
                a = L.Z.getChannel(this.channelId),
                o = null == (u = C.Z.getConnectionStats(this.getMediaEngineConnectionId())) || null == (c = u.stats.rtp.outbound.find((e) => 'audio' === e.type)) ? void 0 : c.sampleRateMismatchPercent,
                s = ed(
                    ec(
                        ed(ec({}, this._getAnalyticsProperties()), {
                            hostname: this.hostname,
                            port: this.port,
                            protocol: this.protocol,
                            reconnect: A,
                            reason: r,
                            duration: this.getDuration()
                        }),
                        null == (d = this._voiceQuality) ? void 0 : d.getMosStats(),
                        null == (f = this._voiceQuality) ? void 0 : f.getPacketStats(),
                        null == (_ = this._voiceQuality) ? void 0 : _.getBytesStats(),
                        null == (p = this._voiceQuality) ? void 0 : p.getBufferStats(),
                        null == (h = this._voiceQuality) ? void 0 : h.getNetworkStats(),
                        null == (m = this._voiceQuality) ? void 0 : m.getSystemResourceStats(),
                        null == (g = this._voiceQuality) ? void 0 : g.getFrameOpStats(),
                        null == (E = this._voiceQuality) ? void 0 : E.getDurationStats(),
                        null == (b = this._voiceQuality) ? void 0 : b.getTransportStats(),
                        null == (y = this._voiceQuality) ? void 0 : y.getE2EEStats(),
                        null == (v = this._voiceQuality) ? void 0 : v.getAudioDeviceStats(),
                        null == (I = this._voiceDuration) ? void 0 : I.getDurationStats(),
                        this.getAudioDeviceStates(),
                        null == (T = this._systemResponsiveness) ? void 0 : T.getPttQueueLatencyStats()
                    ),
                    {
                        num_noise_cancellation_changes: this._numNoiseCancellationChanges,
                        media_session_id: this.getMediaSessionId(),
                        channel_bitrate: null != a ? a.bitrate : null,
                        cloudflare_best_region: n,
                        connect_count: this._connectCount,
                        ping_average: Math.round(this.getAveragePing()),
                        ping_bad_count: this._pingBadCount,
                        ping_timeout: this._pingTimeouts.length,
                        input_detected: this._inputDetected,
                        no_input_detected_notice: x.Z.getNoInputDetectedNotice(),
                        audio_input_mode: i.mode,
                        automatic_audio_input_sensitivity_enabled: i.modeOptions.autoThreshold,
                        audio_input_sensitivity: i.modeOptions.threshold,
                        echo_cancellation_enabled: i.echoCancellation,
                        sidechain_compression_enabled: i.sidechainCompression,
                        noise_suppression_enabled: i.noiseSuppression,
                        noise_cancellation_enabled: i.noiseCancellation,
                        noise_canceller_error: this._noiseCancellationError,
                        automatic_gain_control_enabled: i.automaticGainControl,
                        voice_output_volume: i.outputVolume,
                        encryption_mode: this._encryptionMode,
                        channel_count: this.channelIds.size,
                        device_performance_class: (0, O.Z)(),
                        num_fast_udp_reconnects: null != this._connection ? (null == (S = this._connection) ? void 0 : S.getNumFastUdpReconnects()) : null,
                        parent_media_session_id: this.parentMediaSessionId,
                        audio_subsystem: x.Z.getMediaEngine().getAudioSubsystem(),
                        audio_layer: x.Z.getMediaEngine().getAudioLayer(),
                        automatic_audio_subsystem: i.automaticAudioSubsystem,
                        participant_type: this.getVoiceParticipantType(),
                        audio_capture_sample_rate_mismatch_percent: o,
                        krisp_sdk_version: x.Z.getState().krispVersion,
                        secure_frames_max_concurrent_transitions: this._secureFramesMaxConcurrentTransitions,
                        secure_frames_transition_prepare_count: this._secureFramesTransitionPrepareCount,
                        secure_frames_transition_execute_count: this._secureFramesTransitionExecuteCount,
                        vad_use_advanced_voice_activity: i.modeOptions.vadUseKrisp
                    }
                );
            Promise.all([
                (async () => {
                    var e, t;
                    return null != (t = await (null == (e = this._systemResources) ? void 0 : e.getBatteryLevelStats())) ? t : { batteryUsageRounded: null };
                })(),
                P.Z.getKrispModel()
            ]).then((e) => {
                let [{ batteryUsageRounded: t }, n] = e;
                G.default.track(
                    eo.rMx.VOICE_DISCONNECT,
                    ed(ec({}, s), {
                        battery_usage: t,
                        krisp_nc_model: n
                    })
                );
            }),
                this._trackRemainingSecureFrameTransitions();
        }
        if (((this._pingTimeouts = []), (this._pings = []), (this._connectCompletedTime = 0), (this._pingBadCount = 0), (this._inputDetected = !1), (this._mediaSessionId = null), null == (i = this._voiceQuality) || i.stop(), (this._voiceQuality = null), clearInterval(this._voiceQualityPeriodicStatsInterval), (this._voiceQualityPeriodicStatsInterval = null), (this._voiceQualityPeriodicStatsSequenceId = 0), (this._noiseCancellationError = 0), (this._numNoiseCancellationChanges = 0), null == (a = this._voiceDuration) || a.stop(), (this._voiceDuration = null), null == (o = this._videoQuality) || o.stop(), (this._videoQuality = null), (this._videoHealthManager = null), null == (s = this._localMediaSinkWantsManager) || s.reset(), (this._secureFramesState = null), (this._userIds = new Set([this.userId])), this._secureFramesRosterMap.clear(), this._secureFramesTransitionStates.clear(), (this._secureFramesNextTransitionState = void 0), (this._secureFramesMaxConcurrentTransitions = 0), (this._secureFramesTransitionPrepareCount = 0), (this._secureFramesTransitionExecuteCount = 0), null != this._connection)) {
            let e = this._connection;
            (this._connection = null), e.destroy();
        }
        this.setState(eo.hes.DISCONNECTED, { willReconnect: A });
    }
    _handleResuming(e) {
        var t, n;
        null == (t = this._connection) || t.fastUdpReconnect(), null == (n = this._connection) || n.clearAllSpeaking();
    }
    _handleReady(e, t, n, r, i, a, o) {
        var s;
        this.setState(eo.hes.RTC_CONNECTING),
            (this.port = n),
            this._chooseExperiments(null != o ? o : []),
            0 === a.length &&
                a.push({
                    type: es.Tr.VIDEO,
                    rid: '100',
                    ssrc: i + 1,
                    rtxSsrc: i + 2,
                    quality: 100,
                    active: !1
                });
        let l = x.Z.getMediaEngine(),
            c = w.Z.getPersistentCodesEnabled(),
            u = null != (s = D.default.getStaticAuthSessionId()) ? s : void 0,
            d = l.connect(
                this.context,
                this.userId,
                ec(
                    {
                        ssrc: i,
                        address: t,
                        port: n,
                        modes: r,
                        experiments: this._selectedExperiments,
                        streamParameters: a,
                        qosEnabled: x.Z.getQoS(),
                        signingKeyId: c ? u : void 0
                    },
                    this._getExtraConnectionOptions()
                )
            );
        d.setUseElectronVideo(l.supports(es.AN.ELECTRON_VIDEO)), x.Z.supports(es.AN.IMAGE_QUALITY_MEASUREMENT) && d.setVideoQualityMeasurement('imageQualityWebrtcPsnrDb:5000,imageQualityVmaf_v061:5000,hwdec');
        let p = ['unk'];
        this.context === es.Yn.STREAM && (p.push('nvRelaxRc=250'), p.push('nvNewPresets')),
            d.setVideoEncoderExperiments(p.join(',')),
            d.on(f.Sh.Speaking, (e, t, n) => {
                this.userId === e && this.sendSpeaking(t, n), this.emit(z.z.Speaking, eO(e), t);
            }),
            d.on(f.Sh.ToggleMuteFromNative, () => {
                this.context === es.Yn.DEFAULT && m.Z.toggleSelfMute({ playSoundEffect: !1 });
            }),
            d.on(f.Sh.NativeMuteChanged, (e) => {
                this.context === es.Yn.DEFAULT && E.Z.nativeMuteChanged(e);
            }),
            d.on(f.Sh.Video, (e, t, n, r, i, a) => {
                this._handleVideoStreamId({
                    userId: eO(e),
                    streamId: t,
                    audioSsrc: n,
                    videoSsrc: null != r ? r : 0,
                    rtxSsrc: i,
                    videoStreamParameters: a
                }),
                    this.userId === e &&
                        (this.sendVideo(null != n ? n : 0, null != r ? r : 0, null != i ? i : 0, a),
                        null == a ||
                            a.forEach((t) => {
                                100 === t.quality && this.emit(z.z.VideoSourceQualityChanged, this.guildId, this.channelId, eO(e), t.maxResolution, t.maxFrameRate, this.context);
                            }));
            }),
            d.on(f.Sh.FirstFrame, (e, t, n) => {
                null != this._localMediaSinkWantsManager && (this._localMediaSinkWantsManager.setFirstFrameReceived(t), this.emit(z.z.Video, this.guildId, this.channelId, eO(e), n, this.rtcServerId)), null != this._goLiveQualityManager && (this._goLiveQualityManager.setFirstFrameReceived(t), this.emit(z.z.Video, this.guildId, this.channelId, eO(e), n, this.rtcServerId));
            }),
            d.on(f.Sh.Silence, (e) => {
                this._inputDetected = this._inputDetected || !e;
            }),
            d.on(f.Sh.Connected, (r, i) => {
                if ((this.logger.info('RTC connected to media server: '.concat(t, ':').concat(n)), e !== this._socket)) return void this.logger.warn('Socket mismatch, disconnecting');
                switch (((this._voiceQuality = new ei.Z(d)), this._voiceQuality.start(), (this._voiceQualityPeriodicStatsSequenceId = 0), (this._voiceQualityPeriodicStatsInterval = setInterval(this._handleVoiceQualityPeriodicsStats, 300000)), (this._systemResponsiveness = new ee.Z(d)), this._systemResponsiveness.start(), (this._systemResources = new $.Z()), this._systemResources.setLastBattery(), (this._noiseCancellationError = 0), (this._voiceDuration = new er.Z(this.userId, d)), this._voiceDuration.start(d.getSelfMute(), d.getVoiceFilterId()), (this.protocol = r), r)) {
                    case 'udp':
                        this.logger.info('Sending UDP info to RTC server.', i, this._selectedExperiments),
                            e.once(X.V.Encryption, (e, t) => {
                                d === this._connection && (d.setEncryption(e, t), (this._encryptionMode = e));
                            }),
                            e.selectProtocol(r, this.getRTCConnectionId(), i, this._selectedExperiments);
                        break;
                    case 'webrtc':
                        this.logger.info('Sending local SDP to RTC server.'), e.once(X.V.SDP, this._handleSDP.bind(this)), e.selectProtocol(r, this.getRTCConnectionId(), i);
                        break;
                    default:
                        this.logger.error('Unable to determine protocol.');
                        return;
                }
                this._backoff.succeed();
            }),
            d.on(f.Sh.VideoEncoderFallback, (t) => {
                let n = t
                    .filter((e) => 'video' === e.type)
                    .map((e) => e.name)
                    .join(',');
                this.logger.info('The originally selected video encoder is not working, fallback to the other available encoders: '.concat(n)), e.updateSession({ codecs: t });
            }),
            d.on(f.Sh.Error, (t) => {
                if (e !== this._socket) return;
                let n = j.Z.shouldIncludePreferredRegion() ? j.Z.getPreferredRegion() : null;
                this.logger.error('Error occurred while connecting to RTC server: '.concat(t)),
                    G.default.track(
                        eo.rMx.VOICE_CONNECTION_FAILURE,
                        ed(ec({}, this._getAnalyticsProperties()), {
                            hostname: this.hostname,
                            port: this.port,
                            protocol: this.protocol,
                            error: t,
                            cloudflare_best_region: n,
                            connect_count: this._connectCount
                        })
                    );
            }),
            d.on(f.Sh.ConnectionStateChange, (t) => {
                if ((this.logger.info('RTC media connection state change: '.concat(this.state, ' => ').concat(t)), e !== this._socket)) return;
                let n = this.state;
                switch (t) {
                    case es.$j.DISCONNECTED:
                        this.setState(eo.hes.RTC_DISCONNECTED);
                        break;
                    case es.$j.CONNECTING:
                        this.setState(eo.hes.RTC_CONNECTING);
                        break;
                    case es.$j.CONNECTED:
                        this.setState(eo.hes.RTC_CONNECTED);
                        break;
                    case es.$j.NO_ROUTE:
                        this.setState(eo.hes.NO_ROUTE);
                        break;
                    case es.$j.ICE_CHECKING:
                        this.setState(eo.hes.ICE_CHECKING);
                        break;
                    case es.$j.DTLS_CONNECTING:
                        this.setState(eo.hes.DTLS_CONNECTING);
                }
                if ((n === eo.hes.RTC_CONNECTING && this.state === eo.hes.RTC_DISCONNECTED ? this.reconnect() : this.state === eo.hes.NO_ROUTE && (0 === this._backoff.fails && this._handleNoRoute(), this._backoff.fail(this.reconnect)), this.state === eo.hes.RTC_CONNECTED)) {
                    var r, i;
                    let e = j.Z.shouldIncludePreferredRegion() ? j.Z.getPreferredRegion() : null;
                    if (this._connecting) {
                        let t = x.Z.getSettings();
                        G.default.track(
                            eo.rMx.VOICE_CONNECTION_SUCCESS,
                            ec(
                                ed(ec({}, this._getAnalyticsProperties()), {
                                    hostname: this.hostname,
                                    port: this.port,
                                    protocol: this.protocol,
                                    cloudflare_best_region: e,
                                    connect_time: (0, _.zO)() - (this._connected ? this._connectStartTime : this._createdTime),
                                    connect_count: this._connectCount,
                                    audio_subsystem: x.Z.getMediaEngine().getAudioSubsystem(),
                                    audio_layer: x.Z.getMediaEngine().getAudioLayer(),
                                    automatic_audio_subsystem: t.automaticAudioSubsystem,
                                    media_session_id: this.getMediaSessionId(),
                                    participant_type: this.getVoiceParticipantType()
                                }),
                                this.stateHistory.getVoiceConnectionSuccessStats()
                            )
                        );
                    }
                    null == (r = this._localMediaSinkWantsManager) || r.setConnection(d), null == (i = this._goLiveQualityManager) || i.update(), (this._connectCompletedTime = (0, _.zO)()), (this._connected = !0), (this._connecting = !1), (this._encountered_socket_failure = !1);
                } else n === eo.hes.RTC_CONNECTED && this.stateHistory.reset(this.state);
            }),
            d.on(f.Sh.SecureFramesUpdate, (e) => {
                (this._secureFramesState = e), this.emit(z.z.SecureFramesUpdate);
            }),
            d.on(f.Sh.Ping, this._handlePing.bind(this)),
            d.on(f.Sh.PingTimeout, this._handlePingTimeout.bind(this)),
            d.on(f.Sh.OutboundLossRate, this._handleOutboundLossRate.bind(this)),
            d.on(f.Sh.SoundshareTrace, this._handleSoundshareTrace.bind(this)),
            d.on(f.Sh.LocalVideoDisabled, this._handleLocalVideoDisabled.bind(this)),
            d.on(f.Sh.Stats, K.Z.create()),
            d.on(f.Sh.RemoteStreamsReady, this._handleRemoteStreamsReady.bind(this)),
            d.on(f.Sh.NoiseCancellationError, (e) => {
                this._noiseCancellationError = e;
            }),
            d.on(f.Sh.MLSFailure, this._handleMLSFailure.bind(this)),
            d.setRemoteVideoSinkWants(this._remoteVideoSinkWants),
            (this._connection = d),
            (this._mediaEngineConnectionId = d.mediaEngineConnectionId);
    }
    _handleSpeaking(e, t, n, r) {
        let i = this._connection;
        if (null != i && this.userId !== t) {
            var a;
            r !== es.Dg.NONE &&
                (i.createUser(t, n),
                p.Z.dispatch({
                    type: 'RTC_CONNECTION_USER_CREATE',
                    userId: t,
                    context: this.context
                })),
                null == (a = this._localMediaSinkWantsManager) || a.setAudioSSRC(t, n);
        }
    }
    handleFlags(e, t) {
        this.emit(z.z.Flags, e, t);
    }
    handlePlatform(e, t) {
        this.emit(z.z.Platform, e, t, this.channelId);
    }
    getOrCreateVideoQuality() {
        if (null != this._connection && null == this._videoQuality) {
            (this._videoQuality = new en.S(this._connection)), this._videoQuality.updateCallUserIdsCount(this._userIds.size), this._videoQuality.start();
            let { featureEnabled: e, windowLength: t, allowedPoorFpsRatio: n, fpsThreshold: r, backoffTimeSec: i } = et.y.defaultConfig;
            if (e) {
                (this._videoHealthManager = new et.y(t, n, r, i)), null != this._localMediaSinkWantsManager && (this._localMediaSinkWantsManager.videoHealthManager = this._videoHealthManager);
                let e = (e, t, n) => {
                    var r, i;
                    (null == (r = this._localMediaSinkWantsManager) ? void 0 : r.shouldReceiveFromUser(e)) && (null == (i = this._videoHealthManager) || i.updateFps(e, t, n));
                };
                this._videoQuality.on(en.d.FpsUpdate, e);
            }
        }
        return this._videoQuality;
    }
    _handleVideoStreamId(e) {
        var t, n, r, i;
        let { userId: a, streamId: o, videoSsrc: s, videoStreamParameters: l } = e;
        if (
            (this.emit(z.z.Video, this.guildId, this.channelId, a, o, this.rtcServerId),
            null != o && null == this.getOrCreateVideoQuality() && this.logger.error('_handleVideoStreamId: Unable to create videoQuality.'),
            null != this._videoQuality &&
                this.userId === a &&
                l.forEach((e) => {
                    var t, n;
                    let r = null != (t = e.ssrc) ? t : 0;
                    r > 0 && !0 === e.active && (null == (n = this._videoQuality) || n.setOutboundSsrc(r));
                }),
            this.userId !== a)
        ) {
            let e = 0 === s && null === o;
            (!e || (e && (null == (t = this._videoQuality) ? void 0 : t.getInboundParticipants().includes(a)))) && (null == (n = this._videoQuality) || n.setInboundUser(a, s), null == (r = this._videoHealthManager) || r.createUser(a));
        }
        null != this._connection && this.userId !== a && (null != this._localMediaSinkWantsManager ? this._localMediaSinkWantsManager.setStreamId(a, o) : null != this._goLiveQualityManager && this._goLiveQualityManager.getUserID() === a && (null == (i = this._goLiveQualityManager) || i.setStreamId(o)));
    }
    _handleLocalVideoDisabled(e, t) {
        if (this.userId !== e) {
            let n = this.getOrCreateVideoQuality();
            if (null == n) return void this.logger.error('_handleLocalVideoDisabled: Unable to create videoQuality.');
            n.setUserVideoDisabled(eO(e), t);
        }
    }
    _handleRemoteStreamsReady(e) {
        let t = (0, _.zO)() - this._connectStartTime;
        G.default.track(
            eo.rMx.VOICE_CONNECTION_REMOTE_STREAMS_CREATED,
            ed(ec({}, this._getAnalyticsProperties()), {
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
                    type: es.Tr.VIDEO,
                    rid: e.rid,
                    ssrc: e.ssrc,
                    rtxSsrc: e.rtxSsrc,
                    quality: e.quality,
                    active: r > 0
                }));
                0 === e.length &&
                    e.push({
                        type: es.Tr.VIDEO,
                        rid: '100',
                        ssrc: r,
                        rtxSsrc: r + 1,
                        quality: 100,
                        active: r > 0
                    }),
                    this._localMediaSinkWantsManager.setVideoSSRCs(t, e);
            } else {
                var a, o, s;
                let e = [];
                for (let t of i)
                    null != t.ssrc &&
                        null != t.quality &&
                        e.push({
                            ssrc: t.ssrc,
                            quality: t.quality,
                            active: null == (s = t.active) || s
                        });
                null == (a = this._goLiveQualityManager) || a.setUserID(t), null == (o = this._goLiveQualityManager) || o.updateAudioAndVideoStreamInfo(n, e);
            }
            null == i ||
                i.forEach((e) => {
                    100 === e.quality && this.emit(z.z.VideoSourceQualityChanged, this.guildId, this.channelId, t, e.maxResolution, e.maxFrameRate, this.context);
                });
        }
    }
    _handleControlPing(e) {
        x.Z.supports(es.AN.NATIVE_PING) || this._handlePing(e);
    }
    _handlePing(e) {
        if (void 0 !== e) {
            for (
                this._pings.push({
                    time: Date.now(),
                    value: e
                });
                this._pings.length >= e_;

            )
                this._pings.shift();
            e > eh && this._pingBadCount++, this.emit(z.z.Ping, this._pings, this.quality);
        }
    }
    _handlePingTimeout(e, t) {
        this._pingTimeouts.push(e);
        let n = this._pingTimeouts.length;
        n >= 3 && this._pingTimeouts[n - 1] === this._pingTimeouts[n - 2] + 1 && this._pingTimeouts[n - 2] === this._pingTimeouts[n - 3] + 1 && this._handlePing(t);
    }
    _handleOutboundLossRate(e) {
        (this._outboundLossRate = e), this.emit(z.z.OutboundLossRate, e);
    }
    _handleSoundshareTrace(e) {
        this._soundshareStats.traceEvent(void 0, e);
    }
    _getAnalyticsProperties() {
        let e = L.Z.getChannel(this.channelId),
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
        var t, n, r;
        e.forEach((e) => {
            var t;
            this._userIds.add(e), null == (t = this._connection) || t.createUser(e, 0);
        }),
            this.emit(z.z.ClientConnect, e),
            null == (t = this._videoQuality) || t.updateCallUserIdsCount(this._userIds.size),
            null == (n = this._goLiveQualityManager) || n.updateCallUserIds(this._userIds),
            null == (r = this._localMediaSinkWantsManager) || r.updateCallUserIds(this._userIds);
    }
    _handleClientDisconnect(e) {
        var t, n, r, i, a, o;
        let s = this._videoQuality;
        if (null != s && this.context === es.Yn.DEFAULT) {
            let t = s.getInboundStats(e),
                n = null != (a = null == t ? void 0 : t.num_frames) ? a : 0;
            null != t &&
                n > 0 &&
                (G.default.track(
                    eo.rMx.VIDEO_STREAM_ENDED,
                    ec(
                        ed(ec({}, this._getAnalyticsProperties()), {
                            app_hardware_acceleration_enabled: B.Z.getAppHardwareAccelerationEnabled(),
                            media_session_id: this.getMediaSessionId(),
                            sender_user_id: e,
                            reason: 'User disconnected',
                            participant_type: 'receiver',
                            guild_region: j.Z.getRegion(this.hostname),
                            hostname: this.hostname,
                            hardware_enabled: x.Z.getHardwareEncoding()
                        }),
                        t,
                        s.getNetworkStats(),
                        s.getCodecUsageStats('receiver', e)
                    )
                ),
                s.destroyUser(e),
                null == (o = this._videoHealthManager) || o.deleteUser(e));
        }
        let l = this._connection;
        null != l && l.destroyUser(e), null == (t = this._localMediaSinkWantsManager) || t.destroyUser(e), this._userIds.delete(e), this.emit(z.z.ClientDisconnect, e), null == (n = this._goLiveQualityManager) || n.updateCallUserIds(this._userIds), null == (r = this._localMediaSinkWantsManager) || r.updateCallUserIds(this._userIds), null == (i = this._videoQuality) || i.updateCallUserIdsCount(this._userIds.size);
    }
    _handleCodecs(e, t) {
        let n = this._connection;
        null != n && null != this.protocol ? n.setCodecs(null != e && '' !== e ? e : es.ad.OPUS, null != t && '' !== t ? t : es.ad.H264, this.context) : this.logger.warn('Cannot set codecs on connection with protocol:', this.protocol);
    }
    _handleSDP(e) {
        let t = this._connection;
        null != t && null != this.protocol ? t.setSDP(e) : this.logger.warn('Cannot set SDP on connection with protocol:', this.protocol);
    }
    _handleMediaSessionId(e) {
        (this._mediaSessionId = e), this.logger.info('Setting media-session-id: '.concat(e, ' for rtc-connection-id: ').concat(this.getRTCConnectionId()));
        let t = y.Z.getRawThermalState();
        G.default.track(
            eo.rMx.MEDIA_SESSION_JOINED,
            ed(ec({}, this._getAnalyticsProperties()), {
                media_session_id: this.getMediaSessionId(),
                parent_media_session_id: this.parentMediaSessionId,
                raw_thermal_state: t
            })
        ),
            p.Z.dispatch({
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
            null == (n = this._connection) || n.setBandwidthEstimationExperiments(t);
        }
    }
    _trackSecureFrameTransition(e) {
        var t;
        let n = null != (t = this._secureFramesTransitionStates.get(e)) ? t : {},
            r = this._secureFramesTransitionStates.size;
        this._secureFramesTransitionStates.delete(e);
        let i = (e, t) => (null != e && null != t ? e - t : void 0);
        G.default.track(
            eo.rMx.SECURE_FRAMES_TRANSITION,
            ed(ec({}, this._getAnalyticsProperties()), {
                media_session_id: this.getMediaSessionId(),
                parent_media_session_id: this.parentMediaSessionId,
                sender_user_id: this.userId,
                transition_id: e,
                protocol_version: n.protocolVersion,
                start_to_init_duration: i(n.initReceivedTime, this._connectStartTime),
                init_duration: i(n.initFinishedTime, n.initReceivedTime),
                first_proposals_duration: i(n.firstProposalsFinishedTime, n.firstProposalsReceivedTime),
                last_proposals_duration: i(n.lastProposalsFinishedTime, n.lastProposalsReceivedTime),
                duration_between_proposals: i(n.lastProposalsReceivedTime, n.firstProposalsReceivedTime),
                total_proposals_size: n.totalProposalsSize,
                total_commit_welcome_size: n.totalCommitWelcomeSize,
                welcome_duration: i(n.welcomeFinishedTime, n.welcomeReceivedTime),
                welcome_size: n.welcomeSize,
                welcome_error: n.welcomeError,
                welcome_wait_duration: i(n.welcomeReceivedTime, n.lastProposalsFinishedTime),
                commit_duration: i(n.commitFinishedTime, n.commitReceivedTime),
                commit_size: n.commitSize,
                commit_error: n.commitError,
                commit_wait_duration: i(n.commitReceivedTime, n.lastProposalsFinishedTime),
                prepare_duration: i(n.prepareFinishedTime, n.prepareReceivedTime),
                prepare_wait_duration: i(n.prepareReceivedTime, n.lastProposalsFinishedTime),
                execute_duration: i(n.executeFinishedTime, n.executeReceivedTime),
                execute_wait_duration: i(n.executeReceivedTime, n.readyTime),
                execute_error: n.executeError,
                incomplete: n.incomplete,
                active_transition_count: r
            })
        );
    }
    _trackRemainingSecureFrameTransitions() {
        this._secureFramesTransitionStates.forEach((e, t) => {
            (e.incomplete = !0), this._trackSecureFrameTransition(t);
        });
    }
    _storeSecureFrameTransitionData(e, t) {
        let n = this._secureFramesTransitionStates.get(e);
        if (null == n) {
            var r;
            (n = null != (r = this._secureFramesNextTransitionState) ? r : {}), (this._secureFramesNextTransitionState = void 0);
        }
        this._secureFramesTransitionStates.set(e, ec({}, n, t)), (this._secureFramesMaxConcurrentTransitions = Math.max(this._secureFramesMaxConcurrentTransitions, this._secureFramesTransitionStates.size));
    }
    _handleSecureFramesInit(e) {
        var t, n;
        let r = (0, _.zO)();
        e > 0
            ? (this.logger.info('DAVE protocol init with protocol version: '.concat(e)), null == (t = this._connection) || t.prepareSecureFramesEpoch(eb, e, this.trueChannelId), this._sendMLSKeyPackage())
            : null == (n = this._connection) ||
              n.prepareSecureFramesTransition(ey, e, () => {
                  let t = (0, _.zO)(),
                      n = !1;
                  try {
                      var i;
                      null == (i = this._connection) || i.executeSecureFramesTransition(ey);
                  } catch (e) {
                      (n = !0), H.Z.captureException(e);
                  }
                  e > 0 &&
                      (this._storeSecureFrameTransitionData(ey, {
                          initReceivedTime: r,
                          initFinishedTime: t,
                          protocolVersion: e,
                          executeFinishedTime: (0, _.zO)(),
                          executeError: n
                      }),
                      this._trackSecureFrameTransition(ey));
              });
    }
    _handleSecureFramesRosterChange(e) {
        let t = [];
        Object.entries(e).forEach((e) => {
            let [n, r] = e;
            t.push(eO(n)), null == r || 0 === r.byteLength ? this._secureFramesRosterMap.delete(eO(n)) : this._secureFramesRosterMap.set(eO(n), r);
        }),
            this.emit(z.z.RosterMapUpdate, t);
    }
    _handleSecureFramesPrepareTransition(e, t) {
        var n;
        this.logger.info('Preparing DAVE protocol transition: '.concat(e, ', protocol version: ').concat(t)), this._secureFramesTransitionPrepareCount++;
        let r = (0, _.zO)();
        null == (n = this._connection) ||
            n.prepareSecureFramesTransition(e, t, () => {
                this._maybeSendSecureFramesTransitionReady(e),
                    this._storeSecureFrameTransitionData(e, {
                        protocolVersion: t,
                        prepareReceivedTime: r,
                        prepareFinishedTime: (0, _.zO)()
                    });
            });
    }
    _handleSecureFramesPrepareEpoch(e, t) {
        var n;
        this.logger.info('Preparing DAVE protocol epoch: '.concat(e, ', protocol version: ').concat(t));
        let r = e.toString();
        null == (n = this._connection) || n.prepareSecureFramesEpoch(r, t, this.trueChannelId), r === eb && this._sendMLSKeyPackage();
    }
    _sendMLSKeyPackage() {
        var e;
        null == (e = this._connection) ||
            e.getMLSKeyPackage((e) => {
                var t;
                this.logger.info('Got MLS key package, sending to RTC server'), null == (t = this._socket) || t.sendMLSKeyPackage(e);
            });
    }
    _maybeSendSecureFramesTransitionReady(e) {
        if (e !== ey) {
            var t;
            this.logger.info('Sending DAVE protocol ready for transition ID '.concat(e)), null == (t = this._socket) || t.secureFramesReadyForTransition(e), this._storeSecureFrameTransitionData(e, { readyTime: (0, _.zO)() });
        }
    }
    _handleSecureFramesExecuteTransition(e) {
        this.logger.info('Executing DAVE protocol transition: '.concat(e)), this._secureFramesTransitionExecuteCount++;
        let t = (0, _.zO)(),
            n = !1;
        try {
            var r;
            null == (r = this._connection) || r.executeSecureFramesTransition(e);
        } catch (e) {
            (n = !0), H.Z.captureException(e);
        }
        this._storeSecureFrameTransitionData(e, {
            executeReceivedTime: t,
            executeFinishedTime: (0, _.zO)(),
            executeError: n
        }),
            this._trackSecureFrameTransition(e);
    }
    _handleMLSExternalSenderPackage(e) {
        var t;
        this.logger.info('Received MLS external sender package'), null == (t = this._connection) || t.updateMLSExternalSender(e);
    }
    _handleMLSProposals(e, t) {
        var n;
        let r = (0, _.zO)();
        this.logger.info('Received MLS proposals'),
            null == (n = this._connection) ||
                n.processMLSProposals(t, (n) => {
                    var i, a;
                    let o = (0, _.zO)();
                    this.logger.info('Sending MLS commit welcome message'),
                        e.sendMLSCommitWelcome(n),
                        null == this._secureFramesNextTransitionState &&
                            (this._secureFramesNextTransitionState = {
                                firstProposalsReceivedTime: r,
                                firstProposalsFinishedTime: o
                            }),
                        (this._secureFramesNextTransitionState.lastProposalsReceivedTime = r),
                        (this._secureFramesNextTransitionState.lastProposalsFinishedTime = o),
                        (this._secureFramesNextTransitionState.totalProposalsSize = (null != (i = this._secureFramesNextTransitionState.totalProposalsSize) ? i : 0) + t.byteLength),
                        (this._secureFramesNextTransitionState.totalCommitWelcomeSize = (null != (a = this._secureFramesNextTransitionState.totalCommitWelcomeSize) ? a : 0) + n.byteLength);
                });
    }
    _handleMLSPrepareCommitTransition(e, t) {
        var n;
        this.logger.info('Received MLS commit for transition ID '.concat(e));
        let r = (0, _.zO)();
        null == (n = this._connection) ||
            n.prepareMLSCommitTransition(e, t, (n, i, a) => {
                n ? (this._handleSecureFramesRosterChange(a), this._maybeSendSecureFramesTransitionReady(e), this._recoverMLSFailures()) : (this.logger.warn('Failed to process MLS commit for transition ID '.concat(e)), this._flagMLSInvalidCommitWelcome(e), this._handleSecureFramesInit(i)),
                    this._storeSecureFrameTransitionData(e, {
                        protocolVersion: i,
                        commitReceivedTime: r,
                        commitFinishedTime: (0, _.zO)(),
                        commitSize: t.byteLength,
                        commitError: !n
                    }),
                    e === ey && this._trackSecureFrameTransition(e);
            });
    }
    _handleMLSWelcome(e, t) {
        var n;
        this.logger.info('Received MLS welcome for transition ID '.concat(e));
        let r = (0, _.zO)();
        null == (n = this._connection) ||
            n.processMLSWelcome(e, t, (n, i, a) => {
                n ? (this._handleSecureFramesRosterChange(a), this._maybeSendSecureFramesTransitionReady(e), this._recoverMLSFailures()) : (this._flagMLSInvalidCommitWelcome(e), this._sendMLSKeyPackage()),
                    this._storeSecureFrameTransitionData(e, {
                        protocolVersion: i,
                        welcomeReceivedTime: r,
                        welcomeFinishedTime: (0, _.zO)(),
                        welcomeSize: t.byteLength,
                        welcomeError: !n
                    }),
                    e === ey && this._trackSecureFrameTransition(e);
            });
    }
    getMLSPairwiseFingerprint(e, t, n) {
        var r;
        null == (r = this._connection) || r.getMLSPairwiseFingerprint(e, t, n);
    }
    _flagMLSInvalidCommitWelcome(e) {
        var t;
        this.logger.info('Flagging invalid MLS commit/welcome for transition ID '.concat(e)), null == (t = this._socket) || t.flagMLSInvalidCommitWelcome(e);
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
        for (let [n, r, i, a] of e)
            G.default.track(
                eo.rMx.MLS_FAILURES,
                ed(ec({}, this._getAnalyticsProperties()), {
                    media_session_id: t,
                    parent_media_session_id: this.parentMediaSessionId,
                    failure_source: n,
                    failure_reason: r,
                    failure_count: i,
                    failure_was_recovered: a
                })
            );
    }
    _alertMLSFailure(e, t) {
        let n = U.default.getCurrentUser();
        ((null == n ? void 0 : n.isStaff()) || (null == n ? void 0 : n.isStaffPersonal())) &&
            h.Z.show({
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
        return null != t && l().v3(t) % 100 <= 5;
    }
    getInputDeviceName() {
        var e;
        let t = x.Z.getInputDeviceId();
        return null == (e = x.Z.getInputDevices()[t]) ? void 0 : e.name;
    }
    getOutputDeviceName() {
        var e;
        let t = x.Z.getOutputDeviceId();
        return null == (e = x.Z.getOutputDevices()[t]) ? void 0 : e.name;
    }
    getVideoDeviceName() {
        var e;
        let t = x.Z.getVideoDeviceId();
        return null == (e = x.Z.getVideoDevices()[t]) ? void 0 : e.name;
    }
    getGoLiveSource() {
        return x.Z.getGoLiveSource();
    }
    constructor({ userId: e, sessionId: t, guildId: n, channelId: r, context: i = es.Yn.DEFAULT, rtcServerId: a, parentMediaSessionId: s }) {
        var l, d;
        super(),
            el(this, 'context', void 0),
            el(this, 'userId', void 0),
            el(this, 'sessionId', void 0),
            el(this, 'guildId', void 0),
            el(this, 'parentMediaSessionId', void 0),
            el(this, 'hostname', void 0),
            el(this, 'state', void 0),
            el(this, '_videoQuality', void 0),
            el(this, '_soundshareStats', void 0),
            el(this, 'logger', void 0),
            el(this, 'rtcServerId', void 0),
            el(this, '_channelId', void 0),
            el(this, 'channelIds', void 0),
            el(this, '_endpoint', void 0),
            el(this, 'port', void 0),
            el(this, 'token', void 0),
            el(this, 'protocol', void 0),
            el(this, 'voiceVersion', void 0),
            el(this, 'rtcWorkerVersion', void 0),
            el(this, '_socket', void 0),
            el(this, '_backoff', void 0),
            el(this, '_destroyed', void 0),
            el(this, '_pings', void 0),
            el(this, '_pingBadCount', void 0),
            el(this, '_pingTimeouts', void 0),
            el(this, '_mediaSessionId', void 0),
            el(this, '_voiceQuality', void 0),
            el(this, '_voiceQualityPeriodicStatsInterval', void 0),
            el(this, '_voiceQualityPeriodicStatsSequenceId', void 0),
            el(this, '_systemResponsiveness', void 0),
            el(this, '_systemResources', void 0),
            el(this, '_noiseCancellationError', void 0),
            el(this, '_voiceDuration', void 0),
            el(this, '_videoHealthManager', void 0),
            el(this, '_sentVideo', void 0),
            el(this, '_outboundLossRate', void 0),
            el(this, '_recordingEnabled', void 0),
            el(this, '_selectedExperiments', void 0),
            el(this, '_localMediaSinkWantsManager', void 0),
            el(this, '_goLiveQualityManager', void 0),
            el(this, '_remoteVideoSinkWants', void 0),
            el(this, '_connection', void 0),
            el(this, '_mediaEngineConnectionId', void 0),
            el(this, '_createdTime', void 0),
            el(this, '_connectStartTime', void 0),
            el(this, '_connectCompletedTime', void 0),
            el(this, '_rtcConnectionId', void 0),
            el(this, '_connectCount', void 0),
            el(this, '_connected', void 0),
            el(this, '_connecting', void 0),
            el(this, '_encountered_socket_failure', void 0),
            el(this, '_inputDetected', void 0),
            el(this, '_encryptionMode', void 0),
            el(this, 'stateHistory', void 0),
            el(this, '_supportedBandwidthEstimationExperiments', void 0),
            el(this, '_bandwidthEstimationExperiment', void 0),
            el(this, '_secureFramesState', void 0),
            el(this, '_userIds', void 0),
            el(this, '_secureFramesRosterMap', new Map()),
            el(this, '_mlsFailuresRecovered', void 0),
            el(this, '_mlsFailures', void 0),
            el(this, '_secureFramesTransitionStates', new Map()),
            el(this, '_secureFramesNextTransitionState', void 0),
            el(this, '_secureFramesMaxConcurrentTransitions', 0),
            el(this, '_secureFramesTransitionPrepareCount', 0),
            el(this, '_secureFramesTransitionExecuteCount', 0),
            el(this, '_numNoiseCancellationChanges', 0),
            el(this, '_lastSentSpeakingStatus', void 0),
            el(this, '_lastSentSSRC', void 0),
            el(this, 'powerMonitorListener', void 0),
            el(this, 'reconnect', () => {
                let e = this._socket;
                null != e && (this._connected && (this._connectStartTime = (0, _.zO)()), this._connecting || (this._trackVoiceConnectionConnecting(), (this._connecting = !0), (this._encountered_socket_failure = !1)), this._connectCount++, e.close(), e.connect());
            }),
            el(this, '_alertMLSFailureDebouced', o()(this._alertMLSFailure, 100)),
            el(this, '_handleNetworkOnline', () => {
                this.expeditedHeartbeat(5000, 'network detected online.');
            }),
            el(this, '_handleNetworkOffline', () => {
                this.expeditedHeartbeat(15000, 'network detected offline.', !1);
            }),
            el(this, '_handleNoRoute', () => {
                var e;
                null == (e = this._socket) || e.noRoute();
            }),
            el(this, '_handlePowerResume', () => {
                this.expeditedHeartbeat(5000, 'power monitor resumed');
            }),
            el(this, '_handleVoiceQualityPeriodicsStats', () => {
                if (null != this._voiceQuality) {
                    let e = this._voiceQuality.getPeriodicStats();
                    if (this.shouldReportPeriodicStats(e))
                        for (let t of e)
                            G.default.track(
                                eo.rMx.VOICE_QUALITY_PERIODIC_STATS,
                                ed(ec({}, this._getAnalyticsProperties()), {
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
            el(this, 'getAudioDeviceStates', () => ({
                input_device: this.getInputDeviceName(),
                input_device_count: Object.keys(x.Z.getInputDevices()).length,
                output_device: this.getOutputDeviceName(),
                output_device_count: Object.keys(x.Z.getOutputDevices()).length
            })),
            el(this, 'getVideoDeviceStates', () => ({
                camera_device: this.getVideoDeviceName(),
                camera_device_count: Object.keys(x.Z.getVideoDevices()).length
            })),
            el(this, '_trackVoiceConnectionConnecting', () => {
                let e = L.Z.getChannel(this.channelId),
                    t = null == e ? void 0 : e.type;
                G.default.track(
                    eo.rMx.VOICE_CONNECTION_CONNECTING,
                    ed(ec({}, this.getAudioDeviceStates(), this.getVideoDeviceStates()), {
                        guild_id: this.guildId,
                        channel_id: this.channelId,
                        rtc_connection_id: this.getRTCConnectionId(),
                        hostname: this.hostname,
                        connect_count: this._connectCount,
                        context: this.context,
                        channel_type: t,
                        participant_type: this.getVoiceParticipantType(),
                        is_muted: x.Z.isMute()
                    })
                );
            }),
            el(this, 'incomingVideoEnabledChanged', (e) => {
                var t, n;
                null == (t = this._goLiveQualityManager) || t.onIncomingVideoEnabled(e), null == (n = this._videoQuality) || n.setOcclusionIncomingVideoEnabled(e);
            }),
            el(this, 'windowVisibilityChanged', (e) => {
                var t;
                null == (t = this._videoQuality) || t.setWindowOcclusionState(!e);
            }),
            (this.context = i),
            (this.logger = new b.Z('RTCConnection('.concat(null != (l = null != a ? a : n) ? l : r, ', ').concat(this.context, ')'))),
            this.logger.enableNativeLogger(!0),
            (this.userId = e),
            (this.sessionId = t),
            (this.guildId = n),
            (this._channelId = r),
            (this.channelIds = new Set([r])),
            (this.rtcServerId = a),
            (this.parentMediaSessionId = s),
            (this._endpoint = null),
            (this.hostname = null),
            (this.port = null),
            (this.token = null),
            (this.voiceVersion = null),
            (this.rtcWorkerVersion = null),
            (this.state = eo.hes.AWAITING_ENDPOINT),
            (this.stateHistory = new q.K(this.state)),
            (this._socket = null),
            (this._backoff = new u.Z(1000, 10000)),
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
            (this._createdTime = (0, _.zO)()),
            (this._connectStartTime = 0),
            (this._connectCompletedTime = 0),
            (this._rtcConnectionId = (0, c.Z)()),
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
            (this._mediaEngineConnectionId = null),
            (this._lastSentSpeakingStatus = 0),
            (this._lastSentSSRC = void 0);
        let f = x.Z.supports(es.AN.FIRST_FRAME_CALLBACK) && x.Z.supports(es.AN.REMOTE_USER_MULTI_STREAM);
        if (i === es.Yn.DEFAULT) {
            let t = (null == (d = L.Z.getChannel(this.channelId)) ? void 0 : d.type) === eo.d4z.GUILD_STAGE_VOICE;
            (this._localMediaSinkWantsManager = new Q.ZP(e, t, f)),
                this._localMediaSinkWantsManager.on(Q.ai.Update, (e) => {
                    if (this.state === eo.hes.RTC_CONNECTED && null != this._socket) {
                        var t;
                        this.logger.info('Media sink wants: '.concat(JSON.stringify(e))), this._socket.mediaSinkWants(e), null == (t = this._connection) || t.setLocalVideoSinkWants(e);
                    }
                }),
                this._localMediaSinkWantsManager.on(Q.ai.UserSSRCUpdate, (e, t, n) => {
                    var r;
                    null == (r = this._connection) || r.createUser(e, t, n);
                });
        } else
            i === es.Yn.STREAM &&
                ((this._goLiveQualityManager = new v.Z(!0)),
                this._goLiveQualityManager.on(v.y.RequestedSSRCsUpdate, (e, t, n) => {
                    var r;
                    null == (r = this._connection) || r.createUser(e, t, n);
                }),
                this._goLiveQualityManager.on(v.y.RequestedStreamsUpdate, (e) => {
                    if (this.state === eo.hes.RTC_CONNECTED && null != this._socket) {
                        var t;
                        this.logger.info('Go Live Media sink wants: '.concat(JSON.stringify(e))), this._socket.mediaSinkWants(e), null == (t = this._connection) || t.setLocalVideoSinkWants(e);
                    }
                }));
        (this._remoteVideoSinkWants = Q.Yy),
            ea.w.on(ea.e.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged),
            ea.w.on(ea.e.WindowVisibilityChanged, this.windowVisibilityChanged),
            M.ZP.shouldRecordNextConnection() ? ((this._recordingEnabled = !0), g.TC(!1)) : (this._recordingEnabled = !1),
            (this._soundshareStats = new J.Z()),
            F.Z.addOnlineCallback(this._handleNetworkOnline),
            F.Z.addOfflineCallback(this._handleNetworkOffline),
            (0, Z.isDesktop)() && (this.powerMonitorListener = W.Z.remotePowerMonitor.on('resume', this._handlePowerResume)),
            (this._supportedBandwidthEstimationExperiments = []),
            (this._bandwidthEstimationExperiment = null),
            x.Z.getMediaEngine().getSupportedBandwidthEstimationExperiments((e) => {
                this._supportedBandwidthEstimationExperiments = e;
            });
    }
}
