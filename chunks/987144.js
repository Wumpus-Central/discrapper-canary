(l.d(t, { g: () => C }), l(321073));
var a = l(477900);
l(582128);
var n = l(231723),
    o = l(192308),
    i = l(820739),
    s = l(73825),
    r = l(277984),
    u = l(287809),
    d = l(178368),
    c = l(97352),
    p = l(473145),
    m = l(473161),
    y = l(652215);
let h = "apply-guild-boost-modal";
async function C(e) {
    let {
            analyticsLocations: t,
            analyticsLocation: C,
            analyticsSourceLocation: S,
            numberOfBoostsToAdd: P,
            onClose: f,
            onLoading: M,
            closeLayer: A,
            onSubscriptionConfirmation: b,
            onSubscribeComplete: g,
            guild: w,
            handleSubscribeModalClose: k,
            disablePremiumUpsell: I,
            inPopout: G,
            applicationId: L,
            intent: U,
        } = e,
        _ = G ? n.KX : n.SY,
        D = u.default.getCurrentUser();
    if (null == D) return;
    if (!D.verified)
        return void (0, o.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    l.e("928873"),
                    l.e("874913"),
                    l.e("112206"),
                    l.e("590406"),
                ]).then(l.bind(l, 661925));
                return (t) => {
                    let { onClose: l, ...n } = t;
                    return (0, a.jsx)(e, { ...n, onClose: l });
                };
            },
            { contextKey: _ },
        );
    let O = [];
    (c.A.isLoadedForPremiumSKUs() || O.push((0, s.zS)()),
        d.A.hasFetched || (O.push(r.hP()), O.push((0, i.CD)())),
        O.length > 0 && (M?.(!0), await Promise.allSettled(O), M?.(!1)));
    let v = (0, p.D$)(d.A.boostSlots),
        E = v.length;
    function T(e) {
        (f?.(), k?.(e));
    }
    if (E > 0 && (null == P || E >= P)) {
        let e;
        (1 === E ? (e = v.slice(0, 1)) : null != P && (e = v.slice(0, P)),
            await (0, o.openModalLazy)(
                async () => {
                    let { default: t } = await Promise.all([
                        l.e("295570"),
                        l.e("378357"),
                        l.e("831377"),
                        l.e("870528"),
                        l.e("454048"),
                        l.e("904448"),
                        l.e("225990"),
                        l.e("858164"),
                        l.e("444376"),
                        l.e("509793"),
                        l.e("571470"),
                        l.e("995602"),
                        l.e("205896"),
                        l.e("534428"),
                        l.e("693173"),
                        l.e("418710"),
                        l.e("739957"),
                    ]).then(l.bind(l, 335508));
                    return (l) => {
                        let { onClose: n, ...o } = l;
                        return (0, a.jsx)(t, {
                            ...o,
                            onClose: (e) => {
                                (n(), T(e));
                            },
                            selectedGuild: w,
                            locationSection: y.liQ.PREMIUM_GUILD_USER_MODAL,
                            guildBoostSlots: e,
                            intent: U,
                        });
                    };
                },
                {
                    modalKey: h,
                    onCloseRequest: () => {
                        ((0, o.closeModal)(h), T(!1));
                    },
                    contextKey: _,
                },
            ));
    } else
        (0, m.A)({
            analyticsLocations: t,
            analyticsLocation: C,
            analyticsSourceLocation: S,
            guildId: w.id,
            closeLayer: function () {
                (f?.(), A?.());
            },
            totalNumberOfSlotsToAssign: P ?? 1,
            onCloseModal: T,
            disablePremiumUpsell: I,
            onSubscriptionConfirmation: b,
            onSubscribeComplete: g,
            inPopout: G,
            applicationId: L,
            intent: U,
        });
}
