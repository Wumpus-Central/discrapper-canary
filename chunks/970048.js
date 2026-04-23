"use strict";
n.d(t, { A: () => ee });
var i = n(228366),
    r = n(439372),
    s = n(626584),
    a = n(616356),
    o = n(309010),
    l = n(977997),
    d = n(487329),
    _ = n(735438),
    u = n.n(_),
    c = n(166929),
    E = n(276208),
    h = n(973522),
    m = n(652896),
    f = n(624694),
    g = n(967347),
    p = n(929921),
    A = n(734057),
    I = n(969341),
    T = n(763827),
    S = n(873985),
    N = n(116956),
    C = n(954571),
    R = n(353835),
    O = n(321034),
    y = n(652215),
    v = n(731854);
function D(e) {
    let t = f.A.getConnectionStats(e);
    return null == t ? null : (t.stats.rtp.outbound.find((e) => "video" === e.type) ?? null);
}
function L(e, t) {
    if (null == t) return null;
    let n = f.A.getConnectionStats(e);
    if (null == n) return null;
    let i = n.stats.rtp.inbound[t];
    return null == i ? null : (i.find((e) => "video" === e.type) ?? null);
}
function b(e, t, n) {
    return e ? D(t) : L(t, n);
}
var w = n(161518),
    P = n(927813),
    k = n(601900);
let M = 10 * P.A.Millis.SECOND;
var U = n(495544);
let x = 10 * P.A.Millis.SECOND;
function G() {
    return E.X.isIncomingVideoEnabled() && performance.now() - E.X.lastIncomingVideoEnabledChangeTime() > x;
}
function V(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
        i = f.A.getAccumulatedPerformanceStats(e, t, "short"),
        r = f.A.getAccumulatedPerformanceStats(e, t, "long");
    return null == i || null == r || i.numDatapoints < n || r.numDatapoints < n ? null : { short: i, long: r };
}
function F() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
    return e <= 5 ? 3 : e <= 15 ? 8 : e <= 30 ? 15 : 30;
}
let B = 20 * P.A.Millis.SECOND;
var H = n(723702);
let j = BigInt(-3821);
var W = n(403362),
    Y = n(313961),
    K = n(650338);
