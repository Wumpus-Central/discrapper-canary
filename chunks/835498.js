n.d(t, { A: () => m });
var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(499979),
    l = n(228366),
    o = n(283047),
    d = n(303277),
    c = n(287809),
    u = n(731854);
let _ = {
        inputDeviceFrecency: u.oh.AUDIO_INPUT,
        outputDeviceFrecency: u.oh.AUDIO_OUTPUT,
        videoDeviceFrecency: u.oh.VIDEO_INPUT,
    },
    E = {
        afterCompute: () => {},
        computeBonus: () => 100,
        lookupKey: (e) => e,
        maxSamples: 256,
        numFrequentlyItems: 1 / 0,
    };
function A(e, t) {
    let { oldId: n } = t;
    if (!T.isSampling(e)) return !1;
    T.stopSampling(e, n), T.startSampling(e);
}
let h = { [u.oh.AUDIO_INPUT]: new s.W0(), [u.oh.AUDIO_OUTPUT]: new s.W0(), [u.oh.VIDEO_INPUT]: new s.W0() },
    I = { [u.oh.AUDIO_INPUT]: {}, [u.oh.AUDIO_OUTPUT]: {}, [u.oh.VIDEO_INPUT]: {} },
    f = { [u.oh.AUDIO_INPUT]: new o.A(E), [u.oh.AUDIO_OUTPUT]: new o.A(E), [u.oh.VIDEO_INPUT]: new o.A(E) };
class p extends a.Ay.PersistedStore {
    static displayName = "DeviceFrecencyStore";
    static persistKey = "DeviceFrecencyStore";
    static migrations = [(e) => r().mapKeys(e, (e, t) => _[t])];
    initialize(e) {
        this.waitFor(d.Ay, c.default),
            [u.oh.AUDIO_INPUT, u.oh.AUDIO_OUTPUT, u.oh.VIDEO_INPUT].forEach((t) => {
                e?.[t] != null && f[t].overwriteHistory(e[t]), h[t].reset();
            });
    }
    reset() {
        [u.oh.AUDIO_INPUT, u.oh.AUDIO_OUTPUT, u.oh.VIDEO_INPUT].forEach((e) => {
            h[e].reset(), (I[e] = {});
        });
    }
    track(e, t, n) {
        null == I[e][t] && (I[e][t] = 0), (I[e][t] += n), f[e].track(t, { usesSinceLastTrack: n });
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
        let i = n.elapsed().asMilliseconds();
        if (i > 0) {
            let n =
                t ??
                {
                    [u.oh.AUDIO_INPUT]: { getCurrentDeviceId: (e) => e.getInputDeviceId() },
                    [u.oh.AUDIO_OUTPUT]: { getCurrentDeviceId: (e) => e.getOutputDeviceId() },
                    [u.oh.VIDEO_INPUT]: { getCurrentDeviceId: (e) => e.getVideoDeviceId() },
                }[e].getCurrentDeviceId(d.Ay);
            this.track(e, n, i);
        }
        n.reset();
    }
    getState() {
        return {
            [u.oh.AUDIO_INPUT]: f[u.oh.AUDIO_INPUT].usageHistory,
            [u.oh.AUDIO_OUTPUT]: f[u.oh.AUDIO_OUTPUT].usageHistory,
            [u.oh.VIDEO_INPUT]: f[u.oh.VIDEO_INPUT].usageHistory,
        };
    }
    getDeviceIdsSortedByFrecency(e) {
        return f[e].frequently;
    }
    getUsageStats() {
        let e = { [u.oh.AUDIO_INPUT]: [], [u.oh.AUDIO_OUTPUT]: [], [u.oh.VIDEO_INPUT]: [] };
        return (
            [u.oh.AUDIO_INPUT, u.oh.AUDIO_OUTPUT].forEach((t) => {
                this.isSampling(t) && (this.stopSampling(t), this.startSampling(t)), (e[t] = Object.entries(I[t]));
            }),
            {
                duration_input_device_used_ids: e[u.oh.AUDIO_INPUT].map((e) => {
                    let [t, n] = e;
                    return t;
                }),
                duration_input_device_used_ms: e[u.oh.AUDIO_INPUT].map((e) => {
                    let [t, n] = e;
                    return n;
                }),
                duration_output_device_used_ids: e[u.oh.AUDIO_OUTPUT].map((e) => {
                    let [t, n] = e;
                    return t;
                }),
                duration_output_device_used_ms: e[u.oh.AUDIO_OUTPUT].map((e) => {
                    let [t, n] = e;
                    return n;
                }),
            }
        );
    }
}
let T = new p(l.h, {
        AUDIO_SET_INPUT_DEVICE: (e) => A(u.oh.AUDIO_INPUT, e),
        AUDIO_SET_OUTPUT_DEVICE: (e) => A(u.oh.AUDIO_OUTPUT, e),
        MEDIA_ENGINE_SET_VIDEO_DEVICE: (e) => A(u.oh.VIDEO_INPUT, e),
        SPEAKING: function (e) {
            let { context: t, userId: n, speakingFlags: i } = e;
            if (t !== u.x.DEFAULT) return !1;
            let r = c.default.getCurrentUser()?.id;
            if (null == r) return !1;
            let a = n === r ? u.oh.AUDIO_INPUT : u.oh.AUDIO_OUTPUT;
            if (i === u.ME.NONE && T.isSampling(a)) T.stopSampling(a);
            else {
                if (i === u.ME.NONE || T.isSampling(a)) return !1;
                T.startSampling(a);
            }
        },
        RTC_CONNECTION_CLIENT_CONNECT: function () {
            T.reset();
        },
    }),
    m = T;
