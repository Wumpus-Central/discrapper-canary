"use strict";
n.d(t, { Ay: () => T, Qu: () => I, yn: () => g });
var i = n(17928),
    r = n(459838),
    s = n(228366),
    a = n(540999),
    o = n(235058);
let l = [
        ["codecH264", "H264"],
        ["codecH265", "H265"],
        ["codecAv1", "AV1"],
    ],
    u = [
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
    _ = { ...d };
function f(e, t) {
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
let h = !1;
function p() {
    if (h) return !0;
    if (!o.Ay.isEnabled()) return !1;
    try {
        let e = o.Ay.getMediaEngine();
        return (
            e.on(r.bg.Connection, () => {
                a.A.isDeveloper && E();
            }),
            e.once(r.bg.Destroy, () => {
                h = !1;
            }),
            (h = !0),
            !0
        );
    } catch {
        return !1;
    }
}
function E() {
    if (a.A.isDeveloper && p())
        try {
            var e;
            let t =
                ((e = _),
                {
                    overrideDeniedVideoCodecs: f(e, l),
                    overrideDeniedVideoEncoders: f(e, u),
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
            o.Ay.getMediaEngine().eachConnection((e) => {
                e.setAudioVideoOverridesTransport(t);
            });
        } catch {}
}
class m extends i.Ay.DeviceSettingsStore {
    static displayName = "AudioVideoOverridesStore";
    static persistKey = "AudioVideoOverridesStore";
    initialize(e) {
        if ((this.waitFor(a.A), (_ = null != e ? { ...d, ...e } : { ...d }), E(), !h)) {
            let e = () => {
                p() && (E(), o.Ay.removeChangeListener(e));
            };
            o.Ay.addChangeListener(e);
        }
    }
    getUserAgnosticState() {
        return _;
    }
    get alwaysShowCapturePreview() {
        return a.A.isDeveloper && _.alwaysShowCapturePreview;
    }
    getSnapshot() {
        return _;
    }
}
function g(e) {
    s.h.dispatch({ type: "AUDIO_VIDEO_OVERRIDES_UPDATE", partial: e });
}
let A = new m(s.h, {
    AUDIO_VIDEO_OVERRIDES_UPDATE: function (e) {
        if (!a.A.isDeveloper) return !1;
        (_ = { ..._, ...e.partial }), E();
    },
});
function I() {
    return (0, i.bG)([A, a.A], () => a.A.isDeveloper && A.alwaysShowCapturePreview);
}
let T = A;
