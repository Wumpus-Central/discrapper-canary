n.d(t, {
    Z: () => f,
    w: () => b
});
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(481060),
    l = n(259580),
    o = n(73346),
    c = n(817460),
    d = n(723047),
    u = n(880229),
    m = n(388032),
    g = n(748353);
function p(e) {
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
function f(e) {
    let { channelBenefits: t, intangibleBenefits: n, subscriptionListings: i, onImport: l } = e,
        f = (0, d.mY)();
    return (0, r.jsx)('div', {
        className: g.container,
        children: i.map((e) =>
            (0, r.jsxs)(
                'div',
                {
                    className: g.row,
                    children: [
                        (0, r.jsx)('img', {
                            alt: '',
                            src: null == e.image_asset ? void 0 : (0, o._W)(e.application_id, e.image_asset, 512),
                            className: s()(g.rowIcon, g.listingImage)
                        }),
                        (0, r.jsxs)('div', {
                            className: g.rowBody,
                            children: [
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-md/normal',
                                    color: 'header-primary',
                                    className: s()(g.rowText, g.listingName),
                                    children: e.name
                                }),
                                (0, r.jsx)(a.Text, {
                                    color: 'header-secondary',
                                    variant: 'text-sm/normal',
                                    children: m.NW.format(m.t['QMj+Ii'], {
                                        channels: e.role_benefits.benefits.filter(c.rC).length,
                                        benefits: e.role_benefits.benefits.filter(c.lL).length
                                    })
                                })
                            ]
                        }),
                        (0, r.jsx)(a.zxk, {
                            look: a.zxk.Looks.OUTLINED,
                            color: a.zxk.Colors.PRIMARY,
                            onClick: () => {
                                (0, a.h7j)((i) =>
                                    (0, r.jsx)(
                                        u.K,
                                        h(p({}, i), {
                                            fromSubscriptionListing: e,
                                            existingChannelBenefits: t,
                                            existingIntangibleBenefits: n,
                                            onSubmit: l
                                        })
                                    )
                                );
                            },
                            disabled: f,
                            children: m.NW.string(m.t['90bIv7'])
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
        className: s()(g.importRoleCard, { [g.disabled]: i }),
        onClick: i
            ? void 0
            : function () {
                  (0, a.h7j)((e) =>
                      (0, r.jsx)(
                          u.C,
                          h(p({}, e), {
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
                className: g.rowIcon
            }),
            (0, r.jsx)(a.Text, {
                variant: 'text-md/normal',
                color: 'header-primary',
                className: g.rowText,
                children: m.NW.string(m.t.xK9pBA)
            }),
            (0, r.jsx)(l.Z, {
                direction: l.Z.Directions.RIGHT,
                className: g.caret
            })
        ]
    });
}
