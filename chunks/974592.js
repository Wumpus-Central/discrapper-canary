n.d(t, {
    C$: () => _,
    Se: () => p
});
var r = n(100527),
    i = n(717401),
    o = n(474936),
    a = n(981631),
    s = n(388032),
    l = n(36128),
    c = n(501536),
    u = n(210055),
    d = n(142755);
let f = [
        {
            skuId: '1326347611069874277',
            assetId: 'a_89b499793e86bf459a8dd4f02ad416f4'
        }
    ],
    _ = 2,
    p = {
        rewards: f,
        rewardAssetIdMap: (0, i.YV)(f),
        dismissibleContentVersion: _,
        eligiblePlanIds: [o.Xh.PREMIUM_YEAR_TIER_2, o.Xh.PREMIUM_MONTH_TIER_2],
        planSelection: {
            heading: () => s.NW.string(s.t['o2XB4+']),
            gradient: ['rgba(255, 144, 144, 1)', 'rgba(243, 14, 216, 1)'],
            getImageUrl: () => l.Z,
            getBackgroundImageUrl: () => u.Z
        },
        chatGiftIcon: {
            trinketsAnimation: {
                getAnimationData: () => n(357470),
                getGlowAnimationData: () => n(803050)
            }
        },
        firstTimeNotice: {
            getImageUrl: (e, t) => (t ? l.Z : d.Z),
            title: () => s.NW.string(s.t.hFzI4u),
            description: () => s.NW.string(s.t.B7R16u),
            cta: () => s.NW.string(s.t.RzWDqa),
            analyticsLocation: r.Z.VALENTINES_GIFTING_COACHMARK,
            analyticsPage: a.ZY5.PREMIUM_UPSELL_VALENTINES_GIFTING_CAMPAIGN
        },
        planSelectionBanner: {
            desktopBannerText: () => s.NW.string(s.t['wxgA+v']),
            mobileBannerText: () => s.NW.string(s.t.d4uO8v),
            getImageUrl: () => '',
            gradient: () => ['rgba(255, 144, 144, 1)', 'rgba(243, 14, 216, 1)']
        },
        billingSettingsMarketingBanner: {
            getAnimatedImageUrl: () => d.Z,
            getStaticImageUrl: () => l.Z,
            getBackgroundImageUrl: () => c.Z,
            title: () => s.NW.string(s.t.hFzI4u),
            body: () => s.NW.string(s.t.rbWKaW)
        },
        giftPurchaseConfirmation: {
            yearGiftText: s.t.p0pZXF,
            monthGiftText: s.t['4ZJ+7e'],
            collectRewardButtonText: () => s.NW.string(s.t.kMYVws),
            rewardCollectedText: () => s.NW.string(s.t.eZrmtr)
        }
    };
