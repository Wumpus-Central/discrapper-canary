r.d(n, {
    u: function () {
        return I;
    }
});
var i = r(653041);
var a = r(998459);
var s = r(47120);
var o = r(200651);
r(192379);
var l = r(481060),
    u = r(355467),
    c = r(179360),
    d = r(821849),
    f = r(594174),
    _ = r(314884),
    h = r(509545),
    p = r(626135),
    m = r(267642),
    g = r(852679),
    E = r(981631);
let v = 'apply-guild-boost-modal';
async function I(e) {
    let { analyticsLocations: n, analyticsLocation: i, analyticsSourceLocation: a, numberOfBoostsToAdd: s, onClose: I, closeLayer: T, onSubscriptionConfirmation: b, guild: y, handleSubscribeModalClose: S, disablePremiumUpsell: A, inPopout: N, applicationId: C } = e,
        R = N ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT,
        O = f.default.getCurrentUser();
    if (null == O) return;
    if (!O.verified) {
        (0, l.openModalLazy)(
            async () => {
                let { default: e } = await r.e('20102').then(r.bind(r, 444688));
                return (n) => {
                    let { onClose: r, ...i } = n;
                    return (0, o.jsx)(e, {
                        ...i,
                        onClose: r
                    });
                };
            },
            { contextKey: R }
        );
        return;
    }
    let D = [];
    !h.Z.isLoadedForPremiumSKUs() && D.push((0, d.Y2)()), !_.Z.hasFetched && (D.push(u.jg()), D.push((0, c.X8)())), D.length > 0 && (await Promise.allSettled(D));
    let L = (0, m.vx)(_.Z.boostSlots),
        x = L.length,
        w = (e) => {
            null == I || I(), null == S || S(e);
        },
        P = () => {
            null == I || I(),
                null == T || T(),
                p.default.track(E.rMx.MODAL_DISMISSED, {
                    type: E.ZY5.PREMIUM_GUILD_USER_MODAL,
                    location_section: i.section
                });
        };
    if (x > 0 && (null == s || x >= s)) {
        let e;
        1 === x ? (e = L.slice(0, 1)) : null != s && (e = L.slice(0, s)),
            await (0, l.openModalLazy)(
                async () => {
                    let { default: n } = await Promise.all([r.e('12013'), r.e('52249'), r.e('8016'), r.e('22646'), r.e('30419'), r.e('63155')]).then(r.bind(r, 760558));
                    return (r) => {
                        let { onClose: i, ...a } = r;
                        return (0, o.jsx)(n, {
                            ...a,
                            onClose: (e) => {
                                i(), w(e);
                            },
                            selectedGuild: y,
                            locationSection: E.ZY5.PREMIUM_GUILD_USER_MODAL,
                            guildBoostSlots: e
                        });
                    };
                },
                {
                    modalKey: v,
                    onCloseRequest: () => {
                        (0, l.closeModal)(v), w(!1);
                    },
                    contextKey: R
                }
            );
    } else
        (0, g.Z)({
            analyticsLocations: n,
            analyticsLocation: i,
            analyticsSourceLocation: a,
            guildId: y.id,
            closeLayer: P,
            totalNumberOfSlotsToAssign: null != s ? s : 1,
            onCloseModal: w,
            disablePremiumUpsell: A,
            onSubscriptionConfirmation: b,
            inPopout: N,
            applicationId: C
        });
}
