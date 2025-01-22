var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(692547),
    l = r(481060),
    u = r(535322),
    c = r(31698),
    d = r(528771),
    f = r(267642),
    p = r(981631),
    h = r(474936),
    _ = r(388032),
    m = r(293952);
let g = [
    {
        tier: p.Eu4.TIER_1,
        perks: [
            {
                icon: l.ReactionIcon,
                getCopy: () => _.intl.formatToPlainString(_.t.Tlz0x8, { numEmojiSlots: h.HO[p.Eu4.TIER_1].limits.emoji })
            },
            {
                icon: l.SoundboardIcon,
                getCopy: () => _.intl.formatToPlainString(_.t['v+MIfn'], { numSoundboardSlots: h.HO[p.Eu4.TIER_1].limits.soundboardSounds }),
                isNew: !0
            },
            {
                icon: l.GifIcon,
                getCopy: () => _.intl.string(_.t.PbAyub)
            },
            {
                icon: l.VoiceNormalIcon,
                getCopy: () => _.intl.string(_.t['WH+OeH'])
            }
        ]
    },
    {
        tier: p.Eu4.TIER_2,
        perks: [
            {
                icon: l.ScreenArrowIcon,
                getCopy: () => _.intl.string(_.t.y4ft4O)
            },
            {
                icon: l.UploadIcon,
                getCopy: () => _.intl.formatToPlainString(_.t['aFRl5+'], { uploadSizeLimit: _.intl.string(_.t.M6qV8v) })
            },
            {
                icon: l.ReactionIcon,
                getCopy: () => _.intl.string(_.t['6PV6QU'])
            },
            {
                icon: l.ServerGridIcon,
                getCopy: () => _.intl.string(_.t['1a5rjo'])
            }
        ]
    },
    {
        tier: p.Eu4.TIER_3,
        perks: [
            {
                icon: l.LinkIcon,
                getCopy: () => _.intl.string(_.t.adNGjY)
            },
            {
                icon: l.UploadIcon,
                getCopy: () => _.intl.formatToPlainString(_.t['aFRl5+'], { uploadSizeLimit: _.intl.string(_.t.yMOW8P) })
            },
            {
                icon: l.VoiceNormalIcon,
                getCopy: () => _.intl.string(_.t.Tsljqq)
            },
            {
                icon: l.GifIcon,
                getCopy: () => _.intl.string(_.t.nRKlmJ)
            },
            {
                icon: l.StageIcon,
                getCopy: () => _.intl.formatToPlainString(_.t.hsZ88f, { numStageSeats: p.RcX })
            }
        ]
    }
];
function E(e) {
    let { guild: n } = e;
    return (0, i.jsx)('div', {
        className: m.tierCards,
        children: g.map((e) =>
            (0, i.jsxs)(
                'div',
                {
                    className: m.tierCard,
                    children: [
                        e.tier === p.Eu4.TIER_3 &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)('div', { className: o()(m.tierCardBorderHighlight, m.tierCardBorderHighlightTopRight) }),
                                    (0, i.jsx)('div', { className: o()(m.tierCardBorderHighlight, m.tierCardBorderHighlightBottomLeft) }),
                                    (0, i.jsxs)('div', {
                                        className: o()(m.tierCardSparkleHighlight, m.tierCardSparkleHighlightTopRight),
                                        children: [(0, i.jsx)(d.Z, { className: m.tierCardSparkle1 }), (0, i.jsx)(d.Z, { className: m.tierCardSparkle2 }), (0, i.jsx)(c.Z, { className: m.tierCardSparkle3 })]
                                    }),
                                    (0, i.jsx)('div', {
                                        className: o()(m.tierCardSparkleHighlight, m.tierCardSparkleHighlightBottomLeft),
                                        children: (0, i.jsx)(d.Z, { className: m.tierCardSparkle1 })
                                    })
                                ]
                            }),
                        e.tier === n.premiumTier &&
                            (0, i.jsx)(l.Text, {
                                className: m.tierCardCurrentTier,
                                tag: 'div',
                                variant: 'text-xs/semibold',
                                color: 'always-white',
                                children: _.intl.string(_.t['9JbE3N'])
                            }),
                        (0, i.jsxs)('div', {
                            className: m.tierCardHeader,
                            children: [
                                (0, i.jsx)(l.Heading, {
                                    className: m.tierCardHeading,
                                    variant: 'heading-xxl/semibold',
                                    color: 'always-white',
                                    children: (0, f.nW)(e.tier, { useLevels: !1 })
                                }),
                                (0, i.jsx)(l.Text, {
                                    className: m.tierCardBoostRequirement,
                                    variant: 'text-md/normal',
                                    color: 'always-white',
                                    children: _.intl.format(_.t.vbAsAw, { numBoostsRequired: p.oCV[e.tier] })
                                })
                            ]
                        }),
                        (0, i.jsx)('ul', {
                            className: m.tierCardList,
                            children: e.perks.map((e, n) =>
                                null == e.predicate || e.predicate()
                                    ? (0, i.jsxs)(
                                          'li',
                                          {
                                              className: m.tierCardPerkRow,
                                              children: [
                                                  (0, i.jsxs)(l.Text, {
                                                      className: m.tierCardListItem,
                                                      variant: 'text-md/normal',
                                                      color: 'always-white',
                                                      children: [
                                                          (0, i.jsx)(e.icon, {
                                                              className: m.tierCardListIcon,
                                                              color: s.Z.colors.WHITE
                                                          }),
                                                          e.getCopy()
                                                      ]
                                                  }),
                                                  e.isNew
                                                      ? (0, i.jsx)(u.Z, {
                                                            className: m.tierCardNewFeatureBadge,
                                                            forceUseColorForSparkles: !0,
                                                            shouldInheritBackgroundColor: !0,
                                                            shouldInheritTextColor: !0
                                                        })
                                                      : null
                                              ]
                                          },
                                          n
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
}
n.Z = E;
