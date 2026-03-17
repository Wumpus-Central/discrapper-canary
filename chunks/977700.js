n.d(t, { A: () => f });
var a = n(627968);
n(64700);
var i = n(397927),
    s = n(793574),
    l = n(688810),
    r = n(826673),
    o = n(750506),
    d = n(780964),
    c = n(840065),
    u = n(223567),
    m = n(552122),
    h = n(41280),
    p = n(49999),
    x = n(985018),
    g = n(653246);
function _(e) {
    let { dismissibleContent: t, backgroundColor: n, specialTextColor: u } = e,
        _ = m.A.useIsEligible(),
        f = (0, r.JZ)(t),
        v = null != n,
        b = null != u ? { color: u } : void 0,
        { analyticsLocations: j } = (0, l.Ay)(s.A.HOLIDAY_COACHMARK),
        A = (e) => {
            (0, r.Dr)(t, { dismissAction: e });
        },
        C = () => {
            (0, c.openUserSettings)(d.X.NOTIFICATIONS_PANEL, { analyticsLocations: j }), A(p.i.TAKE_ACTION);
        };
    return _ && !f
        ? (0, a.jsx)(o.Ay, {
              children: (0, a.jsxs)("div", {
                  className: g.iE,
                  style: { backgroundColor: v ? n : void 0 },
                  children: [
                      !v &&
                          (0, a.jsxs)("div", {
                              className: g.o5,
                              children: [
                                  (0, a.jsx)(h.A, { className: g.iL, pageMultiplier: 5 }),
                                  (0, a.jsx)("div", { className: g.Np }),
                              ],
                          }),
                      (0, a.jsx)("div", { className: g.c8 }),
                      (0, a.jsxs)("div", {
                          className: g.Qs,
                          children: [
                              (0, a.jsxs)("div", {
                                  children: [
                                      (0, a.jsx)(i.Heading, {
                                          variant: "heading-md/bold",
                                          color: null != b ? void 0 : "always-white",
                                          style: b,
                                          children: x.intl.string(x.t["6CxPoB"]),
                                      }),
                                      (0, a.jsx)(i.Text, {
                                          variant: "text-xs/normal",
                                          color: "always-white",
                                          children: x.intl.format(x.t.IVzJ8G, {
                                              settingsHook: (e, t) =>
                                                  (0, a.jsx)(
                                                      i.DUT,
                                                      {
                                                          tag: "span",
                                                          className: g.nf,
                                                          style: b,
                                                          onClick: C,
                                                          children: e,
                                                      },
                                                      t,
                                                  ),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, a.jsx)(i.DUT, {
                                  className: g.l2,
                                  onClick: () => A(p.i.USER_DISMISS),
                                  children: (0, a.jsx)(i.PGe, { color: "currentColor", size: "xs" }),
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : null;
}
function f() {
    return null == u.A.coachmarkDismissibleContent
        ? null
        : (0, a.jsx)(_, {
              dismissibleContent: u.A.coachmarkDismissibleContent,
              backgroundColor: u.A.coachmarkBackgroundColor,
              specialTextColor: u.A.coachmarkSpecialTextColor,
          });
}
