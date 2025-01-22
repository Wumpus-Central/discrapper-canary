r.d(n, {
    u: function () {
        return y;
    }
});
var i = r(653041);
var a = r(998459);
var o = r(47120);
var s = r(200651);
r(192379);
var l = r(481060),
    u = r(355467),
    c = r(179360),
    d = r(821849),
    f = r(594174),
    p = r(314884),
    h = r(509545),
    _ = r(626135),
    m = r(267642),
    g = r(852679),
    E = r(981631);
let v = 'apply-guild-boost-modal';
async function y(e) {
    let { analyticsLocations: n, analyticsLocation: i, analyticsSourceLocation: a, numberOfBoostsToAdd: o, onClose: y, closeLayer: b, onSubscriptionConfirmation: I, guild: T, handleSubscribeModalClose: S, disablePremiumUpsell: A, inPopout: C, applicationId: N } = e,
        R = C ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT,
        O = f.default.getCurrentUser();
    if (null == O) return;
    if (!O.verified) {
        (0, l.openModalLazy)(
            async () => {
                let { default: e } = await r.e('20102').then(r.bind(r, 444688));
                return (n) => {
                    let { onClose: r, ...i } = n;
                    return (0, s.jsx)(e, {
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
    !h.Z.isLoadedForPremiumSKUs() && D.push((0, d.Y2)()), !p.Z.hasFetched && (D.push(u.jg()), D.push((0, c.X8)())), D.length > 0 && (await Promise.allSettled(D));
    let L = (0, m.vx)(p.Z.boostSlots),
        x = L.length,
        w = (e) => {
            null == y || y(), null == S || S(e);
        },
        P = () => {
            null == y || y(),
                null == b || b(),
                _.default.track(E.rMx.MODAL_DISMISSED, {
                    type: E.ZY5.PREMIUM_GUILD_USER_MODAL,
                    location_section: i.section
                });
        };
    if (x > 0 && (null == o || x >= o)) {
        let e;
        1 === x ? (e = L.slice(0, 1)) : null != o && (e = L.slice(0, o)),
            await (0, l.openModalLazy)(
                async () => {
                    let { default: n } = await Promise.all([r.e('8016'), r.e('22646'), r.e('30419'), r.e('24539')]).then(r.bind(r, 760558));
                    return (r) => {
                        let { onClose: i, ...a } = r;
                        return (0, s.jsx)(n, {
                            ...a,
                            onClose: (e) => {
                                i(), w(e);
                            },
                            selectedGuild: T,
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
            guildId: T.id,
            closeLayer: P,
            totalNumberOfSlotsToAssign: null != o ? o : 1,
            onCloseModal: w,
            disablePremiumUpsell: A,
            onSubscriptionConfirmation: I,
            inPopout: C,
            applicationId: N
        });
}
