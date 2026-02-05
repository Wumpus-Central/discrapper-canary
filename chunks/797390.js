"use strict";
n.d(t, { R: () => f }), n(321073);
var r = n(313961),
    i = n(652896),
    a = n(616356),
    s = n(961350),
    o = n(162605),
    l = n(650338),
    u = n(709710),
    c = n(601900),
    d = n(548370),
    _ = n(652215);
let f = {
    getActiveErrors: () =>
        (0, d.D$)()
            ? a.A.getAllActiveStreams().reduce((e, t) => {
                  let n = o.A.getRTCConnection((0, i._z)(t))?.getMediaEngineConnectionId();
                  if (null == n || t.ownerId === s.default.getId() || t.state === _.XYD.PAUSED) return e;
                  let a = (0, d.xA)(n, t.ownerId);
                  if (null == a) return e;
                  let f = r.A.getParticipant(t.channelId, (0, i._z)(t));
                  if (null == f) return e;
                  let p = (0, l.wz)(f);
                  return (
                      null == p ||
                          ((a.short.frameRate < (0, d.s1)(p.maxFrameRate) ||
                              a.long.frameRate < (0, d.s1)(p.maxFrameRate)) &&
                              e.push({ type: u.iy.STREAM_VIEW_LOW_FPS, ...(0, c.id)((0, i._z)(t)) })),
                      e
                  );
              }, [])
            : null,
    makeErrorContextKey: (e) => `${e.streamKey}:${e.mediaSessionId}`,
};
