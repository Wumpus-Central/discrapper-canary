n.d(t, { h: () => j }), n(388685), n(953529);
var i = n(255367),
    r = n(73800),
    s = n(913527),
    a = n.n(s),
    l = n(755721),
    o = n(481060),
    c = n(355467),
    d = n(100527),
    u = n(906732),
    m = n(313201),
    p = n(73346),
    g = n(584825),
    h = n(305342),
    f = n(293810),
    b = n(388032),
    x = n(640749);
let _ = (e) => {
        var t;
        let { transitionState: n, groupListing: s, guildId: _, listing: j, subscription: E, onClose: C } = e,
            O = (0, m.Dt)(),
            v = (0, g.YB)(_),
            S =
                (null == v || null == (t = v.cover_image_asset) ? void 0 : t.application_id) != null
                    ? (0, p._W)(v.cover_image_asset.application_id, v.cover_image_asset, 440)
                    : void 0,
            { analyticsLocations: T } = (0, u.ZP)(d.Z.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
            {
                cancelSubscription: I,
                error: N,
                submitting: y,
            } = ((e) => {
                let [t, n] = r.useState(!1),
                    [i, s] = r.useState(null);
                return {
                    cancelSubscription: async (t) => {
                        try {
                            return n(!0), await c.EO(t, e), !0;
                        } catch (e) {
                            s(e);
                        } finally {
                            n(!1);
                        }
                    },
                    error: i,
                    submitting: t,
                };
            })(T),
            A = async () => {
                (await I(E.id)) && C();
            },
            P = j.role_benefits.benefits.filter((e) => e.ref_type === f.Qs.CHANNEL),
            R = j.role_benefits.benefits.filter((e) => e.ref_type === f.Qs.INTANGIBLE),
            D = a()(E.currentPeriodEnd).format("MMMM Do, YYYY"),
            Z = b.intl.formatToPlainString(b.t.KsMRPz, {
                numChannels: P.length,
                numAdditionalBenefits: R.length,
                subscriptionEndDate: D,
            });
        return (0, i.jsxs)(o.Y0X, {
            transitionState: n,
            className: x.__invalid_modal,
            "aria-labelledby": O,
            parentComponent: "CancelSubscriptionModal",
            children: [
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)("img", {
                            src: S,
                            alt: "",
                            className: x.headerImage,
                        }),
                        (0, i.jsx)(o.olH, {
                            withCircleBackground: !0,
                            className: x.closeButton,
                            onClick: C,
                        }),
                    ],
                }),
                null != N ? (0, i.jsx)(o.kzN, { children: N.message }) : null,
                (0, i.jsxs)(o.hzk, {
                    className: x.content,
                    children: [
                        (0, i.jsx)(o.X6q, {
                            id: O,
                            variant: "text-md/medium",
                            className: x.title,
                            children: b.intl.string(b.t.O6l5tL),
                        }),
                        (0, i.jsx)(o.Text, {
                            className: x.description,
                            variant: "text-sm/normal",
                            children: Z,
                        }),
                        (0, i.jsx)(h.c, {
                            listingId: j.id,
                            guildId: s.guild_id,
                            className: x.benefits,
                        }),
                    ],
                }),
                (0, i.jsxs)(o.mzw, {
                    className: x.footer,
                    children: [
                        (0, i.jsx)(o.zxk, {
                            variant: "critical-primary",
                            text: b.intl.string(b.t.F6lUDA),
                            onClick: A,
                            loading: y,
                        }),
                        (0, i.jsx)(l.zx, {
                            look: l.zx.Looks.LINK,
                            color: l.zx.Colors.WHITE,
                            className: x.goBackButton,
                            onClick: C,
                            children: b.intl.string(b.t.EP6EPT),
                        }),
                    ],
                }),
            ],
        });
    },
    j = (e) => {
        (0, o.h7j)((t) =>
            (0, i.jsx)(
                _,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            i.forEach(function (t) {
                                var i;
                                (i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = i);
                            });
                    }
                    return e;
                })({}, t, e),
            ),
        );
    };
