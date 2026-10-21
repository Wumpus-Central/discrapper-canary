n.d(t, { A: () => S });
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
    f = n(734057),
    x = n(71393),
    g = n(360906),
    C = n(576705),
    j = n(309010),
    y = n(920639),
    I = n(82715),
    N = n(731854),
    v = n(105292),
    E = n(989952),
    b = n(550234);
function S(e) {
    let { channelId: t, center: n, iconSize: a } = e,
        S = (0, r.bG)([f.A], () => f.A.getChannel(t)),
        _ = S?.guild_id,
        T = (0, r.bG)([j.Ay], () => j.Ay.getVoiceChannelId() === t),
        R = (0, r.bG)([g.Ay], () => (0, p.A)(g.Ay)),
        O = (0, r.bG)([x.A, C.A], () => null != S && (0, h.vz)(S, x.A, C.A, !0)),
        { analyticsLocations: L } = (0, u.Ay)(d.A.GUILD_ROOM),
        { Component: P } = (0, o.c)("enable"),
        M = (0, r.bG)([g.Ay], () => g.Ay.supports(N.O5.VIDEO)),
        w = l.useRef(null),
        U = l.useCallback(() => {
            if (null != _) {
                if (!R) return void (0, m.A)();
                ((0, A.A)(_, t, L), (0, y.n0)({ channelId: t, interactionType: "tv_clicked_empty_screen" }));
            }
        }, [_, R, t, L]);
    return null != S && null != _ && O && T && M
        ? (0, i.jsxs)(c.D, {
              "aria-label": v.intl.string(v.t.fjBNo1),
              className: b.XI,
              onClick: U,
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
