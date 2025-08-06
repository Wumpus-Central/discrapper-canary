n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(458725),
    o = n(386146),
    a = n(502053),
    s = n(42326),
    l = n(388032);
function c(e) {
    return e === i.u.CAMERA_SEND_LOW_FPS ? l.intl.string(l.t["1NyoVl"]) : void 0;
}
function u(e) {
    let { userId: t, className: n } = e,
        i = (0, a.Z)(t),
        { avErrorUIEnabled: l } = (0, o.JN)({ location: "VideoWarning" });
    if (null == i) return null;
    let u = c(i);
    return null != u
        ? (0, r.jsx)(s.Z, {
              className: n,
              errorMessage: u,
              avError: l ? i : null,
          })
        : null;
}
