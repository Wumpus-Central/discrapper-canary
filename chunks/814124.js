l.d(t, { Ay: () => f, ZV: () => N, z8: () => I });
var n,
    i = l(477900),
    a = l(582128),
    r = l(503698),
    c = l.n(r),
    o = l(43990),
    s = l(834730),
    d = l(349288),
    p = l(821609),
    h = l(812095),
    u = l(223311),
    x = l(975571),
    A = l(365491),
    m = l(151115),
    k = l(758836),
    T = l(652215),
    v = l(375708),
    C = l(456670),
    I = (((n = {}).DEFAULT = "default"), (n.NITRO = "nitro"), n);
let b = { default: C.Hk, nitro: C.O5 };
function N(e) {
    let {
            promotionTheme: t = "default",
            icon: l,
            headerText: n,
            helpCenterId: r,
            helpCenterLinkText: u,
            ctaText: A,
            ctaIcon: k,
            onCtaClick: I,
            hideCta: N,
        } = e,
        f = a.useMemo(() => (null == r ? null : x.A.getArticleURL(r)), [r]),
        j = (0, m.s)(l);
    return (0, i.jsx)(o.N, {
        theme: T.NJ8.DARKER,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: c()(C.kL, e),
                children: [
                    (0, i.jsx)("div", { className: c()(C.D7, b[t]) }),
                    (0, i.jsxs)("div", {
                        className: C.Qs,
                        children: [
                            (0, i.jsxs)("div", {
                                className: C.hu,
                                children: [
                                    null != j && (0, i.jsx)(j, { size: "sm", colorClass: C.Kk }),
                                    (0, i.jsxs)(s.E, {
                                        variant: "text-sm/normal",
                                        color: "text-overlay-light",
                                        children: [
                                            null != n ? (0, h.U)(n) : null,
                                            null != f &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        " ",
                                                        (0, i.jsx)(d.Anchor, {
                                                            href: f,
                                                            target: "_blank",
                                                            className: C.nf,
                                                            children: u ?? v.intl.string(v.t.WQdkbb),
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            !N &&
                                null != A &&
                                (0, i.jsx)(p.$, { variant: "overlay-primary", text: A, icon: k, onClick: I }),
                        ],
                    }),
                ],
            }),
    });
}
let f =
    21552 == l.j
        ? function (e) {
              let { tab: t, handleTransition: l } = e,
                  n = (0, u.A)(T.FYj),
                  r = (0, A.v)((e) => e.offerEligible),
                  c = n?.tenantMetadata?.collectibles?.reward?.storefront?.nagbar,
                  o = a.useCallback(() => {
                      l(k.G2.OFFER_ELIGIBLE);
                  }, [l]);
              if (t === k.G2.ORBS || null == c) return null;
              let s = t === k.G2.CATALOG && r;
              return (0, i.jsx)(N, {
                  promotionTheme: void 0,
                  icon: c.icon,
                  headerText: c.headerText,
                  ctaText: c.cta?.text,
                  hideCta: s,
                  helpCenterId: c.helpCenterId,
                  onCtaClick: o,
              });
          }
        : null;
