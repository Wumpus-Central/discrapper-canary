n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(434404),
    o = n(962086),
    a = n(303737),
    s = n(981631),
    c = n(388032),
    u = n(658447),
    d = n(497224);
function p(e) {
    let { guildId: t } = e;
    return (0, r.jsx)('div', {
        className: u.upsellPage,
        children: (0, r.jsxs)('div', {
            className: u.upsellContainer,
            children: [
                (0, r.jsx)('img', {
                    src: d,
                    alt: ''
                }),
                (0, r.jsxs)('div', {
                    className: u.upsellContent,
                    children: [
                        (0, r.jsx)(i.X6q, {
                            variant: 'heading-xl/semibold',
                            children: c.NW.string(c.t['8gJGPj'])
                        }),
                        (0, r.jsx)(i.Text, {
                            variant: 'text-sm/normal',
                            className: u.bodyText,
                            children: c.NW.string(c.t.GpOWIi)
                        }),
                        (0, r.jsx)(i.zxk, {
                            size: i.zxk.Sizes.MEDIUM,
                            onClick: () => {
                                (0, o.mL)(t), l.Z.open(t, s.pNK.ROLE_SUBSCRIPTIONS, void 0, s.KsC.ROLE_SUBSCRIPTION_TIERS), (0, a.GN)(t);
                            },
                            className: u.__invalid_button,
                            children: c.NW.string(c.t['I/XhUl'])
                        })
                    ]
                })
            ]
        })
    });
}
