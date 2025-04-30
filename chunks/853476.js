n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var l = n(458725),
    i = n(386146),
    a = n(502053),
    o = n(42326),
    s = n(388032);
function u(e) {
    let { userId: t, className: n } = e,
        u = (0, a.Z)(t),
        { avErrorUIEnabled: c } = (0, i.JN)({ location: 'VideoWarning' });
    if (null == u) return null;
    let d = u === l.u.CAMERA_SEND_LOW_FPS ? s.intl.string(s.t['1NyoVl']) : void 0;
    return null != d
        ? (0, r.jsx)(o.Z, {
              className: n,
              errorMessage: d,
              avError: c ? u : null
          })
        : null;
}
