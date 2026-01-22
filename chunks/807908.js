n.d(t, { A: () => p }), n(321073);
var r = n(752163);
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                i(e, t, n[t]);
            });
    }
    return e;
}
function s(e) {
    return e / 32768;
}
function o(e) {
    var t, n, r, i, a, s, o, l, c, u, d, f, p, _, h, m, g, E, b, y, O;
    let A =
        (null != (t = null == e ? void 0 : e.headerBytes) ? t : 0) +
        (null != (n = null == e ? void 0 : e.payloadBytes) ? n : 0) +
        (null != (r = null == e ? void 0 : e.paddingBytes) ? r : 0);
    return (
        (null != (i = null == e || null == (p = e.fec) ? void 0 : p.headerBytes) ? i : 0) +
        (null != (a = null == e || null == (_ = e.fec) ? void 0 : _.payloadBytes) ? a : 0) +
        (null != (s = null == e || null == (h = e.fec) ? void 0 : h.paddingBytes) ? s : 0) +
        (null != (o = null == e || null == (m = e.retransmitted) ? void 0 : m.headerBytes) ? o : 0) +
        (null != (l = null == e || null == (g = e.retransmitted) ? void 0 : g.payloadBytes) ? l : 0) +
        (null != (c = null == e || null == (E = e.retransmitted) ? void 0 : E.paddingBytes) ? c : 0) +
        (null != (u = null == e || null == (b = e.transmitted) ? void 0 : b.headerBytes) ? u : 0) +
        (null != (d = null == e || null == (y = e.transmitted) ? void 0 : y.payloadBytes) ? d : 0) +
        (null != (f = null == e || null == (O = e.transmitted) ? void 0 : O.paddingBytes) ? f : 0) +
        A
    );
}
function l(e) {
    var t, n, r, i, a, s, o;
    let l = null != (t = null == e ? void 0 : e.packets) ? t : 0;
    return (
        (null != (n = null == e || null == (a = e.fec) ? void 0 : a.packets) ? n : 0) +
        (null != (r = null == e || null == (s = e.retransmitted) ? void 0 : s.packets) ? r : 0) +
        (null != (i = null == e || null == (o = e.transmitted) ? void 0 : o.packets) ? i : 0) +
        l
    );
}
function c(e) {
    return null != e
        ? {
              last: Math.round(1000 * e.last),
              mean: Math.round(1000 * e.mean),
              p75: Math.round(1000 * e.p75),
              p95: Math.round(1000 * e.p95),
              p99: Math.round(1000 * e.p99),
              max: Math.round(1000 * e.max),
          }
        : null;
}
function u(e) {
    let t = {};
    for (let n in e) t[n] = c(e[n]);
    return t;
}
function d(e, t) {
    var n, i, a, s, c, u, d, f, p, _, h, m, g, E, b, y, O, A, v, S, I, T, C, N, R, w, P, D;
    let x = e.substreams.find((e) => !e.isRTX && !e.isFlexFEC);
    if (null == x) return;
    let L = e.substreams.reduce((e, t) => e + o(t.rtpStats), 0),
        j = e.substreams.reduce((e, t) => e + l(t.rtpStats), 0);
    return {
        type: "video",
        ssrc: x.ssrc,
        sinkWant: (0, r.D)(t, x.ssrc, !0),
        sinkWantAsInt: (0, r.q)(t, x.ssrc),
        codec: {
            id: e.codecPayloadType,
            name: e.codecName,
        },
        keyFrameInterval: e.keyFrameInterval,
        bytesSent: L,
        packetsSent: j,
        packetsLost: null != (n = null == (g = x.rtcpStats) ? void 0 : g.packetsLost) ? n : 0,
        fractionLost: null != (i = null == (E = x.rtcpStats) ? void 0 : E.fractionLost) ? i : 0,
        bitrate: e.mediaBitrate,
        bitrateTarget: e.targetMediaBitrate,
        encoderImplementationName: e.encoderImplementationName,
        encodeUsage: e.encodeUsage,
        averageEncodeTime: e.avgEncodeTime,
        resolution: {
            height: x.height,
            width: x.width,
        },
        framesSent: x.frameCounts.keyFrames + x.frameCounts.deltaFrames,
        keyFramesEncoded: x.frameCounts.keyFrames,
        framesEncoded: e.framesEncoded,
        frameRateInput: e.inputFrameRate,
        frameRateEncode: e.encodeFrameRate,
        firCount: null != (a = null == (b = x.rtcpStats) ? void 0 : b.firPackets) ? a : 0,
        nackCount: null != (s = null == (y = x.rtcpStats) ? void 0 : y.nackPackets) ? s : 0,
        pliCount: null != (c = null == (O = x.rtcpStats) ? void 0 : O.pliPackets) ? c : 0,
        qpSum: e.qpSum,
        bandwidthLimitedResolution: e.bwLimitedResolution,
        framesDroppedRateLimiter: e.framesDroppedRateLimiter,
        framesDroppedEncoderQueue: e.framesDroppedEncoderQueue,
        framesDroppedCongestionWindow: e.framesDroppedCongestionWindow,
        framesDroppedEncoder: e.framesDroppedEncoder,
        cpuLimitedResolution: e.cpuLimitedResolution,
        encoderQualityVmaf:
            null != (u = null == (A = x.encoderQualityStats) ? void 0 : A.imageQualityVmaf_v061) ? u : void 0,
        encoderQualityPsnr:
            null != (d = null == (v = x.encoderQualityStats) ? void 0 : v.imageQualityWebrtcPsnrDb) ? d : void 0,
        qualityDecodeErrors: null != (f = null == (S = x.encoderQualityStats) ? void 0 : S.decodeErrors) ? f : void 0,
        qualityDecoderReboots:
            null != (p = null == (I = x.encoderQualityStats) ? void 0 : I.decoderReboots) ? p : void 0,
        qualityScoreErrors: null != (_ = null == (T = x.encoderQualityStats) ? void 0 : T.scoreErrors) ? _ : void 0,
        qualityFrameDrops: null != (h = null == (C = x.encoderQualityStats) ? void 0 : C.frameDrops) ? h : void 0,
        qualitySizeMismatches:
            null != (m = null == (N = x.encoderQualityStats) ? void 0 : N.sizeMismatches) ? m : void 0,
        filter: e.filter,
        passthroughCount: e.passthroughCount,
        encryptSuccessCount: e.encryptSuccessCount,
        encryptFailureCount: e.encryptFailureCount,
        encryptDuration: e.encryptDuration,
        encryptAttempts: e.encryptAttempts,
        encryptMaxAttempts: e.encryptMaxAttempts,
        encryptMissingKeyCount: e.encryptMissingKeyCount,
        hqSimulcastStreamEncoded: e.hqSimulcastStreamEncoded,
        lqSimulcastStreamEncoded: e.lqSimulcastStreamEncoded,
        bandwidthLimitedFrameRate: e.bwLimitedFrameRate,
        freezeCount: null == (R = x.encoderQualityStats) ? void 0 : R.freezeCount,
        totalFreezesDuration: null == (w = x.encoderQualityStats) ? void 0 : w.totalFreezesDuration,
        totalFramesDuration: null == (P = x.encoderQualityStats) ? void 0 : P.totalFramesDuration,
        videoEntropy: null == (D = x.encoderQualityStats) ? void 0 : D.interFrameEntropy,
    };
}
function f(e, t, n, i) {
    var s, c;
    let d = o(e.rtpStats),
        f = l(e.rtpStats);
    return a(
        {
            type: "video",
            ssrc: e.ssrc,
            sinkWant: (0, r.D)(t, e.ssrc, !0),
            sinkWantAsInt: (0, r.q)(t, e.ssrc),
            sinkWantLocal: (0, r.D)(n, e.ssrc, !0),
            sinkWantLocalAsInt: (0, r.q)(n, e.ssrc),
            codec: {
                id: e.codecPayloadType,
                name: e.codecName,
            },
            bytesReceived: d,
            packetsReceived: f,
            packetsLost: null != (s = e.rtpStats.packetsLost) ? s : e.rtcpStats.packetsLost,
            fractionLost: e.rtcpStats.fractionLost,
            bitrate: e.totalBitrate,
            jitterBuffer: e.jitterBuffer,
            currentDelay: e.currentDelay,
            targetDelay: e.targetDelay,
            minPlayoutDelay: e.minPlayoutDelay,
            renderDelay: e.renderDelay,
            averageDecodeTime: e.decode,
            resolution: {
                height: e.height,
                width: e.width,
            },
            decoderImplementationName: e.decoderImplementationName,
            framesDecoded: e.framesDecoded,
            framesDropped: e.framesDropped,
            framesDecodeErrors: e.framesDecodeErrors,
            framesReceived: e.frameCounts.keyFrames + e.frameCounts.deltaFrames,
            networkFramesDropped: null != (c = e.networkFramesDropped) ? c : 0,
            keyFramesDecoded: e.frameCounts.keyFrames,
            frameRateDecode: e.decodeFrameRate,
            frameRateNetwork: e.networkFrameRate,
            frameRateRender: e.renderFrameRate,
            firCount: e.rtcpStats.firPackets,
            nackCount: e.rtcpStats.nackPackets,
            pliCount: e.rtcpStats.pliPackets,
            qpSum: e.qpSum,
            freezeCount: e.freezeCount,
            pauseCount: e.pauseCount,
            totalFreezesDuration: e.totalFreezesDuration,
            totalPausesDuration: e.totalPausesDuration,
            totalFramesDuration: e.totalFramesDuration,
            sumOfSquaredFramesDurations: e.sumOfSquaredFramesDurations,
            passthroughCount: e.passthroughCount,
            decryptSuccessCount: e.decryptSuccessCount,
            decryptFailureCount: e.decryptFailureCount,
            decryptDuration: e.decryptDuration,
            decryptAttempts: e.decryptAttempts,
            decryptMissingKeyCount: e.decryptMissingKeyCount,
            decryptInvalidNonceCount: e.decryptInvalidNonceCount,
        },
        null != i
            ? u({
                  videoJitterBuffer: i.videoJitterBuffer,
                  videoJitterDelay: i.videoJitterDelay,
                  videoJitterTarget: i.videoJitterTarget,
              })
            : {},
    );
}
function p(e, t, n, i) {
    var l, c, p, _, h;
    let m = null,
        g = null,
        E = "string" == typeof t ? JSON.parse(t) : t,
        b = [];
    if (null != E.outbound) {
        let { audio: e, video: t, videos: i } = E.outbound;
        if (
            (null != e &&
                ((g = (null != g ? g : 0) + e.bytesSent),
                b.push({
                    type: "audio",
                    ssrc: e.ssrc,
                    sinkWant: (0, r.D)(n, e.ssrc, !1),
                    sinkWantAsInt: (0, r.q)(n, e.ssrc),
                    codec: {
                        id: e.codecPayloadType,
                        name: e.codecName,
                    },
                    bytesSent: e.bytesSent,
                    packetsSent: e.packetsSent,
                    packetsLost: Math.max(0, e.packetsLost),
                    fractionLost: 100 * e.fractionLost,
                    audioLevel: s(e.audioLevel),
                    bitrate: e.mediaBitrate,
                    bitrateTarget: e.targetMediaBitrate,
                    audioDetected: e.speaking,
                    framesCaptured: e.framesCaptured,
                    framesRendered: e.framesRendered,
                    noiseCancellerFrames: e.noiseCancellerFrames,
                    noiseCancellerProcessTime: e.noiseCancellerProcessTime,
                    voiceActivityDetectorProcessTime: e.voiceActivityDetectorProcessTime,
                    passthroughCount: e.passthroughCount,
                    encryptSuccessCount: e.encryptSuccessCount,
                    encryptFailureCount: e.encryptFailureCount,
                    encryptDuration: e.encryptDuration,
                    encryptAttempts: e.encryptAttempts,
                    encryptMaxAttempts: e.encryptMaxAttempts,
                    encryptMissingKeyCount: e.encryptMissingKeyCount,
                    pttQueueLatencyMicrosSamples: e.pttQueueLatencyMicrosSamples,
                    sampleRateMismatchPercent: e.sampleRateMismatchPercent,
                    currentSampleRate: e.currentSampleRate,
                })),
            null != i)
        )
            i.forEach((e) => {
                let t = d(e, n);
                null != t && ((g = (null != g ? g : 0) + t.bytesSent), b.push(t));
            });
        else if (null != t) {
            let e = d(t, n);
            null != e && ((g = (null != g ? g : 0) + e.bytesSent), b.push(e));
        }
    }
    let y = {};
    null != E.inbound &&
        E.inbound.forEach((e) => {
            let { id: t, audio: l, video: c, videos: d, playout: p } = e;
            if (
                ((y[t] = []),
                null != l &&
                    ((m = (null != m ? m : 0) + l.bytesReceived),
                    y[t].push(
                        a(
                            {
                                type: "audio",
                                ssrc: l.ssrc,
                                sinkWant: (0, r.D)(n, l.ssrc, !1),
                                sinkWantAsInt: (0, r.q)(n, l.ssrc),
                                codec: {
                                    id: l.codecPayloadType,
                                    name: l.codecName,
                                },
                                bytesReceived: l.bytesReceived,
                                packetsReceived: l.packetsReceived,
                                packetsLost: l.packetsLost,
                                fractionLost: 100 * l.fractionLost,
                                fecPacketsReceived: l.fecPacketsReceived,
                                fecPacketsDiscarded: l.fecPacketsDiscarded,
                                audioLevel: s(l.audioLevel),
                                audioDetected: l.speaking,
                                currentSampleRate: l.currentSampleRate,
                                jitter: l.jitter,
                                jitterBuffer: l.jitterBuffer,
                                jitterBufferPreferred: l.jitterBufferPreferred,
                                decodingCNG: l.decodingCNG,
                                decodingMutedOutput: l.decodingMutedOutput,
                                decodingNormal: l.decodingNormal,
                                decodingPLC: l.decodingPLC,
                                decodingPLCCNG: l.decodingPLCCNG,
                                nackCount: l.nackCount,
                                accelerateRate: 100 * l.accelerateRate,
                                expandRate: 100 * l.expandRate,
                                preemptiveExpandRate: 100 * l.preemptiveExpandRate,
                                speechExpandRate: 100 * l.speechExpandRate,
                                secondaryDecodedRate: 100 * l.secondaryDecodedRate,
                                opSilence: l.opSilence,
                                opNormal: l.opNormal,
                                opMerge: l.opMerge,
                                opExpand: l.opExpand,
                                opAccelerate: l.opAccelerate,
                                opPreemptiveExpand: l.opPreemptiveExpand,
                                opCNG: l.opCNG,
                                delayEstimate: l.delayEstimate,
                                passthroughCount: l.passthroughCount,
                                decryptSuccessCount: l.decryptSuccessCount,
                                decryptFailureCount: l.decryptFailureCount,
                                decryptDuration: l.decryptDuration,
                                decryptAttempts: l.decryptAttempts,
                                decryptMissingKeyCount: l.decryptMissingKeyCount,
                                decryptInvalidNonceCount: l.decryptInvalidNonceCount,
                            },
                            null != p
                                ? u({
                                      audioJitterBuffer: p.audioJitterBuffer,
                                      audioJitterDelay: p.audioJitterDelay,
                                      audioJitterTarget: p.audioJitterTarget,
                                      audioPlayoutUnderruns: p.audioPlayoutUnderruns,
                                      relativeReceptionDelay: p.relativeReceptionDelay,
                                      relativePlayoutDelay: p.relativePlayoutDelay,
                                  })
                                : {},
                        ),
                    )),
                null != d)
            )
                d.forEach((e) => {
                    let r = f(e, n, i, p);
                    if (null != r) {
                        let n = o(e.rtpStats);
                        (m = (null != m ? m : 0) + n), y[t].push(r);
                    }
                });
            else if (null != c) {
                let e = f(c, n, i, p);
                if (null != e) {
                    let n = o(c.rtpStats);
                    (m = (null != m ? m : 0) + n), y[t].push(e);
                }
            }
        });
    let { transport: O, clips: A } = E,
        v = {};
    null != O &&
        ((v.availableOutgoingBitrate = O.sendBandwidth),
        (v.ping = O.rtt),
        (v.decryptionFailures = O.decryptionFailures),
        null != O.routingFailures && (v.routingFailures = O.routingFailures),
        (v.localAddress = O.localAddress),
        (v.pacerDelay = O.pacerDelay),
        null != O.receiverReports && (v.receiverReports = O.receiverReports),
        (v.receiverBitrateEstimate = O.receiverBitrateEstimate),
        (v.outboundBitrateEstimate = O.outboundBitrateEstimate),
        (v.inboundBitrateEstimate = null != (l = O.inboundBitrateEstimate) ? l : 0),
        (v.packetsReceived = O.packetsReceived),
        (v.packetsSent = O.packetsSent),
        null != O.secureFramesProtocolVersion && (v.secureFramesProtocolVersion = O.secureFramesProtocolVersion)),
        ((null == O ? void 0 : O.bytesReceived) == null && (null == m || Number.isNaN(m))) ||
            (v.bytesReceived = null != (c = null != (p = null == O ? void 0 : O.bytesReceived) ? p : m) ? c : void 0),
        ((null == O ? void 0 : O.bytesSent) == null && (null == g || Number.isNaN(g))) ||
            (v.bytesSent = null != (_ = null != (h = null == O ? void 0 : O.bytesSent) ? h : g) ? _ : void 0);
    let { screenshare: S, camera: I, audioDevice: T } = E;
    return {
        mediaEngineConnectionId: e,
        transport: v,
        screenshare: S,
        camera:
            null != I
                ? {
                      capturedFramesDropped: I.capturedFramesDropped,
                      capturedFramesCount: I.capturedFramesCount,
                      capturedFramesMean: I.capturedFramesMean,
                      capturedFramesStdev: I.capturedFramesStdev,
                  }
                : null,
        clips: A,
        audioDevice: T,
        rtp: {
            inbound: y,
            outbound: b,
        },
    };
}
