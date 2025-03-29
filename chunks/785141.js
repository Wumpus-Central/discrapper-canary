n.d(t, {
    Nk: () => c,
    hp: () => d,
    kr: () => u,
    u: () => s
}),
    n(47120),
    n(411104),
    n(26686);
var r = n(570140);
function i(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = o(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function o(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let a = new (n(710845).Z)('AVError');
var s = (function (e) {
    return (e.STREAM_FAILED_TO_START = 'stream-failed-to-start'), (e.NO_INPUT_DEVICES = 'no-input-devices'), (e.NO_AUDIO_INPUT_DETECTED = 'no-audio-input-detected'), (e.DEBUG_LOG_UPLOAD_FAILED = 'debug-log-upload-failed'), (e.STREAM_VIEW_LOW_FPS = 'stream-view-low-fps'), (e.STREAM_VIEW_HIGH_PACKET_LOSS = 'stream-view-high-packet-loss'), (e.STREAM_SEND_LOW_FPS = 'stream-send-low-encode-fps'), (e.STREAM_SEND_HIGH_PACKET_LOSS = 'stream-send-high-packet-loss'), (e.STREAM_BAD_NETWORK_QUALITY = 'stream-send-network-quality'), (e.STREAM_SOUNDSHARE_FAILED = 'stream-soundshare-failed'), (e.NOISE_CANCELLER_ERROR = 'noise-canceller-error'), (e.SCREENSHARE_OS_NOT_SUPPORTED = 'screenshare-min-os-requirement'), (e.STREAM_RECONNECTING = 'stream-reconnecting'), (e.VIDEO_DECODE_ERROR = 'video-decode-error'), (e.VIDEO_ENCODE_ERROR = 'video-encode-error'), (e.STREAM_FULL = 'stream-full'), (e.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH = 'audio-capture-sample-rate-mismatch'), (e.VIDEO_STREAM_SENDER_READY_TIMEOUT = 'video-stream-sender-ready-timeout'), (e.VIDEO_STREAM_RECEIVER_READY_TIMEOUT = 'video-stream-receiver-ready-timeout'), e;
})({});
let l = {
    'stream-soundshare-failed': {
        errorCode: 1001,
        severity: 'warning',
        category: 'audio',
        isErrorOutbound: !0
    },
    'noise-canceller-error': {
        errorCode: 1002,
        severity: 'warning',
        category: 'audio',
        isErrorOutbound: !0
    },
    'audio-capture-sample-rate-mismatch': {
        errorCode: 1003,
        severity: 'warning',
        category: 'audio',
        isErrorOutbound: !0
    },
    'stream-failed-to-start': {
        errorCode: 2001,
        severity: 'critical',
        category: 'video',
        isErrorOutbound: !0
    },
    'stream-view-low-fps': {
        errorCode: 2002,
        severity: 'warning',
        category: 'video',
        isErrorOutbound: !1
    },
    'stream-view-high-packet-loss': {
        errorCode: 2003,
        severity: 'warning',
        category: 'video',
        isErrorOutbound: !1
    },
    'stream-send-high-packet-loss': {
        errorCode: 2004,
        severity: 'warning',
        category: 'video',
        isErrorOutbound: !0
    },
    'stream-send-low-encode-fps': {
        errorCode: 2005,
        severity: 'warning',
        category: 'video',
        isErrorOutbound: !0
    },
    'stream-send-network-quality': {
        errorCode: 2006,
        severity: 'warning',
        category: 'video',
        isErrorOutbound: !0
    },
    'stream-reconnecting': {
        errorCode: 2007,
        severity: 'warning',
        category: 'video',
        isErrorOutbound: !1
    },
    'video-decode-error': {
        errorCode: 2008,
        severity: 'warning',
        category: 'video',
        isErrorOutbound: !1
    },
    'video-encode-error': {
        errorCode: 2009,
        severity: 'warning',
        category: 'video',
        isErrorOutbound: !0
    },
    'stream-full': {
        errorCode: 2010,
        severity: 'critical',
        category: 'video',
        isErrorOutbound: !1
    },
    'video-stream-sender-ready-timeout': {
        errorCode: 2011,
        severity: 'critical',
        category: 'video',
        isErrorOutbound: !0
    },
    'video-stream-receiver-ready-timeout': {
        errorCode: 2012,
        severity: 'critical',
        category: 'video',
        isErrorOutbound: !1
    },
    'no-input-devices': {
        errorCode: 3001,
        severity: 'critical',
        category: 'devices',
        isErrorOutbound: !0
    },
    'no-audio-input-detected': {
        errorCode: 3002,
        severity: 'critical',
        category: 'devices',
        isErrorOutbound: !0
    },
    'screenshare-min-os-requirement': {
        errorCode: 3003,
        severity: 'critical',
        category: 'devices',
        isErrorOutbound: !0
    },
    'debug-log-upload-failed': {
        errorCode: 4001,
        severity: 'info',
        category: 'debug',
        isErrorOutbound: !0
    }
};
var c = (function (e) {
    return (e.Unknown = 'Unknown'), (e.UploadErrorGeneral = 'UploadErrorCodes.GENERAL'), (e.UploadErrorNoFile = 'UploadErrorCodes.NO_FILE'), (e.UploadErrorProgress = 'UploadErrorCodes.PROGRESS'), (e.UploadErrorUpload = 'UploadErrorCodes.UPLOAD'), (e.UploadErrorRead = 'UploadErrorCodes.READ'), (e.NoiseCancellerCpuOveruse = 'NoiseCancellerError.CPU_OVERUSE'), (e.NoiseCancellerFailed = 'NoiseCancellerError.FAILED'), (e.NoiseCancellerVadCpuOveruse = 'NoiseCancellerError.VAD_CPU_OVERUSE'), e;
})({});
function u(e) {
    let { type: t } = e,
        n = i(e, ['type']);
    a.error('AV error reported: '.concat(t, ' ').concat(JSON.stringify(n)));
    let o = l[t];
    r.Z.dispatch({
        type: 'REPORT_AV_ERROR',
        error: t,
        errorCode: o.errorCode,
        severity: o.severity,
        category: o.category,
        context: e
    });
}
function d(e) {
    return l[e];
}
!(function () {
    let e = Object.values(l).map((e) => e.errorCode),
        t = new Set(e);
    if (e.length !== t.size) {
        let t = e.filter((t, n) => e.indexOf(t) !== n),
            n = Object.entries(l)
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
