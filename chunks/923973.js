r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(47120);
var a = r(392711),
    o = r.n(a),
    s = r(442837),
    l = r(131951),
    u = r(65154);
function c() {
    let { enabled: e, cameraUnavailable: n } = (0, s.cj)([l.Z], () => {
        var e, n;
        let r = null === (n = null === (e = o()(l.Z.getVideoDevices()).values().first()) || void 0 === e ? void 0 : e.disabled) || void 0 === n || n;
        return {
            enabled: l.Z.isVideoEnabled(),
            cameraUnavailable: r || !l.Z.supports(u.AN.VIDEO)
        };
    });
    return {
        enabled: e,
        cameraUnavailable: n
    };
}
