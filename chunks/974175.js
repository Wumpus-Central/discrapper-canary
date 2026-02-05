r.d(t, { R: () => C, q7: () => R }), r(321073), r(134528), r(947204);
var n = r(627968),
    a = r(64700),
    i = r(796873),
    s = r.n(i),
    l = r(412780),
    o = r(229659),
    d = r(522278);
let c = {
    accelerateRate: "Accelerate Rate",
    audioDetected: "Audio Detected",
    audioLevel: "Audio Level",
    availableOutgoingBitrate: "Available Outgoing Bitrate",
    averageDecodeTime: "Average Decode Time",
    averageEncodeTime: "Average Encode Time",
    bandwidthLimitedFrameRate: "Bandwidth Limited Frame Rate",
    bandwidthLimitedResolution: "Bandwidth Limited Resolution",
    bitrate: "Bitrate",
    bitrateTarget: "Bitrate (Target)",
    bytesReceived: "Bytes Received",
    bytesSent: "Bytes Sent",
    capturedFramesCount: "Captured Frames per Second",
    capturedFramesDropped: "Captured Frames Dropped",
    capturedFramesMean: "Captured Frames Mean (ms)",
    capturedFramesStdev: "Captured Frames Standard Deviation (ms)",
    codec: "Codec",
    cpuLimitedResolution: "CPU Limited Resolution",
    currentDelay: "Current Delay",
    currentSampleRate: "Current Sample Rate",
    decoderImplementationName: "Decoder",
    decodingCNG: "Decoding CNG",
    decodingMutedOutput: "Decoding Muted Output",
    decodingNormal: "Decoding Normal",
    decodingPLC: "Decoding PLC",
    decodingPLCCNG: "Decoding PLC CNG",
    decryptFailureCount: "Decrypt Failures",
    decryptionFailures: "Decryption Failures",
    decryptSuccessCount: "Decrypt Successes",
    delayEstimate: "Delay Estimate",
    encoderImplementationName: "Encoder",
    encoderQualityPsnr: "Encoder PSNR (dB)",
    encoderQualityVmaf: "Encoder VMAF",
    encodeUsage: "Encode Usage",
    encryptFailureCount: "Encrypt Failures",
    encryptSuccessCount: "Encrypt Successes",
    expandRate: "Expand Rate",
    fecPacketsDiscarded: "FEC Packets Discarded",
    fecPacketsReceived: "FEC Packets Received",
    filter: "Filter",
    firCount: "FIR",
    fractionLost: "Packet Loss",
    frameRateDecode: "Frame Rate (Decode)",
    frameRateEncode: "Frame Rate (Encode)",
    frameRateInput: "Frame Rate (Input)",
    frameRateNetwork: "Frame Rate (Network)",
    frameRateRender: "Frame Rate (Render)",
    framesDecoded: "Frames Decoded",
    framesDecodeErrors: "Decoder Error Count",
    framesDropped: "Frames Dropped",
    framesDroppedCongestionWindow: "Frames Dropped by Congestion Window",
    framesDroppedEncoder: "Frames Dropped by Encoder",
    framesDroppedEncoderQueue: "Frames Dropped by Encoder Queue",
    framesDroppedRateLimiter: "Frames Dropped by Bitrate Limiter",
    framesEncoded: "Frames Encoded",
    framesReceived: "Frames Received",
    framesSent: "Frames Sent",
    freezeCount: "Freeze Count",
    hostname: "Hostname",
    hybridCaptureMethodSwitches: "Hybrid Capture Method Switches",
    hybridDxgiFrames: "Hybrid DXGI Frames",
    hybridGdiBitBltFrames: "Hybrid GDI BitBlt Frames",
    hybridGdiFrames: "Hybrid GDI Frames",
    hybridGdiPrintWindowFrames: "Hybrid GDI PrintWindow Frames",
    hybridGraphicsCaptureFrames: "Hybrid Graphics Capture Frames",
    hybridVideohookFrames: "Hybrid Videohook Frames",
    inboundBitrateEstimate: "Inbound Bitrate Estimate",
    jitter: "Jitter",
    jitterBuffer: "Jitter Buffer",
    jitterBufferPreferred: "Jitter Buffer (Preferred)",
    keyFrameInterval: "Key Frame Interval",
    keyFramesDecoded: "Key Frames Decoded",
    keyFramesEncoded: "Key Frames Encoded",
    localAddress: "Local Address",
    minPlayoutDelay: "Minimum Playout Delay",
    nackCount: "NACK",
    networkFramesDropped: "Frames Dropped By Network",
    opAccelerate: "Accelerated Frames",
    opCNG: "CNG Frames",
    opExpand: "Expand Frames",
    opMerge: "Merge Frames",
    opNormal: "Normal Frames",
    opPreemptiveExpand: "Preemptive Expand Frames",
    opSilence: "Silent Frames",
    outboundBitrateEstimate: "Outbound Bitrate Estimate",
    pacerDelay: "Pacer Delay",
    packetsLost: "Packets Lost",
    packetsReceived: "Packets Received",
    packetsSent: "Packets Sent",
    passthroughCount: "Passthrough",
    pauseCount: "Pause Count",
    ping: "Ping",
    pliCount: "PLI",
    preemptiveExpandRate: "Pre-emptive Expand Rate",
    qpSum: "QP Sum",
    qualityDecodeErrors: "Encoder Quality Decode Errors",
    qualityDecoderReboots: "Encoder Quality Decoder Reboots",
    qualityFrameDrops: "Encoder Quality Frame Drops",
    qualityScoreErrors: "Encoder Quality Score Errors",
    qualitySizeMismatches: "Encoder Quality Size Mismatches",
    quartzFrames: "Quartz Frames",
    receiverBitrateEstimate: "Receiver Bitrate Estimate (REMB)",
    relativePlayoutDelay: "Relative Playout Delay",
    relativeReceptionDelay: "Relative Reception Delay",
    renderDelay: "Render Delay",
    resolution: "Resolution",
    routingFailures: "Routing Failures",
    sampleRateMismatchPercent: "Sample Rate Mismatch",
    screenCaptureKitFrames: "ScreenCaptureKit frames",
    screenshareFrames: "WebRTC Frames",
    secondaryDecodedRate: "Secondary Decode Rate",
    secureFramesProtocolVersion: "DAVE Protocol",
    sinkWant: "Sink Quality Level (Remote)",
    sinkWantLocal: "Sink Quality Level (Local)",
    speechExpandRate: "Speech Expand Rate",
    ssrc: "SSRC",
    targetDelay: "Target Delay",
    totalFramesDuration: "Frames Duration (ms)",
    totalFreezesDuration: "Freezes Duration (ms)",
    totalPausesDuration: "Pauses Duration (ms)",
    videoEntropy: "Video Entropy",
    videohookBackend: "Videohook Backend",
    videohookFrames: "Videohook Frames",
};
function u(e) {
    return `${(e / 1e3).toFixed(2)} Kbps`;
}
function m(e) {
    return s().filesize(e);
}
function p(e) {
    return e;
}
function y(e) {
    return `${e} ms`;
}
function h(e) {
    return `${e.toFixed(0)}%`;
}
function A(e) {
    return e ? "Yes" : "No";
}
function g(e) {
    return 20 * Math.log(e);
}
function f(e) {
    let { last: t } = e;
    return `${t} ms`;
}
function v(e) {
    return e.toFixed(2);
}
let C = {
        audioJitterBuffer: !0,
        audioJitterDelay: !0,
        audioJitterTarget: !0,
        audioPlayoutUnderruns: !0,
        decryptAttempts: !0,
        decryptDuration: !0,
        decryptInvalidNonceCount: !0,
        decryptMissingKeyCount: !0,
        encryptAttempts: !0,
        encryptDuration: !0,
        encryptMaxAttempts: !0,
        encryptMissingKeyCount: !0,
        fractionLost: !0,
        framesCaptured: !0,
        framesRendered: !0,
        hqSimulcastStreamEncoded: !0,
        lqSimulcastStreamEncoded: !0,
        noiseCancellerFrames: !0,
        noiseCancellerProcessTime: !0,
        sinkWantAsInt: !0,
        sinkWantLocalAsInt: !0,
        sumOfSquaredFramesDurations: !0,
        timestamp: !0,
        type: !0,
        videoJitterBuffer: !0,
        videoJitterDelay: !0,
        videoJitterTarget: !0,
        voiceActivityDetectorProcessTime: !0,
    },
    x = {
        accelerateRate: h,
        audioDetected: A,
        audioLevel: function (e) {
            return e <= 0 ? "-∞ dB" : `${g(e).toFixed(2)} dB`;
        },
        availableOutgoingBitrate: u,
        averageDecodeTime: y,
        averageEncodeTime: y,
        bandwidthLimitedFrameRate: A,
        bandwidthLimitedResolution: A,
        bitrate: u,
        bitrateTarget: u,
        bytesReceived: m,
        bytesSent: m,
        codec: function (e) {
            let { id: t, name: r } = e;
            return (r = (r = "" === r ? "unknown" : r) ?? "unknown"), `${r[0].toUpperCase()}${r.slice(1)} (${t})`;
        },
        cpuLimitedResolution: A,
        currentSampleRate: function (e) {
            return e % 100 == 0 ? `${e / 1e3} kHz` : `${e} Hz`;
        },
        currentDelay: y,
        decoderImplementationName: p,
        delayEstimate: y,
        encoderImplementationName: p,
        encoderQualityPsnr: function (e) {
            return `${Math.max(e, 0).toFixed(2)} dB`;
        },
        encoderQualityVmaf: v,
        encodeUsage: h,
        expandRate: h,
        filter: p,
        fractionLost: h,
        inboundBitrateEstimate: u,
        jitter: y,
        jitterBuffer: y,
        jitterBufferPreferred: y,
        keyFrameInterval: y,
        minPlayoutDelay: y,
        outboundBitrateEstimate: u,
        pacerDelay: y,
        ping: y,
        preemptiveExpandRate: h,
        receiverBitrateEstimate: u,
        relativePlayoutDelay: f,
        relativeReceptionDelay: f,
        renderDelay: y,
        resolution: (e) => {
            let { width: t, height: r } = e;
            return `${t}x${r}`;
        },
        sampleRateMismatchPercent: h,
        secondaryDecodedRate: h,
        secureFramesProtocolVersion: function (e) {
            return e > 0 ? `Version ${e}` : "Disabled";
        },
        speechExpandRate: h,
        targetDelay: y,
        videoEntropy: v,
        videohookBackend: function (e) {
            let t = ["N/A", "Direct3D 9", "Direct3D 10", "Direct3D 11", "Direct3D 12", "OpenGL", "Vulkan"];
            return e < t.length ? t[e] : "Unknown";
        },
    },
    E = {
        audioLevel: function (e) {
            return Math.max(g(e), -100) + 100;
        },
    },
    D = (e) => e,
    b = (e) => {
        let [t] = a.useState([]);
        return (
            t.push({ value: e.value, time: Date.now() }),
            t.length > 600 && t.shift(),
            (0, n.jsx)(o.A, { converter: e.converter, dataPoints: t, width: e.width, height: e.height })
        );
    };
function R(e) {
    let { label: t, value: r, section: a } = e,
        i = x[t] ?? D,
        s = E[t],
        u =
            l.iA[t] &&
            (Array.isArray(r) && r.length > 0 && "number" == typeof r[0].value
                ? (0, n.jsx)(o.A, { converter: s, dataPoints: r, width: 300, height: 100 })
                : "number" == typeof r
                  ? (0, n.jsx)(b, { converter: s, value: r, width: 300, height: 100 })
                  : void 0),
        m = Array.isArray(r) ? r.at(-1)?.value : r;
    return (0, n.jsx)(d.A, { label: t, valueRendered: i(m), section: a, renderGraph: u, children: c[t] ?? t });
}
