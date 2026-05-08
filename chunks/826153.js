s.d(e, { default: () => T });
var i = s(627968),
    a = s(64700),
    l = s(503698),
    n = s.n(l),
    r = s(390544),
    d = s(224640),
    c = s(20742),
    u = s(17928),
    o = s(116833),
    m = s(289873),
    p = s(834730),
    x = s(821609),
    h = s(624479),
    g = s(793574),
    A = s(46054),
    j = s(208039),
    N = s(396748),
    S = s(522055),
    E = s(500897),
    f = s(117265),
    v = s(576709),
    I = s(375708),
    C = s(360452);
function T(t) {
    let { guildId: e, instance: s, onClose: l, transitionState: T } = t,
        _ = (0, u.bG)([S.A], () => S.A.getStateForGuild(e)?.instructions[s.planId]);
    a.useEffect(() => {
        null == _ && (0, N.tT)(e, s.planId);
    }, [e, s.planId, _]);
    let b = (0, f.A)(s),
        { handleCopyServerIp: M, animateCopyIcon: k } = (0, E.A)(e, s.id, g.A.GAME_SERVER_INSTRUCTIONS_MODAL, b ?? ""),
        G = a.useMemo(() => {
            switch (s.status) {
                case r.M.STARTING:
                    return I.intl.string(v.default.ud4hxY);
                case r.M.OFFLINE:
                    return I.intl.string(v.default.ABAm7x);
                default:
                    return;
            }
        }, [s.status]);
    return (0, i.jsxs)(d.d, {
        size: "lg",
        paddingSize: "lg",
        transitionState: T,
        onClose: l,
        "aria-label": s.name,
        children: [
            (0, i.jsx)(c.rQ, {
                gradientColor: "purple",
                graphic: {
                    type: "dynamic",
                    component: o.DynamicGraphicComponent.GAME_SERVER_GAME_INSTRUCTIONS_ASSET,
                    props: { gameId: s.gameId },
                },
                alignCenter: !0,
                title: s.name,
                subtitle: I.intl.string(v.default["4HqfaU"]),
            }),
            null == _
                ? (0, i.jsx)(m.y, {})
                : (0, i.jsxs)("div", {
                      className: C.Qs,
                      children: [
                          null != G && (0, i.jsx)(j.A, { className: C.et, children: G }),
                          (0, i.jsx)("div", {
                              className: C.$6,
                              children: _.map((t, e) =>
                                  (0, i.jsxs)(
                                      "div",
                                      {
                                          className: C.PM,
                                          children: [
                                              (0, i.jsx)("div", {
                                                  className: C.CD,
                                                  children: (0, i.jsx)(p.E, {
                                                      variant: "text-xs/semibold",
                                                      color: "text-subtle",
                                                      children: I.intl.formatToPlainString(v.default.oSU1fF, {
                                                          step: e + 1,
                                                      }),
                                                  }),
                                              }),
                                              (0, i.jsx)(p.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-subtle",
                                                  children: A.A.parse(t, !1, { allowLinks: !0 }),
                                              }),
                                          ],
                                      },
                                      e,
                                  ),
                              ),
                          }),
                          null != b &&
                              (0, i.jsxs)("div", {
                                  className: C.i7,
                                  children: [
                                      (0, i.jsx)("div", {
                                          className: n()(C.Nk, k && C.i0),
                                          children: (0, i.jsx)(p.E, {
                                              variant: "text-md/medium",
                                              color: "text-strong",
                                              children: b,
                                          }),
                                      }),
                                      (0, i.jsx)(x.$, {
                                          variant: k ? "active" : "primary",
                                          text: k ? I.intl.string(I.t.t5VZ88) : I.intl.string(I.t.OpuAlK),
                                          onClick: M,
                                          icon: h.T,
                                      }),
                                  ],
                              }),
                      ],
                  }),
        ],
    });
}
