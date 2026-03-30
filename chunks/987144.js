"use strict";
n.d(t, { g: () => h }), n(321073);
var r = n(627968);
n(64700);
var i = n(397927),
    s = n(384904),
    a = n(923408),
    o = n(73825),
    l = n(287809),
    u = n(178368),
    c = n(97352),
    d = n(473145),
    _ = n(212637),
    f = n(652215);
let p = "apply-guild-boost-modal";
async function h(e) {
    let {
            analyticsLocations: t,
            analyticsLocation: h,
            analyticsSourceLocation: m,
            numberOfBoostsToAdd: E,
            onClose: g,
            onLoading: A,
            closeLayer: I,
            onSubscriptionConfirmation: T,
            onSubscribeComplete: S,
            guild: y,
            handleSubscribeModalClose: v,
            disablePremiumUpsell: N,
            inPopout: C,
            applicationId: R,
            intent: O,
        } = e,
        b = C ? i.KX8 : i.SYi,
        D = l.default.getCurrentUser();
    if (null == D) return;
    if (!D.verified)
        return void (0, i.mMO)(
            async () => {
                let { default: e } = await Promise.all([n.e("12206"), n.e("90406")]).then(n.bind(n, 661925));
                return (t) => {
                    let { onClose: n, ...i } = t;
                    return (0, r.jsx)(e, { ...i, onClose: n });
                };
            },
            { contextKey: b },
        );
    let L = [];
    c.A.isLoadedForPremiumSKUs() || L.push((0, o.zS)()),
        u.A.hasFetched || (L.push(s.hP()), L.push((0, a.CD)())),
        L.length > 0 && (A?.(!0), await Promise.allSettled(L), A?.(!1));
    let w = (0, d.D$)(u.A.boostSlots),
        M = w.length,
        P = (e) => {
            g?.(), v?.(e);
        },
        x = () => {
            g?.(), I?.();
        };
    if (M > 0 && (null == E || M >= E)) {
        let e;
        1 === M ? (e = w.slice(0, 1)) : null != E && (e = w.slice(0, E)),
            await (0, i.mMO)(
                async () => {
                    let { default: t } = await Promise.all([
                        n.e("62175"),
                        n.e("62733"),
                        n.e("34749"),
                        n.e("41164"),
                    ]).then(n.bind(n, 657516));
                    return (n) => {
                        let { onClose: i, ...s } = n;
                        return (0, r.jsx)(t, {
                            ...s,
                            onClose: (e) => {
                                i(), P(e);
                            },
                            selectedGuild: y,
                            locationSection: f.liQ.PREMIUM_GUILD_USER_MODAL,
                            guildBoostSlots: e,
                            intent: O,
                        });
                    };
                },
                {
                    modalKey: p,
                    onCloseRequest: () => {
                        (0, i.OoC)(p), P(!1);
                    },
                    contextKey: b,
                },
            );
    } else
        (0, _.A)({
            analyticsLocations: t,
            analyticsLocation: h,
            analyticsSourceLocation: m,
            guildId: y.id,
            closeLayer: x,
            totalNumberOfSlotsToAssign: E ?? 1,
            onCloseModal: P,
            disablePremiumUpsell: N,
            onSubscriptionConfirmation: T,
            onSubscribeComplete: S,
            inPopout: C,
            applicationId: R,
            intent: O,
        });
}
