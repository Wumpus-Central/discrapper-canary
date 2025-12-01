n.d(t, { h: () => v }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(913527),
    o = n.n(a),
    s = n(793030),
    l = n(481060),
    c = n(355467),
    u = n(100527),
    d = n(906732),
    f = n(313201),
    p = n(305342),
    _ = n(293810),
    m = n(388032),
    h = n(640749);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
let b = "MMMM Do, YYYY",
    y = (e) => {
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
    O = (e) => {
        let { transitionState: t, groupListing: n, listing: i, subscription: a, onClose: c } = e,
            g = (0, f.Dt)(),
            { analyticsLocations: E } = (0, d.ZP)(u.Z.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL),
            { cancelSubscription: O, error: v, submitting: S } = y(E),
            I = async () => {
                (await O(a.id)) && c();
            },
            T = i.role_benefits.benefits.filter((e) => e.ref_type === _.Qs.CHANNEL),
            A = i.role_benefits.benefits.filter((e) => e.ref_type === _.Qs.INTANGIBLE),
            C = o()(a.currentPeriodEnd).format(b),
            N = m.intl.formatToPlainString(m.t.KsMRP5, {
                numChannels: T.length,
                numAdditionalBenefits: A.length,
                subscriptionEndDate: C,
            });
        return (0, r.jsx)(s.Modal, {
            transitionState: t,
            "aria-labelledby": g,
            actions: [
                {
                    text: m.intl.string(m.t.EP6EPb),
                    variant: "secondary",
                    onClick: c,
                },
                {
                    variant: "critical-primary",
                    text: m.intl.string(m.t.F6lUDF),
                    onClick: I,
                    loading: S,
                },
            ],
            title: m.intl.string(m.t.O6l5tM),
            subtitle: N,
            onClose: c,
            children: (0, r.jsxs)(l.Kqy, {
                gap: 8,
                children: [
                    null != v
                        ? (0, r.jsx)(l.M14, {
                              type: "critical",
                              children: v.message,
                          })
                        : null,
                    (0, r.jsx)(p.c, {
                        listingId: i.id,
                        guildId: n.guild_id,
                        className: h.benefits,
                    }),
                ],
            }),
        });
    },
    v = (e) => {
        (0, l.h7j)((t) => (0, r.jsx)(O, E({}, t, e)));
    };
