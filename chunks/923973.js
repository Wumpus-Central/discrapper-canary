n.d(t, { Z: () => l }), n(388685);
var r = n(392711),
    i = n.n(r),
    a = n(442837),
    o = n(131951),
    s = n(65154);
function l() {
    let { enabled: e, cameraUnavailable: t } = (0, a.cj)([o.Z], () => {
        var e, t;
        let n = null == (t = null == (e = i()(o.Z.getVideoDevices()).values().first()) ? void 0 : e.disabled) || t;
        return {
            enabled: o.Z.isVideoEnabled(),
            cameraUnavailable: n || !o.Z.supports(s.AN.VIDEO)
        };
    });
    return {
        enabled: e,
        cameraUnavailable: t
    };
}
