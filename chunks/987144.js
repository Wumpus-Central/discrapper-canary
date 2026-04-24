n.d(t, { g: () => m }), n(321073);
var a = n(627968);
n(64700);
var i = n(231723),
    l = n(192308),
    r = n(820739),
    o = n(73825),
    s = n(323082),
    c = n(287809),
    d = n(178368),
    u = n(97352),
    _ = n(473145),
    p = n(212637),
    f = n(652215);
let h = "apply-guild-boost-modal";
async function m(e) {
    let {
            analyticsLocations: t,
            analyticsLocation: m,
            analyticsSourceLocation: g,
            numberOfBoostsToAdd: b,
            onClose: A,
            onLoading: E,
            closeLayer: v,
            onSubscriptionConfirmation: I,
            onSubscribeComplete: y,
            guild: S,
            handleSubscribeModalClose: C,
            disablePremiumUpsell: T,
            inPopout: x,
            applicationId: R,
            intent: L,
        } = e,
        N = x ? i.KX : i.SY,
        w = c.default.getCurrentUser();
    if (null == w) return;
    if (!w.verified)
        return void (0, l.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e("12206"), n.e("90406")]).then(n.bind(n, 661925));
                return (t) => {
                    let { onClose: n, ...i } = t;
                    return (0, a.jsx)(e, { ...i, onClose: n });
                };
            },
            { contextKey: N },
        );
    let O = [];
    u.A.isLoadedForPremiumSKUs() || O.push((0, o.zS)()),
        d.A.hasFetched || (O.push(s.hP()), O.push((0, r.CD)())),
        O.length > 0 && (E?.(!0), await Promise.allSettled(O), E?.(!1));
    let D = (0, _.D$)(d.A.boostSlots),
        P = D.length,
        j = (e) => {
            A?.(), C?.(e);
        };
    if (P > 0 && (null == b || P >= b)) {
        let e;
        1 === P ? (e = D.slice(0, 1)) : null != b && (e = D.slice(0, b)),
            await (0, l.openModalLazy)(
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
                        let { onClose: i, ...l } = n;
                        return (0, a.jsx)(t, {
                            ...l,
                            onClose: (e) => {
                                i(), j(e);
                            },
                            selectedGuild: S,
                            locationSection: f.liQ.PREMIUM_GUILD_USER_MODAL,
                            guildBoostSlots: e,
                            intent: L,
                        });
                    };
                },
                {
                    modalKey: h,
                    onCloseRequest: () => {
                        (0, l.closeModal)(h), j(!1);
                    },
                    contextKey: N,
                },
            );
    } else
        (0, p.A)({
            analyticsLocations: t,
            analyticsLocation: m,
            analyticsSourceLocation: g,
            guildId: S.id,
            closeLayer: () => {
                A?.(), v?.();
            },
            totalNumberOfSlotsToAssign: b ?? 1,
            onCloseModal: j,
            disablePremiumUpsell: T,
            onSubscriptionConfirmation: I,
            onSubscribeComplete: y,
            inPopout: x,
            applicationId: R,
            intent: L,
        });
}
