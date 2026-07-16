"use strict";
n.d(t, { A: () => ee });
var i = n(228366),
    r = n(439372),
    a = n(626584),
    s = n(616356),
    l = n(309010),
    o = n(977997),
    d = n(487329),
    c = n(435558),
    u = n.n(c),
    _ = n(166929),
    E = n(276208),
    A = n(973522),
    h = n(652896),
    I = n(624694),
    f = n(967347),
    p = n(929921),
    T = n(734057),
    m = n(186295),
    g = n(763827),
    S = n(873985),
    N = n(116956),
    C = n(174459),
    R = n(353835),
    O = n(321034),
    L = n(652215),
    y = n(731854);
function D(e) {
    let t = I.A.getConnectionStats(e);
    return null == t ? null : (t.stats.rtp.outbound.find((e) => "video" === e.type) ?? null);
}
function v(e, t) {
    if (null == t) return null;
    let n = I.A.getConnectionStats(e);
    if (null == n) return null;
    let i = n.stats.rtp.inbound[t];
    return null == i ? null : (i.find((e) => "video" === e.type) ?? null);
}
function b(e, t, n) {
    return e ? D(t) : v(t, n);
}
var M = n(161518),
    P = n(927813),
    U = n(601900);
let w = 10 * P.A.Millis.SECOND;
var G = n(280450);
let x = 10 * P.A.Millis.SECOND;
function k() {
    return E.X.isIncomingVideoEnabled() && performance.now() - E.X.lastIncomingVideoEnabledChangeTime() > x;
}
function F(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
        i = I.A.getAccumulatedPerformanceStats(e, t, "short"),
        r = I.A.getAccumulatedPerformanceStats(e, t, "long");
    return null == i || null == r || i.numDatapoints < n || r.numDatapoints < n ? null : { short: i, long: r };
}
function V() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
    return e <= 5 ? 3 : e <= 15 ? 8 : e <= 30 ? 15 : 30;
}
let B = 20 * P.A.Millis.SECOND;
var H = n(723702);
let j = BigInt(-3821);
var W = n(403362),
    Y = n(313961),
    K = n(650338);
