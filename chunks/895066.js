n.d(t, {
    B: () => h,
    Z: () => g,
}),
    n(388685),
    n(539854);
var r = n(392711),
    i = n.n(r),
    a = n(47770),
    o = n(46973),
    s = n(379649),
    l = n(909766),
    c = n(140828),
    u = n(179654);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e) {
    let t = {};
    for (let n in e) {
        let r = e[n];
        (t[n + "_mean"] = null != r ? r.mean : 0),
            (t[n + "_p75"] = null != r ? r.p75 : 0),
            (t[n + "_p95"] = null != r ? r.p95 : 0),
            (t[n + "_p99"] = null != r ? r.p99 : 0),
            (t[n + "_max"] = null != r ? r.max : 0);
    }
    return t;
}
var h = (function (e) {
    return (e.InputDeviceSampleRateChanged = "input-device-sample-rate-changed"), e;
})({});
class g extends a.Z {
    start() {
        this.connection.on(o.Sh.Stats, this.sampleStats);
    }
    stop() {
        this.connection.off(o.Sh.Stats, this.sampleStats);
    }
    getMosStats() {
        let e = i().reduce(
            this.inboundStats,
            (e, t) => {
                (e.mosSum += t.mosSum), (e.mosCount += t.mosCount);
                for (var n = 0; n < 5; n++) e.mosBuckets[n] += t.mosBuckets[n];
                return e;
            },
            {
                mosSum: 0,
                mosCount: 0,
                mosBuckets: [0, 0, 0, 0, 0],
            },
        );
        return {
            mos_mean: e.mosCount > 0 ? e.mosSum / e.mosCount : 0,
            mos_1: e.mosBuckets[1],
            mos_2: e.mosBuckets[2],
            mos_3: e.mosBuckets[3],
            mos_4: e.mosBuckets[4],
        };
    }
    getPacketStats() {
        let e = i().reduce(
            this.inboundStats,
            (e, t) => (
                (e.packetsReceived += t.packetsReceived),
                (e.packetsReceivedLost += t.packetsLost),
                (e.nackCount += t.nackCount),
                (e.fecPacketsReceived += t.fecPacketsReceived),
                (e.fecPacketsDiscarded += t.fecPacketsDiscarded),
                e
            ),
            {
                packetsReceived: 0,
                packetsReceivedLost: 0,
                nackCount: 0,
                fecPacketsReceived: 0,
                fecPacketsDiscarded: 0,
            },
        );
        return {
            packets_sent: this.outboundStats.packetsSent,
            packets_sent_lost: this.outboundStats.packetsLost,
            packets_received: e.packetsReceived,
            packets_received_lost: e.packetsReceivedLost,
            num_nacks_sent: e.nackCount,
            fec_packets_received: e.fecPacketsReceived,
            fec_packets_discarded: e.fecPacketsDiscarded,
        };
    }
    getBytesStats() {
        let e = i().reduce(this.inboundStats, (e, t) => e + t.bytesReceived, 0),
            t = this.outboundStats.aggregationDurationMs / 1000;
        return {
            bytes_sent: this.outboundStats.bytesSent,
            bytes_received: e,
            outbound_bandwidth_estimate: t > 0 ? Math.round((8 * this.outboundStats.bytesAvailable) / t) : 0,
            audio_target_bitrate: t > 0 ? Math.round((8 * this.outboundStats.bytesTarget) / t) : 0,
        };
    }
    getNetworkStats() {
        return this.networkQuality.getStats();
    }
    getSystemResourceStats() {
        return this.systemResources.getStats();
    }
    getBufferStats() {
        let e = i().reduce(
            this.inboundStats,
            (e, t) => (
                (null == e ||
                    (null != t.bufferStats.audioJitterBuffer &&
                        null != e.audioJitterBuffer &&
                        t.bufferStats.audioJitterBuffer.p75 > e.audioJitterBuffer.p75)) &&
                    (e = t.bufferStats),
                e
            ),
            null,
        );
        return f(
            {},
            m({
                audio_jitter_buffer: null != e ? e.audioJitterBuffer : null,
                audio_jitter_target: null != e ? e.audioJitterTarget : null,
                audio_jitter_delay: null != e ? e.audioJitterDelay : null,
                relative_reception_delay: null != e ? e.relativeReceptionDelay : null,
                relative_playout_delay: null != e ? e.relativePlayoutDelay : null,
            }),
        );
    }
    getFrameOpStats() {
        let e = i().reduce(
            this.inboundStats,
            (e, t) => (
                null != t.frameOpStats.silent && (e.silent += t.frameOpStats.silent),
                null != t.frameOpStats.normal && (e.normal += t.frameOpStats.normal),
                null != t.frameOpStats.merged && (e.merged += t.frameOpStats.merged),
                null != t.frameOpStats.expanded && (e.expanded += t.frameOpStats.expanded),
                null != t.frameOpStats.accelerated && (e.accelerated += t.frameOpStats.accelerated),
                null != t.frameOpStats.preemptiveExpanded &&
                    (e.preemptiveExpanded += t.frameOpStats.preemptiveExpanded),
                null != t.frameOpStats.cng && (e.cng += t.frameOpStats.cng),
                e
            ),
            {
                silent: 0,
                normal: 0,
                merged: 0,
                expanded: 0,
                accelerated: 0,
                preemptiveExpanded: 0,
                cng: 0,
            },
        );
        return {
            frame_op_silent: e.silent,
            frame_op_normal: e.normal,
            frame_op_merged: e.merged,
            frame_op_expanded: e.expanded,
            frame_op_accelerated: e.accelerated,
            frame_op_preemptive_expanded: e.preemptiveExpanded,
            frame_op_cng: e.cng,
        };
    }
    getDurationStats() {
        return {
            duration_listening: this.duration.listening,
            duration_speaking: this.duration.speaking,
            duration_participation: this.duration.participation,
            duration_connected: this.duration.connected,
        };
    }
    getTransportStats() {
        return {
            decryption_failures: this.decryptionFailures,
            routing_failures: this.routingFailures,
        };
    }
    getE2EEStats() {
        let e = i().reduce(
            this.inboundStats,
            (e, t) => {
                var n, r, i, a, o, s, l, c, u;
                return (
                    (e.passthroughCount += null != (n = t.passthroughCount) ? n : 0),
                    (e.decryptSuccessCount += null != (r = t.decryptSuccessCount) ? r : 0),
                    (e.decryptFailureCount += null != (i = t.decryptFailureCount) ? i : 0),
                    (e.decryptDuration += null != (a = t.decryptDuration) ? a : 0),
                    (e.decryptAttempts += null != (o = t.decryptAttempts) ? o : 0),
                    (e.decryptMissingKeyCount += null != (s = t.decryptMissingKeyCount) ? s : 0),
                    (e.decryptInvalidNonceCount += null != (l = t.decryptInvalidNonceCount) ? l : 0),
                    (e.decryptFailureAfterSuccessCount +=
                        (null != (c = t.decryptFailureCount) ? c : 0) -
                        (null != (u = t.decryptFailureBeforeSuccessCount) ? u : 0)),
                    e
                );
            },
            {
                passthroughCount: 0,
                decryptSuccessCount: 0,
                decryptFailureCount: 0,
                decryptDuration: 0,
                decryptAttempts: 0,
                decryptMissingKeyCount: 0,
                decryptInvalidNonceCount: 0,
                decryptFailureAfterSuccessCount: 0,
            },
        );
        return {
            decrypt_passthrough_count: e.passthroughCount,
            decrypt_success_count: e.decryptSuccessCount,
            decrypt_failure_count: e.decryptFailureCount,
            decrypt_duration: e.decryptDuration,
            decrypt_attempts: e.decryptAttempts,
            decrypt_missing_key_count: e.decryptMissingKeyCount,
            decrypt_invalid_nonce_count: e.decryptInvalidNonceCount,
            decrypt_failure_after_success_count: e.decryptFailureAfterSuccessCount,
            encrypt_passthrough_count: this.outboundStats.passthroughCount,
            encrypt_success_count: this.outboundStats.encryptSuccessCount,
            encrypt_failure_count: this.outboundStats.encryptFailureCount,
            encrypt_duration: this.outboundStats.encryptDuration,
            encrypt_attempts: this.outboundStats.encryptAttempts,
            encrypt_max_attempts: this.outboundStats.encryptMaxAttempts,
            encrypt_missing_key_count: this.outboundStats.encryptMissingKeyCount,
        };
    }
    getAudioDeviceStats() {
        var e, t, n, r;
        return {
            input_device_restart_count: null == (e = this.inputDeviceStats.restartCount) ? void 0 : e.accumulated,
            output_device_restart_count: null == (t = this.outputDeviceStats.restartCount) ? void 0 : t.accumulated,
            input_device_time_to_first_audio: this.inputDeviceStats.timeToFirstCallbackMs,
            output_device_time_to_first_audio: this.outputDeviceStats.timeToFirstCallbackMs,
            input_device_buffer_overfull_count:
                null == (n = this.inputDeviceStats.bufferViolations) ? void 0 : n.accumulated,
            output_device_buffer_underrun_count:
                null == (r = this.outputDeviceStats.bufferViolations) ? void 0 : r.accumulated,
            input_device_session_sample_rate: this.inputDeviceStats.sessionSampleRate,
            output_device_session_sample_rate: this.outputDeviceStats.sessionSampleRate,
            input_device_time_from_connect_to_first_audio_ms: this.inputDeviceStats.timeFromConnectToFirstCallbackMs,
            output_device_time_from_connect_to_first_audio_ms: this.outputDeviceStats.timeFromConnectToFirstCallbackMs,
        };
    }
    getAudioLevelStats() {
        let e = [1, 5, 10, 25, 50, 75, 90, 95, 99],
            t = this.outboundStats.speakingAudioLevel.getReport(e);
        return {
            outbound_audio_level_db_p1: t.percentiles[1],
            outbound_audio_level_db_p5: t.percentiles[5],
            outbound_audio_level_db_p10: t.percentiles[10],
            outbound_audio_level_db_p25: t.percentiles[25],
            outbound_audio_level_db_p50: t.percentiles[50],
            outbound_audio_level_db_p75: t.percentiles[75],
            outbound_audio_level_db_p90: t.percentiles[90],
            outbound_audio_level_db_p95: t.percentiles[95],
            outbound_audio_level_db_p99: t.percentiles[99],
            outbound_audio_level_db_max: t.max,
            outbound_audio_level_db_mean: t.mean,
        };
    }
    getPeriodicStats() {
        let e = [];
        for (let [m, h] of Object.entries(this.periodicInboundStats)) {
            let { previous: g, current: E, currentTimestampMs: b, previousTimestampMs: y, numRateSamples: O } = h;
            if (void 0 !== y && b > y) {
                var t, n, r, i, a, o, s, l, c, u, d, f, p, _;
                let v = b - y,
                    S = {
                        userId: m,
                        silent: null != (n = E.silent) ? n : 0 - (null != (t = g.silent) ? t : 0),
                        normal: null != (i = E.normal) ? i : 0 - (null != (r = g.normal) ? r : 0),
                        merged: null != (o = E.merged) ? o : 0 - (null != (a = g.merged) ? a : 0),
                        expanded: null != (l = E.expanded) ? l : 0 - (null != (s = g.expanded) ? s : 0),
                        accelerated: null != (u = E.accelerated) ? u : 0 - (null != (c = g.accelerated) ? c : 0),
                        preemptiveExpanded:
                            null != (f = E.preemptiveExpanded) ? f : 0 - (null != (d = g.preemptiveExpanded) ? d : 0),
                        cng: null != (_ = E.cng) ? _ : 0 - (null != (p = g.cng) ? p : 0),
                        accelerateRate: h.accelerateRateSum / O,
                        expandRate: h.expandRateSum / O,
                        preemptiveExpandRate: h.preemptiveExpandRateSum / O,
                        speechExpandRate: h.speechExpandRateSum / O,
                        durationMs: v,
                    };
                S.normal + S.merged + S.expanded + S.accelerated + S.preemptiveExpanded > 0 && e.push(S);
            }
            (this.periodicInboundStats[m].accelerateRateSum = 0),
                (this.periodicInboundStats[m].expandRateSum = 0),
                (this.periodicInboundStats[m].preemptiveExpandRateSum = 0),
                (this.periodicInboundStats[m].speechExpandRateSum = 0),
                (this.periodicInboundStats[m].numRateSamples = 0),
                (this.periodicInboundStats[m].previous = E),
                (this.periodicInboundStats[m].previousTimestampMs = b);
        }
        return e;
    }
    calculateMos(e, t) {
        let n = this.calculateR(e, t);
        return n < 0 ? 1 : n > 100 ? 4.5 : 1 + 0.035 * n + 0.0000071 * n * (n - 60) * (100 - n);
    }
    calculateR(e, t) {
        return 93.4 - (0.024 * e + (e > 177.3 ? 0.11 * (e - 177.3) : 0)) - (10 + (122 * t) / (t + 10));
    }
    constructor(e) {
        super(),
            d(this, "connection", void 0),
            d(this, "inboundStats", void 0),
            d(this, "outboundStats", void 0),
            d(this, "networkQuality", void 0),
            d(this, "systemResources", void 0),
            d(this, "duration", void 0),
            d(this, "decryptionFailures", void 0),
            d(this, "routingFailures", void 0),
            d(this, "periodicInboundStats", void 0),
            d(this, "inputDeviceStats", void 0),
            d(this, "outputDeviceStats", void 0),
            d(this, "sampleAudioDevice", void 0),
            d(this, "appendTargetRates", void 0),
            d(this, "sampleStats", void 0),
            (this.connection = e),
            (this.sampleAudioDevice = (e, t) => {
                var n, r, i;
                void 0 !== e &&
                    (void 0 !== e.restartCount && (t.restartCount = E(e.restartCount, t.restartCount)),
                    void 0 !== e.bufferViolations && (t.bufferViolations = E(e.bufferViolations, t.bufferViolations)),
                    (null != (n = e.timeToFirstCallbackMs) ? n : 0) !== 0 &&
                        void 0 === t.timeToFirstCallbackMs &&
                        (t.timeToFirstCallbackMs = e.timeToFirstCallbackMs),
                    (null != (r = e.sessionSampleRate) ? r : 0) !== 0 &&
                        (t.sessionSampleRate !== e.sessionSampleRate &&
                            this.emit("input-device-sample-rate-changed", null != (i = e.sessionSampleRate) ? i : 0),
                        (t.sessionSampleRate = e.sessionSampleRate)),
                    void 0 !== e.timeFromConnectToFirstCallbackMs &&
                        void 0 === t.timeFromConnectToFirstCallbackMs &&
                        (t.timeFromConnectToFirstCallbackMs = e.timeFromConnectToFirstCallbackMs));
            }),
            (this.appendTargetRates = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                if (0 === e.previousTimestampMs) {
                    e.previousTimestampMs = performance.now();
                    return;
                }
                let r = performance.now();
                e.aggregationDurationMs += r - e.previousTimestampMs;
                let i = (r - e.previousTimestampMs) / 1000;
                (e.bytesAvailable += (t / 8) * i), (e.bytesTarget += (n / 8) * i), (e.previousTimestampMs = r);
            }),
            (this.sampleStats = (e) => {
                if (null == e) return;
                this.networkQuality.incrementNetworkStats((0, s.zO)()),
                    this.systemResources.takeSample(),
                    this.duration.connected++;
                let t = this.outboundStats.packetsSent,
                    n = i().reduce(this.inboundStats, (e, t) => ((e.packetsReceived += t.packetsReceived), e), {
                        packetsReceived: 0,
                    }),
                    r = 0;
                i().forEach(e.rtp.outbound, (e) => {
                    if ("audio" === e.type) {
                        var t, n, i, a, o, s, l, c, u;
                        (r = null != (t = e.bitrateTarget) ? t : 0),
                            (this.outboundStats = _(f({}, this.outboundStats), {
                                packetsSent: e.packetsSent,
                                bytesSent: e.bytesSent,
                                packetsLost: null != (n = e.packetsLost) ? n : 0,
                                passthroughCount: null != (i = e.passthroughCount) ? i : 0,
                                encryptSuccessCount: null != (a = e.encryptSuccessCount) ? a : 0,
                                encryptFailureCount: null != (o = e.encryptFailureCount) ? o : 0,
                                encryptDuration: null != (s = e.encryptDuration) ? s : 0,
                                encryptAttempts: null != (l = e.encryptAttempts) ? l : 0,
                                encryptMaxAttempts: null != (c = e.encryptMaxAttempts) ? c : 0,
                                encryptMissingKeyCount: null != (u = e.encryptMissingKeyCount) ? u : 0,
                            })),
                            !0 == !!e.audioDetected &&
                                null != e.audioLevel &&
                                this.outboundStats.speakingAudioLevel.addSample(20 * Math.log(e.audioLevel));
                    }
                }),
                    (this.decryptionFailures = e.transport.decryptionFailures),
                    (this.routingFailures = e.transport.routingFailures),
                    this.appendTargetRates(this.outboundStats, e.transport.availableOutgoingBitrate, r),
                    i().forEach(e.rtp.inbound, (t, n) => {
                        i().forEach(t, (t) => {
                            if ("audio" === t.type) {
                                var r, a, o, s, l, c, u, d, p, _, m, h, g, E, b, y, O, v, S, I;
                                let T = null != (r = e.transport.ping) ? r : 0,
                                    A = t.packetsReceived,
                                    C = t.packetsLost,
                                    N = t.bytesReceived,
                                    P = t.nackCount,
                                    R = null != (a = t.fecPacketsReceived) ? a : 0,
                                    w = null != (o = t.fecPacketsDiscarded) ? o : 0,
                                    D = null != (s = t.jitterBuffer) ? s : 0,
                                    x = {
                                        audioJitterBuffer: t.audioJitterBuffer,
                                        audioJitterTarget: t.audioJitterTarget,
                                        audioJitterDelay: t.audioJitterDelay,
                                        relativeReceptionDelay: t.relativeReceptionDelay,
                                        relativePlayoutDelay: t.relativePlayoutDelay,
                                    },
                                    L = {
                                        silent: t.opSilence,
                                        normal: t.opNormal,
                                        merged: t.opMerge,
                                        expanded: t.opExpand,
                                        accelerated: t.opAccelerate,
                                        preemptiveExpanded: t.opPreemptiveExpand,
                                        cng: t.opCNG,
                                    },
                                    j = {
                                        passthroughCount: null != (l = t.passthroughCount) ? l : 0,
                                        decryptSuccessCount: null != (c = t.decryptSuccessCount) ? c : 0,
                                        decryptFailureCount: null != (u = t.decryptFailureCount) ? u : 0,
                                        decryptDuration: null != (d = t.decryptDuration) ? d : 0,
                                        decryptAttempts: null != (p = t.decryptAttempts) ? p : 0,
                                        decryptMissingKeyCount: null != (_ = t.decryptMissingKeyCount) ? _ : 0,
                                        decryptInvalidNonceCount: null != (m = t.decryptInvalidNonceCount) ? m : 0,
                                    };
                                if (null != this.inboundStats[n]) {
                                    let e = this.inboundStats[n],
                                        r = A - e.packetsReceived,
                                        a = C - e.packetsLost,
                                        o = 0,
                                        s = e.mosBuckets,
                                        l =
                                            null != (h = e.decryptFailureBeforeSuccessCount)
                                                ? h
                                                : j.decryptSuccessCount > 0
                                                  ? j.decryptFailureCount
                                                  : void 0;
                                    r > 0 &&
                                        a >= 0 &&
                                        ((o = this.calculateMos(T + D, i().clamp(a / (r + a), 0, 1))),
                                        s[Math.floor(o)]++),
                                        (this.inboundStats[n] = f(
                                            {
                                                packetsReceived: A,
                                                bytesReceived: N,
                                                packetsLost: C,
                                                nackCount: null != P ? P : 0,
                                                fecPacketsReceived: R,
                                                fecPacketsDiscarded: w,
                                                mos: o,
                                                mosSum: e.mosSum + o,
                                                mosCount: e.mosCount + +(o > 0),
                                                mosBuckets: s,
                                                bufferStats: x,
                                                frameOpStats: L,
                                                decryptFailureBeforeSuccessCount: l,
                                            },
                                            j,
                                        )),
                                        (this.periodicInboundStats[n] = {
                                            previousTimestampMs: this.periodicInboundStats[n].previousTimestampMs,
                                            previous: this.periodicInboundStats[n].previous,
                                            currentTimestampMs: performance.now(),
                                            current: L,
                                            accelerateRateSum:
                                                this.periodicInboundStats[n].accelerateRateSum +
                                                (null != (g = t.accelerateRate) ? g : 0),
                                            expandRateSum:
                                                this.periodicInboundStats[n].expandRateSum +
                                                (null != (E = t.expandRate) ? E : 0),
                                            preemptiveExpandRateSum:
                                                this.periodicInboundStats[n].preemptiveExpandRateSum +
                                                (null != (b = t.preemptiveExpandRate) ? b : 0),
                                            speechExpandRateSum:
                                                this.periodicInboundStats[n].speechExpandRateSum +
                                                (null != (y = t.speechExpandRate) ? y : 0),
                                            numRateSamples: this.periodicInboundStats[n].numRateSamples + 1,
                                        });
                                } else
                                    (this.inboundStats[n] = f(
                                        {
                                            packetsReceived: A,
                                            bytesReceived: N,
                                            packetsLost: C,
                                            nackCount: null != P ? P : 0,
                                            fecPacketsReceived: R,
                                            fecPacketsDiscarded: w,
                                            mos: 0,
                                            mosSum: 0,
                                            mosCount: 0,
                                            mosBuckets: [0, 0, 0, 0, 0],
                                            bufferStats: x,
                                            frameOpStats: L,
                                        },
                                        j,
                                    )),
                                        (this.periodicInboundStats[n] = {
                                            previousTimestampMs: performance.now(),
                                            previous: L,
                                            currentTimestampMs: performance.now(),
                                            current: L,
                                            accelerateRateSum: null != (O = t.accelerateRate) ? O : 0,
                                            expandRateSum: null != (v = t.expandRate) ? v : 0,
                                            preemptiveExpandRateSum: null != (S = t.preemptiveExpandRate) ? S : 0,
                                            speechExpandRateSum: null != (I = t.speechExpandRate) ? I : 0,
                                            numRateSamples: 1,
                                        });
                            }
                        });
                    }),
                    void 0 !== e.audioDevice &&
                        (this.sampleAudioDevice(e.audioDevice.input, this.inputDeviceStats),
                        this.sampleAudioDevice(e.audioDevice.output, this.outputDeviceStats));
                let a = !1,
                    o = !1;
                this.outboundStats.packetsSent > t && ((a = !0), this.duration.speaking++),
                    i().reduce(this.inboundStats, (e, t) => ((e.packetsReceived += t.packetsReceived), e), {
                        packetsReceived: 0,
                    }).packetsReceived > n.packetsReceived && ((o = !0), this.duration.listening++),
                    (a || o) && this.duration.participation++;
            }),
            (this.networkQuality = new c.Z()),
            (this.systemResources = new u.Z()),
            (this.inboundStats = {}),
            (this.outboundStats = {
                packetsSent: 0,
                bytesSent: 0,
                packetsLost: 0,
                passthroughCount: 0,
                encryptSuccessCount: 0,
                encryptFailureCount: 0,
                encryptDuration: 0,
                encryptAttempts: 0,
                encryptMaxAttempts: 0,
                encryptMissingKeyCount: 0,
                bytesAvailable: 0,
                bytesTarget: 0,
                previousTimestampMs: 0,
                aggregationDurationMs: 0,
                speakingAudioLevel: new l.b(),
            }),
            (this.duration = {
                listening: 0,
                speaking: 0,
                participation: 0,
                connected: 0,
            }),
            (this.periodicInboundStats = {}),
            (this.inputDeviceStats = {}),
            (this.outputDeviceStats = {});
    }
}
let E = (e, t) => {
    let { accumulated: n, lastValue: r } =
        null != t
            ? t
            : {
                  accumulated: 0,
                  lastValue: 0,
              };
    return {
        accumulated: r > e ? n + e : n + (e - r),
        lastValue: e,
    };
};
