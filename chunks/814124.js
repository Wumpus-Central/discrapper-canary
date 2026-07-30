l.d(t, { A: () => b, Z: () => N });
var n = l(477900),
    i = l(582128),
    a = l(503698),
    s = l.n(a),
    c = l(43990),
    r = l(834730),
    o = l(349288),
    d = l(821609),
    p = l(417098),
    h = l(812095),
    u = l(288106),
    x = l(975571),
    A = l(80151),
    m = l(151115),
    k = l(758836),
    C = l(652215),
    I = l(375708),
    T = l(456670);
let v = { [u.Pz.DEFAULT]: T.Hk, [u.Pz.NITRO]: T.O5 };
function N(e) {
    let {
            promotionFlavor: t = u.Pz.DEFAULT,
            icon: l,
            headerText: a,
            helpCenterId: A,
            helpCenterLinkText: k,
            ctaText: N,
            ctaIcon: b,
            onCtaClick: j,
            hideCta: E,
            onDismiss: R,
        } = e,
        O = i.useMemo(() => (null == A ? null : x.A.getArticleURL(A)), [A]),
        _ = (0, m.s)(l),
        L = v[t] ?? T.Hk;
    return (0, n.jsx)(c.N, {
        theme: C.NJ8.DARKER,
        children: (e) =>
            (0, n.jsxs)("div", {
                className: s()(T.kL, e),
                children: [
                    (0, n.jsx)("div", { className: s()(T.D7, L) }),
                    (0, n.jsxs)("div", {
                        className: T.Qs,
                        children: [
                            (0, n.jsxs)("div", {
                                className: T.hu,
                                children: [
                                    null != _ && (0, n.jsx)(_, { size: "sm", colorClass: T.Kk }),
                                    (0, n.jsxs)(r.E, {
                                        variant: "text-sm/normal",
                                        color: "text-overlay-light",
                                        children: [
                                            null != a ? (0, h.U)(a) : null,
                                            null != O &&
                                                (0, n.jsxs)(n.Fragment, {
                                                    children: [
                                                        " ",
                                                        (0, n.jsx)(o.Anchor, {
                                                            href: O,
                                                            target: "_blank",
                                                            className: T.nf,
                                                            children: k ?? I.intl.string(I.t.WQdkbb),
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, n.jsxs)("div", {
                                className: T.uJ,
                                children: [
                                    !E &&
                                        null != N &&
                                        (0, n.jsx)(d.$, {
                                            variant: "overlay-primary",
                                            size: "sm",
                                            text: N,
                                            icon: b,
                                            onClick: j,
                                        }),
                                    null != R &&
                                        (0, n.jsx)(p.PM, {
                                            onClick: R,
                                            noticeType: C.kqX.COLLECTIBLES_SHOP_NAGBAR,
                                            className: T.r,
                                        }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
    });
}
let b =
    21552 == l.j
        ? function (e) {
              let { tab: t, handleTransition: l } = e,
                  a = (0, A.A)(),
                  s = a?.tenantMetadata?.collectibles?.reward?.storefront?.nagbar,
                  c = a?.tenantMetadata?.collectibles?.reward?.flavor,
                  r = i.useCallback(() => {
                      l(k.G2.OFFER_ELIGIBLE);
                  }, [l]);
              return t === k.G2.ORBS || null == s
                  ? null
                  : (0, n.jsx)(N, {
                        promotionFlavor: c,
                        icon: s.icon,
                        headerText: s.headerText,
                        ctaText: s.cta?.text,
                        helpCenterId: s.helpCenterId,
                        onCtaClick: r,
                    });
          }
        : null;
