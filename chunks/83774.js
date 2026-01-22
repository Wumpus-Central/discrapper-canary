n.d(t, { A: () => u }), n(747238), n(896048), n(321073);
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
function s(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function o(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function l(e) {
    return {
        id: e.payloadType,
        name: e.mimeType.split("/").slice(1)[0],
    };
}
function c(e) {
    return null === e || 0 === e;
}
function u(e, t, n, i, s) {
    var u, d, f, p, _, h, m;
    let g = {},
        E = {},
        b = [],
        y = [];
    for (let t of e.values())
        switch (t.type) {
            case "candidate-pair":
                g[t.id] = t;
                break;
            case "codec":
                E[t.id] = t;
                break;
            case "inbound-rtp":
                b.push(t);
                break;
            case "outbound-rtp":
                y.push(t);
        }
    let O = Object.values(g).find((e) => "succeeded" === e.state);
    if (void 0 === O) return null;
    let A = [];
    for (let e of y) {
        let t = E[e.codecId];
        if (null == t) continue;
        let i = {
            type: e.kind,
            ssrc: e.ssrc,
            timestamp: e.timestamp,
            sinkWant: (0, r.D)(n, e.ssrc, "video" === e.kind),
            sinkWantAsInt: (0, r.q)(n, e.ssrc),
            codec: l(t),
            bytesSent: e.bytesSent,
            packetsSent: e.packetsSent,
            bitrateTarget: e.targetBitrate,
        };
        if ("audio" === e.kind) A.push(o(a({}, i), { type: "audio" }));
        else if ("video" === e.kind && s) {
            let t =
                null !== e.frameWidth
                    ? {
                          width: e.frameWidth,
                          height: e.frameHeight,
                      }
                    : void 0;
            A.push(
                o(a({}, i), {
                    framesEncoded: e.framesEncoded,
                    keyFramesEncoded: e.keyFramesEncoded,
                    firCount: e.firCount,
                    nackCount: e.nackCount,
                    pliCount: e.pliCount,
                    qpSum: e.qpSum,
                    averageEncodeTime:
                        null == e.framesEncoded || c(e.totalEncodeTime)
                            ? void 0
                            : ((1000 * e.totalEncodeTime) / e.framesEncoded).toFixed(1),
                    resolution: t,
                    framesSent: e.framesSent,
                    frameRateInput: e.framesPerSecond,
                    type: "video",
                }),
            );
        }
    }
    let v = {};
    for (let e of b) {
        let s = E[e.codecId];
        if (null == s) continue;
        let c = t(e.ssrc);
        if (null == c) continue;
        let u = {
            type: e.kind,
            ssrc: e.ssrc,
            timestamp: e.timestamp,
            sinkWant: (0, r.D)(n, e.ssrc, "video" === e.kind),
            sinkWantAsInt: (0, r.q)(n, e.ssrc),
            sinkWantLocal: (0, r.D)(i, e.ssrc, "video" === e.kind),
            sinkWantLocalAsInt: (0, r.q)(i, e.ssrc),
            codec: l(s),
            bytesReceived: e.bytesReceived,
            packetsReceived: e.packetsReceived,
            packetsLost: e.packetsLost,
            nackCount: e.nackCount,
        };
        if ("audio" === e.kind) {
            let t =
                void 0 !== e.jitterBufferDelay && void 0 !== e.jitterBufferEmittedCount
                    ? Math.round((1000 * e.jitterBufferDelay) / e.jitterBufferEmittedCount)
                    : 0;
            null == v[c] && (v[c] = []),
                v[c].push(
                    o(a({}, u), {
                        audioLevel: e.audioLevel,
                        jitter: 1000 * e.jitter,
                        jitterBuffer: t,
                    }),
                );
        } else if ("video" === e.kind) {
            null == v[c] && (v[c] = []);
            let t =
                null !== e.frameWidth
                    ? {
                          width: e.frameWidth,
                          height: e.frameHeight,
                      }
                    : void 0;
            v[c].push(
                o(a({}, u), {
                    resolution: t,
                    framesDecoded: e.framesDecoded,
                    keyFramesDecoded: e.keyFramesDecoded,
                    framesDropped: e.framesDropped,
                    framesReceived: e.framesReceived,
                    frameRateDecode: e.framesPerSecond,
                    averageDecodeTime:
                        null == e.framesDecoded || null == e.totalDecodeTime
                            ? void 0
                            : ((1000 * e.totalDecodeTime) / e.framesDecoded).toFixed(1),
                    firCount: e.firCount,
                    pliCount: e.pliCount,
                    freezeCount: e.freezeCount,
                    pauseCount: e.pauseCount,
                    totalFreezesDuration: 1000 * (null != (_ = e.totalFreezesDuration) ? _ : 0),
                    totalPausesDuration: 1000 * (null != (h = e.totalPausesDuration) ? h : 0),
                    totalFramesDuration: 1000 * (null != (m = e.totalInterFrameDelay) ? m : 0),
                    sumOfSquaredFramesDurations: e.totalSquaredInterFrameDelay,
                    qpSum: e.qpSum,
                    decoderImplementationName: "WebRTC",
                }),
            );
        }
    }
    let S =
            "firefox" === (null != (u = platform.name) ? u : "unknown").toLowerCase() &&
            142 === parseInt(null != (d = platform.version) ? d : "", 10),
        I = (null != (f = O.currentRoundTripTime) ? f : 0) * (S ? 1 : 1000);
    return {
        transport: {
            availableOutgoingBitrate: null != (p = O.availableOutgoingBitrate) ? p : 0,
            bytesReceived: O.bytesReceived,
            bytesSent: O.bytesSent,
            ping: I,
        },
        rtp: {
            inbound: v,
            outbound: A,
        },
    };
}
