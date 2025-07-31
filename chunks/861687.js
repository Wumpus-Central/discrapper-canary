(n.d(t, { Z: () => eI }), n(35282), n(415506), n(539854), n(457542), n(388685), n(49124));
var r = n(654861),
    i = n.n(r),
    a = n(954955),
    o = n.n(a),
    s = n(108131),
    l = n.n(s),
    c = n(772848),
    u = n(261470),
    d = n(47770),
    _ = n(46973),
    f = n(379649),
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
    S = n(148807),
    A = n(166884),
    N = n(52923),
    C = n(868616),
    R = n(450109),
    P = n(118445),
    w = n(311473),
    D = n(615830),
    L = n(314897),
    x = n(592125),
    M = n(131951),
    k = n(19780),
    j = n(226961),
    U = n(936349),
    G = n(594174),
    B = n(626135),
    V = n(12647),
    F = n(630388),
    Z = n(931619),
    H = n(358085),
    Y = n(960048),
    W = n(591759),
    K = n(579806),
    z = n(859401),
    q = n(437263),
    X = n(423343),
    Q = n(685756),
    J = n(655306),
    $ = n(583794),
    ee = n(179654),
    et = n(36902),
    en = n(824096),
    er = n(53114),
    ei = n(174532),
    ea = n(895066),
    eo = n(798681),
    es = n(981631),
    el = n(65154);
