"use strict";
n.d(t, { j: () => S });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(834730),
    o = n(939249),
    c = n(789645),
    u = n(793574),
    d = n(688810),
    h = n(422936),
    m = n(234419),
    p = n(811611),
    f = n(954571),
    g = n(927578),
    _ = n(410558),
    x = n(320061),
    A = n(652215),
    C = n(788868),
    E = n(985018),
    I = n(217653),
    v = n(939383);
let y = () => (0, _.U)(!1),
    S = (e) => {
        let { onLearnMore: t } = e,
            { analyticsLocations: n } = (0, d.Ay)(u.A.PREMIUM_UPSELL);
        l.useEffect(() => {
            f.default.track(A.HAw.PREMIUM_UPSELL_VIEWED, {
                location_section: A.JJy.STICKER_PICKER_UPSELL,
                type: C.e.STICKER_PICKER_UPSELL,
                location_stack: n,
            });
        }, [n]);
        let s = (0, m.V)(),
            _ = (0, h.O)(),
            S = s?.subscription_trial?.sku_id === C.pe.TIER_0,
            b = null != s || null != _;
        return (0, i.jsxs)("div", {
            className: r()(I.VL, { [I.Hz]: b }),
            children: [
                b
                    ? (0, i.jsx)(p.Ay, {
                          trialOffer: s,
                          discountOffer: _,
                          onClose: y,
                          type: C.e.STICKER_PICKER_UPSELL,
                          subscriptionTier: s?.subscription_trial?.sku_id ?? C.pe.TIER_2,
                          children: S
                              ? E.intl.format(E.t.MAGagw, {
                                    planName: (0, g.RH)(C.gD.PREMIUM_MONTH_TIER_0),
                                    onClick: t,
                                })
                              : E.intl.format(E.t.jt7JX6, { onClick: t }),
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("img", { className: I.Tn, src: v, alt: E.intl.string(E.t.do7AoM) }),
                              (0, i.jsx)(a.E, {
                                  className: I.ex,
                                  color: "text-strong",
                                  variant: "text-lg/semibold",
                                  children: E.intl.string(E.t.jJG1pl),
                              }),
                              (0, i.jsx)(a.E, {
                                  className: I.GR,
                                  variant: "text-md/normal",
                                  children: E.intl.format(E.t.jt7JX6, { onClick: t }),
                              }),
                          ],
                      }),
                !b && (0, i.jsx)(x.A, { analyticsSection: A.JJy.EXPRESSION_PICKER }),
                (0, i.jsx)(o.D, {
                    className: I.kz,
                    onClick: y,
                    children: (0, i.jsx)(c.P, { size: "md", color: "currentColor" }),
                }),
            ],
        });
    };
