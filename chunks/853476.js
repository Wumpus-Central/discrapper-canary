n.d(t, { Z: () => c });
var r = n(951288);
n(647438);
var i = n(458725),
    l = n(502053),
    a = n(42326),
    o = n(388032);
function c(e) {
    let { userId: t, className: n } = e,
        c = (0, l.Z)(t);
    if (null == c) return null;
    let s = c === i.u.CAMERA_SEND_LOW_FPS ? o.intl.string(o.t["1NyoVt"]) : void 0;
    return null != s
        ? (0, r.jsx)(a.Z, {
              className: n,
              errorMessage: s,
              avError: c,
          })
        : null;
}
