"use strict";
n.d(t, { A: () => s }), n(321073);
var r = n(752163);
function i(e) {
    return { id: e.payloadType, name: e.mimeType.split("/").slice(1)[0] };
}
function s(e, t, n, s, a) {
    let o = {},
        l = {},
        u = [],
        c = [];
    for (let t of e.values())
        switch (t.type) {
            case "candidate-pair":
                o[t.id] = t;
                break;
            case "codec":
                l[t.id] = t;
                break;
            case "inbound-rtp":
                u.push(t);
                break;
            case "outbound-rtp":
                c.push(t);
        }
    let d = Object.values(o).find((e) => "succeeded" === e.state);
    if (void 0 === d) return null;
    let _ = [];
    for (let e of c) {
        let t = l[e.codecId];
        if (null == t) continue;
        let s = {
            type: e.kind,
            ssrc: e.ssrc,
            timestamp: e.timestamp,
            sinkWant: (0, r.D)(n, e.ssrc, "video" === e.kind),
            sinkWantAsInt: (0, r.q)(n, e.ssrc),
            codec: i(t),
            bytesSent: e.bytesSent,
            packetsSent: e.packetsSent,
            bitrateTarget: e.targetBitrate,
        };
        if ("audio" === e.kind) _.push({ ...s, type: "audio" });
        else if ("video" === e.kind && a) {
            var f;
            let t = null !== e.frameWidth ? { width: e.frameWidth, height: e.frameHeight } : void 0;
            _.push({
                ...s,
                framesEncoded: e.framesEncoded,
                keyFramesEncoded: e.keyFramesEncoded,
                firCount: e.firCount,
                nackCount: e.nackCount,
                pliCount: e.pliCount,
                qpSum: e.qpSum,
                averageEncodeTime:
                    null == e.framesEncoded || null === (f = e.totalEncodeTime) || 0 === f
                        ? void 0
                        : ((1e3 * e.totalEncodeTime) / e.framesEncoded).toFixed(1),
                resolution: t,
                framesSent: e.framesSent,
                frameRateInput: e.framesPerSecond,
                encoderImplementationName: e.encoderImplementation,
                powerEfficientEncoder: e.powerEfficientEncoder,
                type: "video",
            });
        }
    }
    let p = {};
    for (let e of u) {
        let a = l[e.codecId];
        if (null == a) continue;
        let o = t(e.ssrc);
        if (null == o) continue;
        let u = {
            type: e.kind,
            ssrc: e.ssrc,
            timestamp: e.timestamp,
            sinkWant: (0, r.D)(n, e.ssrc, "video" === e.kind),
            sinkWantAsInt: (0, r.q)(n, e.ssrc),
            sinkWantLocal: (0, r.D)(s, e.ssrc, "video" === e.kind),
            sinkWantLocalAsInt: (0, r.q)(s, e.ssrc),
            codec: i(a),
            bytesReceived: e.bytesReceived,
            packetsReceived: e.packetsReceived,
            packetsLost: e.packetsLost,
            nackCount: e.nackCount,
        };
        if ("audio" === e.kind) {
            let t =
                void 0 !== e.jitterBufferDelay && void 0 !== e.jitterBufferEmittedCount
                    ? Math.round((1e3 * e.jitterBufferDelay) / e.jitterBufferEmittedCount)
                    : 0;
            null == p[o] && (p[o] = []),
                p[o].push({ ...u, audioLevel: e.audioLevel, jitter: 1e3 * e.jitter, jitterBuffer: t });
        } else if ("video" === e.kind) {
            null == p[o] && (p[o] = []);
            let t = null !== e.frameWidth ? { width: e.frameWidth, height: e.frameHeight } : void 0;
            p[o].push({
                ...u,
                resolution: t,
                framesDecoded: e.framesDecoded,
                keyFramesDecoded: e.keyFramesDecoded,
                framesDropped: e.framesDropped,
                framesReceived: e.framesReceived,
                frameRateDecode: e.framesPerSecond,
                averageDecodeTime:
                    null == e.framesDecoded || null == e.totalDecodeTime
                        ? void 0
                        : ((1e3 * e.totalDecodeTime) / e.framesDecoded).toFixed(1),
                firCount: e.firCount,
                pliCount: e.pliCount,
                freezeCount: e.freezeCount,
                pauseCount: e.pauseCount,
                totalFreezesDuration: 1e3 * (e.totalFreezesDuration ?? 0),
                totalPausesDuration: 1e3 * (e.totalPausesDuration ?? 0),
                totalFramesDuration: 1e3 * (e.totalInterFrameDelay ?? 0),
                sumOfSquaredFramesDurations: e.totalSquaredInterFrameDelay,
                qpSum: e.qpSum,
                decoderImplementationName: e.decoderImplementation ?? "WebRTC",
                powerEfficientDecoder: e.powerEfficientDecoder,
            });
        }
    }
    let h = "firefox" === (platform.name ?? "unknown").toLowerCase() && 142 === parseInt(platform.version ?? "", 10),
        E = (d.currentRoundTripTime ?? 0) * (h ? 1 : 1e3);
    return {
        transport: {
            availableOutgoingBitrate: d.availableOutgoingBitrate ?? 0,
            bytesReceived: d.bytesReceived,
            bytesSent: d.bytesSent,
            ping: E,
        },
        rtp: { inbound: p, outbound: _ },
    };
}
