r.d(n, {
    C$: function () {
        return h;
    },
    Se: function () {
        return _;
    }
});
var i = r(100527),
    a = r(717401),
    o = r(474936),
    s = r(981631),
    l = r(388032),
    u = r(36128),
    c = r(501536),
    d = r(210055),
    f = r(142755);
let p = [
        {
            skuId: '1326347611069874277',
            assetId: 'a_89b499793e86bf459a8dd4f02ad416f4'
        }
    ],
    h = 2,
    _ = {
        rewards: p,
        rewardAssetIdMap: (0, a.YV)(p),
        dismissibleContentVersion: h,
        eligiblePlanIds: [o.Xh.PREMIUM_YEAR_TIER_2, o.Xh.PREMIUM_MONTH_TIER_2],
        planSelection: {
            heading: () => l.intl.string(l.t['o2XB4+']),
            gradient: ['rgba(255, 144, 144, 1)', 'rgba(243, 14, 216, 1)'],
            getImageUrl: () => u.Z,
            getBackgroundImageUrl: () => d.Z
        },
        chatGiftIcon: {
            trinketsAnimation: {
                getAnimationData: () => r(357470),
                getGlowAnimationData: () => r(803050)
            }
        },
        firstTimeNotice: {
            getImageUrl: (e, n) => (n ? u.Z : f.Z),
            title: () => l.intl.string(l.t.hFzI4u),
            description: () => l.intl.string(l.t.B7R16u),
            cta: () => l.intl.string(l.t.RzWDqa),
            analyticsLocation: i.Z.VALENTINES_GIFTING_COACHMARK,
            analyticsPage: s.ZY5.PREMIUM_UPSELL_VALENTINES_GIFTING_CAMPAIGN
        },
        planSelectionBanner: {
            desktopBannerText: () => l.intl.string(l.t['wxgA+v']),
            mobileBannerText: () => l.intl.string(l.t.d4uO8v),
            getImageUrl: () => '',
            gradient: () => ['rgba(255, 144, 144, 1)', 'rgba(243, 14, 216, 1)']
        },
        billingSettingsMarketingBanner: {
            getAnimatedImageUrl: () => f.Z,
            getStaticImageUrl: () => u.Z,
            getBackgroundImageUrl: () => c.Z,
            title: () => l.intl.string(l.t.hFzI4u),
            body: () => l.intl.string(l.t.rbWKaW)
        },
        giftPurchaseConfirmation: {
            yearGiftText: l.t.p0pZXF,
            monthGiftText: l.t['4ZJ+7e'],
            collectRewardButtonText: () => l.intl.string(l.t.kMYVws),
            rewardCollectedText: () => l.intl.string(l.t.eZrmtr)
        }
    };
