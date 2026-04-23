s.d(e, { default: () => E });
var n = s(627968),
    i = s(64700),
    a = s(503698),
    l = s.n(a),
    r = s(390544),
    d = s(224640),
    c = s(20742),
    f = s(17928),
    o = s(116833),
    u = s(289873),
    p = s(834730),
    m = s(821609),
    x = s(624479),
    _ = s(793574),
    h = s(46054),
    g = s(208039),
    A = s(665171),
    N = s(522055),
    j = s(500897),
    v = s(117265),
    I = s(576709),
    S = s(985018),
    C = s(360452);
function E(t) {
    let { guildId: e, instance: s, onClose: a, transitionState: E } = t,
        T = (0, f.bG)([N.A], () => N.A.getStateForGuild(e)?.instructions[s.planId]);
    i.useEffect(() => {
        null == T && (0, A.tT)(e, s.planId);
    }, [e, s.planId, T]);
    let M = (0, v.A)(s),
        { handleCopyServerIp: b, animateCopyIcon: k } = (0, j.A)(e, s.id, _.A.GAME_SERVER_INSTRUCTIONS_MODAL, M ?? ""),
        G = i.useMemo(() => {
            switch (s.status) {
                case r.M.STARTING:
                    return S.intl.string(I.default.ud4hxY);
                case r.M.OFFLINE:
                    return S.intl.string(I.default.ABAm7x);
                default:
                    return;
            }
        }, [s.status]);
    return (0, n.jsxs)(d.d, {
        size: "lg",
        paddingSize: "lg",
        transitionState: E,
        onClose: a,
        children: [
            (0, n.jsx)(c.rQ, {
                gradientColor: "purple",
                graphic: {
                    type: "dynamic",
                    component: o.DynamicGraphicComponent.GAME_SERVER_GAME_INSTRUCTIONS_ASSET,
                    props: { gameId: s.gameId },
                },
                alignCenter: !0,
                title: s.name,
                subtitle: S.intl.string(I.default["4HqfaU"]),
            }),
            null == T
                ? (0, n.jsx)(u.y, {})
                : (0, n.jsxs)("div", {
                      className: C.Qs,
                      children: [
                          null != G && (0, n.jsx)(g.A, { className: C.et, children: G }),
                          (0, n.jsx)("div", {
                              className: C.$6,
                              children: T.map((t, e) =>
                                  (0, n.jsxs)(
                                      "div",
                                      {
                                          className: C.PM,
                                          children: [
                                              (0, n.jsx)("div", {
                                                  className: C.CD,
                                                  children: (0, n.jsx)(p.E, {
                                                      variant: "text-xs/semibold",
                                                      color: "text-subtle",
                                                      children: S.intl.formatToPlainString(I.default.oSU1fF, {
                                                          step: e + 1,
                                                      }),
                                                  }),
                                              }),
                                              (0, n.jsx)(p.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-subtle",
                                                  children: h.A.parse(t, !1, { allowLinks: !0 }),
                                              }),
                                          ],
                                      },
                                      e,
                                  ),
                              ),
                          }),
                          null != M &&
                              (0, n.jsxs)("div", {
                                  className: C.i7,
                                  children: [
                                      (0, n.jsx)("div", {
                                          className: l()(C.Nk, k && C.i0),
                                          children: (0, n.jsx)(p.E, {
                                              variant: "text-md/medium",
                                              color: "text-strong",
                                              children: M,
                                          }),
                                      }),
                                      (0, n.jsx)(m.$, {
                                          variant: k ? "active" : "primary",
                                          text: k ? S.intl.string(S.t.t5VZ88) : S.intl.string(S.t.OpuAlK),
                                          onClick: b,
                                          icon: x.T,
                                      }),
                                  ],
                              }),
                      ],
                  }),
        ],
    });
}
