n.d(t, { Z: () => I }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(392711),
    o = n(399606),
    c = n(215569),
    d = n(796027),
    u = n(481060),
    g = n(999382),
    m = n(644542),
    p = n(923726),
    f = n(584825),
    h = n(295141),
    b = n(723047),
    x = n(290348),
    j = n(450215),
    _ = n(981631),
    v = n(388032),
    O = n(255311);
function C(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let N = "guild-role-subscription-tier-template-selector";
function E(e) {
    let { guildId: t, priceTiers: l, groupListingId: h } = e,
        E = (0, f._k)(h),
        {
            editStateIds: I,
            addNewEditStateId: S,
            addNewEditStateFromTemplate: T,
            removeEditStateId: P,
        } = x.B7(h, t, { includeSoftDeleted: !0 }),
        [w, Z] = i.useState({}),
        R = i.useMemo(() => {
            let e = I.map((e) => {
                var t;
                return null != (t = w[e]) ? t : e;
            });
            return (0, s.uniq)(e);
        }, [I, w]),
        D = (0, p.ss)(t),
        A = (0, p.Gp)(),
        L = i.useCallback(() => {
            A &&
                m.jJ.trackExposure({
                    guildId: t,
                    location: "b2d9de_1",
                }),
                A && D
                    ? (0, u.ZDy)(
                          async () => {
                              let { default: e } = await n.e("9558").then(n.bind(n, 34460));
                              return (n) =>
                                  (0, r.jsx)(
                                      e,
                                      y(C({}, n), {
                                          guildId: t,
                                          addNewEditStateFromTemplate: T,
                                          addNewEditStateFromScratch: S,
                                          priceTiers: l,
                                      }),
                                  );
                          },
                          { modalKey: N },
                      )
                    : S();
        }, [t, T, S, l, A, D]),
        k = x.Lo(R),
        G = i.useCallback(() => R.forEach(x.GM), [R]),
        M = (0, b.mY)(),
        U = (0, o.e7)([g.Z], () => g.Z.getProps().subsection);
    return (
        i.useEffect(
            () => (
                U === _.KsC.ROLE_SUBSCRIPTION_TIER_TEMPLATE && L(),
                () => {
                    (0, u.Mr3)(N);
                }
            ),
            [U, L],
        ),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: O.groupListings,
                    children: [
                        R.map((e) =>
                            (0, r.jsx)(
                                j.Z,
                                {
                                    guildId: t,
                                    initialEditStateId: e,
                                    allSubscriptionListings: E,
                                    priceTiers: l,
                                    groupListingId: h,
                                    onDeleteEditState: () => P(e),
                                    onBeforeDispatchNewListing: (t) => {
                                        var n;
                                        return (n = t.id), void Z((t) => y(C({}, t), { [n]: e }));
                                    },
                                    onAfterDispatchNewListing: () => P(e),
                                },
                                e,
                            ),
                        ),
                        (0, r.jsxs)(u.P3F, {
                            onClick: M ? void 0 : L,
                            className: a()(O.createTierButton, { [O.disabled]: M }),
                            "aria-disabled": M,
                            children: [
                                (0, r.jsx)(u.oFk, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: O.createTierIcon,
                                }),
                                (0, r.jsx)(u.Text, {
                                    variant: "text-md/normal",
                                    color: "interactive-active",
                                    children: v.intl.string(v.t.PiFnny),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(c.W, {
                    component: "div",
                    className: O.contentRegion,
                    children: k && (0, r.jsx)(u.oXn, { children: (0, r.jsx)(d.Z, { onReset: G }) }),
                }),
            ],
        })
    );
}
function I(e) {
    let { guildId: t } = e,
        { priceTiers: n } = ((e) => {
            let [t, n] = i.useState(!0),
                [r, l] = i.useState();
            return (
                i.useEffect(() => {
                    n(!0),
                        (0, h.X)(e).then((e) => {
                            l(e), n(!1);
                        });
                }, [e]),
                {
                    loading: t,
                    priceTiers: r,
                }
            );
        })(t),
        l = (0, f.GG)(t),
        { maxTiers: a } = (0, p.s1)(t),
        s = l.map((e) => e.id);
    return (0, r.jsx)(u.gNt, {
        label: v.intl.string(v.t["72+Sos"]),
        description: v.intl.format(v.t.nHRSvM, { maxTiers: a }),
        children: (0, r.jsx)(E, {
            priceTiers: n,
            guildId: t,
            groupListingId: s[0],
        }),
    });
}
