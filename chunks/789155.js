n.d(t, { Z: () => f });
var r = n(54381);
n(473749);
var i = n(780384),
    a = n(755721),
    o = n(481060),
    s = n(410030),
    l = n(388032),
    c = n(75424),
    u = n(982404),
    d = n(299156);
let f = function (e) {
    let { churnUserDiscountOffer: t, onDiscountClaim: n, onContinue: f } = e,
        p = (0, s.ZP)(),
        _ = (0, i.wj)(p) ? u : d;
    return null == t
        ? null
        : (0, r.jsxs)("div", {
              className: c.churnFooterContainer,
              children: [
                  (0, r.jsx)("div", { className: c.churnFooterGlow }),
                  (0, r.jsx)("div", { className: c.churnFooterTopBorder }),
                  (0, r.jsx)("div", {
                      className: c.churnFooterContent,
                      children: (0, r.jsxs)("div", {
                          className: c.churnFooterContentBody,
                          children: [
                              (0, r.jsx)("img", {
                                  alt: "",
                                  src: _,
                                  className: c.churnFooterIcon,
                              }),
                              (0, r.jsxs)("div", {
                                  className: c.churnFooterContentBodyInner,
                                  children: [
                                      (0, r.jsx)(o.Text, {
                                          variant: "text-md/medium",
                                          className: c.churnFooterCopy,
                                          children: l.intl.format(l.t["2gem05"], {
                                              percent: t.discount.amount,
                                              numMonths: t.discount.user_usage_limit,
                                          }),
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: c.churnFooterCTAs,
                                          children: [
                                              (0, r.jsxs)(o.gtL, {
                                                  "data-migration-pending": !0,
                                                  className: c.churnFooterClaimCTA,
                                                  innerClassName: c.churnFooterClaimCTAInner,
                                                  look: a.iL.OUTLINED,
                                                  color: a.Tt.CUSTOM,
                                                  onClick: () => (null == n ? void 0 : n()),
                                                  children: [
                                                      (0, r.jsx)(o.SrA, {
                                                          size: "xs",
                                                          color: "currentColor",
                                                          className: c.churnFooterClaimIcon,
                                                      }),
                                                      (0, r.jsx)(o.Text, {
                                                          variant: "text-sm/semibold",
                                                          className: c.churnFooterClaimCopy,
                                                          children: l.intl.string(l.t.zrCzVB),
                                                      }),
                                                  ],
                                              }),
                                              (0, r.jsx)(o.Button, {
                                                  variant: "primary",
                                                  text: l.intl.string(l.t["3PatSz"]),
                                                  onClick: () => (null == f ? void 0 : f()),
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
