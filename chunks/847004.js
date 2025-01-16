n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var a = n(200651),
    l = n(192379),
    i = n(120356),
    r = n.n(i),
    s = n(481060),
    c = n(44315),
    o = n(937615),
    d = n(981631),
    m = n(388032),
    x = n(59150);
function u(e) {
    let { price: t, selected: n, onClick: l } = e;
    return (0, a.jsxs)(s.Clickable, {
        className: r()(x.priceRow, { [x.selected]: n }),
        onClick: l,
        children: [
            n
                ? (0, a.jsx)(s.CircleCheckIcon, {
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
function h(e) {
    let { selectedTemplate: t, handleSelectTemplate: n, newPricesToPick: i } = e,
        [r, c] = l.useState(0);
    return (0, a.jsxs)('div', {
        className: x.container,
        children: [
            (0, a.jsxs)('div', {
                className: x.content,
                children: [
                    (0, a.jsx)(s.Heading, {
                        variant: 'heading-md/semibold',
                        children: m.intl.format(m.t['5WZ9Cg'], { tierName: t.listings[0].name })
                    }),
                    (0, a.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        className: x.bodyText,
                        children: m.intl.format(m.t['5i7UhY'], { price: (0, o.T4)(t.listings[0].price_tier, d.pKx.USD) })
                    }),
                    i.map((e, t) =>
                        (0, a.jsx)(
                            u,
                            {
                                price: e,
                                selected: t === r,
                                onClick: () => c(t)
                            },
                            e
                        )
                    )
                ]
            }),
            (0, a.jsx)(s.Button, {
                size: s.Button.Sizes.MEDIUM,
                onClick: () => {
                    n({
                        ...t,
                        listings: [
                            {
                                ...t.listings[0],
                                price_tier: i[r]
                            }
                        ]
                    });
                },
                children: m.intl.string(m.t['1W7mCg'])
            })
        ]
    });
}
