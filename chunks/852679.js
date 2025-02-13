n.d(t, { Z: () => p }), n(47120);
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(668781),
    s = n(355467),
    o = n(821849),
    l = n(78839),
    u = n(626135),
    c = n(74538),
    d = n(981631),
    f = n(388032);
let _ = 'guild-boost-purchase-modal';
async function p(e) {
    let { analyticsLocations: t, analyticsLocation: p, analyticsSourceLocation: h, guildId: m, closeLayer: g, onCloseModal: E, totalNumberOfSlotsToAssign: v = 1, disablePremiumUpsell: y, onSubscriptionConfirmation: I, inPopout: T, applicationId: b } = e,
        S = T ? r.u1M : r.z1l,
        A = l.ZP.getPremiumTypeSubscription();
    if (null != A && A.isPurchasedExternally && null != A.paymentGateway) {
        null != g && g(),
            a.Z.show({
                title: f.intl.formatToPlainString(f.t.rTk9v7, { paymentGatewayName: d.Vzj[A.paymentGateway] }),
                body: f.intl.format(f.t.NY03WF, {
                    paymentGatewayName: d.Vzj[A.paymentGateway],
                    subscriptionManagementLink: (0, c.JE)(A.paymentGateway, 'SUBSCRIPTION_MANAGEMENT')
                })
            });
        return;
    }
    Promise.all([(0, s.tZ)(), (0, o.Y2)()]);
    let N = () => {
        u.default.track(d.rMx.MODAL_DISMISSED, {
            type: d.jXE.PREMIUM_GUILD_PURCHASE_MODAL,
            location: p
        });
    };
    await (0, r.ZDy)(
        async () => {
            let { default: e } = await Promise.all([n.e('8016'), n.e('22646'), n.e('50283')]).then(n.bind(n, 343649));
            return (n) => {
                let { transitionState: r, onClose: a } = n;
                return (0, i.jsx)(e, {
                    transitionState: r,
                    onClose: (e) => {
                        a(), null == E || E(e);
                    },
                    analyticsLocations: t,
                    analyticsLocation: p,
                    analyticsSourceLocation: null != h ? h : p,
                    guildId: m,
                    totalNumberOfSlotsToAssign: v,
                    closeGuildPerksModal: g,
                    disablePremiumUpsell: y,
                    onSubscriptionConfirmation: I,
                    applicationId: b
                });
            };
        },
        {
            modalKey: _,
            onCloseCallback: N,
            onCloseRequest: () => {
                (0, r.Mr3)(_), null == E || E(!1);
            },
            contextKey: S
        }
    );
}
