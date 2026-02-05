"use strict";
n.d(t, { A: () => d }), n(321073);
var r = n(752163);
function i(e) {
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
function s(e) {
    let t = e?.packets ?? 0;
    return (e?.fec?.packets ?? 0) + (e?.retransmitted?.packets ?? 0) + (e?.transmitted?.packets ?? 0) + t;
}
function o(e) {
    return null != e
        ? {
              last: Math.round(1e3 * e.last),
              mean: Math.round(1e3 * e.mean),
              p75: Math.round(1e3 * e.p75),
              p95: Math.round(1e3 * e.p95),
              p99: Math.round(1e3 * e.p99),
              max: Math.round(1e3 * e.max),
          }
        : null;
}
function l(e) {
    let t = {};
    for (let n in e) t[n] = o(e[n]);
    return t;
}
function u(e, t) {
    let n = e.substreams.find((e) => !e.isRTX && !e.isFlexFEC);
    if (null == n) return;
    let i = e.substreams.reduce((e, t) => e + a(t.rtpStats), 0),
        o = e.substreams.reduce((e, t) => e + s(t.rtpStats), 0);
    return {
        type: "video",
        ssrc: n.ssrc,
        sinkWant: (0, r.D)(t, n.ssrc, !0),
        sinkWantAsInt: (0, r.q)(t, n.ssrc),
        codec: { id: e.codecPayloadType, name: e.codecName },
        keyFrameInterval: e.keyFrameInterval,
        bytesSent: i,
        packetsSent: o,
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
    };
}
function c(e, t, n, i) {
    let o = a(e.rtpStats),
        u = s(e.rtpStats);
    return {
        type: "video",
        ssrc: e.ssrc,
        sinkWant: (0, r.D)(t, e.ssrc, !0),
        sinkWantAsInt: (0, r.q)(t, e.ssrc),
        sinkWantLocal: (0, r.D)(n, e.ssrc, !0),
        sinkWantLocalAsInt: (0, r.q)(n, e.ssrc),
        codec: { id: e.codecPayloadType, name: e.codecName },
        bytesReceived: o,
        packetsReceived: u,
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
        ...(null != i
            ? l({
                  videoJitterBuffer: i.videoJitterBuffer,
                  videoJitterDelay: i.videoJitterDelay,
                  videoJitterTarget: i.videoJitterTarget,
              })
            : {}),
    };
}
function d(e, t, n, s) {
    let o = null,
        d = null,
        _ = "string" == typeof t ? JSON.parse(t) : t,
        f = [];
    if (null != _.outbound) {
        let { audio: e, video: t, videos: a } = _.outbound;
        if (
            (null != e &&
                ((d = (d ?? 0) + e.bytesSent),
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
                    audioLevel: i(e.audioLevel),
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
            null != a)
        )
            a.forEach((e) => {
                let t = u(e, n);
                null != t && ((d = (d ?? 0) + t.bytesSent), f.push(t));
            });
        else if (null != t) {
            let e = u(t, n);
            null != e && ((d = (d ?? 0) + e.bytesSent), f.push(e));
        }
    }
    let p = {};
    null != _.inbound &&
        _.inbound.forEach((e) => {
            let { id: t, audio: u, video: d, videos: _, playout: f } = e;
            if (
                ((p[t] = []),
                null != u &&
                    ((o = (o ?? 0) + u.bytesReceived),
                    p[t].push({
                        type: "audio",
                        ssrc: u.ssrc,
                        sinkWant: (0, r.D)(n, u.ssrc, !1),
                        sinkWantAsInt: (0, r.q)(n, u.ssrc),
                        codec: { id: u.codecPayloadType, name: u.codecName },
                        bytesReceived: u.bytesReceived,
                        packetsReceived: u.packetsReceived,
                        packetsLost: u.packetsLost,
                        fractionLost: 100 * u.fractionLost,
                        fecPacketsReceived: u.fecPacketsReceived,
                        fecPacketsDiscarded: u.fecPacketsDiscarded,
                        audioLevel: i(u.audioLevel),
                        audioDetected: u.speaking,
                        currentSampleRate: u.currentSampleRate,
                        jitter: u.jitter,
                        jitterBuffer: u.jitterBuffer,
                        jitterBufferPreferred: u.jitterBufferPreferred,
                        decodingCNG: u.decodingCNG,
                        decodingMutedOutput: u.decodingMutedOutput,
                        decodingNormal: u.decodingNormal,
                        decodingPLC: u.decodingPLC,
                        decodingPLCCNG: u.decodingPLCCNG,
                        nackCount: u.nackCount,
                        accelerateRate: 100 * u.accelerateRate,
                        expandRate: 100 * u.expandRate,
                        preemptiveExpandRate: 100 * u.preemptiveExpandRate,
                        speechExpandRate: 100 * u.speechExpandRate,
                        secondaryDecodedRate: 100 * u.secondaryDecodedRate,
                        opSilence: u.opSilence,
                        opNormal: u.opNormal,
                        opMerge: u.opMerge,
                        opExpand: u.opExpand,
                        opAccelerate: u.opAccelerate,
                        opPreemptiveExpand: u.opPreemptiveExpand,
                        opCNG: u.opCNG,
                        delayEstimate: u.delayEstimate,
                        passthroughCount: u.passthroughCount,
                        decryptSuccessCount: u.decryptSuccessCount,
                        decryptFailureCount: u.decryptFailureCount,
                        decryptDuration: u.decryptDuration,
                        decryptAttempts: u.decryptAttempts,
                        decryptMissingKeyCount: u.decryptMissingKeyCount,
                        decryptInvalidNonceCount: u.decryptInvalidNonceCount,
                        ...(null != f
                            ? l({
                                  audioJitterBuffer: f.audioJitterBuffer,
                                  audioJitterDelay: f.audioJitterDelay,
                                  audioJitterTarget: f.audioJitterTarget,
                                  audioPlayoutUnderruns: f.audioPlayoutUnderruns,
                                  relativeReceptionDelay: f.relativeReceptionDelay,
                                  relativePlayoutDelay: f.relativePlayoutDelay,
                              })
                            : {}),
                    })),
                null != _)
            )
                _.forEach((e) => {
                    let r = c(e, n, s, f);
                    if (null != r) {
                        let n = a(e.rtpStats);
                        (o = (o ?? 0) + n), p[t].push(r);
                    }
                });
            else if (null != d) {
                let e = c(d, n, s, f);
                if (null != e) {
                    let n = a(d.rtpStats);
                    (o = (o ?? 0) + n), p[t].push(e);
                }
            }
        });
    let { transport: h, clips: m } = _,
        g = {};
    null != h &&
        ((g.availableOutgoingBitrate = h.sendBandwidth),
        (g.ping = h.rtt),
        (g.decryptionFailures = h.decryptionFailures),
        null != h.routingFailures && (g.routingFailures = h.routingFailures),
        (g.localAddress = h.localAddress),
        (g.pacerDelay = h.pacerDelay),
        null != h.receiverReports && (g.receiverReports = h.receiverReports),
        (g.receiverBitrateEstimate = h.receiverBitrateEstimate),
        (g.outboundBitrateEstimate = h.outboundBitrateEstimate),
        (g.inboundBitrateEstimate = h.inboundBitrateEstimate ?? 0),
        (g.packetsReceived = h.packetsReceived),
        (g.packetsSent = h.packetsSent),
        null != h.secureFramesProtocolVersion && (g.secureFramesProtocolVersion = h.secureFramesProtocolVersion)),
        (h?.bytesReceived == null && (null == o || Number.isNaN(o))) ||
            (g.bytesReceived = h?.bytesReceived ?? o ?? void 0),
        (h?.bytesSent == null && (null == d || Number.isNaN(d))) || (g.bytesSent = h?.bytesSent ?? d ?? void 0);
    let { screenshare: E, camera: A, audioDevice: I } = _;
    return {
        mediaEngineConnectionId: e,
        transport: g,
        screenshare: E,
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
