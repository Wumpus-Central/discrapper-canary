n.d(t, { A: () => x });
var a = n(627968),
    s = n(64700),
    i = n(390544),
    l = n(311907),
    r = n(397927),
    o = n(73153),
    d = n(665171),
    c = n(522055),
    u = n(71393),
    m = n(967198),
    h = n(566381);
function x() {
    let e = (0, l.bG)([m.A], () => m.A.getGuildId()),
        t = (0, l.bG)([u.A], () => u.A.getGuild(e)?.name),
        n = (0, l.bG)([c.A], () => c.A.getStateForGuild(e)?.instances),
        x = s.useMemo(() => Object.values(n ?? {})[0], [n]),
        p = s.useCallback(
            (t) => {
                null != x &&
                    null != e &&
                    o.h.dispatch({
                        type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                        guildId: e,
                        instance: { ...x, status: t },
                    });
            },
            [x, e],
        ),
        g = s.useMemo(
            () =>
                Object.values(i.M).map((e) =>
                    (0, a.jsx)(
                        r.Button,
                        {
                            variant: "primary",
                            text: e,
                            onClick: () => {
                                p(e);
                            },
                        },
                        e,
                    ),
                ),
            [p],
        ),
        _ = s.useCallback(() => {
            null != x &&
                null != e &&
                o.h.dispatch({
                    type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                    guildId: e,
                    instance: { ...x, serverIP: void 0, port: void 0, gameServerPanelUrl: void 0 },
                });
        }, [x, e]);
    return null == e
        ? null
        : (0, a.jsxs)(r.IpV, {
              className: h.kL,
              children: [
                  (0, a.jsx)("div", {
                      className: h.uW,
                      children: (0, a.jsx)(r.Heading, {
                          variant: "heading-md/normal",
                          children: `Current guild: ${t}`,
                      }),
                  }),
                  (0, a.jsxs)("div", {
                      className: h.uW,
                      children: [
                          (0, a.jsx)(r.Text, {
                              variant: "eyebrow",
                              children: `Set server state for first server: ${x?.name}`,
                          }),
                          (0, a.jsx)("div", { className: h.UD, children: g }),
                          (0, a.jsx)(r.Text, { variant: "eyebrow", children: "Remove Server Info" }),
                          (0, a.jsx)("div", {
                              className: h.UD,
                              children: (0, a.jsx)(r.Button, {
                                  variant: "primary",
                                  text: "Remove IP Address & Game Server Panel URL",
                                  onClick: _,
                              }),
                          }),
                          (0, a.jsx)(r.Text, { variant: "eyebrow", children: "Reset server" }),
                          (0, a.jsx)(r.Button, {
                              variant: "primary",
                              text: "Reset",
                              onClick: () => {
                                  (0, d.cq)(e);
                              },
                          }),
                      ],
                  }),
              ],
          });
}
