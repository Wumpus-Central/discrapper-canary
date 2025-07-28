n.d(t, {
    Z: () => h,
    w: () => f
});
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    s = n(259580),
    o = n(73346),
    c = n(817460),
    d = n(723047),
    u = n(388032),
    m = n(748353);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function p(e, t) {
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
function h(e) {
    let { channelBenefits: t, intangibleBenefits: i, subscriptionListings: s, onImport: h } = e,
        f = (0, d.mY)();
    return (0, r.jsx)('div', {
        className: m.container,
        children: s.map((e) =>
            (0, r.jsxs)(
                'div',
                {
                    className: m.row,
                    children: [
                        (0, r.jsx)('img', {
                            alt: '',
                            src: null == e.image_asset ? void 0 : (0, o._W)(e.application_id, e.image_asset, 512),
                            className: l()(m.rowIcon, m.listingImage)
                        }),
                        (0, r.jsxs)('div', {
                            className: m.rowBody,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-md/normal',
                                    color: 'header-primary',
                                    className: l()(m.rowText, m.listingName),
                                    children: e.name
                                }),
                                (0, r.jsx)(a.Text, {
                                    color: 'header-secondary',
                                    variant: 'text-sm/normal',
                                    children: u.intl.format(u.t['QMj+Ii'], {
                                        channels: e.role_benefits.benefits.filter(c.rC).length,
                                        benefits: e.role_benefits.benefits.filter(c.lL).length
                                    })
                                })
                            ]
                        }),
                        (0, r.jsx)(a.zxk, {
                            variant: 'secondary',
                            onClick: () => {
                                (0, a.ZDy)(async () => {
                                    let { ImportBenefitsFromSubscriptionListingModal: l } = await n.e('31667').then(n.bind(n, 880229));
                                    return (n) =>
                                        (0, r.jsx)(
                                            l,
                                            p(g({}, n), {
                                                fromSubscriptionListing: e,
                                                existingChannelBenefits: t,
                                                existingIntangibleBenefits: i,
                                                onSubmit: h
                                            })
                                        );
                                });
                            },
                            disabled: f,
                            text: u.intl.string(u.t['90bIv7'])
                        })
                    ]
                },
                e.id
            )
        )
    });
}
function f(e) {
    let { guildId: t, onImport: i, disabled: o = !1 } = e;
    return (0, r.jsxs)(a.P3F, {
        className: l()(m.importRoleCard, { [m.disabled]: o }),
        onClick: o
            ? void 0
            : function () {
                  (0, a.ZDy)(async () => {
                      let { ImportBenefitsFromRoleModal: e } = await n.e('31667').then(n.bind(n, 880229));
                      return (n) =>
                          (0, r.jsx)(
                              e,
                              p(g({}, n), {
                                  guildId: t,
                                  onImport: i
                              })
                          );
                  });
              },
        'aria-disabled': o,
        children: [
            (0, r.jsx)(a.lZ8, {
                size: 'custom',
                width: 23,
                height: 23,
                color: 'currentColor',
                className: m.rowIcon
            }),
            (0, r.jsx)(a.Text, {
                variant: 'text-md/normal',
                color: 'header-primary',
                className: m.rowText,
                children: u.intl.string(u.t.xK9pBA)
            }),
            (0, r.jsx)(s.Z, {
                direction: s.Z.Directions.RIGHT,
                className: m.caret
            })
        ]
    });
}