let $ = 20 * P.A.Millis.SECOND;
var z = n(877717);
n(321073);
var q = n(803301);
let Z = {
        [d.iy.NO_AUDIO_INPUT_DETECTED]: {
            getActiveErrors: (e) => {
                let { voiceChannelId: t, voiceState: n } = e,
                    i = T.A.getChannel(t),
                    r = i?.isGuildStageVoice() && n?.suppress,
                    a = g.A.getMediaSessionId();
                if (
                    null != i &&
                    null != a &&
                    !m.Ay.getInputDetectedThisConnection() &&
                    g.A.getState() === L.S7L.RTC_CONNECTED &&
                    m.Ay.getSettings().mode === L.TBI.VOICE_ACTIVITY &&
                    m.Ay.getSettings().silenceWarning &&
                    !1 === m.Ay.getInputDetected() &&
                    !r &&
                    !m.Ay.isSelfMute()
                )
                    return [{ type: d.iy.NO_AUDIO_INPUT_DETECTED, ...(0, U.jY)() }];
            },
            makeErrorContextKey: (e) => `${e.mediaSessionId}:${e.audioInputDeviceName}`,
        },
        [d.iy.NO_INPUT_DEVICES]: {
            getActiveErrors: (e) => {
                let { voiceChannelId: t, voiceState: n } = e,
                    i = T.A.getChannel(t),
                    r = i?.isGuildStageVoice() && n?.suppress,
                    a = 0 === Object.keys(m.Ay.getInputDevices()).length,
                    s = g.A.getMediaSessionId();
                if (a && null != i && null != s && !r) return [{ type: d.iy.NO_INPUT_DEVICES, ...(0, U.jY)() }];
            },
            makeErrorContextKey: (e) => `${e.mediaSessionId}`,
        },
        [d.iy.STREAM_VIEW_LOW_FPS]: {
            getActiveErrors: () =>
                k()
                    ? s.A.getAllActiveStreams().reduce((e, t) => {
                          let n = N.A.getRTCConnection((0, h._z)(t))?.getMediaEngineConnectionId();
                          if (null == n || t.ownerId === G.default.getId() || t.state === L.XYD.PAUSED) return e;
                          let i = F(n, t.ownerId);
                          if (null == i) return e;
                          let r = Y.A.getParticipant(t.channelId, (0, h._z)(t));
                          if (null == r) return e;
                          let a = (0, K.wz)(r);
                          return (
                              null == a ||
                                  ((i.short.frameRate < V(a.maxFrameRate) || i.long.frameRate < V(a.maxFrameRate)) &&
                                      e.push({ type: d.iy.STREAM_VIEW_LOW_FPS, ...(0, U.id)((0, h._z)(t)) })),
                              e
                          );
                      }, [])
                    : null,
            makeErrorContextKey: (e) => `${e.streamKey}:${e.mediaSessionId}`,
        },
        [d.iy.STREAM_VIEW_HIGH_PACKET_LOSS]: {
            getActiveErrors: () =>
                k()
                    ? s.A.getAllActiveStreams().reduce((e, t) => {
                          let n = N.A.getRTCConnection((0, h._z)(t))?.getMediaEngineConnectionId();
                          if (null == n || t.ownerId === G.default.getId()) return e;
                          let i = F(n, t.ownerId);
                          return (
                              null == i ||
                                  ((100 * i.short.packetLossRate > 10 || 100 * i.long.packetLossRate > 10) &&
                                      e.push({ type: d.iy.STREAM_VIEW_HIGH_PACKET_LOSS, ...(0, U.id)((0, h._z)(t)) })),
                              e
                          );
                      }, [])
                    : null,
            makeErrorContextKey: (e) => `${e.streamKey}:${e.mediaSessionId}`,
        },
        [d.iy.STREAM_SEND_HIGH_PACKET_LOSS]: {
            getActiveErrors: () => {
                let e = s.A.getCurrentUserActiveStream();
                if (null == e || 0 === s.A.getViewerIds(e).length) return null;
                let t = N.A.getRTCConnection((0, h._z)(e))?.getMediaEngineConnectionId();
                if (null == t) return null;
                let n = F(t, e.ownerId);
                return null == n
                    ? null
                    : 100 * n.short.packetLossRate > 10 || 100 * n.long.packetLossRate > 10
                      ? [{ type: d.iy.STREAM_SEND_HIGH_PACKET_LOSS, ...(0, U.id)((0, h._z)(e)) }]
                      : void 0;
            },
            makeErrorContextKey: (e) => `${e.streamKey}:${e.mediaSessionId}`,
        },
        [d.iy.STREAM_SEND_LOW_FPS]: {
            getActiveErrors: () => {
                let e = s.A.getCurrentUserActiveStream();
                if (null == e || e.state === L.XYD.PAUSED || 0 === s.A.getViewerIds(e).length) return null;
                let t = (0, h._z)(e),
                    n = N.A.getRTCConnection(t);
                if (null == n) return null;
                let i = n.getMediaEngineConnectionId();
                if (null == i) return null;
                let r = N.A.getLastNonZeroRemoteVideoSinkWantsTime(t);
                if ((null != r && performance.now() - r < $) || !n.hasActiveRemoteWants()) return null;
                let a = Y.A.getParticipant(e.channelId, (0, h._z)(e));
                if (null == a) return null;
                let l = F(i, e.ownerId);
                if (null == l) return null;
                let o = (0, K.wz)(a);
                return null == o
                    ? null
                    : l.short.frameRate < V(o.maxFrameRate) || l.long.frameRate < V(o.maxFrameRate)
                      ? [{ type: d.iy.STREAM_SEND_LOW_FPS, ...(0, U.id)((0, h._z)(e)) }]
                      : null;
            },
            makeErrorContextKey: (e) => `${e.streamKey}:${e.mediaSessionId}`,
        },
        [d.iy.STREAM_BAD_NETWORK_QUALITY]: {
            getActiveErrors: () =>
                N.A.getAllActiveStreamKeys()
                    .map((e) =>
                        N.A.getQuality(e) === L.bFR.BAD
                            ? { type: d.iy.STREAM_BAD_NETWORK_QUALITY, ...(0, U.id)(e) }
                            : null,
                    )
                    .filter(W.Vq),
            makeErrorContextKey: (e) => `${e.streamKey}:${e.mediaSessionId}`,
        },
        [d.iy.STREAM_SOUNDSHARE_FAILED]: {
            getActiveErrors: () => {
                let e = s.A.getCurrentUserActiveStream();
                return null != e && null != z.A.getHookError(L.LU7.SOUND)
                    ? [{ type: d.iy.STREAM_SOUNDSHARE_FAILED, ...(0, U.id)((0, h._z)(e)) }]
                    : void 0;
            },
            makeErrorContextKey: (e) => `${e.streamKey}:${e.mediaSessionId}`,
        },
        [d.iy.STREAM_FAILED_TO_START]: {
            getActiveErrors: (e) => {
                let { activeStreams: t } = e;
                return t
                    .filter((e) => e.state === L.XYD.FAILED && null == e.errorCode)
                    .map((e) => ({ type: d.iy.STREAM_FAILED_TO_START, ...(0, U.id)((0, h._z)(e)) }));
            },
            makeErrorContextKey: (e) => `${e.streamKey}:${e.mediaSessionId}`,
        },
        [d.iy.STREAM_RECONNECTING]: {
            getActiveErrors: (e) => {
                let { activeStreams: t } = e;
                return t
                    .filter((e) => e.state === L.XYD.RECONNECTING)
                    .map((e) => ({ type: d.iy.STREAM_RECONNECTING, ...(0, U.id)((0, h._z)(e)) }));
            },
            makeErrorContextKey: (e) => `${e.streamKey}:${e.mediaSessionId}`,
        },
        [d.iy.SCREENSHARE_OS_ERROR]: {
            getActiveErrors: (e) => {
                let { activeStreams: t } = e;
                return t
                    .filter((e) => null != e.errorCode)
                    .map((e) => {
                        var t;
                        return {
                            type: d.iy.SCREENSHARE_OS_ERROR,
                            errorMessage:
                                ((t = e.errorCode),
                                (0, H.isMac)() && t === j ? `${t} - your Mac may be low on disk space` : t.toString()),
                            ...(0, U.id)((0, h._z)(e)),
                        };
                    });
            },
            makeErrorContextKey: (e) => `${e.streamKey}:${e.mediaSessionId}`,
        },
        [d.iy.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH]: {
            getActiveErrors: () => {
                if (
                    (g.A.getRTCConnection()?.getDurationSeconds() ?? 0) < 30 ||
                    performance.now() - m.Ay.getLastAudioInputDeviceChangeTimestamp() < w
                )
                    return;
                let e =
                    I.A.getConnectionStats(
                        g.A.getRTCConnection()?.getMediaEngineConnectionId(),
                    )?.stats.rtp.outbound.find((e) => "audio" === e.type)?.sampleRateMismatchPercent ?? 0;
                if (Math.abs(e) > 30)
                    return [
                        {
                            type: d.iy.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH,
                            audioCaptureSampleRateMismatchPercent: e,
                            ...(0, U.jY)(),
                        },
                    ];
            },
            makeErrorContextKey: (e) => `${e.mediaSessionId}:${e.audioInputDeviceName}`,
        },
        [d.iy.VIDEO_STREAM_SENDER_READY_TIMEOUT]: {
            getActiveErrors: () =>
                Object.values(q.A.getTimedoutVideos())
                    .filter((e) => {
                        let { userId: t, videoStreamId: n } = e;
                        return G.default.getId() === t && null != n;
                    })
                    .map((e) => ({ type: d.iy.VIDEO_STREAM_SENDER_READY_TIMEOUT, ...e })),
            makeErrorContextKey: (e) => `${e.mediaContext}:${e.userId}`,
        },
        [d.iy.VIDEO_STREAM_RECEIVER_READY_TIMEOUT]: {
            getActiveErrors: () =>
                Object.values(q.A.getTimedoutVideos())
                    .filter((e) => {
                        let { userId: t, videoStreamId: n } = e;
                        return G.default.getId() !== t && null != n;
                    })
                    .map((e) => ({ type: d.iy.VIDEO_STREAM_RECEIVER_READY_TIMEOUT, ...e })),
            makeErrorContextKey: (e) => `${e.mediaContext}:${e.userId}`,
        },
        [d.iy.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM]: {
            getActiveErrors: () =>
                Object.values(q.A.getTimedoutVideos())
                    .filter((e) => {
                        let { userId: t, videoStreamId: n } = e;
                        return G.default.getId() === t && null == n;
                    })
                    .map((e) => ({ type: d.iy.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM, ...e })),
            makeErrorContextKey: (e) => `${e.mediaContext}:${e.userId}`,
        },
        [d.iy.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM]: {
            getActiveErrors: () =>
                Object.values(q.A.getTimedoutVideos())
                    .filter((e) => {
                        let { userId: t, videoStreamId: n } = e;
                        return G.default.getId() !== t && null == n;
                    })
                    .map((e) => ({ type: d.iy.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM, ...e })),
            makeErrorContextKey: (e) => `${e.mediaContext}:${e.userId}`,
        },
        [d.iy.CAMERA_SEND_LOW_FPS]: {
            getActiveErrors: () => {
                let e = g.A.getRTCConnection();
                if (null == e) return null;
                let t = e.getMediaEngineConnectionId();
                if (null == t || !m.Ay.isVideoEnabled()) return null;
                let n = g.A.getLastNonZeroRemoteVideoSinkWantsTime();
                if ((null != n && performance.now() - n < B) || !e.hasActiveRemoteWants()) return null;
                let i = F(t, G.default.getId());
                return null == i
                    ? null
                    : i.short.frameRate < 10 || i.long.frameRate < 10
                      ? [{ type: d.iy.CAMERA_SEND_LOW_FPS, userId: G.default.getId(), ...(0, U.jY)() }]
                      : void 0;
            },
            makeErrorContextKey: (e) => `${e.mediaSessionId}`,
        },
    },
    X = new a.A("AVErrorManager");
