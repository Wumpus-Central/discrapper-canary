t.d(n, {
    C: () => h,
    Z: () => S,
});
var l = t(54381),
    i = t(473749),
    a = t(120356),
    r = t.n(a),
    s = t(28664),
    u = t(481060),
    o = t(100527),
    c = t(494620),
    d = t(639777),
    m = t(578756),
    v = t(503274),
    f = t(858594),
    g = t(296643),
    p = t(343312),
    b = t(30910),
    _ = t(619733),
    x = t(914820),
    j = t(388032),
    E = t(470682);
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
        gameServerGames: n,
        instances: t,
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
        k = i.useCallback(
            (e) => {
                c(e), y();
            },
            [c, y],
        ),
        I = t.length >= _.YX,
        C = t.length > 0,
        P = (0, d.Z)(e);
    return 0 === Object.values(n).length
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
                                  children: t.map((n, t) =>
                                      (0, l.jsx)(
                                          v.Z,
                                          {
                                              guildId: e,
                                              gameInstance: n,
                                              onClick: k,
                                          },
                                          "instance-".concat(n.id, "-").concat(t),
                                      ),
                                  ),
                              }),
                              I && (0, l.jsx)(h, {}),
                          ],
                      }),
                  (0, l.jsxs)("div", {
                      className: r()(E.gameSection, { [E.disabled]: I }),
                      children: [
                          C &&
                              (0, l.jsx)(u.Heading, {
                                  variant: "heading-md/semibold",
                                  children: j.intl.string(x.default.NIwDqW),
                              }),
                          (0, l.jsx)("div", {
                              className: E.gameContainer,
                              children: Object.values(n).map((n, t) =>
                                  (0, l.jsx)(
                                      s.u,
                                      {
                                          asContainer: !0,
                                          text: n.disabled
                                              ? j.intl.formatToPlainString(x.default.uVpJYf, { gameName: n.name })
                                              : null,
                                          position: "top",
                                          children: (0, l.jsx)(f.Z, {
                                              guildId: e,
                                              game: n,
                                              disabled: I || !P || n.disabled,
                                              onClick: O,
                                              location: o.Z.GAME_SERVER_SETUP_MODAL,
                                          }),
                                      },
                                      "game-".concat(n.id, "-").concat(t),
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
                          (0, l.jsx)(g.Z, {}),
                      ],
                  }),
              ],
          });
}
