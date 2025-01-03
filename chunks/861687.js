r.d(n, {
    Z: function () {
        return eI;
    }
});
var i,
    a = r(411104);
var s = r(724458);
var o = r(653041);
var l = r(47120);
var u = r(654861),
    c = r.n(u),
    d = r(954955),
    f = r.n(d),
    _ = r(108131),
    h = r.n(_),
    p = r(772848),
    m = r(261470),
    g = r(47770),
    E = r(46973),
    v = r(379649),
    I = r(570140),
    T = r(668781),
    b = r(846027),
    y = r(304680),
    S = r(547727),
    A = r(710845),
    N = r(75060),
    C = r(631053),
    R = r(148959),
    O = r(926951),
    D = r(166884),
    L = r(868616),
    x = r(848886),
    w = r(583215),
    P = r(576574),
    M = r(307320),
    k = r(615830),
    U = r(314897),
    B = r(592125),
    G = r(131951),
    Z = r(19780),
    F = r(226961),
    V = r(936349),
    j = r(594174),
    H = r(626135),
    Y = r(630388),
    W = r(931619),
    K = r(358085),
    z = r(591759),
    q = r(579806),
    Q = r(859401),
    X = r(437263),
    J = r(423343),
    $ = r(685756),
    ee = r(655306),
    et = r(583794),
    en = r(824096),
    er = r(53114),
    ei = r(174532),
    ea = r(895066),
    es = r(798681),
    eo = r(981631),
    el = r(65154);
