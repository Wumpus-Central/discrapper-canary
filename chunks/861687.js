n.d(t, { Z: () => eN }), n(35282), n(539854), n(388685), n(49124), n(415506), n(457542);
var r = n(654861),
    i = n.n(r),
    a = n(954955),
    o = n.n(a),
    s = n(108131),
    l = n.n(s),
    c = n(772848),
    u = n(261470),
    d = n(95015),
    f = n(47770),
    p = n(46973),
    _ = n(379649),
    m = n(570140),
    h = n(668781),
    g = n(846027),
    E = n(304680),
    b = n(547727),
    y = n(504313),
    O = n(710845),
    v = n(75060),
    S = n(631053),
    I = n(148959),
    T = n(815644),
    C = n(926951),
    A = n(148807),
    N = n(145016),
    P = n(166884),
    R = n(450109),
    w = n(118445),
    D = n(412412),
    x = n(311473),
    L = n(615830),
    j = n(314897),
    M = n(592125),
    k = n(131951),
    U = n(19780),
    G = n(226961),
    Z = n(936349),
    F = n(594174),
    B = n(626135),
    V = n(12647),
    H = n(931619),
    Y = n(358085),
    W = n(960048),
    K = n(591759),
    z = n(579806),
    q = n(859401),
    Q = n(437263),
    X = n(423343),
    J = n(685756),
    $ = n(655306),
    ee = n(179654),
    et = n(36902),
    en = n(824096),
    er = n(53114),
    ei = n(174532),
    ea = n(895066),
    eo = n(798681),
    es = n(981631),
    el = n(65154),
    ec = n(388032);
