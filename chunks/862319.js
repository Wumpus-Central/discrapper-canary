n.d(t, {
    Z: () => x,
    w: () => b
});
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    s = n(755721),
    a = n(481060),
    o = n(259580),
    c = n(73346),
    d = n(817460),
    u = n(723047),
    m = n(880229),
    g = n(388032),
    p = n(748353);
function f(e) {
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
function h(e, t) {
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
function x(e) {
    let { channelBenefits: t, intangibleBenefits: n, subscriptionListings: i, onImport: o } = e,
        x = (0, u.mY)();
    return (0, r.jsx)('div', {
        className: p.container,
        children: i.map((e) =>
            (0, r.jsxs)(
                'div',
                {
                    className: p.row,
                    children: [
                        (0, r.jsx)('img', {
                            alt: '',
                            src: null == e.image_asset ? void 0 : (0, c._W)(e.application_id, e.image_asset, 512),
                            className: l()(p.rowIcon, p.listingImage)
                        }),
                        (0, r.jsxs)('div', {
                            className: p.rowBody,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-md/normal',
                                    color: 'header-primary',
                                    className: l()(p.rowText, p.listingName),
                                    children: e.name
                                }),
                                (0, r.jsx)(a.Text, {
                                    color: 'header-secondary',
                                    variant: 'text-sm/normal',
                                    children: g.intl.format(g.t['QMj+Ii'], {
                                        channels: e.role_benefits.benefits.filter(d.rC).length,
                                        benefits: e.role_benefits.benefits.filter(d.lL).length
                                    })
                                })
                            ]
                        }),
                        (0, r.jsx)(s.zx, {
                            look: s.zx.Looks.OUTLINED,
                            color: s.zx.Colors.PRIMARY,
                            onClick: () => {
                                (0, a.h7j)((i) =>
                                    (0, r.jsx)(
                                        m.K,
                                        h(f({}, i), {
                                            fromSubscriptionListing: e,
                                            existingChannelBenefits: t,
                                            existingIntangibleBenefits: n,
                                            onSubmit: o
                                        })
                                    )
                                );
                            },
                            disabled: x,
                            children: g.intl.string(g.t['90bIv7'])
                        })
                    ]
                },
                e.id
            )
        )
    });
}
function b(e) {
    let { guildId: t, onImport: n, disabled: i = !1 } = e;
    return (0, r.jsxs)(a.P3F, {
        className: l()(p.importRoleCard, { [p.disabled]: i }),
        onClick: i
            ? void 0
            : function () {
                  (0, a.h7j)((e) =>
                      (0, r.jsx)(
                          m.C,
                          h(f({}, e), {
                              guildId: t,
                              onImport: n
                          })
                      )
                  );
              },
        'aria-disabled': i,
        children: [
            (0, r.jsx)(a.lZ8, {
                size: 'custom',
                width: 23,
                height: 23,
                color: 'currentColor',
                className: p.rowIcon
            }),
            (0, r.jsx)(a.Text, {
                variant: 'text-md/normal',
                color: 'header-primary',
                className: p.rowText,
                children: g.intl.string(g.t.xK9pBA)
            }),
            (0, r.jsx)(o.Z, {
                direction: o.Z.Directions.RIGHT,
                className: p.caret
            })
        ]
    });
}
