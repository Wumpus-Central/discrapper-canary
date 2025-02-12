n.d(t, { Z: () => g });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(692547),
    o = n(481060),
    l = n(535322),
    u = n(31698),
    c = n(528771),
    d = n(267642),
    f = n(981631),
    _ = n(474936),
    p = n(388032),
    h = n(155706);
let m = [
        {
            tier: f.Eu4.TIER_1,
            perks: [
                {
                    icon: o.EO4,
                    getCopy: () => p.intl.formatToPlainString(p.t.Tlz0x8, { numEmojiSlots: _.HO[f.Eu4.TIER_1].limits.emoji })
                },
                {
                    icon: o.KY1,
                    getCopy: () => p.intl.formatToPlainString(p.t['v+MIfn'], { numSoundboardSlots: _.HO[f.Eu4.TIER_1].limits.soundboardSounds }),
                    isNew: !0
                },
                {
                    icon: o.OUq,
                    getCopy: () => p.intl.string(p.t.PbAyub)
                },
                {
                    icon: o.gj8,
                    getCopy: () => p.intl.string(p.t['WH+OeH'])
                }
            ]
        },
        {
            tier: f.Eu4.TIER_2,
            perks: [
                {
                    icon: o.hGI,
                    getCopy: () => p.intl.string(p.t.y4ft4O)
                },
                {
                    icon: o.rG2,
                    getCopy: () => p.intl.formatToPlainString(p.t['aFRl5+'], { uploadSizeLimit: p.intl.string(p.t.M6qV8v) })
                },
                {
                    icon: o.EO4,
                    getCopy: () => p.intl.string(p.t['6PV6QU'])
                },
                {
                    icon: o.dRF,
                    getCopy: () => p.intl.string(p.t['1a5rjo'])
                }
            ]
        },
        {
            tier: f.Eu4.TIER_3,
            perks: [
                {
                    icon: o.xPt,
                    getCopy: () => p.intl.string(p.t.adNGjY)
                },
                {
                    icon: o.rG2,
                    getCopy: () => p.intl.formatToPlainString(p.t['aFRl5+'], { uploadSizeLimit: p.intl.string(p.t.yMOW8P) })
                },
                {
                    icon: o.gj8,
                    getCopy: () => p.intl.string(p.t.Tsljqq)
                },
                {
                    icon: o.OUq,
                    getCopy: () => p.intl.string(p.t.nRKlmJ)
                },
                {
                    icon: o.ewx,
                    getCopy: () => p.intl.formatToPlainString(p.t.hsZ88f, { numStageSeats: f.RcX })
                }
            ]
        }
    ],
    g = function (e) {
        let { guild: t } = e;
        return (0, i.jsx)('div', {
            className: h.tierCards,
            children: m.map((e) =>
                (0, i.jsxs)(
                    'div',
                    {
                        className: h.tierCard,
                        children: [
                            e.tier === f.Eu4.TIER_3 &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)('div', { className: a()(h.tierCardBorderHighlight, h.tierCardBorderHighlightTopRight) }),
                                        (0, i.jsx)('div', { className: a()(h.tierCardBorderHighlight, h.tierCardBorderHighlightBottomLeft) }),
                                        (0, i.jsxs)('div', {
                                            className: a()(h.tierCardSparkleHighlight, h.tierCardSparkleHighlightTopRight),
                                            children: [(0, i.jsx)(c.Z, { className: h.tierCardSparkle1 }), (0, i.jsx)(c.Z, { className: h.tierCardSparkle2 }), (0, i.jsx)(u.Z, { className: h.tierCardSparkle3 })]
                                        }),
                                        (0, i.jsx)('div', {
                                            className: a()(h.tierCardSparkleHighlight, h.tierCardSparkleHighlightBottomLeft),
                                            children: (0, i.jsx)(c.Z, { className: h.tierCardSparkle1 })
                                        })
                                    ]
                                }),
                            e.tier === t.premiumTier &&
                                (0, i.jsx)(o.Text, {
                                    className: h.tierCardCurrentTier,
                                    tag: 'div',
                                    variant: 'text-xs/semibold',
                                    color: 'always-white',
                                    children: p.intl.string(p.t['9JbE3N'])
                                }),
                            (0, i.jsxs)('div', {
                                className: h.tierCardHeader,
                                children: [
                                    (0, i.jsx)(o.X6q, {
                                        className: h.tierCardHeading,
                                        variant: 'heading-xxl/semibold',
                                        color: 'always-white',
                                        children: (0, d.nW)(e.tier, { useLevels: !1 })
                                    }),
                                    (0, i.jsx)(o.Text, {
                                        className: h.tierCardBoostRequirement,
                                        variant: 'text-md/normal',
                                        color: 'always-white',
                                        children: p.intl.format(p.t.vbAsAw, { numBoostsRequired: f.oCV[e.tier] })
                                    })
                                ]
                            }),
                            (0, i.jsx)('ul', {
                                className: h.tierCardList,
                                children: e.perks.map((e, t) =>
                                    null == e.predicate || e.predicate()
                                        ? (0, i.jsxs)(
                                              'li',
                                              {
                                                  className: h.tierCardPerkRow,
                                                  children: [
                                                      (0, i.jsxs)(o.Text, {
                                                          className: h.tierCardListItem,
                                                          variant: 'text-md/normal',
                                                          color: 'always-white',
                                                          children: [
                                                              (0, i.jsx)(e.icon, {
                                                                  className: h.tierCardListIcon,
                                                                  color: s.Z.colors.WHITE
                                                              }),
                                                              e.getCopy()
                                                          ]
                                                      }),
                                                      e.isNew
                                                          ? (0, i.jsx)(l.Z, {
                                                                className: h.tierCardNewFeatureBadge,
                                                                forceUseColorForSparkles: !0,
                                                                shouldInheritBackgroundColor: !0,
                                                                shouldInheritTextColor: !0
                                                            })
                                                          : null
                                                  ]
                                              },
                                              t
                                          )
                                        : null
                                )
                            })
                        ]
                    },
                    e.tier
                )
            )
        });
    };
