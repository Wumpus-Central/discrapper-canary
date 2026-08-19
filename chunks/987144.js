i.d(t, { g: () => T }), i(321073);
var s = i(477900);
i(582128);
var n = i(231723),
    r = i(192308),
    l = i(820739),
    a = i(73825),
    o = i(277984),
    c = i(287809),
    d = i(178368),
    u = i(97352),
    m = i(473145),
    g = i(212637),
    h = i(652215);
let p = "apply-guild-boost-modal";
async function T(e) {
    let {
            analyticsLocations: t,
            analyticsLocation: T,
            analyticsSourceLocation: E,
            numberOfBoostsToAdd: _,
            onClose: f,
            onLoading: v,
            closeLayer: A,
            onSubscriptionConfirmation: x,
            onSubscribeComplete: I,
            guild: S,
            handleSubscribeModalClose: R,
            disablePremiumUpsell: b,
            inPopout: N,
            applicationId: j,
            intent: C,
        } = e,
        y = N ? n.KX : n.SY,
        G = c.default.getCurrentUser();
    if (null == G) return;
    if (!G.verified)
        return void (0, r.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    i.e("928873"),
                    i.e("874913"),
                    i.e("112206"),
                    i.e("590406"),
                ]).then(i.bind(i, 661925));
                return (t) => {
                    let { onClose: i, ...n } = t;
                    return (0, s.jsx)(e, { ...n, onClose: i });
                };
            },
            { contextKey: y },
        );
    let V = [];
    u.A.isLoadedForPremiumSKUs() || V.push((0, a.zS)()),
        d.A.hasFetched || (V.push(o.hP()), V.push((0, l.CD)())),
        V.length > 0 && (v?.(!0), await Promise.allSettled(V), v?.(!1));
    let M = (0, m.D$)(d.A.boostSlots),
        P = M.length;
    function U(e) {
        f?.(), R?.(e);
    }
    if (P > 0 && (null == _ || P >= _)) {
        let e;
        1 === P ? (e = M.slice(0, 1)) : null != _ && (e = M.slice(0, _)),
            await (0, r.openModalLazy)(
                async () => {
                    let { default: t } = await Promise.all([
                        i.e("295570"),
                        i.e("45852"),
                        i.e("677508"),
                        i.e("1955"),
                        i.e("341161"),
                        i.e("401696"),
                        i.e("661630"),
                        i.e("542516"),
                        i.e("552653"),
                        i.e("758053"),
                        i.e("410470"),
                        i.e("889002"),
                        i.e("752457"),
                        i.e("489088"),
                        i.e("894747"),
                        i.e("444376"),
                        i.e("747017"),
                        i.e("423532"),
                        i.e("367022"),
                        i.e("225990"),
                        i.e("228843"),
                        i.e("509793"),
                        i.e("858164"),
                        i.e("571470"),
                        i.e("610943"),
                        i.e("995602"),
                        i.e("322455"),
                        i.e("534428"),
                        i.e("693173"),
                        i.e("418710"),
                        i.e("238249"),
                    ]).then(i.bind(i, 724624));
                    return (i) => {
                        let { onClose: n, ...r } = i;
                        return (0, s.jsx)(t, {
                            ...r,
                            onClose: (e) => {
                                n(), U(e);
                            },
                            selectedGuild: S,
                            locationSection: h.liQ.PREMIUM_GUILD_USER_MODAL,
                            guildBoostSlots: e,
                            intent: C,
                        });
                    };
                },
                {
                    modalKey: p,
                    onCloseRequest: () => {
                        (0, r.closeModal)(p), U(!1);
                    },
                    contextKey: y,
                },
            );
    } else
        (0, g.A)({
            analyticsLocations: t,
            analyticsLocation: T,
            analyticsSourceLocation: E,
            guildId: S.id,
            closeLayer: function () {
                f?.(), A?.();
            },
            totalNumberOfSlotsToAssign: _ ?? 1,
            onCloseModal: U,
            disablePremiumUpsell: b,
            onSubscriptionConfirmation: x,
            onSubscribeComplete: I,
            inPopout: N,
            applicationId: j,
            intent: C,
        });
}
