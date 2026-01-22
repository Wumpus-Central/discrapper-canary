s.d(e, {
    default: () => j,
});
var i = s(627968),
    n = s(64700),
    a = s(503698),
    l = s.n(a),
    r = s(390544),
    d = s(158954),
    c = s(311907),
    u = s(116833),
    o = s(397927),
    x = s(793574),
    p = s(46054),
    m = s(801264),
    h = s(665171),
    f = s(522055),
    b = s(500897),
    A = s(117265),
    _ = s(294726),
    N = s(985018),
    g = s(889801);

function j(t) {
    let { guildId: e, instance: s, onClose: a, transitionState: j } = t,
        v = (0, c.bG)([f.A], () => {
            var t;
            return null == (t = f.A.getStateForGuild(e)) ? void 0 : t.instructions[s.planId];
        });
    n.useEffect(() => {
        null == v && (0, h.tT)(e, s.planId);
    }, [e, s.planId, v]);
    let S = (0, A.A)(s),
        { handleCopyServerIp: T, animateCopyIcon: C } = (0, b.A)(
            e,
            s.id,
            x.A.GAME_SERVER_INSTRUCTIONS_MODAL,
            null != S ? S : "",
        ),
        E = n.useMemo(() => {
            switch (s.status) {
                case r.M.STARTING:
                    return N.intl.string(_.default.ud4hxY);
                case r.M.OFFLINE:
                    return N.intl.string(_.default.ABAm7x);
                default:
                    return;
            }
        }, [s.status]);
    return (0, i.jsxs)(d.dWK, {
        size: "lg",
        paddingSize: "lg",
        transitionState: j,
        onClose: a,
        children: [
            (0, i.jsx)(d.rQ0, {
                gradientColor: "purple",
                graphic: {
                    type: "dynamic",
                    component: u.DynamicGraphicComponent.GAME_SERVER_GAME_INSTRUCTIONS_ASSET,
                    props: {
                        instance: s,
                    },
                },
                alignCenter: !0,
                title: s.name,
                subtitle: N.intl.string(_.default["4HqfaU"]),
            }),
            null == v
                ? (0, i.jsx)(o.y$y, {})
                : (0, i.jsxs)("div", {
                      className: g.Qs,
                      children: [
                          null != E &&
                              (0, i.jsx)(m.A, {
                                  className: g.et,
                                  children: E,
                              }),
                          (0, i.jsx)("div", {
                              className: g.$6,
                              children: v.map((t, e) =>
                                  (0, i.jsxs)(
                                      "div",
                                      {
                                          className: g.PM,
                                          children: [
                                              (0, i.jsx)("div", {
                                                  className: g.CD,
                                                  children: (0, i.jsx)(o.Text, {
                                                      variant: "text-xs/semibold",
                                                      color: "text-subtle",
                                                      children: N.intl.formatToPlainString(_.default.oSU1fF, {
                                                          step: e + 1,
                                                      }),
                                                  }),
                                              }),
                                              (0, i.jsx)(o.Text, {
                                                  variant: "text-sm/normal",
                                                  color: "text-subtle",
                                                  children: p.A.parse(t, !1, {
                                                      allowLinks: !0,
                                                  }),
                                              }),
                                          ],
                                      },
                                      e,
                                  ),
                              ),
                          }),
                          null != S &&
                              (0, i.jsxs)("div", {
                                  className: g.i7,
                                  children: [
                                      (0, i.jsx)("div", {
                                          className: l()(g.Nk, C && g.i0),
                                          children: (0, i.jsx)(o.Text, {
                                              variant: "text-md/medium",
                                              color: "text-strong",
                                              children: S,
                                          }),
                                      }),
                                      (0, i.jsx)(o.Button, {
                                          variant: C ? "active" : "primary",
                                          text: C ? N.intl.string(N.t.t5VZ88) : N.intl.string(N.t.OpuAlK),
                                          onClick: T,
                                          icon: o.TdU,
                                      }),
                                  ],
                              }),
                      ],
                  }),
        ],
    });
}
