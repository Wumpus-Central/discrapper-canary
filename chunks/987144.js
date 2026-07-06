"use strict";
n.d(t, { g: () => p }), n(321073);
var i = n(627968);
n(64700);
var r = n(231723),
    s = n(192308),
    a = n(820739),
    o = n(73825),
    l = n(277984),
    u = n(287809),
    c = n(178368),
    d = n(97352),
    _ = n(473145),
    h = n(212637),
    f = n(652215);
let E = "apply-guild-boost-modal";
async function p(e) {
    let {
            analyticsLocations: t,
            analyticsLocation: p,
            analyticsSourceLocation: m,
            numberOfBoostsToAdd: g,
            onClose: A,
            onLoading: I,
            closeLayer: T,
            onSubscriptionConfirmation: S,
            onSubscribeComplete: N,
            guild: C,
            handleSubscribeModalClose: y,
            disablePremiumUpsell: O,
            inPopout: R,
            applicationId: v,
            intent: b,
        } = e,
        L = R ? r.KX : r.SY,
        D = u.default.getCurrentUser();
    if (null == D) return;
    if (!D.verified)
        return void (0, s.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e("54681"), n.e("74913"), n.e("12206"), n.e("90406")]).then(
                    n.bind(n, 661925),
                );
                return (t) => {
                    let { onClose: n, ...r } = t;
                    return (0, i.jsx)(e, { ...r, onClose: n });
                };
            },
            { contextKey: L },
        );
    let w = [];
    d.A.isLoadedForPremiumSKUs() || w.push((0, o.zS)()),
        c.A.hasFetched || (w.push(l.hP()), w.push((0, a.CD)())),
        w.length > 0 && (I?.(!0), await Promise.allSettled(w), I?.(!1));
    let P = (0, _.D$)(c.A.boostSlots),
        M = P.length;
    function x(e) {
        A?.(), y?.(e);
    }
    if (M > 0 && (null == g || M >= g)) {
        let e;
        1 === M ? (e = P.slice(0, 1)) : null != g && (e = P.slice(0, g)),
            await (0, s.openModalLazy)(
                async () => {
                    let { default: t } = await Promise.all([
                        n.e("41625"),
                        n.e("26142"),
                        n.e("44250"),
                        n.e("95512"),
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
                        n.e("53133"),
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
                        let { onClose: r, ...s } = n;
                        return (0, i.jsx)(t, {
                            ...s,
                            onClose: (e) => {
                                r(), x(e);
                            },
                            selectedGuild: C,
                            locationSection: f.liQ.PREMIUM_GUILD_USER_MODAL,
                            guildBoostSlots: e,
                            intent: b,
                        });
                    };
                },
                {
                    modalKey: E,
                    onCloseRequest: () => {
                        (0, s.closeModal)(E), x(!1);
                    },
                    contextKey: L,
                },
            );
    } else
        (0, h.A)({
            analyticsLocations: t,
            analyticsLocation: p,
            analyticsSourceLocation: m,
            guildId: C.id,
            closeLayer: function () {
                A?.(), T?.();
            },
            totalNumberOfSlotsToAssign: g ?? 1,
            onCloseModal: x,
            disablePremiumUpsell: O,
            onSubscriptionConfirmation: S,
            onSubscribeComplete: N,
            inPopout: R,
            applicationId: v,
            intent: b,
        });
}
