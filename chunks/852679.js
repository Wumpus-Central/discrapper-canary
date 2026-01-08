n.d(t, { Z: () => _ }), n(388685);
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(668781),
    o = n(355467),
    s = n(821849),
    l = n(78839),
    c = n(626135),
    u = n(74538),
    d = n(981631),
    f = n(388032);
let p = "guild-boost-purchase-modal";
async function _(e) {
    let {
            analyticsLocations: t,
            analyticsLocation: _,
            analyticsSourceLocation: m,
            guildId: h,
            closeLayer: g,
            onCloseModal: E,
            totalNumberOfSlotsToAssign: b = 1,
            disablePremiumUpsell: y,
            onSubscribeComplete: O,
            onSubscriptionConfirmation: v,
            inPopout: S,
            applicationId: I,
            intent: T,
        } = e,
        C = S ? i.u1M : i.z1l,
        A = l.Z.getPremiumTypeSubscription();
    if (null != A && A.isPurchasedExternally && null != A.paymentGateway) {
        null != g && g(),
            a.Z.show({
                title: f.intl.formatToPlainString(f.t["rTk9v/"], { paymentGatewayName: d.Vzj[A.paymentGateway] }),
                body: f.intl.format(f.t.NY03WF, {
                    paymentGatewayName: d.Vzj[A.paymentGateway],
                    subscriptionManagementLink: (0, u.JE)(A.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
                }),
            });
        return;
    }
    Promise.all([(0, o.tZ)(), (0, s.Y2)()]);
    let N = () => {
        c.default.track(d.rMx.MODAL_DISMISSED, {
            type: d.jXE.PREMIUM_GUILD_PURCHASE_MODAL,
            location: _,
        });
    };
    await (0, i.ZDy)(
        async () => {
            let { default: e } = await n.e("28793").then(n.bind(n, 343649));
            return (n) => {
                let { transitionState: i, onClose: a } = n;
                return (0, r.jsx)(e, {
                    transitionState: i,
                    onClose: (e) => {
                        a(), null == E || E(e);
                    },
                    analyticsLocations: t,
                    analyticsLocation: _,
                    analyticsSourceLocation: null != m ? m : _,
                    guildId: h,
                    totalNumberOfSlotsToAssign: b,
                    closeGuildPerksModal: g,
                    disablePremiumUpsell: y,
                    onSubscriptionConfirmation: v,
                    onSubscribeComplete: O,
                    applicationId: I,
                    intent: T,
                });
            };
        },
        {
            modalKey: p,
            onCloseCallback: N,
            onCloseRequest: () => {
                (0, i.Mr3)(p), null == E || E(!1);
            },
            contextKey: C,
        },
    );
}
