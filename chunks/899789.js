n.d(t, {
    C: () => E,
    Z: () => h,
});
var l = n(951288),
    i = n(647438),
    a = n(120356),
    r = n.n(a),
    s = n(481060),
    u = n(100527),
    o = n(494620),
    c = n(639777),
    d = n(578756),
    m = n(503274),
    v = n(858594),
    g = n(296643),
    f = n(343312),
    p = n(30910),
    b = n(619733),
    _ = n(97200),
    x = n(388032),
    j = n(179761);
function E() {
    return (0, l.jsx)(o.Z, {
        className: j.maxInstancesWarning,
        children: (0, l.jsx)(s.Text, {
            variant: "text-sm/medium",
            children: x.intl.formatToPlainString(_.default.xta2U9, { maxInstances: b.YX }),
        }),
    });
}
function h() {
    let {
        guildId: e,
        gameServerGames: t,
        instances: n,
        gameServerInstance: a,
        setGameServerInstance: o,
        setCurrentGame: h,
        onNext: S,
    } = (0, f.JL)();
    (0, d.cq)(e, null == a ? "create" : "edit");
    let y = i.useCallback(
            (e) => {
                h(e), S();
            },
            [h, S],
        ),
        O = i.useCallback(
            (e) => {
                o(e), S();
            },
            [o, S],
        ),
        I = n.length >= b.YX,
        k = n.length > 0,
        C = (0, c.Z)(e);
    return 0 === Object.values(t).length
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
                                  children: x.intl.string(_.default.BOWmmT),
                              }),
                              (0, l.jsx)("div", {
                                  className: j.gameInstanceContainer,
                                  children: n.map((t, n) =>
                                      (0, l.jsx)(
                                          m.Z,
                                          {
                                              guildId: e,
                                              gameInstance: t,
                                              onClick: O,
                                          },
                                          "instance-".concat(t.id, "-").concat(n),
                                      ),
                                  ),
                              }),
                              I && (0, l.jsx)(E, {}),
                          ],
                      }),
                  (0, l.jsxs)("div", {
                      className: r()(j.gameSection, { [j.disabled]: I }),
                      children: [
                          k &&
                              (0, l.jsx)(s.Heading, {
                                  variant: "heading-md/semibold",
                                  children: x.intl.string(_.default.NIwDqW),
                              }),
                          (0, l.jsx)("div", {
                              className: j.gameContainer,
                              children: Object.values(t).map((t, n) =>
                                  (0, l.jsx)(
                                      v.Z,
                                      {
                                          guildId: e,
                                          game: t,
                                          disabled: I || !C,
                                          onClick: y,
                                          location: u.Z.GAME_SERVER_SETUP_MODAL,
                                      },
                                      "game-".concat(t.id, "-").concat(n),
                                  ),
                              ),
                          }),
                      ],
                  }),
                  (0, l.jsxs)(p.o2, {
                      step: b.EK.SELECT_GAME,
                      className: j.footerContainer,
                      children: [
                          (0, l.jsxs)("div", {
                              className: j.warningContainer,
                              children: [
                                  (0, l.jsx)(s.d3s, { size: "sm" }),
                                  (0, l.jsx)(s.Text, {
                                      variant: "text-sm/medium",
                                      children: x.intl.string(_.default["5DjxXm"]),
                                  }),
                              ],
                          }),
                          (0, l.jsx)(g.Z, {}),
                      ],
                  }),
              ],
          });
}
