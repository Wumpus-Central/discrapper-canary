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
    _ = n(852679),
    p = n(981631);
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
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = y(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let v = 'apply-guild-boost-modal';
async function O(e) {
    let { analyticsLocations: t, analyticsLocation: h, analyticsSourceLocation: g, numberOfBoostsToAdd: y, onClose: O, closeLayer: I, onSubscriptionConfirmation: S, onSubscribeComplete: T, guild: N, handleSubscribeModalClose: A, disablePremiumUpsell: C, inPopout: R, applicationId: P, intent: w } = e,
        D = R ? i.u1M : i.z1l,
        L = l.default.getCurrentUser();
    if (null == L) return;
    if (!L.verified)
        return void (0, i.ZDy)(
            async () => {
                let { default: e } = await n.e('20102').then(n.bind(n, 444688));
                return (t) => {
                    var { onClose: n } = t,
                        i = b(t, ['onClose']);
                    return (0, r.jsx)(e, E(m({}, i), { onClose: n }));
                };
            },
            { contextKey: D }
        );
    let x = [];
    u.Z.isLoadedForPremiumSKUs() || x.push((0, s.Y2)()), c.Z.hasFetched || (x.push(o.jg()), x.push((0, a.X8)())), x.length > 0 && (await Promise.allSettled(x));
    let M = (0, f.vx)(c.Z.boostSlots),
        k = M.length,
        j = (e) => {
            null == O || O(), null == A || A(e);
        },
        U = () => {
            null == O || O(),
                null == I || I(),
                d.default.track(p.rMx.MODAL_DISMISSED, {
                    type: p.ZY5.PREMIUM_GUILD_USER_MODAL,
                    location_section: h.section
                });
        };
    if (k > 0 && (null == y || k >= y)) {
        let e;
        1 === k ? (e = M.slice(0, 1)) : null != y && (e = M.slice(0, y)),
            await (0, i.ZDy)(
                async () => {
                    let { default: t } = await Promise.all([n.e('22646'), n.e('30419'), n.e('80978')]).then(n.bind(n, 760558));
                    return (n) => {
                        var { onClose: i } = n,
                            o = b(n, ['onClose']);
                        return (0, r.jsx)(
                            t,
                            E(m({}, o), {
                                onClose: (e) => {
                                    i(), j(e);
                                },
                                selectedGuild: N,
                                locationSection: p.ZY5.PREMIUM_GUILD_USER_MODAL,
                                guildBoostSlots: e
                            })
                        );
                    };
                },
                {
                    modalKey: v,
                    onCloseRequest: () => {
                        (0, i.Mr3)(v), j(!1);
                    },
                    contextKey: D
                }
            );
    } else
        (0, _.Z)({
            analyticsLocations: t,
            analyticsLocation: h,
            analyticsSourceLocation: g,
            guildId: N.id,
            closeLayer: U,
            totalNumberOfSlotsToAssign: null != y ? y : 1,
            onCloseModal: j,
            disablePremiumUpsell: C,
            onSubscriptionConfirmation: S,
            onSubscribeComplete: T,
            inPopout: R,
            applicationId: P,
            intent: w
        });
}
