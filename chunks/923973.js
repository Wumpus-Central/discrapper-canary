n.d(t, { Z: () => l }), n(47120);
var r = n(392711),
    i = n.n(r),
    o = n(442837),
    a = n(131951),
    s = n(65154);
function l() {
    let { enabled: e, cameraUnavailable: t } = (0, o.cj)([a.Z], () => {
        var e, t;
        let n = null == (t = null == (e = i()(a.Z.getVideoDevices()).values().first()) ? void 0 : e.disabled) || t;
        return {
            enabled: a.Z.isVideoEnabled(),
            cameraUnavailable: n || !a.Z.supports(s.AN.VIDEO)
        };
    });
    return {
        enabled: e,
        cameraUnavailable: t
    };
}
