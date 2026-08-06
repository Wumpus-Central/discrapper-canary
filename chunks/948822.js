n.d(t, { A: () => b });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(17928),
    o = n(416696),
    c = n(939249),
    d = n(793574),
    u = n(688810),
    h = n(279250),
    p = n(880144),
    m = n(702904),
    A = n(471993),
    x = n(734057),
    f = n(71393),
    g = n(293246),
    y = n(576705),
    C = n(309010),
    j = n(920639),
    v = n(82715),
    E = n(375708),
    N = n(660443),
    I = n(726123);
function b(e) {
    let { channelId: t, center: n, iconSize: a } = e,
        b = (0, r.bG)([x.A], () => x.A.getChannel(t)),
        T = b?.guild_id,
        _ = (0, r.bG)([C.Ay], () => C.Ay.getVoiceChannelId() === t),
        R = (0, r.bG)([g.Ay], () => (0, p.A)(g.Ay)),
        S = (0, r.bG)([f.A, y.A], () => null != b && (0, h.vz)(b, f.A, y.A, !0)),
        { analyticsLocations: L } = (0, u.Ay)(d.A.GUILD_ROOM),
        { Component: P } = (0, o.c)("enable"),
        w = l.useRef(null),
        O = l.useCallback(() => {
            if (null != T) {
                if (!R) return void (0, m.A)();
                (0, A.A)(T, t, L), (0, j.n0)({ channelId: t, interactionType: "tv_stream_clicked" });
            }
        }, [T, R, t, L]);
    return null != b && null != T && S && _
        ? (0, i.jsxs)(c.D, {
              "aria-label": E.intl.string(E.t.fjBNo1),
              className: I.XI,
              onClick: O,
              focusProps: { ringTarget: w },
              children: [
                  (0, i.jsx)(v.A, { className: s()(I.ys, N.zq) }),
                  (0, i.jsx)("div", {
                      className: I.F$,
                      style: { left: `${n.x}%`, top: `${n.y}%` },
                      children: (0, i.jsx)("div", {
                          className: N.zq,
                          ref: w,
                          children: (0, i.jsx)(P, {
                              className: I.Kk,
                              color: "currentColor",
                              size: "custom",
                              width: a,
                              height: a,
                          }),
                      }),
                  }),
              ],
          })
        : null;
}
