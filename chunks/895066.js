n.d(t, { Z: () => f }), n(47120), n(653041);
var r = n(392711),
    i = n.n(r),
    o = n(46973),
    a = n(379649),
    s = n(140828),
    l = n(179654);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e) {
    let t = {};
    for (let n in e) {
        let r = e[n];
        (t[n + '_mean'] = null != r ? r.mean : 0), (t[n + '_p75'] = null != r ? r.p75 : 0), (t[n + '_p95'] = null != r ? r.p95 : 0), (t[n + '_p99'] = null != r ? r.p99 : 0), (t[n + '_max'] = null != r ? r.max : 0);
    }
    return t;
}
class f {
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
                mosBuckets: [0, 0, 0, 0, 0]
            }
        );
        return {
            mos_mean: e.mosCount > 0 ? e.mosSum / e.mosCount : 0,
            mos_1: e.mosBuckets[1],
            mos_2: e.mosBuckets[2],
            mos_3: e.mosBuckets[3],
            mos_4: e.mosBuckets[4]
        };
    }
    getPacketStats() {
        let e = i().reduce(this.inboundStats, (e, t) => ((e.packetsReceived += t.packetsReceived), (e.packetsReceivedLost += t.packetsLost), (e.nackCount += t.nackCount), (e.fecPacketsReceived += t.fecPacketsReceived), (e.fecPacketsDiscarded += t.fecPacketsDiscarded), e), {
            packetsReceived: 0,
            packetsReceivedLost: 0,
            nackCount: 0,
            fecPacketsReceived: 0,
            fecPacketsDiscarded: 0
        });
        return {
            packets_sent: this.outboundStats.packetsSent,
            packets_sent_lost: this.outboundStats.packetsLost,
            packets_received: e.packetsReceived,
            packets_received_lost: e.packetsReceivedLost,
            num_nacks_sent: e.nackCount,
            fec_packets_received: e.fecPacketsReceived,
            fec_packets_discarded: e.fecPacketsDiscarded
        };
    }
    getBytesStats() {
        let e = i().reduce(this.inboundStats, (e, t) => e + t.bytesReceived, 0);
        return {
            bytes_sent: this.outboundStats.bytesSent,
            bytes_received: e
        };
    }
    getNetworkStats() {
        return this.networkQuality.getStats();
    }
    getSystemResourceStats() {
        return this.systemResources.getStats();
    }
    getBufferStats() {
        let e = i().reduce(this.inboundStats, (e, t) => ((null == e || (null != t.bufferStats.audioJitterBuffer && null != e.audioJitterBuffer && t.bufferStats.audioJitterBuffer.p75 > e.audioJitterBuffer.p75)) && (e = t.bufferStats), e), null);
        return u(
            {},
            d({
                audio_jitter_buffer: null != e ? e.audioJitterBuffer : null,
                audio_jitter_target: null != e ? e.audioJitterTarget : null,
                audio_jitter_delay: null != e ? e.audioJitterDelay : null,
                relative_reception_delay: null != e ? e.relativeReceptionDelay : null,
                relative_playout_delay: null != e ? e.relativePlayoutDelay : null
            })
        );
    }
    getFrameOpStats() {
        let e = i().reduce(this.inboundStats, (e, t) => (null != t.frameOpStats.silent && (e.silent += t.frameOpStats.silent), null != t.frameOpStats.normal && (e.normal += t.frameOpStats.normal), null != t.frameOpStats.merged && (e.merged += t.frameOpStats.merged), null != t.frameOpStats.expanded && (e.expanded += t.frameOpStats.expanded), null != t.frameOpStats.accelerated && (e.accelerated += t.frameOpStats.accelerated), null != t.frameOpStats.preemptiveExpanded && (e.preemptiveExpanded += t.frameOpStats.preemptiveExpanded), null != t.frameOpStats.cng && (e.cng += t.frameOpStats.cng), e), {
            silent: 0,
            normal: 0,
            merged: 0,
            expanded: 0,
            accelerated: 0,
            preemptiveExpanded: 0,
            cng: 0
        });
        return {
            frame_op_silent: e.silent,
            frame_op_normal: e.normal,
            frame_op_merged: e.merged,
            frame_op_expanded: e.expanded,
            frame_op_accelerated: e.accelerated,
            frame_op_preemptive_expanded: e.preemptiveExpanded,
            frame_op_cng: e.cng
        };
    }
    getDurationStats() {
        return {
            duration_listening: this.duration.listening,
            duration_speaking: this.duration.speaking,
            duration_participation: this.duration.participation,
            duration_connected: this.duration.connected
        };
    }
    getTransportStats() {
        return {
            decryption_failures: this.decryptionFailures,
            routing_failures: this.routingFailures
        };
    }
    getE2EEStats() {
        let e = i().reduce(
            this.inboundStats,
            (e, t) => {
                var n, r, i, o, a, s, l;
                return (e.passthroughCount += null != (n = t.passthroughCount) ? n : 0), (e.decryptSuccessCount += null != (r = t.decryptSuccessCount) ? r : 0), (e.decryptFailureCount += null != (i = t.decryptFailureCount) ? i : 0), (e.decryptDuration += null != (o = t.decryptDuration) ? o : 0), (e.decryptAttempts += null != (a = t.decryptAttempts) ? a : 0), (e.decryptMissingKeyCount += null != (s = t.decryptMissingKeyCount) ? s : 0), (e.decryptInvalidNonceCount += null != (l = t.decryptInvalidNonceCount) ? l : 0), e;
            },
            {
                passthroughCount: 0,
                decryptSuccessCount: 0,
                decryptFailureCount: 0,
                decryptDuration: 0,
                decryptAttempts: 0,
                decryptMissingKeyCount: 0,
                decryptInvalidNonceCount: 0
            }
        );
        return {
            decrypt_passthrough_count: e.passthroughCount,
            decrypt_success_count: e.decryptSuccessCount,
            decrypt_failure_count: e.decryptFailureCount,
            decrypt_duration: e.decryptDuration,
            decrypt_attempts: e.decryptAttempts,
            decrypt_missing_key_count: e.decryptMissingKeyCount,
            decrypt_invalid_nonce_count: e.decryptInvalidNonceCount,
            encrypt_passthrough_count: this.outboundStats.passthroughCount,
            encrypt_success_count: this.outboundStats.encryptSuccessCount,
            encrypt_failure_count: this.outboundStats.encryptFailureCount,
            encrypt_duration: this.outboundStats.encryptDuration,
            encrypt_attempts: this.outboundStats.encryptAttempts,
            encrypt_max_attempts: this.outboundStats.encryptMaxAttempts,
            encrypt_missing_key_count: this.outboundStats.encryptMissingKeyCount
        };
    }
    getAudioDeviceStats() {
        var e, t, n, r;
        return {
            input_device_restart_count: null == (e = this.inputDeviceStats.restartCount) ? void 0 : e.accumulated,
            output_device_restart_count: null == (t = this.outputDeviceStats.restartCount) ? void 0 : t.accumulated,
            input_device_time_to_first_audio: this.inputDeviceStats.timeToFirstCallbackMs,
            output_device_time_to_first_audio: this.outputDeviceStats.timeToFirstCallbackMs,
            output_device_buffer_underrun_count: null == (n = this.outputDeviceStats.bufferViolations) ? void 0 : n.accumulated,
            input_device_buffer_overfull_count: null == (r = this.inputDeviceStats.bufferViolations) ? void 0 : r.accumulated
        };
    }
    getPeriodicStats() {
        let e = [];
        for (let [h, m] of Object.entries(this.periodicInboundStats)) {
            let { previous: g, current: E, currentTimestampMs: b, previousTimestampMs: y, numRateSamples: v } = m;
            if (void 0 !== y && b > y) {
                var t, n, r, i, o, a, s, l, c, u, d, f, _, p;
                let O = b - y,
                    I = {
                        userId: h,
                        silent: null != (n = E.silent) ? n : 0 - (null != (t = g.silent) ? t : 0),
                        normal: null != (i = E.normal) ? i : 0 - (null != (r = g.normal) ? r : 0),
                        merged: null != (a = E.merged) ? a : 0 - (null != (o = g.merged) ? o : 0),
                        expanded: null != (l = E.expanded) ? l : 0 - (null != (s = g.expanded) ? s : 0),
                        accelerated: null != (u = E.accelerated) ? u : 0 - (null != (c = g.accelerated) ? c : 0),
                        preemptiveExpanded: null != (f = E.preemptiveExpanded) ? f : 0 - (null != (d = g.preemptiveExpanded) ? d : 0),
                        cng: null != (p = E.cng) ? p : 0 - (null != (_ = g.cng) ? _ : 0),
                        accelerateRate: m.accelerateRateSum / v,
                        expandRate: m.expandRateSum / v,
                        preemptiveExpandRate: m.preemptiveExpandRateSum / v,
                        speechExpandRate: m.speechExpandRateSum / v,
                        durationMs: O
                    };
                I.normal + I.merged + I.expanded + I.accelerated + I.preemptiveExpanded > 0 && e.push(I);
            }
            (this.periodicInboundStats[h].accelerateRateSum = 0), (this.periodicInboundStats[h].expandRateSum = 0), (this.periodicInboundStats[h].preemptiveExpandRateSum = 0), (this.periodicInboundStats[h].speechExpandRateSum = 0), (this.periodicInboundStats[h].numRateSamples = 0), (this.periodicInboundStats[h].previous = E), (this.periodicInboundStats[h].previousTimestampMs = b);
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
        c(this, 'connection', void 0),
            c(this, 'inboundStats', void 0),
            c(this, 'outboundStats', void 0),
            c(this, 'networkQuality', void 0),
            c(this, 'systemResources', void 0),
            c(this, 'duration', void 0),
            c(this, 'decryptionFailures', void 0),
            c(this, 'routingFailures', void 0),
            c(this, 'periodicInboundStats', void 0),
            c(this, 'inputDeviceStats', void 0),
            c(this, 'outputDeviceStats', void 0),
            c(this, 'sampleAudioDevice', void 0),
            c(this, 'sampleStats', void 0),
            (this.connection = e),
            (this.sampleAudioDevice = (e, t) => {
                var n;
                void 0 !== e && (void 0 !== e.restartCount && (t.restartCount = _(e.restartCount, t.restartCount)), void 0 !== e.bufferViolations && (t.bufferViolations = _(e.bufferViolations, t.bufferViolations)), (null != (n = e.timeToFirstCallbackMs) ? n : 0) !== 0 && void 0 === t.timeToFirstCallbackMs && (t.timeToFirstCallbackMs = e.timeToFirstCallbackMs));
            }),
            (this.sampleStats = (e) => {
                if (null == e) return;
                this.networkQuality.incrementNetworkStats((0, a.zO)()), this.systemResources.takeSample(), (this.decryptionFailures = e.transport.decryptionFailures), (this.routingFailures = e.transport.routingFailures), this.duration.connected++;
                let t = this.outboundStats.packetsSent,
                    n = i().reduce(this.inboundStats, (e, t) => ((e.packetsReceived += t.packetsReceived), e), { packetsReceived: 0 });
                i().forEach(e.rtp.outbound, (e) => {
                    if ('audio' === e.type) {
                        var t, n, r, i, o, a, s, l;
                        this.outboundStats = {
                            packetsSent: e.packetsSent,
                            bytesSent: e.bytesSent,
                            packetsLost: null != (t = e.packetsLost) ? t : 0,
                            passthroughCount: null != (n = e.passthroughCount) ? n : 0,
                            encryptSuccessCount: null != (r = e.encryptSuccessCount) ? r : 0,
                            encryptFailureCount: null != (i = e.encryptFailureCount) ? i : 0,
                            encryptDuration: null != (o = e.encryptDuration) ? o : 0,
                            encryptAttempts: null != (a = e.encryptAttempts) ? a : 0,
                            encryptMaxAttempts: null != (s = e.encryptMaxAttempts) ? s : 0,
                            encryptMissingKeyCount: null != (l = e.encryptMissingKeyCount) ? l : 0
                        };
                    }
                }),
                    i().forEach(e.rtp.inbound, (t, n) => {
                        i().forEach(t, (t) => {
                            if ('audio' === t.type) {
                                var r, o, a, s, l, c, d, f, _, p, h, m, g, E, b, y, v, O, I;
                                let S = null != (r = e.transport.ping) ? r : 0,
                                    T = t.packetsReceived,
                                    N = t.packetsLost,
                                    A = t.bytesReceived,
                                    C = t.nackCount,
                                    R = null != (o = t.fecPacketsReceived) ? o : 0,
                                    P = null != (a = t.fecPacketsDiscarded) ? a : 0,
                                    w = null != (s = t.jitterBuffer) ? s : 0,
                                    D = {
                                        audioJitterBuffer: t.audioJitterBuffer,
                                        audioJitterTarget: t.audioJitterTarget,
                                        audioJitterDelay: t.audioJitterDelay,
                                        relativeReceptionDelay: t.relativeReceptionDelay,
                                        relativePlayoutDelay: t.relativePlayoutDelay
                                    },
                                    L = {
                                        silent: t.opSilence,
                                        normal: t.opNormal,
                                        merged: t.opMerge,
                                        expanded: t.opExpand,
                                        accelerated: t.opAccelerate,
                                        preemptiveExpanded: t.opPreemptiveExpand,
                                        cng: t.opCNG
                                    },
                                    x = {
                                        passthroughCount: null != (l = t.passthroughCount) ? l : 0,
                                        decryptSuccessCount: null != (c = t.decryptSuccessCount) ? c : 0,
                                        decryptFailureCount: null != (d = t.decryptFailureCount) ? d : 0,
                                        decryptDuration: null != (f = t.decryptDuration) ? f : 0,
                                        decryptAttempts: null != (_ = t.decryptAttempts) ? _ : 0,
                                        decryptMissingKeyCount: null != (p = t.decryptMissingKeyCount) ? p : 0,
                                        decryptInvalidNonceCount: null != (h = t.decryptInvalidNonceCount) ? h : 0
                                    };
                                if (null != this.inboundStats[n]) {
                                    let e = T - this.inboundStats[n].packetsReceived,
                                        r = N - this.inboundStats[n].packetsLost,
                                        o = 0,
                                        a = this.inboundStats[n].mosBuckets;
                                    e > 0 && r >= 0 && ((o = this.calculateMos(S + w, i().clamp(r / (e + r), 0, 1))), a[Math.floor(o)]++),
                                        (this.inboundStats[n] = u(
                                            {
                                                packetsReceived: T,
                                                bytesReceived: A,
                                                packetsLost: N,
                                                nackCount: null != C ? C : 0,
                                                fecPacketsReceived: R,
                                                fecPacketsDiscarded: P,
                                                mos: o,
                                                mosSum: this.inboundStats[n].mosSum + o,
                                                mosCount: this.inboundStats[n].mosCount + +(o > 0),
                                                mosBuckets: a,
                                                bufferStats: D,
                                                frameOpStats: L
                                            },
                                            x
                                        )),
                                        (this.periodicInboundStats[n] = {
                                            previousTimestampMs: this.periodicInboundStats[n].previousTimestampMs,
                                            previous: this.periodicInboundStats[n].previous,
                                            currentTimestampMs: Date.now(),
                                            current: L,
                                            accelerateRateSum: this.periodicInboundStats[n].accelerateRateSum + (null != (m = t.accelerateRate) ? m : 0),
                                            expandRateSum: this.periodicInboundStats[n].expandRateSum + (null != (g = t.expandRate) ? g : 0),
                                            preemptiveExpandRateSum: this.periodicInboundStats[n].preemptiveExpandRateSum + (null != (E = t.preemptiveExpandRate) ? E : 0),
                                            speechExpandRateSum: this.periodicInboundStats[n].speechExpandRateSum + (null != (b = t.speechExpandRate) ? b : 0),
                                            numRateSamples: this.periodicInboundStats[n].numRateSamples + 1
                                        });
                                } else
                                    (this.inboundStats[n] = u(
                                        {
                                            packetsReceived: T,
                                            bytesReceived: A,
                                            packetsLost: N,
                                            nackCount: null != C ? C : 0,
                                            fecPacketsReceived: R,
                                            fecPacketsDiscarded: P,
                                            mos: 0,
                                            mosSum: 0,
                                            mosCount: 0,
                                            mosBuckets: [0, 0, 0, 0, 0],
                                            bufferStats: D,
                                            frameOpStats: L
                                        },
                                        x
                                    )),
                                        (this.periodicInboundStats[n] = {
                                            previousTimestampMs: Date.now(),
                                            previous: L,
                                            currentTimestampMs: Date.now(),
                                            current: L,
                                            accelerateRateSum: null != (y = t.accelerateRate) ? y : 0,
                                            expandRateSum: null != (v = t.expandRate) ? v : 0,
                                            preemptiveExpandRateSum: null != (O = t.preemptiveExpandRate) ? O : 0,
                                            speechExpandRateSum: null != (I = t.speechExpandRate) ? I : 0,
                                            numRateSamples: 1
                                        });
                            }
                        });
                    }),
                    void 0 !== e.audioDevice && (this.sampleAudioDevice(e.audioDevice.input, this.inputDeviceStats), this.sampleAudioDevice(e.audioDevice.output, this.outputDeviceStats));
                let r = !1,
                    o = !1;
                this.outboundStats.packetsSent > t && ((r = !0), this.duration.speaking++), i().reduce(this.inboundStats, (e, t) => ((e.packetsReceived += t.packetsReceived), e), { packetsReceived: 0 }).packetsReceived > n.packetsReceived && ((o = !0), this.duration.listening++), (r || o) && this.duration.participation++;
            }),
            (this.networkQuality = new s.Z()),
            (this.systemResources = new l.Z()),
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
                encryptMissingKeyCount: 0
            }),
            (this.duration = {
                listening: 0,
                speaking: 0,
                participation: 0,
                connected: 0
            }),
            (this.periodicInboundStats = {}),
            (this.inputDeviceStats = {}),
            (this.outputDeviceStats = {});
    }
}
let _ = (e, t) => {
    let { accumulated: n, lastValue: r } =
        null != t
            ? t
            : {
                  accumulated: 0,
                  lastValue: 0
              };
    return {
        accumulated: r > e ? n + e : n + (e - r),
        lastValue: e
    };
};
