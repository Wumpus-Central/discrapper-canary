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
    g = n(644542),
    p = n(923726),
    h = n(584825),
    f = n(295141),
    b = n(723047),
    x = n(290348),
    j = n(450215),
    N = n(981631),
    _ = n(388032),
    v = n(199824);
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
function O(e, t) {
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
let y = 'guild-role-subscription-tier-template-selector',
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
        Z = i.useMemo(() => {
            let e = E.map((e) => {
                var t;
                return null != (t = w[e]) ? t : e;
            });
            return (0, l.uniq)(e);
        }, [E, w]),
        D = (e, t) => {
            R((n) => O(C({}, n), { [e]: t }));
        },
        A = (0, p.ss)(t),
        k = (0, p.Gp)(),
        W = i.useCallback(() => {
            k &&
                g.jJ.trackExposure({
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
                                      O(C({}, n), {
                                          guildId: t,
                                          addNewEditStateFromTemplate: T,
                                          addNewEditStateFromScratch: S,
                                          priceTiers: s
                                      })
                                  );
                          },
                          { modalKey: y }
                      )
                    : S();
        }, [t, T, S, s, k, A]),
        L = x.Lo(Z),
        M = i.useCallback(() => Z.forEach(x.GM), [Z]),
        G = (0, b.mY)(),
        U = (0, o.e7)([m.Z], () => m.Z.getProps().subsection);
    return (
        i.useEffect(
            () => (
                U === N.KsC.ROLE_SUBSCRIPTION_TIER_TEMPLATE && W(),
                () => {
                    (0, d.Mr3)(y);
                }
            ),
            [U, W]
        ),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: v.groupListings,
                    children: [
                        Z.map((e) =>
                            (0, r.jsx)(
                                j.Z,
                                {
                                    guildId: t,
                                    initialEditStateId: e,
                                    allSubscriptionListings: I,
                                    priceTiers: s,
                                    groupListingId: f,
                                    onDeleteEditState: () => P(e),
                                    onBeforeDispatchNewListing: (t) => D(t.id, e),
                                    onAfterDispatchNewListing: () => P(e)
                                },
                                e
                            )
                        ),
                        (0, r.jsxs)(d.P3F, {
                            onClick: G ? void 0 : W,
                            className: a()(v.createTierButton, { [v.disabled]: G }),
                            'aria-disabled': G,
                            children: [
                                (0, r.jsx)(d.oFk, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: v.createTierIcon
                                }),
                                (0, r.jsx)(d.Text, {
                                    variant: 'text-md/normal',
                                    color: 'interactive-active',
                                    children: _.NW.string(_.t.PiFnn5)
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)(c.W, {
                    component: 'div',
                    className: v.contentRegion,
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
        { maxTiers: s } = (0, p.s1)(t),
        a = i.map((e) => e.id);
    return (0, r.jsxs)(d.hjN, {
        title: _.NW.string(_.t['72+Soq']),
        className: v.container,
        children: [
            (0, r.jsx)(d.R94, {
                type: d.R94.Types.DESCRIPTION,
                children: _.NW.format(_.t.nHRSvL, { maxTiers: s })
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
