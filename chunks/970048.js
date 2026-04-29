"use strict";
n.d(t, { A: () => ee });
var i = n(228366),
    r = n(439372),
    s = n(626584),
    a = n(616356),
    o = n(309010),
    l = n(977997),
    _ = n(487329),
    d = n(735438),
    u = n.n(d),
    c = n(166929),
    E = n(276208),
    h = n(973522),
    m = n(652896),
    f = n(624694),
    g = n(967347),
    I = n(929921),
    A = n(734057),
    p = n(51760),
    T = n(763827),
    S = n(873985),
    N = n(116956),
    O = n(954571),
    R = n(353835),
    C = n(321034),
    y = n(652215),
    D = n(731854);
function L(e) {
    let t = f.A.getConnectionStats(e);
    return null == t ? null : (t.stats.rtp.outbound.find((e) => "video" === e.type) ?? null);
}
function v(e, t) {
    if (null == t) return null;
    let n = f.A.getConnectionStats(e);
    if (null == n) return null;
    let i = n.stats.rtp.inbound[t];
    return null == i ? null : (i.find((e) => "video" === e.type) ?? null);
}
function w(e, t, n) {
    return e ? L(t) : v(t, n);
}
var P = n(161518),
    b = n(927813),
    k = n(601900);
let U = 10 * b.A.Millis.SECOND;
var M = n(495544);
let G = 10 * b.A.Millis.SECOND;
function x() {
    return E.X.isIncomingVideoEnabled() && performance.now() - E.X.lastIncomingVideoEnabledChangeTime() > G;
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
let B = 20 * b.A.Millis.SECOND;
var H = n(723702);
let Y = BigInt(-3821);
var W = n(403362),
    K = n(313961),
    j = n(650338);
let $ = 20 * b.A.Millis.SECOND;
var z = n(877717);
n(321073);
var q = n(803301);
let X = {
        [_.iy.NO_AUDIO_INPUT_DETECTED]: {
            getActiveErrors: (e) => {
                let { voiceChannelId: t, voiceState: n } = e,
                    i = A.A.getChannel(t),
                    r = i?.isGuildStageVoice() && n?.suppress,
                    s = T.A.getMediaSessionId();
                if (
                    null != i &&
                    null != s &&
                    !p.Ay.getInputDetectedThisConnection() &&
                    T.A.getState() === y.S7L.RTC_CONNECTED &&
                    p.Ay.getSettings().mode === y.TBI.VOICE_ACTIVITY &&
                    p.Ay.getSettings().silenceWarning &&
                    !1 === p.Ay.getInputDetected() &&
                    !r &&
                    !p.Ay.isSelfMute()
                )
                    return [{ type: _.iy.NO_AUDIO_INPUT_DETECTED, ...(0, k.jY)() }];
            },
            makeErrorContextKey: (e) => `${e.mediaSessionId}:${e.audioInputDeviceName}`,
        },
        [_.iy.NO_INPUT_DEVICES]: {
            getActiveErrors: (e) => {
                let { voiceChannelId: t, voiceState: n } = e,
                    i = A.A.getChannel(t),
                    r = i?.isGuildStageVoice() && n?.suppress,
                    s = 0 === Object.keys(p.Ay.getInputDevices()).length,
                    a = T.A.getMediaSessionId();
                if (s && null != i && null != a && !r) return [{ type: _.iy.NO_INPUT_DEVICES, ...(0, k.jY)() }];
            },
            makeErrorContextKey: (e) => `${e.mediaSessionId}`,
        },
        [_.iy.STREAM_VIEW_LOW_FPS]: {
            getActiveErrors: () =>
                x()
                    ? a.A.getAllActiveStreams().reduce((e, t) => {
                          let n = N.A.getRTCConnection((0, m._z)(t))?.getMediaEngineConnectionId();
                          if (null == n || t.ownerId === M.default.getId() || t.state === y.XYD.PAUSED) return e;
                          let i = V(n, t.ownerId);
                          if (null == i) return e;
                          let r = K.A.getParticipant(t.channelId, (0, m._z)(t));
                          if (null == r) return e;
                          let s = (0, j.wz)(r);
                          return (
                              null == s ||
                                  ((i.short.frameRate < F(s.maxFrameRate) || i.long.frameRate < F(s.maxFrameRate)) &&
                                      e.push({ type: _.iy.STREAM_VIEW_LOW_FPS, ...(0, k.id)((0, m._z)(t)) })),
                              e
                          );
                      }, [])
                    : null,
            makeErrorContextKey: (e) => `${e.streamKey}:${e.mediaSessionId}`,
        },
        [_.iy.STREAM_VIEW_HIGH_PACKET_LOSS]: {
            getActiveErrors: () =>
                x()
                    ? a.A.getAllActiveStreams().reduce((e, t) => {
                          let n = N.A.getRTCConnection((0, m._z)(t))?.getMediaEngineConnectionId();
                          if (null == n || t.ownerId === M.default.getId()) return e;
                          let i = V(n, t.ownerId);
                          return (
                              null == i ||
                                  ((100 * i.short.packetLossRate > 10 || 100 * i.long.packetLossRate > 10) &&
                                      e.push({ type: _.iy.STREAM_VIEW_HIGH_PACKET_LOSS, ...(0, k.id)((0, m._z)(t)) })),
                              e
                          );
                      }, [])
                    : null,
            makeErrorContextKey: (e) => `${e.streamKey}:${e.mediaSessionId}`,
        },
        [_.iy.STREAM_SEND_HIGH_PACKET_LOSS]: {
            getActiveErrors: () => {
                let e = a.A.getCurrentUserActiveStream();
                if (null == e || 0 === a.A.getViewerIds(e).length) return null;
                let t = N.A.getRTCConnection((0, m._z)(e))?.getMediaEngineConnectionId();
                if (null == t) return null;
                let n = V(t, e.ownerId);
                return null == n
                    ? null
                    : 100 * n.short.packetLossRate > 10 || 100 * n.long.packetLossRate > 10
                      ? [{ type: _.iy.STREAM_SEND_HIGH_PACKET_LOSS, ...(0, k.id)((0, m._z)(e)) }]
                      : void 0;
            },
            makeErrorContextKey: (e) => `${e.streamKey}:${e.mediaSessionId}`,
        },
        [_.iy.STREAM_SEND_LOW_FPS]: {
            getActiveErrors: () => {
                let e = a.A.getCurrentUserActiveStream();
                if (null == e || e.state === y.XYD.PAUSED || 0 === a.A.getViewerIds(e).length) return null;
                let t = (0, m._z)(e),
                    n = N.A.getRTCConnection(t);
                if (null == n) return null;
                let i = n.getMediaEngineConnectionId();
                if (null == i) return null;
                let r = N.A.getLastNonZeroRemoteVideoSinkWantsTime(t);
                if ((null != r && performance.now() - r < $) || !n.hasActiveRemoteWants()) return null;
                let s = K.A.getParticipant(e.channelId, (0, m._z)(e));
                if (null == s) return null;
                let o = V(i, e.ownerId);
                if (null == o) return null;
                let l = (0, j.wz)(s);
                return null == l
                    ? null
                    : o.short.frameRate < F(l.maxFrameRate) || o.long.frameRate < F(l.maxFrameRate)
                      ? [{ type: _.iy.STREAM_SEND_LOW_FPS, ...(0, k.id)((0, m._z)(e)) }]
                      : null;
            },
            makeErrorContextKey: (e) => `${e.streamKey}:${e.mediaSessionId}`,
        },
        [_.iy.STREAM_BAD_NETWORK_QUALITY]: {
            getActiveErrors: () =>
                N.A.getAllActiveStreamKeys()
                    .map((e) =>
                        N.A.getQuality(e) === y.bFR.BAD
                            ? { type: _.iy.STREAM_BAD_NETWORK_QUALITY, ...(0, k.id)(e) }
                            : null,
                    )
                    .filter(W.Vq),
            makeErrorContextKey: (e) => `${e.streamKey}:${e.mediaSessionId}`,
        },
        [_.iy.STREAM_SOUNDSHARE_FAILED]: {
            getActiveErrors: () => {
                let e = a.A.getCurrentUserActiveStream();
                return null != e && null != z.A.getHookError(y.LU7.SOUND)
                    ? [{ type: _.iy.STREAM_SOUNDSHARE_FAILED, ...(0, k.id)((0, m._z)(e)) }]
                    : void 0;
            },
            makeErrorContextKey: (e) => `${e.streamKey}:${e.mediaSessionId}`,
        },
        [_.iy.STREAM_FAILED_TO_START]: {
            getActiveErrors: (e) => {
                let { activeStreams: t } = e;
                return t
                    .filter((e) => e.state === y.XYD.FAILED && null == e.errorCode)
                    .map((e) => ({ type: _.iy.STREAM_FAILED_TO_START, ...(0, k.id)((0, m._z)(e)) }));
            },
            makeErrorContextKey: (e) => `${e.streamKey}:${e.mediaSessionId}`,
        },
        [_.iy.STREAM_RECONNECTING]: {
            getActiveErrors: (e) => {
                let { activeStreams: t } = e;
                return t
                    .filter((e) => e.state === y.XYD.RECONNECTING)
                    .map((e) => ({ type: _.iy.STREAM_RECONNECTING, ...(0, k.id)((0, m._z)(e)) }));
            },
            makeErrorContextKey: (e) => `${e.streamKey}:${e.mediaSessionId}`,
        },
        [_.iy.SCREENSHARE_OS_ERROR]: {
            getActiveErrors: (e) => {
                let { activeStreams: t } = e;
                return t
                    .filter((e) => null != e.errorCode)
                    .map((e) => {
                        var t;
                        return {
                            type: _.iy.SCREENSHARE_OS_ERROR,
                            errorMessage:
                                ((t = e.errorCode),
                                (0, H.isMac)() && t === Y ? `${t} - your Mac may be low on disk space` : t.toString()),
                            ...(0, k.id)((0, m._z)(e)),
                        };
                    });
            },
            makeErrorContextKey: (e) => `${e.streamKey}:${e.mediaSessionId}`,
        },
        [_.iy.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH]: {
            getActiveErrors: () => {
                if (
                    (T.A.getRTCConnection()?.getDurationSeconds() ?? 0) < 30 ||
                    performance.now() - p.Ay.getLastAudioInputDeviceChangeTimestamp() < U
                )
                    return;
                let e =
                    f.A.getConnectionStats(
                        T.A.getRTCConnection()?.getMediaEngineConnectionId(),
                    )?.stats.rtp.outbound.find((e) => "audio" === e.type)?.sampleRateMismatchPercent ?? 0;
                if (Math.abs(e) > 30)
                    return [
                        {
                            type: _.iy.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH,
                            audioCaptureSampleRateMismatchPercent: e,
                            ...(0, k.jY)(),
                        },
                    ];
            },
            makeErrorContextKey: (e) => `${e.mediaSessionId}:${e.audioInputDeviceName}`,
        },
        [_.iy.VIDEO_STREAM_SENDER_READY_TIMEOUT]: {
            getActiveErrors: () =>
                Object.values(q.A.getTimedoutVideos())
                    .filter((e) => {
                        let { userId: t, videoStreamId: n } = e;
                        return M.default.getId() === t && null != n;
                    })
                    .map((e) => ({ type: _.iy.VIDEO_STREAM_SENDER_READY_TIMEOUT, ...e })),
            makeErrorContextKey: (e) => `${e.mediaContext}:${e.userId}`,
        },
        [_.iy.VIDEO_STREAM_RECEIVER_READY_TIMEOUT]: {
            getActiveErrors: () =>
                Object.values(q.A.getTimedoutVideos())
                    .filter((e) => {
                        let { userId: t, videoStreamId: n } = e;
                        return M.default.getId() !== t && null != n;
                    })
                    .map((e) => ({ type: _.iy.VIDEO_STREAM_RECEIVER_READY_TIMEOUT, ...e })),
            makeErrorContextKey: (e) => `${e.mediaContext}:${e.userId}`,
        },
        [_.iy.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM]: {
            getActiveErrors: () =>
                Object.values(q.A.getTimedoutVideos())
                    .filter((e) => {
                        let { userId: t, videoStreamId: n } = e;
                        return M.default.getId() === t && null == n;
                    })
                    .map((e) => ({ type: _.iy.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM, ...e })),
            makeErrorContextKey: (e) => `${e.mediaContext}:${e.userId}`,
        },
        [_.iy.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM]: {
            getActiveErrors: () =>
                Object.values(q.A.getTimedoutVideos())
                    .filter((e) => {
                        let { userId: t, videoStreamId: n } = e;
                        return M.default.getId() !== t && null == n;
                    })
                    .map((e) => ({ type: _.iy.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM, ...e })),
            makeErrorContextKey: (e) => `${e.mediaContext}:${e.userId}`,
        },
        [_.iy.CAMERA_SEND_LOW_FPS]: {
            getActiveErrors: () => {
                let e = T.A.getRTCConnection();
                if (null == e) return null;
                let t = e.getMediaEngineConnectionId();
                if (null == t || !p.Ay.isVideoEnabled()) return null;
                let n = T.A.getLastNonZeroRemoteVideoSinkWantsTime();
                if ((null != n && performance.now() - n < B) || !e.hasActiveRemoteWants()) return null;
                let i = V(t, M.default.getId());
                return null == i
                    ? null
                    : i.short.frameRate < 10 || i.long.frameRate < 10
                      ? [{ type: _.iy.CAMERA_SEND_LOW_FPS, userId: M.default.getId(), ...(0, k.jY)() }]
                      : void 0;
            },
            makeErrorContextKey: (e) => `${e.mediaSessionId}`,
        },
    },
    Q = new s.A("AVErrorManager");
function J(e, t) {
    let n = new Set();
    for (let i of e) t.has(i) || n.add(i);
    return n;
}
class Z extends r.A {
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
        let s = P.A.getActiveErrors();
        if (!(s instanceof Map))
            return void Q.error(`existingErrors is not a Map: ${s} type: ${Object.prototype.toString.call(s)}`);
        if (0 === r.size && 0 === s.size) return;
        let d = new Set(r.keys()),
            u = new Set(s.keys());
        if (d.size > u.size)
            for (let e of J(d, u)) {
                let t = r.get(e);
                null != t && (0, _.QW)(t);
            }
        if (u.size > d.size)
            for (let e of J(u, d)) {
                let t = s.get(e);
                if (null != t) {
                    let { type: e, ...n } = t;
                    Q.info(`Error resolved: ${e} ${JSON.stringify(n)}`);
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
                    r = (0, _.B1)(e),
                    s = ((i = o.A.getVoiceChannelId()), ("channelId" in t ? t.channelId : void 0) ?? i ?? null),
                    a = A.A.getChannel(s),
                    l = "streamKey" in t ? t.streamKey : void 0,
                    d = "mediaContext" in t ? t.mediaContext : void 0,
                    P = "underlyingError" in t ? t.underlyingError : void 0,
                    b = "errorMessage" in t ? t.errorMessage : void 0,
                    k = "mediaSessionId" in t ? t.mediaSessionId : void 0,
                    U = "rtcConnectionId" in t ? t.rtcConnectionId : void 0,
                    M = "videoCodec" in t ? t.videoCodec : void 0,
                    G = "videoEncoder" in t ? t.videoEncoder : void 0,
                    x = "videoDecoder" in t ? t.videoDecoder : void 0,
                    V = "audioCaptureSampleRateMismatchPercent" in t ? t.audioCaptureSampleRateMismatchPercent : void 0,
                    F = "audioInputDeviceName" in t ? t.audioInputDeviceName : void 0,
                    B = "audioOutputDeviceName" in t ? t.audioOutputDeviceName : void 0,
                    H = "videoDeviceName" in t ? t.videoDeviceName : void 0,
                    Y = "userId" in t ? t.userId : void 0,
                    W = null != l ? (0, m.Iy)(l) : null,
                    K = null != l ? N.A.getRTCConnection(l) : null,
                    j = null != l ? K : T.A.getRTCConnection(),
                    $ = null != l ? K?.analyticsContext?.streamApplication : null,
                    { resolution: z, fps: q } = I.A.getState(),
                    { gameName: X, gameId: Q, exe: J, distributor: Z } = (0, h.wH)($),
                    ee = r.isErrorOutbound,
                    et = d ?? D.x.DEFAULT,
                    en = null != W ? W.ownerId : Y,
                    ei = null != K ? K?.getVoiceParticipantType() : ee ? "sender" : "receiver",
                    er = j?.getMediaEngineConnectionId() ?? null;
                (n =
                    null != l && null != W
                        ? ee
                            ? j?.getOutboundStats()?.find((e) => e.quality === D.Y4)
                            : j?.getInboundStats(W.ownerId)
                        : ee
                          ? (u().maxBy(j?.getOutboundStats() ?? [], (e) => e.num_frames) ?? null)
                          : null != en
                            ? j?.getInboundStats(en)
                            : null),
                    (0, g.w)().then((t) => {
                        let i = {
                            error_name: e.valueOf(),
                            error_code: r.errorCode,
                            error_severity: r.severity,
                            error_category: r.category,
                            underlying_error: P ?? null,
                            error_message: b ?? null,
                            guild_id: a?.guild_id ?? null,
                            channel_id: s ?? null,
                            channel_type: a?.type ?? null,
                            rtc_connection_id: U ?? null,
                            media_session_id: k ?? T.A.getMediaSessionId() ?? null,
                            parent_media_session_id: K?.parentMediaSessionId ?? null,
                            context: d ?? null,
                            voice_backend_version: T.A.getRTCConnection()?.getVoiceVersion() ?? null,
                            rtc_worker_backend_version: T.A.getRTCConnection()?.getRtcWorkerVersion() ?? null,
                            guild_region: S.A.getRegion(T.A.getHostname()) ?? null,
                            hostname: T.A.getHostname() ?? null,
                            duration: j?.getDurationSeconds() ?? null,
                            participant_type: ei ?? null,
                            num_frames: n?.num_frames ?? 0,
                            num_packets: n?.num_packets ?? 0,
                            num_bytes: n?.num_bytes ?? 0,
                            num_packets_lost: w(ee, er, en)?.packetsLost ?? 0,
                            video_codec: M ?? (0, c.aV)(w(ee, er, en)?.codec.name) ?? null,
                            video_encoder: G ?? (0, c.kZ)(L(er)?.encoderImplementationName) ?? null,
                            video_decoder: x ?? (0, c.s7)(v(er, en)?.decoderImplementationName) ?? null,
                            audio_capture_sample_rate_mismatch_percent: V ?? null,
                            incoming_video_stopped_for_occlusion: !E.X.isIncomingVideoEnabled(),
                            bitrate: w(ee, er, en)?.bitrate ?? null,
                            target_bitrate: ee ? (L(er)?.bitrateTarget ?? null) : null,
                            fps: (ee ? (L(et)?.frameRateEncode ?? null) : (v(et, en)?.frameRateDecode ?? null)) ?? null,
                            target_fps: et === D.x.STREAM && ee ? q : null,
                            sender_user_id: W?.ownerId ?? null,
                            stream_region: K?.getRegion() ?? null,
                            stream_source_type: ee ? (K?.analyticsContext?.streamSourceType ?? null) : null,
                            num_stream_viewers: K?.analyticsContext?.numViewers ?? null,
                            video_input_resolution_height: ee ? (z ?? null) : null,
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
                            share_application_id: Q ?? null,
                            share_application_executable: J ?? null,
                            share_application_distributor: Z ?? null,
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
                            cpu_usage: C.A.getCurrentCPUUsagePercent() ?? null,
                            memory_usage: C.A.getCurrentMemoryUsageKB() ?? null,
                            outbound_bitrate_estimate:
                                f.A.getConnectionStats(er)?.stats.transport.outboundBitrateEstimate ?? null,
                            inbound_bitrate_estimate:
                                f.A.getConnectionStats(er)?.stats.transport.inboundBitrateEstimate ?? null,
                            hardware_enabled: p.Ay.getHardwareEncoding(),
                            audio_input_device_name: F ?? p.Ay.getInputDevices()[p.Ay.getInputDeviceId()]?.name,
                            audio_output_device_name: B ?? p.Ay.getOutputDevices()[p.Ay.getOutputDeviceId()]?.name,
                            video_device_name: H ?? p.Ay.getVideoDevices()[p.Ay.getVideoDeviceId()]?.name,
                            audio_subsystem: p.Ay.getMediaEngine().getAudioSubsystem(),
                            automatic_audio_subsystem: p.Ay.getSettings().automaticAudioSubsystem,
                            audio_layer: p.Ay.getMediaEngine().getAudioLayer(),
                            audio_input_mode: p.Ay.getSettings().mode,
                            automatic_audio_input_sensitivity_enabled: p.Ay.getSettings().modeOptions.autoThreshold,
                            audio_input_sensitivity: p.Ay.getSettings().modeOptions.threshold,
                            echo_cancellation_enabled: p.Ay.getEchoCancellation(),
                            noise_suppression_enabled: p.Ay.getNoiseSuppression(),
                            noise_cancellation_enabled: p.Ay.getNoiseCancellation(),
                            automatic_gain_control_enabled: p.Ay.getAutomaticGainControl(),
                            sidechain_compression_enabled: p.Ay.getSidechainCompression(),
                            input_volume: p.Ay.getInputVolume(),
                            output_volume: p.Ay.getOutputVolume(),
                            audio_input_device_count: Object.keys(p.Ay.getInputDevices()).length,
                            audio_output_device_count: Object.keys(p.Ay.getOutputDevices()).length,
                            app_hardware_acceleration_enabled: R.A.getAppHardwareAccelerationEnabled(),
                            input_device_os_muted: p.Ay.getInputDeviceOSMuted() ?? null,
                            input_device_os_volume: p.Ay.getInputDeviceOSVolume() ?? null,
                        };
                        O.default.track(y.HAw.AV_ERROR_REPORTED, i);
                    });
            })(t, n);
    }
}
let ee = new Z();
