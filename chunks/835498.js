"use strict";
n.d(t, { A: () => I });
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(499979),
    o = n(228366),
    l = n(283047),
    u = n(235058),
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
function h(e, t) {
    let { oldId: n } = t;
    if (!A.isSampling(e)) return !1;
    A.stopSampling(e, n), A.startSampling(e);
}
let p = { [d.oh.AUDIO_INPUT]: new a.W0(), [d.oh.AUDIO_OUTPUT]: new a.W0(), [d.oh.VIDEO_INPUT]: new a.W0() },
    E = { [d.oh.AUDIO_INPUT]: {}, [d.oh.AUDIO_OUTPUT]: {}, [d.oh.VIDEO_INPUT]: {} },
    m = { [d.oh.AUDIO_INPUT]: new l.A(f), [d.oh.AUDIO_OUTPUT]: new l.A(f), [d.oh.VIDEO_INPUT]: new l.A(f) };
class g extends s.Ay.PersistedStore {
    static displayName = "DeviceFrecencyStore";
    static persistKey = "DeviceFrecencyStore";
    static migrations = [(e) => r().mapKeys(e, (e, t) => _[t])];
    initialize(e) {
        this.waitFor(u.Ay, c.default),
            [d.oh.AUDIO_INPUT, d.oh.AUDIO_OUTPUT, d.oh.VIDEO_INPUT].forEach((t) => {
                e?.[t] != null && m[t].overwriteHistory(e[t]), p[t].reset();
            });
    }
    reset() {
        [d.oh.AUDIO_INPUT, d.oh.AUDIO_OUTPUT, d.oh.VIDEO_INPUT].forEach((e) => {
            p[e].reset(), (E[e] = {});
        });
    }
    track(e, t, n) {
        null == E[e][t] && (E[e][t] = 0), (E[e][t] += n), m[e].track(t, { usesSinceLastTrack: n });
    }
    isSampling(e) {
        return p[e].isRunning();
    }
    startSampling(e) {
        p[e].start();
    }
    stopSampling(e, t) {
        let n = p[e];
        n.stop();
        let i = n.elapsed().asMilliseconds();
        if (i > 0) {
            let n =
                t ??
                {
                    [d.oh.AUDIO_INPUT]: { getCurrentDeviceId: (e) => e.getInputDeviceId() },
                    [d.oh.AUDIO_OUTPUT]: { getCurrentDeviceId: (e) => e.getOutputDeviceId() },
                    [d.oh.VIDEO_INPUT]: { getCurrentDeviceId: (e) => e.getVideoDeviceId() },
                }[e].getCurrentDeviceId(u.Ay);
            this.track(e, n, i);
        }
        n.reset();
    }
    getState() {
        return {
            [d.oh.AUDIO_INPUT]: m[d.oh.AUDIO_INPUT].usageHistory,
            [d.oh.AUDIO_OUTPUT]: m[d.oh.AUDIO_OUTPUT].usageHistory,
            [d.oh.VIDEO_INPUT]: m[d.oh.VIDEO_INPUT].usageHistory,
        };
    }
    getDeviceIdsSortedByFrecency(e) {
        return m[e].frequently;
    }
    getUsageStats() {
        let e = { [d.oh.AUDIO_INPUT]: [], [d.oh.AUDIO_OUTPUT]: [], [d.oh.VIDEO_INPUT]: [] };
        return (
            [d.oh.AUDIO_INPUT, d.oh.AUDIO_OUTPUT].forEach((t) => {
                this.isSampling(t) && (this.stopSampling(t), this.startSampling(t)), (e[t] = Object.entries(E[t]));
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
let A = new g(o.h, {
        AUDIO_SET_INPUT_DEVICE: (e) => h(d.oh.AUDIO_INPUT, e),
        AUDIO_SET_OUTPUT_DEVICE: (e) => h(d.oh.AUDIO_OUTPUT, e),
        MEDIA_ENGINE_SET_VIDEO_DEVICE: (e) => h(d.oh.VIDEO_INPUT, e),
        SPEAKING: function (e) {
            let { context: t, userId: n, speakingFlags: i } = e;
            if (t !== d.x.DEFAULT) return !1;
            let r = c.default.getCurrentUser()?.id;
            if (null == r) return !1;
            let s = n === r ? d.oh.AUDIO_INPUT : d.oh.AUDIO_OUTPUT;
            if (i === d.ME.NONE && A.isSampling(s)) A.stopSampling(s);
            else {
                if (i === d.ME.NONE || A.isSampling(s)) return !1;
                A.startSampling(s);
            }
        },
        RTC_CONNECTION_CLIENT_CONNECT: function () {
            A.reset();
        },
    }),
    I = A;
