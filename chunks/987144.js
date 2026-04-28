a.d(t, { g: () => _ }), a(321073);
var n = a(627968);
a(64700);
var l = a(231723),
    r = a(192308),
    i = a(820739),
    s = a(73825),
    o = a(323082),
    c = a(287809),
    d = a(178368),
    u = a(97352),
    h = a(473145),
    p = a(212637),
    m = a(652215);
let f = "apply-guild-boost-modal";
async function _(e) {
    let {
            analyticsLocations: t,
            analyticsLocation: _,
            analyticsSourceLocation: b,
            numberOfBoostsToAdd: g,
            onClose: x,
            onLoading: v,
            closeLayer: A,
            onSubscriptionConfirmation: E,
            onSubscribeComplete: y,
            guild: I,
            handleSubscribeModalClose: S,
            disablePremiumUpsell: j,
            inPopout: C,
            applicationId: T,
            intent: w,
        } = e,
        R = C ? l.KX : l.SY,
        N = c.default.getCurrentUser();
    if (null == N) return;
    if (!N.verified)
        return void (0, r.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([a.e("12206"), a.e("90406")]).then(a.bind(a, 661925));
                return (t) => {
                    let { onClose: a, ...l } = t;
                    return (0, n.jsx)(e, { ...l, onClose: a });
                };
            },
            { contextKey: R },
        );
    let k = [];
    u.A.isLoadedForPremiumSKUs() || k.push((0, s.zS)()),
        d.A.hasFetched || (k.push(o.hP()), k.push((0, i.CD)())),
        k.length > 0 && (v?.(!0), await Promise.allSettled(k), v?.(!1));
    let L = (0, h.D$)(d.A.boostSlots),
        O = L.length,
        M = (e) => {
            x?.(), S?.(e);
        };
    if (O > 0 && (null == g || O >= g)) {
        let e;
        1 === O ? (e = L.slice(0, 1)) : null != g && (e = L.slice(0, g)),
            await (0, r.openModalLazy)(
                async () => {
                    let { default: t } = await Promise.all([
                        a.e("45174"),
                        a.e("85519"),
                        a.e("62175"),
                        a.e("96817"),
                        a.e("38249"),
                        a.e("26558"),
                    ]).then(a.bind(a, 724624));
                    return (a) => {
                        let { onClose: l, ...r } = a;
                        return (0, n.jsx)(t, {
                            ...r,
                            onClose: (e) => {
                                l(), M(e);
                            },
                            selectedGuild: I,
                            locationSection: m.liQ.PREMIUM_GUILD_USER_MODAL,
                            guildBoostSlots: e,
                            intent: w,
                        });
                    };
                },
                {
                    modalKey: f,
                    onCloseRequest: () => {
                        (0, r.closeModal)(f), M(!1);
                    },
                    contextKey: R,
                },
            );
    } else
        (0, p.A)({
            analyticsLocations: t,
            analyticsLocation: _,
            analyticsSourceLocation: b,
            guildId: I.id,
            closeLayer: () => {
                x?.(), A?.();
            },
            totalNumberOfSlotsToAssign: g ?? 1,
            onCloseModal: M,
            disablePremiumUpsell: j,
            onSubscriptionConfirmation: E,
            onSubscribeComplete: y,
            inPopout: C,
            applicationId: T,
            intent: w,
        });
}
