a.d(t, { Z: () => d });
var n = a(255367);
a(73800);
var r = a(296009),
    l = a(481060),
    i = a(592183),
    s = a(86419),
    o = a(447448),
    c = a(401702);
function d() {
    let e = (0, o.k)({
            location: "DevToolsWidgetsPanel",
            autoTrackExposure: !1,
        }),
        t = (e) => {
            let t = (0, s.np)(e);
            (0, s.ES)(e, t.applicationId);
        };
    return e
        ? (0, n.jsx)("div", {
              className: c.container,
              children: (0, n.jsxs)(l.hjN, {
                  children: [
                      (0, n.jsx)(l.vwX, { children: "User Profile Widgets" }),
                      (0, n.jsx)(l.R94, {
                          children: "Generate and test different widget configurations for user profiles.",
                      }),
                      (0, n.jsxs)("div", {
                          className: c.buttonGroup,
                          children: [
                              (0, n.jsx)(l.zxk, {
                                  variant: "primary",
                                  text: "Add Favorite Game",
                                  onClick: () => t(r.l.FAVORITE_GAMES),
                              }),
                              (0, n.jsx)(l.zxk, {
                                  variant: "primary",
                                  text: "Add Current Game",
                                  onClick: () => t(r.l.CURRENT_GAMES),
                              }),
                              (0, n.jsx)(l.zxk, {
                                  variant: "primary",
                                  text: "Add Want to Play Game",
                                  onClick: () => t(r.l.WANT_TO_PLAY_GAMES),
                              }),
                              (0, n.jsx)(l.zxk, {
                                  variant: "primary",
                                  text: "Add Played Game",
                                  onClick: () => t(r.l.PLAYED_GAMES),
                              }),
                              (0, n.jsx)(l.zxk, {
                                  variant: "active",
                                  text: "Show Empty State",
                                  onClick: () => {
                                      i.Z.setPendingWidgets([]);
                                  },
                              }),
                              (0, n.jsx)(l.zxk, {
                                  variant: "critical-primary",
                                  text: "Clear Pending Changes",
                                  onClick: () => {
                                      i.Z.clearPendingWidgets();
                                  },
                              }),
                          ],
                      }),
                      (0, n.jsxs)("div", {
                          className: c.buttonGroup,
                          children: [
                              (0, n.jsx)(l.R94, { children: "Backend integration:" }),
                              (0, n.jsx)(l.zxk, {
                                  variant: "active",
                                  text: "Save Widgets State",
                                  onClick: () => (0, s.X6)(),
                              }),
                              (0, n.jsx)(l.zxk, {
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