function Q(e, t) {
    let n = new Set();
    for (let i of e) t.has(i) || n.add(i);
    return n;
}
class J extends r.A {
    actions = {
        MEDIA_ENGINE_SET_AUDIO_ENABLED: this.updateActiveErrors,
        AUDIO_INPUT_DETECTED: this.updateActiveErrors,
        AUDIO_SET_DISPLAY_SILENCE_WARNING: this.updateActiveErrors,
        CERTIFIED_DEVICES_SET: this.updateActiveErrors,
        AUDIO_SET_INPUT_DEVICE: this.updateActiveErrors,
        AUDIO_SET_OUTPUT_DEVICE: this.updateActiveErrors,
        MEDIA_ENGINE_DEVICES: this.updateActiveErrors,
        RTC_CONNECTION_STATE: this.updateActiveErrors,
        VOICE_STATE_UPDATES: this.updateActiveErrors,
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: this.updateActiveErrors,
        MEDIA_ENGINE_SOUNDSHARE_FAILED: this.updateActiveErrors,
        MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: this.updateActiveErrors,
        MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR: this.updateActiveErrors,
        MEDIA_ENGINE_VIDEO_FILTER_ERROR: this.updateActiveErrors,
        MEDIA_ENGINE_VIDEO_STATE_CHANGED: this.updateActiveErrors,
        NATIVE_SCREEN_SHARE_PICKER_UPDATE: this.updateActiveErrors,
        NATIVE_SCREEN_SHARE_PICKER_ERROR: this.updateActiveErrors,
        MEDIA_SESSION_JOINED: this.updateActiveErrors,
        RTC_CONNECTION_UPDATE_ID: this.updateActiveErrors,
        RTC_CONNECTION_VIDEO: this.updateActiveErrors,
        RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS: this.updateActiveErrors,
        VIDEO_STREAM_READY_TIMEOUT: this.updateActiveErrors,
        CLEAR_VIDEO_STREAM_READY_TIMEOUT: this.updateActiveErrors,
        REPORT_AV_ERROR: this.handleReportAVError,
        STREAM_CLOSE: this.updateActiveErrors,
    };
    updateActiveErrors() {
        if (__OVERLAY__) return;
        let e = l.Ay.getVoiceChannelId() ?? null,
            t = null != e ? (o.A.getVoiceStateForChannel(e) ?? null) : null,
            n = s.A.getAllActiveStreams(),
            r = new Map();
        for (let i of Object.values(Z)) {
            let a = i.getActiveErrors({ voiceChannelId: e, voiceState: t, activeStreams: n });
            if (null != a)
                for (let e of a)
                    r.set(
                        (function (e) {
                            let t = Z[e.type];
                            return `${e.type}:${t?.makeErrorContextKey(e)}`;
                        })(e),
                        e,
                    );
        }
        let a = M.A.getActiveErrors();
        if (!(a instanceof Map))
            return void X.error(`existingErrors is not a Map: ${a} type: ${Object.prototype.toString.call(a)}`);
        if (0 === r.size && 0 === a.size) return;
        let c = new Set(r.keys()),
            u = new Set(a.keys());
        if (c.size > u.size)
            for (let e of Q(c, u)) {
                let t = r.get(e);
                null != t && (0, d.QW)(t);
            }
        if (u.size > c.size)
            for (let e of Q(u, c)) {
                let t = a.get(e);
                if (null != t) {
                    let { type: e, ...n } = t;
                    X.info(`Error resolved: ${e} ${JSON.stringify(n)}`);
                }
            }
        i.h.dispatch({ type: "ACTIVE_AV_ERRORS_CHANGED", activeErrors: r });
    }
    handleReportAVError(e) {
        let { error: t, context: n } = e;
        __OVERLAY__ ||
            (function (e, t) {
                let n,
                    i,
                    r = (0, d.B1)(e),
                    a = ((i = l.Ay.getVoiceChannelId()), ("channelId" in t ? t.channelId : void 0) ?? i ?? null),
                    s = T.A.getChannel(a),
                    o = "streamKey" in t ? t.streamKey : void 0,
                    c = "mediaContext" in t ? t.mediaContext : void 0,
                    M = "underlyingError" in t ? t.underlyingError : void 0,
                    P = "errorMessage" in t ? t.errorMessage : void 0,
                    U = "mediaSessionId" in t ? t.mediaSessionId : void 0,
                    w = "rtcConnectionId" in t ? t.rtcConnectionId : void 0,
                    G = "videoCodec" in t ? t.videoCodec : void 0,
                    x = "videoEncoder" in t ? t.videoEncoder : void 0,
                    k = "videoDecoder" in t ? t.videoDecoder : void 0,
                    F = "audioCaptureSampleRateMismatchPercent" in t ? t.audioCaptureSampleRateMismatchPercent : void 0,
                    V = "audioInputDeviceName" in t ? t.audioInputDeviceName : void 0,
                    B = "audioOutputDeviceName" in t ? t.audioOutputDeviceName : void 0,
                    H = "videoDeviceName" in t ? t.videoDeviceName : void 0,
                    j = "userId" in t ? t.userId : void 0,
                    W = null != o ? (0, h.Iy)(o) : null,
                    Y = null != o ? N.A.getRTCConnection(o) : null,
                    K = null != o ? Y : g.A.getRTCConnection(),
                    $ = null != o ? Y?.analyticsContext?.streamApplication : null,
                    { resolution: z, fps: q } = p.A.getState(),
                    { gameName: Z, gameId: X, exe: Q, distributor: J } = (0, A.wH)($),
                    ee = r.isErrorOutbound,
                    et = c ?? y.x.DEFAULT,
                    en = null != W ? W.ownerId : j,
                    ei = null != Y ? Y?.getVoiceParticipantType() : ee ? "sender" : "receiver",
                    er = K?.getMediaEngineConnectionId() ?? null;
                (n =
                    null != o && null != W
                        ? ee
                            ? K?.getOutboundStats()?.find((e) => e.quality === y.Y4)
                            : K?.getInboundStats(W.ownerId)
                        : ee
                          ? (u().maxBy(K?.getOutboundStats() ?? [], (e) => e.num_frames) ?? null)
                          : null != en
                            ? K?.getInboundStats(en)
                            : null),
                    (0, f.w)().then((t) => {
                        let i = {
                            error_name: e.valueOf(),
                            error_code: r.errorCode,
                            error_severity: r.severity,
                            error_category: r.category,
                            underlying_error: M ?? null,
                            error_message: P ?? null,
                            guild_id: s?.guild_id ?? null,
                            channel_id: a ?? null,
                            channel_type: s?.type ?? null,
                            rtc_connection_id: w ?? null,
                            media_session_id: U ?? g.A.getMediaSessionId() ?? null,
                            parent_media_session_id: Y?.parentMediaSessionId ?? null,
                            context: c ?? null,
                            voice_backend_version: g.A.getRTCConnection()?.getVoiceVersion() ?? null,
                            rtc_worker_backend_version: g.A.getRTCConnection()?.getRtcWorkerVersion() ?? null,
                            guild_region: S.A.getRegion(g.A.getHostname()) ?? null,
                            hostname: g.A.getHostname() ?? null,
                            duration: K?.getDurationSeconds() ?? null,
                            participant_type: ei ?? null,
                            num_frames: n?.num_frames ?? 0,
                            num_packets: n?.num_packets ?? 0,
                            num_bytes: n?.num_bytes ?? 0,
                            num_packets_lost: b(ee, er, en)?.packetsLost ?? 0,
                            video_codec: G ?? (0, _.aV)(b(ee, er, en)?.codec.name) ?? null,
                            video_encoder: x ?? (0, _.kZ)(D(er)?.encoderImplementationName) ?? null,
                            video_decoder: k ?? (0, _.s7)(v(er, en)?.decoderImplementationName) ?? null,
                            audio_capture_sample_rate_mismatch_percent: F ?? null,
                            incoming_video_stopped_for_occlusion: !E.X.isIncomingVideoEnabled(),
                            bitrate: b(ee, er, en)?.bitrate ?? null,
                            target_bitrate: ee ? (D(er)?.bitrateTarget ?? null) : null,
                            fps: (ee ? (D(et)?.frameRateEncode ?? null) : (v(et, en)?.frameRateDecode ?? null)) ?? null,
                            target_fps: et === y.x.STREAM && ee ? q : null,
                            sender_user_id: W?.ownerId ?? null,
                            stream_region: Y?.getRegion() ?? null,
                            stream_source_type: ee ? (Y?.analyticsContext?.streamSourceType ?? null) : null,
                            num_stream_viewers: Y?.analyticsContext?.numViewers ?? null,
                            video_input_resolution_height: ee ? (z ?? null) : null,
                            video_input_frame_rate: ee ? (q ?? null) : null,
                            screenshare_capture_method: (function (e) {
                                let t = I.A.getConnectionStats(e),
                                    n = I.A.getLastConnectionStats(e);
                                if (null == t || null == n) return null;
                                let i = {};
                                for (let e of [
                                    "videohookFrames",
                                    "hybridDxgiFrames",
                                    "hybridGdiFrames",
                                    "hybridVideohookFrames",
                                    "hybridGraphicsCaptureFrames",
                                    "hybridGdiBitBltFrames",
                                    "hybridGdiPrintWindowFrames",
                                    "quartzFrames",
                                    "screenCaptureKitFrames",
                                ]) {
                                    let r = n.stats.screenshare?.[e] ?? 0,
                                        a = t.stats.screenshare?.[e] ?? 0;
                                    i[e] = a - r;
                                }
                                let r = -1,
                                    a = null;
                                for (let [e, t] of Object.entries(i)) t > r && ((r = t), (a = e));
                                return r > 0 ? a : null;
                            })(er),
                            share_application_name: Z ?? null,
                            share_application_id: X ?? null,
                            share_application_executable: Q ?? null,
                            share_application_distributor: J ?? null,
                            cpu_brand: t?.cpu_brand ?? null,
                            cpu_vendor: t?.cpu_vendor ?? null,
                            cpu_memory: t?.cpu_memory ?? null,
                            gpu_brand: t?.gpu_brand ?? null,
                            gpu_count: t?.gpu_count ?? null,
                            gpu_memory: t?.gpu_memory ?? null,
                            gpu_device_vendor_id: t?.gpu_device_vendor_id ?? null,
                            gpu_device_device_id: t?.gpu_device_device_id ?? null,
                            gpu_device_sub_sys_id: t?.gpu_device_sub_sys_id ?? null,
                            gpu_device_revision: t?.gpu_device_revision ?? null,
                            gpu_driver_version: t?.gpu_driver_version ?? null,
                            cpu_usage: O.A.getCurrentCPUUsagePercent() ?? null,
                            memory_usage: O.A.getCurrentMemoryUsageKB() ?? null,
                            outbound_bitrate_estimate:
                                I.A.getConnectionStats(er)?.stats.transport.outboundBitrateEstimate ?? null,
                            inbound_bitrate_estimate:
                                I.A.getConnectionStats(er)?.stats.transport.inboundBitrateEstimate ?? null,
                            hardware_enabled: m.Ay.getHardwareEncoding(),
                            audio_input_device_name: V ?? m.Ay.getInputDevices()[m.Ay.getInputDeviceId()]?.name,
                            audio_output_device_name: B ?? m.Ay.getOutputDevices()[m.Ay.getOutputDeviceId()]?.name,
                            video_device_name: H ?? m.Ay.getVideoDevices()[m.Ay.getVideoDeviceId()]?.name,
                            audio_subsystem: m.Ay.getMediaEngine().getAudioSubsystem(),
                            automatic_audio_subsystem: m.Ay.getSettings().automaticAudioSubsystem,
                            audio_layer: m.Ay.getMediaEngine().getAudioLayer(),
                            audio_input_mode: m.Ay.getSettings().mode,
                            automatic_audio_input_sensitivity_enabled: m.Ay.getSettings().modeOptions.autoThreshold,
                            audio_input_sensitivity: m.Ay.getSettings().modeOptions.threshold,
                            echo_cancellation_enabled: m.Ay.getEchoCancellation(),
                            noise_suppression_enabled: m.Ay.getNoiseSuppression(),
                            noise_cancellation_enabled: m.Ay.getNoiseCancellation(),
                            automatic_gain_control_enabled: m.Ay.getAutomaticGainControl(),
                            sidechain_compression_enabled: m.Ay.getSidechainCompression(),
                            input_volume: m.Ay.getInputVolume(),
                            output_volume: m.Ay.getOutputVolume(),
                            audio_input_device_count: Object.keys(m.Ay.getInputDevices()).length,
                            audio_output_device_count: Object.keys(m.Ay.getOutputDevices()).length,
                            app_hardware_acceleration_enabled: R.A.getAppHardwareAccelerationEnabled(),
                            input_device_os_muted: m.Ay.getInputDeviceOSMuted() ?? null,
                            input_device_os_volume: m.Ay.getInputDeviceOSVolume() ?? null,
                        };
                        C.default.track(L.HAw.AV_ERROR_REPORTED, i);
                    });
            })(t, n);
    }
}
let ee = new J();
