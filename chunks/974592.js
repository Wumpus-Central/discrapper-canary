n.d(t, {
    C$: () => _,
    Se: () => p
});
var i = n(100527),
    r = n(717401),
    a = n(474936),
    s = n(981631),
    o = n(388032),
    l = n(36128),
    u = n(501536),
    c = n(210055),
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
        rewardAssetIdMap: (0, r.YV)(f),
        dismissibleContentVersion: _,
        eligiblePlanIds: [a.Xh.PREMIUM_YEAR_TIER_2, a.Xh.PREMIUM_MONTH_TIER_2],
        planSelection: {
            heading: () => o.intl.string(o.t['o2XB4+']),
            gradient: ['rgba(255, 144, 144, 1)', 'rgba(243, 14, 216, 1)'],
            getImageUrl: () => l.Z,
            getBackgroundImageUrl: () => c.Z
        },
        chatGiftIcon: {
            trinketsAnimation: {
                getAnimationData: () => n(357470),
                getGlowAnimationData: () => n(803050)
            }
        },
        firstTimeNotice: {
            getImageUrl: (e, t) => (t ? l.Z : d.Z),
            title: () => o.intl.string(o.t.hFzI4u),
            description: () => o.intl.string(o.t.B7R16u),
            cta: () => o.intl.string(o.t.RzWDqa),
            analyticsLocation: i.Z.VALENTINES_GIFTING_COACHMARK,
            analyticsPage: s.ZY5.PREMIUM_UPSELL_VALENTINES_GIFTING_CAMPAIGN
        },
        planSelectionBanner: {
            desktopBannerText: () => o.intl.string(o.t['wxgA+v']),
            mobileBannerText: () => o.intl.string(o.t.d4uO8v),
            getImageUrl: () => '',
            gradient: () => ['rgba(255, 144, 144, 1)', 'rgba(243, 14, 216, 1)']
        },
        billingSettingsMarketingBanner: {
            getAnimatedImageUrl: () => d.Z,
            getStaticImageUrl: () => l.Z,
            getBackgroundImageUrl: () => u.Z,
            title: () => o.intl.string(o.t.hFzI4u),
            body: () => o.intl.string(o.t.rbWKaW)
        },
        giftPurchaseConfirmation: {
            yearGiftText: o.t.p0pZXF,
            monthGiftText: o.t['4ZJ+7e'],
            collectRewardButtonText: () => o.intl.string(o.t.kMYVws),
            rewardCollectedText: () => o.intl.string(o.t.eZrmtr)
        }
    };
