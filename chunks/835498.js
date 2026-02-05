"use strict";
n.d(t, { A: () => S });
var r = n(735438),
    i = n.n(r),
    a = n(311907),
    s = n(499979),
    o = n(73153),
    l = n(283047),
    u = n(430452),
    c = n(287809),
    d = n(731854);
let _ = {
        inputDeviceFrecency: d.oh.AUDIO_INPUT,
        outputDeviceFrecency: d.oh.AUDIO_OUTPUT,
        videoDeviceFrecency: d.oh.VIDEO_INPUT,
    },
    f = {
        afterCompute: () => {},
        computeBonus: () => 100,
        lookupKey: (e) => e,
        maxSamples: 256,
        numFrequentlyItems: 1 / 0,
    };
function p(e) {
    return {
        [d.oh.AUDIO_INPUT]: { getCurrentDeviceId: (e) => e.getInputDeviceId() },
        [d.oh.AUDIO_OUTPUT]: { getCurrentDeviceId: (e) => e.getOutputDeviceId() },
        [d.oh.VIDEO_INPUT]: { getCurrentDeviceId: (e) => e.getVideoDeviceId() },
    }[e];
}
function h(e, t) {
    let { oldId: n } = t;
    if (!y.isSampling(e)) return !1;
    y.stopSampling(e, n), y.startSampling(e);
}
function m(e) {
    let { context: t, userId: n, speakingFlags: r } = e;
    if (t !== d.x.DEFAULT) return !1;
    let i = c.default.getCurrentUser()?.id;
    if (null == i) return !1;
    let a = n === i ? d.oh.AUDIO_INPUT : d.oh.AUDIO_OUTPUT;
    if (r === d.ME.NONE && y.isSampling(a)) y.stopSampling(a);
    else {
        if (r === d.ME.NONE || y.isSampling(a)) return !1;
        y.startSampling(a);
    }
}
function g() {
    y.reset();
}
let E = { [d.oh.AUDIO_INPUT]: new s.W0(), [d.oh.AUDIO_OUTPUT]: new s.W0(), [d.oh.VIDEO_INPUT]: new s.W0() },
    A = { [d.oh.AUDIO_INPUT]: {}, [d.oh.AUDIO_OUTPUT]: {}, [d.oh.VIDEO_INPUT]: {} },
    I = { [d.oh.AUDIO_INPUT]: new l.A(f), [d.oh.AUDIO_OUTPUT]: new l.A(f), [d.oh.VIDEO_INPUT]: new l.A(f) };
class T extends a.Ay.PersistedStore {
    static displayName = "DeviceFrecencyStore";
    static persistKey = "DeviceFrecencyStore";
    static migrations = [(e) => i().mapKeys(e, (e, t) => _[t])];
    initialize(e) {
        this.waitFor(u.A, c.default),
            [d.oh.AUDIO_INPUT, d.oh.AUDIO_OUTPUT, d.oh.VIDEO_INPUT].forEach((t) => {
                e?.[t] != null && I[t].overwriteHistory(e[t]), E[t].reset();
            });
    }
    reset() {
        [d.oh.AUDIO_INPUT, d.oh.AUDIO_OUTPUT, d.oh.VIDEO_INPUT].forEach((e) => {
            E[e].reset(), (A[e] = {});
        });
    }
    track(e, t, n) {
        null == A[e][t] && (A[e][t] = 0), (A[e][t] += n), I[e].track(t, { usesSinceLastTrack: n });
    }
    isSampling(e) {
        return E[e].isRunning();
    }
    startSampling(e) {
        E[e].start();
    }
    stopSampling(e, t) {
        let n = E[e];
        n.stop();
        let r = n.elapsed().asMilliseconds();
        if (r > 0) {
            let n = t ?? p(e).getCurrentDeviceId(u.A);
            this.track(e, n, r);
        }
        n.reset();
    }
    getState() {
        return {
            [d.oh.AUDIO_INPUT]: I[d.oh.AUDIO_INPUT].usageHistory,
            [d.oh.AUDIO_OUTPUT]: I[d.oh.AUDIO_OUTPUT].usageHistory,
            [d.oh.VIDEO_INPUT]: I[d.oh.VIDEO_INPUT].usageHistory,
        };
    }
    getDeviceIdsSortedByFrecency(e) {
        return I[e].frequently;
    }
    getUsageStats() {
        let e = { [d.oh.AUDIO_INPUT]: [], [d.oh.AUDIO_OUTPUT]: [], [d.oh.VIDEO_INPUT]: [] };
        return (
            [d.oh.AUDIO_INPUT, d.oh.AUDIO_OUTPUT].forEach((t) => {
                this.isSampling(t) && (this.stopSampling(t), this.startSampling(t)), (e[t] = Object.entries(A[t]));
            }),
            {
                duration_input_device_used_ids: e[d.oh.AUDIO_INPUT].map((e) => {
                    let [t, n] = e;
                    return t;
                }),
                duration_input_device_used_ms: e[d.oh.AUDIO_INPUT].map((e) => {
                    let [t, n] = e;
                    return n;
                }),
                duration_output_device_used_ids: e[d.oh.AUDIO_OUTPUT].map((e) => {
                    let [t, n] = e;
                    return t;
                }),
                duration_output_device_used_ms: e[d.oh.AUDIO_OUTPUT].map((e) => {
                    let [t, n] = e;
                    return n;
                }),
            }
        );
    }
}
let y = new T(o.h, {
        AUDIO_SET_INPUT_DEVICE: (e) => h(d.oh.AUDIO_INPUT, e),
        AUDIO_SET_OUTPUT_DEVICE: (e) => h(d.oh.AUDIO_OUTPUT, e),
        MEDIA_ENGINE_SET_VIDEO_DEVICE: (e) => h(d.oh.VIDEO_INPUT, e),
        SPEAKING: m,
        RTC_CONNECTION_CLIENT_CONNECT: g,
    }),
    S = y;
