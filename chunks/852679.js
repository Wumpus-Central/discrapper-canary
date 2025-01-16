r.d(n, {
    Z: function () {
        return m;
    }
});
var i = r(47120);
var a = r(200651);
r(192379);
var s = r(481060),
    o = r(668781),
    l = r(355467),
    u = r(821849),
    c = r(78839),
    d = r(626135),
    f = r(74538),
    _ = r(981631),
    h = r(388032);
let p = 'guild-boost-purchase-modal';
async function m(e) {
    let { analyticsLocations: n, analyticsLocation: i, analyticsSourceLocation: m, guildId: g, closeLayer: E, onCloseModal: v, totalNumberOfSlotsToAssign: I = 1, disablePremiumUpsell: T, onSubscriptionConfirmation: b, inPopout: y, applicationId: S } = e,
        A = y ? s.POPOUT_MODAL_CONTEXT : s.DEFAULT_MODAL_CONTEXT,
        N = c.ZP.getPremiumTypeSubscription();
    if (null != N && N.isPurchasedExternally && null != N.paymentGateway) {
        null != E && E(),
            o.Z.show({
                title: h.intl.formatToPlainString(h.t.rTk9v7, { paymentGatewayName: _.Vzj[N.paymentGateway] }),
                body: h.intl.format(h.t.NY03WF, {
                    paymentGatewayName: _.Vzj[N.paymentGateway],
                    subscriptionManagementLink: (0, f.JE)(N.paymentGateway, 'SUBSCRIPTION_MANAGEMENT')
                })
            });
        return;
    }
    Promise.all([(0, l.tZ)(), (0, u.Y2)()]);
    let C = () => {
        d.default.track(_.rMx.MODAL_DISMISSED, {
            type: _.jXE.PREMIUM_GUILD_PURCHASE_MODAL,
            location: i
        });
    };
    await (0, s.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([r.e('77298'), r.e('23357'), r.e('12013'), r.e('52249'), r.e('68956'), r.e('8016'), r.e('22646'), r.e('70269')]).then(r.bind(r, 343649));
            return (r) => {
                let { transitionState: s, onClose: o } = r;
                return (0, a.jsx)(e, {
                    transitionState: s,
                    onClose: (e) => {
                        o(), null == v || v(e);
                    },
                    analyticsLocations: n,
                    analyticsLocation: i,
                    analyticsSourceLocation: null != m ? m : i,
                    guildId: g,
                    totalNumberOfSlotsToAssign: I,
                    closeGuildPerksModal: E,
                    disablePremiumUpsell: T,
                    onSubscriptionConfirmation: b,
                    applicationId: S
                });
            };
        },
        {
            modalKey: p,
            onCloseCallback: C,
            onCloseRequest: () => {
                (0, s.closeModal)(p), null == v || v(!1);
            },
            contextKey: A
        }
    );
}
