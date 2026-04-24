"use strict";
r.d(t, { A: () => p });
var i = r(627968);
r(64700);
var a = r(462887),
    n = r(862482),
    s = r(834730),
    l = r(930861),
    o = r(403581),
    c = r(821609),
    d = r(736653),
    u = r(985018),
    _ = r(150252);
let p = function (e) {
    let { churnUserDiscountOffer: t, onDiscountClaim: r, onContinue: p } = e,
        f = (0, d.Ay)(),
        m = (0, a.M)(f) ? "/assets/ff07ae06c15adc58.svg" : "/assets/dd0f35fb103d174b.svg";
    return null == t
        ? null
        : (0, i.jsxs)("div", {
              className: _.bR,
              children: [
                  (0, i.jsx)("div", { className: _.v0 }),
                  (0, i.jsx)("div", { className: _.X2 }),
                  (0, i.jsx)("div", {
                      className: _.Dg,
                      children: (0, i.jsxs)("div", {
                          className: _.xt,
                          children: [
                              (0, i.jsx)("img", { alt: "", src: m, className: _.lR }),
                              (0, i.jsxs)("div", {
                                  className: _.t2,
                                  children: [
                                      (0, i.jsx)(s.E, {
                                          variant: "text-md/medium",
                                          className: _.PU,
                                          children: u.intl.format(u.t["2gem05"], {
                                              percent: t.discount.amount,
                                              numMonths: t.discount.user_usage_limit,
                                          }),
                                      }),
                                      (0, i.jsxs)("div", {
                                          className: _.$t,
                                          children: [
                                              (0, i.jsxs)(l.wL, {
                                                  "data-migration-pending": !0,
                                                  className: _.Oy,
                                                  innerClassName: _.iO,
                                                  look: n.pR.OUTLINED,
                                                  color: n.XD.CUSTOM,
                                                  onClick: () => r?.(),
                                                  children: [
                                                      (0, i.jsx)(o.t, {
                                                          size: "xs",
                                                          color: "currentColor",
                                                          className: _.Fl,
                                                      }),
                                                      (0, i.jsx)(s.E, {
                                                          variant: "text-sm/semibold",
                                                          className: _.H0,
                                                          children: u.intl.string(u.t.zrCzVB),
                                                      }),
                                                  ],
                                              }),
                                              (0, i.jsx)(c.$, {
                                                  variant: "primary",
                                                  text: u.intl.string(u.t["3PatSz"]),
                                                  onClick: () => p?.(),
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
