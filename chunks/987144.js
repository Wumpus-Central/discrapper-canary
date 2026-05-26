a.d(t, { g: () => f }), a(321073);
var l = a(627968);
a(64700);
var n = a(231723),
    o = a(192308),
    i = a(820739),
    s = a(73825),
    r = a(753390),
    u = a(287809),
    d = a(178368),
    c = a(97352),
    m = a(473145),
    p = a(212637),
    y = a(652215);
let S = "apply-guild-boost-modal";
async function f(e) {
    let {
            analyticsLocations: t,
            analyticsLocation: f,
            analyticsSourceLocation: h,
            numberOfBoostsToAdd: M,
            onClose: b,
            onLoading: C,
            closeLayer: A,
            onSubscriptionConfirmation: P,
            onSubscribeComplete: g,
            guild: w,
            handleSubscribeModalClose: L,
            disablePremiumUpsell: T,
            inPopout: v,
            applicationId: G,
            intent: I,
        } = e,
        E = v ? n.KX : n.SY,
        U = u.default.getCurrentUser();
    if (null == U) return;
    if (!U.verified)
        return void (0, o.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([a.e("54681"), a.e("74913"), a.e("12206"), a.e("90406")]).then(
                    a.bind(a, 661925),
                );
                return (t) => {
                    let { onClose: a, ...n } = t;
                    return (0, l.jsx)(e, { ...n, onClose: a });
                };
            },
            { contextKey: E },
        );
    let _ = [];
    c.A.isLoadedForPremiumSKUs() || _.push((0, s.zS)()),
        d.A.hasFetched || (_.push(r.hP()), _.push((0, i.CD)())),
        _.length > 0 && (C?.(!0), await Promise.allSettled(_), C?.(!1));
    let k = (0, m.D$)(d.A.boostSlots),
        D = k.length,
        N = (e) => {
            b?.(), L?.(e);
        };
    if (D > 0 && (null == M || D >= M)) {
        let e;
        1 === D ? (e = k.slice(0, 1)) : null != M && (e = k.slice(0, M)),
            await (0, o.openModalLazy)(
                async () => {
                    let { default: t } = await Promise.all([
                        a.e("92646"),
                        a.e("34053"),
                        a.e("5389"),
                        a.e("26705"),
                        a.e("96643"),
                        a.e("54048"),
                        a.e("44376"),
                        a.e("47017"),
                        a.e("25990"),
                        a.e("58164"),
                        a.e("71470"),
                        a.e("10943"),
                        a.e("95602"),
                        a.e("5896"),
                        a.e("62175"),
                        a.e("22455"),
                        a.e("9793"),
                        a.e("96817"),
                        a.e("18710"),
                        a.e("34428"),
                        a.e("38249"),
                    ]).then(a.bind(a, 724624));
                    return (a) => {
                        let { onClose: n, ...o } = a;
                        return (0, l.jsx)(t, {
                            ...o,
                            onClose: (e) => {
                                n(), N(e);
                            },
                            selectedGuild: w,
                            locationSection: y.liQ.PREMIUM_GUILD_USER_MODAL,
                            guildBoostSlots: e,
                            intent: I,
                        });
                    };
                },
                {
                    modalKey: S,
                    onCloseRequest: () => {
                        (0, o.closeModal)(S), N(!1);
                    },
                    contextKey: E,
                },
            );
    } else
        (0, p.A)({
            analyticsLocations: t,
            analyticsLocation: f,
            analyticsSourceLocation: h,
            guildId: w.id,
            closeLayer: () => {
                b?.(), A?.();
            },
            totalNumberOfSlotsToAssign: M ?? 1,
            onCloseModal: N,
            disablePremiumUpsell: T,
            onSubscriptionConfirmation: P,
            onSubscribeComplete: g,
            inPopout: v,
            applicationId: G,
            intent: I,
        });
}
