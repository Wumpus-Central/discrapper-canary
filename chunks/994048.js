n.d(t, { j: () => v });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(793574),
    c = n(688810),
    u = n(422936),
    d = n(234419),
    f = n(811611),
    p = n(954571),
    _ = n(927578),
    h = n(410558),
    m = n(320061),
    g = n(652215),
    E = n(788868),
    b = n(985018),
    y = n(369614),
    O = n(939383);
let A = () => (0, h.U)(!1),
    v = (e) => {
        var t, n, a;
        let { onLearnMore: h } = e,
            { analyticsLocations: v } = (0, c.Ay)(l.A.PREMIUM_UPSELL);
        i.useEffect(() => {
            p.default.track(g.HAw.PREMIUM_UPSELL_VIEWED, {
                location_section: g.JJy.STICKER_PICKER_UPSELL,
                type: E.e.STICKER_PICKER_UPSELL,
                location_stack: v,
            });
        }, [v]);
        let S = (0, d.V)(),
            I = (0, u.O)(),
            T = (null == S || null == (n = S.subscription_trial) ? void 0 : n.sku_id) === E.pe.TIER_0,
            C = null != S || null != I;
        return (0, r.jsxs)("div", {
            className: s()(y.VL, { [y.Hz]: C }),
            children: [
                C
                    ? (0, r.jsx)(f.Ay, {
                          trialOffer: S,
                          discountOffer: I,
                          onClose: A,
                          type: E.e.STICKER_PICKER_UPSELL,
                          subscriptionTier:
                              null != (t = null == S || null == (a = S.subscription_trial) ? void 0 : a.sku_id)
                                  ? t
                                  : E.pe.TIER_2,
                          children: T
                              ? b.intl.format(b.t.MAGagw, {
                                    planName: (0, _.RH)(E.gD.PREMIUM_MONTH_TIER_0),
                                    onClick: h,
                                })
                              : b.intl.format(b.t.jt7JX6, { onClick: h }),
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)("img", {
                                  className: y.Tn,
                                  src: O,
                                  alt: b.intl.string(b.t.do7AoM),
                              }),
                              (0, r.jsx)(o.Text, {
                                  className: y.ex,
                                  color: "text-strong",
                                  variant: "text-lg/semibold",
                                  children: b.intl.string(b.t.jJG1pl),
                              }),
                              (0, r.jsx)(o.Text, {
                                  className: y.GR,
                                  variant: "text-md/normal",
                                  children: b.intl.format(b.t.jt7JX6, { onClick: h }),
                              }),
                          ],
                      }),
                !C &&
                    (0, r.jsx)(m.A, {
                        analyticsSection: g.JJy.EXPRESSION_PICKER,
                        buttonText: C ? (T ? b.intl.string(b.t.hz78hE) : b.intl.string(b.t["Gd/XHF"])) : void 0,
                    }),
                (0, r.jsx)(o.DUT, {
                    className: y.kz,
                    onClick: A,
                    children: (0, r.jsx)(o.PGe, {
                        size: "md",
                        color: "currentColor",
                    }),
                }),
            ],
        });
    };
