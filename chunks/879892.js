n.d(t, { u: () => O }), n(653041), n(998459), n(47120);
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(355467),
    a = n(179360),
    s = n(821849),
    l = n(594174),
    c = n(314884),
    u = n(509545),
    d = n(626135),
    f = n(267642),
    p = n(852679),
    _ = n(981631);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = b(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let y = 'apply-guild-boost-modal';
async function O(e) {
    let { analyticsLocations: t, analyticsLocation: h, analyticsSourceLocation: g, numberOfBoostsToAdd: b, onClose: O, closeLayer: S, onSubscriptionConfirmation: I, guild: T, handleSubscribeModalClose: N, disablePremiumUpsell: A, inPopout: C, applicationId: R } = e,
        P = C ? i.u1M : i.z1l,
        w = l.default.getCurrentUser();
    if (null == w) return;
    if (!w.verified) {
        (0, i.ZDy)(
            async () => {
                let { default: e } = await n.e('20102').then(n.bind(n, 444688));
                return (t) => {
                    var { onClose: n } = t,
                        i = v(t, ['onClose']);
                    return (0, r.jsx)(e, E(m({}, i), { onClose: n }));
                };
            },
            { contextKey: P }
        );
        return;
    }
    let D = [];
    u.Z.isLoadedForPremiumSKUs() || D.push((0, s.Y2)()), c.Z.hasFetched || (D.push(o.jg()), D.push((0, a.X8)())), D.length > 0 && (await Promise.allSettled(D));
    let x = (0, f.vx)(c.Z.boostSlots),
        L = x.length,
        M = (e) => {
            null == O || O(), null == N || N(e);
        },
        k = () => {
            null == O || O(),
                null == S || S(),
                d.default.track(_.rMx.MODAL_DISMISSED, {
                    type: _.ZY5.PREMIUM_GUILD_USER_MODAL,
                    location_section: h.section
                });
        };
    if (L > 0 && (null == b || L >= b)) {
        let e;
        1 === L ? (e = x.slice(0, 1)) : null != b && (e = x.slice(0, b)),
            await (0, i.ZDy)(
                async () => {
                    let { default: t } = await Promise.all([n.e('8016'), n.e('22646'), n.e('30419'), n.e('66951')]).then(n.bind(n, 760558));
                    return (n) => {
                        var { onClose: i } = n,
                            o = v(n, ['onClose']);
                        return (0, r.jsx)(
                            t,
                            E(m({}, o), {
                                onClose: (e) => {
                                    i(), M(e);
                                },
                                selectedGuild: T,
                                locationSection: _.ZY5.PREMIUM_GUILD_USER_MODAL,
                                guildBoostSlots: e
                            })
                        );
                    };
                },
                {
                    modalKey: y,
                    onCloseRequest: () => {
                        (0, i.Mr3)(y), M(!1);
                    },
                    contextKey: P
                }
            );
    } else
        (0, p.Z)({
            analyticsLocations: t,
            analyticsLocation: h,
            analyticsSourceLocation: g,
            guildId: T.id,
            closeLayer: k,
            totalNumberOfSlotsToAssign: null != b ? b : 1,
            onCloseModal: M,
            disablePremiumUpsell: A,
            onSubscriptionConfirmation: I,
            inPopout: C,
            applicationId: R
        });
}
