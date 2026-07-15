"use strict";
n.d(t, { Ay: () => g, Qu: () => m, yn: () => p });
var i = n(17928),
    r = n(459838),
    a = n(228366),
    s = n(540999),
    l = n(186295);
let o = [
        ["codecH264", "H264"],
        ["codecH265", "H265"],
        ["codecAv1", "AV1"],
    ],
    d = [
        ["encNvidiaDx11", "nvidia-dx11"],
        ["encNvidiaCuda", "nvidia-cuda"],
        ["encAmdDx11", "amd-dx11"],
        ["encIntelDx11", "intel-dx11"],
        ["encIntelCpu", "intel-cpu"],
        ["encWmfCpu", "wmf-cpu"],
        ["encWmfGpu", "wmf-gpu"],
        ["encWmfDx11", "wmf-dx11"],
    ],
    c = [
        ["capGraphicsCapture", "deny-graphics-capture", "whenFalse"],
        ["capDxgi", "deny-dxgi", "whenFalse"],
        ["capGdi", "deny-gdi", "whenFalse"],
        ["capVideoHook", "deny-video-hook", "whenFalse"],
        ["gdiForceBitblt", "gdi-force-bitblt", "whenTrue"],
        ["bypassHybridGpuFpsRestriction", "bypass-hybrid-gpu-fps", "whenTrue"],
        ["allowHdr", "deny-hdr", "whenFalse"],
    ],
    u = {
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
    _ = { ...u };
function E(e, t) {
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
let A = !1;
function h() {
    if (A) return !0;
    if (!l.Ay.isEnabled()) return !1;
    try {
        let e = l.Ay.getMediaEngine();
        return (
            e.on(r.bg.Connection, () => {
                s.A.isDeveloper && I();
            }),
            e.once(r.bg.Destroy, () => {
                A = !1;
            }),
            (A = !0),
            !0
        );
    } catch {
        return !1;
    }
}
function I() {
    if (s.A.isDeveloper && h())
        try {
            var e;
            let t =
                ((e = _),
                {
                    overrideDeniedVideoCodecs: E(e, o),
                    overrideDeniedVideoEncoders: E(e, d),
                    captureOverrides: c
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
            l.Ay.getMediaEngine().eachConnection((e) => {
                e.setAudioVideoOverridesTransport(t);
            });
        } catch {}
}
class f extends i.Ay.DeviceSettingsStore {
    static displayName = "AudioVideoOverridesStore";
    static persistKey = "AudioVideoOverridesStore";
    initialize(e) {
        this.waitFor(s.A),
            (_ = null != e ? { ...u, ...e } : { ...u }),
            I(),
            A ||
                l.Ay.addChangeListener(function e() {
                    h() && (I(), l.Ay.removeChangeListener(e));
                });
    }
    getUserAgnosticState() {
        return _;
    }
    get alwaysShowCapturePreview() {
        return s.A.isDeveloper && _.alwaysShowCapturePreview;
    }
    getSnapshot() {
        return _;
    }
}
function p(e) {
    a.h.dispatch({ type: "AUDIO_VIDEO_OVERRIDES_UPDATE", partial: e });
}
let T = new f(a.h, {
    AUDIO_VIDEO_OVERRIDES_UPDATE: function (e) {
        if (!s.A.isDeveloper) return !1;
        (_ = { ..._, ...e.partial }), I();
    },
});
function m() {
    return (0, i.bG)([T, s.A], () => s.A.isDeveloper && T.alwaysShowCapturePreview);
}
let g = T;
