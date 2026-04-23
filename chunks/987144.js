n.d(t, { g: () => I }), n(321073);
var i = n(627968);
n(64700);
var r = n(231723),
    l = n(192308),
    s = n(820739),
    a = n(73825),
    u = n(323082),
    o = n(287809),
    c = n(178368),
    d = n(97352),
    p = n(473145),
    h = n(212637),
    C = n(652215);
let m = "apply-guild-boost-modal";
async function I(e) {
    let {
            analyticsLocations: t,
            analyticsLocation: I,
            analyticsSourceLocation: E,
            numberOfBoostsToAdd: f,
            onClose: _,
            onLoading: A,
            closeLayer: P,
            onSubscriptionConfirmation: b,
            onSubscribeComplete: y,
            guild: S,
            handleSubscribeModalClose: M,
            disablePremiumUpsell: T,
            inPopout: R,
            applicationId: g,
            intent: v,
        } = e,
        N = R ? r.KX : r.SY,
        U = o.default.getCurrentUser();
    if (null == U) return;
    if (!U.verified)
        return void (0, l.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e("12206"), n.e("90406")]).then(n.bind(n, 661925));
                return (t) => {
                    let { onClose: n, ...r } = t;
                    return (0, i.jsx)(e, { ...r, onClose: n });
                };
            },
            { contextKey: N },
        );
    let x = [];
    d.A.isLoadedForPremiumSKUs() || x.push((0, a.zS)()),
        c.A.hasFetched || (x.push(u.hP()), x.push((0, s.CD)())),
        x.length > 0 && (A?.(!0), await Promise.allSettled(x), A?.(!1));
    let D = (0, p.D$)(c.A.boostSlots),
        L = D.length,
        w = (e) => {
            _?.(), M?.(e);
        };
    if (L > 0 && (null == f || L >= f)) {
        let e;
        1 === L ? (e = D.slice(0, 1)) : null != f && (e = D.slice(0, f)),
            await (0, l.openModalLazy)(
                async () => {
                    let { default: t } = await Promise.all([
                        n.e("62175"),
                        n.e("96817"),
                        n.e("38249"),
                        n.e("24363"),
                    ]).then(n.bind(n, 724624));
                    return (n) => {
                        let { onClose: r, ...l } = n;
                        return (0, i.jsx)(t, {
                            ...l,
                            onClose: (e) => {
                                r(), w(e);
                            },
                            selectedGuild: S,
                            locationSection: C.liQ.PREMIUM_GUILD_USER_MODAL,
                            guildBoostSlots: e,
                            intent: v,
                        });
                    };
                },
                {
                    modalKey: m,
                    onCloseRequest: () => {
                        (0, l.closeModal)(m), w(!1);
                    },
                    contextKey: N,
                },
            );
    } else
        (0, h.A)({
            analyticsLocations: t,
            analyticsLocation: I,
            analyticsSourceLocation: E,
            guildId: S.id,
            closeLayer: () => {
                _?.(), P?.();
            },
            totalNumberOfSlotsToAssign: f ?? 1,
            onCloseModal: w,
            disablePremiumUpsell: T,
            onSubscriptionConfirmation: b,
            onSubscribeComplete: y,
            inPopout: R,
            applicationId: g,
            intent: v,
        });
}
