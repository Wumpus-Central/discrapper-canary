n.d(t, { Z: () => S }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(392711),
    o = n(399606),
    c = n(215569),
    u = n(481060),
    d = n(852860),
    m = n(999382),
    g = n(644542),
    p = n(923726),
    h = n(584825),
    f = n(295141),
    x = n(723047),
    b = n(290348),
    j = n(450215),
    _ = n(981631),
    v = n(388032),
    O = n(199824);
function C(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
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
let N = 'guild-role-subscription-tier-template-selector',
    I = (e) => {
        let [t, n] = i.useState(!0),
            [r, l] = i.useState();
        return (
            i.useEffect(() => {
                n(!0),
                    (0, f.X)(e).then((e) => {
                        l(e), n(!1);
                    });
            }, [e]),
            {
                loading: t,
                priceTiers: r
            }
        );
    };
function E(e) {
    let { guildId: t, priceTiers: l, groupListingId: f } = e,
        I = (0, h._k)(f),
        { editStateIds: E, addNewEditStateId: S, addNewEditStateFromTemplate: T, removeEditStateId: P } = b.B7(f, t, { includeSoftDeleted: !0 }),
        [w, R] = i.useState({}),
        Z = i.useMemo(() => {
            let e = E.map((e) => {
                var t;
                return null != (t = w[e]) ? t : e;
            });
            return (0, a.uniq)(e);
        }, [E, w]),
        D = (e, t) => {
            R((n) => y(C({}, n), { [e]: t }));
        },
        k = (0, p.ss)(t),
        A = (0, p.Gp)(),
        L = i.useCallback(() => {
            A &&
                g.jJ.trackExposure({
                    guildId: t,
                    location: 'b2d9de_1'
                }),
                A && k
                    ? (0, u.ZDy)(
                          async () => {
                              let { default: e } = await n.e('9558').then(n.bind(n, 34460));
                              return (n) =>
                                  (0, r.jsx)(
                                      e,
                                      y(C({}, n), {
                                          guildId: t,
                                          addNewEditStateFromTemplate: T,
                                          addNewEditStateFromScratch: S,
                                          priceTiers: l
                                      })
                                  );
                          },
                          { modalKey: N }
                      )
                    : S();
        }, [t, T, S, l, A, k]),
        M = b.Lo(Z),
        G = i.useCallback(() => Z.forEach(b.GM), [Z]),
        U = (0, x.mY)(),
        B = (0, o.e7)([m.Z], () => m.Z.getProps().subsection);
    return (
        i.useEffect(
            () => (
                B === _.KsC.ROLE_SUBSCRIPTION_TIER_TEMPLATE && L(),
                () => {
                    (0, u.Mr3)(N);
                }
            ),
            [B, L]
        ),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: O.groupListings,
                    children: [
                        Z.map((e) =>
                            (0, r.jsx)(
                                j.Z,
                                {
                                    guildId: t,
                                    initialEditStateId: e,
                                    allSubscriptionListings: I,
                                    priceTiers: l,
                                    groupListingId: f,
                                    onDeleteEditState: () => P(e),
                                    onBeforeDispatchNewListing: (t) => D(t.id, e),
                                    onAfterDispatchNewListing: () => P(e)
                                },
                                e
                            )
                        ),
                        (0, r.jsxs)(u.P3F, {
                            onClick: U ? void 0 : L,
                            className: s()(O.createTierButton, { [O.disabled]: U }),
                            'aria-disabled': U,
                            children: [
                                (0, r.jsx)(u.oFk, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: O.createTierIcon
                                }),
                                (0, r.jsx)(u.Text, {
                                    variant: 'text-md/normal',
                                    color: 'interactive-active',
                                    children: v.intl.string(v.t.PiFnn5)
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)(c.W, {
                    component: 'div',
                    className: O.contentRegion,
                    children: M && (0, r.jsx)(u.oXn, { children: (0, r.jsx)(d.Z, { onReset: G }) })
                })
            ]
        })
    );
}
function S(e) {
    let { guildId: t } = e,
        { priceTiers: n } = I(t),
        i = (0, h.GG)(t),
        { maxTiers: l } = (0, p.s1)(t),
        s = i.map((e) => e.id);
    return (0, r.jsxs)(u.hjN, {
        title: v.intl.string(v.t['72+Soq']),
        className: O.container,
        children: [
            (0, r.jsx)(u.R94, {
                type: u.R94.Types.DESCRIPTION,
                children: v.intl.format(v.t.nHRSvL, { maxTiers: l })
            }),
            (0, r.jsx)(u.LZC, { size: 16 }),
            (0, r.jsx)(E, {
                priceTiers: n,
                guildId: t,
                groupListingId: s[0]
            })
        ]
    });
}
