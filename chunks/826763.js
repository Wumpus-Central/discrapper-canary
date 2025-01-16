n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(434404),
    a = n(962086),
    s = n(303737),
    o = n(981631),
    c = n(388032),
    d = n(166368),
    u = n(497224);
function h(e) {
    let { guildId: t } = e;
    return (0, i.jsx)('div', {
        className: d.upsellPage,
        children: (0, i.jsxs)('div', {
            className: d.upsellContainer,
            children: [
                (0, i.jsx)('img', {
                    src: u,
                    alt: ''
                }),
                (0, i.jsxs)('div', {
                    className: d.upsellContent,
                    children: [
                        (0, i.jsx)(l.Heading, {
                            variant: 'heading-xl/semibold',
                            children: c.intl.string(c.t['8gJGPj'])
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            className: d.bodyText,
                            children: c.intl.string(c.t.GpOWIi)
                        }),
                        (0, i.jsx)(l.Button, {
                            size: l.Button.Sizes.MEDIUM,
                            onClick: () => {
                                (0, a.mL)(t), r.Z.open(t, o.pNK.ROLE_SUBSCRIPTIONS, void 0, o.KsC.ROLE_SUBSCRIPTION_TIERS), (0, s.GN)(t);
                            },
                            className: d.__invalid_button,
                            children: c.intl.string(c.t['I/XhUl'])
                        })
                    ]
                })
            ]
        })
    });
}
