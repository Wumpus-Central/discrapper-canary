n.d(t, { Z: () => d }), n(724458), n(47120), n(653041);
var i = n(392711),
    r = n.n(i),
    a = n(46973),
    s = n(379649),
    o = n(140828),
    l = n(179654);
function u(e, t, n) {
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
function c(e) {
    let t = {};
    for (let n in e) {
        let i = e[n];
        (t[n + '_mean'] = null != i ? i.mean : 0), (t[n + '_p75'] = null != i ? i.p75 : 0), (t[n + '_p95'] = null != i ? i.p95 : 0), (t[n + '_p99'] = null != i ? i.p99 : 0), (t[n + '_max'] = null != i ? i.max : 0);
    }
    return t;
}
class d {
    start() {
        this.connection.on(a.Sh.Stats, this.sampleStats);
    }
    stop() {
        this.connection.off(a.Sh.Stats, this.sampleStats);
    }
    getMosStats() {
        let e = r().reduce(
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
        let e = r().reduce(this.inboundStats, (e, t) => ((e.packetsReceived += t.packetsReceived), (e.packetsReceivedLost += t.packetsLost), (e.nackCount += t.nackCount), (e.fecPacketsReceived += t.fecPacketsReceived), (e.fecPacketsDiscarded += t.fecPacketsDiscarded), e), {
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
        let e = r().reduce(this.inboundStats, (e, t) => e + t.bytesReceived, 0);
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
        let e = r().reduce(this.inboundStats, (e, t) => ((null == e || (null != t.bufferStats.audioJitterBuffer && null != e.audioJitterBuffer && t.bufferStats.audioJitterBuffer.p75 > e.audioJitterBuffer.p75)) && (e = t.bufferStats), e), null);
        return {
            ...c({
                audio_jitter_buffer: null != e ? e.audioJitterBuffer : null,
                audio_jitter_target: null != e ? e.audioJitterTarget : null,
                audio_jitter_delay: null != e ? e.audioJitterDelay : null,
                relative_reception_delay: null != e ? e.relativeReceptionDelay : null,
                relative_playout_delay: null != e ? e.relativePlayoutDelay : null
            })
        };
    }
    getFrameOpStats() {
        let e = r().reduce(this.inboundStats, (e, t) => (null != t.frameOpStats.silent && (e.silent += t.frameOpStats.silent), null != t.frameOpStats.normal && (e.normal += t.frameOpStats.normal), null != t.frameOpStats.merged && (e.merged += t.frameOpStats.merged), null != t.frameOpStats.expanded && (e.expanded += t.frameOpStats.expanded), null != t.frameOpStats.accelerated && (e.accelerated += t.frameOpStats.accelerated), null != t.frameOpStats.preemptiveExpanded && (e.preemptiveExpanded += t.frameOpStats.preemptiveExpanded), null != t.frameOpStats.cng && (e.cng += t.frameOpStats.cng), e), {
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
        let e = r().reduce(
            this.inboundStats,
            (e, t) => {
                var n, i, r, a, s, o, l;
                return (e.passthroughCount += null !== (n = t.passthroughCount) && void 0 !== n ? n : 0), (e.decryptSuccessCount += null !== (i = t.decryptSuccessCount) && void 0 !== i ? i : 0), (e.decryptFailureCount += null !== (r = t.decryptFailureCount) && void 0 !== r ? r : 0), (e.decryptDuration += null !== (a = t.decryptDuration) && void 0 !== a ? a : 0), (e.decryptAttempts += null !== (s = t.decryptAttempts) && void 0 !== s ? s : 0), (e.decryptMissingKeyCount += null !== (o = t.decryptMissingKeyCount) && void 0 !== o ? o : 0), (e.decryptInvalidNonceCount += null !== (l = t.decryptInvalidNonceCount) && void 0 !== l ? l : 0), e;
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
        var e, t, n, i;
        return {
            input_device_restart_count: null === (e = this.inputDeviceStats.restartCount) || void 0 === e ? void 0 : e.accumulated,
            output_device_restart_count: null === (t = this.outputDeviceStats.restartCount) || void 0 === t ? void 0 : t.accumulated,
            input_device_time_to_first_audio: this.inputDeviceStats.timeToFirstCallbackMs,
            output_device_time_to_first_audio: this.outputDeviceStats.timeToFirstCallbackMs,
            output_device_buffer_underrun_count: null === (n = this.outputDeviceStats.bufferViolations) || void 0 === n ? void 0 : n.accumulated,
            input_device_buffer_overfull_count: null === (i = this.inputDeviceStats.bufferViolations) || void 0 === i ? void 0 : i.accumulated
        };
    }
    getPeriodicStats() {
        let e = [];
        for (let [h, m] of Object.entries(this.periodicInboundStats)) {
            let { previous: g, current: E, currentTimestampMs: v, previousTimestampMs: y, numRateSamples: I } = m;
            if (void 0 !== y && v > y) {
                var t, n, i, r, a, s, o, l, u, c, d, f, _, p;
                let T = v - y,
                    b = {
                        userId: h,
                        silent: null !== (n = E.silent) && void 0 !== n ? n : 0 - (null !== (t = g.silent) && void 0 !== t ? t : 0),
                        normal: null !== (r = E.normal) && void 0 !== r ? r : 0 - (null !== (i = g.normal) && void 0 !== i ? i : 0),
                        merged: null !== (s = E.merged) && void 0 !== s ? s : 0 - (null !== (a = g.merged) && void 0 !== a ? a : 0),
                        expanded: null !== (l = E.expanded) && void 0 !== l ? l : 0 - (null !== (o = g.expanded) && void 0 !== o ? o : 0),
                        accelerated: null !== (c = E.accelerated) && void 0 !== c ? c : 0 - (null !== (u = g.accelerated) && void 0 !== u ? u : 0),
                        preemptiveExpanded: null !== (f = E.preemptiveExpanded) && void 0 !== f ? f : 0 - (null !== (d = g.preemptiveExpanded) && void 0 !== d ? d : 0),
                        cng: null !== (p = E.cng) && void 0 !== p ? p : 0 - (null !== (_ = g.cng) && void 0 !== _ ? _ : 0),
                        accelerateRate: m.accelerateRateSum / I,
                        expandRate: m.expandRateSum / I,
                        preemptiveExpandRate: m.preemptiveExpandRateSum / I,
                        speechExpandRate: m.speechExpandRateSum / I,
                        durationMs: T
                    };
                b.normal + b.merged + b.expanded + b.accelerated + b.preemptiveExpanded > 0 && e.push(b);
            }
            (this.periodicInboundStats[h].accelerateRateSum = 0), (this.periodicInboundStats[h].expandRateSum = 0), (this.periodicInboundStats[h].preemptiveExpandRateSum = 0), (this.periodicInboundStats[h].speechExpandRateSum = 0), (this.periodicInboundStats[h].numRateSamples = 0), (this.periodicInboundStats[h].previous = E), (this.periodicInboundStats[h].previousTimestampMs = v);
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
        u(this, 'connection', void 0),
            u(this, 'inboundStats', void 0),
            u(this, 'outboundStats', void 0),
            u(this, 'networkQuality', void 0),
            u(this, 'systemResources', void 0),
            u(this, 'duration', void 0),
            u(this, 'decryptionFailures', void 0),
            u(this, 'routingFailures', void 0),
            u(this, 'periodicInboundStats', void 0),
            u(this, 'inputDeviceStats', void 0),
            u(this, 'outputDeviceStats', void 0),
            u(this, 'sampleAudioDevice', void 0),
            u(this, 'sampleStats', void 0),
            (this.connection = e),
            (this.sampleAudioDevice = (e, t) => {
                var n;
                void 0 !== e && (void 0 !== e.restartCount && (t.restartCount = f(e.restartCount, t.restartCount)), void 0 !== e.bufferViolations && (t.bufferViolations = f(e.bufferViolations, t.bufferViolations)), (null !== (n = e.timeToFirstCallbackMs) && void 0 !== n ? n : 0) !== 0 && void 0 === t.timeToFirstCallbackMs && (t.timeToFirstCallbackMs = e.timeToFirstCallbackMs));
            }),
            (this.sampleStats = (e) => {
                if (null == e) return;
                this.networkQuality.incrementNetworkStats((0, s.zO)()), this.systemResources.takeSample(), (this.decryptionFailures = e.transport.decryptionFailures), (this.routingFailures = e.transport.routingFailures), this.duration.connected++;
                let t = this.outboundStats.packetsSent,
                    n = r().reduce(this.inboundStats, (e, t) => ((e.packetsReceived += t.packetsReceived), e), { packetsReceived: 0 });
                r().forEach(e.rtp.outbound, (e) => {
                    if ('audio' === e.type) {
                        var t, n, i, r, a, s, o, l;
                        this.outboundStats = {
                            packetsSent: e.packetsSent,
                            bytesSent: e.bytesSent,
                            packetsLost: null !== (t = e.packetsLost) && void 0 !== t ? t : 0,
                            passthroughCount: null !== (n = e.passthroughCount) && void 0 !== n ? n : 0,
                            encryptSuccessCount: null !== (i = e.encryptSuccessCount) && void 0 !== i ? i : 0,
                            encryptFailureCount: null !== (r = e.encryptFailureCount) && void 0 !== r ? r : 0,
                            encryptDuration: null !== (a = e.encryptDuration) && void 0 !== a ? a : 0,
                            encryptAttempts: null !== (s = e.encryptAttempts) && void 0 !== s ? s : 0,
                            encryptMaxAttempts: null !== (o = e.encryptMaxAttempts) && void 0 !== o ? o : 0,
                            encryptMissingKeyCount: null !== (l = e.encryptMissingKeyCount) && void 0 !== l ? l : 0
                        };
                    }
                }),
                    r().forEach(e.rtp.inbound, (t, n) => {
                        r().forEach(t, (t) => {
                            if ('audio' === t.type) {
                                var i, a, s, o, l, u, c, d, f, _, p, h, m, g, E, v, y, I, T;
                                let b = null !== (i = e.transport.ping) && void 0 !== i ? i : 0,
                                    S = t.packetsReceived,
                                    A = t.packetsLost,
                                    N = t.bytesReceived,
                                    C = t.nackCount,
                                    R = null !== (a = t.fecPacketsReceived) && void 0 !== a ? a : 0,
                                    O = null !== (s = t.fecPacketsDiscarded) && void 0 !== s ? s : 0,
                                    D = null !== (o = t.jitterBuffer) && void 0 !== o ? o : 0,
                                    L = {
                                        audioJitterBuffer: t.audioJitterBuffer,
                                        audioJitterTarget: t.audioJitterTarget,
                                        audioJitterDelay: t.audioJitterDelay,
                                        relativeReceptionDelay: t.relativeReceptionDelay,
                                        relativePlayoutDelay: t.relativePlayoutDelay
                                    },
                                    x = {
                                        silent: t.opSilence,
                                        normal: t.opNormal,
                                        merged: t.opMerge,
                                        expanded: t.opExpand,
                                        accelerated: t.opAccelerate,
                                        preemptiveExpanded: t.opPreemptiveExpand,
                                        cng: t.opCNG
                                    },
                                    w = {
                                        passthroughCount: null !== (l = t.passthroughCount) && void 0 !== l ? l : 0,
                                        decryptSuccessCount: null !== (u = t.decryptSuccessCount) && void 0 !== u ? u : 0,
                                        decryptFailureCount: null !== (c = t.decryptFailureCount) && void 0 !== c ? c : 0,
                                        decryptDuration: null !== (d = t.decryptDuration) && void 0 !== d ? d : 0,
                                        decryptAttempts: null !== (f = t.decryptAttempts) && void 0 !== f ? f : 0,
                                        decryptMissingKeyCount: null !== (_ = t.decryptMissingKeyCount) && void 0 !== _ ? _ : 0,
                                        decryptInvalidNonceCount: null !== (p = t.decryptInvalidNonceCount) && void 0 !== p ? p : 0
                                    };
                                if (null != this.inboundStats[n]) {
                                    let e = S - this.inboundStats[n].packetsReceived,
                                        i = A - this.inboundStats[n].packetsLost,
                                        a = 0,
                                        s = this.inboundStats[n].mosBuckets;
                                    e > 0 && i >= 0 && ((a = this.calculateMos(b + D, r().clamp(i / (e + i), 0, 1))), s[Math.floor(a)]++),
                                        (this.inboundStats[n] = {
                                            packetsReceived: S,
                                            bytesReceived: N,
                                            packetsLost: A,
                                            nackCount: null != C ? C : 0,
                                            fecPacketsReceived: R,
                                            fecPacketsDiscarded: O,
                                            mos: a,
                                            mosSum: this.inboundStats[n].mosSum + a,
                                            mosCount: this.inboundStats[n].mosCount + (a > 0 ? 1 : 0),
                                            mosBuckets: s,
                                            bufferStats: L,
                                            frameOpStats: x,
                                            ...w
                                        }),
                                        (this.periodicInboundStats[n] = {
                                            previousTimestampMs: this.periodicInboundStats[n].previousTimestampMs,
                                            previous: this.periodicInboundStats[n].previous,
                                            currentTimestampMs: Date.now(),
                                            current: x,
                                            accelerateRateSum: this.periodicInboundStats[n].accelerateRateSum + (null !== (h = t.accelerateRate) && void 0 !== h ? h : 0),
                                            expandRateSum: this.periodicInboundStats[n].expandRateSum + (null !== (m = t.expandRate) && void 0 !== m ? m : 0),
                                            preemptiveExpandRateSum: this.periodicInboundStats[n].preemptiveExpandRateSum + (null !== (g = t.preemptiveExpandRate) && void 0 !== g ? g : 0),
                                            speechExpandRateSum: this.periodicInboundStats[n].speechExpandRateSum + (null !== (E = t.speechExpandRate) && void 0 !== E ? E : 0),
                                            numRateSamples: this.periodicInboundStats[n].numRateSamples + 1
                                        });
                                } else
                                    (this.inboundStats[n] = {
                                        packetsReceived: S,
                                        bytesReceived: N,
                                        packetsLost: A,
                                        nackCount: null != C ? C : 0,
                                        fecPacketsReceived: R,
                                        fecPacketsDiscarded: O,
                                        mos: 0,
                                        mosSum: 0,
                                        mosCount: 0,
                                        mosBuckets: [0, 0, 0, 0, 0],
                                        bufferStats: L,
                                        frameOpStats: x,
                                        ...w
                                    }),
                                        (this.periodicInboundStats[n] = {
                                            previousTimestampMs: Date.now(),
                                            previous: x,
                                            currentTimestampMs: Date.now(),
                                            current: x,
                                            accelerateRateSum: null !== (v = t.accelerateRate) && void 0 !== v ? v : 0,
                                            expandRateSum: null !== (y = t.expandRate) && void 0 !== y ? y : 0,
                                            preemptiveExpandRateSum: null !== (I = t.preemptiveExpandRate) && void 0 !== I ? I : 0,
                                            speechExpandRateSum: null !== (T = t.speechExpandRate) && void 0 !== T ? T : 0,
                                            numRateSamples: 1
                                        });
                            }
                        });
                    }),
                    void 0 !== e.audioDevice && (this.sampleAudioDevice(e.audioDevice.input, this.inputDeviceStats), this.sampleAudioDevice(e.audioDevice.output, this.outputDeviceStats));
                let i = !1,
                    a = !1;
                this.outboundStats.packetsSent > t && ((i = !0), this.duration.speaking++), r().reduce(this.inboundStats, (e, t) => ((e.packetsReceived += t.packetsReceived), e), { packetsReceived: 0 }).packetsReceived > n.packetsReceived && ((a = !0), this.duration.listening++), (i || a) && this.duration.participation++;
            }),
            (this.networkQuality = new o.Z()),
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
let f = (e, t) => {
    let { accumulated: n, lastValue: i } =
        null != t
            ? t
            : {
                  accumulated: 0,
                  lastValue: 0
              };
    return {
        accumulated: i > e ? n + e : n + (e - i),
        lastValue: e
    };
};
