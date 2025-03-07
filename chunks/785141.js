n.d(t, {
    hp: () => U,
    kr: () => j,
    u: () => S
}),
    n(47120),
    n(411104),
    n(26686);
var r = n(392711),
    i = n.n(r),
    o = n(46973),
    a = n(570140),
    s = n(255914),
    l = n(710845),
    c = n(581567),
    u = n(569545),
    d = n(361291),
    f = n(592125),
    _ = n(131951),
    p = n(19780),
    h = n(936349),
    m = n(944486),
    g = n(959457),
    E = n(704806),
    v = n(626135),
    b = n(848479),
    y = n(981631),
    O = n(65154);
let I = new l.Z('AVError');
var S = (function (e) {
    return (e.STREAM_FAILED_TO_START = 'stream-failed-to-start'), (e.NO_INPUT_DEVICES = 'no-input-devices'), (e.NO_AUDIO_INPUT_DETECTED = 'no-audio-input-detected'), (e.DEBUG_LOG_UPLOAD_FAILED = 'debug-log-upload-failed'), (e.STREAM_VIEW_LOW_FPS = 'stream-view-low-fps'), (e.STREAM_VIEW_HIGH_PACKET_LOSS = 'stream-view-high-packet-loss'), (e.STREAM_SEND_LOW_FPS = 'stream-send-low-encode-fps'), (e.STREAM_SEND_HIGH_PACKET_LOSS = 'stream-send-high-packet-loss'), (e.STREAM_BAD_NETWORK_QUALITY = 'stream-send-network-quality'), (e.STREAM_SOUNDSHARE_FAILED = 'stream-soundshare-failed'), e;
})({});
let T = {
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
var N = (function (e) {
    return (e.Unknown = 'Unknown'), (e.UploadErrorGeneral = 'UploadErrorCodes.GENERAL'), (e.UploadErrorNoFile = 'UploadErrorCodes.NO_FILE'), (e.UploadErrorProgress = 'UploadErrorCodes.PROGRESS'), (e.UploadErrorUpload = 'UploadErrorCodes.UPLOAD'), (e.UploadErrorRead = 'UploadErrorCodes.READ'), e;
})({});
let A = [],
    C = [];
function R(e) {
    (C = A), (A = e);
}
function P(e) {
    var t, n;
    return null !== (n = null == A ? void 0 : null === (t = A.find((t) => t.connection.context === e)) || void 0 === t ? void 0 : t.stats.transport.outboundBitrateEstimate) && void 0 !== n ? n : null;
}
function w(e) {
    var t, n;
    return null !== (n = null === (t = A.find((t) => t.connection.context === e)) || void 0 === t ? void 0 : t.stats.transport.inboundBitrateEstimate) && void 0 !== n ? n : null;
}
function D() {
    if (0 === A.length || 0 === C.length) return null;
    let e = {};
    for (let s of ['videohookFrames', 'hybridDxgiFrames', 'hybridGdiFrames', 'hybridVideohookFrames', 'hybridGraphicsCaptureFrames', 'hybridGdiBitBltFrames', 'hybridGdiPrintWindowFrames', 'quartzFrames', 'screenCaptureKitFrames']) {
        var t, n, r, i, o, a;
        let l = null !== (o = null === (n = C.find((e) => e.connection.context === O.Yn.STREAM)) || void 0 === n ? void 0 : null === (t = n.stats.screenshare) || void 0 === t ? void 0 : t[s]) && void 0 !== o ? o : 0,
            c = null !== (a = null === (i = A.find((e) => e.connection.context === O.Yn.STREAM)) || void 0 === i ? void 0 : null === (r = i.stats.screenshare) || void 0 === r ? void 0 : r[s]) && void 0 !== a ? a : 0;
        e[s] = c - l;
    }
    let s = -1,
        l = null;
    for (let [t, n] of Object.entries(e)) n > s && ((s = n), (l = t));
    return s > 0 ? l : null;
}
function L(e) {
    let t = A.find((t) => t.connection.context === e);
    if (null == t) return null;
    let n = t.stats.rtp.outbound.find((e) => 'video' === e.type);
    return null == n ? null : (0, s.lG)(null == n ? void 0 : n.encoderImplementationName);
}
function x(e, t) {
    if (null == t) return null;
    let n = A.find((t) => t.connection.context === e);
    if (null == n) return null;
    let r = n.stats.rtp.inbound[t];
    if (null == r) return null;
    let i = r.find((e) => 'video' === e.type);
    return (0, s.z_)(null == i ? void 0 : i.decoderImplementationName);
}
function M(e, t, n) {
    var r, i, o;
    let a = null === (r = A.find((t) => t.connection.context === e)) || void 0 === r ? void 0 : r.stats.rtp,
        l = null;
    return t ? (l = null !== (i = null == a ? void 0 : a.outbound.find((e) => 'video' === e.type)) && void 0 !== i ? i : null) : null != n && (l = null !== (o = null == a ? void 0 : a.inbound[n].find((e) => 'video' === e.type)) && void 0 !== o ? o : null), (0, s.bU)(null == l ? void 0 : l.codec.name);
}
function k(e, t) {
    var n, r, o, a, s, l;
    let I;
    let S = null !== (r = t.channelId) && void 0 !== r ? r : m.Z.getVoiceChannelId(),
        N = f.Z.getChannel(S),
        A = null != t.streamKey ? (0, u.my)(t.streamKey) : null,
        C = null != t.streamKey ? g.Z.getRTCConnection(t.streamKey) : null,
        R = null != t.streamKey ? C : p.Z.getRTCConnection(),
        k = null != t.streamKey ? (null == C ? void 0 : null === (n = C.analyticsContext) || void 0 === n ? void 0 : n.streamApplication) : null,
        { resolution: j, fps: U } = d.Z.getState(),
        { gameName: G, gameId: B, exe: V, distributor: F } = (0, c.G8)(k),
        Z = T[e].isErrorOutbound,
        H = null !== (o = t.mediaContext) && void 0 !== o ? o : O.Yn.DEFAULT,
        W = null != A ? A.ownerId : t.userId,
        Y = null != A ? (null == R ? void 0 : R.getVoiceParticipantType()) : Z ? 'sender' : 'receiver';
    (I = null != t.streamKey && null != A ? (Z ? (null == R ? void 0 : null === (a = R.getOutboundStats()) || void 0 === a ? void 0 : a.find((e) => e.quality === O.y7)) : null == R ? void 0 : R.getInboundStats(A.ownerId)) : Z ? (null !== (l = i().maxBy(null !== (s = null == R ? void 0 : R.getOutboundStats()) && void 0 !== s ? s : [], (e) => e.num_frames)) && void 0 !== l ? l : null) : null != t.userId ? (null == R ? void 0 : R.getInboundStats(t.userId)) : null),
        (0, E.q)().then((n) => {
            var r, i, o, a, s, l, c, u, d, f, m, g, E, O, k, K, z, q, Q, X, J, $, ee, et, en, er, ei, eo, ea, es, el, ec, eu, ed, ef, e_, ep, eh, em, eg, eE;
            let ev = {
                error_name: e.valueOf(),
                error_code: T[e].errorCode,
                error_severity: T[e].severity,
                error_category: T[e].category,
                underlying_error: null !== (u = t.underlyingError) && void 0 !== u ? u : null,
                error_message: null !== (d = t.errorMessage) && void 0 !== d ? d : null,
                guild_id: null !== (f = null == N ? void 0 : N.guild_id) && void 0 !== f ? f : null,
                channel_id: null != S ? S : null,
                channel_type: null !== (m = null == N ? void 0 : N.type) && void 0 !== m ? m : null,
                rtc_connection_id: null !== (g = t.rtcConnectionId) && void 0 !== g ? g : null,
                media_session_id: null !== (O = null !== (E = t.mediaSessionId) && void 0 !== E ? E : p.Z.getMediaSessionId()) && void 0 !== O ? O : null,
                parent_media_session_id: null !== (k = t.parentMediaSessionId) && void 0 !== k ? k : null,
                context: null !== (K = t.mediaContext) && void 0 !== K ? K : null,
                voice_backend_version: null !== (z = null === (r = p.Z.getRTCConnection()) || void 0 === r ? void 0 : r.getVoiceVersion()) && void 0 !== z ? z : null,
                rtc_worker_backend_version: null !== (q = null === (i = p.Z.getRTCConnection()) || void 0 === i ? void 0 : i.getRtcWorkerVersion()) && void 0 !== q ? q : null,
                guild_region: null !== (Q = h.Z.getRegion(p.Z.getHostname())) && void 0 !== Q ? Q : null,
                hostname: null !== (X = p.Z.getHostname()) && void 0 !== X ? X : null,
                duration: null !== (J = null == R ? void 0 : R.getDurationSeconds()) && void 0 !== J ? J : null,
                participant_type: null != Y ? Y : null,
                num_frames: null !== ($ = null == I ? void 0 : I.num_frames) && void 0 !== $ ? $ : 0,
                num_packets: null !== (ee = null == I ? void 0 : I.num_packets) && void 0 !== ee ? ee : 0,
                num_bytes: null !== (et = null == I ? void 0 : I.num_bytes) && void 0 !== et ? et : 0,
                video_codec: M(H, Z, W),
                video_encoder: null !== (en = L(H)) && void 0 !== en ? en : null,
                video_decoder: null !== (er = x(H, W)) && void 0 !== er ? er : null,
                sender_user_id: null !== (ei = null == A ? void 0 : A.ownerId) && void 0 !== ei ? ei : null,
                stream_region: null !== (eo = null == C ? void 0 : C.getRegion()) && void 0 !== eo ? eo : null,
                stream_source_type: Z && null !== (ea = null == C ? void 0 : null === (o = C.analyticsContext) || void 0 === o ? void 0 : o.streamSourceType) && void 0 !== ea ? ea : null,
                num_stream_viewers: null !== (es = null == C ? void 0 : null === (a = C.analyticsContext) || void 0 === a ? void 0 : a.numViewers) && void 0 !== es ? es : null,
                video_input_resolution_height: Z && null != j ? j : null,
                video_input_frame_rate: Z && null != U ? U : null,
                screenshare_capture_method: D(),
                share_application_name: null != G ? G : null,
                share_application_id: null != B ? B : null,
                share_application_executable: null != V ? V : null,
                share_application_distributor: null != F ? F : null,
                cpu_brand: null !== (el = null == n ? void 0 : n.cpu_brand) && void 0 !== el ? el : null,
                cpu_vendor: null !== (ec = null == n ? void 0 : n.cpu_vendor) && void 0 !== ec ? ec : null,
                cpu_memory: null !== (eu = null == n ? void 0 : n.cpu_memory) && void 0 !== eu ? eu : null,
                gpu_brand: null !== (ed = null == n ? void 0 : n.gpu_brand) && void 0 !== ed ? ed : null,
                gpu_count: null !== (ef = null == n ? void 0 : n.gpu_count) && void 0 !== ef ? ef : null,
                gpu_memory: null !== (e_ = null == n ? void 0 : n.gpu_memory) && void 0 !== e_ ? e_ : null,
                cpu_usage: null !== (ep = b.Z.getCurrentCPUUsagePercent()) && void 0 !== ep ? ep : null,
                memory_usage: null !== (eh = b.Z.getCurrentMemoryUsageKB()) && void 0 !== eh ? eh : null,
                outbound_bitrate_estimate: P(H),
                inbound_bitrate_estimate: w(H),
                hardware_enabled: _.Z.getHardwareEncoding(),
                audio_input_device_name: null !== (em = t.audioInputDeviceName) && void 0 !== em ? em : null === (s = _.Z.getInputDevices()[_.Z.getInputDeviceId()]) || void 0 === s ? void 0 : s.name,
                audio_output_device_name: null !== (eg = t.audioOutputDeviceName) && void 0 !== eg ? eg : null === (l = _.Z.getOutputDevices()[_.Z.getOutputDeviceId()]) || void 0 === l ? void 0 : l.name,
                video_device_name: null !== (eE = t.videoDeviceName) && void 0 !== eE ? eE : null === (c = _.Z.getVideoDevices()[_.Z.getVideoDeviceId()]) || void 0 === c ? void 0 : c.name,
                audio_subsystem: _.Z.getMediaEngine().getAudioSubsystem(),
                automatic_audio_subsystem: _.Z.getSettings().automaticAudioSubsystem,
                audio_layer: _.Z.getMediaEngine().getAudioLayer(),
                audio_input_mode: _.Z.getSettings().mode,
                automatic_audio_input_sensitivity_enabled: _.Z.getSettings().modeOptions.autoThreshold,
                audio_input_sensitivity: _.Z.getSettings().modeOptions.threshold,
                echo_cancellation_enabled: _.Z.getEchoCancellation(),
                noise_suppression_enabled: _.Z.getNoiseSuppression(),
                noise_cancellation_enabled: _.Z.getNoiseCancellation(),
                automatic_gain_control_enabled: _.Z.getAutomaticGainControl(),
                sidechain_compression_enabled: _.Z.getSidechainCompression(),
                input_volume: _.Z.getInputVolume(),
                output_volume: _.Z.getOutputVolume()
            };
            v.default.track(y.rMx.AV_ERROR_REPORTED, ev);
        });
}
function j(e, t) {
    if (null != t.underlyingError && !Object.values(N).includes(t.underlyingError)) {
        I.error("Invalid underlying error string '".concat(t.underlyingError, "', must be member of AVUnderlyingError"));
        return;
    }
    I.error('AV error reported: '.concat(e, ' ').concat(JSON.stringify(t)));
    let n = T[e];
    a.Z.dispatch({
        type: 'REPORT_AV_ERROR',
        error: e,
        errorCode: n.errorCode,
        severity: n.severity,
        category: n.category,
        context: t
    }),
        k(e, t);
}
function U(e) {
    return T[e];
}
!(function () {
    let e = Object.values(T).map((e) => e.errorCode),
        t = new Set(e);
    if (e.length !== t.size) {
        let t = e.filter((t, n) => e.indexOf(t) !== n),
            n = Object.entries(T)
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
let G = _.Z.getMediaEngine();
G.on(o.aB.ConnectionStats, R), G.on(o.aB.Destroy, () => G.off(o.aB.ConnectionStats, R));
