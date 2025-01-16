r.d(n, {
    C$: function () {
        return d;
    },
    Se: function () {
        return f;
    }
});
var i = r(100527),
    a = r(981631),
    s = r(388032),
    o = r(36128),
    l = r(501536),
    u = r(210055),
    c = r(142755);
let d = 2,
    f = {
        rewards: [
            {
                skuId: '1326347611069874277',
                assetId: 'a_89b499793e86bf459a8dd4f02ad416f4'
            }
        ],
        dismissibleContentVersion: 2,
        planSelection: {
            heading: () => s.intl.string(s.t['o2XB4+']),
            gradient: ['#FF9090', '#F30ED8'],
            getImageUrl: () => o.Z,
            getBackgroundImageUrl: () => u.Z
        },
        chatGiftIcon: {
            trinketsAnimation: {
                getAnimationData: () => r(357470),
                getGlowAnimationData: () => r(803050)
            }
        },
        firstTimeNotice: {
            getImageUrl: (e, n) => (n ? o.Z : c.Z),
            title: () => s.intl.string(s.t.hFzI4u),
            description: () => s.intl.string(s.t.B7R16u),
            cta: () => s.intl.string(s.t.RzWDqa),
            analyticsLocation: i.Z.VALENTINES_GIFTING_COACHMARK,
            analyticsPage: a.ZY5.PREMIUM_UPSELL_VALENTINES_GIFTING_CAMPAIGN
        },
        billingSettingsMarketingBanner: {
            getAnimatedImageUrl: () => c.Z,
            getStaticImageUrl: () => o.Z,
            getBackgroundImageUrl: () => l.Z,
            title: () => s.intl.string(s.t.hFzI4u),
            body: () => s.intl.string(s.t.rbWKaW)
        }
    };
