n.d(t, { Z: () => s });
var r = n(951288);
n(647438);
var i = n(458725),
    l = n(502053),
    a = n(42326),
    o = n(388032);
function s(e) {
    let { userId: t, className: n } = e,
        s = (0, l.Z)(t);
    if (null == s) return null;
    let c = s === i.u.CAMERA_SEND_LOW_FPS ? o.intl.string(o.t["1NyoVt"]) : void 0;
    return null != c
        ? (0, r.jsx)(a.Z, {
              className: n,
              errorMessage: c,
              avError: s,
          })
        : null;
}
