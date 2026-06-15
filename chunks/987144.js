a.d(t, { g: () => h }), a(321073);
var l = a(627968);
a(64700);
var o = a(231723),
    n = a(192308),
    i = a(820739),
    s = a(73825),
    r = a(753390),
    u = a(287809),
    d = a(178368),
    c = a(97352),
    m = a(473145),
    y = a(212637),
    p = a(652215);
let S = "apply-guild-boost-modal";
async function h(e) {
    let {
            analyticsLocations: t,
            analyticsLocation: h,
            analyticsSourceLocation: b,
            numberOfBoostsToAdd: C,
            onClose: M,
            onLoading: f,
            closeLayer: w,
            onSubscriptionConfirmation: A,
            onSubscribeComplete: P,
            guild: g,
            handleSubscribeModalClose: L,
            disablePremiumUpsell: G,
            inPopout: I,
            applicationId: U,
            intent: _,
        } = e,
        k = I ? o.KX : o.SY,
        D = u.default.getCurrentUser();
    if (null == D) return;
    if (!D.verified)
        return void (0, n.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([a.e("54681"), a.e("74913"), a.e("12206"), a.e("90406")]).then(
                    a.bind(a, 661925),
                );
                return (t) => {
                    let { onClose: a, ...o } = t;
                    return (0, l.jsx)(e, { ...o, onClose: a });
                };
            },
            { contextKey: k },
        );
    let E = [];
    c.A.isLoadedForPremiumSKUs() || E.push((0, s.zS)()),
        d.A.hasFetched || (E.push(r.hP()), E.push((0, i.CD)())),
        E.length > 0 && (f?.(!0), await Promise.allSettled(E), f?.(!1));
    let N = (0, m.D$)(d.A.boostSlots),
        v = N.length,
        R = (e) => {
            M?.(), L?.(e);
        };
    if (v > 0 && (null == C || v >= C)) {
        let e;
        1 === v ? (e = N.slice(0, 1)) : null != C && (e = N.slice(0, C)),
            await (0, n.openModalLazy)(
                async () => {
                    let { default: t } = await Promise.all([
                        a.e("60940"),
                        a.e("44250"),
                        a.e("76631"),
                        a.e("48530"),
                        a.e("19393"),
                        a.e("23294"),
                        a.e("42515"),
                        a.e("68261"),
                        a.e("96643"),
                        a.e("54048"),
                        a.e("3932"),
                        a.e("62175"),
                        a.e("88941"),
                        a.e("44376"),
                        a.e("47017"),
                        a.e("25990"),
                        a.e("23532"),
                        a.e("52557"),
                        a.e("58164"),
                        a.e("71470"),
                        a.e("10943"),
                        a.e("95602"),
                        a.e("5896"),
                        a.e("22455"),
                        a.e("9793"),
                        a.e("96817"),
                        a.e("18710"),
                        a.e("34428"),
                        a.e("38249"),
                    ]).then(a.bind(a, 724624));
                    return (a) => {
                        let { onClose: o, ...n } = a;
                        return (0, l.jsx)(t, {
                            ...n,
                            onClose: (e) => {
                                o(), R(e);
                            },
                            selectedGuild: g,
                            locationSection: p.liQ.PREMIUM_GUILD_USER_MODAL,
                            guildBoostSlots: e,
                            intent: _,
                        });
                    };
                },
                {
                    modalKey: S,
                    onCloseRequest: () => {
                        (0, n.closeModal)(S), R(!1);
                    },
                    contextKey: k,
                },
            );
    } else
        (0, y.A)({
            analyticsLocations: t,
            analyticsLocation: h,
            analyticsSourceLocation: b,
            guildId: g.id,
            closeLayer: () => {
                M?.(), w?.();
            },
            totalNumberOfSlotsToAssign: C ?? 1,
            onCloseModal: R,
            disablePremiumUpsell: G,
            onSubscriptionConfirmation: A,
            onSubscribeComplete: P,
            inPopout: I,
            applicationId: U,
            intent: _,
        });
}
