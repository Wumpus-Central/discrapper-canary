n.d(t, { Z: () => d });
var a = n(54381),
    l = n(296009),
    i = n(481060),
    r = n(592183),
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
                  (0, a.jsx)(i.C3N, {
                      label: "User Profile Widgets",
                      description: "Generate and test different widget configurations for user profiles.",
                      children: (0, a.jsxs)("div", {
                          className: c.buttonGroup,
                          children: [
                              (0, a.jsx)(i.Button, {
                                  variant: "primary",
                                  text: "Add Favorite Game",
                                  onClick: () => t(l.l.FAVORITE_GAMES),
                              }),
                              (0, a.jsx)(i.Button, {
                                  variant: "primary",
                                  text: "Add Current Game",
                                  onClick: () => t(l.l.CURRENT_GAMES),
                              }),
                              (0, a.jsx)(i.Button, {
                                  variant: "primary",
                                  text: "Add Want to Play Game",
                                  onClick: () => t(l.l.WANT_TO_PLAY_GAMES),
                              }),
                              (0, a.jsx)(i.Button, {
                                  variant: "primary",
                                  text: "Add Played Game",
                                  onClick: () => t(l.l.PLAYED_GAMES),
                              }),
                              (0, a.jsx)(i.Button, {
                                  variant: "active",
                                  text: "Show Empty State",
                                  onClick: () => {
                                      r.Z.setPendingWidgets([]);
                                  },
                              }),
                              (0, a.jsx)(i.Button, {
                                  variant: "critical-primary",
                                  text: "Clear Pending Changes",
                                  onClick: () => {
                                      r.Z.clearPendingWidgets();
                                  },
                              }),
                          ],
                      }),
                  }),
                  (0, a.jsxs)(i.C3N, {
                      label: "Backend integration",
                      children: [
                          (0, a.jsx)(i.Button, {
                              variant: "active",
                              text: "Save Widgets State",
                              onClick: () => (0, s.X6)(),
                          }),
                          (0, a.jsx)(i.Button, {
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
