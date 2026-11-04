n.d(t, { A: () => S });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(17928),
    o = n(416696),
    d = n(939249),
    c = n(793574),
    u = n(688810),
    h = n(279250),
    p = n(880144),
    m = n(702904),
    A = n(471993),
    f = n(734057),
    g = n(71393),
    x = n(477653),
    C = n(576705),
    y = n(309010),
    j = n(920639),
    I = n(82715),
    N = n(731854),
    v = n(105292),
    E = n(989952),
    b = n(550234);
function S(e) {
    let { channelId: t, center: n, iconSize: a } = e,
        S = (0, r.bG)([f.A], () => f.A.getChannel(t)),
        T = S?.guild_id,
        _ = (0, r.bG)([y.Ay], () => y.Ay.getVoiceChannelId() === t),
        R = (0, r.bG)([x.Ay], () => (0, p.A)(x.Ay)),
        O = (0, r.bG)([g.A, C.A], () => null != S && (0, h.vz)(S, g.A, C.A, !0)),
        { analyticsLocations: P } = (0, u.Ay)(c.A.GUILD_ROOM),
        { Component: L } = (0, o.c)("enable"),
        M = (0, r.bG)([x.Ay], () => x.Ay.supports(N.O5.VIDEO)),
        w = l.useRef(null),
        U = l.useCallback(() => {
            if (null != T) {
                if (!R) return void (0, m.A)();
                ((0, A.A)(T, t, P), (0, j.n0)({ channelId: t, interactionType: "tv_clicked_empty_screen" }));
            }
        }, [T, R, t, P]);
    return null != S && null != T && O && _ && M
        ? (0, i.jsxs)(d.D, {
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
                          children: (0, i.jsx)(L, {
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
