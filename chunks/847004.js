a.d(t, { Z: () => h }), a(47120);
var n = a(200651),
    l = a(192379),
    i = a(120356),
    s = a.n(i),
    r = a(481060),
    c = a(44315),
    o = a(937615),
    d = a(981631),
    m = a(388032),
    x = a(136615);
function _(e) {
    let { price: t, selected: a, onClick: l } = e;
    return (0, n.jsxs)(r.P3F, {
        className: s()(x.priceRow, { [x.selected]: a }),
        onClick: l,
        children: [
            a
                ? (0, n.jsx)(r.owK, {
                      size: 'custom',
                      width: 20,
                      height: 20,
                      secondaryColor: (0, c.Lq)(d.Ilk.WHITE_500),
                      color: (0, c.Lq)(d.Ilk.BRAND_500)
                  })
                : (0, n.jsx)('svg', {
                      width: '20',
                      height: '20',
                      children: (0, n.jsx)('circle', {
                          cx: 10,
                          cy: 10,
                          r: 10,
                          className: x.circle
                      })
                  }),
            (0, n.jsxs)('div', {
                className: x.priceRowText,
                children: [
                    (0, n.jsx)(r.Text, {
                        variant: 'text-sm/normal',
                        tag: 'span',
                        children: (0, o.T4)(t, d.pKx.USD)
                    }),
                    (0, n.jsx)(r.Text, {
                        variant: 'text-xxs/medium',
                        tag: 'span',
                        children: '/mo.'
                    })
                ]
            })
        ]
    });
}
function h(e) {
    let { selectedTemplate: t, handleSelectTemplate: a, newPricesToPick: i } = e,
        [s, c] = l.useState(0);
    return (0, n.jsxs)('div', {
        className: x.container,
        children: [
            (0, n.jsxs)('div', {
                className: x.content,
                children: [
                    (0, n.jsx)(r.X6q, {
                        variant: 'heading-md/semibold',
                        children: m.intl.format(m.t['5WZ9Cg'], { tierName: t.listings[0].name })
                    }),
                    (0, n.jsx)(r.Text, {
                        variant: 'text-sm/normal',
                        className: x.bodyText,
                        children: m.intl.format(m.t['5i7UhY'], { price: (0, o.T4)(t.listings[0].price_tier, d.pKx.USD) })
                    }),
                    i.map((e, t) =>
                        (0, n.jsx)(
                            _,
                            {
                                price: e,
                                selected: t === s,
                                onClick: () => c(t)
                            },
                            e
                        )
                    )
                ]
            }),
            (0, n.jsx)(r.zxk, {
                size: r.zxk.Sizes.MEDIUM,
                onClick: () => {
                    a({
                        ...t,
                        listings: [
                            {
                                ...t.listings[0],
                                price_tier: i[s]
                            }
                        ]
                    });
                },
                children: m.intl.string(m.t['1W7mCg'])
            })
        ]
    });
}
