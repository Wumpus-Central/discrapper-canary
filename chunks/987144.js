n.d(t, {
    g: () => v,
}),
    n(321073),
    n(848778),
    n(896048);
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(384904),
    o = n(923408),
    s = n(73825),
    l = n(287809),
    c = n(178368),
    u = n(97352),
    d = n(954571),
    f = n(473145),
    p = n(212637),
    _ = n(652215);

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

function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = b(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let O = "apply-guild-boost-modal";
async function v(e) {
    let {
            analyticsLocations: t,
            analyticsLocation: h,
            analyticsSourceLocation: g,
            numberOfBoostsToAdd: b,
            onClose: v,
            onLoading: A,
            closeLayer: I,
            onSubscriptionConfirmation: S,
            onSubscribeComplete: T,
            guild: C,
            handleSubscribeModalClose: N,
            disablePremiumUpsell: w,
            inPopout: R,
            applicationId: P,
            intent: D,
        } = e,
        L = R ? i.KX8 : i.SYi,
        x = l.default.getCurrentUser();
    if (null == x) return;
    if (!x.verified)
        return void (0, i.mMO)(
            async () => {
                let { default: e } = await Promise.all([n.e("12206"), n.e("90406")]).then(n.bind(n, 661925));
                return (t) => {
                    let { onClose: n } = t,
                        i = y(t, ["onClose"]);
                    return (0, r.jsx)(
                        e,
                        E(m({}, i), {
                            onClose: n,
                        }),
                    );
                };
            },
            {
                contextKey: L,
            },
        );
    let M = [];
    u.A.isLoadedForPremiumSKUs() || M.push((0, s.zS)()),
        c.A.hasFetched || (M.push(a.hP()), M.push((0, o.CD)())),
        M.length > 0 && (null == A || A(!0), await Promise.allSettled(M), null == A || A(!1));
    let j = (0, f.D$)(c.A.boostSlots),
        k = j.length,
        U = (e) => {
            null == v || v(), null == N || N(e);
        },
        G = () => {
            null == v || v(),
                null == I || I(),
                d.default.track(_.HAw.MODAL_DISMISSED, {
                    type: _.liQ.PREMIUM_GUILD_USER_MODAL,
                    location_section: h.section,
                });
        };
    if (k > 0 && (null == b || k >= b)) {
        let e;
        1 === k ? (e = j.slice(0, 1)) : null != b && (e = j.slice(0, b)),
            await (0, i.mMO)(
                async () => {
                    let { default: t } = await Promise.all([
                        n.e("62175"),
                        n.e("62733"),
                        n.e("34749"),
                        n.e("40543"),
                    ]).then(n.bind(n, 657516));
                    return (n) => {
                        let { onClose: i } = n,
                            a = y(n, ["onClose"]);
                        return (0, r.jsx)(
                            t,
                            E(m({}, a), {
                                onClose: (e) => {
                                    i(), U(e);
                                },
                                selectedGuild: C,
                                locationSection: _.liQ.PREMIUM_GUILD_USER_MODAL,
                                guildBoostSlots: e,
                                intent: D,
                            }),
                        );
                    };
                },
                {
                    modalKey: O,
                    onCloseRequest: () => {
                        (0, i.OoC)(O), U(!1);
                    },
                    contextKey: L,
                },
            );
    } else
        (0, p.A)({
            analyticsLocations: t,
            analyticsLocation: h,
            analyticsSourceLocation: g,
            guildId: C.id,
            closeLayer: G,
            totalNumberOfSlotsToAssign: null != b ? b : 1,
            onCloseModal: U,
            disablePremiumUpsell: w,
            onSubscriptionConfirmation: S,
            onSubscribeComplete: T,
            inPopout: R,
            applicationId: P,
            intent: D,
        });
}
