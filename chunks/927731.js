n.d(t, { Z: () => S }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(392711),
    o = n(399606),
    c = n(215569),
    d = n(481060),
    u = n(852860),
    m = n(999382),
    p = n(644542),
    g = n(923726),
    h = n(584825),
    f = n(295141),
    b = n(723047),
    x = n(290348),
    j = n(450215),
    N = n(981631),
    v = n(388032),
    _ = n(545391);
function O(e) {
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
let C = 'guild-role-subscription-tier-template-selector',
    I = (e) => {
        let [t, n] = i.useState(!0),
            [r, s] = i.useState();
        return (
            i.useEffect(() => {
                n(!0),
                    (0, f.X)(e).then((e) => {
                        s(e), n(!1);
                    });
            }, [e]),
            {
                loading: t,
                priceTiers: r
            }
        );
    };
function E(e) {
    let { guildId: t, priceTiers: s, groupListingId: f } = e,
        I = (0, h._k)(f),
        { editStateIds: E, addNewEditStateId: S, addNewEditStateFromTemplate: T, removeEditStateId: P } = x.B7(f, t, { includeSoftDeleted: !0 }),
        [w, R] = i.useState({}),
        D = i.useMemo(() => {
            let e = E.map((e) => {
                var t;
                return null !== (t = w[e]) && void 0 !== t ? t : e;
            });
            return (0, l.uniq)(e);
        }, [E, w]),
        Z = (e, t) => {
            R((n) => y(O({}, n), { [e]: t }));
        },
        A = (0, g.ss)(t),
        k = (0, g.Gp)(),
        W = i.useCallback(() => {
            k &&
                p.jJ.trackExposure({
                    guildId: t,
                    location: 'b2d9de_1'
                }),
                k && A
                    ? (0, d.ZDy)(
                          async () => {
                              let { default: e } = await n.e('9558').then(n.bind(n, 34460));
                              return (n) =>
                                  (0, r.jsx)(
                                      e,
                                      y(O({}, n), {
                                          guildId: t,
                                          addNewEditStateFromTemplate: T,
                                          addNewEditStateFromScratch: S,
                                          priceTiers: s
                                      })
                                  );
                          },
                          { modalKey: C }
                      )
                    : S();
        }, [t, T, S, s, k, A]),
        L = x.Lo(D),
        M = i.useCallback(() => D.forEach(x.GM), [D]),
        U = (0, b.mY)(),
        G = (0, o.e7)([m.Z], () => m.Z.getProps().subsection);
    return (
        i.useEffect(
            () => (
                G === N.KsC.ROLE_SUBSCRIPTION_TIER_TEMPLATE && W(),
                () => {
                    (0, d.Mr3)(C);
                }
            ),
            [G, W]
        ),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: _.groupListings,
                    children: [
                        D.map((e) =>
                            (0, r.jsx)(
                                j.Z,
                                {
                                    guildId: t,
                                    initialEditStateId: e,
                                    allSubscriptionListings: I,
                                    priceTiers: s,
                                    groupListingId: f,
                                    onDeleteEditState: () => P(e),
                                    onBeforeDispatchNewListing: (t) => Z(t.id, e),
                                    onAfterDispatchNewListing: () => P(e)
                                },
                                e
                            )
                        ),
                        (0, r.jsxs)(d.P3F, {
                            onClick: U ? void 0 : W,
                            className: a()(_.createTierButton, { [_.disabled]: U }),
                            'aria-disabled': U,
                            children: [
                                (0, r.jsx)(d.oFk, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: _.createTierIcon
                                }),
                                (0, r.jsx)(d.Text, {
                                    variant: 'text-md/normal',
                                    color: 'interactive-active',
                                    children: v.NW.string(v.t.PiFnn5)
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)(c.W, {
                    component: 'div',
                    className: _.contentRegion,
                    children: L && (0, r.jsx)(d.oXn, { children: (0, r.jsx)(u.Z, { onReset: M }) })
                })
            ]
        })
    );
}
function S(e) {
    let { guildId: t } = e,
        { priceTiers: n } = I(t),
        i = (0, h.GG)(t),
        { maxTiers: s } = (0, g.s1)(t),
        a = i.map((e) => e.id);
    return (0, r.jsxs)(d.hjN, {
        title: v.NW.string(v.t['72+Soq']),
        className: _.container,
        children: [
            (0, r.jsx)(d.R94, {
                type: d.R94.Types.DESCRIPTION,
                children: v.NW.format(v.t.nHRSvL, { maxTiers: s })
            }),
            (0, r.jsx)(d.LZC, { size: 16 }),
            (0, r.jsx)(E, {
                priceTiers: n,
                guildId: t,
                groupListingId: a[0]
            })
        ]
    });
}
