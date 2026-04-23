a.d(t, { A: () => v });
var n = a(627968),
    l = a(64700),
    i = a(390544),
    s = a(311907),
    r = a(821609),
    o = a(573613),
    d = a(534514),
    c = a(834730),
    u = a(73153),
    m = a(665171),
    h = a(522055),
    p = a(71393),
    x = a(967198),
    g = a(661202);
function v() {
    let e = (0, s.bG)([x.A], () => x.A.getGuildId()),
        t = (0, s.bG)([p.A], () => p.A.getGuild(e)?.name),
        a = (0, s.bG)([h.A], () => h.A.getStateForGuild(e)?.instances),
        v = l.useMemo(() => Object.values(a ?? {})[0], [a]),
        b = l.useCallback(
            (t) => {
                null != v &&
                    null != e &&
                    u.h.dispatch({
                        type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                        guildId: e,
                        instance: { ...v, status: t },
                    });
            },
            [v, e],
        ),
        _ = l.useMemo(
            () =>
                Object.values(i.M).map((e) =>
                    (0, n.jsx)(
                        r.$,
                        {
                            variant: "primary",
                            text: e,
                            onClick: () => {
                                b(e);
                            },
                        },
                        e,
                    ),
                ),
            [b],
        ),
        f = l.useCallback(() => {
            null != v &&
                null != e &&
                u.h.dispatch({
                    type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                    guildId: e,
                    instance: { ...v, serverIP: void 0, port: void 0, gameServerPanelUrl: void 0 },
                });
        }, [v, e]);
    return null == e
        ? null
        : (0, n.jsxs)(o.Ip, {
              className: g.kL,
              children: [
                  (0, n.jsx)("div", {
                      className: g.uW,
                      children: (0, n.jsx)(d.D, { variant: "heading-md/normal", children: `Current guild: ${t}` }),
                  }),
                  (0, n.jsxs)("div", {
                      className: g.uW,
                      children: [
                          (0, n.jsx)(c.E, {
                              variant: "eyebrow",
                              children: `Set server state for first server: ${v?.name}`,
                          }),
                          (0, n.jsx)("div", { className: g.UD, children: _ }),
                          (0, n.jsx)(c.E, { variant: "eyebrow", children: "Remove Server Info" }),
                          (0, n.jsx)("div", {
                              className: g.UD,
                              children: (0, n.jsx)(r.$, {
                                  variant: "primary",
                                  text: "Remove IP Address & Game Server Panel URL",
                                  onClick: f,
                              }),
                          }),
                          (0, n.jsx)(c.E, { variant: "eyebrow", children: "Reset server" }),
                          (0, n.jsx)(r.$, {
                              variant: "primary",
                              text: "Reset",
                              onClick: () => {
                                  (0, m.cq)(e);
                              },
                          }),
                      ],
                  }),
              ],
          });
}
