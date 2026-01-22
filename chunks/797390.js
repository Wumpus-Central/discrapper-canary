n.d(t, {
    R: () => h,
}),
    n(321073);
var r = n(313961),
    i = n(652896),
    a = n(616356),
    s = n(961350),
    o = n(162605),
    l = n(650338),
    c = n(487329),
    u = n(601900),
    d = n(548370),
    f = n(652215);

function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
let h = {
    getActiveErrors: () =>
        (0, d.D$)()
            ? a.A.getAllActiveStreams().reduce((e, t) => {
                  var n;
                  let a = null == (n = o.A.getRTCConnection((0, i._z)(t))) ? void 0 : n.getMediaEngineConnectionId();
                  if (null == a || t.ownerId === s.default.getId() || t.state === f.XYD.PAUSED) return e;
                  let p = (0, d.xA)(a, t.ownerId);
                  if (null == p) return e;
                  let h = r.A.getParticipant(t.channelId, (0, i._z)(t));
                  if (null == h) return e;
                  let m = (0, l.wz)(h);
                  return (
                      null == m ||
                          ((p.short.frameRate < (0, d.s1)(m.maxFrameRate) ||
                              p.long.frameRate < (0, d.s1)(m.maxFrameRate)) &&
                              e.push(
                                  _(
                                      {
                                          type: c.iy.STREAM_VIEW_LOW_FPS,
                                      },
                                      (0, u.id)((0, i._z)(t)),
                                  ),
                              )),
                      e
                  );
              }, [])
            : null,
    makeErrorContextKey: (e) => "".concat(e.streamKey, ":").concat(e.mediaSessionId),
};
