"use strict";
n.d(t, { j: () => v });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(834730),
    l = n(939249),
    u = n(789645),
    c = n(793574),
    d = n(688810),
    _ = n(422936),
    f = n(234419),
    p = n(811611),
    h = n(954571),
    E = n(927578),
    m = n(410558),
    g = n(320061),
    A = n(652215),
    I = n(788868),
    T = n(985018),
    S = n(217653),
    y = n(939383);
let N = () => (0, m.U)(!1),
    v = (e) => {
        let { onLearnMore: t } = e,
            { analyticsLocations: n } = (0, d.Ay)(c.A.PREMIUM_UPSELL);
        i.useEffect(() => {
            h.default.track(A.HAw.PREMIUM_UPSELL_VIEWED, {
                location_section: A.JJy.STICKER_PICKER_UPSELL,
                type: I.e.STICKER_PICKER_UPSELL,
                location_stack: n,
            });
        }, [n]);
        let s = (0, f.V)(),
            m = (0, _.O)(),
            v = s?.subscription_trial?.sku_id === I.pe.TIER_0,
            C = null != s || null != m;
        return (0, r.jsxs)("div", {
            className: a()(S.VL, { [S.Hz]: C }),
            children: [
                C
                    ? (0, r.jsx)(p.Ay, {
                          trialOffer: s,
                          discountOffer: m,
                          onClose: N,
                          type: I.e.STICKER_PICKER_UPSELL,
                          subscriptionTier: s?.subscription_trial?.sku_id ?? I.pe.TIER_2,
                          children: v
                              ? T.intl.format(T.t.MAGagw, {
                                    planName: (0, E.RH)(I.gD.PREMIUM_MONTH_TIER_0),
                                    onClick: t,
                                })
                              : T.intl.format(T.t.jt7JX6, { onClick: t }),
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("img", { className: S.Tn, src: y, alt: T.intl.string(T.t.do7AoM) }),
                              (0, r.jsx)(o.E, {
                                  className: S.ex,
                                  color: "text-strong",
                                  variant: "text-lg/semibold",
                                  children: T.intl.string(T.t.jJG1pl),
                              }),
                              (0, r.jsx)(o.E, {
                                  className: S.GR,
                                  variant: "text-md/normal",
                                  children: T.intl.format(T.t.jt7JX6, { onClick: t }),
                              }),
                          ],
                      }),
                !C && (0, r.jsx)(g.A, { analyticsSection: A.JJy.EXPRESSION_PICKER }),
                (0, r.jsx)(l.D, {
                    className: S.kz,
                    onClick: N,
                    children: (0, r.jsx)(u.P, { size: "md", color: "currentColor" }),
                }),
            ],
        });
    };
