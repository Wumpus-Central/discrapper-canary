n.d(t, { A: () => C });
var i = n(627968);
n(64700);
var s = n(534514),
    l = n(834730),
    a = n(939249),
    r = n(789645),
    o = n(793574),
    d = n(688810),
    c = n(826673),
    u = n(750506),
    p = n(780964),
    h = n(858897),
    m = n(223567),
    _ = n(552122),
    A = n(41280),
    f = n(49999),
    g = n(985018),
    x = n(275883);
function E(e) {
    let { dismissibleContent: t, backgroundColor: n, specialTextColor: m } = e,
        E = _.A.useIsEligible(),
        C = (0, c.JZ)(t),
        T = null != n,
        v = null != m ? { color: m } : void 0,
        { analyticsLocations: S } = (0, d.Ay)(o.A.HOLIDAY_COACHMARK),
        b = (e) => {
            (0, c.Dr)(t, { dismissAction: e });
        },
        j = () => {
            (0, h.openUserSettings)(p.X.NOTIFICATIONS_PANEL, { analyticsLocations: S }), b(f.i.TAKE_ACTION);
        };
    return E && !C
        ? (0, i.jsx)(u.Ay, {
              children: (0, i.jsxs)("div", {
                  className: x.iE,
                  style: { backgroundColor: T ? n : void 0 },
                  children: [
                      !T &&
                          (0, i.jsxs)("div", {
                              className: x.o5,
                              children: [
                                  (0, i.jsx)(A.A, { className: x.iL, pageMultiplier: 5 }),
                                  (0, i.jsx)("div", { className: x.Np }),
                              ],
                          }),
                      (0, i.jsx)("div", { className: x.c8 }),
                      (0, i.jsxs)("div", {
                          className: x.Qs,
                          children: [
                              (0, i.jsxs)("div", {
                                  children: [
                                      (0, i.jsx)(s.D, {
                                          variant: "heading-md/bold",
                                          color: null != v ? void 0 : "always-white",
                                          style: v,
                                          children: g.intl.string(g.t["6CxPoB"]),
                                      }),
                                      (0, i.jsx)(l.E, {
                                          variant: "text-xs/normal",
                                          color: "always-white",
                                          children: g.intl.format(g.t.IVzJ8G, {
                                              settingsHook: (e, t) =>
                                                  (0, i.jsx)(
                                                      a.D,
                                                      {
                                                          tag: "span",
                                                          className: x.nf,
                                                          style: v,
                                                          onClick: j,
                                                          children: e,
                                                      },
                                                      t,
                                                  ),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)(a.D, {
                                  className: x.l2,
                                  onClick: () => b(f.i.USER_DISMISS),
                                  children: (0, i.jsx)(r.P, { color: "currentColor", size: "xs" }),
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : null;
}
function C() {
    return null == m.A.coachmarkDismissibleContent
        ? null
        : (0, i.jsx)(E, {
              dismissibleContent: m.A.coachmarkDismissibleContent,
              backgroundColor: m.A.coachmarkBackgroundColor,
              specialTextColor: m.A.coachmarkSpecialTextColor,
          });
}
