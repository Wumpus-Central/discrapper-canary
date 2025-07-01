n.d(t, { Z: () => s });
var r = n(255367);
n(73800);
var l = n(458725),
    i = n(386146),
    a = n(502053),
    o = n(42326),
    u = n(388032);
function s(e) {
    let { userId: t, className: n } = e,
        s = (0, a.Z)(t),
        { avErrorUIEnabled: c } = (0, i.JN)({ location: 'VideoWarning' });
    if (null == s) return null;
    let d = s === l.u.CAMERA_SEND_LOW_FPS ? u.intl.string(u.t['1NyoVl']) : void 0;
    return null != d
        ? (0, r.jsx)(o.Z, {
              className: n,
              errorMessage: d,
              avError: c ? s : null
          })
        : null;
}
