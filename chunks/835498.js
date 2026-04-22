"use strict";
n.d(t, { A: () => I });
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(499979),
    o = n(73153),
    l = n(283047),
    u = n(430452),
    d = n(287809),
    c = n(731854);
let _ = {
        inputDeviceFrecency: c.oh.AUDIO_INPUT,
        outputDeviceFrecency: c.oh.AUDIO_OUTPUT,
        videoDeviceFrecency: c.oh.VIDEO_INPUT,
    },
    f = {
        afterCompute: () => {},
        computeBonus: () => 100,
        lookupKey: (e) => e,
        maxSamples: 256,
        numFrequentlyItems: 1 / 0,
    };
function E(e, t) {
    let { oldId: n } = t;
    if (!A.isSampling(e)) return !1;
    A.stopSampling(e, n), A.startSampling(e);
}
let h = { [c.oh.AUDIO_INPUT]: new a.W0(), [c.oh.AUDIO_OUTPUT]: new a.W0(), [c.oh.VIDEO_INPUT]: new a.W0() },
    p = { [c.oh.AUDIO_INPUT]: {}, [c.oh.AUDIO_OUTPUT]: {}, [c.oh.VIDEO_INPUT]: {} },
    m = { [c.oh.AUDIO_INPUT]: new l.A(f), [c.oh.AUDIO_OUTPUT]: new l.A(f), [c.oh.VIDEO_INPUT]: new l.A(f) };
class g extends s.Ay.PersistedStore {
    static displayName = "DeviceFrecencyStore";
    static persistKey = "DeviceFrecencyStore";
    static migrations = [(e) => i().mapKeys(e, (e, t) => _[t])];
    initialize(e) {
        this.waitFor(u.Ay, d.default),
            [c.oh.AUDIO_INPUT, c.oh.AUDIO_OUTPUT, c.oh.VIDEO_INPUT].forEach((t) => {
                e?.[t] != null && m[t].overwriteHistory(e[t]), h[t].reset();
            });
    }
    reset() {
        [c.oh.AUDIO_INPUT, c.oh.AUDIO_OUTPUT, c.oh.VIDEO_INPUT].forEach((e) => {
            h[e].reset(), (p[e] = {});
        });
    }
    track(e, t, n) {
        null == p[e][t] && (p[e][t] = 0), (p[e][t] += n), m[e].track(t, { usesSinceLastTrack: n });
    }
    isSampling(e) {
        return h[e].isRunning();
    }
    startSampling(e) {
        h[e].start();
    }
    stopSampling(e, t) {
        let n = h[e];
        n.stop();
        let r = n.elapsed().asMilliseconds();
        if (r > 0) {
            let n =
                t ??
                {
                    [c.oh.AUDIO_INPUT]: { getCurrentDeviceId: (e) => e.getInputDeviceId() },
                    [c.oh.AUDIO_OUTPUT]: { getCurrentDeviceId: (e) => e.getOutputDeviceId() },
                    [c.oh.VIDEO_INPUT]: { getCurrentDeviceId: (e) => e.getVideoDeviceId() },
                }[e].getCurrentDeviceId(u.Ay);
            this.track(e, n, r);
        }
        n.reset();
    }
    getState() {
        return {
            [c.oh.AUDIO_INPUT]: m[c.oh.AUDIO_INPUT].usageHistory,
            [c.oh.AUDIO_OUTPUT]: m[c.oh.AUDIO_OUTPUT].usageHistory,
            [c.oh.VIDEO_INPUT]: m[c.oh.VIDEO_INPUT].usageHistory,
        };
    }
    getDeviceIdsSortedByFrecency(e) {
        return m[e].frequently;
    }
    getUsageStats() {
        let e = { [c.oh.AUDIO_INPUT]: [], [c.oh.AUDIO_OUTPUT]: [], [c.oh.VIDEO_INPUT]: [] };
        return (
            [c.oh.AUDIO_INPUT, c.oh.AUDIO_OUTPUT].forEach((t) => {
                this.isSampling(t) && (this.stopSampling(t), this.startSampling(t)), (e[t] = Object.entries(p[t]));
            }),
            {
                duration_input_device_used_ids: e[c.oh.AUDIO_INPUT].map((e) => {
                    let [t, n] = e;
                    return t;
                }),
                duration_input_device_used_ms: e[c.oh.AUDIO_INPUT].map((e) => {
                    let [t, n] = e;
                    return n;
                }),
                duration_output_device_used_ids: e[c.oh.AUDIO_OUTPUT].map((e) => {
                    let [t, n] = e;
                    return t;
                }),
                duration_output_device_used_ms: e[c.oh.AUDIO_OUTPUT].map((e) => {
                    let [t, n] = e;
                    return n;
                }),
            }
        );
    }
}
let A = new g(o.h, {
        AUDIO_SET_INPUT_DEVICE: (e) => E(c.oh.AUDIO_INPUT, e),
        AUDIO_SET_OUTPUT_DEVICE: (e) => E(c.oh.AUDIO_OUTPUT, e),
        MEDIA_ENGINE_SET_VIDEO_DEVICE: (e) => E(c.oh.VIDEO_INPUT, e),
        SPEAKING: function (e) {
            let { context: t, userId: n, speakingFlags: r } = e;
            if (t !== c.x.DEFAULT) return !1;
            let i = d.default.getCurrentUser()?.id;
            if (null == i) return !1;
            let s = n === i ? c.oh.AUDIO_INPUT : c.oh.AUDIO_OUTPUT;
            if (r === c.ME.NONE && A.isSampling(s)) A.stopSampling(s);
            else {
                if (r === c.ME.NONE || A.isSampling(s)) return !1;
                A.startSampling(s);
            }
        },
        RTC_CONNECTION_CLIENT_CONNECT: function () {
            A.reset();
        },
    }),
    I = A;
