n.d(t, {
    C: () => m,
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
    _ = n(474936),
    p = n(388032),
    h = n(808705);
let m = [
        {
            tier: f.Eu4.TIER_1,
            perks: [
                {
                    icon: s.EO4,
                    getCopy: () =>
                        p.intl.formatToPlainString(p.t.Tlz0x1, { numEmojiSlots: _.HO[f.Eu4.TIER_1].limits.emoji }),
                },
                {
                    icon: s.KY1,
                    getCopy: () =>
                        p.intl.formatToPlainString(p.t["v+MIfo"], {
                            numSoundboardSlots: _.HO[f.Eu4.TIER_1].limits.soundboardSounds,
                        }),
                    isNew: !0,
                },
                {
                    icon: s.OUq,
                    getCopy: () => p.intl.string(p.t.PbAyub),
                },
                {
                    icon: s.gj8,
                    getCopy: () => p.intl.string(p.t["WH+OeI"]),
                },
            ],
        },
        {
            tier: f.Eu4.TIER_2,
            perks: [
                {
                    icon: s.hGI,
                    getCopy: () => p.intl.string(p.t.y4ft4D),
                },
                {
                    icon: s.rG2,
                    getCopy: () =>
                        p.intl.formatToPlainString(p.t.aFRl53, { uploadSizeLimit: p.intl.string(p.t.M6qV8j) }),
                },
                {
                    icon: s.EO4,
                    getCopy: () => p.intl.string(p.t["6PV6Qc"]),
                },
                {
                    icon: s.dRF,
                    getCopy: () => p.intl.string(p.t["1a5rjl"]),
                },
            ],
        },
        {
            tier: f.Eu4.TIER_3,
            perks: [
                {
                    icon: s.xPt,
                    getCopy: () => p.intl.string(p.t.adNGjW),
                },
                {
                    icon: s.rG2,
                    getCopy: () =>
                        p.intl.formatToPlainString(p.t.aFRl53, { uploadSizeLimit: p.intl.string(p.t.yMOW8D) }),
                },
                {
                    icon: s.gj8,
                    getCopy: () => p.intl.string(p.t.Tsljqo),
                },
                {
                    icon: s.OUq,
                    getCopy: () => p.intl.string(p.t.nRKlmC),
                },
                {
                    icon: s.ewx,
                    getCopy: () => p.intl.formatToPlainString(p.t.hsZ88d, { numStageSeats: f.RcX }),
                },
            ],
        },
    ],
    g = function (e) {
        let { guild: t } = e;
        return (0, r.jsx)("div", {
            className: h.tierCards,
            children: m.map((e) =>
                (0, r.jsxs)(
                    "div",
                    {
                        className: h.tierCard,
                        children: [
                            e.tier === f.Eu4.TIER_3 &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: a()(
                                                h.tierCardBorderHighlight,
                                                h.tierCardBorderHighlightTopRight,
                                            ),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: a()(
                                                h.tierCardBorderHighlight,
                                                h.tierCardBorderHighlightBottomLeft,
                                            ),
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: a()(
                                                h.tierCardSparkleHighlight,
                                                h.tierCardSparkleHighlightTopRight,
                                            ),
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
                                    children: p.intl.string(p.t["9JbE3J"]),
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
                                        children: p.intl.format(p.t.vbAsA7, { numBoostsRequired: f.oCV[e.tier] }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)("ul", {
                                className: h.tierCardList,
                                children: e.perks.map((e, t) =>
                                    null == e.predicate || e.predicate()
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
                                                              (0, r.jsx)(e.icon, {
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
