n.d(t, { Z: () => d });
var a = n(951288);
n(647438);
var r = n(296009),
    i = n(481060),
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
        ? (0, a.jsx)("div", {
              className: c.container,
              children: (0, a.jsxs)(i.hjN, {
                  children: [
                      (0, a.jsx)(i.vwX, { children: "User Profile Widgets" }),
                      (0, a.jsx)(i.R94, {
                          children: "Generate and test different widget configurations for user profiles.",
                      }),
                      (0, a.jsxs)("div", {
                          className: c.buttonGroup,
                          children: [
                              (0, a.jsx)(i.zxk, {
                                  variant: "primary",
                                  text: "Add Favorite Game",
                                  onClick: () => t(r.l.FAVORITE_GAMES),
                              }),
                              (0, a.jsx)(i.zxk, {
                                  variant: "primary",
                                  text: "Add Current Game",
                                  onClick: () => t(r.l.CURRENT_GAMES),
                              }),
                              (0, a.jsx)(i.zxk, {
                                  variant: "primary",
                                  text: "Add Want to Play Game",
                                  onClick: () => t(r.l.WANT_TO_PLAY_GAMES),
                              }),
                              (0, a.jsx)(i.zxk, {
                                  variant: "primary",
                                  text: "Add Played Game",
                                  onClick: () => t(r.l.PLAYED_GAMES),
                              }),
                              (0, a.jsx)(i.zxk, {
                                  variant: "active",
                                  text: "Show Empty State",
                                  onClick: () => {
                                      l.Z.setPendingWidgets([]);
                                  },
                              }),
                              (0, a.jsx)(i.zxk, {
                                  variant: "critical-primary",
                                  text: "Clear Pending Changes",
                                  onClick: () => {
                                      l.Z.clearPendingWidgets();
                                  },
                              }),
                          ],
                      }),
                      (0, a.jsxs)("div", {
                          className: c.buttonGroup,
                          children: [
                              (0, a.jsx)(i.R94, { children: "Backend integration:" }),
                              (0, a.jsx)(i.zxk, {
                                  variant: "active",
                                  text: "Save Widgets State",
                                  onClick: () => (0, s.X6)(),
                              }),
                              (0, a.jsx)(i.zxk, {
                                  variant: "critical-primary",
                                  text: "Clear Saved Widgets",
                                  onClick: () => (0, s.tk)(),
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : null;
}
