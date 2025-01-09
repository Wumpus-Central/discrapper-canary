n.d(t, {
    Z: function () {
        return g;
    },
    w: function () {
        return x;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    s = n(481060),
    a = n(259580),
    o = n(73346),
    c = n(817460),
    d = n(723047),
    u = n(880229),
    m = n(388032),
    h = n(958078);
function g(e) {
    let { channelBenefits: t, intangibleBenefits: n, subscriptionListings: r, onImport: a } = e,
        g = (0, d.mY)();
    return (0, i.jsx)('div', {
        className: h.container,
        children: r.map((e) =>
            (0, i.jsxs)(
                'div',
                {
                    className: h.row,
                    children: [
                        (0, i.jsx)('img', {
                            alt: '',
                            src: null == e.image_asset ? void 0 : (0, o._W)(e.application_id, e.image_asset, 512),
                            className: l()(h.rowIcon, h.listingImage)
                        }),
                        (0, i.jsxs)('div', {
                            className: h.rowBody,
                            children: [
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-md/normal',
                                    color: 'header-primary',
                                    className: l()(h.rowText, h.listingName),
                                    children: e.name
                                }),
                                (0, i.jsx)(s.Text, {
                                    color: 'header-secondary',
                                    variant: 'text-sm/normal',
                                    children: m.intl.format(m.t['QMj+Ii'], {
                                        channels: e.role_benefits.benefits.filter(c.rC).length,
                                        benefits: e.role_benefits.benefits.filter(c.lL).length
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)(s.Button, {
                            look: s.Button.Looks.OUTLINED,
                            color: s.Button.Colors.PRIMARY,
                            onClick: () => {
                                var r;
                                return (
                                    (r = e),
                                    void (0, s.openModal)((e) =>
                                        (0, i.jsx)(u.K, {
                                            ...e,
                                            fromSubscriptionListing: r,
                                            existingChannelBenefits: t,
                                            existingIntangibleBenefits: n,
                                            onSubmit: a
                                        })
                                    )
                                );
                            },
                            disabled: g,
                            children: m.intl.string(m.t['90bIv7'])
                        })
                    ]
                },
                e.id
            )
        )
    });
}
function x(e) {
    let { guildId: t, onImport: n, disabled: r = !1 } = e;
    return (0, i.jsxs)(s.Clickable, {
        className: l()(h.importRoleCard, { [h.disabled]: r }),
        onClick: r
            ? void 0
            : function () {
                  (0, s.openModal)((e) =>
                      (0, i.jsx)(u.C, {
                          ...e,
                          guildId: t,
                          onImport: n
                      })
                  );
              },
        'aria-disabled': r,
        children: [
            (0, i.jsx)(s.ShieldUserIcon, {
                size: 'custom',
                width: 23,
                height: 23,
                color: 'currentColor',
                className: h.rowIcon
            }),
            (0, i.jsx)(s.Text, {
                variant: 'text-md/normal',
                color: 'header-primary',
                className: h.rowText,
                children: m.intl.string(m.t.xK9pBA)
            }),
            (0, i.jsx)(a.Z, {
                direction: a.Z.Directions.RIGHT,
                className: h.caret
            })
        ]
    });
}
