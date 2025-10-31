n.d(t, { u: () => v }), n(539854), n(993155), n(388685);
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(355467),
    o = n(179360),
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let O = "apply-guild-boost-modal";
async function v(e) {
    let {
            analyticsLocations: t,
            analyticsLocation: h,
            analyticsSourceLocation: g,
            numberOfBoostsToAdd: y,
            onClose: v,
            onLoading: I,
            closeLayer: T,
            onSubscriptionConfirmation: S,
            onSubscribeComplete: A,
            guild: C,
            handleSubscribeModalClose: N,
            disablePremiumUpsell: R,
            inPopout: P,
            applicationId: w,
            intent: D,
        } = e,
        x = P ? i.u1M : i.z1l,
        L = l.default.getCurrentUser();
    if (null == L) return;
    if (!L.verified)
        return void (0, i.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e("88470"), n.e("20102")]).then(n.bind(n, 444688));
                return (t) => {
                    var { onClose: n } = t,
                        i = b(t, ["onClose"]);
                    return (0, r.jsx)(e, E(m({}, i), { onClose: n }));
                };
            },
            { contextKey: x },
        );
    let M = [];
    u.Z.isLoadedForPremiumSKUs() || M.push((0, s.Y2)()),
        c.Z.hasFetched || (M.push(a.jg()), M.push((0, o.X8)())),
        M.length > 0 && (null == I || I(!0), await Promise.allSettled(M), null == I || I(!1));
    let j = (0, f.vx)(c.Z.boostSlots),
        k = j.length,
        U = (e) => {
            null == v || v(), null == N || N(e);
        },
        G = () => {
            null == v || v(),
                null == T || T(),
                d.default.track(p.rMx.MODAL_DISMISSED, {
                    type: p.ZY5.PREMIUM_GUILD_USER_MODAL,
                    location_section: h.section,
                });
        };
    if (k > 0 && (null == y || k >= y)) {
        let e;
        1 === k ? (e = j.slice(0, 1)) : null != y && (e = j.slice(0, y)),
            await (0, i.ZDy)(
                async () => {
                    let { default: t } = await Promise.resolve().then(n.bind(n, 760558));
                    return (n) => {
                        var { onClose: i } = n,
                            a = b(n, ["onClose"]);
                        return (0, r.jsx)(
                            t,
                            E(m({}, a), {
                                onClose: (e) => {
                                    i(), U(e);
                                },
                                selectedGuild: C,
                                locationSection: p.ZY5.PREMIUM_GUILD_USER_MODAL,
                                guildBoostSlots: e,
                            }),
                        );
                    };
                },
                {
                    modalKey: O,
                    onCloseRequest: () => {
                        (0, i.Mr3)(O), U(!1);
                    },
                    contextKey: x,
                },
            );
    } else
        (0, _.Z)({
            analyticsLocations: t,
            analyticsLocation: h,
            analyticsSourceLocation: g,
            guildId: C.id,
            closeLayer: G,
            totalNumberOfSlotsToAssign: null != y ? y : 1,
            onCloseModal: U,
            disablePremiumUpsell: R,
            onSubscriptionConfirmation: S,
            onSubscribeComplete: A,
            inPopout: P,
            applicationId: w,
            intent: D,
        });
}
