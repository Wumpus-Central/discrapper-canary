n.d(t, { A: () => I }), n(896048);
var r,
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(499979),
    l = n(73153),
    c = n(283047),
    u = n(430452),
    d = n(287809),
    f = n(731854);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let _ = {
        inputDeviceFrecency: f.oh.AUDIO_INPUT,
        outputDeviceFrecency: f.oh.AUDIO_OUTPUT,
        videoDeviceFrecency: f.oh.VIDEO_INPUT,
    },
    h = {
        afterCompute: () => {},
        computeBonus: () => 100,
        lookupKey: (e) => e,
        maxSamples: 256,
        numFrequentlyItems: 1 / 0,
    };
function m(e) {
    return {
        [f.oh.AUDIO_INPUT]: { getCurrentDeviceId: (e) => e.getInputDeviceId() },
        [f.oh.AUDIO_OUTPUT]: { getCurrentDeviceId: (e) => e.getOutputDeviceId() },
        [f.oh.VIDEO_INPUT]: { getCurrentDeviceId: (e) => e.getVideoDeviceId() },
    }[e];
}
function g(e, t) {
    let { oldId: n } = t;
    if (!S.isSampling(e)) return !1;
    S.stopSampling(e, n), S.startSampling(e);
}
function E(e) {
    var t;
    let { context: n, userId: r, speakingFlags: i } = e;
    if (n !== f.x.DEFAULT) return !1;
    let a = null == (t = d.default.getCurrentUser()) ? void 0 : t.id;
    if (null == a) return !1;
    let s = r === a ? f.oh.AUDIO_INPUT : f.oh.AUDIO_OUTPUT;
    if (i === f.ME.NONE && S.isSampling(s)) S.stopSampling(s);
    else {
        if (i === f.ME.NONE || S.isSampling(s)) return !1;
        S.startSampling(s);
    }
}
function b() {
    S.reset();
}
let y = {
        [f.oh.AUDIO_INPUT]: new o.W0(),
        [f.oh.AUDIO_OUTPUT]: new o.W0(),
        [f.oh.VIDEO_INPUT]: new o.W0(),
    },
    O = {
        [f.oh.AUDIO_INPUT]: {},
        [f.oh.AUDIO_OUTPUT]: {},
        [f.oh.VIDEO_INPUT]: {},
    },
    A = {
        [f.oh.AUDIO_INPUT]: new c.A(h),
        [f.oh.AUDIO_OUTPUT]: new c.A(h),
        [f.oh.VIDEO_INPUT]: new c.A(h),
    };
class v extends (r = s.Ay.PersistedStore) {
    initialize(e) {
        this.waitFor(u.A, d.default),
            [f.oh.AUDIO_INPUT, f.oh.AUDIO_OUTPUT, f.oh.VIDEO_INPUT].forEach((t) => {
                (null == e ? void 0 : e[t]) != null && A[t].overwriteHistory(e[t]), y[t].reset();
            });
    }
    reset() {
        [f.oh.AUDIO_INPUT, f.oh.AUDIO_OUTPUT, f.oh.VIDEO_INPUT].forEach((e) => {
            y[e].reset(), (O[e] = {});
        });
    }
    track(e, t, n) {
        null == O[e][t] && (O[e][t] = 0), (O[e][t] += n), A[e].track(t, { usesSinceLastTrack: n });
    }
    isSampling(e) {
        return y[e].isRunning();
    }
    startSampling(e) {
        y[e].start();
    }
    stopSampling(e, t) {
        let n = y[e];
        n.stop();
        let r = n.elapsed().asMilliseconds();
        if (r > 0) {
            let n = null != t ? t : m(e).getCurrentDeviceId(u.A);
            this.track(e, n, r);
        }
        n.reset();
    }
    getState() {
        return {
            [f.oh.AUDIO_INPUT]: A[f.oh.AUDIO_INPUT].usageHistory,
            [f.oh.AUDIO_OUTPUT]: A[f.oh.AUDIO_OUTPUT].usageHistory,
            [f.oh.VIDEO_INPUT]: A[f.oh.VIDEO_INPUT].usageHistory,
        };
    }
    getDeviceIdsSortedByFrecency(e) {
        return A[e].frequently;
    }
    getUsageStats() {
        let e = {
            [f.oh.AUDIO_INPUT]: [],
            [f.oh.AUDIO_OUTPUT]: [],
            [f.oh.VIDEO_INPUT]: [],
        };
        return (
            [f.oh.AUDIO_INPUT, f.oh.AUDIO_OUTPUT].forEach((t) => {
                this.isSampling(t) && (this.stopSampling(t), this.startSampling(t)), (e[t] = Object.entries(O[t]));
            }),
            {
                duration_input_device_used_ids: e[f.oh.AUDIO_INPUT].map((e) => {
                    let [t, n] = e;
                    return t;
                }),
                duration_input_device_used_ms: e[f.oh.AUDIO_INPUT].map((e) => {
                    let [t, n] = e;
                    return n;
                }),
                duration_output_device_used_ids: e[f.oh.AUDIO_OUTPUT].map((e) => {
                    let [t, n] = e;
                    return t;
                }),
                duration_output_device_used_ms: e[f.oh.AUDIO_OUTPUT].map((e) => {
                    let [t, n] = e;
                    return n;
                }),
            }
        );
    }
}
p(v, "displayName", "DeviceFrecencyStore"),
    p(v, "persistKey", "DeviceFrecencyStore"),
    p(v, "migrations", [(e) => a().mapKeys(e, (e, t) => _[t])]);
let S = new v(l.h, {
        AUDIO_SET_INPUT_DEVICE: (e) => g(f.oh.AUDIO_INPUT, e),
        AUDIO_SET_OUTPUT_DEVICE: (e) => g(f.oh.AUDIO_OUTPUT, e),
        MEDIA_ENGINE_SET_VIDEO_DEVICE: (e) => g(f.oh.VIDEO_INPUT, e),
        SPEAKING: E,
        RTC_CONNECTION_CLIENT_CONNECT: b,
    }),
    I = S;
