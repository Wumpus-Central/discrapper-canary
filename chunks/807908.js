"use strict";
n.d(t, { A: () => u }), n(321073);
var r = n(752163);
function i(e) {
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
function a(e) {
    let t = {};
    for (let r in e)
        if (Array.isArray(e[r])) t[r] = e[r].map((e) => 1e3 * e);
        else {
            var n;
            null != e[r] &&
                (t[r] = {
                    last: Math.round(1e3 * (n = e[r]).last),
                    mean: Math.round(1e3 * n.mean),
                    p75: Math.round(1e3 * n.p75),
                    p95: Math.round(1e3 * n.p95),
                    p99: Math.round(1e3 * n.p99),
                    max: Math.round(1e3 * n.max),
                });
        }
    return t;
}
function o(e, t) {
    let n = e.substreams.find((e) => !e.isRTX && !e.isFlexFEC);
    if (null == n) return;
    let a = e.substreams.reduce((e, t) => e + i(t.rtpStats), 0),
        o = e.substreams.reduce((e, t) => e + s(t.rtpStats), 0);
    return {
        type: "video",
        ssrc: n.ssrc,
        sinkWant: (0, r.D)(t, n.ssrc, !0),
        sinkWantAsInt: (0, r.q)(t, n.ssrc),
        codec: { id: e.codecPayloadType, name: e.codecName },
        keyFrameInterval: e.keyFrameInterval,
        bytesSent: a,
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
        consecutiveStaticColorFrames: n.encoderQualityStats?.consecutiveStaticColorFrames,
        minResolutionWidth: n.encoderQualityStats?.minResolutionWidth,
        minResolutionHeight: n.encoderQualityStats?.minResolutionHeight,
    };
}
function l(e, t, n, o) {
    let l = i(e.rtpStats),
        u = s(e.rtpStats);
    return {
        type: "video",
        ssrc: e.ssrc,
        sinkWant: (0, r.D)(t, e.ssrc, !0),
        sinkWantAsInt: (0, r.q)(t, e.ssrc),
        sinkWantLocal: (0, r.D)(n, e.ssrc, !0),
        sinkWantLocalAsInt: (0, r.q)(n, e.ssrc),
        codec: { id: e.codecPayloadType, name: e.codecName },
        bytesReceived: l,
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
        minResolutionWidth: e.minResolutionWidth,
        minResolutionHeight: e.minResolutionHeight,
        ...(null != o
            ? a({
                  videoJitterBuffer: o.videoJitterBuffer,
                  videoJitterDelay: o.videoJitterDelay,
                  videoJitterTarget: o.videoJitterTarget,
              })
            : {}),
    };
}
function u(e, t, n, s) {
    let u = null,
        c = null,
        d = "string" == typeof t ? JSON.parse(t) : t,
        _ = [];
    if (null != d.outbound) {
        let { audio: e, video: t, videos: i } = d.outbound;
        if (
            (null != e &&
                ((c = (c ?? 0) + e.bytesSent),
                _.push({
                    type: "audio",
                    ssrc: e.ssrc,
                    sinkWant: (0, r.D)(n, e.ssrc, !1),
                    sinkWantAsInt: (0, r.q)(n, e.ssrc),
                    codec: { id: e.codecPayloadType, name: e.codecName },
                    bytesSent: e.bytesSent,
                    packetsSent: e.packetsSent,
                    packetsLost: Math.max(0, e.packetsLost),
                    fractionLost: 100 * e.fractionLost,
                    audioLevel: e.audioLevel / 32768,
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
                let t = o(e, n);
                null != t && ((c = (c ?? 0) + t.bytesSent), _.push(t));
            });
        else if (null != t) {
            let e = o(t, n);
            null != e && ((c = (c ?? 0) + e.bytesSent), _.push(e));
        }
    }
    let f = {};
    null != d.inbound &&
        d.inbound.forEach((e) => {
            let { id: t, audio: o, video: c, videos: d, playout: _ } = e;
            if (
                ((f[t] = []),
                null != o &&
                    ((u = (u ?? 0) + o.bytesReceived),
                    f[t].push({
                        type: "audio",
                        ssrc: o.ssrc,
                        sinkWant: (0, r.D)(n, o.ssrc, !1),
                        sinkWantAsInt: (0, r.q)(n, o.ssrc),
                        codec: { id: o.codecPayloadType, name: o.codecName },
                        bytesReceived: o.bytesReceived,
                        packetsReceived: o.packetsReceived,
                        packetsLost: o.packetsLost,
                        fractionLost: 100 * o.fractionLost,
                        fecPacketsReceived: o.fecPacketsReceived,
                        fecPacketsDiscarded: o.fecPacketsDiscarded,
                        audioLevel: o.audioLevel / 32768,
                        audioDetected: o.speaking,
                        currentSampleRate: o.currentSampleRate,
                        jitter: o.jitter,
                        jitterBuffer: o.jitterBuffer,
                        jitterBufferPreferred: o.jitterBufferPreferred,
                        decodingCNG: o.decodingCNG,
                        decodingMutedOutput: o.decodingMutedOutput,
                        decodingNormal: o.decodingNormal,
                        decodingPLC: o.decodingPLC,
                        decodingPLCCNG: o.decodingPLCCNG,
                        nackCount: o.nackCount,
                        accelerateRate: 100 * o.accelerateRate,
                        expandRate: 100 * o.expandRate,
                        preemptiveExpandRate: 100 * o.preemptiveExpandRate,
                        speechExpandRate: 100 * o.speechExpandRate,
                        secondaryDecodedRate: 100 * o.secondaryDecodedRate,
                        opSilence: o.opSilence,
                        opNormal: o.opNormal,
                        opMerge: o.opMerge,
                        opExpand: o.opExpand,
                        opAccelerate: o.opAccelerate,
                        opPreemptiveExpand: o.opPreemptiveExpand,
                        opCNG: o.opCNG,
                        delayEstimate: o.delayEstimate,
                        passthroughCount: o.passthroughCount,
                        decryptSuccessCount: o.decryptSuccessCount,
                        decryptFailureCount: o.decryptFailureCount,
                        decryptDuration: o.decryptDuration,
                        decryptAttempts: o.decryptAttempts,
                        decryptMissingKeyCount: o.decryptMissingKeyCount,
                        decryptInvalidNonceCount: o.decryptInvalidNonceCount,
                        ...(null != _
                            ? a({
                                  audioJitterBuffer: _.audioJitterBuffer,
                                  audioJitterBufferSamples: _.audioJitterBufferSamples,
                                  audioJitterDelay: _.audioJitterDelay,
                                  audioJitterDelaySamples: _.audioJitterDelaySamples,
                                  audioJitterTarget: _.audioJitterTarget,
                                  audioJitterTargetSamples: _.audioJitterTargetSamples,
                                  audioPlayoutUnderruns: _.audioPlayoutUnderruns,
                                  relativeReceptionDelay: _.relativeReceptionDelay,
                                  relativePlayoutDelay: _.relativePlayoutDelay,
                              })
                            : {}),
                    })),
                null != d)
            )
                d.forEach((e) => {
                    let r = l(e, n, s, _);
                    if (null != r) {
                        let n = i(e.rtpStats);
                        (u = (u ?? 0) + n), f[t].push(r);
                    }
                });
            else if (null != c) {
                let e = l(c, n, s, _);
                if (null != e) {
                    let n = i(c.rtpStats);
                    (u = (u ?? 0) + n), f[t].push(e);
                }
            }
        });
    let { transport: p, clips: h } = d,
        E = {};
    null != p &&
        ((E.availableOutgoingBitrate = p.sendBandwidth),
        (E.ping = p.rtt),
        (E.decryptionFailures = p.decryptionFailures),
        null != p.routingFailures && (E.routingFailures = p.routingFailures),
        (E.localAddress = p.localAddress),
        (E.pacerDelay = p.pacerDelay),
        null != p.receiverReports && (E.receiverReports = p.receiverReports),
        (E.receiverBitrateEstimate = p.receiverBitrateEstimate),
        (E.outboundBitrateEstimate = p.outboundBitrateEstimate),
        (E.inboundBitrateEstimate = p.inboundBitrateEstimate ?? 0),
        (E.packetsReceived = p.packetsReceived),
        (E.packetsSent = p.packetsSent),
        null != p.secureFramesProtocolVersion && (E.secureFramesProtocolVersion = p.secureFramesProtocolVersion)),
        (p?.bytesReceived == null && (null == u || Number.isNaN(u))) ||
            (E.bytesReceived = p?.bytesReceived ?? u ?? void 0),
        (p?.bytesSent == null && (null == c || Number.isNaN(c))) || (E.bytesSent = p?.bytesSent ?? c ?? void 0);
    let { screenshare: m, camera: g, audioDevice: A } = d;
    return {
        mediaEngineConnectionId: e,
        transport: E,
        screenshare: m,
        camera:
            null != g
                ? {
                      capturedFramesDropped: g.capturedFramesDropped,
                      capturedFramesCount: g.capturedFramesCount,
                      capturedFramesMean: g.capturedFramesMean,
                      capturedFramesStdev: g.capturedFramesStdev,
                  }
                : null,
        clips: h,
        audioDevice: A,
        rtp: { inbound: f, outbound: _ },
    };
}
