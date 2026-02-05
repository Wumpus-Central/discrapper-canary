s.d(e, { default: () => v });
var n = s(627968),
    i = s(64700),
    a = s(503698),
    l = s.n(a),
    r = s(390544),
    d = s(158954),
    c = s(311907),
    o = s(116833),
    f = s(397927),
    u = s(793574),
    p = s(46054),
    x = s(801264),
    m = s(665171),
    _ = s(522055),
    h = s(500897),
    A = s(117265),
    N = s(294726),
    g = s(985018),
    j = s(889801);
function v(t) {
    let { guildId: e, instance: s, onClose: a, transitionState: v } = t,
        S = (0, c.bG)([_.A], () => _.A.getStateForGuild(e)?.instructions[s.planId]);
    i.useEffect(() => {
        null == S && (0, m.tT)(e, s.planId);
    }, [e, s.planId, S]);
    let C = (0, A.A)(s),
        { handleCopyServerIp: T, animateCopyIcon: I } = (0, h.A)(e, s.id, u.A.GAME_SERVER_INSTRUCTIONS_MODAL, C ?? ""),
        E = i.useMemo(() => {
            switch (s.status) {
                case r.M.STARTING:
                    return g.intl.string(N.default.ud4hxY);
                case r.M.OFFLINE:
                    return g.intl.string(N.default.ABAm7x);
                default:
                    return;
            }
        }, [s.status]);
    return (0, n.jsxs)(d.dWK, {
        size: "lg",
        paddingSize: "lg",
        transitionState: v,
        onClose: a,
        children: [
            (0, n.jsx)(d.rQ0, {
                gradientColor: "purple",
                graphic: {
                    type: "dynamic",
                    component: o.DynamicGraphicComponent.GAME_SERVER_GAME_INSTRUCTIONS_ASSET,
                    props: { instance: s },
                },
                alignCenter: !0,
                title: s.name,
                subtitle: g.intl.string(N.default["4HqfaU"]),
            }),
            null == S
                ? (0, n.jsx)(f.y$y, {})
                : (0, n.jsxs)("div", {
                      className: j.Qs,
                      children: [
                          null != E && (0, n.jsx)(x.A, { className: j.et, children: E }),
                          (0, n.jsx)("div", {
                              className: j.$6,
                              children: S.map((t, e) =>
                                  (0, n.jsxs)(
                                      "div",
                                      {
                                          className: j.PM,
                                          children: [
                                              (0, n.jsx)("div", {
                                                  className: j.CD,
                                                  children: (0, n.jsx)(f.Text, {
                                                      variant: "text-xs/semibold",
                                                      color: "text-subtle",
                                                      children: g.intl.formatToPlainString(N.default.oSU1fF, {
                                                          step: e + 1,
                                                      }),
                                                  }),
                                              }),
                                              (0, n.jsx)(f.Text, {
                                                  variant: "text-sm/normal",
                                                  color: "text-subtle",
                                                  children: p.A.parse(t, !1, { allowLinks: !0 }),
                                              }),
                                          ],
                                      },
                                      e,
                                  ),
                              ),
                          }),
                          null != C &&
                              (0, n.jsxs)("div", {
                                  className: j.i7,
                                  children: [
                                      (0, n.jsx)("div", {
                                          className: l()(j.Nk, I && j.i0),
                                          children: (0, n.jsx)(f.Text, {
                                              variant: "text-md/medium",
                                              color: "text-strong",
                                              children: C,
                                          }),
                                      }),
                                      (0, n.jsx)(f.Button, {
                                          variant: I ? "active" : "primary",
                                          text: I ? g.intl.string(g.t.t5VZ88) : g.intl.string(g.t.OpuAlK),
                                          onClick: T,
                                          icon: f.TdU,
                                      }),
                                  ],
                              }),
                      ],
                  }),
        ],
    });
}
