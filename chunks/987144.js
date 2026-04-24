a.d(t, { g: () => b }), a(321073);
var r = a(627968);
a(64700);
var n = a(231723),
    l = a(192308),
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
async function b(e) {
    let {
            analyticsLocations: t,
            analyticsLocation: b,
            analyticsSourceLocation: _,
            numberOfBoostsToAdd: g,
            onClose: x,
            onLoading: v,
            closeLayer: A,
            onSubscriptionConfirmation: y,
            onSubscribeComplete: E,
            guild: I,
            handleSubscribeModalClose: S,
            disablePremiumUpsell: j,
            inPopout: C,
            applicationId: T,
            intent: R,
        } = e,
        w = C ? n.KX : n.SY,
        k = c.default.getCurrentUser();
    if (null == k) return;
    if (!k.verified)
        return void (0, l.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([a.e("12206"), a.e("90406")]).then(a.bind(a, 661925));
                return (t) => {
                    let { onClose: a, ...n } = t;
                    return (0, r.jsx)(e, { ...n, onClose: a });
                };
            },
            { contextKey: w },
        );
    let L = [];
    u.A.isLoadedForPremiumSKUs() || L.push((0, s.zS)()),
        d.A.hasFetched || (L.push(o.hP()), L.push((0, i.CD)())),
        L.length > 0 && (v?.(!0), await Promise.allSettled(L), v?.(!1));
    let N = (0, h.D$)(d.A.boostSlots),
        O = N.length,
        P = (e) => {
            x?.(), S?.(e);
        };
    if (O > 0 && (null == g || O >= g)) {
        let e;
        1 === O ? (e = N.slice(0, 1)) : null != g && (e = N.slice(0, g)),
            await (0, l.openModalLazy)(
                async () => {
                    let { default: t } = await Promise.all([
                        a.e("45174"),
                        a.e("85519"),
                        a.e("62175"),
                        a.e("96817"),
                        a.e("38249"),
                        a.e("95024"),
                    ]).then(a.bind(a, 724624));
                    return (a) => {
                        let { onClose: n, ...l } = a;
                        return (0, r.jsx)(t, {
                            ...l,
                            onClose: (e) => {
                                n(), P(e);
                            },
                            selectedGuild: I,
                            locationSection: m.liQ.PREMIUM_GUILD_USER_MODAL,
                            guildBoostSlots: e,
                            intent: R,
                        });
                    };
                },
                {
                    modalKey: f,
                    onCloseRequest: () => {
                        (0, l.closeModal)(f), P(!1);
                    },
                    contextKey: w,
                },
            );
    } else
        (0, p.A)({
            analyticsLocations: t,
            analyticsLocation: b,
            analyticsSourceLocation: _,
            guildId: I.id,
            closeLayer: () => {
                x?.(), A?.();
            },
            totalNumberOfSlotsToAssign: g ?? 1,
            onCloseModal: P,
            disablePremiumUpsell: j,
            onSubscriptionConfirmation: y,
            onSubscribeComplete: E,
            inPopout: C,
            applicationId: T,
            intent: R,
        });
}
