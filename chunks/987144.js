"use strict";
n.d(t, { g: () => I }), n(321073);
var i = n(627968);
n(64700);
var r = n(231723),
    a = n(192308),
    s = n(820739),
    l = n(73825),
    o = n(277984),
    d = n(287809),
    c = n(178368),
    u = n(97352),
    _ = n(473145),
    E = n(212637),
    A = n(652215);
let h = "apply-guild-boost-modal";
async function I(e) {
    let {
            analyticsLocations: t,
            analyticsLocation: I,
            analyticsSourceLocation: f,
            numberOfBoostsToAdd: p,
            onClose: T,
            onLoading: m,
            closeLayer: g,
            onSubscriptionConfirmation: S,
            onSubscribeComplete: N,
            guild: C,
            handleSubscribeModalClose: R,
            disablePremiumUpsell: O,
            inPopout: L,
            applicationId: D,
            intent: y,
        } = e,
        v = L ? r.KX : r.SY,
        b = d.default.getCurrentUser();
    if (null == b) return;
    if (!b.verified)
        return void (0, a.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e("54681"), n.e("74913"), n.e("12206"), n.e("90406")]).then(
                    n.bind(n, 661925),
                );
                return (t) => {
                    let { onClose: n, ...r } = t;
                    return (0, i.jsx)(e, { ...r, onClose: n });
                };
            },
            { contextKey: v },
        );
    let M = [];
    u.A.isLoadedForPremiumSKUs() || M.push((0, l.zS)()),
        c.A.hasFetched || (M.push(o.hP()), M.push((0, s.CD)())),
        M.length > 0 && (m?.(!0), await Promise.allSettled(M), m?.(!1));
    let P = (0, _.D$)(c.A.boostSlots),
        U = P.length;
    function w(e) {
        T?.(), R?.(e);
    }
    if (U > 0 && (null == p || U >= p)) {
        let e;
        1 === U ? (e = P.slice(0, 1)) : null != p && (e = P.slice(0, p)),
            await (0, a.openModalLazy)(
                async () => {
                    let { default: t } = await Promise.all([
                        n.e("41625"),
                        n.e("26142"),
                        n.e("44250"),
                        n.e("76342"),
                        n.e("60988"),
                        n.e("69273"),
                        n.e("72210"),
                        n.e("3155"),
                        n.e("82104"),
                        n.e("65327"),
                        n.e("22957"),
                        n.e("41711"),
                        n.e("79606"),
                        n.e("68261"),
                        n.e("96643"),
                        n.e("85927"),
                        n.e("62175"),
                        n.e("88131"),
                        n.e("23532"),
                        n.e("52557"),
                        n.e("55654"),
                        n.e("9793"),
                        n.e("58164"),
                        n.e("71470"),
                        n.e("10943"),
                        n.e("95602"),
                        n.e("22455"),
                        n.e("18710"),
                        n.e("34428"),
                        n.e("38249"),
                    ]).then(n.bind(n, 724624));
                    return (n) => {
                        let { onClose: r, ...a } = n;
                        return (0, i.jsx)(t, {
                            ...a,
                            onClose: (e) => {
                                r(), w(e);
                            },
                            selectedGuild: C,
                            locationSection: A.liQ.PREMIUM_GUILD_USER_MODAL,
                            guildBoostSlots: e,
                            intent: y,
                        });
                    };
                },
                {
                    modalKey: h,
                    onCloseRequest: () => {
                        (0, a.closeModal)(h), w(!1);
                    },
                    contextKey: v,
                },
            );
    } else
        (0, E.A)({
            analyticsLocations: t,
            analyticsLocation: I,
            analyticsSourceLocation: f,
            guildId: C.id,
            closeLayer: function () {
                T?.(), g?.();
            },
            totalNumberOfSlotsToAssign: p ?? 1,
            onCloseModal: w,
            disablePremiumUpsell: O,
            onSubscriptionConfirmation: S,
            onSubscribeComplete: N,
            inPopout: L,
            applicationId: D,
            intent: y,
        });
}
