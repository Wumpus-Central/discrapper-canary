n.d(t, {
    hp: () => d,
    kr: () => u,
    u: () => s
}),
    n(47120),
    n(411104),
    n(26686);
var r = n(570140),
    i = n(710845),
    o = n(38055);
let a = new i.Z('AVError');
var s = (function (e) {
    return (e.STREAM_FAILED_TO_START = 'stream-failed-to-start'), (e.NO_INPUT_DEVICES = 'no-input-devices'), (e.NO_AUDIO_INPUT_DETECTED = 'no-audio-input-detected'), (e.DEBUG_LOG_UPLOAD_FAILED = 'debug-log-upload-failed'), (e.STREAM_VIEW_LOW_FPS = 'stream-view-low-fps'), (e.STREAM_VIEW_HIGH_PACKET_LOSS = 'stream-view-high-packet-loss'), (e.STREAM_SEND_LOW_FPS = 'stream-send-low-encode-fps'), (e.STREAM_SEND_HIGH_PACKET_LOSS = 'stream-send-high-packet-loss'), (e.STREAM_BAD_NETWORK_QUALITY = 'stream-send-network-quality'), (e.STREAM_SOUNDSHARE_FAILED = 'stream-soundshare-failed'), e;
})({});
let l = {
    'stream-soundshare-failed': {
        errorCode: 1001,
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
    'debug-log-upload-failed': {
        errorCode: 4001,
        severity: 'info',
        category: 'debug',
        isErrorOutbound: !0
    }
};
var c = (function (e) {
    return (e.Unknown = 'Unknown'), (e.UploadErrorGeneral = 'UploadErrorCodes.GENERAL'), (e.UploadErrorNoFile = 'UploadErrorCodes.NO_FILE'), (e.UploadErrorProgress = 'UploadErrorCodes.PROGRESS'), (e.UploadErrorUpload = 'UploadErrorCodes.UPLOAD'), (e.UploadErrorRead = 'UploadErrorCodes.READ'), e;
})({});
function u(e, t) {
    if (null != t.underlyingError && !Object.values(c).includes(t.underlyingError)) {
        a.error("Invalid underlying error string '".concat(t.underlyingError, "', must be member of AVUnderlyingError"));
        return;
    }
    a.error('AV error reported: '.concat(e, ' ').concat(JSON.stringify(t)));
    let n = l[e];
    r.Z.dispatch({
        type: 'REPORT_AV_ERROR',
        error: e,
        errorCode: n.errorCode,
        severity: n.severity,
        category: n.category,
        context: t
    }),
        (0, o.b)(e, t);
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
