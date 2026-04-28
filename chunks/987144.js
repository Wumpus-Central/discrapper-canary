"use strict";
n.d(t, { g: () => h }), n(321073);
var r = n(627968);
n(64700);
var a = n(231723),
    i = n(192308),
    l = n(820739),
    s = n(73825),
    o = n(323082),
    c = n(287809),
    d = n(178368),
    u = n(97352),
    _ = n(473145),
    p = n(212637),
    f = n(652215);
let m = "apply-guild-boost-modal";
async function h(e) {
    let {
            analyticsLocations: t,
            analyticsLocation: h,
            analyticsSourceLocation: g,
            numberOfBoostsToAdd: b,
            onClose: A,
            onLoading: E,
            closeLayer: v,
            onSubscriptionConfirmation: I,
            onSubscribeComplete: y,
            guild: x,
            handleSubscribeModalClose: S,
            disablePremiumUpsell: T,
            inPopout: C,
            applicationId: N,
            intent: R,
        } = e,
        w = C ? a.KX : a.SY,
        L = c.default.getCurrentUser();
    if (null == L) return;
    if (!L.verified)
        return void (0, i.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e("12206"), n.e("90406")]).then(n.bind(n, 661925));
                return (t) => {
                    let { onClose: n, ...a } = t;
                    return (0, r.jsx)(e, { ...a, onClose: n });
                };
            },
            { contextKey: w },
        );
    let M = [];
    u.A.isLoadedForPremiumSKUs() || M.push((0, s.zS)()),
        d.A.hasFetched || (M.push(o.hP()), M.push((0, l.CD)())),
        M.length > 0 && (E?.(!0), await Promise.allSettled(M), E?.(!1));
    let O = (0, _.D$)(d.A.boostSlots),
        D = O.length,
        P = (e) => {
            A?.(), S?.(e);
        };
    if (D > 0 && (null == b || D >= b)) {
        let e;
        1 === D ? (e = O.slice(0, 1)) : null != b && (e = O.slice(0, b)),
            await (0, i.openModalLazy)(
                async () => {
                    let { default: t } = await Promise.all([
                        n.e("45174"),
                        n.e("85519"),
                        n.e("62175"),
                        n.e("96817"),
                        n.e("38249"),
                        n.e("26558"),
                    ]).then(n.bind(n, 724624));
                    return (n) => {
                        let { onClose: a, ...i } = n;
                        return (0, r.jsx)(t, {
                            ...i,
                            onClose: (e) => {
                                a(), P(e);
                            },
                            selectedGuild: x,
                            locationSection: f.liQ.PREMIUM_GUILD_USER_MODAL,
                            guildBoostSlots: e,
                            intent: R,
                        });
                    };
                },
                {
                    modalKey: m,
                    onCloseRequest: () => {
                        (0, i.closeModal)(m), P(!1);
                    },
                    contextKey: w,
                },
            );
    } else
        (0, p.A)({
            analyticsLocations: t,
            analyticsLocation: h,
            analyticsSourceLocation: g,
            guildId: x.id,
            closeLayer: () => {
                A?.(), v?.();
            },
            totalNumberOfSlotsToAssign: b ?? 1,
            onCloseModal: P,
            disablePremiumUpsell: T,
            onSubscriptionConfirmation: I,
            onSubscribeComplete: y,
            inPopout: C,
            applicationId: N,
            intent: R,
        });
}
