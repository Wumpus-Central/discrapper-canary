n.d(t, { u: () => m }), n(653041), n(998459), n(47120);
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(355467),
    s = n(179360),
    o = n(821849),
    l = n(594174),
    u = n(314884),
    c = n(509545),
    d = n(626135),
    f = n(267642),
    _ = n(852679),
    p = n(981631);
let h = 'apply-guild-boost-modal';
async function m(e) {
    let { analyticsLocations: t, analyticsLocation: m, analyticsSourceLocation: g, numberOfBoostsToAdd: E, onClose: v, closeLayer: y, onSubscriptionConfirmation: I, guild: T, handleSubscribeModalClose: b, disablePremiumUpsell: S, inPopout: A, applicationId: N } = e,
        C = A ? r.u1M : r.z1l,
        R = l.default.getCurrentUser();
    if (null == R) return;
    if (!R.verified) {
        (0, r.ZDy)(
            async () => {
                let { default: e } = await n.e('20102').then(n.bind(n, 444688));
                return (t) => {
                    let { onClose: n, ...r } = t;
                    return (0, i.jsx)(e, {
                        ...r,
                        onClose: n
                    });
                };
            },
            { contextKey: C }
        );
        return;
    }
    let O = [];
    c.Z.isLoadedForPremiumSKUs() || O.push((0, o.Y2)()), u.Z.hasFetched || (O.push(a.jg()), O.push((0, s.X8)())), O.length > 0 && (await Promise.allSettled(O));
    let D = (0, f.vx)(u.Z.boostSlots),
        L = D.length,
        x = (e) => {
            null == v || v(), null == b || b(e);
        },
        P = () => {
            null == v || v(),
                null == y || y(),
                d.default.track(p.rMx.MODAL_DISMISSED, {
                    type: p.ZY5.PREMIUM_GUILD_USER_MODAL,
                    location_section: m.section
                });
        };
    if (L > 0 && (null == E || L >= E)) {
        let e;
        1 === L ? (e = D.slice(0, 1)) : null != E && (e = D.slice(0, E)),
            await (0, r.ZDy)(
                async () => {
                    let { default: t } = await Promise.all([n.e('8016'), n.e('22646'), n.e('30419'), n.e('1634')]).then(n.bind(n, 760558));
                    return (n) => {
                        let { onClose: r, ...a } = n;
                        return (0, i.jsx)(t, {
                            ...a,
                            onClose: (e) => {
                                r(), x(e);
                            },
                            selectedGuild: T,
                            locationSection: p.ZY5.PREMIUM_GUILD_USER_MODAL,
                            guildBoostSlots: e
                        });
                    };
                },
                {
                    modalKey: h,
                    onCloseRequest: () => {
                        (0, r.Mr3)(h), x(!1);
                    },
                    contextKey: C
                }
            );
    } else
        (0, _.Z)({
            analyticsLocations: t,
            analyticsLocation: m,
            analyticsSourceLocation: g,
            guildId: T.id,
            closeLayer: P,
            totalNumberOfSlotsToAssign: null != E ? E : 1,
            onCloseModal: x,
            disablePremiumUpsell: S,
            onSubscriptionConfirmation: I,
            inPopout: A,
            applicationId: N
        });
}
