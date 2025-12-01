n.d(t, {
    C: () => h,
    Z: () => g,
});
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
    f = n(981631),
    p = n(474936),
    _ = n(388032),
    m = n(808705);
let h = [
        {
            tier: f.Eu4.TIER_1,
            perks: [
                {
                    icon: s.EO4,
                    getCopy: () =>
                        _.intl.formatToPlainString(_.t.Tlz0x1, { numEmojiSlots: p.HO[f.Eu4.TIER_1].limits.emoji }),
                },
                {
                    icon: s.KY1,
                    getCopy: () =>
                        _.intl.formatToPlainString(_.t["v+MIfo"], {
                            numSoundboardSlots: p.HO[f.Eu4.TIER_1].limits.soundboardSounds,
                        }),
                    isNew: !0,
                },
                {
                    icon: s.OUq,
                    getCopy: () => _.intl.string(_.t.PbAyub),
                },
                {
                    icon: s.gj8,
                    getCopy: () => _.intl.string(_.t["WH+OeI"]),
                },
            ],
        },
        {
            tier: f.Eu4.TIER_2,
            perks: [
                {
                    icon: s.hGI,
                    getCopy: () => _.intl.string(_.t.y4ft4D),
                },
                {
                    icon: s.rG2,
                    getCopy: () =>
                        _.intl.formatToPlainString(_.t.aFRl53, { uploadSizeLimit: _.intl.string(_.t.M6qV8j) }),
                },
                {
                    icon: s.EO4,
                    getCopy: () => _.intl.string(_.t["6PV6Qc"]),
                },
                {
                    icon: s.dRF,
                    getCopy: () => _.intl.string(_.t["1a5rjl"]),
                },
            ],
        },
        {
            tier: f.Eu4.TIER_3,
            perks: [
                {
                    icon: s.xPt,
                    getCopy: () => _.intl.string(_.t.adNGjW),
                },
                {
                    icon: s.rG2,
                    getCopy: () =>
                        _.intl.formatToPlainString(_.t.aFRl53, { uploadSizeLimit: _.intl.string(_.t.yMOW8D) }),
                },
                {
                    icon: s.gj8,
                    getCopy: () => _.intl.string(_.t.Tsljqo),
                },
                {
                    icon: s.OUq,
                    getCopy: () => _.intl.string(_.t.nRKlmC),
                },
                {
                    icon: s.ewx,
                    getCopy: () => _.intl.formatToPlainString(_.t.hsZ88d, { numStageSeats: f.RcX }),
                },
            ],
        },
    ],
    g = function (e) {
        let { guild: t } = e;
        return (0, r.jsx)("div", {
            className: m.tierCards,
            children: h.map((e) =>
                (0, r.jsxs)(
                    "div",
                    {
                        className: m.tierCard,
                        children: [
                            e.tier === f.Eu4.TIER_3 &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: a()(
                                                m.tierCardBorderHighlight,
                                                m.tierCardBorderHighlightTopRight,
                                            ),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: a()(
                                                m.tierCardBorderHighlight,
                                                m.tierCardBorderHighlightBottomLeft,
                                            ),
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: a()(
                                                m.tierCardSparkleHighlight,
                                                m.tierCardSparkleHighlightTopRight,
                                            ),
                                            children: [
                                                (0, r.jsx)(u.Z, { className: m.tierCardSparkle1 }),
                                                (0, r.jsx)(u.Z, { className: m.tierCardSparkle2 }),
                                                (0, r.jsx)(c.Z, { className: m.tierCardSparkle3 }),
                                            ],
                                        }),
                                        (0, r.jsx)("div", {
                                            className: a()(
                                                m.tierCardSparkleHighlight,
                                                m.tierCardSparkleHighlightBottomLeft,
                                            ),
                                            children: (0, r.jsx)(u.Z, { className: m.tierCardSparkle1 }),
                                        }),
                                    ],
                                }),
                            e.tier === t.premiumTier &&
                                (0, r.jsx)(s.Text, {
                                    className: m.tierCardCurrentTier,
                                    tag: "div",
                                    variant: "text-xs/semibold",
                                    color: "always-white",
                                    children: _.intl.string(_.t["9JbE3J"]),
                                }),
                            (0, r.jsxs)("div", {
                                className: m.tierCardHeader,
                                children: [
                                    (0, r.jsx)(s.Heading, {
                                        className: m.tierCardHeading,
                                        variant: "heading-xxl/semibold",
                                        color: "always-white",
                                        children: (0, d.nW)(e.tier, { useLevels: !1 }),
                                    }),
                                    (0, r.jsx)(s.Text, {
                                        className: m.tierCardBoostRequirement,
                                        variant: "text-md/normal",
                                        color: "always-white",
                                        children: _.intl.format(_.t.vbAsA7, { numBoostsRequired: f.oCV[e.tier] }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)("ul", {
                                className: m.tierCardList,
                                children: e.perks.map((e, t) =>
                                    null == e.predicate || e.predicate()
                                        ? (0, r.jsxs)(
                                              "li",
                                              {
                                                  className: m.tierCardPerkRow,
                                                  children: [
                                                      (0, r.jsxs)(s.Text, {
                                                          className: m.tierCardListItem,
                                                          variant: "text-md/normal",
                                                          color: "always-white",
                                                          children: [
                                                              (0, r.jsx)(e.icon, {
                                                                  className: m.tierCardListIcon,
                                                                  color: o.Z.colors.WHITE,
                                                              }),
                                                              e.getCopy(),
                                                          ],
                                                      }),
                                                      e.isNew
                                                          ? (0, r.jsx)(l.Z, {
                                                                className: m.tierCardNewFeatureBadge,
                                                                forceUseColorForSparkles: !0,
                                                                shouldInheritBackgroundColor: !0,
                                                                shouldInheritTextColor: !0,
                                                            })
                                                          : null,
                                                  ],
                                              },
                                              t,
                                          )
                                        : null,
                                ),
                            }),
                        ],
                    },
                    e.tier,
                ),
            ),
        });
    };
