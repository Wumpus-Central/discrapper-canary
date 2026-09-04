n.d(t, { A: () => tE }), n(321073);
var i,
    r,
    a,
    s,
    l,
    o,
    d = n(824120),
    c = n.n(d),
    u = n(649852),
    _ = n.n(u),
    E = n(181370),
    A = n.n(E),
    h = n(132500),
    I = n(158390),
    f = n(665260),
    p = n(972347),
    T = n(459838),
    m = n(499979),
    g = n(228366),
    S = n(157559),
    N = n(233545),
    C = n(894539),
    O = n(124838);
let R = (0, n(240921).Ay)({
    kind: "user",
    name: "2026-05-ios-video-stabilization",
    defaultConfig: { mode: "off" },
    variations: { 1: { mode: "standard" }, 2: { mode: "low_latency" } },
});
var L = n(626584),
    y = n(655087),
    D = n(680725),
    v = n(487329),
    b = n(451988),
    M =
        (((i = {}).RequestedSSRCsUpdate = "requested-ssrcs-update"),
        (i.RequestedStreamsUpdate = "requested-streams-update"),
        i);
class P extends p.A {
    logger;
    userId;
    streamId = null;
    resolutionWidth = 0;
    resolutionHeight = 0;
    zoom = 1;
    videoStream;
    audioSSRC = 0;
    incomingVideoEnabled = !0;
    delayedCall;
    constructor() {
        super(),
            (this.logger = new L.A("GoLiveQualityManager")),
            this.logger.enableNativeLogger(!0),
            (this.delayedCall = new b.J_(500, () => {
                this.update();
            }));
    }
    delayedUpdate = () => {
        this.delayedCall.delay();
    };
    setUserID(e) {
        this.userId = e;
    }
    getUserID() {
        return this.userId;
    }
    updateAudioAndVideoStreamInfo(e, t) {
        this.audioSSRC = e;
        let n = t.find((e) => e.active);
        (this.videoStream = n), this.update();
    }
    onIncomingVideoEnabled(e) {
        this.incomingVideoEnabled !== e &&
            (this.logger.info("onIncomingVideoEnabled", e), (this.incomingVideoEnabled = e), this.update());
    }
    update() {
        null != this.userId &&
            null != this.videoStream &&
            (this.incomingVideoEnabled ? this.requestStream() : this.stopStream());
    }
    requestStream() {
        null != this.videoStream && this.request({ [this.videoStream.ssrc]: 100 }, [this.videoStream.ssrc]);
    }
    stopStream() {
        null != this.videoStream && this.request({ [this.videoStream.ssrc]: 0 }, []);
    }
    request(e, t) {
        void 0 !== this.userId &&
            (t.forEach((t) => {
                null == e.pixelCounts && (e.pixelCounts = {}),
                    e[t] > 0 &&
                        (e.pixelCounts[t] = Math.floor(
                            this.resolutionWidth * this.resolutionHeight * this.zoom * this.zoom,
                        ));
            }),
            this.emit("requested-ssrcs-update", this.userId, this.audioSSRC, t),
            this.emit("requested-streams-update", e));
    }
    setVideoSize(e, t, n) {
        this.streamId === e &&
            (null != t && ((this.resolutionWidth = t.width), (this.resolutionHeight = t.height)),
            null != n && (this.zoom = n),
            this.delayedUpdate());
    }
    setStreamId(e) {
        this.streamId !== e &&
            ((this.streamId = e),
            (this.resolutionWidth = 0),
            (this.resolutionHeight = 0),
            (this.zoom = 1),
            this.delayedUpdate());
    }
}
var U = n(248174),
    w = n(945810);
let G = (0, w.mj)({
        name: "2026-05-av1-bitrate-tuning",
        kind: "user",
        defaultConfig: { bitrate: 35e5 },
        variations: { 1: { bitrate: 3e6 }, 2: { bitrate: 25e5 } },
    }),
    x = (0, n(600975).C)({
        kind: "user",
        id: "2024-06_rtc_pacer__simulcast",
        label: "RTC Pacer & Golive Simulcast",
        defaultConfig: {
            enabled: !0,
            fullname: "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/",
            simulcastEnabled: !1,
        },
        treatments: [
            {
                id: 1,
                label: "Golive Simulcast without prober 720p@500k",
                config: {
                    enabled: !0,
                    fullname: "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/",
                    simulcastEnabled: !0,
                },
            },
            {
                id: 2,
                label: "Golive Simulcast 720p@500k",
                config: {
                    enabled: !0,
                    fullname:
                        "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer,worker-pacer-probe",
                    simulcastEnabled: !0,
                },
            },
            {
                id: 3,
                label: "Golive with pacing",
                config: {
                    enabled: !0,
                    fullname: "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer",
                    simulcastEnabled: !1,
                },
            },
            {
                id: 4,
                label: "Golive with pacing and probing",
                config: {
                    enabled: !0,
                    fullname:
                        "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer,worker-pacer-probe",
                    simulcastEnabled: !1,
                },
            },
            {
                id: 5,
                label: "Golive Simulcast 720p@750k",
                config: {
                    enabled: !0,
                    fullname:
                        "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer-probe,worker-lq-floor-750k",
                    simulcastEnabled: !0,
                },
            },
            {
                id: 6,
                label: "Golive Simulcast 720p@1000k",
                config: {
                    enabled: !0,
                    fullname:
                        "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer-probe,worker-lq-floor-1000k",
                    simulcastEnabled: !0,
                },
            },
        ],
    }),
    k = {
        getConfig(e, t) {
            let n = x.getCurrentConfig({ location: "e1c55b_1" }, { autoTrackExposure: e });
            return this.supportsBandwidthEstimationExperimentFullname(n.fullname, t) || (n.enabled = !1), n;
        },
        supportsBandwidthEstimationExperimentFullname(e, t) {
            let n = this.getMediaEngineExperiments(e);
            if (null === n) return !1;
            for (let e of n) if (!t.includes(e)) return !1;
            return !0;
        },
        getMediaEngineExperiments(e) {
            let t = e.split("/");
            return 3 !== t.length || "bandwidth_estimation" !== t[0]
                ? null
                : t[1].split(",").filter((e) => 0 !== e.length);
        },
    },
    F = (0, w.mj)({
        name: "2026-04-browser-transceiver-padding-removal",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var V = n(835498),
    B = n(624694),
    H = n(731854);
let j = (0, w.mj)({
        name: "2026-02-process-boost-on-voice",
        kind: "user",
        defaultConfig: { processPriority: H.E6.HIGH, threadPriorityConfiguration: 0 },
        variations: {
            1: { processPriority: H.E6.NORMAL, threadPriorityConfiguration: 0 },
            2: { processPriority: H.E6.NORMAL, threadPriorityConfiguration: 1 },
            3: { processPriority: H.E6.NORMAL, threadPriorityConfiguration: 2 },
            4: { processPriority: H.E6.NORMAL, threadPriorityConfiguration: 3 },
        },
    }),
    W = (0, w.mj)({
        name: "2026-06-server-ladder",
        kind: "user",
        defaultConfig: { bitrate: 9e6, enabled: !1 },
        variations: { 1: { bitrate: 35e5, enabled: !0 } },
    });
var Y = n(559633),
    K = n(714763);
n(17928);
var $ = n(280450);
let z = "2026-03-surface-direct-renderer",
    q = (0, w.mj)({
        kind: "user",
        name: z,
        defaultConfig: { enableSurfaceDirectRenderer: !1 },
        variations: { 1: { enableSurfaceDirectRenderer: !0 } },
    });
var Z = n(53857),
    X = n(734057),
    Q = n(71393),
    J = n(303277),
    ee = n(763827),
    et = n(412780),
    en = n(873985),
    ei = n(287809),
    er = n(174459),
    ea = n(353835),
    es = n(209489),
    el = n(723702),
    eo = n(158045),
    ed = n(38405),
    ec = n(998218),
    eu = n(77729),
    e_ = n(435558),
    eE = n.n(e_);
let eA = [];
class eh {
    bytes = {};
    static create() {
        let e = new eh();
        return eA.push(e), e.record;
    }
    record = (e) => {
        if (null != e) {
            for (let t in e.rtp.inbound)
                for (let n of e.rtp.inbound[t]) {
                    let e = `inbound-${t}-${n.type}`;
                    e in this.bytes || (this.bytes[e] = 0), (this.bytes[e] = n.bytesReceived);
                }
            for (let t of e.rtp.outbound) {
                let e = `outbound-${t.type}`;
                e in this.bytes || (this.bytes[e] = 0), (this.bytes[e] = t.bytesSent);
            }
        }
    };
    getTotalBytes() {
        return eE().sum(Object.values(this.bytes));
    }
}
var eI = n(507821),
    ef = n(652215);
class ep {
    current = null;
    history = [];
    constructor(e, t) {
        null != e && this.update(e, t);
    }
    reset(e) {
        (this.current = null), (this.history = []), null != e && this.update(e);
    }
    update(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, m.tB)();
        this.current !== e && ((this.current = e), this.history.push({ state: e, startTime: t }));
    }
    getVoiceConnectionSuccessStats() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, m.tB)(),
            t = this.getStateDurations(e);
        function n(e) {
            return eE().sumBy(t, (t) => (t.state === e ? t.durationMs : 0));
        }
        return {
            state_awaiting_endpoint_ms: n(ef.S7L.AWAITING_ENDPOINT),
            state_authenticating_ms: n(ef.S7L.AUTHENTICATING),
            state_connecting_ms: n(ef.S7L.CONNECTING),
            state_disconnected_ms: n(ef.S7L.DISCONNECTED),
            state_ice_checking_ms: n(ef.S7L.ICE_CHECKING),
            state_no_route_ms: n(ef.S7L.NO_ROUTE),
            state_rtc_connecting_ms: n(ef.S7L.RTC_CONNECTING),
            state_rtc_disconnected_ms: n(ef.S7L.RTC_DISCONNECTED),
        };
    }
    getStateDurations(e) {
        if (0 === this.history.length) return [];
        let t = (function (e, t) {
                if (e.length < 2) return [];
                let n = [],
                    i = e[0];
                for (let r = 1; r < e.length; r++) {
                    let a = e[r];
                    n.push(t(i, a)), (i = a);
                }
                return n;
            })(this.history, (e, t) => ({ state: e.state, durationMs: t.startTime - e.startTime })),
            n = () => {
                let t = eE().last(this.history);
                return { state: t.state, durationMs: e - t.startTime };
            };
        return t.push(n()), t;
    }
}
n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162), n(938796);
var eT = n(284009),
    em = n.n(eT);
