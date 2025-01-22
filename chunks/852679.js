r.d(n, {
    Z: function () {
        return m;
    }
});
var i = r(47120);
var a = r(200651);
r(192379);
var o = r(481060),
    s = r(668781),
    l = r(355467),
    u = r(821849),
    c = r(78839),
    d = r(626135),
    f = r(74538),
    p = r(981631),
    h = r(388032);
let _ = 'guild-boost-purchase-modal';
async function m(e) {
    let { analyticsLocations: n, analyticsLocation: i, analyticsSourceLocation: m, guildId: g, closeLayer: E, onCloseModal: v, totalNumberOfSlotsToAssign: y = 1, disablePremiumUpsell: b, onSubscriptionConfirmation: I, inPopout: T, applicationId: S } = e,
        A = T ? o.POPOUT_MODAL_CONTEXT : o.DEFAULT_MODAL_CONTEXT,
        C = c.ZP.getPremiumTypeSubscription();
    if (null != C && C.isPurchasedExternally && null != C.paymentGateway) {
        null != E && E(),
            s.Z.show({
                title: h.intl.formatToPlainString(h.t.rTk9v7, { paymentGatewayName: p.Vzj[C.paymentGateway] }),
                body: h.intl.format(h.t.NY03WF, {
                    paymentGatewayName: p.Vzj[C.paymentGateway],
                    subscriptionManagementLink: (0, f.JE)(C.paymentGateway, 'SUBSCRIPTION_MANAGEMENT')
                })
            });
        return;
    }
    Promise.all([(0, l.tZ)(), (0, u.Y2)()]);
    let N = () => {
        d.default.track(p.rMx.MODAL_DISMISSED, {
            type: p.jXE.PREMIUM_GUILD_PURCHASE_MODAL,
            location: i
        });
    };
    await (0, o.openModalLazy)(
        async () => {
            let { default: e } = await Promise.all([r.e('8016'), r.e('22646'), r.e('53122')]).then(r.bind(r, 343649));
            return (r) => {
                let { transitionState: o, onClose: s } = r;
                return (0, a.jsx)(e, {
                    transitionState: o,
                    onClose: (e) => {
                        s(), null == v || v(e);
                    },
                    analyticsLocations: n,
                    analyticsLocation: i,
                    analyticsSourceLocation: null != m ? m : i,
                    guildId: g,
                    totalNumberOfSlotsToAssign: y,
                    closeGuildPerksModal: E,
                    disablePremiumUpsell: b,
                    onSubscriptionConfirmation: I,
                    applicationId: S
                });
            };
        },
        {
            modalKey: _,
            onCloseCallback: N,
            onCloseRequest: () => {
                (0, o.closeModal)(_), null == v || v(!1);
            },
            contextKey: A
        }
    );
}
