"use strict";
n.d(t, { g: () => g }), n(321073);
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
    h = n(652215);
let p = "apply-guild-boost-modal";
async function g(e) {
    let {
            analyticsLocations: t,
            analyticsLocation: g,
            analyticsSourceLocation: E,
            numberOfBoostsToAdd: A,
            onClose: I,
            onLoading: T,
            closeLayer: y,
            onSubscriptionConfirmation: S,
            onSubscribeComplete: v,
            guild: C,
            handleSubscribeModalClose: b,
            disablePremiumUpsell: N,
            inPopout: R,
            applicationId: O,
            intent: D,
        } = e,
        L = R ? i.KX8 : i.SYi,
        w = l.default.getCurrentUser();
    if (null == w) return;
    if (!w.verified)
        return void (0, i.mMO)(
            async () => {
                let { default: e } = await Promise.all([n.e("12206"), n.e("90406")]).then(n.bind(n, 661925));
                return (t) => {
                    let { onClose: n, ...i } = t;
                    return (0, r.jsx)(e, { ...i, onClose: n });
                };
            },
            { contextKey: L },
        );
    let x = [];
    c.A.isLoadedForPremiumSKUs() || x.push((0, o.zS)()),
        u.A.hasFetched || (x.push(a.hP()), x.push((0, s.CD)())),
        x.length > 0 && (T?.(!0), await Promise.allSettled(x), T?.(!1));
    let P = (0, _.D$)(u.A.boostSlots),
        M = P.length,
        k = (e) => {
            I?.(), b?.(e);
        },
        U = () => {
            I?.(),
                y?.(),
                d.default.track(h.HAw.MODAL_DISMISSED, {
                    type: h.liQ.PREMIUM_GUILD_USER_MODAL,
                    location_section: g.section,
                });
        };
    if (M > 0 && (null == A || M >= A)) {
        let e;
        1 === M ? (e = P.slice(0, 1)) : null != A && (e = P.slice(0, A)),
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
                                i(), k(e);
                            },
                            selectedGuild: C,
                            locationSection: h.liQ.PREMIUM_GUILD_USER_MODAL,
                            guildBoostSlots: e,
                            intent: D,
                        });
                    };
                },
                {
                    modalKey: p,
                    onCloseRequest: () => {
                        (0, i.OoC)(p), k(!1);
                    },
                    contextKey: L,
                },
            );
    } else
        (0, f.A)({
            analyticsLocations: t,
            analyticsLocation: g,
            analyticsSourceLocation: E,
            guildId: C.id,
            closeLayer: U,
            totalNumberOfSlotsToAssign: A ?? 1,
            onCloseModal: k,
            disablePremiumUpsell: N,
            onSubscriptionConfirmation: S,
            onSubscribeComplete: v,
            inPopout: R,
            applicationId: O,
            intent: D,
        });
}
