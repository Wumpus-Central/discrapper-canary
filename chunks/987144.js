"use strict";
n.d(t, { g: () => m }), n(321073);
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(384904),
    s = n(923408),
    o = n(73825),
    l = n(287809),
    u = n(178368),
    c = n(97352),
    d = n(954571),
    _ = n(473145),
    f = n(212637),
    p = n(652215);
let h = "apply-guild-boost-modal";
async function m(e) {
    let {
            analyticsLocations: t,
            analyticsLocation: m,
            analyticsSourceLocation: g,
            numberOfBoostsToAdd: E,
            onClose: A,
            onLoading: I,
            closeLayer: T,
            onSubscriptionConfirmation: y,
            onSubscribeComplete: S,
            guild: v,
            handleSubscribeModalClose: C,
            disablePremiumUpsell: b,
            inPopout: N,
            applicationId: R,
            intent: O,
        } = e,
        D = N ? i.KX8 : i.SYi,
        L = l.default.getCurrentUser();
    if (null == L) return;
    if (!L.verified)
        return void (0, i.mMO)(
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
    c.A.isLoadedForPremiumSKUs() || w.push((0, o.zS)()),
        u.A.hasFetched || (w.push(a.hP()), w.push((0, s.CD)())),
        w.length > 0 && (I?.(!0), await Promise.allSettled(w), I?.(!1));
    let x = (0, _.D$)(u.A.boostSlots),
        P = x.length,
        M = (e) => {
            A?.(), C?.(e);
        },
        k = () => {
            A?.(),
                T?.(),
                d.default.track(p.HAw.MODAL_DISMISSED, {
                    type: p.liQ.PREMIUM_GUILD_USER_MODAL,
                    location_section: m.section,
                });
        };
    if (P > 0 && (null == E || P >= E)) {
        let e;
        1 === P ? (e = x.slice(0, 1)) : null != E && (e = x.slice(0, E)),
            await (0, i.mMO)(
                async () => {
                    let { default: t } = await Promise.all([
                        n.e("62175"),
                        n.e("62733"),
                        n.e("34749"),
                        n.e("40543"),
                    ]).then(n.bind(n, 657516));
                    return (n) => {
                        let { onClose: i, ...a } = n;
                        return (0, r.jsx)(t, {
                            ...a,
                            onClose: (e) => {
                                i(), M(e);
                            },
                            selectedGuild: v,
                            locationSection: p.liQ.PREMIUM_GUILD_USER_MODAL,
                            guildBoostSlots: e,
                            intent: O,
                        });
                    };
                },
                {
                    modalKey: h,
                    onCloseRequest: () => {
                        (0, i.OoC)(h), M(!1);
                    },
                    contextKey: D,
                },
            );
    } else
        (0, f.A)({
            analyticsLocations: t,
            analyticsLocation: m,
            analyticsSourceLocation: g,
            guildId: v.id,
            closeLayer: k,
            totalNumberOfSlotsToAssign: E ?? 1,
            onCloseModal: M,
            disablePremiumUpsell: b,
            onSubscriptionConfirmation: y,
            onSubscribeComplete: S,
            inPopout: N,
            applicationId: R,
            intent: O,
        });
}
