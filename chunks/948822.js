n.d(t, { A: () => T });
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
    f = n(471993),
    A = n(734057),
    x = n(71393),
    g = n(453028),
    C = n(576705),
    y = n(309010),
    j = n(920639),
    I = n(82715),
    N = n(731854),
    v = n(375708),
    E = n(989952),
    b = n(550234);
function T(e) {
    let { channelId: t, center: n, iconSize: a } = e,
        T = (0, r.bG)([A.A], () => A.A.getChannel(t)),
        _ = T?.guild_id,
        R = (0, r.bG)([y.Ay], () => y.Ay.getVoiceChannelId() === t),
        S = (0, r.bG)([g.Ay], () => (0, p.A)(g.Ay)),
        L = (0, r.bG)([x.A, C.A], () => null != T && (0, h.vz)(T, x.A, C.A, !0)),
        { analyticsLocations: O } = (0, u.Ay)(d.A.GUILD_ROOM),
        { Component: P } = (0, o.c)("enable"),
        M = (0, r.bG)([g.Ay], () => g.Ay.supports(N.O5.VIDEO)),
        w = l.useRef(null),
        D = l.useCallback(() => {
            if (null != _) {
                if (!S) return void (0, m.A)();
                (0, f.A)(_, t, O), (0, j.n0)({ channelId: t, interactionType: "tv_stream_clicked" });
            }
        }, [_, S, t, O]);
    return null != T && null != _ && L && R && M
        ? (0, i.jsxs)(c.D, {
              "aria-label": v.intl.string(v.t.fjBNo1),
              className: b.XI,
              onClick: D,
              focusProps: { ringTarget: w },
              children: [
                  (0, i.jsx)(I.A, { className: s()(b.ys, E.zq) }),
                  (0, i.jsx)("div", {
                      className: b.F$,
                      style: { left: `${n.x}%`, top: `${n.y}%` },
                      children: (0, i.jsx)("div", {
                          className: E.zq,
                          ref: w,
                          children: (0, i.jsx)(P, {
                              className: b.Kk,
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
