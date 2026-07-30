n.d(t, { Ay: () => b, ZV: () => N, z8: () => I });
var l,
    i = n(477900),
    a = n(582128),
    r = n(503698),
    c = n.n(r),
    o = n(43990),
    s = n(834730),
    d = n(349288),
    p = n(821609),
    h = n(812095),
    u = n(975571),
    x = n(80151),
    m = n(151115),
    A = n(758836),
    k = n(652215),
    T = n(375708),
    v = n(456670),
    I = (((l = {}).DEFAULT = "default"), (l.NITRO = "nitro"), l);
let C = { default: v.Hk, nitro: v.O5 };
function N(e) {
    let {
            promotionTheme: t = "default",
            icon: n,
            headerText: l,
            helpCenterId: r,
            helpCenterLinkText: x,
            ctaText: A,
            ctaIcon: I,
            onCtaClick: N,
            hideCta: b,
        } = e,
        j = a.useMemo(() => (null == r ? null : u.A.getArticleURL(r)), [r]),
        R = (0, m.s)(n);
    return (0, i.jsx)(o.N, {
        theme: k.NJ8.DARKER,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: c()(v.kL, e),
                children: [
                    (0, i.jsx)("div", { className: c()(v.D7, C[t]) }),
                    (0, i.jsxs)("div", {
                        className: v.Qs,
                        children: [
                            (0, i.jsxs)("div", {
                                className: v.hu,
                                children: [
                                    null != R && (0, i.jsx)(R, { size: "sm", colorClass: v.Kk }),
                                    (0, i.jsxs)(s.E, {
                                        variant: "text-sm/normal",
                                        color: "text-overlay-light",
                                        children: [
                                            null != l ? (0, h.U)(l) : null,
                                            null != j &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        " ",
                                                        (0, i.jsx)(d.Anchor, {
                                                            href: j,
                                                            target: "_blank",
                                                            className: v.nf,
                                                            children: x ?? T.intl.string(T.t.WQdkbb),
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            !b &&
                                null != A &&
                                (0, i.jsx)(p.$, {
                                    variant: "overlay-primary",
                                    size: "sm",
                                    text: A,
                                    icon: I,
                                    onClick: N,
                                }),
                        ],
                    }),
                ],
            }),
    });
}
let b =
    21552 == n.j
        ? function (e) {
              let { tab: t, handleTransition: n } = e,
                  l = (0, x.A)(),
                  r = l?.tenantMetadata?.collectibles?.reward?.storefront?.nagbar,
                  c = a.useCallback(() => {
                      n(A.G2.OFFER_ELIGIBLE);
                  }, [n]);
              return t === A.G2.ORBS || null == r
                  ? null
                  : (0, i.jsx)(N, {
                        promotionTheme: void 0,
                        icon: r.icon,
                        headerText: r.headerText,
                        ctaText: r.cta?.text,
                        helpCenterId: r.helpCenterId,
                        onCtaClick: c,
                    });
          }
        : null;
