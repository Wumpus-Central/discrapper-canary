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
    f = n(212637),
    h = n(652215);
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
            onSubscribeComplete: N,
            guild: y,
            handleSubscribeModalClose: C,
            disablePremiumUpsell: v,
            inPopout: O,
            applicationId: R,
            intent: b,
        } = e,
        D = O ? r.KX : r.SY,
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
            A?.(), C?.(e);
        };
    if (P > 0 && (null == g || P >= g)) {
        let e;
        1 === P ? (e = M.slice(0, 1)) : null != g && (e = M.slice(0, g)),
            await (0, s.openModalLazy)(
                async () => {
                    let { default: t } = await Promise.all([
                        n.e("8516"),
                        n.e("4512"),
                        n.e("19397"),
                        n.e("5959"),
                        n.e("96643"),
                        n.e("44376"),
                        n.e("47017"),
                        n.e("25990"),
                        n.e("58164"),
                        n.e("71470"),
                        n.e("10943"),
                        n.e("95602"),
                        n.e("5896"),
                        n.e("62175"),
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
                            selectedGuild: y,
                            locationSection: h.liQ.PREMIUM_GUILD_USER_MODAL,
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
        (0, f.A)({
            analyticsLocations: t,
            analyticsLocation: E,
            analyticsSourceLocation: m,
            guildId: y.id,
            closeLayer: () => {
                A?.(), T?.();
            },
            totalNumberOfSlotsToAssign: g ?? 1,
            onCloseModal: x,
            disablePremiumUpsell: v,
            onSubscriptionConfirmation: S,
            onSubscribeComplete: N,
            inPopout: O,
            applicationId: R,
            intent: b,
        });
}
