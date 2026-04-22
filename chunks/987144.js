"use strict";
a.d(t, { g: () => b }), a(321073);
var r = a(627968);
a(64700);
var l = a(231723),
    n = a(192308),
    i = a(923408),
    s = a(73825),
    o = a(323082),
    d = a(287809),
    c = a(178368),
    u = a(97352),
    h = a(473145),
    p = a(212637),
    _ = a(652215);
let m = "apply-guild-boost-modal";
async function b(e) {
    let {
            analyticsLocations: t,
            analyticsLocation: b,
            analyticsSourceLocation: g,
            numberOfBoostsToAdd: f,
            onClose: x,
            onLoading: v,
            closeLayer: A,
            onSubscriptionConfirmation: E,
            onSubscribeComplete: y,
            guild: j,
            handleSubscribeModalClose: I,
            disablePremiumUpsell: S,
            inPopout: C,
            applicationId: T,
            intent: w,
        } = e,
        R = C ? l.KX : l.SY,
        k = d.default.getCurrentUser();
    if (null == k) return;
    if (!k.verified)
        return void (0, n.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([a.e("12206"), a.e("90406")]).then(a.bind(a, 661925));
                return (t) => {
                    let { onClose: a, ...l } = t;
                    return (0, r.jsx)(e, { ...l, onClose: a });
                };
            },
            { contextKey: R },
        );
    let N = [];
    u.A.isLoadedForPremiumSKUs() || N.push((0, s.zS)()),
        c.A.hasFetched || (N.push(o.hP()), N.push((0, i.CD)())),
        N.length > 0 && (v?.(!0), await Promise.allSettled(N), v?.(!1));
    let L = (0, h.D$)(c.A.boostSlots),
        O = L.length,
        P = (e) => {
            x?.(), I?.(e);
        };
    if (O > 0 && (null == f || O >= f)) {
        let e;
        1 === O ? (e = L.slice(0, 1)) : null != f && (e = L.slice(0, f)),
            await (0, n.openModalLazy)(
                async () => {
                    let { default: t } = await Promise.all([
                        a.e("12721"),
                        a.e("62175"),
                        a.e("81694"),
                        a.e("34749"),
                        a.e("95024"),
                    ]).then(a.bind(a, 657516));
                    return (a) => {
                        let { onClose: l, ...n } = a;
                        return (0, r.jsx)(t, {
                            ...n,
                            onClose: (e) => {
                                l(), P(e);
                            },
                            selectedGuild: j,
                            locationSection: _.liQ.PREMIUM_GUILD_USER_MODAL,
                            guildBoostSlots: e,
                            intent: w,
                        });
                    };
                },
                {
                    modalKey: m,
                    onCloseRequest: () => {
                        (0, n.closeModal)(m), P(!1);
                    },
                    contextKey: R,
                },
            );
    } else
        (0, p.A)({
            analyticsLocations: t,
            analyticsLocation: b,
            analyticsSourceLocation: g,
            guildId: j.id,
            closeLayer: () => {
                x?.(), A?.();
            },
            totalNumberOfSlotsToAssign: f ?? 1,
            onCloseModal: P,
            disablePremiumUpsell: S,
            onSubscriptionConfirmation: E,
            onSubscribeComplete: y,
            inPopout: C,
            applicationId: T,
            intent: w,
        });
}
