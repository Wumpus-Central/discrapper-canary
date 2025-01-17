r.d(n, {
    C$: function () {
        return _;
    },
    Se: function () {
        return h;
    }
});
var i = r(100527),
    a = r(717401),
    s = r(981631),
    o = r(388032),
    l = r(36128),
    u = r(501536),
    c = r(210055),
    d = r(142755);
let f = [
        {
            skuId: '1326347611069874277',
            assetId: 'a_89b499793e86bf459a8dd4f02ad416f4'
        }
    ],
    _ = 2,
    h = {
        rewards: f,
        rewardAssetIdMap: (0, a.YV)(f),
        dismissibleContentVersion: _,
        planSelection: {
            heading: () => o.intl.string(o.t['o2XB4+']),
            gradient: ['rgba(255, 144, 144, 1)', 'rgba(243, 14, 216, 1)'],
            getImageUrl: () => l.Z,
            getBackgroundImageUrl: () => c.Z
        },
        chatGiftIcon: {
            trinketsAnimation: {
                getAnimationData: () => r(357470),
                getGlowAnimationData: () => r(803050)
            }
        },
        firstTimeNotice: {
            getImageUrl: (e, n) => (n ? l.Z : d.Z),
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
        }
    };