function eu(e, t, n) {
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
function ed(e) {
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
                eu(e, t, n[t]);
            });
    }
    return e;
}
function ef(e, t) {
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
function ep(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ef(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let e_ = /^https/.test("https:") ? "wss:" : "ws:",
    em = 200,
    eh = 20,
    eg = 500,
    eE = 250,
    eb = 10,
    ey = 5,
    eO = "1",
    ev = 0;
function eS(e) {
    return e;
}
let eI = 0,
    eT = [],
    eC = 50;
function eA() {
    let e = [],
        t = (0, _.zO)();
    for (let n of eT) e.push(ep(ed({}, n), { t: t - n.t }));
    return JSON.stringify(e);
}
class eN extends f.Z {
    recordEvent(e) {
        for (
            eT.push(
                ep(ed({}, e), {
                    t: (0, _.zO)(),
                    n: this._connectionSerial,
                }),
            );
            eT.length > eC;
        )
            eT.shift();
    }
    get quality() {
        let e = this.getLastPing();
        return this.state !== es.hes.RTC_CONNECTED || void 0 === e
            ? es.IE4.UNKNOWN
            : e > eg || (null != this._outboundLossRate && this._outboundLossRate > eb)
              ? es.IE4.BAD
              : e > eE || (null != this._outboundLossRate && this._outboundLossRate > ey)
                ? es.IE4.AVERAGE
                : es.IE4.FINE;
    }
    get endpoint() {
        return this._endpoint;
    }
    set endpoint(e) {
        if (
            (this.recordEvent({
                c: 6,
                e: null != e,
            }),
            null == e)
        )
            (this._endpoint = null), (this.hostname = null);
        else {
            var t;
            e = "".concat(e_, "//").concat(e);
            let { hostname: n, port: r } = null != (t = K.Z.toURLSafe(e)) ? t : {},
                i = null != r ? parseInt(r) : NaN;
            null != n && (80 === i || 443 === i) && (e = "".concat(e_, "//").concat(n)),
                (this._endpoint = e + "/"),
                (this.hostname = n);
        }
    }
    connect(e, t) {
        if (this._destroyed) throw Error("RTCConnection.connect(...): Attempting to connect on destroyed instance.");
        this.recordEvent({
            c: 2,
            e: null != e,
            h: null != t,
        }),
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
                    m.Z.dispatch({
                        type: "RTC_CONNECTION_UPDATE_ID",
                        connection: this,
                    }))),
            null == this.endpoint)
        )
            return void this.setState(es.hes.AWAITING_ENDPOINT);
        let i = this._socket;
        null != i && this._cleanupSocket(),
            null != this._nextChannelId && ((this._channelId = this._nextChannelId), (this._nextChannelId = void 0)),
            (i = this._socket = new J.Z(this.endpoint, this.context)).on(
                J.V.Connecting,
                this._handleConnecting.bind(this, i),
            ),
            i.on(J.V.Connect, this._handleConnect.bind(this, i)),
            i.on(J.V.Disconnect, this._handleDisconnect.bind(this, i)),
            i.on(J.V.Resuming, this._handleResuming.bind(this, i)),
            i.on(J.V.Ready, this._handleReady.bind(this, i)),
            i.on(J.V.Speaking, this._handleSpeaking.bind(this, i)),
            i.on(J.V.Video, this._handleVideo.bind(this, i)),
            i.on(J.V.Ping, this._handleControlPing.bind(this)),
            i.on(J.V.ClientDisconnect, this._handleClientDisconnect.bind(this)),
            i.on(J.V.ClientConnect, this._handleClientConnect.bind(this)),
            i.on(J.V.Codecs, this._handleCodecs.bind(this)),
            i.on(J.V.MediaSessionId, this._handleMediaSessionId.bind(this)),
            i.on(J.V.MediaSinkWants, this._handleMediaSinkWants.bind(this)),
            i.on(J.V.VoiceBackendVersion, this._handleCodeVersion.bind(this)),
            i.on(J.V.KeyframeInterval, this._handleKeyframeInterval.bind(this)),
            i.on(J.V.Flags, this.handleFlags.bind(this)),
            i.on(J.V.Platform, this.handlePlatform.bind(this)),
            i.on(J.V.BandwidthEstimationExperiment, this._handleBandwidthEstimationExperiment.bind(this)),
            i.on(J.V.SecureFramesInit, this._handleSecureFramesInit.bind(this)),
            i.on(J.V.SecureFramesPrepareTransition, this._handleSecureFramesPrepareTransition.bind(this)),
            i.on(J.V.SecureFramesPrepareEpoch, this._handleSecureFramesPrepareEpoch.bind(this)),
            i.on(J.V.SecureFramesExecuteTransition, this._handleSecureFramesExecuteTransition.bind(this)),
            i.on(J.V.MLSExternalSenderPackage, this._handleMLSExternalSenderPackage.bind(this)),
            i.on(J.V.MLSProposals, this._handleMLSProposals.bind(this, i)),
            i.on(J.V.MLSPrepareCommitTransition, this._handleMLSPrepareCommitTransition.bind(this)),
            i.on(J.V.MLSWelcome, this._handleMLSWelcome.bind(this)),
            i.on(J.V.ReceiveMessage, this._recordMessageEvent.bind(this, 4)),
            i.on(J.V.SendMessage, this._recordMessageEvent.bind(this, 5)),
            (this._connectStartTime = (0, _.zO)()),
            this._connectCount++,
            (this._connecting = !0),
            null != i &&
                this._socket === i &&
                (this._trackVoiceConnectionConnecting(), (this._encountered_socket_failure = !1), i.connect());
    }
    _recordMessageEvent(e, t) {
        this.recordEvent({
            c: e,
            o: t,
        });
    }
    destroy() {
        var e, t, n, r, i, a, o, s;
        if (
            (this.logger.info("Destroy RTCConnection"),
            H.Z.removeOnlineCallback(this._handleNetworkOnline),
            H.Z.removeOfflineCallback(this._handleNetworkOffline),
            (0, Y.isDesktop)() && (null == (o = (s = this).powerMonitorListener) || o.call(s)),
            this.recordEvent({ c: 1 }),
            eo.w.off(eo.e.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged),
            eo.w.off(eo.e.WindowVisibilityChanged, this.windowVisibilityChanged),
            this._backoff.cancel(),
            this._cleanupSocket(),
            null == (e = this._voiceQuality) || e.stop(),
            null == (t = this._voiceQuality) || t.removeAllListeners(),
            (this._voiceQuality = null),
            clearInterval(this._voiceQualityPeriodicStatsInterval),
            (this._voiceQualityPeriodicStatsInterval = null),
            (this._voiceQualityPeriodicStatsSequenceId = 0),
            null == (n = this._systemResponsiveness) || n.stop(),
            (this._systemResponsiveness = null),
            (this._noiseCancellationError = 0),
            null == (r = this._voiceDuration) || r.stop(),
            (this._voiceDuration = null),
            null == (i = this._videoQuality) || i.stop(),
            (this._videoQuality = null),
            (this._videoHealthManager = null),
            (this._secureFramesState = null),
            null == (a = this._localMediaSinkWantsManager) || a.reset(),
            null != this._connection)
        ) {
            let e = this._connection;
            (this._connection = null), e.destroy();
        }
        this.removeAllListeners(), (this._destroyed = !0);
    }
    shouldSendSpeaking(e, t) {
        if ((0, Y.isWeb)()) return !0;
        let n = (0, d.yE)(e, el.Dg.PRIORITY),
            r = (0, d.yE)(this._lastSentSpeakingStatus, el.Dg.PRIORITY);
        return (
            (this._lastSentSSRC !== t || n !== r) &&
            (void 0 !== this._lastSentSSRC || e !== el.Dg.NONE) &&
            (this._lastSentSSRC === t || e !== el.Dg.NONE) &&
            ((this._lastSentSpeakingStatus = e), (this._lastSentSSRC = t), !0)
        );
    }
    sendSpeaking(e, t) {
        let n = this._socket;
        if (null == n || !this.shouldSendSpeaking(e, t)) return;
        let r = k.Z.getPacketDelay();
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
    hasActiveRemoteWants() {
        return Object.entries(this._remoteVideoSinkWants).some((e) => {
            let [t, n] = e;
            return Number.isInteger(t)
                ? 0 !== n
                : "any" !== t && ("pixelCounts" === t ? Object.values(n).some((e) => 0 !== e) : void 0);
        });
    }
    pauseStatsCollectionForUser(e, t) {
        let n = this.getOrCreateVideoQuality();
        if (null == n) return void this.logger.error("pauseStatsCollectionForUser: Unable to create videoQuality.");
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
        this.recordEvent({
            c: 8,
            s: e,
        }),
            this.logger.info("RTC connection state: ".concat(this.state, " => ").concat(e)),
            (this.state = e),
            this.stateHistory.update(this.state),
            this.emit(
                Q.z.State,
                e,
                {
                    hostname: this.hostname,
                    channelId: this.trueChannelId,
                    context: this.context,
                },
                t,
            );
    }
    expeditedHeartbeat(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            r = this._socket;
        null != r && r.expeditedHeartbeat(e, t, n) && this._backoff.cancel();
    }
    resetBackoff() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
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
        t === this.context &&
            (t === el.Yn.DEFAULT
                ? null == (r = this._localMediaSinkWantsManager) || r.setSimulcastDebugOverride(e, n)
                : null == (i = this._goLiveQualityManager) || i.setSimulcastDebugOverride(n));
    }
    setVideoSize(e, t, n) {
        var r, i;
        null == (r = this._localMediaSinkWantsManager) || r.setVideoSize(e, t * n),
            null == (i = this._goLiveQualityManager) || i.setVideoSize(e, t, n);
    }
    setVideoZoom(e, t) {
        var n;
        null == (n = this._goLiveQualityManager) || n.setVideoZoom(e, t);
    }
    clearJoinVoiceId() {
        this.joinVoiceId = null;
    }
    setNextChannelId(e) {
        this.recordEvent({ c: 9 });
        let t = M.Z.getChannel(this.channelId),
            n = null == t ? void 0 : t.type;
        this.logger.info("Updating channel: ".concat(e, "(").concat(n, ")")),
            (this._nextChannelId = e),
            this.channelIds.add(e);
    }
    getNextChannelId() {
        var e;
        return null != (e = this._nextChannelId) ? e : this._channelId;
    }
    get channelId() {
        return this._channelId;
    }
    get trueServerId() {
        var e, t;
        return null != (t = null != (e = this.streamServerId) ? e : this.guildId) ? t : this.channelId;
    }
    get trueChannelId() {
        return null == this.streamServerId
            ? this.channelId
            : null != this.streamChannelId
              ? this.streamChannelId
              : i()(this.streamServerId).prev().toString();
    }
    _cleanupSocket() {
        let e = this._socket;
        null != e && (e.close(), e.removeAllListeners(), (this._socket = null));
    }
    _chooseExperiments(e) {
        let t = [];
        if (
            (this._recordingEnabled && t.push("connection_log"),
            k.Z.supports(el.AN.FIXED_KEYFRAME_INTERVAL) && t.push("fixed_keyframe_interval"),
            0 !== this._supportedBandwidthEstimationExperiments.length)
        ) {
            let e = P.Z.workerExperimentString();
            null != e && t.push(e);
        }
        this.context === el.Yn.DEFAULT && (0, T.f)("RtcConnection").enabled && t.push("audio_transport_cc");
        let { enabled: n } = (0, y.h)({ location: "_chooseExperiments" });
        n && t.push("should_analyze_user_voice_volume"),
            t.push("keyframe_on_join"),
            w.Z.getCurrentConfig({ location: "_chooseExperiments" }, { autoTrackExposure: !0 }).enabled &&
                t.push("network_aware_socket");
        let r = A.Z.getCurrentConfig(
            { location: "_chooseExperiments" },
            {
                disable: !(0, Y.isWindows)(),
                autoTrackExposure: !0,
            },
        );
        r.prewarm && t.push("prewarm_cuda_cache"),
            r.clear && t.push("clear_cuda_cache"),
            (this._selectedExperiments = t);
    }
    _handleConnecting(e) {
        if (null != this.endpoint) {
            let e = M.Z.getChannel(this.channelId),
                t = null == e ? void 0 : e.type;
            this.logger.info(
                "Connecting to RTC server "
                    .concat(this.endpoint, ", rtc-connection-id: ")
                    .concat(this.getRTCConnectionId(), ", channel: ")
                    .concat(this.channelId, "(")
                    .concat(t, ")"),
            );
        }
        this.setState(es.hes.CONNECTING);
    }
    _handleConnect(e) {
        let t = this.token;
        if (((this.reconnecting = !1), null == t)) throw Error("RTCConnection._handleConnect(...): Token is missing.");
        this.logger.info("Connected to RTC server."),
            this._fetchAsyncResourcesPromise.finally(() => {
                e.identify({
                    serverId: this.trueServerId,
                    channelId: this.trueChannelId,
                    userId: this.userId,
                    sessionId: this.sessionId,
                    token: t,
                    maxDaveProtocolVersion: k.Z.getSupportedSecureFramesProtocolVersion(),
                    video: k.Z.supports(el.AN.VIDEO),
                    streamParameters: k.Z.getVideoStreamParameters(this.context),
                }),
                    this.setState(es.hes.AUTHENTICATING);
            });
    }
    _handleDisconnect(e, t, n, r) {
        var i, a, o, s, l, c, u, d, f, p, _, m, h, g, E, b, y, O, v, I, T, C;
        this.logger.info(
            "Disconnected from RTC server, clean: "
                .concat(t, ", code: ")
                .concat(n, ", reason: ")
                .concat(r, ", state: ")
                .concat(this.state),
        ),
            t ||
                !this._connecting ||
                this._encountered_socket_failure ||
                (B.default.track(
                    es.rMx.VOICE_CONNECTION_SOCKET_FAILURE,
                    ep(ed({}, this._getAnalyticsProperties()), {
                        hostname: this.hostname,
                        connect_count: this._connectCount,
                        code: n,
                        reason: r,
                    }),
                ),
                (this._encountered_socket_failure = !0)),
            U.Z.getRemoteDisconnectVoiceChannelId() === this.channelId &&
                (null == (l = this._connection) || l.wasRemoteDisconnected());
        let A = "Force Close" !== r;
        if (A) {
            let e = this._backoff.fail(this.reconnect);
            this.logger.warn(
                "Disconnect was not clean! reason="
                    .concat(r, ". Reconnecting in ")
                    .concat((e / 1000).toFixed(2), " seconds."),
            );
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
                                ep(
                                    ed(
                                        ep(ed({}, this._getAnalyticsProperties()), {
                                            app_hardware_acceleration_enabled: V.Z.getAppHardwareAccelerationEnabled(),
                                            media_session_id: this.getMediaSessionId(),
                                            sender_user_id: this.userId,
                                            reason: r,
                                            participant_type: "sender",
                                            guild_region: Z.Z.getRegion(this.hostname),
                                            hostname: this.hostname,
                                            hardware_enabled: k.Z.getHardwareEncoding(),
                                        }),
                                        t,
                                        e.getNetworkStats(),
                                        e.getCodecUsageStats("sender", this.userId),
                                    ),
                                    { device_performance_class: (0, S.Z)() },
                                ),
                            );
                    });
                    let t = e.getCameraDurationStats();
                    null != t &&
                        t.camera_enabled_duration > 0 &&
                        B.default.track(
                            es.rMx.VIDEO_CALL_ENDED,
                            ep(ed({}, t), { media_session_id: this.getMediaSessionId() }),
                        );
                }
                e.getInboundParticipants().forEach((t) => {
                    var n;
                    let i = e.getInboundStats(t);
                    (null != (n = null == i ? void 0 : i.num_frames) ? n : 0) > 0 &&
                        B.default.track(
                            es.rMx.VIDEO_STREAM_ENDED,
                            ed(
                                ep(ed({}, this._getAnalyticsProperties()), {
                                    app_hardware_acceleration_enabled: V.Z.getAppHardwareAccelerationEnabled(),
                                    media_session_id: this.getMediaSessionId(),
                                    sender_user_id: t,
                                    reason: r,
                                    participant_type: "receiver",
                                    guild_region: Z.Z.getRegion(this.hostname),
                                    hostname: this.hostname,
                                    hardware_enabled: k.Z.getHardwareEncoding(),
                                }),
                                i,
                                e.getNetworkStats(),
                                e.getCodecUsageStats("receiver", t),
                            ),
                        );
                });
            }
            let t = this.getMediaSessionId();
            k.Z.getMediaEngine()
                .getCodecSurvey()
                .then((e) => {
                    let n = JSON.parse(e);
                    if (null == n || null == n.available_video_encoders || null == n.available_video_decoders)
                        throw Error("codec survey is not available");
                    B.default.track(
                        es.rMx.VOICE_CODEC_DETECTED,
                        ep(ed({}, n), {
                            rtc_connection_id: this.getRTCConnectionId(),
                            media_session_id: t,
                        }),
                    );
                })
                .catch((e) => {
                    this.logger.warn(e);
                }),
                this._trackMLSFailures({
                    recovered: !1,
                    downgraded: !1,
                });
            let n = Z.Z.shouldIncludePreferredRegion() ? Z.Z.getPreferredRegion() : null,
                i = k.Z.getSettings(),
                a = M.Z.getChannel(this.channelId),
                o =
                    null == (u = R.Z.getConnectionStats(this.getMediaEngineConnectionId())) ||
                    null == (c = u.stats.rtp.outbound.find((e) => "audio" === e.type))
                        ? void 0
                        : c.sampleRateMismatchPercent,
                s = ep(
                    ed(
                        ep(ed({}, this._getAnalyticsProperties()), {
                            hostname: this.hostname,
                            port: this.port,
                            protocol: this.protocol,
                            reconnect: A,
                            reason: r,
                            duration: this.getDuration(),
                        }),
                        U.Z.getUserVoiceSettingsStats(this.context),
                        null == (d = this._voiceQuality) ? void 0 : d.getMosStats(),
                        null == (f = this._voiceQuality) ? void 0 : f.getPacketStats(),
                        null == (p = this._voiceQuality) ? void 0 : p.getBytesStats(),
                        null == (_ = this._voiceQuality) ? void 0 : _.getBufferStats(),
                        null == (m = this._voiceQuality) ? void 0 : m.getNetworkStats(),
                        null == (h = this._voiceQuality) ? void 0 : h.getSystemResourceStats(),
                        null == (g = this._voiceQuality) ? void 0 : g.getFrameOpStats(),
                        null == (E = this._voiceQuality) ? void 0 : E.getDurationStats(),
                        null == (b = this._voiceQuality) ? void 0 : b.getTransportStats(),
                        null == (y = this._voiceQuality) ? void 0 : y.getE2EEStats(),
                        null == (O = this._voiceQuality) ? void 0 : O.getAudioDeviceStats(),
                        null == (v = this._voiceQuality) ? void 0 : v.getAudioLevelStats(),
                        null == (I = this._voiceDuration) ? void 0 : I.getDurationStats(),
                        N.Z.getUsageStats(),
                        this.getAudioDeviceStates(),
                        null == (T = this._systemResponsiveness) ? void 0 : T.getPttQueueLatencyStats(),
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
                        no_input_detected_notice: k.Z.getNoInputDetectedNotice(),
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
                        voice_input_volume: i.inputVolume,
                        encryption_mode: this._encryptionMode,
                        channel_count: this.channelIds.size,
                        device_performance_class: (0, S.Z)(),
                        num_fast_udp_reconnects:
                            null != this._connection
                                ? null == (C = this._connection)
                                    ? void 0
                                    : C.getNumFastUdpReconnects()
                                : null,
                        parent_media_session_id: this.parentMediaSessionId,
                        audio_subsystem: k.Z.getMediaEngine().getAudioSubsystem(),
                        audio_layer: k.Z.getMediaEngine().getAudioLayer(),
                        automatic_audio_subsystem: i.automaticAudioSubsystem,
                        participant_type: this.getVoiceParticipantType(),
                        audio_capture_sample_rate_mismatch_percent: o,
                        krisp_sdk_version: k.Z.getState().krispVersion,
                        secure_frames_max_concurrent_transitions: this._secureFramesMaxConcurrentTransitions,
                        secure_frames_transition_prepare_count: this._secureFramesTransitionPrepareCount,
                        secure_frames_transition_execute_count: this._secureFramesTransitionExecuteCount,
                        vad_use_advanced_voice_activity: i.modeOptions.vadUseKrisp,
                        soundshare_experimental: k.Z.getExperimentalSoundshare(),
                        join_voice_id: this.joinVoiceId,
                        bypass_system_input_processing: i.bypassSystemInputProcessing,
                        system_microphone_mode: k.Z.getSystemMicrophoneMode(),
                    },
                );
            Promise.all([
                (async () => {
                    var e, t;
                    return null != (t = await (null == (e = this._systemResources) ? void 0 : e.getBatteryLevelStats()))
                        ? t
                        : { batteryUsageRounded: null };
                })(),
                x.Z.getKrispModel(),
                k.Z.getKrispEnableStats() ? k.Z.getMediaEngine().getNoiseCancellationStats() : Promise.resolve(null),
            ]).then((e) => {
                let [{ batteryUsageRounded: t }, n, r] = e;
                B.default.track(
                    es.rMx.VOICE_DISCONNECT,
                    ep(ed({}, s), {
                        battery_usage: t,
                        krisp_nc_model: n,
                        duration_low_noise_detected_ms: null == r ? void 0 : r.lowNoiseMs,
                        duration_medium_noise_detected_ms: null == r ? void 0 : r.mediumNoiseMs,
                        duration_high_noise_detected_ms: null == r ? void 0 : r.highNoiseMs,
                        duration_noise_cancellation_voice_detected_ms: null == r ? void 0 : r.talkTimeMs,
                    }),
                );
            }),
                this._trackRemainingSecureFrameTransitions();
        }
        if (
            ((this._pingTimeouts = []),
            (this._pings = []),
            (this._connectCompletedTime = 0),
            (this._pingBadCount = 0),
            (this._inputDetected = !1),
            (this._mediaSessionId = null),
            null == (i = this._voiceQuality) || i.stop(),
            (this._voiceQuality = null),
            clearInterval(this._voiceQualityPeriodicStatsInterval),
            (this._voiceQualityPeriodicStatsInterval = null),
            (this._voiceQualityPeriodicStatsSequenceId = 0),
            (this._noiseCancellationError = 0),
            (this._numNoiseCancellationChanges = 0),
            null == (a = this._voiceDuration) || a.stop(),
            (this._voiceDuration = null),
            null == (o = this._videoQuality) || o.stop(),
            (this._videoQuality = null),
            (this._videoHealthManager = null),
            null == (s = this._localMediaSinkWantsManager) || s.reset(),
            (this._secureFramesState = null),
            (this._userIds = new Set([this.userId])),
            this._secureFramesRosterMap.clear(),
            this._secureFramesTransitionStates.clear(),
            (this._secureFramesNextTransitionState = void 0),
            (this._secureFramesMaxConcurrentTransitions = 0),
            (this._secureFramesTransitionPrepareCount = 0),
            (this._secureFramesTransitionExecuteCount = 0),
            null != this._connection)
        ) {
            let e = this._connection;
            (this._connection = null), e.destroy(this.reconnecting);
        }
        this.setState(es.hes.DISCONNECTED, { willReconnect: A });
    }
    _handleResuming(e) {
        var t, n;
        null == (t = this._connection) || t.fastUdpReconnect(), null == (n = this._connection) || n.clearAllSpeaking();
    }
    _handleReady(e, t, n, r, i, a, o) {
        var s;
        this.setState(es.hes.RTC_CONNECTING),
            (this.port = n),
            this._chooseExperiments(null != o ? o : []),
            0 === a.length &&
                a.push({
                    type: el.Tr.VIDEO,
                    rid: "100",
                    ssrc: i + 1,
                    rtxSsrc: i + 2,
                    quality: 100,
                    active: !1,
                });
        let l = k.Z.getMediaEngine(),
            c = L.Z.getPersistentCodesEnabled(),
            u = null != (s = j.default.getStaticAuthSessionId()) ? s : void 0,
            d = (0, _.zO)(),
            f = l.connect(
                this.context,
                this.userId,
                ed(
                    {
                        ssrc: i,
                        address: t,
                        port: n,
                        modes: r,
                        experiments: this._selectedExperiments,
                        streamParameters: a,
                        qosEnabled: k.Z.getQoS(),
                        signingKeyId: c ? u : void 0,
                    },
                    this.getExtraConnectionOptions(),
                ),
            ),
            h = (0, _.zO)() - d;
        f.setUseElectronVideo(l.supports(el.AN.ELECTRON_VIDEO)),
            k.Z.supports(el.AN.IMAGE_QUALITY_MEASUREMENT) &&
                f.setVideoQualityMeasurement("imageQualityWebrtcPsnrDb:5000,imageQualityVmaf_v061:5000,hwdec");
        let E = ["unk"];
        this.context === el.Yn.STREAM && (E.push("nvRelaxRc=250"), E.push("nvNewPresets")),
            k.Z.getUseVaapiEncoder() && E.push("vaapi"),
            this.context === el.Yn.STREAM &&
                "streamer" === this.getVoiceParticipantType() &&
                (0, D.t)("handleReady").enabled &&
                E.push("useCaptureDeviceForEncode"),
            f.setVideoEncoderExperiments(E.join(",")),
            f.on(p.Sh.Speaking, (e, t, n) => {
                this.userId === e && this.sendSpeaking(t, n), this.emit(Q.z.Speaking, eS(e), t);
            }),
            f.on(p.Sh.ToggleMuteFromNative, () => {
                this.context === el.Yn.DEFAULT && g.Z.toggleSelfMute({ playSoundEffect: !1 });
            }),
            f.on(p.Sh.NativeMuteChanged, (e) => {
                this.context === el.Yn.DEFAULT && b.Z.nativeMuteChanged(e);
            }),
            f.on(p.Sh.Video, (e, t, n, r, i, a) => {
                this._handleVideoStreamId({
                    userId: eS(e),
                    streamId: t,
                    audioSsrc: n,
                    videoSsrc: null != r ? r : 0,
                    rtxSsrc: i,
                    videoStreamParameters: a,
                }),
                    this.userId === e &&
                        (this.sendVideo(null != n ? n : 0, null != r ? r : 0, null != i ? i : 0, a),
                        null == a ||
                            a.forEach((t) => {
                                100 === t.quality &&
                                    this.emit(
                                        Q.z.VideoSourceQualityChanged,
                                        this.guildId,
                                        this.channelId,
                                        eS(e),
                                        t.maxResolution,
                                        t.maxFrameRate,
                                        this.context,
                                    );
                            }));
            }),
            f.on(p.Sh.FirstFrame, (e, t, n) => {
                null != this._localMediaSinkWantsManager &&
                    (this._localMediaSinkWantsManager.setFirstFrameReceived(t),
                    this.emit(Q.z.Video, this.guildId, this.channelId, eS(e), n, this.streamServerId)),
                    null != this._goLiveQualityManager &&
                        (this._goLiveQualityManager.setFirstFrameReceived(t),
                        this.emit(Q.z.Video, this.guildId, this.channelId, eS(e), n, this.streamServerId));
            }),
            f.on(p.Sh.Silence, (e) => {
                this._inputDetected = this._inputDetected || !e;
            }),
            f.on(p.Sh.Connected, (r, i) => {
                if ((this.logger.info("RTC connected to media server: ".concat(t, ":").concat(n)), e !== this._socket))
                    return void this.logger.warn("Socket mismatch, disconnecting");
                switch (
                    ((this._voiceQuality = new ea.Z(f)),
                    this._voiceQuality.start(),
                    this._voiceQuality.on(ea.B.InputDeviceSampleRateChanged, (e) => {
                        m.Z.dispatch({
                            type: "AUDIO_INPUT_DEVICE_SAMPLE_RATE_CHANGED",
                            sampleRate: e,
                        });
                    }),
                    (this._voiceQualityPeriodicStatsSequenceId = 0),
                    (this._voiceQualityPeriodicStatsInterval = setInterval(
                        this._handleVoiceQualityPeriodicsStats,
                        300000,
                    )),
                    (this._systemResponsiveness = new et.Z(f)),
                    this._systemResponsiveness.start(),
                    (this._systemResources = new ee.Z()),
                    this._systemResources.setLastBattery(),
                    (this._noiseCancellationError = 0),
                    (this._voiceDuration = new ei.Z(this.userId, f)),
                    this._voiceDuration.start(f.getSelfMute(), f.getSelfDeaf(), f.getVoiceFilterId()),
                    (this.protocol = r),
                    r)
                ) {
                    case "udp":
                        this.logger.info("Sending UDP info to RTC server.", i, this._selectedExperiments),
                            e.once(J.V.Encryption, (e, t) => {
                                f === this._connection && (f.setEncryption(e, t), (this._encryptionMode = e));
                            }),
                            e.selectProtocol(r, this.getRTCConnectionId(), i, this._selectedExperiments);
                        break;
                    case "webrtc":
                        this.logger.info("Sending local SDP to RTC server."),
                            e.once(J.V.SDP, this._handleSDP.bind(this)),
                            e.selectProtocol(r, this.getRTCConnectionId(), i);
                        break;
                    default:
                        this.logger.error("Unable to determine protocol.");
                        return;
                }
                this._backoff.succeed();
            }),
            f.on(p.Sh.VideoEncoderFallback, (t) => {
                let n = t
                    .filter((e) => "video" === e.type)
                    .map((e) => e.name)
                    .join(",");
                this.logger.info(
                    "The originally selected video encoder is not working, fallback to the other available encoders: ".concat(
                        n,
                    ),
                ),
                    e.updateSession({ codecs: t });
            }),
            f.on(p.Sh.Error, (t) => {
                if (e !== this._socket) return;
                let n = Z.Z.shouldIncludePreferredRegion() ? Z.Z.getPreferredRegion() : null;
                this.logger.error("Error occurred while connecting to RTC server: ".concat(t)),
                    B.default.track(
                        es.rMx.VOICE_CONNECTION_FAILURE,
                        ep(ed({}, this._getAnalyticsProperties()), {
                            hostname: this.hostname,
                            port: this.port,
                            protocol: this.protocol,
                            error: t,
                            cloudflare_best_region: n,
                            connect_count: this._connectCount,
                            join_voice_id: this.joinVoiceId,
                        }),
                    );
            }),
            f.on(p.Sh.ConnectionStateChange, (t) => {
                if (
                    (this.logger.info("RTC media connection state change: ".concat(this.state, " => ").concat(t)),
                    e !== this._socket)
                )
                    return;
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
                if (
                    (n === es.hes.RTC_CONNECTING && this.state === es.hes.RTC_DISCONNECTED
                        ? this.reconnect()
                        : this.state === es.hes.NO_ROUTE &&
                          (0 === this._backoff.fails && this._handleNoRoute(), this._backoff.fail(this.reconnect)),
                    this.state === es.hes.RTC_CONNECTED)
                ) {
                    var r, i, a, o, s, l, c, u, d, p, m, g, E, b;
                    let e = Z.Z.shouldIncludePreferredRegion() ? Z.Z.getPreferredRegion() : null;
                    if (this._connecting) {
                        let t = k.Z.getSettings(),
                            n = this._getAnalyticsProperties();
                        B.default.track(
                            es.rMx.VOICE_CONNECTION_SUCCESS,
                            ed(
                                ep(ed({}, n), {
                                    hostname: this.hostname,
                                    port: this.port,
                                    protocol: this.protocol,
                                    cloudflare_best_region: e,
                                    connect_time:
                                        (0, _.zO)() - (this._connected ? this._connectStartTime : this._createdTime),
                                    connect_count: this._connectCount,
                                    audio_subsystem: k.Z.getMediaEngine().getAudioSubsystem(),
                                    audio_layer: k.Z.getMediaEngine().getAudioLayer(),
                                    automatic_audio_subsystem: t.automaticAudioSubsystem,
                                    media_session_id: this.getMediaSessionId(),
                                    participant_type: this.getVoiceParticipantType(),
                                    join_voice_id: this.joinVoiceId,
                                    is_camera_enabled:
                                        k.Z.getMediaEngine().getVideoInputDeviceId() !== el.Av &&
                                        f.context === el.Yn.DEFAULT,
                                }),
                                this.stateHistory.getVoiceConnectionSuccessStats(),
                            ),
                        );
                        let r = performance.now(),
                            i = (e, t) => (null == e || null == t ? null : e - t);
                        B.default.track(es.rMx.VOICE_CONNECTION_TTC_COLLECTED, {
                            rtc_connection_id: n.rtc_connection_id,
                            time_1_creation_to_connect: this._connectStartTime - this._createdTime,
                            time_2_media_engine_connect: h,
                            time_3_media_engine_create_native_connection:
                                null == (a = f.transportInfo) ? void 0 : a.createConnectionTime,
                            time_4_media_engine_connect_to_socket:
                                null == (o = f.transportInfo) ? void 0 : o.connectTime,
                            time_5_scheduling_connected_callback: i(
                                null == (s = this._connection) ? void 0 : s.onConnectCallbackAt,
                                null == (c = this._connection) || null == (l = c.transportInfo)
                                    ? void 0
                                    : l.connectCallbackScheduledMs,
                            ),
                            time_6_state_connected_to_end_measure: i(
                                r,
                                null == (u = this._connection) ? void 0 : u.onConnectCallbackAt,
                            ),
                            connect_count: this._connectCount,
                            rtc_connecting_native_connect: i(
                                null == (d = this._connection) ? void 0 : d.onConnectCallbackAt,
                                null == (p = this._connection) ? void 0 : p.beginInitializeAt,
                            ),
                            rtc_connecting_native_codecs: i(
                                null == (m = this._connection) ? void 0 : m.onVideoCodecsCallbackAt,
                                null == (g = this._connection) ? void 0 : g.onConnectCallbackAt,
                            ),
                            rtc_connecting_native_crypto_modes: i(
                                null == (E = this._connection) ? void 0 : E.onEncryptionModesCallbackAt,
                                null == (b = this._connection) ? void 0 : b.onVideoCodecsCallbackAt,
                            ),
                        });
                    }
                    null == (r = this._localMediaSinkWantsManager) || r.setConnection(f),
                        null == (i = this._goLiveQualityManager) || i.update(),
                        (this._connectCompletedTime = (0, _.zO)()),
                        (this._connected = !0),
                        (this._connecting = !1),
                        (this._encountered_socket_failure = !1);
                } else n === es.hes.RTC_CONNECTED && this.stateHistory.reset(this.state);
            }),
            f.on(p.Sh.SecureFramesUpdate, (e) => {
                (this._secureFramesState = e), this.emit(Q.z.SecureFramesUpdate);
            }),
            f.on(p.Sh.Ping, this._handlePing.bind(this)),
            f.on(p.Sh.PingTimeout, this._handlePingTimeout.bind(this)),
            f.on(p.Sh.OutboundLossRate, this._handleOutboundLossRate.bind(this)),
            f.on(p.Sh.LocalVideoDisabled, this._handleLocalVideoDisabled.bind(this)),
            f.on(p.Sh.Stats, q.Z.create()),
            f.on(p.Sh.RemoteStreamsReady, this._handleRemoteStreamsReady.bind(this)),
            f.on(p.Sh.UsersMerged, this.handleUsersMerged.bind(this)),
            f.on(p.Sh.NoiseCancellationError, (e) => {
                this._noiseCancellationError = e;
            }),
            f.on(p.Sh.MLSFailure, this._handleMLSFailure.bind(this)),
            f.setRemoteVideoSinkWants(this._remoteVideoSinkWants),
            (this._connection = f),
            (this._mediaEngineConnectionId = f.mediaEngineConnectionId);
    }
    _handleSpeaking(e, t, n, r) {
        let i = this._connection;
        if (null != i && this.userId !== t) {
            var a;
            r !== el.Dg.NONE && i.createUser(t, n),
                null == (a = this._localMediaSinkWantsManager) || a.setAudioSSRC(t, n);
        }
    }
    handleFlags(e, t) {
        this.emit(Q.z.Flags, e, t);
    }
    handlePlatform(e, t) {
        this.emit(Q.z.Platform, e, t, this.channelId);
    }
    handleUsersMerged(e) {
        this.emit(
            Q.z.UsersMerged,
            e.map((e) => e.id),
            this.context,
        );
    }
    getOrCreateVideoQuality() {
        if (null != this._connection && null == this._videoQuality) {
            (this._videoQuality = new er.S(this._connection)),
                this._videoQuality.updateCallUserIdsCount(this._userIds.size),
                this._videoQuality.start();
            let {
                featureEnabled: e,
                windowLength: t,
                allowedPoorFpsRatio: n,
                fpsThreshold: r,
                backoffTimeSec: i,
            } = en.y.defaultConfig;
            if (e) {
                (this._videoHealthManager = new en.y(t, n, r, i)),
                    null != this._localMediaSinkWantsManager &&
                        (this._localMediaSinkWantsManager.videoHealthManager = this._videoHealthManager);
                let e = (e, t, n) => {
                    var r, i;
                    (null == (r = this._localMediaSinkWantsManager) ? void 0 : r.shouldReceiveFromUser(e)) &&
                        (null == (i = this._videoHealthManager) || i.updateFps(e, t, n));
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
            (this.emit(Q.z.Video, this.guildId, this.channelId, a, o, this.streamServerId),
            null != o &&
                null == this.getOrCreateVideoQuality() &&
                this.logger.error("_handleVideoStreamId: Unable to create videoQuality."),
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
            (!e || (e && (null == (t = this._videoQuality) ? void 0 : t.getInboundParticipants().includes(a)))) &&
                (null == (n = this._videoQuality) || n.setInboundUser(a, s),
                null == (r = this._videoHealthManager) || r.createUser(a));
        }
        null != this._connection &&
            this.userId !== a &&
            (null != this._localMediaSinkWantsManager
                ? this._localMediaSinkWantsManager.setStreamId(a, o)
                : null != this._goLiveQualityManager &&
                  this._goLiveQualityManager.getUserID() === a &&
                  (null == (i = this._goLiveQualityManager) || i.setStreamId(o)));
    }
    _handleLocalVideoDisabled(e, t) {
        if (this.userId !== e) {
            let n = this.getOrCreateVideoQuality();
            if (null == n) return void this.logger.error("_handleLocalVideoDisabled: Unable to create videoQuality.");
            n.setUserVideoDisabled(eS(e), t);
        }
    }
    _handleRemoteStreamsReady(e) {
        let t = (0, _.zO)() - this._connectStartTime;
        B.default.track(
            es.rMx.VOICE_CONNECTION_REMOTE_STREAMS_CREATED,
            ep(ed({}, this._getAnalyticsProperties()), {
                number_of_users: e,
                duration_ms: t,
            }),
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
                    active: r > 0,
                }));
                0 === e.length &&
                    e.push({
                        type: el.Tr.VIDEO,
                        rid: "100",
                        ssrc: r,
                        rtxSsrc: r + 1,
                        quality: 100,
                        active: r > 0,
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
                            active: null == (s = t.active) || s,
                        });
                null == (a = this._goLiveQualityManager) || a.setUserID(t),
                    null == (o = this._goLiveQualityManager) || o.updateAudioAndVideoStreamInfo(n, e);
            }
            null == i ||
                i.forEach((e) => {
                    100 === e.quality &&
                        this.emit(
                            Q.z.VideoSourceQualityChanged,
                            this.guildId,
                            this.channelId,
                            t,
                            e.maxResolution,
                            e.maxFrameRate,
                            this.context,
                        );
                });
        }
    }
    _handleControlPing(e) {
        k.Z.supports(el.AN.NATIVE_PING) || this._handlePing(e);
    }
    _handlePing(e) {
        if (void 0 !== e) {
            for (
                this._pings.push({
                    time: Date.now(),
                    value: e,
                });
                this._pings.length >= em;
            )
                this._pings.shift();
            e > eg && this._pingBadCount++, this.emit(Q.z.Ping, this._pings, this.quality);
        }
    }
    _handlePingTimeout(e, t) {
        this._pingTimeouts.push(e);
        let n = this._pingTimeouts.length;
        n >= 3 &&
            this._pingTimeouts[n - 1] === this._pingTimeouts[n - 2] + 1 &&
            this._pingTimeouts[n - 2] === this._pingTimeouts[n - 3] + 1 &&
            this._handlePing(t);
    }
    _handleOutboundLossRate(e) {
        (this._outboundLossRate = e), this.emit(Q.z.OutboundLossRate, e);
    }
    _getAnalyticsProperties() {
        let e = M.Z.getChannel(this.channelId),
            t = null == e ? void 0 : e.type;
        return {
            guild_id: this.guildId,
            channel_id: this.channelId,
            channel_type: t,
            rtc_connection_id: this.getRTCConnectionId(),
            context: this.context,
            voice_backend_version: this.voiceVersion,
            rtc_worker_backend_version: this.rtcWorkerVersion,
        };
    }
    _handleClientConnect(e) {
        var t, n, r;
        e.forEach((e) => {
            var t;
            this._userIds.add(e), null == (t = this._connection) || t.createUser(e, 0);
        }),
            this.emit(Q.z.ClientConnect, e),
            null == (t = this._videoQuality) || t.updateCallUserIdsCount(this._userIds.size),
            null == (n = this._goLiveQualityManager) || n.updateCallUserIds(this._userIds),
            null == (r = this._localMediaSinkWantsManager) || r.updateCallUserIds(this._userIds);
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
                    ed(
                        ep(ed({}, this._getAnalyticsProperties()), {
                            app_hardware_acceleration_enabled: V.Z.getAppHardwareAccelerationEnabled(),
                            media_session_id: this.getMediaSessionId(),
                            sender_user_id: e,
                            reason: "User disconnected",
                            participant_type: "receiver",
                            guild_region: Z.Z.getRegion(this.hostname),
                            hostname: this.hostname,
                            hardware_enabled: k.Z.getHardwareEncoding(),
                        }),
                        t,
                        s.getNetworkStats(),
                        s.getCodecUsageStats("receiver", e),
                    ),
                ),
                s.destroyUser(e),
                null == (o = this._videoHealthManager) || o.deleteUser(e));
        }
        let l = this._connection;
        null != l && l.destroyUser(e),
            null == (t = this._localMediaSinkWantsManager) || t.destroyUser(e),
            this._userIds.delete(e),
            this.emit(Q.z.ClientDisconnect, e),
            null == (n = this._goLiveQualityManager) || n.updateCallUserIds(this._userIds),
            null == (r = this._localMediaSinkWantsManager) || r.updateCallUserIds(this._userIds),
            null == (i = this._videoQuality) || i.updateCallUserIdsCount(this._userIds.size),
            1 === this._userIds.size && (this._secureFramesLastBecameAloneTime = (0, _.zO)());
    }
    _handleCodecs(e, t) {
        let n = this._connection;
        null != n && null != this.protocol
            ? n.setCodecs(null != e && "" !== e ? e : el.ad.OPUS, null != t && "" !== t ? t : el.ad.H264, this.context)
            : this.logger.warn("Cannot set codecs on connection with protocol:", this.protocol);
    }
    _handleSDP(e) {
        let t = this._connection;
        null != t && null != this.protocol
            ? t.setSDP(e)
            : this.logger.warn("Cannot set SDP on connection with protocol:", this.protocol);
    }
    _handleMediaSessionId(e) {
        (this._mediaSessionId = e),
            this.logger.info(
                "Setting media-session-id: ".concat(e, " for rtc-connection-id: ").concat(this.getRTCConnectionId()),
            );
        let t = v.Z.getRawThermalState();
        B.default.track(
            es.rMx.MEDIA_SESSION_JOINED,
            ep(ed({}, this._getAnalyticsProperties()), {
                media_session_id: this.getMediaSessionId(),
                parent_media_session_id: this.parentMediaSessionId,
                raw_thermal_state: t,
            }),
        ),
            m.Z.dispatch({
                type: "MEDIA_SESSION_JOINED",
                mediaSessionId: this.getMediaSessionId(),
                context: this.context,
            });
    }
    _handleMediaSinkWants(e) {
        let t = this._connection;
        this.logger.info("Remote media sink wants: ".concat(JSON.stringify(e))),
            (this._remoteVideoSinkWants = e),
            m.Z.dispatch({
                type: "RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS",
                context: this.context,
                wants: e,
                channelId: this.channelId,
                guildId: this.guildId,
                userId: this.userId,
            }),
            null == t || t.setRemoteVideoSinkWants(e);
    }
    _handleCodeVersion(e, t) {
        (this.voiceVersion = e), (this.rtcWorkerVersion = t);
    }
    _handleKeyframeInterval(e) {
        let t = this._connection;
        null != t && null != this.protocol
            ? t.setKeyframeInterval(e)
            : this.logger.warn("Cannot set keyframe interval on connection with protocol:", this.protocol);
    }
    _handleBandwidthEstimationExperiment(e) {
        this._bandwidthEstimationExperiment = e;
        let t = C.Z.getMediaEngineExperiments(e);
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
        B.default.track(
            es.rMx.SECURE_FRAMES_TRANSITION,
            ep(ed({}, this._getAnalyticsProperties()), {
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
                time_since_creation: (0, _.zO)() - t.creationTime,
                users_added_count: t.usersAdded,
                users_removed_count: t.usersRemoved,
                roster_size_after: t.rosterSizeAfter,
                init_to_finish_duration: r(t.executeFinishedTime, t.initReceivedTime),
            }),
        ),
            e === ev && this._trackRemainingSecureFrameTransitions();
    }
    _trackRemainingSecureFrameTransitions() {
        this._secureFramesTransitionStates.forEach((e, t) => {
            (e.incomplete = !0), this._trackSecureFrameTransition(t);
        });
    }
    _storeSecureFrameNextTransitionData(e) {
        return (
            null == this._secureFramesNextTransitionState &&
                (this._secureFramesNextTransitionState = { creationTime: (0, _.zO)() }),
            (this._secureFramesNextTransitionState = ed({}, this._secureFramesNextTransitionState, e))
        );
    }
    _storeSecureFrameTransitionData(e, t) {
        let n = this._secureFramesTransitionStates.get(e);
        null == n &&
            ((n = this._storeSecureFrameNextTransitionData({})), (this._secureFramesNextTransitionState = void 0)),
            this._secureFramesTransitionStates.set(e, ed({}, n, t)),
            (this._secureFramesMaxConcurrentTransitions = Math.max(
                this._secureFramesMaxConcurrentTransitions,
                this._secureFramesTransitionStates.size,
            ));
    }
    _handleSecureFramesInit(e) {
        var t, n;
        let r = (0, _.zO)();
        this.recordEvent({
            c: 11,
            v: e,
        }),
            e > 0
                ? (this.logger.info("DAVE protocol init with protocol version: ".concat(e)),
                  (this._mlsInitReceivedTime = r),
                  null == (t = this._connection) || t.prepareSecureFramesEpoch(eO, e, this.trueChannelId),
                  this._sendMLSKeyPackage(),
                  this._storeSecureFrameNextTransitionData({
                      initReceivedTime: r,
                      initFinishedTime: (0, _.zO)(),
                      protocolVersion: e,
                  }),
                  this.recordEvent({ c: 10 }))
                : null == (n = this._connection) ||
                  n.prepareSecureFramesTransition(ev, e, () => {
                      let t = !1;
                      try {
                          var n;
                          null == (n = this._connection) || n.executeSecureFramesTransition(ev);
                      } catch (e) {
                          (t = !0), W.Z.captureException(e);
                      }
                      this._storeSecureFrameTransitionData(ev, {
                          initReceivedTime: r,
                          initFinishedTime: (0, _.zO)(),
                          protocolVersion: e,
                          executeError: t,
                      }),
                          this._trackSecureFrameTransition(ev);
                  });
    }
    _handleSecureFramesRosterChange(e, t) {
        let n = [],
            r = 0,
            i = 0;
        Object.entries(e).forEach((e) => {
            let [t, a] = e;
            n.push(eS(t)),
                null == a || 0 === a.byteLength
                    ? (i++, this._secureFramesRosterMap.delete(eS(t)))
                    : (r++, this._secureFramesRosterMap.set(eS(t), a));
        }),
            this._storeSecureFrameTransitionData(t, {
                usersAdded: r,
                usersRemoved: i,
                rosterSizeAfter: this._secureFramesRosterMap.size,
            }),
            this.emit(Q.z.RosterMapUpdate, n);
    }
    _handleSecureFramesPrepareTransition(e, t) {
        var n;
        this.logger.info("Preparing DAVE protocol transition: ".concat(e, ", protocol version: ").concat(t)),
            this._secureFramesTransitionPrepareCount++;
        let r = (0, _.zO)();
        0 === t &&
            this._trackMLSFailures({
                recovered: !0,
                downgraded: !0,
            }),
            null == (n = this._connection) ||
                n.prepareSecureFramesTransition(e, t, () => {
                    this._maybeSendSecureFramesTransitionReady(e),
                        this._storeSecureFrameTransitionData(e, {
                            protocolVersion: t,
                            prepareReceivedTime: r,
                            prepareFinishedTime: (0, _.zO)(),
                        });
                });
    }
    _handleSecureFramesPrepareEpoch(e, t) {
        var n;
        this.logger.info("Preparing DAVE protocol epoch: ".concat(e, ", protocol version: ").concat(t));
        let r = e.toString();
        null == (n = this._connection) || n.prepareSecureFramesEpoch(r, t, this.trueChannelId),
            r === eO &&
                ((this._mlsInitReceivedTime = (0, _.zO)()), this._sendMLSKeyPackage(), this.recordEvent({ c: 10 }));
    }
    _sendMLSKeyPackage() {
        var e;
        null == (e = this._connection) ||
            e.getMLSKeyPackage((e) => {
                var t;
                this.logger.info("Got MLS key package, sending to RTC server"),
                    null == (t = this._socket) || t.sendMLSKeyPackage(e);
            });
    }
    _maybeSendSecureFramesTransitionReady(e) {
        if (e !== ev) {
            var t;
            this.logger.info("Sending DAVE protocol ready for transition ID ".concat(e)),
                null == (t = this._socket) || t.secureFramesReadyForTransition(e),
                this._storeSecureFrameTransitionData(e, { readyTime: (0, _.zO)() });
        }
    }
    _handleSecureFramesExecuteTransition(e) {
        this.logger.info("Executing DAVE protocol transition: ".concat(e)), this._secureFramesTransitionExecuteCount++;
        let t = (0, _.zO)(),
            n = !1;
        try {
            var r;
            null == (r = this._connection) || r.executeSecureFramesTransition(e);
        } catch (e) {
            (n = !0), W.Z.captureException(e);
        }
        this._storeSecureFrameTransitionData(e, {
            executeReceivedTime: t,
            executeFinishedTime: (0, _.zO)(),
            executeError: n,
        }),
            this._trackSecureFrameTransition(e);
    }
    _handleMLSExternalSenderPackage(e) {
        var t;
        this.logger.info("Received MLS external sender package"),
            null == (t = this._connection) || t.updateMLSExternalSender(e);
    }
    _handleMLSProposals(e, t) {
        var n;
        let r = (0, _.zO)();
        this.logger.info("Received MLS proposals"),
            null == (n = this._connection) ||
                n.processMLSProposals(t, (n) => {
                    var i, a, o;
                    let s = (0, _.zO)();
                    this.logger.info("Sending MLS commit welcome message"), e.sendMLSCommitWelcome(n);
                    let l =
                        null != (i = this._secureFramesNextTransitionState)
                            ? i
                            : this._storeSecureFrameNextTransitionData({
                                  firstProposalsReceivedTime: r,
                                  firstProposalsFinishedTime: s,
                              });
                    (l.lastProposalsReceivedTime = r),
                        (l.lastProposalsFinishedTime = s),
                        (l.totalProposalsSize = (null != (a = l.totalProposalsSize) ? a : 0) + t.byteLength),
                        (l.totalCommitWelcomeSize = (null != (o = l.totalCommitWelcomeSize) ? o : 0) + n.byteLength);
                });
    }
    _handleMLSPrepareCommitTransition(e, t) {
        var n;
        this.logger.info("Received MLS commit for transition ID ".concat(e));
        let r = (0, _.zO)();
        null == (n = this._connection) ||
            n.prepareMLSCommitTransition(e, t, (n, i, a) => {
                n
                    ? (this._trackMLSFailures({
                          recovered: !0,
                          downgraded: !1,
                      }),
                      (this._mlsSessionResetStartTime = void 0),
                      this._handleSecureFramesRosterChange(a, e),
                      this._maybeSendSecureFramesTransitionReady(e))
                    : (this.logger.warn("Failed to process MLS commit for transition ID ".concat(e)),
                      (this._mlsSessionResetStartTime = (0, _.zO)()),
                      this._flagMLSInvalidCommitWelcome(e),
                      this._handleSecureFramesInit(i)),
                    this._storeSecureFrameTransitionData(e, {
                        protocolVersion: i,
                        commitReceivedTime: r,
                        commitFinishedTime: (0, _.zO)(),
                        commitSize: t.byteLength,
                        commitError: !n,
                    });
            });
    }
    _handleMLSWelcome(e, t) {
        var n;
        this.logger.info("Received MLS welcome for transition ID ".concat(e));
        let r = (0, _.zO)();
        null == (n = this._connection) ||
            n.processMLSWelcome(e, t, (n, i, a) => {
                n
                    ? (this._trackMLSFailures({
                          recovered: !0,
                          downgraded: !1,
                      }),
                      (this._mlsSessionResetStartTime = void 0),
                      this._handleSecureFramesRosterChange(a, e),
                      this._maybeSendSecureFramesTransitionReady(e))
                    : ((this._mlsSessionResetStartTime = (0, _.zO)()),
                      this._flagMLSInvalidCommitWelcome(e),
                      this._sendMLSKeyPackage()),
                    this._storeSecureFrameTransitionData(e, {
                        protocolVersion: i,
                        welcomeReceivedTime: r,
                        welcomeFinishedTime: (0, _.zO)(),
                        welcomeSize: t.byteLength,
                        welcomeError: !n,
                    });
            });
    }
    getMLSPairwiseFingerprint(e, t, n) {
        var r;
        null == (r = this._connection) || r.getMLSPairwiseFingerprint(e, t, n);
    }
    _flagMLSInvalidCommitWelcome(e) {
        var t;
        this.logger.info("Flagging invalid MLS commit/welcome for transition ID ".concat(e)),
            null == (t = this._socket) || t.flagMLSInvalidCommitWelcome(e);
    }
    _handleMLSFailure(e, t) {
        let n = (0, _.zO)(),
            r = this._nextFailureId++;
        this.recordEvent({
            c: 3,
            i: r,
        }),
            this._mlsFailures.push({
                id: r,
                source: e,
                reason: t,
                count: 1,
                countDuringReset: +(null != this._mlsSessionResetStartTime),
                firstOccurrence: n,
                timeSinceInit: null != this._mlsInitReceivedTime ? n - this._mlsInitReceivedTime : void 0,
                eventLog: eA(),
            }),
            e.includes("GetPersistedKeyPair")
                ? h.Z.show({
                      title: ec.intl.string(ec.t.fJUioH),
                      body: ec.intl.string(ec.t.CQLWvo),
                  })
                : this._alertMLSFailureDebouced(e, t);
    }
    _trackMLSFailures(e) {
        let { recovered: t, downgraded: n } = e,
            r = (0, _.zO)(),
            i = this.getMediaSessionId(),
            a = null != this._mlsSessionResetStartTime ? r - this._mlsSessionResetStartTime : void 0;
        for (let {
            id: e,
            source: o,
            reason: s,
            count: l,
            countDuringReset: c,
            firstOccurrence: u,
            timeSinceInit: d,
            eventLog: f,
        } of this._mlsFailures)
            B.default.track(
                es.rMx.MLS_FAILURES,
                ep(ed({}, this._getAnalyticsProperties()), {
                    media_session_id: i,
                    parent_media_session_id: this.parentMediaSessionId,
                    failure_id: e,
                    failure_time: u - this._createdTime,
                    failure_source: o,
                    failure_reason: s,
                    failure_count: l,
                    failure_was_recovered: t,
                    failure_cleared_by_downgrade: n,
                    time_since_first_occurrence: r - u,
                    time_since_last_reset: a,
                    failure_count_during_reset: c,
                    time_since_init: d,
                    event_history: f,
                    connection_serial: this._connectionSerial,
                }),
            );
        this._mlsFailures = [];
    }
    _alertMLSFailure(e, t) {
        let n = F.default.getCurrentUser();
        ((null == n ? void 0 : n.isStaff()) || (null == n ? void 0 : n.isStaffPersonal())) &&
            h.Z.show({
                title: "MLS Error in ".concat(e),
                body: "Error: ".concat(
                    t,
                    "! Please upload your logs in A/V settings and ask everyone in the call to do the same, and ping us in #av-e2ee in Core Tech!",
                ),
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
        let t = k.Z.getInputDeviceId();
        return null == (e = k.Z.getInputDevices()[t]) ? void 0 : e.name;
    }
    getOutputDeviceName() {
        var e;
        let t = k.Z.getOutputDeviceId();
        return null == (e = k.Z.getOutputDevices()[t]) ? void 0 : e.name;
    }
    getVideoDeviceName() {
        var e;
        let t = k.Z.getVideoDeviceId();
        return null == (e = k.Z.getVideoDevices()[t]) ? void 0 : e.name;
    }
    getInputDeviceSampleRate() {
        var e, t;
        return null !=
            (t = null == (e = this._voiceQuality) ? void 0 : e.getAudioDeviceStats().input_device_session_sample_rate)
            ? t
            : null;
    }
    constructor({
        userId: e,
        sessionId: t,
        guildId: n,
        channelId: r,
        context: i = el.Yn.DEFAULT,
        streamServerId: a,
        streamChannelId: s,
        parentMediaSessionId: l,
        joinVoiceId: d,
    }) {
        super(),
            eu(this, "context", void 0),
            eu(this, "userId", void 0),
            eu(this, "sessionId", void 0),
            eu(this, "guildId", void 0),
            eu(this, "parentMediaSessionId", void 0),
            eu(this, "hostname", void 0),
            eu(this, "state", void 0),
            eu(this, "_videoQuality", void 0),
            eu(this, "logger", void 0),
            eu(this, "streamServerId", void 0),
            eu(this, "streamChannelId", void 0),
            eu(this, "_channelId", void 0),
            eu(this, "_nextChannelId", void 0),
            eu(this, "joinVoiceId", void 0),
            eu(this, "channelIds", void 0),
            eu(this, "_endpoint", void 0),
            eu(this, "port", void 0),
            eu(this, "token", void 0),
            eu(this, "protocol", void 0),
            eu(this, "voiceVersion", void 0),
            eu(this, "rtcWorkerVersion", void 0),
            eu(this, "_socket", void 0),
            eu(this, "_backoff", void 0),
            eu(this, "_destroyed", void 0),
            eu(this, "_pings", void 0),
            eu(this, "_pingBadCount", void 0),
            eu(this, "_pingTimeouts", void 0),
            eu(this, "_mediaSessionId", void 0),
            eu(this, "_voiceQuality", void 0),
            eu(this, "_voiceQualityPeriodicStatsInterval", void 0),
            eu(this, "_voiceQualityPeriodicStatsSequenceId", void 0),
            eu(this, "_systemResponsiveness", void 0),
            eu(this, "_systemResources", void 0),
            eu(this, "_noiseCancellationError", void 0),
            eu(this, "_voiceDuration", void 0),
            eu(this, "_videoHealthManager", void 0),
            eu(this, "_sentVideo", void 0),
            eu(this, "_outboundLossRate", void 0),
            eu(this, "_recordingEnabled", void 0),
            eu(this, "_selectedExperiments", void 0),
            eu(this, "_localMediaSinkWantsManager", void 0),
            eu(this, "_goLiveQualityManager", void 0),
            eu(this, "_remoteVideoSinkWants", void 0),
            eu(this, "_connection", void 0),
            eu(this, "_mediaEngineConnectionId", void 0),
            eu(this, "_createdTime", void 0),
            eu(this, "_connectStartTime", void 0),
            eu(this, "_connectCompletedTime", void 0),
            eu(this, "_rtcConnectionId", void 0),
            eu(this, "_connectCount", void 0),
            eu(this, "_connectionSerial", void 0),
            eu(this, "_connected", void 0),
            eu(this, "_connecting", void 0),
            eu(this, "_encountered_socket_failure", void 0),
            eu(this, "_inputDetected", void 0),
            eu(this, "_encryptionMode", void 0),
            eu(this, "stateHistory", void 0),
            eu(this, "_supportedBandwidthEstimationExperiments", void 0),
            eu(this, "_bandwidthEstimationExperiment", void 0),
            eu(this, "_secureFramesState", void 0),
            eu(this, "_userIds", void 0),
            eu(this, "_secureFramesRosterMap", new Map()),
            eu(this, "reconnecting", !1),
            eu(this, "_nextFailureId", 0),
            eu(this, "_mlsFailures", []),
            eu(this, "_secureFramesTransitionStates", new Map()),
            eu(this, "_secureFramesNextTransitionState", void 0),
            eu(this, "_secureFramesMaxConcurrentTransitions", 0),
            eu(this, "_secureFramesTransitionPrepareCount", 0),
            eu(this, "_secureFramesTransitionExecuteCount", 0),
            eu(this, "_secureFramesLastBecameAloneTime", void 0),
            eu(this, "_mlsSessionResetStartTime", void 0),
            eu(this, "_mlsInitReceivedTime", void 0),
            eu(this, "_numNoiseCancellationChanges", 0),
            eu(this, "_fetchAsyncResourcesPromise", void 0),
            eu(this, "_lastSentSpeakingStatus", void 0),
            eu(this, "_lastSentSSRC", void 0),
            eu(this, "powerMonitorListener", void 0),
            eu(this, "reconnect", () => {
                this.recordEvent({ c: 7 });
                let e = this._socket;
                null != e &&
                    (this._connected && (this._connectStartTime = (0, _.zO)()),
                    this._connecting ||
                        (this._trackVoiceConnectionConnecting(),
                        (this._connecting = !0),
                        (this._encountered_socket_failure = !1)),
                    this._connectCount++,
                    (this.reconnecting = !0),
                    e.close(),
                    e.connect());
            }),
            eu(this, "_alertMLSFailureDebouced", o()(this._alertMLSFailure, 100)),
            eu(this, "_handleNetworkOnline", () => {
                this.expeditedHeartbeat(5000, "network detected online.");
            }),
            eu(this, "_handleNetworkOffline", () => {
                this.expeditedHeartbeat(15000, "network detected offline.", !1);
            }),
            eu(this, "_handleNoRoute", () => {
                var e;
                null == (e = this._socket) || e.noRoute();
            }),
            eu(this, "_handlePowerResume", () => {
                this.expeditedHeartbeat(5000, "power monitor resumed");
            }),
            eu(this, "_handleVoiceQualityPeriodicsStats", () => {
                if (null != this._voiceQuality) {
                    let e = this._voiceQuality.getPeriodicStats();
                    if (this.shouldReportPeriodicStats(e))
                        for (let t of e)
                            B.default.track(
                                es.rMx.VOICE_QUALITY_PERIODIC_STATS,
                                ep(ed({}, this._getAnalyticsProperties()), {
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
                                    parent_media_session_id: this.parentMediaSessionId,
                                }),
                            );
                    this._voiceQualityPeriodicStatsSequenceId++;
                }
            }),
            eu(this, "getAudioDeviceStates", () => ({
                input_device: this.getInputDeviceName(),
                input_device_count: Object.keys(k.Z.getInputDevices()).length,
                output_device: this.getOutputDeviceName(),
                output_device_count: Object.keys(k.Z.getOutputDevices()).length,
            })),
            eu(this, "getVideoDeviceStates", () => ({
                camera_device: this.getVideoDeviceName(),
                camera_device_count: Object.keys(k.Z.getVideoDevices()).length,
            })),
            eu(this, "_trackVoiceConnectionConnecting", () => {
                let e = M.Z.getChannel(this.channelId),
                    t = null == e ? void 0 : e.type;
                B.default.track(
                    es.rMx.VOICE_CONNECTION_CONNECTING,
                    ep(ed({}, this.getAudioDeviceStates(), this.getVideoDeviceStates()), {
                        guild_id: this.guildId,
                        channel_id: this.channelId,
                        rtc_connection_id: this.getRTCConnectionId(),
                        hostname: this.hostname,
                        connect_count: this._connectCount,
                        context: this.context,
                        channel_type: t,
                        participant_type: this.getVoiceParticipantType(),
                        is_muted: k.Z.isMute(),
                        join_voice_id: this.joinVoiceId,
                        connection_serial: this._connectionSerial,
                    }),
                );
            }),
            eu(this, "incomingVideoEnabledChanged", (e) => {
                var t, n;
                null == (t = this._goLiveQualityManager) || t.onIncomingVideoEnabled(e),
                    null == (n = this._videoQuality) || n.setOcclusionIncomingVideoEnabled(e);
            }),
            eu(this, "windowVisibilityChanged", (e) => {
                var t;
                null == (t = this._videoQuality) || t.setWindowOcclusionState(!e);
            }),
            (this.context = i),
            this.recordEvent({ c: 0 }),
            (this._fetchAsyncResourcesPromise = k.Z.fetchAsyncResources().catch((e) => {
                W.Z.captureException(e);
            })),
            (this.userId = e),
            (this.sessionId = t),
            (this.guildId = n),
            (this._channelId = r),
            (this.channelIds = new Set([r])),
            (this.streamServerId = a),
            (this.streamChannelId = s),
            (this.parentMediaSessionId = l),
            (this.joinVoiceId = d),
            (this._connectionSerial = eI++),
            (this.logger = new O.Z("RTCConnection(".concat(this.trueServerId, ", ").concat(this.context, ")"))),
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
            (this._mlsFailures = []),
            (this._nextFailureId = 0),
            (this._mediaEngineConnectionId = null),
            (this.reconnecting = !1),
            (this._lastSentSpeakingStatus = 0),
            (this._lastSentSSRC = void 0);
        let f = k.Z.supports(el.AN.FIRST_FRAME_CALLBACK) && k.Z.supports(el.AN.REMOTE_USER_MULTI_STREAM);
        if (i === el.Yn.DEFAULT) {
            var p;
            let t = (null == (p = M.Z.getChannel(this.channelId)) ? void 0 : p.type) === es.d4z.GUILD_STAGE_VOICE;
            (this._localMediaSinkWantsManager = new $.ZP(e, t, f)),
                this._localMediaSinkWantsManager.on($.ai.Update, (e) => {
                    if (this.state === es.hes.RTC_CONNECTED && null != this._socket) {
                        var t;
                        this.logger.info("Media sink wants: ".concat(JSON.stringify(e))),
                            this._socket.mediaSinkWants(e),
                            null == (t = this._connection) || t.setLocalVideoSinkWants(e);
                    }
                }),
                this._localMediaSinkWantsManager.on($.ai.UserSSRCUpdate, (e, t, n) => {
                    var r;
                    null == (r = this._connection) || r.createUser(e, t, n);
                });
        } else
            i === el.Yn.STREAM &&
                ((this._goLiveQualityManager = new I.Z(!0)),
                this._goLiveQualityManager.on(I.y.RequestedSSRCsUpdate, (e, t, n) => {
                    var r;
                    null == (r = this._connection) || r.createUser(e, t, n);
                }),
                this._goLiveQualityManager.on(I.y.RequestedStreamsUpdate, (e) => {
                    if (this.state === es.hes.RTC_CONNECTED && null != this._socket) {
                        var t;
                        this.logger.info("Go Live Media sink wants: ".concat(JSON.stringify(e))),
                            this._socket.mediaSinkWants(e),
                            null == (t = this._connection) || t.setLocalVideoSinkWants(e);
                    }
                }));
        (this._remoteVideoSinkWants = $.Yy),
            eo.w.on(eo.e.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged),
            eo.w.on(eo.e.WindowVisibilityChanged, this.windowVisibilityChanged),
            G.ZP.shouldRecordNextConnection()
                ? ((this._recordingEnabled = !0), E.TC(!1))
                : (this._recordingEnabled = !1),
            H.Z.addOnlineCallback(this._handleNetworkOnline),
            H.Z.addOfflineCallback(this._handleNetworkOffline),
            (0, Y.isDesktop)() &&
                (this.powerMonitorListener = z.Z.remotePowerMonitor.on("resume", this._handlePowerResume)),
            (this._supportedBandwidthEstimationExperiments = []),
            (this._bandwidthEstimationExperiment = null),
            k.Z.getMediaEngine().getSupportedBandwidthEstimationExperiments((e) => {
                this._supportedBandwidthEstimationExperiments = e;
            });
    }
}
