n.d(t, {
    hp: () => S,
    kr: () => O,
    u: () => E
}),
    n(47120),
    n(411104),
    n(26686);
var r = n(570140),
    i = n(710845),
    o = n(569545),
    a = n(361291),
    s = n(592125),
    l = n(131951),
    c = n(19780),
    u = n(936349),
    d = n(944486),
    f = n(959457),
    _ = n(704806),
    p = n(626135),
    h = n(848479),
    g = n(981631);
let m = new i.Z('AVError');
var E = (function (e) {
    return (e.STREAM_FAILED_TO_START = 'stream-failed-to-start'), (e.NO_INPUT_DEVICES = 'no-input-devices'), (e.NO_AUDIO_INPUT_DETECTED = 'no-audio-input-detected'), (e.DEBUG_LOG_UPLOAD_FAILED = 'debug-log-upload-failed'), (e.STREAM_VIEW_LOW_FPS = 'stream-view-low-fps'), (e.STREAM_VIEW_HIGH_PACKET_LOSS = 'stream-view-high-packet-loss'), (e.STREAM_SEND_LOW_FPS = 'stream-send-low-encode-fps'), (e.STREAM_SEND_HIGH_PACKET_LOSS = 'stream-send-high-packet-loss'), (e.STREAM_BAD_NETWORK_QUALITY = 'stream-send-network-quality'), (e.STREAM_SOUNDSHARE_FAILED = 'stream-soundshare-failed'), e;
})({});
let v = {
    'stream-soundshare-failed': {
        errorCode: 1001,
        severity: 'warning',
        category: 'audio'
    },
    'stream-failed-to-start': {
        errorCode: 2001,
        severity: 'critical',
        category: 'video'
    },
    'stream-view-low-fps': {
        errorCode: 2002,
        severity: 'warning',
        category: 'video'
    },
    'stream-view-high-packet-loss': {
        errorCode: 2003,
        severity: 'warning',
        category: 'video'
    },
    'stream-send-high-packet-loss': {
        errorCode: 2004,
        severity: 'warning',
        category: 'video'
    },
    'stream-send-low-encode-fps': {
        errorCode: 2005,
        severity: 'warning',
        category: 'video'
    },
    'stream-send-network-quality': {
        errorCode: 2006,
        severity: 'warning',
        category: 'video'
    },
    'no-input-devices': {
        errorCode: 3001,
        severity: 'critical',
        category: 'devices'
    },
    'no-audio-input-detected': {
        errorCode: 3002,
        severity: 'critical',
        category: 'devices'
    },
    'debug-log-upload-failed': {
        errorCode: 4001,
        severity: 'info',
        category: 'debug'
    }
};
var b = (function (e) {
    return (e.Unknown = 'Unknown'), (e.UploadErrorGeneral = 'UploadErrorCodes.GENERAL'), (e.UploadErrorNoFile = 'UploadErrorCodes.NO_FILE'), (e.UploadErrorProgress = 'UploadErrorCodes.PROGRESS'), (e.UploadErrorUpload = 'UploadErrorCodes.UPLOAD'), (e.UploadErrorRead = 'UploadErrorCodes.READ'), e;
})({});
function y(e, t) {
    var n;
    let r = null !== (n = t.channelId) && void 0 !== n ? n : d.Z.getVoiceChannelId(),
        i = s.Z.getChannel(r),
        m = null != t.streamKey ? (0, o.my)(t.streamKey) : null,
        E = null != t.streamKey ? f.Z.getRTCConnection(t.streamKey) : null,
        { resolution: b, fps: y } = a.Z.getState();
    (0, _.q)().then((n) => {
        var o, a, s, d, f, _, O, S, I, T, N, A, C, R, P, D, w, L, x, M, k, j, U, G, B, V, F, Z, H, W, Y, K, z, q, Q, X, J;
        let $ = {
            error_name: e.valueOf(),
            error_code: v[e].errorCode,
            error_severity: v[e].severity,
            error_category: v[e].category,
            underlying_error: null !== (I = t.underlyingError) && void 0 !== I ? I : null,
            error_message: null !== (T = t.errorMessage) && void 0 !== T ? T : null,
            guild_id: null !== (N = null == i ? void 0 : i.guild_id) && void 0 !== N ? N : null,
            channel_id: null != r ? r : null,
            channel_type: null !== (A = null == i ? void 0 : i.type) && void 0 !== A ? A : null,
            rtc_connection_id: null !== (C = t.rtcConnectionId) && void 0 !== C ? C : null,
            media_session_id: null !== (P = null !== (R = t.mediaSessionId) && void 0 !== R ? R : c.Z.getMediaSessionId()) && void 0 !== P ? P : null,
            parent_media_session_id: null !== (D = t.parentMediaSessionId) && void 0 !== D ? D : null,
            context: null !== (w = t.mediaContext) && void 0 !== w ? w : null,
            voice_backend_version: null !== (L = null === (o = c.Z.getRTCConnection()) || void 0 === o ? void 0 : o.getVoiceVersion()) && void 0 !== L ? L : null,
            rtc_worker_backend_version: null !== (x = null === (a = c.Z.getRTCConnection()) || void 0 === a ? void 0 : a.getRtcWorkerVersion()) && void 0 !== x ? x : null,
            guild_region: null !== (M = u.Z.getRegion(c.Z.getHostname())) && void 0 !== M ? M : null,
            hostname: null !== (k = c.Z.getHostname()) && void 0 !== k ? k : null,
            duration: null !== (j = null != t.streamKey ? (null == E ? void 0 : E.getDurationSeconds()) : null === (s = c.Z.getRTCConnection()) || void 0 === s ? void 0 : s.getDurationSeconds()) && void 0 !== j ? j : null,
            sender_user_id: null !== (U = null == m ? void 0 : m.ownerId) && void 0 !== U ? U : null,
            stream_region: null !== (G = null == E ? void 0 : E.getRegion()) && void 0 !== G ? G : null,
            stream_source_type: null !== (B = null == E ? void 0 : null === (d = E.analyticsContext) || void 0 === d ? void 0 : d.streamSourceType) && void 0 !== B ? B : null,
            num_stream_viewers: null !== (V = null == E ? void 0 : null === (f = E.analyticsContext) || void 0 === f ? void 0 : f.numViewers) && void 0 !== V ? V : null,
            video_input_resolution_height: null != b ? b : null,
            video_input_frame_rate: null != y ? y : null,
            cpu_brand: null !== (F = null == n ? void 0 : n.cpu_brand) && void 0 !== F ? F : null,
            cpu_vendor: null !== (Z = null == n ? void 0 : n.cpu_vendor) && void 0 !== Z ? Z : null,
            cpu_memory: null !== (H = null == n ? void 0 : n.cpu_memory) && void 0 !== H ? H : null,
            gpu_brand: null !== (W = null == n ? void 0 : n.gpu_brand) && void 0 !== W ? W : null,
            gpu_count: null !== (Y = null == n ? void 0 : n.gpu_count) && void 0 !== Y ? Y : null,
            gpu_memory: null !== (K = null == n ? void 0 : n.gpu_memory) && void 0 !== K ? K : null,
            cpu_usage: null !== (z = h.Z.getCurrentCPUUsagePercent()) && void 0 !== z ? z : null,
            memory_usage: null !== (q = h.Z.getCurrentMemoryUsageKB()) && void 0 !== q ? q : null,
            hardware_enabled: l.Z.getHardwareEncoding(),
            audio_input_device_name: null !== (Q = t.audioInputDeviceName) && void 0 !== Q ? Q : null === (_ = l.Z.getInputDevices()[l.Z.getInputDeviceId()]) || void 0 === _ ? void 0 : _.name,
            audio_output_device_name: null !== (X = t.audioOutputDeviceName) && void 0 !== X ? X : null === (O = l.Z.getOutputDevices()[l.Z.getOutputDeviceId()]) || void 0 === O ? void 0 : O.name,
            video_device_name: null !== (J = t.videoDeviceName) && void 0 !== J ? J : null === (S = l.Z.getVideoDevices()[l.Z.getVideoDeviceId()]) || void 0 === S ? void 0 : S.name,
            audio_subsystem: l.Z.getMediaEngine().getAudioSubsystem(),
            automatic_audio_subsystem: l.Z.getSettings().automaticAudioSubsystem,
            audio_layer: l.Z.getMediaEngine().getAudioLayer(),
            audio_input_mode: l.Z.getSettings().mode,
            automatic_audio_input_sensitivity_enabled: l.Z.getSettings().modeOptions.autoThreshold,
            audio_input_sensitivity: l.Z.getSettings().modeOptions.threshold,
            echo_cancellation_enabled: l.Z.getEchoCancellation(),
            noise_suppression_enabled: l.Z.getNoiseSuppression(),
            noise_cancellation_enabled: l.Z.getNoiseCancellation(),
            automatic_gain_control_enabled: l.Z.getAutomaticGainControl(),
            sidechain_compression_enabled: l.Z.getSidechainCompression(),
            input_volume: l.Z.getInputVolume(),
            output_volume: l.Z.getOutputVolume()
        };
        p.default.track(g.rMx.AV_ERROR_REPORTED, $);
    });
}
function O(e, t) {
    if (null != t.underlyingError && !Object.values(b).includes(t.underlyingError)) {
        m.error("Invalid underlying error string '".concat(t.underlyingError, "', must be member of AVUnderlyingError"));
        return;
    }
    m.error('AV error reported: '.concat(e, ' ').concat(JSON.stringify(t)));
    let n = v[e];
    r.Z.dispatch({
        type: 'REPORT_AV_ERROR',
        error: e,
        errorCode: n.errorCode,
        severity: n.severity,
        category: n.category,
        context: t
    }),
        y(e, t);
}
function S(e) {
    return v[e];
}
!(function () {
    let e = Object.values(v).map((e) => e.errorCode),
        t = new Set(e);
    if (e.length !== t.size) {
        let t = e.filter((t, n) => e.indexOf(t) !== n),
            n = Object.entries(v)
                .filter((e) => {
                    let [n, r] = e;
                    return t.includes(r.errorCode);
                })
                .map((e) => {
                    let [t, n] = e;
                    return ''.concat(t, ': ').concat(n.errorCode);
                });
        throw Error('Duplicate AV error codes found:\n'.concat(n.join('\n')));
    }
})();
