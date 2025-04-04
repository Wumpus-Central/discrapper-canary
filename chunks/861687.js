n.d(t, { Z: () => ey }), n(35282), n(415506), n(539854), n(388685), n(784620), n(973216), n(49124);
var r = n(654861),
    i = n.n(r),
    o = n(954955),
    a = n.n(o),
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
    v = n(631053),
    O = n(148959),
    I = n(815644),
    S = n(926951),
    T = n(166884),
    N = n(868616),
    A = n(450109),
    C = n(159846),
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
    G = n(12647),
    B = n(630388),
    V = n(931619),
    F = n(358085),
    Z = n(591759),
    H = n(579806),
    W = n(859401),
    Y = n(437263),
    K = n(423343),
    z = n(685756),
    q = n(655306),
    Q = n(583794),
    X = n(179654),
    J = n(36902),
    $ = n(824096),
    ee = n(53114),
    et = n(174532),
    en = n(895066),
    er = n(798681),
    ei = n(981631),
    eo = n(65154);
function ea(e, t, n) {
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
function es(e) {
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
                ea(e, t, n[t]);
            });
    }
    return e;
}
function el(e, t) {
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
function ec(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : el(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eu = /^https/.test('https:') ? 'wss:' : 'ws:',
    ed = 200,
    ef = 20,
    e_ = 500,
    ep = 250,
    eh = 10,
    em = 5,
    eg = '1',
    eE = 0;
function eb(e) {
    return e;
}
class ey extends d.Z {
    get quality() {
        let e = this.getLastPing();
        return this.state !== ei.hes.RTC_CONNECTED || void 0 === e ? ei.IE4.UNKNOWN : e > e_ || (null != this._outboundLossRate && this._outboundLossRate > eh) ? ei.IE4.BAD : e > ep || (null != this._outboundLossRate && this._outboundLossRate > em) ? ei.IE4.AVERAGE : ei.IE4.FINE;
    }
    get endpoint() {
        return this._endpoint;
    }
    set endpoint(e) {
        if (null == e) (this._endpoint = null), (this.hostname = null);
        else {
            var t;
            e = ''.concat(eu, '//').concat(e);
            let { hostname: n, port: r } = null != (t = Z.Z.toURLSafe(e)) ? t : {},
                i = null != r ? parseInt(r) : NaN;
            null != n && (80 === i || 443 === i) && (e = ''.concat(eu, '//').concat(n)), (this._endpoint = e + '/'), (this.hostname = n);
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
            return void this.setState(ei.hes.AWAITING_ENDPOINT);
        let i = this._socket;
        null != i && this._cleanupSocket(), (i = this._socket = new z.Z(this.endpoint, this.context)).on(z.V.Connecting, this._handleConnecting.bind(this, i)), i.on(z.V.Connect, this._handleConnect.bind(this, i)), i.on(z.V.Disconnect, this._handleDisconnect.bind(this, i)), i.on(z.V.Resuming, this._handleResuming.bind(this, i)), i.on(z.V.Ready, this._handleReady.bind(this, i)), i.on(z.V.Speaking, this._handleSpeaking.bind(this, i)), i.on(z.V.Video, this._handleVideo.bind(this, i)), i.on(z.V.Ping, this._handleControlPing.bind(this)), i.on(z.V.ClientDisconnect, this._handleClientDisconnect.bind(this)), i.on(z.V.ClientConnect, this._handleClientConnect.bind(this)), i.on(z.V.Codecs, this._handleCodecs.bind(this)), i.on(z.V.MediaSessionId, this._handleMediaSessionId.bind(this)), i.on(z.V.MediaSinkWants, this._handleMediaSinkWants.bind(this)), i.on(z.V.VoiceBackendVersion, this._handleCodeVersion.bind(this)), i.on(z.V.KeyframeInterval, this._handleKeyframeInterval.bind(this)), i.on(z.V.Flags, this.handleFlags.bind(this)), i.on(z.V.Platform, this.handlePlatform.bind(this)), i.on(z.V.BandwidthEstimationExperiment, this._handleBandwidthEstimationExperiment.bind(this)), i.on(z.V.SecureFramesInit, this._handleSecureFramesInit.bind(this)), i.on(z.V.SecureFramesPrepareTransition, this._handleSecureFramesPrepareTransition.bind(this)), i.on(z.V.SecureFramesPrepareEpoch, this._handleSecureFramesPrepareEpoch.bind(this)), i.on(z.V.SecureFramesExecuteTransition, this._handleSecureFramesExecuteTransition.bind(this)), i.on(z.V.MLSExternalSenderPackage, this._handleMLSExternalSenderPackage.bind(this)), i.on(z.V.MLSProposals, this._handleMLSProposals.bind(this, i)), i.on(z.V.MLSPrepareCommitTransition, this._handleMLSPrepareCommitTransition.bind(this)), i.on(z.V.MLSWelcome, this._handleMLSWelcome.bind(this)), (this._connectStartTime = (0, _.zO)()), this._connectCount++, (this._connecting = !0), null != i && this._socket === i && (this._trackVoiceConnectionConnecting(), (this._encountered_socket_failure = !1), i.connect());
    }
    destroy() {
        var e, t, n, r, i, o, a;
        if ((this.logger.info('Destroy RTCConnection'), V.Z.removeOnlineCallback(this._handleNetworkOnline), V.Z.removeOfflineCallback(this._handleNetworkOffline), (0, F.isDesktop)() && (null == (o = (a = this).powerMonitorListener) || o.call(a)), er.w.off(er.e.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged), er.w.off(er.e.WindowVisibilityChanged, this.windowVisibilityChanged), this._backoff.cancel(), this._cleanupSocket(), null == (e = this._voiceQuality) || e.stop(), (this._voiceQuality = null), clearInterval(this._voiceQualityPeriodicStatsInterval), (this._voiceQualityPeriodicStatsInterval = null), (this._voiceQualityPeriodicStatsSequenceId = 0), null == (t = this._systemResponsiveness) || t.stop(), (this._systemResponsiveness = null), (this._noiseCancellationError = 0), null == (n = this._voiceDuration) || n.stop(), (this._voiceDuration = null), null == (r = this._videoQuality) || r.stop(), (this._videoQuality = null), (this._videoHealthManager = null), (this._secureFramesState = null), null == (i = this._localMediaSinkWantsManager) || i.reset(), null != this._connection)) {
            let e = this._connection;
            (this._connection = null), e.destroy();
        }
        this.removeAllListeners(), (this._destroyed = !0);
    }
    shouldSendSpeaking(e, t) {
        if ((0, F.isWeb)()) return !0;
        let n = (0, B.yE)(e, eo.Dg.PRIORITY),
            r = (0, B.yE)(this._lastSentSpeakingStatus, eo.Dg.PRIORITY);
        return (this._lastSentSSRC !== t || n !== r) && (void 0 !== this._lastSentSSRC || e !== eo.Dg.NONE) && (this._lastSentSSRC === t || e !== eo.Dg.NONE) && ((this._lastSentSpeakingStatus = e), (this._lastSentSSRC = t), !0);
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
        let e = this._pings.slice(0, Math.min(this._pings.length, ef));
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
                Y.z.State,
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
    setSimulcastDebugOverride(e, t, n) {
        var r, i;
        t === this.context && (t === eo.Yn.DEFAULT ? null == (r = this._localMediaSinkWantsManager) || r.setSimulcastDebugOverride(e, n) : null == (i = this._goLiveQualityManager) || i.setSimulcastDebugOverride(n));
    }
    setVideoSize(e, t, n) {
        var r, i;
        null == (r = this._localMediaSinkWantsManager) || r.setVideoSize(e, t * n), null == (i = this._goLiveQualityManager) || i.setVideoSize(e, t, n);
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
        if ((L.Z.supports(eo.AN.FIXED_KEYFRAME_INTERVAL) && t.push('fixed_keyframe_interval'), 0 !== this._supportedBandwidthEstimationExperiments.length)) {
            let e = T.Z.workerExperimentString();
            null != e && t.push(e);
        }
        (0, I.f)('RtcConnection').enabled && t.push('audio_transport_cc'), (this._selectedExperiments = t);
    }
    _handleConnecting(e) {
        if (null != this.endpoint) {
            let e = D.Z.getChannel(this.channelId),
                t = null == e ? void 0 : e.type;
            this.logger.info('Connecting to RTC server '.concat(this.endpoint, ', rtc-connection-id: ').concat(this.getRTCConnectionId(), ', channel: ').concat(this.channelId, '(').concat(t, ')'));
        }
        this.setState(ei.hes.CONNECTING);
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
                maxDaveProtocolVersion: L.Z.getSupportedSecureFramesProtocolVersion(),
                video: L.Z.supports(eo.AN.VIDEO),
                streamParameters: L.Z.getVideoStreamParameters(this.context)
            }),
            this.setState(ei.hes.AUTHENTICATING);
    }
    _handleDisconnect(e, t, n, r) {
        var i, o, a, s, l, c, u, d, f, _, p, h, m, g, E, b, y, O, I, S, T;
        this.logger.info('Disconnected from RTC server, clean: '.concat(t, ', code: ').concat(n, ', reason: ').concat(r, ', state: ').concat(this.state)),
            t ||
                !this._connecting ||
                this._encountered_socket_failure ||
                (U.default.track(
                    ei.rMx.VOICE_CONNECTION_SOCKET_FAILURE,
                    ec(es({}, this._getAnalyticsProperties()), {
                        hostname: this.hostname,
                        connect_count: this._connectCount,
                        code: n,
                        reason: r
                    })
                ),
                (this._encountered_socket_failure = !0)),
            x.ZP.getRemoteDisconnectVoiceChannelId() === this.channelId && (null == (l = this._connection) || l.wasRemoteDisconnected());
        let N = 'Force Close' !== r;
        if (N) {
            let e = this._backoff.fail(this.reconnect);
            this.logger.warn('Disconnect was not clean! reason='.concat(r, '. Reconnecting in ').concat((e / 1000).toFixed(2), ' seconds.'));
        }
        if (this.state !== ei.hes.DISCONNECTED) {
            let e = this._videoQuality;
            null != e &&
                this.context === eo.Yn.DEFAULT &&
                (e.stop(),
                this._sentVideo &&
                    e.getOutboundStats().forEach((t) => {
                        var n;
                        (null != (n = t.num_frames) ? n : 0) > 0 &&
                            U.default.track(
                                ei.rMx.VIDEO_STREAM_ENDED,
                                ec(
                                    es(
                                        ec(es({}, this._getAnalyticsProperties()), {
                                            app_hardware_acceleration_enabled: G.Z.getAppHardwareAccelerationEnabled(),
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
                                    { device_performance_class: (0, v.Z)() }
                                )
                            );
                    }),
                e.getInboundParticipants().forEach((t) => {
                    var n;
                    let i = e.getInboundStats(t);
                    (null != (n = null == i ? void 0 : i.num_frames) ? n : 0) > 0 &&
                        U.default.track(
                            ei.rMx.VIDEO_STREAM_ENDED,
                            es(
                                ec(es({}, this._getAnalyticsProperties()), {
                                    app_hardware_acceleration_enabled: G.Z.getAppHardwareAccelerationEnabled(),
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
            let t = this.getMediaSessionId();
            L.Z.getMediaEngine()
                .getCodecSurvey()
                .then((e) => {
                    let n = JSON.parse(e);
                    if (null == n || null == n.available_video_encoders || null == n.available_video_decoders) throw Error('codec survey is not available');
                    U.default.track(
                        ei.rMx.VOICE_CODEC_DETECTED,
                        ec(es({}, n), {
                            rtc_connection_id: this.getRTCConnectionId(),
                            media_session_id: t
                        })
                    );
                })
                .catch((e) => {
                    this.logger.warn(e);
                }),
                this._trackMLSFailures();
            let n = k.Z.shouldIncludePreferredRegion() ? k.Z.getPreferredRegion() : null,
                i = L.Z.getSettings(),
                o = D.Z.getChannel(this.channelId),
                a = null == (u = A.Z.getConnectionStats(this.getMediaEngineConnectionId())) || null == (c = u.stats.rtp.outbound.find((e) => 'audio' === e.type)) ? void 0 : c.sampleRateMismatchPercent,
                s = ec(
                    es(
                        ec(es({}, this._getAnalyticsProperties()), {
                            hostname: this.hostname,
                            port: this.port,
                            protocol: this.protocol,
                            reconnect: N,
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
                        null == (O = this._voiceQuality) ? void 0 : O.getAudioDeviceStats(),
                        null == (I = this._voiceDuration) ? void 0 : I.getDurationStats(),
                        this.getAudioDeviceStates(),
                        null == (S = this._systemResponsiveness) ? void 0 : S.getPttQueueLatencyStats()
                    ),
                    {
                        media_session_id: this.getMediaSessionId(),
                        channel_bitrate: null != o ? o.bitrate : null,
                        cloudflare_best_region: n,
                        connect_count: this._connectCount,
                        ping_average: Math.round(this.getAveragePing()),
                        ping_bad_count: this._pingBadCount,
                        ping_timeout: this._pingTimeouts.length,
                        input_detected: this._inputDetected,
                        no_input_detected_notice: L.Z.getNoInputDetectedNotice(),
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
                        device_performance_class: (0, v.Z)(),
                        num_fast_udp_reconnects: null != this._connection ? (null == (T = this._connection) ? void 0 : T.getNumFastUdpReconnects()) : null,
                        parent_media_session_id: this.parentMediaSessionId,
                        audio_subsystem: L.Z.getMediaEngine().getAudioSubsystem(),
                        audio_layer: L.Z.getMediaEngine().getAudioLayer(),
                        automatic_audio_subsystem: i.automaticAudioSubsystem,
                        participant_type: this.getVoiceParticipantType(),
                        audio_capture_sample_rate_mismatch_percent: a
                    }
                );
            (async () => {
                var e, t;
                return null != (t = await (null == (e = this._systemResources) ? void 0 : e.getBatteryLevelStats())) ? t : { batteryUsageRounded: null };
            })().then((e) => {
                let { batteryUsageRounded: t } = e;
                U.default.track(ei.rMx.VOICE_DISCONNECT, ec(es({}, s), { battery_usage: t }));
            });
        }
        if (((this._pingTimeouts = []), (this._pings = []), (this._connectCompletedTime = 0), (this._pingBadCount = 0), (this._inputDetected = !1), (this._mediaSessionId = null), null == (i = this._voiceQuality) || i.stop(), (this._voiceQuality = null), clearInterval(this._voiceQualityPeriodicStatsInterval), (this._voiceQualityPeriodicStatsInterval = null), (this._voiceQualityPeriodicStatsSequenceId = 0), (this._noiseCancellationError = 0), null == (o = this._voiceDuration) || o.stop(), (this._voiceDuration = null), null == (a = this._videoQuality) || a.stop(), (this._videoQuality = null), (this._videoHealthManager = null), null == (s = this._localMediaSinkWantsManager) || s.reset(), (this._secureFramesState = null), (this._userIds = new Set([this.userId])), this._secureFramesRosterMap.clear(), null != this._connection)) {
            let e = this._connection;
            (this._connection = null), e.destroy();
        }
        this.setState(ei.hes.DISCONNECTED, { willReconnect: N });
    }
    _handleResuming(e) {
        var t, n;
        null == (t = this._connection) || t.fastUdpReconnect(), null == (n = this._connection) || n.clearAllSpeaking();
    }
    _handleReady(e, t, n, r, i, o, a) {
        var s, l, c;
        this.setState(ei.hes.RTC_CONNECTING),
            (this.port = n),
            null != a && this._chooseExperiments(a),
            0 === o.length &&
                o.push({
                    type: eo.Tr.VIDEO,
                    rid: '100',
                    ssrc: i + 1,
                    rtxSsrc: i + 2,
                    quality: 100,
                    active: !1
                });
        let u = L.Z.getMediaEngine(),
            d = P.Z.getPersistentCodesEnabled(),
            p = null != (s = w.default.getStaticAuthSessionId()) ? s : void 0,
            h = u.connect(
                this.context,
                this.userId,
                es(
                    {
                        ssrc: i,
                        address: t,
                        port: n,
                        modes: r,
                        experiments: this._selectedExperiments,
                        streamParameters: o,
                        qosEnabled: L.Z.getQoS(),
                        signingKeyId: d ? p : void 0
                    },
                    this._getExtraConnectionOptions()
                )
            );
        h.setUseElectronVideo(u.supports(eo.AN.ELECTRON_VIDEO)), L.Z.supports(eo.AN.IMAGE_QUALITY_MEASUREMENT) && h.setVideoQualityMeasurement('imageQualityWebrtcPsnrDb:5000,imageQualityVmaf_v061:5000,hwdec');
        let g = ['unk'];
        if (this.context === eo.Yn.STREAM) {
            g.push('nvRelaxRc=250'), g.push('nvNewPresets');
            let e = L.Z.getGpuBrand();
            if ((null == e ? void 0 : e.startsWith('NVIDIA')) && parseInt(null != (c = null == (l = e.match(/\d+/)) ? void 0 : l.at(0)) ? c : '0', 10) >= 5000) {
                let { useHevcBlackwellConfig: e } = C.Z.getCurrentConfig({ location: 'handleReady' }, { autoTrackExposure: !0 });
                e && g.push('nvHevcBlackwell');
            }
        }
        h.setVideoEncoderExperiments(g.join(',')),
            h.on(f.Sh.Speaking, (e, t, n) => {
                this.userId === e && this.sendSpeaking(t, n), this.emit(Y.z.Speaking, eb(e), t);
            }),
            h.on(f.Sh.ToggleMuteFromNative, () => {
                this.context === eo.Yn.DEFAULT && m.Z.toggleSelfMute({ playSoundEffect: !1 });
            }),
            h.on(f.Sh.NativeMuteChanged, (e) => {
                this.context === eo.Yn.DEFAULT && E.Z.nativeMuteChanged(e);
            }),
            h.on(f.Sh.Video, (e, t, n, r, i, o) => {
                this._handleVideoStreamId({
                    userId: eb(e),
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
                                100 === t.quality && this.emit(Y.z.VideoSourceQualityChanged, this.guildId, this.channelId, eb(e), t.maxResolution, t.maxFrameRate, this.context);
                            }));
            }),
            h.on(f.Sh.FirstFrame, (e, t, n) => {
                null != this._localMediaSinkWantsManager && (this._localMediaSinkWantsManager.setFirstFrameReceived(t), this.emit(Y.z.Video, this.guildId, this.channelId, eb(e), n, this.rtcServerId)), null != this._goLiveQualityManager && (this._goLiveQualityManager.setFirstFrameReceived(t), this.emit(Y.z.Video, this.guildId, this.channelId, eb(e), n, this.rtcServerId));
            }),
            h.on(f.Sh.Silence, (e) => {
                this._inputDetected = this._inputDetected || !e;
            }),
            h.on(f.Sh.Connected, (r, i) => {
                if ((this.logger.info('RTC connected to media server: '.concat(t, ':').concat(n)), e !== this._socket)) return void this.logger.warn('Socket mismatch, disconnecting');
                switch (((this._voiceQuality = new en.Z(h)), this._voiceQuality.start(), (this._voiceQualityPeriodicStatsSequenceId = 0), (this._voiceQualityPeriodicStatsInterval = setInterval(this._handleVoiceQualityPeriodicsStats, 300000)), (this._systemResponsiveness = new J.Z(h)), this._systemResponsiveness.start(), (this._systemResources = new X.Z()), this._systemResources.setLastBattery(), (this._noiseCancellationError = 0), (this._voiceDuration = new et.Z(this.userId, h)), this._voiceDuration.start(h.getSelfMute(), h.getVoiceFilterId()), (this.protocol = r), r)) {
                    case 'udp':
                        this.logger.info('Sending UDP info to RTC server.', i, this._selectedExperiments),
                            e.once(z.V.Encryption, (e, t) => {
                                h === this._connection && (h.setEncryption(e, t), (this._encryptionMode = e));
                            }),
                            e.selectProtocol(r, this.getRTCConnectionId(), i, this._selectedExperiments);
                        break;
                    case 'webrtc':
                        this.logger.info('Sending local SDP to RTC server.'), e.once(z.V.SDP, this._handleSDP.bind(this)), e.selectProtocol(r, this.getRTCConnectionId(), i);
                        break;
                    default:
                        this.logger.error('Unable to determine protocol.');
                        return;
                }
                this._backoff.succeed();
            }),
            h.on(f.Sh.VideoEncoderFallback, (t) => {
                let n = t
                    .filter((e) => 'video' === e.type)
                    .map((e) => e.name)
                    .join(',');
                this.logger.info('The originally selected video encoder is not working, fallback to the other available encoders: '.concat(n)), e.updateSession({ codecs: t });
            }),
            h.on(f.Sh.Error, (t) => {
                if (e !== this._socket) return;
                let n = k.Z.shouldIncludePreferredRegion() ? k.Z.getPreferredRegion() : null;
                this.logger.error('Error occurred while connecting to RTC server: '.concat(t)),
                    U.default.track(
                        ei.rMx.VOICE_CONNECTION_FAILURE,
                        ec(es({}, this._getAnalyticsProperties()), {
                            hostname: this.hostname,
                            port: this.port,
                            protocol: this.protocol,
                            error: t,
                            cloudflare_best_region: n,
                            connect_count: this._connectCount
                        })
                    );
            }),
            h.on(f.Sh.ConnectionStateChange, (t) => {
                if ((this.logger.info('RTC media connection state change: '.concat(this.state, ' => ').concat(t)), e !== this._socket)) return;
                let n = this.state;
                switch (t) {
                    case eo.$j.DISCONNECTED:
                        this.setState(ei.hes.RTC_DISCONNECTED);
                        break;
                    case eo.$j.CONNECTING:
                        this.setState(ei.hes.RTC_CONNECTING);
                        break;
                    case eo.$j.CONNECTED:
                        this.setState(ei.hes.RTC_CONNECTED);
                        break;
                    case eo.$j.NO_ROUTE:
                        this.setState(ei.hes.NO_ROUTE);
                        break;
                    case eo.$j.ICE_CHECKING:
                        this.setState(ei.hes.ICE_CHECKING);
                        break;
                    case eo.$j.DTLS_CONNECTING:
                        this.setState(ei.hes.DTLS_CONNECTING);
                }
                if ((n === ei.hes.RTC_CONNECTING && this.state === ei.hes.RTC_DISCONNECTED ? this.reconnect() : this.state === ei.hes.NO_ROUTE && (0 === this._backoff.fails && this._handleNoRoute(), this._backoff.fail(this.reconnect)), this.state === ei.hes.RTC_CONNECTED)) {
                    var r, i;
                    let e = k.Z.shouldIncludePreferredRegion() ? k.Z.getPreferredRegion() : null;
                    if (this._connecting) {
                        let t = L.Z.getSettings();
                        U.default.track(
                            ei.rMx.VOICE_CONNECTION_SUCCESS,
                            es(
                                ec(es({}, this._getAnalyticsProperties()), {
                                    hostname: this.hostname,
                                    port: this.port,
                                    protocol: this.protocol,
                                    cloudflare_best_region: e,
                                    connect_time: (0, _.zO)() - (this._connected ? this._connectStartTime : this._createdTime),
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
                    null == (r = this._localMediaSinkWantsManager) || r.setConnection(h), null == (i = this._goLiveQualityManager) || i.update(), (this._connectCompletedTime = (0, _.zO)()), (this._connected = !0), (this._connecting = !1), (this._encountered_socket_failure = !1);
                } else n === ei.hes.RTC_CONNECTED && this.stateHistory.reset(this.state);
            }),
            h.on(f.Sh.SecureFramesUpdate, (e) => {
                (this._secureFramesState = e), this.emit(Y.z.SecureFramesUpdate);
            }),
            h.on(f.Sh.Ping, this._handlePing.bind(this)),
            h.on(f.Sh.PingTimeout, this._handlePingTimeout.bind(this)),
            h.on(f.Sh.OutboundLossRate, this._handleOutboundLossRate.bind(this)),
            h.on(f.Sh.SoundshareTrace, this._handleSoundshareTrace.bind(this)),
            h.on(f.Sh.LocalVideoDisabled, this._handleLocalVideoDisabled.bind(this)),
            h.on(f.Sh.Stats, W.Z.create()),
            h.on(f.Sh.RemoteStreamsReady, this._handleRemoteStreamsReady.bind(this)),
            h.on(f.Sh.NoiseCancellationError, (e) => {
                this._noiseCancellationError = e;
            }),
            h.on(f.Sh.MLSFailure, this._handleMLSFailure.bind(this)),
            h.setRemoteVideoSinkWants(this._remoteVideoSinkWants),
            (this._connection = h),
            (this._mediaEngineConnectionId = h.mediaEngineConnectionId);
    }
    _handleSpeaking(e, t, n, r) {
        let i = this._connection;
        if (null != i && this.userId !== t) {
            var o;
            r !== eo.Dg.NONE &&
                (i.createUser(t, n),
                p.Z.dispatch({
                    type: 'RTC_CONNECTION_USER_CREATE',
                    userId: t,
                    context: this.context
                })),
                null == (o = this._localMediaSinkWantsManager) || o.setAudioSSRC(t, n);
        }
    }
    handleFlags(e, t) {
        this.emit(Y.z.Flags, e, t);
    }
    handlePlatform(e, t) {
        this.emit(Y.z.Platform, e, t, this.channelId);
    }
    getOrCreateVideoQuality() {
        if (null != this._connection && null == this._videoQuality) {
            (this._videoQuality = new ee.S(this._connection)), this._videoQuality.start();
            let { featureEnabled: e, windowLength: t, allowedPoorFpsRatio: n, fpsThreshold: r, backoffTimeSec: i } = R.Z.getConfig(!0);
            if (e) {
                (this._videoHealthManager = new $.y(t, n, r, i)), null != this._localMediaSinkWantsManager && (this._localMediaSinkWantsManager.videoHealthManager = this._videoHealthManager);
                let e = (e, t, n) => {
                    var r, i;
                    (null == (r = this._localMediaSinkWantsManager) ? void 0 : r.shouldReceiveFromUser(e)) && (null == (i = this._videoHealthManager) || i.updateFps(e, t, n));
                };
                this._videoQuality.on(ee.d.FpsUpdate, e);
            }
        }
        return this._videoQuality;
    }
    _handleVideoStreamId(e) {
        var t, n, r, i;
        let { userId: o, streamId: a, videoSsrc: s, videoStreamParameters: l } = e;
        if (
            (this.emit(Y.z.Video, this.guildId, this.channelId, o, a, this.rtcServerId),
            null != a && null == this.getOrCreateVideoQuality() && this.logger.error('_handleVideoStreamId: Unable to create videoQuality.'),
            null != this._videoQuality &&
                this.userId === o &&
                l.forEach((e) => {
                    var t, n;
                    let r = null != (t = e.ssrc) ? t : 0;
                    r > 0 && !0 === e.active && (null == (n = this._videoQuality) || n.setOutboundSsrc(r));
                }),
            this.userId !== o)
        ) {
            let e = 0 === s && null === a;
            (!e || (e && (null == (t = this._videoQuality) ? void 0 : t.getInboundParticipants().includes(o)))) && (null == (n = this._videoQuality) || n.setInboundUser(o, s), null == (r = this._videoHealthManager) || r.createUser(o));
        }
        null != this._connection && this.userId !== o && (null != this._localMediaSinkWantsManager ? this._localMediaSinkWantsManager.setStreamId(o, a) : null != this._goLiveQualityManager && this._goLiveQualityManager.getUserID() === o && (null == (i = this._goLiveQualityManager) || i.setStreamId(a)));
    }
    _handleLocalVideoDisabled(e, t) {
        if (this.userId !== e) {
            let n = this.getOrCreateVideoQuality();
            if (null == n) return void this.logger.error('_handleLocalVideoDisabled: Unable to create videoQuality.');
            n.setUserVideoDisabled(eb(e), t);
        }
    }
    _handleRemoteStreamsReady(e) {
        let t = (0, _.zO)() - this._connectStartTime;
        U.default.track(
            ei.rMx.VOICE_CONNECTION_REMOTE_STREAMS_CREATED,
            ec(es({}, this._getAnalyticsProperties()), {
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
                    type: eo.Tr.VIDEO,
                    rid: e.rid,
                    ssrc: e.ssrc,
                    rtxSsrc: e.rtxSsrc,
                    quality: e.quality,
                    active: r > 0
                }));
                0 === e.length &&
                    e.push({
                        type: eo.Tr.VIDEO,
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
                            active: null == (s = t.active) || s
                        });
                null == (o = this._goLiveQualityManager) || o.setUserID(t), null == (a = this._goLiveQualityManager) || a.updateAudioAndVideoStreamInfo(n, e);
            }
            null == i ||
                i.forEach((e) => {
                    100 === e.quality && this.emit(Y.z.VideoSourceQualityChanged, this.guildId, this.channelId, t, e.maxResolution, e.maxFrameRate, this.context);
                });
        }
    }
    _handleControlPing(e) {
        L.Z.supports(eo.AN.NATIVE_PING) || this._handlePing(e);
    }
    _handlePing(e) {
        if (void 0 !== e) {
            for (
                this._pings.push({
                    time: Date.now(),
                    value: e
                });
                this._pings.length >= ed;

            )
                this._pings.shift();
            e > e_ && this._pingBadCount++, this.emit(Y.z.Ping, this._pings, this.quality);
        }
    }
    _handlePingTimeout(e, t) {
        this._pingTimeouts.push(e);
        let n = this._pingTimeouts.length;
        n >= 3 && this._pingTimeouts[n - 1] === this._pingTimeouts[n - 2] + 1 && this._pingTimeouts[n - 2] === this._pingTimeouts[n - 3] + 1 && this._handlePing(t);
    }
    _handleOutboundLossRate(e) {
        (this._outboundLossRate = e), this.emit(Y.z.OutboundLossRate, e);
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
            this._userIds.add(e), null == (t = this._connection) || t.createUser(e, 0);
        }),
            this.emit(Y.z.ClientConnect, e),
            null == (t = this._goLiveQualityManager) || t.updateCallUserIds(this._userIds),
            null == (n = this._localMediaSinkWantsManager) || n.updateCallUserIds(this._userIds);
    }
    _handleClientDisconnect(e) {
        var t, n, r, i, o;
        let a = this._videoQuality;
        if (null != a && this.context === eo.Yn.DEFAULT) {
            let t = a.getInboundStats(e),
                n = null != (i = null == t ? void 0 : t.num_frames) ? i : 0;
            null != t &&
                n > 0 &&
                (U.default.track(
                    ei.rMx.VIDEO_STREAM_ENDED,
                    es(
                        ec(es({}, this._getAnalyticsProperties()), {
                            app_hardware_acceleration_enabled: G.Z.getAppHardwareAccelerationEnabled(),
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
                null == (o = this._videoHealthManager) || o.deleteUser(e));
        }
        let s = this._connection;
        null != s && s.destroyUser(e), null == (t = this._localMediaSinkWantsManager) || t.destroyUser(e), this._userIds.delete(e), this.emit(Y.z.ClientDisconnect, e), null == (n = this._goLiveQualityManager) || n.updateCallUserIds(this._userIds), null == (r = this._localMediaSinkWantsManager) || r.updateCallUserIds(this._userIds);
    }
    _handleCodecs(e, t) {
        let n = this._connection;
        null != n && null != this.protocol ? n.setCodecs(null != e && '' !== e ? e : eo.ad.OPUS, null != t && '' !== t ? t : eo.ad.H264, this.context) : this.logger.warn('Cannot set codecs on connection with protocol:', this.protocol);
    }
    _handleSDP(e) {
        let t = this._connection;
        null != t && null != this.protocol ? t.setSDP(e) : this.logger.warn('Cannot set SDP on connection with protocol:', this.protocol);
    }
    _handleMediaSessionId(e) {
        (this._mediaSessionId = e), this.logger.info('Setting media-session-id: '.concat(e, ' for rtc-connection-id: ').concat(this.getRTCConnectionId()));
        let t = y.Z.getRawThermalState();
        U.default.track(
            ei.rMx.MEDIA_SESSION_JOINED,
            ec(es({}, this._getAnalyticsProperties()), {
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
        let t = S.Z.getMediaEngineExperiments(e);
        if (null !== t && 0 !== t.length) {
            var n;
            null == (n = this._connection) || n.setBandwidthEstimationExperiments(t);
        }
    }
    _trackSecureFrameTransition(e, t) {
        U.default.track(
            ei.rMx.SECURE_FRAMES_TRANSITION,
            ec(es({}, this._getAnalyticsProperties()), {
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
            ? (this.logger.info('DAVE protocol init with protocol version: '.concat(e)), null == (t = this._connection) || t.prepareSecureFramesEpoch(eg, e, this.trueChannelId), this._sendMLSKeyPackage())
            : null == (n = this._connection) ||
              n.prepareSecureFramesTransition(eE, e, () => {
                  var t;
                  e > 0 && this._trackSecureFrameTransition(eE, e), null == (t = this._connection) || t.executeSecureFramesTransition(eE);
              });
    }
    _handleSecureFramesRosterChange(e) {
        let t = [];
        Object.entries(e).forEach((e) => {
            let [n, r] = e;
            t.push(eb(n)), null == r || 0 === r.byteLength ? this._secureFramesRosterMap.delete(eb(n)) : this._secureFramesRosterMap.set(eb(n), r);
        }),
            this.emit(Y.z.RosterMapUpdate, t);
    }
    _handleSecureFramesPrepareTransition(e, t) {
        var n;
        this.logger.info('Preparing DAVE protocol transition: '.concat(e, ', protocol version: ').concat(t)),
            null == (n = this._connection) ||
                n.prepareSecureFramesTransition(e, t, () => {
                    this._maybeSendSecureFramesTransitionReady(e), this._trackSecureFrameTransition(e, t);
                });
    }
    _handleSecureFramesPrepareEpoch(e, t) {
        var n;
        this.logger.info('Preparing DAVE protocol epoch: '.concat(e, ', protocol version: ').concat(t));
        let r = e.toString();
        null == (n = this._connection) || n.prepareSecureFramesEpoch(r, t, this.trueChannelId), r === eg && this._sendMLSKeyPackage();
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
        if (e !== eE) {
            var t;
            this.logger.info('Sending DAVE protocol ready for transition ID '.concat(e)), null == (t = this._socket) || t.secureFramesReadyForTransition(e);
        }
    }
    _handleSecureFramesExecuteTransition(e) {
        var t;
        this.logger.info('Executing DAVE protocol transition: '.concat(e)), null == (t = this._connection) || t.executeSecureFramesTransition(e);
    }
    _handleMLSExternalSenderPackage(e) {
        var t;
        this.logger.info('Received MLS external sender package'), null == (t = this._connection) || t.updateMLSExternalSender(e);
    }
    _handleMLSProposals(e, t) {
        var n;
        this.logger.info('Received MLS proposals'),
            null == (n = this._connection) ||
                n.processMLSProposals(t, (t) => {
                    this.logger.info('Sending MLS commit welcome message'), e.sendMLSCommitWelcome(t);
                });
    }
    _handleMLSPrepareCommitTransition(e, t) {
        var n;
        this.logger.info('Received MLS commit for transition ID '.concat(e)),
            null == (n = this._connection) ||
                n.prepareMLSCommitTransition(e, t, (t, n, r) => {
                    t ? (this._handleSecureFramesRosterChange(r), this._maybeSendSecureFramesTransitionReady(e), this._trackSecureFrameTransition(e, n), this._recoverMLSFailures()) : (this.logger.warn('Failed to process MLS commit for transition ID '.concat(e)), this._flagMLSInvalidCommitWelcome(e), this._handleSecureFramesInit(n));
                });
    }
    _handleMLSWelcome(e, t) {
        var n;
        this.logger.info('Received MLS welcome for transition ID '.concat(e)),
            null == (n = this._connection) ||
                n.processMLSWelcome(e, t, (t, n, r) => {
                    t ? (this._handleSecureFramesRosterChange(r), this._maybeSendSecureFramesTransitionReady(e), this._trackSecureFrameTransition(e, n), this._recoverMLSFailures()) : (this._flagMLSInvalidCommitWelcome(e), this._sendMLSKeyPackage());
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
        for (let [n, r, i, o] of e)
            U.default.track(
                ei.rMx.MLS_FAILURES,
                ec(es({}, this._getAnalyticsProperties()), {
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
        let t = L.Z.getInputDeviceId();
        return null == (e = L.Z.getInputDevices()[t]) ? void 0 : e.name;
    }
    getOutputDeviceName() {
        var e;
        let t = L.Z.getOutputDeviceId();
        return null == (e = L.Z.getOutputDevices()[t]) ? void 0 : e.name;
    }
    getVideoDeviceName() {
        var e;
        let t = L.Z.getVideoDeviceId();
        return null == (e = L.Z.getVideoDevices()[t]) ? void 0 : e.name;
    }
    getGoLiveSource() {
        return L.Z.getGoLiveSource();
    }
    constructor({ userId: e, sessionId: t, guildId: n, channelId: r, context: i = eo.Yn.DEFAULT, rtcServerId: o, parentMediaSessionId: s }) {
        var l, d;
        super(),
            ea(this, 'context', void 0),
            ea(this, 'userId', void 0),
            ea(this, 'sessionId', void 0),
            ea(this, 'guildId', void 0),
            ea(this, 'parentMediaSessionId', void 0),
            ea(this, 'hostname', void 0),
            ea(this, 'state', void 0),
            ea(this, '_videoQuality', void 0),
            ea(this, '_soundshareStats', void 0),
            ea(this, 'logger', void 0),
            ea(this, 'rtcServerId', void 0),
            ea(this, '_channelId', void 0),
            ea(this, 'channelIds', void 0),
            ea(this, '_endpoint', void 0),
            ea(this, 'port', void 0),
            ea(this, 'token', void 0),
            ea(this, 'protocol', void 0),
            ea(this, 'voiceVersion', void 0),
            ea(this, 'rtcWorkerVersion', void 0),
            ea(this, '_socket', void 0),
            ea(this, '_backoff', void 0),
            ea(this, '_destroyed', void 0),
            ea(this, '_pings', void 0),
            ea(this, '_pingBadCount', void 0),
            ea(this, '_pingTimeouts', void 0),
            ea(this, '_mediaSessionId', void 0),
            ea(this, '_voiceQuality', void 0),
            ea(this, '_voiceQualityPeriodicStatsInterval', void 0),
            ea(this, '_voiceQualityPeriodicStatsSequenceId', void 0),
            ea(this, '_systemResponsiveness', void 0),
            ea(this, '_systemResources', void 0),
            ea(this, '_noiseCancellationError', void 0),
            ea(this, '_voiceDuration', void 0),
            ea(this, '_videoHealthManager', void 0),
            ea(this, '_sentVideo', void 0),
            ea(this, '_outboundLossRate', void 0),
            ea(this, '_recordingEnabled', void 0),
            ea(this, '_selectedExperiments', void 0),
            ea(this, '_localMediaSinkWantsManager', void 0),
            ea(this, '_goLiveQualityManager', void 0),
            ea(this, '_remoteVideoSinkWants', void 0),
            ea(this, '_connection', void 0),
            ea(this, '_mediaEngineConnectionId', void 0),
            ea(this, '_createdTime', void 0),
            ea(this, '_connectStartTime', void 0),
            ea(this, '_connectCompletedTime', void 0),
            ea(this, '_rtcConnectionId', void 0),
            ea(this, '_connectCount', void 0),
            ea(this, '_connected', void 0),
            ea(this, '_connecting', void 0),
            ea(this, '_encountered_socket_failure', void 0),
            ea(this, '_inputDetected', void 0),
            ea(this, '_encryptionMode', void 0),
            ea(this, 'stateHistory', void 0),
            ea(this, '_supportedBandwidthEstimationExperiments', void 0),
            ea(this, '_bandwidthEstimationExperiment', void 0),
            ea(this, '_secureFramesState', void 0),
            ea(this, '_userIds', void 0),
            ea(this, '_secureFramesRosterMap', new Map()),
            ea(this, '_mlsFailuresRecovered', void 0),
            ea(this, '_mlsFailures', void 0),
            ea(this, '_lastSentSpeakingStatus', void 0),
            ea(this, '_lastSentSSRC', void 0),
            ea(this, 'powerMonitorListener', void 0),
            ea(this, 'reconnect', () => {
                let e = this._socket;
                null != e && (this._connected && (this._connectStartTime = (0, _.zO)()), this._connecting || (this._trackVoiceConnectionConnecting(), (this._connecting = !0), (this._encountered_socket_failure = !1)), this._connectCount++, e.close(), e.connect());
            }),
            ea(this, '_alertMLSFailureDebouced', a()(this._alertMLSFailure, 100)),
            ea(this, '_handleNetworkOnline', () => {
                this.expeditedHeartbeat(5000, 'network detected online.');
            }),
            ea(this, '_handleNetworkOffline', () => {
                this.expeditedHeartbeat(15000, 'network detected offline.', !1);
            }),
            ea(this, '_handleNoRoute', () => {
                var e;
                null == (e = this._socket) || e.noRoute();
            }),
            ea(this, '_handlePowerResume', () => {
                this.expeditedHeartbeat(5000, 'power monitor resumed');
            }),
            ea(this, '_handleVoiceQualityPeriodicsStats', () => {
                if (null != this._voiceQuality) {
                    let e = this._voiceQuality.getPeriodicStats();
                    if (this.shouldReportPeriodicStats(e))
                        for (let t of e)
                            U.default.track(
                                ei.rMx.VOICE_QUALITY_PERIODIC_STATS,
                                ec(es({}, this._getAnalyticsProperties()), {
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
            ea(this, 'getAudioDeviceStates', () => ({
                input_device: this.getInputDeviceName(),
                input_device_count: Object.keys(L.Z.getInputDevices()).length,
                output_device: this.getOutputDeviceName(),
                output_device_count: Object.keys(L.Z.getOutputDevices()).length
            })),
            ea(this, 'getVideoDeviceStates', () => ({
                camera_device: this.getVideoDeviceName(),
                camera_device_count: Object.keys(L.Z.getVideoDevices()).length
            })),
            ea(this, '_trackVoiceConnectionConnecting', () => {
                let e = D.Z.getChannel(this.channelId),
                    t = null == e ? void 0 : e.type;
                U.default.track(
                    ei.rMx.VOICE_CONNECTION_CONNECTING,
                    ec(es({}, this.getAudioDeviceStates(), this.getVideoDeviceStates()), {
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
            ea(this, 'incomingVideoEnabledChanged', (e) => {
                var t, n;
                null == (t = this._goLiveQualityManager) || t.onIncomingVideoEnabled(e), null == (n = this._videoQuality) || n.setOcclusionIncomingVideoEnabled(e);
            }),
            ea(this, 'windowVisibilityChanged', (e) => {
                var t;
                null == (t = this._videoQuality) || t.setWindowOcclusionState(!e);
            }),
            (this.context = i),
            (this.logger = new b.Z('RTCConnection('.concat(null != (l = null != o ? o : n) ? l : r, ', ').concat(this.context, ')'))),
            this.logger.enableNativeLogger(!0),
            (this.userId = e),
            (this.sessionId = t),
            (this.guildId = n),
            (this._channelId = r),
            (this.channelIds = new Set([r])),
            (this.rtcServerId = o),
            (this.parentMediaSessionId = s),
            (this._endpoint = null),
            (this.hostname = null),
            (this.port = null),
            (this.token = null),
            (this.voiceVersion = null),
            (this.rtcWorkerVersion = null),
            (this.state = ei.hes.AWAITING_ENDPOINT),
            (this.stateHistory = new K.K(this.state)),
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
        let f = L.Z.supports(eo.AN.FIRST_FRAME_CALLBACK) && L.Z.supports(eo.AN.REMOTE_USER_MULTI_STREAM);
        if (i === eo.Yn.DEFAULT) {
            let t = (null == (d = D.Z.getChannel(this.channelId)) ? void 0 : d.type) === ei.d4z.GUILD_STAGE_VOICE;
            (this._localMediaSinkWantsManager = new q.ZP(e, t, f)),
                this._localMediaSinkWantsManager.on(q.ai.Update, (e) => {
                    if (this.state === ei.hes.RTC_CONNECTED && null != this._socket) {
                        var t;
                        this.logger.info('Media sink wants: '.concat(JSON.stringify(e))), this._socket.mediaSinkWants(e), null == (t = this._connection) || t.setLocalVideoSinkWants(e);
                    }
                }),
                this._localMediaSinkWantsManager.on(q.ai.UserSSRCUpdate, (e, t, n) => {
                    var r;
                    null == (r = this._connection) || r.createUser(e, t, n);
                });
        } else
            i === eo.Yn.STREAM &&
                ((this._goLiveQualityManager = new O.Z(!0)),
                this._goLiveQualityManager.on(O.y.RequestedSSRCsUpdate, (e, t, n) => {
                    var r;
                    null == (r = this._connection) || r.createUser(e, t, n);
                }),
                this._goLiveQualityManager.on(O.y.RequestedStreamsUpdate, (e) => {
                    if (this.state === ei.hes.RTC_CONNECTED && null != this._socket) {
                        var t;
                        this.logger.info('Go Live Media sink wants: '.concat(JSON.stringify(e))), this._socket.mediaSinkWants(e), null == (t = this._connection) || t.setLocalVideoSinkWants(e);
                    }
                }));
        (this._remoteVideoSinkWants = q.Yy),
            er.w.on(er.e.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged),
            er.w.on(er.e.WindowVisibilityChanged, this.windowVisibilityChanged),
            M.ZP.shouldRecordNextConnection() ? ((this._recordingEnabled = !0), g.TC(!1)) : (this._recordingEnabled = !1),
            (this._soundshareStats = new Q.Z()),
            V.Z.addOnlineCallback(this._handleNetworkOnline),
            V.Z.addOfflineCallback(this._handleNetworkOffline),
            (0, F.isDesktop)() && (this.powerMonitorListener = H.Z.remotePowerMonitor.on('resume', this._handlePowerResume)),
            (this._supportedBandwidthEstimationExperiments = []),
            (this._bandwidthEstimationExperiment = null),
            L.Z.getMediaEngine().getSupportedBandwidthEstimationExperiments((e) => {
                this._supportedBandwidthEstimationExperiments = e;
            });
    }
}
