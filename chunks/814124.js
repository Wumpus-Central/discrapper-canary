l.d(t, { A: () => v, Z: () => g });
var n = l(477900),
    a = l(582128),
    i = l(503698),
    s = l.n(i),
    c = l(43990),
    o = l(834730),
    r = l(349288),
    p = l(821609),
    d = l(417098),
    u = l(793574),
    _ = l(688810),
    A = l(812095),
    h = l(288106),
    C = l(174459),
    E = l(975571),
    x = l(440938),
    m = l(80151),
    I = l(151115),
    k = l(758836),
    L = l(652215),
    T = l(375708),
    N = l(456670);
let b = { [h.Pz.DEFAULT]: N.Hk, [h.Pz.NITRO]: N.O5 };
function g(e) {
    let {
            tab: t,
            promotionFlavor: l = h.Pz.DEFAULT,
            icon: i,
            headerText: m,
            helpCenterId: k,
            helpCenterLinkText: g,
            ctaText: v,
            ctaIcon: S,
            onCtaClick: O,
            hideCta: R,
            onDismiss: y,
        } = e,
        { analyticsLocations: j } = (0, _.Ay)(u.A.COLLECTIBLES_SHOP_NAGBAR),
        M = a.useMemo(() => (null == k ? null : E.A.getArticleURL(k)), [k]),
        f = (0, I.s)(i),
        B = b[l] ?? N.Hk,
        P = (0, x.uM)(),
        G = a.useCallback(() => {
            C.default.track(L.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: P?.sessionId,
                page_type: t,
                page_section: P?.pageSection,
                page_category: P?.pageCategory,
                tile_type: "NAGBAR",
                cta_name: "help center article link",
            });
        }, [t, P]);
    return (0, n.jsx)(_.f5, {
        value: j,
        children: (0, n.jsx)(c.N, {
            theme: L.NJ8.DARKER,
            children: (e) =>
                (0, n.jsxs)("div", {
                    className: s()(N.kL, e),
                    children: [
                        (0, n.jsx)("div", { className: s()(N.D7, B) }),
                        (0, n.jsxs)("div", {
                            className: N.Qs,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: N.hu,
                                    children: [
                                        null != f && (0, n.jsx)(f, { size: "sm", colorClass: N.Kk }),
                                        (0, n.jsxs)(o.E, {
                                            variant: "text-sm/normal",
                                            color: "text-overlay-light",
                                            children: [
                                                null != m ? (0, A.U)(m) : null,
                                                null != M &&
                                                    (0, n.jsxs)(n.Fragment, {
                                                        children: [
                                                            " ",
                                                            (0, n.jsx)(r.Anchor, {
                                                                href: M,
                                                                target: "_blank",
                                                                className: N.nf,
                                                                onClick: G,
                                                                children: g ?? T.intl.string(T.t.WQdkbb),
                                                            }),
                                                        ],
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: N.uJ,
                                    children: [
                                        !R &&
                                            null != v &&
                                            (0, n.jsx)(p.$, {
                                                variant: "overlay-primary",
                                                size: "sm",
                                                text: v,
                                                icon: S,
                                                onClick: O,
                                            }),
                                        null != y &&
                                            (0, n.jsx)(d.PM, {
                                                onClick: y,
                                                noticeType: L.kqX.COLLECTIBLES_SHOP_NAGBAR,
                                                className: N.r,
                                            }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
        }),
    });
}
let v =
    21552 == l.j
        ? function (e) {
              let { tab: t, handleTransition: l } = e,
                  i = (0, x.uM)(),
                  s = (0, m.A)(),
                  c = s?.tenantMetadata?.collectibles?.reward?.storefront?.nagbar,
                  o = s?.tenantMetadata?.collectibles?.reward?.flavor,
                  r = a.useCallback(() => {
                      C.default.track(L.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                          collectibles_shop_session_id: i?.sessionId,
                          page_type: t,
                          page_section: i?.pageSection,
                          page_category: i?.pageCategory,
                          tile_type: "NAGBAR",
                          cta_name: "view eligible items button",
                      }),
                          l(k.G2.OFFER_ELIGIBLE);
                  }, [l, t, i]);
              return t === k.G2.ORBS || null == c
                  ? null
                  : (0, n.jsx)(g, {
                        tab: t,
                        promotionFlavor: o,
                        icon: c.icon,
                        headerText: c.headerText,
                        ctaText: c.cta?.text,
                        helpCenterId: c.helpCenterId,
                        onCtaClick: r,
                    });
          }
        : null;
