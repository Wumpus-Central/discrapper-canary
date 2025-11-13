n.d(t, { Z: () => d });
var a = n(951288),
    i = n(296009),
    r = n(481060),
    l = n(592183),
    s = n(86419),
    o = n(172416),
    c = n(667108);
function d() {
    let e = (0, o.Un)({
            location: "DevToolsWidgetsPanel",
            autoTrackExposure: !1,
        }),
        t = (e) => {
            let t = (0, s.np)(e);
            (0, s.ES)(e, t);
        };
    return e
        ? (0, a.jsxs)("div", {
              className: c.container,
              children: [
                  (0, a.jsx)(r.C3N, {
                      label: "User Profile Widgets",
                      description: "Generate and test different widget configurations for user profiles.",
                      children: (0, a.jsxs)("div", {
                          className: c.buttonGroup,
                          children: [
                              (0, a.jsx)(r.Button, {
                                  variant: "primary",
                                  text: "Add Favorite Game",
                                  onClick: () => t(i.l.FAVORITE_GAMES),
                              }),
                              (0, a.jsx)(r.Button, {
                                  variant: "primary",
                                  text: "Add Current Game",
                                  onClick: () => t(i.l.CURRENT_GAMES),
                              }),
                              (0, a.jsx)(r.Button, {
                                  variant: "primary",
                                  text: "Add Want to Play Game",
                                  onClick: () => t(i.l.WANT_TO_PLAY_GAMES),
                              }),
                              (0, a.jsx)(r.Button, {
                                  variant: "primary",
                                  text: "Add Played Game",
                                  onClick: () => t(i.l.PLAYED_GAMES),
                              }),
                              (0, a.jsx)(r.Button, {
                                  variant: "active",
                                  text: "Show Empty State",
                                  onClick: () => {
                                      l.Z.setPendingWidgets([]);
                                  },
                              }),
                              (0, a.jsx)(r.Button, {
                                  variant: "critical-primary",
                                  text: "Clear Pending Changes",
                                  onClick: () => {
                                      l.Z.clearPendingWidgets();
                                  },
                              }),
                          ],
                      }),
                  }),
                  (0, a.jsxs)(r.C3N, {
                      label: "Backend integration",
                      children: [
                          (0, a.jsx)(r.Button, {
                              variant: "active",
                              text: "Save Widgets State",
                              onClick: () => (0, s.X6)(),
                          }),
                          (0, a.jsx)(r.Button, {
                              variant: "critical-primary",
                              text: "Clear Saved Widgets",
                              onClick: () => (0, s.tk)(),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
