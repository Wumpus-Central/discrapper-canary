n.d(t, { h: () => S }), n(388685), n(953529);
var r = n(951288),
    i = n(647438),
    a = n(913527),
    o = n.n(a),
    s = n(755721),
    l = n(481060),
    c = n(355467),
    u = n(100527),
    d = n(906732),
    f = n(313201),
    _ = n(73346),
    p = n(584825),
    h = n(305342),
    m = n(293810),
    g = n(388032),
    E = n(640749);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
let O = 440,
    v = "MMMM Do, YYYY",
    I = (e) => {
        let [t, n] = i.useState(!1),
            [r, a] = i.useState(null);
        return {
            cancelSubscription: async (t) => {
                try {
                    return n(!0), await c.EO(t, e), !0;
                } catch (e) {
                    a(e);
                } finally {
                    n(!1);
                }
            },
            error: r,
            submitting: t,
        };
    },
    T = (e) => {
        var t;
        let { transitionState: n, groupListing: i, guildId: a, listing: c, subscription: b, onClose: y } = e,
            T = (0, f.Dt)(),
            S = (0, p.YB)(a),
            A =
                (null == S || null == (t = S.cover_image_asset) ? void 0 : t.application_id) != null
                    ? (0, _._W)(S.cover_image_asset.application_id, S.cover_image_asset, O)
                    : void 0,
            { analyticsLocations: C } = (0, d.ZP)(u.Z.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
            { cancelSubscription: N, error: R, submitting: P } = I(C),
            w = async () => {
                (await N(b.id)) && y();
            },
            D = c.role_benefits.benefits.filter((e) => e.ref_type === m.Qs.CHANNEL),
            x = c.role_benefits.benefits.filter((e) => e.ref_type === m.Qs.INTANGIBLE),
            L = o()(b.currentPeriodEnd).format(v),
            j = g.intl.formatToPlainString(g.t.KsMRPz, {
                numChannels: D.length,
                numAdditionalBenefits: x.length,
                subscriptionEndDate: L,
            });
        return (0, r.jsxs)(l.Y0X, {
            transitionState: n,
            className: E.__invalid_modal,
            "aria-labelledby": T,
            parentComponent: "CancelSubscriptionModal",
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)("img", {
                            src: A,
                            alt: "",
                            className: E.headerImage,
                        }),
                        (0, r.jsx)(l.olH, {
                            withCircleBackground: !0,
                            className: E.closeButton,
                            onClick: y,
                        }),
                    ],
                }),
                null != R ? (0, r.jsx)(l.kzN, { children: R.message }) : null,
                (0, r.jsxs)(l.hzk, {
                    className: E.content,
                    children: [
                        (0, r.jsx)(l.X6q, {
                            id: T,
                            variant: "text-md/medium",
                            className: E.title,
                            children: g.intl.string(g.t.O6l5tL),
                        }),
                        (0, r.jsx)(l.Text, {
                            className: E.description,
                            variant: "text-sm/normal",
                            children: j,
                        }),
                        (0, r.jsx)(h.c, {
                            listingId: c.id,
                            guildId: i.guild_id,
                            className: E.benefits,
                        }),
                    ],
                }),
                (0, r.jsxs)(l.mzw, {
                    className: E.footer,
                    children: [
                        (0, r.jsx)(l.zxk, {
                            variant: "critical-primary",
                            text: g.intl.string(g.t.F6lUDA),
                            onClick: w,
                            loading: P,
                        }),
                        (0, r.jsx)(s.zx, {
                            look: s.zx.Looks.LINK,
                            color: s.zx.Colors.WHITE,
                            className: E.goBackButton,
                            onClick: y,
                            children: g.intl.string(g.t.EP6EPT),
                        }),
                    ],
                }),
            ],
        });
    },
    S = (e) => {
        (0, l.h7j)((t) => (0, r.jsx)(T, y({}, t, e)));
    };