let z = 20 * P.A.Millis.SECOND;
var $ = n(877717);
n(321073);
var q = n(803301);
let X = {
        [d.iy.NO_AUDIO_INPUT_DETECTED]: {
            getActiveErrors: (e) => {
                let { voiceChannelId: t, voiceState: n } = e,
                    i = A.A.getChannel(t),
                    r = i?.isGuildStageVoice() && n?.suppress,
                    s = T.A.getMediaSessionId();
                if (
                    null != i &&
                    null != s &&
                    !I.Ay.getInputDetectedThisConnection() &&
                    T.A.getState() === y.S7L.RTC_CONNECTED &&
                    I.Ay.getSettings().mode === y.TBI.VOICE_ACTIVITY &&
                    I.Ay.getSettings().silenceWarning &&
                    !1 === I.Ay.getInputDetected() &&
                    !r &&
                    !I.Ay.isSelfMute()
                )
                    return [{ type: d.iy.NO_AUDIO_INPUT_DETECTED, ...(0, k.jY)() }];
            },
            makeErrorContextKey: (e) => `${e.mediaSessionId}:${e.audioInputDeviceName}`,
        },
        [d.iy.NO_INPUT_DEVICES]: {
            getActiveErrors: (e) => {
                let { voiceChannelId: t, voiceState: n } = e,
                    i = A.A.getChannel(t),
                    r = i?.isGuildStageVoice() && n?.suppress,
                    s = 0 === Object.keys(I.Ay.getInputDevices()).length,
                    a = T.A.getMediaSessionId();
                if (s && null != i && null != a && !r) return [{ type: d.iy.NO_INPUT_DEVICES, ...(0, k.jY)() }];
            },
            makeErrorContextKey: (e) => `${e.mediaSessionId}`,
        },
        [d.iy.STREAM_VIEW_LOW_FPS]: {
            getActiveErrors: () =>
                G()
                    ? a.A.getAllActiveStreams().reduce((e, t) => {
                          let n = N.A.getRTCConnection((0, m._z)(t))?.getMediaEngineConnectionId();
                          if (null == n || t.ownerId === U.default.getId() || t.state === y.XYD.PAUSED) return e;
                          let i = V(n, t.ownerId);
                          if (null == i) return e;
                          let r = Y.A.getParticipant(t.channelId, (0, m._z)(t));
                          if (null == r) return e;
                          let s = (0, K.wz)(r);
                          return (
                              null == s ||
                                  ((i.short.frameRate < F(s.maxFrameRate) || i.long.frameRate < F(s.maxFrameRate)) &&
                                      e.push({ type: d.iy.STREAM_VIEW_LOW_FPS, ...(0, k.id)((0, m._z)(t)) })),
                              e
                          );
                      }, [])
                    : null,
            makeErrorContextKey: (e) => `${e.streamKey}:${e.mediaSessionId}`,
        },
        [d.iy.STREAM_VIEW_HIGH_PACKET_LOSS]: {
            getActiveErrors: () =>
                G()
                    ? a.A.getAllActiveStreams().reduce((e, t) => {
                          let n = N.A.getRTCConnection((0, m._z)(t))?.getMediaEngineConnectionId();
                          if (null == n || t.ownerId === U.default.getId()) return e;
                          let i = V(n, t.ownerId);
                          return (
                              null == i ||
                                  ((100 * i.short.packetLossRate > 10 || 100 * i.long.packetLossRate > 10) &&
                                      e.push({ type: d.iy.STREAM_VIEW_HIGH_PACKET_LOSS, ...(0, k.id)((0, m._z)(t)) })),
                              e
                          );
                      }, [])
                    : null,
            makeErrorContextKey: (e) => `${e.streamKey}:${e.mediaSessionId}`,
        },
        [d.iy.STREAM_SEND_HIGH_PACKET_LOSS]: {
            getActiveErrors: () => {
                let e = a.A.getCurrentUserActiveStream();
                if (null == e || 0 === a.A.getViewerIds(e).length) return null;
                let t = N.A.getRTCConnection((0, m._z)(e))?.getMediaEngineConnectionId();
                if (null == t) return null;
                let n = V(t, e.ownerId);
                return null == n
                    ? null
                    : 100 * n.short.packetLossRate > 10 || 100 * n.long.packetLossRate > 10
                      ? [{ type: d.iy.STREAM_SEND_HIGH_PACKET_LOSS, ...(0, k.id)((0, m._z)(e)) }]
                      : void 0;
            },
            makeErrorContextKey: (e) => `${e.streamKey}:${e.mediaSessionId}`,
        },
        [d.iy.STREAM_SEND_LOW_FPS]: {
            getActiveErrors: () => {
                let e = a.A.getCurrentUserActiveStream();
                if (null == e || e.state === y.XYD.PAUSED || 0 === a.A.getViewerIds(e).length) return null;
                let t = (0, m._z)(e),
                    n = N.A.getRTCConnection(t);
                if (null == n) return null;
                let i = n.getMediaEngineConnectionId();
                if (null == i) return null;
                let r = N.A.getLastNonZeroRemoteVideoSinkWantsTime(t);
                if ((null != r && performance.now() - r < z) || !n.hasActiveRemoteWants()) return null;
                let s = Y.A.getParticipant(e.channelId, (0, m._z)(e));
                if (null == s) return null;
                let o = V(i, e.ownerId);
                if (null == o) return null;
                let l = (0, K.wz)(s);
                return null == l
                    ? null
                    : o.short.frameRate < F(l.maxFrameRate) || o.long.frameRate < F(l.maxFrameRate)
                      ? [{ type: d.iy.STREAM_SEND_LOW_FPS, ...(0, k.id)((0, m._z)(e)) }]
                      : null;
            },
            makeErrorContextKey: (e) => `${e.streamKey}:${e.mediaSessionId}`,
        },
        [d.iy.STREAM_BAD_NETWORK_QUALITY]: {
            getActiveErrors: () =>
                N.A.getAllActiveStreamKeys()
                    .map((e) =>
                        N.A.getQuality(e) === y.bFR.BAD
                            ? { type: d.iy.STREAM_BAD_NETWORK_QUALITY, ...(0, k.id)(e) }
                            : null,
                    )
                    .filter(W.Vq),
            makeErrorContextKey: (e) => `${e.streamKey}:${e.mediaSessionId}`,
        },
        [d.iy.STREAM_SOUNDSHARE_FAILED]: {
            getActiveErrors: () => {
                let e = a.A.getCurrentUserActiveStream();
                return null != e && null != $.A.getHookError(y.LU7.SOUND)
                    ? [{ type: d.iy.STREAM_SOUNDSHARE_FAILED, ...(0, k.id)((0, m._z)(e)) }]
                    : void 0;
            },
            makeErrorContextKey: (e) => `${e.streamKey}:${e.mediaSessionId}`,
        },
        [d.iy.STREAM_FAILED_TO_START]: {
            getActiveErrors: (e) => {
                let { activeStreams: t } = e;
                return t
                    .filter((e) => e.state === y.XYD.FAILED && null == e.errorCode)
                    .map((e) => ({ type: d.iy.STREAM_FAILED_TO_START, ...(0, k.id)((0, m._z)(e)) }));
            },
            makeErrorContextKey: (e) => `${e.streamKey}:${e.mediaSessionId}`,
        },
        [d.iy.STREAM_RECONNECTING]: {
            getActiveErrors: (e) => {
                let { activeStreams: t } = e;
                return t
                    .filter((e) => e.state === y.XYD.RECONNECTING)
                    .map((e) => ({ type: d.iy.STREAM_RECONNECTING, ...(0, k.id)((0, m._z)(e)) }));
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
                            ...(0, k.id)((0, m._z)(e)),
                        };
                    });
            },
            makeErrorContextKey: (e) => `${e.streamKey}:${e.mediaSessionId}`,
        },
        [d.iy.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH]: {
            getActiveErrors: () => {
                if (
                    (T.A.getRTCConnection()?.getDurationSeconds() ?? 0) < 30 ||
                    performance.now() - I.Ay.getLastAudioInputDeviceChangeTimestamp() < M
                )
                    return;
                let e =
                    f.A.getConnectionStats(
                        T.A.getRTCConnection()?.getMediaEngineConnectionId(),
                    )?.stats.rtp.outbound.find((e) => "audio" === e.type)?.sampleRateMismatchPercent ?? 0;
                if (Math.abs(e) > 30)
                    return [
                        {
                            type: d.iy.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH,
                            audioCaptureSampleRateMismatchPercent: e,
                            ...(0, k.jY)(),
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
                        return U.default.getId() === t && null != n;
                    })
                    .map((e) => ({ type: d.iy.VIDEO_STREAM_SENDER_READY_TIMEOUT, ...e })),
            makeErrorContextKey: (e) => `${e.mediaContext}:${e.userId}`,
        },
        [d.iy.VIDEO_STREAM_RECEIVER_READY_TIMEOUT]: {
            getActiveErrors: () =>
                Object.values(q.A.getTimedoutVideos())
                    .filter((e) => {
                        let { userId: t, videoStreamId: n } = e;
                        return U.default.getId() !== t && null != n;
                    })
                    .map((e) => ({ type: d.iy.VIDEO_STREAM_RECEIVER_READY_TIMEOUT, ...e })),
            makeErrorContextKey: (e) => `${e.mediaContext}:${e.userId}`,
        },
        [d.iy.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM]: {
            getActiveErrors: () =>
                Object.values(q.A.getTimedoutVideos())
                    .filter((e) => {
                        let { userId: t, videoStreamId: n } = e;
                        return U.default.getId() === t && null == n;
                    })
                    .map((e) => ({ type: d.iy.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM, ...e })),
            makeErrorContextKey: (e) => `${e.mediaContext}:${e.userId}`,
        },
        [d.iy.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM]: {
            getActiveErrors: () =>
                Object.values(q.A.getTimedoutVideos())
                    .filter((e) => {
                        let { userId: t, videoStreamId: n } = e;
                        return U.default.getId() !== t && null == n;
                    })
                    .map((e) => ({ type: d.iy.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM, ...e })),
            makeErrorContextKey: (e) => `${e.mediaContext}:${e.userId}`,
        },
        [d.iy.CAMERA_SEND_LOW_FPS]: {
            getActiveErrors: () => {
                let e = T.A.getRTCConnection();
                if (null == e) return null;
                let t = e.getMediaEngineConnectionId();
                if (null == t || !I.Ay.isVideoEnabled()) return null;
                let n = T.A.getLastNonZeroRemoteVideoSinkWantsTime();
                if ((null != n && performance.now() - n < B) || !e.hasActiveRemoteWants()) return null;
                let i = V(t, U.default.getId());
                return null == i
                    ? null
                    : i.short.frameRate < 10 || i.long.frameRate < 10
                      ? [{ type: d.iy.CAMERA_SEND_LOW_FPS, userId: U.default.getId(), ...(0, k.jY)() }]
                      : void 0;
            },
            makeErrorContextKey: (e) => `${e.mediaSessionId}`,
        },
    },
    Z = new s.A("AVErrorManager");
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
        let e = o.A.getVoiceChannelId() ?? null,
            t = null != e ? (l.A.getVoiceStateForChannel(e) ?? null) : null,
            n = a.A.getAllActiveStreams(),
            r = new Map();
        for (let i of Object.values(X)) {
            let s = i.getActiveErrors({ voiceChannelId: e, voiceState: t, activeStreams: n });
            if (null != s)
                for (let e of s)
                    r.set(
                        (function (e) {
                            let t = X[e.type];
                            return `${e.type}:${t?.makeErrorContextKey(e)}`;
                        })(e),
                        e,
                    );
        }
        let s = w.A.getActiveErrors();
        if (!(s instanceof Map))
            return void Z.error(`existingErrors is not a Map: ${s} type: ${Object.prototype.toString.call(s)}`);
        if (0 === r.size && 0 === s.size) return;
        let _ = new Set(r.keys()),
            u = new Set(s.keys());
        if (_.size > u.size)
            for (let e of Q(_, u)) {
                let t = r.get(e);
                null != t && (0, d.QW)(t);
            }
        if (u.size > _.size)
            for (let e of Q(u, _)) {
                let t = s.get(e);
                if (null != t) {
                    let { type: e, ...n } = t;
                    Z.info(`Error resolved: ${e} ${JSON.stringify(n)}`);
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
                    s = ((i = o.A.getVoiceChannelId()), ("channelId" in t ? t.channelId : void 0) ?? i ?? null),
                    a = A.A.getChannel(s),
                    l = "streamKey" in t ? t.streamKey : void 0,
                    _ = "mediaContext" in t ? t.mediaContext : void 0,
                    w = "underlyingError" in t ? t.underlyingError : void 0,
                    P = "errorMessage" in t ? t.errorMessage : void 0,
                    k = "mediaSessionId" in t ? t.mediaSessionId : void 0,
                    M = "rtcConnectionId" in t ? t.rtcConnectionId : void 0,
                    U = "videoCodec" in t ? t.videoCodec : void 0,
                    x = "videoEncoder" in t ? t.videoEncoder : void 0,
                    G = "videoDecoder" in t ? t.videoDecoder : void 0,
                    V = "audioCaptureSampleRateMismatchPercent" in t ? t.audioCaptureSampleRateMismatchPercent : void 0,
                    F = "audioInputDeviceName" in t ? t.audioInputDeviceName : void 0,
                    B = "audioOutputDeviceName" in t ? t.audioOutputDeviceName : void 0,
                    H = "videoDeviceName" in t ? t.videoDeviceName : void 0,
                    j = "userId" in t ? t.userId : void 0,
                    W = null != l ? (0, m.Iy)(l) : null,
                    Y = null != l ? N.A.getRTCConnection(l) : null,
                    K = null != l ? Y : T.A.getRTCConnection(),
                    z = null != l ? Y?.analyticsContext?.streamApplication : null,
                    { resolution: $, fps: q } = p.A.getState(),
                    { gameName: X, gameId: Z, exe: Q, distributor: J } = (0, h.wH)(z),
                    ee = r.isErrorOutbound,
                    et = _ ?? v.x.DEFAULT,
                    en = null != W ? W.ownerId : j,
                    ei = null != Y ? Y?.getVoiceParticipantType() : ee ? "sender" : "receiver",
                    er = K?.getMediaEngineConnectionId() ?? null;
                (n =
                    null != l && null != W
                        ? ee
                            ? K?.getOutboundStats()?.find((e) => e.quality === v.Y4)
                            : K?.getInboundStats(W.ownerId)
                        : ee
                          ? (u().maxBy(K?.getOutboundStats() ?? [], (e) => e.num_frames) ?? null)
                          : null != en
                            ? K?.getInboundStats(en)
                            : null),
                    (0, g.w)().then((t) => {
                        let i = {
                            error_name: e.valueOf(),
                            error_code: r.errorCode,
                            error_severity: r.severity,
                            error_category: r.category,
                            underlying_error: w ?? null,
                            error_message: P ?? null,
                            guild_id: a?.guild_id ?? null,
                            channel_id: s ?? null,
                            channel_type: a?.type ?? null,
                            rtc_connection_id: M ?? null,
                            media_session_id: k ?? T.A.getMediaSessionId() ?? null,
                            parent_media_session_id: Y?.parentMediaSessionId ?? null,
                            context: _ ?? null,
                            voice_backend_version: T.A.getRTCConnection()?.getVoiceVersion() ?? null,
                            rtc_worker_backend_version: T.A.getRTCConnection()?.getRtcWorkerVersion() ?? null,
                            guild_region: S.A.getRegion(T.A.getHostname()) ?? null,
                            hostname: T.A.getHostname() ?? null,
                            duration: K?.getDurationSeconds() ?? null,
                            participant_type: ei ?? null,
                            num_frames: n?.num_frames ?? 0,
                            num_packets: n?.num_packets ?? 0,
                            num_bytes: n?.num_bytes ?? 0,
                            num_packets_lost: b(ee, er, en)?.packetsLost ?? 0,
                            video_codec: U ?? (0, c.aV)(b(ee, er, en)?.codec.name) ?? null,
                            video_encoder: x ?? (0, c.kZ)(D(er)?.encoderImplementationName) ?? null,
                            video_decoder: G ?? (0, c.s7)(L(er, en)?.decoderImplementationName) ?? null,
                            audio_capture_sample_rate_mismatch_percent: V ?? null,
                            incoming_video_stopped_for_occlusion: !E.X.isIncomingVideoEnabled(),
                            bitrate: b(ee, er, en)?.bitrate ?? null,
                            target_bitrate: ee ? (D(er)?.bitrateTarget ?? null) : null,
                            fps: (ee ? (D(et)?.frameRateEncode ?? null) : (L(et, en)?.frameRateDecode ?? null)) ?? null,
                            target_fps: et === v.x.STREAM && ee ? q : null,
                            sender_user_id: W?.ownerId ?? null,
                            stream_region: Y?.getRegion() ?? null,
                            stream_source_type: ee ? (Y?.analyticsContext?.streamSourceType ?? null) : null,
                            num_stream_viewers: Y?.analyticsContext?.numViewers ?? null,
                            video_input_resolution_height: ee ? ($ ?? null) : null,
                            video_input_frame_rate: ee ? (q ?? null) : null,
                            screenshare_capture_method: (function (e) {
                                let t = f.A.getConnectionStats(e),
                                    n = f.A.getLastConnectionStats(e);
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
                                        s = t.stats.screenshare?.[e] ?? 0;
                                    i[e] = s - r;
                                }
                                let r = -1,
                                    s = null;
                                for (let [e, t] of Object.entries(i)) t > r && ((r = t), (s = e));
                                return r > 0 ? s : null;
                            })(er),
                            share_application_name: X ?? null,
                            share_application_id: Z ?? null,
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
                                f.A.getConnectionStats(er)?.stats.transport.outboundBitrateEstimate ?? null,
                            inbound_bitrate_estimate:
                                f.A.getConnectionStats(er)?.stats.transport.inboundBitrateEstimate ?? null,
                            hardware_enabled: I.Ay.getHardwareEncoding(),
                            audio_input_device_name: F ?? I.Ay.getInputDevices()[I.Ay.getInputDeviceId()]?.name,
                            audio_output_device_name: B ?? I.Ay.getOutputDevices()[I.Ay.getOutputDeviceId()]?.name,
                            video_device_name: H ?? I.Ay.getVideoDevices()[I.Ay.getVideoDeviceId()]?.name,
                            audio_subsystem: I.Ay.getMediaEngine().getAudioSubsystem(),
                            automatic_audio_subsystem: I.Ay.getSettings().automaticAudioSubsystem,
                            audio_layer: I.Ay.getMediaEngine().getAudioLayer(),
                            audio_input_mode: I.Ay.getSettings().mode,
                            automatic_audio_input_sensitivity_enabled: I.Ay.getSettings().modeOptions.autoThreshold,
                            audio_input_sensitivity: I.Ay.getSettings().modeOptions.threshold,
                            echo_cancellation_enabled: I.Ay.getEchoCancellation(),
                            noise_suppression_enabled: I.Ay.getNoiseSuppression(),
                            noise_cancellation_enabled: I.Ay.getNoiseCancellation(),
                            automatic_gain_control_enabled: I.Ay.getAutomaticGainControl(),
                            sidechain_compression_enabled: I.Ay.getSidechainCompression(),
                            input_volume: I.Ay.getInputVolume(),
                            output_volume: I.Ay.getOutputVolume(),
                            audio_input_device_count: Object.keys(I.Ay.getInputDevices()).length,
                            audio_output_device_count: Object.keys(I.Ay.getOutputDevices()).length,
                            app_hardware_acceleration_enabled: R.A.getAppHardwareAccelerationEnabled(),
                            input_device_os_muted: I.Ay.getInputDeviceOSMuted() ?? null,
                            input_device_os_volume: I.Ay.getInputDeviceOSVolume() ?? null,
                        };
                        C.default.track(y.HAw.AV_ERROR_REPORTED, i);
                    });
            })(t, n);
    }
}
let ee = new J();
