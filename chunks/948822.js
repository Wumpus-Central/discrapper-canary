var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(855986),
    o = n(416696),
    c = n(939249),
    d = n(793574),
    u = n(688810),
    h = n(279250),
    p = n(880144),
    m = n(702904),
    A = n(471993),
    f = n(734057),
    g = n(71393),
    x = n(754712),
    C = n(576705),
    y = n(309010),
    I = n(920639),
    j = n(82715),
    N = n(731854),
    v = n(792996),
    E = n(989952),
    b = n(550234);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { channelId: t, center: n, iconSize: a } = e,
                S = (0, r.bG)([f.A], () => f.A.getChannel(t)),
                T = S?.guild_id,
                _ = (0, r.bG)([y.Ay], () => y.Ay.getVoiceChannelId() === t),
                R = (0, r.bG)([x.Ay], () => (0, p.A)(x.Ay)),
                O = (0, r.bG)([g.A, C.A], () => null != S && (0, h.vz)(S, g.A, C.A, !0)),
                { analyticsLocations: L } = (0, u.Ay)(d.A.GUILD_ROOM),
                { Component: P } = (0, o.c)("enable"),
                M = (0, r.bG)([x.Ay], () => x.Ay.supports(N.O5.VIDEO)),
                w = l.useRef(null),
                U = l.useCallback(() => {
                    if (null != T) {
                        if (!R) return void (0, m.A)();
                        ((0, A.A)(T, t, L), (0, I.n0)({ channelId: t, interactionType: "tv_clicked_empty_screen" }));
                    }
                }, [T, R, t, L]);
            return null != S && null != T && O && _ && M
                ? (0, i.jsxs)(c.D, {
                      "aria-label": v.intl.string(v.t.fjBNo1),
                      className: b.XI,
                      onClick: U,
                      focusProps: { ringTarget: w },
                      children: [
                          (0, i.jsx)(j.A, { className: s()(b.ys, E.zq) }),
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
        },
    },
);
