t.d(s, { Z: () => d });
var r = t(951288);
t(647438);
var n = t(780384),
    a = t(755721),
    i = t(481060),
    o = t(410030),
    l = t(388032),
    c = t(978774),
    u = t(982404),
    m = t(299156);
let d = function (e) {
    let { churnUserDiscountOffer: s, onDiscountClaim: t, onContinue: d } = e,
        p = (0, o.ZP)(),
        f = (0, n.wj)(p) ? u : m;
    return null == s
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
                                  src: f,
                                  className: c.churnFooterIcon,
                              }),
                              (0, r.jsxs)("div", {
                                  className: c.churnFooterContentBodyInner,
                                  children: [
                                      (0, r.jsx)(i.Text, {
                                          variant: "text-md/medium",
                                          className: c.churnFooterCopy,
                                          children: l.intl.format(l.t["2gem09"], {
                                              percent: s.discount.amount,
                                              numMonths: s.discount.user_usage_limit,
                                          }),
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: c.churnFooterCTAs,
                                          children: [
                                              (0, r.jsxs)(i.gtL, {
                                                  "data-migration-pending": !0,
                                                  className: c.churnFooterClaimCTA,
                                                  innerClassName: c.churnFooterClaimCTAInner,
                                                  look: a.iL.OUTLINED,
                                                  color: a.Tt.CUSTOM,
                                                  onClick: () => (null == t ? void 0 : t()),
                                                  children: [
                                                      (0, r.jsx)(i.SrA, {
                                                          size: "xs",
                                                          color: "currentColor",
                                                          className: c.churnFooterClaimIcon,
                                                      }),
                                                      (0, r.jsx)(i.Text, {
                                                          variant: "text-sm/semibold",
                                                          className: c.churnFooterClaimCopy,
                                                          children: l.intl.string(l.t.zrCzVF),
                                                      }),
                                                  ],
                                              }),
                                              (0, r.jsx)(i.zxk, {
                                                  variant: "primary",
                                                  text: l.intl.string(l.t["3PatS0"]),
                                                  onClick: () => (null == d ? void 0 : d()),
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
