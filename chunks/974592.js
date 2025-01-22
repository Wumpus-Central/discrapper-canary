r.d(n, {
    C$: function () {
        return p;
    },
    Se: function () {
        return h;
    }
});
var i = r(100527),
    a = r(717401),
    o = r(981631),
    s = r(388032),
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
    p = 2,
    h = {
        rewards: f,
        rewardAssetIdMap: (0, a.YV)(f),
        dismissibleContentVersion: p,
        planSelection: {
            heading: () => s.intl.string(s.t['o2XB4+']),
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
            title: () => s.intl.string(s.t.hFzI4u),
            description: () => s.intl.string(s.t.B7R16u),
            cta: () => s.intl.string(s.t.RzWDqa),
            analyticsLocation: i.Z.VALENTINES_GIFTING_COACHMARK,
            analyticsPage: o.ZY5.PREMIUM_UPSELL_VALENTINES_GIFTING_CAMPAIGN
        },
        planSelectionBanner: {
            desktopBannerText: () => s.intl.string(s.t['wxgA+v']),
            mobileBannerText: () => s.intl.string(s.t.d4uO8v),
            getImageUrl: () => '',
            gradient: () => ['rgba(255, 144, 144, 1)', 'rgba(243, 14, 216, 1)']
        },
        billingSettingsMarketingBanner: {
            getAnimatedImageUrl: () => d.Z,
            getStaticImageUrl: () => l.Z,
            getBackgroundImageUrl: () => u.Z,
            title: () => s.intl.string(s.t.hFzI4u),
            body: () => s.intl.string(s.t.rbWKaW)
        }
    };