let eg = (0, w.mj)({
    name: "2026-04-voice-gateway-protocol-version",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eS = n(111162),
    eN = n(927813);
function eC() {}
var eO =
    (((r = {})[(r.AUTHENTICATION_FAILED = 4004)] = "AUTHENTICATION_FAILED"),
    (r[(r.INVALID_SESSION = 4006)] = "INVALID_SESSION"),
    (r[(r.SERVER_NOT_FOUND = 4011)] = "SERVER_NOT_FOUND"),
    (r[(r.SERVER_CRASH = 4015)] = "SERVER_CRASH"),
    (r[(r.CANCELED = 4016)] = "CANCELED"),
    (r[(r.HEARTBEAT_TIMEOUT = 4800)] = "HEARTBEAT_TIMEOUT"),
    (r[(r.UNRESUMABLE = 4801)] = "UNRESUMABLE"),
    (r[(r.RESET_BACKOFF = 4802)] = "RESET_BACKOFF"),
    (r[(r.REPEATED_MLS_INVALID_MESSAGES = 4803)] = "REPEATED_MLS_INVALID_MESSAGES"),
    r);
let eR = 20 * eN.A.Millis.SECOND,
    eL = +eN.A.Millis.MINUTE,
    ey = 5 * eN.A.Millis.SECOND;
function eD(e) {
    return e.map((e) => ({
        name: e.name,
        type: e.type,
        priority: 1e3 * e.priority,
        payload_type: e.payloadType,
        rtx_payload_type: e.rtxPayloadType,
        encode: e.encode,
        decode: e.decode,
    }));
}
function ev(e) {
    return e?.map((e) => ({
        type: e.type,
        rid: e.rid,
        ssrc: e.ssrc,
        active: e.active,
        quality: e.quality,
        rtx_ssrc: e.rtxSsrc,
        max_bitrate: e.maxBitrate,
        max_framerate: e.maxFrameRate,
        max_resolution:
            null != e.maxResolution
                ? { type: e.maxResolution.type, width: e.maxResolution.width, height: e.maxResolution.height }
                : void 0,
    }));
}
function eb(e) {
    return (
        e?.map((e) => {
            var t;
            return {
                type:
                    "audio" === (t = e.type)
                        ? H.mI.AUDIO
                        : "test" === t
                          ? H.mI.TEST
                          : "screen" === t
                            ? H.mI.SCREEN
                            : H.mI.VIDEO,
                rid: e.rid,
                ssrc: e.ssrc,
                rtxSsrc: e.rtx_ssrc,
                active: e.active,
                quality: e.quality,
                maxBitrate: e.max_bitrate,
                maxFrameRate: e.max_framerate,
                maxResolution:
                    null != e.max_resolution
                        ? {
                              type: e.max_resolution.type,
                              width: e.max_resolution.width,
                              height: e.max_resolution.height,
                          }
                        : void 0,
            };
        }) ?? []
    );
}
var eM =
    (((a = {}).Connecting = "connecting"),
    (a.Connect = "connect"),
    (a.Disconnect = "disconnect"),
    (a.Resuming = "resuming"),
    (a.Ready = "ready"),
    (a.SfuUpdate = "sfu-update"),
    (a.Speaking = "speaking"),
    (a.Video = "video"),
    (a.Ping = "ping"),
    (a.ClientConnect = "client-connect"),
    (a.ClientDisconnect = "client-disconnect"),
    (a.Codecs = "codecs"),
    (a.MediaSessionId = "media-session-id"),
    (a.MediaSinkWants = "media-sink-wants"),
    (a.VoiceBackendVersion = "voice-backend-version"),
    (a.KeyframeInterval = "keyframe-interval"),
    (a.ChannelOptionsUpdateSecureFramesProtocol = "update-secure-frames-protocol"),
    (a.Flags = "flags"),
    (a.Platform = "platform"),
    (a.SDP = "sdp"),
    (a.Encryption = "encryption"),
    (a.BandwidthEstimationExperiment = "bandwidth-estimation-experiment"),
    (a.SecureFramesInit = "secure-frames-init"),
    (a.SecureFramesPrepareTransition = "secure-frames-prepare-transition"),
    (a.SecureFramesExecuteTransition = "secure-frames-execute-transition"),
    (a.SecureFramesPrepareEpoch = "secure-frames-prepare-epoch"),
    (a.MLSExternalSenderPackage = "mls-external-sender-package"),
    (a.MLSProposals = "mls-proposals"),
    (a.MLSPrepareCommitTransition = "mls-prepare-commit-transition"),
    (a.MLSWelcome = "mls-welcome"),
    (a.ReceiveMessage = "receive-message"),
    (a.SendMessage = "send-message"),
    a);
class eP extends p.A {
    url;
    logger;
    backoff = new I.A(1e3, 5e3);
    webSocket;
    connectionState;
    heartbeatInterval;
    helloTimeout;
    heartbeater;
    lastHeartbeatAckTime;
    expeditedHeartbeatTimeout;
    heartbeatAck;
    heartbeatIntervalModifier;
    connectionStartTime;
    lastRecvSeqNum;
    sessionId;
    serverId;
    channelId;
    token;
    resumable;
    serverVersion = 0;
    constructor(e, t = H.x.DEFAULT) {
        super(),
            (this.url = e),
            (this.logger = new L.A(`RTCControlSocket(${t})`)),
            this.logger.enableNativeLogger(!0),
            (this.webSocket = null),
            (this.connectionState = 0),
            (this.helloTimeout = null),
            (this.lastHeartbeatAckTime = null),
            (this.heartbeatInterval = null),
            (this.heartbeater = null),
            (this.heartbeatAck = !0),
            (this.expeditedHeartbeatTimeout = null),
            (this.heartbeatIntervalModifier = 1),
            (this.connectionStartTime = 0),
            (this.lastRecvSeqNum = null),
            (this.sessionId = null),
            (this.serverId = null),
            (this.channelId = null),
            (this.token = null),
            (this.resumable = !1);
    }
    createWebSocket() {
        this.logger.info(`[CONNECT] ${this.url}`),
            null !== this.webSocket &&
                (this.logger.error("Connect called with already existing websocket"),
                this.cleanupWebSocket((e) => e.close(4e3))),
            (this.connectionStartTime = (0, m.tB)()),
            (this.helloTimeout = setTimeout(() => {
                let e = (0, m.tB)() - this.connectionStartTime;
                this.handleClose(!1, 0, `The connection timed out after ${e} ms - did not receive OP_HELLO in time.`);
            }, eR));
        let e = (function (e) {
                let { location: t, supportsSfuUpdate: n } = e;
                return n && eg.getConfig({ location: t }).enabled ? 10 : 9;
            })({ location: "RTCControlSocket", supportsSfuUpdate: J.Ay.supports(H.O5.UDP_ENDPOINT_UPDATE) }),
            t = (this.webSocket = new WebSocket(`${this.url}?v=${e}`));
        (t.binaryType = "arraybuffer"),
            (t.onopen = () => {
                1 === this.connectionState
                    ? this.emit("connect")
                    : 5 === this.connectionState && this.doResumeOrClose(),
                    (this.connectionState = 4);
                let e = (0, m.tB)() - this.connectionStartTime;
                this.logger.info(`[CONNECTED] ${this.url} in ${e} ms`), this.emit("ping", Math.round(e / 2));
            }),
            (t.onmessage = (e) => {
                let { op: t, seq: n, d: i } = this.parseWebSocketMessage(e);
                if (
                    (this.emit("receive-message", t, i),
                    n && (this.lastRecvSeqNum = n),
                    eS.default.isLoggingGatewayEvents)
                )
                    if (i instanceof Uint8Array) {
                        let e = [...i].map((e) => e.toString(16).padStart(2, "0")).join("");
                        this.logger.info(`~> ${t}: 0x${e}`);
                    } else this.logger.info(`~> ${t}: ${JSON.stringify(i)}`);
                switch (t) {
                    case 8:
                        this.clearHelloTimeout(), this.handleHello(i);
                        break;
                    case 2:
                        this.handleReady(i);
                        break;
                    case 33:
                        this.emit("sfu-update", i);
                        break;
                    case 9:
                        this.handleResumed(i);
                        break;
                    case 4:
                        i.bandwidth_estimation_experiment &&
                            this.emit("bandwidth-estimation-experiment", i.bandwidth_estimation_experiment),
                            this.emit("codecs", i.audio_codec, i.video_codec),
                            i.media_session_id && this.emit("media-session-id", i.media_session_id),
                            i.sdp ? this.emit("sdp", i.sdp) : i.mode && this.emit("encryption", i.mode, i.secret_key),
                            i.keyframe_interval && this.emit("keyframe-interval", i.keyframe_interval),
                            this.emit("secure-frames-init", i.dave_protocol_version || 0),
                            (this.resumable = !0);
                        break;
                    case 5:
                        let r = i.speaking;
                        "boolean" == typeof r && (r = r ? H.ME.VOICE : H.ME.NONE),
                            this.emit("speaking", i.user_id, i.ssrc, r);
                        break;
                    case 3:
                        this.sendHeartbeat();
                        break;
                    case 6:
                        this.handleHeartbeatAck(i);
                        break;
                    case 12:
                        this.emit("video", i.user_id, i.audio_ssrc, i.video_ssrc, eb(i.streams));
                        break;
                    case 11:
                        this.emit("client-connect", i.user_ids);
                        break;
                    case 13:
                        this.emit("client-disconnect", i.user_id);
                        break;
                    case 14:
                        (null != i.audio_codec || null != i.video_codec) &&
                            this.emit("codecs", i.audio_codec, i.video_codec),
                            null != i.media_session_id && this.emit("media-session-id", i.media_session_id),
                            i.keyframe_interval && this.emit("keyframe-interval", i.keyframe_interval);
                        break;
                    case 15:
                        this.emit("media-sink-wants", i);
                        break;
                    case 16:
                        null != i.voice &&
                            null != i.rtc_worker &&
                            this.emit("voice-backend-version", i.voice, i.rtc_worker);
                        break;
                    case 18:
                        null != i.flags && null != i.user_id && this.emit("flags", i.user_id, i.flags);
                        break;
                    case 20:
                        null != i.platform && null != i.user_id && this.emit("platform", i.user_id, i.platform);
                        break;
                    case 21:
                        null != i.transition_id &&
                            null != i.protocol_version &&
                            this.emit("secure-frames-prepare-transition", i.transition_id, i.protocol_version);
                        break;
                    case 22:
                        null != i.transition_id && this.emit("secure-frames-execute-transition", i.transition_id);
                        break;
                    case 24:
                        null != i.epoch &&
                            null != i.protocol_version &&
                            this.emit("secure-frames-prepare-epoch", i.epoch, i.protocol_version);
                        break;
                    case 25:
                        this.emit("mls-external-sender-package", i);
                        break;
                    case 27:
                        this.emit("mls-proposals", i);
                        break;
                    case 29: {
                        let e = new DataView(i.buffer, i.byteOffset, 2).getUint16(0, !1),
                            t = i.slice(2);
                        this.emit("mls-prepare-commit-transition", e, t);
                        break;
                    }
                    case 30: {
                        let e = new DataView(i.buffer, i.byteOffset, 2).getUint16(0, !1),
                            t = i.slice(2);
                        this.emit("mls-welcome", e, t);
                        break;
                    }
                    default:
                        this.logger.info(`Unhandled op ${t}`);
                }
            }),
            (t.onerror = () => this.handleClose(!1, 0, "An error with the websocket occurred")),
            (t.onclose = (e) => {
                let { wasClean: t, code: n, reason: i } = e;
                return this.handleClose(t, n, i);
            });
    }
    send(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = this.webSocket;
        if (null == n || n.readyState !== WebSocket.OPEN) return;
        let i = JSON.stringify({ op: e, d: t });
        eS.default.isLoggingGatewayEvents && this.logger.info(`<~ ${i}`), this.emit("send-message", e, t);
        try {
            n.send(i);
        } catch (e) {}
    }
    sendBinary(e, t) {
        let n = this.webSocket;
        if (null == n || n.readyState !== WebSocket.OPEN) return;
        let i = new Uint8Array(t.byteLength + 1);
        (i[0] = e), i.set(t, 1);
        try {
            n.send(i.buffer);
        } catch (e) {}
    }
    doResumeOrClose() {
        let e = (0, m.tB)();
        null !== this.serverId &&
        null !== this.channelId &&
        null !== this.token &&
        null !== this.sessionId &&
        this.resumable &&
        (null == this.lastHeartbeatAckTime || e - this.lastHeartbeatAckTime <= eL)
            ? (this.doResume(), (this.lastHeartbeatAckTime = e))
            : this.disconnect(!1, 4801, "Cannot resume connection.");
    }
    doResume() {
        let e = this.lastRecvSeqNum ?? -1;
        this.logger.info(
            `[RESUME] resuming session. serverId=${this.serverId ?? ""} channelId=${this.channelId ?? ""} sessionId=${this.sessionId ?? ""} seqAck=${e}`,
        ),
            this.emit("resuming"),
            (this.connectionState = 3),
            this.send(7, {
                token: this.token,
                session_id: this.sessionId,
                server_id: this.serverId,
                channel_id: this.channelId,
                seq_ack: e,
            });
    }
    handleHello(e) {
        if (((this.serverVersion = e.v ?? 3), this.serverVersion <= 3)) {
            let t = el.isPlatformEmbedded ? 0.25 : 0.1;
            this.heartbeatInterval = e.heartbeat_interval * t;
        } else
            (this.heartbeatInterval = e.heartbeat_interval * this.heartbeatIntervalModifier),
                el.isPlatformEmbedded || (this.heartbeatInterval = Math.min(ey, this.heartbeatInterval ?? NaN));
        let t = (0, m.tB)() - this.connectionStartTime;
        this.logger.info(
            `[HELLO] heartbeat interval: ${this.heartbeatInterval ?? "??"}, version: ${this.serverVersion}, took ${t} ms`,
        ),
            this.startHeartbeater();
    }
    handleReady(e) {
        this.backoff.succeed();
        let t = (0, m.tB)() - this.connectionStartTime;
        this.logger.info(`[READY] took ${t} ms`),
            this.serverVersion >= 6 && this.send(16, {}),
            this.emit("ready", e.ip, e.port, e.modes, e.ssrc, eb(e.streams), e.experiments);
    }
    supportsSfuUpdate() {
        return this.serverVersion >= 10;
    }
    handleResumed(e) {
        this.backoff.succeed();
    }
    handleClose(e, t, n) {
        if (
            ((this.connectionState = 0),
            (e = e || !1),
            this.cleanupWebSocket(),
            4004 === t || 4015 === t || 4011 === t || 4006 === t)
        )
            return this.disconnect(e, t, n);
        if (this.backoff.fails > 3)
            this.logger.warn("[WS CLOSED] Backoff exceed. Resetting."), this.disconnect(e, t, n);
        else {
            let i = this.backoff.fail(() => this.reconnect(e, t, n));
            this.logger.warn(
                `[WS CLOSED] (clean: ${e.toString()}, code: ${t}, reason: ${n}) retrying in ${(i / 1e3).toFixed(2)} seconds.`,
            );
        }
    }
    disconnect(e, t, n) {
        this.logger.warn(`[DISCONNECT] (${e.toString()}, ${t}, ${n})`),
            this.cleanupWebSocket(),
            this.cleanupState(),
            (this.connectionState = 0),
            this.emit("disconnect", e, t, n);
    }
    reconnect(e, t, n) {
        this.logger.info(`[RECONNECT] wasClean=${e.toString()} code=${t} reason=${n}`),
            this.cleanupWebSocket((e) => e.close(4e3)),
            (this.connectionState = 5),
            this.createWebSocket();
    }
    cleanupWebSocket(e) {
        this.stopHeartbeater(), this.clearHelloTimeout();
        let t = this.webSocket;
        (this.webSocket = null),
            null != t && ((t.onopen = eC), (t.onmessage = eC), (t.onerror = eC), (t.onclose = eC), e?.(t)),
            this.backoff.cancel();
    }
    cleanupState() {
        (this.serverId = null),
            (this.channelId = null),
            (this.sessionId = null),
            (this.token = null),
            (this.resumable = !1),
            (this.lastRecvSeqNum = null);
    }
    parseWebSocketMessage(e) {
        if (!(e.data instanceof ArrayBuffer)) return JSON.parse(e.data);
        {
            let t = new Uint8Array(e.data),
                n = null;
            this.serverVersion >= 8 && (n = new DataView(t.buffer).getUint16(0, !1));
            let i = 2 * (this.serverVersion >= 8);
            return { op: t[i], seq: n, d: t.subarray(i + 1) };
        }
    }
    clearHelloTimeout() {
        null != this.helloTimeout && (clearTimeout(this.helloTimeout), (this.helloTimeout = null));
    }
    handleHeartbeatAck(e) {
        this.logger.info("Heartbeat ACK received");
        let t = null;
        (t = this.serverVersion >= 8 ? e.t : e),
            this.emit("ping", (0, m.tB)() - t),
            (this.lastHeartbeatAckTime = (0, m.tB)()),
            (this.heartbeatAck = !0),
            null !== this.expeditedHeartbeatTimeout &&
                (clearTimeout(this.expeditedHeartbeatTimeout),
                (this.expeditedHeartbeatTimeout = null),
                this.logger.info("Expedited heartbeat succeeded"));
    }
    handleHeartbeatTimeout() {
        this.cleanupWebSocket((e) => e.close(4e3));
        let e = this.backoff.fail(() => this.reconnect(!1, 4800, "Heartbeat timeout."));
        this.logger.warn(`[HEARTBEAT ACK TIMEOUT] reconnecting in ${(e / 1e3).toFixed(2)} seconds.`);
    }
    startHeartbeater() {
        em()(null != this.heartbeatInterval, "RTCControlSocket: Heartbeat interval should never null here."),
            this.logger.info(`Starting heartbeat with interval: ${this.heartbeatInterval}`),
            null !== this.heartbeater && clearInterval(this.heartbeater),
            (this.heartbeatAck = !0),
            (this.heartbeater = setInterval(() => {
                this.heartbeatAck
                    ? ((this.heartbeatAck = !1), this.sendHeartbeat())
                    : null === this.expeditedHeartbeatTimeout && this.handleHeartbeatTimeout();
            }, this.heartbeatInterval));
    }
    sendHeartbeat() {
        if (this.serverVersion >= 8) {
            let e = this.lastRecvSeqNum ?? -1;
            this.logger.info(`Sending heartbeat with last received sequence number: ${e}`),
                this.send(3, { t: (0, m.tB)(), seq_ack: e });
        } else this.logger.info("Sending heartbeat"), this.send(3, (0, m.tB)());
    }
    stopHeartbeater() {
        null !== this.heartbeater && (clearInterval(this.heartbeater), (this.heartbeater = null)),
            null !== this.expeditedHeartbeatTimeout &&
                (clearTimeout(this.expeditedHeartbeatTimeout), (this.expeditedHeartbeatTimeout = null));
    }
    connect() {
        return 0 !== this.connectionState
            ? (this.logger.error("Cannot start a new connection, connection state is not disconnected"), !1)
            : ((this.connectionState = 1), this.createWebSocket(), this.emit("connecting"), !0);
    }
    identify(e) {
        let {
            serverId: t,
            channelId: n,
            userId: i,
            sessionId: r,
            token: a,
            maxDaveProtocolVersion: s,
            video: l = !1,
            streamParameters: o,
        } = e;
        (this.serverId = t),
            (this.channelId = n),
            (this.sessionId = r),
            (this.token = a),
            (this.connectionState = 2),
            this.send(0, {
                server_id: t,
                channel_id: n,
                user_id: i,
                session_id: r,
                token: a,
                max_dave_protocol_version: s,
                video: l,
                streams: ev(o),
            });
    }
    expeditedHeartbeat(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        if (null != this.webSocket)
            this.logger.info(`Performing an expedited heartbeat ${"" !== t ? "reason: " + t : ""}`),
                (this.heartbeatAck = !1),
                this.sendHeartbeat(),
                null !== this.expeditedHeartbeatTimeout && clearTimeout(this.expeditedHeartbeatTimeout),
                (this.expeditedHeartbeatTimeout = setTimeout(() => {
                    (this.expeditedHeartbeatTimeout = null), !1 === this.heartbeatAck && this.handleHeartbeatTimeout();
                }, e));
        else {
            if (n) return this.resetBackoff(t);
            this.logger.info(
                `Expedited heartbeat requested, but is disconnected and a reset was not requested ${"" !== t ? "reason: " + t : ""}`,
            );
        }
        return !1;
    }
    resetBackoff() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return (
            this.backoff.fails > 0 &&
            null == this.webSocket &&
            (this.logger.info(`Connection backoff reset ${"" !== e ? "for reason: " + e : ""}`),
            this.backoff.succeed(),
            this.reconnect(!1, 4802, "Reset backoff."),
            !0)
        );
    }
    close() {
        this.logger.info("CLOSE"),
            this.cleanupWebSocket((e) => e.close(4e3)),
            this.cleanupState(),
            (this.connectionState = 0),
            this.emit("disconnect", !0, 1e3, "Force Close");
    }
    destroy() {
        this.close();
    }
    selectProtocol(e, t, n, i) {
        let r,
            a = {};
        null == n
            ? (r = null)
            : "sdp" in n && null != n.sdp && "" !== n.sdp
              ? ((r = n.sdp), (a = { ...n, codecs: eD(n.codecs), rtc_connection_id: t }))
              : "address" in n &&
                null != n.address &&
                "" !== n.address &&
                n.port &&
                null != n.mode &&
                "" !== n.mode &&
                ((r = { address: n.address, port: n.port, mode: n.mode }),
                (a = { ...n, codecs: eD(n.codecs), rtc_connection_id: t, experiments: i })),
            this.send(1, { protocol: e, data: r, ...a });
    }
    updateSession(e) {
        this.send(14, { codecs: eD(e.codecs) });
    }
    speaking(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.send(5, { speaking: this.serverVersion <= 3 ? !!e : e, delay: t, ssrc: n });
    }
    video(e, t, n, i) {
        this.send(12, { audio_ssrc: e, video_ssrc: t, rtx_ssrc: n, streams: ev(i) });
    }
    mediaSinkWants(e) {
        this.serverVersion >= 5 && this.send(15, e);
    }
    secureFramesReadyForTransition(e) {
        this.send(23, { transition_id: e });
    }
    sendMLSKeyPackage(e) {
        this.logger.info("Sending MLS key package"), this.sendBinary(26, new Uint8Array(e));
    }
    sendMLSCommitWelcome(e) {
        this.logger.info("Sending MLS commit + welcome message"), this.sendBinary(28, new Uint8Array(e));
    }
    flagMLSInvalidCommitWelcome(e) {
        this.send(31, { transition_id: e });
    }
    disconnectForRepeatedMLSInvalidMessages(e) {
        this.logger.warn(`[MLS] ${e} consecutive invalid commit/welcome messages.`),
            this.cleanupWebSocket((e) => e.close(4803)),
            this.disconnect(!1, 4803, "Repeated invalid MLS commit/welcome messages.");
    }
    noRoute() {
        this.send(32, {});
    }
    setHeartbeatIntervalModifier(e) {
        this.heartbeatIntervalModifier = e;
    }
}
var eU = n(4511),
    ew = n(52133),
    eG = n(574381);
let ex = (0, w.mj)({
    kind: "user",
    name: "2026-03-browser-inverted-wants",
    defaultConfig: { invertWants: !1 },
    variations: { 1: { invertWants: !0 } },
});
function ek(e) {
    return (0, eG.xl)() ? { invertWants: !1 } : ex.getConfig({ location: e });
}
var eF = n(676279),
    eV = n(935208),
    eB = n(276208);
let eH = { any: 100 },
    ej = { any: 0 },
    eW = 30 * eN.A.Millis.SECOND,
    eY = 120 * eN.A.Millis.SECOND,
    eK = -1 !== (0, eF.EL)();
var e$ = (((s = {}).UserSSRCUpdate = "user-ssrc-update"), (s.Update = "update"), s);
function ez(e) {
    let { invertWants: t } = ek("RTCMediaSinkWantsManager.getDefaultWants");
    return t ? { ...ej } : { any: e };
}
class eq extends p.A {
    userId;
    isStageChannel;
    supportsSeamless;
    ladder;
    connection = null;
    audioSsrcs = {};
    videoSsrcs = {};
    remoteVideoSsrcs = {};
    framesReceived = {};
    streamIds = {};
    offscreenUsers = {};
    offscreenDisabledUsers = {};
    streamPixelCounts = {};
    latestWants = ez(100);
    participants = new Set();
    selectedParticipantId = null;
    delayedCall;
    offscreenTimeout;
    pipOpen = !1;
    simulcastDebugOverrides = new Map();
    videoHealthManager = null;
    otherUsers = new Set();
    constructor(e, t, n, i = new eU.r()) {
        super(),
            (this.userId = e),
            (this.isStageChannel = t),
            (this.supportsSeamless = n),
            (this.ladder = i),
            (this.delayedCall = new b.J_(100, this.update)),
            (this.offscreenTimeout = new b.Ep()),
            eB.X.on(eB.N.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged);
    }
    getWantsLevel() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = this.getVideoParticipantCount();
        return this.ladder.getMaxSinkValue(t, e);
    }
    delayedUpdate = () => {
        this.delayedCall.delay();
    };
    userVideoDisabled(e) {
        return this.offscreenDisabledUsers[e];
    }
    isOneToOneCall() {
        return 1 === this.otherUsers.size;
    }
    updateCallUserIds(e) {
        (this.otherUsers = new Set(e)), this.otherUsers.delete($.default.getId()), this.update();
    }
    shouldReceiveFromUser(e) {
        let t = !(
            this.connection?.getLocalVideoDisabled(e) ||
            (this.userVideoDisabled(e) &&
                this.videoHealthManager?.getCurrentVideoToggleState(e) !== ef.bb8.AUTO_PROBING)
        );
        return eB.X.isIncomingVideoEnabled() && t;
    }
    addLru = (e, t, n) => {
        if ((n.push(e), n.length <= 3)) return;
        let i = -1,
            r = -1;
        for (let e = 0; e < n.length; e++) {
            let a = n[e],
                s = t - this.offscreenUsers[a];
            s > i && ((i = s), (r = e));
        }
        (this.offscreenDisabledUsers[n[r]] = !0), n.splice(r, 1);
    };
    updateOffscreenUsers = () => {
        if (!this.connection?.getActiveOutputSinkTrackingEnabled()) return;
        let e = Date.now(),
            t = [];
        for (let [n, i] of eV.default.entries(this.streamIds))
            null != i &&
                (this.connection?.getHasActiveVideoOutputSink(i)
                    ? (delete this.offscreenUsers[n], delete this.offscreenDisabledUsers[n])
                    : null == this.offscreenUsers[n]
                      ? ((this.offscreenUsers[n] = e), this.addLru(n, e, t))
                      : this.offscreenDisabledUsers[n] ||
                        (e - this.offscreenUsers[n] >= this.getOffscreenTimeoutMs()
                            ? (this.offscreenDisabledUsers[n] = !0)
                            : this.addLru(n, e, t)));
        if (t.length > 0) {
            let n = e + this.getOffscreenTimeoutMs();
            for (let e of t) n = Math.min(n, this.offscreenUsers[e] + this.getOffscreenTimeoutMs());
            this.offscreenTimeout.start(n - e, this.update);
        } else this.offscreenTimeout.stop();
    };
    handleLocalVideoDisabled = (e, t) => {
        this.update();
    };
    handleLocalMute = (e, t) => {
        this.update();
    };
    invertWants(e, t) {
        for (let n of Object.values(this.videoSsrcs)) {
            if (!eK) {
                for (let i of n) e[i.ssrc] = t;
                continue;
            }
            let i = eE().minBy(n, (e) => e.quality);
            for (let t of n) e[t.ssrc] = 100 * (t.ssrc === i?.ssrc);
        }
        for (let t of Object.values(this.audioSsrcs)) e[t] = 100;
    }
    update = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                n = e.getWantsLevel(),
                i = ez(n),
                r = i;
            ek("RTCMediaSinkWantsManager.update").invertWants && (e.invertWants(i, n), eK && (r = { ...i })),
                e.updateOffscreenUsers();
            let a = (0, el.isDesktop)() && e.isOneToOneCall() && !e.isStageChannel;
            for (let [r, s] of eV.default.entries(e.videoSsrcs)) {
                let l = [],
                    o = !1,
                    d = e.streamPixelCounts[e.streamIds[r]] ?? 0,
                    c = e.getWantsLevel(d),
                    u = s[0].ssrc;
                if (e.shouldReceiveFromUser(r)) {
                    let t = r === e.selectedParticipantId && 100 !== n && !e.pipOpen;
                    if (s.length > 1) {
                        for (let e of s)
                            100 === e.quality
                                ? t
                                    ? ((i[e.ssrc] = 100), (u = e.ssrc))
                                    : (i[e.ssrc] = 0)
                                : t
                                  ? (i[e.ssrc] = 0)
                                  : (a && (i[e.ssrc] = c), (u = e.ssrc));
                        if (e.supportsSeamless && !e.framesReceived[u])
                            for (let t of ((o = !0), (l = [u]), s))
                                t.ssrc !== u &&
                                    e.framesReceived[t.ssrc] &&
                                    (100 === t.quality ? (i[t.ssrc] = 100) : (i[t.ssrc] = a ? c : n), l.push(t.ssrc));
                    } else t ? (i[u] = 100) : a && (i[u] = c);
                } else for (let e of s) i[e.ssrc] = 0;
                let _ = e.getSimulcastOverrideQuality(r);
                for (let t of (_ === H.r8.HIGH ? (i[u] = 100) : _ === H.r8.LOW && (i[u] = 50),
                (e.supportsSeamless && o) || (l = [u]),
                s))
                    l.includes(t.ssrc) || delete e.framesReceived[t.ssrc];
                (t.includes(r) || (void 0 !== e.remoteVideoSsrcs[r] && !(0, ew.A)(e.remoteVideoSsrcs[r], l))) &&
                    ((e.remoteVideoSsrcs[r] = [...l]), e.emit("user-ssrc-update", r, e.audioSsrcs[r], l));
            }
            let s = eK ? r : i;
            for (let [t, n] of Object.entries(e.audioSsrcs)) e.connection?.getLocalMute(t) && (s[n] = 0);
            return (
                null == e.connection || eE().isEqual(e.latestWants, s) || ((e.latestWants = s), e.emit("update", s)), s
            );
        };
    })();
    getAudioSSRCs() {
        return this.audioSsrcs;
    }
    setConnection(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        this.connection?.removeListener(T.yq.LocalVideoDisabled, this.handleLocalVideoDisabled),
            this.connection?.removeListener(T.yq.LocalMute, this.handleLocalMute),
            this.connection?.removeListener(T.yq.ActiveSinksChange, this.delayedUpdate),
            (this.connection = e),
            this.connection?.addListener(T.yq.LocalVideoDisabled, this.handleLocalVideoDisabled),
            this.connection?.addListener(T.yq.LocalMute, this.handleLocalMute),
            this.connection?.addListener(T.yq.ActiveSinksChange, this.delayedUpdate),
            t && this.update();
    }
    setAudioSSRC(e, t) {
        return t > 0 ? (this.audioSsrcs[e] = t) : delete this.audioSsrcs[e], this.update();
    }
    setVideoSSRCs(e, t) {
        let n = t
            .filter((e) => e.active && (e.ssrc ?? 0) > 0)
            .map((e) => ({ quality: e.quality ?? 100, ssrc: e.ssrc }));
        if (n.length > 0) (this.videoSsrcs[e] = n), this.participants.add(e);
        else {
            if (void 0 !== this.videoSsrcs[e])
                for (let { ssrc: t } of this.videoSsrcs[e]) delete this.framesReceived[t];
            delete this.remoteVideoSsrcs[e],
                delete this.videoSsrcs[e],
                this.participants.delete(e),
                this.emit("user-ssrc-update", e, this.audioSsrcs[e], []);
        }
        return this.update(Array.from(this.participants));
    }
    setFirstFrameReceived(e) {
        return (this.framesReceived[e] = !0), this.update();
    }
    setStreamId(e, t) {
        return (
            null != t
                ? (this.streamIds[e] = t)
                : (e in this.streamIds && delete this.streamPixelCounts[this.streamIds[e]], delete this.streamIds[e]),
            this.update()
        );
    }
    destroyUser(e) {
        return (
            delete this.audioSsrcs[e],
            delete this.videoSsrcs[e],
            this.participants.delete(e),
            delete this.streamPixelCounts[this.streamIds[e]],
            delete this.streamIds[e],
            this.update(Array.from(this.participants))
        );
    }
    reset() {
        this.setConnection(null, !1),
            (this.audioSsrcs = {}),
            (this.videoSsrcs = {}),
            (this.remoteVideoSsrcs = {}),
            (this.framesReceived = {}),
            (this.streamIds = {}),
            (this.streamPixelCounts = {}),
            (this.latestWants = ez(100)),
            eB.X.off(eB.N.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged);
    }
    setSelectedParticipant(e) {
        if (e === this.selectedParticipantId) return this.latestWants;
        let t = [];
        if (
            (null != this.selectedParticipantId &&
                this.selectedParticipantId !== this.userId &&
                t.push(this.selectedParticipantId),
            null != e)
        )
            if (this.participants.has(e)) (this.selectedParticipantId = e), t.push(e);
            else {
                if (this.userId !== e) return console.warn(`Participant not found: ${e}`), this.latestWants;
                this.selectedParticipantId = e;
            }
        else this.selectedParticipantId = null;
        return this.update(t.filter((e) => this.videoSsrcs[e]?.length > 1));
    }
    setPipOpen(e) {
        return ((this.pipOpen = e), null != this.selectedParticipantId)
            ? this.update([this.selectedParticipantId])
            : this.latestWants;
    }
    getOffscreenDisabledUsers() {
        return this.offscreenDisabledUsers;
    }
    setSimulcastDebugOverride(e, t) {
        this.simulcastDebugOverrides.set(e, t), this.update();
    }
    setVideoSize(e, t) {
        t > 0 ? (this.streamPixelCounts[e] = t) : delete this.streamPixelCounts[e], this.delayedUpdate();
    }
    getVideoParticipantCount() {
        let e = 0;
        for (let t of Object.keys(this.videoSsrcs)) !this.connection?.getLocalVideoDisabled(t) && e++;
        return e;
    }
    getOffscreenTimeoutMs() {
        return this.isStageChannel ? eY : eW;
    }
    getSimulcastOverrideQuality(e) {
        return this.simulcastDebugOverrides.has(e) ? this.simulcastDebugOverrides.get(e) : H.r8.NO_OVERRIDE;
    }
    incomingVideoEnabledChanged = () => {
        this.update();
    };
}
var eZ = n(87306),
    eX = n(687658);
class eQ {
    connection;
    pttQueueLatencyHistogram;
    constructor(e) {
        (this.connection = e), (this.pttQueueLatencyHistogram = new eX.d());
    }
    start() {
        this.connection.on(T.yq.Stats, this.sampleStats);
    }
    stop() {
        this.connection.off(T.yq.Stats, this.sampleStats);
    }
    getPttQueueLatencyStats() {
        let e = this.pttQueueLatencyHistogram.getReport([50, 95]);
        return {
            ptt_queue_latency_max: e.max,
            ptt_queue_latency_mean: e.mean,
            ptt_queue_latency_p50: e.percentiles["50"],
            ptt_queue_latency_p95: e.percentiles["95"],
            ptt_queue_latency_samples: e.samples,
        };
    }
    sampleStats = (e) => {
        null != e &&
            eE().forEach(e.rtp.outbound, (e) => {
                if ("audio" === e.type)
                    for (let t of e.pttQueueLatencyMicrosSamples ?? []) {
                        let e = t / 1e3;
                        this.pttQueueLatencyHistogram.addSample(e);
                    }
            });
    };
}
var eJ = n(681813),
    e0 = n(357758),
    e1 = n(544180);
