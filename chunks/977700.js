n.d(t, {
    A: () => v,
});
var a = n(627968);
n(64700);
var l = n(397927),
    r = n(793574),
    i = n(688810),
    s = n(826673),
    o = n(750506),
    c = n(780964),
    d = n(840065),
    u = n(223567),
    m = n(552122),
    p = n(41280),
    h = n(652215),
    x = n(49999),
    g = n(985018),
    f = n(653246);

function b(e) {
    let { dismissibleContent: t, backgroundColor: n, specialTextColor: u } = e,
        b = m.A.useIsEligible(),
        v = (0, s.JZ)(t),
        j = null != n,
        _ =
            null != u
                ? {
                      color: u,
                  }
                : void 0,
        { analyticsLocations: y } = (0, i.Ay)(r.A.HOLIDAY_COACHMARK),
        A = (e) => {
            (0, s.Dr)(t, {
                dismissAction: e,
            });
        },
        C = () => {
            (0, d.openUserSettings)(c.X.NOTIFICATIONS_PANEL, {
                section: h.nc_.NOTIFICATIONS,
                analyticsLocations: y,
            }),
                A(x.i.TAKE_ACTION);
        };
    return b && !v
        ? (0, a.jsx)(o.Ay, {
              children: (0, a.jsxs)("div", {
                  className: f.iE,
                  style: {
                      backgroundColor: j ? n : void 0,
                  },
                  children: [
                      !j &&
                          (0, a.jsxs)("div", {
                              className: f.o5,
                              children: [
                                  (0, a.jsx)(p.A, {
                                      className: f.iL,
                                      pageMultiplier: 5,
                                  }),
                                  (0, a.jsx)("div", {
                                      className: f.Np,
                                  }),
                              ],
                          }),
                      (0, a.jsx)("div", {
                          className: f.c8,
                      }),
                      (0, a.jsxs)("div", {
                          className: f.Qs,
                          children: [
                              (0, a.jsxs)("div", {
                                  children: [
                                      (0, a.jsx)(l.Heading, {
                                          variant: "heading-md/bold",
                                          color: null != _ ? void 0 : "always-white",
                                          style: _,
                                          children: g.intl.string(g.t["6CxPoB"]),
                                      }),
                                      (0, a.jsx)(l.Text, {
                                          variant: "text-xs/normal",
                                          color: "always-white",
                                          children: g.intl.format(g.t.IVzJ8G, {
                                              settingsHook: (e, t) =>
                                                  (0, a.jsx)(
                                                      l.DUT,
                                                      {
                                                          tag: "span",
                                                          className: f.nf,
                                                          style: _,
                                                          onClick: C,
                                                          children: e,
                                                      },
                                                      t,
                                                  ),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, a.jsx)(l.DUT, {
                                  className: f.l2,
                                  onClick: () => A(x.i.USER_DISMISS),
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

function v() {
    return null == u.A.coachmarkDismissibleContent
        ? null
        : (0, a.jsx)(b, {
              dismissibleContent: u.A.coachmarkDismissibleContent,
              backgroundColor: u.A.coachmarkBackgroundColor,
              specialTextColor: u.A.coachmarkSpecialTextColor,
          });
}
