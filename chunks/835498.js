n.d(t, { A: () => f });
var i = n(735438),
    a = n.n(i),
    r = n(17928),
    s = n(499979),
    l = n(228366),
    o = n(283047),
    d = n(51760),
    c = n(287809),
    _ = n(731854);
let E = {
        inputDeviceFrecency: _.oh.AUDIO_INPUT,
        outputDeviceFrecency: _.oh.AUDIO_OUTPUT,
        videoDeviceFrecency: _.oh.VIDEO_INPUT,
    },
    u = {
        afterCompute: () => {},
        computeBonus: () => 100,
        lookupKey: (e) => e,
        maxSamples: 256,
        numFrequentlyItems: 1 / 0,
    };
function A(e, t) {
    let { oldId: n } = t;
    if (!N.isSampling(e)) return !1;
    N.stopSampling(e, n), N.startSampling(e);
}
let I = { [_.oh.AUDIO_INPUT]: new s.W0(), [_.oh.AUDIO_OUTPUT]: new s.W0(), [_.oh.VIDEO_INPUT]: new s.W0() },
    T = { [_.oh.AUDIO_INPUT]: {}, [_.oh.AUDIO_OUTPUT]: {}, [_.oh.VIDEO_INPUT]: {} },
    h = { [_.oh.AUDIO_INPUT]: new o.A(u), [_.oh.AUDIO_OUTPUT]: new o.A(u), [_.oh.VIDEO_INPUT]: new o.A(u) };
class S extends r.Ay.PersistedStore {
    static displayName = "DeviceFrecencyStore";
    static persistKey = "DeviceFrecencyStore";
    static migrations = [(e) => a().mapKeys(e, (e, t) => E[t])];
    initialize(e) {
        this.waitFor(d.Ay, c.default),
            [_.oh.AUDIO_INPUT, _.oh.AUDIO_OUTPUT, _.oh.VIDEO_INPUT].forEach((t) => {
                e?.[t] != null && h[t].overwriteHistory(e[t]), I[t].reset();
            });
    }
    reset() {
        [_.oh.AUDIO_INPUT, _.oh.AUDIO_OUTPUT, _.oh.VIDEO_INPUT].forEach((e) => {
            I[e].reset(), (T[e] = {});
        });
    }
    track(e, t, n) {
        null == T[e][t] && (T[e][t] = 0), (T[e][t] += n), h[e].track(t, { usesSinceLastTrack: n });
    }
    isSampling(e) {
        return I[e].isRunning();
    }
    startSampling(e) {
        I[e].start();
    }
    stopSampling(e, t) {
        let n = I[e];
        n.stop();
        let i = n.elapsed().asMilliseconds();
        if (i > 0) {
            let n =
                t ??
                {
                    [_.oh.AUDIO_INPUT]: { getCurrentDeviceId: (e) => e.getInputDeviceId() },
                    [_.oh.AUDIO_OUTPUT]: { getCurrentDeviceId: (e) => e.getOutputDeviceId() },
                    [_.oh.VIDEO_INPUT]: { getCurrentDeviceId: (e) => e.getVideoDeviceId() },
                }[e].getCurrentDeviceId(d.Ay);
            this.track(e, n, i);
        }
        n.reset();
    }
    getState() {
        return {
            [_.oh.AUDIO_INPUT]: h[_.oh.AUDIO_INPUT].usageHistory,
            [_.oh.AUDIO_OUTPUT]: h[_.oh.AUDIO_OUTPUT].usageHistory,
            [_.oh.VIDEO_INPUT]: h[_.oh.VIDEO_INPUT].usageHistory,
        };
    }
    getDeviceIdsSortedByFrecency(e) {
        return h[e].frequently;
    }
    getUsageStats() {
        let e = { [_.oh.AUDIO_INPUT]: [], [_.oh.AUDIO_OUTPUT]: [], [_.oh.VIDEO_INPUT]: [] };
        return (
            [_.oh.AUDIO_INPUT, _.oh.AUDIO_OUTPUT].forEach((t) => {
                this.isSampling(t) && (this.stopSampling(t), this.startSampling(t)), (e[t] = Object.entries(T[t]));
            }),
            {
                duration_input_device_used_ids: e[_.oh.AUDIO_INPUT].map((e) => {
                    let [t, n] = e;
                    return t;
                }),
                duration_input_device_used_ms: e[_.oh.AUDIO_INPUT].map((e) => {
                    let [t, n] = e;
                    return n;
                }),
                duration_output_device_used_ids: e[_.oh.AUDIO_OUTPUT].map((e) => {
                    let [t, n] = e;
                    return t;
                }),
                duration_output_device_used_ms: e[_.oh.AUDIO_OUTPUT].map((e) => {
                    let [t, n] = e;
                    return n;
                }),
            }
        );
    }
}
let N = new S(l.h, {
        AUDIO_SET_INPUT_DEVICE: (e) => A(_.oh.AUDIO_INPUT, e),
        AUDIO_SET_OUTPUT_DEVICE: (e) => A(_.oh.AUDIO_OUTPUT, e),
        MEDIA_ENGINE_SET_VIDEO_DEVICE: (e) => A(_.oh.VIDEO_INPUT, e),
        SPEAKING: function (e) {
            let { context: t, userId: n, speakingFlags: i } = e;
            if (t !== _.x.DEFAULT) return !1;
            let a = c.default.getCurrentUser()?.id;
            if (null == a) return !1;
            let r = n === a ? _.oh.AUDIO_INPUT : _.oh.AUDIO_OUTPUT;
            if (i === _.ME.NONE && N.isSampling(r)) N.stopSampling(r);
            else {
                if (i === _.ME.NONE || N.isSampling(r)) return !1;
                N.startSampling(r);
            }
        },
        RTC_CONNECTION_CLIENT_CONNECT: function () {
            N.reset();
        },
    }),
    f = N;
