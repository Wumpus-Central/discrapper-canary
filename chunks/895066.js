r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(724458);
var a = r(47120);
var o = r(653041);
var s = r(392711),
    l = r.n(s),
    u = r(46973),
    c = r(379649),
    d = r(140828),
    f = r(179654);
function p(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function h(e) {
    let n = {};
    for (let r in e) {
        let i = e[r];
        (n[r + '_mean'] = null != i ? i.mean : 0), (n[r + '_p75'] = null != i ? i.p75 : 0), (n[r + '_p95'] = null != i ? i.p95 : 0), (n[r + '_p99'] = null != i ? i.p99 : 0), (n[r + '_max'] = null != i ? i.max : 0);
    }
    return n;
}
class _ {
    start() {
        this.connection.on(u.Sh.Stats, this.sampleStats);
    }
    stop() {
        this.connection.off(u.Sh.Stats, this.sampleStats);
    }
    getMosStats() {
        let e = l().reduce(
            this.inboundStats,
            (e, n) => {
                (e.mosSum += n.mosSum), (e.mosCount += n.mosCount);
                for (var r = 0; r < 5; r++) e.mosBuckets[r] += n.mosBuckets[r];
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
        let e = l().reduce(this.inboundStats, (e, n) => ((e.packetsReceived += n.packetsReceived), (e.packetsReceivedLost += n.packetsLost), null != e.fecPacketsReceived && (e.fecPacketsReceived += n.fecPacketsReceived), null != e.fecPacketsDiscarded && (e.fecPacketsDiscarded += n.fecPacketsDiscarded), e), {
            packetsReceived: 0,
            packetsReceivedLost: 0,
            fecPacketsReceived: 0,
            fecPacketsDiscarded: 0
        });
        return {
            packets_sent: this.outboundStats.packetsSent,
            packets_sent_lost: this.outboundStats.packetsLost,
            packets_received: e.packetsReceived,
            packets_received_lost: e.packetsReceivedLost,
            fec_packets_received: e.fecPacketsReceived,
            fec_packets_discarded: e.fecPacketsDiscarded
        };
    }
    getBytesStats() {
        let e = l().reduce(this.inboundStats, (e, n) => e + n.bytesReceived, 0);
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
        let e = l().reduce(this.inboundStats, (e, n) => ((null == e || (null != n.bufferStats.audioJitterBuffer && null != e.audioJitterBuffer && n.bufferStats.audioJitterBuffer.p75 > e.audioJitterBuffer.p75)) && (e = n.bufferStats), e), null);
        return {
            ...h({
                audio_jitter_buffer: null != e ? e.audioJitterBuffer : null,
                audio_jitter_target: null != e ? e.audioJitterTarget : null,
                audio_jitter_delay: null != e ? e.audioJitterDelay : null,
                relative_reception_delay: null != e ? e.relativeReceptionDelay : null,
                relative_playout_delay: null != e ? e.relativePlayoutDelay : null
            })
        };
    }
    getFrameOpStats() {
        let e = l().reduce(this.inboundStats, (e, n) => (null != n.frameOpStats.silent && (e.silent += n.frameOpStats.silent), null != n.frameOpStats.normal && (e.normal += n.frameOpStats.normal), null != n.frameOpStats.merged && (e.merged += n.frameOpStats.merged), null != n.frameOpStats.expanded && (e.expanded += n.frameOpStats.expanded), null != n.frameOpStats.accelerated && (e.accelerated += n.frameOpStats.accelerated), null != n.frameOpStats.preemptiveExpanded && (e.preemptiveExpanded += n.frameOpStats.preemptiveExpanded), null != n.frameOpStats.cng && (e.cng += n.frameOpStats.cng), e), {
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
        let e = l().reduce(
            this.inboundStats,
            (e, n) => {
                var r, i, a, o, s, l, u;
                return (e.passthroughCount += null !== (r = n.passthroughCount) && void 0 !== r ? r : 0), (e.decryptSuccessCount += null !== (i = n.decryptSuccessCount) && void 0 !== i ? i : 0), (e.decryptFailureCount += null !== (a = n.decryptFailureCount) && void 0 !== a ? a : 0), (e.decryptDuration += null !== (o = n.decryptDuration) && void 0 !== o ? o : 0), (e.decryptAttempts += null !== (s = n.decryptAttempts) && void 0 !== s ? s : 0), (e.decryptMissingKeyCount += null !== (l = n.decryptMissingKeyCount) && void 0 !== l ? l : 0), (e.decryptInvalidNonceCount += null !== (u = n.decryptInvalidNonceCount) && void 0 !== u ? u : 0), e;
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
        var e, n, r, i;
        return {
            input_device_restart_count: null === (e = this.inputDeviceStats.restartCount) || void 0 === e ? void 0 : e.accumulated,
            output_device_restart_count: null === (n = this.outputDeviceStats.restartCount) || void 0 === n ? void 0 : n.accumulated,
            input_device_time_to_first_audio: this.inputDeviceStats.timeToFirstCallbackMs,
            output_device_time_to_first_audio: this.outputDeviceStats.timeToFirstCallbackMs,
            output_device_buffer_underrun_count: null === (r = this.outputDeviceStats.bufferViolations) || void 0 === r ? void 0 : r.accumulated,
            input_device_buffer_overfull_count: null === (i = this.inputDeviceStats.bufferViolations) || void 0 === i ? void 0 : i.accumulated
        };
    }
    getPeriodicStats() {
        let e = [];
        for (let [m, g] of Object.entries(this.periodicInboundStats)) {
            let { previous: E, current: v, currentTimestampMs: y, previousTimestampMs: b, numRateSamples: I } = g;
            if (void 0 !== b && y > b) {
                var n, r, i, a, o, s, l, u, c, d, f, p, h, _;
                let T = y - b,
                    S = {
                        userId: m,
                        silent: null !== (r = v.silent) && void 0 !== r ? r : 0 - (null !== (n = E.silent) && void 0 !== n ? n : 0),
                        normal: null !== (a = v.normal) && void 0 !== a ? a : 0 - (null !== (i = E.normal) && void 0 !== i ? i : 0),
                        merged: null !== (s = v.merged) && void 0 !== s ? s : 0 - (null !== (o = E.merged) && void 0 !== o ? o : 0),
                        expanded: null !== (u = v.expanded) && void 0 !== u ? u : 0 - (null !== (l = E.expanded) && void 0 !== l ? l : 0),
                        accelerated: null !== (d = v.accelerated) && void 0 !== d ? d : 0 - (null !== (c = E.accelerated) && void 0 !== c ? c : 0),
                        preemptiveExpanded: null !== (p = v.preemptiveExpanded) && void 0 !== p ? p : 0 - (null !== (f = E.preemptiveExpanded) && void 0 !== f ? f : 0),
                        cng: null !== (_ = v.cng) && void 0 !== _ ? _ : 0 - (null !== (h = E.cng) && void 0 !== h ? h : 0),
                        accelerateRate: g.accelerateRateSum / I,
                        expandRate: g.expandRateSum / I,
                        preemptiveExpandRate: g.preemptiveExpandRateSum / I,
                        speechExpandRate: g.speechExpandRateSum / I,
                        durationMs: T
                    };
                S.normal + S.merged + S.expanded + S.accelerated + S.preemptiveExpanded > 0 && e.push(S);
            }
            (this.periodicInboundStats[m].accelerateRateSum = 0), (this.periodicInboundStats[m].expandRateSum = 0), (this.periodicInboundStats[m].preemptiveExpandRateSum = 0), (this.periodicInboundStats[m].speechExpandRateSum = 0), (this.periodicInboundStats[m].numRateSamples = 0), (this.periodicInboundStats[m].previous = v), (this.periodicInboundStats[m].previousTimestampMs = y);
        }
        return e;
    }
    calculateMos(e, n) {
        let r = this.calculateR(e, n);
        return r < 0 ? 1 : r > 100 ? 4.5 : 1 + 0.035 * r + 0.0000071 * r * (r - 60) * (100 - r);
    }
    calculateR(e, n) {
        let r = 10;
        return 93.4 - (0.024 * e + (e > 177.3 ? 0.11 * (e - 177.3) : 0)) - (10 + (122 * n) / (n + 10));
    }
    constructor(e) {
        p(this, 'connection', void 0),
            p(this, 'inboundStats', void 0),
            p(this, 'outboundStats', void 0),
            p(this, 'networkQuality', void 0),
            p(this, 'systemResources', void 0),
            p(this, 'duration', void 0),
            p(this, 'decryptionFailures', void 0),
            p(this, 'routingFailures', void 0),
            p(this, 'periodicInboundStats', void 0),
            p(this, 'inputDeviceStats', void 0),
            p(this, 'outputDeviceStats', void 0),
            p(this, 'sampleAudioDevice', void 0),
            p(this, 'sampleStats', void 0),
            (this.connection = e),
            (this.sampleAudioDevice = (e, n) => {
                var r;
                if (void 0 !== e) void 0 !== e.restartCount && (n.restartCount = m(e.restartCount, n.restartCount)), void 0 !== e.bufferViolations && (n.bufferViolations = m(e.bufferViolations, n.bufferViolations)), (null !== (r = e.timeToFirstCallbackMs) && void 0 !== r ? r : 0) !== 0 && void 0 === n.timeToFirstCallbackMs && (n.timeToFirstCallbackMs = e.timeToFirstCallbackMs);
            }),
            (this.sampleStats = (e) => {
                if (null == e) return;
                this.networkQuality.incrementNetworkStats((0, c.zO)()), this.systemResources.takeSample(), (this.decryptionFailures = e.transport.decryptionFailures), (this.routingFailures = e.transport.routingFailures), this.duration.connected++;
                let n = this.outboundStats.packetsSent,
                    r = l().reduce(this.inboundStats, (e, n) => ((e.packetsReceived += n.packetsReceived), e), { packetsReceived: 0 });
                l().forEach(e.rtp.outbound, (e) => {
                    if ('audio' === e.type) {
                        var n, r, i, a, o, s, l, u;
                        this.outboundStats = {
                            packetsSent: e.packetsSent,
                            bytesSent: e.bytesSent,
                            packetsLost: null !== (n = e.packetsLost) && void 0 !== n ? n : 0,
                            passthroughCount: null !== (r = e.passthroughCount) && void 0 !== r ? r : 0,
                            encryptSuccessCount: null !== (i = e.encryptSuccessCount) && void 0 !== i ? i : 0,
                            encryptFailureCount: null !== (a = e.encryptFailureCount) && void 0 !== a ? a : 0,
                            encryptDuration: null !== (o = e.encryptDuration) && void 0 !== o ? o : 0,
                            encryptAttempts: null !== (s = e.encryptAttempts) && void 0 !== s ? s : 0,
                            encryptMaxAttempts: null !== (l = e.encryptMaxAttempts) && void 0 !== l ? l : 0,
                            encryptMissingKeyCount: null !== (u = e.encryptMissingKeyCount) && void 0 !== u ? u : 0
                        };
                    }
                }),
                    l().forEach(e.rtp.inbound, (n, r) => {
                        l().forEach(n, (n) => {
                            if ('audio' === n.type) {
                                var i, a, o, s, u, c, d, f, p, h, _, m, g, E, v, y, b, I, T;
                                let S = null !== (i = e.transport.ping) && void 0 !== i ? i : 0,
                                    A = n.packetsReceived,
                                    C = n.packetsLost,
                                    N = n.bytesReceived,
                                    R = null !== (a = n.fecPacketsReceived) && void 0 !== a ? a : 0,
                                    O = null !== (o = n.fecPacketsDiscarded) && void 0 !== o ? o : 0,
                                    D = null !== (s = n.jitterBuffer) && void 0 !== s ? s : 0,
                                    x = {
                                        audioJitterBuffer: n.audioJitterBuffer,
                                        audioJitterTarget: n.audioJitterTarget,
                                        audioJitterDelay: n.audioJitterDelay,
                                        relativeReceptionDelay: n.relativeReceptionDelay,
                                        relativePlayoutDelay: n.relativePlayoutDelay
                                    },
                                    L = {
                                        silent: n.opSilence,
                                        normal: n.opNormal,
                                        merged: n.opMerge,
                                        expanded: n.opExpand,
                                        accelerated: n.opAccelerate,
                                        preemptiveExpanded: n.opPreemptiveExpand,
                                        cng: n.opCNG
                                    },
                                    w = {
                                        passthroughCount: null !== (u = n.passthroughCount) && void 0 !== u ? u : 0,
                                        decryptSuccessCount: null !== (c = n.decryptSuccessCount) && void 0 !== c ? c : 0,
                                        decryptFailureCount: null !== (d = n.decryptFailureCount) && void 0 !== d ? d : 0,
                                        decryptDuration: null !== (f = n.decryptDuration) && void 0 !== f ? f : 0,
                                        decryptAttempts: null !== (p = n.decryptAttempts) && void 0 !== p ? p : 0,
                                        decryptMissingKeyCount: null !== (h = n.decryptMissingKeyCount) && void 0 !== h ? h : 0,
                                        decryptInvalidNonceCount: null !== (_ = n.decryptInvalidNonceCount) && void 0 !== _ ? _ : 0
                                    };
                                if (null != this.inboundStats[r]) {
                                    let e = A - this.inboundStats[r].packetsReceived,
                                        i = C - this.inboundStats[r].packetsLost,
                                        a = 0,
                                        o = this.inboundStats[r].mosBuckets;
                                    e > 0 && i >= 0 && ((a = this.calculateMos(S + D, l().clamp(i / (e + i), 0, 1))), o[Math.floor(a)]++),
                                        (this.inboundStats[r] = {
                                            packetsReceived: A,
                                            bytesReceived: N,
                                            packetsLost: C,
                                            fecPacketsReceived: R,
                                            fecPacketsDiscarded: O,
                                            mos: a,
                                            mosSum: this.inboundStats[r].mosSum + a,
                                            mosCount: this.inboundStats[r].mosCount + (a > 0 ? 1 : 0),
                                            mosBuckets: o,
                                            bufferStats: x,
                                            frameOpStats: L,
                                            ...w
                                        }),
                                        (this.periodicInboundStats[r] = {
                                            previousTimestampMs: this.periodicInboundStats[r].previousTimestampMs,
                                            previous: this.periodicInboundStats[r].previous,
                                            currentTimestampMs: Date.now(),
                                            current: L,
                                            accelerateRateSum: this.periodicInboundStats[r].accelerateRateSum + (null !== (m = n.accelerateRate) && void 0 !== m ? m : 0),
                                            expandRateSum: this.periodicInboundStats[r].expandRateSum + (null !== (g = n.expandRate) && void 0 !== g ? g : 0),
                                            preemptiveExpandRateSum: this.periodicInboundStats[r].preemptiveExpandRateSum + (null !== (E = n.preemptiveExpandRate) && void 0 !== E ? E : 0),
                                            speechExpandRateSum: this.periodicInboundStats[r].speechExpandRateSum + (null !== (v = n.speechExpandRate) && void 0 !== v ? v : 0),
                                            numRateSamples: this.periodicInboundStats[r].numRateSamples + 1
                                        });
                                } else
                                    (this.inboundStats[r] = {
                                        packetsReceived: A,
                                        bytesReceived: N,
                                        packetsLost: C,
                                        fecPacketsReceived: R,
                                        fecPacketsDiscarded: O,
                                        mos: 0,
                                        mosSum: 0,
                                        mosCount: 0,
                                        mosBuckets: [0, 0, 0, 0, 0],
                                        bufferStats: x,
                                        frameOpStats: L,
                                        ...w
                                    }),
                                        (this.periodicInboundStats[r] = {
                                            previousTimestampMs: Date.now(),
                                            previous: L,
                                            currentTimestampMs: Date.now(),
                                            current: L,
                                            accelerateRateSum: null !== (y = n.accelerateRate) && void 0 !== y ? y : 0,
                                            expandRateSum: null !== (b = n.expandRate) && void 0 !== b ? b : 0,
                                            preemptiveExpandRateSum: null !== (I = n.preemptiveExpandRate) && void 0 !== I ? I : 0,
                                            speechExpandRateSum: null !== (T = n.speechExpandRate) && void 0 !== T ? T : 0,
                                            numRateSamples: 1
                                        });
                            }
                        });
                    }),
                    void 0 !== e.audioDevice && (this.sampleAudioDevice(e.audioDevice.input, this.inputDeviceStats), this.sampleAudioDevice(e.audioDevice.output, this.outputDeviceStats));
                let i = !1,
                    a = !1;
                this.outboundStats.packetsSent > n && ((i = !0), this.duration.speaking++), l().reduce(this.inboundStats, (e, n) => ((e.packetsReceived += n.packetsReceived), e), { packetsReceived: 0 }).packetsReceived > r.packetsReceived && ((a = !0), this.duration.listening++), (i || a) && this.duration.participation++;
            }),
            (this.networkQuality = new d.Z()),
            (this.systemResources = new f.Z()),
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
let m = (e, n) => {
    let { accumulated: r, lastValue: i } =
        null != n
            ? n
            : {
                  accumulated: 0,
                  lastValue: 0
              };
    return {
        accumulated: i > e ? r + e : r + (e - i),
        lastValue: e
    };
};
