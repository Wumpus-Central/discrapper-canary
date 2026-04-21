"use strict";
n.d(t, { A: () => _ }), n(321073);
var r = n(752163);
let i = 1e3;
function s(e) {
    return e / 32768;
}
function a(e) {
    let t = (e?.headerBytes ?? 0) + (e?.payloadBytes ?? 0) + (e?.paddingBytes ?? 0);
    return (
        (e?.fec?.headerBytes ?? 0) +
        (e?.fec?.payloadBytes ?? 0) +
        (e?.fec?.paddingBytes ?? 0) +
        (e?.retransmitted?.headerBytes ?? 0) +
        (e?.retransmitted?.payloadBytes ?? 0) +
        (e?.retransmitted?.paddingBytes ?? 0) +
        (e?.transmitted?.headerBytes ?? 0) +
        (e?.transmitted?.payloadBytes ?? 0) +
        (e?.transmitted?.paddingBytes ?? 0) +
        t
    );
}
function o(e) {
    let t = e?.packets ?? 0;
    return (e?.fec?.packets ?? 0) + (e?.retransmitted?.packets ?? 0) + (e?.transmitted?.packets ?? 0) + t;
}
function l(e) {
    return {
        last: Math.round(e.last * i),
        mean: Math.round(e.mean * i),
        p75: Math.round(e.p75 * i),
        p95: Math.round(e.p95 * i),
        p99: Math.round(e.p99 * i),
        max: Math.round(e.max * i),
    };
}
function u(e) {
    let t = {};
    for (let n in e) Array.isArray(e[n]) ? (t[n] = e[n].map((e) => e * i)) : null != e[n] && (t[n] = l(e[n]));
    return t;
}
function c(e, t) {
    let n = e.substreams.find((e) => !e.isRTX && !e.isFlexFEC);
    if (null == n) return;
    let i = e.substreams.reduce((e, t) => e + a(t.rtpStats), 0),
        s = e.substreams.reduce((e, t) => e + o(t.rtpStats), 0);
    return {
        type: "video",
        ssrc: n.ssrc,
        sinkWant: (0, r.D)(t, n.ssrc, !0),
        sinkWantAsInt: (0, r.q)(t, n.ssrc),
        codec: { id: e.codecPayloadType, name: e.codecName },
        keyFrameInterval: e.keyFrameInterval,
        bytesSent: i,
        packetsSent: s,
        packetsLost: n.rtcpStats?.packetsLost ?? 0,
        fractionLost: n.rtcpStats?.fractionLost ?? 0,
        bitrate: e.mediaBitrate,
        bitrateTarget: e.targetMediaBitrate,
        encoderImplementationName: e.encoderImplementationName,
        encodeUsage: e.encodeUsage,
        averageEncodeTime: e.avgEncodeTime,
        resolution: { height: n.height, width: n.width },
        framesSent: n.frameCounts.keyFrames + n.frameCounts.deltaFrames,
        keyFramesEncoded: n.frameCounts.keyFrames,
        framesEncoded: e.framesEncoded,
        frameRateInput: e.inputFrameRate,
        frameRateEncode: e.encodeFrameRate,
        firCount: n.rtcpStats?.firPackets ?? 0,
        nackCount: n.rtcpStats?.nackPackets ?? 0,
        pliCount: n.rtcpStats?.pliPackets ?? 0,
        qpSum: e.qpSum,
        bandwidthLimitedResolution: e.bwLimitedResolution,
        framesDroppedRateLimiter: e.framesDroppedRateLimiter,
        framesDroppedEncoderQueue: e.framesDroppedEncoderQueue,
        framesDroppedCongestionWindow: e.framesDroppedCongestionWindow,
        framesDroppedEncoder: e.framesDroppedEncoder,
        cpuLimitedResolution: e.cpuLimitedResolution,
        encoderQualityVmaf: n.encoderQualityStats?.imageQualityVmaf_v061 ?? void 0,
        encoderQualityPsnr: n.encoderQualityStats?.imageQualityWebrtcPsnrDb ?? void 0,
        qualityDecodeErrors: n.encoderQualityStats?.decodeErrors ?? void 0,
        qualityDecoderReboots: n.encoderQualityStats?.decoderReboots ?? void 0,
        qualityScoreErrors: n.encoderQualityStats?.scoreErrors ?? void 0,
        qualityFrameDrops: n.encoderQualityStats?.frameDrops ?? void 0,
        qualitySizeMismatches: n.encoderQualityStats?.sizeMismatches ?? void 0,
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
        freezeCount: n.encoderQualityStats?.freezeCount,
        totalFreezesDuration: n.encoderQualityStats?.totalFreezesDuration,
        totalFramesDuration: n.encoderQualityStats?.totalFramesDuration,
        videoEntropy: n.encoderQualityStats?.interFrameEntropy,
        consecutiveStaticColorFrames: n.encoderQualityStats?.consecutiveStaticColorFrames,
        minResolutionWidth: n.encoderQualityStats?.minResolutionWidth,
        minResolutionHeight: n.encoderQualityStats?.minResolutionHeight,
    };
}
function d(e, t, n, i) {
    let s = a(e.rtpStats),
        l = o(e.rtpStats);
    return {
        type: "video",
        ssrc: e.ssrc,
        sinkWant: (0, r.D)(t, e.ssrc, !0),
        sinkWantAsInt: (0, r.q)(t, e.ssrc),
        sinkWantLocal: (0, r.D)(n, e.ssrc, !0),
        sinkWantLocalAsInt: (0, r.q)(n, e.ssrc),
        codec: { id: e.codecPayloadType, name: e.codecName },
        bytesReceived: s,
        packetsReceived: l,
        packetsLost: e.rtpStats.packetsLost ?? e.rtcpStats.packetsLost,
        fractionLost: e.rtcpStats.fractionLost,
        bitrate: e.totalBitrate,
        jitterBuffer: e.jitterBuffer,
        currentDelay: e.currentDelay,
        targetDelay: e.targetDelay,
        minPlayoutDelay: e.minPlayoutDelay,
        renderDelay: e.renderDelay,
        averageDecodeTime: e.decode,
        resolution: { height: e.height, width: e.width },
        decoderImplementationName: e.decoderImplementationName,
        framesDecoded: e.framesDecoded,
        framesDropped: e.framesDropped,
        framesDecodeErrors: e.framesDecodeErrors,
        framesReceived: e.frameCounts.keyFrames + e.frameCounts.deltaFrames,
        networkFramesDropped: e.networkFramesDropped ?? 0,
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
        minResolutionWidth: e.minResolutionWidth,
        minResolutionHeight: e.minResolutionHeight,
        ...(null != i
            ? u({
                  videoJitterBuffer: i.videoJitterBuffer,
                  videoJitterDelay: i.videoJitterDelay,
                  videoJitterTarget: i.videoJitterTarget,
              })
            : {}),
    };
}
function _(e, t, n, i) {
    let o = null,
        l = null,
        _ = "string" == typeof t ? JSON.parse(t) : t,
        f = [];
    if (null != _.outbound) {
        let { audio: e, video: t, videos: i } = _.outbound;
        if (
            (null != e &&
                ((l = (l ?? 0) + e.bytesSent),
                f.push({
                    type: "audio",
                    ssrc: e.ssrc,
                    sinkWant: (0, r.D)(n, e.ssrc, !1),
                    sinkWantAsInt: (0, r.q)(n, e.ssrc),
                    codec: { id: e.codecPayloadType, name: e.codecName },
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
                let t = c(e, n);
                null != t && ((l = (l ?? 0) + t.bytesSent), f.push(t));
            });
        else if (null != t) {
            let e = c(t, n);
            null != e && ((l = (l ?? 0) + e.bytesSent), f.push(e));
        }
    }
    let p = {};
    null != _.inbound &&
        _.inbound.forEach((e) => {
            let { id: t, audio: l, video: c, videos: _, playout: f } = e;
            if (
                ((p[t] = []),
                null != l &&
                    ((o = (o ?? 0) + l.bytesReceived),
                    p[t].push({
                        type: "audio",
                        ssrc: l.ssrc,
                        sinkWant: (0, r.D)(n, l.ssrc, !1),
                        sinkWantAsInt: (0, r.q)(n, l.ssrc),
                        codec: { id: l.codecPayloadType, name: l.codecName },
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
                        ...(null != f
                            ? u({
                                  audioJitterBuffer: f.audioJitterBuffer,
                                  audioJitterBufferSamples: f.audioJitterBufferSamples,
                                  audioJitterDelay: f.audioJitterDelay,
                                  audioJitterDelaySamples: f.audioJitterDelaySamples,
                                  audioJitterTarget: f.audioJitterTarget,
                                  audioJitterTargetSamples: f.audioJitterTargetSamples,
                                  audioPlayoutUnderruns: f.audioPlayoutUnderruns,
                                  relativeReceptionDelay: f.relativeReceptionDelay,
                                  relativePlayoutDelay: f.relativePlayoutDelay,
                              })
                            : {}),
                    })),
                null != _)
            )
                _.forEach((e) => {
                    let r = d(e, n, i, f);
                    if (null != r) {
                        let n = a(e.rtpStats);
                        (o = (o ?? 0) + n), p[t].push(r);
                    }
                });
            else if (null != c) {
                let e = d(c, n, i, f);
                if (null != e) {
                    let n = a(c.rtpStats);
                    (o = (o ?? 0) + n), p[t].push(e);
                }
            }
        });
    let { transport: h, clips: m } = _,
        E = {};
    null != h &&
        ((E.availableOutgoingBitrate = h.sendBandwidth),
        (E.ping = h.rtt),
        (E.decryptionFailures = h.decryptionFailures),
        null != h.routingFailures && (E.routingFailures = h.routingFailures),
        (E.localAddress = h.localAddress),
        (E.pacerDelay = h.pacerDelay),
        null != h.receiverReports && (E.receiverReports = h.receiverReports),
        (E.receiverBitrateEstimate = h.receiverBitrateEstimate),
        (E.outboundBitrateEstimate = h.outboundBitrateEstimate),
        (E.inboundBitrateEstimate = h.inboundBitrateEstimate ?? 0),
        (E.packetsReceived = h.packetsReceived),
        (E.packetsSent = h.packetsSent),
        null != h.secureFramesProtocolVersion && (E.secureFramesProtocolVersion = h.secureFramesProtocolVersion)),
        (h?.bytesReceived == null && (null == o || Number.isNaN(o))) ||
            (E.bytesReceived = h?.bytesReceived ?? o ?? void 0),
        (h?.bytesSent == null && (null == l || Number.isNaN(l))) || (E.bytesSent = h?.bytesSent ?? l ?? void 0);
    let { screenshare: g, camera: A, audioDevice: I } = _;
    return {
        mediaEngineConnectionId: e,
        transport: E,
        screenshare: g,
        camera:
            null != A
                ? {
                      capturedFramesDropped: A.capturedFramesDropped,
                      capturedFramesCount: A.capturedFramesCount,
                      capturedFramesMean: A.capturedFramesMean,
                      capturedFramesStdev: A.capturedFramesStdev,
                  }
                : null,
        clips: m,
        audioDevice: I,
        rtp: { inbound: p, outbound: f },
    };
}
