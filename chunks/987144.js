"use strict";
n.d(t, { g: () => E }), n(321073);
var r = n(627968);
n(64700);
var i = n(231723),
    s = n(192308),
    a = n(923408),
    o = n(73825),
    l = n(323082),
    u = n(287809),
    c = n(178368),
    d = n(97352),
    _ = n(473145),
    f = n(212637),
    p = n(652215);
let h = "apply-guild-boost-modal";
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
            inPopout: O,
            applicationId: R,
            intent: b,
        } = e,
        D = O ? i.KX : i.SY,
        L = u.default.getCurrentUser();
    if (null == L) return;
    if (!L.verified)
        return void (0, s.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e("12206"), n.e("90406")]).then(n.bind(n, 661925));
                return (t) => {
                    let { onClose: n, ...i } = t;
                    return (0, r.jsx)(e, { ...i, onClose: n });
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
                        n.e("62175"),
                        n.e("81694"),
                        n.e("34749"),
                        n.e("24363"),
                    ]).then(n.bind(n, 657516));
                    return (n) => {
                        let { onClose: i, ...s } = n;
                        return (0, r.jsx)(t, {
                            ...s,
                            onClose: (e) => {
                                i(), x(e);
                            },
                            selectedGuild: N,
                            locationSection: p.liQ.PREMIUM_GUILD_USER_MODAL,
                            guildBoostSlots: e,
                            intent: b,
                        });
                    };
                },
                {
                    modalKey: h,
                    onCloseRequest: () => {
                        (0, s.closeModal)(h), x(!1);
                    },
                    contextKey: D,
                },
            );
    } else
        (0, f.A)({
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
            inPopout: O,
            applicationId: R,
            intent: b,
        });
}