function e2(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return null != e ? Math.round(e) : t;
}
class e3 {
    _networkStats;
    _lastSampleTimestamp;
    constructor() {
        (this._networkStats = this._initStats()), (this._lastSampleTimestamp = (0, m.tB)());
    }
    _initStats() {
        let e = { effectiveConnectionSpeedBuckets: {}, connectionTypeBuckets: {} };
        return (
            Object.values(ef.wY_).forEach((t) => {
                e.connectionTypeBuckets[t] = 0;
            }),
            Object.values(ef.NKC).forEach((t) => {
                e.effectiveConnectionSpeedBuckets[t] = 0;
            }),
            e
        );
    }
    getStats() {
        let { _networkStats: e } = this;
        return {
            duration_connection_type_wifi: e2(e.connectionTypeBuckets[ef.wY_.WIFI]),
            duration_connection_type_cellular: e2(e.connectionTypeBuckets[ef.wY_.CELLULAR]),
            duration_connection_type_ethernet: e2(e.connectionTypeBuckets[ef.wY_.ETHERNET]),
            duration_connection_type_bluetooth: e2(e.connectionTypeBuckets[ef.wY_.BLUETOOTH]),
            duration_connection_type_other: e2(e.connectionTypeBuckets[ef.wY_.OTHER]),
            duration_connection_type_unknown: e2(e.connectionTypeBuckets[ef.wY_.UNKNOWN]),
            duration_connection_type_none: e2(e.connectionTypeBuckets[ef.wY_.NONE]),
            duration_effective_connection_speed_2g: e2(e.effectiveConnectionSpeedBuckets[ef.NKC.TWO_G]),
            duration_effective_connection_speed_3g: e2(e.effectiveConnectionSpeedBuckets[ef.NKC.THREE_G]),
            duration_effective_connection_speed_4g: e2(e.effectiveConnectionSpeedBuckets[ef.NKC.FOUR_G]),
            duration_effective_connection_speed_5g: e2(e.effectiveConnectionSpeedBuckets[ef.NKC.FIVE_G]),
            duration_effective_connection_speed_unknown: e2(e.effectiveConnectionSpeedBuckets[ef.NKC.UNKNOWN]),
        };
    }
    incrementNetworkStats(e) {
        let t = (e - this._lastSampleTimestamp) / 1e3,
            n = e1.A.getEffectiveConnectionSpeed();
        n === ef.NKC.SLOW_TWO_G && (n = ef.NKC.TWO_G);
        let i = e1.A.getType();
        i === ef.wY_.WIMAX && (i = ef.wY_.WIFI),
            (this._networkStats.effectiveConnectionSpeedBuckets[n] += t),
            (this._networkStats.connectionTypeBuckets[i] += t),
            (this._lastSampleTimestamp = e);
    }
}
var e5 = n(166929);
function e6(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return null != e ? Math.round(e) : t;
}
var e4 = (((l = {}).FpsUpdate = "fps-update"), l);
class e7 extends p.A {
    connection;
    timestampProducer;
    networkQuality = new e3();
    paused;
    pausedCount = 0;
    zeroReceivers;
    videoStopped;
    videoEffectDuration;
    hqSimulcastStreamEncoded;
    lqSimulcastStreamEncoded;
    bothSimulcastStreamsEncoded;
    hqSimulcastStreamWatched;
    lqSimulcastStreamWatched;
    hqSimulcastStreamEligible;
    lqSimulcastStreamEligible;
    simulcastQualityChanges = 0;
    cameraToggles = 0;
    callUserIdsCount = 0;
    cameraDuration;
    cameraOpportunityDuration;
    cameraSendDuration;
    windowOccluded;
    videoStoppedForOcclusion;
    numWindowOcclusionChanges = 0;
    outboundStats = {};
    inboundStats = {};
    streamStart;
    streamEnd;
    symmetricCodecUpdates = 0;
    asymmetricCodecUpdates = 0;
    bandwidthLimitedFramerate;
    bandwidthLimitedResolution;
    videoEntropy;
    statCollectionPausedUsers = new Set();
    constructor(e, t = m.TF) {
        super(),
            (this.connection = e),
            (this.timestampProducer = t),
            (this.paused = new m.w6(!1, t)),
            (this.zeroReceivers = new m.w6(!1, t)),
            (this.videoStopped = new m.w6(!1, t)),
            (this.videoEffectDuration = new m.w6(!1, t)),
            (this.hqSimulcastStreamEncoded = new m.w6(!1, t)),
            (this.lqSimulcastStreamEncoded = new m.w6(!1, t)),
            (this.bothSimulcastStreamsEncoded = new m.w6(!1, t)),
            (this.hqSimulcastStreamWatched = new m.w6(!1, t)),
            (this.lqSimulcastStreamWatched = new m.w6(!1, t)),
            (this.hqSimulcastStreamEligible = new m.w6(!1, t)),
            (this.lqSimulcastStreamEligible = new m.w6(!1, t)),
            (this.windowOccluded = new m.w6(!1, t)),
            (this.videoStoppedForOcclusion = new m.w6(!1, t)),
            (this.bandwidthLimitedFramerate = new m.w6(!1, t)),
            (this.bandwidthLimitedResolution = new m.w6(!1, t)),
            (this.cameraDuration = new m.w6(!1, t)),
            (this.cameraOpportunityDuration = new m.w6(!1, t)),
            (this.cameraSendDuration = new m.w6(!1, t)),
            (this.videoEntropy = new eX.d());
    }
    addUserToStatsCollectionPausedSet(e) {
        this.statCollectionPausedUsers.add(e);
    }
    removeUserFromStatsCollectionPausedSet(e) {
        this.statCollectionPausedUsers.delete(e);
    }
    start() {
        (this.streamStart = this.timestampProducer.now()), this.connection.on(T.yq.Stats, this.sampleStats);
    }
    setOutboundSsrc(e) {
        null == this.outboundStats[e] && (this.outboundStats[e] = new e5.ET(this.timestampProducer));
    }
    getOrCreateInboundStats(e) {
        return (
            null == this.inboundStats[e] && (this.inboundStats[e] = new e5.dg(this.timestampProducer)),
            this.inboundStats[e]
        );
    }
    updateCallUserIdsCount(e) {
        this.callUserIdsCount = e;
    }
    setInboundUser(e, t) {
        this.getOrCreateInboundStats(e).setVideoStopped(0 === t, e5.iF.SenderStopped);
    }
    setUserVideoDisabled(e, t) {
        let n = this.getOrCreateInboundStats(e);
        n.setVideoStopped(t, e5.iF.ClientSideDisableVideo),
            !t &&
                n.statsWindow.length > 0 &&
                0 === n.statsWindow[0].packets &&
                (n.startTime = this.timestampProducer.now());
    }
    setOcclusionIncomingVideoEnabled(e) {
        this.videoStoppedForOcclusion.value = !e;
    }
    setWindowOcclusionState(e) {
        e !== this.windowOccluded.value && this.numWindowOcclusionChanges++, (this.windowOccluded.value = e);
    }
    pause() {
        !this.paused.value && this.pausedCount++,
            eE().forEach(this.outboundStats, (e) => {
                e.statsWindow = [];
            }),
            eE().forEach(this.inboundStats, (e) => {
                e.statsWindow = [];
            }),
            this.updateSendState({ paused: !0 });
    }
    resume() {
        this.updateSendState({ paused: !1 });
    }
    stop() {
        this.connection.off(T.yq.Stats, this.sampleStats),
            (this.streamEnd = this.timestampProducer.now()),
            this.removeAllListeners();
    }
    setViewedSimulcastQuality(e) {
        e !== this.hqSimulcastStreamWatched.value &&
            (this.hqSimulcastStreamWatched.totalDuration() > 0 || this.lqSimulcastStreamWatched.totalDuration() > 0) &&
            this.simulcastQualityChanges++,
            (this.hqSimulcastStreamWatched.value = e),
            (this.lqSimulcastStreamWatched.value = !e);
    }
    setEligibleSimulcastQuality(e) {
        (this.hqSimulcastStreamEligible.value = e), (this.lqSimulcastStreamEligible.value = !e);
    }
    getNetworkStats() {
        return this.networkQuality.getStats();
    }
    getEncoderUsageStats() {
        let e = new Map();
        for (let t in this.outboundStats) {
            let n = new Map();
            for (let i of this.outboundStats[t].getCodecsUsed()) {
                let r = i.toUpperCase();
                n.set(r, e6(this.outboundStats[t].codecBuckets[r])), e.set(parseInt(t), n);
            }
        }
        return e;
    }
    getDecoderUsageStats() {
        let e = new Map();
        for (let t in this.inboundStats) {
            let n = new Map();
            for (let i of this.inboundStats[t].getCodecsUsed()) {
                let r = i.toUpperCase();
                n.set(r, e6(this.inboundStats[t].codecBuckets[r])), e.set(t, n);
            }
        }
        return e;
    }
    getCodecUsageStats(e, t) {
        let n = this.asymmetricCodecUpdates > this.symmetricCodecUpdates,
            i = new Map();
        if ("sender" === e || "streamer" === e) {
            let e = this.getEncoderUsageStats();
            if (e.size > 0) {
                let t = [...e.keys()].sort()[0];
                i = e.get(t);
            }
            return {
                codec_asymmetric_session: n,
                codec_h264_encode_duration_sec: i.get(e5.Wn.H264) ?? 0,
                codec_h265_encode_duration_sec: i.get(e5.Wn.H265) ?? 0,
                codec_vp8_encode_duration_sec: i.get(e5.Wn.VP8) ?? 0,
                codec_vp9_encode_duration_sec: i.get(e5.Wn.VP9) ?? 0,
                codec_av1_encode_duration_sec: i.get(e5.Wn.AV1) ?? 0,
                codec_unknown_encode_duration_sec: i.get(e5.Wn.UNKNOWN) ?? 0,
            };
        }
        {
            let e = this.getDecoderUsageStats();
            return (
                e.has(t) && (i = e.get(t)),
                {
                    codec_asymmetric_session: n,
                    codec_h264_decode_duration_sec: i.get(e5.Wn.H264) ?? 0,
                    codec_h265_decode_duration_sec: i.get(e5.Wn.H265) ?? 0,
                    codec_vp8_decode_duration_sec: i.get(e5.Wn.VP8) ?? 0,
                    codec_vp9_decode_duration_sec: i.get(e5.Wn.VP9) ?? 0,
                    codec_av1_decode_duration_sec: i.get(e5.Wn.AV1) ?? 0,
                    codec_unknown_decode_duration_sec: i.get(e5.Wn.UNKNOWN) ?? 0,
                }
            );
        }
    }
    getCameraDurationStats() {
        return {
            camera_enabled_duration: Math.round(this.cameraDuration.totalDurationSeconds()),
            camera_send_opportunity_duration: Math.round(this.cameraOpportunityDuration.totalDurationSeconds()),
            camera_send_duration: Math.round(this.cameraSendDuration.totalDurationSeconds()),
            num_camera_on_toggles: this.cameraToggles,
        };
    }
    getOutboundStats() {
        let e = [];
        return (
            eE().forEach(this.outboundStats, (t, n) => {
                let i,
                    r = this.connection?.getStreamParameters();
                r.length > 1 &&
                    r.forEach((e) => {
                        parseInt(n) === e.ssrc && (i = e.quality ?? 50);
                    });
                let a = [1, 5, 10, 25, 50, 75],
                    s = [1, 5, 10, 25, 50, 75, 99],
                    l = t.vmafHistogram.getReport(a),
                    o = t.psnrHistogram.getReport(a),
                    d = t.targetBitrateHistogram.getReport(s),
                    c = t.outboundBandwidthSurplus.getReport(s),
                    u = this.videoEntropy.getReport(s),
                    _ = t.aggregationDuration / 1e3,
                    E =
                        (0, el.isWeb)() || (0, el.isIOS)() || (0, el.isAndroid)()
                            ? t.aggregatedProperties.framesCodec
                            : t.aggregatedProperties.screenshareFramesUnique;
                e.push({
                    ...this.getStats(t),
                    target_fps: _ > 0 ? Math.round((t.targetFrames ?? 0) / _) : 0,
                    unique_captured_fps: this.connection?.context === T.x.STREAM && _ > 0 ? E / _ : null,
                    target_bitrate_network: _ > 0 ? Math.round(((t.targetBytesNetwork ?? 0) * 8) / _) : 0,
                    target_bitrate_network_percentile1: d.count > 0 ? d.percentiles[1] : null,
                    target_bitrate_network_percentile5: d.count > 0 ? d.percentiles[5] : null,
                    target_bitrate_network_percentile10: d.count > 0 ? d.percentiles[10] : null,
                    target_bitrate_network_percentile25: d.count > 0 ? d.percentiles[25] : null,
                    target_bitrate_network_percentile50: d.count > 0 ? d.percentiles[50] : null,
                    target_bitrate_network_percentile75: d.count > 0 ? d.percentiles[75] : null,
                    target_bitrate_network_percentile99: d.count > 0 ? d.percentiles[99] : null,
                    target_bitrate_max: _ > 0 ? Math.round(((t.targetBytesMax ?? 0) * 8) / _) : 0,
                    outbound_bandwidth_estimate: _ > 0 ? Math.round(((t.outboundBytesAvailable ?? 0) * 8) / _) : 0,
                    outbound_bandwidth_surplus_percentile1: c.count > 0 ? c.percentiles[1] : null,
                    outbound_bandwidth_surplus_percentile5: c.count > 0 ? c.percentiles[5] : null,
                    outbound_bandwidth_surplus_percentile10: c.count > 0 ? c.percentiles[10] : null,
                    outbound_bandwidth_surplus_percentile25: c.count > 0 ? c.percentiles[25] : null,
                    outbound_bandwidth_surplus_percentile50: c.count > 0 ? c.percentiles[50] : null,
                    outbound_bandwidth_surplus_percentile75: c.count > 0 ? c.percentiles[75] : null,
                    outbound_bandwidth_surplus_percentile99: c.count > 0 ? c.percentiles[99] : null,
                    duration_encoder_nvidia_cuda: e6(t.encoderBuckets[e5.yo.NVIDIA_CUDA]),
                    duration_encoder_nvidia_direct3d: e6(t.encoderBuckets[e5.yo.NVIDIA_DIRECT_3D]),
                    duration_encoder_nvidia_vulkan: e6(t.encoderBuckets[e5.yo.NVIDIA_VULKAN]),
                    duration_encoder_openh264: e6(t.encoderBuckets[e5.yo.OPENH264]),
                    duration_encoder_videotoolbox: e6(t.encoderBuckets[e5.yo.VIDEOTOOLBOX]),
                    duration_encoder_amd_direct3d: e6(t.encoderBuckets[e5.yo.AMD_DIRECT_3D]),
                    duration_encoder_amd_vaapi: e6(t.encoderBuckets[e5.yo.AMD_VAAPI]),
                    duration_encoder_intel: e6(t.encoderBuckets[e5.yo.INTEL]),
                    duration_encoder_intel_direct3d: e6(t.encoderBuckets[e5.yo.INTEL_DIRECT_3D]),
                    duration_encoder_intel_vaapi: e6(t.encoderBuckets[e5.yo.INTEL_VAAPI]),
                    duration_encoder_vp8_libvpx: e6(t.encoderBuckets[e5.yo.VP8_LIBVPX]),
                    duration_encoder_uncategorized: e6(t.encoderBuckets[e5.yo.UNCATEGORIZED]),
                    duration_encoder_wmf_chrome: e6(t.encoderBuckets[e5.yo.WMF_CHROME]),
                    duration_encoder_unknown: e6(t.encoderBuckets[e5.yo.UNKNOWN]),
                    quality: i,
                    average_encode_time_ms: t.averageEncodeTime,
                    average_encoder_vmaf_score: t.vmafScoreNum > 0 ? t.vmafScoreSum / t.vmafScoreNum : null,
                    encoder_vmaf_score_percentile1: l.count > 0 ? l.percentiles[1] : null,
                    encoder_vmaf_score_percentile5: l.count > 0 ? l.percentiles[5] : null,
                    encoder_vmaf_score_percentile10: l.count > 0 ? l.percentiles[10] : null,
                    encoder_vmaf_score_percentile25: l.count > 0 ? l.percentiles[25] : null,
                    encoder_vmaf_score_percentile50: l.count > 0 ? l.percentiles[50] : null,
                    encoder_vmaf_score_percentile75: l.count > 0 ? l.percentiles[75] : null,
                    average_encoder_psnr_db: t.psnrDbNum > 0 ? t.psnrDbSum / t.psnrDbNum : null,
                    encoder_psnr_db_percentile1: o.count > 0 ? o.percentiles[1] : null,
                    encoder_psnr_db_percentile5: o.count > 0 ? o.percentiles[5] : null,
                    encoder_psnr_db_percentile10: o.count > 0 ? o.percentiles[10] : null,
                    encoder_psnr_db_percentile25: o.count > 0 ? o.percentiles[25] : null,
                    encoder_psnr_db_percentile50: o.count > 0 ? o.percentiles[50] : null,
                    encoder_psnr_db_percentile75: o.count > 0 ? o.percentiles[75] : null,
                    average_outbound_want:
                        t.outboundSinkWantNum > 0 ? t.outboundSinkWantSum / t.outboundSinkWantNum : null,
                    frames_dropped_rate_limiter: t.framesDroppedRateLimiter,
                    frames_dropped_encoder_queue: t.framesDroppedEncoderQueue,
                    frames_dropped_congestion_window: t.framesDroppedCongestionWindow,
                    frames_dropped_encoder: t.framesDroppedEncoder,
                    duration_hq_simulcast_stream_encoded: e6(this.hqSimulcastStreamEncoded.totalDurationSeconds()),
                    duration_lq_simulcast_stream_encoded: e6(this.lqSimulcastStreamEncoded.totalDurationSeconds()),
                    duration_both_simulcast_streams_encoded: e6(
                        this.bothSimulcastStreamsEncoded.totalDurationSeconds(),
                    ),
                    duration_fps_bandwidth_limited: e6(this.bandwidthLimitedFramerate.totalDurationSeconds()),
                    duration_resolution_bandwidth_limited: e6(this.bandwidthLimitedResolution.totalDurationSeconds()),
                    video_entropy_percentile1: u.count > 0 ? u.percentiles[1] : null,
                    video_entropy_percentile5: u.count > 0 ? u.percentiles[5] : null,
                    video_entropy_percentile10: u.count > 0 ? u.percentiles[10] : null,
                    video_entropy_percentile25: u.count > 0 ? u.percentiles[25] : null,
                    video_entropy_percentile50: u.count > 0 ? u.percentiles[50] : null,
                    video_entropy_percentile75: u.count > 0 ? u.percentiles[75] : null,
                    video_entropy_percentile99: u.count > 0 ? u.percentiles[99] : null,
                    duration_encoder_exynos: e6(t.encoderBuckets[e5.yo.EXYNOS]),
                    duration_encoder_qualcomm: e6(t.encoderBuckets[e5.yo.QUALCOMM]),
                    duration_encoder_mediatek: e6(t.encoderBuckets[e5.yo.MEDIATEK]),
                    duration_encoder_wmf_sw: e6(t.encoderBuckets[e5.yo.WMF_SW]),
                    duration_encoder_wmf_hw: e6(t.encoderBuckets[e5.yo.WMF_HW]),
                    duration_encoder_wmf_direct3d: e6(t.encoderBuckets[e5.yo.WMF_DIRECT_3D]),
                });
            }),
            e
        );
    }
    getInboundStats(e) {
        return this.getStats(this.inboundStats[e]);
    }
    destroyUser(e) {
        delete this.inboundStats[e];
    }
    getInboundParticipants() {
        return eV.default.keys(this.inboundStats);
    }
    updateSendState(e) {
        null != e.paused && (this.paused.value = e.paused),
            null != e.receivers && (this.zeroReceivers.value = 0 === e.receivers);
        let t = this.paused.value || this.zeroReceivers.value,
            n = this.videoStopped.value;
        (this.videoStopped.value = t), t !== n && eE().forEach(this.outboundStats, (e) => (e.statsWindow = []));
    }
    getStats(e) {
        if (null == e) return null;
        let t = Number(this.streamStart),
            n = null != this.streamEnd ? this.streamEnd - t : this.timestampProducer.now() - t,
            i = Math.max(e.aggregationDuration, 0) / 1e3,
            r = [1, 5, 10, 25, 50, 75],
            a = e.fpsHistogram.getReport(r),
            s = e.bitrateHistogram.getReport([1, 5, 10, 25, 50, 75, 99]),
            l = e.resolutionHistogram.getReport(r),
            o = e.inboundBitrateEstimateHistogram.getReport([1, 5, 10, 25, 50, 75, 99]),
            d = e.localWantHistogram.getReport([1, 5, 10, 25, 50, 75, 90, 95]),
            c = e.systemResources.getStats(),
            u = {
                duration: Math.floor(n / 1e3),
                duration_aggregation: e6(i),
                duration_stopped_receiving: e6(e.videoStoppedDuration.asSeconds()),
                duration_stream_under_8mbps: e6(e.bitrateBuckets[8e6]),
                duration_stream_under_7mbps: e6(e.bitrateBuckets[7e6]),
                duration_stream_under_6mbps: e6(e.bitrateBuckets[6e6]),
                duration_stream_under_5mbps: e6(e.bitrateBuckets[5e6]),
                duration_stream_under_4mbps: e6(e.bitrateBuckets[4e6]),
                duration_stream_under_3mbps: e6(e.bitrateBuckets[3e6]),
                duration_stream_under_2mbps: e6(e.bitrateBuckets[2e6]),
                duration_stream_under_1_5mbps: e6(e.bitrateBuckets[15e5]),
                duration_stream_under_1mbps: e6(e.bitrateBuckets[1e6]),
                duration_stream_under_0_5mbps: e6(e.bitrateBuckets[5e5]),
                duration_stream_at_0mbps: e6(e.bitrateBuckets[0]),
                duration_fps_under_60: e6(e.fpsBuckets[60]),
                duration_fps_under_55: e6(e.fpsBuckets[55]),
                duration_fps_under_50: e6(e.fpsBuckets[50]),
                duration_fps_under_45: e6(e.fpsBuckets[45]),
                duration_fps_under_40: e6(e.fpsBuckets[40]),
                duration_fps_under_35: e6(e.fpsBuckets[35]),
                duration_fps_under_30: e6(e.fpsBuckets[30]),
                duration_fps_under_25: e6(e.fpsBuckets[25]),
                duration_fps_under_20: e6(e.fpsBuckets[20]),
                duration_fps_under_15: e6(e.fpsBuckets[15]),
                duration_fps_under_10: e6(e.fpsBuckets[10]),
                duration_fps_under_5: e6(e.fpsBuckets[5]),
                duration_fps_at_0: e6(e.fpsBuckets[0]),
                avg_resolution: e.intervalTotal > 0 ? Math.round(e.resolutionTotal / e.intervalTotal) : 0,
                avg_minor_resolution: e.intervalTotal > 0 ? Math.round(e.minorResolutionTotal / e.intervalTotal) : 0,
                avg_major_resolution: e.intervalTotal > 0 ? Math.round(e.majorResolutionTotal / e.intervalTotal) : 0,
                min_resolution_width: e.minWidth ?? null,
                min_resolution_height: e.minHeight ?? null,
                duration_resolution_under_720: e6(e.resolutionBuckets[720]),
                duration_resolution_under_480: e6(e.resolutionBuckets[480]),
                duration_resolution_under_360: e6(e.resolutionBuckets[360]),
                num_pauses: this.pausedCount,
                duration_paused: e6(this.paused.totalDuration() / 1e3),
                duration_zero_receivers: e6(this.zeroReceivers.totalDuration() / 1e3),
                duration_video_stopped: e6(this.videoStopped.totalDuration() / 1e3),
                duration_hq_simulcast_stream_watched: e6(this.hqSimulcastStreamWatched.totalDurationSeconds()),
                duration_lq_simulcast_stream_watched: e6(this.lqSimulcastStreamWatched.totalDurationSeconds()),
                duration_hq_simulcast_stream_eligible: e6(this.hqSimulcastStreamEligible.totalDurationSeconds()),
                duration_lq_simulcast_stream_eligible: e6(this.lqSimulcastStreamEligible.totalDurationSeconds()),
                num_quality_changes: this.simulcastQualityChanges,
                duration_window_occluded: e6(this.windowOccluded.totalDurationSeconds()),
                duration_incoming_video_stopped_for_occlusion: e6(this.videoStoppedForOcclusion.totalDurationSeconds()),
                num_window_occlusion_changes: this.numWindowOcclusionChanges,
                fps_percentile1: a.percentiles[1],
                fps_percentile5: a.percentiles[5],
                fps_percentile10: a.percentiles[10],
                fps_percentile25: a.percentiles[25],
                fps_percentile50: a.percentiles[50],
                fps_percentile75: a.percentiles[75],
                bitrate_percentile1: s.percentiles[1],
                bitrate_percentile5: s.percentiles[5],
                bitrate_percentile10: s.percentiles[10],
                bitrate_percentile25: s.percentiles[25],
                bitrate_percentile50: s.percentiles[50],
                bitrate_percentile75: s.percentiles[75],
                bitrate_percentile99: s.percentiles[99],
                resolution_percentile1: l.percentiles[1],
                resolution_percentile5: l.percentiles[5],
                resolution_percentile10: l.percentiles[10],
                resolution_percentile25: l.percentiles[25],
                resolution_percentile50: l.percentiles[50],
                resolution_percentile75: l.percentiles[75],
                inbound_bitrate_estimate_percentile1: o.percentiles[1],
                inbound_bitrate_estimate_percentile5: o.percentiles[5],
                inbound_bitrate_estimate_percentile10: o.percentiles[10],
                inbound_bitrate_estimate_percentile25: o.percentiles[25],
                inbound_bitrate_estimate_percentile50: o.percentiles[50],
                inbound_bitrate_estimate_percentile75: o.percentiles[75],
                inbound_bitrate_estimate_percentile99: o.percentiles[99],
                local_want_percentile1: d.percentiles[1],
                local_want_percentile5: d.percentiles[5],
                local_want_percentile10: d.percentiles[10],
                local_want_percentile25: d.percentiles[25],
                local_want_percentile50: d.percentiles[50],
                local_want_percentile75: d.percentiles[75],
                local_want_percentile90: d.percentiles[90],
                local_want_percentile95: d.percentiles[95],
                average_local_want: d.mean,
                duration_video_effect: e6(this.videoEffectDuration.totalDuration() / 1e3),
                cryptor_max_attempts: e.cryptorMaxAttempts,
                duration_decoder_ffmpeg: e6(e.decoderBuckets[e5.eq.FFMPEG]),
                duration_decoder_dav1d: e6(e.decoderBuckets[e5.eq.DAV1D]),
                duration_decoder_vp8_libvpx: e6(e.decoderBuckets[e5.eq.VP8_LIBVPX]),
                duration_decoder_electron: e6(e.decoderBuckets[e5.eq.ELECTRON]),
                duration_decoder_videotoolbox: e6(e.decoderBuckets[e5.eq.VIDEOTOOLBOX]),
                duration_decoder_uncategorized: e6(e.decoderBuckets[e5.eq.UNCATEGORIZED]),
                duration_decoder_unknown: e6(e.decoderBuckets[e5.eq.UNKNOWN]),
                duration_decoder_exynos: e6(e.decoderBuckets[e5.eq.EXYNOS]),
                duration_decoder_webrtc: e6(e.decoderBuckets[e5.eq.WEBRTC]),
                duration_decoder_qualcomm: e6(e.decoderBuckets[e5.eq.QUALCOMM]),
                duration_decoder_mediatek: e6(e.decoderBuckets[e5.eq.MEDIATEK]),
                duration_decoder_d3d11videodecoder: e6(e.decoderBuckets[e5.eq.D3D11VIDEODECODER]),
                duration_decoder_android: e6(e.decoderBuckets[e5.eq.ANDROID]),
                ...c,
            },
            {
                bytes: _,
                framesDropped: E,
                networkFramesDropped: A,
                framesCodecError: h,
                framesCodec: I,
                framesNetwork: f,
                packets: p,
                packetsLost: T,
                nackCount: m,
                pliCount: g,
                qpSum: S,
                pauseCount: N,
                freezeCount: C,
                totalPausesDuration: O,
                totalFreezesDuration: R,
                totalFramesDuration: L,
                totalDecodeTime: y,
                keyframes: D,
                passthroughCount: v,
                cryptorSuccessCount: b,
                cryptorFailureCount: M,
                cryptorDuration: P,
                cryptorAttempts: U,
                cryptorMissingKeyCount: w,
                cryptorInvalidNonceCount: G,
                qualityDecodeErrors: x,
                qualityDecoderReboots: k,
                qualityScoreErrors: F,
                qualityFrameDrops: V,
                qualitySizeMismatches: B,
            } = e.aggregatedProperties,
            H = (M ?? 0) - (e.cryptorFailureBeforeSuccessCount ?? 0);
        return (
            e instanceof e5.ET
                ? ((u.sender_freeze_count = C),
                  (u.sender_total_freezes_duration = R),
                  (u.sender_total_frames_duration = L),
                  (u.consecutive_static_color_frames_max = e.consecutiveStaticColorFramesMax))
                : ((u.receiver_freeze_count = C),
                  (u.receiver_total_freezes_duration = R),
                  (u.receiver_total_frames_duration = L),
                  (u.receiver_pause_count = N),
                  (u.receiver_total_pauses_duration = O),
                  (u.total_decode_time_ms = y),
                  (u.frames_dropped_network = A),
                  (0, el.isWeb)() || (u.frames_dropped_render = E)),
            {
                ...u,
                avg_bitrate: i > 0 ? Math.round(((_ ?? 0) * 8) / i) : 0,
                avg_fps: i > 0 ? Math.round((I ?? 0) / i) : 0,
                num_bytes: _,
                num_packets_lost: T,
                num_packets: p,
                num_frames: f,
                num_frames_codec_error: h,
                time_to_first_frame_ms: e.timeToFirstFrame,
                num_frames_dropped: E + A,
                num_nacks: m,
                num_plis: g,
                qp_sum: S,
                num_keyframes: D,
                cryptor_passthrough_count: v,
                cryptor_success_count: b,
                cryptor_failure_count: M,
                cryptor_duration: P,
                cryptor_attempts: U,
                cryptor_missing_key_count: w,
                cryptor_invalid_nonce_count: G,
                cryptor_failure_after_success_count: H,
                encoder_quality_decode_errors: x,
                encoder_quality_decoder_reboots: k,
                encoder_quality_score_errors: F,
                encoder_quality_frame_drops: V,
                encoder_quality_size_mismatches: B,
            }
        );
    }
    receivedStats(e, t, n) {
        let i = t.transport,
            r = (0, el.isWeb)() ? 1 : (i.receiverReports?.length ?? 0),
            a = new Set(),
            s = new Set();
        this.updateSendState({ receivers: r });
        let l = this.cameraDuration.value;
        (this.cameraDuration.value = this.connection.context === T.x.DEFAULT && null != t.camera),
            (this.cameraOpportunityDuration.value =
                this.connection.context === T.x.DEFAULT && null != t.camera && this.callUserIdsCount > 1),
            (this.cameraSendDuration.value = this.connection.context === T.x.DEFAULT && null != t.camera && r > 0),
            this.cameraDuration.value && !l && this.cameraToggles++;
        let o = eE().max(n.map((e) => e.quality)),
            d = t.rtp.outbound.filter((e) => "video" === e.type && e?.videoEntropy != null)[0],
            c = d?.videoEntropy;
        t.rtp.outbound
            .filter((e) => "video" === e.type)
            .forEach((r) => {
                if (null != r) {
                    let _ = r.ssrc,
                        E = this.outboundStats[_];
                    null == E &&
                        (console.warn(`Unknown outbound video stream with SSRC: ${_}`),
                        (E = new e5.ET(this.timestampProducer)),
                        (this.outboundStats[_] = E)),
                        null == E.timeToFirstFrame &&
                            (r.framesEncoded > 0 || (r.frameRateInput ?? 0) > 0) &&
                            (E.timeToFirstFrame = Math.max(0, e - E.startTime)),
                        null != c && c >= 0 && this.videoEntropy.addSample(c);
                    let A = n.find((e) => e.ssrc === _);
                    var s,
                        l,
                        d = !0;
                    if (this.connection.context === T.x.STREAM) {
                        var u = this.connection.getRemoteVideoSinkWants(_);
                        (null == u || 0 === u) &&
                            A?.quality === o &&
                            (u = this.connection.getRemoteVideoSinkWants("any")),
                            (d = (u ?? 0) > 0);
                    }
                    let h = this.videoStopped.value || !d;
                    if ((h !== E.isVideoStopped && E.setVideoStopped(h, e5.iF.SenderStopped), !h)) {
                        let n = e5.tH.parseOutboundStats(r, e);
                        this.connection.context === T.x.STREAM &&
                            ((s = t.screenshare),
                            (l = n.framesCodec),
                            (n.screenshareFramesUnique =
                                null == s
                                    ? l
                                    : null != s.hybridDxgiFramesUnique ||
                                        null != s.hybridGdiBitBltFramesUnique ||
                                        null != s.hybridGdiPrintWindowFramesUnique ||
                                        null != s.hybridVideohookFramesUnique ||
                                        null != s.hybridGraphicsCaptureFramesUnique
                                      ? (s.hybridDxgiFramesUnique ?? 0) +
                                        (s.hybridGdiBitBltFramesUnique ?? 0) +
                                        (s.hybridGdiPrintWindowFramesUnique ?? 0) +
                                        (s.hybridVideohookFramesUnique ?? 0) +
                                        (s.hybridGraphicsCaptureFramesUnique ?? 0)
                                      : (s.screenshareFrames ?? 0) +
                                        (s.videohookFrames ?? 0) +
                                        (s.quartzFrames ?? 0) +
                                        (s.screenCaptureKitFrames ?? 0) +
                                        (s.x11Frames ?? 0) +
                                        (s.pipewireFrames ?? 0))),
                            E.appendAndIncrementStats(n),
                            null != r.minResolutionWidth &&
                                r.minResolutionWidth > 0 &&
                                (null == E.minWidth || r.minResolutionWidth < E.minWidth) &&
                                (E.minWidth = r.minResolutionWidth),
                            null != r.minResolutionHeight &&
                                r.minResolutionHeight > 0 &&
                                (null == E.minHeight || r.minResolutionHeight < E.minHeight) &&
                                (E.minHeight = r.minResolutionHeight),
                            E.encoderCodec !== e5.Wn.UNKNOWN && a.add(E.encoderCodec);
                        let o = A?.maxBitrate;
                        E.appendTargetRates(
                            A?.maxFrameRate,
                            r.bitrateTarget ?? Math.min(i.availableOutgoingBitrate ?? 0, o ?? 0),
                            o,
                            i.availableOutgoingBitrate,
                        ),
                            (E.averageEncodeTime = r.averageEncodeTime ?? 0),
                            (E.framesDroppedRateLimiter = r.framesDroppedRateLimiter ?? null),
                            (E.framesDroppedEncoderQueue = r.framesDroppedEncoderQueue ?? null),
                            (E.framesDroppedCongestionWindow = r.framesDroppedCongestionWindow ?? null),
                            (E.framesDroppedEncoder = r.framesDroppedEncoder ?? null),
                            (this.hqSimulcastStreamEncoded.value = r.hqSimulcastStreamEncoded ?? !1),
                            (this.lqSimulcastStreamEncoded.value = r.lqSimulcastStreamEncoded ?? !1),
                            (this.bothSimulcastStreamsEncoded.value =
                                this.hqSimulcastStreamEncoded.value && this.lqSimulcastStreamEncoded.value),
                            (this.bandwidthLimitedResolution.value = r.bandwidthLimitedResolution ?? !1),
                            (this.bandwidthLimitedFramerate.value = r.bandwidthLimitedFrameRate ?? !1);
                    }
                }
            }),
            this.paused.value ||
                eE().forEach(t.rtp.inbound, (t, n) => {
                    let r = t.find((e) => "video" === e.type);
                    if (null != r) {
                        let t = this.inboundStats[n];
                        null == t &&
                            (console.warn(`Unknown inbound video stream for user: ${n}`),
                            (t = new e5.dg(this.timestampProducer)),
                            (this.inboundStats[n] = t));
                        let a = e5.tH.parseInboundStats(r, e);
                        this.statCollectionPausedUsers.has(n) ||
                            (t.appendAndIncrementStats(a), t.appendTransportStats(i)),
                            null != r.minResolutionWidth &&
                                r.minResolutionWidth > 0 &&
                                (null == t.minWidth || r.minResolutionWidth < t.minWidth) &&
                                (t.minWidth = r.minResolutionWidth),
                            null != r.minResolutionHeight &&
                                r.minResolutionHeight > 0 &&
                                (null == t.minHeight || r.minResolutionHeight < t.minHeight) &&
                                (t.minHeight = r.minResolutionHeight),
                            a.packets > 0 && this.emit("fps-update", n, a.framesCodec, a.timestamp),
                            t.decoderCodec !== e5.Wn.UNKNOWN && s.add(t.decoderCodec),
                            null == t.timeToFirstFrame && r.framesDecoded > 0 && (t.timeToFirstFrame = e - t.startTime);
                    }
                }),
            0 !== a.size &&
                0 !== s.size &&
                ((0, e0._)(a, s) ? this.symmetricCodecUpdates++ : this.asymmetricCodecUpdates++);
    }
    sampleStats = (e) => {
        if (null == e) return;
        let t = this.timestampProducer.now();
        if (
            (this.networkQuality.incrementNetworkStats(t),
            this.updateSystemResourceStats(),
            this.updateVideoEffectStats(e),
            null == e)
        )
            return;
        let n = this.connection.getStreamParameters();
        this.receivedStats(t, e, n);
    };
    updateSystemResourceStats() {
        for (let e in this.outboundStats) this.outboundStats[e].addSystemResources();
        for (let e in this.inboundStats) this.inboundStats[e].addSystemResources();
    }
    updateVideoEffectStats(e) {
        let t = e?.rtp.outbound.find((e) => "video" === e.type);
        this.videoEffectDuration.value = t?.type === "video" && null != t.filter;
    }
}
var e8 = n(935172);
let e9 = [1, 100, 1e3, 1e4],
    te = [100, 500, 1e3, 5e3];
