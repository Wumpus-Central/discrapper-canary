"use strict";
n.d(t, { g: () => m }), n(321073);
var r = n(627968);
n(64700);
var i = n(397927),
    s = n(384904),
    a = n(923408),
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
            analyticsSourceLocation: E,
            numberOfBoostsToAdd: g,
            onClose: A,
            onLoading: I,
            closeLayer: T,
            onSubscriptionConfirmation: S,
            onSubscribeComplete: y,
            guild: v,
            handleSubscribeModalClose: N,
            disablePremiumUpsell: C,
            inPopout: b,
            applicationId: R,
            intent: O,
        } = e,
        D = b ? i.KX8 : i.SYi,
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
        u.A.hasFetched || (w.push(s.hP()), w.push((0, a.CD)())),
        w.length > 0 && (I?.(!0), await Promise.allSettled(w), I?.(!1));
    let x = (0, _.D$)(u.A.boostSlots),
        M = x.length,
        P = (e) => {
            A?.(), N?.(e);
        },
        k = () => {
            A?.(),
                T?.(),
                d.default.track(p.HAw.MODAL_DISMISSED, {
                    type: p.liQ.PREMIUM_GUILD_USER_MODAL,
                    location_section: m.section,
                });
        };
    if (M > 0 && (null == g || M >= g)) {
        let e;
        1 === M ? (e = x.slice(0, 1)) : null != g && (e = x.slice(0, g)),
            await (0, i.mMO)(
                async () => {
                    let { default: t } = await Promise.all([
                        n.e("62175"),
                        n.e("62733"),
                        n.e("34749"),
                        n.e("40543"),
                    ]).then(n.bind(n, 657516));
                    return (n) => {
                        let { onClose: i, ...s } = n;
                        return (0, r.jsx)(t, {
                            ...s,
                            onClose: (e) => {
                                i(), P(e);
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
                        (0, i.OoC)(h), P(!1);
                    },
                    contextKey: D,
                },
            );
    } else
        (0, f.A)({
            analyticsLocations: t,
            analyticsLocation: m,
            analyticsSourceLocation: E,
            guildId: v.id,
            closeLayer: k,
            totalNumberOfSlotsToAssign: g ?? 1,
            onCloseModal: P,
            disablePremiumUpsell: C,
            onSubscriptionConfirmation: S,
            onSubscribeComplete: y,
            inPopout: b,
            applicationId: R,
            intent: O,
        });
}
