"use strict";
n.d(t, { g: () => f }), n(321073);
var a = n(627968);
n(64700);
var r = n(231723),
    i = n(192308),
    l = n(820739),
    s = n(73825),
    o = n(323082),
    c = n(287809),
    d = n(178368),
    u = n(97352),
    _ = n(473145),
    p = n(212637),
    m = n(652215);
let h = "apply-guild-boost-modal";
async function f(e) {
    let {
            analyticsLocations: t,
            analyticsLocation: f,
            analyticsSourceLocation: g,
            numberOfBoostsToAdd: b,
            onClose: v,
            onLoading: A,
            closeLayer: x,
            onSubscriptionConfirmation: E,
            onSubscribeComplete: T,
            guild: S,
            handleSubscribeModalClose: C,
            disablePremiumUpsell: I,
            inPopout: y,
            applicationId: N,
            intent: R,
        } = e,
        j = y ? r.KX : r.SY,
        L = c.default.getCurrentUser();
    if (null == L) return;
    if (!L.verified)
        return void (0, i.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e("12206"), n.e("90406")]).then(n.bind(n, 661925));
                return (t) => {
                    let { onClose: n, ...r } = t;
                    return (0, a.jsx)(e, { ...r, onClose: n });
                };
            },
            { contextKey: j },
        );
    let w = [];
    u.A.isLoadedForPremiumSKUs() || w.push((0, s.zS)()),
        d.A.hasFetched || (w.push(o.hP()), w.push((0, l.CD)())),
        w.length > 0 && (A?.(!0), await Promise.allSettled(w), A?.(!1));
    let O = (0, _.D$)(d.A.boostSlots),
        D = O.length,
        M = (e) => {
            v?.(), C?.(e);
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
                        n.e("95024"),
                    ]).then(n.bind(n, 724624));
                    return (n) => {
                        let { onClose: r, ...i } = n;
                        return (0, a.jsx)(t, {
                            ...i,
                            onClose: (e) => {
                                r(), M(e);
                            },
                            selectedGuild: S,
                            locationSection: m.liQ.PREMIUM_GUILD_USER_MODAL,
                            guildBoostSlots: e,
                            intent: R,
                        });
                    };
                },
                {
                    modalKey: h,
                    onCloseRequest: () => {
                        (0, i.closeModal)(h), M(!1);
                    },
                    contextKey: j,
                },
            );
    } else
        (0, p.A)({
            analyticsLocations: t,
            analyticsLocation: f,
            analyticsSourceLocation: g,
            guildId: S.id,
            closeLayer: () => {
                v?.(), x?.();
            },
            totalNumberOfSlotsToAssign: b ?? 1,
            onCloseModal: M,
            disablePremiumUpsell: I,
            onSubscriptionConfirmation: E,
            onSubscribeComplete: T,
            inPopout: y,
            applicationId: N,
            intent: R,
        });
}