class tt {
    userId;
    connection;
    timestampProducer;
    listeningUsers = new Set();
    listening;
    speaking;
    participation;
    connected;
    muted;
    deafened;
    noiseCancellation;
    spatialAudio;
    timesUntilSpeakingDurationMilestonesMs = new Map();
    speakingMinimumChunks = new Map();
    speakingMinimumChunkCounts = new Map();
    speechEventCount = 0;
    constructor(e, t, n = m.TF) {
        (this.userId = e),
            (this.connection = t),
            (this.timestampProducer = n),
            (this.listening = new m.W0(this.timestampProducer)),
            (this.speaking = new m.W0(this.timestampProducer)),
            (this.participation = new m.W0(this.timestampProducer)),
            (this.connected = new m.W0(this.timestampProducer)),
            (this.muted = new m.W0(this.timestampProducer)),
            (this.deafened = new m.W0(this.timestampProducer)),
            (this.noiseCancellation = new m.w6(t.getNoiseCancellation(), this.timestampProducer)),
            (this.spatialAudio = new m.w6(t.getSpatialAudioEnabled(), this.timestampProducer));
    }
    start() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.listeningUsers.clear(),
            this.listening.reset(),
            this.speaking.reset(),
            this.participation.reset(),
            this.muted.reset(),
            this.deafened.reset(),
            this.connected.reset(),
            this.noiseCancellation.reset(),
            this.spatialAudio.reset(),
            this.timesUntilSpeakingDurationMilestonesMs.clear(),
            this.speakingMinimumChunks.clear(),
            this.speakingMinimumChunkCounts.clear(),
            (this.speechEventCount = 0),
            this.connected.start(),
            this.connection.on(e8.y.Speaking, (e, t, n) => {
                this.userId === e ? this.onSpeaking(0 !== t) : this.onListening(0 !== t, e);
            }),
            this.onMuted(e),
            this.onDeafened(t),
            this.connection.on(e8.y.Mute, (e) => {
                this.onMuted(e);
            }),
            this.connection.on(e8.y.Deafen, (e) => {
                this.onDeafened(e);
            });
    }
    onSpeaking(e) {
        if (e) this.speaking.start(), this.participation.start(), this.speechEventCount++;
        else {
            let e = this.connected.lastStartTime,
                t = this.speaking.lastStartTime,
                n = this.speaking.lastElapsed;
            this.addSpeechChunk(),
                this.speaking.stop(),
                this.listening.isRunning() || this.participation.stop(),
                this.computeSpeakingDurationMilestones(e, t, n);
        }
    }
    onListening(e, t) {
        e
            ? (this.listeningUsers.add(t), this.listening.start(), this.participation.start())
            : this.listeningUsers.delete(t) &&
              0 === this.listeningUsers.size &&
              (this.listening.stop(), this.speaking.isRunning() || this.participation.stop());
    }
    onMuted(e) {
        e ? this.muted.start() : this.muted.stop();
    }
    onDeafened(e) {
        e ? this.deafened.start() : this.deafened.stop();
    }
    computeSpeakingDurationMilestones(e, t, n) {
        if (null == e || null == t) return;
        let i = this.speaking.elapsed().asMilliseconds();
        e9.filter((e) => !this.timesUntilSpeakingDurationMilestonesMs.has(e))
            .filter((e) => i >= e)
            .forEach((i) => {
                this.timesUntilSpeakingDurationMilestonesMs.set(i, t - e + i - n);
            });
    }
    addSpeechChunk() {
        let e = this.speaking.lastStartTime;
        if (null == e) return;
        let t = this.timestampProducer.now() - e;
        te.filter((e) => t >= e).forEach((e) => {
            let n = this.speakingMinimumChunks.get(e) ?? 0;
            this.speakingMinimumChunks.set(e, n + t);
            let i = this.speakingMinimumChunkCounts.get(e) ?? 0;
            this.speakingMinimumChunkCounts.set(e, i + 1);
        });
    }
    setNoiseCancellationEnabled(e) {
        this.noiseCancellation.value = e;
    }
    setSpatialAudioEnabled(e) {
        this.spatialAudio.value = e;
    }
    stop() {
        this.addSpeechChunk();
        let e = this.connected.lastStartTime,
            t = this.speaking.lastStartTime,
            n = this.speaking.lastElapsed;
        this.speaking.stop(),
            this.listening.stop(),
            this.participation.stop(),
            this.connected.stop(),
            this.muted.stop(),
            (this.noiseCancellation.value = !1),
            (this.spatialAudio.value = !1),
            this.computeSpeakingDurationMilestones(e, t, n);
    }
    getDurationStats() {
        let e = this.speaking.lastStartTime,
            t = this.timestampProducer.now(),
            n = null != e ? t - e : 0;
        return (
            this.computeSpeakingDurationMilestones(
                this.connected.lastStartTime,
                this.speaking.lastStartTime,
                this.speaking.lastElapsed,
            ),
            {
                duration_listening_ms: this.listening.elapsed().asMilliseconds(),
                duration_speaking_ms: this.speaking.elapsed().asMilliseconds(),
                duration_participation_ms: this.participation.elapsed().asMilliseconds(),
                duration_connected_ms: this.connected.elapsed().asMilliseconds(),
                duration_muted_ms: this.muted.elapsed().asMilliseconds(),
                duration_deafened_ms: this.deafened.elapsed().asMilliseconds(),
                duration_noise_cancellation_enabled_ms: this.noiseCancellation.totalDuration(),
                duration_spatial_ms: this.spatialAudio.totalDuration(),
                speech_event_count: this.speechEventCount,
                ...e9
                    .filter((e) => this.timesUntilSpeakingDurationMilestonesMs.has(e))
                    .reduce(
                        (e, t) => ({
                            ...e,
                            [`time_to_first_${t}ms_speech_ms`]: this.timesUntilSpeakingDurationMilestonesMs.get(t),
                        }),
                        {},
                    ),
                ...te
                    .filter((e) => this.speakingMinimumChunks.has(e) || n >= e)
                    .reduce(
                        (e, t) => ({
                            ...e,
                            [`duration_speaking_gte_${t}ms_ms`]:
                                (this.speakingMinimumChunks.get(t) ?? 0) + (n >= t ? n : 0),
                            [`speech_event_count_gte_${t}ms`]:
                                (this.speakingMinimumChunkCounts.get(t) ?? 0) + +(n >= t),
                        }),
                        {},
                    ),
            }
        );
    }
}
var tn = (((o = {}).InputDeviceSampleRateChanged = "input-device-sample-rate-changed"), o);
class ti extends p.A {
    connection;
    inboundStats;
    outboundStats;
    networkQuality;
    systemResources;
    duration;
    decryptionFailures;
    routingFailures;
    periodicInboundStats;
    inputDeviceStats;
    outputDeviceStats;
    constructor(e) {
        super(),
            (this.connection = e),
            (this.networkQuality = new e3()),
            (this.systemResources = new eZ.A()),
            (this.inboundStats = {}),
            (this.outboundStats = {
                packetsSent: 0,
                bytesSent: 0,
                packetsLost: 0,
                passthroughCount: 0,
                encryptSuccessCount: 0,
                encryptFailureCount: 0,
                encryptDuration: 0,
                encryptAttempts: 0,
                encryptMaxAttempts: 0,
                encryptMissingKeyCount: 0,
                bytesAvailable: 0,
                bytesTarget: 0,
                previousTimestampMs: 0,
                aggregationDurationMs: 0,
                speakingAudioLevel: new eX.d(),
            }),
            (this.duration = { listening: 0, speaking: 0, participation: 0, connected: 0 }),
            (this.periodicInboundStats = {}),
            (this.inputDeviceStats = {}),
            (this.outputDeviceStats = {});
    }
    start() {
        this.connection.on(T.yq.Stats, this.sampleStats);
    }
    stop() {
        this.connection.off(T.yq.Stats, this.sampleStats);
    }
    getMosStats() {
        let e = eE().reduce(
            this.inboundStats,
            (e, t) => {
                (e.mosSum += t.mosSum), (e.mosCount += t.mosCount);
                for (var n = 0; n < 5; n++) e.mosBuckets[n] += t.mosBuckets[n];
                return e;
            },
            { mosSum: 0, mosCount: 0, mosBuckets: [0, 0, 0, 0, 0] },
        );
        return {
            mos_mean: e.mosCount > 0 ? e.mosSum / e.mosCount : 0,
            mos_1: e.mosBuckets[1],
            mos_2: e.mosBuckets[2],
            mos_3: e.mosBuckets[3],
            mos_4: e.mosBuckets[4],
        };
    }
    getPacketStats() {
        let e = eE().reduce(
            this.inboundStats,
            (e, t) => (
                (e.packetsReceived += t.packetsReceived),
                (e.packetsReceivedLost += t.packetsLost),
                (e.nackCount += t.nackCount),
                (e.fecPacketsReceived += t.fecPacketsReceived),
                (e.fecPacketsDiscarded += t.fecPacketsDiscarded),
                e
            ),
            { packetsReceived: 0, packetsReceivedLost: 0, nackCount: 0, fecPacketsReceived: 0, fecPacketsDiscarded: 0 },
        );
        return {
            packets_sent: this.outboundStats.packetsSent,
            packets_sent_lost: this.outboundStats.packetsLost,
            packets_received: e.packetsReceived,
            packets_received_lost: e.packetsReceivedLost,
            num_nacks_sent: e.nackCount,
            fec_packets_received: e.fecPacketsReceived,
            fec_packets_discarded: e.fecPacketsDiscarded,
        };
    }
    getBytesStats() {
        let e = eE().reduce(this.inboundStats, (e, t) => e + t.bytesReceived, 0),
            t = this.outboundStats.aggregationDurationMs / 1e3;
        return {
            bytes_sent: this.outboundStats.bytesSent,
            bytes_received: e,
            outbound_bandwidth_estimate: t > 0 ? Math.round((8 * this.outboundStats.bytesAvailable) / t) : 0,
            audio_target_bitrate: t > 0 ? Math.round((8 * this.outboundStats.bytesTarget) / t) : 0,
        };
    }
    getNetworkStats() {
        return this.networkQuality.getStats();
    }
    getSystemResourceStats() {
        return this.systemResources.getStats();
    }
    getBufferStats() {
        let e = eE().reduce(
                this.inboundStats,
                (e, t) => {
                    let n = null;
                    t.bufferStats.audioJitterBufferHistogram.getSamples() > 0
                        ? (n = t.bufferStats.audioJitterBufferHistogram.getPercentile(75))
                        : null != t.bufferStats.audioJitterBuffer && (n = t.bufferStats.audioJitterBuffer.p75);
                    let i = null;
                    return (
                        null == e
                            ? (i = null)
                            : e.audioJitterBufferHistogram.getSamples() > 0
                              ? (i = e.audioJitterBufferHistogram.getPercentile(75))
                              : null != e.audioJitterBuffer && (i = e.audioJitterBuffer.p75),
                        (null == e || null == i || (null != n && n > i)) && (e = t.bufferStats),
                        e
                    );
                },
                null,
            ),
            t = null;
        null != e &&
            (e.audioJitterBufferHistogram.getSamples() > 0
                ? (t = e.audioJitterBufferHistogram)
                : null != e.audioJitterBuffer && (t = e.audioJitterBuffer));
        let n = null;
        null != e &&
            (e.audioJitterTargetHistogram.getSamples() > 0
                ? (n = e.audioJitterTargetHistogram)
                : null != e.audioJitterTarget && (n = e.audioJitterTarget));
        let i = null;
        return (
            null != e &&
                (e.audioJitterDelayHistogram.getSamples() > 0
                    ? (i = e.audioJitterDelayHistogram)
                    : null != e.audioJitterDelay && (i = e.audioJitterDelay)),
            {
                ...(function (e) {
                    let t = {};
                    for (let n in e) {
                        let i = e[n];
                        if (i instanceof eX.d) {
                            let e = [75, 95, 99],
                                r = i.getReport(e);
                            (t[n + "_mean"] = Math.round(r.mean)),
                                (t[n + "_p75"] = Math.round(r.percentiles[75])),
                                (t[n + "_p95"] = Math.round(r.percentiles[95])),
                                (t[n + "_p99"] = Math.round(r.percentiles[99])),
                                (t[n + "_max"] = Math.round(r.max));
                        } else
                            (t[n + "_mean"] = null != i ? i.mean : 0),
                                (t[n + "_p75"] = null != i ? i.p75 : 0),
                                (t[n + "_p95"] = null != i ? i.p95 : 0),
                                (t[n + "_p99"] = null != i ? i.p99 : 0),
                                (t[n + "_max"] = null != i ? i.max : 0);
                    }
                    return t;
                })({
                    audio_jitter_buffer: t,
                    audio_jitter_target: n,
                    audio_jitter_delay: i,
                    relative_reception_delay: e?.relativeReceptionDelay ?? null,
                    relative_playout_delay: e?.relativePlayoutDelay ?? null,
                }),
            }
        );
    }
    getFrameOpStats() {
        let e = eE().reduce(
            this.inboundStats,
            (e, t) => (
                null != t.frameOpStats.silent && (e.silent += t.frameOpStats.silent),
                null != t.frameOpStats.normal && (e.normal += t.frameOpStats.normal),
                null != t.frameOpStats.merged && (e.merged += t.frameOpStats.merged),
                null != t.frameOpStats.expanded && (e.expanded += t.frameOpStats.expanded),
                null != t.frameOpStats.accelerated && (e.accelerated += t.frameOpStats.accelerated),
                null != t.frameOpStats.preemptiveExpanded &&
                    (e.preemptiveExpanded += t.frameOpStats.preemptiveExpanded),
                null != t.frameOpStats.cng && (e.cng += t.frameOpStats.cng),
                e
            ),
            { silent: 0, normal: 0, merged: 0, expanded: 0, accelerated: 0, preemptiveExpanded: 0, cng: 0 },
        );
        return {
            frame_op_silent: e.silent,
            frame_op_normal: e.normal,
            frame_op_merged: e.merged,
            frame_op_expanded: e.expanded,
            frame_op_accelerated: e.accelerated,
            frame_op_preemptive_expanded: e.preemptiveExpanded,
            frame_op_cng: e.cng,
        };
    }
    getDurationStats() {
        return {
            duration_listening: this.duration.listening,
            duration_speaking: this.duration.speaking,
            duration_participation: this.duration.participation,
            duration_connected: this.duration.connected,
        };
    }
    getTransportStats() {
        return { decryption_failures: this.decryptionFailures, routing_failures: this.routingFailures };
    }
    getE2EEStats() {
        let e = eE().reduce(
            this.inboundStats,
            (e, t) => (
                (e.passthroughCount += t.passthroughCount ?? 0),
                (e.decryptSuccessCount += t.decryptSuccessCount ?? 0),
                (e.decryptFailureCount += t.decryptFailureCount ?? 0),
                (e.decryptDuration += t.decryptDuration ?? 0),
                (e.decryptAttempts += t.decryptAttempts ?? 0),
                (e.decryptMissingKeyCount += t.decryptMissingKeyCount ?? 0),
                (e.decryptInvalidNonceCount += t.decryptInvalidNonceCount ?? 0),
                (e.decryptFailureAfterSuccessCount +=
                    (t.decryptFailureCount ?? 0) - (t.decryptFailureBeforeSuccessCount ?? 0)),
                e
            ),
            {
                passthroughCount: 0,
                decryptSuccessCount: 0,
                decryptFailureCount: 0,
                decryptDuration: 0,
                decryptAttempts: 0,
                decryptMissingKeyCount: 0,
                decryptInvalidNonceCount: 0,
                decryptFailureAfterSuccessCount: 0,
            },
        );
        return {
            decrypt_passthrough_count: e.passthroughCount,
            decrypt_success_count: e.decryptSuccessCount,
            decrypt_failure_count: e.decryptFailureCount,
            decrypt_duration: e.decryptDuration,
            decrypt_attempts: e.decryptAttempts,
            decrypt_missing_key_count: e.decryptMissingKeyCount,
            decrypt_invalid_nonce_count: e.decryptInvalidNonceCount,
            decrypt_failure_after_success_count: e.decryptFailureAfterSuccessCount,
            encrypt_passthrough_count: this.outboundStats.passthroughCount,
            encrypt_success_count: this.outboundStats.encryptSuccessCount,
            encrypt_failure_count: this.outboundStats.encryptFailureCount,
            encrypt_duration: this.outboundStats.encryptDuration,
            encrypt_attempts: this.outboundStats.encryptAttempts,
            encrypt_max_attempts: this.outboundStats.encryptMaxAttempts,
            encrypt_missing_key_count: this.outboundStats.encryptMissingKeyCount,
        };
    }
    getAudioDeviceStats() {
        return {
            input_device_restart_count: this.inputDeviceStats.restartCount?.accumulated,
            output_device_restart_count: this.outputDeviceStats.restartCount?.accumulated,
            input_device_time_to_first_audio: this.inputDeviceStats.timeToFirstCallbackMs,
            output_device_time_to_first_audio: this.outputDeviceStats.timeToFirstCallbackMs,
            input_device_buffer_overfull_count: this.inputDeviceStats.bufferViolations?.accumulated,
            output_device_buffer_underrun_count: this.outputDeviceStats.bufferViolations?.accumulated,
            input_device_session_sample_rate: this.inputDeviceStats.sessionSampleRate,
            output_device_session_sample_rate: this.outputDeviceStats.sessionSampleRate,
            input_device_time_from_connect_to_first_audio_ms: this.inputDeviceStats.timeFromConnectToFirstCallbackMs,
            output_device_time_from_connect_to_first_audio_ms: this.outputDeviceStats.timeFromConnectToFirstCallbackMs,
        };
    }
    getAudioLevelStats() {
        let e = this.outboundStats.speakingAudioLevel.getReport([1, 5, 10, 25, 50, 75, 90, 95, 99]);
        return {
            outbound_audio_level_db_p1: e.percentiles[1],
            outbound_audio_level_db_p5: e.percentiles[5],
            outbound_audio_level_db_p10: e.percentiles[10],
            outbound_audio_level_db_p25: e.percentiles[25],
            outbound_audio_level_db_p50: e.percentiles[50],
            outbound_audio_level_db_p75: e.percentiles[75],
            outbound_audio_level_db_p90: e.percentiles[90],
            outbound_audio_level_db_p95: e.percentiles[95],
            outbound_audio_level_db_p99: e.percentiles[99],
            outbound_audio_level_db_max: e.max,
            outbound_audio_level_db_mean: e.mean,
        };
    }
    getPeriodicStats() {
        let e = [];
        for (let [t, n] of Object.entries(this.periodicInboundStats)) {
            let { previous: i, current: r, currentTimestampMs: a, previousTimestampMs: s, numRateSamples: l } = n;
            if (void 0 !== s && a > s) {
                let o = a - s,
                    d = {
                        userId: t,
                        silent: r.silent ?? 0 - (i.silent ?? 0),
                        normal: r.normal ?? 0 - (i.normal ?? 0),
                        merged: r.merged ?? 0 - (i.merged ?? 0),
                        expanded: r.expanded ?? 0 - (i.expanded ?? 0),
                        accelerated: r.accelerated ?? 0 - (i.accelerated ?? 0),
                        preemptiveExpanded: r.preemptiveExpanded ?? 0 - (i.preemptiveExpanded ?? 0),
                        cng: r.cng ?? 0 - (i.cng ?? 0),
                        accelerateRate: n.accelerateRateSum / l,
                        expandRate: n.expandRateSum / l,
                        preemptiveExpandRate: n.preemptiveExpandRateSum / l,
                        speechExpandRate: n.speechExpandRateSum / l,
                        durationMs: o,
                    };
                d.normal + d.merged + d.expanded + d.accelerated + d.preemptiveExpanded > 0 && e.push(d);
            }
            (this.periodicInboundStats[t].accelerateRateSum = 0),
                (this.periodicInboundStats[t].expandRateSum = 0),
                (this.periodicInboundStats[t].preemptiveExpandRateSum = 0),
                (this.periodicInboundStats[t].speechExpandRateSum = 0),
                (this.periodicInboundStats[t].numRateSamples = 0),
                (this.periodicInboundStats[t].previous = r),
                (this.periodicInboundStats[t].previousTimestampMs = a);
        }
        return e;
    }
    sampleAudioDevice = (e, t) => {
        void 0 !== e &&
            (void 0 !== e.restartCount && (t.restartCount = tr(e.restartCount, t.restartCount)),
            void 0 !== e.bufferViolations && (t.bufferViolations = tr(e.bufferViolations, t.bufferViolations)),
            (e.timeToFirstCallbackMs ?? 0) !== 0 &&
                void 0 === t.timeToFirstCallbackMs &&
                (t.timeToFirstCallbackMs = e.timeToFirstCallbackMs),
            (e.sessionSampleRate ?? 0) !== 0 &&
                (t.sessionSampleRate !== e.sessionSampleRate &&
                    this.emit("input-device-sample-rate-changed", e.sessionSampleRate ?? 0),
                (t.sessionSampleRate = e.sessionSampleRate)),
            void 0 !== e.timeFromConnectToFirstCallbackMs &&
                void 0 === t.timeFromConnectToFirstCallbackMs &&
                (t.timeFromConnectToFirstCallbackMs = e.timeFromConnectToFirstCallbackMs));
    };
    appendTargetRates = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (0 === e.previousTimestampMs) {
            e.previousTimestampMs = performance.now();
            return;
        }
        let i = performance.now();
        e.aggregationDurationMs += i - e.previousTimestampMs;
        let r = (i - e.previousTimestampMs) / 1e3;
        (e.bytesAvailable += (t / 8) * r), (e.bytesTarget += (n / 8) * r), (e.previousTimestampMs = i);
    };
    sampleStats = (e) => {
        if (null == e) return;
        this.networkQuality.incrementNetworkStats((0, m.tB)()),
            this.systemResources.takeSample(),
            this.duration.connected++;
        let t = this.outboundStats.packetsSent,
            n = eE().reduce(this.inboundStats, (e, t) => ((e.packetsReceived += t.packetsReceived), e), {
                packetsReceived: 0,
            }),
            i = 0;
        eE().forEach(e.rtp.outbound, (e) => {
            "audio" === e.type &&
                ((i = e.bitrateTarget ?? 0),
                (this.outboundStats = {
                    ...this.outboundStats,
                    packetsSent: e.packetsSent,
                    bytesSent: e.bytesSent,
                    packetsLost: e.packetsLost ?? 0,
                    passthroughCount: e.passthroughCount ?? 0,
                    encryptSuccessCount: e.encryptSuccessCount ?? 0,
                    encryptFailureCount: e.encryptFailureCount ?? 0,
                    encryptDuration: e.encryptDuration ?? 0,
                    encryptAttempts: e.encryptAttempts ?? 0,
                    encryptMaxAttempts: e.encryptMaxAttempts ?? 0,
                    encryptMissingKeyCount: e.encryptMissingKeyCount ?? 0,
                }),
                !0 == !!e.audioDetected &&
                    null != e.audioLevel &&
                    this.outboundStats.speakingAudioLevel.addSample(20 * Math.log(e.audioLevel)));
        }),
            (this.decryptionFailures = e.transport.decryptionFailures),
            (this.routingFailures = e.transport.routingFailures),
            this.appendTargetRates(this.outboundStats, e.transport.availableOutgoingBitrate, i),
            eE().forEach(e.rtp.inbound, (t, n) => {
                eE().forEach(t, (t) => {
                    if ("audio" === t.type) {
                        let i = this.inboundStats[n],
                            r = e.transport.ping ?? 0,
                            a = t.packetsReceived,
                            s = t.packetsLost,
                            l = t.bytesReceived,
                            o = t.nackCount,
                            d = t.fecPacketsReceived ?? 0,
                            c = t.fecPacketsDiscarded ?? 0,
                            u = t.jitterBuffer ?? 0,
                            _ = {
                                audioJitterBuffer: t.audioJitterBuffer,
                                audioJitterBufferHistogram: i?.bufferStats.audioJitterBufferHistogram ?? new eX.d(),
                                audioJitterTarget: t.audioJitterTarget,
                                audioJitterTargetHistogram: i?.bufferStats.audioJitterTargetHistogram ?? new eX.d(),
                                audioJitterDelay: t.audioJitterDelay,
                                audioJitterDelayHistogram: i?.bufferStats.audioJitterDelayHistogram ?? new eX.d(),
                                relativeReceptionDelay: t.relativeReceptionDelay,
                                relativePlayoutDelay: t.relativePlayoutDelay,
                            };
                        _.audioJitterBufferHistogram.addSamples(t.audioJitterBufferSamples ?? []),
                            _.audioJitterDelayHistogram.addSamples(t.audioJitterDelaySamples ?? []),
                            _.audioJitterTargetHistogram.addSamples(t.audioJitterTargetSamples ?? []);
                        let E = {
                                silent: t.opSilence,
                                normal: t.opNormal,
                                merged: t.opMerge,
                                expanded: t.opExpand,
                                accelerated: t.opAccelerate,
                                preemptiveExpanded: t.opPreemptiveExpand,
                                cng: t.opCNG,
                            },
                            A = {
                                passthroughCount: t.passthroughCount ?? 0,
                                decryptSuccessCount: t.decryptSuccessCount ?? 0,
                                decryptFailureCount: t.decryptFailureCount ?? 0,
                                decryptDuration: t.decryptDuration ?? 0,
                                decryptAttempts: t.decryptAttempts ?? 0,
                                decryptMissingKeyCount: t.decryptMissingKeyCount ?? 0,
                                decryptInvalidNonceCount: t.decryptInvalidNonceCount ?? 0,
                            };
                        if (null != i) {
                            let e = a - i.packetsReceived,
                                h = s - i.packetsLost,
                                I = 0,
                                f = i.mosBuckets,
                                p =
                                    i.decryptFailureBeforeSuccessCount ??
                                    (A.decryptSuccessCount > 0 ? A.decryptFailureCount : void 0);
                            e > 0 &&
                                h >= 0 &&
                                ((I = this.calculateMos(r + u, eE().clamp(h / (e + h), 0, 1))), f[Math.floor(I)]++),
                                (this.inboundStats[n] = {
                                    packetsReceived: a,
                                    bytesReceived: l,
                                    packetsLost: s,
                                    nackCount: o ?? 0,
                                    fecPacketsReceived: d,
                                    fecPacketsDiscarded: c,
                                    mos: I,
                                    mosSum: i.mosSum + I,
                                    mosCount: i.mosCount + +(I > 0),
                                    mosBuckets: f,
                                    bufferStats: _,
                                    frameOpStats: E,
                                    decryptFailureBeforeSuccessCount: p,
                                    ...A,
                                }),
                                (this.periodicInboundStats[n] = {
                                    previousTimestampMs: this.periodicInboundStats[n].previousTimestampMs,
                                    previous: this.periodicInboundStats[n].previous,
                                    currentTimestampMs: performance.now(),
                                    current: E,
                                    accelerateRateSum:
                                        this.periodicInboundStats[n].accelerateRateSum + (t.accelerateRate ?? 0),
                                    expandRateSum: this.periodicInboundStats[n].expandRateSum + (t.expandRate ?? 0),
                                    preemptiveExpandRateSum:
                                        this.periodicInboundStats[n].preemptiveExpandRateSum +
                                        (t.preemptiveExpandRate ?? 0),
                                    speechExpandRateSum:
                                        this.periodicInboundStats[n].speechExpandRateSum + (t.speechExpandRate ?? 0),
                                    numRateSamples: this.periodicInboundStats[n].numRateSamples + 1,
                                });
                        } else
                            (this.inboundStats[n] = {
                                packetsReceived: a,
                                bytesReceived: l,
                                packetsLost: s,
                                nackCount: o ?? 0,
                                fecPacketsReceived: d,
                                fecPacketsDiscarded: c,
                                mos: 0,
                                mosSum: 0,
                                mosCount: 0,
                                mosBuckets: [0, 0, 0, 0, 0],
                                bufferStats: _,
                                frameOpStats: E,
                                ...A,
                            }),
                                (this.periodicInboundStats[n] = {
                                    previousTimestampMs: performance.now(),
                                    previous: E,
                                    currentTimestampMs: performance.now(),
                                    current: E,
                                    accelerateRateSum: t.accelerateRate ?? 0,
                                    expandRateSum: t.expandRate ?? 0,
                                    preemptiveExpandRateSum: t.preemptiveExpandRate ?? 0,
                                    speechExpandRateSum: t.speechExpandRate ?? 0,
                                    numRateSamples: 1,
                                });
                    }
                });
            }),
            void 0 !== e.audioDevice &&
                (this.sampleAudioDevice(e.audioDevice.input, this.inputDeviceStats),
                this.sampleAudioDevice(e.audioDevice.output, this.outputDeviceStats));
        let r = !1,
            a = !1;
        this.outboundStats.packetsSent > t && ((r = !0), this.duration.speaking++),
            eE().reduce(this.inboundStats, (e, t) => ((e.packetsReceived += t.packetsReceived), e), {
                packetsReceived: 0,
            }).packetsReceived > n.packetsReceived && ((a = !0), this.duration.listening++),
            (r || a) && this.duration.participation++;
    };
    calculateMos(e, t) {
        let n = this.calculateR(e, t);
        return n < 0 ? 1 : n > 100 ? 4.5 : 1 + 0.035 * n + 71e-7 * n * (n - 60) * (100 - n);
    }
    calculateR(e, t) {
        return 93.4 - (0.024 * e + (e > 177.3 ? 0.11 * (e - 177.3) : 0)) - (10 + (122 * t) / (t + 10));
    }
}
function tr(e, t) {
    let { accumulated: n, lastValue: i } = t ?? { accumulated: 0, lastValue: 0 };
    return { accumulated: i > e ? n + e : n + (e - i), lastValue: e };
}
var ta = n(753070),
    ts = n(396574),
    tl = n(375708);
