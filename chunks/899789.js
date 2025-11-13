n.d(t, {
    C: () => h,
    Z: () => S,
});
var l = n(951288),
    i = n(647438),
    a = n(120356),
    r = n.n(a),
    s = n(28664),
    u = n(481060),
    o = n(100527),
    c = n(494620),
    d = n(639777),
    m = n(578756),
    v = n(503274),
    g = n(858594),
    f = n(296643),
    p = n(343312),
    b = n(30910),
    _ = n(619733),
    x = n(732031),
    j = n(388032),
    E = n(755350);
function h() {
    return (0, l.jsx)(c.Z, {
        className: E.maxInstancesWarning,
        children: (0, l.jsx)(u.Text, {
            variant: "text-sm/medium",
            children: j.intl.formatToPlainString(x.default.xta2U9, { maxInstances: _.YX }),
        }),
    });
}
function S() {
    let {
        guildId: e,
        gameServerGames: t,
        instances: n,
        gameServerInstance: a,
        setGameServerInstance: c,
        setCurrentGame: S,
        onNext: y,
    } = (0, p.JL)();
    (0, m.cq)(e, null == a ? "create" : "edit");
    let O = i.useCallback(
            (e) => {
                S(e), y();
            },
            [S, y],
        ),
        I = i.useCallback(
            (e) => {
                c(e), y();
            },
            [c, y],
        ),
        k = n.length >= _.YX,
        C = n.length > 0,
        P = (0, d.Z)(e);
    return 0 === Object.values(t).length
        ? (0, l.jsx)("div", {
              className: E.loadingContainer,
              children: (0, l.jsx)(u.$jN, { type: u.RAz.SPINNING_CIRCLE }),
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  C &&
                      (0, l.jsxs)("div", {
                          className: E.gameSection,
                          children: [
                              (0, l.jsx)(u.Heading, {
                                  variant: "heading-md/semibold",
                                  children: j.intl.string(x.default.BOWmmT),
                              }),
                              (0, l.jsx)("div", {
                                  className: E.gameInstanceContainer,
                                  children: n.map((t, n) =>
                                      (0, l.jsx)(
                                          v.Z,
                                          {
                                              guildId: e,
                                              gameInstance: t,
                                              onClick: I,
                                          },
                                          "instance-".concat(t.id, "-").concat(n),
                                      ),
                                  ),
                              }),
                              k && (0, l.jsx)(h, {}),
                          ],
                      }),
                  (0, l.jsxs)("div", {
                      className: r()(E.gameSection, { [E.disabled]: k }),
                      children: [
                          C &&
                              (0, l.jsx)(u.Heading, {
                                  variant: "heading-md/semibold",
                                  children: j.intl.string(x.default.NIwDqW),
                              }),
                          (0, l.jsx)("div", {
                              className: E.gameContainer,
                              children: Object.values(t).map((t, n) =>
                                  (0, l.jsx)(
                                      s.u,
                                      {
                                          asContainer: !0,
                                          text: t.disabled
                                              ? j.intl.formatToPlainString(x.default.uVpJYf, { gameName: t.name })
                                              : null,
                                          position: "top",
                                          children: (0, l.jsx)(g.Z, {
                                              guildId: e,
                                              game: t,
                                              disabled: k || !P || t.disabled,
                                              onClick: O,
                                              location: o.Z.GAME_SERVER_SETUP_MODAL,
                                          }),
                                      },
                                      "game-".concat(t.id, "-").concat(n),
                                  ),
                              ),
                          }),
                      ],
                  }),
                  (0, l.jsxs)(b.o2, {
                      step: _.EK.SELECT_GAME,
                      className: E.footerContainer,
                      children: [
                          (0, l.jsxs)("div", {
                              className: E.warningContainer,
                              children: [
                                  (0, l.jsx)(u.d3s, { size: "sm" }),
                                  (0, l.jsx)(u.Text, {
                                      variant: "text-sm/medium",
                                      children: j.intl.string(x.default["5DjxXm"]),
                                  }),
                              ],
                          }),
                          (0, l.jsx)(f.Z, {}),
                      ],
                  }),
              ],
          });
}
