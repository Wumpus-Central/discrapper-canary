"use strict";
n.d(t, { g: () => E }), n(321073);
var i = n(627968);
n(64700);
var r = n(231723),
    s = n(192308),
    a = n(820739),
    o = n(73825),
    l = n(753390),
    u = n(287809),
    c = n(178368),
    d = n(97352),
    _ = n(473145),
    h = n(212637),
    f = n(652215);
let p = "apply-guild-boost-modal";
async function E(e) {
    let {
            analyticsLocations: t,
            analyticsLocation: E,
            analyticsSourceLocation: m,
            numberOfBoostsToAdd: g,
            onClose: A,
            onLoading: I,
            closeLayer: T,
            onSubscriptionConfirmation: S,
            onSubscribeComplete: y,
            guild: N,
            handleSubscribeModalClose: v,
            disablePremiumUpsell: C,
            inPopout: R,
            applicationId: O,
            intent: b,
        } = e,
        D = R ? r.KX : r.SY,
        L = u.default.getCurrentUser();
    if (null == L) return;
    if (!L.verified)
        return void (0, s.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e("54681"), n.e("74913"), n.e("12206"), n.e("90406")]).then(
                    n.bind(n, 661925),
                );
                return (t) => {
                    let { onClose: n, ...r } = t;
                    return (0, i.jsx)(e, { ...r, onClose: n });
                };
            },
            { contextKey: D },
        );
    let w = [];
    d.A.isLoadedForPremiumSKUs() || w.push((0, o.zS)()),
        c.A.hasFetched || (w.push(l.hP()), w.push((0, a.CD)())),
        w.length > 0 && (I?.(!0), await Promise.allSettled(w), I?.(!1));
    let M = (0, _.D$)(c.A.boostSlots),
        P = M.length,
        x = (e) => {
            A?.(), v?.(e);
        };
    if (P > 0 && (null == g || P >= g)) {
        let e;
        1 === P ? (e = M.slice(0, 1)) : null != g && (e = M.slice(0, g)),
            await (0, s.openModalLazy)(
                async () => {
                    let { default: t } = await Promise.all([
                        n.e("60940"),
                        n.e("44250"),
                        n.e("76631"),
                        n.e("48530"),
                        n.e("19393"),
                        n.e("23294"),
                        n.e("42515"),
                        n.e("68261"),
                        n.e("96643"),
                        n.e("54048"),
                        n.e("3932"),
                        n.e("62175"),
                        n.e("88941"),
                        n.e("44376"),
                        n.e("47017"),
                        n.e("25990"),
                        n.e("23532"),
                        n.e("52557"),
                        n.e("58164"),
                        n.e("71470"),
                        n.e("10943"),
                        n.e("95602"),
                        n.e("5896"),
                        n.e("22455"),
                        n.e("9793"),
                        n.e("96817"),
                        n.e("18710"),
                        n.e("34428"),
                        n.e("38249"),
                    ]).then(n.bind(n, 724624));
                    return (n) => {
                        let { onClose: r, ...s } = n;
                        return (0, i.jsx)(t, {
                            ...s,
                            onClose: (e) => {
                                r(), x(e);
                            },
                            selectedGuild: N,
                            locationSection: f.liQ.PREMIUM_GUILD_USER_MODAL,
                            guildBoostSlots: e,
                            intent: b,
                        });
                    };
                },
                {
                    modalKey: p,
                    onCloseRequest: () => {
                        (0, s.closeModal)(p), x(!1);
                    },
                    contextKey: D,
                },
            );
    } else
        (0, h.A)({
            analyticsLocations: t,
            analyticsLocation: E,
            analyticsSourceLocation: m,
            guildId: N.id,
            closeLayer: () => {
                A?.(), T?.();
            },
            totalNumberOfSlotsToAssign: g ?? 1,
            onCloseModal: x,
            disablePremiumUpsell: C,
            onSubscriptionConfirmation: S,
            onSubscribeComplete: y,
            inPopout: R,
            applicationId: O,
            intent: b,
        });
}
