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
    m = l(440938),
    x = l(80151),
    I = l(151115),
    k = l(758836),
    L = l(652215),
    N = l(375708),
    T = l(456670);
let b = { [h.Pz.DEFAULT]: T.Hk, [h.Pz.NITRO]: T.O5 };
function g(e) {
    let {
            tab: t,
            promotionFlavor: l = h.Pz.DEFAULT,
            icon: i,
            headerText: x,
            helpCenterId: k,
            helpCenterLinkText: g,
            ctaText: v,
            ctaIcon: S,
            onCtaClick: O,
            hideCta: R,
            onDismiss: j,
        } = e,
        { analyticsLocations: y } = (0, _.Ay)(u.A.COLLECTIBLES_SHOP_NAGBAR),
        M = a.useMemo(() => (null == k ? null : E.A.getArticleURL(k)), [k]),
        f = (0, I.sj)(i),
        B = b[l] ?? T.Hk,
        P = (0, m.uM)(),
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
        value: y,
        children: (0, n.jsx)(c.N, {
            theme: L.NJ8.DARKER,
            children: (e) =>
                (0, n.jsxs)("div", {
                    className: s()(T.kL, e),
                    children: [
                        (0, n.jsx)("div", { className: s()(T.D7, B) }),
                        (0, n.jsxs)("div", {
                            className: T.Qs,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: T.hu,
                                    children: [
                                        null != f && (0, n.jsx)(f, { size: "sm", colorClass: T.d7, className: T.Kk }),
                                        (0, n.jsxs)(o.E, {
                                            variant: "text-sm/normal",
                                            color: "text-overlay-light",
                                            children: [
                                                null != x ? (0, A.U)(x) : null,
                                                null != M &&
                                                    (0, n.jsxs)(n.Fragment, {
                                                        children: [
                                                            " ",
                                                            (0, n.jsx)(r.Anchor, {
                                                                href: M,
                                                                target: "_blank",
                                                                className: T.nf,
                                                                onClick: G,
                                                                children: g ?? N.intl.string(N.t.WQdkbb),
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
                                        !R &&
                                            null != v &&
                                            (0, n.jsx)(p.$, {
                                                variant: "overlay-primary",
                                                size: "sm",
                                                text: v,
                                                icon: S,
                                                onClick: O,
                                            }),
                                        null != j &&
                                            (0, n.jsx)(d.PM, {
                                                onClick: j,
                                                noticeType: L.kqX.COLLECTIBLES_SHOP_NAGBAR,
                                                className: T.r,
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
                  i = (0, m.uM)(),
                  s = (0, x.A)(),
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
