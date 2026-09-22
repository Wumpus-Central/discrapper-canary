l.d(t, { A: () => S, Z: () => b });
var n = l(477900),
    i = l(582128),
    a = l(503698),
    s = l.n(a),
    o = l(43990),
    c = l(834730),
    r = l(28863),
    p = l(821609),
    d = l(417098),
    _ = l(793574),
    u = l(688810),
    A = l(812095),
    h = l(604913),
    C = l(65238),
    m = l(174459),
    x = l(975571),
    E = l(440938),
    I = l(758461),
    k = l(151115),
    L = l(758836),
    N = l(652215),
    T = l(375708),
    g = l(899737);
let v = { [h.Pz.DEFAULT]: g.Hk, [h.Pz.NITRO]: g.O5 };
function b(e) {
    let {
            tab: t,
            promotionFlavor: l = h.Pz.DEFAULT,
            icon: a,
            headerText: C,
            helpCenterId: I,
            helpCenterLinkText: L,
            ctaText: b,
            ctaIcon: S,
            onCtaClick: O,
            hideCta: y,
            onDismiss: R,
        } = e,
        { analyticsLocations: j } = (0, u.Ay)(_.A.COLLECTIBLES_SHOP_NAGBAR),
        f = i.useMemo(() => (null == I ? null : x.A.getArticleURL(I)), [I]),
        B = (0, k.s)(a),
        P = v[l] ?? g.Hk,
        H = (0, E.uM)(),
        M = i.useCallback(() => {
            m.default.track(N.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: H?.sessionId,
                page_type: t,
                page_section: H?.pageSection,
                page_category: H?.pageCategory,
                tile_type: "NAGBAR",
                cta_name: "help center article link",
            });
        }, [t, H]);
    return (0, n.jsx)(u.f5, {
        value: j,
        children: (0, n.jsx)(o.N, {
            theme: N.NJ8.DARK,
            children: (e) =>
                (0, n.jsxs)("div", {
                    className: s()(g.kL, e),
                    children: [
                        (0, n.jsx)("div", { className: s()(g.D7, P) }),
                        (0, n.jsxs)("div", {
                            className: g.Qs,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: g.hu,
                                    children: [
                                        null != B && (0, n.jsx)(B, { size: "sm", colorClass: g.d7, className: g.Kk }),
                                        (0, n.jsxs)(c.E, {
                                            variant: "text-sm/normal",
                                            color: "text-overlay-light",
                                            children: [
                                                null != C ? (0, A.U)(C) : null,
                                                null != f &&
                                                    (0, n.jsxs)(n.Fragment, {
                                                        children: [
                                                            " ",
                                                            (0, n.jsx)(r.Anchor, {
                                                                href: f,
                                                                target: "_blank",
                                                                className: g.nf,
                                                                onClick: M,
                                                                children: L ?? T.intl.string(T.t.WQdkbb),
                                                            }),
                                                        ],
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: g.uJ,
                                    children: [
                                        !y &&
                                            null != b &&
                                            (0, n.jsx)(p.$, {
                                                variant: "overlay-primary",
                                                size: "sm",
                                                text: b,
                                                icon: S,
                                                onClick: O,
                                            }),
                                        null != R &&
                                            (0, n.jsx)(d.PM, {
                                                onClick: R,
                                                noticeType: N.kqX.COLLECTIBLES_SHOP_NAGBAR,
                                                className: g.r,
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
let S =
    221552 == l.j
        ? function (e) {
              let { tab: t, handleTransition: l } = e,
                  a = (0, E.uM)(),
                  s = (0, I.HH)(),
                  o = (0, C.ml)(s)?.reward,
                  c = o?.storefront?.nagbar,
                  r = o?.flavor,
                  p = i.useCallback(() => {
                      (m.default.track(N.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                          collectibles_shop_session_id: a?.sessionId,
                          page_type: t,
                          page_section: a?.pageSection,
                          page_category: a?.pageCategory,
                          tile_type: "NAGBAR",
                          cta_name: "view eligible items button",
                      }),
                          l(L.G2.OFFER_ELIGIBLE));
                  }, [l, t, a]);
              return t === L.G2.ORBS || null == c
                  ? null
                  : (0, n.jsx)(b, {
                        tab: t,
                        promotionFlavor: r,
                        icon: c.icon,
                        headerText: c.headerText,
                        ctaText: c.cta?.text,
                        helpCenterId: c.helpCenterId,
                        onCtaClick: p,
                    });
          }
        : null;
