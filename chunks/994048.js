"use strict";
n.d(t, { j: () => y });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
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
    E = n(652215),
    g = n(788868),
    A = n(985018),
    I = n(173924),
    T = n(939383);
let S = () => (0, h.U)(!1),
    y = (e) => {
        let { onLearnMore: t } = e,
            { analyticsLocations: n } = (0, u.Ay)(l.A.PREMIUM_UPSELL);
        i.useEffect(() => {
            f.default.track(E.HAw.PREMIUM_UPSELL_VIEWED, {
                location_section: E.JJy.STICKER_PICKER_UPSELL,
                type: g.e.STICKER_PICKER_UPSELL,
                location_stack: n,
            });
        }, [n]);
        let s = (0, d.V)(),
            h = (0, c.O)(),
            y = s?.subscription_trial?.sku_id === g.pe.TIER_0,
            v = null != s || null != h;
        return (0, r.jsxs)("div", {
            className: a()(I.VL, { [I.Hz]: v }),
            children: [
                v
                    ? (0, r.jsx)(_.Ay, {
                          trialOffer: s,
                          discountOffer: h,
                          onClose: S,
                          type: g.e.STICKER_PICKER_UPSELL,
                          subscriptionTier: s?.subscription_trial?.sku_id ?? g.pe.TIER_2,
                          children: y
                              ? A.intl.format(A.t.MAGagw, {
                                    planName: (0, p.RH)(g.gD.PREMIUM_MONTH_TIER_0),
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
                !v && (0, r.jsx)(m.A, { analyticsSection: E.JJy.EXPRESSION_PICKER }),
                (0, r.jsx)(o.DUT, {
                    className: I.kz,
                    onClick: S,
                    children: (0, r.jsx)(o.PGe, { size: "md", color: "currentColor" }),
                }),
            ],
        });
    };
