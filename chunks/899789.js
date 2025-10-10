n.d(t, {
    C: () => j,
    Z: () => x,
});
var l = n(951288),
    a = n(647438),
    i = n(120356),
    r = n.n(i),
    s = n(481060),
    o = n(494620),
    c = n(503274),
    u = n(858594),
    d = n(296643),
    m = n(343312),
    v = n(30910),
    g = n(619733),
    f = n(948208),
    b = n(388032),
    p = n(755350);
function j() {
    return (0, l.jsx)(o.Z, {
        className: p.maxInstancesWarning,
        children: (0, l.jsx)(s.Text, {
            variant: "text-sm/medium",
            children: b.intl.formatToPlainString(f.default.xta2U1, { maxInstances: g.YX }),
        }),
    });
}
function x() {
    let {
            guildId: e,
            gameServerGames: t,
            instances: n,
            setGameServerInstance: i,
            setCurrentGame: o,
            onNext: x,
        } = (0, m.JL)(),
        y = a.useCallback(
            (e) => {
                o(e), x();
            },
            [o, x],
        ),
        O = a.useCallback(
            (e) => {
                i(e), x();
            },
            [i, x],
        ),
        h = n.length >= g.YX,
        P = n.length > 0;
    return 0 === Object.values(t).length
        ? (0, l.jsx)("div", {
              className: p.loadingContainer,
              children: (0, l.jsx)(s.$jN, { type: s.RAz.SPINNING_CIRCLE }),
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  P &&
                      (0, l.jsxs)("div", {
                          className: p.gameSection,
                          children: [
                              (0, l.jsx)(s.X6q, {
                                  variant: "heading-md/semibold",
                                  children: b.intl.string(f.default.BOWmmZ),
                              }),
                              (0, l.jsx)("div", {
                                  className: p.gameInstanceContainer,
                                  children: n.map((t, n) =>
                                      (0, l.jsx)(
                                          c.Z,
                                          {
                                              guildId: e,
                                              gameInstance: t,
                                              onClick: O,
                                          },
                                          "instance-".concat(t.id, "-").concat(n),
                                      ),
                                  ),
                              }),
                              h && (0, l.jsx)(j, {}),
                          ],
                      }),
                  (0, l.jsxs)("div", {
                      className: r()(p.gameSection, { [p.disabled]: h }),
                      children: [
                          P &&
                              (0, l.jsx)(s.X6q, {
                                  variant: "heading-md/semibold",
                                  children: b.intl.string(f.default.NIwDqa),
                              }),
                          (0, l.jsx)("div", {
                              className: p.gameContainer,
                              children: Object.values(t).map((e, t) =>
                                  (0, l.jsx)(
                                      u.Z,
                                      {
                                          game: e,
                                          disabled: h,
                                          onClick: y,
                                      },
                                      "game-".concat(e.id, "-").concat(t),
                                  ),
                              ),
                          }),
                      ],
                  }),
                  (0, l.jsxs)(v.o2, {
                      step: g.EK.SELECT_GAME,
                      className: p.footerContainer,
                      children: [
                          (0, l.jsxs)("div", {
                              className: p.warningContainer,
                              children: [
                                  (0, l.jsx)(s.d3s, { size: "sm" }),
                                  (0, l.jsx)(s.Text, {
                                      variant: "text-sm/medium",
                                      children: b.intl.string(f.default["5DjxXl"]),
                                  }),
                              ],
                          }),
                          (0, l.jsx)(d.Z, {}),
                      ],
                  }),
              ],
          });
}
