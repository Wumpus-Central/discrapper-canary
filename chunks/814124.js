var n = l(477900),
    i = l(582128),
    a = l(503698),
    o = l.n(a),
    s = l(43990),
    c = l(834730),
    r = l(28863),
    p = l(821609),
    d = l(417098),
    u = l(793574),
    _ = l(688810),
    h = l(812095),
    A = l(604913),
    C = l(65238),
    m = l(129230),
    I = l(975571),
    E = l(857512),
    x = l(758461),
    k = l(22007),
    L = l(758836),
    N = l(652215),
    T = l(792996),
    g = l(899737);
let v = { [A.Pz.DEFAULT]: g.Hk, [A.Pz.NITRO]: g.O5 };
function b(e) {
    let {
            tab: t,
            promotionFlavor: l = A.Pz.DEFAULT,
            icon: a,
            headerText: C,
            helpCenterId: x,
            helpCenterLinkText: L,
            ctaText: b,
            ctaIcon: S,
            onCtaClick: O,
            hideCta: y,
            onDismiss: R,
        } = e,
        { analyticsLocations: j } = (0, _.Ay)(u.A.COLLECTIBLES_SHOP_NAGBAR),
        f = i.useMemo(() => (null == x ? null : I.A.getArticleURL(x)), [x]),
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
    return (0, n.jsx)(_.f5, {
        value: j,
        children: (0, n.jsx)(s.N, {
            theme: N.NJ8.DARK,
            children: (e) =>
                (0, n.jsxs)("div", {
                    className: o()(g.kL, e),
                    children: [
                        (0, n.jsx)("div", { className: o()(g.D7, P) }),
                        (0, n.jsxs)("div", {
                            className: g.Qs,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: g.hu,
                                    children: [
                                        null != B && (0, n.jsx)(B, { size: "sm", colorClass: g.d7, className: g.Kk }),
                                        (0, n.jsxs)(c.E, {
                                            variant: "body-sm/normal",
                                            color: "text-overlay-light",
                                            children: [
                                                null != C ? (0, h.U)(C) : null,
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
                  o = (0, x.HH)(),
                  s = (0, C.ml)(o)?.reward,
                  c = s?.storefront?.nagbar,
                  r = s?.flavor,
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
l.d(t, {}, { A: S, Z: b });
