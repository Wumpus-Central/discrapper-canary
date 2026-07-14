n.d(t, { Ay: () => v, Qu: () => C, yn: () => E });
var i = n(17928),
    r = n(459838),
    l = n(228366),
    s = n(540999),
    a = n(186295);
let o = [
        ["codecH264", "H264"],
        ["codecH265", "H265"],
        ["codecAv1", "AV1"],
    ],
    c = [
        ["encNvidiaDx11", "nvidia-dx11"],
        ["encNvidiaCuda", "nvidia-cuda"],
        ["encAmdDx11", "amd-dx11"],
        ["encIntelDx11", "intel-dx11"],
        ["encIntelCpu", "intel-cpu"],
        ["encWmfCpu", "wmf-cpu"],
        ["encWmfGpu", "wmf-gpu"],
        ["encWmfDx11", "wmf-dx11"],
    ],
    u = [
        ["capGraphicsCapture", "deny-graphics-capture", "whenFalse"],
        ["capDxgi", "deny-dxgi", "whenFalse"],
        ["capGdi", "deny-gdi", "whenFalse"],
        ["capVideoHook", "deny-video-hook", "whenFalse"],
        ["gdiForceBitblt", "gdi-force-bitblt", "whenTrue"],
        ["bypassHybridGpuFpsRestriction", "bypass-hybrid-gpu-fps", "whenTrue"],
        ["allowHdr", "deny-hdr", "whenFalse"],
    ],
    d = {
        codecH264: !0,
        codecH265: !0,
        codecAv1: !0,
        encNvidiaDx11: !0,
        encNvidiaCuda: !0,
        encAmdDx11: !0,
        encIntelDx11: !0,
        encIntelCpu: !0,
        encWmfCpu: !0,
        encWmfGpu: !0,
        encWmfDx11: !0,
        capGraphicsCapture: !0,
        capDxgi: !0,
        capGdi: !0,
        capVideoHook: !0,
        gdiForceBitblt: !1,
        bypassHybridGpuFpsRestriction: !1,
        allowHdr: !0,
        alwaysShowCapturePreview: !1,
    },
    A = { ...d };
function h(e, t) {
    return t
        .filter((t) => {
            let [n] = t;
            return !e[n];
        })
        .map((e) => {
            let [, t] = e;
            return t;
        })
        .join(",");
}
let m = !1;
function g() {
    if (m) return !0;
    if (!a.Ay.isEnabled()) return !1;
    try {
        let e = a.Ay.getMediaEngine();
        return (
            e.on(r.bg.Connection, () => {
                s.A.isDeveloper && p();
            }),
            e.once(r.bg.Destroy, () => {
                m = !1;
            }),
            (m = !0),
            !0
        );
    } catch {
        return !1;
    }
}
function p() {
    if (s.A.isDeveloper && g())
        try {
            var e;
            let t =
                ((e = A),
                {
                    overrideDeniedVideoCodecs: h(e, o),
                    overrideDeniedVideoEncoders: h(e, c),
                    captureOverrides: u
                        .filter((t) => {
                            let [n, , i] = t;
                            return "whenFalse" === i ? !e[n] : !!e[n];
                        })
                        .map((e) => {
                            let [, t] = e;
                            return t;
                        })
                        .join(","),
                });
            a.Ay.getMediaEngine().eachConnection((e) => {
                e.setAudioVideoOverridesTransport(t);
            });
        } catch {}
}
class f extends i.Ay.DeviceSettingsStore {
    static displayName = "AudioVideoOverridesStore";
    static persistKey = "AudioVideoOverridesStore";
    initialize(e) {
        this.waitFor(s.A),
            (A = null != e ? { ...d, ...e } : { ...d }),
            p(),
            m ||
                a.Ay.addChangeListener(function e() {
                    g() && (p(), a.Ay.removeChangeListener(e));
                });
    }
    getUserAgnosticState() {
        return A;
    }
    get alwaysShowCapturePreview() {
        return s.A.isDeveloper && A.alwaysShowCapturePreview;
    }
    getSnapshot() {
        return A;
    }
}
function E(e) {
    l.h.dispatch({ type: "AUDIO_VIDEO_OVERRIDES_UPDATE", partial: e });
}
let b = new f(l.h, {
    AUDIO_VIDEO_OVERRIDES_UPDATE: function (e) {
        if (!s.A.isDeveloper) return !1;
        (A = { ...A, ...e.partial }), p();
    },
});
function C() {
    return (0, i.bG)([b, s.A], () => s.A.isDeveloper && b.alwaysShowCapturePreview);
}
let v = 88245 != n.j ? b : null;
