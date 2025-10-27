t.d(n, {
    C: () => x,
    Z: () => h,
});
var l = t(951288),
    a = t(647438),
    i = t(120356),
    r = t.n(i),
    s = t(481060),
    o = t(494620),
    u = t(639777),
    c = t(503274),
    d = t(858594),
    m = t(296643),
    v = t(343312),
    g = t(30910),
    f = t(619733),
    b = t(269794),
    p = t(388032),
    j = t(755350);
function x() {
    return (0, l.jsx)(o.Z, {
        className: j.maxInstancesWarning,
        children: (0, l.jsx)(s.Text, {
            variant: "text-sm/medium",
            children: p.intl.formatToPlainString(b.default.xta2U9, { maxInstances: f.YX }),
        }),
    });
}
function h() {
    let {
            guildId: e,
            gameServerGames: n,
            instances: t,
            setGameServerInstance: i,
            setCurrentGame: o,
            onNext: h,
        } = (0, v.JL)(),
        y = a.useCallback(
            (e) => {
                o(e), h();
            },
            [o, h],
        ),
        O = a.useCallback(
            (e) => {
                i(e), h();
            },
            [i, h],
        ),
        P = t.length >= f.YX,
        k = t.length > 0,
        I = (0, u.Z)(e);
    return 0 === Object.values(n).length
        ? (0, l.jsx)("div", {
              className: j.loadingContainer,
              children: (0, l.jsx)(s.$jN, { type: s.RAz.SPINNING_CIRCLE }),
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  k &&
                      (0, l.jsxs)("div", {
                          className: j.gameSection,
                          children: [
                              (0, l.jsx)(s.Heading, {
                                  variant: "heading-md/semibold",
                                  children: p.intl.string(b.default.BOWmmT),
                              }),
                              (0, l.jsx)("div", {
                                  className: j.gameInstanceContainer,
                                  children: t.map((n, t) =>
                                      (0, l.jsx)(
                                          c.Z,
                                          {
                                              guildId: e,
                                              gameInstance: n,
                                              onClick: O,
                                          },
                                          "instance-".concat(n.id, "-").concat(t),
                                      ),
                                  ),
                              }),
                              P && (0, l.jsx)(x, {}),
                          ],
                      }),
                  (0, l.jsxs)("div", {
                      className: r()(j.gameSection, { [j.disabled]: P }),
                      children: [
                          k &&
                              (0, l.jsx)(s.Heading, {
                                  variant: "heading-md/semibold",
                                  children: p.intl.string(b.default.NIwDqW),
                              }),
                          (0, l.jsx)("div", {
                              className: j.gameContainer,
                              children: Object.values(n).map((e, n) =>
                                  (0, l.jsx)(
                                      d.Z,
                                      {
                                          game: e,
                                          disabled: P || !I,
                                          onClick: y,
                                      },
                                      "game-".concat(e.id, "-").concat(n),
                                  ),
                              ),
                          }),
                      ],
                  }),
                  (0, l.jsxs)(g.o2, {
                      step: f.EK.SELECT_GAME,
                      className: j.footerContainer,
                      children: [
                          (0, l.jsxs)("div", {
                              className: j.warningContainer,
                              children: [
                                  (0, l.jsx)(s.d3s, { size: "sm" }),
                                  (0, l.jsx)(s.Text, {
                                      variant: "text-sm/medium",
                                      children: p.intl.string(b.default["5DjxXm"]),
                                  }),
                              ],
                          }),
                          (0, l.jsx)(m.Z, {}),
                      ],
                  }),
              ],
          });
}
