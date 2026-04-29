n.d(t, { A: () => f });
var i = n(735438),
    a = n.n(i),
    r = n(17928),
    _ = n(499979),
    s = n(228366),
    l = n(283047),
    o = n(51760),
    E = n(287809),
    d = n(731854);
let c = {
        inputDeviceFrecency: d.oh.AUDIO_INPUT,
        outputDeviceFrecency: d.oh.AUDIO_OUTPUT,
        videoDeviceFrecency: d.oh.VIDEO_INPUT,
    },
    u = {
        afterCompute: () => {},
        computeBonus: () => 100,
        lookupKey: (e) => e,
        maxSamples: 256,
        numFrequentlyItems: 1 / 0,
    };
function I(e, t) {
    let { oldId: n } = t;
    if (!O.isSampling(e)) return !1;
    O.stopSampling(e, n), O.startSampling(e);
}
let T = { [d.oh.AUDIO_INPUT]: new _.W0(), [d.oh.AUDIO_OUTPUT]: new _.W0(), [d.oh.VIDEO_INPUT]: new _.W0() },
    A = { [d.oh.AUDIO_INPUT]: {}, [d.oh.AUDIO_OUTPUT]: {}, [d.oh.VIDEO_INPUT]: {} },
    S = { [d.oh.AUDIO_INPUT]: new l.A(u), [d.oh.AUDIO_OUTPUT]: new l.A(u), [d.oh.VIDEO_INPUT]: new l.A(u) };
class N extends r.Ay.PersistedStore {
    static displayName = "DeviceFrecencyStore";
    static persistKey = "DeviceFrecencyStore";
    static migrations = [(e) => a().mapKeys(e, (e, t) => c[t])];
    initialize(e) {
        this.waitFor(o.Ay, E.default),
            [d.oh.AUDIO_INPUT, d.oh.AUDIO_OUTPUT, d.oh.VIDEO_INPUT].forEach((t) => {
                e?.[t] != null && S[t].overwriteHistory(e[t]), T[t].reset();
            });
    }
    reset() {
        [d.oh.AUDIO_INPUT, d.oh.AUDIO_OUTPUT, d.oh.VIDEO_INPUT].forEach((e) => {
            T[e].reset(), (A[e] = {});
        });
    }
    track(e, t, n) {
        null == A[e][t] && (A[e][t] = 0), (A[e][t] += n), S[e].track(t, { usesSinceLastTrack: n });
    }
    isSampling(e) {
        return T[e].isRunning();
    }
    startSampling(e) {
        T[e].start();
    }
    stopSampling(e, t) {
        let n = T[e];
        n.stop();
        let i = n.elapsed().asMilliseconds();
        if (i > 0) {
            let n =
                t ??
                {
                    [d.oh.AUDIO_INPUT]: { getCurrentDeviceId: (e) => e.getInputDeviceId() },
                    [d.oh.AUDIO_OUTPUT]: { getCurrentDeviceId: (e) => e.getOutputDeviceId() },
                    [d.oh.VIDEO_INPUT]: { getCurrentDeviceId: (e) => e.getVideoDeviceId() },
                }[e].getCurrentDeviceId(o.Ay);
            this.track(e, n, i);
        }
        n.reset();
    }
    getState() {
        return {
            [d.oh.AUDIO_INPUT]: S[d.oh.AUDIO_INPUT].usageHistory,
            [d.oh.AUDIO_OUTPUT]: S[d.oh.AUDIO_OUTPUT].usageHistory,
            [d.oh.VIDEO_INPUT]: S[d.oh.VIDEO_INPUT].usageHistory,
        };
    }
    getDeviceIdsSortedByFrecency(e) {
        return S[e].frequently;
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
let O = new N(s.h, {
        AUDIO_SET_INPUT_DEVICE: (e) => I(d.oh.AUDIO_INPUT, e),
        AUDIO_SET_OUTPUT_DEVICE: (e) => I(d.oh.AUDIO_OUTPUT, e),
        MEDIA_ENGINE_SET_VIDEO_DEVICE: (e) => I(d.oh.VIDEO_INPUT, e),
        SPEAKING: function (e) {
            let { context: t, userId: n, speakingFlags: i } = e;
            if (t !== d.x.DEFAULT) return !1;
            let a = E.default.getCurrentUser()?.id;
            if (null == a) return !1;
            let r = n === a ? d.oh.AUDIO_INPUT : d.oh.AUDIO_OUTPUT;
            if (i === d.ME.NONE && O.isSampling(r)) O.stopSampling(r);
            else {
                if (i === d.ME.NONE || O.isSampling(r)) return !1;
                O.startSampling(r);
            }
        },
        RTC_CONNECTION_CLIENT_CONNECT: function () {
            O.reset();
        },
    }),
    f = O;
