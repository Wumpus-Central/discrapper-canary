n.d(t, { Z: () => g });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(692547),
    s = n(481060),
    l = n(535322),
    c = n(31698),
    u = n(528771),
    d = n(267642),
    f = n(297159),
    p = n(132748),
    _ = n(981631),
    m = n(388032),
    h = n(118180);
let g = function (e) {
    let { guild: t } = e;
    return (0, r.jsx)("div", {
        className: h.tierCards,
        children: p.C.map((e) =>
            (0, r.jsxs)(
                "div",
                {
                    className: h.tierCard,
                    children: [
                        e.tier === _.Eu4.TIER_3 &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("div", {
                                        className: a()(h.tierCardBorderHighlight, h.tierCardBorderHighlightTopRight),
                                    }),
                                    (0, r.jsx)("div", {
                                        className: a()(h.tierCardBorderHighlight, h.tierCardBorderHighlightBottomLeft),
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: a()(h.tierCardSparkleHighlight, h.tierCardSparkleHighlightTopRight),
                                        children: [
                                            (0, r.jsx)(u.Z, { className: h.tierCardSparkle1 }),
                                            (0, r.jsx)(u.Z, { className: h.tierCardSparkle2 }),
                                            (0, r.jsx)(c.Z, { className: h.tierCardSparkle3 }),
                                        ],
                                    }),
                                    (0, r.jsx)("div", {
                                        className: a()(
                                            h.tierCardSparkleHighlight,
                                            h.tierCardSparkleHighlightBottomLeft,
                                        ),
                                        children: (0, r.jsx)(u.Z, { className: h.tierCardSparkle1 }),
                                    }),
                                ],
                            }),
                        e.tier === t.premiumTier &&
                            (0, r.jsx)(s.Text, {
                                className: h.tierCardCurrentTier,
                                tag: "div",
                                variant: "text-xs/semibold",
                                color: "always-white",
                                children: m.intl.string(m.t["9JbE3J"]),
                            }),
                        (0, r.jsxs)("div", {
                            className: h.tierCardHeader,
                            children: [
                                (0, r.jsx)(s.Heading, {
                                    className: h.tierCardHeading,
                                    variant: "heading-xxl/semibold",
                                    color: "always-white",
                                    children: (0, d.nW)(e.tier, { useLevels: !1 }),
                                }),
                                (0, r.jsx)(s.Text, {
                                    className: h.tierCardBoostRequirement,
                                    variant: "text-md/normal",
                                    color: "always-white",
                                    children: m.intl.format(m.t.vbAsA7, { numBoostsRequired: _.oCV[e.tier] }),
                                }),
                            ],
                        }),
                        (0, r.jsx)("ul", {
                            className: h.tierCardList,
                            children: e.perks.map((e, t) => {
                                let n = (0, f.P)(e.perkIcon);
                                return null == e.predicate || e.predicate()
                                    ? (0, r.jsxs)(
                                          "li",
                                          {
                                              className: h.tierCardPerkRow,
                                              children: [
                                                  (0, r.jsxs)(s.Text, {
                                                      className: h.tierCardListItem,
                                                      variant: "text-md/normal",
                                                      color: "always-white",
                                                      children: [
                                                          (0, r.jsx)(n, {
                                                              className: h.tierCardListIcon,
                                                              color: o.Z.colors.WHITE,
                                                          }),
                                                          e.getCopy(),
                                                      ],
                                                  }),
                                                  e.isNew
                                                      ? (0, r.jsx)(l.Z, {
                                                            className: h.tierCardNewFeatureBadge,
                                                            forceUseColorForSparkles: !0,
                                                            shouldInheritBackgroundColor: !0,
                                                            shouldInheritTextColor: !0,
                                                        })
                                                      : null,
                                              ],
                                          },
                                          t,
                                      )
                                    : null;
                            }),
                        }),
                    ],
                },
                e.tier,
            ),
        ),
    });
};
