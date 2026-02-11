"use strict";
n.d(t, { A: () => v });
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
function h(e) {
    return {
        [d.oh.AUDIO_INPUT]: { getCurrentDeviceId: (e) => e.getInputDeviceId() },
        [d.oh.AUDIO_OUTPUT]: { getCurrentDeviceId: (e) => e.getOutputDeviceId() },
        [d.oh.VIDEO_INPUT]: { getCurrentDeviceId: (e) => e.getVideoDeviceId() },
    }[e];
}
function p(e, t) {
    let { oldId: n } = t;
    if (!S.isSampling(e)) return !1;
    S.stopSampling(e, n), S.startSampling(e);
}
function g(e) {
    let { context: t, userId: n, speakingFlags: r } = e;
    if (t !== d.x.DEFAULT) return !1;
    let i = c.default.getCurrentUser()?.id;
    if (null == i) return !1;
    let a = n === i ? d.oh.AUDIO_INPUT : d.oh.AUDIO_OUTPUT;
    if (r === d.ME.NONE && S.isSampling(a)) S.stopSampling(a);
    else {
        if (r === d.ME.NONE || S.isSampling(a)) return !1;
        S.startSampling(a);
    }
}
function E() {
    S.reset();
}
let A = { [d.oh.AUDIO_INPUT]: new s.W0(), [d.oh.AUDIO_OUTPUT]: new s.W0(), [d.oh.VIDEO_INPUT]: new s.W0() },
    I = { [d.oh.AUDIO_INPUT]: {}, [d.oh.AUDIO_OUTPUT]: {}, [d.oh.VIDEO_INPUT]: {} },
    T = { [d.oh.AUDIO_INPUT]: new l.A(f), [d.oh.AUDIO_OUTPUT]: new l.A(f), [d.oh.VIDEO_INPUT]: new l.A(f) };
class y extends a.Ay.PersistedStore {
    static displayName = "DeviceFrecencyStore";
    static persistKey = "DeviceFrecencyStore";
    static migrations = [(e) => i().mapKeys(e, (e, t) => _[t])];
    initialize(e) {
        this.waitFor(u.Ay, c.default),
            [d.oh.AUDIO_INPUT, d.oh.AUDIO_OUTPUT, d.oh.VIDEO_INPUT].forEach((t) => {
                e?.[t] != null && T[t].overwriteHistory(e[t]), A[t].reset();
            });
    }
    reset() {
        [d.oh.AUDIO_INPUT, d.oh.AUDIO_OUTPUT, d.oh.VIDEO_INPUT].forEach((e) => {
            A[e].reset(), (I[e] = {});
        });
    }
    track(e, t, n) {
        null == I[e][t] && (I[e][t] = 0), (I[e][t] += n), T[e].track(t, { usesSinceLastTrack: n });
    }
    isSampling(e) {
        return A[e].isRunning();
    }
    startSampling(e) {
        A[e].start();
    }
    stopSampling(e, t) {
        let n = A[e];
        n.stop();
        let r = n.elapsed().asMilliseconds();
        if (r > 0) {
            let n = t ?? h(e).getCurrentDeviceId(u.Ay);
            this.track(e, n, r);
        }
        n.reset();
    }
    getState() {
        return {
            [d.oh.AUDIO_INPUT]: T[d.oh.AUDIO_INPUT].usageHistory,
            [d.oh.AUDIO_OUTPUT]: T[d.oh.AUDIO_OUTPUT].usageHistory,
            [d.oh.VIDEO_INPUT]: T[d.oh.VIDEO_INPUT].usageHistory,
        };
    }
    getDeviceIdsSortedByFrecency(e) {
        return T[e].frequently;
    }
    getUsageStats() {
        let e = { [d.oh.AUDIO_INPUT]: [], [d.oh.AUDIO_OUTPUT]: [], [d.oh.VIDEO_INPUT]: [] };
        return (
            [d.oh.AUDIO_INPUT, d.oh.AUDIO_OUTPUT].forEach((t) => {
                this.isSampling(t) && (this.stopSampling(t), this.startSampling(t)), (e[t] = Object.entries(I[t]));
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
let S = new y(o.h, {
        AUDIO_SET_INPUT_DEVICE: (e) => p(d.oh.AUDIO_INPUT, e),
        AUDIO_SET_OUTPUT_DEVICE: (e) => p(d.oh.AUDIO_OUTPUT, e),
        MEDIA_ENGINE_SET_VIDEO_DEVICE: (e) => p(d.oh.VIDEO_INPUT, e),
        SPEAKING: g,
        RTC_CONNECTION_CLIENT_CONNECT: E,
    }),
    v = S;
