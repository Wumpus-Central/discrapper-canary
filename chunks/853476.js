n.d(t, { Z: () => u });
var r = n(951288);
n(647438);
var l = n(458725),
    i = n(502053),
    a = n(42326),
    o = n(388032);
function u(e) {
    let { userId: t, className: n } = e,
        u = (0, i.Z)(t);
    if (null == u) return null;
    let s = u === l.u.CAMERA_SEND_LOW_FPS ? o.intl.string(o.t["1NyoVl"]) : void 0;
    return null != s
        ? (0, r.jsx)(a.Z, {
              className: n,
              errorMessage: s,
              avError: u,
          })
        : null;
}