function eu(e, n, r) {
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
let ec = /^https/.test(((i = 'https:'), 'https:')) ? 'wss:' : 'ws:',
    ed = 200,
    ef = 20,
    e_ = 500,
    eh = 250,
    ep = 10,
    em = 5,
    eg = '1',
    eE = 0;
function ev(e) {
    return e;
}
class eI extends g.Z {
    get quality() {
        let e = this.getLastPing();
        if (this.state !== eo.hes.RTC_CONNECTED || void 0 === e) return eo.IE4.UNKNOWN;
        if (e > e_ || (null != this._outboundLossRate && this._outboundLossRate > ep)) return eo.IE4.BAD;
        if (e > eh || (null != this._outboundLossRate && this._outboundLossRate > em)) return eo.IE4.AVERAGE;
        else return eo.IE4.FINE;
    }
    get endpoint() {
        return this._endpoint;
    }
    set endpoint(e) {
        if (null == e) (this._endpoint = null), (this.hostname = null);
        else {
            var n;
            e = ''.concat(ec, '//').concat(e);
            let { hostname: r, port: i } = null !== (n = z.Z.toURLSafe(e)) && void 0 !== n ? n : {},
                a = null != i ? parseInt(i) : NaN;
            null != r && (80 === a || 443 === a) && (e = ''.concat(ec, '//').concat(r)), (this._endpoint = e + '/'), (this.hostname = r);
        }
    }
    connect(e, n) {
        if (this._destroyed) throw Error('RTCConnection.connect(...): Attempting to connect on destroyed instance.');
        this._backoff.cancel();
        let { endpoint: r, token: i } = this;
        if (
            ((this.endpoint = e),
            (this.token = n),
            (r !== this.endpoint || i !== n) &&
                (this._cleanupSocket(),
                (this._mediaSessionId = null),
                null != r &&
                    ((this._rtcConnectionId = (0, p.Z)()),
                    I.Z.dispatch({
                        type: 'RTC_CONNECTION_UPDATE_ID',
                        connection: this
                    }))),
            null == this.endpoint)
        ) {
            this.setState(eo.hes.AWAITING_ENDPOINT);
            return;
        }
        let a = this._socket;
        null != a && this._cleanupSocket(), (a = this._socket = new $.Z(this.endpoint, this.context)).on($.V.Connecting, this._handleConnecting.bind(this, a)), a.on($.V.Connect, this._handleConnect.bind(this, a)), a.on($.V.Disconnect, this._handleDisconnect.bind(this, a)), a.on($.V.Resuming, this._handleResuming.bind(this, a)), a.on($.V.Ready, this._handleReady.bind(this, a)), a.on($.V.Speaking, this._handleSpeaking.bind(this, a)), a.on($.V.Video, this._handleVideo.bind(this, a)), a.on($.V.Ping, this._handleControlPing.bind(this)), a.on($.V.ClientDisconnect, this._handleClientDisconnect.bind(this)), a.on($.V.ClientConnect, this._handleClientConnect.bind(this)), a.on($.V.Codecs, this._handleCodecs.bind(this)), a.on($.V.MediaSessionId, this._handleMediaSessionId.bind(this)), a.on($.V.MediaSinkWants, this._handleMediaSinkWants.bind(this)), a.on($.V.VoiceBackendVersion, this._handleCodeVersion.bind(this)), a.on($.V.KeyframeInterval, this._handleKeyframeInterval.bind(this)), a.on($.V.Flags, this.handleFlags.bind(this)), a.on($.V.Platform, this.handlePlatform.bind(this)), a.on($.V.BandwidthEstimationExperiment, this._handleBandwidthEstimationExperiment.bind(this)), a.on($.V.SecureFramesInit, this._handleSecureFramesInit.bind(this)), a.on($.V.SecureFramesPrepareTransition, this._handleSecureFramesPrepareTransition.bind(this)), a.on($.V.SecureFramesPrepareEpoch, this._handleSecureFramesPrepareEpoch.bind(this)), a.on($.V.SecureFramesExecuteTransition, this._handleSecureFramesExecuteTransition.bind(this)), a.on($.V.MLSExternalSenderPackage, this._handleMLSExternalSenderPackage.bind(this)), a.on($.V.MLSProposals, this._handleMLSProposals.bind(this, a)), a.on($.V.MLSPrepareCommitTransition, this._handleMLSPrepareCommitTransition.bind(this)), a.on($.V.MLSWelcome, this._handleMLSWelcome.bind(this)), (this._connectStartTime = (0, v.zO)()), this._connectCount++, (this._connecting = !0), null != a && this._socket === a && (this._trackVoiceConnectionConnecting(), (this._encountered_socket_failure = !1), a.connect());
    }
    destroy() {
        var e, n, r, i, a, s;
        if ((this.logger.info('Destroy RTCConnection'), W.Z.removeOnlineCallback(this._handleNetworkOnline), W.Z.removeOfflineCallback(this._handleNetworkOffline), (0, K.isDesktop)() && (null === (a = (s = this).powerMonitorListener) || void 0 === a || a.call(s)), es.w.off(es.e.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged), es.w.off(es.e.WindowVisibilityChanged, this.windowVisibilityChanged), this._backoff.cancel(), this._cleanupSocket(), null === (e = this._voiceQuality) || void 0 === e || e.stop(), (this._voiceQuality = null), clearInterval(this._voiceQualityPeriodicStatsInterval), (this._voiceQualityPeriodicStatsInterval = null), (this._voiceQualityPeriodicStatsSequenceId = 0), (this._noiseCancellationError = 0), null === (n = this._voiceDuration) || void 0 === n || n.stop(), (this._voiceDuration = null), null === (r = this._videoQuality) || void 0 === r || r.stop(), (this._videoQuality = null), (this._videoHealthManager = null), (this._secureFramesState = null), null === (i = this._localMediaSinkWantsManager) || void 0 === i || i.reset(), null != this._connection)) {
            let e = this._connection;
            (this._connection = null), e.destroy();
        }
        this.removeAllListeners(), (this._destroyed = !0);
    }
    shouldSendSpeaking(e, n) {
        if ((0, K.isWeb)()) return !0;
        let r = (0, Y.yE)(e, el.Dg.PRIORITY),
            i = (0, Y.yE)(this._lastSentSpeakingStatus, el.Dg.PRIORITY);
        if (this._lastSentSSRC === n && r === i) return !1;
        if (void 0 === this._lastSentSSRC && e === el.Dg.NONE) return !1;
        if (this._lastSentSSRC !== n && e === el.Dg.NONE) return !1;
        return (this._lastSentSpeakingStatus = e), (this._lastSentSSRC = n), !0;
    }
    sendSpeaking(e, n) {
        let r = this._socket;
        if (null == r || !this.shouldSendSpeaking(e, n)) return;
        let i = G.Z.getPacketDelay();
        r.speaking(e, i, n);
    }
    sendVideo(e, n, r, i) {
        let a = this._socket;
        null != a && (0 !== n && (this._sentVideo = !0), this._sentVideo && a.video(e, n, r, i));
    }
    getPings() {
        return this._pings;
    }
    getAveragePing() {
        let e = this._pings.slice(0, Math.min(this._pings.length, ef));
        return 0 === e.length || null == this._socket ? 0 : e.reduce((e, n) => e + n.value, 0) / e.length;
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
        let e = this._connectCompletedTime > 0 ? (0, v.zO)() - this._connectCompletedTime : 0;
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
    pauseStatsCollectionForUser(e, n) {
        let r = this.getOrCreateVideoQuality();
        if (null == r) {
            this.logger.error('pauseStatsCollectionForUser: Unable to create videoQuality.');
            return;
        }
        n ? r.addUserToStatsCollectionPausedSet(e) : r.removeUserFromStatsCollectionPausedSet(e);
    }
    setState(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.logger.info('RTC connection state: '.concat(this.state, ' => ').concat(e)),
            (this.state = e),
            this.stateHistory.update(this.state),
            this.emit(
                X.z.State,
                e,
                {
                    hostname: this.hostname,
                    channelId: this.trueChannelId,
                    context: this.context
                },
                n
            );
    }
    expeditedHeartbeat(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
            r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = this._socket;
        null != i && i.expeditedHeartbeat(e, n, r) && this._backoff.cancel();
    }
    resetBackoff() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
            n = this._socket;
        null != n && n.resetBackoff(e) && this._backoff.cancel();
    }
    setSelectedParticipant(e) {
        var n;
        null === (n = this._localMediaSinkWantsManager) || void 0 === n || n.setSelectedParticipant(e);
    }
    setPipOpen(e) {
        var n;
        null === (n = this._localMediaSinkWantsManager) || void 0 === n || n.setPipOpen(e);
    }
    setClipRecordUser(e, n, r) {
        var i, a;
        null === (a = this._connection) || void 0 === a || null === (i = a.setClipRecordUser) || void 0 === i || i.call(a, e, n, r);
    }
    setSimulcastDebugOverride(e, n, r) {
        var i, a;
        if (n === this.context) n === el.Yn.DEFAULT ? null === (i = this._localMediaSinkWantsManager) || void 0 === i || i.setSimulcastDebugOverride(e, r) : null === (a = this._goLiveQualityManager) || void 0 === a || a.setSimulcastDebugOverride(r);
    }
    setVideoSize(e, n, r) {
        var i, a;
        null === (i = this._localMediaSinkWantsManager) || void 0 === i || i.setVideoSize(e, n * r), null === (a = this._goLiveQualityManager) || void 0 === a || a.setVideoSize(e, n, r);
    }
    set channelId(e) {
        (this._channelId = e), this.channelIds.add(e);
    }
    get channelId() {
        return this._channelId;
    }
    get trueChannelId() {
        return null != this.rtcServerId ? c()(this.rtcServerId).prev().toString() : this.channelId;
    }
    _cleanupSocket() {
        let e = this._socket;
        null != e && (e.close(), e.removeAllListeners(), (this._socket = null));
    }
    _chooseExperiments(e) {
        let n = [];
        if ((this._recordingEnabled && n.push('connection_log'), null != this.guildId)) {
            let { shouldOverrideKrisp: e, overrideKrispSetting: r } = L.Z.getCurrentConfig(
                {
                    guildId: this.guildId,
                    location: 'handleReady'
                },
                { autoTrackExposure: !0 }
            );
            e && (r ? n.push('force_krisp_enabled') : n.push('force_krisp_disabled'));
        }
        if ((G.Z.supports(el.AN.FIXED_KEYFRAME_INTERVAL) && n.push('fixed_keyframe_interval'), 0 !== this._supportedBandwidthEstimationExperiments.length)) {
            let e = D.Z.workerExperimentString();
            null != e && n.push(e);
        }
        this._selectedExperiments = n;
    }
    _handleConnecting(e) {
        null != this.endpoint && this.logger.info('Connecting to RTC server '.concat(this.endpoint, ', rtc-connection-id: ').concat(this.getRTCConnectionId())), this.setState(eo.hes.CONNECTING);
    }
    _handleConnect(e) {
        var n, r;
        let i = this.token;
        if (null == i) throw Error('RTCConnection._handleConnect(...): Token is missing.');
        this.logger.info('Connected to RTC server.'),
            e.identify({
                serverId: null !== (r = null !== (n = this.rtcServerId) && void 0 !== n ? n : this.guildId) && void 0 !== r ? r : this.channelId,
                userId: this.userId,
                sessionId: this.sessionId,
                token: i,
                maxDaveProtocolVersion: G.Z.getSupportedSecureFramesProtocolVersion(this.guildId),
                video: G.Z.supports(el.AN.VIDEO),
                streamParameters: G.Z.getVideoStreamParameters(this.context)
            }),
            this.setState(eo.hes.AUTHENTICATING);
    }
    _handleDisconnect(e, n, r, i) {
        var a, s, o, l, u, c;
        this.logger.info('Disconnected from RTC server, clean: '.concat(n, ', code: ').concat(r, ', reason: ').concat(i, ', state: ').concat(this.state)),
            !n &&
                this._connecting &&
                !this._encountered_socket_failure &&
                (H.default.track(eo.rMx.VOICE_CONNECTION_SOCKET_FAILURE, {
                    ...this._getAnalyticsProperties(),
                    hostname: this.hostname,
                    connect_count: this._connectCount,
                    code: r,
                    reason: i
                }),
                (this._encountered_socket_failure = !0)),
            Z.Z.getRemoteDisconnectVoiceChannelId() === this.channelId && (null === (u = this._connection) || void 0 === u || u.wasRemoteDisconnected());
        let d = 'Force Close' !== i;
        if (d) {
            let e = this._backoff.fail(this.reconnect);
            this.logger.warn('Disconnect was not clean! reason='.concat(i, '. Reconnecting in ').concat((e / 1000).toFixed(2), ' seconds.'));
        }
        if (this.state !== eo.hes.DISCONNECTED) {
            let e = this._videoQuality;
            null != e &&
                this.context === el.Yn.DEFAULT &&
                (e.stop(),
                this._sentVideo &&
                    e.getOutboundStats().forEach((n) => {
                        var r;
                        (null !== (r = n.num_frames) && void 0 !== r ? r : 0) > 0 &&
                            H.default.track(eo.rMx.VIDEO_STREAM_ENDED, {
                                ...this._getAnalyticsProperties(),
                                media_session_id: this.getMediaSessionId(),
                                sender_user_id: this.userId,
                                reason: i,
                                participant_type: 'sender',
                                guild_region: V.Z.getRegion(this.hostname),
                                hostname: this.hostname,
                                hardware_enabled: G.Z.getHardwareEncoding(),
                                ...n,
                                ...e.getNetworkStats(),
                                ...e.getCodecUsageStats('sender', this.userId),
                                ...this._soundshareStats.getStats(),
                                device_performance_class: (0, C.Z)()
                            });
                    }),
                e.getInboundParticipants().forEach((n) => {
                    var r;
                    let a = e.getInboundStats(n);
                    (null !== (r = null == a ? void 0 : a.num_frames) && void 0 !== r ? r : 0) > 0 &&
                        H.default.track(eo.rMx.VIDEO_STREAM_ENDED, {
                            ...this._getAnalyticsProperties(),
                            media_session_id: this.getMediaSessionId(),
                            sender_user_id: n,
                            reason: i,
                            participant_type: 'receiver',
                            guild_region: V.Z.getRegion(this.hostname),
                            hostname: this.hostname,
                            hardware_enabled: G.Z.getHardwareEncoding(),
                            ...a,
                            ...e.getNetworkStats(),
                            ...e.getCodecUsageStats('receiver', n)
                        });
                }));
            let n = V.Z.shouldIncludePreferredRegion() ? V.Z.getPreferredRegion() : null,
                r = G.Z.getSettings(),
                a = B.Z.getChannel(this.channelId);
            H.default.track(eo.rMx.VOICE_DISCONNECT, {
                ...this._getAnalyticsProperties(),
                hostname: this.hostname,
                port: this.port,
                protocol: this.protocol,
                reconnect: d,
                reason: i,
                duration: this.getDuration(),
                ...(null != this._voiceQuality ? this._voiceQuality.getMosStats() : null),
                ...(null != this._voiceQuality ? this._voiceQuality.getPacketStats() : null),
                ...(null != this._voiceQuality ? this._voiceQuality.getBytesStats() : null),
                ...(null != this._voiceQuality ? this._voiceQuality.getBufferStats() : null),
                ...(null != this._voiceQuality ? this._voiceQuality.getNetworkStats() : null),
                ...(null != this._voiceQuality ? this._voiceQuality.getSystemResourceStats() : null),
                ...(null != this._voiceQuality ? this._voiceQuality.getFrameOpStats() : null),
                ...(null != this._voiceQuality ? this._voiceQuality.getDurationStats() : null),
                ...(null != this._voiceQuality ? this._voiceQuality.getTransportStats() : null),
                ...(null != this._voiceQuality ? this._voiceQuality.getE2EEStats() : null),
                ...(null != this._voiceQuality ? this._voiceQuality.getAudioDeviceStats() : null),
                ...(null != this._voiceDuration ? this._voiceDuration.getDurationStats() : null),
                ...this.getAudioDeviceStates(),
                media_session_id: this.getMediaSessionId(),
                channel_bitrate: null != a ? a.bitrate : null,
                cloudflare_best_region: n,
                connect_count: this._connectCount,
                ping_average: Math.round(this.getAveragePing()),
                ping_bad_count: this._pingBadCount,
                ping_timeout: this._pingTimeouts.length,
                input_detected: this._inputDetected,
                no_input_detected_notice: G.Z.getNoInputDetectedNotice(),
                audio_input_mode: r.mode,
                automatic_audio_input_sensitivity_enabled: r.modeOptions.autoThreshold,
                audio_input_sensitivity: r.modeOptions.threshold,
                echo_cancellation_enabled: r.echoCancellation,
                sidechain_compression_enabled: r.sidechainCompression,
                noise_suppression_enabled: r.noiseSuppression,
                noise_cancellation_enabled: r.noiseCancellation,
                noise_canceller_error: this._noiseCancellationError,
                automatic_gain_control_enabled: r.automaticGainControl,
                voice_output_volume: r.outputVolume,
                encryption_mode: this._encryptionMode,
                channel_count: this.channelIds.size,
                device_performance_class: (0, C.Z)(),
                num_fast_udp_reconnects: null != this._connection ? (null === (c = this._connection) || void 0 === c ? void 0 : c.getNumFastUdpReconnects()) : null,
                parent_media_session_id: this.parentMediaSessionId,
                audio_subsystem: G.Z.getMediaEngine().getAudioSubsystem(),
                audio_layer: G.Z.getMediaEngine().getAudioLayer(),
                automatic_audio_subsystem: r.automaticAudioSubsystem,
                participant_type: this.getVoiceParticipantType()
            });
            let s = this.getMediaSessionId();
            G.Z.getMediaEngine()
                .getCodecSurvey()
                .then((e) => {
                    let n = JSON.parse(e);
                    if (null == n || null == n.available_video_encoders || null == n.available_video_decoders) throw Error('codec survey is not available');
                    H.default.track(eo.rMx.VOICE_CODEC_DETECTED, {
                        ...n,
                        rtc_connection_id: this.getRTCConnectionId(),
                        media_session_id: s
                    });
                })
                .catch((e) => {
                    this.logger.warn(e);
                }),
                this._trackMLSFailures();
        }
        if (((this._pingTimeouts = []), (this._pings = []), (this._connectCompletedTime = 0), (this._pingBadCount = 0), (this._inputDetected = !1), (this._mediaSessionId = null), null === (a = this._voiceQuality) || void 0 === a || a.stop(), (this._voiceQuality = null), clearInterval(this._voiceQualityPeriodicStatsInterval), (this._voiceQualityPeriodicStatsInterval = null), (this._voiceQualityPeriodicStatsSequenceId = 0), (this._noiseCancellationError = 0), null === (s = this._voiceDuration) || void 0 === s || s.stop(), (this._voiceDuration = null), null === (o = this._videoQuality) || void 0 === o || o.stop(), (this._videoQuality = null), (this._videoHealthManager = null), null === (l = this._localMediaSinkWantsManager) || void 0 === l || l.reset(), (this._secureFramesState = null), (this._userIds = new Set([this.userId])), this._secureFramesRosterMap.clear(), null != this._connection)) {
            let e = this._connection;
            (this._connection = null), e.destroy();
        }
        this.setState(eo.hes.DISCONNECTED, { willReconnect: d });
    }
    _handleResuming(e) {
        var n, r;
        null === (n = this._connection) || void 0 === n || n.fastUdpReconnect(), null === (r = this._connection) || void 0 === r || r.clearAllSpeaking();
    }
    _handleReady(e, n, r, i, a, s, o) {
        var l;
        this.setState(eo.hes.RTC_CONNECTING),
            (this.port = r),
            null != o && this._chooseExperiments(o),
            0 === s.length &&
                s.push({
                    type: el.Tr.VIDEO,
                    rid: '100',
                    ssrc: a + 1,
                    rtxSsrc: a + 2,
                    quality: 100,
                    active: !1
                });
        let u = G.Z.getMediaEngine(),
            c = k.Z.getPersistentCodesEnabled(),
            d = null !== (l = U.default.getStaticAuthSessionId()) && void 0 !== l ? l : void 0,
            f = u.connect(this.context, this.userId, {
                ssrc: a,
                address: n,
                port: r,
                modes: i,
                experiments: this._selectedExperiments,
                streamParameters: s,
                qosEnabled: G.Z.getQoS(),
                signingKeyId: c ? d : void 0,
                ...this._getExtraConnectionOptions()
            });
        f.setUseElectronVideo(u.supports(el.AN.ELECTRON_VIDEO)), G.Z.supports(el.AN.IMAGE_QUALITY_MEASUREMENT) && f.setVideoQualityMeasurement('imageQualityWebrtcPsnrDb:5000,imageQualityVmaf_v061:5000,hwdec');
        let _ = ['unk'];
        if ((G.Z.supports(el.AN.AMD_EXPERIMENTAL_RATE_CONTROL) && _.push('amdRelaxRc'), this.context === el.Yn.STREAM)) {
            let { nvMediumVbvSizeMs: e } = P.Z.getCurrentConfig({ location: 'handleReady' }, { autoTrackExposure: !0 });
            if (e > 0) {
                _.push('nvRelaxRc=' + e);
                let { nvEnableNewPresets: n } = w.Z.getCurrentConfig({ location: 'handleReady' }, { autoTrackExposure: !0 });
                n && _.push('nvNewPresets');
            }
            if (null != this.guildId) {
                let { enableAdaptiveKeyFrame: e } = x.Z.getCurrentConfig(
                    {
                        guildId: this.guildId,
                        location: 'handleReady'
                    },
                    { autoTrackExposure: !0 }
                );
                e && _.push('nvencAdaptiveIDR');
            }
        }
        f.setVideoEncoderExperiments(_.join(',')),
            f.on(E.Sh.Speaking, (e, n, r) => {
                this.userId === e && this.sendSpeaking(n, r), this.emit(X.z.Speaking, ev(e), n);
            }),
            f.on(E.Sh.ToggleMuteFromNative, () => {
                this.context === el.Yn.DEFAULT && b.Z.toggleSelfMute({ playSoundEffect: !1 });
            }),
            f.on(E.Sh.NativeMuteChanged, (e) => {
                this.context === el.Yn.DEFAULT && S.Z.nativeMuteChanged(e);
            }),
            f.on(E.Sh.Video, (e, n, r, i, a, s) => {
                this._handleVideoStreamId({
                    userId: ev(e),
                    streamId: n,
                    audioSsrc: r,
                    videoSsrc: null != i ? i : 0,
                    rtxSsrc: a,
                    videoStreamParameters: s
                }),
                    this.userId === e &&
                        (this.sendVideo(null != r ? r : 0, null != i ? i : 0, null != a ? a : 0, s),
                        null == s ||
                            s.forEach((n) => {
                                100 === n.quality && this.emit(X.z.VideoSourceQualityChanged, this.guildId, this.channelId, ev(e), n.maxResolution, n.maxFrameRate, this.context);
                            }));
            }),
            f.on(E.Sh.FirstFrame, (e, n, r) => {
                null != this._localMediaSinkWantsManager && (this._localMediaSinkWantsManager.setFirstFrameReceived(n), this.emit(X.z.Video, this.guildId, this.channelId, ev(e), r, this.rtcServerId)), null != this._goLiveQualityManager && (this._goLiveQualityManager.setFirstFrameReceived(n), this.emit(X.z.Video, this.guildId, this.channelId, ev(e), r, this.rtcServerId));
            }),
            f.on(E.Sh.Silence, (e) => {
                this._inputDetected = this._inputDetected || !e;
            }),
            f.on(E.Sh.Connected, (i, a) => {
                if ((this.logger.info('RTC connected to media server: '.concat(n, ':').concat(r)), e !== this._socket)) {
                    this.logger.warn('Socket mismatch, disconnecting');
                    return;
                }
                switch (((this._voiceQuality = new ea.Z(f)), this._voiceQuality.start(), (this._voiceQualityPeriodicStatsSequenceId = 0), (this._voiceQualityPeriodicStatsInterval = setInterval(this._handleVoiceQualityPeriodicsStats, 300000)), (this._noiseCancellationError = 0), (this._voiceDuration = new ei.Z(this.userId, f)), this._voiceDuration.start(f.getSelfMute()), (this.protocol = i), i)) {
                    case 'udp':
                        this.logger.info('Sending UDP info to RTC server.', a, this._selectedExperiments),
                            e.once($.V.Encryption, (e, n) => {
                                f === this._connection && (f.setEncryption(e, n), (this._encryptionMode = e));
                            }),
                            e.selectProtocol(i, this.getRTCConnectionId(), a, this._selectedExperiments);
                        break;
                    case 'webrtc':
                        this.logger.info('Sending local SDP to RTC server.'), e.once($.V.SDP, this._handleSDP.bind(this)), e.selectProtocol(i, this.getRTCConnectionId(), a);
                        break;
                    default:
                        this.logger.error('Unable to determine protocol.');
                        return;
                }
                this._backoff.succeed();
            }),
            f.on(E.Sh.VideoEncoderFallback, (n) => {
                let r = n
                    .filter((e) => 'video' === e.type)
                    .map((e) => e.name)
                    .join(',');
                this.logger.info('The originally selected video encoder is not working, fallback to the other available encoders: '.concat(r)), e.updateSession({ codecs: n });
            }),
            f.on(E.Sh.Error, (n) => {
                if (e !== this._socket) return;
                let r = V.Z.shouldIncludePreferredRegion() ? V.Z.getPreferredRegion() : null;
                this.logger.error('Error occurred while connecting to RTC server: '.concat(n)),
                    H.default.track(eo.rMx.VOICE_CONNECTION_FAILURE, {
                        ...this._getAnalyticsProperties(),
                        hostname: this.hostname,
                        port: this.port,
                        protocol: this.protocol,
                        error: n,
                        cloudflare_best_region: r,
                        connect_count: this._connectCount
                    });
            }),
            f.on(E.Sh.ConnectionStateChange, (n) => {
                if ((this.logger.info('RTC media connection state change: '.concat(this.state, ' => ').concat(n)), e !== this._socket)) return;
                let r = this.state;
                switch (n) {
                    case el.$j.DISCONNECTED:
                        this.setState(eo.hes.RTC_DISCONNECTED);
                        break;
                    case el.$j.CONNECTING:
                        this.setState(eo.hes.RTC_CONNECTING);
                        break;
                    case el.$j.CONNECTED:
                        this.setState(eo.hes.RTC_CONNECTED);
                        break;
                    case el.$j.NO_ROUTE:
                        this.setState(eo.hes.NO_ROUTE);
                        break;
                    case el.$j.ICE_CHECKING:
                        this.setState(eo.hes.ICE_CHECKING);
                        break;
                    case el.$j.DTLS_CONNECTING:
                        this.setState(eo.hes.DTLS_CONNECTING);
                }
                if ((r === eo.hes.RTC_CONNECTING && this.state === eo.hes.RTC_DISCONNECTED ? this.reconnect() : this.state === eo.hes.NO_ROUTE && (0 === this._backoff.fails && this._handleNoRoute(), this._backoff.fail(this.reconnect)), this.state === eo.hes.RTC_CONNECTED)) {
                    var i, a;
                    let e = V.Z.shouldIncludePreferredRegion() ? V.Z.getPreferredRegion() : null;
                    if (this._connecting) {
                        let n = G.Z.getSettings();
                        H.default.track(eo.rMx.VOICE_CONNECTION_SUCCESS, {
                            ...this._getAnalyticsProperties(),
                            hostname: this.hostname,
                            port: this.port,
                            protocol: this.protocol,
                            cloudflare_best_region: e,
                            connect_time: (0, v.zO)() - (this._connected ? this._connectStartTime : this._createdTime),
                            connect_count: this._connectCount,
                            audio_subsystem: G.Z.getMediaEngine().getAudioSubsystem(),
                            audio_layer: G.Z.getMediaEngine().getAudioLayer(),
                            automatic_audio_subsystem: n.automaticAudioSubsystem,
                            media_session_id: this.getMediaSessionId(),
                            participant_type: this.getVoiceParticipantType(),
                            ...this.stateHistory.getVoiceConnectionSuccessStats()
                        });
                    }
                    null === (i = this._localMediaSinkWantsManager) || void 0 === i || i.setConnection(f), null === (a = this._goLiveQualityManager) || void 0 === a || a.update(), (this._connectCompletedTime = (0, v.zO)()), (this._connected = !0), (this._connecting = !1), (this._encountered_socket_failure = !1);
                } else r === eo.hes.RTC_CONNECTED && this.stateHistory.reset(this.state);
            }),
            f.on(E.Sh.SecureFramesUpdate, (e) => {
                (this._secureFramesState = e), this.emit(X.z.SecureFramesUpdate);
            }),
            f.on(E.Sh.Ping, this._handlePing.bind(this)),
            f.on(E.Sh.PingTimeout, this._handlePingTimeout.bind(this)),
            f.on(E.Sh.OutboundLossRate, this._handleOutboundLossRate.bind(this)),
            f.on(E.Sh.SoundshareTrace, this._handleSoundshareTrace.bind(this)),
            f.on(E.Sh.LocalVideoDisabled, this._handleLocalVideoDisabled.bind(this)),
            f.on(E.Sh.Stats, Q.Z.create()),
            f.on(E.Sh.RemoteStreamsReady, this._handleRemoteStreamsReady.bind(this)),
            f.on(E.Sh.NoiseCancellationError, (e) => {
                this._noiseCancellationError = e;
            }),
            f.on(E.Sh.MLSFailure, this._handleMLSFailure.bind(this)),
            f.setRemoteVideoSinkWants(this._remoteVideoSinkWants),
            (this._connection = f);
    }
    _handleSpeaking(e, n, r, i) {
        let a = this._connection;
        if (null != a && this.userId !== n) {
            var s;
            i !== el.Dg.NONE &&
                (a.createUser(n, r),
                I.Z.dispatch({
                    type: 'RTC_CONNECTION_USER_CREATE',
                    userId: n,
                    context: this.context
                })),
                null === (s = this._localMediaSinkWantsManager) || void 0 === s || s.setAudioSSRC(n, r);
        }
    }
    handleFlags(e, n) {
        this.emit(X.z.Flags, e, n);
    }
    handlePlatform(e, n) {
        this.emit(X.z.Platform, e, n, this.channelId);
    }
    getOrCreateVideoQuality() {
        if (null != this._connection && null == this._videoQuality) {
            (this._videoQuality = new er.S(this._connection)), this._videoQuality.start();
            let { featureEnabled: e, windowLength: n, allowedPoorFpsRatio: r, fpsThreshold: i, backoffTimeSec: a } = M.Z.getConfig(!0);
            if (e) {
                (this._videoHealthManager = new en.y(n, r, i, a)), null != this._localMediaSinkWantsManager && (this._localMediaSinkWantsManager.videoHealthManager = this._videoHealthManager);
                let e = (e, n, r) => {
                    var i, a;
                    (null === (i = this._localMediaSinkWantsManager) || void 0 === i ? void 0 : i.shouldReceiveFromUser(e)) && (null === (a = this._videoHealthManager) || void 0 === a || a.updateFps(e, n, r));
                };
                this._videoQuality.on(er.d.FpsUpdate, e);
            }
        }
        return this._videoQuality;
    }
    _handleVideoStreamId(e) {
        var n, r, i, a;
        let { userId: s, streamId: o, videoSsrc: l, videoStreamParameters: u } = e;
        if (
            (this.emit(X.z.Video, this.guildId, this.channelId, s, o, this.rtcServerId),
            null != o && null == this.getOrCreateVideoQuality() && this.logger.error('_handleVideoStreamId: Unable to create videoQuality.'),
            null != this._videoQuality &&
                this.userId === s &&
                u.forEach((e) => {
                    var n, r;
                    let i = null !== (n = e.ssrc) && void 0 !== n ? n : 0;
                    i > 0 && !0 === e.active && (null === (r = this._videoQuality) || void 0 === r || r.setOutboundSsrc(i));
                }),
            this.userId !== s)
        ) {
            let e = 0 === l && null === o;
            (!e || (e && (null === (n = this._videoQuality) || void 0 === n ? void 0 : n.getInboundParticipants().includes(s)))) && (null === (r = this._videoQuality) || void 0 === r || r.setInboundUser(s, l), null === (i = this._videoHealthManager) || void 0 === i || i.createUser(s));
        }
        null != this._connection && this.userId !== s && (null != this._localMediaSinkWantsManager ? this._localMediaSinkWantsManager.setStreamId(s, o) : null != this._goLiveQualityManager && this._goLiveQualityManager.getUserID() === s && (null === (a = this._goLiveQualityManager) || void 0 === a || a.setStreamId(o)));
    }
    _handleLocalVideoDisabled(e, n) {
        if (this.userId !== e) {
            let r = this.getOrCreateVideoQuality();
            if (null == r) {
                this.logger.error('_handleLocalVideoDisabled: Unable to create videoQuality.');
                return;
            }
            r.setUserVideoDisabled(ev(e), n);
        }
    }
    _handleRemoteStreamsReady(e) {
        let n = (0, v.zO)() - this._connectStartTime;
        H.default.track(eo.rMx.VOICE_CONNECTION_REMOTE_STREAMS_CREATED, {
            ...this._getAnalyticsProperties(),
            number_of_users: e,
            duration_ms: n
        });
    }
    _handleVideo(e, n, r, i, a) {
        if (null != this._connection && this.userId !== n) {
            if (null != this._localMediaSinkWantsManager) {
                this._localMediaSinkWantsManager.setAudioSSRC(n, r);
                let e = a.map((e) => ({
                    type: el.Tr.VIDEO,
                    rid: e.rid,
                    ssrc: e.ssrc,
                    rtxSsrc: e.rtxSsrc,
                    quality: e.quality,
                    active: i > 0
                }));
                0 === e.length &&
                    e.push({
                        type: el.Tr.VIDEO,
                        rid: '100',
                        ssrc: i,
                        rtxSsrc: i + 1,
                        quality: 100,
                        active: i > 0
                    }),
                    this._localMediaSinkWantsManager.setVideoSSRCs(n, e);
            } else {
                var s, o, l;
                let e = [];
                for (let n of a)
                    null != n.ssrc &&
                        null != n.quality &&
                        e.push({
                            ssrc: n.ssrc,
                            quality: n.quality,
                            active: null === (l = n.active) || void 0 === l || l
                        });
                null === (s = this._goLiveQualityManager) || void 0 === s || s.setUserID(n), null === (o = this._goLiveQualityManager) || void 0 === o || o.updateAudioAndVideoStreamInfo(r, e);
            }
            null == a ||
                a.forEach((e) => {
                    100 === e.quality && this.emit(X.z.VideoSourceQualityChanged, this.guildId, this.channelId, n, e.maxResolution, e.maxFrameRate, this.context);
                });
        }
    }
    _handleControlPing(e) {
        !G.Z.supports(el.AN.NATIVE_PING) && this._handlePing(e);
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
            e > e_ && this._pingBadCount++, this.emit(X.z.Ping, this._pings, this.quality);
        }
    }
    _handlePingTimeout(e, n) {
        this._pingTimeouts.push(e);
        let r = this._pingTimeouts.length;
        r >= 3 && this._pingTimeouts[r - 1] === this._pingTimeouts[r - 2] + 1 && this._pingTimeouts[r - 2] === this._pingTimeouts[r - 3] + 1 && this._handlePing(n);
    }
    _handleOutboundLossRate(e) {
        (this._outboundLossRate = e), this.emit(X.z.OutboundLossRate, e);
    }
    _handleSoundshareTrace(e) {
        this._soundshareStats.traceEvent(void 0, e);
    }
    _getAnalyticsProperties() {
        let e = B.Z.getChannel(this.channelId),
            n = null != e ? e.type : null;
        return {
            guild_id: this.guildId,
            channel_id: this.channelId,
            channel_type: n,
            rtc_connection_id: this.getRTCConnectionId(),
            context: this.context,
            voice_backend_version: this.voiceVersion,
            rtc_worker_backend_version: this.rtcWorkerVersion
        };
    }
    _handleClientConnect(e) {
        var n, r;
        e.forEach((e) => {
            var n;
            this._userIds.add(e), null === (n = this._connection) || void 0 === n || n.createUser(e, 0);
        }),
            this.emit(X.z.ClientConnect, e),
            null === (n = this._goLiveQualityManager) || void 0 === n || n.updateCallUserIds(this._userIds),
            null === (r = this._localMediaSinkWantsManager) || void 0 === r || r.updateCallUserIds(this._userIds);
    }
    _handleClientDisconnect(e) {
        var n, r, i, a, s;
        let o = this._videoQuality;
        if (null != o && this.context === el.Yn.DEFAULT) {
            let n = o.getInboundStats(e),
                r = null !== (a = null == n ? void 0 : n.num_frames) && void 0 !== a ? a : 0;
            null != n &&
                r > 0 &&
                (H.default.track(eo.rMx.VIDEO_STREAM_ENDED, {
                    ...this._getAnalyticsProperties(),
                    media_session_id: this.getMediaSessionId(),
                    sender_user_id: e,
                    reason: 'User disconnected',
                    participant_type: 'receiver',
                    guild_region: V.Z.getRegion(this.hostname),
                    hostname: this.hostname,
                    hardware_enabled: G.Z.getHardwareEncoding(),
                    ...n,
                    ...o.getNetworkStats(),
                    ...o.getCodecUsageStats('receiver', e)
                }),
                o.destroyUser(e),
                null === (s = this._videoHealthManager) || void 0 === s || s.deleteUser(e));
        }
        let l = this._connection;
        null != l && l.destroyUser(e), null === (n = this._localMediaSinkWantsManager) || void 0 === n || n.destroyUser(e), this._userIds.delete(e), this.emit(X.z.ClientDisconnect, e), null === (r = this._goLiveQualityManager) || void 0 === r || r.updateCallUserIds(this._userIds), null === (i = this._localMediaSinkWantsManager) || void 0 === i || i.updateCallUserIds(this._userIds);
    }
    _handleCodecs(e, n) {
        let r = this._connection;
        null != r && null != this.protocol ? r.setCodecs(null != e && '' !== e ? e : el.ad.OPUS, null != n && '' !== n ? n : el.ad.H264, this.context) : this.logger.warn('Cannot set codecs on connection with protocol:', this.protocol);
    }
    _handleSDP(e) {
        let n = this._connection;
        null != n && null != this.protocol ? n.setSDP(e) : this.logger.warn('Cannot set SDP on connection with protocol:', this.protocol);
    }
    _handleMediaSessionId(e) {
        (this._mediaSessionId = e), this.logger.info('Setting media-session-id: '.concat(e, ' for rtc-connection-id: ').concat(this.getRTCConnectionId()));
        let n = N.Z.getRawThermalState();
        H.default.track(eo.rMx.MEDIA_SESSION_JOINED, {
            ...this._getAnalyticsProperties(),
            media_session_id: this.getMediaSessionId(),
            parent_media_session_id: this.parentMediaSessionId,
            raw_thermal_state: n
        }),
            I.Z.dispatch({
                type: 'MEDIA_SESSION_JOINED',
                mediaSessionId: this.getMediaSessionId(),
                context: this.context
            });
    }
    _handleMediaSinkWants(e) {
        let n = this._connection;
        this.logger.info('Remote media sink wants: '.concat(JSON.stringify(e))), (this._remoteVideoSinkWants = e), null == n || n.setRemoteVideoSinkWants(e);
    }
    _handleCodeVersion(e, n) {
        (this.voiceVersion = e), (this.rtcWorkerVersion = n);
    }
    _handleKeyframeInterval(e) {
        let n = this._connection;
        null != n && null != this.protocol ? n.setKeyframeInterval(e) : this.logger.warn('Cannot set keyframe interval on connection with protocol:', this.protocol);
    }
    _handleBandwidthEstimationExperiment(e) {
        this._bandwidthEstimationExperiment = e;
        let n = O.Z.getMediaEngineExperiments(e);
        if (null !== n && 0 !== n.length) {
            var r;
            null === (r = this._connection) || void 0 === r || r.setBandwidthEstimationExperiments(n);
        }
    }
    _trackSecureFrameTransition(e, n) {
        H.default.track(eo.rMx.SECURE_FRAMES_TRANSITION, {
            ...this._getAnalyticsProperties(),
            media_session_id: this.getMediaSessionId(),
            parent_media_session_id: this.parentMediaSessionId,
            sender_user_id: this.userId,
            transition_id: e,
            protocol_version: n
        });
    }
    _handleSecureFramesInit(e) {
        var n, r;
        e > 0
            ? (this.logger.info('DAVE protocol init with protocol version: '.concat(e)), null === (n = this._connection) || void 0 === n || n.prepareSecureFramesEpoch(eg, e, this.trueChannelId), this._sendMLSKeyPackage())
            : null === (r = this._connection) ||
              void 0 === r ||
              r.prepareSecureFramesTransition(eE, e, () => {
                  var n;
                  e > 0 && this._trackSecureFrameTransition(eE, e), null === (n = this._connection) || void 0 === n || n.executeSecureFramesTransition(eE);
              });
    }
    _handleSecureFramesRosterChange(e) {
        let n = [];
        Object.entries(e).forEach((e) => {
            let [r, i] = e;
            n.push(ev(r)), null == i || 0 === i.byteLength ? this._secureFramesRosterMap.delete(ev(r)) : this._secureFramesRosterMap.set(ev(r), i);
        }),
            this.emit(X.z.RosterMapUpdate, n);
    }
    _handleSecureFramesPrepareTransition(e, n) {
        var r;
        this.logger.info('Preparing DAVE protocol transition: '.concat(e, ', protocol version: ').concat(n)),
            null === (r = this._connection) ||
                void 0 === r ||
                r.prepareSecureFramesTransition(e, n, () => {
                    this._maybeSendSecureFramesTransitionReady(e), this._trackSecureFrameTransition(e, n);
                });
    }
    _handleSecureFramesPrepareEpoch(e, n) {
        var r;
        this.logger.info('Preparing DAVE protocol epoch: '.concat(e, ', protocol version: ').concat(n));
        let i = e.toString();
        null === (r = this._connection) || void 0 === r || r.prepareSecureFramesEpoch(i, n, this.trueChannelId), i === eg && this._sendMLSKeyPackage();
    }
    _sendMLSKeyPackage() {
        var e;
        null === (e = this._connection) ||
            void 0 === e ||
            e.getMLSKeyPackage((e) => {
                var n;
                this.logger.info('Got MLS key package, sending to RTC server'), null === (n = this._socket) || void 0 === n || n.sendMLSKeyPackage(e);
            });
    }
    _maybeSendSecureFramesTransitionReady(e) {
        if (e !== eE) {
            var n;
            this.logger.info('Sending DAVE protocol ready for transition ID '.concat(e)), null === (n = this._socket) || void 0 === n || n.secureFramesReadyForTransition(e);
        }
    }
    _handleSecureFramesExecuteTransition(e) {
        var n;
        this.logger.info('Executing DAVE protocol transition: '.concat(e)), null === (n = this._connection) || void 0 === n || n.executeSecureFramesTransition(e);
    }
    _handleMLSExternalSenderPackage(e) {
        var n;
        this.logger.info('Received MLS external sender package'), null === (n = this._connection) || void 0 === n || n.updateMLSExternalSender(e);
    }
    _handleMLSProposals(e, n) {
        var r;
        this.logger.info('Received MLS proposals'),
            null === (r = this._connection) ||
                void 0 === r ||
                r.processMLSProposals(n, (n) => {
                    this.logger.info('Sending MLS commit welcome message'), e.sendMLSCommitWelcome(n);
                });
    }
    _handleMLSPrepareCommitTransition(e, n) {
        var r;
        this.logger.info('Received MLS commit for transition ID '.concat(e)),
            null === (r = this._connection) ||
                void 0 === r ||
                r.prepareMLSCommitTransition(e, n, (n, r, i) => {
                    n ? (this._handleSecureFramesRosterChange(i), this._maybeSendSecureFramesTransitionReady(e), this._trackSecureFrameTransition(e, r), this._recoverMLSFailures()) : (this.logger.warn('Failed to process MLS commit for transition ID '.concat(e)), this._flagMLSInvalidCommitWelcome(e), this._handleSecureFramesInit(r));
                });
    }
    _handleMLSWelcome(e, n) {
        var r;
        this.logger.info('Received MLS welcome for transition ID '.concat(e)),
            null === (r = this._connection) ||
                void 0 === r ||
                r.processMLSWelcome(e, n, (n, r, i) => {
                    n ? (this._handleSecureFramesRosterChange(i), this._maybeSendSecureFramesTransitionReady(e), this._trackSecureFrameTransition(e, r), this._recoverMLSFailures()) : (this._flagMLSInvalidCommitWelcome(e), this._sendMLSKeyPackage());
                });
    }
    getMLSPairwiseFingerprint(e, n, r) {
        var i;
        null === (i = this._connection) || void 0 === i || i.getMLSPairwiseFingerprint(e, n, r);
    }
    _flagMLSInvalidCommitWelcome(e) {
        var n;
        this.logger.info('Flagging invalid MLS commit/welcome for transition ID '.concat(e)), null === (n = this._socket) || void 0 === n || n.flagMLSInvalidCommitWelcome(e);
    }
    _handleMLSFailure(e, n) {
        let r = ''.concat(e, ':').concat(n),
            i = r in this._mlsFailures ? this._mlsFailures[r][2] : 0;
        (this._mlsFailures[r] = [e, n, i + 1]), this._alertMLSFailureDebouced(e, n);
    }
    _recoverMLSFailures() {
        for (let [e, [n, r, i]] of Object.entries(this._mlsFailures)) {
            let a = e in this._mlsFailuresRecovered ? this._mlsFailuresRecovered[e][2] : 0;
            this._mlsFailuresRecovered[e] = [n, r, a + i];
        }
    }
    _trackMLSFailures() {
        let e = [
                ...Object.values(this._mlsFailuresRecovered).map((e) => {
                    let [n, r, i] = e;
                    return [n, r, i, !0];
                }),
                ...Object.values(this._mlsFailures).map((e) => {
                    let [n, r, i] = e;
                    return [n, r, i, !1];
                })
            ],
            n = this.getMediaSessionId();
        for (let [r, i, a, s] of e)
            H.default.track(eo.rMx.MLS_FAILURES, {
                ...this._getAnalyticsProperties(),
                media_session_id: n,
                parent_media_session_id: this.parentMediaSessionId,
                failure_source: r,
                failure_reason: i,
                failure_count: a,
                failure_was_recovered: s
            });
    }
    _alertMLSFailure(e, n) {
        let r = j.default.getCurrentUser();
        ((null == r ? void 0 : r.isStaff()) || (null == r ? void 0 : r.isStaffPersonal())) &&
            T.Z.show({
                title: 'MLS Error in '.concat(e),
                body: 'Error: '.concat(n, '! Please upload your logs in A/V settings and ask everyone in the call to do the same, and ping us in #av-e2ee in Core Tech!')
            });
    }
    _getExtraConnectionOptions() {
        return {};
    }
    shouldReportPeriodicStats(e) {
        if (e.length > 10) return !1;
        let n = this.getMediaSessionId();
        if (null == n) return !1;
        let r = h().v3(n);
        return !!(r % 100 <= 5) || !1;
    }
    getInputDeviceName() {
        var e;
        let n = G.Z.getInputDeviceId();
        return null === (e = G.Z.getInputDevices()[n]) || void 0 === e ? void 0 : e.name;
    }
    getOutputDeviceName() {
        var e;
        let n = G.Z.getOutputDeviceId();
        return null === (e = G.Z.getOutputDevices()[n]) || void 0 === e ? void 0 : e.name;
    }
    getVideoDeviceName() {
        var e;
        let n = G.Z.getVideoDeviceId();
        return null === (e = G.Z.getVideoDevices()[n]) || void 0 === e ? void 0 : e.name;
    }
    getGoLiveSource() {
        return G.Z.getGoLiveSource();
    }
    constructor({ userId: e, sessionId: n, guildId: r, channelId: i, context: a = el.Yn.DEFAULT, rtcServerId: s, parentMediaSessionId: o }) {
        var l, u;
        super(),
            eu(this, 'context', void 0),
            eu(this, 'userId', void 0),
            eu(this, 'sessionId', void 0),
            eu(this, 'guildId', void 0),
            eu(this, 'parentMediaSessionId', void 0),
            eu(this, 'hostname', void 0),
            eu(this, 'state', void 0),
            eu(this, '_videoQuality', void 0),
            eu(this, '_soundshareStats', void 0),
            eu(this, 'logger', void 0),
            eu(this, 'rtcServerId', void 0),
            eu(this, '_channelId', void 0),
            eu(this, 'channelIds', void 0),
            eu(this, '_endpoint', void 0),
            eu(this, 'port', void 0),
            eu(this, 'token', void 0),
            eu(this, 'protocol', void 0),
            eu(this, 'voiceVersion', void 0),
            eu(this, 'rtcWorkerVersion', void 0),
            eu(this, '_socket', void 0),
            eu(this, '_backoff', void 0),
            eu(this, '_destroyed', void 0),
            eu(this, '_pings', void 0),
            eu(this, '_pingBadCount', void 0),
            eu(this, '_pingTimeouts', void 0),
            eu(this, '_mediaSessionId', void 0),
            eu(this, '_voiceQuality', void 0),
            eu(this, '_voiceQualityPeriodicStatsInterval', void 0),
            eu(this, '_voiceQualityPeriodicStatsSequenceId', void 0),
            eu(this, '_noiseCancellationError', void 0),
            eu(this, '_voiceDuration', void 0),
            eu(this, '_videoHealthManager', void 0),
            eu(this, '_sentVideo', void 0),
            eu(this, '_outboundLossRate', void 0),
            eu(this, '_recordingEnabled', void 0),
            eu(this, '_selectedExperiments', void 0),
            eu(this, '_localMediaSinkWantsManager', void 0),
            eu(this, '_goLiveQualityManager', void 0),
            eu(this, '_remoteVideoSinkWants', void 0),
            eu(this, '_connection', void 0),
            eu(this, '_createdTime', void 0),
            eu(this, '_connectStartTime', void 0),
            eu(this, '_connectCompletedTime', void 0),
            eu(this, '_rtcConnectionId', void 0),
            eu(this, '_connectCount', void 0),
            eu(this, '_connected', void 0),
            eu(this, '_connecting', void 0),
            eu(this, '_encountered_socket_failure', void 0),
            eu(this, '_inputDetected', void 0),
            eu(this, '_encryptionMode', void 0),
            eu(this, 'stateHistory', void 0),
            eu(this, '_supportedBandwidthEstimationExperiments', void 0),
            eu(this, '_bandwidthEstimationExperiment', void 0),
            eu(this, '_secureFramesState', void 0),
            eu(this, '_userIds', void 0),
            eu(this, '_secureFramesRosterMap', new Map()),
            eu(this, '_mlsFailuresRecovered', void 0),
            eu(this, '_mlsFailures', void 0),
            eu(this, '_lastSentSpeakingStatus', void 0),
            eu(this, '_lastSentSSRC', void 0),
            eu(this, 'powerMonitorListener', void 0),
            eu(this, 'reconnect', () => {
                let e = this._socket;
                null != e && (this._connected && (this._connectStartTime = (0, v.zO)()), !this._connecting && (this._trackVoiceConnectionConnecting(), (this._connecting = !0), (this._encountered_socket_failure = !1)), this._connectCount++, e.close(), e.connect());
            }),
            eu(this, '_alertMLSFailureDebouced', f()(this._alertMLSFailure, 100)),
            eu(this, '_handleNetworkOnline', () => {
                this.expeditedHeartbeat(5000, 'network detected online.');
            }),
            eu(this, '_handleNetworkOffline', () => {
                this.expeditedHeartbeat(15000, 'network detected offline.', !1);
            }),
            eu(this, '_handleNoRoute', () => {
                var e;
                null === (e = this._socket) || void 0 === e || e.noRoute();
            }),
            eu(this, '_handlePowerResume', () => {
                this.expeditedHeartbeat(5000, 'power monitor resumed');
            }),
            eu(this, '_handleVoiceQualityPeriodicsStats', () => {
                if (null != this._voiceQuality) {
                    let e = this._voiceQuality.getPeriodicStats();
                    if (this.shouldReportPeriodicStats(e))
                        for (let n of e)
                            H.default.track(eo.rMx.VOICE_QUALITY_PERIODIC_STATS, {
                                ...this._getAnalyticsProperties(),
                                media_session_id: this.getMediaSessionId(),
                                sender_user_id: n.userId,
                                hostname: this.hostname,
                                frame_op_silent: n.silent,
                                frame_op_normal: n.normal,
                                frame_op_merged: n.merged,
                                frame_op_expanded: n.expanded,
                                frame_op_accelerated: n.accelerated,
                                frame_op_preemptive_expanded: n.preemptiveExpanded,
                                frame_op_cng: n.cng,
                                accelerate_rate: n.accelerateRate,
                                expand_rate: n.expandRate,
                                preemptive_expand_rate: n.preemptiveExpandRate,
                                speech_expand_rate: n.speechExpandRate,
                                duration_ms: n.durationMs,
                                sequence_id: this._voiceQualityPeriodicStatsSequenceId,
                                input_device: this.getInputDeviceName(),
                                output_device: this.getOutputDeviceName(),
                                ping_average: Math.round(this.getAveragePing()),
                                ping_bad_count: this._pingBadCount,
                                parent_media_session_id: this.parentMediaSessionId
                            });
                    this._voiceQualityPeriodicStatsSequenceId++;
                }
            }),
            eu(this, 'getAudioDeviceStates', () => ({
                input_device: this.getInputDeviceName(),
                input_device_count: Object.keys(G.Z.getInputDevices()).length,
                output_device: this.getOutputDeviceName(),
                output_device_count: Object.keys(G.Z.getOutputDevices()).length
            })),
            eu(this, 'getVideoDeviceStates', () => ({
                camera_device: this.getVideoDeviceName(),
                camera_device_count: Object.keys(G.Z.getVideoDevices()).length
            })),
            eu(this, '_trackVoiceConnectionConnecting', () => {
                let e = B.Z.getChannel(this.channelId),
                    n = null != e ? e.type : null;
                H.default.track(eo.rMx.VOICE_CONNECTION_CONNECTING, {
                    ...this.getAudioDeviceStates(),
                    ...this.getVideoDeviceStates(),
                    guild_id: this.guildId,
                    channel_id: this.channelId,
                    rtc_connection_id: this.getRTCConnectionId(),
                    hostname: this.hostname,
                    connect_count: this._connectCount,
                    context: this.context,
                    channel_type: n,
                    participant_type: this.getVoiceParticipantType(),
                    is_muted: G.Z.isMute()
                });
            }),
            eu(this, 'incomingVideoEnabledChanged', (e) => {
                var n, r;
                null === (n = this._goLiveQualityManager) || void 0 === n || n.onIncomingVideoEnabled(e), null === (r = this.getOrCreateVideoQuality()) || void 0 === r || r.setOcclusionIncomingVideoEnabled(e);
            }),
            eu(this, 'windowVisibilityChanged', (e) => {
                var n;
                null === (n = this.getOrCreateVideoQuality()) || void 0 === n || n.setWindowOcclusionState(!e);
            }),
            (this.context = a),
            (this.logger = new A.Z('RTCConnection('.concat(null !== (l = null != s ? s : r) && void 0 !== l ? l : i, ', ').concat(this.context, ')'))),
            this.logger.enableNativeLogger(!0),
            (this.userId = e),
            (this.sessionId = n),
            (this.guildId = r),
            (this._channelId = i),
            (this.channelIds = new Set([i])),
            (this.rtcServerId = s),
            (this.parentMediaSessionId = o),
            (this._endpoint = null),
            (this.hostname = null),
            (this.port = null),
            (this.token = null),
            (this.voiceVersion = null),
            (this.rtcWorkerVersion = null),
            (this.state = eo.hes.AWAITING_ENDPOINT),
            (this.stateHistory = new J.K(this.state)),
            (this._socket = null),
            (this._backoff = new m.Z(1000, 10000)),
            (this._destroyed = !1),
            (this._pings = []),
            (this._pingBadCount = 0),
            (this._pingTimeouts = []),
            (this._mediaSessionId = null),
            (this._voiceQuality = null),
            (this._voiceQualityPeriodicStatsInterval = null),
            (this._voiceQualityPeriodicStatsSequenceId = 0),
            (this._noiseCancellationError = 0),
            (this._voiceDuration = null),
            (this._videoQuality = null),
            (this._videoHealthManager = null),
            (this._sentVideo = !1),
            (this._outboundLossRate = null),
            (this._createdTime = (0, v.zO)()),
            (this._connectStartTime = 0),
            (this._connectCompletedTime = 0),
            (this._rtcConnectionId = (0, p.Z)()),
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
        let c = G.Z.supports(el.AN.FIRST_FRAME_CALLBACK) && G.Z.supports(el.AN.REMOTE_USER_MULTI_STREAM);
        if (a === el.Yn.DEFAULT) {
            let n = (null === (u = B.Z.getChannel(this.channelId)) || void 0 === u ? void 0 : u.type) === eo.d4z.GUILD_STAGE_VOICE;
            (this._localMediaSinkWantsManager = new ee.ZP(e, n, c)),
                this._localMediaSinkWantsManager.on(ee.ai.Update, (e) => {
                    if (this.state === eo.hes.RTC_CONNECTED && null != this._socket) {
                        var n;
                        this.logger.info('Media sink wants: '.concat(JSON.stringify(e))), this._socket.mediaSinkWants(e), null === (n = this._connection) || void 0 === n || n.setLocalVideoSinkWants(e);
                    }
                }),
                this._localMediaSinkWantsManager.on(ee.ai.UserSSRCUpdate, (e, n, r) => {
                    var i;
                    null === (i = this._connection) || void 0 === i || i.createUser(e, n, r);
                });
        } else
            a === el.Yn.STREAM &&
                ((this._goLiveQualityManager = new R.Z(!0)),
                this._goLiveQualityManager.on(R.y.RequestedSSRCsUpdate, (e, n, r) => {
                    var i;
                    null === (i = this._connection) || void 0 === i || i.createUser(e, n, r);
                }),
                this._goLiveQualityManager.on(R.y.RequestedStreamsUpdate, (e) => {
                    if (this.state === eo.hes.RTC_CONNECTED && null != this._socket) {
                        var n;
                        this.logger.info('Go Live Media sink wants: '.concat(JSON.stringify(e))), this._socket.mediaSinkWants(e), null === (n = this._connection) || void 0 === n || n.setLocalVideoSinkWants(e);
                    }
                }));
        (this._remoteVideoSinkWants = ee.Yy),
            es.w.on(es.e.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged),
            es.w.on(es.e.WindowVisibilityChanged, this.windowVisibilityChanged),
            F.ZP.shouldRecordNextConnection() ? ((this._recordingEnabled = !0), y.TC(!1)) : (this._recordingEnabled = !1),
            (this._soundshareStats = new et.Z()),
            W.Z.addOnlineCallback(this._handleNetworkOnline),
            W.Z.addOfflineCallback(this._handleNetworkOffline),
            (0, K.isDesktop)() && (this.powerMonitorListener = q.Z.remotePowerMonitor.on('resume', this._handlePowerResume)),
            (this._supportedBandwidthEstimationExperiments = []),
            (this._bandwidthEstimationExperiment = null),
            G.Z.getMediaEngine().getSupportedBandwidthEstimationExperiments((e) => {
                this._supportedBandwidthEstimationExperiments = e;
            });
    }
}
