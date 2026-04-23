r.d(a, { A: () => m });
var t = r(627968);
r(64700);
var i = r(462887),
    l = r(862482),
    n = r(834730),
    o = r(930861),
    _ = r(403581),
    s = r(821609),
    d = r(736653),
    u = r(985018),
    c = r(150252);
let m = function (e) {
    let { churnUserDiscountOffer: a, onDiscountClaim: r, onContinue: m } = e,
        p = (0, d.Ay)(),
        f = (0, i.M)(p) ? "/assets/ff07ae06c15adc58.svg" : "/assets/dd0f35fb103d174b.svg";
    return null == a
        ? null
        : (0, t.jsxs)("div", {
              className: c.bR,
              children: [
                  (0, t.jsx)("div", { className: c.v0 }),
                  (0, t.jsx)("div", { className: c.X2 }),
                  (0, t.jsx)("div", {
                      className: c.Dg,
                      children: (0, t.jsxs)("div", {
                          className: c.xt,
                          children: [
                              (0, t.jsx)("img", { alt: "", src: f, className: c.lR }),
                              (0, t.jsxs)("div", {
                                  className: c.t2,
                                  children: [
                                      (0, t.jsx)(n.E, {
                                          variant: "text-md/medium",
                                          className: c.PU,
                                          children: u.intl.format(u.t["2gem05"], {
                                              percent: a.discount.amount,
                                              numMonths: a.discount.user_usage_limit,
                                          }),
                                      }),
                                      (0, t.jsxs)("div", {
                                          className: c.$t,
                                          children: [
                                              (0, t.jsxs)(o.wL, {
                                                  "data-migration-pending": !0,
                                                  className: c.Oy,
                                                  innerClassName: c.iO,
                                                  look: l.pR.OUTLINED,
                                                  color: l.XD.CUSTOM,
                                                  onClick: () => r?.(),
                                                  children: [
                                                      (0, t.jsx)(_.t, {
                                                          size: "xs",
                                                          color: "currentColor",
                                                          className: c.Fl,
                                                      }),
                                                      (0, t.jsx)(n.E, {
                                                          variant: "text-sm/semibold",
                                                          className: c.H0,
                                                          children: u.intl.string(u.t.zrCzVB),
                                                      }),
                                                  ],
                                              }),
                                              (0, t.jsx)(s.$, {
                                                  variant: "primary",
                                                  text: u.intl.string(u.t["3PatSz"]),
                                                  onClick: () => m?.(),
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  }),
              ],
          });
};
