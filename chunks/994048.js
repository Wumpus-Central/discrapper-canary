"use strict";
n.d(t, { j: () => S });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(793574),
    u = n(688810),
    c = n(422936),
    d = n(234419),
    _ = n(811611),
    f = n(954571),
    p = n(927578),
    h = n(410558),
    m = n(320061),
    g = n(652215),
    E = n(788868),
    A = n(985018),
    I = n(369614),
    T = n(939383);
let y = () => (0, h.U)(!1),
    S = (e) => {
        let { onLearnMore: t } = e,
            { analyticsLocations: n } = (0, u.Ay)(l.A.PREMIUM_UPSELL);
        i.useEffect(() => {
            f.default.track(g.HAw.PREMIUM_UPSELL_VIEWED, {
                location_section: g.JJy.STICKER_PICKER_UPSELL,
                type: E.e.STICKER_PICKER_UPSELL,
                location_stack: n,
            });
        }, [n]);
        let a = (0, d.V)(),
            h = (0, c.O)(),
            S = a?.subscription_trial?.sku_id === E.pe.TIER_0,
            v = null != a || null != h;
        return (0, r.jsxs)("div", {
            className: s()(I.VL, { [I.Hz]: v }),
            children: [
                v
                    ? (0, r.jsx)(_.Ay, {
                          trialOffer: a,
                          discountOffer: h,
                          onClose: y,
                          type: E.e.STICKER_PICKER_UPSELL,
                          subscriptionTier: a?.subscription_trial?.sku_id ?? E.pe.TIER_2,
                          children: S
                              ? A.intl.format(A.t.MAGagw, {
                                    planName: (0, p.RH)(E.gD.PREMIUM_MONTH_TIER_0),
                                    onClick: t,
                                })
                              : A.intl.format(A.t.jt7JX6, { onClick: t }),
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("img", { className: I.Tn, src: T, alt: A.intl.string(A.t.do7AoM) }),
                              (0, r.jsx)(o.Text, {
                                  className: I.ex,
                                  color: "text-strong",
                                  variant: "text-lg/semibold",
                                  children: A.intl.string(A.t.jJG1pl),
                              }),
                              (0, r.jsx)(o.Text, {
                                  className: I.GR,
                                  variant: "text-md/normal",
                                  children: A.intl.format(A.t.jt7JX6, { onClick: t }),
                              }),
                          ],
                      }),
                !v &&
                    (0, r.jsx)(m.A, {
                        analyticsSection: g.JJy.EXPRESSION_PICKER,
                        buttonText: v ? (S ? A.intl.string(A.t.hz78hE) : A.intl.string(A.t["Gd/XHF"])) : void 0,
                    }),
                (0, r.jsx)(o.DUT, {
                    className: I.kz,
                    onClick: y,
                    children: (0, r.jsx)(o.PGe, { size: "md", color: "currentColor" }),
                }),
            ],
        });
    };
