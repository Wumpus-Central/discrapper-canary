n.d(t, { Z: () => I }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    s = n.n(l),
    a = n(392711),
    o = n(399606),
    c = n(215569),
    u = n(796027),
    d = n(481060),
    g = n(999382),
    m = n(644542),
    p = n(923726),
    f = n(584825),
    h = n(295141),
    x = n(723047),
    b = n(290348),
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
        } = b.B7(h, t, { includeSoftDeleted: !0 }),
        [w, Z] = i.useState({}),
        R = i.useMemo(() => {
            let e = I.map((e) => {
                var t;
                return null != (t = w[e]) ? t : e;
            });
            return (0, a.uniq)(e);
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
                    ? (0, d.ZDy)(
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
        k = b.Lo(R),
        G = i.useCallback(() => R.forEach(b.GM), [R]),
        M = (0, x.mY)(),
        U = (0, o.e7)([g.Z], () => g.Z.getProps().subsection);
    return (
        i.useEffect(
            () => (
                U === _.KsC.ROLE_SUBSCRIPTION_TIER_TEMPLATE && L(),
                () => {
                    (0, d.Mr3)(N);
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
                        (0, r.jsxs)(d.P3F, {
                            onClick: M ? void 0 : L,
                            className: s()(O.createTierButton, { [O.disabled]: M }),
                            "aria-disabled": M,
                            children: [
                                (0, r.jsx)(d.oFk, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: O.createTierIcon,
                                }),
                                (0, r.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    color: "interactive-text-active",
                                    children: v.intl.string(v.t.PiFnny),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(c.W, {
                    component: "div",
                    className: O.contentRegion,
                    children: k && (0, r.jsx)(d.oXn, { children: (0, r.jsx)(u.Z, { onReset: G }) }),
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
        { maxTiers: s } = (0, p.s1)(t),
        a = l.map((e) => e.id);
    return (0, r.jsx)(d.gNt, {
        label: v.intl.string(v.t["72+Sos"]),
        description: v.intl.format(v.t.nHRSvM, { maxTiers: s }),
        children: (0, r.jsx)(E, {
            priceTiers: n,
            guildId: t,
            groupListingId: a[0],
        }),
    });
}