let to = /^https/.test("https:") ? "wss:" : "ws:";
function td() {
    return new I.A(1e3, 1e4);
}
function tc(e, t) {
    return (
        null != e &&
        e.address === t.address &&
        e.port === t.port &&
        e.modes.length === t.modes.length &&
        e.modes.every((e, n) => e === t.modes[n])
    );
}
let tu = 0,
    t_ = [];
class tE extends p.A {
    context;
    userId;
    sessionId;
    guildId;
    parentMediaSessionId;
    hostname;
    state;
    _videoQuality;
    logger;
    streamServerId;
    streamChannelId;
    _channelId;
    _nextChannelId;
    joinVoiceId;
    channelIds;
    _endpoint;
    port;
    token;
    protocol;
    voiceVersion;
    rtcWorkerVersion;
    _socket;
    _backoff;
    _mlsFailureReconnectBackoff;
    _destroyed;
    _pings;
    _pingBadCount;
    _pingTimeouts;
    _mediaSessionId;
    _voiceQuality;
    _voiceQualityPeriodicStatsInterval;
    _voiceQualityPeriodicStatsSequenceId;
    _systemResponsiveness;
    _systemResources;
    _noiseCancellationError;
    _voiceDuration;
    _videoHealthManager;
    _sentVideo;
    _videoDecoderFallbackSuppressed;
    _outboundLossRate;
    _recordingEnabled;
    _selectedExperiments;
    _localMediaSinkWantsManager;
    _goLiveQualityManager;
    _remoteVideoSinkWants;
    _connection;
    _hasCodecs;
    _mediaEngineConnectionId;
    _readyData;
    _sfuEndpoint;
    _createdTime;
    _connectStartTime;
    _connectCompletedTime;
    _rtcConnectionId;
    _connectCount;
    _connectionSerial;
    _hasEverConnected;
    _connecting;
    _voiceConnectionSuccessTracked;
    _mediaEngineConnectDuration;
    _encountered_socket_failure;
    _inputDetected;
    _encryptionMode;
    stateHistory;
    _supportedBandwidthEstimationExperiments;
    _bandwidthEstimationExperiment;
    _secureFramesState;
    _userIds;
    _secureFramesRosterMap = new Map();
    reconnecting = !1;
    _nextFailureId = 0;
    _mlsFailures = [];
    _secureFramesTransitionStates = new Map();
    _secureFramesNextTransitionState;
    _secureFramesMaxConcurrentTransitions = 0;
    _secureFramesTransitionPrepareCount = 0;
    _secureFramesTransitionExecuteCount = 0;
    _secureFramesLastBecameAloneTime;
    _mlsSessionResetStartTime;
    _mlsInitReceivedTime;
    _consecutiveMLSInvalidMessages = 0;
    _numNoiseCancellationChanges = 0;
    _fetchAsyncResourcesPromise;
    _lastSentSpeakingStatus;
    _lastSentSSRC;
    powerMonitorListener;
    constructor({
        userId: e,
        sessionId: t,
        guildId: n,
        channelId: i,
        context: r = H.x.DEFAULT,
        streamServerId: a,
        streamChannelId: s,
        parentMediaSessionId: l,
        joinVoiceId: o,
        createdTime: d,
    }) {
        super(),
            (this.context = r),
            this.recordEvent({ c: 0 }),
            (this._fetchAsyncResourcesPromise = J.Ay.fetchAsyncResources().catch((e) => {
                ed.A.captureException(e);
            })),
            (this.userId = e),
            (this.sessionId = t),
            (this.guildId = n),
            (this._channelId = i),
            (this.channelIds = new Set([i])),
            (this.streamServerId = a),
            (this.streamChannelId = s),
            (this.parentMediaSessionId = l),
            (this.joinVoiceId = o),
            (this._connectionSerial = tu++),
            (this.logger = new L.A(`RTCConnection(${this.trueServerId}, ${this.context})`)),
            this.logger.enableNativeLogger(!0),
            (this._endpoint = null),
            (this.hostname = null),
            (this.port = null),
            (this.token = null),
            (this.protocol = null),
            (this.voiceVersion = null),
            (this.rtcWorkerVersion = null),
            (this._createdTime = d ?? (0, m.tB)()),
            (this.state = ef.S7L.AWAITING_ENDPOINT),
            (this.stateHistory = new ep(this.state, this._createdTime)),
            (this._socket = null),
            (this._backoff = td()),
            (this._mlsFailureReconnectBackoff = td()),
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
            (this._videoDecoderFallbackSuppressed = !1),
            (this._outboundLossRate = null),
            (this._connectStartTime = 0),
            (this._connectCompletedTime = 0),
            (this._rtcConnectionId = (0, h.A)()),
            (this._connectCount = 0),
            (this._hasEverConnected = !1),
            (this._connecting = !1),
            (this._voiceConnectionSuccessTracked = !1),
            (this._hasCodecs = !1),
            (this._mediaEngineConnectDuration = 0),
            (this._encountered_socket_failure = !1),
            (this._inputDetected = !1),
            (this._selectedExperiments = []),
            (this._secureFramesState = null),
            (this._userIds = new Set([e])),
            this._secureFramesRosterMap.clear(),
            (this._mlsFailures = []),
            (this._consecutiveMLSInvalidMessages = 0),
            (this._nextFailureId = 0),
            (this._mediaEngineConnectionId = null),
            (this._readyData = null),
            (this._sfuEndpoint = null),
            (this.reconnecting = !1),
            (this._lastSentSpeakingStatus = 0),
            (this._lastSentSSRC = void 0);
        const c = J.Ay.supports(H.O5.FIRST_FRAME_CALLBACK) && J.Ay.supports(H.O5.REMOTE_USER_MULTI_STREAM);
        switch (r) {
            case H.x.DEFAULT: {
                const t = X.A.getChannel(this.channelId)?.type === ef.rbe.GUILD_STAGE_VOICE;
                (this._localMediaSinkWantsManager = new eq(e, t, c)),
                    this._localMediaSinkWantsManager.on(e$.Update, (e) => {
                        this.state === ef.S7L.RTC_CONNECTED &&
                            null != this._socket &&
                            (this.logger.info(`Media sink wants: ${JSON.stringify(e)}`),
                            this._socket.mediaSinkWants(e),
                            this._connection?.setLocalVideoSinkWants(e));
                    }),
                    this._localMediaSinkWantsManager.on(e$.UserSSRCUpdate, (e, t, n) => {
                        this._connection?.createUser(e, t, n);
                    });
                break;
            }
            case H.x.STREAM:
                (this._goLiveQualityManager = new P()),
                    this._goLiveQualityManager.on(M.RequestedSSRCsUpdate, (e, t, n) => {
                        this._connection?.createUser(e, t, n);
                    }),
                    this._goLiveQualityManager.on(M.RequestedStreamsUpdate, (e) => {
                        this.state === ef.S7L.RTC_CONNECTED &&
                            null != this._socket &&
                            (this.logger.info(`Go Live Media sink wants: ${JSON.stringify(e)}`),
                            this._socket.mediaSinkWants(e),
                            this._connection?.setLocalVideoSinkWants(e));
                    });
        }
        (this._remoteVideoSinkWants = eH),
            eB.X.on(eB.N.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged),
            eB.X.on(eB.N.WindowVisibilityChanged, this.windowVisibilityChanged),
            et.Ay.shouldRecordNextConnection()
                ? ((this._recordingEnabled = !0), N.Et(!1))
                : (this._recordingEnabled = !1),
            es.A.addOnlineCallback(this._handleNetworkOnline),
            es.A.addOfflineCallback(this._handleNetworkOffline),
            (0, el.isDesktop)() &&
                (this.powerMonitorListener = eu.A.powerMonitor.on("resume", this._handlePowerResume)),
            (this._supportedBandwidthEstimationExperiments = []),
            (this._bandwidthEstimationExperiment = null),
            J.Ay.getMediaEngine().getSupportedBandwidthEstimationExperiments((e) => {
                this._supportedBandwidthEstimationExperiments = e;
            });
    }
    recordEvent(e) {
        for (t_.push({ ...e, t: (0, m.tB)(), n: this._connectionSerial }); t_.length > 50; ) t_.shift();
    }
    get quality() {
        let e = this.getLastPing();
        return this.state !== ef.S7L.RTC_CONNECTED || void 0 === e
            ? ef.bFR.UNKNOWN
            : e > 500 || (null != this._outboundLossRate && this._outboundLossRate > 10)
              ? ef.bFR.BAD
              : e > 250 || (null != this._outboundLossRate && this._outboundLossRate > 5)
                ? ef.bFR.AVERAGE
                : ef.bFR.FINE;
    }
    get endpoint() {
        return this._endpoint;
    }
    set endpoint(e) {
        if ((this.recordEvent({ c: 6, e: null != e }), null == e)) (this._endpoint = null), (this.hostname = null);
        else {
            e = `${to}//${e}`;
            let { hostname: t, port: n } = ec.A.toURLSafe(e) ?? {},
                i = null != n ? parseInt(n) : NaN;
            null != t && (80 === i || 443 === i) && (e = `${to}//${t}`),
                (this._endpoint = e + "/"),
                (this.hostname = t);
        }
    }
    connect(e, t) {
        if (this._destroyed) throw Error("RTCConnection.connect(...): Attempting to connect on destroyed instance.");
        this.recordEvent({ c: 2, e: null != e, h: null != t }), this._cancelReconnect();
        let { endpoint: n, token: i } = this;
        if (
            ((this.endpoint = e),
            (this.token = t),
            (n !== this.endpoint || i !== t) &&
                (this._cleanupSocket(),
                (this._mediaSessionId = null),
                null != n &&
                    ((this._rtcConnectionId = (0, h.A)()),
                    g.h.dispatch({ type: "RTC_CONNECTION_UPDATE_ID", connection: this }))),
            null == this.endpoint)
        )
            return void this.setState(ef.S7L.AWAITING_ENDPOINT);
        let r = this._socket;
        null != r && this._cleanupSocket(),
            null != this._nextChannelId && ((this._channelId = this._nextChannelId), (this._nextChannelId = void 0)),
            (r = this._socket = new eP(this.endpoint, this.context)).on(
                eM.Connecting,
                this._handleConnecting.bind(this, r),
            ),
            r.on(eM.Connect, this._handleConnect.bind(this, r)),
            r.on(eM.Disconnect, this._handleDisconnect.bind(this, r)),
            r.on(eM.Resuming, this._handleResuming.bind(this, r)),
            r.on(eM.Ready, this._handleReady.bind(this, r)),
            r.on(eM.SfuUpdate, this._handleSfuUpdate.bind(this, r)),
            r.on(eM.Speaking, this._handleSpeaking.bind(this, r)),
            r.on(eM.Video, this._handleVideo.bind(this, r)),
            r.on(eM.Ping, this._handleControlPing.bind(this)),
            r.on(eM.ClientDisconnect, this._handleClientDisconnect.bind(this)),
            r.on(eM.ClientConnect, this._handleClientConnect.bind(this)),
            r.on(eM.Codecs, this._handleCodecs.bind(this)),
            r.on(eM.MediaSessionId, this._handleMediaSessionId.bind(this)),
            r.on(eM.MediaSinkWants, this._handleMediaSinkWants.bind(this)),
            r.on(eM.VoiceBackendVersion, this._handleCodeVersion.bind(this)),
            r.on(eM.KeyframeInterval, this._handleKeyframeInterval.bind(this)),
            r.on(eM.Flags, this.handleFlags.bind(this)),
            r.on(eM.Platform, this.handlePlatform.bind(this)),
            r.on(eM.BandwidthEstimationExperiment, this._handleBandwidthEstimationExperiment.bind(this)),
            r.on(eM.SecureFramesInit, this._handleSecureFramesInit.bind(this)),
            r.on(eM.SecureFramesPrepareTransition, this._handleSecureFramesPrepareTransition.bind(this)),
            r.on(eM.SecureFramesPrepareEpoch, this._handleSecureFramesPrepareEpoch.bind(this)),
            r.on(eM.SecureFramesExecuteTransition, this._handleSecureFramesExecuteTransition.bind(this)),
            r.on(eM.MLSExternalSenderPackage, this._handleMLSExternalSenderPackage.bind(this)),
            r.on(eM.MLSProposals, this._handleMLSProposals.bind(this, r)),
            r.on(eM.MLSPrepareCommitTransition, this._handleMLSPrepareCommitTransition.bind(this)),
            r.on(eM.MLSWelcome, this._handleMLSWelcome.bind(this)),
            r.on(eM.ReceiveMessage, this._recordMessageEvent.bind(this, 4)),
            r.on(eM.SendMessage, this._recordMessageEvent.bind(this, 5)),
            (this._connectStartTime = (0, m.tB)()),
            this._connectCount++,
            (this._connecting = !0),
            (this._voiceConnectionSuccessTracked = !1),
            null != r &&
                this._socket === r &&
                (this._trackVoiceConnectionConnecting(), (this._encountered_socket_failure = !1), r.connect());
    }
    _recordMessageEvent(e, t) {
        this.recordEvent({ c: e, o: t });
    }
    _scheduleReconnect() {
        return this._mlsFailureReconnectBackoff.cancel(), this._backoff.fail(this.reconnect);
    }
    _scheduleMLSFailureReconnect() {
        return this._backoff.cancel(), this._mlsFailureReconnectBackoff.fail(this.reconnect);
    }
    _cancelReconnect() {
        this._backoff.cancel(), this._mlsFailureReconnectBackoff.cancel();
    }
    reconnect = () => {
        this.recordEvent({ c: 7 });
        let e = this._socket;
        null != e &&
            (this._hasEverConnected && (this._connectStartTime = (0, m.tB)()),
            this._connecting ||
                (this._trackVoiceConnectionConnecting(),
                (this._connecting = !0),
                (this._encountered_socket_failure = !1),
                (this._voiceConnectionSuccessTracked = !1)),
            this._connectCount++,
            (this.reconnecting = !0),
            e.close(),
            e.connect());
    };
    destroy() {
        if (
            (this.logger.info("Destroy RTCConnection"),
            es.A.removeOnlineCallback(this._handleNetworkOnline),
            es.A.removeOfflineCallback(this._handleNetworkOffline),
            (0, el.isDesktop)() && this.powerMonitorListener?.(),
            this.recordEvent({ c: 1 }),
            eB.X.off(eB.N.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged),
            eB.X.off(eB.N.WindowVisibilityChanged, this.windowVisibilityChanged),
            this._cancelReconnect(),
            this._cleanupSocket(),
            this._voiceQuality?.stop(),
            this._voiceQuality?.removeAllListeners(),
            (this._voiceQuality = null),
            clearInterval(this._voiceQualityPeriodicStatsInterval),
            (this._voiceQualityPeriodicStatsInterval = null),
            (this._voiceQualityPeriodicStatsSequenceId = 0),
            this._systemResponsiveness?.stop(),
            (this._systemResponsiveness = null),
            (this._noiseCancellationError = 0),
            this._voiceDuration?.stop(),
            (this._voiceDuration = null),
            this._videoQuality?.stop(),
            (this._videoQuality = null),
            (this._videoHealthManager = null),
            (this._secureFramesState = null),
            this._localMediaSinkWantsManager?.reset(),
            null != this._connection)
        ) {
            let e = this._connection;
            (this._connection = null), e.destroy();
        }
        this.removeAllListeners(), (this._destroyed = !0);
    }
    shouldSendSpeaking(e, t) {
        if ((0, el.isWeb)()) return !0;
        let n = (0, f.Lt)(e, H.ME.PRIORITY),
            i = (0, f.Lt)(this._lastSentSpeakingStatus, H.ME.PRIORITY);
        return (
            (this._lastSentSSRC !== t || n !== i) &&
            (void 0 !== this._lastSentSSRC || e !== H.ME.NONE) &&
            (this._lastSentSSRC === t || e !== H.ME.NONE) &&
            ((this._lastSentSpeakingStatus = e), (this._lastSentSSRC = t), !0)
        );
    }
    sendSpeaking(e, t) {
        let n = this._socket;
        if (null == n || !this.shouldSendSpeaking(e, t)) return;
        let i = J.Ay.getPacketDelay(this.context);
        n.speaking(e, i, t);
    }
    sendVideo(e, t, n, i) {
        let r = this._socket;
        null != r && (0 !== t && (this._sentVideo = !0), this._sentVideo && r.video(e, t, n, i));
    }
    getPings() {
        return this._pings;
    }
    getAveragePing() {
        let e = this._pings.slice(0, Math.min(this._pings.length, 20));
        return 0 === e.length || null == this._socket ? 0 : e.reduce((e, t) => e + t.value, 0) / e.length;
    }
    getLastPing() {
        return this._pings[this._pings.length - 1]?.value;
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
        let e = this._connectCompletedTime > 0 ? (0, m.tB)() - this._connectCompletedTime : 0;
        return e > 0 ? e : 0;
    }
    getDurationSeconds() {
        return this.getDuration() / 1e3;
    }
    getVoiceDurationStats() {
        return this._voiceDuration?.getDurationStats() ?? null;
    }
    getPacketStats() {
        return this._voiceQuality?.getPacketStats();
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
        null == n
            ? this.logger.error("pauseStatsCollectionForUser: Unable to create videoQuality.")
            : t
              ? n.addUserToStatsCollectionPausedSet(e)
              : n.removeUserFromStatsCollectionPausedSet(e);
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
        this.recordEvent({ c: 8, s: e }),
            this.logger.info(`RTC connection state: ${this.state} => ${e}`),
            (this.state = e),
            this.stateHistory.update(this.state),
            this.emit(
                eI.q.State,
                e,
                { hostname: this.hostname, channelId: this.trueChannelId, context: this.context },
                t,
            );
    }
    expeditedHeartbeat(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = this._socket;
        null != i && i.expeditedHeartbeat(e, t, n) && this._cancelReconnect();
    }
    resetBackoff() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = this._socket;
        null != t && t.resetBackoff(e) && this._cancelReconnect();
    }
    setSelectedParticipant(e) {
        this._localMediaSinkWantsManager?.setSelectedParticipant(e);
    }
    setPipOpen(e) {
        this._localMediaSinkWantsManager?.setPipOpen(e);
    }
    setClipRecordUser(e, t, n) {
        this._connection?.setClipRecordUser?.(e, t, n);
    }
    setNoiseCancellationEnabled(e) {
        this._numNoiseCancellationChanges++, this._voiceDuration?.setNoiseCancellationEnabled(e);
    }
    setSpatialAudioEnabled(e) {
        this._voiceDuration?.setSpatialAudioEnabled(e);
    }
    setSimulcastDebugOverride(e, t, n) {
        t === this.context && t === H.x.DEFAULT && this._localMediaSinkWantsManager?.setSimulcastDebugOverride(e, n);
    }
    setVideoSize(e, t, n) {
        null == t ||
            (0, el.isAndroid)() ||
            (0, el.isIOS)() ||
            this._localMediaSinkWantsManager?.setVideoSize(e, t.width * t.height),
            this._goLiveQualityManager?.setVideoSize(e, t, n);
    }
    clearJoinVoiceId() {
        this.joinVoiceId = null;
    }
    setNextChannelId(e) {
        this.recordEvent({ c: 9 });
        let t = X.A.getChannel(this.channelId),
            n = t?.type;
        this.logger.info(`Updating channel: ${e}(${n})`), (this._nextChannelId = e), this.channelIds.add(e);
    }
    getNextChannelId() {
        return this._nextChannelId ?? this._channelId;
    }
    get channelId() {
        return this._channelId;
    }
    get trueServerId() {
        return this.streamServerId ?? this.guildId ?? this.channelId;
    }
    get trueChannelId() {
        return null == this.streamServerId
            ? this.channelId
            : null != this.streamChannelId
              ? this.streamChannelId
              : c()(this.streamServerId).prev().toString();
    }
    _cleanupSocket() {
        let e = this._socket;
        null != e && (e.close(), e.removeAllListeners(), (this._socket = null)),
            (this._readyData = null),
            (this._sfuEndpoint = null);
    }
    _chooseExperiments(e) {
        let t = [];
        this._recordingEnabled && t.push("connection_log"),
            J.Ay.supports(H.O5.FIXED_KEYFRAME_INTERVAL) && t.push("fixed_keyframe_interval");
        let { enabled: n, dontEmitVolumeOnlySpeakingEvents: i } = O.A.getConfig({ location: "_chooseExperiments" });
        if (
            (n && t.push("should_analyze_user_voice_volume"),
            i && t.push("dont_emit_volume_only_speaking_events"),
            (0, el.isWeb)() &&
                F.getConfig({ location: "RTCConnection" }).enabled &&
                t.push("browser_transceiver_padding_removal"),
            (0, el.isIOS)())
        ) {
            let { mode: e } = R.getConfig({ location: "_chooseExperiments" });
            "standard" === e
                ? t.push("ios_video_stabilization_standard")
                : "low_latency" === e && t.push("ios_video_stabilization_low_latency");
        }
        (0, el.isAndroid)() &&
            q.getConfig({ location: "RTCConnection_media_engine_connect" }).enableSurfaceDirectRenderer &&
            t.push(z),
            (this._selectedExperiments = t);
    }
    _handleConnecting(e) {
        if (null != this.endpoint) {
            let e = X.A.getChannel(this.channelId),
                t = e?.type;
            this.logger.info(
                `Connecting to RTC server ${this.endpoint}, rtc-connection-id: ${this.getRTCConnectionId()}, channel: ${this.channelId}(${t})`,
            );
        }
        this.setState(ef.S7L.CONNECTING);
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
                    maxDaveProtocolVersion: J.Ay.getSupportedSecureFramesProtocolVersion(),
                    video: J.Ay.supports(H.O5.VIDEO),
                    streamParameters: J.Ay.getVideoStreamParameters(this.context),
                }),
                    this.setState(ef.S7L.AUTHENTICATING);
            });
    }
    _handleDisconnect(e, t, n, i) {
        this.logger.info(`Disconnected from RTC server, clean: ${t}, code: ${n}, reason: ${i}, state: ${this.state}`),
            t ||
                !this._connecting ||
                this._encountered_socket_failure ||
                (er.default.track(ef.HAw.VOICE_CONNECTION_SOCKET_FAILURE, {
                    ...this._getAnalyticsProperties(),
                    hostname: this.hostname,
                    connect_count: this._connectCount,
                    code: n,
                    reason: i,
                }),
                (this._encountered_socket_failure = !0)),
            ee.A.getRemoteDisconnectVoiceChannelId() === this.channelId && this._connection?.wasRemoteDisconnected();
        let r = "Force Close" !== i;
        if (r) {
            let e =
                n === eO.REPEATED_MLS_INVALID_MESSAGES
                    ? this._scheduleMLSFailureReconnect()
                    : this._scheduleReconnect();
            this.logger.warn(`Disconnect was not clean! reason=${i}. Reconnecting in ${(e / 1e3).toFixed(2)} seconds.`);
        }
        if (this.state !== ef.S7L.DISCONNECTED) {
            let e = this._videoQuality;
            if (null != e && this.context === H.x.DEFAULT) {
                if ((e.stop(), this._sentVideo)) {
                    e.getOutboundStats().forEach((t) => {
                        (t.num_frames ?? 0) > 0 &&
                            er.default.track(ef.HAw.VIDEO_STREAM_ENDED, {
                                ...this._getAnalyticsProperties(),
                                app_hardware_acceleration_enabled: ea.A.getAppHardwareAccelerationEnabled(),
                                media_session_id: this.getMediaSessionId(),
                                sender_user_id: this.userId,
                                reason: i,
                                participant_type: "sender",
                                guild_region: en.A.getRegion(this.hostname),
                                hostname: this.hostname,
                                hardware_enabled: J.Ay.getHardwareEncoding(),
                                ...t,
                                ...e.getNetworkStats(),
                                ...e.getCodecUsageStats("sender", this.userId),
                                device_performance_class: (0, D.A)(),
                            });
                    });
                    let t = e.getCameraDurationStats();
                    null != t &&
                        t.camera_enabled_duration > 0 &&
                        er.default.track(ef.HAw.VIDEO_CALL_ENDED, { ...t, media_session_id: this.getMediaSessionId() });
                }
                e.getInboundParticipants().forEach((t) => {
                    let n = e.getInboundStats(t);
                    (n?.num_frames ?? 0) > 0 &&
                        er.default.track(ef.HAw.VIDEO_STREAM_ENDED, {
                            ...this._getAnalyticsProperties(),
                            app_hardware_acceleration_enabled: ea.A.getAppHardwareAccelerationEnabled(),
                            media_session_id: this.getMediaSessionId(),
                            sender_user_id: t,
                            reason: i,
                            participant_type: "receiver",
                            guild_region: en.A.getRegion(this.hostname),
                            hostname: this.hostname,
                            hardware_enabled: J.Ay.getHardwareEncoding(),
                            ...n,
                            ...e.getNetworkStats(),
                            ...e.getCodecUsageStats("receiver", t),
                        });
                });
            }
            let t = this.getMediaSessionId();
            J.Ay.getMediaEngine()
                .getCodecSurvey()
                .then((e) => {
                    let n = JSON.parse(e);
                    if (null == n || null == n.available_video_encoders || null == n.available_video_decoders)
                        throw Error("codec survey is not available");
                    er.default.track(ef.HAw.VOICE_CODEC_DETECTED, {
                        ...n,
                        rtc_connection_id: this.getRTCConnectionId(),
                        media_session_id: t,
                    });
                })
                .catch((e) => {
                    this.logger.warn(e);
                }),
                this._trackMLSFailures({ recovered: !1, downgraded: !1 });
            let n = en.A.shouldIncludePreferredRegion() ? en.A.getPreferredRegion() : null,
                a = J.Ay.getSettings(),
                s = X.A.getChannel(this.channelId),
                l = B.A.getConnectionStats(this.getMediaEngineConnectionId())?.stats.rtp.outbound.find(
                    (e) => "audio" === e.type,
                )?.sampleRateMismatchPercent,
                o = {
                    ...this._getAnalyticsProperties(),
                    hostname: this.hostname,
                    port: this.port,
                    protocol: this.protocol,
                    reconnect: r,
                    reason: i,
                    duration: this.getDuration(),
                    ...ee.A.getUserVoiceSettingsStats(this.context),
                    ...this._voiceQuality?.getMosStats(),
                    ...this._voiceQuality?.getPacketStats(),
                    ...this._voiceQuality?.getBytesStats(),
                    ...this._voiceQuality?.getBufferStats(),
                    ...this._voiceQuality?.getNetworkStats(),
                    ...this._voiceQuality?.getSystemResourceStats(),
                    ...this._voiceQuality?.getFrameOpStats(),
                    ...this._voiceQuality?.getDurationStats(),
                    ...this._voiceQuality?.getTransportStats(),
                    ...this._voiceQuality?.getE2EEStats(),
                    ...this._voiceQuality?.getAudioDeviceStats(),
                    ...this._voiceQuality?.getAudioLevelStats(),
                    ...this._voiceDuration?.getDurationStats(),
                    ...V.A.getUsageStats(),
                    ...this.getAudioDeviceStates(),
                    ...this._systemResponsiveness?.getPttQueueLatencyStats(),
                    num_noise_cancellation_changes: this._numNoiseCancellationChanges,
                    media_session_id: this.getMediaSessionId(),
                    channel_bitrate: null != s ? s.bitrate : null,
                    cloudflare_best_region: n,
                    connect_count: this._connectCount,
                    ping_average: Math.round(this.getAveragePing()),
                    ping_bad_count: this._pingBadCount,
                    ping_timeout: this._pingTimeouts.length,
                    input_detected: this._inputDetected,
                    no_input_detected_notice: J.Ay.getNoInputDetectedNotice(),
                    audio_input_mode: a.mode,
                    automatic_audio_input_sensitivity_enabled: a.modeOptions.autoThreshold,
                    audio_input_sensitivity: a.modeOptions.threshold,
                    echo_cancellation_enabled: a.echoCancellation,
                    sidechain_compression_enabled: a.sidechainCompression,
                    noise_suppression_enabled: a.noiseSuppression,
                    noise_cancellation_enabled: a.noiseCancellation,
                    noise_canceller_error: this._noiseCancellationError,
                    automatic_gain_control_enabled: a.automaticGainControl,
                    voice_output_volume: a.outputVolume,
                    voice_input_volume: a.inputVolume,
                    encryption_mode: this._encryptionMode,
                    channel_count: this.channelIds.size,
                    device_performance_class: (0, D.A)(),
                    num_fast_udp_reconnects:
                        null != this._connection ? this._connection?.getNumFastUdpReconnects() : null,
                    parent_media_session_id: this.parentMediaSessionId,
                    audio_subsystem: J.Ay.getMediaEngine().getAudioSubsystem(),
                    audio_layer: J.Ay.getMediaEngine().getAudioLayer(),
                    automatic_audio_subsystem: a.automaticAudioSubsystem,
                    participant_type: this.getVoiceParticipantType(),
                    audio_capture_sample_rate_mismatch_percent: l,
                    krisp_sdk_version: J.Ay.getState().krispVersion,
                    secure_frames_max_concurrent_transitions: this._secureFramesMaxConcurrentTransitions,
                    secure_frames_transition_prepare_count: this._secureFramesTransitionPrepareCount,
                    secure_frames_transition_execute_count: this._secureFramesTransitionExecuteCount,
                    vad_use_advanced_voice_activity: a.modeOptions.vadUseKrisp,
                    soundshare_experimental: J.Ay.getExperimentalSoundshare(),
                    join_voice_id: this.joinVoiceId,
                    bypass_system_input_processing: a.bypassSystemInputProcessing,
                    system_microphone_mode: J.Ay.getSystemMicrophoneMode(),
                    output_audio_route_type: Z.A.getCurrentRouteType(),
                };
            Promise.all([
                (async () => (await this._systemResources?.getBatteryLevelStats()) ?? { batteryUsageRounded: null })(),
                Y.A.getKrispModel(),
                J.Ay.getKrispEnableStats() ? J.Ay.getMediaEngine().getNoiseCancellationStats() : Promise.resolve(null),
            ]).then((e) => {
                let [{ batteryUsageRounded: t }, n, i] = e;
                this.logger.log(`[VOICE_DISCONNECT] krisp_nc_model: ${n ?? "null"}`),
                    er.default.track(ef.HAw.VOICE_DISCONNECT, {
                        ...o,
                        battery_usage: t,
                        krisp_nc_model: n,
                        duration_low_noise_detected_ms: i?.lowNoiseMs,
                        duration_medium_noise_detected_ms: i?.mediumNoiseMs,
                        duration_high_noise_detected_ms: i?.highNoiseMs,
                        duration_noise_cancellation_voice_detected_ms: i?.talkTimeMs,
                    });
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
            this._voiceQuality?.stop(),
            (this._voiceQuality = null),
            clearInterval(this._voiceQualityPeriodicStatsInterval),
            (this._voiceQualityPeriodicStatsInterval = null),
            (this._voiceQualityPeriodicStatsSequenceId = 0),
            (this._noiseCancellationError = 0),
            (this._numNoiseCancellationChanges = 0),
            this._voiceDuration?.stop(),
            (this._voiceDuration = null),
            this._videoQuality?.stop(),
            (this._videoQuality = null),
            (this._videoHealthManager = null),
            this._localMediaSinkWantsManager?.reset(),
            (this._secureFramesState = null),
            (this._userIds = new Set([this.userId])),
            this._secureFramesRosterMap.clear(),
            (this._consecutiveMLSInvalidMessages = 0),
            this._secureFramesTransitionStates.clear(),
            (this._secureFramesNextTransitionState = void 0),
            (this._secureFramesMaxConcurrentTransitions = 0),
            (this._secureFramesTransitionPrepareCount = 0),
            (this._secureFramesTransitionExecuteCount = 0),
            null != this._connection)
        ) {
            let e = this._connection;
            (this._connection = null), (this._hasCodecs = !1), e.destroy(this.reconnecting || r);
        }
        (this.protocol = null),
            (this._readyData = null),
            (this._sfuEndpoint = null),
            this.setState(ef.S7L.DISCONNECTED, { willReconnect: r });
    }
    _handleResuming(e) {
        this._connection?.fastUdpReconnect(), this._connection?.clearAllSpeaking();
    }
    _handleReady(e, t, n, i, r, a, s) {
        this._chooseExperiments(s ?? []),
            0 === a.length &&
                a.push({ type: H.mI.VIDEO, rid: "100", ssrc: r + 1, rtxSsrc: r + 2, quality: 100, active: !1 });
        let l = { socket: e, ssrc: r, streamParameters: a };
        this._readyData = l;
        let o = (null == t || null == n || null == i ? null : { address: t, port: n, modes: i }) ?? this._sfuEndpoint;
        if (null == o) {
            (this.port = null),
                this.logger.info(
                    `READY did not include an SFU endpoint; waiting for sfu_update. supportsSfuUpdate=${e.supportsSfuUpdate()}`,
                ),
                this.setState(ef.S7L.AWAITING_ENDPOINT);
            return;
        }
        this._connectMediaEngineWithEndpoint(o, l);
    }
    _connectMediaEngineWithEndpoint(e, t) {
        let { socket: n, ssrc: i, streamParameters: r } = t;
        (this._sfuEndpoint = e), (this.protocol = null), this.setState(ef.S7L.RTC_CONNECTING), (this.port = e.port);
        let { processPriority: a, threadPriorityConfiguration: s } = j.getConfig({ location: "media_engine_connect" }),
            l = J.Ay.getMediaEngine(),
            o = K.A.getPersistentCodesEnabled(),
            d = $.default.getStaticAuthSessionId() ?? void 0,
            c = (0, m.tB)(),
            u = l.connect(this.context, this.userId, {
                ssrc: i,
                address: e.address,
                port: e.port,
                modes: e.modes,
                experiments: this._selectedExperiments,
                streamParameters: r,
                videoSupported: J.Ay.supports(H.O5.VIDEO),
                qosEnabled: J.Ay.getQoS(),
                signingKeyId: o ? d : void 0,
                processPriority: a,
                threadPriorityConfiguration: s,
                ...this.getExtraConnectionOptions(),
            });
        (this._mediaEngineConnectDuration = (0, m.tB)() - c),
            (0, el.isWeb)() && !ts.PF && ed.A.captureMessage("Browser does not support Unified Plan"),
            u.setUseElectronVideo(l.supports(H.O5.ELECTRON_VIDEO));
        let _ = null != this.guildId ? Q.A.getGuild(this.guildId) : null,
            E = _?.premiumTier === ef.TVA.TIER_1,
            A = eo.Ay.canStreamQuality(eo.Ay.StreamQuality.MID, ei.default.getCurrentUser());
        u.setCalcMaxBitrateFunc((e) => {
            let { height: t, framerate: n, videoCodec: i } = e,
                r = t > 0 && t <= 720,
                a = n <= 30;
            if (t === ta.on.RESOLUTION_1080 && n === ta.kn.FPS_30) {
                let e = (0, U.A)("RTCConnection", ei.default.getCurrentUser(), this.guildId);
                if (e?.maxBitrate != null) return e.maxBitrate;
            }
            if (E && !A && r && !a) {
                let { bitrate: e } = W.getConfig({ location: "RTCConnection" });
                return e;
            }
            return "AV1" === i && ((0 === t && n < 10) || (r && a))
                ? G.getConfig({ location: "RTCConnection" }).bitrate
                : null;
        }),
            J.Ay.supports(H.O5.IMAGE_QUALITY_MEASUREMENT) &&
                u.setVideoQualityMeasurement("imageQualityWebrtcPsnrDb:5000,imageQualityVmaf_v061:5000,hwdec"),
            u.setVideoEncoderExperiments(J.Ay.getVideoEncoderExperiments(this.context, this.getVoiceParticipantType())),
            u.on(T.yq.Speaking, (e, t, n) => {
                this.userId === e && this.sendSpeaking(t, n), this.emit(eI.q.Speaking, e, t);
            }),
            u.on(T.yq.NativeMuteChanged, (e) => {
                this.context === H.x.DEFAULT && C.A.nativeMuteChanged(e);
            }),
            u.on(T.yq.Video, (e, t, n, i, r, a) => {
                this._handleVideoStreamId({
                    userId: e,
                    streamId: t,
                    audioSsrc: n,
                    videoSsrc: i ?? 0,
                    rtxSsrc: r,
                    videoStreamParameters: a,
                }),
                    this.userId === e &&
                        (this.sendVideo(n ?? 0, i ?? 0, r ?? 0, a),
                        a?.forEach((t) => {
                            100 === t.quality &&
                                this.emit(
                                    eI.q.VideoSourceQualityChanged,
                                    this.guildId,
                                    this.channelId,
                                    e,
                                    t.maxResolution,
                                    t.maxFrameRate,
                                    this.context,
                                );
                        }));
            }),
            u.on(T.yq.FirstFrame, (e, t, n) => {
                null != this._localMediaSinkWantsManager &&
                    (this._localMediaSinkWantsManager.setFirstFrameReceived(t),
                    this.emit(eI.q.Video, this.guildId, this.channelId, e, n, this.streamServerId)),
                    null != this._goLiveQualityManager &&
                        this.emit(eI.q.Video, this.guildId, this.channelId, e, n, this.streamServerId);
            }),
            u.on(T.yq.Silence, (e) => {
                this._inputDetected = this._inputDetected || !e;
            }),
            u.on(T.yq.Connected, (t, i) => {
                if (
                    (this.logger.info(`RTC connected to media server: ${e.address}:${e.port}`),
                    n !== this._socket || u !== this._connection)
                )
                    return void this.logger.warn("Ignoring connected event from stale RTC connection.");
                switch (
                    ((this._voiceQuality = new ti(u)),
                    this._voiceQuality.start(),
                    this._voiceQuality.on(tn.InputDeviceSampleRateChanged, (e) => {
                        g.h.dispatch({ type: "AUDIO_INPUT_DEVICE_SAMPLE_RATE_CHANGED", sampleRate: e });
                    }),
                    (this._voiceQualityPeriodicStatsSequenceId = 0),
                    (this._voiceQualityPeriodicStatsInterval = setInterval(
                        this._handleVoiceQualityPeriodicsStats,
                        3e5,
                    )),
                    (this._systemResponsiveness = new eQ(u)),
                    this._systemResponsiveness.start(),
                    (this._systemResources = new eZ.A()),
                    this._systemResources.setLastBattery(),
                    (this._noiseCancellationError = 0),
                    (this._voiceDuration = new tt(this.userId, u)),
                    this._voiceDuration.start(u.getSelfMute(), u.getSelfDeaf()),
                    (this.protocol = t),
                    t)
                ) {
                    case "udp":
                        this.logger.info("Sending UDP info to RTC server.", i, this._selectedExperiments),
                            null == this._sfuEndpoint
                                ? (this.logger.info("Clearing SFU endpoint before SELECT_PROTOCOL."),
                                  u.setUdpEndpoint(null))
                                : tc(e, this._sfuEndpoint) ||
                                  (this.logger.info(
                                      `Retargeting SFU endpoint to ${this._sfuEndpoint.address}:${this._sfuEndpoint.port}`,
                                  ),
                                  u.setUdpEndpoint({
                                      address: this._sfuEndpoint.address,
                                      port: this._sfuEndpoint.port,
                                  })),
                            n.once(eM.Encryption, (e, t) => {
                                u === this._connection && (u.setEncryption(e, t), (this._encryptionMode = e));
                            }),
                            n.selectProtocol(t, this.getRTCConnectionId(), i, this._selectedExperiments);
                        break;
                    case "webrtc":
                        this.logger.info("Sending local SDP to RTC server."),
                            n.once(eM.SDP, this._handleSDP.bind(this)),
                            n.selectProtocol(t, this.getRTCConnectionId(), i);
                        break;
                    default:
                        this.logger.error("Unable to determine protocol.");
                        return;
                }
                this._backoff.succeed();
            }),
            u.on(T.yq.VideoEncoderFallback, (e) => {
                let t = e
                    .filter((e) => "video" === e.type)
                    .map((e) => e.name)
                    .join(",");
                this.logger.info(
                    `The originally selected video encoder is not working, fallback to the other available encoders: ${t}`,
                ),
                    n.updateSession({ codecs: e });
            }),
            u.on(T.yq.VideoDecoderFallback, (e) => {
                let t = X.A.getChannel(this.channelId);
                if (t?.type === ef.rbe.GUILD_STAGE_VOICE) {
                    this._videoDecoderFallbackSuppressed ||
                        (this.logger.info("Suppressing video decoder fallback: stage channel"),
                        (this._videoDecoderFallbackSuppressed = !0));
                    return;
                }
                let i = e
                    .filter((e) => "video" === e.type)
                    .map((e) => e.name)
                    .join(",");
                this.logger.info(
                    `The originally selected video decoder is not working, fallback to the other available decoders: ${i}`,
                ),
                    n.updateSession({ codecs: e });
            }),
            u.on(T.yq.VideoCodecError, (e) => {
                let t = {
                    videoCodec: e.codecStandard,
                    errorMessage: e.message,
                    mediaContext: this.context,
                    mediaSessionId: this._mediaSessionId ?? void 0,
                    streamKey: this.getMediaStreamKey(),
                };
                (0, v.QW)(
                    "encode" === e.mode
                        ? { type: v.iy.VIDEO_ENCODE_ERROR, ...t, videoEncoder: e.implName }
                        : { type: v.iy.VIDEO_DECODE_ERROR, ...t, videoDecoder: e.implName },
                );
            }),
            u.on(T.yq.Error, (e) => {
                if (n !== this._socket) return;
                let t = en.A.shouldIncludePreferredRegion() ? en.A.getPreferredRegion() : null;
                this.logger.error(`Error occurred while connecting to RTC server: ${e}`),
                    er.default.track(ef.HAw.VOICE_CONNECTION_FAILURE, {
                        ...this._getAnalyticsProperties(),
                        hostname: this.hostname,
                        port: this.port,
                        protocol: this.protocol,
                        error: e,
                        cloudflare_best_region: t,
                        connect_count: this._connectCount,
                        join_voice_id: this.joinVoiceId,
                    });
            }),
            u.on(T.yq.ConnectionStateChange, (e) => {
                if ((this.logger.info(`RTC media connection state change: ${this.state} => ${e}`), n !== this._socket))
                    return;
                let t = this.state;
                switch (e) {
                    case H.$I.DISCONNECTED:
                        this.setState(ef.S7L.RTC_DISCONNECTED);
                        break;
                    case H.$I.CONNECTING:
                        this.setState(ef.S7L.RTC_CONNECTING);
                        break;
                    case H.$I.CONNECTED:
                        this.setState(ef.S7L.RTC_CONNECTED);
                        break;
                    case H.$I.NO_ROUTE:
                        this.setState(ef.S7L.NO_ROUTE);
                        break;
                    case H.$I.ICE_CHECKING:
                        this.setState(ef.S7L.ICE_CHECKING);
                        break;
                    case H.$I.DTLS_CONNECTING:
                        this.setState(ef.S7L.DTLS_CONNECTING);
                }
                t === ef.S7L.RTC_CONNECTING && this.state === ef.S7L.RTC_DISCONNECTED
                    ? this.reconnect()
                    : this.state === ef.S7L.NO_ROUTE &&
                      (0 === this._backoff.fails && this._handleNoRoute(), this._scheduleReconnect()),
                    this.state === ef.S7L.RTC_CONNECTED
                        ? (this._localMediaSinkWantsManager?.setConnection(u),
                          this._goLiveQualityManager?.update(),
                          (this._connectCompletedTime = (0, m.tB)()),
                          (this._hasEverConnected = !0),
                          (this._connecting = !1),
                          (this._encountered_socket_failure = !1),
                          this._trackVoiceConnectionSuccess(u))
                        : t === ef.S7L.RTC_CONNECTED && this.stateHistory.reset(this.state);
            }),
            u.on(T.yq.SecureFramesUpdate, (e) => {
                (this._secureFramesState = e), this.emit(eI.q.SecureFramesUpdate);
            }),
            u.on(T.yq.Ping, this._handlePing.bind(this)),
            u.on(T.yq.PingTimeout, this._handlePingTimeout.bind(this)),
            u.on(T.yq.OutboundLossRate, this._handleOutboundLossRate.bind(this)),
            u.on(T.yq.LocalVideoDisabled, this._handleLocalVideoDisabled.bind(this)),
            u.on(T.yq.Stats, eh.create()),
            u.on(T.yq.RemoteStreamsReady, this._handleRemoteStreamsReady.bind(this)),
            u.on(T.yq.UsersMerged, this.handleUsersMerged.bind(this)),
            u.on(T.yq.NoiseCancellationError, (e) => {
                this._noiseCancellationError = e;
            }),
            u.on(T.yq.MLSFailure, this._handleMLSFailure.bind(this)),
            u.setRemoteVideoSinkWants(this._remoteVideoSinkWants),
            (this._connection = u),
            (this._hasCodecs = !1),
            (this._mediaEngineConnectionId = u.mediaEngineConnectionId);
    }
    _handleSfuUpdate(e, t) {
        if (e !== this._socket) return void this.logger.warn("Received sfu_update from stale socket.");
        let n = t?.primary;
        if (null == n) {
            this.logger.info("Clearing SFU endpoint."), (this._sfuEndpoint = null), (this.port = null);
            let e = this._connection;
            null == e
                ? this.setState(ef.S7L.AWAITING_ENDPOINT)
                : null == this.protocol
                  ? this.logger.info("Received sfu_update before media protocol was selected; endpoint clear cached.")
                  : "udp" !== this.protocol
                    ? this.logger.warn(`Ignoring sfu_update for non-UDP protocol: ${this.protocol}`)
                    : e.setUdpEndpoint(null);
            return;
        }
        let i = { address: n.ip, port: n.port, modes: n.modes };
        if (tc(this._sfuEndpoint, i) && null != this._connection) return;
        (this._sfuEndpoint = i), (this.port = i.port);
        let r = this._connection;
        if (null != r)
            return null == this.protocol
                ? void this.logger.info("Received sfu_update before media protocol was selected; endpoint cached.")
                : "udp" !== this.protocol
                  ? void this.logger.warn(`Ignoring sfu_update for non-UDP protocol: ${this.protocol}`)
                  : (this.logger.info(`Retargeting SFU endpoint to ${i.address}:${i.port}`),
                    void r.setUdpEndpoint({ address: i.address, port: i.port }));
        let a = this._readyData;
        null == a
            ? this.logger.warn("Received unexpected SFU_UPDATE before READY.")
            : a.socket !== e
              ? this.logger.warn("sfu_update socket does not match READY socket.")
              : this._connectMediaEngineWithEndpoint(i, a);
    }
    _handleSpeaking(e, t, n, i) {
        let r = this._connection;
        null != r &&
            this.userId !== t &&
            (i !== H.ME.NONE && r.createUser(t, n), this._localMediaSinkWantsManager?.setAudioSSRC(t, n));
    }
    handleFlags(e, t) {
        this.emit(eI.q.Flags, e, t);
    }
    handlePlatform(e, t) {
        this.emit(eI.q.Platform, e, t, this.channelId);
    }
    handleUsersMerged(e) {
        this.emit(
            eI.q.UsersMerged,
            e.map((e) => e.id),
            this.context,
        );
    }
    getOrCreateVideoQuality() {
        if (null != this._connection && null == this._videoQuality) {
            (this._videoQuality = new e7(this._connection)),
                this._videoQuality.updateCallUserIdsCount(this._userIds.size),
                this._videoQuality.start();
            let {
                featureEnabled: e,
                windowLength: t,
                allowedPoorFpsRatio: n,
                fpsThreshold: i,
                backoffTimeSec: r,
            } = eJ.V.defaultConfig;
            if (e) {
                (this._videoHealthManager = new eJ.V(t, n, i, r)),
                    null != this._localMediaSinkWantsManager &&
                        (this._localMediaSinkWantsManager.videoHealthManager = this._videoHealthManager);
                let e = (e, t, n) => {
                    this._localMediaSinkWantsManager?.shouldReceiveFromUser(e) &&
                        this._videoHealthManager?.updateFps(e, t, n);
                };
                this._videoQuality.on(e4.FpsUpdate, e);
            }
        }
        return this._videoQuality;
    }
    _handleVideoStreamId(e) {
        let { userId: t, streamId: n, videoSsrc: i, videoStreamParameters: r } = e;
        this.emit(eI.q.Video, this.guildId, this.channelId, t, n, this.streamServerId),
            null != n &&
                null == this.getOrCreateVideoQuality() &&
                this.logger.error("_handleVideoStreamId: Unable to create videoQuality."),
            null != this._videoQuality &&
                this.userId === t &&
                r.forEach((e) => {
                    let t = e.ssrc ?? 0;
                    t > 0 && !0 === e.active && this._videoQuality?.setOutboundSsrc(t);
                }),
            this.userId !== t &&
                (0 !== i || null !== n || this._videoQuality?.getInboundParticipants().includes(t)) &&
                (this._videoQuality?.setInboundUser(t, i), this._videoHealthManager?.createUser(t)),
            null != this._connection &&
                this.userId !== t &&
                (null != this._localMediaSinkWantsManager
                    ? this._localMediaSinkWantsManager.setStreamId(t, n)
                    : null != this._goLiveQualityManager &&
                      this._goLiveQualityManager.getUserID() === t &&
                      this._goLiveQualityManager?.setStreamId(n));
    }
    _handleLocalVideoDisabled(e, t) {
        if (this.userId !== e) {
            let n = this.getOrCreateVideoQuality();
            if (null == n) return void this.logger.error("_handleLocalVideoDisabled: Unable to create videoQuality.");
            n.setUserVideoDisabled(e, t);
        }
    }
    _handleRemoteStreamsReady(e) {
        let t = (0, m.tB)() - this._connectStartTime;
        er.default.track(ef.HAw.VOICE_CONNECTION_REMOTE_STREAMS_CREATED, {
            ...this._getAnalyticsProperties(),
            number_of_users: e,
            duration_ms: t,
        });
    }
    _handleVideo(e, t, n, i, r) {
        if (J.Ay.supports(H.O5.VIDEO) && null != this._connection && this.userId !== t) {
            if (null != this._localMediaSinkWantsManager) {
                this._localMediaSinkWantsManager.setAudioSSRC(t, n);
                let e = r.map((e) => ({
                    type: H.mI.VIDEO,
                    rid: e.rid,
                    ssrc: e.ssrc,
                    rtxSsrc: e.rtxSsrc,
                    quality: e.quality,
                    active: i > 0,
                }));
                0 === e.length &&
                    e.push({ type: H.mI.VIDEO, rid: "100", ssrc: i, rtxSsrc: i + 1, quality: 100, active: i > 0 }),
                    this._localMediaSinkWantsManager.setVideoSSRCs(t, e);
            } else {
                let e = [];
                for (let t of r)
                    null != t.ssrc &&
                        null != t.quality &&
                        e.push({ ssrc: t.ssrc, quality: t.quality, active: t.active ?? !0 });
                this._goLiveQualityManager?.setUserID(t),
                    this._goLiveQualityManager?.updateAudioAndVideoStreamInfo(n, e);
            }
            r?.forEach((e) => {
                100 === e.quality &&
                    this.emit(
                        eI.q.VideoSourceQualityChanged,
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
        J.Ay.supports(H.O5.NATIVE_PING) || this._handlePing(e);
    }
    _handlePing(e) {
        if (void 0 !== e) {
            for (this._pings.push({ time: Date.now(), value: e }); this._pings.length >= 200; ) this._pings.shift();
            e > 500 && this._pingBadCount++, this.emit(eI.q.Ping, this._pings, this.quality);
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
        (this._outboundLossRate = e), this.emit(eI.q.OutboundLossRate, e);
    }
    _getAnalyticsProperties() {
        let e = X.A.getChannel(this.channelId),
            t = e?.type;
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
        e.forEach((e) => {
            this._userIds.add(e), this._connection?.createUser(e, 0);
        }),
            this.emit(eI.q.ClientConnect, e),
            this._videoQuality?.updateCallUserIdsCount(this._userIds.size),
            this._localMediaSinkWantsManager?.updateCallUserIds(this._userIds);
    }
    _handleClientDisconnect(e) {
        let t = this._videoQuality;
        if (null != t && this.context === H.x.DEFAULT) {
            let n = t.getInboundStats(e),
                i = n?.num_frames ?? 0;
            null != n &&
                i > 0 &&
                (er.default.track(ef.HAw.VIDEO_STREAM_ENDED, {
                    ...this._getAnalyticsProperties(),
                    app_hardware_acceleration_enabled: ea.A.getAppHardwareAccelerationEnabled(),
                    media_session_id: this.getMediaSessionId(),
                    sender_user_id: e,
                    reason: "User disconnected",
                    participant_type: "receiver",
                    guild_region: en.A.getRegion(this.hostname),
                    hostname: this.hostname,
                    hardware_enabled: J.Ay.getHardwareEncoding(),
                    ...n,
                    ...t.getNetworkStats(),
                    ...t.getCodecUsageStats("receiver", e),
                }),
                t.destroyUser(e),
                this._videoHealthManager?.deleteUser(e));
        }
        let n = this._connection;
        null != n && n.destroyUser(e),
            this._localMediaSinkWantsManager?.destroyUser(e),
            this._userIds.delete(e),
            this.emit(eI.q.ClientDisconnect, e),
            this._localMediaSinkWantsManager?.updateCallUserIds(this._userIds),
            this._videoQuality?.updateCallUserIdsCount(this._userIds.size),
            1 === this._userIds.size && (this._secureFramesLastBecameAloneTime = (0, m.tB)());
    }
    _handleCodecs(e, t) {
        let n = this._connection;
        null != n && null != this.protocol
            ? (n.setCodecs(null != e && "" !== e ? e : H.UK.OPUS, null != t && "" !== t ? t : H.UK.H264, this.context),
              (this._hasCodecs = !0),
              this._trackVoiceConnectionSuccess(n))
            : this.logger.warn("Cannot set codecs on connection with protocol:", this.protocol);
    }
    _trackVoiceConnectionSuccess(e) {
        if (this._voiceConnectionSuccessTracked || this.state !== ef.S7L.RTC_CONNECTED || !this._hasCodecs) return;
        this._voiceConnectionSuccessTracked = !0;
        let t = en.A.shouldIncludePreferredRegion() ? en.A.getPreferredRegion() : null,
            n = 1 === this._connectCount,
            i = J.Ay.getSettings(),
            r = this._getAnalyticsProperties(),
            a = (function (e) {
                if (null != e && "" !== e) {
                    if (e.includes(":")) return "ipv6";
                    if (e.includes(".")) return "ipv4";
                }
            })(e.transportInfo?.address);
        er.default.track(ef.HAw.VOICE_CONNECTION_SUCCESS, {
            ...r,
            hostname: this.hostname,
            port: this.port,
            protocol: this.protocol,
            address_family: a,
            cloudflare_best_region: t,
            connect_time: (0, m.tB)() - (n ? this._createdTime : this._connectStartTime),
            connect_count: this._connectCount,
            audio_subsystem: J.Ay.getMediaEngine().getAudioSubsystem(),
            audio_layer: J.Ay.getMediaEngine().getAudioLayer(),
            automatic_audio_subsystem: i.automaticAudioSubsystem,
            media_session_id: this.getMediaSessionId(),
            participant_type: this.getVoiceParticipantType(),
            join_voice_id: this.joinVoiceId,
            is_camera_enabled: J.Ay.getMediaEngine().getVideoInputDeviceId() !== H.qe && e.context === H.x.DEFAULT,
            video_supported: J.Ay.supports(H.O5.VIDEO),
            ...this.stateHistory.getVoiceConnectionSuccessStats(),
        });
        let s = performance.now();
        function l(e, t) {
            return null == e || null == t ? null : e - t;
        }
        er.default.track(ef.HAw.VOICE_CONNECTION_TTC_COLLECTED, {
            rtc_connection_id: r.rtc_connection_id,
            hostname: this.hostname,
            address_family: a,
            time_1_creation_to_connect: this._connectStartTime - this._createdTime,
            time_2_media_engine_connect: this._mediaEngineConnectDuration,
            time_3_media_engine_create_native_connection: e.transportInfo?.createConnectionTime,
            time_4_media_engine_connect_to_socket: e.transportInfo?.connectTime,
            time_5_scheduling_connected_callback: l(e.onConnectCallbackAt, e.transportInfo?.connectCallbackScheduledMs),
            time_6_state_connected_to_end_measure: l(s, e.onConnectCallbackAt),
            connect_count: this._connectCount,
            rtc_connecting_native_connect: l(e.onConnectCallbackAt, e.beginInitializeAt),
            rtc_connecting_native_codecs: l(e.onVideoCodecsCallbackAt, e.onConnectCallbackAt),
            rtc_connecting_native_crypto_modes: l(e.onEncryptionModesCallbackAt, e.onVideoCodecsCallbackAt),
        });
    }
    _handleSDP(e) {
        let t = this._connection;
        null != t && null != this.protocol
            ? t.setSDP(e)
            : this.logger.warn("Cannot set SDP on connection with protocol:", this.protocol);
    }
    _handleMediaSessionId(e) {
        (this._mediaSessionId = e),
            this.logger.info(`Setting media-session-id: ${e} for rtc-connection-id: ${this.getRTCConnectionId()}`);
        let t = y.A.getRawThermalState();
        er.default.track(ef.HAw.MEDIA_SESSION_JOINED, {
            ...this._getAnalyticsProperties(),
            media_session_id: this.getMediaSessionId(),
            parent_media_session_id: this.parentMediaSessionId,
            raw_thermal_state: t,
        }),
            g.h.dispatch({
                type: "MEDIA_SESSION_JOINED",
                mediaSessionId: this.getMediaSessionId(),
                context: this.context,
            });
    }
    _handleMediaSinkWants(e) {
        let t = this._connection;
        this.logger.info(`Remote media sink wants: ${JSON.stringify(e)}`),
            (this._remoteVideoSinkWants = e),
            g.h.dispatch({
                type: "RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS",
                context: this.context,
                wants: e,
                channelId: this.channelId,
                guildId: this.guildId,
                userId: this.userId,
            }),
            t?.setRemoteVideoSinkWants(e);
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
        let t = k.getMediaEngineExperiments(e);
        null !== t && 0 !== t.length && this._connection?.setBandwidthEstimationExperiments(t);
    }
    _trackSecureFrameTransition(e) {
        let t = this._secureFramesTransitionStates.get(e);
        if (null == t) return;
        let n = this._secureFramesTransitionStates.size;
        function i(e, t) {
            return null != e && null != t ? e - t : void 0;
        }
        this._secureFramesTransitionStates.delete(e),
            er.default.track(ef.HAw.SECURE_FRAMES_TRANSITION, {
                ...this._getAnalyticsProperties(),
                media_session_id: this.getMediaSessionId(),
                parent_media_session_id: this.parentMediaSessionId,
                sender_user_id: this.userId,
                transition_id: e,
                protocol_version: t.protocolVersion,
                start_to_init_duration: i(t.initReceivedTime, this._connectStartTime),
                init_duration: i(t.initFinishedTime, t.initReceivedTime),
                first_proposals_duration: i(t.firstProposalsFinishedTime, t.firstProposalsReceivedTime),
                last_proposals_duration: i(t.lastProposalsFinishedTime, t.lastProposalsReceivedTime),
                duration_between_proposals: i(t.lastProposalsReceivedTime, t.firstProposalsReceivedTime),
                total_proposals_size: t.totalProposalsSize,
                total_commit_welcome_size: t.totalCommitWelcomeSize,
                welcome_wait_duration: i(t.welcomeReceivedTime, t.initFinishedTime),
                welcome_duration: i(t.welcomeFinishedTime, t.welcomeReceivedTime),
                welcome_size: t.welcomeSize,
                welcome_error: t.welcomeError,
                commit_wait_duration: i(t.commitReceivedTime, t.lastProposalsFinishedTime),
                commit_duration: i(t.commitFinishedTime, t.commitReceivedTime),
                commit_size: t.commitSize,
                commit_error: t.commitError,
                prepare_wait_duration: i(t.prepareReceivedTime, this._secureFramesLastBecameAloneTime),
                prepare_duration: i(t.prepareFinishedTime, t.prepareReceivedTime),
                execute_wait_duration: i(t.executeReceivedTime, t.readyTime),
                execute_duration: i(t.executeFinishedTime, t.executeReceivedTime),
                execute_error: t.executeError,
                incomplete: t.incomplete,
                active_transition_count: n,
                time_since_creation: (0, m.tB)() - t.creationTime,
                users_added_count: t.usersAdded,
                users_removed_count: t.usersRemoved,
                roster_size_after: t.rosterSizeAfter,
                init_to_finish_duration: i(t.executeFinishedTime, t.initReceivedTime),
            }),
            0 === e && this._trackRemainingSecureFrameTransitions();
    }
    _trackRemainingSecureFrameTransitions() {
        this._secureFramesTransitionStates.forEach((e, t) => {
            (e.incomplete = !0), this._trackSecureFrameTransition(t);
        });
    }
    _storeSecureFrameNextTransitionData(e) {
        return (
            null == this._secureFramesNextTransitionState &&
                (this._secureFramesNextTransitionState = { creationTime: (0, m.tB)() }),
            (this._secureFramesNextTransitionState = { ...this._secureFramesNextTransitionState, ...e })
        );
    }
    _storeSecureFrameTransitionData(e, t) {
        let n = this._secureFramesTransitionStates.get(e);
        null == n &&
            ((n = this._storeSecureFrameNextTransitionData({})), (this._secureFramesNextTransitionState = void 0)),
            this._secureFramesTransitionStates.set(e, { ...n, ...t }),
            (this._secureFramesMaxConcurrentTransitions = Math.max(
                this._secureFramesMaxConcurrentTransitions,
                this._secureFramesTransitionStates.size,
            ));
    }
    _handleSecureFramesInit(e) {
        let t = (0, m.tB)();
        this.recordEvent({ c: 11, v: e }),
            e > 0
                ? (this.logger.info(`DAVE protocol init with protocol version: ${e}`),
                  (this._mlsInitReceivedTime = t),
                  this._connection?.prepareSecureFramesEpoch("1", e, this.trueChannelId),
                  this._sendMLSKeyPackage(),
                  this._storeSecureFrameNextTransitionData({
                      initReceivedTime: t,
                      initFinishedTime: (0, m.tB)(),
                      protocolVersion: e,
                  }),
                  this.recordEvent({ c: 10 }))
                : this._connection?.prepareSecureFramesTransition(0, e, () => {
                      let n = !1;
                      try {
                          this._connection?.executeSecureFramesTransition(0);
                      } catch (e) {
                          (n = !0), ed.A.captureException(e);
                      }
                      this._storeSecureFrameTransitionData(0, {
                          initReceivedTime: t,
                          initFinishedTime: (0, m.tB)(),
                          protocolVersion: e,
                          executeError: n,
                      }),
                          this._trackSecureFrameTransition(0);
                  });
    }
    _handleSecureFramesRosterChange(e, t) {
        let n = [],
            i = 0,
            r = 0;
        Object.entries(e).forEach((e) => {
            let [t, a] = e;
            (n.push(t), null == a || 0 === a.byteLength)
                ? (r++, this._secureFramesRosterMap.delete(t))
                : (i++, this._secureFramesRosterMap.set(t, a));
        }),
            this._storeSecureFrameTransitionData(t, {
                usersAdded: i,
                usersRemoved: r,
                rosterSizeAfter: this._secureFramesRosterMap.size,
            }),
            this.emit(eI.q.RosterMapUpdate, n);
    }
    _handleSecureFramesPrepareTransition(e, t) {
        this.logger.info(`Preparing DAVE protocol transition: ${e}, protocol version: ${t}`),
            this._secureFramesTransitionPrepareCount++;
        let n = (0, m.tB)();
        0 === t && this._trackMLSFailures({ recovered: !0, downgraded: !0 }),
            this._connection?.prepareSecureFramesTransition(e, t, () => {
                this._maybeSendSecureFramesTransitionReady(e),
                    this._storeSecureFrameTransitionData(e, {
                        protocolVersion: t,
                        prepareReceivedTime: n,
                        prepareFinishedTime: (0, m.tB)(),
                    });
            });
    }
    _handleSecureFramesPrepareEpoch(e, t) {
        this.logger.info(`Preparing DAVE protocol epoch: ${e}, protocol version: ${t}`);
        let n = e.toString();
        this._connection?.prepareSecureFramesEpoch(n, t, this.trueChannelId),
            "1" === n &&
                ((this._mlsInitReceivedTime = (0, m.tB)()), this._sendMLSKeyPackage(), this.recordEvent({ c: 10 }));
    }
    _sendMLSKeyPackage() {
        this._connection?.getMLSKeyPackage((e) => {
            this.logger.info("Got MLS key package, sending to RTC server"), this._socket?.sendMLSKeyPackage(e);
        });
    }
    _maybeSendSecureFramesTransitionReady(e) {
        0 !== e &&
            (this.logger.info(`Sending DAVE protocol ready for transition ID ${e}`),
            this._socket?.secureFramesReadyForTransition(e),
            this._storeSecureFrameTransitionData(e, { readyTime: (0, m.tB)() }));
    }
    _handleSecureFramesExecuteTransition(e) {
        this.logger.info(`Executing DAVE protocol transition: ${e}`), this._secureFramesTransitionExecuteCount++;
        let t = (0, m.tB)(),
            n = !1;
        try {
            this._connection?.executeSecureFramesTransition(e);
        } catch (e) {
            (n = !0), ed.A.captureException(e);
        }
        this._storeSecureFrameTransitionData(e, {
            executeReceivedTime: t,
            executeFinishedTime: (0, m.tB)(),
            executeError: n,
        }),
            this._trackSecureFrameTransition(e);
    }
    _handleMLSExternalSenderPackage(e) {
        this.logger.info("Received MLS external sender package"), this._connection?.updateMLSExternalSender(e);
    }
    _handleMLSProposals(e, t) {
        let n = (0, m.tB)();
        this.logger.info("Received MLS proposals"),
            this._connection?.processMLSProposals(t, (i) => {
                let r = (0, m.tB)();
                this.logger.info("Sending MLS commit welcome message"), e.sendMLSCommitWelcome(i);
                let a =
                    this._secureFramesNextTransitionState ??
                    this._storeSecureFrameNextTransitionData({
                        firstProposalsReceivedTime: n,
                        firstProposalsFinishedTime: r,
                    });
                (a.lastProposalsReceivedTime = n),
                    (a.lastProposalsFinishedTime = r),
                    (a.totalProposalsSize = (a.totalProposalsSize ?? 0) + t.byteLength),
                    (a.totalCommitWelcomeSize = (a.totalCommitWelcomeSize ?? 0) + i.byteLength);
            });
    }
    _handleMLSPrepareCommitTransition(e, t) {
        this.logger.info(`Received MLS commit for transition ID ${e}`);
        let n = (0, m.tB)(),
            i = this._connection;
        i?.prepareMLSCommitTransition(e, t, (r, a, s) => {
            i === this._connection &&
                (this._storeSecureFrameTransitionData(e, {
                    protocolVersion: a,
                    commitReceivedTime: n,
                    commitFinishedTime: (0, m.tB)(),
                    commitSize: t.byteLength,
                    commitError: !r,
                }),
                r
                    ? (this._handleMLSSuccess(),
                      this._handleSecureFramesRosterChange(s, e),
                      this._maybeSendSecureFramesTransitionReady(e))
                    : (this.logger.warn(`Failed to process MLS commit for transition ID ${e}`),
                      (this._mlsSessionResetStartTime = (0, m.tB)()),
                      this._flagMLSInvalidCommitWelcome(e) && this._handleSecureFramesInit(a)));
        });
    }
    _handleMLSWelcome(e, t) {
        this.logger.info(`Received MLS welcome for transition ID ${e}`);
        let n = (0, m.tB)(),
            i = this._connection;
        i?.processMLSWelcome(e, t, (r, a, s) => {
            i === this._connection &&
                (this._storeSecureFrameTransitionData(e, {
                    protocolVersion: a,
                    welcomeReceivedTime: n,
                    welcomeFinishedTime: (0, m.tB)(),
                    welcomeSize: t.byteLength,
                    welcomeError: !r,
                }),
                r
                    ? (this._handleMLSSuccess(),
                      this._handleSecureFramesRosterChange(s, e),
                      this._maybeSendSecureFramesTransitionReady(e))
                    : ((this._mlsSessionResetStartTime = (0, m.tB)()),
                      this._flagMLSInvalidCommitWelcome(e) && this._sendMLSKeyPackage()));
        });
    }
    getMLSPairwiseFingerprint(e, t, n) {
        this._connection?.getMLSPairwiseFingerprint(e, t, n);
    }
    _handleMLSSuccess() {
        this._trackMLSFailures({ recovered: !0, downgraded: !1 }),
            (this._mlsSessionResetStartTime = void 0),
            (this._consecutiveMLSInvalidMessages = 0),
            this._mlsFailureReconnectBackoff.succeed();
    }
    _flagMLSInvalidCommitWelcome(e) {
        if ((this._consecutiveMLSInvalidMessages++, this._consecutiveMLSInvalidMessages >= 5)) {
            this.logger.error(
                `${this._consecutiveMLSInvalidMessages} consecutive invalid MLS commit/welcome messages, disconnecting.`,
            );
            let e = this._consecutiveMLSInvalidMessages;
            return (
                (this._consecutiveMLSInvalidMessages = 0), this._socket?.disconnectForRepeatedMLSInvalidMessages(e), !1
            );
        }
        return (
            this.logger.info(`Flagging invalid MLS commit/welcome for transition ID ${e}`),
            this._socket?.flagMLSInvalidCommitWelcome(e),
            !0
        );
    }
    _handleMLSFailure(e, t) {
        let n = (0, m.tB)(),
            i = this._nextFailureId++;
        this.recordEvent({ c: 3, i: i }),
            this._mlsFailures.push({
                id: i,
                source: e,
                reason: t,
                count: 1,
                countDuringReset: +(null != this._mlsSessionResetStartTime),
                firstOccurrence: n,
                timeSinceInit: null != this._mlsInitReceivedTime ? n - this._mlsInitReceivedTime : void 0,
                eventLog: (function () {
                    let e = [],
                        t = (0, m.tB)();
                    for (let n of t_) e.push({ ...n, t: t - n.t });
                    return JSON.stringify(e);
                })(),
            }),
            e.includes("GetPersistedKeyPair")
                ? S.A.show({ title: tl.intl.string(tl.t.fJUioH), body: tl.intl.string(tl.t.CQLWvo) })
                : this._alertMLSFailureDebouced(e, t);
    }
    _trackMLSFailures(e) {
        let { recovered: t, downgraded: n } = e,
            i = (0, m.tB)(),
            r = this.getMediaSessionId(),
            a = null != this._mlsSessionResetStartTime ? i - this._mlsSessionResetStartTime : void 0;
        for (let {
            id: e,
            source: s,
            reason: l,
            count: o,
            countDuringReset: d,
            firstOccurrence: c,
            timeSinceInit: u,
            eventLog: _,
        } of this._mlsFailures)
            er.default.track(ef.HAw.MLS_FAILURES, {
                ...this._getAnalyticsProperties(),
                media_session_id: r,
                parent_media_session_id: this.parentMediaSessionId,
                failure_id: e,
                failure_time: c - this._createdTime,
                failure_source: s,
                failure_reason: l,
                failure_count: o,
                failure_was_recovered: t,
                failure_cleared_by_downgrade: n,
                time_since_first_occurrence: i - c,
                time_since_last_reset: a,
                failure_count_during_reset: d,
                time_since_init: u,
                event_history: _,
                connection_serial: this._connectionSerial,
            });
        this._mlsFailures = [];
    }
    _alertMLSFailure(e, t) {
        let n = ei.default.getCurrentUser();
        (n?.isStaff() || n?.isStaffPersonal()) &&
            S.A.show({
                title: `MLS Error in ${e}`,
                body: `Error: ${t}! Please upload your logs in A/V settings and ask everyone in the call to do the same, and ping us in #av-e2ee in Core Tech!`,
            });
    }
    _alertMLSFailureDebouced = _()(this._alertMLSFailure, 100);
    _handleNetworkOnline = () => {
        this.expeditedHeartbeat(5e3, "network detected online.");
    };
    _handleNetworkOffline = () => {
        this.expeditedHeartbeat(15e3, "network detected offline.", !1);
    };
    _handleNoRoute = () => {
        this._socket?.noRoute();
    };
    _handlePowerResume = () => {
        this.expeditedHeartbeat(5e3, "power monitor resumed");
    };
    _handleVoiceQualityPeriodicsStats = () => {
        if (null != this._voiceQuality) {
            let e = this._voiceQuality.getPeriodicStats();
            if (this.shouldReportPeriodicStats(e))
                for (let t of e)
                    er.default.track(ef.HAw.VOICE_QUALITY_PERIODIC_STATS, {
                        ...this._getAnalyticsProperties(),
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
                    });
            this._voiceQualityPeriodicStatsSequenceId++;
        }
    };
    getExtraConnectionOptions() {
        return {};
    }
    getMediaStreamKey() {}
    getAudioDeviceStates = () => ({
        input_device: this.getInputDeviceName(),
        input_device_count: Object.keys(J.Ay.getInputDevices()).length,
        output_device: this.getOutputDeviceName(),
        output_device_count: Object.keys(J.Ay.getOutputDevices()).length,
    });
    getVideoDeviceStates = () => ({
        camera_device: this.getVideoDeviceName(),
        camera_device_count: Object.keys(J.Ay.getVideoDevices()).length,
    });
    _trackVoiceConnectionConnecting = () => {
        let e = X.A.getChannel(this.channelId),
            t = e?.type;
        er.default.track(ef.HAw.VOICE_CONNECTION_CONNECTING, {
            ...this.getAudioDeviceStates(),
            ...this.getVideoDeviceStates(),
            guild_id: this.guildId,
            channel_id: this.channelId,
            rtc_connection_id: this.getRTCConnectionId(),
            hostname: this.hostname,
            connect_count: this._connectCount,
            context: this.context,
            channel_type: t,
            participant_type: this.getVoiceParticipantType(),
            is_muted: J.Ay.isMute(),
            join_voice_id: this.joinVoiceId,
            connection_serial: this._connectionSerial,
        });
    };
    shouldReportPeriodicStats(e) {
        if (e.length > 10) return !1;
        let t = this.getMediaSessionId();
        return null != t && A().v3(t) % 100 <= 5;
    }
    getInputDeviceName() {
        let e = J.Ay.getInputDeviceId();
        return J.Ay.getInputDevices()[e]?.name;
    }
    getOutputDeviceName() {
        let e = J.Ay.getOutputDeviceId();
        return J.Ay.getOutputDevices()[e]?.name;
    }
    getVideoDeviceName() {
        let e = J.Ay.getVideoDeviceId();
        return J.Ay.getVideoDevices()[e]?.name;
    }
    getInputDeviceSampleRate() {
        return this._voiceQuality?.getAudioDeviceStats().input_device_session_sample_rate ?? null;
    }
    incomingVideoEnabledChanged = (e) => {
        this._goLiveQualityManager?.onIncomingVideoEnabled(e), this._videoQuality?.setOcclusionIncomingVideoEnabled(e);
    };
    windowVisibilityChanged = (e) => {
        this._videoQuality?.setWindowOcclusionState(!e);
    };
}