function ec(e, t, n) {
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
function eu(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                ec(e, t, n[t]);
            }));
    }
    return e;
}
function ed(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function e_(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ed(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ef = /^https/.test('https:') ? 'wss:' : 'ws:',
    ep = 200,
    eh = 20,
    em = 500,
    eg = 250,
    eE = 10,
    eb = 5,
    ey = '1',
    eO = 0;
function ev(e) {
    return e;
}
class eI extends d.Z {
    get quality() {
        let e = this.getLastPing();
        return this.state !== es.hes.RTC_CONNECTED || void 0 === e ? es.IE4.UNKNOWN : e > em || (null != this._outboundLossRate && this._outboundLossRate > eE) ? es.IE4.BAD : e > eg || (null != this._outboundLossRate && this._outboundLossRate > eb) ? es.IE4.AVERAGE : es.IE4.FINE;
    }
    get endpoint() {
        return this._endpoint;
    }
    set endpoint(e) {
        if (null == e) ((this._endpoint = null), (this.hostname = null));
        else {
            var t;
            e = ''.concat(ef, '//').concat(e);
            let { hostname: n, port: r } = null != (t = W.Z.toURLSafe(e)) ? t : {},
                i = null != r ? parseInt(r) : NaN;
            (null != n && (80 === i || 443 === i) && (e = ''.concat(ef, '//').concat(n)), (this._endpoint = e + '/'), (this.hostname = n));
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
            return void this.setState(es.hes.AWAITING_ENDPOINT);
        let i = this._socket;
        (null != i && this._cleanupSocket(), (i = this._socket = new Q.Z(this.endpoint, this.context)).on(Q.V.Connecting, this._handleConnecting.bind(this, i)), i.on(Q.V.Connect, this._handleConnect.bind(this, i)), i.on(Q.V.Disconnect, this._handleDisconnect.bind(this, i)), i.on(Q.V.Resuming, this._handleResuming.bind(this, i)), i.on(Q.V.Ready, this._handleReady.bind(this, i)), i.on(Q.V.Speaking, this._handleSpeaking.bind(this, i)), i.on(Q.V.Video, this._handleVideo.bind(this, i)), i.on(Q.V.Ping, this._handleControlPing.bind(this)), i.on(Q.V.ClientDisconnect, this._handleClientDisconnect.bind(this)), i.on(Q.V.ClientConnect, this._handleClientConnect.bind(this)), i.on(Q.V.Codecs, this._handleCodecs.bind(this)), i.on(Q.V.MediaSessionId, this._handleMediaSessionId.bind(this)), i.on(Q.V.MediaSinkWants, this._handleMediaSinkWants.bind(this)), i.on(Q.V.VoiceBackendVersion, this._handleCodeVersion.bind(this)), i.on(Q.V.KeyframeInterval, this._handleKeyframeInterval.bind(this)), i.on(Q.V.Flags, this.handleFlags.bind(this)), i.on(Q.V.Platform, this.handlePlatform.bind(this)), i.on(Q.V.BandwidthEstimationExperiment, this._handleBandwidthEstimationExperiment.bind(this)), i.on(Q.V.SecureFramesInit, this._handleSecureFramesInit.bind(this)), i.on(Q.V.SecureFramesPrepareTransition, this._handleSecureFramesPrepareTransition.bind(this)), i.on(Q.V.SecureFramesPrepareEpoch, this._handleSecureFramesPrepareEpoch.bind(this)), i.on(Q.V.SecureFramesExecuteTransition, this._handleSecureFramesExecuteTransition.bind(this)), i.on(Q.V.MLSExternalSenderPackage, this._handleMLSExternalSenderPackage.bind(this)), i.on(Q.V.MLSProposals, this._handleMLSProposals.bind(this, i)), i.on(Q.V.MLSPrepareCommitTransition, this._handleMLSPrepareCommitTransition.bind(this)), i.on(Q.V.MLSWelcome, this._handleMLSWelcome.bind(this)), (this._connectStartTime = (0, f.zO)()), this._connectCount++, (this._connecting = !0), null != i && this._socket === i && (this._trackVoiceConnectionConnecting(), (this._encountered_socket_failure = !1), i.connect()));
    }
    destroy() {
        var e, t, n, r, i, a, o, s;
        if ((this.logger.info('Destroy RTCConnection'), Z.Z.removeOnlineCallback(this._handleNetworkOnline), Z.Z.removeOfflineCallback(this._handleNetworkOffline), (0, H.isDesktop)() && (null == (o = (s = this).powerMonitorListener) || o.call(s)), eo.w.off(eo.e.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged), eo.w.off(eo.e.WindowVisibilityChanged, this.windowVisibilityChanged), this._backoff.cancel(), this._cleanupSocket(), null == (e = this._voiceQuality) || e.stop(), null == (t = this._voiceQuality) || t.removeAllListeners(), (this._voiceQuality = null), clearInterval(this._voiceQualityPeriodicStatsInterval), (this._voiceQualityPeriodicStatsInterval = null), (this._voiceQualityPeriodicStatsSequenceId = 0), null == (n = this._systemResponsiveness) || n.stop(), (this._systemResponsiveness = null), (this._noiseCancellationError = 0), null == (r = this._voiceDuration) || r.stop(), (this._voiceDuration = null), null == (i = this._videoQuality) || i.stop(), (this._videoQuality = null), (this._videoHealthManager = null), (this._secureFramesState = null), null == (a = this._localMediaSinkWantsManager) || a.reset(), null != this._connection)) {
            let e = this._connection;
            ((this._connection = null), e.destroy());
        }
        (this.removeAllListeners(), (this._destroyed = !0));
    }
    shouldSendSpeaking(e, t) {
        if ((0, H.isWeb)()) return !0;
        let n = (0, F.yE)(e, el.Dg.PRIORITY),
            r = (0, F.yE)(this._lastSentSpeakingStatus, el.Dg.PRIORITY);
        return (this._lastSentSSRC !== t || n !== r) && (void 0 !== this._lastSentSSRC || e !== el.Dg.NONE) && (this._lastSentSSRC === t || e !== el.Dg.NONE) && ((this._lastSentSpeakingStatus = e), (this._lastSentSSRC = t), !0);
    }
    sendSpeaking(e, t) {
        let n = this._socket;
        if (null == n || !this.shouldSendSpeaking(e, t)) return;
        let r = M.Z.getPacketDelay();
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
        let e = this._pings.slice(0, Math.min(this._pings.length, eh));
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
        let e = this._connectCompletedTime > 0 ? (0, f.zO)() - this._connectCompletedTime : 0;
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
    getRemoteVideoSinkWants() {
        return this._remoteVideoSinkWants;
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
        (this.logger.info('RTC connection state: '.concat(this.state, ' => ').concat(e)),
            (this.state = e),
            this.stateHistory.update(this.state),
            this.emit(
                q.z.State,
                e,
                {
                    hostname: this.hostname,
                    channelId: this.trueChannelId,
                    context: this.context
                },
                t
            ));
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
        (this._numNoiseCancellationChanges++, null == (t = this._voiceDuration) || t.setNoiseCancellationEnabled(e));
    }
    setSimulcastDebugOverride(e, t, n) {
        var r, i;
        t === this.context && (t === el.Yn.DEFAULT ? null == (r = this._localMediaSinkWantsManager) || r.setSimulcastDebugOverride(e, n) : null == (i = this._goLiveQualityManager) || i.setSimulcastDebugOverride(n));
    }
    setVideoSize(e, t, n) {
        var r, i;
        (null == (r = this._localMediaSinkWantsManager) || r.setVideoSize(e, t * n), null == (i = this._goLiveQualityManager) || i.setVideoSize(e, t, n));
    }
    set channelId(e) {
        let t = x.Z.getChannel(this.channelId),
            n = null == t ? void 0 : t.type;
        (this.logger.info('Updating channel: '.concat(e, '(').concat(n, ')')), (this._channelId = e), this.channelIds.add(e));
    }
    get channelId() {
        return this._channelId;
    }
    get trueServerId() {
        var e, t;
        return null != (t = null != (e = this.streamServerId) ? e : this.guildId) ? t : this.channelId;
    }
    get trueChannelId() {
        return null == this.streamServerId ? this.channelId : null != this.streamChannelId ? this.streamChannelId : i()(this.streamServerId).prev().toString();
    }
    _cleanupSocket() {
        let e = this._socket;
        null != e && (e.close(), e.removeAllListeners(), (this._socket = null));
    }
    _chooseExperiments(e) {
        let t = [];
        if ((this._recordingEnabled && t.push('connection_log'), null != this.guildId)) {
            let { shouldOverrideKrisp: e, overrideKrispSetting: n } = C.Z.getCurrentConfig(
                {
                    guildId: this.guildId,
                    location: 'handleReady'
                },
                { autoTrackExposure: !0 }
            );
            e && (n ? t.push('force_krisp_enabled') : t.push('force_krisp_disabled'));
        }
        if ((M.Z.supports(el.AN.FIXED_KEYFRAME_INTERVAL) && t.push('fixed_keyframe_interval'), 0 !== this._supportedBandwidthEstimationExperiments.length)) {
            let e = A.Z.workerExperimentString();
            null != e && t.push(e);
        }
        (this.context === el.Yn.DEFAULT && (0, I.f)('RtcConnection').enabled && t.push('audio_transport_cc'), N.Z.getCurrentConfig({ location: '_chooseExperiments' }, { autoTrackExposure: !0 }).enabled && t.push('keyframe_on_join'), P.Z.getCurrentConfig({ location: '_chooseExperiments' }, { autoTrackExposure: !0 }).enabled && t.push('network_aware_socket'));
        let n = S.Z.getCurrentConfig(
            { location: '_chooseExperiments' },
            {
                disable: !(0, H.isWindows)(),
                autoTrackExposure: !0
            }
        );
        (n.prewarm && t.push('prewarm_cuda_cache'), n.clear && t.push('clear_cuda_cache'), (this._selectedExperiments = t));
    }
    _handleConnecting(e) {
        if (null != this.endpoint) {
            let e = x.Z.getChannel(this.channelId),
                t = null == e ? void 0 : e.type;
            this.logger.info('Connecting to RTC server '.concat(this.endpoint, ', rtc-connection-id: ').concat(this.getRTCConnectionId(), ', channel: ').concat(this.channelId, '(').concat(t, ')'));
        }
        this.setState(es.hes.CONNECTING);
    }
    _handleConnect(e) {
        let t = this.token;
        if (null == t) throw Error('RTCConnection._handleConnect(...): Token is missing.');
        (this.logger.info('Connected to RTC server.'),
            this._fetchAsyncResourcesPromise.finally(() => {
                (e.identify({
                    serverId: this.trueServerId,
                    channelId: this.trueChannelId,
                    userId: this.userId,
                    sessionId: this.sessionId,
                    token: t,
                    maxDaveProtocolVersion: M.Z.getSupportedSecureFramesProtocolVersion(),
                    video: M.Z.supports(el.AN.VIDEO),
                    streamParameters: M.Z.getVideoStreamParameters(this.context)
                }),
                    this.setState(es.hes.AUTHENTICATING));
            }));
    }
    _handleDisconnect(e, t, n, r) {
        var i, a, o, s, l, c, u, d, _, f, p, h, m, g, E, b, y, v, I, T, S;
        (this.logger.info('Disconnected from RTC server, clean: '.concat(t, ', code: ').concat(n, ', reason: ').concat(r, ', state: ').concat(this.state)),
            t ||
                !this._connecting ||
                this._encountered_socket_failure ||
                (B.default.track(
                    es.rMx.VOICE_CONNECTION_SOCKET_FAILURE,
                    e_(eu({}, this._getAnalyticsProperties()), {
                        hostname: this.hostname,
                        connect_count: this._connectCount,
                        code: n,
                        reason: r
                    })
                ),
                (this._encountered_socket_failure = !0)),
            k.Z.getRemoteDisconnectVoiceChannelId() === this.channelId && (null == (l = this._connection) || l.wasRemoteDisconnected()));
        let A = 'Force Close' !== r;
        if (A) {
            let e = this._backoff.fail(this.reconnect);
            this.logger.warn('Disconnect was not clean! reason='.concat(r, '. Reconnecting in ').concat((e / 1000).toFixed(2), ' seconds.'));
        }
        if (this.state !== es.hes.DISCONNECTED) {
            let e = this._videoQuality;
            if (null != e && this.context === el.Yn.DEFAULT) {
                if ((e.stop(), this._sentVideo)) {
                    e.getOutboundStats().forEach((t) => {
                        var n;
                        (null != (n = t.num_frames) ? n : 0) > 0 &&
                            B.default.track(
                                es.rMx.VIDEO_STREAM_ENDED,
                                e_(
                                    eu(
                                        e_(eu({}, this._getAnalyticsProperties()), {
                                            app_hardware_acceleration_enabled: V.Z.getAppHardwareAccelerationEnabled(),
                                            media_session_id: this.getMediaSessionId(),
                                            sender_user_id: this.userId,
                                            reason: r,
                                            participant_type: 'sender',
                                            guild_region: U.Z.getRegion(this.hostname),
                                            hostname: this.hostname,
                                            hardware_enabled: M.Z.getHardwareEncoding()
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
                    null != t && t.camera_enabled_duration > 0 && B.default.track(es.rMx.VIDEO_CALL_ENDED, e_(eu({}, t), { media_session_id: this.getMediaSessionId() }));
                }
                e.getInboundParticipants().forEach((t) => {
                    var n;
                    let i = e.getInboundStats(t);
                    (null != (n = null == i ? void 0 : i.num_frames) ? n : 0) > 0 &&
                        B.default.track(
                            es.rMx.VIDEO_STREAM_ENDED,
                            eu(
                                e_(eu({}, this._getAnalyticsProperties()), {
                                    app_hardware_acceleration_enabled: V.Z.getAppHardwareAccelerationEnabled(),
                                    media_session_id: this.getMediaSessionId(),
                                    sender_user_id: t,
                                    reason: r,
                                    participant_type: 'receiver',
                                    guild_region: U.Z.getRegion(this.hostname),
                                    hostname: this.hostname,
                                    hardware_enabled: M.Z.getHardwareEncoding()
                                }),
                                i,
                                e.getNetworkStats(),
                                e.getCodecUsageStats('receiver', t)
                            )
                        );
                });
            }
            let t = this.getMediaSessionId();
            (M.Z.getMediaEngine()
                .getCodecSurvey()
                .then((e) => {
                    let n = JSON.parse(e);
                    if (null == n || null == n.available_video_encoders || null == n.available_video_decoders) throw Error('codec survey is not available');
                    B.default.track(
                        es.rMx.VOICE_CODEC_DETECTED,
                        e_(eu({}, n), {
                            rtc_connection_id: this.getRTCConnectionId(),
                            media_session_id: t
                        })
                    );
                })
                .catch((e) => {
                    this.logger.warn(e);
                }),
                this._trackMLSFailures({ recovered: !1 }));
            let n = U.Z.shouldIncludePreferredRegion() ? U.Z.getPreferredRegion() : null,
                i = M.Z.getSettings(),
                a = x.Z.getChannel(this.channelId),
                o = null == (u = R.Z.getConnectionStats(this.getMediaEngineConnectionId())) || null == (c = u.stats.rtp.outbound.find((e) => 'audio' === e.type)) ? void 0 : c.sampleRateMismatchPercent,
                s = e_(
                    eu(
                        e_(eu({}, this._getAnalyticsProperties()), {
                            hostname: this.hostname,
                            port: this.port,
                            protocol: this.protocol,
                            reconnect: A,
                            reason: r,
                            duration: this.getDuration()
                        }),
                        null == (d = this._voiceQuality) ? void 0 : d.getMosStats(),
                        null == (_ = this._voiceQuality) ? void 0 : _.getPacketStats(),
                        null == (f = this._voiceQuality) ? void 0 : f.getBytesStats(),
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
                        no_input_detected_notice: M.Z.getNoInputDetectedNotice(),
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
                        audio_subsystem: M.Z.getMediaEngine().getAudioSubsystem(),
                        audio_layer: M.Z.getMediaEngine().getAudioLayer(),
                        automatic_audio_subsystem: i.automaticAudioSubsystem,
                        participant_type: this.getVoiceParticipantType(),
                        audio_capture_sample_rate_mismatch_percent: o,
                        krisp_sdk_version: M.Z.getState().krispVersion,
                        secure_frames_max_concurrent_transitions: this._secureFramesMaxConcurrentTransitions,
                        secure_frames_transition_prepare_count: this._secureFramesTransitionPrepareCount,
                        secure_frames_transition_execute_count: this._secureFramesTransitionExecuteCount,
                        vad_use_advanced_voice_activity: i.modeOptions.vadUseKrisp,
                        soundshare_experimental: M.Z.getExperimentalSoundshare()
                    }
                );
            (Promise.all([
                (async () => {
                    var e, t;
                    return null != (t = await (null == (e = this._systemResources) ? void 0 : e.getBatteryLevelStats())) ? t : { batteryUsageRounded: null };
                })(),
                w.Z.getKrispModel(),
                M.Z.getKrispEnableStats() ? M.Z.getMediaEngine().getNoiseCancellationStats() : Promise.resolve(null)
            ]).then((e) => {
                let [{ batteryUsageRounded: t }, n, r] = e;
                B.default.track(
                    es.rMx.VOICE_DISCONNECT,
                    e_(eu({}, s), {
                        battery_usage: t,
                        krisp_nc_model: n,
                        duration_low_noise_detected_ms: null == r ? void 0 : r.lowNoiseMs,
                        duration_medium_noise_detected_ms: null == r ? void 0 : r.mediumNoiseMs,
                        duration_high_noise_detected_ms: null == r ? void 0 : r.highNoiseMs,
                        duration_noise_cancellation_voice_detected_ms: null == r ? void 0 : r.talkTimeMs
                    })
                );
            }),
                this._trackRemainingSecureFrameTransitions());
        }
        if (((this._pingTimeouts = []), (this._pings = []), (this._connectCompletedTime = 0), (this._pingBadCount = 0), (this._inputDetected = !1), (this._mediaSessionId = null), null == (i = this._voiceQuality) || i.stop(), (this._voiceQuality = null), clearInterval(this._voiceQualityPeriodicStatsInterval), (this._voiceQualityPeriodicStatsInterval = null), (this._voiceQualityPeriodicStatsSequenceId = 0), (this._noiseCancellationError = 0), (this._numNoiseCancellationChanges = 0), null == (a = this._voiceDuration) || a.stop(), (this._voiceDuration = null), null == (o = this._videoQuality) || o.stop(), (this._videoQuality = null), (this._videoHealthManager = null), null == (s = this._localMediaSinkWantsManager) || s.reset(), (this._secureFramesState = null), (this._userIds = new Set([this.userId])), this._secureFramesRosterMap.clear(), this._secureFramesTransitionStates.clear(), (this._secureFramesNextTransitionState = void 0), (this._secureFramesMaxConcurrentTransitions = 0), (this._secureFramesTransitionPrepareCount = 0), (this._secureFramesTransitionExecuteCount = 0), null != this._connection)) {
            let e = this._connection;
            ((this._connection = null), e.destroy());
        }
        this.setState(es.hes.DISCONNECTED, { willReconnect: A });
    }
    _handleResuming(e) {
        var t, n;
        (null == (t = this._connection) || t.fastUdpReconnect(), null == (n = this._connection) || n.clearAllSpeaking());
    }
    _handleReady(e, t, n, r, i, a, o) {
        var s;
        (this.setState(es.hes.RTC_CONNECTING),
            (this.port = n),
            this._chooseExperiments(null != o ? o : []),
            0 === a.length &&
                a.push({
                    type: el.Tr.VIDEO,
                    rid: '100',
                    ssrc: i + 1,
                    rtxSsrc: i + 2,
                    quality: 100,
                    active: !1
                }));
        let l = M.Z.getMediaEngine(),
            c = D.Z.getPersistentCodesEnabled(),
            u = null != (s = L.default.getStaticAuthSessionId()) ? s : void 0,
            d = (0, f.zO)(),
            h = l.connect(
                this.context,
                this.userId,
                eu(
                    {
                        ssrc: i,
                        address: t,
                        port: n,
                        modes: r,
                        experiments: this._selectedExperiments,
                        streamParameters: a,
                        qosEnabled: M.Z.getQoS(),
                        signingKeyId: c ? u : void 0
                    },
                    this.getExtraConnectionOptions()
                )
            ),
            g = (0, f.zO)() - d;
        (h.setUseElectronVideo(l.supports(el.AN.ELECTRON_VIDEO)), M.Z.supports(el.AN.IMAGE_QUALITY_MEASUREMENT) && h.setVideoQualityMeasurement('imageQualityWebrtcPsnrDb:5000,imageQualityVmaf_v061:5000,hwdec'));
        let b = ['unk'];
        (this.context === el.Yn.STREAM && (b.push('nvRelaxRc=250'), b.push('nvNewPresets')),
            h.setVideoEncoderExperiments(b.join(',')),
            h.on(_.Sh.Speaking, (e, t, n) => {
                (this.userId === e && this.sendSpeaking(t, n), this.emit(q.z.Speaking, ev(e), t));
            }),
            h.on(_.Sh.ToggleMuteFromNative, () => {
                this.context === el.Yn.DEFAULT && m.Z.toggleSelfMute({ playSoundEffect: !1 });
            }),
            h.on(_.Sh.NativeMuteChanged, (e) => {
                this.context === el.Yn.DEFAULT && E.Z.nativeMuteChanged(e);
            }),
            h.on(_.Sh.Video, (e, t, n, r, i, a) => {
                (this._handleVideoStreamId({
                    userId: ev(e),
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
                                100 === t.quality && this.emit(q.z.VideoSourceQualityChanged, this.guildId, this.channelId, ev(e), t.maxResolution, t.maxFrameRate, this.context);
                            })));
            }),
            h.on(_.Sh.FirstFrame, (e, t, n) => {
                (null != this._localMediaSinkWantsManager && (this._localMediaSinkWantsManager.setFirstFrameReceived(t), this.emit(q.z.Video, this.guildId, this.channelId, ev(e), n, this.streamServerId)), null != this._goLiveQualityManager && (this._goLiveQualityManager.setFirstFrameReceived(t), this.emit(q.z.Video, this.guildId, this.channelId, ev(e), n, this.streamServerId)));
            }),
            h.on(_.Sh.Silence, (e) => {
                this._inputDetected = this._inputDetected || !e;
            }),
            h.on(_.Sh.Connected, (r, i) => {
                if ((this.logger.info('RTC connected to media server: '.concat(t, ':').concat(n)), e !== this._socket)) return void this.logger.warn('Socket mismatch, disconnecting');
                switch (
                    ((this._voiceQuality = new ea.Z(h)),
                    this._voiceQuality.start(),
                    this._voiceQuality.on(ea.B.InputDeviceSampleRateChanged, (e) => {
                        p.Z.dispatch({
                            type: 'AUDIO_INPUT_DEVICE_SAMPLE_RATE_CHANGED',
                            sampleRate: e
                        });
                    }),
                    (this._voiceQualityPeriodicStatsSequenceId = 0),
                    (this._voiceQualityPeriodicStatsInterval = setInterval(this._handleVoiceQualityPeriodicsStats, 300000)),
                    (this._systemResponsiveness = new et.Z(h)),
                    this._systemResponsiveness.start(),
                    (this._systemResources = new ee.Z()),
                    this._systemResources.setLastBattery(),
                    (this._noiseCancellationError = 0),
                    (this._voiceDuration = new ei.Z(this.userId, h)),
                    this._voiceDuration.start(h.getSelfMute(), h.getVoiceFilterId()),
                    (this.protocol = r),
                    r)
                ) {
                    case 'udp':
                        (this.logger.info('Sending UDP info to RTC server.', i, this._selectedExperiments),
                            e.once(Q.V.Encryption, (e, t) => {
                                h === this._connection && (h.setEncryption(e, t), (this._encryptionMode = e));
                            }),
                            e.selectProtocol(r, this.getRTCConnectionId(), i, this._selectedExperiments));
                        break;
                    case 'webrtc':
                        (this.logger.info('Sending local SDP to RTC server.'), e.once(Q.V.SDP, this._handleSDP.bind(this)), e.selectProtocol(r, this.getRTCConnectionId(), i));
                        break;
                    default:
                        this.logger.error('Unable to determine protocol.');
                        return;
                }
                this._backoff.succeed();
            }),
            h.on(_.Sh.VideoEncoderFallback, (t) => {
                let n = t
                    .filter((e) => 'video' === e.type)
                    .map((e) => e.name)
                    .join(',');
                (this.logger.info('The originally selected video encoder is not working, fallback to the other available encoders: '.concat(n)), e.updateSession({ codecs: t }));
            }),
            h.on(_.Sh.Error, (t) => {
                if (e !== this._socket) return;
                let n = U.Z.shouldIncludePreferredRegion() ? U.Z.getPreferredRegion() : null;
                (this.logger.error('Error occurred while connecting to RTC server: '.concat(t)),
                    B.default.track(
                        es.rMx.VOICE_CONNECTION_FAILURE,
                        e_(eu({}, this._getAnalyticsProperties()), {
                            hostname: this.hostname,
                            port: this.port,
                            protocol: this.protocol,
                            error: t,
                            cloudflare_best_region: n,
                            connect_count: this._connectCount
                        })
                    ));
            }),
            h.on(_.Sh.ConnectionStateChange, (t) => {
                if ((this.logger.info('RTC media connection state change: '.concat(this.state, ' => ').concat(t)), e !== this._socket)) return;
                let n = this.state;
                switch (t) {
                    case el.$j.DISCONNECTED:
                        this.setState(es.hes.RTC_DISCONNECTED);
                        break;
                    case el.$j.CONNECTING:
                        this.setState(es.hes.RTC_CONNECTING);
                        break;
                    case el.$j.CONNECTED:
                        this.setState(es.hes.RTC_CONNECTED);
                        break;
                    case el.$j.NO_ROUTE:
                        this.setState(es.hes.NO_ROUTE);
                        break;
                    case el.$j.ICE_CHECKING:
                        this.setState(es.hes.ICE_CHECKING);
                        break;
                    case el.$j.DTLS_CONNECTING:
                        this.setState(es.hes.DTLS_CONNECTING);
                }
                if ((n === es.hes.RTC_CONNECTING && this.state === es.hes.RTC_DISCONNECTED ? this.reconnect() : this.state === es.hes.NO_ROUTE && (0 === this._backoff.fails && this._handleNoRoute(), this._backoff.fail(this.reconnect)), this.state === es.hes.RTC_CONNECTED)) {
                    var r, i, a, o, s, l, c, u, d, _;
                    let e = U.Z.shouldIncludePreferredRegion() ? U.Z.getPreferredRegion() : null;
                    if (this._connecting) {
                        let t = M.Z.getSettings(),
                            n = this._getAnalyticsProperties();
                        (B.default.track(
                            es.rMx.VOICE_CONNECTION_SUCCESS,
                            eu(
                                e_(eu({}, n), {
                                    hostname: this.hostname,
                                    port: this.port,
                                    protocol: this.protocol,
                                    cloudflare_best_region: e,
                                    connect_time: (0, f.zO)() - (this._connected ? this._connectStartTime : this._createdTime),
                                    connect_count: this._connectCount,
                                    audio_subsystem: M.Z.getMediaEngine().getAudioSubsystem(),
                                    audio_layer: M.Z.getMediaEngine().getAudioLayer(),
                                    automatic_audio_subsystem: t.automaticAudioSubsystem,
                                    media_session_id: this.getMediaSessionId(),
                                    participant_type: this.getVoiceParticipantType()
                                }),
                                this.stateHistory.getVoiceConnectionSuccessStats()
                            )
                        ),
                            B.default.track(es.rMx.VOICE_CONNECTION_TTC_COLLECTED, {
                                rtc_connection_id: n.rtc_connection_id,
                                time_1_creation_to_connect: this._connectStartTime - this._createdTime,
                                time_2_media_engine_connect: g,
                                time_3_media_engine_create_native_connection: null == (a = h.transportInfo) ? void 0 : a.createConnectionTime,
                                time_4_media_engine_connect_to_socket: null == (o = h.transportInfo) ? void 0 : o.connectTime,
                                time_5_scheduling_connected_callback: (null == (l = this._connection) || null == (s = l.transportInfo) ? void 0 : s.connectCallbackScheduledMs) == null ? -1 : performance.now() - (null == (u = this._connection) || null == (c = u.transportInfo) ? void 0 : c.connectCallbackScheduledMs),
                                time_6_state_connected_to_end_measure: (null == (d = this._connection) ? void 0 : d.onConnectStarted) == null ? -1 : performance.now() - (null == (_ = this._connection) ? void 0 : _.onConnectStarted)
                            }));
                    }
                    (null == (r = this._localMediaSinkWantsManager) || r.setConnection(h), null == (i = this._goLiveQualityManager) || i.update(), (this._connectCompletedTime = (0, f.zO)()), (this._connected = !0), (this._connecting = !1), (this._encountered_socket_failure = !1));
                } else n === es.hes.RTC_CONNECTED && this.stateHistory.reset(this.state);
            }),
            h.on(_.Sh.SecureFramesUpdate, (e) => {
                ((this._secureFramesState = e), this.emit(q.z.SecureFramesUpdate));
            }),
            h.on(_.Sh.Ping, this._handlePing.bind(this)),
            h.on(_.Sh.PingTimeout, this._handlePingTimeout.bind(this)),
            h.on(_.Sh.OutboundLossRate, this._handleOutboundLossRate.bind(this)),
            h.on(_.Sh.SoundshareTrace, this._handleSoundshareTrace.bind(this)),
            h.on(_.Sh.LocalVideoDisabled, this._handleLocalVideoDisabled.bind(this)),
            h.on(_.Sh.Stats, z.Z.create()),
            h.on(_.Sh.RemoteStreamsReady, this._handleRemoteStreamsReady.bind(this)),
            h.on(_.Sh.UsersMerged, this.handleUsersMerged.bind(this)),
            h.on(_.Sh.NoiseCancellationError, (e) => {
                this._noiseCancellationError = e;
            }),
            h.on(_.Sh.MLSFailure, this._handleMLSFailure.bind(this)),
            h.setRemoteVideoSinkWants(this._remoteVideoSinkWants),
            (this._connection = h),
            (this._mediaEngineConnectionId = h.mediaEngineConnectionId));
    }
    _handleSpeaking(e, t, n, r) {
        let i = this._connection;
        if (null != i && this.userId !== t) {
            var a;
            (r !== el.Dg.NONE && i.createUser(t, n), null == (a = this._localMediaSinkWantsManager) || a.setAudioSSRC(t, n));
        }
    }
    handleFlags(e, t) {
        this.emit(q.z.Flags, e, t);
    }
    handlePlatform(e, t) {
        this.emit(q.z.Platform, e, t, this.channelId);
    }
    handleUsersMerged(e) {
        this.emit(
            q.z.UsersMerged,
            e.map((e) => e.id),
            this.context
        );
    }
    getOrCreateVideoQuality() {
        if (null != this._connection && null == this._videoQuality) {
            ((this._videoQuality = new er.S(this._connection)), this._videoQuality.updateCallUserIdsCount(this._userIds.size), this._videoQuality.start());
            let { featureEnabled: e, windowLength: t, allowedPoorFpsRatio: n, fpsThreshold: r, backoffTimeSec: i } = en.y.defaultConfig;
            if (e) {
                ((this._videoHealthManager = new en.y(t, n, r, i)), null != this._localMediaSinkWantsManager && (this._localMediaSinkWantsManager.videoHealthManager = this._videoHealthManager));
                let e = (e, t, n) => {
                    var r, i;
                    (null == (r = this._localMediaSinkWantsManager) ? void 0 : r.shouldReceiveFromUser(e)) && (null == (i = this._videoHealthManager) || i.updateFps(e, t, n));
                };
                this._videoQuality.on(er.d.FpsUpdate, e);
            }
        }
        return this._videoQuality;
    }
    _handleVideoStreamId(e) {
        var t, n, r, i;
        let { userId: a, streamId: o, videoSsrc: s, videoStreamParameters: l } = e;
        if (
            (this.emit(q.z.Video, this.guildId, this.channelId, a, o, this.streamServerId),
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
            n.setUserVideoDisabled(ev(e), t);
        }
    }
    _handleRemoteStreamsReady(e) {
        let t = (0, f.zO)() - this._connectStartTime;
        B.default.track(
            es.rMx.VOICE_CONNECTION_REMOTE_STREAMS_CREATED,
            e_(eu({}, this._getAnalyticsProperties()), {
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
                    type: el.Tr.VIDEO,
                    rid: e.rid,
                    ssrc: e.ssrc,
                    rtxSsrc: e.rtxSsrc,
                    quality: e.quality,
                    active: r > 0
                }));
                (0 === e.length &&
                    e.push({
                        type: el.Tr.VIDEO,
                        rid: '100',
                        ssrc: r,
                        rtxSsrc: r + 1,
                        quality: 100,
                        active: r > 0
                    }),
                    this._localMediaSinkWantsManager.setVideoSSRCs(t, e));
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
                (null == (a = this._goLiveQualityManager) || a.setUserID(t), null == (o = this._goLiveQualityManager) || o.updateAudioAndVideoStreamInfo(n, e));
            }
            null == i ||
                i.forEach((e) => {
                    100 === e.quality && this.emit(q.z.VideoSourceQualityChanged, this.guildId, this.channelId, t, e.maxResolution, e.maxFrameRate, this.context);
                });
        }
    }
    _handleControlPing(e) {
        M.Z.supports(el.AN.NATIVE_PING) || this._handlePing(e);
    }
    _handlePing(e) {
        if (void 0 !== e) {
            for (
                this._pings.push({
                    time: Date.now(),
                    value: e
                });
                this._pings.length >= ep;

            )
                this._pings.shift();
            (e > em && this._pingBadCount++, this.emit(q.z.Ping, this._pings, this.quality));
        }
    }
    _handlePingTimeout(e, t) {
        this._pingTimeouts.push(e);
        let n = this._pingTimeouts.length;
        n >= 3 && this._pingTimeouts[n - 1] === this._pingTimeouts[n - 2] + 1 && this._pingTimeouts[n - 2] === this._pingTimeouts[n - 3] + 1 && this._handlePing(t);
    }
    _handleOutboundLossRate(e) {
        ((this._outboundLossRate = e), this.emit(q.z.OutboundLossRate, e));
    }
    _handleSoundshareTrace(e) {
        this._soundshareStats.traceEvent(void 0, e);
    }
    _getAnalyticsProperties() {
        let e = x.Z.getChannel(this.channelId),
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
        (e.forEach((e) => {
            var t;
            (this._userIds.add(e), null == (t = this._connection) || t.createUser(e, 0));
        }),
            this.emit(q.z.ClientConnect, e),
            null == (t = this._videoQuality) || t.updateCallUserIdsCount(this._userIds.size),
            null == (n = this._goLiveQualityManager) || n.updateCallUserIds(this._userIds),
            null == (r = this._localMediaSinkWantsManager) || r.updateCallUserIds(this._userIds));
    }
    _handleClientDisconnect(e) {
        var t, n, r, i, a, o;
        let s = this._videoQuality;
        if (null != s && this.context === el.Yn.DEFAULT) {
            let t = s.getInboundStats(e),
                n = null != (a = null == t ? void 0 : t.num_frames) ? a : 0;
            null != t &&
                n > 0 &&
                (B.default.track(
                    es.rMx.VIDEO_STREAM_ENDED,
                    eu(
                        e_(eu({}, this._getAnalyticsProperties()), {
                            app_hardware_acceleration_enabled: V.Z.getAppHardwareAccelerationEnabled(),
                            media_session_id: this.getMediaSessionId(),
                            sender_user_id: e,
                            reason: 'User disconnected',
                            participant_type: 'receiver',
                            guild_region: U.Z.getRegion(this.hostname),
                            hostname: this.hostname,
                            hardware_enabled: M.Z.getHardwareEncoding()
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
        (null != l && l.destroyUser(e), null == (t = this._localMediaSinkWantsManager) || t.destroyUser(e), this._userIds.delete(e), this.emit(q.z.ClientDisconnect, e), null == (n = this._goLiveQualityManager) || n.updateCallUserIds(this._userIds), null == (r = this._localMediaSinkWantsManager) || r.updateCallUserIds(this._userIds), null == (i = this._videoQuality) || i.updateCallUserIdsCount(this._userIds.size), 1 === this._userIds.size && (this._secureFramesLastBecameAloneTime = (0, f.zO)()));
    }
    _handleCodecs(e, t) {
        let n = this._connection;
        null != n && null != this.protocol ? n.setCodecs(null != e && '' !== e ? e : el.ad.OPUS, null != t && '' !== t ? t : el.ad.H264, this.context) : this.logger.warn('Cannot set codecs on connection with protocol:', this.protocol);
    }
    _handleSDP(e) {
        let t = this._connection;
        null != t && null != this.protocol ? t.setSDP(e) : this.logger.warn('Cannot set SDP on connection with protocol:', this.protocol);
    }
    _handleMediaSessionId(e) {
        ((this._mediaSessionId = e), this.logger.info('Setting media-session-id: '.concat(e, ' for rtc-connection-id: ').concat(this.getRTCConnectionId())));
        let t = y.Z.getRawThermalState();
        (B.default.track(
            es.rMx.MEDIA_SESSION_JOINED,
            e_(eu({}, this._getAnalyticsProperties()), {
                media_session_id: this.getMediaSessionId(),
                parent_media_session_id: this.parentMediaSessionId,
                raw_thermal_state: t
            })
        ),
            p.Z.dispatch({
                type: 'MEDIA_SESSION_JOINED',
                mediaSessionId: this.getMediaSessionId(),
                context: this.context
            }));
    }
    _handleMediaSinkWants(e) {
        let t = this._connection;
        (this.logger.info('Remote media sink wants: '.concat(JSON.stringify(e))),
            (this._remoteVideoSinkWants = e),
            p.Z.dispatch({
                type: 'RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS',
                context: this.context,
                wants: e,
                channelId: this.channelId,
                guildId: this.guildId,
                userId: this.userId
            }),
            null == t || t.setRemoteVideoSinkWants(e));
    }
    _handleCodeVersion(e, t) {
        ((this.voiceVersion = e), (this.rtcWorkerVersion = t));
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
        let t = this._secureFramesTransitionStates.get(e);
        if (null == t) return;
        let n = this._secureFramesTransitionStates.size;
        this._secureFramesTransitionStates.delete(e);
        let r = (e, t) => (null != e && null != t ? e - t : void 0);
        (B.default.track(
            es.rMx.SECURE_FRAMES_TRANSITION,
            e_(eu({}, this._getAnalyticsProperties()), {
                media_session_id: this.getMediaSessionId(),
                parent_media_session_id: this.parentMediaSessionId,
                sender_user_id: this.userId,
                transition_id: e,
                protocol_version: t.protocolVersion,
                start_to_init_duration: r(t.initReceivedTime, this._connectStartTime),
                init_duration: r(t.initFinishedTime, t.initReceivedTime),
                first_proposals_duration: r(t.firstProposalsFinishedTime, t.firstProposalsReceivedTime),
                last_proposals_duration: r(t.lastProposalsFinishedTime, t.lastProposalsReceivedTime),
                duration_between_proposals: r(t.lastProposalsReceivedTime, t.firstProposalsReceivedTime),
                total_proposals_size: t.totalProposalsSize,
                total_commit_welcome_size: t.totalCommitWelcomeSize,
                welcome_wait_duration: r(t.welcomeReceivedTime, t.initFinishedTime),
                welcome_duration: r(t.welcomeFinishedTime, t.welcomeReceivedTime),
                welcome_size: t.welcomeSize,
                welcome_error: t.welcomeError,
                commit_wait_duration: r(t.commitReceivedTime, t.lastProposalsFinishedTime),
                commit_duration: r(t.commitFinishedTime, t.commitReceivedTime),
                commit_size: t.commitSize,
                commit_error: t.commitError,
                prepare_wait_duration: r(t.prepareReceivedTime, this._secureFramesLastBecameAloneTime),
                prepare_duration: r(t.prepareFinishedTime, t.prepareReceivedTime),
                execute_wait_duration: r(t.executeReceivedTime, t.readyTime),
                execute_duration: r(t.executeFinishedTime, t.executeReceivedTime),
                execute_error: t.executeError,
                incomplete: t.incomplete,
                active_transition_count: n,
                time_since_creation: (0, f.zO)() - t.creationTime,
                users_added_count: t.usersAdded,
                users_removed_count: t.usersRemoved,
                roster_size_after: t.rosterSizeAfter
            })
        ),
            e === eO && this._trackRemainingSecureFrameTransitions());
    }
    _trackRemainingSecureFrameTransitions() {
        this._secureFramesTransitionStates.forEach((e, t) => {
            ((e.incomplete = !0), this._trackSecureFrameTransition(t));
        });
    }
    _storeSecureFrameNextTransitionData(e) {
        return (null == this._secureFramesNextTransitionState && (this._secureFramesNextTransitionState = { creationTime: (0, f.zO)() }), (this._secureFramesNextTransitionState = eu({}, this._secureFramesNextTransitionState, e)));
    }
    _storeSecureFrameTransitionData(e, t) {
        let n = this._secureFramesTransitionStates.get(e);
        (null == n && ((n = this._storeSecureFrameNextTransitionData({})), (this._secureFramesNextTransitionState = void 0)), this._secureFramesTransitionStates.set(e, eu({}, n, t)), (this._secureFramesMaxConcurrentTransitions = Math.max(this._secureFramesMaxConcurrentTransitions, this._secureFramesTransitionStates.size)));
    }
    _handleSecureFramesInit(e) {
        var t, n;
        let r = (0, f.zO)();
        e > 0
            ? (this.logger.info('DAVE protocol init with protocol version: '.concat(e)),
              null == (t = this._connection) || t.prepareSecureFramesEpoch(ey, e, this.trueChannelId),
              this._sendMLSKeyPackage(),
              this._storeSecureFrameNextTransitionData({
                  initReceivedTime: r,
                  initFinishedTime: (0, f.zO)(),
                  protocolVersion: e
              }))
            : null == (n = this._connection) ||
              n.prepareSecureFramesTransition(eO, e, () => {
                  let t = !1;
                  try {
                      var n;
                      null == (n = this._connection) || n.executeSecureFramesTransition(eO);
                  } catch (e) {
                      ((t = !0), Y.Z.captureException(e));
                  }
                  (this._storeSecureFrameTransitionData(eO, {
                      initReceivedTime: r,
                      initFinishedTime: (0, f.zO)(),
                      protocolVersion: e,
                      executeError: t
                  }),
                      this._trackSecureFrameTransition(eO));
              });
    }
    _handleSecureFramesRosterChange(e, t) {
        let n = [],
            r = 0,
            i = 0;
        (Object.entries(e).forEach((e) => {
            let [t, a] = e;
            (n.push(ev(t)), null == a || 0 === a.byteLength ? (i++, this._secureFramesRosterMap.delete(ev(t))) : (r++, this._secureFramesRosterMap.set(ev(t), a)));
        }),
            this._storeSecureFrameTransitionData(t, {
                usersAdded: r,
                usersRemoved: i,
                rosterSizeAfter: this._secureFramesRosterMap.size
            }),
            this.emit(q.z.RosterMapUpdate, n));
    }
    _handleSecureFramesPrepareTransition(e, t) {
        var n;
        (this.logger.info('Preparing DAVE protocol transition: '.concat(e, ', protocol version: ').concat(t)), this._secureFramesTransitionPrepareCount++);
        let r = (0, f.zO)();
        null == (n = this._connection) ||
            n.prepareSecureFramesTransition(e, t, () => {
                (this._maybeSendSecureFramesTransitionReady(e),
                    this._storeSecureFrameTransitionData(e, {
                        protocolVersion: t,
                        prepareReceivedTime: r,
                        prepareFinishedTime: (0, f.zO)()
                    }));
            });
    }
    _handleSecureFramesPrepareEpoch(e, t) {
        var n;
        this.logger.info('Preparing DAVE protocol epoch: '.concat(e, ', protocol version: ').concat(t));
        let r = e.toString();
        (null == (n = this._connection) || n.prepareSecureFramesEpoch(r, t, this.trueChannelId), r === ey && this._sendMLSKeyPackage());
    }
    _sendMLSKeyPackage() {
        var e;
        null == (e = this._connection) ||
            e.getMLSKeyPackage((e) => {
                var t;
                (this.logger.info('Got MLS key package, sending to RTC server'), null == (t = this._socket) || t.sendMLSKeyPackage(e));
            });
    }
    _maybeSendSecureFramesTransitionReady(e) {
        if (e !== eO) {
            var t;
            (this.logger.info('Sending DAVE protocol ready for transition ID '.concat(e)), null == (t = this._socket) || t.secureFramesReadyForTransition(e), this._storeSecureFrameTransitionData(e, { readyTime: (0, f.zO)() }));
        }
    }
    _handleSecureFramesExecuteTransition(e) {
        (this.logger.info('Executing DAVE protocol transition: '.concat(e)), this._secureFramesTransitionExecuteCount++);
        let t = (0, f.zO)(),
            n = !1;
        try {
            var r;
            null == (r = this._connection) || r.executeSecureFramesTransition(e);
        } catch (e) {
            ((n = !0), Y.Z.captureException(e));
        }
        (this._storeSecureFrameTransitionData(e, {
            executeReceivedTime: t,
            executeFinishedTime: (0, f.zO)(),
            executeError: n
        }),
            this._trackSecureFrameTransition(e));
    }
    _handleMLSExternalSenderPackage(e) {
        var t;
        (this.logger.info('Received MLS external sender package'), null == (t = this._connection) || t.updateMLSExternalSender(e));
    }
    _handleMLSProposals(e, t) {
        var n;
        let r = (0, f.zO)();
        (this.logger.info('Received MLS proposals'),
            null == (n = this._connection) ||
                n.processMLSProposals(t, (n) => {
                    var i, a, o;
                    let s = (0, f.zO)();
                    (this.logger.info('Sending MLS commit welcome message'), e.sendMLSCommitWelcome(n));
                    let l =
                        null != (i = this._secureFramesNextTransitionState)
                            ? i
                            : this._storeSecureFrameNextTransitionData({
                                  firstProposalsReceivedTime: r,
                                  firstProposalsFinishedTime: s
                              });
                    ((l.lastProposalsReceivedTime = r), (l.lastProposalsFinishedTime = s), (l.totalProposalsSize = (null != (a = l.totalProposalsSize) ? a : 0) + t.byteLength), (l.totalCommitWelcomeSize = (null != (o = l.totalCommitWelcomeSize) ? o : 0) + n.byteLength));
                }));
    }
    _handleMLSPrepareCommitTransition(e, t) {
        var n;
        this.logger.info('Received MLS commit for transition ID '.concat(e));
        let r = (0, f.zO)();
        null == (n = this._connection) ||
            n.prepareMLSCommitTransition(e, t, (n, i, a) => {
                (n ? (this._trackMLSFailures({ recovered: !0 }), (this._mlsSessionResetStartTime = void 0), this._handleSecureFramesRosterChange(a, e), this._maybeSendSecureFramesTransitionReady(e)) : (this.logger.warn('Failed to process MLS commit for transition ID '.concat(e)), (this._mlsSessionResetStartTime = (0, f.zO)()), this._flagMLSInvalidCommitWelcome(e), this._handleSecureFramesInit(i)),
                    this._storeSecureFrameTransitionData(e, {
                        protocolVersion: i,
                        commitReceivedTime: r,
                        commitFinishedTime: (0, f.zO)(),
                        commitSize: t.byteLength,
                        commitError: !n
                    }));
            });
    }
    _handleMLSWelcome(e, t) {
        var n;
        this.logger.info('Received MLS welcome for transition ID '.concat(e));
        let r = (0, f.zO)();
        null == (n = this._connection) ||
            n.processMLSWelcome(e, t, (n, i, a) => {
                (n ? (this._trackMLSFailures({ recovered: !0 }), (this._mlsSessionResetStartTime = void 0), this._handleSecureFramesRosterChange(a, e), this._maybeSendSecureFramesTransitionReady(e)) : ((this._mlsSessionResetStartTime = (0, f.zO)()), this._flagMLSInvalidCommitWelcome(e), this._sendMLSKeyPackage()),
                    this._storeSecureFrameTransitionData(e, {
                        protocolVersion: i,
                        welcomeReceivedTime: r,
                        welcomeFinishedTime: (0, f.zO)(),
                        welcomeSize: t.byteLength,
                        welcomeError: !n
                    }));
            });
    }
    getMLSPairwiseFingerprint(e, t, n) {
        var r;
        null == (r = this._connection) || r.getMLSPairwiseFingerprint(e, t, n);
    }
    _flagMLSInvalidCommitWelcome(e) {
        var t;
        (this.logger.info('Flagging invalid MLS commit/welcome for transition ID '.concat(e)), null == (t = this._socket) || t.flagMLSInvalidCommitWelcome(e));
    }
    _handleMLSFailure(e, t) {
        let n = ''.concat(e, ':').concat(t),
            r = this._mlsFailures.get(n);
        (null != r
            ? (r.count++, null != this._mlsSessionResetStartTime && r.countDuringReset++)
            : this._mlsFailures.set(n, {
                  source: e,
                  reason: t,
                  count: 1,
                  countDuringReset: +(null != this._mlsSessionResetStartTime),
                  firstOccurrence: (0, f.zO)()
              }),
            this._alertMLSFailureDebouced(e, t));
    }
    _trackMLSFailures(e) {
        let { recovered: t } = e,
            n = this.getMediaSessionId(),
            r = null != this._mlsSessionResetStartTime ? (0, f.zO)() - this._mlsSessionResetStartTime : void 0;
        for (let { source: e, reason: i, count: a, countDuringReset: o, firstOccurrence: s } of this._mlsFailures.values())
            B.default.track(
                es.rMx.MLS_FAILURES,
                e_(eu({}, this._getAnalyticsProperties()), {
                    media_session_id: n,
                    parent_media_session_id: this.parentMediaSessionId,
                    failure_source: e,
                    failure_reason: i,
                    failure_count: a,
                    failure_was_recovered: t,
                    time_since_first_occurrence: (0, f.zO)() - s,
                    time_since_last_reset: r,
                    failure_count_during_reset: o
                })
            );
        this._mlsFailures.clear();
    }
    _alertMLSFailure(e, t) {
        let n = G.default.getCurrentUser();
        ((null == n ? void 0 : n.isStaff()) || (null == n ? void 0 : n.isStaffPersonal())) &&
            h.Z.show({
                title: 'MLS Error in '.concat(e),
                body: 'Error: '.concat(t, '! Please upload your logs in A/V settings and ask everyone in the call to do the same, and ping us in #av-e2ee in Core Tech!')
            });
    }
    getExtraConnectionOptions() {
        return {};
    }
    shouldReportPeriodicStats(e) {
        if (e.length > 10) return !1;
        let t = this.getMediaSessionId();
        return null != t && l().v3(t) % 100 <= 5;
    }
    getInputDeviceName() {
        var e;
        let t = M.Z.getInputDeviceId();
        return null == (e = M.Z.getInputDevices()[t]) ? void 0 : e.name;
    }
    getOutputDeviceName() {
        var e;
        let t = M.Z.getOutputDeviceId();
        return null == (e = M.Z.getOutputDevices()[t]) ? void 0 : e.name;
    }
    getVideoDeviceName() {
        var e;
        let t = M.Z.getVideoDeviceId();
        return null == (e = M.Z.getVideoDevices()[t]) ? void 0 : e.name;
    }
    getInputDeviceSampleRate() {
        var e, t;
        return null != (t = null == (e = this._voiceQuality) ? void 0 : e.getAudioDeviceStats().input_device_session_sample_rate) ? t : null;
    }
    getGoLiveSource() {
        return M.Z.getGoLiveSource();
    }
    constructor({ userId: e, sessionId: t, guildId: n, channelId: r, context: i = el.Yn.DEFAULT, streamServerId: a, streamChannelId: s, parentMediaSessionId: l }) {
        (super(),
            ec(this, 'context', void 0),
            ec(this, 'userId', void 0),
            ec(this, 'sessionId', void 0),
            ec(this, 'guildId', void 0),
            ec(this, 'parentMediaSessionId', void 0),
            ec(this, 'hostname', void 0),
            ec(this, 'state', void 0),
            ec(this, '_videoQuality', void 0),
            ec(this, '_soundshareStats', void 0),
            ec(this, 'logger', void 0),
            ec(this, 'streamServerId', void 0),
            ec(this, 'streamChannelId', void 0),
            ec(this, '_channelId', void 0),
            ec(this, 'channelIds', void 0),
            ec(this, '_endpoint', void 0),
            ec(this, 'port', void 0),
            ec(this, 'token', void 0),
            ec(this, 'protocol', void 0),
            ec(this, 'voiceVersion', void 0),
            ec(this, 'rtcWorkerVersion', void 0),
            ec(this, '_socket', void 0),
            ec(this, '_backoff', void 0),
            ec(this, '_destroyed', void 0),
            ec(this, '_pings', void 0),
            ec(this, '_pingBadCount', void 0),
            ec(this, '_pingTimeouts', void 0),
            ec(this, '_mediaSessionId', void 0),
            ec(this, '_voiceQuality', void 0),
            ec(this, '_voiceQualityPeriodicStatsInterval', void 0),
            ec(this, '_voiceQualityPeriodicStatsSequenceId', void 0),
            ec(this, '_systemResponsiveness', void 0),
            ec(this, '_systemResources', void 0),
            ec(this, '_noiseCancellationError', void 0),
            ec(this, '_voiceDuration', void 0),
            ec(this, '_videoHealthManager', void 0),
            ec(this, '_sentVideo', void 0),
            ec(this, '_outboundLossRate', void 0),
            ec(this, '_recordingEnabled', void 0),
            ec(this, '_selectedExperiments', void 0),
            ec(this, '_localMediaSinkWantsManager', void 0),
            ec(this, '_goLiveQualityManager', void 0),
            ec(this, '_remoteVideoSinkWants', void 0),
            ec(this, '_connection', void 0),
            ec(this, '_mediaEngineConnectionId', void 0),
            ec(this, '_createdTime', void 0),
            ec(this, '_connectStartTime', void 0),
            ec(this, '_connectCompletedTime', void 0),
            ec(this, '_rtcConnectionId', void 0),
            ec(this, '_connectCount', void 0),
            ec(this, '_connected', void 0),
            ec(this, '_connecting', void 0),
            ec(this, '_encountered_socket_failure', void 0),
            ec(this, '_inputDetected', void 0),
            ec(this, '_encryptionMode', void 0),
            ec(this, 'stateHistory', void 0),
            ec(this, '_supportedBandwidthEstimationExperiments', void 0),
            ec(this, '_bandwidthEstimationExperiment', void 0),
            ec(this, '_secureFramesState', void 0),
            ec(this, '_userIds', void 0),
            ec(this, '_secureFramesRosterMap', new Map()),
            ec(this, '_mlsFailures', new Map()),
            ec(this, '_secureFramesTransitionStates', new Map()),
            ec(this, '_secureFramesNextTransitionState', void 0),
            ec(this, '_secureFramesMaxConcurrentTransitions', 0),
            ec(this, '_secureFramesTransitionPrepareCount', 0),
            ec(this, '_secureFramesTransitionExecuteCount', 0),
            ec(this, '_secureFramesLastBecameAloneTime', void 0),
            ec(this, '_mlsSessionResetStartTime', void 0),
            ec(this, '_numNoiseCancellationChanges', 0),
            ec(this, '_fetchAsyncResourcesPromise', void 0),
            ec(this, '_lastSentSpeakingStatus', void 0),
            ec(this, '_lastSentSSRC', void 0),
            ec(this, 'powerMonitorListener', void 0),
            ec(this, 'reconnect', () => {
                let e = this._socket;
                null != e && (this._connected && (this._connectStartTime = (0, f.zO)()), this._connecting || (this._trackVoiceConnectionConnecting(), (this._connecting = !0), (this._encountered_socket_failure = !1)), this._connectCount++, e.close(), e.connect());
            }),
            ec(this, '_alertMLSFailureDebouced', o()(this._alertMLSFailure, 100)),
            ec(this, '_handleNetworkOnline', () => {
                this.expeditedHeartbeat(5000, 'network detected online.');
            }),
            ec(this, '_handleNetworkOffline', () => {
                this.expeditedHeartbeat(15000, 'network detected offline.', !1);
            }),
            ec(this, '_handleNoRoute', () => {
                var e;
                null == (e = this._socket) || e.noRoute();
            }),
            ec(this, '_handlePowerResume', () => {
                this.expeditedHeartbeat(5000, 'power monitor resumed');
            }),
            ec(this, '_handleVoiceQualityPeriodicsStats', () => {
                if (null != this._voiceQuality) {
                    let e = this._voiceQuality.getPeriodicStats();
                    if (this.shouldReportPeriodicStats(e))
                        for (let t of e)
                            B.default.track(
                                es.rMx.VOICE_QUALITY_PERIODIC_STATS,
                                e_(eu({}, this._getAnalyticsProperties()), {
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
            ec(this, 'getAudioDeviceStates', () => ({
                input_device: this.getInputDeviceName(),
                input_device_count: Object.keys(M.Z.getInputDevices()).length,
                output_device: this.getOutputDeviceName(),
                output_device_count: Object.keys(M.Z.getOutputDevices()).length
            })),
            ec(this, 'getVideoDeviceStates', () => ({
                camera_device: this.getVideoDeviceName(),
                camera_device_count: Object.keys(M.Z.getVideoDevices()).length
            })),
            ec(this, '_trackVoiceConnectionConnecting', () => {
                let e = x.Z.getChannel(this.channelId),
                    t = null == e ? void 0 : e.type;
                B.default.track(
                    es.rMx.VOICE_CONNECTION_CONNECTING,
                    e_(eu({}, this.getAudioDeviceStates(), this.getVideoDeviceStates()), {
                        guild_id: this.guildId,
                        channel_id: this.channelId,
                        rtc_connection_id: this.getRTCConnectionId(),
                        hostname: this.hostname,
                        connect_count: this._connectCount,
                        context: this.context,
                        channel_type: t,
                        participant_type: this.getVoiceParticipantType(),
                        is_muted: M.Z.isMute()
                    })
                );
            }),
            ec(this, 'incomingVideoEnabledChanged', (e) => {
                var t, n;
                (null == (t = this._goLiveQualityManager) || t.onIncomingVideoEnabled(e), null == (n = this._videoQuality) || n.setOcclusionIncomingVideoEnabled(e));
            }),
            ec(this, 'windowVisibilityChanged', (e) => {
                var t;
                null == (t = this._videoQuality) || t.setWindowOcclusionState(!e);
            }),
            (this.context = i),
            (this._fetchAsyncResourcesPromise = M.Z.fetchAsyncResources().catch((e) => {
                Y.Z.captureException(e);
            })),
            (this.userId = e),
            (this.sessionId = t),
            (this.guildId = n),
            (this._channelId = r),
            (this.channelIds = new Set([r])),
            (this.streamServerId = a),
            (this.streamChannelId = s),
            (this.parentMediaSessionId = l),
            (this.logger = new b.Z('RTCConnection('.concat(this.trueServerId, ', ').concat(this.context, ')'))),
            this.logger.enableNativeLogger(!0),
            (this._endpoint = null),
            (this.hostname = null),
            (this.port = null),
            (this.token = null),
            (this.voiceVersion = null),
            (this.rtcWorkerVersion = null),
            (this.state = es.hes.AWAITING_ENDPOINT),
            (this.stateHistory = new X.K(this.state)),
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
            (this._createdTime = (0, f.zO)()),
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
            this._mlsFailures.clear(),
            (this._mediaEngineConnectionId = null),
            (this._lastSentSpeakingStatus = 0),
            (this._lastSentSSRC = void 0));
        let d = M.Z.supports(el.AN.FIRST_FRAME_CALLBACK) && M.Z.supports(el.AN.REMOTE_USER_MULTI_STREAM);
        if (i === el.Yn.DEFAULT) {
            var _;
            let t = (null == (_ = x.Z.getChannel(this.channelId)) ? void 0 : _.type) === es.d4z.GUILD_STAGE_VOICE;
            ((this._localMediaSinkWantsManager = new J.ZP(e, t, d)),
                this._localMediaSinkWantsManager.on(J.ai.Update, (e) => {
                    if (this.state === es.hes.RTC_CONNECTED && null != this._socket) {
                        var t;
                        (this.logger.info('Media sink wants: '.concat(JSON.stringify(e))), this._socket.mediaSinkWants(e), null == (t = this._connection) || t.setLocalVideoSinkWants(e));
                    }
                }),
                this._localMediaSinkWantsManager.on(J.ai.UserSSRCUpdate, (e, t, n) => {
                    var r;
                    null == (r = this._connection) || r.createUser(e, t, n);
                }));
        } else
            i === el.Yn.STREAM &&
                ((this._goLiveQualityManager = new v.Z(!0)),
                this._goLiveQualityManager.on(v.y.RequestedSSRCsUpdate, (e, t, n) => {
                    var r;
                    null == (r = this._connection) || r.createUser(e, t, n);
                }),
                this._goLiveQualityManager.on(v.y.RequestedStreamsUpdate, (e) => {
                    if (this.state === es.hes.RTC_CONNECTED && null != this._socket) {
                        var t;
                        (this.logger.info('Go Live Media sink wants: '.concat(JSON.stringify(e))), this._socket.mediaSinkWants(e), null == (t = this._connection) || t.setLocalVideoSinkWants(e));
                    }
                }));
        ((this._remoteVideoSinkWants = J.Yy),
            eo.w.on(eo.e.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged),
            eo.w.on(eo.e.WindowVisibilityChanged, this.windowVisibilityChanged),
            j.ZP.shouldRecordNextConnection() ? ((this._recordingEnabled = !0), g.TC(!1)) : (this._recordingEnabled = !1),
            (this._soundshareStats = new $.Z()),
            Z.Z.addOnlineCallback(this._handleNetworkOnline),
            Z.Z.addOfflineCallback(this._handleNetworkOffline),
            (0, H.isDesktop)() && (this.powerMonitorListener = K.Z.remotePowerMonitor.on('resume', this._handlePowerResume)),
            (this._supportedBandwidthEstimationExperiments = []),
            (this._bandwidthEstimationExperiment = null),
            M.Z.getMediaEngine().getSupportedBandwidthEstimationExperiments((e) => {
                this._supportedBandwidthEstimationExperiments = e;
            }));
    }
}
