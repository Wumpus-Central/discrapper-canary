"use strict";
r.d(t, { g: () => h }), r(321073);
var n = r(627968);
r(64700);
var i = r(231723),
    a = r(192308),
    s = r(820739),
    l = r(73825),
    o = r(323082),
    c = r(287809),
    d = r(178368),
    u = r(97352),
    _ = r(473145),
    p = r(212637),
    f = r(652215);
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
            onSubscriptionConfirmation: y,
            onSubscribeComplete: I,
            guild: S,
            handleSubscribeModalClose: x,
            disablePremiumUpsell: T,
            inPopout: C,
            applicationId: R,
            intent: N,
        } = e,
        L = C ? i.KX : i.SY,
        w = c.default.getCurrentUser();
    if (null == w) return;
    if (!w.verified)
        return void (0, a.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([r.e("12206"), r.e("90406")]).then(r.bind(r, 661925));
                return (t) => {
                    let { onClose: r, ...i } = t;
                    return (0, n.jsx)(e, { ...i, onClose: r });
                };
            },
            { contextKey: L },
        );
    let P = [];
    u.A.isLoadedForPremiumSKUs() || P.push((0, l.zS)()),
        d.A.hasFetched || (P.push(o.hP()), P.push((0, s.CD)())),
        P.length > 0 && (E?.(!0), await Promise.allSettled(P), E?.(!1));
    let O = (0, _.D$)(d.A.boostSlots),
        D = O.length,
        M = (e) => {
            A?.(), x?.(e);
        };
    if (D > 0 && (null == b || D >= b)) {
        let e;
        1 === D ? (e = O.slice(0, 1)) : null != b && (e = O.slice(0, b)),
            await (0, a.openModalLazy)(
                async () => {
                    let { default: t } = await Promise.all([
                        r.e("45174"),
                        r.e("85519"),
                        r.e("62175"),
                        r.e("96817"),
                        r.e("38249"),
                        r.e("95024"),
                    ]).then(r.bind(r, 724624));
                    return (r) => {
                        let { onClose: i, ...a } = r;
                        return (0, n.jsx)(t, {
                            ...a,
                            onClose: (e) => {
                                i(), M(e);
                            },
                            selectedGuild: S,
                            locationSection: f.liQ.PREMIUM_GUILD_USER_MODAL,
                            guildBoostSlots: e,
                            intent: N,
                        });
                    };
                },
                {
                    modalKey: m,
                    onCloseRequest: () => {
                        (0, a.closeModal)(m), M(!1);
                    },
                    contextKey: L,
                },
            );
    } else
        (0, p.A)({
            analyticsLocations: t,
            analyticsLocation: h,
            analyticsSourceLocation: g,
            guildId: S.id,
            closeLayer: () => {
                A?.(), v?.();
            },
            totalNumberOfSlotsToAssign: b ?? 1,
            onCloseModal: M,
            disablePremiumUpsell: T,
            onSubscriptionConfirmation: y,
            onSubscribeComplete: I,
            inPopout: C,
            applicationId: R,
            intent: N,
        });
}
