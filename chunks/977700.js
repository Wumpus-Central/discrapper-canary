n.d(t, { A: () => v });
var a = n(627968);
n(64700);
var s = n(397927),
    i = n(793574),
    l = n(688810),
    r = n(826673),
    o = n(750506),
    d = n(780964),
    c = n(840065),
    u = n(223567),
    m = n(552122),
    h = n(41280),
    x = n(652215),
    p = n(49999),
    g = n(985018),
    _ = n(653246);
function f(e) {
    let { dismissibleContent: t, backgroundColor: n, specialTextColor: u } = e,
        f = m.A.useIsEligible(),
        v = (0, r.JZ)(t),
        b = null != n,
        j = null != u ? { color: u } : void 0,
        { analyticsLocations: A } = (0, l.Ay)(i.A.HOLIDAY_COACHMARK),
        C = (e) => {
            (0, r.Dr)(t, { dismissAction: e });
        },
        S = () => {
            (0, c.openUserSettings)(d.X.NOTIFICATIONS_PANEL, { section: x.nc_.NOTIFICATIONS, analyticsLocations: A }),
                C(p.i.TAKE_ACTION);
        };
    return f && !v
        ? (0, a.jsx)(o.Ay, {
              children: (0, a.jsxs)("div", {
                  className: _.iE,
                  style: { backgroundColor: b ? n : void 0 },
                  children: [
                      !b &&
                          (0, a.jsxs)("div", {
                              className: _.o5,
                              children: [
                                  (0, a.jsx)(h.A, { className: _.iL, pageMultiplier: 5 }),
                                  (0, a.jsx)("div", { className: _.Np }),
                              ],
                          }),
                      (0, a.jsx)("div", { className: _.c8 }),
                      (0, a.jsxs)("div", {
                          className: _.Qs,
                          children: [
                              (0, a.jsxs)("div", {
                                  children: [
                                      (0, a.jsx)(s.Heading, {
                                          variant: "heading-md/bold",
                                          color: null != j ? void 0 : "always-white",
                                          style: j,
                                          children: g.intl.string(g.t["6CxPoB"]),
                                      }),
                                      (0, a.jsx)(s.Text, {
                                          variant: "text-xs/normal",
                                          color: "always-white",
                                          children: g.intl.format(g.t.IVzJ8G, {
                                              settingsHook: (e, t) =>
                                                  (0, a.jsx)(
                                                      s.DUT,
                                                      {
                                                          tag: "span",
                                                          className: _.nf,
                                                          style: j,
                                                          onClick: S,
                                                          children: e,
                                                      },
                                                      t,
                                                  ),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, a.jsx)(s.DUT, {
                                  className: _.l2,
                                  onClick: () => C(p.i.USER_DISMISS),
                                  children: (0, a.jsx)(s.PGe, { color: "currentColor", size: "xs" }),
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : null;
}
function v() {
    return null == u.A.coachmarkDismissibleContent
        ? null
        : (0, a.jsx)(f, {
              dismissibleContent: u.A.coachmarkDismissibleContent,
              backgroundColor: u.A.coachmarkBackgroundColor,
              specialTextColor: u.A.coachmarkSpecialTextColor,
          });
}
