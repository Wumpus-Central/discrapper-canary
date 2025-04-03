n.d(t, { Z: () => _ }), n(47120);
var a = n(200651),
    r = n(192379),
    l = n(120356),
    i = n.n(l),
    s = n(481060),
    c = n(44315),
    o = n(937615),
    d = n(981631),
    m = n(388032),
    x = n(888917);
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e) {
    let { price: t, selected: n, onClick: r } = e;
    return (0, a.jsxs)(s.P3F, {
        className: i()(x.priceRow, { [x.selected]: n }),
        onClick: r,
        children: [
            n
                ? (0, a.jsx)(s.owK, {
                      size: 'custom',
                      width: 20,
                      height: 20,
                      secondaryColor: (0, c.Lq)(d.Ilk.WHITE_500),
                      color: (0, c.Lq)(d.Ilk.BRAND_500)
                  })
                : (0, a.jsx)('svg', {
                      width: '20',
                      height: '20',
                      children: (0, a.jsx)('circle', {
                          cx: 10,
                          cy: 10,
                          r: 10,
                          className: x.circle
                      })
                  }),
            (0, a.jsxs)('div', {
                className: x.priceRowText,
                children: [
                    (0, a.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        tag: 'span',
                        children: (0, o.T4)(t, d.pKx.USD)
                    }),
                    (0, a.jsx)(s.Text, {
                        variant: 'text-xxs/medium',
                        tag: 'span',
                        children: '/mo.'
                    })
                ]
            })
        ]
    });
}
function _(e) {
    let { selectedTemplate: t, handleSelectTemplate: n, newPricesToPick: l } = e,
        [i, c] = r.useState(0);
    return (0, a.jsxs)('div', {
        className: x.container,
        children: [
            (0, a.jsxs)('div', {
                className: x.content,
                children: [
                    (0, a.jsx)(s.X6q, {
                        variant: 'heading-md/semibold',
                        children: m.NW.format(m.t['5WZ9Cg'], { tierName: t.listings[0].name })
                    }),
                    (0, a.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        className: x.bodyText,
                        children: m.NW.format(m.t['5i7UhY'], { price: (0, o.T4)(t.listings[0].price_tier, d.pKx.USD) })
                    }),
                    l.map((e, t) =>
                        (0, a.jsx)(
                            p,
                            {
                                price: e,
                                selected: t === i,
                                onClick: () => c(t)
                            },
                            e
                        )
                    )
                ]
            }),
            (0, a.jsx)(s.zxk, {
                size: s.zxk.Sizes.MEDIUM,
                onClick: () => {
                    n(f(u({}, t), { listings: [f(u({}, t.listings[0]), { price_tier: l[i] })] }));
                },
                children: m.NW.string(m.t['1W7mCg'])
            })
        ]
    });
}
