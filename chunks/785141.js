n.d(t, {
    hp: () => E,
    kr: () => m,
    u: () => _
}),
    n(47120),
    n(411104),
    n(26686);
var r = n(570140),
    i = n(710845),
    o = n(569545),
    a = n(592125),
    s = n(131951),
    l = n(19780),
    c = n(944486),
    u = n(626135),
    d = n(981631);
let f = new i.Z('AVError');
var _ = (function (e) {
    return (e.STREAM_FAILED_TO_START = 'stream-failed-to-start'), (e.NO_INPUT_DEVICES = 'no-input-devices'), (e.NO_AUDIO_INPUT_DETECTED = 'no-audio-input-detected'), (e.DEBUG_LOG_UPLOAD_FAILED = 'debug-log-upload-failed'), (e.STREAM_VIEW_LOW_FPS = 'stream-view-low-fps'), (e.STREAM_VIEW_HIGH_PACKET_LOSS = 'stream-view-high-packet-loss'), (e.STREAM_SEND_LOW_FPS = 'stream-send-low-encode-fps'), (e.STREAM_SEND_HIGH_PACKET_LOSS = 'stream-send-high-packet-loss'), (e.STREAM_BAD_NETWORK_QUALITY = 'stream-send-network-quality'), (e.STREAM_SOUNDSHARE_FAILED = 'stream-soundshare-failed'), e;
})({});
let p = {
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
var h = (function (e) {
    return (e.Unknown = 'Unknown'), (e.UploadErrorGeneral = 'UploadErrorCodes.GENERAL'), (e.UploadErrorNoFile = 'UploadErrorCodes.NO_FILE'), (e.UploadErrorProgress = 'UploadErrorCodes.PROGRESS'), (e.UploadErrorUpload = 'UploadErrorCodes.UPLOAD'), (e.UploadErrorRead = 'UploadErrorCodes.READ'), e;
})({});
function g(e, t) {
    var n, r, i, f, _, h, g, m, E, v, b, y, O, S, I, T, N, A, C, R, P;
    let D = null !== (h = t.channelId) && void 0 !== h ? h : c.Z.getVoiceChannelId(),
        w = a.Z.getChannel(D),
        L = null != t.streamKey ? (0, o.my)(t.streamKey) : null,
        x = {
            error_name: e.valueOf(),
            error_code: p[e].errorCode,
            error_severity: p[e].severity,
            error_category: p[e].category,
            underlying_error: null !== (g = t.underlyingError) && void 0 !== g ? g : null,
            error_message: null !== (m = t.errorMessage) && void 0 !== m ? m : null,
            guild_id: null !== (E = null == w ? void 0 : w.guild_id) && void 0 !== E ? E : null,
            channel_id: null != D ? D : null,
            channel_type: null !== (v = null == w ? void 0 : w.type) && void 0 !== v ? v : null,
            rtc_connection_id: null !== (b = t.rtcConnectionId) && void 0 !== b ? b : null,
            media_session_id: null !== (O = null !== (y = t.mediaSessionId) && void 0 !== y ? y : l.Z.getMediaSessionId()) && void 0 !== O ? O : null,
            parent_media_session_id: null !== (S = t.parentMediaSessionId) && void 0 !== S ? S : null,
            context: null !== (I = t.mediaContext) && void 0 !== I ? I : null,
            voice_backend_version: null !== (T = null === (n = l.Z.getRTCConnection()) || void 0 === n ? void 0 : n.getVoiceVersion()) && void 0 !== T ? T : null,
            rtc_worker_backend_version: null !== (N = null === (r = l.Z.getRTCConnection()) || void 0 === r ? void 0 : r.getRtcWorkerVersion()) && void 0 !== N ? N : null,
            hardware_enabled: s.Z.getHardwareEncoding(),
            audio_input_device_name: null !== (A = t.audioInputDeviceName) && void 0 !== A ? A : null === (i = s.Z.getInputDevices()[s.Z.getInputDeviceId()]) || void 0 === i ? void 0 : i.name,
            audio_output_device_name: null !== (C = t.audioOutputDeviceName) && void 0 !== C ? C : null === (f = s.Z.getOutputDevices()[s.Z.getOutputDeviceId()]) || void 0 === f ? void 0 : f.name,
            video_device_name: null !== (R = t.videoDeviceName) && void 0 !== R ? R : null === (_ = s.Z.getVideoDevices()[s.Z.getVideoDeviceId()]) || void 0 === _ ? void 0 : _.name,
            audio_subsystem: s.Z.getMediaEngine().getAudioSubsystem(),
            audio_layer: s.Z.getMediaEngine().getAudioLayer(),
            audio_input_mode: s.Z.getSettings().mode,
            automatic_audio_input_sensitivity_enabled: s.Z.getSettings().modeOptions.autoThreshold,
            audio_input_sensitivity: s.Z.getSettings().modeOptions.threshold,
            echo_cancellation_enabled: s.Z.getEchoCancellation(),
            noise_suppression_enabled: s.Z.getNoiseSuppression(),
            noise_cancellation_enabled: s.Z.getNoiseCancellation(),
            automatic_gain_control_enabled: s.Z.getAutomaticGainControl(),
            sidechain_compression_enabled: s.Z.getSidechainCompression(),
            input_volume: s.Z.getInputVolume(),
            output_volume: s.Z.getOutputVolume(),
            sender_user_id: null !== (P = null == L ? void 0 : L.ownerId) && void 0 !== P ? P : null
        };
    u.default.track(d.rMx.AV_ERROR_REPORTED, x);
}
function m(e, t) {
    if (null != t.underlyingError && !Object.values(h).includes(t.underlyingError)) {
        f.error("Invalid underlying error string '".concat(t.underlyingError, "', must be member of AVUnderlyingError"));
        return;
    }
    f.error('AV error reported: '.concat(e, ' ').concat(JSON.stringify(t)));
    let n = p[e];
    r.Z.dispatch({
        type: 'REPORT_AV_ERROR',
        error: e,
        errorCode: n.errorCode,
        severity: n.severity,
        category: n.category,
        context: t
    }),
        g(e, t);
}
function E(e) {
    return p[e];
}
!(function () {
    let e = Object.values(p).map((e) => e.errorCode),
        t = new Set(e);
    if (e.length !== t.size) {
        let t = e.filter((t, n) => e.indexOf(t) !== n),
            n = Object.entries(p)
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
