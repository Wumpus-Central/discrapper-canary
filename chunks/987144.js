(a.d(t, { g: () => S }), a(321073));
var l = a(477900);
a(582128);
var o = a(231723),
    n = a(192308),
    i = a(820739),
    s = a(73825),
    r = a(277984),
    u = a(287809),
    d = a(178368),
    c = a(97352),
    p = a(473145),
    m = a(473161),
    y = a(652215);
let h = "apply-guild-boost-modal";
async function S(e) {
    let {
            analyticsLocations: t,
            analyticsLocation: S,
            analyticsSourceLocation: C,
            numberOfBoostsToAdd: P,
            onClose: f,
            onLoading: M,
            closeLayer: A,
            onSubscriptionConfirmation: b,
            onSubscribeComplete: w,
            guild: g,
            handleSubscribeModalClose: k,
            disablePremiumUpsell: G,
            inPopout: I,
            applicationId: L,
            intent: U,
        } = e,
        _ = I ? o.KX : o.SY,
        D = u.default.getCurrentUser();
    if (null == D) return;
    if (!D.verified)
        return void (0, n.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    a.e("928873"),
                    a.e("874913"),
                    a.e("112206"),
                    a.e("590406"),
                ]).then(a.bind(a, 661925));
                return (t) => {
                    let { onClose: a, ...o } = t;
                    return (0, l.jsx)(e, { ...o, onClose: a });
                };
            },
            { contextKey: _ },
        );
    let O = [];
    (c.A.isLoadedForPremiumSKUs() || O.push((0, s.zS)()),
        d.A.hasFetched || (O.push(r.hP()), O.push((0, i.CD)())),
        O.length > 0 && (M?.(!0), await Promise.allSettled(O), M?.(!1)));
    let E = (0, p.D$)(d.A.boostSlots),
        v = E.length;
    function T(e) {
        (f?.(), k?.(e));
    }
    if (v > 0 && (null == P || v >= P)) {
        let e;
        (1 === v ? (e = E.slice(0, 1)) : null != P && (e = E.slice(0, P)),
            await (0, n.openModalLazy)(
                async () => {
                    let { default: t } = await Promise.all([
                        a.e("295570"),
                        a.e("378357"),
                        a.e("831377"),
                        a.e("870528"),
                        a.e("454048"),
                        a.e("904448"),
                        a.e("225990"),
                        a.e("858164"),
                        a.e("444376"),
                        a.e("509793"),
                        a.e("571470"),
                        a.e("995602"),
                        a.e("205896"),
                        a.e("534428"),
                        a.e("693173"),
                        a.e("418710"),
                        a.e("739957"),
                    ]).then(a.bind(a, 335508));
                    return (a) => {
                        let { onClose: o, ...n } = a;
                        return (0, l.jsx)(t, {
                            ...n,
                            onClose: (e) => {
                                (o(), T(e));
                            },
                            selectedGuild: g,
                            locationSection: y.liQ.PREMIUM_GUILD_USER_MODAL,
                            guildBoostSlots: e,
                            intent: U,
                        });
                    };
                },
                {
                    modalKey: h,
                    onCloseRequest: () => {
                        ((0, n.closeModal)(h), T(!1));
                    },
                    contextKey: _,
                },
            ));
    } else
        (0, m.A)({
            analyticsLocations: t,
            analyticsLocation: S,
            analyticsSourceLocation: C,
            guildId: g.id,
            closeLayer: function () {
                (f?.(), A?.());
            },
            totalNumberOfSlotsToAssign: P ?? 1,
            onCloseModal: T,
            disablePremiumUpsell: G,
            onSubscriptionConfirmation: b,
            onSubscribeComplete: w,
            inPopout: I,
            applicationId: L,
            intent: U,
        });
}
