i.d(a, { A: () => u });
var e = i(627968);
i(64700);
var t = i(462887),
    l = i(862482),
    c = i(834730),
    n = i(930861),
    r = i(403581),
    d = i(821609),
    m = i(736653),
    o = i(985018),
    x = i(150252);
let u = function (s) {
    let { churnUserDiscountOffer: a, onDiscountClaim: i, onContinue: u } = s,
        v = (0, m.Ay)(),
        h = (0, t.M)(v) ? "/assets/ff07ae06c15adc58.svg" : "/assets/dd0f35fb103d174b.svg";
    return null == a
        ? null
        : (0, e.jsxs)("div", {
              className: x.bR,
              children: [
                  (0, e.jsx)("div", { className: x.v0 }),
                  (0, e.jsx)("div", { className: x.X2 }),
                  (0, e.jsx)("div", {
                      className: x.Dg,
                      children: (0, e.jsxs)("div", {
                          className: x.xt,
                          children: [
                              (0, e.jsx)("img", { alt: "", src: h, className: x.lR }),
                              (0, e.jsxs)("div", {
                                  className: x.t2,
                                  children: [
                                      (0, e.jsx)(c.E, {
                                          variant: "text-md/medium",
                                          className: x.PU,
                                          children: o.intl.format(o.t["2gem05"], {
                                              percent: a.discount.amount,
                                              numMonths: a.discount.user_usage_limit,
                                          }),
                                      }),
                                      (0, e.jsxs)("div", {
                                          className: x.$t,
                                          children: [
                                              (0, e.jsxs)(n.wL, {
                                                  "data-migration-pending": !0,
                                                  className: x.Oy,
                                                  innerClassName: x.iO,
                                                  look: l.pR.OUTLINED,
                                                  color: l.XD.CUSTOM,
                                                  onClick: () => i?.(),
                                                  children: [
                                                      (0, e.jsx)(r.t, {
                                                          size: "xs",
                                                          color: "currentColor",
                                                          className: x.Fl,
                                                      }),
                                                      (0, e.jsx)(c.E, {
                                                          variant: "text-sm/semibold",
                                                          className: x.H0,
                                                          children: o.intl.string(o.t.zrCzVB),
                                                      }),
                                                  ],
                                              }),
                                              (0, e.jsx)(d.$, {
                                                  variant: "primary",
                                                  text: o.intl.string(o.t["3PatSz"]),
                                                  onClick: () => u?.(),
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
