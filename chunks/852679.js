n.d(t, { Z: () => p }), n(388685);
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(668781),
    o = n(355467),
    s = n(821849),
    l = n(78839),
    c = n(626135),
    u = n(74538),
    d = n(981631),
    f = n(388032);
let _ = "guild-boost-purchase-modal";
async function p(e) {
    let {
            analyticsLocations: t,
            analyticsLocation: p,
            analyticsSourceLocation: h,
            guildId: m,
            closeLayer: g,
            onCloseModal: E,
            totalNumberOfSlotsToAssign: b = 1,
            disablePremiumUpsell: y,
            onSubscribeComplete: O,
            onSubscriptionConfirmation: v,
            inPopout: I,
            applicationId: T,
            intent: S,
        } = e,
        A = I ? i.u1M : i.z1l,
        C = l.Z.getPremiumTypeSubscription();
    if (null != C && C.isPurchasedExternally && null != C.paymentGateway) {
        null != g && g(),
            a.Z.show({
                title: f.intl.formatToPlainString(f.t["rTk9v/"], { paymentGatewayName: d.Vzj[C.paymentGateway] }),
                body: f.intl.format(f.t.NY03WF, {
                    paymentGatewayName: d.Vzj[C.paymentGateway],
                    subscriptionManagementLink: (0, u.JE)(C.paymentGateway, "SUBSCRIPTION_MANAGEMENT"),
                }),
            });
        return;
    }
    Promise.all([(0, o.tZ)(), (0, s.Y2)()]);
    let N = () => {
        c.default.track(d.rMx.MODAL_DISMISSED, {
            type: d.jXE.PREMIUM_GUILD_PURCHASE_MODAL,
            location: p,
        });
    };
    await (0, i.ZDy)(
        async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 343649));
            return (n) => {
                let { transitionState: i, onClose: a } = n;
                return (0, r.jsx)(e, {
                    transitionState: i,
                    onClose: (e) => {
                        a(), null == E || E(e);
                    },
                    analyticsLocations: t,
                    analyticsLocation: p,
                    analyticsSourceLocation: null != h ? h : p,
                    guildId: m,
                    totalNumberOfSlotsToAssign: b,
                    closeGuildPerksModal: g,
                    disablePremiumUpsell: y,
                    onSubscriptionConfirmation: v,
                    onSubscribeComplete: O,
                    applicationId: T,
                    intent: S,
                });
            };
        },
        {
            modalKey: _,
            onCloseCallback: N,
            onCloseRequest: () => {
                (0, i.Mr3)(_), null == E || E(!1);
            },
            contextKey: A,
        },
    );
}
