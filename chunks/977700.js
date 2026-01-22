n.d(t, { A: () => j });
var a = n(627968);
n(64700);
var l = n(397927),
    i = n(793574),
    r = n(688810),
    s = n(826673),
    o = n(750506),
    c = n(780964),
    d = n(358776),
    u = n(840065),
    m = n(223567),
    p = n(552122),
    h = n(41280),
    f = n(652215),
    x = n(49999),
    b = n(985018),
    g = n(653246);
function v(e) {
    let { dismissibleContent: t, backgroundColor: n, specialTextColor: m } = e,
        v = p.A.useIsEligible(),
        j = (0, s.JZ)(t),
        y = null != n,
        _ = null != m ? { color: m } : void 0,
        { analyticsLocations: A } = (0, r.Ay)(i.A.HOLIDAY_COACHMARK),
        C = (e) => {
            (0, s.Dr)(t, { dismissAction: e });
        },
        S = () => {
            let e = (0, d.E7)("HolidayCoachmark");
            (0, u.openUserSettings)(e ? c.X.NOTIFICATIONS_PANEL : c.X.LEGACY_NOTIFICATIONS_SETTINGS_PANEL, {
                section: f.nc_.NOTIFICATIONS,
                analyticsLocations: A,
            }),
                C(x.i.TAKE_ACTION);
        };
    return v && !j
        ? (0, a.jsx)(o.Ay, {
              children: (0, a.jsxs)("div", {
                  className: g.iE,
                  style: { backgroundColor: y ? n : void 0 },
                  children: [
                      !y &&
                          (0, a.jsxs)("div", {
                              className: g.o5,
                              children: [
                                  (0, a.jsx)(h.A, {
                                      className: g.iL,
                                      pageMultiplier: 5,
                                  }),
                                  (0, a.jsx)("div", { className: g.Np }),
                              ],
                          }),
                      (0, a.jsx)("div", { className: g.c8 }),
                      (0, a.jsxs)("div", {
                          className: g.Qs,
                          children: [
                              (0, a.jsxs)("div", {
                                  children: [
                                      (0, a.jsx)(l.Heading, {
                                          variant: "heading-md/bold",
                                          color: null != _ ? void 0 : "always-white",
                                          style: _,
                                          children: b.intl.string(b.t["6CxPoB"]),
                                      }),
                                      (0, a.jsx)(l.Text, {
                                          variant: "text-xs/normal",
                                          color: "always-white",
                                          children: b.intl.format(b.t.IVzJ8G, {
                                              settingsHook: (e, t) =>
                                                  (0, a.jsx)(
                                                      l.DUT,
                                                      {
                                                          tag: "span",
                                                          className: g.nf,
                                                          style: _,
                                                          onClick: S,
                                                          children: e,
                                                      },
                                                      t,
                                                  ),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, a.jsx)(l.DUT, {
                                  className: g.l2,
                                  onClick: () => C(x.i.USER_DISMISS),
                                  children: (0, a.jsx)(l.PGe, {
                                      color: "currentColor",
                                      size: "xs",
                                  }),
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : null;
}
function j() {
    return null == m.A.coachmarkDismissibleContent
        ? null
        : (0, a.jsx)(v, {
              dismissibleContent: m.A.coachmarkDismissibleContent,
              backgroundColor: m.A.coachmarkBackgroundColor,
              specialTextColor: m.A.coachmarkSpecialTextColor,
          });
}
