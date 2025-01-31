n.d(t, { Z: () => l }), n(47120);
var i = n(392711),
    r = n.n(i),
    a = n(442837),
    s = n(131951),
    o = n(65154);
function l() {
    let { enabled: e, cameraUnavailable: t } = (0, a.cj)([s.Z], () => {
        var e, t;
        let n = null === (t = null === (e = r()(s.Z.getVideoDevices()).values().first()) || void 0 === e ? void 0 : e.disabled) || void 0 === t || t;
        return {
            enabled: s.Z.isVideoEnabled(),
            cameraUnavailable: n || !s.Z.supports(o.AN.VIDEO)
        };
    });
    return {
        enabled: e,
        cameraUnavailable: t
    };
}
